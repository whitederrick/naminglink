// 실물 굿즈 상품표. 가격은 반드시 이 표에서만 읽는다.
// 굿즈 로드맵(2026-07-23): 당분간 도장만 판매(캘리그라피 보류). 국내 배송 전용, 카카오페이 결제.
export const STAMP_PRODUCT = {
  code: "STAMP_BASIC",
  orderType: "STAMP_DELIVERY",
  name: "이름 도장 (국내 배송)",
  orderName: "Naming-Link 이름 도장",
  amount: 39000,
  currency: "KRW",
  display: "₩39,000",
  channel: "kakaopay",
} as const;
