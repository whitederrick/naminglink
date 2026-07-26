import { NextResponse } from "next/server";

import { runMatch } from "@/lib/engines";
import { matchInputSchema, toPerson } from "@/lib/match-input";

// 계산 전용 엔드포인트. 요청 본문은 계산이 끝나면 사라지고 **어디에도 저장하지 않는다**.
// - DB 쓰기 없음
// - 입력값 로깅 없음(실패해도 사용자 값을 로그로 남기지 않는다)
// - no-store로 중간 캐시에도 남기지 않는다
//
// 생년월일이 쿼리스트링에 실리면 접속 로그에 그대로 남기 때문에 GET을 두지 않고 POST만 받는다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 4 * 1024;

export async function POST(request: Request) {
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

  const input = matchInputSchema.safeParse(parsedBody);
  if (!input.success) {
    // 어떤 필드가 왜 틀렸는지는 회신하지 않는다 — 사용자 입력을 응답에 되비추지 않기 위해서다.
    return jsonError("INVALID_INPUT", 400);
  }

  try {
    const outcome = runMatch(toPerson(input.data.a), toPerson(input.data.b));
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
