import { NextRequest, NextResponse } from "next/server";

import { prepare, toReading } from "@/lib/engines/prepare";
import {
  todayFortune,
  todayInSeoul,
  todayPillarOf,
  type TodayFortune,
} from "@/lib/engines/today-fortune";
import { checkRateLimit } from "@/lib/request-guard";
import { sajuInputSchema, toPerson } from "@/lib/saju-input";

/**
 * 오늘의 운세만 낸다. 원국 풀이는 빼고 일진 점수·등급·카테고리·행운 요소만 돌려준다.
 *
 * **`/api/saju`와 나눈 이유**: 이 화면은 **매일 다시 오는 자리**다. 어제 본 사람이 오늘 다시
 * 열면 필요한 것은 오늘 값뿐인데, 원국까지 매번 실어 보내면 응답이 그만큼 커지고 화면도
 * 이미 아는 것을 다시 그린다.
 *
 * 계산 자체는 원국이 있어야 하므로 안에서 함께 돈다 — 다만 **응답에 싣지 않는다.**
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 4 * 1024;

export type TodayResponse = {
  today: TodayFortune;
  /** 오늘 일진이 이 사람에게 어떤 십신인지 화면이 함께 보여 줄 수 있도록 일간만 딸려 보낸다. */
  dayMaster: { character: string; element: string };
};

export async function POST(request: NextRequest) {
  const allowed = await checkRateLimit(request, "saju_today", {
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
  if (!input.success) return jsonError("INVALID_INPUT", 400);

  try {
    const reading = toReading(prepare(toPerson(input.data.me)));
    const fortune = todayFortune(reading, todayPillarOf(todayInSeoul(new Date())));
    const body: TodayResponse = {
      today: fortune,
      dayMaster: {
        character: reading.dayMaster.character,
        element: reading.dayMaster.element,
      },
    };
    return NextResponse.json(body, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return jsonError("UNCALCULABLE_DATE", 422);
  }
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
