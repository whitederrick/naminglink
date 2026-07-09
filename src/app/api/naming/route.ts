import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateNamingResult } from "@/lib/openai";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const requestSchema = z.object({
  userId: z.string().uuid().optional(),
  serviceType: z.enum([
    "BABY_HANJA",
    "KOREAN_FOR_FOREIGNER",
    "FOREIGN_FOR_KOREAN",
  ]),
  inputFactors: z.record(z.string(), z.unknown()),
});

const rateLimitStore = new Map<string, { day: string; count: number }>();

function getDayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function checkRateLimit(ip: string) {
  const limit = Number(process.env.FREE_DAILY_LIMIT ?? 20);
  const day = getDayKey();
  const current = rateLimitStore.get(ip);

  if (!current || current.day !== day) {
    rateLimitStore.set(ip, { day, count: 1 });
    return true;
  }

  if (current.count >= limit) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "요청 형식이 올바르지 않습니다.",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const ip = getIp(request);

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          ok: false,
          error: "오늘 무료 생성 횟수를 모두 사용했습니다.",
        },
        { status: 429 },
      );
    }

    const generated = await generateNamingResult(
      parsed.data.serviceType,
      parsed.data.inputFactors,
    );

    const supabase = getSupabaseAdminClient();
    let logId: string | null = null;
    let persistence: "saved" | "skipped" | "failed" = "skipped";

    if (supabase) {
      const { data, error } = await supabase
        .from("naming_logs")
        .insert({
          user_id: parsed.data.userId ?? null,
          service_type: parsed.data.serviceType,
          input_factors: parsed.data.inputFactors,
          generated_names: generated,
        })
        .select("id")
        .single();

      if (error) {
        console.error("Failed to persist naming log", error);
        persistence = "failed";
      } else {
        logId = data.id as string;
        persistence = "saved";
      }
    }

    return NextResponse.json({
      ok: true,
      logId,
      persistence,
      result: generated,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error: "작명 생성 중 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}
