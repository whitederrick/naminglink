import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { checkRateLimit, readJsonBodyLimited, RequestTooLargeError } from "@/lib/request-guard";
import { openSeal, SealError } from "@/lib/result-seal";
import { consumeUnlockTicket } from "@/lib/unlock-ticket";

export const runtime = "nodejs";

/**
 * 후보 하나를 연다(광고 경로).
 *
 * **여기가 잠금 판정의 유일한 자리다.** 예전에는 화면의 `index >= revealedCount`가 판정이라
 * 개발자도구를 열면 그만이었다. 지금은 잠긴 후보의 내용이 브라우저에 암호문으로만 있으므로,
 * 열려면 반드시 이 라우트를 거쳐야 한다.
 *
 * **광고 관문은 표로 건다.** 예전 주석은 "GAM 보상형 SSV를 붙일 자리"라고 적어 두고 기다렸는데,
 * 웹 보상형에는 SSV가 아예 없다 — "Server-side verification is an app only feature and it is
 * unavailable for web use."(support.google.com/admanager/answer/9116812). 오지 않을 것을
 * 기다리는 계획이었다. 지금은 광고를 시작할 때 서버가 표를 끊고(`/api/candidates/unlock-ticket`)
 * 여기서 그 표를 받아 쓴다. 표 한 장에 후보 하나이고, 쓰면 사라지며, 준비 시각 전에는 쓸 수
 * 없다. 사연과 한계는 `lib/unlock-ticket.ts` 머리글에 있다.
 */

const schema = z.object({
  // 봉인문 하나. 후보 본문이 통째로 들어 있어 넉넉하게 잡는다.
  seal: z.string().min(32).max(64 * 1024),
  // 광고 관문 표. 표를 끊을 수 없는 환경에서는 화면이 null을 보내고 서버도 같은 판단으로
  // 통과시킨다(둘 다 `getSupabaseAdminClient()` 유무를 본다).
  ticket: z.string().min(16).max(256).nullish(),
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

  // **표를 먼저 쓴다.** 봉인을 풀고 나서 확인하면, 표가 모자란 요청도 복호화까지는 돌게 되어
  // 남용에 CPU를 그대로 내주는 셈이 된다. 표는 쓰는 순간 사라지므로 이 순서가 곧 "한 장에
  // 후보 하나"를 보장한다.
  const verdict = await consumeUnlockTicket(request, parsed.data.ticket);
  if (verdict !== "ok") {
    // 사유별로 이용자가 할 일이 다르다. 기다릴 일인지, 새로 고칠 일인지를 알려 준다.
    const message =
      verdict === "early"
        ? "광고가 끝나기 전입니다. 잠시 후 다시 시도해 주세요."
        : verdict === "expired"
          ? "광고 시청 확인이 만료되었습니다. 다시 시도해 주세요."
          : // missing·unknown. 배포 직전에 열어 둔 탭은 표를 보내지 않는 옛 화면이라 여기로 온다.
            "페이지를 새로 고친 뒤 다시 시도해 주세요.";
    return NextResponse.json({ ok: false, error: message }, { status: 403 });
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
