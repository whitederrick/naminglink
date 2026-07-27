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

export function displayPrice(setting: Pick<ProductSetting, "amount" | "currency">) {
  return setting.currency === "USD"
    ? `US$${(setting.amount / 100).toFixed(2)}`
    : `₩${setting.amount.toLocaleString("ko-KR")}`;
}
