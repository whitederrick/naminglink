import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// 영어판. 사전이 없는 로케일의 폴백이기도 하다(index.ts).

export const en: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Product information",
    info: [
      ["Provider", "Naming-Link"],
      ["Format", "Digital content (web page or PDF document). Available immediately after payment."],
      ["Requirements", "Any device with a web browser or PDF reader. No additional software installation is required."],
      ["Term of use", "No restrictions. Users may retain downloaded files."],
      ["Withdrawal", "A full refund is available before provision of the content begins. Once provision has begun, the right to cancel due to a change of mind is restricted (Article 17(2), Korean E-Commerce Act)."],
      ["Return costs", "Not applicable. This is digital content, so no physical delivery is required."],
    ],
    consent:
      "I acknowledge that this product is digital content made available immediately after payment, and that **once provision begins, my right to cancel due to a change of mind will be restricted**.",
    required: "You must agree to the cancellation restrictions before proceeding with payment.",
    refund:
      "For refunds or inquiries, please contact the customer centre or email address below. If the product was not provided due to a system error, or the amount charged differs from the order, a full refund will be issued.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Product information",
    info: [
      ["Provider", "Naming-Link"],
      ["Format", "A physical stamp custom-made with the wording specified in your order."],
      ["How it is made", "After receiving your order, we will confirm the wording and font before production begins."],
      // 원문("국내는 택배, 해외는 국제배송")의 두 경로를 다 싣는다. 영어판만 국내 배송을
      // 빼고 축약해 두었는데, 다른 21개 언어는 원문대로 옮겼으므로 영어 구매자에게만
      // 다른 배송 조건을 고지한 셈이었다.
      ["Shipping", "Dispatched once production is complete. Courier delivery within Korea; international shipping elsewhere."],
      ["Withdrawal", "**Before production begins**, a full refund is available. Once production has begun, the right to cancel is restricted because the item is custom-made to order and cannot be resold (Article 17(2), Korean E-Commerce Act)."],
      ["Exchange / return", "If the item arrives damaged, is engraved incorrectly, or differs from your order, we will remake it at no charge or issue a full refund."],
      ["Return costs", "There is no charge in any of the above cases. Cancellations due to a change of mind are accepted only before production begins."],
    ],
    consent:
      "I acknowledge that this is a **custom-made product engraved with the wording I specified, and that once production begins, my right to cancel due to a change of mind will be restricted**.",
    required: "You must agree to the cancellation restrictions before proceeding with payment.",
    refund:
      "For refunds or inquiries, please contact the customer centre or email address below. If the item is damaged, incorrectly engraved, or differs from your order, we will remake it at no charge or issue a full refund.",
  },
};
