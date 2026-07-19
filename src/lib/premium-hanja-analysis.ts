import OpenAI from "openai";

import {
  renderPremiumHanjaReport,
  type PremiumHanjaReportData,
} from "@/lib/pdf/premium-hanja-report";
import { calculatePremiumSaju } from "@/lib/saju/engine";

type UnknownRecord = Record<string, unknown>;

function record(value: unknown): UnknownRecord {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : {};
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function number(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function records(value: unknown) {
  return Array.isArray(value) ? value.map(record).filter((item) => Object.keys(item).length) : [];
}

function birthHour(value: unknown) {
  const raw = text(value);
  if (!raw || raw === "unknown") return null;
  const [start, end] = raw.split("-").map(Number);
  if (!Number.isInteger(start) || !Number.isInteger(end)) return null;
  if (start === 23 && end === 1) return 0;
  return (start + 1) % 24;
}

function parseJsonObject(value: string) {
  const parsed = JSON.parse(value) as unknown;
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("상세 분석 응답 형식이 올바르지 않습니다.");
  }
  return parsed as UnknownRecord;
}

export type PremiumHanjaTestResult = {
  reportData: PremiumHanjaReportData;
  interpretation: {
    sajuOverview: string;
    fiveElementsAnalysis: string;
    namingBalance: string;
    candidateSummary: string;
    story: string;
    practicalUse: string;
  };
  analysisSource: "openai" | "rules-fallback";
};

export async function buildPremiumHanjaTestResult(
  inputFactors: UnknownRecord,
  freeResult: unknown,
): Promise<PremiumHanjaTestResult> {
  const year = number(inputFactors.birthYear);
  const month = number(inputFactors.birthMonth);
  const day = number(inputFactors.birthDay);
  if (!year || !month || !day) {
    throw new Error("정교한 사주 분석 테스트에는 출생 연·월·일이 모두 필요합니다.");
  }

  const resultRecord = record(freeResult);
  const primary = records(resultRecord.candidates)[0];
  if (!primary) throw new Error("상세 분석에 사용할 한자 후보가 없습니다.");

  const familyName = text(inputFactors.familyName);
  const givenName = text(inputFactors.givenNameHangul);
  const displayName = `${familyName}${givenName}`;
  const hanjaName = text(primary.hanja);
  const characters = records(primary.character_breakdown).map((item) => ({
    hangul: text(item.syllable),
    hanja: text(item.character),
    meaning: text(item.meaning),
    officialReadingConfirmed: Boolean(text(item.designated_reading)),
  }));

  if (!hanjaName || !characters.length) {
    throw new Error("한자 후보의 공식 음가 정보를 확인할 수 없습니다.");
  }

  const saju = calculatePremiumSaju({
    calendarType: text(inputFactors.calendarType) === "lunar" ? "lunar" : "solar",
    year,
    month,
    day,
    lunarLeapMonth: inputFactors.lunarLeapMonth === true,
    birthHour:
      inputFactors.birthTimeKnown === false
        ? null
        : number(inputFactors.premiumBirthHour) ?? birthHour(inputFactors.birthHour),
    birthMinute:
      inputFactors.birthTimeKnown === false
        ? null
        : number(inputFactors.premiumBirthMinute) ?? 0,
    longitude: number(inputFactors.longitude) ?? 126.978,
    birthplaceLabel: text(inputFactors.birthplaceLabel) || "서울",
    timeZone: "Asia/Seoul",
  });

  const fallback = {
    sajuOverview: `입력한 출생 정보를 기준으로 년주 ${saju.pillars.year.hanja}, 월주 ${saju.pillars.month.hanja}, 일주 ${saju.pillars.day.hanja}${saju.pillars.hour ? `, 시주 ${saju.pillars.hour.hanja}` : ""}로 계산했습니다.`,
    fiveElementsAnalysis: `표면 오행 분포는 목 ${saju.visibleFiveElements.counts.WOOD}, 화 ${saju.visibleFiveElements.counts.FIRE}, 토 ${saju.visibleFiveElements.counts.EARTH}, 금 ${saju.visibleFiveElements.counts.METAL}, 수 ${saju.visibleFiveElements.counts.WATER}입니다. 개수만으로 특정 오행의 보완 필요성을 단정하지 않습니다.`,
    namingBalance: "사주 원국과 오행 분포는 전통 명리 관점의 참고 자료이며, 한자의 공식 음가와 뜻, 가족의 바람을 함께 살펴 이름 후보를 해석합니다.",
    candidateSummary: `${characters.map((item) => `${item.hanja}(${item.meaning})`).join("·")} 조합입니다.`,
    story: characters.map((item) => `${item.hanja}은 '${item.meaning}'의 뜻을 지닙니다.`).join(" "),
    practicalUse: "각 글자의 지정 음가와 사전 뜻을 기준으로 이름의 의미를 설명할 수 있습니다. 최종 출생신고 전에는 신고 시점의 공식 인명용 한자 조회를 다시 확인해야 합니다.",
  };

  let interpretation = fallback;
  let analysisSource: PremiumHanjaTestResult["analysisSource"] = "rules-fallback";
  if (process.env.OPENAI_API_KEY) {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.65,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "당신은 한국 이름의 한자 의미와 전통 명리 참고 정보를 설명하는 전문 에디터입니다.",
            "제공된 사주팔자, 오행 개수, 한자, 지정 음가를 절대 변경하거나 새 후보를 만들지 마십시오.",
            "각 문단은 구체적이고 서로 다른 관점으로 쓰며 상투적인 반복을 피하십시오.",
            "오행이 적다는 이유만으로 반드시 보완해야 한다거나 운명·성격을 단정하지 마십시오.",
            "공식 자료 기준 후보이지만 최종 등록 가능 여부는 신고 시점에 다시 확인해야 한다고 안내하십시오.",
            "JSON 필드는 sajuOverview, fiveElementsAnalysis, namingBalance, candidateSummary, story, practicalUse입니다.",
            "sajuOverview와 fiveElementsAnalysis는 각각 3~5문장, namingBalance와 story는 각각 4~6문장, 나머지는 2~4문장으로 작성하십시오.",
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            displayName,
            fixedHanjaCandidate: { hanjaName, characters },
            parentWishes: text(inputFactors.parentWishes) || null,
            excludedMeanings: text(inputFactors.excludedMeanings) || null,
            saju,
          }),
        },
      ],
    });
    const content = completion.choices[0]?.message?.content;
    if (content) {
      const parsed = parseJsonObject(content);
      interpretation = {
        sajuOverview: text(parsed.sajuOverview) || fallback.sajuOverview,
        fiveElementsAnalysis: text(parsed.fiveElementsAnalysis) || fallback.fiveElementsAnalysis,
        namingBalance: text(parsed.namingBalance) || fallback.namingBalance,
        candidateSummary: text(parsed.candidateSummary) || fallback.candidateSummary,
        story: text(parsed.story) || fallback.story,
        practicalUse: text(parsed.practicalUse) || fallback.practicalUse,
      };
      analysisSource = "openai";
    }
  }

  const generatedAt = new Date();
  const expiresAt = new Date(generatedAt.getTime() + 24 * 60 * 60 * 1000);
  const reportData: PremiumHanjaReportData = {
    reportId: `NL-TEST-${generatedAt.getTime()}`,
    generatedAt: generatedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    childNameHangul: displayName,
    parentWishes: text(inputFactors.parentWishes) || null,
    excludedMeanings: text(inputFactors.excludedMeanings) || null,
    saju,
    primaryCandidate: {
      displayName,
      hanjaName,
      focusLabel: "사주·오행 종합 참고안",
      summary: interpretation.candidateSummary,
      characters,
      story: interpretation.story,
      practicalUse: interpretation.practicalUse,
      officialSourceLabel: "서비스에 등록된 공식 인명용 한자 자료의 지정 음가 후보를 기준으로 했으며, 신고 시점에 공식 조회를 다시 확인해야 합니다.",
    },
  };

  return { reportData, interpretation, analysisSource };
}

export async function renderPremiumHanjaTestPdf(data: PremiumHanjaReportData) {
  return renderPremiumHanjaReport(data);
}
