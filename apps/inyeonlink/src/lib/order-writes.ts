import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";
import { isDevEnvironment } from "@naminglink/core/env";

/**
 * 주문 행을 만드는 **유일한 입구**. naminglink의 같은 이름 파일과 짝이다.
 *
 * 두 앱이 같은 Supabase 프로젝트·같은 `public.orders`를 쓴다. 개발과 운영을 DB로 나누는 대신
 * `is_test`로 가르는데, 표식을 찍는 자리가 흩어지면 새 상품이 생길 때 빠뜨린다. 여기 한 곳만
 * 두고 `scripts/verify-env-isolation.ts`가 바깥의 직접 INSERT를 찾아 막는다.
 *
 * `is_test`는 DB에서 not null이고 기본값이 없다 — 이 래퍼를 안 거치면 INSERT가 에러로 터진다.
 */

type OrderRow = Record<string, unknown>;

export function isTestRow(): boolean {
  return isDevEnvironment();
}

export function insertOrder(supabase: SupabaseClient, row: OrderRow) {
  return supabase.from("orders").insert({ ...row, is_test: isTestRow() });
}
