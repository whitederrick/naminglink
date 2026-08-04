// 사업자 정보.
//
// **값을 여기에 적지 않는다.** naminglink 관리자 화면이 고치는 `site_contents`의 `footer.global`
// 행이 원본이고, 이 앱은 그것을 읽어 쓴다(`company-server.ts`). 같은 사업자인데 저장 위치가
// 둘이면 반드시 어긋나기 때문이다 — 실제로 어긋나 있었다. naminglink는 DB에서 사업자등록번호와
// 실제 주소를 보여 주는데 인연링크만 "준비 중"과 "서울특별시"를 내보내고 있었다.
//
// 아래 값은 **DB를 읽지 못했을 때의 폴백일 뿐**이다. 번호가 새로 나오면 관리자 화면에서 고치고,
// 이 파일은 건드리지 않는다.

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
 * `Saju-Link(사주 링크)`. 헤더 워드마크도 `Saju-Link`라 두 자리가 어긋나지 않는다.
 */
export const SERVICE_NAME = "Saju-Link";
export const SERVICE_SUBTITLE = "인연 링크";

export const fallbackCompanyInfo: CompanyInfo = {
  serviceName: SERVICE_NAME,
  serviceSubtitle: SERVICE_SUBTITLE,
  legalEntity: "Naming-Link",
  representative: "곽은하",
  businessNumber: "사업자등록번호 준비 중",
  mailOrderNumber: "통신판매업 신고 준비 중",
  address: "서울특별시",
  customerCenter: "070-4300-7141",
  email: "platforest.inc@gmail.com",
  privacyOfficer: "곽은하",
  hostingProvider: "Vercel Inc.",
};
