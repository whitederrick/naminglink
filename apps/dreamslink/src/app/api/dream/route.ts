import { NextRequest, NextResponse } from "next/server";

import { DICT_VERSION } from "@/lib/dream-symbols";
import { dreamInputSchema } from "@/lib/dream-input";
import { matchDream } from "@/lib/engines/dream-match";
import { checkRateLimit } from "@/lib/request-guard";

// 무료 해몽. **모델을 부르지 않는다.**
//
// 꿈은 매일 꾸는 것이라 이 라우트가 서비스에서 가장 많이 불린다. 조회마다 모델을 때리면
// 비용·지연·광고 페이지 속도가 함께 나빠진다 — 이 저장소가 정한 「AI는 결제한 경로에서만」이
// 여기서 가장 크게 걸린다. 해석 문장은 유료 상품에서만 붙고, 무료는 사전이 고른 상징 그대로다.
//
// **입력을 저장하지 않는다.** 꿈 이야기는 이 서비스가 받는 값 중 가장 사적인 것이다. 이 요청은
// 계산만 하고 아무 표에도 쓰지 않는다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  // 무인증으로 아무나 부를 수 있는 자리다. 횟수를 센다.
  const allowed = await checkRateLimit(request, "dream_read", {
    windowSeconds: 3600,
    limit: 120,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const raw = await request.text();
  // 꿈 이야기는 1,000자까지 받는다(`DREAM_TEXT_MAX`). 여유를 두되 본문 자체를 먼저 막는다.
  if (raw.length > 8 * 1024) {
    return NextResponse.json({ ok: false, error: "PAYLOAD_TOO_LARGE" }, { status: 413 });
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const parsed = dreamInputSchema.safeParse(parsedBody);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "INVALID_INPUT" }, { status: 400 });
  }

  const outcome = matchDream(parsed.data.text);

  return NextResponse.json(
    {
      ok: true,
      dictVersion: DICT_VERSION,
      outcome,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
