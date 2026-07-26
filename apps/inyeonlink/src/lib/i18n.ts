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
  reading: {
    chartTitle: string;
    chartHint: string;
    pillarYear: string;
    pillarMonth: string;
    pillarDay: string;
    pillarHour: string;
    pillarHourUnknown: string;
    dayMasterLabel: string;
    animalLabel: string;
    seasonLabel: string;
    elementsTitle: string;
    strongest: string;
    scarcest: string;
    strengthTitle: string;
    cautionTitle: string;
  };
  relation: {
    title: string;
    hint: string;
    /** "{from}이 볼 때 {to}는" 꼴의 안내 */
    directionLabel: string;
    shapes: Record<"ALIKE" | "NURTURING" | "TENSION", { name: string; body: string }>;
    leadNote: Record<"NURTURING" | "TENSION", string>;
  };
  /** 십신 10종 — 이름과 관계에서의 의미 */
  tenGods: Record<string, { name: string; body: string }>;
  /** 일간(천간) 10종 성향 */
  dayMasters: Record<string, { name: string; trait: string }>;
  /** 십이지 성향 */
  animalTraits: Record<string, string>;
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
  footer: {
    disclaimer: string;
    linksLabel: string;
    privacy: string;
    terms: string;
    legalEntity: string;
    representative: string;
    businessNumber: string;
    mailOrderNumber: string;
    address: string;
    contact: string;
    effective: string;
    backHome: string;
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
  reading: {
    chartTitle: "두 사람의 사주",
    chartHint:
      "태어난 연·월·일·시를 각각 두 글자로 나타낸 것이 사주(四柱)입니다. 아래 궁합 점수는 이 여덟 글자에서 나옵니다.",
    pillarYear: "연주",
    pillarMonth: "월주",
    pillarDay: "일주",
    pillarHour: "시주",
    pillarHourUnknown: "시각 미입력",
    dayMasterLabel: "일간",
    animalLabel: "띠",
    seasonLabel: "태어난 계절의 기운",
    elementsTitle: "오행의 세력",
    strongest: "가장 강한 기운",
    scarcest: "가장 약한 기운",
    strengthTitle: "이 관계의 강점",
    cautionTitle: "눈여겨볼 점",
  },
  relation: {
    title: "두 사람의 관계",
    hint: "일간끼리 서로를 어떻게 보는지를 십신(十神)이라는 열 가지 이름으로 나눕니다. 방향이 있어서, 내가 상대를 보는 자리와 상대가 나를 보는 자리가 다를 수 있습니다.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "닮은 사이",
        body: "두 사람의 일간이 같은 기운입니다. 설명하지 않아도 통하는 부분이 많고 취향도 겹칩니다. 대신 잘하는 것과 못하는 것이 같아, 어려운 상황에서는 둘 다 같은 지점에서 막힙니다.",
      },
      NURTURING: {
        name: "키우고 피어나는 사이",
        body: "한쪽의 기운이 다른 쪽으로 흘러갑니다. 받는 쪽은 편안하고 하고 싶은 것이 늘어나며, 주는 쪽은 상대가 잘되는 것에서 보람을 얻습니다. 다만 흐름이 한 방향이라 주는 쪽이 지치지 않도록 돌아오는 것이 있어야 오래갑니다.",
      },
      TENSION: {
        name: "다잡는 사이",
        body: "한쪽이 다른 쪽을 누르는 자리입니다. 긴장이 있는 만큼 서로를 느슨해지지 않게 하고, 함께 일할 때 성과가 잘 납니다. 대신 눌리는 쪽이 계속 평가받는다고 느끼기 쉬워, 지적보다 인정이 먼저여야 합니다.",
      },
    },
    leadNote: {
      NURTURING: "이 관계에서는 **{lead}** 쪽이 기운을 내주는 자리입니다.",
      TENSION: "이 관계에서는 **{lead}** 쪽이 이끄는 자리입니다.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "비견(比肩)",
      body: "나와 어깨를 나란히 하는 자리입니다. 말이 잘 통하고 편하지만, 같은 것을 원할 때는 양보가 어렵습니다.",
    },
    GEOPJAE: {
      name: "겁재(劫財)",
      body: "닮았으나 방식이 다른 자리입니다. 함께 밀어붙일 때 힘이 크고, 나눌 것이 생기면 셈이 예민해집니다.",
    },
    SIKSIN: {
      name: "식신(食神)",
      body: "내 안의 것을 꺼내게 하는 자리입니다. 같이 있으면 말이 늘고 하고 싶은 것이 생깁니다. 가장 편안한 상대 중 하나입니다.",
    },
    SANGGWAN: {
      name: "상관(傷官)",
      body: "내 틀을 흔드는 자리입니다. 재미있고 자극이 되지만, 서로의 말이 날카로워지면 상처가 오래갑니다.",
    },
    PYEONJAE: {
      name: "편재(偏財)",
      body: "챙겨 주고 싶어지는 자리입니다. 활동적이고 즉흥적인 즐거움이 많되, 관계의 무게는 가볍게 흐르기 쉽습니다.",
    },
    JEONGJAE: {
      name: "정재(正財)",
      body: "전통적으로 남성에게 배우자를 뜻하는 자리입니다. 성실히 아끼게 되고, 관계가 일상 속에서 차분히 자리 잡습니다.",
    },
    PYEONGWAN: {
      name: "편관(偏官)",
      body: "나를 긴장시키는 자리입니다. 끌림이 강하고 눈을 떼기 어렵지만, 함께 오래 있으면 압박으로 느껴질 수 있습니다.",
    },
    JEONGGWAN: {
      name: "정관(正官)",
      body: "전통적으로 여성에게 배우자를 뜻하는 자리입니다. 나를 바로잡아 주며, 관계에 질서와 안정감을 줍니다.",
    },
    PYEONIN: {
      name: "편인(偏印)",
      body: "남다른 방식으로 나를 돕는 자리입니다. 깊이 통하는 순간이 있으나, 서로의 방식을 이해하는 데 시간이 걸립니다.",
    },
    JEONGIN: {
      name: "정인(正印)",
      body: "나를 품고 돌보는 자리입니다. 기대고 싶어지고 마음이 놓입니다. 다만 기대는 쪽이 계속 받기만 하면 관계가 기웁니다.",
    },
  },
  dayMasters: {
    甲: { name: "갑목(甲木)", trait: "곧게 자라는 큰 나무입니다. 방향이 정해지면 흔들리지 않고, 굽히기보다 버티는 쪽을 택합니다." },
    乙: { name: "을목(乙木)", trait: "덩굴처럼 유연한 풀입니다. 상황에 맞춰 휘어지며 나아가고, 끊어지지 않는 끈기가 있습니다." },
    丙: { name: "병화(丙火)", trait: "한낮의 태양입니다. 감정을 숨기지 않고 주위를 환하게 만들며, 앞에 나서는 일을 꺼리지 않습니다." },
    丁: { name: "정화(丁火)", trait: "촛불과 등불입니다. 은은하게 오래 가고, 가까운 사람에게 먼저 온기를 나눕니다." },
    戊: { name: "무토(戊土)", trait: "넓은 들과 산입니다. 쉽게 흔들리지 않아 기댈 곳이 되어 주지만, 한번 정한 것은 잘 바꾸지 않습니다." },
    己: { name: "기토(己土)", trait: "밭의 흙입니다. 무엇이든 받아 길러 내며, 드러내기보다 챙기는 쪽에 가깝습니다." },
    庚: { name: "경금(庚金)", trait: "다듬지 않은 쇠입니다. 결단이 빠르고 맺고 끊음이 분명해 일이 지체되는 것을 견디지 못합니다." },
    辛: { name: "신금(辛金)", trait: "다듬어진 보석입니다. 감각이 섬세하고 기준이 높아, 어설픈 것을 그냥 넘기지 못합니다." },
    壬: { name: "임수(壬水)", trait: "큰 강과 바다입니다. 품이 넓고 흐름을 읽는 눈이 있어 상황을 크게 봅니다." },
    癸: { name: "계수(癸水)", trait: "이슬과 빗물입니다. 조용히 스며들며, 말보다 분위기로 먼저 알아챕니다." },
  },
  animalTraits: {
    rat: "빠르게 눈치채고 실속을 챙깁니다. 위기에서 먼저 움직입니다.",
    ox: "느려 보여도 끝을 봅니다. 한번 맡으면 놓지 않습니다.",
    tiger: "겁이 없고 앞장섭니다. 불의를 그냥 지나치지 못합니다.",
    rabbit: "부드럽고 눈치가 빠릅니다. 부딪치기보다 돌아가는 쪽을 압니다.",
    dragon: "품이 크고 이상이 높습니다. 평범한 일에는 잘 만족하지 않습니다.",
    snake: "속을 잘 드러내지 않고 깊이 생각합니다. 판단이 정확합니다.",
    horse: "밝고 활동적입니다. 갇혀 있는 것을 가장 힘들어합니다.",
    goat: "정이 많고 배려가 깊습니다. 모진 말을 오래 담아 둡니다.",
    monkey: "재주가 많고 응용이 빠릅니다. 같은 일을 반복하는 걸 지루해합니다.",
    rooster: "부지런하고 꼼꼼합니다. 어긋난 것을 그냥 두지 못합니다.",
    dog: "의리가 두텁고 한번 믿으면 끝까지 갑니다. 배신에 특히 아파합니다.",
    pig: "너그럽고 솔직합니다. 사람을 잘 믿어 손해를 보기도 합니다.",
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
  footer: {
    disclaimer:
      "전통 명리 관점의 참고 자료이며 과학적 예측이 아닙니다. 입력한 정보는 저장하지 않습니다.",
    linksLabel: "약관 및 정책",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    legalEntity: "상호",
    representative: "대표",
    businessNumber: "사업자등록번호",
    mailOrderNumber: "통신판매업",
    address: "주소",
    contact: "문의",
    effective: "시행일",
    backHome: "처음으로",
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
    // 강점·주의점 문구. 항목별로 "잘 맞을 때"와 "걸릴 때"를 각각 적어 둔다.
    "strength.dayMasterRelation":
      "두 사람의 기질이 서로에게 필요한 방향으로 놓여 있습니다. 상대의 방식이 낯설게 느껴질 때도 결국은 자기에게 없는 것을 채워 주는 쪽으로 작용합니다.",
    "strength.spouseStar":
      "전통적으로 배우자 자리에 해당하는 기운을 서로 지니고 있습니다. 처음부터 이유 없이 편했다면 이 부분일 가능성이 큽니다.",
    "strength.elementBalance":
      "둘이 함께 있을 때 다섯 기운이 고르게 채워집니다. 혼자일 때 부족했던 자리를 상대가 메워 주는 조합입니다.",
    "strength.dayBranchRelation":
      "일지는 전통적으로 배우자 자리로 봅니다. 이 자리가 서로 어울려 함께 지내는 시간이 편안한 편입니다.",
    "strength.branchRelation":
      "띠의 관계가 좋습니다. 처음 만났을 때의 인상이나 주변에서 보는 그림이 자연스러운 조합입니다.",
    "caution.dayMasterRelation":
      "기질이 부딪히기 쉬운 자리입니다. 같은 일을 두고도 속도와 방식이 달라, 상대가 일부러 그런다고 느끼기 쉽습니다. 결론보다 과정을 먼저 맞춰 보십시오.",
    "caution.spouseStar":
      "서로가 전통적으로 말하는 배우자 자리의 기운은 아닙니다. 끌림이 즉각적이지 않을 수 있으나, 오래 겪으며 쌓이는 쪽에 가깝습니다.",
    "caution.elementBalance":
      "기운이 한쪽으로 몰려 있습니다. 둘 다 잘하는 일은 아주 잘하지만, 둘 다 약한 부분은 계속 비어 있게 됩니다. 그 자리는 밖에서 채우는 편이 낫습니다.",
    "caution.dayBranchRelation":
      "함께 지내는 자리에서 마찰이 생기기 쉽습니다. 큰 문제보다 생활 습관 같은 작은 것에서 부딪히는 경우가 많으니, 규칙을 미리 정해 두면 줄어듭니다.",
    "caution.branchRelation":
      "띠로는 서로 반대편에 놓입니다. 보는 방식이 다른 만큼 부딪히기도 하지만, 그만큼 상대에게 배울 것이 있는 조합이기도 합니다.",

    "spouseStar.MUTUAL":
      "서로가 상대의 배우자 자리(정재·정관)에 정확히 해당합니다. 전통 궁합에서 가장 좋게 보는 짝입니다.",
    "spouseStar.STRONG":
      "한쪽은 배우자 자리에 정확히 해당하고, 다른 쪽도 그에 준하는 자리입니다. 서로에게 향하는 마음의 크기가 조금 다를 수 있습니다.",
    "spouseStar.PARTIAL":
      "한쪽에게만 상대가 배우자 자리입니다. 처음 끌리는 쪽이 한쪽으로 기울기 쉬우니, 표현을 미루지 않는 편이 좋습니다.",
    "spouseStar.SLIGHT":
      "배우자 자리에 준하는 관계가 한쪽에 있습니다. 즉각적인 끌림보다 겪으면서 쌓이는 쪽입니다.",
    "spouseStar.NONE":
      "전통적으로 말하는 배우자 자리는 서로 아닙니다. 이 조합은 끌림보다 함께 지내며 만들어 가는 쪽에 가깝습니다.",
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
  reading: {
    chartTitle: "Both charts",
    chartHint:
      "Saju renders the year, month, day and hour of birth as two characters each. The scores below all come from these eight characters.",
    pillarYear: "Year",
    pillarMonth: "Month",
    pillarDay: "Day",
    pillarHour: "Hour",
    pillarHourUnknown: "No birth time",
    dayMasterLabel: "Day master",
    animalLabel: "Zodiac",
    seasonLabel: "Season of birth",
    elementsTitle: "Elemental strength",
    strongest: "Strongest",
    scarcest: "Scarcest",
    strengthTitle: "What this pairing has going for it",
    cautionTitle: "What to watch",
  },
  relation: {
    title: "How you two sit together",
    hint: "Saju names the way two day masters see each other with ten terms. The reading has direction — how you see them and how they see you can differ.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Alike",
        body: "Your day masters carry the same energy. Much goes without saying and your tastes overlap. The catch is that you are strong and weak in the same places, so difficulty tends to stall you both at the same point.",
      },
      NURTURING: {
        name: "One nourishes, one flourishes",
        body: "Energy flows one way. The receiving side feels at ease and finds more they want to do; the giving side takes satisfaction in the other doing well. Because the flow is one-directional, something has to come back or the giver eventually runs dry.",
      },
      TENSION: {
        name: "One steadies the other",
        body: "One of you sits in the position that restrains the other. The tension keeps you both from going slack and tends to produce results when you work together. The restrained side can feel permanently assessed, so recognition has to come before correction.",
      },
    },
    leadNote: {
      NURTURING: "Here **{lead}** is the one giving energy.",
      TENSION: "Here **{lead}** is the one setting the pace.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Companion (比肩)",
      body: "Someone standing shoulder to shoulder. Easy to talk to and easy to be around — but hard to yield to when you both want the same thing.",
    },
    GEOPJAE: {
      name: "Rival (劫財)",
      body: "Alike, but going about it differently. Formidable when pushing in the same direction; sharp about the arithmetic once there is something to divide.",
    },
    SIKSIN: {
      name: "Expression (食神)",
      body: "Someone who draws what is in you out. You talk more and want to do more around them. One of the most comfortable positions there is.",
    },
    SANGGWAN: {
      name: "Disruptor (傷官)",
      body: "Someone who unsettles your frame. Interesting and stimulating — but once words turn sharp between you, the cut lasts.",
    },
    PYEONJAE: {
      name: "Windfall (偏財)",
      body: "Someone you want to look after. Plenty of spontaneous fun, though the weight of the relationship can stay light.",
    },
    JEONGJAE: {
      name: "Steady Wealth (正財)",
      body: "Traditionally the spouse position for a man. Care comes steadily, and the relationship settles into ordinary days rather than peaks.",
    },
    PYEONGWAN: {
      name: "Challenger (偏官)",
      body: "Someone who keeps you on edge. The pull is strong and hard to look away from, but sustained closeness can start to feel like pressure.",
    },
    JEONGGWAN: {
      name: "Authority (正官)",
      body: "Traditionally the spouse position for a woman. They set you straight, and bring order and steadiness to the relationship.",
    },
    PYEONIN: {
      name: "Unconventional Support (偏印)",
      body: "Someone who helps you in an unusual way. There are moments of real depth, though it takes time to understand each other's method.",
    },
    JEONGIN: {
      name: "Nurture (正印)",
      body: "Someone who holds and looks after you. You want to lean, and your mind settles. If the leaning only goes one way, though, the relationship tilts.",
    },
  },
  dayMasters: {
    甲: { name: "Yang Wood (甲)", trait: "A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend." },
    乙: { name: "Yin Wood (乙)", trait: "A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap." },
    丙: { name: "Yang Fire (丙)", trait: "The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally." },
    丁: { name: "Yin Fire (丁)", trait: "Candlelight. It burns quietly and long, and warms those closest first." },
    戊: { name: "Yang Earth (戊)", trait: "Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made." },
    己: { name: "Yin Earth (己)", trait: "Field soil. It takes in whatever comes and grows it, tending rather than displaying." },
    庚: { name: "Yang Metal (庚)", trait: "Unworked iron. Decisive and clear-cut, with little patience for things left hanging." },
    辛: { name: "Yin Metal (辛)", trait: "A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass." },
    壬: { name: "Yang Water (壬)", trait: "River and sea. Broad in outlook, with an eye for how things are flowing." },
    癸: { name: "Yin Water (癸)", trait: "Dew and rain. It seeps in quietly and reads the mood before the words." },
  },
  animalTraits: {
    rat: "Quick to notice and quick to secure what matters. First to move in a crisis.",
    ox: "Slow-looking but sees things through. What it takes on, it does not drop.",
    tiger: "Fearless and out in front. Cannot let unfairness pass.",
    rabbit: "Gentle and perceptive. Knows how to go around rather than collide.",
    dragon: "Large-hearted with high ideals. Rarely content with the ordinary.",
    snake: "Keeps its own counsel and thinks deeply. Judges accurately.",
    horse: "Bright and restless. Being fenced in is the hardest thing.",
    goat: "Warm and considerate. Holds harsh words for a long time.",
    monkey: "Resourceful and quick to adapt. Bored by repetition.",
    rooster: "Diligent and exacting. Cannot leave a thing out of place.",
    dog: "Loyal to the end once trust is given. Betrayal cuts especially deep.",
    pig: "Generous and straightforward. Trusts readily, sometimes at a cost.",
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
  footer: {
    disclaimer:
      "A traditional Saju reading offered for reference, not a scientific prediction. Nothing you enter is stored.",
    linksLabel: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    legalEntity: "Business",
    representative: "Representative",
    businessNumber: "Registration no.",
    mailOrderNumber: "E-commerce reg.",
    address: "Address",
    contact: "Contact",
    effective: "Effective",
    backHome: "Back to home",
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
    "strength.dayMasterRelation":
      "Your temperaments sit in a position that serves the other. Even when the other's way feels foreign, it tends to supply what you lack.",
    "strength.spouseStar":
      "You each carry the element traditionally read as the spouse position. If things felt easy from the start for no obvious reason, this is likely why.",
    "strength.elementBalance":
      "Together the five elements fill out evenly. What was thin on your own gets covered by the other.",
    "strength.dayBranchRelation":
      "The day branch is traditionally read as the spouse's seat. Yours sit well together, which tends to make shared time comfortable.",
    "strength.branchRelation":
      "The zodiac signs sit well together — the kind of pairing that looks natural from the outside and reads easily on first meeting.",
    "caution.dayMasterRelation":
      "This is where temperaments rub. Faced with the same task your pace and method differ, which is easy to misread as deliberate. Agree on the process before the conclusion.",
    "caution.spouseStar":
      "Neither of you carries what tradition calls the other's spouse-position element. The pull may not be immediate; this is a pairing that accumulates over time instead.",
    "caution.elementBalance":
      "The elements lean one way. What you are both good at, you are very good at — but what you both lack stays unfilled. Better to source that from outside.",
    "caution.dayBranchRelation":
      "Friction is likely in the shared-life position. Usually it shows up in small habits rather than large matters, so settling a few ground rules early helps.",
    "caution.branchRelation":
      "Your zodiac signs sit opposite each other. You see things differently, which causes friction — and also means there is plenty to learn from each other.",

    "spouseStar.MUTUAL":
      "Each of you sits exactly in the other's spouse position — the pairing traditional Saju rates most highly.",
    "spouseStar.STRONG":
      "One of you sits exactly in the spouse position and the other close to it. What each feels toward the other may differ a little in size.",
    "spouseStar.PARTIAL":
      "Only one of you sits in the other's spouse position. The initial pull tends to run one way, so it is worth not putting off saying so.",
    "spouseStar.SLIGHT":
      "One of you sits adjacent to the spouse position. This accumulates through time together rather than arriving as immediate attraction.",
    "spouseStar.NONE":
      "Neither of you occupies what tradition calls the spouse position. This pairing is built through living alongside each other rather than through pull.",
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
