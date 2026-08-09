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
import type { SelfAdKey } from "@naminglink/core/self-ads";

import { ar } from "@/lib/i18n-locales/ar";
import { de } from "@/lib/i18n-locales/de";
import { es } from "@/lib/i18n-locales/es";
import { fil } from "@/lib/i18n-locales/fil";
import { fr } from "@/lib/i18n-locales/fr";
import { hi } from "@/lib/i18n-locales/hi";
import { id } from "@/lib/i18n-locales/id";
import { it } from "@/lib/i18n-locales/it";
import { ja } from "@/lib/i18n-locales/ja";
import { kk } from "@/lib/i18n-locales/kk";
import { km } from "@/lib/i18n-locales/km";
import { mn } from "@/lib/i18n-locales/mn";
import { ms } from "@/lib/i18n-locales/ms";
import { pl } from "@/lib/i18n-locales/pl";
import { pt } from "@/lib/i18n-locales/pt";
import { ru } from "@/lib/i18n-locales/ru";
import { th } from "@/lib/i18n-locales/th";
import { tr } from "@/lib/i18n-locales/tr";
import { uz } from "@/lib/i18n-locales/uz";
import { vi } from "@/lib/i18n-locales/vi";
import { zh } from "@/lib/i18n-locales/zh";
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
 * 리포트 PDF 판매 문구 한 벌. 상품이 둘이라(사주 궁합·인연의 결) 같은 모양을 두 번 쓴다.
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
  /**
   * 일간 10종을 **겉으로 드러나는 행동**으로 옮긴 것.
   *
   * `dayMasters.trait`은 "곧게 자라는 큰 나무입니다" 같은 비유다. 그 자체로 틀린 말은 아니지만
   * 눈앞의 사람에게 대 보기가 어렵다 — 인연의 결은 상대의 생일을 모르는 사람이 쓰는 화면이라,
   * 알아볼 수 없는 설명은 없는 것과 같다. 그래서 같은 성질을 자리에서 볼 수 있는 행동으로
   * 풀어 함께 싣는다. 비유를 대체하지 않고 **덧붙인다.**
   */
  dayMasterSigns: Record<string, string[]>;
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
  /**
   * 인연의 결 — 한 사람만 받아 "어떤 상대가 맞는가"를 보여 주는 화면.
   *
   * 궁합 사전을 그대로 쓰지 않고 따로 두는 이유는 **말하는 대상이 다르기 때문**이다. 궁합은
   * 이미 있는 두 사람을 두고 말하고, 이 화면은 아직 없는 상대를 두고 말한다. 같은 십신이라도
   * "당신들은 이런 사이입니다"와 "이런 사람을 찾으십시오"는 문장이 다르다.
   *
   * 다만 유형의 성향 문구(`dayMasters`)와 십신 풀이(`tenGods`), 띠 성향(`animalTraits`)은
   * 궁합과 **같은 것을 쓴다.** 같은 사람을 두고 두 화면이 다르게 말하면 안 된다.
   */
  affinity: {
    /** 메뉴·버튼에 쓰는 이름 */
    menu: string;
    formTitle: string;
    formDescription: string;
    meLegend: string;
    /** 내 성별을 왜 받는지 — 궁합과 이유가 달라 따로 적는다 */
    genderHint: string;
    seekingLabel: string;
    seekingHint: string;
    seekingAny: string;
    /** 광고 관문이 꺼져 있을 때 쓰는 문구. 없는 광고를 예고하지 않는다. */
    submitNoAd: string;
    submit: string;
    submitting: string;

    resultTitle: string;
    /** 이 화면이 하는 일. 못 하는 일은 여기서 말하지 않는다 — 첫 줄부터 사과가 된다. */
    intro: string;
    /** 항목 점수 옆의 주의. 오해가 생길 자리에 바로 붙인다. */
    scoreCaption: string;
    meTitle: string;
    /** "{dayMaster}이고 {strength}입니다" 꼴 */
    meBody: string;
    /** 일간이 무엇인지 풀어 쓴 것. 용어가 처음 나오는 자리다. */
    meHint: string;
    bestTitle: string;
    bestHint: string;
    /** 유형 카드 안 "겉으로 이렇게 나타납니다" 소제목 */
    signsTitle: string;
    avoidTitle: string;
    avoidHint: string;
    /** 유형 카드 안의 항목 라벨 */
    bondLabel: string;
    spouseLabel: string;
    spouseSkipped: string;
    /** 두 항목이 각각 무엇을 보는지. 줄바꿈으로 두 항목을 가른다. */
    scoreHelp: string;
    /** "{stem} 유형" 꼴로 카드 제목을 만든다 */
    typeHeading: string;
    needTitle: string;
    /** "{elements} 기운이 지금 얇습니다" 꼴 */
    needBody: string;
    needHint: string;
    zodiacTitle: string;
    zodiacHint: string;
    zodiacGood: string;
    zodiacHard: string;
    /** PDF 전체 순위표의 열 이름. 화면에는 없는 표라 여기서만 쓴다. */
    tableType: string;
    tableSign: string;
    tableYears: string;
    /** 띠를 실제로 써먹을 수 있게 연도·나이 차로 바꾼 표시 */
    bornYear: string;
    younger: string;
    older: string;
    sameAge: string;
    /** 입춘 경계 주의. 이걸 빠뜨리면 1~2월 초 생일에서 한 해가 어긋난다. */
    zodiacYearsCaution: string;
    dayBranchTitle: string;
    dayBranchBody: string;
    /**
     * 간이 확인기 — 상대의 생일만 넣어 "이 사람은 어느 유형인가"를 팝업으로 알려 준다.
     *
     * 위 유형 설명이 아무리 자세해도 **확정은 생일로만 된다.** 그렇다고 이 화면에서 궁합을
     * 다 계산해 버리면 사주 궁합과 경계가 사라지므로, 여기서는 유형과 순위까지만 말하고
     * 점수를 합치는 일은 사주 궁합으로 넘긴다.
     */
    check: {
      button: string;
      title: string;
      body: string;
      submit: string;
      checking: string;
      /** "당신의 {rank}순위입니다" */
      rank: string;
      /** "이 사람은 {name}입니다" */
      heading: string;
        /** 자정 언저리·입춘 경계의 한계 */
      caution: string;
      close: string;
      another: string;
      error: string;
    };
    /** 사주 궁합으로 이어 주는 자리 */
    nextTitle: string;
    nextBody: string;
    nextButton: string;
    recalculate: string;
    copyLink: string;
    copied: string;
    missingInput: string;
    partialTime: string;
    disclaimer: string;
  };
  /**
   * 광고 자리 표시. 애드센스는 광고에 라벨을 붙일 때 "광고"에 해당하는 말만 허용한다
   * ("추천", "관련 글" 같은 표현은 정책 위반이다).
   */
  ads: { label: string };
  /**
   * 형제 서비스 안내(셀프 광고)의 문구.
   *
   * **주소와 살아 있는지 여부는 `@naminglink/core/self-ads`가 갖는다.** 앱마다 다를 이유가
   * 없어 한 곳에 두었고, 여기 있는 것은 그 서비스를 **이 언어로 어떻게 부르는가**뿐이다.
   *
   * `inyeonlink`도 목록에 있다. 이 앱에서는 자기 자신이라 빼고 그리지만(`selfAdsExcluding`),
   * 같은 사전을 형제 앱이 가져다 쓸 수 있으므로 문구는 다섯 벌 다 갖는다.
   */
  selfAds: {
    label: string;
    /** 아직 열지 않은 서비스에 붙인다. 링크는 걸지 않는다. */
    comingSoon: string;
    /**
     * 서비스마다 한 줄 소개. **이름은 여기 없다** — 상표는 번역하는 것이 아니라 고정값이라
     * 명단(`SELF_AD_SERVICES.name`)이 갖는다. 사전에 두었더니 중국어에서 `Naming-Link`가
     * `命名链接`가 됐다.
     */
    purposes: Record<SelfAdKey, string>;
  };
  analyzing: {
    /** 계산이 도는 잠깐 동안(0.1초 남짓) 보이는 문구. */
    title: string;
    /** 궁합에 관한 문장들. 광고를 보는 동안 하나씩 바뀐다. */
    quotes: string[];
    watching: string;
    /** "{seconds}초 후 결과가 열립니다" */
    remaining: string;
  };
  /** 사주 궁합 리포트 PDF 판매. */
  report: ReportCopy;
  affinityReport: ReportCopy;
  /**
   * **유료 리포트에만 나가는 문구.** 화면은 이 블록을 쓰지 않는다.
   *
   * 무료 화면을 얇게 만들지 않고 리포트에만 더한다는 결정이라(2026-07-31), 여기 있는 것은
   * 전부 화면에 없는 절이다. 엔진이 이미 계산해 놓고 버리던 값과, 규칙은 있는데 적용하지
   * 않던 자리를 설명한다(`engines/detail.ts`).
   *
   * **이미 있는 것은 여기에 다시 적지 않는다** — 십신 열 종은 `tenGods`, 신강·신약은
   * `bodyStrength`, 일간 짝 여섯 종의 설명은 `notes["dayMaster.*"]`, 오행 이름은 `elements`,
   * 기둥 이름은 `reading.pillarYear` 등에 이미 있고 그대로 가져다 쓴다.
   */
  reportDetail: {
    /** 4장 — 두 기운이 오가는 방향 */
    supplyTitle: string;
    supplyHint: string;
    /** "{name}이(가) 받는 정도" */
    supplyReceiveLabel: string;
    needsLabel: string;
    bondTitle: string;
    /** 5장 — 각자의 사주를 깊게 */
    depthTitle: string;
    vitalityTitle: string;
    vitalityHint: string;
    /**
     * 왕상휴수사 다섯 자리.
     *
     * `name`은 표 칸에 들어가므로 짧아야 하고, `body`는 표 아래 범례에 **한 번만** 나온다.
     * 사람마다 되풀이하면 같은 설명이 한 장에 두 번 찍힌다.
     */
    vitalities: Record<
      "WANG" | "SANG" | "HYU" | "SU" | "SA",
      { name: string; body: string }
    >;
    seasonBoostTitle: string;
    rawLabel: string;
    strengthLabel: string;
    earthSeasonNote: string;
    allyRatioLabel: string;
    allyRatioHint: string;
    /** 6장 — 네 기둥이 만나는 자리 */
    pillarsTitle: string;
    pillarsHint: string;
    /** 지지 관계 일곱 종의 짧은 이름. `notes["dayBranch.*"]`는 일지 전용 문장이라 표에 못 쓴다. */
    branchRelations: Record<
      "SAMHAP" | "BANHAP" | "YUKHAP" | "SAME" | "NEUTRAL" | "WONJIN" | "CHUNG",
      string
    >;
    /**
     * 표 머리행 이름 넷.
     *
     * **기존 키를 재사용하지 않는다.** 처음에는 점수 열에 `result.totalLabel`("매칭률")을
     * 썼는데, 바로 아래 고지가 "매칭률에 반영되지 않았습니다"라 모순으로 읽혔다(실측).
     * 열 이름은 짧아야 하고 뜻이 정확해야 해서 여기 따로 둔다.
     */
    pillarColumn: string;
    relationColumn: string;
    relationScoreColumn: string;
    tenGodColumn: string;
    stemGodsTitle: string;
    stemGodsHint: string;
    /** "{from}이 볼 때" */
    seesLabel: string;
    /** 점수에 반영되지 않았다는 고지. 표 아래에 붙인다. */
    notScoredNote: string;
    /** 부록 — 이 사주를 어떻게 계산했나 */
    appendixTitle: string;
    timeCorrectionLabel: string;
    /** "{time}으로 보았습니다" */
    timeCorrectionApplied: string;
    timeCorrectionNone: string;
    /** "{date}로 날짜가 넘어갔습니다" */
    timeCorrectionDateShift: string;
    calendarLabel: string;
    solarLabel: string;
    lunarLabel: string;
    lunarUnavailable: string;
  };
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
  bands: Record<"EXCELLENT" | "GOOD" | "FAIR" | "CHALLENGING", string>;
  engines: Record<"saju" | "zodiac", { name: string; description: string }>;
  factors: Record<
    | "dayMasterRelation"
    | "spouseStar"
    | "elementSupply"
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
  currentLanguage: "현재 언어",
  moreLanguages: "더보기",
  closeLanguages: "닫기",
  landing: {
    title: "두 사람의 인연,\n숫자로 확인해 보세요",
    subtitle:
      "전통 명리의 사주 궁합과 띠 궁합을 함께 계산해 매칭률로 보여드립니다.",
    cta: "사주 궁합 보기",
    howTitle: "이렇게 계산합니다",
    steps: [
      "두 사람의 생년월일을 입력합니다. 출생 시각은 선택 사항입니다.",
      "일간 오행·오행 보완·일지 관계로 사주 궁합을, 연지 관계로 띠 궁합을 분석합니다.",
      "두 점수를 가중 평균하여, 최종 매칭률을 보여드립니다.",
    ],
    privacyTitle: "입력한 정보는 저장하지 않습니다",
    privacyBody:
      "입력된 정보는 분석에만 사용하고 어디에도 기록하지 않습니다.\n결과 링크에 담긴 정보는 서버로 전송 및 저장되지 않습니다.",
    disclaimer:
      "분석 결과는 전통 명리 관점의 참고 자료일뿐, 과학적 예측이나 관계의 단정이 아닙니다.",
  },
  form: {
    title: "두 인연의 생년월일",
    description:
      "출생 시각을 알면 더 정확한 분석이 가능하지만, 몰라도 분석할 수 있습니다.",
    personA: "나의 정보",
    personB: "나의 인연",
    nickname: "성명(본명)",
    nicknamePlaceholder: "예: 김서윤",
    nicknameHint: "결과 화면 표시용입니다. 분석에는 활용되지 않습니다.",
    gender: "성별",
    male: "남성",
    female: "여성",
    genderUnspecified: "밝히지 않음",
    genderHint:
      "전통 명리는 배우자를 가리키는 자리를 성별에 따라 다르게 봅니다. 밝히지 않으면 해당 항목은 분석에서 제외됩니다.",
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
    submit: "광고 확인 후 궁합 보기",
    submitNoAd: "궁합 보기",
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
  affinity: {
    menu: "인연의 결",
    formTitle: "나에게 맞는 사람은 어떤 결인가",
    formDescription:
      "생년월일 하나만 넣으면 됩니다. 상대의 생일을 몰라도, 아직 그런 사람이 없어도 볼 수 있습니다.",
    meLegend: "나",
    genderHint:
      "전통 명리는 배우자 자리를 성별로 나눠 봅니다. 밝히지 않으시면 그 항목을 빼고 나머지로만 봅니다.",
    seekingLabel: "찾는 상대",
    seekingHint:
      "배우자 자리(정재·정관)는 두 사람의 성별이 모두 있어야 판정됩니다.",
    seekingAny: "정하지 않음",
    submit: "광고 확인 후 인연의 결 확인",
    submitNoAd: "인연의 결 확인",
    submitting: "찾아보는 중…",

    resultTitle: "인연의 결",
    intro:
      "당신의 사주가 부르는 상대의 결을 정리했습니다. 아래 유형은 **생일을 몰라도 성향으로 먼저 알아볼 수 있습니다.**",
    scoreCaption: "궁합에서 쓰는 항목 점수 그대로입니다. 합산한 매칭률이 아닙니다.",
    meTitle: "당신의 자리",
    meBody: "{dayMaster}이고, 지금은 {strength}입니다.",
    meHint:
      "사주는 태어난 연·월·일·시를 여덟 글자로 적은 것입니다. 그중 **태어난 날의 첫 글자가 나 자신**을 나타내고, 이것을 일간(日干)이라 합니다. 아래 유형도 모두 이 한 글자로 나눈 것입니다.",
    bestTitle: "잘 맞는 결",
    bestHint:
      "상대의 일간, 곧 **그 사람이 태어난 날의 기운**을 열 가지로 나눈 것입니다. 당신과 맞물리는 순서대로 셋을 뽑았습니다. 생일을 몰라도 아래 행동으로 먼저 짐작할 수 있습니다.",
    signsTitle: "이런 모습으로 나타납니다",
    avoidTitle: "겪어 봐야 하는 결",
    avoidHint:
      "안 된다는 뜻이 아닙니다. 처음의 편안함보다 서로 맞춰 가는 시간이 더 필요한 자리라는 뜻입니다.",
    bondLabel: "기질 맞물림",
    spouseLabel: "배우자 자리",
    spouseSkipped: "성별을 정하지 않아 이 항목은 빼고 봤습니다",
    scoreHelp:
      "**기질 맞물림** — 두 사람이 태어난 날의 기운이 서로 어떻게 물리는지 봅니다. 밀고 당기는 사이라도 음(陰)과 양(陽)이 엇갈린 짝을 가장 높게 봅니다.\n**배우자 자리** — 전통 명리에서 배우자를 뜻하는 자리가 따로 있습니다. 남성에게는 정재(正財), 여성에게는 정관(正官)이라 부르는 자리인데, 상대가 나에게 그 자리인지와 내가 상대에게 그 자리인지를 **양쪽으로** 봅니다. 둘 다 해당하면 전통 궁합에서 가장 좋게 보는 짝입니다.",
    typeHeading: "{name} 같은 사람",
    needTitle: "당신에게 지금 필요한 기운",
    needBody: "{elements} 기운이 상대에게 두터우면 당신의 얇은 자리가 채워집니다.",
    needHint:
      "사람을 오행으로 알아보기는 어렵습니다. 다만 상대의 생일을 알게 되면 이 자리를 먼저 보십시오.",
    zodiacTitle: "곁들여 보는 띠",
    zodiacHint:
      "띠는 태어난 해만 알면 되니 가장 먼저 확인할 수 있습니다. 다만 사주 넷 중 하나만 보는 것이라 참고로 두십시오.",
    zodiacGood: "잘 맞는 띠",
    zodiacHard: "부딪히기 쉬운 띠",
    tableType: "유형",
    tableSign: "띠",
    tableYears: "해당 연도",
    bornYear: "{year}년생",
    younger: "{n}살 아래",
    older: "{n}살 위",
    sameAge: "동갑",
    zodiacYearsCaution:
      "사주는 새해가 아니라 입춘(2월 4일 무렵)에 해가 바뀝니다. **1월과 2월 초에 태어난 사람은 앞 해의 띠**이니 그 시기 생일은 한 해 앞뒤를 함께 보십시오.",
    dayBranchTitle: "이 사람이 나와 맞을까",
    dayBranchBody:
      "나에게 맞는 사람일지, 생년월일로 간단히 확인해 볼 수 있습니다.\n자세한 내용은 하단의 사주 궁합 보기로 확인 바랍니다.",
    check: {
      button: "상대 생일로 확인해 보기",
      title: "이 사람은 어떤 결일까",
      body: "생년월일만 넣으면 그 사람이 위 열 유형 가운데 어디인지 알려 드립니다. 궁합 점수는 내지 않습니다.",
      submit: "확인하기",
      checking: "확인하는 중…",
      rank: "당신의 {rank}순위",
      heading: "이 사람은 {name}입니다",
      caution:
        "태어난 날로만 봅니다. **자정 무렵에 태어났다면** 앞뒤 날짜가 갈릴 수 있고, 1월과 2월 초 생일은 띠가 앞 해로 갑니다.",
      close: "닫기",
      another: "다른 사람 확인하기",
      error: "날짜를 확인해 주세요. 없는 날짜이거나 범위를 벗어났습니다.",
    },
    nextTitle: "마음에 둔 사람이 있다면",
    nextBody:
      "두 분의 생년월일을 넣으면 지금까지의 항목을 모두 합한 실제 매칭률이 나옵니다.",
    nextButton: "사주 궁합 보기",
    recalculate: "다시 보기",
    copyLink: "결과 링크 복사",
    copied: "복사했습니다",
    missingInput: "결과 정보를 읽을 수 없습니다. 처음부터 다시 입력해 주세요.",
    partialTime:
      "출생 시각을 입력하지 않아 시주를 뺀 채 보았습니다. 시각을 넣으면 필요한 기운이 더 정확해집니다.",
    disclaimer:
      "전통 명리 관점의 참고 자료이며, 특정한 사람을 만나라거나 피하라는 뜻이 아닙니다.",
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
  ads: { label: "광고" },
  selfAds: {
    label: "관련 서비스",
    comingSoon: "준비 중",
    purposes: {
      naminglink: "뜻과 획수로 짓는 한글·한자 이름",
      inyeonlink: "사주와 띠로 보는 두 사람의 궁합",
      sajulink: "원국과 오늘의 운세로 읽는 나의 사주",
      dreamslink: "상징 사전으로 풀어 보는 꿈 해몽",
      placelink: "한국의 데이트 장소를 나누고 추천하는 곳",
    },
  },
  analyzing: {
    title: "두 사람의 사주를 맞춰 보고 있습니다",
    // 점을 치는 말이 아니라 관계를 읽는 태도에 관한 문장으로 채운다. 결과를 기다리는 동안
    // 읽히는 자리라 단정하는 표현("반드시", "운명")은 쓰지 않는다.
    quotes: [
      "인연은 만나는 것이 아니라 알아보는 것입니다.",
      "잘 맞는 사이란 다투지 않는 사이가 아니라, 다투고도 돌아오는 사이입니다.",
      "사주는 정해진 답이 아니라 서로를 이해하는 하나의 언어입니다.",
      "닮아서 편한 사이가 있고, 달라서 배우는 사이가 있습니다.",
      "오래가는 관계는 대개 표현을 미루지 않은 관계입니다.",
      "상대의 방식이 낯설다면, 내게 없는 것을 가진 사람이라는 뜻입니다.",
      "좋은 궁합은 타고나는 것이 절반, 만들어 가는 것이 절반입니다.",
      "기대는 쪽과 내주는 쪽이 번갈아 바뀔 때 관계가 오래갑니다.",
      "점수보다 중요한 것은 그 점수를 어떻게 읽는가입니다.",
      "두 사람의 계절이 다르면, 서로의 계절을 알려 주면 됩니다.",
    ],
    watching: "광고를 보는 중입니다",
    remaining: "{seconds}초 후 결과가 열립니다",
  },
  report: {
    title: "궁합 리포트 PDF로 간직하기",
    body: "화면의 결과를 7장짜리 PDF로 만들어 드립니다. **화면에 없는 것이 네 장 더 들어갑니다** — 기운이 오가는 방향, 각자의 사주를 더 들여다본 표, 네 기둥이 만나는 자리, 계산 근거입니다.",
    buyButton: "{price} 결제하고 받기",
    preparing: "준비 중입니다",
    ordering: "주문을 만드는 중…",
    paying: "결제를 진행하는 중…",
    issuing: "리포트를 만드는 중…",
    done: "받으셨습니다. 다시 받으려면 아래 버튼을 눌러 주세요.",
    failed: "결제 또는 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 받기",
    contents: [
      "1장 — 매칭률과 이 관계의 강점·눈여겨볼 점",
      "2장 — 관계의 모양과 십신, 항목별 점수",
      "3장 — 두 사람의 사주 원국과 오행 세력",
      "4장 — 두 기운이 오가는 방향과 네 기둥이 만나는 자리",
      "5장 — 각자의 사주를 더 들여다봅니다(계절이 밀어 주는 기운)",
      "6장 — 상대의 네 기둥은 나에게 무엇인가",
      "7장 — 이 사주를 이렇게 계산했습니다",
    ],
    consentLabel:
      "이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **다운로드가 완료되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    consentRequired: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    productInfoTitle: "상품 정보 고시",
    productInfo: [
      ["제작·공급자", "{brand}"],
      ["상품 형태", "PDF 문서 1개(7장). 결제 후 화면에서 즉시 내려받습니다."],
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
  affinityReport: {
    title: "인연의 결 리포트 PDF로 간직하기",
    body: "화면의 결과를 4장짜리 PDF로 만들어 드립니다. **화면에 없는 전체 순위표**까지 담깁니다 — 화면은 상위 셋만 보여 주지만 PDF는 열 유형과 열두 띠를 전부 싣습니다.",
    buyButton: "{price} 결제하고 받기",
    preparing: "준비 중입니다",
    ordering: "주문을 만드는 중…",
    paying: "결제를 진행하는 중…",
    issuing: "리포트를 만드는 중…",
    done: "받으셨습니다. 다시 받으려면 아래 버튼을 눌러 주세요.",
    failed: "결제 또는 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 받기",
    contents: [
      "1장 — 당신의 자리와 지금 필요한 기운",
      "2장 — 잘 맞는 결 셋, 성향과 행동 단서",
      "3장 — 겪어 봐야 하는 결 + 천간 열 종 전체 순위표",
      "4장 — 띠 열둘 전체 순위표(출생 연도와 나이 차 포함)",
    ],
    consentLabel:
      "이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **다운로드가 완료되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    consentRequired: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    productInfoTitle: "상품 정보 고시",
    productInfo: [
      ["제작·공급자", "{brand}"],
      ["상품 형태", "PDF 문서 1개(4장). 결제 후 화면에서 즉시 내려받습니다."],
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
  reportDetail: {
    supplyTitle: "두 기운이 오가는 방향",
    supplyHint:
      "매칭률에 들어간 오행 항목은 두 방향의 평균입니다. 평균만 보면 누가 누구를 채워 주는지가 사라집니다. 여기서는 방향을 갈라 봅니다 — 한쪽만 크게 채워 주는 관계도 있습니다.",
    supplyReceiveLabel: "{name}이(가) 채워지는 정도",
    needsLabel: "지금 필요한 기운",
    bondTitle: "두 일간이 맺는 짝",
    depthTitle: "각자의 사주를 더 들여다봅니다",
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
    seasonBoostTitle: "월령이 얼마나 밀어 올렸나",
    rawLabel: "월령 전",
    strengthLabel: "월령 후",
    earthSeasonNote:
      "환절기(辰未戌丑) 달에 태어나 土를 함께 왕으로 보았습니다.",
    allyRatioLabel: "일간 편의 비율",
    allyRatioHint:
      "인성과 비겁을 합한 비율입니다. 45%를 넘으면 신강, 35%에 못 미치면 신약으로 봅니다. 판정이 어디쯤에서 갈렸는지 직접 보시라고 숫자를 함께 싣습니다.",
    pillarsTitle: "네 기둥이 만나는 자리",
    pillarsHint:
      "매칭률에 들어간 것은 일지(日支) 하나입니다. 배우자 자리이기 때문입니다. 나머지 세 기둥도 같은 관계표로 볼 수 있어 함께 싣습니다.",
    branchRelations: {
      SAMHAP: "삼합",
      BANHAP: "반합",
      YUKHAP: "육합",
      SAME: "같은 지지",
      NEUTRAL: "무관계",
      WONJIN: "원진",
      CHUNG: "충",
    },
    pillarColumn: "자리",
    relationColumn: "관계",
    relationScoreColumn: "관계 점수",
    tenGodColumn: "십신",
    stemGodsTitle: "상대의 네 기둥은 나에게 무엇인가",
    stemGodsHint:
      "매칭률은 일간(日干)끼리만 봅니다. 상대의 나머지 기둥도 같은 규칙으로 십신이 정해집니다 — 그 사람의 어느 자리가 나에게 무엇인지가 보입니다.",
    seesLabel: "{from}이(가) 볼 때",
    notScoredNote: "이 표의 점수는 매칭률에 반영되지 않았습니다. 세기를 견주어 보시라고 함께 적습니다.",
    appendixTitle: "이 사주를 이렇게 계산했습니다",
    timeCorrectionLabel: "출생 시각",
    timeCorrectionApplied: "진태양시로 고쳐 {time}으로 보았습니다.",
    timeCorrectionNone: "출생 시각을 입력하지 않아 시주를 빼고 보았습니다.",
    timeCorrectionDateShift: "보정으로 날짜가 {date}로 넘어가, 그 날의 일주로 잡았습니다.",
    calendarLabel: "사주를 뽑은 날짜",
    solarLabel: "양력",
    lunarLabel: "음력",
    lunarUnavailable: "만세력 표에 없는 날이라 음력을 함께 적지 못했습니다.",
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
    elementSupply: "오행 보완(용신)",
    dayBranchRelation: "일지 관계",
    branchRelation: "띠 관계",
  },
  notes: {
    // 강점·주의점 문구. 항목별로 "잘 맞을 때"와 "걸릴 때"를 각각 적어 둔다.
    "strength.dayMasterRelation":
      "두 사람의 기질이 서로에게 필요한 방향으로 놓여 있습니다. 상대의 방식이 낯설게 느껴질 때도 결국은 자기에게 없는 것을 채워 주는 쪽으로 작용합니다.",
    "strength.spouseStar":
      "전통적으로 배우자 자리에 해당하는 기운을 서로 지니고 있습니다. 처음부터 이유 없이 편했다면 이 부분일 가능성이 큽니다.",
    "strength.elementSupply":
      "각자에게 지금 필요한 기운을 상대가 갖고 있습니다. 혼자서는 잘 안 풀리던 자리가 이 사람과 함께일 때 수월해지는 조합입니다.",
    "strength.dayBranchRelation":
      "일지는 전통적으로 배우자 자리로 봅니다. 이 자리가 서로 어울려 함께 지내는 시간이 편안한 편입니다.",
    "strength.branchRelation":
      "띠의 관계가 좋습니다. 처음 만났을 때의 인상이나 주변에서 보는 그림이 자연스러운 조합입니다.",
    "caution.dayMasterRelation":
      "기질이 부딪히기 쉬운 자리입니다. 같은 일을 두고도 속도와 방식이 달라, 상대가 일부러 그런다고 느끼기 쉽습니다. 결론보다 과정을 먼저 맞춰 보십시오.",
    "caution.spouseStar":
      "서로가 전통적으로 말하는 배우자 자리의 기운은 아닙니다. 끌림이 즉각적이지 않을 수 있으나, 오래 겪으며 쌓이는 쪽에 가깝습니다.",
    "caution.elementSupply":
      "각자에게 필요한 기운이 상대에게도 얇습니다. 둘 다 잘하는 일은 아주 잘하지만, 서로가 부족한 자리는 계속 비어 있게 됩니다. 그 자리는 관계 밖에서 채우는 편이 낫습니다.",
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
    "dayMaster.CLASH_BONDED":
      "{elementA}과 {elementB}이 서로를 누르되 음양이 어긋난 짝입니다. 전통에서 부부의 자리로 보는 배합으로, 긴장이 애정으로 옮겨 가는 쪽입니다.",
    "dayMaster.CLASH_HARSH":
      "{elementA}과 {elementB}이 서로를 누르는데 음양이 같습니다. 자극은 크지만 서로에게 지우는 부담도 그만큼 큽니다.",
    "dayMaster.FLOW_GUARDED":
      "한쪽이 기운을 내주고 다른 쪽이 그것을 감싸는 짝입니다. 격한 기운이 상대에게서 다듬어지는 배합(상관패인)입니다.",
    "dayMaster.FLOW_BLOCKED":
      "한쪽이 기운을 내주는데 상대가 그것을 거둬 갑니다. 주는 쪽이 지치기 쉬운 배합(효신탈식)이라, 무엇을 주고받는지 서로 말로 확인하는 편이 좋습니다.",
    "dayMaster.PEER_EVEN":
      "두 사람 모두 {elementA} 기운이고 음양까지 같습니다. 대등하고 편하지만 서로를 밀어 주는 힘은 약합니다.",
    "dayMaster.PEER_RIVAL":
      "두 사람 모두 {elementA} 기운인데 음양이 다릅니다. 빠르게 끌리는 대신 같은 자리를 두고 다투기 쉽습니다.",
    "supply.AMPLE":
      "서로에게 필요한 기운을 넉넉히 갖고 있습니다. 첫 번째 사람에게는 {needA}, 두 번째 사람에게는 {needB} 기운이 지금 필요한데, 상대가 그 자리를 채워 줍니다.",
    "supply.ENOUGH":
      "서로에게 필요한 기운을 어느 정도 갖고 있습니다. 첫 번째 사람에게는 {needA}, 두 번째 사람에게는 {needB} 기운이 필요하며, 상대에게 그만한 몫이 있습니다.",
    "supply.THIN":
      "서로에게 필요한 기운이 상대에게 넉넉하지는 않습니다. 첫 번째 사람에게는 {needA}, 두 번째 사람에게는 {needB} 기운이 필요한데 그 자리가 얇습니다.",
    "supply.SCARCE":
      "필요한 기운을 서로에게서 얻기는 어려운 조합입니다. 첫 번째 사람에게는 {needA}, 두 번째 사람에게는 {needB} 기운이 필요한데 상대에게도 그 자리가 비어 있습니다. 그 부분은 관계 밖에서 채우는 편이 낫습니다.",
    "dayBranch.SAMHAP": "일지가 삼합을 이룹니다. 배우자 자리에서 가장 잘 맞는 조합입니다.",
    "dayBranch.BANHAP":
      "일지가 반합입니다. 삼합의 중심 글자를 끼고 있어 배우자 자리에서 잘 어울리는 짝입니다.",
    "dayBranch.YUKHAP": "일지가 육합입니다. 서로 끌어당기는 짝입니다.",
    "dayBranch.SAME": "일지가 같습니다. 닮은 만큼 편하지만 새로움은 적습니다.",
    "dayBranch.NEUTRAL": "일지끼리 특별한 관계는 없습니다.",
    "dayBranch.WONJIN":
      "일지가 원진입니다. 크게 부딪치지는 않는데 이유를 대기 어려운 서운함이 쌓이기 쉬운 자리라, 넘어가지 말고 그때그때 말하는 편이 좋습니다.",
    "dayBranch.CHUNG": "일지가 충입니다. 부딪히기 쉬운 자리라 대화의 방식이 중요합니다.",
    "zodiac.SAMHAP": "{animalA}띠와 {animalB}띠는 삼합입니다. 띠 궁합에서 가장 좋은 조합입니다.",
    "zodiac.BANHAP":
      "{animalA}띠와 {animalB}띠는 반합입니다. 삼합의 중심을 낀 조합이라 서로 잘 맞습니다.",
    "zodiac.YUKHAP": "{animalA}띠와 {animalB}띠는 육합입니다. 서로 잘 어울립니다.",
    "zodiac.SAME": "둘 다 {animalA}띠입니다. 성향이 닮았습니다.",
    "zodiac.NEUTRAL": "{animalA}띠와 {animalB}띠는 특별한 관계가 없습니다.",
    "zodiac.WONJIN":
      "{animalA}띠와 {animalB}띠는 원진입니다. 크게 다투지는 않아도 은근한 어긋남이 오래가기 쉬운 조합으로 봅니다.",
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
  currentLanguage: "Current language",
  moreLanguages: "More",
  closeLanguages: "Close",
  landing: {
    title: "See how two people\nfit together",
    subtitle:
      "All you need is a birth date.\nWe combine Saju (Four Pillars) compatibility with zodiac compatibility and show it as a match rate.",
    cta: "See Saju compatibility",
    howTitle: "How it works",
    steps: [
      "Enter both birth dates. The birth time is optional.",
      "Saju compatibility comes from day-master elements, elemental balance and the day branch; zodiac compatibility comes from the year branch.",
      "The two scores are combined into a weighted match rate.",
    ],
    privacyTitle: "Nothing you enter is stored",
    privacyBody:
      "Birth dates are used only while the result is being calculated and are never recorded. No account is needed. Nothing carried in a result link is sent to the server.",
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
    submit: "Watch ad and see compatibility",
    submitNoAd: "See compatibility",
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
  affinity: {
    menu: "Your match profile",
    formTitle: "What kind of person suits you",
    formDescription:
      "One birth date is all it takes. You can read this without knowing anyone's birthday — or without having anyone in mind yet.",
    meLegend: "You",
    genderHint:
      "Traditional Saju reads the spouse position differently by gender. Leave it unset and that factor is dropped rather than guessed.",
    seekingLabel: "Looking for",
    seekingHint:
      "The spouse position (Jeongjae / Jeonggwan) can only be judged when both genders are known.",
    seekingAny: "Not specified",
    submit: "Watch ad and see match result",
    submitNoAd: "See match result",
    submitting: "Reading…",

    resultTitle: "Your match profile",
    intro:
      "Here is the grain of person your chart leans toward. **You can recognise these types by temperament,** long before you learn a birthday.",
    scoreCaption:
      "These are the same per-factor scores the compatibility engine uses — not a combined match rate.",
    meTitle: "Where you stand",
    meBody: "You are {dayMaster}, and right now you are {strength}.",
    meHint:
      "Saju writes your birth year, month, day and hour as eight characters. **The first character of the birth day stands for you** — it is called the day stem. Every type below is sorted by that one character.",
    bestTitle: "Grains that suit you",
    bestHint:
      "This is the other person's day stem — **the energy of the day they were born** — sorted into ten kinds, of which these three mesh with yours. You can often guess it from the behaviour below, long before you learn a birthday.",
    signsTitle: "How it shows",
    avoidTitle: "Grains that take work",
    avoidHint:
      "Not a warning. It means the ease comes later, after you have both put the time in.",
    bondLabel: "Temperament mesh",
    spouseLabel: "Spouse position",
    spouseSkipped: "Gender was left unset, so this factor was dropped",
    scoreHelp:
      "**Temperament mesh** — how the energies of your two birth days lock together. Even a push-and-pull pairing scores highest when yin and yang are crossed.\n**Spouse position** — traditional Saju sets aside one position for a spouse: Jeongjae for men, Jeonggwan for women. We check it **both ways** — whether they hold that position for you, and whether you hold it for them. Both at once is the pairing tradition rates highest.",
    typeHeading: "Someone like {name}",
    needTitle: "What you are short of right now",
    needBody:
      "If {elements} runs strong in them, it fills the place that runs thin in you.",
    needHint:
      "You cannot read someone's five elements on sight. But once you know their birth date, look here first.",
    zodiacTitle: "Zodiac, as a side note",
    zodiacHint:
      "The zodiac only needs a birth year, so it is the quickest thing to check. It is also one of four pillars — treat it as a hint.",
    zodiacGood: "Signs that suit you",
    zodiacHard: "Signs that rub",
    tableType: "Type",
    tableSign: "Sign",
    tableYears: "Birth years",
    bornYear: "born {year}",
    younger: "{n} yr younger",
    older: "{n} yr older",
    sameAge: "same age",
    zodiacYearsCaution:
      "In Saju the year turns at Ipchun (around 4 February), not on 1 January. **Anyone born in January or early February belongs to the previous year's sign**, so check the year either side for those birthdays.",
    dayBranchTitle: "Is this the one for me?",
    dayBranchBody:
      "A birth date is all it takes to check whether someone suits you.\nFor the full reading, use Saju compatibility at the bottom of this page.",
    check: {
      button: "Check someone's birthday",
      title: "What grain is this person?",
      body: "Enter a birth date and we will tell you which of the ten types above they are. No compatibility score is calculated.",
      submit: "Check",
      checking: "Checking…",
      rank: "your no. {rank}",
      heading: "This person is {name}",
      caution:
        "This reads the birth day only. **If they were born around midnight** the day can fall either side, and January or early February birthdays belong to the previous year's sign.",
      close: "Close",
      another: "Check someone else",
      error: "Please check the date — it does not exist or is out of range.",
    },
    nextTitle: "Someone in mind?",
    nextBody:
      "Put in both birth dates and you get the real match rate, with every factor above added together.",
    nextButton: "See Saju compatibility",
    recalculate: "Read again",
    copyLink: "Copy result link",
    copied: "Copied",
    missingInput: "We could not read the result. Please start again.",
    partialTime:
      "No birth time was given, so the hour pillar was left out. Adding it sharpens what you are short of.",
    disclaimer:
      "A reference from the perspective of traditional Saju. It is not telling you to seek out or avoid any particular person.",
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
  ads: { label: "Advertisement" },
  selfAds: {
    label: "Related services",
    comingSoon: "coming soon",
    purposes: {
      naminglink: "Korean and hanja names chosen by meaning and stroke count",
      inyeonlink: "compatibility read from two people's saju and zodiac signs",
      sajulink: "your own saju, and how today meets it",
      dreamslink: "dream readings drawn from a dictionary of symbols",
      placelink: "sharing and recommending date spots in Korea",
    },
  },
  analyzing: {
    title: "Reading both charts",
    quotes: [
      "You do not so much meet the right person as recognise them.",
      "A good match is not one that never argues — it is one that comes back after arguing.",
      "Saju is not a fixed answer. It is one language for understanding each other.",
      "Some pairings are easy because you are alike; others teach you because you are not.",
      "Relationships that last are usually the ones where nothing was left unsaid for too long.",
      "If their way feels foreign, it means they hold something you do not.",
      "Compatibility is half what you are born with and half what you build.",
      "A relationship lasts when leaning and giving take turns.",
      "What matters more than the score is how you read it.",
      "If your seasons differ, tell each other what your season is like.",
    ],
    watching: "Watching the ad",
    remaining: "Your result opens in {seconds}s",
  },
  report: {
    title: "Keep this reading as a PDF",
    body: "We turn this result into a seven-page PDF. **Four of those pages are not on screen at all** - which way the energy flows, a closer look at each chart, where the four pillars meet, and how the charts were calculated.",
    buyButton: "Pay {price} and download",
    preparing: "Not available yet",
    ordering: "Creating your order…",
    paying: "Processing payment…",
    issuing: "Preparing your report…",
    done: "Downloaded. Use the button below to download it again.",
    failed: "The payment or download failed. Please try again in a moment.",
    retry: "Download again",
    contents: [
      "Page 1 — match rate, what the pairing has going for it and what to watch",
      "Page 2 — the shape of the relationship, the ten gods, and scores by factor",
      "Page 3 — both charts and elemental strength",
      "Page 4 — which way the energy flows, and where the four pillars meet",
      "Page 5 — a closer look at each chart (what the season pushes forward)",
      "Page 6 — what each of their pillars is to you",
      "Page 7 — how these charts were calculated",
    ],
    consentLabel:
      "I understand this is digital content delivered immediately on payment, and that **withdrawal for a simple change of mind is restricted once the download completes**.",
    consentRequired: "Please confirm the withdrawal terms before paying.",
    productInfoTitle: "Product information",
    productInfo: [
      ["Provider", "{brand}"],
      ["Format", "One PDF document (7 pages), downloaded on screen right after payment."],
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
  affinityReport: {
    title: "Keep your match profile as a PDF",
    body: "We turn this reading into a four-page PDF. It includes **the full ranking the screen does not show** — the screen gives you the top three, the PDF carries all ten types and all twelve signs.",
    buyButton: "Pay {price} and download",
    preparing: "Preparing",
    ordering: "Creating the order…",
    paying: "Processing payment…",
    issuing: "Building your report…",
    done: "Downloaded. Use the button below to get it again.",
    failed: "The payment or the download did not go through. Please try again shortly.",
    retry: "Download again",
    contents: [
      "Page 1 — Where you stand and what you are short of",
      "Page 2 — Three grains that suit you, with behaviour cues",
      "Page 3 — The grain that takes work, plus the full day-stem ranking",
      "Page 4 — Full ranking of all twelve signs, with birth years",
    ],
    consentLabel:
      "This is digital content delivered immediately after payment. I understand that **once the download completes, the right to withdraw for a change of mind is limited.**",
    consentRequired: "Please agree to the withdrawal terms before paying.",
    productInfoTitle: "Product information",
    productInfo: [
      ["Provider", "{brand}"],
      ["Format", "One PDF document (4 pages), downloaded on this screen right after payment."],
      ["Requirements", "Any device that opens a PDF. No install, no account."],
      ["Availability", "No time limit. The downloaded file is yours to keep."],
      ["Re-download", "Up to 5 times on the same order. We do not store the file, so it cannot be rebuilt once you leave this screen."],
      ["Withdrawal", "Full refund before the download completes. After it completes, withdrawal for a change of mind is limited."],
      ["Return costs", "None. There is nothing to ship."],
    ],
    refundContact:
      "For refunds or questions, contact the support desk or email below. If the document was never produced, or the amount charged differs from the order, we refund in full.",
    pdfLanguageNotice:
      "The PDF is produced in the same language as this screen.",
  },
  reportDetail: {
    supplyTitle: "Which way the energy flows",
    supplyHint:
      "The Five Elements score in your match rate is the average of two directions. An average hides who supplies whom. Here we separate them — in some pairings only one side is well supplied.",
    supplyReceiveLabel: "How much {name} is supplied",
    needsLabel: "What is needed now",
    bondTitle: "The bond between the two Day Masters",
    depthTitle: "A closer look at each chart",
    vitalityTitle: "What the season pushes forward",
    vitalityHint:
      "The strength bars show how much of each element is present. This table shows whether the birth month pushes it forward. The same amount behaves differently at Wang than at Sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "at its peak" },
      SANG: { name: "Sang (相)", body: "rising next" },
      HYU: { name: "Hyu (休)", body: "resting after its turn" },
      SU: { name: "Su (囚)", body: "confined, hard to move" },
      SA: { name: "Sa (死)", body: "at its weakest" },
    },
    seasonBoostTitle: "How much the month lifted it",
    rawLabel: "Before the month",
    strengthLabel: "After the month",
    earthSeasonNote:
      "Born in a transitional month (辰未戌丑), so Earth was also treated as peaking.",
    allyRatioLabel: "Share of the Day Master's side",
    allyRatioHint:
      "Resource plus Peer, as a share of the whole. Above 45% is a strong Day Master, below 35% a weak one. We print the number so you can see where the verdict fell.",
    pillarsTitle: "Where the four pillars meet",
    pillarsHint:
      "Only the Day branch enters the match rate — it is the spouse seat. The other three pillars can be read with the same table, so we include them.",
    branchRelations: {
      SAMHAP: "Three Harmony",
      BANHAP: "Half Harmony",
      YUKHAP: "Six Harmony",
      SAME: "Same branch",
      NEUTRAL: "No relation",
      WONJIN: "Resentment",
      CHUNG: "Clash",
    },
    pillarColumn: "Pillar",
    relationColumn: "Relation",
    relationScoreColumn: "Relation score",
    tenGodColumn: "Ten God",
    stemGodsTitle: "What each of their pillars is to you",
    stemGodsHint:
      "The match rate compares Day Masters only. The same rule fixes a Ten God for their other pillars too — it shows which part of that person is what to you.",
    seesLabel: "As seen by {from}",
    notScoredNote:
      "The scores in this table are not part of the match rate. They are printed so you can compare intensity.",
    appendixTitle: "How this chart was calculated",
    timeCorrectionLabel: "Birth time",
    timeCorrectionApplied: "Corrected to true solar time and read as {time}.",
    timeCorrectionNone: "No birth time was given, so the Hour pillar was left out.",
    timeCorrectionDateShift:
      "The correction moved the date to {date}, so the Day pillar was taken from that day.",
    calendarLabel: "Date the chart was drawn from",
    solarLabel: "Solar",
    lunarLabel: "Lunar",
    lunarUnavailable:
      "This day is missing from the almanac table, so the lunar date could not be printed.",
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
    elementSupply: "Elemental supply",
    dayBranchRelation: "Day branch",
    branchRelation: "Zodiac signs",
  },
  notes: {
    "strength.dayMasterRelation":
      "Your temperaments sit in a position that serves the other. Even when the other's way feels foreign, it tends to supply what you lack.",
    "strength.spouseStar":
      "You each carry the element traditionally read as the spouse position. If things felt easy from the start for no obvious reason, this is likely why.",
    "strength.elementSupply":
      "Each of you holds what the other currently needs. Things that were hard to move alone tend to come easier together.",
    "strength.dayBranchRelation":
      "The day branch is traditionally read as the spouse's seat. Yours sit well together, which tends to make shared time comfortable.",
    "strength.branchRelation":
      "The zodiac signs sit well together — the kind of pairing that looks natural from the outside and reads easily on first meeting.",
    "caution.dayMasterRelation":
      "This is where temperaments rub. Faced with the same task your pace and method differ, which is easy to misread as deliberate. Agree on the process before the conclusion.",
    "caution.spouseStar":
      "Neither of you carries what tradition calls the other's spouse-position element. The pull may not be immediate; this is a pairing that accumulates over time instead.",
    "caution.elementSupply":
      "What each of you needs runs thin in the other too. What you are both good at, you are very good at — but the places you both lack stay unfilled. Better to source those from outside the relationship.",
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
    "dayMaster.CLASH_BONDED":
      "{elementA} and {elementB} restrain each other, but with opposite polarity. Tradition reads this as the spouse pairing — the friction tends to turn into attachment.",
    "dayMaster.CLASH_HARSH":
      "{elementA} and {elementB} restrain each other with the same polarity. The charge is strong, and so is the weight each places on the other.",
    "dayMaster.FLOW_GUARDED":
      "One of you gives energy out and the other holds it. The sharper impulse gets tempered by the other — what tradition calls a guarded pairing.",
    "dayMaster.FLOW_BLOCKED":
      "One of you gives energy out and the other draws it away. The giving side tires easily here, so it helps to say plainly what each of you is giving and taking.",
    "dayMaster.PEER_EVEN":
      "Both carry {elementA} energy with the same polarity. That makes things even and easy, but neither pushes the other forward.",
    "dayMaster.PEER_RIVAL":
      "Both carry {elementA} energy with opposite polarity. The pull is quick, but you compete for the same ground.",
    "supply.AMPLE":
      "Each of you holds plenty of what the other needs. The first person needs {needA} and the second needs {needB} — and the other supplies it.",
    "supply.ENOUGH":
      "Each of you holds a fair share of what the other needs: {needA} for the first person, {needB} for the second.",
    "supply.THIN":
      "What each of you needs — {needA} for the first person, {needB} for the second — runs thin in the other.",
    "supply.SCARCE":
      "Neither of you can readily supply what the other needs: {needA} for the first person, {needB} for the second, and both places sit empty. Better to source that from outside the relationship.",
    "dayBranch.SAMHAP":
      "The day branches form a triple harmony — the strongest pairing in the spouse position.",
    "dayBranch.BANHAP":
      "The day branches form a half harmony around the anchor of a triple. A well-suited pairing in the spouse position.",
    "dayBranch.YUKHAP": "The day branches form a six harmony. You draw each other in.",
    "dayBranch.SAME":
      "The day branches are identical. That makes things easy, but leaves little novelty.",
    "dayBranch.NEUTRAL": "The day branches hold no particular relationship.",
    "dayBranch.WONJIN":
      "The day branches sit in quiet resentment. Little breaks out openly, but grievances that are hard to name tend to accumulate — better said at the time than let go.",
    "dayBranch.CHUNG":
      "The day branches clash. This position is prone to friction, so how you talk to each other matters.",
    "zodiac.SAMHAP":
      "The {animalA} and the {animalB} form a triple harmony — the best zodiac pairing.",
    "zodiac.BANHAP":
      "The {animalA} and the {animalB} form a half harmony around a triple's anchor, so you suit each other.",
    "zodiac.YUKHAP": "The {animalA} and the {animalB} form a six harmony. You suit each other well.",
    "zodiac.SAME": "You are both born in the year of the {animalA}, so your temperaments echo.",
    "zodiac.NEUTRAL": "The {animalA} and the {animalB} hold no particular relationship.",
    "zodiac.WONJIN":
      "The {animalA} and the {animalB} sit in quiet resentment — rarely an open quarrel, but a subtle mismatch that tends to last.",
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

// 23개 로케일 전부 채워졌다. `translatedLocales`가 이 객체의 키에서 나오므로, 언어 선택기에
// 무엇이 뜨는지는 여기서 정해진다 — 번역이 미덥지 않은 언어가 생기면 이 줄에서 빼면 그만이다.
const dictionaries: Partial<Record<Locale, Dictionary>> = {
  ko,
  en,
  ja,
  zh,
  de,
  es,
  fr,
  it,
  pt,
  vi,
  th,
  id,
  ru,
  ar,
  fil,
  uz,
  mn,
  hi,
  tr,
  km,
  ms,
  kk,
  pl,
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
