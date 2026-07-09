type HanjaElement = "wood" | "fire" | "earth" | "metal" | "water" | "neutral";

type HanjaOption = {
  character: string;
  reading: string;
  meaning: string;
  note: string;
  element: HanjaElement;
  tags: string[];
  sourceStatus: "sample" | "production";
};

type RejectedHanja = {
  character: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

export const OFFICIAL_HANJA_SOURCE = {
  sourceKey: "scourt-hanja-2024-06-11",
  title: "인명용 한자표",
  ruleReference: "가족관계의 등록 등에 관한 규칙 제37조",
  versionLabel: "2024. 5. 23. 일부개정, 2024. 6. 11. 시행",
  effectiveDate: "2024-06-11",
};

export const OFFICIAL_HANJA_RULES = [
  {
    code: "DESIGNATED_READING_ONLY",
    title: "지정 발음 사용",
    description: "한자는 지정된 발음으로만 사용할 수 있습니다.",
  },
  {
    code: "INITIAL_N_R_EXCEPTION",
    title: "첫소리 ㄴ/ㄹ 예외",
    description:
      "첫소리(初聲)가 ㄴ 또는 ㄹ인 한자는 각각 소리나는 바에 따라 ㅇ 또는 ㄴ으로 사용할 수 있습니다.",
  },
  {
    code: "REGISTERED_VARIANTS_ONLY",
    title: "조회되는 변형만 허용",
    description:
      "동자(同字), 속자(俗字), 약자(略字)는 조회되는 한자에 한하여 사용할 수 있습니다.",
  },
  {
    code: "RADICAL_INTERCHANGE",
    title: "허용 부수 변형",
    description: "示변과 礻변, ++변과 艹변은 서로 바꾸어 쓸 수 있습니다.",
  },
] as const;

const hanjaBank: Record<string, HanjaOption[]> = {
  가: [
    {
      character: "佳",
      reading: "가",
      meaning: "아름다울 가",
      note: "단정한 아름다움과 좋은 사람됨을 담습니다.",
      element: "wood",
      tags: ["아름다움", "품격", "조화"],
      sourceStatus: "sample",
    },
    {
      character: "嘉",
      reading: "가",
      meaning: "아름다울/기릴 가",
      note: "축복과 칭찬, 기쁜 시작의 이미지를 줍니다.",
      element: "fire",
      tags: ["축복", "기쁨", "칭찬"],
      sourceStatus: "sample",
    },
  ],
  나: [
    {
      character: "娜",
      reading: "나",
      meaning: "아리따울 나",
      note: "부드럽고 우아한 인상을 만듭니다.",
      element: "wood",
      tags: ["우아함", "부드러움"],
      sourceStatus: "sample",
    },
    {
      character: "那",
      reading: "나",
      meaning: "어찌/많을 나",
      note: "넓은 가능성과 여유를 상징적으로 연결합니다.",
      element: "earth",
      tags: ["가능성", "여유"],
      sourceStatus: "sample",
    },
  ],
  도: [
    {
      character: "道",
      reading: "도",
      meaning: "길 도",
      note: "자기 길을 바르게 찾는 힘을 강조합니다.",
      element: "earth",
      tags: ["길", "정직", "철학"],
      sourceStatus: "sample",
    },
    {
      character: "度",
      reading: "도",
      meaning: "법도 도",
      note: "균형감과 절제, 기준을 세우는 이미지를 줍니다.",
      element: "metal",
      tags: ["균형", "기준", "절제"],
      sourceStatus: "sample",
    },
  ],
  린: [
    {
      character: "璘",
      reading: "린",
      meaning: "옥빛 린",
      note: "맑게 빛나는 재능과 품격을 담습니다.",
      element: "metal",
      tags: ["맑음", "빛", "재능"],
      sourceStatus: "sample",
    },
  ],
  민: [
    {
      character: "珉",
      reading: "민",
      meaning: "옥돌 민",
      note: "소박하지만 단단한 가치와 성품을 표현합니다.",
      element: "earth",
      tags: ["성품", "단단함"],
      sourceStatus: "sample",
    },
    {
      character: "敏",
      reading: "민",
      meaning: "민첩할 민",
      note: "빠른 이해력과 기민한 판단력을 강조합니다.",
      element: "metal",
      tags: ["지혜", "민첩", "학습"],
      sourceStatus: "sample",
    },
    {
      character: "旻",
      reading: "민",
      meaning: "하늘 민",
      note: "넓은 시야와 따뜻한 하늘의 이미지를 줍니다.",
      element: "fire",
      tags: ["하늘", "시야", "따뜻함"],
      sourceStatus: "sample",
    },
  ],
  서: [
    {
      character: "瑞",
      reading: "서",
      meaning: "상서로울 서",
      note: "좋은 징조와 축복의 의미가 강합니다.",
      element: "earth",
      tags: ["축복", "길상", "평안"],
      sourceStatus: "sample",
    },
    {
      character: "曙",
      reading: "서",
      meaning: "새벽 서",
      note: "새로운 시작과 밝아오는 가능성을 담습니다.",
      element: "fire",
      tags: ["시작", "빛", "희망"],
      sourceStatus: "sample",
    },
  ],
  수: [
    {
      character: "秀",
      reading: "수",
      meaning: "빼어날 수",
      note: "재능과 성취를 자연스럽게 드러냅니다.",
      element: "wood",
      tags: ["재능", "성취"],
      sourceStatus: "sample",
    },
    {
      character: "修",
      reading: "수",
      meaning: "닦을 수",
      note: "꾸준히 자신을 갈고닦는 이미지를 줍니다.",
      element: "metal",
      tags: ["성실", "수양"],
      sourceStatus: "sample",
    },
  ],
  시: [
    {
      character: "詩",
      reading: "시",
      meaning: "시 시",
      note: "언어 감각과 예술적 이미지를 살립니다.",
      element: "wood",
      tags: ["예술", "감성", "언어"],
      sourceStatus: "sample",
    },
    {
      character: "始",
      reading: "시",
      meaning: "비로소 시",
      note: "좋은 시작과 개척의 뜻을 담습니다.",
      element: "fire",
      tags: ["시작", "개척"],
      sourceStatus: "sample",
    },
  ],
  아: [
    {
      character: "雅",
      reading: "아",
      meaning: "맑고 바를 아",
      note: "품위 있고 단정한 인상을 줍니다.",
      element: "earth",
      tags: ["품위", "단정", "맑음"],
      sourceStatus: "sample",
    },
    {
      character: "娥",
      reading: "아",
      meaning: "아름다울 아",
      note: "고운 아름다움과 부드러운 이미지를 담습니다.",
      element: "wood",
      tags: ["아름다움", "부드러움"],
      sourceStatus: "sample",
    },
  ],
  연: [
    {
      character: "妍",
      reading: "연",
      meaning: "고울 연",
      note: "고운 성품과 세련된 느낌을 줍니다.",
      element: "earth",
      tags: ["고움", "세련"],
      sourceStatus: "sample",
    },
    {
      character: "然",
      reading: "연",
      meaning: "그러할 연",
      note: "자연스러움과 진정성을 강조합니다.",
      element: "fire",
      tags: ["자연", "진정성"],
      sourceStatus: "sample",
    },
  ],
  우: [
    {
      character: "祐",
      reading: "우",
      meaning: "도울 우",
      note: "보호와 도움, 좋은 인연의 의미를 담습니다.",
      element: "wood",
      tags: ["도움", "보호", "인연"],
      sourceStatus: "sample",
    },
    {
      character: "宇",
      reading: "우",
      meaning: "집/우주 우",
      note: "넓은 세계와 안정된 기반을 함께 표현합니다.",
      element: "earth",
      tags: ["넓음", "안정", "세계"],
      sourceStatus: "sample",
    },
  ],
  유: [
    {
      character: "裕",
      reading: "유",
      meaning: "넉넉할 유",
      note: "풍요롭고 너그러운 성품을 담습니다.",
      element: "earth",
      tags: ["풍요", "너그러움"],
      sourceStatus: "sample",
    },
    {
      character: "柔",
      reading: "유",
      meaning: "부드러울 유",
      note: "강함보다 유연함으로 오래가는 힘을 줍니다.",
      element: "wood",
      tags: ["유연함", "온화함"],
      sourceStatus: "sample",
    },
  ],
  윤: [
    {
      character: "允",
      reading: "윤",
      meaning: "진실로 윤",
      note: "믿음직함과 바른 약속의 이미지를 줍니다.",
      element: "metal",
      tags: ["진실", "신뢰"],
      sourceStatus: "sample",
    },
    {
      character: "潤",
      reading: "윤",
      meaning: "윤택할 윤",
      note: "삶을 풍요롭게 적시는 부드러운 기운을 담습니다.",
      element: "water",
      tags: ["풍요", "부드러움", "물"],
      sourceStatus: "sample",
    },
  ],
  은: [
    {
      character: "恩",
      reading: "은",
      meaning: "은혜 은",
      note: "감사와 따뜻한 관계성을 담습니다.",
      element: "earth",
      tags: ["감사", "관계", "따뜻함"],
      sourceStatus: "sample",
    },
    {
      character: "銀",
      reading: "은",
      meaning: "은 은",
      note: "맑고 귀한 금속의 이미지를 줍니다.",
      element: "metal",
      tags: ["맑음", "귀함"],
      sourceStatus: "sample",
    },
  ],
  이: [
    {
      character: "理",
      reading: "이",
      meaning: "다스릴/이치 이",
      note: "질서와 합리적인 판단력을 강조합니다.",
      element: "metal",
      tags: ["이치", "질서", "판단"],
      sourceStatus: "sample",
    },
    {
      character: "利",
      reading: "이",
      meaning: "이로울 이",
      note: "사람에게 도움이 되는 실용적 가치를 담습니다.",
      element: "earth",
      tags: ["이로움", "실용"],
      sourceStatus: "sample",
    },
  ],
  준: [
    {
      character: "俊",
      reading: "준",
      meaning: "준걸 준",
      note: "뛰어난 재능과 반듯한 인상을 줍니다.",
      element: "wood",
      tags: ["재능", "뛰어남"],
      sourceStatus: "sample",
    },
    {
      character: "準",
      reading: "준",
      meaning: "법도/기준 준",
      note: "흔들리지 않는 기준과 신뢰감을 담습니다.",
      element: "metal",
      tags: ["기준", "신뢰"],
      sourceStatus: "sample",
    },
  ],
  지: [
    {
      character: "智",
      reading: "지",
      meaning: "지혜 지",
      note: "깊이 생각하고 밝게 판단하는 힘을 줍니다.",
      element: "fire",
      tags: ["지혜", "판단", "학습"],
      sourceStatus: "sample",
    },
    {
      character: "志",
      reading: "지",
      meaning: "뜻 지",
      note: "스스로 세운 뜻과 의지를 강조합니다.",
      element: "fire",
      tags: ["뜻", "의지"],
      sourceStatus: "sample",
    },
    {
      character: "知",
      reading: "지",
      meaning: "알 지",
      note: "배움과 이해력의 이미지를 줍니다.",
      element: "metal",
      tags: ["배움", "이해"],
      sourceStatus: "sample",
    },
  ],
  하: [
    {
      character: "河",
      reading: "하",
      meaning: "강 하",
      note: "넓게 흐르는 힘과 포용성을 담습니다.",
      element: "water",
      tags: ["흐름", "포용", "넓음"],
      sourceStatus: "sample",
    },
    {
      character: "夏",
      reading: "하",
      meaning: "여름 하",
      note: "밝고 생동감 있는 계절 이미지를 줍니다.",
      element: "fire",
      tags: ["밝음", "생동감"],
      sourceStatus: "sample",
    },
  ],
  현: [
    {
      character: "賢",
      reading: "현",
      meaning: "어질 현",
      note: "지혜와 덕을 함께 갖춘 이미지를 줍니다.",
      element: "earth",
      tags: ["지혜", "덕", "어짐"],
      sourceStatus: "sample",
    },
    {
      character: "炫",
      reading: "현",
      meaning: "빛날 현",
      note: "분명하게 드러나는 재능과 존재감을 담습니다.",
      element: "fire",
      tags: ["빛", "재능", "존재감"],
      sourceStatus: "sample",
    },
  ],
};

const negativeHanja: Record<string, RejectedHanja[]> = {
  망: [
    {
      character: "亡",
      reason: "죽음이나 망함의 뜻이 직접적이어서 이름 후보에서 배제합니다.",
      severity: "high",
    },
  ],
  사: [
    {
      character: "死",
      reason: "죽음의 뜻이 직접적이어서 인명 의미 설계에 부적합합니다.",
      severity: "high",
    },
  ],
  병: [
    {
      character: "病",
      reason: "질병의 뜻이 강하므로 이름의 축복성과 충돌합니다.",
      severity: "high",
    },
  ],
  귀: [
    {
      character: "鬼",
      reason: "귀신의 뜻이 직접적이어서 사회적 인상과 충돌할 수 있습니다.",
      severity: "medium",
    },
  ],
  악: [
    {
      character: "惡",
      reason: "악함의 뜻이 직접적이므로 이름 후보에서 제외합니다.",
      severity: "high",
    },
  ],
  원: [
    {
      character: "怨",
      reason: "원망의 뜻이 강해 부모의 바람과 반대되는 인상을 줄 수 있습니다.",
      severity: "high",
    },
  ],
};

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function hangulSyllables(value: string) {
  return Array.from(value.replace(/\s/g, "")).filter((char) =>
    /^[가-힣]$/.test(char),
  );
}

function birthLabel(inputFactors: Record<string, unknown>) {
  const calendarType = stringValue(inputFactors.calendarType);
  const year = stringValue(inputFactors.birthYear);
  const month = stringValue(inputFactors.birthMonth);
  const day = stringValue(inputFactors.birthDay);
  const hour = stringValue(inputFactors.birthHour);
  const date = [year, month, day].filter(Boolean).join(".");
  const type = calendarType === "lunar" ? "음력" : calendarType === "solar" ? "양력" : "";

  return [type, date, hour && hour !== "unknown" ? hour : ""].filter(Boolean).join(" / ");
}

function getSajuElementHint(inputFactors: Record<string, unknown>): HanjaElement {
  const month = Number(stringValue(inputFactors.birthMonth));

  if ([3, 4, 5].includes(month)) {
    return "wood";
  }

  if ([6, 7, 8].includes(month)) {
    return "fire";
  }

  if ([9, 10].includes(month)) {
    return "metal";
  }

  if ([11, 12, 1].includes(month)) {
    return "water";
  }

  return "earth";
}

function scoreOption(
  option: HanjaOption,
  inputFactors: Record<string, unknown>,
  preferredElement: HanjaElement,
) {
  const parentWishes = stringValue(inputFactors.parentWishes);
  const excludedMeanings = stringValue(inputFactors.excludedMeanings);
  const targetText = `${option.meaning} ${option.note} ${option.tags.join(" ")}`;
  let score = 72;

  if (option.element === preferredElement) {
    score += 8;
  }

  for (const tag of option.tags) {
    if (parentWishes.includes(tag)) {
      score += 5;
    }
  }

  if (excludedMeanings && targetText.includes(excludedMeanings)) {
    score -= 50;
  }

  return score;
}

function buildCombination(
  syllables: string[],
  index: number,
  inputFactors: Record<string, unknown>,
) {
  const preferredElement = getSajuElementHint(inputFactors);

  return syllables.map((syllable, syllableIndex) => {
    const options = hanjaBank[syllable];

    if (!options?.length) {
      return null;
    }

    const ranked = [...options].sort(
      (a, b) =>
        scoreOption(b, inputFactors, preferredElement) -
        scoreOption(a, inputFactors, preferredElement),
    );

    return ranked[(index + syllableIndex) % ranked.length];
  });
}

function hasMissingOptions(options: Array<HanjaOption | null>) {
  return options.some((option) => option === null);
}

function candidateMeaning(options: HanjaOption[]) {
  return options
    .map((option) => `${option.character}(${option.meaning})`)
    .join(", ");
}

function officialRulesText() {
  return OFFICIAL_HANJA_RULES.map((rule) => rule.description).join(" ");
}

function excludedCondition(inputFactors: Record<string, unknown>) {
  const excludedMeanings = stringValue(inputFactors.excludedMeanings);

  if (!excludedMeanings) {
    return [];
  }

  return [
    {
      character: "사용자 제외 조건",
      reason: `입력한 제외 조건 "${excludedMeanings}"과 충돌하는 의미는 추천 후보에서 배제해야 합니다.`,
      severity: "medium" as const,
    },
  ];
}

export function normalizeInitialSoundForDisplay(sound: string) {
  if (!sound) {
    return sound;
  }

  const first = sound[0];

  if (first === "녀" || first === "뇨" || first === "뉴" || first === "니") {
    return `첫소리 ㄴ 예외 검토 가능: ${sound}`;
  }

  if (first === "랴" || first === "려" || first === "례" || first === "료" || first === "류" || first === "리") {
    return `첫소리 ㄹ 예외 검토 가능: ${sound}`;
  }

  return sound;
}

export function buildHanjaMeaningResult(inputFactors: Record<string, unknown>) {
  const familyName = stringValue(inputFactors.familyName);
  const rawGivenName = stringValue(inputFactors.givenNameHangul);
  const parentWishes = stringValue(inputFactors.parentWishes);
  const givenSyllables = hangulSyllables(rawGivenName);
  const displayName = `${familyName}${rawGivenName}` || rawGivenName;

  if (!givenSyllables.length) {
    return {
      analysis_summary:
        "한글 이름을 인식하지 못했습니다. 먼저 한글 이름을 입력하면 음절별로 지정 발음에 맞는 인명용 한자 후보를 검토합니다.",
      candidates: [],
      rejected_hanja: [],
      official_verification_note:
        `기준 원본은 ${OFFICIAL_HANJA_SOURCE.title}(${OFFICIAL_HANJA_SOURCE.versionLabel})입니다. ${officialRulesText()}`,
      add_on_recommendations: ["premiumPdf"],
    };
  }

  const missingSyllables = givenSyllables.filter((syllable) => !hanjaBank[syllable]);
  const maxCandidates = missingSyllables.length ? 0 : Math.min(3, givenSyllables.length + 1);

  const candidates = Array.from({ length: maxCandidates }, (_, index) => {
    const combination = buildCombination(givenSyllables, index, inputFactors);

    if (hasMissingOptions(combination)) {
      return null;
    }

    const options = combination as HanjaOption[];
    const hanja = options.map((option) => option.character).join("");
    const preferredElement = getSajuElementHint(inputFactors);
    const baseScore =
      options.reduce(
        (sum, option) => sum + scoreOption(option, inputFactors, preferredElement),
        0,
      ) / options.length;

    return {
      hangul: rawGivenName,
      hanja,
      meaning: candidateMeaning(options),
      official_status:
        "현재 후보는 내장 샘플 기반입니다. 운영 확정 전 official_hanja_entries production 데이터와 대조해야 합니다.",
      character_breakdown: options.map((option, optionIndex) => ({
        syllable: givenSyllables[optionIndex],
        character: option.character,
        designated_reading: option.reading,
        meaning: option.meaning,
        note: option.note,
        source_status: option.sourceStatus,
      })),
      story: `${displayName}의 '${rawGivenName}' 소리를 그대로 유지하면서 ${options
        .map((option) => option.note)
        .join(" ")} ${parentWishes ? `부모가 적은 바람인 "${parentWishes}"와도 연결해 볼 수 있습니다.` : ""}`,
      saju_note: `입력한 출생 정보(${birthLabel(inputFactors) || "미입력"})를 참고하면 ${preferredElement} 기운을 보완 축으로 볼 수 있습니다. 이 항목은 전통 해석 보조값이며 법적 등록 기준은 아닙니다.`,
      suitability_score: Math.max(70, Math.min(96, Math.round(baseScore) - index * 3)),
      caution_notes:
        "한자는 지정 발음으로만 검토해야 하며, 동자/속자/약자와 부수 변형은 공식 조회에서 확인되는 경우에만 허용합니다.",
    };
  }).filter(Boolean);

  const rejectedFromSound = givenSyllables.flatMap((syllable) => negativeHanja[syllable] ?? []);
  const missingRejected = missingSyllables.map((syllable) => ({
    character: syllable,
    reason:
      "현재 내장 샘플 후보에 이 음절의 한자 데이터가 없습니다. 임의 한자를 추천하지 않고 공식 PDF 검수 데이터 import 대상으로 표시합니다.",
    severity: "medium" as const,
  }));

  return {
    analysis_summary: missingSyllables.length
      ? `'${rawGivenName}' 중 ${missingSyllables.join(", ")} 음절은 아직 서비스 내 공식 한자 DB 후보가 없습니다. 잘못된 한자를 제안하지 않도록 추천을 보류하고, PDF 검수 데이터 보강이 필요한 항목으로 표시했습니다.`
      : `'${rawGivenName}'의 각 음절 발음에 맞는 한자 후보만 조합했습니다. 후보는 부모의 바람, 제외 조건, 출생 정보 참고값을 함께 반영해 정렬했습니다.`,
    candidates,
    rejected_hanja: [...rejectedFromSound, ...excludedCondition(inputFactors), ...missingRejected],
    official_verification_note:
      `기준 원본: ${OFFICIAL_HANJA_SOURCE.title}, ${OFFICIAL_HANJA_SOURCE.ruleReference}, ${OFFICIAL_HANJA_SOURCE.versionLabel}. ${officialRulesText()} 출생신고 또는 개명 전에는 대법원/가족관계등록 기준으로 최종 확인해야 합니다.`,
    add_on_recommendations: ["premiumPdf", "calligraphy", "stamp"],
  };
}
