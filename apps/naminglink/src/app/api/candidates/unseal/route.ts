import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { checkRateLimit, readJsonBodyLimited, RequestTooLargeError } from "@/lib/request-guard";
import { openSeal, SealError } from "@/lib/result-seal";

export const runtime = "nodejs";

/**
 * 후보 하나를 연다(광고 경로).
 *
 * **여기가 잠금 판정의 유일한 자리다.** 예전에는 화면의 `index >= revealedCount`가 판정이라
 * 개발자도구를 열면 그만이었다. 지금은 잠긴 후보의 내용이 브라우저에 암호문으로만 있으므로,
 * 열려면 반드시 이 라우트를 거쳐야 한다.
 *
 * **아직 광고 시청 증명은 없다.** GAM 보상형 SSV(server-side verification)를 붙일 자리가
 * 바로 여기 한 곳이다. 그때까지는 요청 빈도로만 막는다 — 공짜로 **조용히** 읽히던 것이
 * 요청을 남기고 세어지는 일이 된 것이 이번 단계의 몫이다.
 */

const schema = z.object({
  // 봉인문 하나. 후보 본문이 통째로 들어 있어 넉넉하게 잡는다.
  seal: z.string().min(32).max(64 * 1024),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await readJsonBodyLimited(request, 96 * 1024);
  } catch (guardError) {
    const message =
      guardError instanceof RequestTooLargeError
        ? guardError.message
        : "후보 열기 요청이 올바르지 않습니다.";
    return NextResponse.json({ ok: false, error: message }, { status: 413 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "후보 열기 요청이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  // 광고 이벤트와 같은 한도를 쓴다. 이 둘은 후보 하나당 한 번씩 짝으로 도는 요청이라,
  // 숫자가 어긋나면 한쪽이 먼저 막혀 원인을 찾기 어려워진다.
  const allowed = await checkRateLimit(request, "candidate-unseal", {
    windowSeconds: 3600,
    limit: 60,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  try {
    const { index, candidate } = openSeal(parsed.data.seal);
    return NextResponse.json({ ok: true, opened: [{ index, candidate }] });
  } catch (error) {
    if (error instanceof SealError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("Failed to unseal candidate", error);
    return NextResponse.json(
      { ok: false, error: "후보를 열지 못했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
