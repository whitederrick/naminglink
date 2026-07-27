import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// **이 앱에서 DB를 쓰는 곳은 유료 주문뿐이다.**
//
// 인연링크는 궁합 계산 입력을 저장하지 않는다(사용자 방침). 그 원칙은 유료 흐름에서도
// 유지된다 — 주문 표에는 금액·상태·발급 횟수만 남고 누구의 생년월일이었는지는 남지 않는다.
// 무료 조회 경로(/api/match)는 여전히 DB를 건드리지 않는다.
//
// 저장소는 naminglink와 **같은 Supabase 프로젝트**다. 포트원 상점이 하나이므로 주문도 한
// 표(public.orders)에 모으고 service 컬럼으로 가른다.

let adminClient: SupabaseClient | null = null;

export function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return null;

  adminClient ??= createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return adminClient;
}
