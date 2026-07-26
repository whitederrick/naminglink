// 사업자 정보.
//
// naminglink(`apps/naminglink/src/lib/company.ts`)와 **같은 사업자**라 값이 같아야 한다.
// 그런데 naminglink는 관리자 화면에서 DB로 덮어쓸 수 있고 이 앱은 DB를 쓰지 않으므로,
// 지금은 각자 두고 사람이 맞춘다. 사업자등록번호·통신판매업 신고번호가 나오면
// **양쪽 다** 고쳐야 한다(naminglink는 관리자 화면, 여기는 이 파일).
//
// 두 곳을 계속 손으로 맞추는 게 부담이 되면 packages/core로 올린다. 지금은 값이 확정되기
// 전이라 공유 구조를 먼저 만들 이유가 없다.

export const LEGAL_EFFECTIVE_DATE = "2026-07-26";

export const companyInfo = {
  serviceName: "인연링크 (InyeonLink)",
  legalEntity: "Naming-Link",
  representative: "곽은하",
  businessNumber: "사업자등록번호 준비 중",
  mailOrderNumber: "통신판매업 신고 준비 중",
  address: "서울특별시",
  customerCenter: "070-4300-7141",
  email: "platforest.inc@gmail.com",
  privacyOfficer: "곽은하",
  hostingProvider: "Vercel Inc.",
} as const;
