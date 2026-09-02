/**
 * 사업자 정보. **한 사업자이므로 값도 한 곳에 있어야 한다.**
 *
 * ## 왜 core에 있는가
 *
 * 2026-08-06에 사주링크 운영 푸터가 상호를 `Naming-Link`(실제는 `(주)Platforest`), 등록번호를
 * "준비 중"으로 고지하고 있었다. 라이브 통신판매 사이트의 법적 고지가 사실과 달랐다
 * (전자상거래법 제10조 표시의무).
 *
 * 원인은 둘이었다. 그 배포에 Supabase 환경변수가 없어 DB를 못 읽은 것, 그리고 **폴백이 앱마다
 * 따로 적혀 있었고 셋 다 틀렸던 것**이다. 앞의 것은 설정으로 고쳤지만, 뒤의 것은 앱을 늘릴
 * 때마다 다시 생긴다 — 새 앱은 복제로 태어나고, 복제는 그 시점의 값을 그대로 굳힌다.
 *
 * 그래서 **사업자 사실은 여기 한 벌만 둔다.** 서비스마다 다른 것(이름·부제)만 앱이 넘긴다.
 *
 * ## 폴백은 사실이어야 한다
 *
 * 예전 규칙은 "폴백에 값을 적지 않는다"였다(DB가 원본이니까). 그런데 폴백은 안 쓰이는 값이
 * 아니라 **DB를 못 읽는 순간 법적 고지가 되는 값**이다. 드리프트를 감수하고 사실을 적는다.
 * 관리자 화면(`site_contents`의 `footer.global`)에서 값을 고치면 여기도 함께 고칠 것.
 */

export type CompanyFacts = {
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

export type CompanyInfo = CompanyFacts & {
  /** 이 서비스의 이름. 사업자가 아니라 서비스에 속한 값이라 앱이 정한다. */
  serviceName: string;
  /** © 줄에서 서비스 이름 뒤 괄호에 들어가는 말. */
  serviceSubtitle: string;
};

/** DB를 읽지 못했을 때 쓰는 값. **사실이어야 한다** — 위 주석 참고. */
export const COMPANY_FACTS: CompanyFacts = {
  legalEntity: "(주)Platforest",
  representative: "곽은하",
  businessNumber: "197-86-02010",
  // 2026-09-02에 신고증이 나왔다. 같은 날 관리자 화면(`site_contents`의 `footer.global`)에도
  // 넣었고, **폴백은 DB를 못 읽는 순간 법적 고지가 되므로** 여기도 함께 고친다(위 주석 참고).
  // 표기는 **원문 그대로** 둔다(사용자 결정) — 로마자 표에 안 넣으므로 23개 언어에 같은
  // 번호가 나간다. 「준비 중」류가 아니어서 `PENDING_SENTINELS`에도 안 걸린다.
  // **DB 값과 글자까지 맞춘다** — 네 앱이 같은 문자열을 그려야 한다. 2026-09-02에 운영에서
  // 잰 값이 이것이다(같은 날 「호」가 빠진 것을 발견해 사용자가 DB 를 고쳤고, 다시 재어 맞췄다).
  // **DB 를 고치면 이 줄도 함께 고칠 것** — 어긋나면 DB 를 읽는 앱과 못 읽는 앱이 다른 번호를 낸다.
  mailOrderNumber: "제2026-서울금천-1798호",
  address: "서울특별시 금천구 디지털로 130, 13층 1309호 (가산동, 남성프라자)",
  customerCenter: "070-4300-7141",
  email: "platforest.inc@gmail.com",
  privacyOfficer: "곽은하(대표)",
  hostingProvider: "Vercel Inc.",
};

/**
 * 한국어로 적힌 사업자 값 → **로마자 한 벌**.
 *
 * DB(`site_contents`의 `footer.global`)는 한국어 단일본이라, 비한국어 로케일에는 옮겨 적을 것이
 * 필요하다. **인명·주소는 언어별로 옮기지 않고 로마자 한 벌을 쓴다** — 사람 이름은 고유명사라
 * 언어마다 새로 음역하면 같은 사람이 언어마다 다른 이름이 된다. 실제로 2026-08-07까지
 * naminglink 약관 17개 로케일이 그랬다: ja `郭恩河` · zh `郭恩哈`(같은 사람, 다른 한자) ·
 * ru `Гак Ын Ха` · kk `Гвак Ын Ха`. 어느 것도 여권 표기가 아니었다.
 *
 * 여기 적힌 로마자가 **여권 표기와 같은 값**이다(2026-08-07 확인). 법적 고지에 나가는 값이므로
 * 임의로 고치지 말 것.
 *
 * ⚠️ **키는 값이지 필드가 아니다.** 관리자 화면이 새 값을 넣으면 표에 없어서 원문이 그대로
 * 나간다 — 그것이 의도다(모르는 값을 그럴듯하게 바꾸지 않는다). 값을 바꾸면 여기도 함께 볼 것.
 *
 * 「준비 중」류 상태 문구는 여기 두지 않는다. 그것은 이름이 아니라 문장이라 로케일별 번역이
 * 맞고, 각 앱 푸터의 `PENDING_COPIES`/`footerCopies`가 들고 있다.
 */
export const KOREAN_COMPANY_VALUE_TO_LATIN: Record<string, string> = {
  "(주)Platforest": "Platforest Inc.",
  곽은하: "Gwak Eunha",
  "곽은하(대표)": "Gwak Eunha (CEO)",
  "서울특별시 금천구 디지털로 130, 13층 1309호 (가산동, 남성프라자)":
    "13F #1309, Namseong Plaza, 130 Digital-ro, Geumcheon-gu, Seoul, Republic of Korea",
  서울특별시: "Seoul, Republic of Korea",
};

/** 값 하나를 로마자 표기로. 표에 없으면 **원문 그대로** 둔다. */
export function romanizeCompanyValue(value: string): string {
  const trimmed = value.trim();
  return KOREAN_COMPANY_VALUE_TO_LATIN[trimmed] ?? value;
}

/**
 * 사업자 정보 전체를 로마자 표기로. **비한국어 로케일에서만 쓴다.**
 *
 * 표에 없는 값(전화번호·이메일·사업자등록번호처럼 이미 숫자·라틴인 것, 그리고 관리자가 새로
 * 넣은 값)은 그대로 통과한다.
 */
export function romanizeCompanyFacts<T extends CompanyFacts>(company: T): T {
  return {
    ...company,
    legalEntity: romanizeCompanyValue(company.legalEntity),
    representative: romanizeCompanyValue(company.representative),
    address: romanizeCompanyValue(company.address),
    privacyOfficer: romanizeCompanyValue(company.privacyOfficer),
  };
}

function text(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

/**
 * 관리자 화면이 발행한 `footer.global` 내용을 사업자 정보로 옮긴다.
 *
 * 필드 이름은 naminglink의 `footerContentSchema`와 같다. **naminglink에서 필드를 바꾸면 여기도
 * 같이 볼 것** — 없는 필드는 조용히 폴백으로 떨어진다.
 */
export function companyInfoFrom(
  published: Record<string, unknown> | null,
  service: { serviceName: string; serviceSubtitle: string },
): CompanyInfo {
  const source = published ?? {};
  return {
    serviceName: service.serviceName,
    serviceSubtitle: service.serviceSubtitle,
    legalEntity: text(source.companyName, COMPANY_FACTS.legalEntity),
    representative: text(source.representative, COMPANY_FACTS.representative),
    businessNumber: text(source.businessNumber, COMPANY_FACTS.businessNumber),
    mailOrderNumber: text(source.mailOrderNumber, COMPANY_FACTS.mailOrderNumber),
    address: text(source.address, COMPANY_FACTS.address),
    customerCenter: text(source.customerCenter, COMPANY_FACTS.customerCenter),
    email: text(source.email, COMPANY_FACTS.email),
    privacyOfficer: text(source.privacyOfficer, COMPANY_FACTS.privacyOfficer),
    hostingProvider: text(source.hostingProvider, COMPANY_FACTS.hostingProvider),
  };
}

/** 람다 안에서 잠깐만 캐시한다. 페이지마다 DB를 왕복할 값이 아니다. */
const CACHE_TTL_MS = 60_000;
const cache = new Map<string, { at: number; value: CompanyInfo }>();

/**
 * 사업자 정보를 가져온다. **DB 조회는 앱이 넘긴다** — core가 Supabase를 알 필요가 없고,
 * 그래야 이 파일이 서버 전용 의존성을 끌어오지 않는다.
 *
 * 조회가 실패해도 던지지 않는다. 사업자 정보를 못 읽었다고 화면 전체가 죽으면 안 된다.
 */
export async function loadCompanyInfo(options: {
  /** 이 서비스 이름. 캐시 키로도 쓴다 — 한 프로세스가 여러 서비스를 그리지는 않지만 안전하게. */
  serviceName: string;
  serviceSubtitle: string;
  /** `site_contents`의 `footer.global` 발행 내용. 없으면 null. */
  loadPublishedFooter: () => Promise<Record<string, unknown> | null>;
}): Promise<CompanyInfo> {
  const { serviceName, serviceSubtitle, loadPublishedFooter } = options;
  const cached = cache.get(serviceName);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.value;

  let published: Record<string, unknown> | null = null;
  try {
    published = await loadPublishedFooter();
  } catch {
    // 폴백으로 그린다. 위 주석대로 폴백 값은 사실이다.
  }

  const value = companyInfoFrom(published, { serviceName, serviceSubtitle });
  // **못 읽었으면 캐시하지 않는다.** 설정이 늦게 붙는 경우(오늘 사주링크가 그랬다) 1분 동안
  // 틀린 고지를 붙들고 있을 이유가 없다.
  if (published) cache.set(serviceName, { at: Date.now(), value });
  return value;
}
