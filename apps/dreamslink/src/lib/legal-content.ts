import { adsEnabled } from "@/lib/ads";
import { romanizeCompanyFacts } from "@naminglink/core/company";
import { CONCEPTION_PAGE_COUNT } from "@/lib/report-pages";
import { LEGAL_EFFECTIVE_DATE, type CompanyInfo } from "@/lib/company";
import { paymentsConfigured } from "@/lib/payments-csp";
import type { Locale } from "@/lib/i18n";
import { legalLocaleDocuments } from "@/lib/legal-locales";
import { legalFlagCombo } from "@/lib/legal-locales/types";

// 사업자 정보는 **인자로 받는다.** 여기서 직접 읽지 않는 것은 이 파일을 DB에 묶지 않으려는
// 것이다 — 문서 내용은 순수 함수로 두고, 값을 가져오는 일은 호출부(`company-server.ts`)가 한다.

// 이 서비스의 약관·방침은 naminglink 것을 재사용하지 않는다. 수집하는 정보도, 파는 것도,
// 책임 범위도 다르기 때문이다. 특히 이 서비스는 **입력을 저장하지 않는다**는 점이 방침의
// 뼈대라 문장 구조 자체가 다르다.
//
// ko·en은 이 파일에 원문 그대로 둔다(원문과 그 짝은 한자리에 있는 편이 낫다). 나머지 21개
// 로케일은 여기서 번역해 `lib/legal-locales/<코드>.ts`에 두었다 — 예전에는 en으로 폴백해
// 약관 본문만 21개 언어에서 영어로 나갔다.
//
// **문구를 고치면 ko를 먼저 고치고 번역을 다시 만들 것**:
//   scripts/extract-ko-legal.ts → scripts/translate-legal.mjs → scripts/verify-legal-locales.ts

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  /** 있으면 문단 뒤에 목록으로 붙는다. */
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  sections: LegalSection[];
  effectiveLabel: string;
};

export type LegalDocumentKey = "privacy" | "terms" | "refund" | "pricing";

// 광고 관련 조항은 광고가 실제로 켜져 있는지에 따라 달라진다. 문구를 하나로 고정하면 둘 중
// 한 상태에서는 방침이 사실과 어긋난다 — 아직 광고가 없는데 "게재합니다"라고 적거나, 이미
// 광고를 싣고 있는데 "향후 게재하는 경우"라고 적는 식이다. 그래서 `adsEnabled`를 따라간다.
// 환경변수로 광고를 켜면 방침도 함께 현재형으로 바뀐다.

const adsSectionKo: LegalSection = adsEnabled
  ? {
      heading: "4. 쿠키와 광고",
      paragraphs: [
        "서비스 자체는 이용자를 식별하거나 추적하기 위한 쿠키를 사용하지 않습니다. 적어 주신 꿈 이야기는 광고 사업자에게 전달되지 않습니다.",
        "이 서비스는 Google AdSense를 통해 광고를 게재합니다. 이 과정에서 다음과 같은 일이 일어납니다.",
      ],
      bullets: [
        "Google을 포함한 제3자 공급업체가 이용자의 브라우저에 쿠키를 저장하거나 읽을 수 있습니다.",
        "Google은 이 사이트를 비롯한 여러 사이트의 방문 기록을 바탕으로 광고를 게재하기 위해 쿠키를 사용합니다.",
        "이용자는 Google 광고 설정(google.com/settings/ads)에서 맞춤형 광고를 해제할 수 있습니다. 해제해도 광고 자체는 계속 표시되며, 이용자와의 관련성만 낮아집니다.",
        "제3자 공급업체 전반의 맞춤형 광고는 aboutads.info/choices 에서 한 번에 해제할 수 있습니다.",
        "브라우저 설정에서 쿠키를 차단하는 방법도 있습니다.",
        "유럽경제지역·영국·스위스 이용자에게는 광고 쿠키 사용에 대한 동의를 먼저 묻습니다.",
      ],
    }
  : {
      heading: "4. 쿠키와 광고",
      paragraphs: [
        "서비스 자체는 이용자를 추적하기 위한 쿠키를 사용하지 않습니다.",
        "현재 이 서비스에는 광고가 게재되지 않습니다. 향후 광고를 게재하는 경우, 광고 제공자(예: Google)가 광고 게재를 위해 쿠키를 사용할 수 있습니다. 그때는 이 조항을 먼저 고쳐 무엇이 달라지는지 밝힌 뒤 시작합니다.",
      ],
    };

const adsSectionEn: LegalSection = adsEnabled
  ? {
      heading: "4. Cookies and advertising",
      paragraphs: [
        "The service itself does not use cookies to identify or track visitors. The dream you write is never passed to an advertising provider.",
        "This service shows advertising through Google AdSense. That involves the following.",
      ],
      bullets: [
        "Third-party vendors, including Google, may store and read cookies in your browser.",
        "Google uses cookies to serve ads based on your prior visits to this and other websites.",
        "You can opt out of personalised advertising through Google Ads Settings (google.com/settings/ads). Ads still appear after opting out; they simply become less relevant to you.",
        "You can opt out of personalised advertising from third-party vendors generally at aboutads.info/choices.",
        "You can also block cookies in your browser settings.",
        "Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for consent before advertising cookies are used.",
      ],
    }
  : {
      heading: "4. Cookies and advertising",
      paragraphs: [
        "The service itself does not use cookies to track visitors.",
        "There is currently no advertising on this service. If advertising is introduced, a provider such as Google may use cookies to serve ads. We will revise this section to say what changes before that begins.",
      ],
    };

// 유료 상품 조항도 같은 이유로 판매 여부를 따라간다. 다만 **환불 규정 자체는 두 상태에서
// 모두 싣는다** — 결제 전에 조건을 고지해야 하는 것이 전자상거래법의 요구이고, 판매를 켠
// 순간부터 적용될 조건을 미리 읽을 수 있어야 한다. 바뀌는 것은 "지금 팔고 있는가"뿐이다.
//
// `paymentsConfigured`는 포트원 채널 키가 등록됐는지를 본다. 실제 판매 여부는 DB의
// product_settings.enabled가 정하지만 그건 비동기 조회라 여기서 읽을 수 없다. 키가 없으면
// 판매가 불가능한 것은 확실하므로, 이 값으로 "아직 판매 전"을 판단해도 틀리지 않는다.

const feeSectionKo: LegalSection = paymentsConfigured
  ? {
      heading: "2. 이용료",
      paragraphs: [
        "해몽 조회와 결과 열람은 무료이며 회원가입이 필요하지 않습니다.",
        "결과를 꿈 카드(이미지)나 태몽 리포트(PDF)로 받는 것은 유료입니다. 가격과 조건은 아래 3항과 결제 화면에 표시됩니다.",
      ],
    }
  : {
      heading: "2. 이용료",
      paragraphs: [
        "현재 서비스는 전부 무료로 제공되며 회원가입이 필요하지 않습니다.",
        "유료 상품(꿈 카드 이미지, 태몽 리포트 PDF) 판매를 시작하면 아래 3항의 조건이 적용됩니다. 판매 개시 전에 이 약관을 다시 고지합니다.",
      ],
    };

export type ReportPrices = { domestic: string; global: string };

/**
 * 파는 상품 전부의 가격.
 *
 * 예전에는 문서가 `ReportPrices` 하나만 받아 **궁합 가격만** 고지했다. 두 상품이 같은 값이던
 * 동안에는 우연히 맞았지만, 2026-07-31에 궁합만 올리면서 인연의 결 가격이 문서에서 틀린 값이
 * 됐다. 전자상거래법이 요구하는 고지라 상품마다 제 값이 나가야 한다.
 */
export type AllReportPrices = { card: ReportPrices; conception: ReportPrices };

const paidProductSectionKo = (prices: AllReportPrices): LegalSection => ({
  heading: "3. 유료 상품과 환불",
  paragraphs: [
    "판매하는 유료 상품은 **두 가지**입니다. 무료 해몽은 결제 없이 그대로 이용하실 수 있고, 아래 두 상품은 그 결과를 간직할 수 있는 형태로 만들어 드리는 것입니다.",
    `**꿈 카드** — 이미지 파일 한 장입니다. 그날 꾼 꿈에서 걸린 상징과 전통적 의미를 간직하고 나눌 수 있게 한 장으로 만듭니다. **문서(PDF)가 아닙니다.** 국내 결제 ${prices.card.domestic}(부가세 포함), 해외 결제 ${prices.card.global}.`,
    `**태몽 리포트 PDF** — ${CONCEPTION_PAGE_COUNT}장. 걸린 상징의 전통적 의미와 그 배경을 문서로 담습니다. **임신 여부를 판정하지 않습니다** — 전통적으로 태몽으로 보아 온 상징이 꿈에 나왔다는 사실까지만 알려 드립니다. 국내 결제 ${prices.conception.domestic}(부가세 포함), 해외 결제 ${prices.conception.global}.`,
    "국내 결제는 토스페이먼츠를 통해 신용·체크카드와 간편결제(토스페이·카카오페이·네이버페이·페이코 등)를 이용할 수 있고, 해외 결제는 포트원을 통한 페이팔입니다. 최종 금액은 결제 화면에 표시되는 금액을 따릅니다.",
    "**서비스는 이용자의 입력값도, 만들어진 PDF 파일도 보관하지 않습니다.** 결제가 승인되면 그 자리에서 문서를 만들어 내려보내고 서버에는 아무것도 남기지 않습니다. 따라서 내려받은 파일은 이용자가 직접 보관해 주셔야 합니다.",
    "다운로드가 중단되거나 파일을 잃어버린 경우를 위해, 같은 주문으로 **5회까지** 다시 내려받을 수 있습니다. 다만 결과 화면을 벗어나 입력값이 사라지면 다시 만들 수 없으므로, 결제 직후 파일을 저장해 주십시오.",
  ],
  bullets: [
    "**결제 후 다운로드가 시작되기 전에는** 언제든 취소하고 전액 환불받을 수 있습니다.",
    "**다운로드가 완료된 뒤에는** 단순 변심에 의한 청약철회가 제한됩니다. 결제 즉시 제공되어 원상회복이 불가능한 디지털 콘텐츠이며, 이는 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항이 정하는 청약철회 제한 사유에 해당합니다.",
    "**시스템 오류로 문서가 만들어지지 않았거나, 파일이 열리지 않거나, 결제 금액이 주문과 다른 경우**에는 재발급 또는 전액 환불로 처리합니다.",
    "**결과 내용에 대한 불만**은 환불 사유에 해당하지 않습니다. 해몽 결과는 전통 해석 관점의 참고 자료이며 그 성격을 결제 전에 안내하고 있습니다(위 1항).",
    "재발급 5회를 모두 사용한 뒤의 재요청은 환불 사유에 해당하지 않습니다.",
    "**미성년자가 법정대리인의 동의 없이 결제한 경우** 본인 또는 법정대리인이 그 결제를 취소할 수 있습니다. 아래 연락처로 알려 주시면 환불해 드립니다.",
  ],
});

const feeSectionEn: LegalSection = paymentsConfigured
  ? {
      heading: "2. Fees",
      paragraphs: [
        "Reading your dream on screen is free and requires no account.",
        "Keeping it as a dream card or a conception-dream report is a paid product. The price and conditions are set out in section 3 and shown on the payment screen.",
      ],
    }
  : {
      heading: "2. Fees",
      paragraphs: [
        "The service is currently free in full and requires no account.",
        "If we begin selling the paid products (the dream card and the conception-dream report), the conditions in section 3 will apply. We will publish these terms again before sales begin.",
      ],
    };

const paidProductSectionEn = (prices: AllReportPrices): LegalSection => ({
  heading: "3. Paid products and refunds",
  paragraphs: [
    "There are **two paid products**. The dream reading itself is free; these two turn that result into something you can keep.",
    `**Dream card** — a single image file holding the symbols found in your dream and their traditional meanings, made to keep and to share. **It is not a PDF document.** ${prices.card.domestic} (VAT included) for domestic payment, ${prices.card.global} for international payment.`,
    `**Conception-dream report PDF** — ${CONCEPTION_PAGE_COUNT} pages covering the traditional meanings of the symbols found and their background. **It does not determine pregnancy** — it only tells you that symbols traditionally read as conception omens appeared in your dream. ${prices.conception.domestic} (VAT included) for domestic payment, ${prices.conception.global} for international payment.`,
    "Domestic payments go through Toss Payments (credit and debit cards, and Korean pay services); international payments are by PayPal through PortOne. The amount shown on the payment screen is the final amount.",
    "**We store neither your input nor the generated PDF.** Once payment is approved, the document is generated in that same request, sent to you, and nothing is kept on the server. Please save the downloaded file yourself.",
    "In case a download is interrupted or the file is lost, the same order may be downloaded **up to five times**. Once you leave the result screen the input is gone and the document can no longer be produced, so please save the file right after payment.",
  ],
  bullets: [
    "**Before the download begins**, you may cancel at any time for a full refund.",
    "**After the download completes**, withdrawal for a simple change of mind is restricted. This is digital content delivered immediately upon payment that cannot be returned, which falls under the withdrawal restrictions in Article 17(2) of the Korean Act on Consumer Protection in Electronic Commerce.",
    "**If a system error prevents the document from being produced, the file cannot be opened, or the amount charged differs from the order**, we will reissue the document or refund it in full.",
    "**Dissatisfaction with the content of the reading** is not a ground for refund. A dream reading is reference material offered from a traditional interpretive perspective, and this is stated before purchase (section 1).",
    "Requests made after all five downloads have been used are not a ground for refund.",
    "**Where a minor has paid without the consent of a legal representative**, either the minor or that representative may cancel the payment. Contact us at the details below and we will refund it.",
  ],
});

// 방침 쪽도 판매 여부를 따라간다. 약관과 다른 점은, 여기서는 **저장 항목 목록을 두 상태에서
// 똑같이 싣는다**는 것이다. 결제하면 무엇이 남는지는 결제 전에 알아야 판단할 수 있고, 목록을
// 판매 개시 후에야 보여 주면 그 판단이 불가능해진다. 바뀌는 것은 현재형이냐 미래형이냐뿐이다.
//
// 저장 항목은 orders 테이블에 실제로 들어가는 값과 일치해야 한다(api/report/order, api/report/pdf).
// 컬럼을 늘리면 이 목록도 같이 고칠 것.

const paymentRecordItemsKo = [
  "주문번호와 결제 식별자",
  "결제 금액·통화와 결제 상태(미결제·결제완료·취소)",
  "상품 구분, 처리 상태, 문서를 내려받은 횟수, 주문 시각",
  "주문 시점의 화면 언어와 결제 지역 구분(국내·해외)",
  "보존 기간 — 「전자상거래 등에서의 소비자보호에 관한 법률」 제6조에 따라 대금 결제 및 재화 등의 공급에 관한 기록은 5년, 소비자의 불만 또는 분쟁 처리에 관한 기록은 3년간 보관한 뒤 파기합니다.",
];

const paymentSectionKo: LegalSection = {
  heading: "5. 결제 시 저장되는 정보",
  paragraphs: paymentsConfigured
    ? [
        "유료 상품(꿈 카드, 태몽 리포트)을 결제하면 결제 처리와 법령상 거래 기록 보존을 위해 주문 정보가 저장됩니다.",
        "**적어 주신 꿈과 만들어진 파일은 결제한 경우에도 저장되지 않습니다.** 위 1항의 원칙은 결제 여부와 무관하게 그대로입니다. 저장되는 항목은 다음과 같으며, 이름·연락처·주소 등 이용자를 식별하는 정보는 포함되지 않습니다.",
      ]
    : [
        "현재 유료 상품을 판매하지 않으므로 결제와 관련해 저장되는 정보도 없습니다.",
        "판매를 시작하면 결제 처리와 법령상 거래 기록 보존을 위해 아래 항목이 저장됩니다. **그때에도 적어 주신 꿈과 만들어진 파일은 저장하지 않으며**, 이름·연락처·주소 등 이용자를 식별하는 정보도 받지 않습니다.",
      ],
  bullets: paymentRecordItemsKo,
};

const thirdPartySectionKo = (company: CompanyInfo): LegalSection => ({
  heading: "6. 제3자 제공 및 처리위탁",
  paragraphs: [
    paymentsConfigured
      ? "이용자를 식별하는 개인정보를 저장하지 않으므로 제3자에게 제공하는 개인정보도 없습니다. 결제 처리는 아래 사업자에게 위탁합니다."
      : "저장하는 개인정보가 없으므로 제3자에게 제공하는 개인정보도 없습니다.",
    `서비스 운영을 위해 ${company.hostingProvider}의 호스팅 인프라를 이용하며, 이 과정에서 위 3항의 접속 기록이 해당 사업자의 정책에 따라 처리됩니다.`,
    paymentsConfigured
      ? "국내 결제는 토스페이먼츠가, 해외 결제는 포트원을 통한 페이팔이 처리합니다. 카드번호·계좌번호 등 결제 수단 정보는 이들 사업자가 직접 처리하며, 서비스는 전달받지도 저장하지도 않습니다."
      : "유료 상품의 판매를 시작하면 국내 결제는 토스페이먼츠에, 해외 결제는 포트원(페이팔)에 위탁합니다. 카드번호·계좌번호 등 결제 수단 정보는 그때에도 이들 사업자가 직접 처리하며, 서비스는 전달받지 않습니다.",
  ],
});

const paymentRecordItemsEn = [
  "The order number and payment identifier",
  "The amount, currency and payment state (unpaid, paid, cancelled)",
  "The product, its fulfilment state, how many times the document was downloaded, and the time of the order",
  "The interface language and payment region (domestic or international) at the time of the order",
  "Retention — under Article 6 of the Korean Act on Consumer Protection in Electronic Commerce, records of payment and supply are kept for five years and records of consumer complaints or disputes for three years, then destroyed.",
];

const paymentSectionEn: LegalSection = {
  heading: "5. What a payment stores",
  paragraphs: paymentsConfigured
    ? [
        "Paying for a dream card or a conception-dream report stores order information, both to process the payment and to keep the transaction records required by law.",
        "**Neither the dream you wrote nor the generated file is stored, even when you pay.** Section 1 holds regardless of payment. What is stored is listed below, and it contains nothing that identifies you — no name, contact details or address.",
      ]
    : [
        "Nothing is stored in connection with payment, because no paid product is currently sold.",
        "Once sales begin, the items below will be stored to process payment and to keep the transaction records required by law. **Even then, neither the dream you wrote nor the generated file is stored**, and nothing that identifies you — name, contact details, address — is collected.",
      ],
  bullets: paymentRecordItemsEn,
};

const thirdPartySectionEn = (company: CompanyInfo): LegalSection => ({
  heading: "6. Sharing and processing by others",
  paragraphs: [
    paymentsConfigured
      ? "No personal data that identifies you is stored, so none is shared with third parties. Payment processing is entrusted to the providers below."
      : "Since no personal data is stored, none is shared with third parties.",
    `The service runs on hosting infrastructure provided by ${company.hostingProvider}, and the access records described in section 3 are handled under that provider's policy.`,
    paymentsConfigured
      ? "Domestic payments are processed by Toss Payments and international payments by PayPal through PortOne. Card and account details are handled directly by those providers; the service never receives or stores them."
      : "When sales begin, domestic payment processing will be entrusted to Toss Payments and international payment to PortOne (PayPal). Card and account details will be handled directly by those providers and never reach the service.",
  ],
});

const koDocuments = (
  company: CompanyInfo,
  prices: AllReportPrices,
): Record<LegalDocumentKey, LegalDocument> => ({
  privacy: {
    title: "개인정보처리방침",
    intro:
      "드림링크는 해몽에 필요한 정보를 저장하지 않습니다. 이 방침은 서비스가 무엇을 받고, 무엇을 남기지 않으며, 무엇이 자동으로 기록되는지를 설명합니다.",
    sections: [
      {
        heading: "1. 저장하지 않는 정보",
        paragraphs: [
          "해몽을 위해 적어 주시는 꿈 이야기, 깨어났을 때의 기분, 같은 꿈을 되풀이해 꾸는지 여부는 **어디에도 저장되지 않습니다.** 요청을 처리하는 동안 서버 메모리에서만 사용되고 응답과 함께 사라집니다.",
          "데이터베이스에 기록하지 않으며, 별도 파일로도 남기지 않습니다. 회원가입이 없으므로 입력값이 특정인과 연결되지도 않습니다.",
          "꿈 이야기는 이 서비스가 받는 값 중 가장 사적인 것입니다. 그래서 지난 결과를 다시 꺼내 보는 기능(꿈일기)을 두지 않았습니다 — 그 기능은 적어 주신 글을 계속 보관해야만 성립하기 때문입니다.",
        ],
      },
      {
        heading: "2. 결과 링크에 담기는 정보",
        paragraphs: [
          "결과 화면의 주소에는 입력값이 부호화되어 포함됩니다. 다만 이 값은 주소의 # 뒤에 위치하며, 웹 표준상 # 뒤의 내용은 브라우저가 서버로 전송하지 않습니다. 따라서 결과 링크를 열어도 서버 접속 기록에는 주소의 경로만 남습니다.",
          "결과 링크를 다른 사람에게 보내면 그 사람도 같은 결과를 볼 수 있습니다. 링크 자체가 입력값을 담고 있으므로, 공유 여부는 이용자가 판단해 주십시오.",
        ],
      },
      {
        heading: "3. 자동으로 수집되는 정보",
        paragraphs: [
          "서비스가 이용자를 식별하기 위해 수집하는 정보는 없습니다. 다만 웹 서비스 운영에 필요한 최소한의 기록이 인프라 제공자에 의해 자동으로 남습니다.",
        ],
        bullets: [
          "접속 IP 주소, 접속 일시, 브라우저 종류 등 일반적인 서버 접속 기록",
          "국가 정보 — 화면 언어를 자동으로 정하는 데만 사용하며 저장하지 않습니다",
        ],
      },
      adsSectionKo,
      paymentSectionKo,
      thirdPartySectionKo(company),
      {
        heading: "7. 이용자의 권리",
        paragraphs: [
          paymentsConfigured
            ? "적어 주신 꿈은 저장하지 않으므로 열람·정정·삭제를 요청할 대상이 없습니다. 결제로 남은 주문 기록은 법령이 정한 기간 동안 보존할 의무가 있어 그 기간에는 삭제해 드릴 수 없으며, 기간이 지나면 파기합니다."
            : "저장된 개인정보가 없으므로 열람·정정·삭제를 요청할 대상도 없습니다.",
          "이용자는 브라우저 주소창의 결과 링크를 지우는 것만으로 입력 흔적을 모두 없앨 수 있습니다.",
          "서비스 이용과 관련해 문의할 사항이 있으면 아래 연락처로 알려 주십시오.",
        ],
      },
      {
        heading: "8. 아동의 개인정보",
        paragraphs: [
          "이 서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 아동으로부터 개인정보를 수집하지 않습니다.",
        ],
      },
      {
        heading: "9. 개인정보 보호책임자",
        paragraphs: [
          `보호책임자: ${company.privacyOfficer}`,
          `문의: ${company.email} / ${company.customerCenter}`,
        ],
      },
      {
        heading: "10. 방침의 변경",
        paragraphs: [
          "이 방침을 변경하는 경우 시행일과 변경 내용을 이 페이지에 게시합니다. 광고 게재나 유료 상품 판매를 시작하는 등 처리 내용이 실제로 달라지는 경우에는 변경 사실을 먼저 알립니다.",
        ],
      },
    ],
    effectiveLabel: "시행일",
  },
  terms: {
    title: "이용약관",
    intro:
      "이 약관은 드림링크(이하 “서비스”)의 이용 조건을 정합니다. 서비스를 이용하면 이 약관에 동의한 것으로 봅니다.",
    sections: [
      {
        heading: "1. 서비스의 성격",
        paragraphs: [
          "서비스는 이용자가 적어 준 꿈에서 전통 해몽 상징을 찾아, 그 상징에 전해 오는 의미를 참고 자료로 보여 줍니다. 사전에 없는 상징은 찾지 못했다고 말하며, 없는 의미를 지어내지 않습니다.",
          "제시되는 상징과 해설은 **전통 해석 관점의 참고 자료이며, 앞일에 대한 예측이나 의학·재무·법률 자문이 아닙니다.** 좋은 꿈이라고 해서 어떤 일이 보장되는 것이 아니고, 나쁜 꿈이라고 해서 어떤 일이 예정된 것도 아닙니다.",
          "**태몽 관련 결과는 임신 여부나 태아의 성별을 판정하지 않습니다.** 전통적으로 태몽으로 보아 온 상징이 나왔다는 사실과 그 배경까지만 알려 드립니다.",
        ],
      },
      feeSectionKo,
      paidProductSectionKo(prices),
      {
        heading: "4. 해몽 결과에 대하여",
        paragraphs: [
          "상징을 찾는 규칙은 공개된 사전과 정해진 절차를 따르므로, 같은 글을 적으면 언제나 같은 상징이 나옵니다.",
          "짧게 적으실수록 걸리는 상징이 줄어듭니다. 사전에 없는 상징은 찾지 못하며, 그때는 결과를 비워 둡니다.",
          "상징 사전은 전해 오는 해몽 문헌과 구전을 정리한 것이며, 지역과 시대에 따라 다르게 전해지는 해석이 있습니다.",
        ],
      },
      {
        heading: "5. 이용자의 책임",
        paragraphs: [
          "이용자는 타인의 꿈을 적을 수 있으나, 그로 인한 결과를 타인에게 불이익하게 사용해서는 안 됩니다.",
          "서비스 결과를 임신·건강·투자·채용 등 사람의 권리나 이해에 영향을 주는 판단의 근거로 사용하지 마십시오. 서비스는 그러한 용도로 만들어지지 않았습니다.",
        ],
      },
      {
        heading: "6. 금지 행위",
        paragraphs: ["다음 행위는 허용되지 않습니다."],
        bullets: [
          "자동화 도구로 과도한 요청을 보내 서비스 운영을 방해하는 행위",
          "서비스의 결과를 사실이나 전문가의 감정 결과인 것처럼 제시하는 행위",
          "서비스를 복제·개작하여 동일한 서비스를 제공하는 행위",
        ],
      },
      {
        heading: "7. 면책",
        paragraphs: [
          "서비스는 참고 자료를 제공할 뿐이며, 이용자가 결과를 근거로 내린 판단과 그 결과에 대해 책임지지 않습니다.",
          "천재지변, 인프라 제공자의 장애 등 통제할 수 없는 사유로 서비스가 중단되는 경우 그로 인한 손해에 책임지지 않습니다.",
        ],
      },
      {
        heading: "8. 지식재산권",
        paragraphs: [
          "서비스의 화면, 문구, 계산 규칙의 구현물에 대한 권리는 운영자에게 있습니다. 이용자는 개인적인 감상 목적으로 결과를 저장하거나 공유할 수 있습니다.",
        ],
      },
      {
        heading: "9. 약관의 변경과 준거법",
        paragraphs: [
          "약관을 변경하는 경우 시행일과 함께 이 페이지에 게시합니다.",
          "이 약관은 대한민국 법을 준거법으로 하며, 서비스 이용과 관련한 분쟁은 관계 법령이 정하는 절차에 따릅니다.",
        ],
      },
    ],
    effectiveLabel: "시행일",
  },

  refund: {
    title: "환불 및 취소 정책",
    intro:
      "유료 상품의 취소·환불 기준입니다. 약관 3항과 같은 내용을 따로 모아 두었습니다.",
    sections: [
      {
        heading: "1. 상품의 성격",
        paragraphs: [
          "판매하는 상품은 **꿈 카드(이미지 1장)**와 **태몽 리포트 PDF** 두 가지이며, 둘 다 결제가 승인되면 그 자리에서 파일을 만들어 즉시 내려보내는 디지털 콘텐츠입니다.",
          "**서비스는 적어 주신 꿈도, 만들어진 파일도 보관하지 않습니다.** 그래서 내려받은 파일은 이용자가 직접 보관해 주셔야 합니다.",
        ],
      },
      {
        heading: "2. 청약철회",
        paragraphs: ["전자상거래법이 정하는 기준을 따릅니다."],
        bullets: [
          "**다운로드가 시작되기 전에는** 언제든 취소하고 전액 환불받을 수 있습니다.",
          "**다운로드가 완료된 뒤에는** 단순 변심에 의한 청약철회가 제한됩니다. 결제 즉시 제공되어 원상회복이 불가능한 디지털 콘텐츠이며, 이는 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항이 정하는 제한 사유에 해당합니다. 결제 화면에서 이 사실을 미리 알리고 동의를 받습니다.",
        ],
      },
      {
        heading: "3. 전액 환불하는 경우",
        paragraphs: ["다음의 경우에는 사유를 확인한 뒤 재발급 또는 전액 환불로 처리합니다."],
        bullets: [
          "시스템 오류로 파일이 만들어지지 않은 경우",
          "내려받은 파일이 열리지 않는 경우",
          "결제 금액이 주문과 다른 경우",
          "**미성년자가 법정대리인의 동의 없이 결제한 경우** — 본인 또는 법정대리인이 취소를 요청하실 수 있습니다.",
        ],
      },
      {
        heading: "4. 환불 사유가 아닌 경우",
        paragraphs: [],
        bullets: [
          "**결과 내용에 대한 불만.** 해몽 결과는 전통 해석 관점의 참고 자료이며 그 성격을 결제 전에 안내하고 있습니다. 꿈에서 사전에 있는 상징을 찾지 못해 결과가 짧게 나오는 경우도 여기에 해당합니다 — 없는 의미를 지어내지 않기 때문입니다.",
          "재발급 5회를 모두 사용한 뒤의 재요청.",
        ],
      },
      {
        heading: "5. 접수 방법",
        paragraphs: [
          `환불·문의는 고객센터(${company.customerCenter}) 또는 이메일(${company.email})로 접수해 주십시오. 주문번호를 함께 알려 주시면 확인이 빠릅니다.`,
          "환불은 결제하신 수단으로 돌려드리며, 카드사·결제사 사정에 따라 반영까지 영업일 기준 3~7일이 걸릴 수 있습니다.",
        ],
      },
    ],
    effectiveLabel: "시행일",
  },
  pricing: {
    title: "요금안내",
    intro: "무료로 제공하는 범위와 유료 상품의 가격을 안내합니다.",
    sections: [
      {
        heading: "1. 무료",
        paragraphs: [
          "**해몽 조회와 결과 열람은 무료입니다.** 회원가입도 필요하지 않습니다.",
          "꿈에서 찾은 상징과 그 상징에 전해 오는 의미, 상징들이 함께 가리키는 것까지 화면에서 모두 보실 수 있습니다. 꿈은 매일 꾸는 것이라 이 서비스는 조회를 제한하지 않습니다.",
        ],
      },
      {
        heading: "2. 꿈 카드 (유료)",
        paragraphs: [
          `국내 결제 ${prices.card.domestic}(부가세 포함) · 해외 결제 ${prices.card.global}`,
          "화면의 결과를 **이미지 한 장**에 담아 드립니다. 간직하거나 보내기 좋은 형태이며, **PDF 문서가 아닙니다.**",
          "같은 주문으로 **5회까지** 다시 내려받을 수 있습니다. 다만 결과 화면을 벗어나 입력값이 사라지면 다시 만들 수 없으므로, 결제 직후 파일을 저장해 주십시오.",
        ],
      },
      {
        heading: "3. 태몽 리포트 PDF (유료)",
        paragraphs: [
          `국내 결제 ${prices.conception.domestic}(부가세 포함) · 해외 결제 ${prices.conception.global}`,
          `전통적으로 태몽으로 보아 온 상징이 걸렸을 때, 그 상징의 의미와 전해 오는 배경을 ${CONCEPTION_PAGE_COUNT}장짜리 PDF로 정리해 드립니다. **임신 여부나 태아의 성별을 판정하지 않습니다.**`,
          "재발급 조건은 꿈 카드와 같습니다.",
        ],
      },
      {
        heading: "4. 결제 수단",
        paragraphs: [
          "**국내** — 토스페이먼츠를 통해 신용·체크카드와 간편결제(토스페이·카카오페이·네이버페이·페이코 등)를 이용하실 수 있습니다.",
          "**해외** — 포트원을 통한 페이팔로 결제하실 수 있습니다.",
          "최종 결제 금액은 결제 화면에 표시되는 금액을 따릅니다.",
        ],
      },
      {
        heading: "5. 가격 변경",
        paragraphs: [
          "가격을 변경하는 경우 이 페이지에 먼저 게시합니다. 이미 결제가 끝난 주문에는 변경된 가격이 적용되지 않습니다.",
        ],
      },
    ],
    effectiveLabel: "시행일",
  },
});

const enDocuments = (
  company: CompanyInfo,
  prices: AllReportPrices,
): Record<LegalDocumentKey, LegalDocument> => ({
  privacy: {
    title: "Privacy Policy",
    intro:
      "Dreams-Link does not store what you enter for a dream reading. This policy explains what the service receives, what it never keeps, and what is logged automatically.",
    sections: [
      {
        heading: "1. What is never stored",
        paragraphs: [
          "The dream you write, how you felt on waking, and whether the dream repeats are **never stored anywhere.** They exist only in server memory while the request is being handled, and disappear with the response.",
          "Nothing is written to a database or to a file. There are no accounts, so an entry is never tied to a person.",
          "A dream is the most personal thing this service receives. That is why there is no dream journal: such a feature only works by keeping what you wrote on file indefinitely.",
        ],
      },
      {
        heading: "2. What a result link contains",
        paragraphs: [
          "The address of a result page carries your input in encoded form. That value sits after the # in the address, and by web standard browsers never transmit anything after the # to the server. Opening a result link therefore leaves only the path in the server access log.",
          "Anyone you send a result link to can see the same result, because the link itself carries the input. Please decide for yourself whether to share it.",
        ],
      },
      {
        heading: "3. What is collected automatically",
        paragraphs: [
          "The service collects nothing to identify you. Running a website does, however, produce a minimum of records at the infrastructure level.",
        ],
        bullets: [
          "Ordinary server access records such as IP address, timestamp and browser type",
          "Country, used only to choose the interface language, and not stored",
        ],
      },
      adsSectionEn,
      paymentSectionEn,
      thirdPartySectionEn(company),
      {
        heading: "7. Your rights",
        paragraphs: [
          paymentsConfigured
            ? "What you enter for a reading is never stored, so there is no such record to access, correct or delete. Order records left by a payment must be retained for the period set by law and cannot be deleted during it; they are destroyed once it ends."
            : "Because nothing is stored, there is no record to access, correct or delete.",
          "Clearing the result link from your browser removes every trace of your input.",
          "If you have any question about the service, please contact us using the details below.",
        ],
      },
      {
        heading: "8. Children",
        paragraphs: [
          "This service is not directed at children under 14 and does not collect personal information from them.",
        ],
      },
      {
        heading: "9. Privacy contact",
        paragraphs: [
          `Responsible person: ${company.privacyOfficer}`,
          `Contact: ${company.email} / ${company.customerCenter}`,
        ],
      },
      {
        heading: "10. Changes to this policy",
        paragraphs: [
          "Any change is posted on this page together with its effective date. If what we actually do changes — for example when advertising begins or the paid product goes on sale — we will say so before the change takes effect.",
        ],
      },
    ],
    effectiveLabel: "Effective",
  },
  terms: {
    title: "Terms of Service",
    intro:
      "These terms govern use of Dreams-Link (the “service”). Using the service means you accept them.",
    sections: [
      {
        heading: "1. What the service is",
        paragraphs: [
          "The service looks for traditional Korean dream symbols in the dream you write, and presents what those symbols have long been taken to mean as reference material. If a symbol is not in the dictionary, the service says so rather than inventing a meaning.",
          "The symbols and commentary are **a traditional reading offered for reference — not a prediction of what is to come, and not medical, financial or legal advice.** An auspicious dream guarantees nothing, and an inauspicious one settles nothing.",
          "**Conception-omen results do not determine pregnancy or the sex of a child.** They go only as far as saying that symbols traditionally read as conception omens appeared, and what tradition says about them.",
        ],
      },
      feeSectionEn,
      paidProductSectionEn(prices),
      {
        heading: "4. About the results",
        paragraphs: [
          "The matching follows a published dictionary and fixed rules, so the same text always produces the same symbols.",
          "The less you write, the fewer symbols are found. Symbols outside the dictionary are not found at all, and in that case the result is left empty.",
          "The symbol dictionary gathers what has been handed down in dream-reading literature and oral tradition. Some readings differ by region and by era.",
        ],
      },
      {
        heading: "5. Your responsibilities",
        paragraphs: [
          "You may write down someone else's dream, but you must not use the outcome to that person's disadvantage.",
          "Do not use results as grounds for decisions about pregnancy, health, investment or hiring — anything affecting a person's rights or interests. The service was not built for that.",
        ],
      },
      {
        heading: "6. Prohibited use",
        paragraphs: ["The following are not permitted."],
        bullets: [
          "Sending excessive automated requests that interfere with the service",
          "Presenting results as fact or as a professional assessment",
          "Copying or adapting the service to offer an equivalent service",
        ],
      },
      {
        heading: "7. Disclaimer",
        paragraphs: [
          "The service provides reference material only and is not responsible for decisions you make on the basis of a result, or for their consequences.",
          "We are not liable for losses caused by interruptions outside our control, such as natural disasters or failures at our infrastructure provider.",
        ],
      },
      {
        heading: "8. Intellectual property",
        paragraphs: [
          "Rights in the service's screens, wording and the implementation of its calculation rules belong to the operator. You may save or share your own results for personal use.",
        ],
      },
      {
        heading: "9. Changes and governing law",
        paragraphs: [
          "Any change to these terms is posted on this page with its effective date.",
          "These terms are governed by the laws of the Republic of Korea, and disputes are handled under the procedures set by applicable law.",
        ],
      },
    ],
    effectiveLabel: "Effective",
  },

  refund: {
    title: "Cancellation and Refunds",
    intro:
      "How cancellation and refunds work for the paid products. The same terms appear in section 3 of the Terms of Service.",
    sections: [
      {
        heading: "1. What you are buying",
        paragraphs: [
          "There are two paid products: the **dream card** (a single image) and the **conception-dream report PDF**. For both, once payment is approved the file is generated in that same request and sent to you immediately.",
          "**We store neither the dream you wrote nor the generated file.** Please save the downloaded file yourself.",
        ],
      },
      {
        heading: "2. Withdrawal",
        paragraphs: ["We follow the Korean E-Commerce Act."],
        bullets: [
          "**Before the download begins**, you may cancel at any time for a full refund.",
          "**After the download completes**, withdrawal for a simple change of mind is restricted — digital content delivered immediately on payment that cannot be returned (Art. 17(2) of the Act). We state this and take your consent on the payment screen.",
        ],
      },
      {
        heading: "3. Full refunds",
        paragraphs: ["We reissue the file or refund in full in these cases."],
        bullets: [
          "A system error prevented the file from being produced",
          "The downloaded file cannot be opened",
          "The amount charged differs from the order",
          "**A minor paid without the consent of a legal representative** — either may request cancellation.",
        ],
      },
      {
        heading: "4. Not grounds for a refund",
        paragraphs: [],
        bullets: [
          "**Dissatisfaction with the content.** A dream reading is reference material from a traditional interpretive perspective, and this is stated before purchase. A short result — because no symbol from the dictionary was found in your dream — falls under this too: we do not invent meanings that are not there.",
          "Requests after all five downloads have been used.",
        ],
      },
      {
        heading: "5. How to request",
        paragraphs: [
          `Contact the customer centre (${company.customerCenter}) or email (${company.email}). Including your order number speeds things up.`,
          "Refunds return to the payment method used. Depending on the card issuer or payment provider, it can take 3-7 business days to appear.",
        ],
      },
    ],
    effectiveLabel: "Effective",
  },
  pricing: {
    title: "Pricing",
    intro: "What is free, and what the paid products cost.",
    sections: [
      {
        heading: "1. Free",
        paragraphs: [
          "**Reading a dream and viewing the result is free**, and requires no account.",
          "The symbols found in your dream, what each has traditionally meant, and what they point to together are all shown on screen. Dreams come nightly, so the service does not ration how often you may look one up.",
        ],
      },
      {
        heading: "2. Dream card (paid)",
        paragraphs: [
          `${prices.card.domestic} (VAT included) for domestic payment - ${prices.card.global} for international payment`,
          "Puts the on-screen result into **a single image**, made to keep or to share. **It is not a PDF document.**",
          "The same order may be downloaded **up to five times**. Once you leave the result screen the input is gone and the file can no longer be produced, so please save it right after payment.",
        ],
      },
      {
        heading: "3. Conception-dream report PDF (paid)",
        paragraphs: [
          `${prices.conception.domestic} (VAT included) for domestic payment - ${prices.conception.global} for international payment`,
          `When symbols traditionally read as conception omens appear, this sets out their meanings and background across ${CONCEPTION_PAGE_COUNT} pages. **It does not determine pregnancy or the sex of a child.**`,
          "Re-download terms are the same as for the dream card.",
        ],
      },
      {
        heading: "4. Payment methods",
        paragraphs: [
          "**In Korea** - Toss Payments: credit and debit cards, and Korean pay services (Toss Pay, KakaoPay, Naver Pay, Payco and others).",
          "**Outside Korea** - PayPal through PortOne.",
          "The amount shown on the payment screen is the final amount.",
        ],
      },
      {
        heading: "5. Price changes",
        paragraphs: [
          "Any price change is posted on this page first. Orders already paid for are not affected.",
        ],
      },
    ],
    effectiveLabel: "Effective",
  },
});

/**
 * 번역 파일에 플레이스홀더로 남겨 둔 사업자 정보·가격을 실제 값으로 채운다.
 *
 * 번역 파일이 DB에 묶이지 않게 하려고 나눠 둔 것이다 — 사업자 정보나 가격이 바뀌어도 21개
 * 파일을 다시 만들 필요가 없다. 값이 비면 그 자리를 비워 두지 않고 원문 표시를 남긴다
 * (빈칸보다 "무엇이 들어갈 자리인지"가 보이는 편이 낫다).
 */
function fillPlaceholders(
  document: LegalDocument,
  company: CompanyInfo,
  prices: AllReportPrices,
): LegalDocument {
  const values: Record<string, string> = {
    "{customerCenter}": company.customerCenter,
    "{email}": company.email,
    "{hostingProvider}": company.hostingProvider,
    "{privacyOfficer}": company.privacyOfficer,
    // 이름이 파는 상품을 그대로 말한다(`scripts/extract-ko-legal.ts`의 같은 표 참고).
    // 예전에는 인연링크 시절 이름(`priceAffinity*`)이 태몽 리포트 가격을 뜻해, 자리를 한 칸
    // 밀어 넣어도 아무 검사기가 잡지 못했다.
    "{priceCardDomestic}": prices.card.domestic,
    "{priceCardGlobal}": prices.card.global,
    "{priceConceptionDomestic}": prices.conception.domestic,
    "{priceConceptionGlobal}": prices.conception.global,
  };
  const fill = (text: string) =>
    text.replace(
      /\{(customerCenter|email|hostingProvider|privacyOfficer|priceCardDomestic|priceCardGlobal|priceConceptionDomestic|priceConceptionGlobal)\}/g,
      (token) => values[token] ?? token,
    );

  return {
    title: fill(document.title),
    intro: fill(document.intro),
    effectiveLabel: fill(document.effectiveLabel),
    sections: document.sections.map((section) => ({
      heading: fill(section.heading),
      paragraphs: section.paragraphs.map(fill),
      ...(section.bullets ? { bullets: section.bullets.map(fill) } : {}),
    })),
  };
}

export function getLegalDocument(
  locale: Locale,
  key: LegalDocumentKey,
  company: CompanyInfo,
  prices: AllReportPrices,
) {
  if (locale === "ko") return koDocuments(company, prices)[key];

  // 비한국어 로케일에는 인명·상호·주소를 **로마자 한 벌**로 낸다(표는 core에 있다).
  // 언어마다 새로 음역하면 같은 사람이 언어마다 다른 이름이 된다 — naminglink 약관 17개
  // 로케일이 실제로 그랬다(ja `郭恩河` / zh `郭恩哈`, 2026-08-07에 걷어냈다). 푸터가
  // 같은 표를 보므로, 한 페이지에서 푸터와 약관의 이름이 어긋나지 않는다.
  const latin = romanizeCompanyFacts(company);
  if (locale === "en") return enDocuments(latin, prices)[key];

  // 나머지 21개 로케일은 ko에서 번역해 둔 것을 쓴다. 예전에는 여기서 en으로 떨어뜨려
  // **약관 본문만 21개 언어에서 영어로 나갔다** — PDF를 파는 이상 읽지 못하는 언어의 고지는
  // 법이 요구하는 조치로 보기 어렵다.
  const combo = legalFlagCombo(adsEnabled, paymentsConfigured);
  return fillPlaceholders(
    legalLocaleDocuments[locale][combo][key],
    latin,
    prices,
  );
}

export { LEGAL_EFFECTIVE_DATE };
