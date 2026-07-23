import "server-only";

import OpenAI from "openai";

import { birthHourRangeToHour } from "@/lib/birth-hour";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import type { ReportFontSnapshot } from "@/lib/report-fonts-registry";
import { calculatePremiumSaju } from "@/lib/saju/engine";

// 글로벌 프리미엄 PDF(GLOBAL_NAME_PDF)의 분석 데이터 생성.
// 구성(2026-07-23 사용자 확정): 한자 의미 매칭 프리미엄과 동일하게 **전체 후보(최대 5개)**
// 각각의 상세 해설 + 사주·오행 종합. 후보별 해설은 병렬 호출로 생성한다(전체 시간 단축).
// 원칙(데이터 근거): 모델에는 주문 시 저장된 입력값·후보 데이터·서버 계산 사주 요약만 주입.
// 설명 언어는 outputLanguage를 언어명으로 시스템 프롬프트에 직접 보간해 강제한다.

export type GlobalNameCandidateReport = {
  name: { hangul: string; romanized: string };
  sections: {
    meaningBreakdown: Array<{ syllable: string; meaning: string }>;
    whyThisName: string;
    soundConnection: string;
    pronunciationTips: string;
    culturalNotes: string;
    usageGuide: string;
  };
};

export type GlobalNameReportData = {
  reportId: string;
  generatedAt: string;
  outputLanguage: string;
  original: { name: string; country: string };
  analysisSummary: string;
  fonts: ReportFontSnapshot[];
  candidates: GlobalNameCandidateReport[];
  saju: {
    engineName: string;
    engineVersion: string;
    birthLabel: string;
    dayMaster: string;
    counts: Array<{ element: string; label: string; count: number }>;
    dominant: string;
    weakest: string;
    overview: string;
    nameAlignment: string;
  } | null;
};

export type GlobalNamePremiumResult = {
  entitlement: { productCode: "GLOBAL_NAME_PDF"; includesPdf: true };
  reportData: GlobalNameReportData;
};

const ELEMENT_LABELS: Record<string, string> = {
  WOOD: "Wood 목",
  FIRE: "Fire 화",
  EARTH: "Earth 토",
  METAL: "Metal 금",
  WATER: "Water 수",
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

// 후보의 pronunciation에서 로마자 표기만 추린다("로마자 / 한글" 혼합 형식 대비).
function romanizedOf(candidate: Record<string, unknown>) {
  const pronunciation = text(candidate.pronunciation);
  const romanPart = pronunciation
    .split("/")
    .map((part) => part.trim())
    .find((part) => part.length > 0 && !/[가-힣]/.test(part));
  return romanPart ?? pronunciation;
}

function buildSajuCalculation(inputFactors: Record<string, unknown>) {
  const year = Number(inputFactors.birthYear);
  const month = Number(inputFactors.birthMonth);
  const day = Number(inputFactors.birthDay);
  if (!year || !month || !day) return null;
  try {
    const birthHour = birthHourRangeToHour(inputFactors.birthHour);
    // 해외 출생지는 수집하지 않으므로 시간 보정 없이 서울 기준(기존 KOREAN_TO_GLOBAL 참고와 동일).
    const saju = calculatePremiumSaju({
      calendarType: "solar",
      year,
      month,
      day,
      lunarLeapMonth: false,
      birthHour,
      birthMinute: birthHour === null ? null : 0,
      longitude: 126.978,
      birthplaceLabel: "서울",
      timeZone: "Asia/Seoul",
    });
    const counts = saju.visibleFiveElements.counts;
    const entries = Object.entries(counts) as [keyof typeof counts, number][];
    const max = Math.max(...entries.map(([, count]) => count));
    const min = Math.min(...entries.map(([, count]) => count));
    const names = (value: number) =>
      entries
        .filter(([, count]) => count === value)
        .map(([key]) => ELEMENT_LABELS[key] ?? key)
        .join(" · ");
    return {
      engineName: String(saju.engine?.name ?? "saju-engine"),
      engineVersion: String(saju.engine?.version ?? "1"),
      birthLabel: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}${
        birthHour === null ? "" : ` ${String(birthHour).padStart(2, "0")}:00`
      }`,
      // PDF 폰트에 한자 글리프가 없어 일간은 오행 표기로만 나타낸다.
      dayMaster: ELEMENT_LABELS[String(saju.dayMaster.element)] ?? String(saju.dayMaster.elementLabel),
      counts: entries.map(([key, count]) => ({
        element: key,
        label: ELEMENT_LABELS[key] ?? key,
        count,
      })),
      dominant: names(max),
      weakest: names(min),
    };
  } catch {
    return null;
  }
}

const LANGUAGE_RULE = (languageName: string) =>
  `Language rule (mandatory): write every field entirely in ${languageName}. Never use Korean or English unless that IS the requested language. Only Hangul name strings stay in Hangul.`;

function parseJson(content: string | null | undefined) {
  try {
    return JSON.parse(content ?? "{}") as Record<string, unknown>;
  } catch {
    return {};
  }
}

export async function buildGlobalNamePremiumResult(payload: {
  inputFactors: Record<string, unknown>;
  candidates: Array<Record<string, unknown>>;
  fonts?: ReportFontSnapshot[];
  outputLanguage: string;
  reportId: string;
}): Promise<GlobalNamePremiumResult> {
  const { inputFactors, reportId } = payload;
  const candidates = payload.candidates.filter((candidate) => text(candidate.hangul));
  if (candidates.length === 0) throw new Error("리포트로 만들 후보가 없습니다.");
  const outputLanguage = OUTPUT_LANGUAGE_NAMES[payload.outputLanguage]
    ? payload.outputLanguage
    : "en";
  const languageName = OUTPUT_LANGUAGE_NAMES[outputLanguage];
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("AI 분석 기능이 준비되지 않았습니다.");
  }

  const sajuCalculation = buildSajuCalculation(inputFactors);
  const sharedGrounding = {
    originalName: text(inputFactors.originalName),
    country: text(inputFactors.country),
    gender: text(inputFactors.gender) || null,
    nameMotivation: text(inputFactors.nameMotivation) || null,
    koreanTone: text(inputFactors.koreanTone) || null,
    usageContext: text(inputFactors.usageContext) || null,
    sajuReference: sajuCalculation
      ? {
          counts: sajuCalculation.counts.map(({ label, count }) => `${label}: ${count}`).join(", "),
          dominant: sajuCalculation.dominant,
          weakest: sajuCalculation.weakest,
          dayMaster: sajuCalculation.dayMaster,
          note: "Surface five-element tally for symbolic connection only, not fortune-telling.",
        }
      : null,
  };
  const candidateGrounding = (candidate: Record<string, unknown>) => ({
    hangul: text(candidate.hangul),
    pronunciation: text(candidate.pronunciation),
    meaning: text(candidate.meaning),
    recommendationReason: text(candidate.recommendation_reason),
    culturalFit: text(candidate.cultural_fit),
    usageNote: text(candidate.usage_note),
  });

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 40_000, maxRetries: 1 });
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  // 후보별 상세 해설(병렬) — 한 번의 큰 호출은 타임아웃 위험이 있어 후보 단위로 나눈다.
  const candidateCall = async (candidate: Record<string, unknown>) => {
    const grounding = candidateGrounding(candidate);
    const completion = await openai.chat.completions.create({
      model,
      temperature: 0.5,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "You are a premium Korean naming consultant writing the detailed section about ONE Korean name candidate in a paid keepsake report.",
            "Ground every statement ONLY in the provided input data (candidate fields, original name, usage context, sajuReference). Never invent meanings, hanja, or facts not in the input. If a connection is not supported by the data, describe the name's qualities without claiming that connection.",
            "Write warmly and concretely in second person. No fortune-telling or promises of luck.",
            "Return valid JSON: { meaning_breakdown: [{ syllable, meaning }], why_this_name, sound_connection, pronunciation_tips, cultural_notes, usage_guide }.",
            "meaning_breakdown: one entry per Hangul syllable of the candidate name (family-name syllable included), each grounded in the candidate meaning or a factual note about its role.",
            "why_this_name: why this name suits this person. sound_connection: how it echoes the original name's sound, honestly (if no real sound link, say it was chosen for naturalness). pronunciation_tips: how to pronounce it, syllable by syllable, for a speaker of the report language. cultural_notes: how the name is perceived in Korea. usage_guide: where and how to use it.",
            LANGUAGE_RULE(languageName),
          ].join(" "),
        },
        {
          role: "user",
          content: `Shared context:\n${JSON.stringify(sharedGrounding, null, 2)}\n\nCandidate:\n${JSON.stringify(grounding, null, 2)}`,
        },
      ],
    });
    const parsed = parseJson(completion.choices[0]?.message?.content);
    const breakdownRaw = Array.isArray(parsed.meaning_breakdown) ? parsed.meaning_breakdown : [];
    const meaningBreakdown = breakdownRaw
      .map((entry) => {
        const record = entry && typeof entry === "object" ? (entry as Record<string, unknown>) : {};
        return { syllable: text(record.syllable), meaning: text(record.meaning) };
      })
      .filter((entry) => entry.syllable.length > 0);
    return {
      name: { hangul: grounding.hangul, romanized: romanizedOf(candidate) },
      sections: {
        meaningBreakdown:
          meaningBreakdown.length > 0
            ? meaningBreakdown
            : [...grounding.hangul].map((syllable) => ({ syllable, meaning: "" })),
        whyThisName: text(parsed.why_this_name),
        soundConnection: text(parsed.sound_connection),
        pronunciationTips: text(parsed.pronunciation_tips),
        culturalNotes: text(parsed.cultural_notes),
        usageGuide: text(parsed.usage_guide),
      },
    } satisfies GlobalNameCandidateReport;
  };

  // 종합(개요 + 사주 해석) 호출 — 후보 전체를 함께 본다.
  const overviewCall = async () => {
    const completion = await openai.chat.completions.create({
      model,
      temperature: 0.5,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "You are a premium Korean naming consultant writing the overview of a paid keepsake report that covers ALL Korean name candidates for one person.",
            "Ground every statement ONLY in the provided data. No fortune-telling; saju content is symbolic reference only.",
            "Return valid JSON: { analysis_summary, saju_overview, saju_name_alignment }.",
            "analysis_summary: 3-5 sentences introducing how the candidate set connects to the original name, purpose and tone.",
            "saju_overview and saju_name_alignment: ONLY when sajuReference exists — explain the five-element balance and how the candidate names symbolically align, quoting the given counts/dominant/weakest/dayMaster verbatim. When sajuReference is null, return empty strings for both.",
            LANGUAGE_RULE(languageName),
          ].join(" "),
        },
        {
          role: "user",
          content: `Shared context:\n${JSON.stringify(sharedGrounding, null, 2)}\n\nCandidates:\n${JSON.stringify(
            candidates.map(candidateGrounding),
            null,
            2,
          )}`,
        },
      ],
    });
    return parseJson(completion.choices[0]?.message?.content);
  };

  const [overview, ...candidateReports] = await Promise.all([
    overviewCall(),
    ...candidates.map((candidate) => candidateCall(candidate)),
  ]);

  return {
    entitlement: { productCode: "GLOBAL_NAME_PDF", includesPdf: true },
    reportData: {
      reportId,
      generatedAt: new Date().toISOString(),
      outputLanguage,
      original: { name: sharedGrounding.originalName, country: sharedGrounding.country },
      analysisSummary: text(overview.analysis_summary),
      fonts: payload.fonts ?? [],
      candidates: candidateReports,
      saju: sajuCalculation
        ? {
            ...sajuCalculation,
            overview: text(overview.saju_overview),
            nameAlignment: text(overview.saju_name_alignment),
          }
        : null,
    },
  };
}
