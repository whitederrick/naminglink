import { COMPANY_FACTS, romanizeCompanyValue } from "@naminglink/core/company";

export const LEGAL_EFFECTIVE_DATE = "2026-07-22";

/**
 * 한국어로 적힌 사업자 값을 **로마자 한 벌**로 바꾼다. 비한국어 로케일의 약관에서 쓴다.
 *
 * 약관 로케일 파일(`legal-content/<로케일>.ts`)은 정적 모듈이라 렌더 시점의 로케일을 모른다.
 * 그래서 형제 앱처럼 채우는 자리에서 한 번에 처리하지 못하고, **파일마다 이 함수를 통과시킨다**
 * — ko.ts만 통과시키지 않는다. `scripts/verify-legal-interpolation.mjs`가 그 규칙을 센다.
 */
export const romanize = romanizeCompanyValue;

/**
 * 사업자 정보의 **폴백**. 원본은 관리자 화면이 고치는 `site_contents`의 `footer.global`이다.
 *
 * **사업자 사실은 여기 없다** — `@naminglink/core/company`의 `COMPANY_FACTS`가 한 벌 들고 있고
 * 세 앱이 그것을 쓴다. 예전에는 앱마다 따로 적혀 있었고 셋 다 상호가 `Naming-Link`(실제는
 * `(주)Platforest`), 등록번호가 "준비 중"이었다. 2026-08-06에 사주링크 운영 환경에 Supabase
 * 환경변수가 없어 그 폴백이 그대로 화면에 나갔다(전자상거래법 제10조 표시의무).
 *
 * 여기 남는 것은 **서비스에 속한 값**뿐이다.
 */
export const companyInfo = {
  serviceName: "Naming-Link",
  studioName: "Global Naming Studio",
  ...COMPANY_FACTS,
};
