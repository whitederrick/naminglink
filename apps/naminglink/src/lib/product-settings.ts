import "server-only";

import { isDevEnvironment } from "@naminglink/core/env";

import { getSupabaseAdminClient } from "@/lib/supabase";

// 관리자 조정형 상품 설정 조회(가격·통화·서체 수의 단일 원천).
// 람다 인스턴스 안에서 60초 캐시해 주문 경로의 DB 왕복을 줄인다.
//
// **로컬은 이 표를 읽기만 한다.** 개발과 운영이 같은 Supabase를 보기 때문에, 로컬에서 상품을
// 켜 보려고 `enabled`를 바꾸면 운영에서 실제로 판매가 열린다(결제 키가 없으면 눌러도 아무 일
// 없는 구매 버튼이 이용자에게 보인다). 그래서 DB 대신 **읽어 온 값을 로컬에서만 덮는다** —
// `DEV_PRODUCTS_ENABLED=ALL` 또는 `DEV_PRODUCTS_ENABLED=STAMP_KRW,CANDIDATE_UNLOCK_KRW`.
// 상품이 늘어나도 손댈 곳이 없도록 `ALL`을 기본으로 쓰는 편이 낫다.

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
  applyDevEnabledOverride(rows);
  cache = { at: Date.now(), rows };
  return rows;
}

/** 로컬에서만 `enabled`를 켠다. 운영에서는 어떤 값을 넣어도 아무 일도 하지 않는다. */
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

export async function getProductSetting(code: string): Promise<ProductSetting> {
  const rows =
    cache && Date.now() - cache.at < CACHE_TTL_MS ? cache.rows : await loadAll();
  const row = rows.get(code);
  if (!row || !row.enabled) throw new Error(`판매 중이 아닌 상품입니다: ${code}`);
  return row;
}

/**
 * **정적 화면이 값을 물고 굳지 않게 하는 태그** (2026-08-18).
 *
 * 위 60초 캐시는 **람다 인스턴스 안에서만** 산다. 안내 문서가 빌드 때 미리 만들어지면 그때
 * 읽은 금액이 HTML에 박혀, 상품을 끄거나 값을 바꿔도 그 화면만 옛 금액을 계속 내민다 —
 * 팔지 않는 금액을 확정 상품처럼 적는 자리다(표시광고법·애드센스 둘 다 걸린다).
 *
 * 그래서 값을 읽는 쪽(`lib/doc-values.ts`)이 이 태그를 달고, 운영자가 상품을 저장하면
 * `api/admin/products`가 이 태그를 무효화해 그 화면들이 다시 만들어진다. 푸터가 쓰는
 * `FOOTER_CONTENT_TAG`와 같은 방식이다.
 */
export const PRODUCT_SETTINGS_TAG = "product-settings";

export function invalidateProductSettingsCache() {
  cache = null;
}

// 화면·주문명에 쓰는 표시 가격.
export function displayPrice(setting: Pick<ProductSetting, "amount" | "currency">) {
  return setting.currency === "USD"
    ? `US$${(setting.amount / 100).toFixed(2)}`
    : `₩${setting.amount.toLocaleString("ko-KR")}`;
}
