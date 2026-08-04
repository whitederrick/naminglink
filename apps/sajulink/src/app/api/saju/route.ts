import { NextRequest, NextResponse } from "next/server";

import { prepare, toReading } from "@/lib/engines/prepare";
import { todayFortune, todayInSeoul, todayPillarOf } from "@/lib/engines/today-fortune";
import { publicSajuOutcome } from "@/lib/public-outcome";
import { checkRateLimit } from "@/lib/request-guard";
import { sajuInputSchema, toPerson } from "@/lib/saju-input";

// 사주 원국 + 오늘의 운세를 계산한다. 요청 본문은 계산이 끝나면 사라지고 **어디에도 저장하지
// 않는다**(인연링크 `/api/match`와 같은 규칙).
//   - DB 쓰기 없음
//   - 입력값 로깅 없음(실패해도 사용자 값을 로그로 남기지 않는다)
//   - no-store로 중간 캐시에도 남기지 않는다
//
// 생년월일이 쿼리스트링에 실리면 접속 로그에 그대로 남기 때문에 GET을 두지 않고 POST만 받는다.
//
// **해설(AI)은 여기서 하지 않는다.** 이 응답은 규칙 엔진의 결정론 결과뿐이다. 같은 사람·같은
// 날이면 언제나 같은 값이라 캐시할 수 있고, 화면이 먼저 뜬 뒤 해설이 따라붙어도 숫자가
// 흔들리지 않는다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 4 * 1024;

export async function POST(request: NextRequest) {
  // 규칙 기반이라 AI 비용은 없지만 서버리스 실행 시간은 든다. 사람이 쓰기에는 넉넉하고
  // 자동화로 긁기에는 좁은 선으로 잡는다(인연링크와 같은 값).
  const allowed = await checkRateLimit(request, "saju_reading", {
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
  if (raw.length > MAX_BODY_BYTES) return jsonError("PAYLOAD_TOO_LARGE", 413);

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(raw);
  } catch {
    return jsonError("INVALID_JSON", 400);
  }

  const input = sajuInputSchema.safeParse(parsedBody);
  // 어떤 필드가 왜 틀렸는지는 회신하지 않는다 — 사용자 입력을 응답에 되비추지 않기 위해서다.
  if (!input.success) return jsonError("INVALID_INPUT", 400);

  try {
    const reading = toReading(prepare(toPerson(input.data.me)));
    // **날짜는 서버가 서울 자정 기준으로 정한다.** 브라우저가 보낸 날짜를 믿으면 어제 운세를
    // 오늘로 받아 갈 수 있고, 서버 시간대를 쓰면 배포 지역에 따라 결과가 갈린다.
    const fortune = todayFortune(reading, todayPillarOf(todayInSeoul(new Date())));

    // **엔진 결과를 통째로 내보내지 않는다.** 유료 리포트에만 싣는 값이 함께 나가면 파는
    // 내용이 결제 없이 브라우저에 도착한다(인연링크에서 실제로 그랬다).
    return NextResponse.json(publicSajuOutcome(reading, fortune), {
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
