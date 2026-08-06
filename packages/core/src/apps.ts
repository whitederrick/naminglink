/**
 * 한 저장소에 서비스가 둘이고 **DB도 하나다.** 어느 행이 어느 서비스 것인지 가르는 기준을
 * 여기 한 곳에 둔다.
 *
 * **DB가 가를 수 있으면 DB에 맡긴다.**
 *
 *   orders                   `service` 컬럼 (제약 + 인덱스 있음)
 *   site_events / ad_events  `app` 컬럼 (제약 + 인덱스 있음)
 *   product_settings         컬럼이 없다 → 아래 코드 목록으로 가른다
 *
 * 컬럼이 있는 쪽의 목록을 코드에 또 적지 않는 것이 중요하다. 주문 종류가 늘 때마다 목록을 함께
 * 고쳐야 하고, 빠뜨리면 그 매출이 조용히 반대편 서비스로 잡힌다 — 숫자는 멀쩡해 보이므로
 * 아무도 눈치채지 못한다.
 *
 * `product_settings`만 목록으로 가르는 것은 컬럼이 없어서다. 다만 파는 것이 리포트 PDF 넷뿐이라
 * 목록이 짧게 유지된다. **두 앱과 운영자 콘솔이 이 파일을 함께 본다** — 예전에는 같은 목록이
 * `apps/inyeonlink/src/lib/report-product.ts`와 `AdminProductSettings.tsx`에 따로 적혀 있었다.
 */

export const APP_KEYS = ["naminglink", "inyeonlink", "sajulink"] as const;
export type AppKey = (typeof APP_KEYS)[number];

/**
 * 운영자 화면에 쓰는 서비스 이름. **콘솔·상태 점검·상품 설정이 이 하나를 본다.**
 *
 * 예전에는 화면마다 따로 적혀 있었고, 어느 화면은 아예 이분법이었다 — `AdminProductSettings`의
 * 배지가 "인연링크가 아니면 전부 네이밍링크"라 **사주 상품에 네이밍링크 배지가 붙었다**
 * (2026-08-06).
 *
 * **읽을 때는 `appLabel()`을 쓸 것.** `Record<AppKey, …>`는 키가 빠져도 tsc가 잡아 주지 못한
 * 전례가 있고(2026-08-04, 콘솔 제목이 빈칸으로 떴다), 그때 빈 문자열이 나가는 것보다 키 이름이
 * 나가는 편이 낫다.
 */
export const APP_LABELS: Record<AppKey, string> = {
  naminglink: "네이밍링크",
  inyeonlink: "인연링크",
  sajulink: "사주링크",
};

export function appLabel(key: AppKey): string {
  return APP_LABELS[key] ?? key;
}

/** 인연링크가 쓰는 `product_settings.code`. 메뉴 둘 × 권역 둘. */
export const INYEONLINK_PRODUCT_CODES = [
  "GUNGHAP_PDF_KRW",
  "GUNGHAP_PDF_USD",
  "AFFINITY_PDF_KRW",
  "AFFINITY_PDF_USD",
] as const;
export type InyeonlinkProductCode = (typeof INYEONLINK_PRODUCT_CODES)[number];

/**
 * 사주링크가 쓰는 `product_settings.code`. **상품 하나 × 권역 둘.**
 *
 * 2026-08-05에 티어 둘(`SAJU_CHONGUN_*`·`SAJU_PREMIUM_*`)을 하나로 합쳤다. 옛 코드를 남기지
 * 않은 것은 **그 코드로 팔린 적이 한 번도 없기 때문이다** — 상품표에 넣는 마이그레이션이 아직
 * 적용되지 않았다. 팔린 적이 있다면 콘솔이 옛 주문을 분류하지 못하므로 남겨야 한다.
 */
export const SAJULINK_PRODUCT_CODES = [
  "SAJU_REPORT_KRW",
  "SAJU_REPORT_USD",
] as const;
export type SajulinkProductCode = (typeof SAJULINK_PRODUCT_CODES)[number];

/**
 * 목록에 **적힌 것만 인연링크고 나머지는 전부 naminglink다.**
 *
 * 기본값을 naminglink로 두는 쪽이 안전하다. 인연링크 목록을 빠뜨렸을 때 생기는 일은 naminglink
 * 화면에 남의 행이 하나 섞이는 것이고, 반대로 두면 새로 만든 naminglink 상품이 통째로 인연링크
 * 화면으로 사라진다.
 */
export function appForProductCode(code: string): AppKey {
  if ((INYEONLINK_PRODUCT_CODES as readonly string[]).includes(code)) return "inyeonlink";
  if ((SAJULINK_PRODUCT_CODES as readonly string[]).includes(code)) return "sajulink";
  return "naminglink";
}

export function isAppKey(value: unknown): value is AppKey {
  return typeof value === "string" && (APP_KEYS as readonly string[]).includes(value);
}
