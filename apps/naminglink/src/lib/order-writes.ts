import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";
import { isDevEnvironment } from "@naminglink/core/env";

/**
 * 주문·세션 행을 만드는 **유일한 입구**.
 *
 * 개발(로컬)과 운영(Vercel)이 같은 Supabase 프로젝트를 본다. DB를 나누는 대신 이용자·결제가
 * 만드는 행에 `is_test`를 찍어 가른다. 그 표식을 찍는 자리가 흩어지면 상품이 늘어날 때마다
 * 빠뜨릴 곳이 늘어나므로, 여기 한 곳만 두고 `scripts/verify-env-isolation.ts`가 바깥에서
 * 직접 INSERT하는 코드를 찾아 막는다.
 *
 * DB 쪽에도 같은 규칙이 걸려 있다 — `is_test`는 not null이고 **기본값이 없다.** 이 래퍼를
 * 거치지 않으면 INSERT가 에러로 실패한다(조용히 운영 행이 되는 것보다 낫다).
 */

type OrderRow = Record<string, unknown>;

/** 지금 만드는 행이 테스트 행인가. 다른 표에 같은 표식이 필요할 때도 이 값을 쓴다. */
export function isTestRow(): boolean {
  return isDevEnvironment();
}

export function insertOrder(supabase: SupabaseClient, row: OrderRow) {
  return supabase.from("orders").insert({ ...row, is_test: isTestRow() });
}

export function insertPremiumSession(supabase: SupabaseClient, row: OrderRow) {
  return supabase.from("premium_analysis_sessions").insert({ ...row, is_test: isTestRow() });
}
