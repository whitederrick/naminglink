import "server-only";
import { NextRequest } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getDailyVisitorHash } from "@/lib/request-context";
import { notifyOps } from "@/lib/ops-alert";

// Supabase 기반 고정 시간창 레이트리밋(서버리스-안전: 카운터가 함수 밖 DB에 있음).
// consume_rate_limit RPC가 아직 없거나 오류면 기본은 fail-open(허용)이다 — 레이트리밋이
// 정상 요청을 막는 것보다 낫고, 마이그레이션 적용 전 배포에도 안전하다.
export async function checkRateLimit(
  request: NextRequest,
  scope: string,
  {
    windowSeconds,
    limit,
    identifier: identifierOverride,
    failClosed = false,
  }: {
    windowSeconds: number;
    limit: number;
    identifier?: string;
    /**
     * 확인에 실패했을 때 **막을 것인가.**
     *
     * 기본은 거짓(통과)이다. 한 사람이 몇 번 더 쓰는 손해보다 정상 이용자를 막는 손해가 크다.
     *
     * **비용 상한에는 참을 준다.** 전역 AI 상한은 돈이 새는 것을 막는 마지막 방어선인데,
     * 그것까지 fail-open이면 Supabase가 흔들리는 동안 상한이 통째로 사라진다. 남는 것은
     * `console.error` 한 줄뿐이라 아무도 보지 않으면 청구서로 알게 된다. 확인할 수 없으면
     * 돈을 쓰지 않는 쪽이 맞다 — 어차피 그 상황에서는 결과 저장도 안 되어 서비스가 이미
     * 반쯤 멈춘 상태다.
     */
    failClosed?: boolean;
  },
): Promise<boolean> {
  const supabase = getSupabaseAdminClient();
  // identifier를 지정하면 방문자 단위가 아닌 전역("global" 등) 한도로 동작한다.
  const identifier = identifierOverride ?? getDailyVisitorHash(request);
  // 설정 자체가 없는 경우(지역 개발)는 막지 않는다. 여기서 막으면 개발이 안 된다.
  //
  // **다만 배포된 환경에서 여기 오면 레이트리밋이 통째로 꺼진 것이다.** 지역 개발에 설정이
  // 없는 것은 정상이지만 운영에서는 사고다 — 실제로 사주링크가 Supabase 환경변수 없이 떠 있어
  // 모든 한도가 열려 있었는데 **아무 신호도 없었다**(2026-08-06 리뷰에서 발견). RPC 오류에는
  // 알리면서 설정이 아예 없을 때는 알리지 않은 탓이다. **가장 위험한 실패가 가장 조용했다.**
  if (!supabase || !identifier) {
    if (process.env.VERCEL_ENV) {
      notifyOps(
        // 스코프를 키에 넣지 않는다 — 넣으면 라우트마다 따로 억제돼 알림이 쏟아진다.
        "rate-limit-not-configured",
        "레이트리밋 설정이 없어 모든 요청을 통과시키고 있습니다",
        { scope, missing: !supabase ? "supabase" : "identifier" },
        "critical",
      );
    }
    return true;
  }

  const { data, error } = await supabase.rpc("consume_rate_limit", {
    p_scope: scope,
    p_identifier: identifier,
    p_window_seconds: windowSeconds,
    p_limit: limit,
  });
  if (error) {
    // **알린다.** 예전에는 `console.error` 한 줄뿐이라 아무도 보지 않으면 그대로 묻혔다.
    // 비용 상한(fail-closed)이 확인 불가가 된 것은 급한 일이라 등급을 올린다.
    notifyOps(
      `rate-limit-unavailable:${scope}`,
      failClosed
        ? `비용 상한을 확인할 수 없어 요청을 막고 있습니다 (${scope})`
        : `레이트리밋을 확인할 수 없어 통과시키고 있습니다 (${scope})`,
      { scope, failClosed, reason: error.message },
      failClosed ? "critical" : "warn",
    );
    return !failClosed;
  }

  const allowed = data !== false;
  // 전역 상한에 실제로 닿은 것은 두 가지 중 하나다 — 남용이거나, 예상보다 트래픽이 많거나.
  // 어느 쪽이든 사람이 알아야 한다(그동안 이용자는 429를 받는다).
  if (!allowed && identifierOverride === "global") {
    notifyOps(
      `global-cap-reached:${scope}`,
      `전역 한도에 도달해 요청을 막고 있습니다 (${scope}, 한도 ${limit})`,
      { scope, limit, windowSeconds },
      "critical",
    );
  }
  return allowed;
}

// 공개 POST 엔드포인트의 비용·남용 방어. 이름·사주 입력은 작으므로 본문을 작게 제한하고,
// inputFactors의 키 수와 문자열 총량을 제한해 거대한 정크 페이로드가 OpenAI 프롬프트로
// 흘러 들어가 토큰 비용을 부풀리는 것을 막는다.
export class RequestTooLargeError extends Error {
  constructor(message = "요청 본문이 허용 크기를 초과했습니다.") {
    super(message);
    this.name = "RequestTooLargeError";
  }
}

export class InvalidJsonError extends Error {
  constructor(message = "요청 본문이 올바른 JSON이 아닙니다.") {
    super(message);
    this.name = "InvalidJsonError";
  }
}

// 본문을 바이트 단위로 제한해 읽고 JSON으로 파싱한다(Content-Length 헤더는 위조 가능하므로
// 실제 읽은 바이트를 기준으로 판단).
export async function readJsonBodyLimited(
  request: NextRequest,
  maxBytes: number,
): Promise<unknown> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    throw new RequestTooLargeError();
  }

  const text = await request.text();
  // 멀티바이트 문자를 고려해 바이트 길이로 비교한다.
  if (new TextEncoder().encode(text).length > maxBytes) {
    throw new RequestTooLargeError();
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new InvalidJsonError();
  }
}

type InputFactorsLimit = {
  maxKeys?: number;
  maxStringLength?: number;
  maxTotalStringLength?: number;
};

// inputFactors(자유 형태 레코드)의 규모를 제한한다. 위반 시 사유 문자열을 반환하고,
// 문제가 없으면 null을 반환한다.
export function checkInputFactorsSize(
  value: unknown,
  {
    maxKeys = 60,
    maxStringLength = 3000,
    maxTotalStringLength = 12000,
  }: InputFactorsLimit = {},
): string | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return "입력 형식이 올바르지 않습니다.";
  }
  const record = value as Record<string, unknown>;
  const keys = Object.keys(record);
  if (keys.length > maxKeys) return "입력 항목이 너무 많습니다.";

  let total = 0;
  for (const key of keys) {
    const entry = record[key];
    if (typeof entry === "string") {
      if (entry.length > maxStringLength) return "입력값이 너무 깁니다.";
      total += entry.length;
    } else if (entry && typeof entry === "object") {
      // 중첩 객체(countryProfile 등)의 문자열도 합산한다(1단계 깊이).
      for (const nested of Object.values(entry as Record<string, unknown>)) {
        if (typeof nested === "string") {
          if (nested.length > maxStringLength) return "입력값이 너무 깁니다.";
          total += nested.length;
        }
      }
    }
    if (total > maxTotalStringLength) return "입력값 총량이 너무 큽니다.";
  }
  return null;
}
