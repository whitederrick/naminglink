import "server-only";

import { getSupabaseAdminClient } from "@/lib/supabase";
import type { Locale } from "@/lib/i18n";

// 궁합 리포트 PDF 상품. 국내 카카오페이(KRW) / 해외 페이팔(USD) 두 갈래다.
//
// **가격은 코드가 아니라 DB(product_settings)가 정한다.** 금액을 서버가 결정한다는 원칙이
// 핵심이고(클라이언트가 보내는 금액은 믿지 않는다), 덤으로 naminglink 관리자 화면에서
// 가격 조정과 판매 중지가 그대로 된다. 지금은 enabled=false로 시드돼 있어 다크 런치다.

export const REPORT_REGIONS = ["domestic", "global"] as const;
export type ReportRegion = (typeof REPORT_REGIONS)[number];

export type ReportProduct = {
  region: ReportRegion;
  /** product_settings의 코드 */
  settingCode: string;
  channel: "kakaopay" | "paypal";
  /** 페이팔은 결제창 팝업이 아니라 버튼을 화면에 그리는 방식이다. */
  uiType: "PAYPAL_SPB" | undefined;
  orderName: string;
};

const PRODUCTS: Record<ReportRegion, ReportProduct> = {
  domestic: {
    region: "domestic",
    settingCode: "GUNGHAP_PDF_KRW",
    channel: "kakaopay",
    uiType: undefined,
    orderName: "인연링크 궁합 리포트 PDF",
  },
  global: {
    region: "global",
    settingCode: "GUNGHAP_PDF_USD",
    channel: "paypal",
    uiType: "PAYPAL_SPB",
    orderName: "InyeonLink compatibility report (PDF)",
  },
};

export function getReportProduct(region: ReportRegion) {
  return PRODUCTS[region];
}

/**
 * 화면 언어로 결제권역을 정한다.
 *
 * 한국어 화면이면 국내(카카오페이 990원), 그 외에는 해외(페이팔 US$2.99)다. 접속 국가가
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

async function loadSettings() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("상품 설정 저장소가 설정되지 않았습니다.");
  const { data, error } = await supabase
    .from("product_settings")
    .select("code,amount,currency,enabled")
    .in("code", [PRODUCTS.domestic.settingCode, PRODUCTS.global.settingCode]);
  if (error) throw error;

  const rows = new Map<string, ProductSetting>();
  for (const row of (data ?? []) as ProductSetting[]) rows.set(row.code, row);
  cache = { at: Date.now(), rows };
  return rows;
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
const SEEDED_PRICE = { domestic: "₩990", global: "US$2.99" } as const;

export async function getReportPrices() {
  try {
    const rows =
      cache && Date.now() - cache.at < CACHE_TTL_MS ? cache.rows : await loadSettings();
    const of = (region: ReportRegion) => {
      const row = rows.get(PRODUCTS[region].settingCode);
      return row ? displayPrice(row) : SEEDED_PRICE[region];
    };
    return { domestic: of("domestic"), global: of("global") };
  } catch {
    return { ...SEEDED_PRICE };
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
