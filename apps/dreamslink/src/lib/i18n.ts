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
import type { SelfAdKey } from "@naminglink/core/self-ads";
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
 * 유료 상품 판매 문구 한 벌. 상품이 둘이라(꿈 카드·태몽 리포트) 같은 모양을 두 번 쓴다.
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
  /**
   * 해몽 화면. **이 서비스의 본체다.**
   *
   * 무료 조회가 트래픽을 받는 자리라 여기 문구가 가장 많이 읽힌다.
   *
   * **궁합 시절의 절은 2026-08-06에 전부 걷어냈다**(`form`·`reading`·`relation`·`affinity`·
   * `tenGods`·`reportDetail` 등 19개, 잎 476개 중 400개 남짓). 남겨 두면 번역기가 스물한 번씩
   * 옮기고, 화면에 없는 문구를 검사기가 계속 검사한다. **쓰지 않는 절을 다시 들이지 말 것.**
   */
  dream: {
    title: string;
    subtitle: string;
    textLabel: string;
    textPlaceholder: string;
    moodLabel: string;
    moods: { good: string; scary: string; strange: string; sad: string; unsure: string };
    recurringLabel: string;
    submit: string;
    submitting: string;
    errorEmpty: string;
    errorGeneric: string;
    resultTitle: string;
    symbolsHeading: string;
    noSymbols: string;
    themesHeading: string;
    conceptionNotice: string;
    /**
     * 상징을 하나도 못 찾았을 때 **막다른 길로 두지 않기 위한 두 문구.**
     *
     * 예전에는 "찾지 못했습니다"로 끝났다. 정직한 결과이긴 하지만 이용자가 거기서 나가면
     * 서비스도 광고도 거기서 끝난다. 사전 안으로 들여보내면 이용자는 찾던 것을 찾을 길이
     * 생기고, 그 페이지에서 광고가 노출된다.
     */
    browseSymbols: string;
    popularSymbols: string;
    disclaimer: string;
    again: string;
  };
  landing: {
    title: string;
    subtitle: string;
    howTitle: string;
    steps: [string, string, string];
    privacyTitle: string;
    privacyBody: string;
    disclaimer: string;
  };
  /**
   * 광고 자리 표시. 애드센스는 광고에 라벨을 붙일 때 "광고"에 해당하는 말만 허용한다
   * ("추천", "관련 글" 같은 표현은 정책 위반이다).
   */
  ads: { label: string };
  /**
   * 셀프 광고 — 형제 서비스 소개.
   *
   * **보상형 광고가 안 붙을 때(no-fill) 이 자리가 대신 찬다.** 초기에는 보상형 수요가 적어
   * 자주 비는데, 그때 아무것도 안 그리면 광고 자리가 그냥 사라진다.
   *
   * **문구는 사주링크에서 스물세 벌 그대로 가져왔다**(`scripts/import-self-ads-copy.mjs`).
   * "형제 서비스가 무엇을 하는 곳인가"는 앱이 달라도 같은 말이라, 다시 번역시키면 호출만 늘고
   * 같은 뜻이 앱마다 다른 문장이 된다.
   *
   * `dreamslink`도 목록에 있다. 이 앱에서는 자기 자신이라 빼고 그리지만(`selfAdsExcluding`),
   * 같은 사전을 형제 앱이 가져다 쓸 수 있으므로 문구는 다섯 벌 다 갖는다.
   */
  selfAds: {
    label: string;
    /** 아직 열지 않은 서비스에 붙인다. 링크는 걸지 않는다. */
    comingSoon: string;
    /**
     * 서비스마다 한 줄 소개. **이름은 여기 없다** — 상표는 번역하는 것이 아니라 고정값이라
     * 명단(`SELF_AD_SERVICES.name`)이 갖는다.
     */
    purposes: Record<SelfAdKey, string>;
  };
  analyzing: {
    /** 사전을 뒤지는 잠깐 동안(0.1초 남짓) 보이는 문구. */
    title: string;
    /** 꿈을 대하는 태도에 관한 문장들. 광고를 보는 동안 하나씩 바뀐다. */
    quotes: string[];
    watching: string;
    /** "{seconds}초 후 결과가 열립니다" */
    remaining: string;
  };
  /**
   * 파는 것이 둘이라 `ReportCopy`를 두 번 쓴다.
   *
   *   dreamCard         꿈 카드 — **이미지 한 장**이다. PDF가 아니라는 사실을 고시가 말해야 한다
   *   conceptionReport  태몽 리포트 — PDF 4장(`CONCEPTION_PAGE_COUNT`가 정한다)
   *
   * **장수는 `contents` 길이와 고시 문구가 함께 말한다** — `verify-product-consistency`가
   * 그 둘을 대 본다. 목차를 고치면 고시의 숫자도 같이 고칠 것.
   */
  dreamCard: ReportCopy;
  conceptionReport: ReportCopy;
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
};

const ko: Dictionary = {
  brand: "드림링크",
  tagline: "전통 해몽으로 읽는 오늘의 꿈",
  currentLanguage: "현재 언어",
  moreLanguages: "더보기",
  closeLanguages: "닫기",
  dream: {
    title: "꿈 해몽",
    subtitle: "꾼 꿈을 적어 주시면 전통 해몽 상징 사전에서 찾아 풀어 드립니다.",
    textLabel: "어떤 꿈을 꾸셨나요",
    textPlaceholder: "기억나는 대로 적어 주세요. 예: 맑은 물에서 잉어가 뛰어올랐다",
    moodLabel: "깨어났을 때 기분",
    moods: {
      good: "좋았다",
      scary: "무서웠다",
      strange: "이상했다",
      sad: "슬펐다",
      unsure: "잘 모르겠다",
    },
    recurringLabel: "같은 꿈을 반복해서 꿉니다",
    submit: "해몽 보기",
    submitting: "찾아보는 중…",
    errorEmpty: "꾼 꿈을 조금만 더 적어 주세요.",
    errorGeneric: "해몽을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
    resultTitle: "꿈 해몽",
    symbolsHeading: "꿈에서 찾은 상징",
    noSymbols: "이 꿈에서는 사전에 있는 전통 상징을 찾지 못했습니다. 없는 의미를 지어내지 않기 위해 비워 둡니다.",
    themesHeading: "함께 가리키는 것",
    conceptionNotice: "전통적으로 태몽으로 보아 온 상징이 있습니다. 임신 여부를 판정하지는 않습니다.",
    browseSymbols: "전통 해몽 상징 사전 보기",
    popularSymbols: "자주 찾는 상징",
    disclaimer: "전통 해몽 관점의 참고 자료이며 의학·재무·법률 자문이 아닙니다. 적어 주신 꿈은 저장하지 않습니다.",
    again: "다른 꿈 보기",
  },
  landing: {
    title: "오늘 꾼 꿈을\n전통 해몽으로 풀어 봅니다",
    subtitle:
      "꿈에 나온 상징을 전통 해몽 사전에서 찾아 그 뜻을 보여드립니다.\n생년월일도 회원가입도 필요하지 않습니다.",
    howTitle: "이렇게 풀이합니다",
    steps: [
      "꾼 꿈을 기억나는 대로 적습니다. 짧아도 괜찮습니다.",
      "전통 해몽 사전에서 그 꿈에 나온 상징을 찾습니다. 사전에 없으면 없다고 말합니다.",
      "상징마다 전해 오는 뜻과, 그것들이 함께 가리키는 것을 보여드립니다.",
    ],
    privacyTitle: "적어 주신 꿈은 저장하지 않습니다",
    // **말을 정확히 고를 것.** 인연링크 원문은 "서버로 전송 및 저장되지 않습니다"였는데,
    // 여기서는 그것이 거짓이다 — 꿈 이야기는 사전을 뒤지기 위해 `/api/dream`으로 실제로
    // 전송된다(저장만 하지 않는다). 전송과 저장을 뭉뚱그리면 방침이 사실과 어긋난다.
    privacyBody:
      "꿈 이야기는 풀이를 계산하는 동안에만 쓰고 어디에도 기록하지 않습니다.\n회원가입이 필요 없고, 계산이 끝나면 서버에 아무것도 남지 않습니다.",
    disclaimer:
      "전통 해몽 관점의 참고 자료일 뿐, 앞일에 대한 예측이나 의학·재무 판단이 아닙니다.",
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
    title: "꿈에 나온 상징을 찾고 있습니다",
    // 점을 치는 말이 아니라 꿈을 대하는 태도에 관한 문장으로 채운다. 결과를 기다리는 동안
    // 읽히는 자리라 단정하는 표현("반드시", "운명")과 앞일을 맞힌다는 말은 쓰지 않는다.
    quotes: [
      "꿈은 앞일을 알려 주는 것이라기보다, 지난 며칠을 되비추는 것일 때가 많습니다.",
      "같은 상징이라도 꾼 사람의 사정에 따라 다르게 읽혀 왔습니다.",
      "전통 해몽은 정답표가 아니라 오래 쌓인 이야기의 모음입니다.",
      "무서운 꿈이 곧 나쁜 꿈은 아닙니다. 놀란 마음이 남긴 자국일 수 있습니다.",
      "기억나는 조각이 적어도 괜찮습니다. 상징 하나면 시작할 수 있습니다.",
      "되풀이되는 꿈은 대개 아직 끝내지 못한 일과 함께 옵니다.",
      "꿈에서 본 물의 맑기와 색은 옛사람들이 특히 눈여겨보던 것입니다.",
      "깨어난 뒤의 기분은 꿈의 내용만큼이나 오래 남습니다.",
      "좋은 꿈이든 아니든, 그것으로 하루를 정하지는 않는 편이 좋습니다.",
      "해몽은 앞을 정하는 말이 아니라, 지금을 한 번 더 들여다보는 말입니다.",
    ],
    watching: "광고를 보는 중입니다",
    remaining: "{seconds}초 후 결과가 열립니다",
  },
  dreamCard: {
    title: "꿈 카드로 간직하기",
    // **PDF가 아니라는 사실을 제목이 아니라 본문과 고시가 말한다.** 형제 앱의 유료 상품이
    // 전부 PDF라 그대로 읽으면 오해한다 — 약관에도 같은 말을 적어 두었다.
    body: "오늘 꾼 꿈과 거기서 찾은 상징을 이미지 한 장에 담아 드립니다. **PDF가 아니라 그림 파일**이라 그대로 저장하거나 보내실 수 있습니다.",
    buyButton: "{price} 결제하고 받기",
    preparing: "준비 중입니다",
    ordering: "주문을 만드는 중…",
    paying: "결제를 진행하는 중…",
    issuing: "카드를 만드는 중…",
    done: "받으셨습니다. 다시 받으려면 아래 버튼을 눌러 주세요.",
    failed: "결제 또는 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 받기",
    // 이미지 한 장이라 장 목차가 아니라 **카드에 담기는 것**을 적는다. 고시의 "1장"과 이
    // 목록의 길이는 서로 다른 것을 세므로 검사기도 그렇게 갈라 본다.
    contents: [
      "꾼 꿈에서 찾은 상징과 전해 오는 뜻",
      "그 상징들이 함께 가리키는 것",
      "꾼 날짜와 상징 사전 판 번호",
    ],
    consentLabel:
      "이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **다운로드가 완료되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    consentRequired: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    productInfoTitle: "상품 정보 고시",
    productInfo: [
      ["제작·공급자", "{brand}"],
      ["상품 형태", "이미지 파일 1장(PNG). 결제 후 화면에서 즉시 내려받습니다. PDF 문서가 아닙니다."],
      ["이용 조건", "그림을 볼 수 있는 기기면 됩니다. 별도 설치나 회원가입이 필요하지 않습니다."],
      ["이용 기간", "제한 없음. 내려받은 파일은 이용자가 보관합니다."],
      ["다시 받기", "같은 주문으로 5회까지. 서버가 파일을 보관하지 않으므로 결과 화면을 벗어나면 다시 만들 수 없습니다."],
      ["청약철회", "다운로드 완료 전에는 전액 환불. 완료 후에는 단순 변심에 의한 철회가 제한됩니다(전자상거래법 제17조 제2항)."],
      ["교환·반품 비용", "없음. 디지털 콘텐츠라 배송이 없습니다."],
    ],
    refundContact:
      "환불·문의는 아래 고객센터 또는 이메일로 접수해 주십시오. 파일이 만들어지지 않았거나 결제 금액이 주문과 다른 경우에는 전액 환불해 드립니다.",
    pdfLanguageNotice: "카드에 새겨지는 글자는 화면과 같은 언어로 나갑니다.",
  },
  conceptionReport: {
    title: "태몽 리포트 PDF로 간직하기",
    // **못 하는 일을 마지막 문장으로 따로 세운다.** 임신·성별을 판정한다고 읽히면 그 순간
    // 의학적 단정이 되고, 그것은 엔진이 하지 않는 일이다.
    //
    // **이 잎에는 강조를 쓰지 않는다.** 다른 문구와 달리 여기만 그렇게 두는 이유가 있다.
    //
    // 모델이 "태몽"이라는 낱말에 제 판단으로 강조를 하나 더 붙인다 — 21개 중 13개 언어에서
    // 같은 일이 났고, 프롬프트로 세어 못 박아도(「count them」) 그대로였다. 강조 개수가 어긋난
    // 잎은 검사기가 en으로 되돌리므로, 그 상태로 두면 **이 문장만 열세 언어에서 영어로 남는다.**
    //
    // en에 `**`가 아예 없으면 `normalize()`가 번역에 붙은 별표를 기계적으로 지운다. 모델의
    // 습관을 고치려 하는 대신 그 습관이 문제가 되지 않는 모양으로 바꾼 것이다. 문장을 마지막에
    // 홀로 세워 두었으니 굵게 하지 않아도 고지로 읽힌다.
    body: "전통적으로 태몽으로 보아 온 상징이 걸렸을 때, 무엇이 걸렸고 그 상징에 어떤 의미가 전해 오는지를 4장짜리 PDF로 정리해 드립니다. 임신 여부나 태아의 성별을 판정하지는 않습니다.",
    buyButton: "{price} 결제하고 받기",
    preparing: "준비 중입니다",
    ordering: "주문을 만드는 중…",
    paying: "결제를 진행하는 중…",
    issuing: "리포트를 만드는 중…",
    done: "받으셨습니다. 다시 받으려면 아래 버튼을 눌러 주세요.",
    failed: "결제 또는 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 받기",
    // 목록의 길이가 곧 장수다(`CONCEPTION_PAGE_COUNT`). 아래 고시의 숫자와 함께 움직인다.
    contents: [
      "1장 — 무엇을 꿨고 무엇이 걸렸는가",
      "2장 — 걸린 상징과 전해 오는 뜻",
      "3장 — 태몽으로 보아 온 까닭",
      "4장 — 간직하는 장(꾼 날짜와 고지)",
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
};

const en: Dictionary = {
  brand: "Dreams-Link",
  tagline: "Today's dream, read through traditional Korean dream symbols",
  currentLanguage: "Current language",
  moreLanguages: "More",
  closeLanguages: "Close",
  dream: {
    title: "Dream reading",
    subtitle: "Write down the dream you had and we will look it up in a dictionary of traditional Korean dream symbols.",
    textLabel: "What did you dream about?",
    textPlaceholder: "Write it as you remember it. For example: a carp leapt out of clear water",
    moodLabel: "How you felt on waking",
    moods: {
      good: "Good",
      scary: "Frightening",
      strange: "Strange",
      sad: "Sad",
      unsure: "Not sure",
    },
    recurringLabel: "I have this dream again and again",
    submit: "Read my dream",
    submitting: "Looking it up…",
    errorEmpty: "Please write a little more about the dream.",
    errorGeneric: "We could not load the reading. Please try again in a moment.",
    resultTitle: "Dream reading",
    symbolsHeading: "Symbols found in your dream",
    noSymbols: "No traditional symbol from our dictionary appeared in this dream. We leave this empty rather than invent a meaning.",
    themesHeading: "What they point to together",
    conceptionNotice: "Symbols traditionally read as conception omens appear here. This does not determine pregnancy.",
    browseSymbols: "Browse the traditional symbol dictionary",
    popularSymbols: "Commonly looked up",
    disclaimer: "This is reference material from a traditional dream-reading perspective, not medical, financial, or legal advice. We do not store the dream you wrote.",
    again: "Read another dream",
  },
  landing: {
    title: "Read your dream\nthe traditional way",
    subtitle:
      "We look up the symbols in your dream in a dictionary of traditional Korean dream lore.\nNo birth date, no sign-up.",
    howTitle: "How it works",
    steps: [
      "Write the dream down as you remember it. A sentence or two is enough.",
      "We search a dictionary of traditional Korean dream symbols for what appeared in it. If a symbol is not in there, we say so.",
      "You see what each symbol has long been taken to mean, and what they point to together.",
    ],
    privacyTitle: "The dream you write is not stored",
    privacyBody:
      "What you write is used only while the reading is being worked out, and is never recorded.\nNo account is needed, and nothing is left on the server once the reading is done.",
    disclaimer:
      "This is reference material from a traditional dream-reading perspective. It is not a prediction of what is to come, nor medical or financial advice.",
  },
  ads: { label: "Advertisement" },
  selfAds: {
    label: "Related services",
    comingSoon: "Coming soon",
    purposes: {
      naminglink: "Korean and hanja names chosen by meaning and stroke count",
      inyeonlink: "How two people fit, read from their four pillars and zodiac signs",
      sajulink: "Your own four pillars, and how today meets them",
      dreamslink: "Dream readings drawn from a dictionary of symbols",
      placelink: "Places to go on a date in Korea, shared and recommended",
    },
  },
  analyzing: {
    title: "Looking for the symbols in your dream",
    quotes: [
      "A dream tends to reflect the last few days more than the days to come.",
      "The same symbol has been read differently depending on who dreamt it.",
      "Traditional dream reading is not an answer key. It is a long-gathered body of stories.",
      "A frightening dream is not the same as a bad one. It may be the mark a startled mind left behind.",
      "It is fine if you remember only a fragment. One symbol is enough to start.",
      "A dream that keeps returning usually comes with something left unfinished.",
      "How clear the water was, and what colour it had, is what old readers watched most closely.",
      "How you felt on waking lingers as long as what you actually saw.",
      "Good dream or not, it is better not to let it decide your day.",
      "A reading is not a word about what will happen. It is a second look at what already is.",
    ],
    watching: "Watching the ad",
    remaining: "Your result opens in {seconds}s",
  },
  dreamCard: {
    title: "Keep this dream as a card",
    body: "We put the dream you wrote and the symbols we found into a single image. It is **an image file, not a PDF**, so you can save it or send it as it is.",
    buyButton: "Get it for {price}",
    preparing: "Getting ready",
    ordering: "Creating the order…",
    paying: "Taking payment…",
    issuing: "Making the card…",
    done: "Done. Use the button below to download it again.",
    failed: "The payment or the download failed. Please try again in a moment.",
    retry: "Download again",
    contents: [
      "The symbols found in your dream and what they have traditionally meant",
      "What those symbols point to together",
      "The date of the dream and the dictionary version",
    ],
    consentLabel:
      "This is digital content delivered immediately after payment. I understand that **once the download completes, the right to withdraw for a change of mind is limited**.",
    consentRequired: "You need to agree to the withdrawal terms before paying.",
    productInfoTitle: "Product information",
    productInfo: [
      ["Supplier", "{brand}"],
      ["Format", "1 image file (PNG), downloaded on this screen right after payment. It is not a PDF document."],
      ["Requirements", "Any device that can open an image. No installation and no account."],
      ["Availability", "No time limit. The downloaded file is yours to keep."],
      ["Re-download", "Up to 5 times on the same order. We do not keep the file, so it cannot be made again once you leave the result screen."],
      ["Withdrawal", "Full refund before the download completes. Afterwards, withdrawal for a change of mind is limited (Korean E-Commerce Act art. 17(2))."],
      ["Return costs", "None. Digital content is not shipped."],
    ],
    refundContact:
      "For refunds or questions, contact the support desk or the email address below. If the file was never produced, or the amount charged differs from the order, we refund it in full.",
    pdfLanguageNotice: "The text on the card comes out in the same language as this screen.",
  },
  conceptionReport: {
    title: "Keep the conception-omen reading as a PDF",
    body: "When symbols traditionally read as conception omens appear, a 4-page PDF sets out what appeared, what it has traditionally meant, and where that reading comes from. It does not determine pregnancy or the sex of a child.",
    buyButton: "Get it for {price}",
    preparing: "Getting ready",
    ordering: "Creating the order…",
    paying: "Taking payment…",
    issuing: "Making the report…",
    done: "Done. Use the button below to download it again.",
    failed: "The payment or the download failed. Please try again in a moment.",
    retry: "Download again",
    contents: [
      "Page 1 — the dream you wrote and what was found in it",
      "Page 2 — each symbol and what it has traditionally meant",
      "Page 3 — why these are read as conception omens",
      "Page 4 — a page to keep (the date and the disclaimers)",
    ],
    consentLabel:
      "This is digital content delivered immediately after payment. I understand that **once the download completes, the right to withdraw for a change of mind is limited**.",
    consentRequired: "You need to agree to the withdrawal terms before paying.",
    productInfoTitle: "Product information",
    productInfo: [
      ["Supplier", "{brand}"],
      ["Format", "1 PDF document (4 pages), downloaded on this screen right after payment."],
      ["Requirements", "Any device that can open a PDF. No installation and no account."],
      ["Availability", "No time limit. The downloaded file is yours to keep."],
      ["Re-download", "Up to 5 times on the same order. We do not keep the file, so it cannot be made again once you leave the result screen."],
      ["Withdrawal", "Full refund before the download completes. Afterwards, withdrawal for a change of mind is limited (Korean E-Commerce Act art. 17(2))."],
      ["Return costs", "None. Digital content is not shipped."],
    ],
    refundContact:
      "For refunds or questions, contact the support desk or the email address below. If the document was never produced, or the amount charged differs from the order, we refund it in full.",
    pdfLanguageNotice: "The PDF comes out in the same language as this screen.",
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
