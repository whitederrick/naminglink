import "server-only";

import { isDevEnvironment } from "@naminglink/core/env";

import { getSupabaseAdminClient } from "@/lib/supabase";
import type { Locale } from "@/lib/i18n";

// 리포트 PDF 상품. 메뉴가 둘이라 **상품도 둘**이다.
//
//   gunghap   사주 궁합 리포트   두 사람의 궁합
//   affinity  인연의 결 리포트   나 하나로 본 상대의 유형
//
// 각각 국내(KRW·토스페이먼츠) / 해외(USD·페이팔) 두 갈래로 갈린다.
//
// **가격은 코드가 아니라 DB(product_settings)가 정한다.** 금액을 서버가 결정한다는 원칙이
// 핵심이고(클라이언트가 보내는 금액은 믿지 않는다), 덤으로 naminglink 관리자 화면에서
// 가격 조정과 판매 중지가 그대로 된다. 지금은 넷 다 enabled=false라 다크 런치다.

export const REPORT_REGIONS = ["domestic", "global"] as const;
export type ReportRegion = (typeof REPORT_REGIONS)[number];

/** 어느 메뉴의 리포트인가. 주문 종류·렌더러·문구가 이 값으로 갈린다. */
export const REPORT_KINDS = ["gunghap", "affinity"] as const;
export type ReportKind = (typeof REPORT_KINDS)[number];

export type ReportProduct = {
  kind: ReportKind;
  region: ReportRegion;
  /** product_settings의 코드 */
  settingCode: string;
  /** orders.order_type. DB 제약에 박혀 있는 값이라 바꾸지 않는다. */
  orderType: "GUNGHAP_PDF" | "AFFINITY_PDF";
  /** 결제사(2026-07-29 일원화): 국내는 토스페이먼츠 직접, 해외는 포트원 경유 페이팔. */
  provider: "TOSS" | "PORTONE_PAYPAL";
  /** 페이팔은 결제창 팝업이 아니라 버튼을 화면에 그리는 방식이다. */
  uiType: "PAYPAL_SPB" | undefined;
  orderName: string;
};

const PRODUCTS: Record<ReportKind, Record<ReportRegion, ReportProduct>> = {
  gunghap: {
    domestic: {
      kind: "gunghap",
      region: "domestic",
      settingCode: "GUNGHAP_PDF_KRW",
      orderType: "GUNGHAP_PDF",
      provider: "TOSS",
      uiType: undefined,
      orderName: "인연링크 궁합 리포트 PDF",
    },
    global: {
      kind: "gunghap",
      region: "global",
      settingCode: "GUNGHAP_PDF_USD",
      orderType: "GUNGHAP_PDF",
      provider: "PORTONE_PAYPAL",
      uiType: "PAYPAL_SPB",
      orderName: "InyeonLink compatibility report (PDF)",
    },
  },
  affinity: {
    domestic: {
      kind: "affinity",
      region: "domestic",
      settingCode: "AFFINITY_PDF_KRW",
      orderType: "AFFINITY_PDF",
      provider: "TOSS",
      uiType: undefined,
      orderName: "인연링크 인연의 결 리포트 PDF",
    },
    global: {
      kind: "affinity",
      region: "global",
      settingCode: "AFFINITY_PDF_USD",
      orderType: "AFFINITY_PDF",
      provider: "PORTONE_PAYPAL",
      uiType: "PAYPAL_SPB",
      orderName: "InyeonLink match profile report (PDF)",
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
// 마이그레이션이 심은 값과 같아야 한다(`20260727120000` → GUNGHAP_PDF 990/199,
// `20260728170000` → AFFINITY_PDF 990/199. 둘은 같은 값으로 정했다).
// 가격을 바꾸면 여기도 같이 고칠 것 — 어긋나면 조회가 흔들리는 순간 약관에 옛 가격이 나간다
// (2026-07-27 인하 때 실제로 어긋나 있었다).
const SEEDED_PRICE: Record<ReportKind, Record<ReportRegion, string>> = {
  gunghap: { domestic: "₩990", global: "US$1.99" },
  affinity: { domestic: "₩990", global: "US$1.99" },
};

export async function getReportPrices(kind: ReportKind = "gunghap") {
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
