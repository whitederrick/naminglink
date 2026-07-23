import "server-only";

import { getSupabaseAdminClient } from "@/lib/supabase";

// 관리자 조정형 상품 설정 조회(가격·통화·서체 수의 단일 원천).
// 람다 인스턴스 안에서 60초 캐시해 주문 경로의 DB 왕복을 줄인다.

export type ProductSetting = {
  code: string;
  name_ko: string;
  amount: number;
  currency: "KRW" | "USD";
  font_count: number;
  enabled: boolean;
};

const CACHE_TTL_MS = 60_000;
let cache: { at: number; rows: Map<string, ProductSetting> } | null = null;

async function loadAll() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("상품 설정 저장소가 설정되지 않았습니다.");
  const { data, error } = await supabase
    .from("product_settings")
    .select("code,name_ko,amount,currency,font_count,enabled");
  if (error) throw error;
  const rows = new Map<string, ProductSetting>();
  for (const row of (data ?? []) as ProductSetting[]) rows.set(row.code, row);
  cache = { at: Date.now(), rows };
  return rows;
}

export async function getProductSetting(code: string): Promise<ProductSetting> {
  const rows =
    cache && Date.now() - cache.at < CACHE_TTL_MS ? cache.rows : await loadAll();
  const row = rows.get(code);
  if (!row || !row.enabled) throw new Error(`판매 중이 아닌 상품입니다: ${code}`);
  return row;
}

export function invalidateProductSettingsCache() {
  cache = null;
}

// 화면·주문명에 쓰는 표시 가격.
export function displayPrice(setting: Pick<ProductSetting, "amount" | "currency">) {
  return setting.currency === "USD"
    ? `US$${(setting.amount / 100).toFixed(2)}`
    : `₩${setting.amount.toLocaleString("ko-KR")}`;
}
