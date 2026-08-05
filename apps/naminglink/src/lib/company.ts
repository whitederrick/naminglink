export const LEGAL_EFFECTIVE_DATE = "2026-07-22";

/**
 * 사업자 정보의 **폴백**. 원본은 관리자 화면이 고치는 `site_contents`의 `footer.global`이다.
 *
 * **여기 적힌 값은 사실이어야 한다.** 예전에는 "값을 여기에 적지 않는다"는 규칙이었고 그래서
 * 상호가 `Naming-Link`, 사업자등록번호가 "준비 중"인 채로 있었다. 그런데 2026-08-06에
 * **사주링크 운영에 Supabase 환경변수가 없어 폴백이 그대로 화면에 나가고 있었다** — 라이브
 * 통신판매 사이트가 상호를 `Naming-Link`(실제는 `(주)Platforest`)로, 등록번호를 "준비 중"으로
 * 고지하고 있었던 것이다(전자상거래법 제10조 표시의무).
 *
 * 폴백은 "안 쓰이는 값"이 아니라 **DB를 못 읽는 순간 법적 고지가 되는 값**이다. 그래서
 * 드리프트를 감수하고 사실을 적는다 — 틀린 값을 적어 두는 쪽이 훨씬 나쁘다.
 * **DB에서 값을 고치면 여기도 함께 고칠 것.**
 */
export const companyInfo = {
  serviceName: "Naming-Link",
  studioName: "Global Naming Studio",
  legalEntity: "(주)Platforest",
  representative: "곽은하",
  businessNumber: "197-86-02010",
  // 아직 신고 전이라 이것만은 실제로 "준비 중"이 사실이다.
  mailOrderNumber: "통신판매업 신고 준비 중",
  address: "서울특별시 금천구 디지털로 130, 13층 1309호 (가산동, 남성프라자)",
  customerCenter: "070-4300-7141",
  email: "platforest.inc@gmail.com",
  privacyOfficer: "곽은하(대표)",
  hostingProvider: "Vercel Inc.",
};
