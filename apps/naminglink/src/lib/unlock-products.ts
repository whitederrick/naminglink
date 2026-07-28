// 후보 전체 일괄 공개 상품의 서버 상품표.
// 가격 결정(2026-07-22): 국내 990원 / 해외 US$1.99. 통화·금액은 반드시 이 표에서만 읽는다
// (클라이언트가 보낸 금액을 신뢰하지 않는 기존 원칙과 동일).
// USD는 최소 단위(센트) 정수다 — 페이팔을 태우는 포트원 V2가 그렇게 받는다(US$1.99 → 199).
//
// 결제사(2026-07-29 일원화): 국내는 토스페이먼츠 직접, 해외는 포트원 경유 페이팔.
// `provider`가 그 둘 중 어디로 갈지를 정하는 **유일한 기준**이다.
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
    provider: "TOSS",
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
    provider: "PORTONE_PAYPAL",
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
    provider: "TOSS" | "PORTONE_PAYPAL";
    uiType: "PAYPAL_SPB" | null;
  }
>;

export function getCandidateUnlockProduct(region: CandidateUnlockRegion) {
  return CANDIDATE_UNLOCK_PRODUCTS[region];
}
