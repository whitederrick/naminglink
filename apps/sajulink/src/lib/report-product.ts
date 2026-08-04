import "server-only";

import { isDevEnvironment } from "@naminglink/core/env";

import { getSupabaseAdminClient } from "@/lib/supabase";
import type { Locale } from "@/lib/i18n";

// 리포트 PDF 상품. 티어가 둘이다.
//
//   chongun   사주 총운 리포트     A4 5장 — 성향 요약·원국·오행 강약·오늘의 운세·삶의 네 영역
//   premium   프리미엄 총운 리포트  A4 7장 — 위에 더해 십신·왕상휴수사·근거 숫자·올해 총운·부록
//
// **대운·세운은 팔지 않는다.** 이 주석이 한때 프리미엄에 "대운·세운"이라고 적고 있었으나
// 엔진(`PersonReading`)이 운 기둥을 내지 않아 실제로는 담기지 않는 값이었다. 상품 설명은
// 실제로 주는 것만 적는다 — 엔진이 대운을 내게 되면 그때 다시 적는다.
//
// 값은 구현 지시서(`docs/IMPLEMENTATION_TICKET_saju_dream.md` §2)가 정한 것이다.
//
// 각각 국내(KRW·토스페이먼츠) / 해외(USD·페이팔) 두 갈래로 갈린다.
//
// **가격은 코드가 아니라 DB(product_settings)가 정한다.** 금액을 서버가 결정한다는 원칙이
// 핵심이고(클라이언트가 보내는 금액은 믿지 않는다), 덤으로 naminglink 관리자 화면에서
// 가격 조정과 판매 중지가 그대로 된다. 지금은 넷 다 enabled=false라 다크 런치다.

export const REPORT_REGIONS = ["domestic", "global"] as const;
export type ReportRegion = (typeof REPORT_REGIONS)[number];

/** 어느 메뉴의 리포트인가. 주문 종류·렌더러·문구가 이 값으로 갈린다. */
export const REPORT_KINDS = ["chongun", "premium"] as const;
export type ReportKind = (typeof REPORT_KINDS)[number];

export type ReportProduct = {
  kind: ReportKind;
  region: ReportRegion;
  /** product_settings의 코드 */
  settingCode: string;
  /** orders.order_type. DB 제약에 박혀 있는 값이라 바꾸지 않는다. */
  orderType: "SAJU_CHONGUN_PDF" | "SAJU_PREMIUM_PDF";
  /** 결제사(2026-07-29 일원화): 국내는 토스페이먼츠 직접, 해외는 포트원 경유 페이팔. */
  provider: "TOSS" | "PORTONE_PAYPAL";
  /** 페이팔은 결제창 팝업이 아니라 버튼을 화면에 그리는 방식이다. */
  uiType: "PAYPAL_SPB" | undefined;
  orderName: string;
};

const PRODUCTS: Record<ReportKind, Record<ReportRegion, ReportProduct>> = {
  chongun: {
    domestic: {
      kind: "chongun",
      region: "domestic",
      settingCode: "SAJU_CHONGUN_KRW",
      orderType: "SAJU_CHONGUN_PDF",
      provider: "TOSS",
      uiType: undefined,
      orderName: "사주링크 총운 리포트 PDF",
    },
    global: {
      kind: "chongun",
      region: "global",
      settingCode: "SAJU_CHONGUN_USD",
      orderType: "SAJU_CHONGUN_PDF",
      provider: "PORTONE_PAYPAL",
      uiType: "PAYPAL_SPB",
      orderName: "SajuLink life reading report (PDF)",
    },
  },
  premium: {
    domestic: {
      kind: "premium",
      region: "domestic",
      settingCode: "SAJU_PREMIUM_KRW",
      orderType: "SAJU_PREMIUM_PDF",
      provider: "TOSS",
      uiType: undefined,
      orderName: "사주링크 프리미엄 총운 리포트 PDF",
    },
    global: {
      kind: "premium",
      region: "global",
      settingCode: "SAJU_PREMIUM_USD",
      orderType: "SAJU_PREMIUM_PDF",
      provider: "PORTONE_PAYPAL",
      uiType: "PAYPAL_SPB",
      orderName: "SajuLink premium reading report (PDF)",
    },
  },
};

export function getReportProduct(kind: ReportKind, region: ReportRegion) {
  return PRODUCTS[kind][region];
}

/**
 * 화면 언어로 결제권역을 정한다.
 *
 * 한국어 화면이면 국내(토스페이먼츠 990원), 그 외에는 해외(페이팔 US$1.99)다. 접속 국가가
 * 아니라 **화면 언어**를 기준으로 삼는 이유는, 이용자가 실제로 보고 있는 가격 표기와
 * 결제 수단이 어긋나지 않게 하기 위해서다(naminglink의 일괄 공개와 같은 규칙).
 */
export function regionForLocale(locale: Locale): ReportRegion {
  return locale === "ko" ? "domestic" : "global";
}

export type ProductSetting = {
  code: string;
  amount: number;
  currency: "KRW" | "USD";
  enabled: boolean;
};

// 람다 인스턴스 안에서 잠깐 캐시한다. 주문마다 DB를 왕복할 값이 아니다.
const CACHE_TTL_MS = 60_000;
let cache: { at: number; rows: Map<string, ProductSetting> } | null = null;

/** 이 앱이 쓰는 상품 코드 전부. 한 번에 읽어 캐시한다. */
const ALL_SETTING_CODES = REPORT_KINDS.flatMap((kind) =>
  REPORT_REGIONS.map((region) => PRODUCTS[kind][region].settingCode),
);

async function loadSettings() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("상품 설정 저장소가 설정되지 않았습니다.");
  const { data, error } = await supabase
    .from("product_settings")
    .select("code,amount,currency,enabled")
    .in("code", ALL_SETTING_CODES);
  if (error) throw error;

  const rows = new Map<string, ProductSetting>();
  for (const row of (data ?? []) as ProductSetting[]) rows.set(row.code, row);
  applyDevEnabledOverride(rows);
  cache = { at: Date.now(), rows };
  return rows;
}

/**
 * 로컬에서만 `enabled`를 켠다(naminglink의 `product-settings.ts`와 같은 규칙).
 *
 * 상품표는 naminglink 관리자 화면이 고치는 **운영 설정**이고 개발·운영이 같은 DB를 본다.
 * 로컬에서 결제 화면을 보려고 `enabled`를 바꾸면 운영에서 실제로 판매가 열리므로, DB 대신
 * 읽어 온 값만 덮는다. `DEV_PRODUCTS_ENABLED=ALL` 또는 콤마로 코드를 나열한다.
 */
function applyDevEnabledOverride(rows: Map<string, ProductSetting>) {
  if (!isDevEnvironment()) return;
  const raw = process.env.DEV_PRODUCTS_ENABLED?.trim();
  if (!raw) return;
  const all = raw.toUpperCase() === "ALL";
  const codes = new Set(raw.split(",").map((code) => code.trim().toUpperCase()).filter(Boolean));
  for (const [code, row] of rows) {
    if (all || codes.has(code)) rows.set(code, { ...row, enabled: true });
  }
}

/** 판매 중이 아니면 던진다. 다크 런치 상태에서는 항상 여기서 걸린다. */
export async function getReportSetting(product: ReportProduct) {
  const rows =
    cache && Date.now() - cache.at < CACHE_TTL_MS ? cache.rows : await loadSettings();
  const row = rows.get(product.settingCode);
  if (!row || !row.enabled) {
    throw new Error(`판매 중이 아닌 상품입니다: ${product.settingCode}`);
  }
  return row;
}

/**
 * 두 권역의 표시 가격. 화면과 약관이 **같은 값을 쓰게 하려고** 한 곳에서 만든다.
 *
 * 판매 여부(`enabled`)와 무관하게 값을 돌려주는 것이 `getReportOffer`와 다르다. 약관은 아직
 * 팔지 않을 때도 "판매를 시작하면 이 가격"을 고지해야 하기 때문이다.
 *
 * 조회에 실패하면 시드 값으로 떨어진다. 폴백까지 없애면 DB가 잠깐 흔들릴 때 약관에서 가격이
 * 통째로 사라지는데, 가격 미고지가 값이 조금 낡은 것보다 나쁘다.
 */
// DB(`product_settings`)의 현재 값과 같아야 한다. 가격을 바꾸면 여기도 같이 고칠 것 —
// 어긋나면 조회가 흔들리는 순간 약관에 옛 가격이 나간다(2026-07-27 인하 때 실제로 어긋나
// 있었다). 바꾸는 수단은 `naminglink/scripts/set-product-price.mjs`이고 이력도 함께 남는다.
//
// **두 상품의 값이 다르다**(2026-07-31). 궁합 리포트를 3장에서 7장으로 늘리면서 올렸고,
// 인연의 결은 4장 그대로라 값도 그대로다. 약관이 두 가격을 각각 고지해야 하는 이유다.
const SEEDED_PRICE: Record<ReportKind, Record<ReportRegion, string>> = {
  chongun: { domestic: "₩4,900", global: "US$4.99" },
  premium: { domestic: "₩9,900", global: "US$9.99" },
};

export async function getReportPrices(kind: ReportKind = "chongun") {
  try {
    const rows =
      cache && Date.now() - cache.at < CACHE_TTL_MS ? cache.rows : await loadSettings();
    const of = (region: ReportRegion) => {
      const row = rows.get(PRODUCTS[kind][region].settingCode);
      return row ? displayPrice(row) : SEEDED_PRICE[kind][region];
    };
    return { domestic: of("domestic"), global: of("global") };
  } catch {
    return { ...SEEDED_PRICE[kind] };
  }
}

/**
 * **약관이 쓰는 값.** 파는 상품 전부의 가격을 한 번에 돌려준다.
 *
 * 인연링크에서 겪은 것을 그대로 물려받는다 — 약관·요금안내·환불정책이 `getReportPrices()`를
 * 기본 인자로만 불러 **한 상품 가격만** 고지하고 있었다. 두 상품 값이 같던 동안에는 우연히
 * 맞았지만 한쪽 값을 올리는 순간 문서가 틀린 값이 됐다. 전자상거래법이 요구하는 고지라
 * 상품마다 제 값이 나가야 한다.
 *
 * 한 번의 조회로 둘 다 만든다 — `loadSettings`가 네 코드를 한꺼번에 읽어 캐시하므로
 * 왕복이 늘지 않는다.
 */
export async function getAllReportPrices() {
  const [chongun, premium] = await Promise.all([
    getReportPrices("chongun"),
    getReportPrices("premium"),
  ]);
  return { chongun, premium };
}

/**
 * 화면에 보여 줄 가격. 판매 중이 아니거나 조회에 실패하면 null이다.
 *
 * **가격을 화면에 박아 두지 않으려고 만들었다.** 결제 금액은 `product_settings`가 정하는데
 * 버튼 라벨만 코드에 "990원"으로 적혀 있으면, 관리자 화면에서 값을 바꾸는 순간 표시가와
 * 청구액이 어긋난다. 전자상거래법이 금하는 것이고 PG 심사에서도 바로 걸린다.
 *
 * 던지지 않는 것은 이 값이 **결제 경로가 아니라 표시 경로**이기 때문이다. 가격을 못 읽었다고
 * 결과 화면 전체가 실패하면 안 된다 — 그때는 구매 자리를 "준비 중"으로 두면 된다.
 */
export async function getReportOffer(product: ReportProduct) {
  try {
    const setting = await getReportSetting(product);
    return { display: displayPrice(setting), currency: setting.currency };
  } catch {
    return null;
  }
}

export function displayPrice(setting: Pick<ProductSetting, "amount" | "currency">) {
  return setting.currency === "USD"
    ? `US$${(setting.amount / 100).toFixed(2)}`
    : `₩${setting.amount.toLocaleString("ko-KR")}`;
}
