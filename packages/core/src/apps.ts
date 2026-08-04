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

/** 인연링크가 쓰는 `product_settings.code`. 메뉴 둘 × 권역 둘. */
export const INYEONLINK_PRODUCT_CODES = [
  "GUNGHAP_PDF_KRW",
  "GUNGHAP_PDF_USD",
  "AFFINITY_PDF_KRW",
  "AFFINITY_PDF_USD",
] as const;
export type InyeonlinkProductCode = (typeof INYEONLINK_PRODUCT_CODES)[number];

/** 사주링크가 쓰는 `product_settings.code`. 티어 둘 × 권역 둘. */
export const SAJULINK_PRODUCT_CODES = [
  "SAJU_CHONGUN_KRW",
  "SAJU_CHONGUN_USD",
  "SAJU_PREMIUM_KRW",
  "SAJU_PREMIUM_USD",
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
