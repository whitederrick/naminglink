import "server-only";

import OpenAI from "openai";

import { birthHourRangeToHour } from "@/lib/birth-hour";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import { calculatePremiumSaju } from "@/lib/saju/engine";

// 글로벌 프리미엄 PDF(GLOBAL_NAME_PDF)의 분석 데이터 생성.
// 원칙(데이터 근거): 모델에는 주문 시 저장된 입력값·선택 후보·서버 계산 사주 요약만 주입하고,
// 그 데이터만 근거로 서술하게 한다. 설명 언어는 outputLanguage를 시스템 프롬프트에
// 언어명으로 직접 보간해 강제한다(코드만 주면 gpt-4o-mini가 무시하는 사례가 확인됨).

export type GlobalNameReportData = {
  reportId: string;
  generatedAt: string;
  outputLanguage: string;
  name: { hangul: string; romanized: string };
  original: { name: string; country: string };
  sections: {
    analysisSummary: string;
    meaningBreakdown: Array<{ syllable: string; meaning: string }>;
    whyThisName: string;
    soundConnection: string;
    pronunciationTips: string;
    culturalNotes: string;
    usageGuide: string;
  };
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
      // PDF 폰트(NotoSansKR)에 한자 글리프가 없어 일간은 오행 표기로만 나타낸다.
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

export async function buildGlobalNamePremiumResult(payload: {
  inputFactors: Record<string, unknown>;
  candidate: Record<string, unknown>;
  outputLanguage: string;
  reportId: string;
}): Promise<GlobalNamePremiumResult> {
  const { inputFactors, candidate, reportId } = payload;
  const outputLanguage = OUTPUT_LANGUAGE_NAMES[payload.outputLanguage]
    ? payload.outputLanguage
    : "en";
  const languageName = OUTPUT_LANGUAGE_NAMES[outputLanguage];
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("AI 분석 기능이 준비되지 않았습니다.");
  }

  const hangul = text(candidate.hangul);
  const sajuCalculation = buildSajuCalculation(inputFactors);
  const grounding = {
    originalName: text(inputFactors.originalName),
    country: text(inputFactors.country),
    gender: text(inputFactors.gender) || null,
    nameMotivation: text(inputFactors.nameMotivation) || null,
    koreanTone: text(inputFactors.koreanTone) || null,
    usageContext: text(inputFactors.usageContext) || null,
    chosenName: {
      hangul,
      pronunciation: text(candidate.pronunciation),
      meaning: text(candidate.meaning),
      recommendationReason: text(candidate.recommendation_reason),
      culturalFit: text(candidate.cultural_fit),
      usageNote: text(candidate.usage_note),
    },
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

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 40_000, maxRetries: 1 });
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    temperature: 0.5,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: [
          "You are a premium Korean naming consultant writing the text for a paid keepsake report about ONE chosen Korean name.",
          "Ground every statement ONLY in the provided input data (chosenName fields, original name, usage context, sajuReference). Never invent meanings, hanja, or facts that are not in the input. If a connection is not supported by the data, describe the name's qualities without claiming that connection.",
          "Write warmly and concretely for the person who will keep this report, in second person. No fortune-telling, no promises of luck or success; saju content is symbolic reference only.",
          "Return valid JSON: { analysis_summary, meaning_breakdown: [{ syllable, meaning }], why_this_name, sound_connection, pronunciation_tips, cultural_notes, usage_guide, saju_overview, saju_name_alignment }.",
          "meaning_breakdown: one entry per Hangul syllable of chosenName.hangul (family name syllable included), each meaning grounded in chosenName.meaning or, when the input gives no meaning for that syllable, a factual note about its role (e.g. common Korean family name).",
          "analysis_summary: 3-4 sentences. why_this_name: why this name suits this person (sound, meaning, context) — cite only input data. sound_connection: how the Korean name echoes the original name's sound, honestly (if there is no real sound link, say the name was chosen for naturalness instead). pronunciation_tips: how to pronounce the Hangul name, syllable by syllable, for a speaker of the report language. cultural_notes: how the name is perceived in Korea. usage_guide: where and how to use it (from usageContext).",
          "saju_overview and saju_name_alignment: ONLY when sajuReference exists — explain the five-element balance and how the name symbolically aligns, quoting the given counts/dominant/weakest/dayMaster verbatim. When sajuReference is null, return empty strings for both.",
          `Language rule (mandatory): write every field entirely in ${languageName}. Never use Korean or English unless that IS the requested language. Only Hangul name strings stay in Hangul.`,
        ].join(" "),
      },
      {
        role: "user",
        content: `Report input data:\n${JSON.stringify(grounding, null, 2)}`,
      },
    ],
  });

  const parsed = JSON.parse(completion.choices[0]?.message?.content ?? "{}") as Record<string, unknown>;
  const breakdownRaw = Array.isArray(parsed.meaning_breakdown) ? parsed.meaning_breakdown : [];
  const meaningBreakdown = breakdownRaw
    .map((entry) => {
      const record = entry && typeof entry === "object" ? (entry as Record<string, unknown>) : {};
      return { syllable: text(record.syllable), meaning: text(record.meaning) };
    })
    .filter((entry) => entry.syllable.length > 0);

  return {
    entitlement: { productCode: "GLOBAL_NAME_PDF", includesPdf: true },
    reportData: {
      reportId,
      generatedAt: new Date().toISOString(),
      outputLanguage,
      name: { hangul, romanized: romanizedOf(candidate) },
      original: { name: grounding.originalName, country: grounding.country },
      sections: {
        analysisSummary: text(parsed.analysis_summary),
        meaningBreakdown:
          meaningBreakdown.length > 0
            ? meaningBreakdown
            : [...hangul].map((syllable) => ({ syllable, meaning: "" })),
        whyThisName: text(parsed.why_this_name),
        soundConnection: text(parsed.sound_connection),
        pronunciationTips: text(parsed.pronunciation_tips),
        culturalNotes: text(parsed.cultural_notes),
        usageGuide: text(parsed.usage_guide),
      },
      saju: sajuCalculation
        ? {
            ...sajuCalculation,
            overview: text(parsed.saju_overview),
            nameAlignment: text(parsed.saju_name_alignment),
          }
        : null,
    },
  };
}
