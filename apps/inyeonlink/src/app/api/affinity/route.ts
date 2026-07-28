import { NextRequest, NextResponse } from "next/server";

import { runAffinity } from "@/lib/engines";
import { affinityInputSchema, toPerson } from "@/lib/affinity-input";
import { checkRateLimit } from "@/lib/request-guard";

// 인연의 결 계산 전용. `/api/match`와 같은 규칙을 따른다 — DB 쓰기 없음, 입력값 로깅 없음,
// no-store, GET 없음(생년월일이 쿼리스트링에 실리면 접속 로그에 그대로 남는다).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 4 * 1024;

export async function POST(request: NextRequest) {
  // 사람이 하나라 궁합보다 계산이 가볍지만, 한도는 같은 자리에 둔다. 다른 값을 쓰면 어느 쪽이
  // 느슨한지 기억해야 하고, 느슨한 쪽이 곧 우회로가 된다.
  const allowed = await checkRateLimit(request, "inyeon_affinity", {
    windowSeconds: 600,
    limit: 60,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return jsonError("PAYLOAD_TOO_LARGE", 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(raw);
  } catch {
    return jsonError("INVALID_JSON", 400);
  }

  const input = affinityInputSchema.safeParse(parsedBody);
  if (!input.success) {
    // 어떤 필드가 왜 틀렸는지는 회신하지 않는다 — 사용자 입력을 응답에 되비추지 않기 위해서다.
    return jsonError("INVALID_INPUT", 400);
  }

  try {
    const outcome = runAffinity(toPerson(input.data.me), input.data.seeking);
    return NextResponse.json(outcome, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    // 사주 엔진은 존재하지 않는 음력 날짜 등에 RangeError를 던진다. 메시지가 한국어라
    // 그대로 노출하면 다른 언어 화면에 한국어가 섞이므로, 코드만 주고 문구는 화면이 만든다.
    return jsonError("UNCALCULABLE_DATE", 422);
  }
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
