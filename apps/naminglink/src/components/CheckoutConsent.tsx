"use client";

// 결제 전 고지와 동의.
//
// **왜 필요한가.** 전자상거래법 제17조 제2항은 즉시 제공되는 디지털 콘텐츠와 주문에 따라 개별
// 생산되는 재화를 청약철회 제한 사유로 인정한다. 다만 단서가 붙는다 — 사업자가 *철회가 불가하다는
// 사실을 소비자가 쉽게 알 수 있는 곳에 표시하고 동의를 받는 조치*를 하지 않으면 **소비자는 그대로
// 청약철회를 할 수 있다.** 약관에 적어 두는 것만으로는 그 조치가 아니다. 그래서 결제 버튼 바로
// 앞에서 고지하고 동의를 받는다.
//
// 동의 사실은 서버가 주문에 남긴다(각 order 라우트의 `withdrawalConsentAt`). 화면의 체크박스는
// 되돌릴 수 있으므로 그것만으로는 나중에 다툼이 생겼을 때 조치를 취했음을 보일 수 없다.
//
// 상품정보 고시는 「전자상거래 등에서의 상품 등의 정보제공에 관한 고시」가 요구하는 항목이다.
// 디지털콘텐츠와 실물(도장)은 요구 항목이 다르므로 종류를 나눈다.

export type ConsentKind = "DIGITAL" | "MADE_TO_ORDER";

type Copy = {
  infoTitle: string;
  info: Array<[string, string]>;
  consent: string;
  required: string;
  refund: string;
};

const KO: Record<ConsentKind, Copy> = {
  DIGITAL: {
    infoTitle: "상품 정보 고시",
    info: [
      ["제작·공급자", "Naming-Link"],
      ["상품 형태", "디지털 콘텐츠(웹 화면 또는 PDF 문서). 결제 후 즉시 제공됩니다."],
      ["이용 조건", "인터넷 브라우저 또는 PDF 열람이 가능한 기기. 별도 설치가 필요하지 않습니다."],
      ["이용 기간", "제한 없음. 내려받은 파일은 이용자가 보관합니다."],
      ["청약철회", "제공이 시작되기 전에는 전액 환불. 시작된 뒤에는 단순 변심에 의한 철회가 제한됩니다(전자상거래법 제17조 제2항)."],
      ["교환·반품 비용", "없음. 디지털 콘텐츠라 배송이 없습니다."],
    ],
    consent: "이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **제공이 시작되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    required: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    refund: "환불·문의는 하단 고객센터 또는 이메일로 접수해 주십시오. 시스템 오류로 상품이 제공되지 않았거나 결제 금액이 주문과 다른 경우에는 전액 환불해 드립니다.",
  },
  MADE_TO_ORDER: {
    infoTitle: "상품 정보 고시",
    info: [
      ["제작·공급자", "Naming-Link"],
      ["상품 형태", "주문하신 문구를 새겨 개별 제작하는 실물 도장"],
      ["제작 방식", "주문 접수 후 문구·서체를 확인하고 제작에 들어갑니다."],
      ["배송", "제작 완료 후 발송합니다. 국내는 택배, 해외는 국제배송입니다."],
      ["청약철회", "**제작이 시작되기 전에는** 전액 환불. 시작된 뒤에는 청약철회가 제한됩니다 — 주문에 따라 개별 생산되어 재판매가 불가능한 재화입니다(전자상거래법 제17조 제2항)."],
      ["교환·반품", "파손·오각(잘못 새김)·주문과 다른 상품인 경우 무상으로 재제작하거나 전액 환불합니다."],
      ["반품 비용", "위 사유에 해당하면 무료. 단순 변심은 제작 시작 전에만 취소할 수 있습니다."],
    ],
    consent: "이 상품은 주문하신 문구를 새겨 만드는 **주문 제작 상품으로, 제작이 시작되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.",
    required: "청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.",
    refund: "환불·문의는 하단 고객센터 또는 이메일로 접수해 주십시오. 파손·오각이나 주문과 다른 상품인 경우에는 무상 재제작 또는 전액 환불로 처리합니다.",
  },
};

const EN: Record<ConsentKind, Copy> = {
  DIGITAL: {
    infoTitle: "Product information",
    info: [
      ["Provider", "Naming-Link"],
      ["Format", "Digital content (on-screen result or PDF), delivered immediately after payment."],
      ["Requirements", "A browser or any device that opens a PDF. No installation needed."],
      ["Term of use", "No limit. You keep the file you download."],
      ["Withdrawal", "Full refund before delivery begins. Once it has begun, withdrawal for a change of mind is restricted (Art. 17(2), Korean E-Commerce Act)."],
      ["Return costs", "None — digital content, nothing is shipped."],
    ],
    consent: "I understand this is digital content delivered immediately on payment, and that **withdrawal for a simple change of mind is restricted once delivery begins**.",
    required: "Please confirm the withdrawal terms before paying.",
    refund: "For refunds or questions, use the customer centre or email below. If a system error prevented delivery, or the amount charged differs from the order, we refund in full.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Product information",
    info: [
      ["Provider", "Naming-Link"],
      ["Format", "A physical seal (dojang), carved individually with the text you order."],
      ["How it is made", "We confirm the text and typeface after your order, then begin carving."],
      ["Shipping", "Dispatched once carving is complete. International shipping outside Korea."],
      ["Withdrawal", "**Before carving begins**, full refund. After it begins, withdrawal is restricted — the item is made to your order and cannot be resold (Art. 17(2), Korean E-Commerce Act)."],
      ["Exchange / return", "If the item arrives damaged, mis-carved, or different from your order, we remake it or refund in full."],
      ["Return costs", "Free in the cases above. A change of mind can only be cancelled before carving begins."],
    ],
    consent: "I understand this seal is **made to order with the text I supplied, and that withdrawal for a simple change of mind is restricted once carving begins**.",
    required: "Please confirm the withdrawal terms before paying.",
    refund: "For refunds or questions, use the customer centre or email below. Damaged, mis-carved or incorrect items are remade or refunded in full.",
  },
};

/** 사전 문구의 **굵게** 표기를 실제 강조로 바꾼다. */
function emphasize(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function CheckoutConsent({
  kind,
  locale,
  checked,
  onChange,
  className = "",
}: {
  kind: ConsentKind;
  /** 한국어 외에는 영문을 쓴다(결과 화면 사전과 같은 폴백 규칙). */
  locale?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  className?: string;
}) {
  const copy = (!locale || locale === "ko" ? KO : EN)[kind];

  return (
    <div className={className}>
      <details className="rounded-lg border border-line bg-background px-4 py-3">
        <summary className="cursor-pointer text-sm font-semibold">{copy.infoTitle}</summary>
        <dl className="mt-3 grid gap-1.5 text-xs leading-5 text-muted">
          {copy.info.map(([label, value]) => (
            <div key={label} className="flex flex-wrap gap-x-2">
              <dt className="min-w-24 font-semibold text-foreground">{label}</dt>
              <dd className="flex-1 break-keep-all">{emphasize(value)}</dd>
            </div>
          ))}
        </dl>
      </details>

      <label className="mt-3 flex items-start gap-2.5 text-sm leading-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-1.5 size-4 shrink-0 accent-brand-teal"
        />
        <span className="break-keep-all text-muted">{emphasize(copy.consent)}</span>
      </label>

      {!checked ? (
        <p className="mt-1.5 break-keep-all text-xs leading-5 text-muted">{copy.required}</p>
      ) : null}

      <p className="mt-2 break-keep-all text-xs leading-5 text-muted">{copy.refund}</p>
    </div>
  );
}
