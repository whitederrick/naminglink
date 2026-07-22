// 글로벌(비한국어권) 대상 프리미엄 상품표. 가격은 반드시 이 표에서만 읽는다.
// GLOBAL_NAME_PDF: 한글 이름 3장 PDF 리포트(붓글씨 표지 + 의미·이유 + 사주·오행).
// US$9.99 결정(2026-07-23). 포트원 V2는 USD를 최소 단위(센트) 정수로 받으므로 999.
export const GLOBAL_NAME_PDF = {
  code: "GLOBAL_NAME_PDF",
  orderType: "PREMIUM_PDF",
  serviceType: "GLOBAL_TO_KOREAN",
  name: "Korean Name Premium Report (PDF)",
  orderName: "Naming-Link Korean Name Premium Report",
  amount: 999,
  currency: "USD",
  display: "US$9.99",
  channel: "paypal",
  includesPdf: true,
} as const;

export function isGlobalNamePdfProduct(code: unknown) {
  return code === GLOBAL_NAME_PDF.code;
}
