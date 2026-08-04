// 23개 언어를 쓰는 서비스이지만, 화면 문구가 확정되기 전에 전부 번역하면 화면을 고칠 때마다
// 23벌을 다시 손봐야 한다. 그래서 **구조는 23로케일 기준으로 만들되 지금은 ko·en만 채운다.**
// 나머지는 화면이 굳은 뒤 번역 스크립트로 한 번에 채운다 — 그때 이 파일에 로케일 키만 추가하면
// 되고 화면 코드는 건드리지 않는다.
//
// naminglink의 사전과 공유하지 않는다. 서비스가 다르면 문구도 달라지고, 사전을 공유하면 한쪽
// 수정이 다른 쪽 화면을 흔든다.

// ko·en 외 21개는 로케일당 파일 하나로 둔다. 한 파일에 23벌을 넣으면 1만 줄이 넘어 어느
// 언어를 고치든 diff가 통째로 흔들린다. 여기서 하는 일은 등록뿐이고, 문구는 각 파일에 있다.
// (각 파일은 `import type { Dictionary }`로 이 파일을 되참조하지만 **타입 전용**이라 런타임
// 순환이 생기지 않는다.)
import { localeCodes } from "@/lib/locale-codes";

// 목록 자체는 `lib/locale-codes.ts`에 있다. 미들웨어가 이 파일(23개 사전을 전부 끌어온다)을
// 엣지로 올리지 않고 코드 목록만 읽게 하려는 것이고, 그러면서도 두 곳이 갈리지 않게 하려면
// 한쪽이 다른 쪽을 그대로 가져다 쓰는 편이 맞다.
export const supportedLocales = localeCodes;

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

// 언어 배치는 naminglink와 같다(`naminglink/src/lib/services.ts`의 primaryLocales).
// 기본 줄에 6개를 두고 나머지는 '더보기'로 접는다 — 두 서비스를 오가는 사용자가 같은 자리에서
// 같은 언어를 찾게 하려는 것이라, 순서를 바꾸려면 양쪽을 함께 바꿔야 한다.
export const primaryLocales: Locale[] = ["ko", "en", "ja", "zh", "de", "es"];

export const secondaryLocales: Locale[] = supportedLocales.filter(
  (locale) => !primaryLocales.includes(locale),
);

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function isRtlLocale(locale: Locale) {
  return locale === "ar";
}

/**
 * 리포트 PDF 판매 문구 한 벌. 상품이 둘이라(총운·프리미엄 총운) 같은 모양을 두 번 쓴다.
 */
export type ReportCopy = {
    title: string;
    body: string;
    /** "{price} 결제하고 받기" */
    buyButton: string;
    preparing: string;
    ordering: string;
    paying: string;
    issuing: string;
    done: string;
    failed: string;
    /** 결제는 됐는데 파일을 못 받은 경우 다시 시도할 때 */
    retry: string;
    contents: string[];
    /**
     * 청약철회 제한 동의. 전자상거래법 제17조 제2항 단서는, 즉시 제공되는 디지털 콘텐츠라도
     * **철회가 불가함을 미리 알리고 동의를 받는 조치**를 하지 않으면 소비자가 그대로 철회할 수
     * 있다고 정한다. 약관에 적어 두는 것만으로는 부족해서 결제 직전에 따로 받는다.
     */
    consentLabel: string;
    consentRequired: string;
    /** 전자상거래 상품정보제공 고시(디지털콘텐츠) 항목 */
    productInfoTitle: string;
    productInfo: Array<[string, string]>;
    /** 환불을 어디로 요청하는지 */
    refundContact: string;
    /**
     * PDF가 화면과 다른 언어로 나갈 때의 고지.
     *
     * 지금 해당하는 것은 아랍어·크메르어뿐이다 — 그 두 문자 체계는 PDF 렌더가 죽어서
     * 영어로 낸다(`lib/pdf/fonts.tsx`). **결제 전에 알아야 하는 조건**이라 구매 패널이
     * 띄운다. 나머지 로케일에서는 화면에 나오지 않는다.
     */
    pdfLanguageNotice: string;
};

export type Dictionary = {
  brand: string;
  tagline: string;
  /** 언어 선택기. 문구는 naminglink의 같은 키(currentLanguage/moreLanguages/closeLanguages)와 맞춘다. */
  currentLanguage: string;
  moreLanguages: string;
  closeLanguages: string;
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
    /** 입력 묶음의 legend. 한 사람만 받으므로 자리 이름이 하나다. */
    meLegend: string;
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
    /** 광고 관문이 꺼져 있을 때 쓰는 문구. 없는 광고를 예고하지 않는다. */
    submitNoAd: string;
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
    /** 신강·신약 */
    bodyStrengthTitle: string;
    /** "지금 필요한 기운" */
    favorableLabel: string;
  };
  /** 억부용신 판정 결과의 이름과 설명. */
  bodyStrength: Record<"STRONG" | "BALANCED" | "WEAK", { name: string; body: string }>;
  /** 십신 10종 — 이름과 내 사주 안에서의 의미 */
  tenGods: Record<string, { name: string; body: string }>;
  /** 일간(천간) 10종 성향 */
  dayMasters: Record<string, { name: string; trait: string }>;
  /**
   * 일간 10종을 **겉으로 드러나는 행동**으로 옮긴 것.
   *
   * `dayMasters.trait`은 "곧게 자라는 큰 나무입니다" 같은 비유다. 그 자체로 틀린 말은 아니지만
   * 자기 자신에게 대 보기가 어렵다. 그래서 같은 성질을 일상에서 확인할 수 있는 행동으로
   * 풀어 함께 싣는다. 비유를 대체하지 않고 **덧붙인다.**
   */
  dayMasterSigns: Record<string, string[]>;
  /** 십이지 성향 */
  animalTraits: Record<string, string>;
  result: {
    title: string;
    recalculate: string;
    copyLink: string;
    copied: string;
    missingInput: string;
    partialTime: string;
    engineVersion: string;
    disclaimer: string;
  };
  /**
   * 오늘의 운세.
   *
   * **엔진이 내는 것은 값이지 문장이 아니다**(`engines/today-fortune.ts`의 주석 참고). 등급도
   * 카테고리도 근거 항목도 전부 열거값으로 나오므로, 사람이 읽을 말은 전부 여기에 있다.
   * 화면이 열거값을 그대로 찍으면 `DAEGIL`·`wealth`·`WOOD`가 보인다.
   */
  today: {
    /** 머리글 메뉴 이름 */
    menu: string;
    title: string;
    /** 오늘의 간지 — "오늘의 일진" */
    pillarLabel: string;
    scoreLabel: string;
    grades: Record<
      "DAEGIL" | "GIL" | "PYEONG" | "JUUI" | "JOSIM",
      { name: string; body: string }
    >;
    categories: Record<"wealth" | "love" | "career" | "health", string>;
    luckyTitle: string;
    luckyElement: string;
    luckyColor: string;
    luckyDirection: string;
    luckyTime: string;
    luckyNumber: string;
    basisTitle: string;
    /**
     * 점수 근거 항목의 이름. 키는 엔진의 `Factor.key`와 같아야 한다 — 억부 관계 13종과
     * 지지 관계 7종(`BRANCH_*`)이다. `Record<string, …>`이 아니라 열거로 두어야 엔진에
     * 항목이 늘 때 여기가 비는 것이 컴파일에서 잡힌다.
     */
    factors: Record<
      | "TODAY_IS_YONGSIN"
      | "TODAY_GENERATES_YONGSIN"
      | "TODAY_IS_GISIN"
      | "TODAY_CONTROLS_YONGSIN"
      | "TODAY_GENERATES_SELF"
      | "TODAY_SAME_ELEMENT"
      | "SELF_GENERATES_TODAY"
      | "TODAY_CONTROLS_SELF"
      | "SELF_CONTROLS_TODAY"
      | "WEAK_HELPED"
      | "STRONG_OVERFED"
      | "STRONG_DRAINED"
      | "WEAK_BURDENED"
      | "BRANCH_SAMHAP"
      | "BRANCH_BANHAP"
      | "BRANCH_YUKHAP"
      | "BRANCH_SAME"
      | "BRANCH_NEUTRAL"
      | "BRANCH_WONJIN"
      | "BRANCH_CHUNG",
      string
    >;
    /**
     * 생년월일을 저장하지 않는 서비스라 "저장해 둔 내 사주"가 없다. 매일 다시 넣게 하는 대신
     * 결과 링크를 즐겨찾기하면 그 링크가 날마다 오늘 값을 낸다 — 그 안내다.
     */
    bookmarkHint: string;
    disclaimer: string;
  };
  /**
   * 광고 자리 표시. 애드센스는 광고에 라벨을 붙일 때 "광고"에 해당하는 말만 허용한다
   * ("추천", "관련 글" 같은 표현은 정책 위반이다).
   */
  ads: { label: string };
  analyzing: {
    /** 계산이 도는 잠깐 동안(0.1초 남짓) 보이는 문구. */
    title: string;
    /** 사주를 읽는 태도에 관한 문장들. 광고를 보는 동안 하나씩 바뀐다. */
    quotes: string[];
    watching: string;
    /** "{seconds}초 후 결과가 열립니다" */
    remaining: string;
  };
  /**
   * 유료 리포트 전용 라벨.
   *
   * **화면에는 나오지 않는 값들의 이름이다.** `publicReading`이 걸러 내는 필드
   * (`PAID_ONLY_READING_FIELDS`)를 PDF가 표로 그리는데, 그 표의 머리행과 범례가 여기 있다.
   * 화면 사전에 섞어 두면 무료 화면이 실수로 쓸 수 있어 따로 둔다.
   */
  reportDetail: {
    depthTitle: string;
    /** 왕상휴수사 표 */
    vitalityTitle: string;
    vitalityHint: string;
    vitalities: Record<
      "WANG" | "SANG" | "HYU" | "SU" | "SA",
      { name: string; body: string }
    >;
    /** 월령을 곱하기 전/후 세력 */
    rawLabel: string;
    strengthLabel: string;
    earthSeasonNote: string;
    /** 신강·신약을 가른 근거 숫자 */
    allyRatioLabel: string;
    allyRatioHint: string;
    /** 원국 천간의 십신 표 */
    stemGodsTitle: string;
    stemGodsHint: string;
    pillarColumn: string;
    tenGodColumn: string;
    meaningColumn: string;
    /** 오늘 점수의 근거 항목 표(프리미엄만) */
    factorsTitle: string;
    factorsHint: string;
    deltaColumn: string;
    /** 부록 — 이 사주를 어떻게 뽑았는가 */
    appendixTitle: string;
    timeCorrectionLabel: string;
    timeCorrectionApplied: string;
    timeCorrectionNone: string;
    timeCorrectionDateShift: string;
    calendarLabel: string;
    solarLabel: string;
    lunarLabel: string;
    lunarUnavailable: string;
  };
  /** 사주 총운 리포트 PDF 판매. */
  report: ReportCopy;
  /** 프리미엄 총운 리포트 PDF 판매(대운·세운까지). */
  premiumReport: ReportCopy;
  footer: {
    privacy: string;
    terms: string;
    refund: string;
    pricing: string;
    legalEntity: string;
    representative: string;
    businessNumber: string;
    mailOrderNumber: string;
    address: string;
    customerCenter: string;
    email: string;
    privacyOfficer: string;
    hostingProvider: string;
    providedBy: string;
    effective: string;
    backHome: string;
  };
  animals: Record<string, string>;
  elements: Record<string, string>;
};

const ko: Dictionary = {
  brand: "사주링크",
  tagline: "생년월일로 읽는 나의 사주",
  currentLanguage: "현재 언어",
  moreLanguages: "더보기",
  closeLanguages: "닫기",
  landing: {
    title: "타고난 여덟 글자를,\n오늘의 말로 읽어 드립니다",
    subtitle:
      "전통 명리로 사주 원국을 세우고, 오행의 세력과 일간의 힘을 함께 보여드립니다.",
    cta: "내 사주 보기",
    howTitle: "이렇게 봅니다",
    steps: [
      "생년월일을 입력합니다. 출생 시각은 선택 사항입니다.",
      "태어난 연·월·일·시를 여덟 글자로 세워 원국을 뽑고, 오행의 세력과 일간의 힘을 봅니다.",
      "오늘의 일진을 원국에 대어, 오늘의 운세를 함께 보여드립니다.",
    ],
    privacyTitle: "입력한 정보는 저장하지 않습니다",
    privacyBody:
      "입력된 정보는 분석에만 사용하고 어디에도 기록하지 않습니다.\n결과 링크에 담긴 정보는 서버로 전송 및 저장되지 않습니다.",
    disclaimer:
      "분석 결과는 전통 명리 관점의 참고 자료일뿐, 과학적 예측이나 미래의 단정이 아닙니다.",
  },
  form: {
    title: "생년월일",
    description:
      "출생 시각을 알면 더 정확한 분석이 가능하지만, 몰라도 분석할 수 있습니다.",
    meLegend: "나의 정보",
    nickname: "성명(본명)",
    nicknamePlaceholder: "예: 김서윤",
    nicknameHint: "결과 화면 표시용입니다. 분석에는 활용되지 않습니다.",
    gender: "성별",
    male: "남성",
    female: "여성",
    genderUnspecified: "밝히지 않음",
    genderHint:
      "전통 명리는 배우자와 자식을 가리키는 자리를 성별에 따라 다르게 봅니다. 밝히지 않으면 해당 항목은 분석에서 제외됩니다.",
    birthplace: "태어난 곳",
    birthplaceHint:
      "출생지의 실제 태양 시각으로 시주를 계산합니다. 목록에 없는 지역은 가장 가까운 도시를 고르시면 됩니다.\n국내 본토는 도시 간 차이가 2분 이내입니다. 서머타임과 과거 표준시 변경도 반영됩니다.",
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
    submit: "광고 확인 후 내 사주 보기",
    submitNoAd: "내 사주 보기",
    submitting: "계산 중…",
    errorInvalidDate:
      "입력한 생년월일을 확인해 주세요. 음력이면 윤달 여부도 확인이 필요합니다.",
    errorGeneric: "계산에 실패했습니다. 잠시 후 다시 시도해 주세요.",
  },
  reading: {
    chartTitle: "나의 사주 원국",
    chartHint:
      "태어난 연·월·일·시를 각각 두 글자로 나타낸 것이 사주(四柱)입니다. 아래 풀이는 모두 이 여덟 글자에서 나옵니다.",
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
    strengthTitle: "타고난 강점",
    cautionTitle: "눈여겨볼 점",
    bodyStrengthTitle: "일간의 힘",
    favorableLabel: "지금 필요한 기운",
  },
  bodyStrength: {
    STRONG: {
      name: "신강(身强)",
      body: "일간을 돕는 기운이 넉넉한 편입니다. 스스로 밀고 나가는 힘이 있는 대신 한쪽으로 쏠리기 쉬워, 덜어 내고 풀어 주는 기운이 있을 때 오히려 편안해집니다.",
    },
    BALANCED: {
      name: "중화(中和)",
      body: "일간을 돕는 기운과 덜어 내는 기운이 엇비슷합니다. 어느 한쪽으로 단정하기 어려운 자리라, 여기서는 지금 가장 얇은 기운을 필요한 것으로 봅니다.",
    },
    WEAK: {
      name: "신약(身弱)",
      body: "일간을 돕는 기운이 얇은 편입니다. 주변의 힘을 잘 빌리는 대신 혼자 오래 버티는 일에는 지치기 쉬워, 받쳐 주는 기운이 있을 때 힘이 납니다.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "비견(比肩)",
      body: "나와 어깨를 나란히 하는 기운입니다. 두터우면 스스로 버티는 힘이 크고, 남에게 기대기보다 제 몫을 먼저 챙깁니다.",
    },
    GEOPJAE: {
      name: "겁재(劫財)",
      body: "나를 닮았으나 방식이 다른 기운입니다. 밀어붙이는 힘을 주는 대신, 두터우면 가진 것이 흩어지기 쉽습니다.",
    },
    SIKSIN: {
      name: "식신(食神)",
      body: "내 안의 것을 밖으로 꺼내는 기운입니다. 표현과 먹고사는 즐거움이 여기서 나오고, 사주에 있으면 여유가 생깁니다.",
    },
    SANGGWAN: {
      name: "상관(傷官)",
      body: "짜인 틀을 흔드는 기운입니다. 재주와 날카로움을 주지만, 두터우면 규율과 부딪히기 쉽습니다.",
    },
    PYEONJAE: {
      name: "편재(偏財)",
      body: "넓게 벌리는 재물의 기운입니다. 활동적이고 씀씀이가 크며, 뜻밖의 자리에서 기회가 옵니다.",
    },
    JEONGJAE: {
      name: "정재(正財)",
      body: "차곡차곡 쌓는 재물의 기운입니다. 전통 명리에서는 남성의 배우자 자리로도 봅니다.",
    },
    PYEONGWAN: {
      name: "편관(偏官)",
      body: "나를 긴장시켜 세우는 기운입니다. 위기에서 강해지는 대신, 두터우면 늘 쫓기는 느낌으로 남습니다.",
    },
    JEONGGWAN: {
      name: "정관(正官)",
      body: "나를 바로잡는 질서의 기운입니다. 이름과 자리를 지키게 하며, 전통 명리에서는 여성의 배우자 자리로도 봅니다.",
    },
    PYEONIN: {
      name: "편인(偏印)",
      body: "남다른 길로 나를 받쳐 주는 기운입니다. 깊이 파고드는 힘을 주지만, 두터우면 생각이 앞서 손이 늦습니다.",
    },
    JEONGIN: {
      name: "정인(正印)",
      body: "나를 품어 기르는 기운입니다. 배움과 기댈 곳을 주며, 두터우면 스스로 나서는 일이 늦어집니다.",
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
  dayMasterSigns: {
    甲: [
      "처음 만난 자리에서도 자기 생각을 그대로 말합니다.",
      "한번 정한 약속이나 계획을 잘 바꾸지 않습니다.",
      "거절할 때 돌려 말하지 않아 딱딱하게 들릴 수 있습니다.",
    ],
    乙: [
      "부딪치는 자리를 피하고 다른 길로 돌아갑니다.",
      "부드러워 보이는데 결국 자기 뜻대로 가 있습니다.",
      "여럿이 있으면 분위기부터 살핍니다.",
    ],
    丙: [
      "처음 보는 사람에게 먼저 말을 겁니다.",
      "좋고 싫음이 표정에 그대로 드러납니다.",
      "여럿이 모이면 자연스럽게 가운데에 서 있습니다.",
    ],
    丁: [
      "처음에는 조용한데 가까워지면 살뜰히 챙깁니다.",
      "여럿보다 한둘과 오래 이야기하는 자리를 좋아합니다.",
      "남이 흘린 말을 기억해 뒀다 나중에 꺼냅니다.",
    ],
    戊: [
      "말수가 적고 급한 일에도 목소리가 잘 올라가지 않습니다.",
      "다들 결정을 미룰 때 마지막에 정리하는 쪽입니다.",
      "한번 아니라고 한 것은 오래 그대로입니다.",
    ],
    己: [
      "자기 이야기보다 상대 이야기를 더 오래 듣습니다.",
      "부탁을 잘 거절하지 못해 일이 몰립니다.",
      "티 내지 않고 챙긴 것이 나중에야 드러납니다.",
    ],
    庚: [
      "결정이 빠르고 아니다 싶으면 그 자리에서 말합니다.",
      "돌려 말하지 않아 차갑게 들릴 때가 있습니다.",
      "일이 늘어지면 눈에 띄게 답답해합니다.",
    ],
    辛: [
      "옷차림이나 물건을 고르는 데 자기 기준이 분명합니다.",
      "어설프게 해 둔 것을 그냥 넘기지 못하고 짚습니다.",
      "칭찬에 인색한 편인데 한번 인정하면 확실합니다.",
    ],
    壬: [
      "사람을 가리지 않고 두루 어울립니다.",
      "눈앞의 일보다 나중 이야기를 먼저 꺼냅니다.",
      "한자리에 오래 매여 있는 것을 답답해합니다.",
    ],
    癸: [
      "말수가 적은데 상황은 정확히 읽고 있습니다.",
      "분위기가 바뀌면 가장 먼저 알아챕니다.",
      "속내를 잘 드러내지 않아 알기까지 시간이 걸립니다.",
    ],
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
    title: "사주 풀이 결과",
    recalculate: "다시 보기",
    copyLink: "결과 링크 복사",
    copied: "복사했습니다",
    missingInput: "결과 정보를 읽을 수 없습니다. 처음부터 다시 입력해 주세요.",
    partialTime:
      "출생 시각을 입력하지 않아 시주를 뺀 채 보았습니다. 시각을 넣으면 더 정확해집니다.",
    engineVersion: "계산 기준",
    disclaimer:
      "전통 명리 관점의 참고 자료이며, 과학적 예측이나 미래에 대한 단정이 아닙니다.",
  },
  today: {
    menu: "오늘의 운세",
    title: "오늘의 운세",
    pillarLabel: "오늘의 일진",
    scoreLabel: "오늘의 점수",
    grades: {
      DAEGIL: {
        name: "대길(大吉)",
        body: "오늘의 기운이 사주에 가장 잘 맞물리는 날입니다. 미뤄 둔 일을 꺼내기에 좋습니다.",
      },
      GIL: {
        name: "길(吉)",
        body: "흐름이 순한 날입니다. 평소 하던 일이 평소보다 수월하게 풀립니다.",
      },
      PYEONG: {
        name: "평(平)",
        body: "특별히 밀어 주지도 막지도 않는 날입니다. 하던 대로 하면 하던 만큼 됩니다.",
      },
      JUUI: {
        name: "주의(注意)",
        body: "기운이 어긋나는 자리가 있습니다. 새로 벌이기보다 마무리에 두는 편이 낫습니다.",
      },
      JOSIM: {
        name: "조심(操心)",
        body: "오늘의 기운이 사주를 눌러 세우는 날입니다. 결정을 미룰 수 있으면 미루십시오.",
      },
    },
    categories: {
      wealth: "재물",
      love: "애정",
      career: "직업",
      health: "건강",
    },
    luckyTitle: "오늘 곁에 두면 좋은 것",
    luckyElement: "기운",
    luckyColor: "색",
    luckyDirection: "방위",
    luckyTime: "시간",
    luckyNumber: "숫자",
    basisTitle: "이 점수가 나온 자리",
    factors: {
      TODAY_IS_YONGSIN: "오늘의 기운이 지금 필요한 기운입니다",
      TODAY_GENERATES_YONGSIN: "오늘의 기운이 필요한 기운을 밀어 줍니다",
      TODAY_IS_GISIN: "오늘의 기운이 이미 넘치는 쪽을 더 밀어붙입니다",
      TODAY_CONTROLS_YONGSIN: "오늘의 기운이 필요한 기운을 누릅니다",
      TODAY_GENERATES_SELF: "오늘의 기운이 일간을 받쳐 줍니다",
      TODAY_SAME_ELEMENT: "오늘의 기운이 일간과 같습니다",
      SELF_GENERATES_TODAY: "일간이 오늘의 기운으로 흘러 나갑니다",
      TODAY_CONTROLS_SELF: "오늘의 기운이 일간을 누릅니다",
      SELF_CONTROLS_TODAY: "일간이 오늘의 기운을 누릅니다",
      WEAK_HELPED: "신약한 일간이 오늘 힘을 받습니다",
      STRONG_OVERFED: "신강한 일간이 오늘 더 두터워집니다",
      STRONG_DRAINED: "신강한 일간이 오늘 알맞게 덜어집니다",
      WEAK_BURDENED: "신약한 일간에 오늘의 짐이 더해집니다",
      BRANCH_SAMHAP: "오늘의 지지가 원국과 삼합을 이룹니다",
      BRANCH_BANHAP: "오늘의 지지가 원국과 반합을 이룹니다",
      BRANCH_YUKHAP: "오늘의 지지가 원국과 육합을 이룹니다",
      BRANCH_SAME: "오늘의 지지가 원국과 같습니다",
      BRANCH_NEUTRAL: "오늘의 지지와 원국 사이에 특별한 관계가 없습니다",
      BRANCH_WONJIN: "오늘의 지지가 원국과 원진입니다",
      BRANCH_CHUNG: "오늘의 지지가 원국과 충입니다",
    },
    bookmarkHint:
      "생년월일을 저장하지 않으므로 매일 다시 넣으셔야 합니다. **이 결과 링크를 즐겨찾기해 두시면** 날마다 그날의 운세가 열립니다.",
    disclaimer:
      "오늘의 운세는 일진과 사주의 관계를 점수로 옮긴 것입니다. 하루를 어떻게 보낼지에 대한 참고이지 예언이 아닙니다.",
  },
  ads: { label: "광고" },
  analyzing: {
    title: "사주를 세우고 있습니다",
    // 점을 치는 말이 아니라 사주를 읽는 태도에 관한 문장으로 채운다. 결과를 기다리는 동안
    // 읽히는 자리라 단정하는 표현("반드시", "운명")은 쓰지 않는다.
    quotes: [
      "사주는 정해진 답이 아니라 나를 이해하는 하나의 언어입니다.",
      "타고난 기운을 아는 것과 그대로 사는 것은 다른 일입니다.",
      "강한 자리는 쓰기 나름이고, 얇은 자리는 채우기 나름입니다.",
      "같은 여덟 글자라도 어떻게 읽는가에 따라 다른 하루가 됩니다.",
      "잘 풀리는 날을 기다리기보다, 잘 쓰는 법을 아는 편이 낫습니다.",
      "약점이라 불리는 자리가 대개 가장 크게 자라는 자리입니다.",
      "계절이 밀어 주는 기운이 있고, 스스로 만들어야 하는 기운이 있습니다.",
      "점수보다 중요한 것은 그 점수를 어떻게 읽는가입니다.",
      "오늘의 운세는 오늘 하루의 날씨이지, 사는 곳의 기후가 아닙니다.",
      "사주를 안다는 것은 앞을 본다는 뜻이 아니라 나를 본다는 뜻입니다.",
    ],
    watching: "광고를 보는 중입니다",
    remaining: "{seconds}초 후 결과가 열립니다",
  },
  reportDetail: {
    depthTitle: "사주를 더 들여다봅니다",
    vitalityTitle: "계절이 밀어 주는 기운",
    vitalityHint:
      "세력 막대가 '얼마나 있는가'라면 이 표는 '태어난 달이 그 기운을 밀어 주는가'입니다. 같은 양이라도 왕(旺)인 기운과 사(死)인 기운은 힘이 다릅니다.",
    vitalities: {
      WANG: { name: "왕(旺)", body: "가장 힘이 실리는 자리" },
      SANG: { name: "상(相)", body: "뒤이어 힘을 받는 자리" },
      HYU: { name: "휴(休)", body: "할 일을 마치고 쉬는 자리" },
      SU: { name: "수(囚)", body: "갇혀 움직이기 어려운 자리" },
      SA: { name: "사(死)", body: "가장 힘을 못 쓰는 자리" },
    },
    rawLabel: "월령 전",
    strengthLabel: "월령 후",
    earthSeasonNote: "환절기(辰未戌丑) 달에 태어나 土를 함께 왕으로 보았습니다.",
    allyRatioLabel: "일간 편의 비율",
    allyRatioHint:
      "인성과 비겁을 합한 비율입니다. 45%를 넘으면 신강, 35%에 못 미치면 신약으로 봅니다. 판정이 어디쯤에서 갈렸는지 직접 보시라고 숫자를 함께 싣습니다.",
    stemGodsTitle: "네 기둥은 나에게 무엇인가",
    stemGodsHint:
      "일간을 기준으로 나머지 기둥의 천간이 무엇인지 십신으로 나눕니다. 어느 자리가 두터운지가 성향과 살아가는 결을 말해 줍니다.",
    pillarColumn: "자리",
    tenGodColumn: "십신",
    meaningColumn: "무엇을 뜻하나",
    factorsTitle: "오늘 점수가 나온 자리",
    factorsHint:
      "화면은 항목 이름만 보여 드립니다. 여기서는 각 항목이 몇 점을 더하고 뺐는지까지 싣습니다.",
    deltaColumn: "가감",
    appendixTitle: "이 사주를 이렇게 뽑았습니다",
    timeCorrectionLabel: "출생 시각",
    timeCorrectionApplied: "진태양시로 고쳐 {time}으로 보았습니다.",
    timeCorrectionNone: "출생 시각을 입력하지 않아 시주를 빼고 보았습니다.",
    timeCorrectionDateShift: "보정으로 날짜가 {date}로 넘어가, 그 날의 일주로 잡았습니다.",
    calendarLabel: "사주를 뽑은 날짜",
    solarLabel: "양력",
    lunarLabel: "음력",
    lunarUnavailable: "만세력 표에 없는 날이라 음력을 함께 적지 못했습니다.",
  },
  report: {
    title: "사주 총운 리포트 PDF로 간직하기",
    body: "화면의 풀이를 PDF로 만들어 드립니다. 원국과 오행 세력, 일간의 강약과 지금 필요한 기운, 그리고 오늘의 운세를 한 장에 담습니다.",
    buyButton: "{price} 결제하고 받기",
    preparing: "준비 중입니다",
    ordering: "주문을 만드는 중…",
    paying: "결제를 진행하는 중…",
    issuing: "리포트를 만드는 중…",
    done: "받으셨습니다. 다시 받으려면 아래 버튼을 눌러 주세요.",
    failed: "결제 또는 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 받기",
    contents: [
      "일간과 타고난 결 — 성향 요약, 강점과 눈여겨볼 점",
      "사주 원국 — 네 기둥의 여덟 글자",
      "오행의 세력, 가장 두터운 기운과 가장 얇은 기운",
      "일간의 강약(신강·중화·신약)과 지금 필요한 기운",
      "오늘의 운세와 삶의 네 영역(재물·애정·직업·건강)",
    ],
    consentLabel:
      "이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **다운로드가 완료되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    consentRequired: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    productInfoTitle: "상품 정보 고시",
    productInfo: [
      ["제작·공급자", "{brand}"],
      ["상품 형태", "PDF 문서 1개(A4 5장). 결제 후 화면에서 즉시 내려받습니다."],
      ["이용 조건", "PDF를 열 수 있는 기기면 됩니다. 별도 설치나 회원가입이 필요하지 않습니다."],
      ["이용 기간", "제한 없음. 내려받은 파일은 이용자가 보관합니다."],
      ["다시 받기", "같은 주문으로 5회까지. 서버가 파일을 보관하지 않으므로 결과 화면을 벗어나면 다시 만들 수 없습니다."],
      ["청약철회", "다운로드 완료 전에는 전액 환불. 완료 후에는 단순 변심에 의한 철회가 제한됩니다(전자상거래법 제17조 제2항)."],
      ["교환·반품 비용", "없음. 디지털 콘텐츠라 배송이 없습니다."],
    ],
    refundContact:
      "환불·문의는 아래 고객센터 또는 이메일로 접수해 주십시오. 문서가 만들어지지 않았거나 결제 금액이 주문과 다른 경우에는 전액 환불해 드립니다.",
    pdfLanguageNotice: "PDF 문서는 화면과 같은 언어로 나갑니다.",
  },
  premiumReport: {
    title: "프리미엄 총운 리포트 PDF로 간직하기",
    body: "총운 리포트에 **화면에 없는 근거 숫자**를 더합니다 — 신강·신약을 가른 아군 비율, 태어난 달이 각 기운을 얼마나 밀어 올렸는지(왕상휴수사), 그리고 진태양시 보정 내역입니다.",
    buyButton: "{price} 결제하고 받기",
    preparing: "준비 중입니다",
    ordering: "주문을 만드는 중…",
    paying: "결제를 진행하는 중…",
    issuing: "리포트를 만드는 중…",
    done: "받으셨습니다. 다시 받으려면 아래 버튼을 눌러 주세요.",
    failed: "결제 또는 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 받기",
    contents: [
      "일간과 타고난 결 — 성향 요약, 강점과 눈여겨볼 점",
      "사주 원국 — 네 기둥의 여덟 글자",
      "오행의 세력과 일간의 강약, 지금 필요한 기운",
      "오늘의 운세와 삶의 네 영역(재물·애정·직업·건강)",
      "네 기둥은 나에게 무엇인가 — 십신 풀이",
      "왕상휴수사와 일간 편의 비율 — 강약 판정의 근거 숫자",
      "올해 총운, 오늘 점수의 항목별 가감, 진태양시 보정 내역",
    ],
    consentLabel:
      "이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **다운로드가 완료되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    consentRequired: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    productInfoTitle: "상품 정보 고시",
    productInfo: [
      ["제작·공급자", "{brand}"],
      ["상품 형태", "PDF 문서 1개(A4 7장). 결제 후 화면에서 즉시 내려받습니다."],
      ["이용 조건", "PDF를 열 수 있는 기기면 됩니다. 별도 설치나 회원가입이 필요하지 않습니다."],
      ["이용 기간", "제한 없음. 내려받은 파일은 이용자가 보관합니다."],
      ["다시 받기", "같은 주문으로 5회까지. 서버가 파일을 보관하지 않으므로 결과 화면을 벗어나면 다시 만들 수 없습니다."],
      ["청약철회", "다운로드 완료 전에는 전액 환불. 완료 후에는 단순 변심에 의한 철회가 제한됩니다(전자상거래법 제17조 제2항)."],
      ["교환·반품 비용", "없음. 디지털 콘텐츠라 배송이 없습니다."],
    ],
    refundContact:
      "환불·문의는 아래 고객센터 또는 이메일로 접수해 주십시오. 문서가 만들어지지 않았거나 결제 금액이 주문과 다른 경우에는 전액 환불해 드립니다.",
    pdfLanguageNotice: "PDF 문서는 화면과 같은 언어로 나갑니다.",
  },
  footer: {
    privacy: "개인정보처리방침",
    terms: "이용약관",
    refund: "환불정책",
    pricing: "요금안내",
    legalEntity: "상호",
    representative: "대표자",
    businessNumber: "사업자등록번호",
    mailOrderNumber: "통신판매업",
    address: "주소",
    customerCenter: "고객센터",
    email: "이메일",
    privacyOfficer: "개인정보 보호책임자",
    hostingProvider: "호스팅 제공",
    providedBy: "Provided by",
    effective: "시행일",
    backHome: "처음으로",
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
  brand: "SajuLink",
  tagline: "Your Four Pillars, read from a birth date",
  currentLanguage: "Current language",
  moreLanguages: "More",
  closeLanguages: "Close",
  landing: {
    title: "The eight characters\nyou were born with",
    subtitle:
      "All you need is a birth date.\nWe build your Saju (Four Pillars) chart, weigh the five elements and read the strength of your day master.",
    cta: "See my Saju",
    howTitle: "How it works",
    steps: [
      "Enter your birth date. The birth time is optional.",
      "The year, month, day and hour of your birth become eight characters — your natal chart. From those we read the weight of each element and the strength of your day master.",
      "Today’s pillar is laid against that chart to give you today’s fortune as well.",
    ],
    privacyTitle: "Nothing you enter is stored",
    privacyBody:
      "Birth dates are used only while the result is being calculated and are never recorded. No account is needed. Nothing carried in a result link is sent to the server.",
    disclaimer:
      "This is a traditional Saju reading offered for reference. It is not a scientific prediction or a verdict on anyone’s future.",
  },
  form: {
    title: "Your birth date",
    description:
      "Knowing the birth time makes the reading sharper, but it is not required.",
    meLegend: "About you",
    nickname: "What to call them",
    nicknamePlaceholder: "e.g. Me",
    nicknameHint: "Shown on the result screen only. It is not used in the calculation.",
    gender: "Gender",
    male: "Male",
    female: "Female",
    genderUnspecified: "Prefer not to say",
    genderHint:
      "Traditional Saju reads the spouse and child positions differently by gender. If you skip this, those factors are left out of the calculation.",
    birthplace: "Place of birth",
    birthplaceHint:
      "The hour pillar is calculated from true solar time at your birthplace, including daylight saving and historical time-zone changes. If your birthplace is not listed, pick the nearest city — the closer it is, the more accurate the hour pillar.",
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
    submit: "Watch ad and see my Saju",
    submitNoAd: "See my Saju",
    submitting: "Calculating…",
    errorInvalidDate:
      "Please check the birth date. For lunar dates, also check whether it falls in a leap month.",
    errorGeneric: "The calculation failed. Please try again in a moment.",
  },
  reading: {
    chartTitle: "Your natal chart",
    chartHint:
      "Saju renders the year, month, day and hour of birth as two characters each. Everything below is read from these eight characters.",
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
    strengthTitle: "What you were born with",
    cautionTitle: "What to watch",
    bodyStrengthTitle: "Day-master strength",
    favorableLabel: "What you need now",
  },
  bodyStrength: {
    STRONG: {
      name: "Strong day master",
      body: "The elements supporting your day master run full. That gives you drive of your own, but it also tips easily to one side — you tend to settle when something draws the excess off.",
    },
    BALANCED: {
      name: "Balanced day master",
      body: "What supports your day master and what draws from it sit close to even. Too close to call either way, so here we read whatever is thinnest as what you need.",
    },
    WEAK: {
      name: "Weak day master",
      body: "The elements supporting your day master run thin. You borrow strength from around you well, but wear down holding out alone — you come into your own when something backs you up.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Companion (比肩)",
      body: "The energy that stands shoulder to shoulder with you. Thick, it gives you the strength to hold your own ground and to claim your share first.",
    },
    GEOPJAE: {
      name: "Rival (劫財)",
      body: "Energy that resembles you but works differently. It lends force to a push, yet in excess what you hold tends to scatter.",
    },
    SIKSIN: {
      name: "Expression (食神)",
      body: "The energy that draws what is in you out into the world. Expression and the plain pleasure of living come from here; where it sits, there is ease.",
    },
    SANGGWAN: {
      name: "Disruptor (傷官)",
      body: "The energy that unsettles a fixed frame. It grants talent and a sharp edge, but in excess it collides with rules and rank.",
    },
    PYEONJAE: {
      name: "Windfall (偏財)",
      body: "Wealth energy of the wide kind. Active and free with what it has, it brings chances from unexpected quarters.",
    },
    JEONGJAE: {
      name: "Steady Wealth (正財)",
      body: "Wealth energy of the steady kind, gathered piece by piece. Traditional Saju also reads it as the spouse position for a man.",
    },
    PYEONGWAN: {
      name: "Challenger (偏官)",
      body: "The energy that keeps you on edge and upright. You grow strong under pressure, though in excess it leaves you always feeling chased.",
    },
    JEONGGWAN: {
      name: "Authority (正官)",
      body: "The energy of order that sets you straight. It keeps your name and station; traditional Saju also reads it as the spouse position for a woman.",
    },
    PYEONIN: {
      name: "Unconventional Support (偏印)",
      body: "Energy that backs you by an unusual road. It grants the power to dig deep, though in excess thought runs ahead of the hand.",
    },
    JEONGIN: {
      name: "Nurture (正印)",
      body: "The energy that holds and raises you. It gives learning and something to lean on; in excess, setting out on your own comes late.",
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
  dayMasterSigns: {
    甲: [
      "Says what they think even on a first meeting.",
      "Rarely changes a plan or a promise once it is set.",
      "Turns things down straight, which can sound blunt.",
    ],
    乙: [
      "Steps around confrontation and takes another route.",
      "Seems soft, yet ends up where they meant to go.",
      "Reads the room before joining a group.",
    ],
    丙: [
      "Speaks first to people they have just met.",
      "What they like and dislike shows on their face.",
      "Ends up at the centre of a gathering without trying.",
    ],
    丁: [
      "Quiet at first, attentive once you are close.",
      "Prefers a long talk with one or two over a crowd.",
      "Remembers a passing remark and brings it up later.",
    ],
    戊: [
      "Says little; their voice rarely rises even when things are urgent.",
      "The one who settles it at the end while others put off deciding.",
      "A no, once given, stays no for a long time.",
    ],
    己: [
      "Listens longer than they talk.",
      "Struggles to refuse, so work piles onto them.",
      "What they quietly took care of only surfaces later.",
    ],
    庚: [
      "Decides fast and says so on the spot.",
      "Does not soften things, which can read as cold.",
      "Visibly restless when something drags on.",
    ],
    辛: [
      "Has clear standards about clothes and the things they choose.",
      "Cannot let a half-done job pass without pointing it out.",
      "Sparing with praise, but definite once they mean it.",
    ],
    壬: [
      "Mixes easily with all sorts of people.",
      "Brings up what comes later before what is in front of them.",
      "Chafes at being tied to one place for long.",
    ],
    癸: [
      "Says little but has read the situation exactly.",
      "First to notice when the mood shifts.",
      "Keeps their inner life close, so it takes time to know them.",
    ],
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
    title: "Your Saju reading",
    recalculate: "Start over",
    copyLink: "Copy result link",
    copied: "Copied",
    missingInput: "This result could not be read. Please enter the dates again.",
    partialTime:
      "No birth time was given, so the hour pillar was left out. Adding it makes the reading more precise.",
    engineVersion: "Calculated with",
    disclaimer:
      "This is a traditional Saju reading offered for reference. It is not a scientific prediction or a verdict on your future.",
  },
  today: {
    menu: "Today’s fortune",
    title: "Today’s fortune",
    pillarLabel: "Today’s pillar",
    scoreLabel: "Today’s score",
    grades: {
      DAEGIL: {
        name: "Very auspicious",
        body: "Today’s energy meets your chart at its best angle. A good day to pick up what you have been putting off.",
      },
      GIL: {
        name: "Auspicious",
        body: "The current runs with you today. What you normally do goes more easily than it normally does.",
      },
      PYEONG: {
        name: "Even",
        body: "Nothing pushes you and nothing blocks you. Do as you usually do and you will get what you usually get.",
      },
      JUUI: {
        name: "Take care",
        body: "Some of today’s energy runs against your chart. Better spent finishing things than starting them.",
      },
      JOSIM: {
        name: "Tread carefully",
        body: "Today’s energy presses on your chart. If a decision can wait, let it wait.",
      },
    },
    categories: {
      wealth: "Money",
      love: "Love",
      career: "Work",
      health: "Health",
    },
    luckyTitle: "Keep these close today",
    luckyElement: "Element",
    luckyColor: "Colour",
    luckyDirection: "Direction",
    luckyTime: "Hours",
    luckyNumber: "Numbers",
    basisTitle: "Where this score comes from",
    factors: {
      TODAY_IS_YONGSIN: "Today’s element is the one your chart needs",
      TODAY_GENERATES_YONGSIN: "Today’s element feeds the one your chart needs",
      TODAY_IS_GISIN: "Today’s element pushes further the side that is already full",
      TODAY_CONTROLS_YONGSIN: "Today’s element holds down the one your chart needs",
      TODAY_GENERATES_SELF: "Today’s element supports your day master",
      TODAY_SAME_ELEMENT: "Today’s element is the same as your day master",
      SELF_GENERATES_TODAY: "Your day master flows out into today’s element",
      TODAY_CONTROLS_SELF: "Today’s element holds down your day master",
      SELF_CONTROLS_TODAY: "Your day master holds down today’s element",
      WEAK_HELPED: "A weak day master is given strength today",
      STRONG_OVERFED: "A strong day master is made heavier today",
      STRONG_DRAINED: "A strong day master is drawn down to a better balance today",
      WEAK_BURDENED: "A weak day master is given more to carry today",
      BRANCH_SAMHAP: "Today’s branch forms a full trine with your chart",
      BRANCH_BANHAP: "Today’s branch forms a half trine with your chart",
      BRANCH_YUKHAP: "Today’s branch forms a six-harmony with your chart",
      BRANCH_SAME: "Today’s branch is the same as one in your chart",
      BRANCH_NEUTRAL: "Today’s branch has no particular tie to your chart",
      BRANCH_WONJIN: "Today’s branch sits in quiet discord with your chart",
      BRANCH_CHUNG: "Today’s branch clashes with your chart",
    },
    bookmarkHint:
      "We do not store your birth date, so it has to be entered again each time. **Bookmark this result link** and it will open that day’s fortune every day.",
    disclaimer:
      "Today’s fortune turns the relationship between the day pillar and your chart into a score. It is a note on how to spend the day, not a prophecy.",
  },
  ads: { label: "Advertisement" },
  analyzing: {
    title: "Building your chart",
    quotes: [
      "Saju is not a fixed answer. It is one language for understanding yourself.",
      "Knowing what you were born with and living it out are two different things.",
      "A strong position is a matter of use; a thin one, a matter of filling.",
      "The same eight characters make a different day depending on how you read them.",
      "Better than waiting for a good day is knowing how to use the one you have.",
      "The position people call a weakness is usually where the most growth happens.",
      "Some energy the season pushes forward; some you have to make yourself.",
      "What matters more than the score is how you read it.",
      "Today’s fortune is the weather for one day, not the climate where you live.",
      "Knowing your Saju means seeing yourself, not seeing ahead.",
    ],
    watching: "Watching the ad",
    remaining: "Your result opens in {seconds}s",
  },
  reportDetail: {
    depthTitle: "A closer look at your chart",
    vitalityTitle: "What the season pushes forward",
    vitalityHint:
      "The bars say how much of an element there is; this table says whether the month of birth pushes it up. The same amount carries different force at wang than at sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "at its strongest" },
      SANG: { name: "Sang (相)", body: "next in strength" },
      HYU: { name: "Hyu (休)", body: "resting after its turn" },
      SU: { name: "Su (囚)", body: "held in, hard to move" },
      SA: { name: "Sa (死)", body: "at its weakest" },
    },
    rawLabel: "Before season",
    strengthLabel: "After season",
    earthSeasonNote:
      "Born in a transitional month (辰未戌丑), so earth is also counted as wang.",
    allyRatioLabel: "Ally ratio",
    allyRatioHint:
      "The share held by the resource and companion stars combined. Above 45% is strong, below 35% is weak. The number is printed so you can see how close the verdict was.",
    stemGodsTitle: "What each pillar is to you",
    stemGodsHint:
      "Measured from your day master, each remaining stem takes one of the ten god names. Which of them run thick says a great deal about temperament.",
    pillarColumn: "Pillar",
    tenGodColumn: "Ten god",
    meaningColumn: "What it means",
    factorsTitle: "Where today’s score comes from",
    factorsHint:
      "The screen names the factors; here each one is printed with the points it added or removed.",
    deltaColumn: "Points",
    appendixTitle: "How this chart was built",
    timeCorrectionLabel: "Birth time",
    timeCorrectionApplied: "Corrected to true solar time and read as {time}.",
    timeCorrectionNone: "No birth time was given, so the hour pillar was left out.",
    timeCorrectionDateShift:
      "The correction moved the date to {date}, so that day’s pillar was used.",
    calendarLabel: "Date the chart was drawn from",
    solarLabel: "Solar",
    lunarLabel: "Lunar",
    lunarUnavailable: "This date is not in the almanac table, so no lunar date is shown.",
  },
  report: {
    title: "Keep your life reading as a PDF",
    body: "We turn this reading into a PDF — your natal chart, the weight of the five elements, the strength of your day master and what it needs now, and today’s fortune, all on one page.",
    buyButton: "Pay {price} and download",
    preparing: "Not available yet",
    ordering: "Creating your order…",
    paying: "Processing payment…",
    issuing: "Preparing your report…",
    done: "Downloaded. Use the button below to download it again.",
    failed: "The payment or download failed. Please try again in a moment.",
    retry: "Download again",
    contents: [
      "Your day master and temperament — a summary, strengths and cautions",
      "Your natal chart — the eight characters of the four pillars",
      "The weight of the five elements, thickest and thinnest",
      "The strength of your day master, and the energy it needs now",
      "Today’s fortune and the four domains (money, love, work, health)",
    ],
    consentLabel:
      "I understand this is digital content delivered immediately on payment, and that **withdrawal for a simple change of mind is restricted once the download completes**.",
    consentRequired: "Please confirm the withdrawal terms before paying.",
    productInfoTitle: "Product information",
    productInfo: [
      ["Provider", "{brand}"],
      ["Format", "One PDF document (5 A4 pages), downloaded on screen right after payment."],
      ["Requirements", "Any device that opens a PDF. No installation or account needed."],
      ["Term of use", "No limit. You keep the file you download."],
      ["Re-download", "Up to five times on the same order. We keep no copy, so it cannot be produced again once you leave the result screen."],
      ["Withdrawal", "Full refund before the download begins. After it completes, withdrawal for a change of mind is restricted (Art. 17(2), Korean E-Commerce Act)."],
      ["Return costs", "None — digital content, nothing is shipped."],
    ],
    refundContact:
      "For refunds or questions, contact the customer centre or email below. If the document could not be produced, or the amount charged differs from the order, we refund in full.",
    pdfLanguageNotice:
      "The PDF is produced in the same language as this screen.",
  },
  premiumReport: {
    title: "Keep your premium reading as a PDF",
    body: "Everything in the life reading, plus **the numbers behind it that never appear on screen** — the ally ratio that decided strong or weak, how far the birth month pushed each element up, and the true-solar-time correction applied to your birth hour.",
    buyButton: "Pay {price} and download",
    preparing: "Not available yet",
    ordering: "Creating your order…",
    paying: "Processing payment…",
    issuing: "Preparing your report…",
    done: "Downloaded. Use the button below to download it again.",
    failed: "The payment or download failed. Please try again in a moment.",
    retry: "Download again",
    contents: [
      "Your day master and temperament — a summary, strengths and cautions",
      "Your natal chart — the eight characters of the four pillars",
      "The five elements, the strength of your day master and what it needs",
      "Today’s fortune and the four domains (money, love, work, health)",
      "What each pillar is to you — the ten gods read from your chart",
      "Seasonal standing and ally ratio — the numbers behind the verdict",
      "This year’s outlook, today’s scoring factors, and the time correction",
    ],
    consentLabel:
      "I understand this is digital content delivered immediately on payment, and that **withdrawal for a simple change of mind is restricted once the download completes**.",
    consentRequired: "Please confirm the withdrawal terms before paying.",
    productInfoTitle: "Product information",
    productInfo: [
      ["Provider", "{brand}"],
      ["Format", "One PDF document (7 A4 pages), downloaded on screen right after payment."],
      ["Requirements", "Any device that opens a PDF. No installation or account needed."],
      ["Term of use", "No limit. You keep the file you download."],
      ["Re-download", "Up to five times on the same order. We keep no copy, so it cannot be produced again once you leave the result screen."],
      ["Withdrawal", "Full refund before the download begins. After it completes, withdrawal for a change of mind is restricted (Art. 17(2), Korean E-Commerce Act)."],
      ["Return costs", "None — digital content, nothing is shipped."],
    ],
    refundContact:
      "For refunds or questions, contact the customer centre or email below. If the document could not be produced, or the amount charged differs from the order, we refund in full.",
    pdfLanguageNotice:
      "The PDF is produced in the same language as this screen.",
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Cancellation & Refunds",
    pricing: "Pricing",
    legalEntity: "Business",
    representative: "Representative",
    businessNumber: "Registration no.",
    mailOrderNumber: "E-commerce reg.",
    address: "Address",
    customerCenter: "Customer service",
    email: "Email",
    privacyOfficer: "Privacy officer",
    hostingProvider: "Hosting",
    providedBy: "Provided by",
    effective: "Effective",
    backHome: "Back to home",
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

// 23개 로케일 전부 채워졌다. `translatedLocales`가 이 객체의 키에서 나오므로, 언어 선택기에
// 무엇이 뜨는지는 여기서 정해진다 — 번역이 미덥지 않은 언어가 생기면 이 줄에서 빼면 그만이다.
const dictionaries: Partial<Record<Locale, Dictionary>> = {
  ko,
  en,
};

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
