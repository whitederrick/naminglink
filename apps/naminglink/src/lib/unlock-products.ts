// 후보 전체 일괄 공개 상품의 서버 상품표.
// 가격 결정(2026-07-22): 국내 990원(카카오페이) / 해외 US$1.99(페이팔). 통화·금액은
// 반드시 이 표에서만 읽는다(클라이언트가 보낸 금액을 신뢰하지 않는 기존 원칙과 동일).
// 포트원 V2는 KRW를 원 단위 정수, USD를 최소 단위(센트) 정수로 받으므로 USD 1.99 → 199.
export const CANDIDATE_UNLOCK_REGIONS = ["domestic", "global"] as const;

export type CandidateUnlockRegion = (typeof CANDIDATE_UNLOCK_REGIONS)[number];

export const CANDIDATE_UNLOCK_PRODUCTS = {
  domestic: {
    region: "domestic",
    orderType: "CANDIDATE_UNLOCK",
    productCode: "CANDIDATE_UNLOCK_KRW",
    orderName: "Naming-Link 후보 전체 일괄 공개",
    currency: "KRW",
    amount: 990,
    display: "990원",
    channel: "kakaopay",
    payMethod: "EASY_PAY",
    uiType: null,
  },
  global: {
    region: "global",
    orderType: "CANDIDATE_UNLOCK",
    productCode: "CANDIDATE_UNLOCK_USD",
    orderName: "Naming-Link unlock all candidates",
    currency: "USD",
    amount: 199,
    display: "US$1.99",
    channel: "paypal",
    payMethod: "PAYPAL",
    uiType: "PAYPAL_SPB",
  },
} as const satisfies Record<
  CandidateUnlockRegion,
  {
    region: CandidateUnlockRegion;
    orderType: "CANDIDATE_UNLOCK";
    productCode: string;
    orderName: string;
    currency: "KRW" | "USD";
    amount: number;
    display: string;
    channel: "kakaopay" | "paypal";
    payMethod: "EASY_PAY" | "PAYPAL";
    uiType: "PAYPAL_SPB" | null;
  }
>;

export function getCandidateUnlockProduct(region: CandidateUnlockRegion) {
  return CANDIDATE_UNLOCK_PRODUCTS[region];
}
