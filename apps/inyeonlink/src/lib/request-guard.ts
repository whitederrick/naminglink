import "server-only";

import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";

import { notifyOps } from "@/lib/ops-alert";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 요청 남용 방어. **naminglink의 같은 파일과 같은 방식이고 같은 DB 함수(consume_rate_limit)를
// 쓴다** — 두 앱이 한 Supabase를 공유하므로 카운터도 공유된다. 한쪽만 고치면 어긋난다.
//
// 이 앱은 회원가입이 없어서 이용자를 식별할 수단이 IP뿐이다. 그래서 IP를 날짜와 함께 해시해
// 하루 단위 식별자로 쓴다 — 원래 IP를 저장하지 않으면서도 같은 사람의 반복 요청은 셀 수 있다.
// 입력을 저장하지 않는다는 이 서비스의 원칙과 충돌하지 않는다.

function getRequestIp(request: NextRequest) {
  // x-real-ip는 Vercel 등 신뢰 프록시가 실제 클라이언트 IP로 덮어쓴다.
  // x-forwarded-for의 첫 값은 클라이언트가 위조할 수 있으므로, 프록시가 마지막에 덧붙이는
  // 값(맨 오른쪽)을 쓴다 — 헤더를 돌려 한도를 우회하는 것을 막는다.
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((part) => part.trim()).filter(Boolean);
    if (parts.length) return parts[parts.length - 1];
  }
  return "local";
}

/** 하루 단위 방문자 식별자. 원래 IP는 남기지 않는다. */
function getDailyVisitorHash(request: NextRequest) {
  const secret =
    process.env.ANALYTICS_HASH_SALT ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) return null;
  const day = new Date().toISOString().slice(0, 10);
  return createHmac("sha256", secret)
    .update(`${day}:${getRequestIp(request)}`)
    .digest("hex");
}

/**
 * 고정 시간창 레이트리밋.
 *
 * 카운터를 DB에 두는 것이 핵심이다. 서버리스는 요청마다 다른 인스턴스가 뜰 수 있어 메모리
 * 카운터가 무용지물이다.
 *
 * **막지 못하면 통과시킨다(fail-open).** RPC가 없거나 오류일 때 정상 이용자를 막는 것이,
 * 남용을 잠깐 놓치는 것보다 나쁘다. 마이그레이션 적용 전 배포에도 안전하다.
 */
export async function checkRateLimit(
  request: NextRequest,
  scope: string,
  { windowSeconds, limit }: { windowSeconds: number; limit: number },
): Promise<boolean> {
  const supabase = getSupabaseAdminClient();
  const identifier = getDailyVisitorHash(request);
  if (!supabase || !identifier) return true;

  const { data, error } = await supabase.rpc("consume_rate_limit", {
    p_scope: scope,
    p_identifier: identifier,
    p_window_seconds: windowSeconds,
    p_limit: limit,
  });
  if (error) {
    // **알린다.** 예전에는 `console.error` 한 줄뿐이라 아무도 로그를 보지 않으면 그대로 묻혔다.
    //
    // **통과시키는 것은 그대로 둔다(fail-open).** naminglink는 같은 경로에 전역 AI 상한이
    // 실려 있어 전역 한도만 fail-closed로 돌렸지만, 이 앱은 규칙 엔진이라 요청당 외부 비용이
    // 없다. 막아서 지킬 돈이 없는데 정상 이용자를 막는 것은 손해뿐이다.
    notifyOps(
      `rate-limit-unavailable:${scope}`,
      `레이트리밋을 확인할 수 없어 통과시키고 있습니다 (${scope})`,
      { scope, reason: error.message },
    );
    return true;
  }
  return data !== false;
}
