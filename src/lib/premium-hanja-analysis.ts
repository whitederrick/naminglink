import OpenAI from "openai";

import {
  renderPremiumHanjaReport,
  type PremiumHanjaReportCandidate,
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
  return Array.isArray(value)
    ? value.map(record).filter((item) => Object.keys(item).length)
    : [];
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

function sentenceCount(value: string) {
  return value
    .split(/[.!?](?:\s|$)/)
    .map((sentence) => sentence.trim())
    .filter(Boolean).length;
}

function detailedText(value: unknown, fallback: string, minimumSentences: number) {
  const candidate = text(value);
  return sentenceCount(candidate) >= minimumSentences ? candidate : fallback;
}

const unsupportedPredictionPattern =
  /성격|운명|긍정적인 영향|좋은 인상|학업|직업적|성취|어려움.{0,12}극복|영감을|약점|감정.{0,12}조절|직관력|기여할 가능성|삶을 살게|될 것입니다/;

function safeDetailedText(
  value: unknown,
  fallback: string,
  minimumSentences: number,
) {
  const candidate = text(value);
  return unsupportedPredictionPattern.test(candidate)
    ? fallback
    : detailedText(candidate, fallback, minimumSentences);
}

function subjectParticle(value: string) {
  const last = Array.from(value).at(-1) ?? "";
  const code = last.charCodeAt(0);
  const hasFinal = code >= 0xac00 && code <= 0xd7a3 && (code - 0xac00) % 28 !== 0;
  return hasFinal ? "이" : "가";
}

type CandidateAnalysis = {
  hanjaName: string;
  summary: string;
  story: string;
  practicalUse: string;
  selectionGuide: string;
  meaningCaution: string;
  sajuConnection: string | null;
};

export type PremiumHanjaTestResult = {
  reportData: PremiumHanjaReportData;
  interpretation: {
    sajuOverview: string;
    fiveElementsAnalysis: string;
    namingBalance: string;
    candidateComparison: string;
    candidateSummary: string;
    story: string;
    practicalUse: string;
    candidateAnalyses: CandidateAnalysis[];
  };
  analysisSource: "openai" | "rules-fallback";
};

type BuildOptions = {
  candidateLimit?: 5 | 10;
  includeSaju?: boolean;
};

function baseCandidate(
  candidate: UnknownRecord,
  displayName: string,
  index: number,
): PremiumHanjaReportCandidate {
  const hanjaName = text(candidate.hanja);
  const characters = records(candidate.character_breakdown).map((item) => ({
    hangul: text(item.syllable),
    hanja: text(item.character),
    meaning: text(item.meaning),
    elementLabel: text(item.elementLabel) || null,
    originLabel: text(item.origin_label) || null,
    officialReadingConfirmed: Boolean(text(item.designated_reading)),
  }));
  const meaningPath = characters.map((item) => item.meaning).filter(Boolean);
  return {
    displayName,
    hanjaName,
    focusLabel: text(candidate.recommendation_focus) || `후보 ${index + 1}`,
    summary:
      text(candidate.recommendation_reason) ||
      `${characters.map((item) => `${item.hanja}(${item.meaning})`).join("·")}의 자의를 결합한 후보입니다.`,
    characters,
    story:
      text(candidate.story) ||
      characters.map((item) => `${item.hanja}은 '${item.meaning}'의 뜻을 지닙니다.`).join(" "),
    practicalUse:
      text(candidate.practical_analysis) ||
      `${meaningPath.join("에서 ")}로 이어지는 의미 구조로 이름을 설명할 수 있습니다.`,
    selectionGuide: `${meaningPath.join("·")}의 가치를 이름에서 직접적으로 드러내고 싶은 경우 검토할 수 있는 후보입니다. 첫 글자의 뜻이 이름의 출발 이미지를 어떻게 만드는지 살펴야 합니다. 둘째 글자의 뜻이 그 이미지를 자연스럽게 이어 주는지도 확인해야 합니다. 마지막으로 두 자의를 한 문장으로 설명했을 때 가족이 담고 싶은 가치와 맞는지 다른 후보와 나란히 비교할 수 있습니다.`,
    meaningCaution: `사전 뜻은 상징적 의미를 설명하는 자료이며 이름 사용자의 성격이나 미래를 결정하지 않습니다. '${meaningPath.join("·")}'의 현대적 인상이 가족과 주변 사용자에게 어떻게 받아들여지는지도 함께 살펴야 합니다.`,
    sajuConnection: null,
    officialSourceLabel:
      "서비스에 등록된 공식 인명용 한자 자료의 지정 음가 후보를 기준으로 했으며, 신고 시점에 공식 조회를 다시 확인해야 합니다.",
  };
}

function elementContext(saju: ReturnType<typeof calculatePremiumSaju>) {
  const entries = Object.entries(saju.visibleFiveElements.counts).map(([key, count]) => ({
    label: saju.visibleFiveElements.labels[key as keyof typeof saju.visibleFiveElements.labels],
    count,
  }));
  const highest = [...entries].sort((a, b) => b.count - a.count)[0];
  const lowestCount = Math.min(...entries.map((item) => item.count));
  const lowest = entries.filter((item) => item.count === lowestCount).map((item) => item.label).join("·");
  return { highest, lowest };
}

function fallbackCandidateAnalysis(
  candidate: PremiumHanjaReportCandidate,
  saju: ReturnType<typeof calculatePremiumSaju> | null,
): CandidateAnalysis {
  const meanings = candidate.characters.map((item) => item.meaning).filter(Boolean);
  const characterDetails = candidate.characters
    .map((item) => `${item.hanja}은 '${item.meaning}'의 뜻을 지닙니다`)
    .join(". ");
  const connection = saju
    ? (() => {
        const context = elementContext(saju);
        return `표면 오행에서는 ${context.highest.label}${subjectParticle(context.highest.label)} ${context.highest.count}개로 가장 많이 나타나고 ${context.lowest}${subjectParticle(context.lowest)} 가장 적게 나타납니다. 일간 ${saju.dayMaster.character}(${saju.dayMaster.elementLabel})을 기준으로 이 분포가 어떤 환경을 만드는지 참고합니다. 이 후보는 ${meanings.map((meaning) => `'${meaning}'`).join("과 ")}의 자의를 통해 이름의 상징적 방향을 제시합니다. 각 한자의 검수된 오행 분류가 없는 상태에서는 이 글자들이 특정 오행을 직접 보완한다고 단정하지 않습니다. 따라서 원국의 균형과 자의의 조화를 함께 비교하는 의미 참고안으로 해석합니다.`;
      })()
    : null;
  return {
    hanjaName: candidate.hanjaName,
    summary: `${candidate.characters.map((item) => `${item.hanja}(${item.meaning})`).join("·")}을 조합해 ${meanings.join("과 ")}의 의미를 담은 이름입니다.`,
    story: `${characterDetails}. 첫 글자의 자의는 이름의 출발 이미지를 만듭니다. 둘째 글자의 자의는 그 이미지를 이어 받아 의미의 방향을 구체화합니다. 두 자의를 함께 읽으면 ${meanings.join("에서 ")}로 이어지는 의미 흐름이 형성됩니다.`,
    practicalUse: `${candidate.displayName}을 ${candidate.hanjaName}으로 표기할 수 있습니다. 첫 음절에는 ${candidate.characters[0]?.hanja}의 '${candidate.characters[0]?.meaning}' 뜻을 사용했다고 설명합니다. 둘째 음절에는 ${candidate.characters[1]?.hanja}의 '${candidate.characters[1]?.meaning}' 뜻을 사용했다고 설명합니다. 두 글자를 함께 소개할 때에는 ${meanings.join("에서 ")}로 이어지는 의미라고 풀어 말할 수 있습니다.`,
    selectionGuide: candidate.selectionGuide || `${meanings.join("·")}의 의미를 이름의 중심 가치로 삼고 싶은 경우 우선 비교할 수 있습니다. 첫 글자가 만드는 인상이 가족의 바람과 맞는지 확인해야 합니다. 둘째 글자가 의미를 자연스럽게 확장하는지도 살펴야 합니다. 두 자의를 한 문장으로 설명했을 때 과장 없이 이해되는지를 최종 판단 기준으로 삼을 수 있습니다.`,
    meaningCaution: candidate.meaningCaution || `자의는 상징적 해석이며 이름 사용자의 성격이나 미래를 단정하지 않습니다. ${meanings.join("·")}의 현대적 어감과 가족의 선호를 함께 살펴야 합니다.`,
    sajuConnection: connection,
  };
}

export async function buildPremiumHanjaTestResult(
  inputFactors: UnknownRecord,
  freeResult: unknown,
  options: BuildOptions = {},
): Promise<PremiumHanjaTestResult> {
  const candidateLimit = options.candidateLimit ?? 10;
  const includeSaju = options.includeSaju ?? true;
  const resultRecord = record(freeResult);
  const familyName = text(inputFactors.familyName);
  const givenName = text(inputFactors.givenNameHangul);
  const displayName = `${familyName}${givenName}`;
  const selectedCandidateRecords = records(resultRecord.candidates).slice(0, candidateLimit);
  const candidates = selectedCandidateRecords
    .map((candidate, index) => baseCandidate(candidate, displayName, index))
    .filter((candidate) => candidate.hanjaName && candidate.characters.length);
  if (!candidates.length) throw new Error("상세 분석에 사용할 한자 후보가 없습니다.");
  if (candidates.length !== selectedCandidateRecords.length) {
    throw new Error("화면 후보와 PDF 후보 수가 일치하지 않습니다. 결과를 새로 생성해 주세요.");
  }

  let saju: ReturnType<typeof calculatePremiumSaju> | null = null;
  if (includeSaju) {
    const year = number(inputFactors.birthYear);
    const month = number(inputFactors.birthMonth);
    const day = number(inputFactors.birthDay);
    if (!year || !month || !day) {
      throw new Error("사주·오행 종합 분석에는 출생 연·월·일이 모두 필요합니다.");
    }
    saju = calculatePremiumSaju({
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
  }

  const fallbackGeneral = saju
    ? {
        sajuOverview: `입력한 출생 정보를 기준으로 년주 ${saju.pillars.year.hanja}, 월주 ${saju.pillars.month.hanja}, 일주 ${saju.pillars.day.hanja}${saju.pillars.hour ? `, 시주 ${saju.pillars.hour.hanja}` : "로 계산했고 출생 시각 미상으로 시주는 제외"}했습니다. 년주는 전통적으로 가계와 성장 배경을 살피는 자리, 월주는 태어난 절기와 사회적 환경을 살피는 자리로 봅니다. 일주는 본인을 중심으로 관계와 생활 기반을 읽는 자리이며, 그중 첫 글자인 일간 ${saju.dayMaster.character}(${saju.dayMaster.elementLabel})을 해석의 기준점으로 삼습니다. ${saju.pillars.hour ? "시주는 후반의 관심과 표현 방향을 참고하는 자리로 함께 살핍니다." : "시주가 없으므로 시간대에 따른 세부 해석은 포함하지 않습니다."} 각 기둥은 서로의 관계 속에서 읽어야 하므로 한 글자만으로 성격이나 운명을 단정하지 않습니다.`,
        fiveElementsAnalysis: `천간·지지의 표면 오행 분포는 목 ${saju.visibleFiveElements.counts.WOOD}, 화 ${saju.visibleFiveElements.counts.FIRE}, 토 ${saju.visibleFiveElements.counts.EARTH}, 금 ${saju.visibleFiveElements.counts.METAL}, 수 ${saju.visibleFiveElements.counts.WATER}입니다. 이 분포는 여덟 글자의 겉오행을 집계한 것으로 어떤 기운이 반복되어 보이는지 한눈에 확인하는 자료입니다. 일간은 ${saju.dayMaster.elementLabel}에 해당하므로 다른 오행과의 생극 관계를 해석할 때 기준으로 삼습니다. 개수가 적은 오행이 곧바로 부족하거나 반드시 보충해야 할 오행이라는 뜻은 아닙니다. 계절과 월령, 지장간과 기운의 강약까지 검토하지 않은 표면 집계이므로 이름에서는 균형을 비교하는 보조 자료로만 사용합니다.`,
        namingBalance: "사주 원국과 오행 분포는 후보를 자동으로 탈락시키거나 특정 한자를 강제하는 단독 기준이 아닙니다. 먼저 공식 지정 음가, 자의의 긍정성, 가족이 담고 싶은 가치와 실사용 설명력을 확인합니다. 그다음 후보의 의미가 원국에서 두드러진 흐름을 부드럽게 조절하거나 가족이 원하는 상징을 더하는지 비교합니다. 검수된 한자 오행 분류가 없는 글자는 특정 오행의 직접 보완자로 단정하지 않고 자의의 상징적 연결만 설명합니다.",
        candidateComparison: `${candidates.length}개 후보는 모두 같은 한글 음가를 유지하지만 글자별 자의와 결합 서사가 다릅니다. ${candidates.slice(0, 3).map((candidate) => `${candidate.hanjaName}은 ${candidate.characters.map((item) => item.meaning).join("·")}의 의미를 중심으로 합니다`).join(". ")}. 원국 참고에서는 특정 오행을 기계적으로 채우는 후보보다 자의가 분명하고 가족의 가치와 연결되는 후보를 우선 비교합니다. 상위 후보를 고를 때에는 사주 연결 해석과 함께 일상에서 뜻을 자연스럽게 설명할 수 있는지도 확인해야 합니다.`,
      }
    : {
        sajuOverview: "",
        fiveElementsAnalysis: "",
        namingBalance: "",
        candidateComparison: "",
      };
  const fallbackCandidates = candidates.map((candidate) =>
    fallbackCandidateAnalysis(candidate, saju),
  );

  let general = fallbackGeneral;
  let candidateAnalyses = fallbackCandidates;
  let analysisSource: PremiumHanjaTestResult["analysisSource"] = "rules-fallback";
  if (process.env.OPENAI_API_KEY) {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.55,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "당신은 한국 이름의 한자 자의와 전통 명리 참고 정보를 설명하는 전문 리포트 에디터입니다.",
            `고정된 후보 ${candidates.length}개를 빠짐없이 동일한 순서로 분석하고 한자나 지정 음가를 변경하지 마십시오.`,
            "candidateAnalyses의 각 항목에는 hanjaName, summary, story, practicalUse, selectionGuide, meaningCaution, sajuConnection을 작성하십시오.",
            "summary는 글자별 사전 뜻과 결합 구조를 2~3문장, story는 후보마다 고유한 의미 서사를 4~6문장, practicalUse는 실제 이름 설명 방식을 반드시 4문장 이상으로 작성하십시오.",
            "selectionGuide는 이 후보가 어울리는 가치와 다른 후보와 비교할 판단축을 반드시 4문장 이상으로, meaningCaution은 자의의 다의성·현대적 어감·설명 시 주의점을 반드시 2문장 이상으로 쓰되 근거 없는 빈도나 사회적 평가를 만들지 마십시오.",
            includeSaju
              ? "sajuOverview와 fiveElementsAnalysis는 각각 6~8문장, namingBalance는 4~6문장으로 상세히 쓰고, 년주·월주·일주·시주의 역할, 일간, 표면 오행 분포와 적용 한계를 빠짐없이 설명하십시오. 각 후보의 sajuConnection에는 원국·일간·오행 분포와 그 후보의 자의를 연결한 서로 다른 해석을 반드시 4문장 이상 작성하십시오. '주인의 성격과 운명에 긍정적인 영향을 미칠 것입니다' 또는 이와 같은 운명 단정 문장을 사용하지 마십시오. 검수된 한자 오행 분류가 없으면 특정 글자가 특정 오행을 보완한다고 단정하지 마십시오."
              : "사주·오행은 언급하지 말고 모든 sajuConnection을 빈 문자열로 작성하십시오.",
            "후보마다 같은 결론 문장이나 '다른 후보와 구별됩니다', '가족이 원하는 방향과 비교하세요', '공식 문서에서 확인하세요' 같은 공통 안내를 반복하지 마십시오.",
            "성격·운명·미래를 예측하거나 어려움을 극복할 것이라고 단정하지 마십시오. 공식 등록 재확인 안내는 후보 분석에 넣지 마십시오.",
            includeSaju
              ? `candidateComparison에는 ${candidates.length}개 후보를 함께 비교하고 자의·실사용·사주 참고를 종합한 선택 가이드를 후보 한자와 구체적 이유를 포함해 8~12문장으로 작성하십시오.`
              : "candidateComparison은 빈 문자열로 작성하십시오.",
            "응답은 JSON 객체이며 필드는 sajuOverview, fiveElementsAnalysis, namingBalance, candidateComparison, candidateAnalyses입니다.",
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            displayName,
            candidates: candidates.map((candidate) => ({
              hanjaName: candidate.hanjaName,
              focusLabel: candidate.focusLabel,
              characters: candidate.characters,
            })),
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
      const parsedCandidates = records(parsed.candidateAnalyses);
      general = {
        sajuOverview: safeDetailedText(
          parsed.sajuOverview,
          fallbackGeneral.sajuOverview,
          5,
        ),
        fiveElementsAnalysis:
          safeDetailedText(
            parsed.fiveElementsAnalysis,
            fallbackGeneral.fiveElementsAnalysis,
            5,
          ),
        namingBalance: safeDetailedText(
          parsed.namingBalance,
          fallbackGeneral.namingBalance,
          4,
        ),
        candidateComparison:
          safeDetailedText(
            parsed.candidateComparison,
            fallbackGeneral.candidateComparison,
            5,
          ),
      };
      candidateAnalyses = candidates.map((candidate, index) => {
        const parsedCandidate =
          parsedCandidates.find((item) => text(item.hanjaName) === candidate.hanjaName) ??
          parsedCandidates[index] ??
          {};
        const fallback = fallbackCandidates[index];
        return {
          hanjaName: candidate.hanjaName,
          summary: safeDetailedText(parsedCandidate.summary, fallback.summary, 2),
          story: safeDetailedText(parsedCandidate.story, fallback.story, 4),
          practicalUse: safeDetailedText(
            parsedCandidate.practicalUse,
            fallback.practicalUse,
            4,
          ),
          selectionGuide:
            safeDetailedText(parsedCandidate.selectionGuide, fallback.selectionGuide, 4),
          meaningCaution:
            safeDetailedText(parsedCandidate.meaningCaution, fallback.meaningCaution, 2),
          sajuConnection: includeSaju
            ? safeDetailedText(
                parsedCandidate.sajuConnection,
                fallback.sajuConnection ?? "",
                4,
              )
            : null,
        };
      });
      analysisSource = "openai";
    }
  }

  const detailedCandidates = candidates.map((candidate, index) => ({
    ...candidate,
    summary: candidateAnalyses[index].summary,
    story: candidateAnalyses[index].story,
    practicalUse: candidateAnalyses[index].practicalUse,
    selectionGuide: candidateAnalyses[index].selectionGuide,
    meaningCaution: candidateAnalyses[index].meaningCaution,
    sajuConnection: candidateAnalyses[index].sajuConnection,
  }));
  const generatedAt = new Date();
  const expiresAt = new Date(generatedAt.getTime() + 24 * 60 * 60 * 1000);
  const rejectedCandidates = records(resultRecord.rejected_hanja).map((item) => ({
    character: text(item.character),
    reason: text(item.reason),
    severity: text(item.severity),
  }));
  const reportData: PremiumHanjaReportData = {
    reportId: `NL-TEST-${generatedAt.getTime()}`,
    generatedAt: generatedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    childNameHangul: displayName,
    parentWishes: text(inputFactors.parentWishes) || null,
    excludedMeanings: text(inputFactors.excludedMeanings) || null,
    saju,
    sajuInterpretation: saju
      ? {
          overview: general.sajuOverview,
          fiveElements: general.fiveElementsAnalysis,
          namingBalance: general.namingBalance,
          candidateComparison: general.candidateComparison,
        }
      : null,
    primaryCandidate: detailedCandidates[0],
    candidates: detailedCandidates,
    rejectedCandidates,
  };
  const primaryAnalysis = candidateAnalyses[0];
  return {
    reportData,
    interpretation: {
      ...general,
      candidateSummary: primaryAnalysis.summary,
      story: primaryAnalysis.story,
      practicalUse: primaryAnalysis.practicalUse,
      candidateAnalyses,
    },
    analysisSource,
  };
}

export async function renderPremiumHanjaTestPdf(data: PremiumHanjaReportData) {
  return renderPremiumHanjaReport(data);
}
