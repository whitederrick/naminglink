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

// HANGUL_ART_PDF: 발음 표기(음차) 붓글씨 2장 PDF(표지 + 발음 안내). US$2.99 확정(2026-07-23).
// 음차 결과에 이미 사용자 언어의 발음 근거·음절·IPA가 있어 AI 재호출 없이 저장 데이터로 생성한다.
export const HANGUL_ART_PDF = {
  code: "HANGUL_ART_PDF",
  orderType: "PREMIUM_PDF",
  serviceType: "GLOBAL_TO_KOREAN",
  name: "Hangul Name Art (PDF)",
  orderName: "Naming-Link Hangul Name Art",
  amount: 299,
  currency: "USD",
  display: "US$2.99",
  channel: "paypal",
  includesPdf: true,
} as const;

// NAME_ART_PACK: 한글 이름 후보 1개 × 선택 서체 N개(기본 3) 아트 PDF. US$1.99 확정(2026-07-23).
// 가격·서체 수는 product_settings에서 읽는다(관리자 조정형).
export const NAME_ART_PACK = {
  code: "NAME_ART_PACK",
  orderType: "PREMIUM_PDF",
  serviceType: "GLOBAL_TO_KOREAN",
  name: "Name Art Pack",
  orderName: "Naming-Link Name Art Pack",
  amount: 199,
  currency: "USD",
  display: "US$1.99",
  channel: "paypal",
  includesPdf: true,
} as const;

export const GLOBAL_PREMIUM_PRODUCTS = {
  GLOBAL_NAME_PDF,
  HANGUL_ART_PDF,
  NAME_ART_PACK,
} as const;

export type GlobalPremiumProductCode = keyof typeof GLOBAL_PREMIUM_PRODUCTS;

export function isGlobalNamePdfProduct(code: unknown) {
  return code === GLOBAL_NAME_PDF.code;
}

export function isHangulArtPdfProduct(code: unknown) {
  return code === HANGUL_ART_PDF.code;
}

export function isNameArtPackProduct(code: unknown) {
  return code === NAME_ART_PACK.code;
}

// 글로벌(USD·페이팔) 프리미엄 PDF 상품 공통 판별 — pdf/download 게이트에서 사용.
export function isGlobalPremiumPdfProduct(code: unknown): code is GlobalPremiumProductCode {
  return (
    code === GLOBAL_NAME_PDF.code || code === HANGUL_ART_PDF.code || code === NAME_ART_PACK.code
  );
}
