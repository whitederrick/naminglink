import { NextRequest, NextResponse } from "next/server";

import { checkRateLimit } from "@/lib/request-guard";
import { issueUnlockTicket } from "@/lib/unlock-ticket";

export const runtime = "nodejs";

/**
 * 후보 열기 관문 표를 끊는다.
 *
 * **광고를 시작할 때 부른다.** 여기서부터 서버가 시간을 재기 시작하므로, 기다림이 광고와
 * 겹쳐 이용자가 더 기다리는 일이 없다. 후보를 여는 순간에 부르면 광고를 본 뒤 또 5초를
 * 세우게 된다.
 *
 * 왜 이런 것이 필요한지는 `lib/unlock-ticket.ts` 머리글에 있다(요약: 웹 보상형에는 서버
 * 검증이 없어 "광고를 봤다"를 증명받을 길이 없다. 그래서 시간을 서버가 잰다).
 *
 * 본문을 받지 않는다. 결과도 후보 자리도 표에 묶지 않기 때문이다 — 표 한 장은 "후보 하나를
 * 열 수 있다"까지만 뜻한다. 덕분에 화면은 봉인문을 손에 넣기 전에도 표를 받을 수 있고,
 * 서버에는 어느 결과의 어느 후보인지가 남지 않는다.
 */
export async function POST(request: NextRequest) {
  // 여는 쪽과 같은 한도를 쓴다. 이 둘은 후보 하나당 한 번씩 짝으로 도는 요청이라, 숫자가
  // 어긋나면 한쪽이 먼저 막혀 원인을 찾기 어려워진다.
  const allowed = await checkRateLimit(request, "candidate-unlock-ticket", {
    windowSeconds: 3600,
    limit: 60,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const { ticket, readyInMs } = await issueUnlockTicket(request);
  return NextResponse.json({ ok: true, ticket, readyInMs });
}
