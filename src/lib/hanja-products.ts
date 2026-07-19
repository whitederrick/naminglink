export const HANJA_PRODUCT_CODES = [
  "FIVE_DETAIL",
  "TEN_DETAIL",
  "TEN_SAJU_PDF",
] as const;

export type HanjaProductCode = (typeof HANJA_PRODUCT_CODES)[number];

export const HANJA_PRODUCTS = {
  FIVE_DETAIL: {
    code: "FIVE_DETAIL",
    orderType: "PREMIUM_PDF",
    name: "한자 후보 5개 상세",
    amount: 2900,
    candidateLimit: 5,
    includesSaju: false,
    includesPdf: false,
  },
  TEN_DETAIL: {
    code: "TEN_DETAIL",
    orderType: "PREMIUM_PDF",
    name: "한자 후보 10개 확장 상세 PDF",
    amount: 4900,
    candidateLimit: 10,
    includesSaju: false,
    includesPdf: true,
  },
  TEN_SAJU_PDF: {
    code: "TEN_SAJU_PDF",
    orderType: "PREMIUM_PDF",
    name: "한자 후보 10개 사주·오행 종합 리포트",
    amount: 9900,
    candidateLimit: 10,
    includesSaju: true,
    includesPdf: true,
  },
} as const satisfies Record<
  HanjaProductCode,
  {
    code: HanjaProductCode;
    orderType: "PREMIUM_PDF";
    name: string;
    amount: number;
    candidateLimit: 5 | 10;
    includesSaju: boolean;
    includesPdf: boolean;
  }
>;

export function getHanjaProduct(code: HanjaProductCode) {
  return HANJA_PRODUCTS[code];
}
