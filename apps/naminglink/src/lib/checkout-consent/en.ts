import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// 영어판. 사전이 없는 로케일의 폴백이기도 하다(index.ts).

export const en: ConsentCopySet = {
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
    consent:
      "I understand this is digital content delivered immediately on payment, and that **withdrawal for a simple change of mind is restricted once delivery begins**.",
    required: "Please confirm the withdrawal terms before paying.",
    refund:
      "For refunds or questions, use the customer centre or email below. If a system error prevented delivery, or the amount charged differs from the order, we refund in full.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Product information",
    info: [
      ["Provider", "Naming-Link"],
      ["Format", "A physical seal (dojang), carved individually with the text you order."],
      ["How it is made", "We confirm the text and typeface after your order, then begin carving."],
      // 원문("국내는 택배, 해외는 국제배송")의 두 경로를 다 싣는다. 영어판만 국내 배송을
      // 빼고 축약해 두었는데, 다른 21개 언어는 원문대로 옮겼으므로 영어 구매자에게만
      // 다른 배송 조건을 고지한 셈이었다.
      ["Shipping", "Dispatched once carving is complete. Courier within Korea, international shipping elsewhere."],
      ["Withdrawal", "**Before carving begins**, full refund. After it begins, withdrawal is restricted — the item is made to your order and cannot be resold (Art. 17(2), Korean E-Commerce Act)."],
      ["Exchange / return", "If the item arrives damaged, mis-carved, or different from your order, we remake it or refund in full."],
      ["Return costs", "Free in the cases above. A change of mind can only be cancelled before carving begins."],
    ],
    consent:
      "I understand this seal is **made to order with the text I supplied, and that withdrawal for a simple change of mind is restricted once carving begins**.",
    required: "Please confirm the withdrawal terms before paying.",
    refund:
      "For refunds or questions, use the customer centre or email below. Damaged, mis-carved or incorrect items are remade or refunded in full.",
  },
};
