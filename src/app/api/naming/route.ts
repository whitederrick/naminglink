import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateNamingResult } from "@/lib/openai";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getDailyVisitorHash } from "@/lib/request-context";
import { validateHanjaMeaningInput } from "@/lib/naming-validation";

export const runtime = "nodejs";

const requestSchema = z.object({
  serviceType: z.enum([
    "HANJA_MEANING_MATCH",
    "KOREAN_TO_GLOBAL",
    "GLOBAL_TO_KOREAN",
  ]),
  inputFactors: z.record(z.string(), z.unknown()),
});

export async function POST(request: NextRequest) {
  const startedAt = Date.now();
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

    if (parsed.data.serviceType === "HANJA_MEANING_MATCH") {
      const fieldErrors = validateHanjaMeaningInput(parsed.data.inputFactors);

      if (Object.keys(fieldErrors).length > 0) {
        return NextResponse.json(
          {
            ok: false,
            error: "정확한 분석을 위해 입력 형식을 확인해 주세요.",
            fieldErrors,
          },
          { status: 400 },
        );
      }
    }

    const supabase = getSupabaseAdminClient();
    const visitorHash = getDailyVisitorHash(request);
    if (supabase && visitorHash) {
      const { data: allowed, error: quotaError } = await supabase.rpc("consume_daily_quota", {
        p_visitor_hash: visitorHash,
        p_limit: Number(process.env.FREE_DAILY_LIMIT ?? 20),
      });
      if (quotaError) console.error("Failed to check daily quota", quotaError);
      if (allowed === false) {
      return NextResponse.json(
        {
          ok: false,
          error: "오늘 무료 생성 횟수를 모두 사용했습니다.",
        },
        { status: 429 },
      );
      }
    }

    const generation = await generateNamingResult(
      parsed.data.serviceType,
      parsed.data.inputFactors,
    );
    let logId: string | null = null;
    let persistence: "saved" | "skipped" | "failed" = "skipped";

    if (supabase) {
      const { data, error } = await supabase
        .from("naming_logs")
        .insert({
          user_id: null,
          service_type: parsed.data.serviceType,
          input_factors: parsed.data.inputFactors,
          generated_names: generation.result,
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

      const { error: usageError } = await supabase.from("ai_usage_logs").insert({
        naming_log_id: logId,
        user_id: null,
        service_type: parsed.data.serviceType,
        model: generation.usage.model,
        prompt_tokens: generation.usage.promptTokens,
        completion_tokens: generation.usage.completionTokens,
        total_tokens: generation.usage.totalTokens,
        latency_ms: Date.now() - startedAt,
        status: "SUCCESS",
        provider_request_id: generation.usage.providerRequestId,
      });
      if (usageError) console.error("Failed to persist AI usage", usageError);
    }

    return NextResponse.json({
      ok: true,
      logId,
      persistence,
      result: generation.result,
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
