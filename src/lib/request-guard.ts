import "server-only";
import { NextRequest } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getDailyVisitorHash } from "@/lib/request-context";

// Supabase 기반 고정 시간창 레이트리밋(서버리스-안전: 카운터가 함수 밖 DB에 있음).
// consume_rate_limit RPC가 아직 없거나 오류면 fail-open(허용)한다 — 레이트리밋이
// 정상 요청을 막는 것보다 낫고, 마이그레이션 적용 전 배포에도 안전하다.
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
    console.error("Rate limit check failed (allowing)", error.message);
    return true;
  }
  return data !== false;
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
