import OpenAI from "openai";

import {
  renderPremiumHanjaReport,
  type PremiumHanjaReportCandidate,
  type PremiumHanjaReportData,
} from "@/lib/pdf/premium-hanja-report";
import { calculatePremiumSaju } from "@/lib/saju/engine";
import { isLunarCalendar } from "@/lib/premium-hanja-eligibility";
import { birthHourRangeToHour } from "@/lib/birth-hour";

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
  // Number(null)과 Number("")은 0이 되어 미입력이 0시·0분으로 계산되는 것을 막는다.
  if (value === null || value === undefined) return null;
  if (typeof value === "string" && !value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function records(value: unknown) {
  return Array.isArray(value)
    ? value.map(record).filter((item) => Object.keys(item).length)
    : [];
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
  // 문장 수가 살짝 모자라도 충분히 서술적이면(글자 수 기준) AI 텍스트를 살린다.
  // 예전에는 문장 수만 봐서 풍성한 3문장 단락도 기계적 폴백으로 교체되곤 했다.
  const richEnough =
    sentenceCount(candidate) >= minimumSentences ||
    candidate.length >= minimumSentences * 24;
  return richEnough ? candidate : fallback;
}

// 운세·운명 '단정'만 막는다. 이름이 주는 인상·느낌·상징 같은 묘사는 프리미엄 서술의 핵심이라 허용한다.
const unsupportedPredictionPattern =
  /운명|사주가?\s*좋|복을?\s*받|성공할|출세|재물운|합격운|어려움을?\s*(반드시\s*)?극복할\s*것|반드시\s*[^.]{0,20}것입니다/;

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
  reportId?: string;
  expiresAt?: string;
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

// AI에 넘길 '확정된 오행 사실' 요약. 개수·최다·최소 기운을 명시해 서술이 데이터와 어긋나지 않게 한다.
function buildElementSummary(saju: ReturnType<typeof calculatePremiumSaju>) {
  const counts = saju.visibleFiveElements.counts;
  const labels = saju.visibleFiveElements.labels;
  const entries = Object.entries(counts) as [keyof typeof counts, number][];
  const max = Math.max(...entries.map(([, n]) => n));
  const min = Math.min(...entries.map(([, n]) => n));
  return {
    counts: `목 ${counts.WOOD}, 화 ${counts.FIRE}, 토 ${counts.EARTH}, 금 ${counts.METAL}, 수 ${counts.WATER}`,
    dominant: entries.filter(([, n]) => n === max).map(([k]) => labels[k]).join("·"),
    weakest: entries.filter(([, n]) => n === min).map(([k]) => labels[k]).join("·"),
    dayMaster: `${saju.dayMaster.character}(${saju.dayMaster.elementLabel})`,
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
  // 이름 글자 수(외자·두 글자 이상)에 따라 문장을 동적으로 만든다.
  // 예전에는 둘째 글자를 고정 가정해 외자 이름에서 "undefined의 'undefined'"가 인쇄됐다.
  const syllableLabels = ["첫", "둘째", "셋째", "넷째", "다섯째"];
  const perSyllableUse = candidate.characters
    .map(
      (item, index) =>
        `${syllableLabels[index] ?? `${index + 1}번째`} 음절에는 ${item.hanja}의 '${item.meaning}' 뜻을 사용했다고 설명합니다.`,
    )
    .join(" ");
  const multiChar = candidate.characters.length >= 2;
  const storyFlow = multiChar
    ? "첫 글자의 자의는 이름의 출발 이미지를 만들고, 이어지는 글자의 자의가 그 이미지를 받아 의미의 방향을 구체화합니다."
    : "이 글자의 자의가 이름의 중심 이미지를 만듭니다.";
  const guideFlow = multiChar
    ? "첫 글자가 만드는 인상이 가족의 바람과 맞는지, 이어지는 글자가 의미를 자연스럽게 확장하는지 확인해야 합니다."
    : "이 글자가 만드는 인상이 가족의 바람과 맞는지 확인해야 합니다.";
  return {
    hanjaName: candidate.hanjaName,
    summary: `${candidate.characters.map((item) => `${item.hanja}(${item.meaning})`).join("·")}을 조합해 ${meanings.join("과 ")}의 의미를 담은 이름입니다.`,
    story: `${characterDetails}. ${storyFlow} 자의를 함께 읽으면 ${meanings.join("에서 ")}로 이어지는 의미 흐름이 형성됩니다.`,
    practicalUse: `${candidate.displayName}을 ${candidate.hanjaName}으로 표기할 수 있습니다. ${perSyllableUse} 글자를 함께 소개할 때에는 ${meanings.join("에서 ")}로 이어지는 의미라고 풀어 말할 수 있습니다.`,
    selectionGuide: candidate.selectionGuide || `${meanings.join("·")}의 의미를 이름의 중심 가치로 삼고 싶은 경우 우선 비교할 수 있습니다. ${guideFlow} 자의를 한 문장으로 설명했을 때 과장 없이 이해되는지를 최종 판단 기준으로 삼을 수 있습니다.`,
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
  // 화면(ResultCard)과 동일하게 matching_rate(없으면 suitability_score) 내림차순으로 정렬한 뒤
  // 상한을 적용해야 표지 대표 후보와 후보 번호가 화면 순서와 일치한다.
  const candidateRate = (item: UnknownRecord) => {
    const rate =
      typeof item.matching_rate === "number" && Number.isFinite(item.matching_rate)
        ? item.matching_rate
        : null;
    const score =
      typeof item.suitability_score === "number" && Number.isFinite(item.suitability_score)
        ? item.suitability_score
        : null;
    return rate ?? score;
  };
  const selectedCandidateRecords = records(resultRecord.candidates)
    .sort((a, b) => (candidateRate(b) ?? -1) - (candidateRate(a) ?? -1))
    .slice(0, candidateLimit);
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
    const resolvedBirthHour =
      inputFactors.birthTimeKnown === false
        ? null
        : number(inputFactors.premiumBirthHour) ?? birthHourRangeToHour(inputFactors.birthHour);
    saju = calculatePremiumSaju({
      calendarType: isLunarCalendar(inputFactors.calendarType) ? "lunar" : "solar",
      year,
      month,
      day,
      lunarLeapMonth: inputFactors.lunarLeapMonth === true,
      birthHour: resolvedBirthHour,
      // 출생 시를 확정하지 못하면 분도 함께 미상으로 처리해야 엔진 검증을 통과한다.
      birthMinute:
        resolvedBirthHour === null
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
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 45_000, maxRetries: 0 });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.6,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "당신은 아이의 이름에 담긴 한자의 의미를 부모가 마음으로 느낄 수 있도록 풀어 주는, 따뜻하고 품격 있는 이름 이야기 작가입니다.",
            "목표는 '규칙 설명'이 아니라 '이 이름을 왜 아름답게 여길 수 있는지'를 부모에게 전하는 것입니다. 읽는 사람이 이름에 애정을 느끼도록, 구체적 심상과 자연스러운 우리말 문장으로 쓰십시오.",
            `고정된 후보 ${candidates.length}개를 동일한 순서로 분석하되 한자나 지정 음가는 절대 바꾸지 마십시오.`,
            "제공된 글자 뜻(meaning)은 사전 원문이라 투박할 수 있습니다. '덕 덕베풀'처럼 원문을 그대로 인용하지 말고, 그 글자가 품은 심상을 자연스러운 우리말로 풀어 설명하십시오(예: 德 → 너그러움과 베풂, 사람을 품는 덕).",
            "각 candidateAnalyses 항목에는 hanjaName, summary, story, practicalUse, selectionGuide, meaningCaution, sajuConnection을 작성합니다.",
            "summary: 글자들이 어떻게 어우러져 하나의 이름 이미지를 만드는지 2~3문장으로 압축합니다.",
            "story: 이 이름만의 고유한 서사를 4문장 이상으로. 각 글자의 심상이 어떻게 이어지고 확장되는지, 아이의 삶에 어떤 분위기와 바람을 담을 수 있는지를 그림 그리듯 구체적으로 씁니다. 상투적 문구 반복 금지.",
            "practicalUse: 부모가 이 이름을 남에게 소개할 때 쓸 수 있는 실제 표현과, 이름이 주는 인상을 4문장 이상으로. '이 이름은 ~한 느낌을 줍니다'처럼 이름의 인상·분위기를 묘사하는 것은 권장합니다.",
            "selectionGuide: 어떤 가치를 중히 여기는 가족에게 이 후보가 어울리는지, 다른 후보와 무엇을 기준으로 비교하면 좋은지 4문장 이상으로 구체적으로.",
            "meaningCaution: 글자 뜻의 다의성이나 현대적 어감에서 짚어둘 점을 2문장 이상으로. 단, 근거 없는 빈도·사회적 평가는 지어내지 마십시오.",
            includeSaju
              ? "sajuOverview: 실제 원국(년·월·일주와 시주, 일간)을 근거로 각 기둥이 무엇을 보는 자리인지, 일간을 축으로 이 구성이 어떤 '기질의 밑그림'을 그리는지 6~8문장으로 따뜻하게 해석하십시오. 단, '중심/축'은 일간(자기 자신)을 뜻하며 이는 오행 개수상 '가장 많은 기운(elementSummary.dominant)'과 다를 수 있으니 둘을 혼동하지 말고 구분해 쓰십시오. 표를 읽어주는 데 그치지 말고 의미를 부여하되, 표면 집계라는 한계도 자연스럽게 곁들이십시오."
              : "사주·오행은 언급하지 말고 sajuConnection은 모두 빈 문자열로 두십시오.",
            includeSaju
              ? "fiveElementsAnalysis: 표면 오행 분포를 해석하되, 개수와 '가장 많은 기운/가장 적은 기운'은 반드시 입력의 elementSummary에 적힌 사실만 사용하고 임의로 바꾸지 마십시오. 그 분포가 일간과의 관계 속에서 어떤 분위기를 만드는지 6~8문장으로. namingBalance: 사주 참고와 자의·실사용을 함께 저울질해 이름을 고르는 법을 4~6문장으로."
              : "",
            includeSaju
              ? "각 sajuConnection: 이 후보의 글자 심상을 원국·일간·오행 분포와 잇되, 오행 사실은 elementSummary와 100% 일치해야 하고 fiveElementsAnalysis와도 모순되면 안 됩니다. 검수된 한자 오행 분류가 없으므로 '이 글자가 특정 오행을 보충한다'고 단정하지 말고, 자의와 원국의 분위기가 어떻게 어울리는지 상징적으로 4문장 이상 이어 주십시오."
              : "",
            "지켜야 할 선(중요): 사주로 아이의 성격·능력·재능·미래를 예측하거나 '~할 것입니다/~할 가능성이 큽니다/~을 키울 것으로 기대됩니다'처럼 단정하지 마십시오. 운세·운명·성공·재물·합격을 약속하지 마십시오. 사주는 '기질의 밑그림·분위기 참고'로만 서술하고, 아이 본인에 대한 예언이 아니라 '이름에 담을 수 있는 상징과 바람'으로 표현하십시오. 통계·빈도를 지어내지 마십시오.",
            "후보마다 같은 결론 문장이나 '다른 후보와 구별됩니다', '공식 문서에서 확인하세요' 같은 공통 안내 반복 금지. 공식 등록 재확인 안내는 넣지 마십시오.",
            includeSaju
              ? `candidateComparison: ${candidates.length}개 후보를 나란히 놓고 자의·실사용·사주 참고를 종합해 어떤 가족에게 어떤 후보가 어울리는지 후보 한자와 구체적 이유를 들어 8~12문장으로.`
              : "candidateComparison은 빈 문자열로 두십시오.",
            "응답은 JSON 객체이며 필드는 sajuOverview, fiveElementsAnalysis, namingBalance, candidateComparison, candidateAnalyses입니다.",
          ].filter(Boolean).join(" "),
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
            // AI가 오행 개수를 지어내거나 서로 모순되지 않도록, 확정된 사실만 명확히 전달한다.
            elementSummary: saju ? buildElementSummary(saju) : null,
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
  // 실제 만료는 결제 시각 기준(premium-session)이므로 호출자가 세션 만료 시각을 넘기면 그대로 쓴다.
  const expiresAt = options.expiresAt
    ? new Date(options.expiresAt)
    : new Date(generatedAt.getTime() + 24 * 60 * 60 * 1000);
  const rejectedCandidates = records(resultRecord.rejected_hanja).map((item) => ({
    character: text(item.character),
    reason: text(item.reason),
    severity: text(item.severity),
  }));
  const reportData: PremiumHanjaReportData = {
    reportId: options.reportId ?? `NL-${generatedAt.getTime()}`,
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
