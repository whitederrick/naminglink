import OpenAI from "openai";
import type { ServiceType } from "@/lib/services";
import { getMockResult } from "@/lib/mock-results";
import { getSystemPrompt } from "@/lib/prompts";
import { getOfficialHanjaCandidates, getOfficialHanjaMeanings } from "@/lib/official-hanja-db";
import { calculatePremiumSaju } from "@/lib/saju/engine";
import { birthHourRangeToHour } from "@/lib/birth-hour";

let client: OpenAI | null = null;

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  client ??= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 30_000,
    maxRetries: 1,
  });

  return client;
}
type GenerationConstraint = {
  syllable: string;
  hanja: string;
  index: number;
};

export class NamingInputConstraintError extends Error {
  constructor(
    message: string,
    public readonly fieldErrors: Record<string, string>,
  ) {
    super(message);
    this.name = "NamingInputConstraintError";
  }
}

export class AIServiceUnavailableError extends Error {
  constructor() {
    super("AI 이름 생성 기능이 일시적으로 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.");
    this.name = "AIServiceUnavailableError";
  }
}

function inputString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getGenerationConstraint(
  inputFactors: Record<string, unknown>,
): GenerationConstraint | null {
  if (inputString(inputFactors.generationNameUsage) !== "used") return null;

  const syllable = inputString(inputFactors.generationSyllable);
  const hanja = inputString(inputFactors.generationHanja);
  const givenSyllables = Array.from(inputString(inputFactors.givenNameHangul));
  const index = givenSyllables.indexOf(syllable);

  if (!syllable || !hanja || index < 0) return null;

  return { syllable, hanja, index };
}

function assertGenerationConstraint(
  result: unknown,
  inputFactors: Record<string, unknown>,
  constraint: GenerationConstraint | null,
) {
  if (!constraint) return;
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    throw new Error("The AI result cannot be validated for the generation-name constraint.");
  }

  const candidates = (result as Record<string, unknown>).candidates;
  const givenName = inputString(inputFactors.givenNameHangul);
  if (!Array.isArray(candidates)) {
    throw new Error("The AI result cannot be validated for the generation-name constraint.");
  }
  // 규칙 엔진이 후보 부족을 안내문과 함께 빈 목록으로 반환하는 것은 정상 결과다.
  if (candidates.length === 0) return;

  const invalidCandidate = candidates.some((candidate) => {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
      return true;
    }

    const record = candidate as Record<string, unknown>;
    const hanja = Array.from(inputString(record.hanja));
    if (inputString(record.hangul) !== givenName || hanja[constraint.index] !== constraint.hanja) {
      return true;
    }

    const breakdown = record.character_breakdown;
    if (Array.isArray(breakdown)) {
      const fixed = breakdown[constraint.index];
      if (!fixed || typeof fixed !== "object" || Array.isArray(fixed)) return true;
      const fixedRecord = fixed as Record<string, unknown>;
      if (
        inputString(fixedRecord.syllable) !== constraint.syllable ||
        inputString(fixedRecord.character) !== constraint.hanja
      ) return true;
    }

    const optionGroups = record.hanja_options;
    if (Array.isArray(optionGroups)) {
      const fixedGroup = optionGroups[constraint.index];
      if (!fixedGroup || typeof fixedGroup !== "object" || Array.isArray(fixedGroup)) {
        return true;
      }
      const fixedGroupRecord = fixedGroup as Record<string, unknown>;
      if (inputString(fixedGroupRecord.selected_character) !== constraint.hanja) {
        return true;
      }
      const fixedOptions = fixedGroupRecord.options;
      if (
        Array.isArray(fixedOptions) &&
        fixedOptions.some((option) =>
          !option ||
          typeof option !== "object" ||
          Array.isArray(option) ||
          inputString((option as Record<string, unknown>).character) !== constraint.hanja
        )
      ) return true;
    }

    return false;
  });

  if (invalidCandidate) {
    throw new Error(
      `The result did not preserve ${constraint.syllable}(${constraint.hanja}) at the required position.`,
    );
  }
}
function prepareResultForClient(
  result: unknown,
  constraint: GenerationConstraint | null,
) {
  if (!constraint || !result || typeof result !== "object" || Array.isArray(result)) {
    return result;
  }

  const record = result as Record<string, unknown>;
  const candidates = Array.isArray(record.candidates) ? record.candidates : [];

  return {
    ...record,
    generation_constraint: constraint,
    candidates: candidates.map((candidate) => {
      if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
        return candidate;
      }

      const candidateRecord = candidate as Record<string, unknown>;
      const optionGroups = Array.isArray(candidateRecord.hanja_options)
        ? candidateRecord.hanja_options.filter(
            (_group, index) => index !== constraint.index,
          )
        : candidateRecord.hanja_options;

      return {
        ...candidateRecord,
        fixed_generation_name: constraint,
        hanja_options: optionGroups,
      };
    }),
  };
}

// 로마자를 쓰는 대상 언어 목록. 이 언어들에서는 성명 전체가 로마자여야 한다.
const LATIN_SCRIPT_LANGUAGES = new Set([
  "en", "de", "es", "fr", "it", "pt", "vi", "id", "fil", "uz", "tr", "ms", "pl",
]);

// 통용(여권식) 한국 성 로마자 표기. 국립국어원 표기와 다르더라도 실제 통용 표기를 우선한다.
const KOREAN_SURNAME_ROMAN: Record<string, string> = {
  김: "Kim", 이: "Lee", 박: "Park", 최: "Choi", 정: "Jung", 강: "Kang",
  조: "Cho", 윤: "Yoon", 장: "Jang", 임: "Lim", 한: "Han", 오: "Oh",
  서: "Seo", 신: "Shin", 권: "Kwon", 황: "Hwang", 안: "Ahn", 송: "Song",
  전: "Jeon", 홍: "Hong", 유: "Yoo", 고: "Ko", 문: "Moon", 양: "Yang",
  손: "Son", 배: "Bae", 백: "Baek", 허: "Heo", 남: "Nam", 심: "Sim",
  노: "Roh", 하: "Ha", 곽: "Kwak", 성: "Sung", 차: "Cha", 주: "Joo",
  우: "Woo", 구: "Koo", 민: "Min", 류: "Ryu", 나: "Na", 진: "Jin",
  지: "Ji", 엄: "Um", 채: "Chae", 원: "Won", 천: "Chun", 방: "Bang",
  현: "Hyun", 함: "Ham", 변: "Byun", 염: "Yeom", 여: "Yeo", 추: "Chu",
  도: "Do", 소: "So", 석: "Seok", 설: "Seol", 마: "Ma", 길: "Gil",
  표: "Pyo", 은: "Eun", 탁: "Tak", 공: "Kong",
};

const CYRILLIC_LANGUAGES = new Set(["ru", "mn", "kk"]);

// 비로마자 언어에서 name 필드가 로마자로 나오는 실수를 막기 위해, 사용자 메시지에 명시 규칙을 넣는다.
const NAME_SCRIPT_RULES: Record<string, string> = {
  ja: "name 필드는 반드시 일본어 한자 또는 가나로 표기하십시오 (예: 陽翔). 로마자 금지.",
  zh: "name 필드는 반드시 한자로 표기하십시오. 로마자 금지.",
  ru: "name 필드는 반드시 키릴 문자로 표기하십시오 (예: Никита). 로마자 금지.",
  mn: "name 필드는 반드시 키릴 문자로 표기하십시오. 로마자 금지.",
  kk: "name 필드는 반드시 키릴 문자로 표기하십시오 (예: Нұрлан). 로마자 금지.",
  th: "name 필드는 반드시 태국 문자로 표기하십시오 (예: ณัฐวุฒิ). 로마자 금지.",
  km: "name 필드는 반드시 크메르 문자로 표기하십시오 (예: សុខា). 로마자 금지.",
  ar: "name 필드는 반드시 아랍 문자로 표기하십시오 (예: خالد). 로마자 금지.",
};

// 주요 한국 성의 가타카나·키릴 표기(재일·고려인 사회 통용 표기 기준).
const KOREAN_SURNAME_KATAKANA: Record<string, string> = {
  김: "キム", 이: "イ", 박: "パク", 최: "チェ", 정: "チョン", 강: "カン",
  조: "チョ", 윤: "ユン", 장: "チャン", 임: "イム", 한: "ハン", 오: "オ",
  서: "ソ", 신: "シン", 권: "クォン", 황: "ファン", 안: "アン", 송: "ソン",
  전: "チョン", 홍: "ホン", 유: "ユ", 고: "コ", 문: "ムン", 양: "ヤン",
  손: "ソン", 배: "ペ", 백: "ペク", 남: "ナム", 노: "ノ", 하: "ハ",
};
const KOREAN_SURNAME_CYRILLIC: Record<string, string> = {
  김: "Ким", 이: "Ли", 박: "Пак", 최: "Цой", 정: "Чон", 강: "Кан",
  조: "Чо", 윤: "Юн", 장: "Чан", 임: "Им", 한: "Хан", 오: "О",
  서: "Со", 신: "Син", 권: "Квон", 황: "Хван", 안: "Ан", 송: "Сон",
  전: "Чон", 홍: "Хон", 유: "Ю", 고: "Ко", 문: "Мун", 양: "Ян",
  손: "Сон", 배: "Пэ", 백: "Пэк", 남: "Нам", 노: "Но", 하: "Ха",
};

// 모델의 표기 실수를 코드에서 확정적으로 교정한다.
// - 로마자권: full_name_local('안 Nathan')과 pronunciation('가스파르 / 가스파르')을 재조립
// - 비로마자권: full_name_local에 한글 성이 남으면 가타카나·키릴 표 또는 로마자 성으로 재조립
// (프롬프트 지시만으로는 gpt-4o-mini가 이 형식들을 반복적으로 틀림.)
function normalizeKoreanToGlobalResult(
  result: unknown,
  inputFactors: Record<string, unknown>,
) {
  if (!result || typeof result !== "object") return result;
  const language = String(inputFactors.targetLanguage ?? "");
  if (!language || language === "ko") return result;
  const familyName = String(inputFactors.familyName ?? "").trim();
  const roman = KOREAN_SURNAME_ROMAN[familyName];
  const isLatin = LATIN_SCRIPT_LANGUAGES.has(language);
  const localSurname =
    language === "ja"
      ? KOREAN_SURNAME_KATAKANA[familyName]
      : CYRILLIC_LANGUAGES.has(language)
        ? KOREAN_SURNAME_CYRILLIC[familyName]
        : undefined;
  const candidates = (result as Record<string, unknown>).candidates;
  if (!Array.isArray(candidates)) return result;
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") continue;
    const item = candidate as Record<string, unknown>;
    const name = typeof item.name === "string" ? item.name.trim() : "";
    if (!name) continue;
    const pronunciation =
      typeof item.pronunciation === "string" ? item.pronunciation : "";
    const hangulReading = pronunciation.match(/[가-힣]+(?:\s[가-힣]+)*/)?.[0];
    const romanGiven = pronunciation.split("/")[0]?.trim() ?? "";

    if (isLatin) {
      if (roman) item.full_name_local = `${name} ${roman}`;
      if (hangulReading) item.pronunciation = `${name} / ${hangulReading}`;
      continue;
    }

    const full = typeof item.full_name_local === "string" ? item.full_name_local : "";
    if (!/[가-힣]/.test(full)) continue;
    const romanFull =
      roman && /^[A-Za-z .'-]+$/.test(romanGiven)
        ? ` (${roman} ${romanGiven})`
        : roman
          ? ` (${roman})`
          : "";
    if (localSurname) {
      item.full_name_local =
        language === "ja"
          ? `${localSurname}・${name}${romanFull}`
          : `${name} ${localSurname}${romanFull}`;
    } else {
      item.full_name_local = `${name}${romanFull}`;
    }
  }
  return result;
}

// 한글→글로벌 변환에서 출생 정보를 '계산된 오행 요약'으로 바꿔 모델에 넘긴다.
// 원시 연·월·일 문자열만 넘기면 모델이 해석하지 못해 사주 입력이 결과에 전혀 반영되지 않았다.
function buildKoreanToGlobalSajuReference(inputFactors: Record<string, unknown>) {
  const year = Number(inputFactors.birthYear);
  const month = Number(inputFactors.birthMonth);
  const day = Number(inputFactors.birthDay);
  if (!year || !month || !day) return null;
  try {
    const birthHour = birthHourRangeToHour(inputFactors.birthHour);
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
    const labels = saju.visibleFiveElements.labels;
    const entries = Object.entries(counts) as [keyof typeof counts, number][];
    const max = Math.max(...entries.map(([, count]) => count));
    const min = Math.min(...entries.map(([, count]) => count));
    return {
      counts: `목 ${counts.WOOD}, 화 ${counts.FIRE}, 토 ${counts.EARTH}, 금 ${counts.METAL}, 수 ${counts.WATER}`,
      dominant: entries.filter(([, count]) => count === max).map(([key]) => labels[key]).join("·"),
      weakest: entries.filter(([, count]) => count === min).map(([key]) => labels[key]).join("·"),
      dayMaster: `${saju.dayMaster.character}(${saju.dayMaster.elementLabel})`,
      note: "표면 오행 집계 참고이며 예측이 아닌 상징 연결용",
    };
  } catch {
    return null;
  }
}

export async function generateNamingResult(
  serviceType: ServiceType,
  inputFactors: Record<string, unknown>,
) {
  const generationConstraint =
    serviceType === "HANJA_MEANING_MATCH"
      ? getGenerationConstraint(inputFactors)
      : null;
  const officialHanja =
    serviceType === "HANJA_MEANING_MATCH"
      ? await getOfficialHanjaCandidates(inputFactors)
      : null;
  let officialCandidates = officialHanja?.candidates;

  if (officialCandidates && generationConstraint) {
    const fixedOptions = (officialCandidates[generationConstraint.syllable] ?? []).filter(
      (option) =>
        option.character === generationConstraint.hanja &&
        option.reading === generationConstraint.syllable,
    );

    if (fixedOptions.length === 0) {
      throw new NamingInputConstraintError(
        "\uc785\ub825\ud55c \ub3cc\ub9bc\uc790 \ud55c\uc790\ub97c \uacf5\uc2dd \uc778\uba85\uc6a9 \ud55c\uc790 \uc790\ub8cc\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
        {
          generationHanja: "\ub3cc\ub9bc\uc790 \uc74c\uc808\uacfc \uc9c0\uc815 \ud55c\uc790\ub97c \ub2e4\uc2dc \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
        },
      );
    }

    officialCandidates = {
      ...officialCandidates,
      [generationConstraint.syllable]: fixedOptions,
    };
  }

  const officialCandidateCount = officialCandidates
    ? Object.values(officialCandidates).reduce((sum, options) => sum + options.length, 0)
    : null;
  const sajuReference =
    serviceType === "KOREAN_TO_GLOBAL"
      ? buildKoreanToGlobalSajuReference(inputFactors)
      : null;
  // 입력에 명시된 한자는 공식 자료에서 뜻·지정 음가를 조회해 확정 근거로 주입한다.
  // (모델이 동음이의 한자의 뜻으로 임의 해석하는 것을 데이터 차원에서 차단.)
  const originalNameElements =
    serviceType === "KOREAN_TO_GLOBAL"
      ? await getOfficialHanjaMeanings([
          ...String(inputFactors.familyNameHanja ?? ""),
          ...String(inputFactors.givenNameHanja ?? ""),
        ])
      : null;
  const enrichedInputFactors: Record<string, unknown> = {
    ...inputFactors,
    ...(officialHanja
      ? {
          officialHanjaCandidates: officialCandidates,
          officialHanjaSource: officialHanja.source,
        }
      : {}),
    ...(generationConstraint ? { generationConstraint } : {}),
    ...(sajuReference ? { sajuReference } : {}),
    ...(originalNameElements
      ? {
          originalNameElements,
          originalNameElementsNote:
            "공식 인명용 한자 자료에서 조회한 원 이름 각 글자의 지정 음가와 뜻. 원 이름 분석과 의미 연결은 반드시 이 표의 뜻만 근거로 사용할 것.",
        }
      : {}),
    // 구버전 클라이언트가 outputLanguage를 대상 언어로 보내도 설명 언어는 한국어로 강제한다.
    // 성의 여권식 로마자를 함께 넘겨 비로마자 문자권(키릴·아랍 등)에서도 성 음차의 기준을 준다.
    ...(serviceType === "KOREAN_TO_GLOBAL"
      ? {
          outputLanguage: "ko",
          ...(KOREAN_SURNAME_ROMAN[String(inputFactors.familyName ?? "").trim()]
            ? {
                familyNameRoman:
                  KOREAN_SURNAME_ROMAN[String(inputFactors.familyName ?? "").trim()],
              }
            : {}),
          ...(NAME_SCRIPT_RULES[String(inputFactors.targetLanguage ?? "")]
            ? { nameScriptRule: NAME_SCRIPT_RULES[String(inputFactors.targetLanguage ?? "")] }
            : {}),
        }
      : {}),
  };
  const openai = getOpenAIClient();
  const isHangulTransliteration =
    enrichedInputFactors.serviceSlug === "global-name-to-hangul";

  if (serviceType === "HANJA_MEANING_MATCH" || !openai) {
    // 한자 서비스는 규칙 엔진으로 정상 동작하지만, AI 기반 서비스는 키 없이는
    // 입력과 무관한 예시(mock)만 반환하므로 운영에서는 제공하지 않는다.
    if (serviceType !== "HANJA_MEANING_MATCH" && process.env.NODE_ENV === "production") {
      throw new AIServiceUnavailableError();
    }
    const result = getMockResult(serviceType, enrichedInputFactors);
    assertGenerationConstraint(result, enrichedInputFactors, generationConstraint);
    const clientResult = prepareResultForClient(result, generationConstraint);

    return {
      result: clientResult,
      analysisMeta: { officialCandidateCount },
      usage: {
        model:
          serviceType === "HANJA_MEANING_MATCH"
            ? "official-hanja-rules-v1" : "mock",
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0,
        providerRequestId: null,
      },
    };
  }

  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    // 이름 실존성이 중요한 글로벌 변환은 온도를 낮춰 지어낸 이름 조합을 줄인다.
    temperature: serviceType === "KOREAN_TO_GLOBAL" ? 0.6 : 0.85,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: isHangulTransliteration
          ? [
              "You are a Korean transliteration and source-language pronunciation specialist.",
              "Do not create a new Korean name. Preserve the original person's name and write its actual pronunciation naturally in Hangul.",
              "Never convert the name to an ordinary English spelling as an intermediate pronunciation source. Infer the pronunciation directly from the originalName, originalNameLanguage, countryProfile, and pronunciationHint.",
              "Apply evidence in this strict priority order: (1) the user's pronunciationHint, (2) originalNameLanguage, (3) country or regional pronunciation, (4) the name's general pronunciation. Do not let country override the explicitly selected language.",
              "First analyze the likely source pronunciation, then structure it into syllables and IPA when reasonably known, and only then map it to natural Korean phonology. If the evidence is ambiguous, provide up to 3 plausible Hangul alternatives and explain why they differ.",
              "Return valid JSON with this shape: { analysis_summary, candidates: [{ hangul, recommendation_reason, matching_rate, source_pronunciation_basis, ipa, syllables, pronunciation, cultural_fit, usage_note, caution_notes, suitability_score }], rejected_options: [{ hangul, reason }], add_on_recommendations: [] }.",
              "Return up to 3 plausible Hangul spellings, ordered from the highest matching_rate to the lowest. The first candidate should be the most natural and faithful Korean pronunciation.",
              "Explain in the requested outputLanguage when possible.",
            ].join(" ")
          : getSystemPrompt(serviceType),
      },
      {
        role: "user",
        content: `Input factors:\n${JSON.stringify(enrichedInputFactors, null, 2)}`,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  let result = JSON.parse(content) as unknown;
  if (serviceType === "KOREAN_TO_GLOBAL") {
    result = normalizeKoreanToGlobalResult(result, enrichedInputFactors);
  }
  assertGenerationConstraint(result, enrichedInputFactors, generationConstraint);
  const clientResult = prepareResultForClient(result, generationConstraint);

  return {
    result: clientResult,
    analysisMeta: { officialCandidateCount },
    usage: {
      model: completion.model,
      promptTokens: completion.usage?.prompt_tokens ?? 0,
      completionTokens: completion.usage?.completion_tokens ?? 0,
      totalTokens: completion.usage?.total_tokens ?? 0,
      providerRequestId: completion.id,
    },
  };
}
