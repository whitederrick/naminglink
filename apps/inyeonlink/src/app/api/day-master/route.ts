import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prepare } from "@/lib/engines/prepare";
import { MAX_BIRTH_YEAR, MIN_BIRTH_YEAR } from "@/lib/match-input";
import { checkRateLimit } from "@/lib/request-guard";

// 생년월일 하나를 받아 **그 사람이 어느 유형인지만** 돌려준다. 궁합을 계산하지 않고 점수도
// 내지 않는다 — 인연의 결 화면의 확인기가 "이 사람은 정화(丁火)입니다"까지만 알려주기 위한 것이다.
// 순위 매김은 화면이 한다(이미 손에 있는 목록에서 찾기만 하면 된다).
//
// 다른 계산 라우트와 같은 원칙: DB 쓰기 없음, 입력값 로깅 없음, no-store, GET 없음.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 1024;

// 확인기는 날짜만 받는다. 출생 시각과 출생지는 **일주가 자정 언저리에서만 갈리므로** 받지 않고,
// 대신 화면이 그 한계를 밝힌다. 여기서 다 받으면 궁합 폼과 다를 바가 없어진다.
const inputSchema = z.object({
  calendarType: z.enum(["solar", "lunar"]),
  year: z.number().int().min(MIN_BIRTH_YEAR).max(MAX_BIRTH_YEAR),
  month: z.number().int().min(1).max(12),
  day: z.number().int().min(1).max(31),
  lunarLeapMonth: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const allowed = await checkRateLimit(request, "inyeon_day_master", {
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

  const input = inputSchema.safeParse(parsedBody);
  if (!input.success) return jsonError("INVALID_INPUT", 400);

  try {
    const prepared = prepare({
      gender: null,
      birthHour: null,
      birthMinute: null,
      ...input.data,
    });

    return NextResponse.json(
      {
        stem: prepared.dayMaster.character,
        element: prepared.dayMaster.element,
        yearBranch: prepared.yearBranch,
        animal: prepared.animal,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
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
