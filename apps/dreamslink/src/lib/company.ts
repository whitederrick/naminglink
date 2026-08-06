// 사업자 정보.
//
// **사업자 사실은 여기 없다** — `@naminglink/core/company`의 `COMPANY_FACTS` 한 곳에 있다.
// 예전에는 앱마다 폴백을 적어 두었고 셋 다 상호가 `Naming-Link`(실제는 `(주)Platforest`),
// 등록번호가 "준비 중"이었다. 2026-08-06에 사주링크 운영 환경에 Supabase 환경변수가 없어
// 그 폴백이 그대로 화면에 나갔다 — 라이브 통신판매 사이트의 법적 고지가 사실과 달랐다.
//
// 원본은 naminglink 관리자 화면이 고치는 `site_contents`의 `footer.global` 행이고, 이 앱은
// 그것을 읽어 쓴다(`company-server.ts`). 못 읽으면 core의 폴백으로 그린다.
//
// 여기 남는 것은 **서비스에 속한 값**뿐이다.

import { COMPANY_FACTS, type CompanyInfo } from "@naminglink/core/company";

export type { CompanyInfo };

export const LEGAL_EFFECTIVE_DATE = "2026-07-26";

/**
 * 인연링크의 서비스 이름. 사업자가 아니라 서비스에 속한 값이라 DB에서 오지 않는다.
 *
 * 표기는 naminglink의 © 줄과 같은 꼴로 맞춘다 — `Naming-Link(Global Naming Studio)`에 대응하는
 * `Inyeon-Link(인연 링크)`.
 */
export const SERVICE_NAME = "Inyeon-Link";
export const SERVICE_SUBTITLE = "인연 링크";

/** DB를 못 읽었을 때 그리는 값. 사업자 사실은 core가, 서비스 이름은 이 파일이 정한다. */
export const fallbackCompanyInfo: CompanyInfo = {
  serviceName: SERVICE_NAME,
  serviceSubtitle: SERVICE_SUBTITLE,
  ...COMPANY_FACTS,
};
