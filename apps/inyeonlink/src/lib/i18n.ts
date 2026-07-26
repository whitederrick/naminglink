// 23개 언어를 쓰는 서비스이지만, 화면 문구가 확정되기 전에 전부 번역하면 화면을 고칠 때마다
// 23벌을 다시 손봐야 한다. 그래서 **구조는 23로케일 기준으로 만들되 지금은 ko·en만 채운다.**
// 나머지는 화면이 굳은 뒤 번역 스크립트로 한 번에 채운다 — 그때 이 파일에 로케일 키만 추가하면
// 되고 화면 코드는 건드리지 않는다.
//
// naminglink의 사전과 공유하지 않는다. 서비스가 다르면 문구도 달라지고, 사전을 공유하면 한쪽
// 수정이 다른 쪽 화면을 흔든다.

export const supportedLocales = [
  "ko",
  "en",
  "ja",
  "zh",
  "de",
  "es",
  "fr",
  "it",
  "pt",
  "vi",
  "th",
  "id",
  "ru",
  "ar",
  "fil",
  "uz",
  "mn",
  "hi",
  "tr",
  "km",
  "ms",
  "kk",
  "pl",
] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  vi: "Tiếng Việt",
  th: "ไทย",
  id: "Bahasa Indonesia",
  ru: "Русский",
  ar: "العربية",
  fil: "Filipino",
  uz: "O‘zbekcha",
  mn: "Монгол",
  hi: "हिन्दी",
  tr: "Türkçe",
  km: "ភាសាខ្មែរ",
  ms: "Bahasa Melayu",
  kk: "Қазақша",
  pl: "Polski",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function isRtlLocale(locale: Locale) {
  return locale === "ar";
}

export type Dictionary = {
  brand: string;
  tagline: string;
  landing: {
    title: string;
    subtitle: string;
    cta: string;
    howTitle: string;
    steps: [string, string, string];
    privacyTitle: string;
    privacyBody: string;
    disclaimer: string;
  };
  form: {
    title: string;
    description: string;
    personA: string;
    personB: string;
    nickname: string;
    nicknamePlaceholder: string;
    nicknameHint: string;
    gender: string;
    male: string;
    female: string;
    genderUnspecified: string;
    genderHint: string;
    birthplace: string;
    birthplaceHint: string;
    calendar: string;
    solar: string;
    lunar: string;
    leapMonth: string;
    birthDate: string;
    year: string;
    month: string;
    day: string;
    birthTime: string;
    unknownTime: string;
    hour: string;
    minute: string;
    submit: string;
    submitting: string;
    errorInvalidDate: string;
    errorGeneric: string;
  };
  result: {
    title: string;
    totalLabel: string;
    breakdown: string;
    recalculate: string;
    copyLink: string;
    copied: string;
    missingInput: string;
    partialTime: string;
    engineVersion: string;
    disclaimer: string;
  };
  bands: Record<"EXCELLENT" | "GOOD" | "FAIR" | "CHALLENGING", string>;
  engines: Record<"saju" | "zodiac", { name: string; description: string }>;
  factors: Record<
    | "dayMasterRelation"
    | "spouseStar"
    | "elementBalance"
    | "dayBranchRelation"
    | "branchRelation",
    string
  >;
  notes: Record<string, string>;
  animals: Record<string, string>;
  elements: Record<string, string>;
};

const ko: Dictionary = {
  brand: "인연링크",
  tagline: "사주와 띠로 보는 두 사람의 궁합",
  landing: {
    title: "두 사람의 인연,\n숫자로 확인해 보세요",
    subtitle:
      "생년월일만 있으면 됩니다. 전통 명리의 사주 궁합과 띠 궁합을 함께 계산해 매칭률로 보여드립니다.",
    cta: "궁합 보기",
    howTitle: "이렇게 계산합니다",
    steps: [
      "두 사람의 생년월일을 입력합니다. 출생 시각은 몰라도 됩니다.",
      "일간 오행·오행 보완·일지 관계로 사주 궁합을, 연지 관계로 띠 궁합을 냅니다.",
      "두 점수를 가중 평균해 최종 매칭률을 보여드립니다.",
    ],
    privacyTitle: "입력한 정보는 저장하지 않습니다",
    privacyBody:
      "생년월일은 계산하는 순간에만 사용하고 어디에도 기록하지 않습니다. 회원가입도 필요 없습니다. 결과 링크에 담긴 정보는 브라우저 주소창의 # 뒤에만 있어 서버로 전송되지 않습니다.",
    disclaimer:
      "전통 명리 관점의 참고 자료이며, 과학적 예측이나 관계에 대한 단정이 아닙니다.",
  },
  form: {
    title: "두 사람의 생년월일",
    description: "출생 시각을 알면 더 정확해지지만, 몰라도 계산됩니다.",
    personA: "첫 번째 사람",
    personB: "두 번째 사람",
    nickname: "부르는 이름",
    nicknamePlaceholder: "예: 나",
    nicknameHint: "결과 화면 표시용입니다. 계산에는 쓰이지 않습니다.",
    gender: "성별",
    male: "남성",
    female: "여성",
    genderUnspecified: "밝히지 않음",
    genderHint:
      "전통 명리는 배우자를 가리키는 자리를 성별에 따라 다르게 봅니다. 밝히지 않으면 그 항목을 빼고 계산합니다.",
    birthplace: "태어난 곳",
    birthplaceHint:
      "출생지의 실제 태양 시각으로 시주를 계산합니다. 서머타임과 과거 표준시 변경도 반영됩니다.",
    calendar: "달력",
    solar: "양력",
    lunar: "음력",
    leapMonth: "윤달",
    birthDate: "생년월일",
    year: "년",
    month: "월",
    day: "일",
    birthTime: "출생 시각",
    unknownTime: "시각을 모릅니다",
    hour: "시",
    minute: "분",
    submit: "궁합 계산하기",
    submitting: "계산 중…",
    errorInvalidDate:
      "입력한 생년월일을 확인해 주세요. 음력이면 윤달 여부도 확인이 필요합니다.",
    errorGeneric: "계산에 실패했습니다. 잠시 후 다시 시도해 주세요.",
  },
  result: {
    title: "궁합 결과",
    totalLabel: "매칭률",
    breakdown: "항목별 점수",
    recalculate: "다시 계산하기",
    copyLink: "결과 링크 복사",
    copied: "복사했습니다",
    missingInput: "결과 정보를 읽을 수 없습니다. 처음부터 다시 입력해 주세요.",
    partialTime:
      "출생 시각을 입력하지 않아 시주를 뺀 채 계산했습니다. 시각을 넣으면 더 정확해집니다.",
    engineVersion: "계산 기준",
    disclaimer:
      "전통 명리 관점의 참고 자료이며, 과학적 예측이나 관계에 대한 단정이 아닙니다.",
  },
  bands: {
    EXCELLENT: "아주 잘 맞는 사이",
    GOOD: "잘 맞는 사이",
    FAIR: "무난한 사이",
    CHALLENGING: "노력이 필요한 사이",
  },
  engines: {
    saju: {
      name: "사주 궁합",
      description: "일간 오행, 오행 보완, 일지 관계를 함께 봅니다.",
    },
    zodiac: {
      name: "띠 궁합",
      description: "태어난 해의 지지(띠)끼리의 관계를 봅니다.",
    },
  },
  factors: {
    dayMasterRelation: "일간 오행 관계",
    spouseStar: "배우자성",
    elementBalance: "오행 보완도",
    dayBranchRelation: "일지 관계",
    branchRelation: "띠 관계",
  },
  notes: {
    "spouseStar.BOTH":
      "서로가 상대의 배우자 자리에 해당하는 기운입니다. 전통 궁합에서 가장 좋게 보는 짝입니다.",
    "spouseStar.ONE":
      "한쪽에게 상대가 배우자 자리의 기운입니다. 끌리는 방향이 한쪽으로 기울 수 있습니다.",
    "spouseStar.NONE":
      "배우자 자리에 해당하는 기운은 서로 아닙니다. 다른 항목에서 어울림을 찾는 조합입니다.",
    "dayMaster.GENERATE":
      "{elementA}과 {elementB}이 서로를 살리는 상생 관계입니다. 한쪽의 기운이 다른 쪽으로 자연스럽게 흘러갑니다.",
    "dayMaster.SAME":
      "두 사람 모두 {elementA} 기운입니다. 서로를 빨리 이해하지만 같은 부분에서 함께 부족해지기 쉽습니다.",
    "dayMaster.CONTROL":
      "{elementA}과 {elementB}이 서로를 누르는 상극 관계입니다. 긴장이 있는 대신 서로를 다잡아 주는 힘도 있습니다.",
    "balance.HIGH":
      "둘을 합치면 다섯 기운이 고르게 채워집니다. 한쪽이 부족한 자리를 다른 쪽이 메웁니다.",
    "balance.MID": "기운이 대체로 고르지만 {scarce} 기운은 둘 다 얇은 편입니다.",
    "balance.LOW":
      "기운이 한쪽으로 몰려 있습니다. 특히 {scarce} 기운이 둘 다 부족합니다.",
    "dayBranch.SAMHAP": "일지가 삼합을 이룹니다. 배우자 자리에서 가장 잘 맞는 조합입니다.",
    "dayBranch.YUKHAP": "일지가 육합입니다. 서로 끌어당기는 짝입니다.",
    "dayBranch.SAME": "일지가 같습니다. 닮은 만큼 편하지만 새로움은 적습니다.",
    "dayBranch.NEUTRAL": "일지끼리 특별한 관계는 없습니다.",
    "dayBranch.CHUNG": "일지가 충입니다. 부딪히기 쉬운 자리라 대화의 방식이 중요합니다.",
    "zodiac.SAMHAP": "{animalA}띠와 {animalB}띠는 삼합입니다. 띠 궁합에서 가장 좋은 조합입니다.",
    "zodiac.YUKHAP": "{animalA}띠와 {animalB}띠는 육합입니다. 서로 잘 어울립니다.",
    "zodiac.SAME": "둘 다 {animalA}띠입니다. 성향이 닮았습니다.",
    "zodiac.NEUTRAL": "{animalA}띠와 {animalB}띠는 특별한 관계가 없습니다.",
    "zodiac.CHUNG": "{animalA}띠와 {animalB}띠는 충입니다. 서로 다른 만큼 배울 것도 많습니다.",
  },
  animals: {
    rat: "쥐",
    ox: "소",
    tiger: "호랑이",
    rabbit: "토끼",
    dragon: "용",
    snake: "뱀",
    horse: "말",
    goat: "양",
    monkey: "원숭이",
    rooster: "닭",
    dog: "개",
    pig: "돼지",
  },
  elements: {
    WOOD: "목(木)",
    FIRE: "화(火)",
    EARTH: "토(土)",
    METAL: "금(金)",
    WATER: "수(水)",
  },
};

const en: Dictionary = {
  brand: "InyeonLink",
  tagline: "Compatibility read through Saju and zodiac signs",
  landing: {
    title: "See how two people\nfit together",
    subtitle:
      "All you need is a birth date. We combine Saju (Four Pillars) compatibility with zodiac compatibility and show it as a match rate.",
    cta: "Check compatibility",
    howTitle: "How it works",
    steps: [
      "Enter both birth dates. The birth time is optional.",
      "Saju compatibility comes from day-master elements, elemental balance and the day branch; zodiac compatibility comes from the year branch.",
      "The two scores are combined into a weighted match rate.",
    ],
    privacyTitle: "Nothing you enter is stored",
    privacyBody:
      "Birth dates are used only while the result is being calculated and are never recorded. No account is needed. Everything in a result link sits after the # in the address bar, which browsers never send to the server.",
    disclaimer:
      "This is a traditional Saju reading offered for reference. It is not a scientific prediction or a verdict on any relationship.",
  },
  form: {
    title: "Both birth dates",
    description:
      "Knowing the birth time makes the reading sharper, but it is not required.",
    personA: "First person",
    personB: "Second person",
    nickname: "What to call them",
    nicknamePlaceholder: "e.g. Me",
    nicknameHint: "Shown on the result screen only. It is not used in the calculation.",
    gender: "Gender",
    male: "Male",
    female: "Female",
    genderUnspecified: "Prefer not to say",
    genderHint:
      "Traditional Saju reads the spouse position differently by gender. If you skip this, that factor is left out of the calculation.",
    birthplace: "Place of birth",
    birthplaceHint:
      "The hour pillar is calculated from true solar time at your birthplace, including daylight saving and historical time-zone changes.",
    calendar: "Calendar",
    solar: "Solar",
    lunar: "Lunar",
    leapMonth: "Leap month",
    birthDate: "Date of birth",
    year: "Year",
    month: "Month",
    day: "Day",
    birthTime: "Time of birth",
    unknownTime: "I don't know the time",
    hour: "Hour",
    minute: "Minute",
    submit: "Calculate compatibility",
    submitting: "Calculating…",
    errorInvalidDate:
      "Please check the birth date. For lunar dates, also check whether it falls in a leap month.",
    errorGeneric: "The calculation failed. Please try again in a moment.",
  },
  result: {
    title: "Compatibility result",
    totalLabel: "Match rate",
    breakdown: "Score by factor",
    recalculate: "Start over",
    copyLink: "Copy result link",
    copied: "Copied",
    missingInput: "This result could not be read. Please enter the dates again.",
    partialTime:
      "No birth time was given, so the hour pillar was left out. Adding it makes the reading more precise.",
    engineVersion: "Calculated with",
    disclaimer:
      "This is a traditional Saju reading offered for reference. It is not a scientific prediction or a verdict on any relationship.",
  },
  bands: {
    EXCELLENT: "An exceptional match",
    GOOD: "A strong match",
    FAIR: "A workable match",
    CHALLENGING: "A match that takes effort",
  },
  engines: {
    saju: {
      name: "Saju compatibility",
      description:
        "Reads day-master elements, elemental balance and the day branch together.",
    },
    zodiac: {
      name: "Zodiac compatibility",
      description: "Reads the relationship between the two birth-year branches.",
    },
  },
  factors: {
    dayMasterRelation: "Day-master elements",
    spouseStar: "Spouse star",
    elementBalance: "Elemental balance",
    dayBranchRelation: "Day branch",
    branchRelation: "Zodiac signs",
  },
  notes: {
    "spouseStar.BOTH":
      "Each of you carries the element that sits in the other's spouse position — the pairing traditional Saju rates most highly.",
    "spouseStar.ONE":
      "One of you carries the element in the other's spouse position. The pull may run stronger in one direction.",
    "spouseStar.NONE":
      "Neither of you carries the other's spouse-position element. This pairing finds its fit in the other factors.",
    "dayMaster.GENERATE":
      "{elementA} and {elementB} nourish each other. Energy flows naturally from one to the other.",
    "dayMaster.SAME":
      "Both carry {elementA} energy. You understand each other quickly, but you also run short in the same places.",
    "dayMaster.CONTROL":
      "{elementA} and {elementB} restrain each other. There is friction, but also a steadying influence.",
    "balance.HIGH":
      "Together the five elements fill out evenly. What one lacks, the other supplies.",
    "balance.MID":
      "The elements are fairly even, though {scarce} runs thin for both of you.",
    "balance.LOW":
      "The elements lean heavily one way. {scarce} in particular is scarce for both of you.",
    "dayBranch.SAMHAP":
      "The day branches form a triple harmony — the strongest pairing in the spouse position.",
    "dayBranch.YUKHAP": "The day branches form a six harmony. You draw each other in.",
    "dayBranch.SAME":
      "The day branches are identical. That makes things easy, but leaves little novelty.",
    "dayBranch.NEUTRAL": "The day branches hold no particular relationship.",
    "dayBranch.CHUNG":
      "The day branches clash. This position is prone to friction, so how you talk to each other matters.",
    "zodiac.SAMHAP":
      "The {animalA} and the {animalB} form a triple harmony — the best zodiac pairing.",
    "zodiac.YUKHAP": "The {animalA} and the {animalB} form a six harmony. You suit each other well.",
    "zodiac.SAME": "You are both born in the year of the {animalA}, so your temperaments echo.",
    "zodiac.NEUTRAL": "The {animalA} and the {animalB} hold no particular relationship.",
    "zodiac.CHUNG":
      "The {animalA} and the {animalB} clash. You differ sharply, which also means there is much to learn.",
  },
  animals: {
    rat: "Rat",
    ox: "Ox",
    tiger: "Tiger",
    rabbit: "Rabbit",
    dragon: "Dragon",
    snake: "Snake",
    horse: "Horse",
    goat: "Goat",
    monkey: "Monkey",
    rooster: "Rooster",
    dog: "Dog",
    pig: "Pig",
  },
  elements: {
    WOOD: "Wood",
    FIRE: "Fire",
    EARTH: "Earth",
    METAL: "Metal",
    WATER: "Water",
  },
};

// ko·en 외 21개 로케일은 화면 확정 후 채운다. 그때까지 en으로 폴백한다.
const dictionaries: Partial<Record<Locale, Dictionary>> = { ko, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

/** 사전에 실제 번역이 있는 로케일. 언어 선택기에서 이 목록만 노출한다. */
export const translatedLocales = Object.keys(dictionaries) as Locale[];

/** "{animalA}띠와 …" 같은 자리 표시자를 채운다. */
export function fillTemplate(
  template: string,
  params: Record<string, string> | undefined,
) {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? params[key] : match,
  );
}
