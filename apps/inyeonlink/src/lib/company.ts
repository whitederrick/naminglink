// 사업자 정보.
//
// 원본은 naminglink 관리자 화면이 고치는 `site_contents`의 `footer.global` 행이고, 이 앱은
// 그것을 읽어 쓴다(`company-server.ts`). 같은 사업자인데 저장 위치가 둘이면 어긋나기 때문이다.
//
// **아래 폴백은 사실이어야 한다.** 예전에는 "값을 여기에 적지 않는다"는 규칙이라 상호가
// `Naming-Link`, 등록번호가 "준비 중"인 채였다. 그런데 2026-08-06에 **사주링크 운영에 Supabase
// 환경변수가 없어 폴백이 그대로 화면에 나가고 있었다** — 라이브 통신판매 사이트가 상호를
// `Naming-Link`(실제는 `(주)Platforest`)로 고지한 셈이다(전자상거래법 제10조 표시의무).
//
// 폴백은 "안 쓰이는 값"이 아니라 **DB를 못 읽는 순간 법적 고지가 되는 값**이다. 드리프트를
// 감수하고 사실을 적는다. **DB에서 고치면 여기도 함께 고칠 것**(세 앱 모두 같은 값이다).

export const LEGAL_EFFECTIVE_DATE = "2026-07-26";

export type CompanyInfo = {
  /** 이 서비스의 이름. 사업자 정보가 아니라 서비스 정보라 여기서 정한다. */
  serviceName: string;
  /** © 줄에서 서비스 이름 뒤 괄호에 들어가는 말. naminglink의 `footerContent.subtitle`과 같은 자리다. */
  serviceSubtitle: string;
  legalEntity: string;
  representative: string;
  businessNumber: string;
  mailOrderNumber: string;
  address: string;
  customerCenter: string;
  email: string;
  privacyOfficer: string;
  hostingProvider: string;
};

/**
 * 인연링크의 서비스 이름. 사업자가 아니라 서비스에 속한 값이라 DB에서 오지 않는다.
 *
 * 표기는 naminglink의 © 줄과 같은 꼴로 맞춘다 — `Naming-Link(Global Naming Studio)`에 대응하는
 * `Inyeon-Link(인연 링크)`. 헤더 워드마크도 `Inyeon-Link`라 두 자리가 어긋나지 않는다.
 */
export const SERVICE_NAME = "Inyeon-Link";
export const SERVICE_SUBTITLE = "인연 링크";

export const fallbackCompanyInfo: CompanyInfo = {
  serviceName: SERVICE_NAME,
  serviceSubtitle: SERVICE_SUBTITLE,
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
