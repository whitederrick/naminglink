import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { AIServiceUnavailableError, generateNamingResult, NamingInputConstraintError } from "@/lib/openai";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getDailyVisitorHash } from "@/lib/request-context";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { validateHanjaMeaningInput } from "@/lib/naming-validation";
import {
  checkInputFactorsSize,
  checkRateLimit,
  readJsonBodyLimited,
  RequestTooLargeError,
} from "@/lib/request-guard";
import { getAuthenticatedUser } from "@/lib/user-auth";

export const runtime = "nodejs";

const requestSchema = z.object({
  serviceType: z.enum([
    "HANJA_MEANING_MATCH",
    "KOREAN_TO_GLOBAL",
    "GLOBAL_TO_KOREAN",
  ]),
  inputFactors: z.record(z.string(), z.unknown()),
  saveResult: z.boolean().default(false),
});

// 유료 상세 상품에만 제공하는 후보별 필드. 무료 응답에서 제거한다.
const PAID_HANJA_DETAIL_FIELDS = ["story", "practical_analysis"] as const;

function stripPaidHanjaDetail(result: unknown) {
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    return result;
  }
  const record = result as Record<string, unknown>;
  if (!Array.isArray(record.candidates)) return result;

  return {
    ...record,
    candidates: record.candidates.map((candidate) => {
      if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
        return candidate;
      }
      const next = { ...(candidate as Record<string, unknown>) };
      for (const field of PAID_HANJA_DETAIL_FIELDS) delete next[field];
      return next;
    }),
  };
}

export async function POST(request: NextRequest) {
  const startedAt = Date.now();
  // AI 서비스는 생성 전에 무료 쿼터를 차감하므로, 생성이 실패하면 catch에서 되돌려
  // 사용자가 결과 없이 쿼터만 잃지 않게 한다. 생성 성공 시 null로 되돌림을 해제한다.
  let refundFreeQuota: (() => Promise<void>) | null = null;
  try {
    let body: unknown;
    try {
      body = await readJsonBodyLimited(request, 16 * 1024);
    } catch (guardError) {
      const message =
        guardError instanceof RequestTooLargeError
          ? guardError.message
          : "요청 본문이 올바르지 않습니다.";
      return NextResponse.json({ ok: false, error: message }, { status: 413 });
    }

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

    // 거대한/과다한 inputFactors가 OpenAI 프롬프트로 흘러 들어가는 것을 막는다(비용 방어).
    const sizeError = checkInputFactorsSize(parsed.data.inputFactors);
    if (sizeError) {
      return NextResponse.json({ ok: false, error: sizeError }, { status: 400 });
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

    // 외국인 대상 서비스의 결과 언어가 "auto"(기본값)이거나 미지원 코드면, 하드코딩 영어가 아니라
    // 접속 환경(IP 국가·Accept-Language)으로 감지한 요청 로케일로 확정한다. 사용자가 결과 언어를
    // 직접 고른 경우에는 그 선택을 존중한다.
    const inputFactors = { ...parsed.data.inputFactors };
    if (parsed.data.serviceType === "GLOBAL_TO_KOREAN") {
      const requested = inputFactors.outputLanguage;
      inputFactors.outputLanguage = isLocale(
        typeof requested === "string" ? requested : undefined,
      )
        ? requested
        : await getRequestLocale();
    }

    const supabase = getSupabaseAdminClient();
    const visitorHash = getDailyVisitorHash(request);
    const enforceFreeQuota = process.env.NODE_ENV === "production";
    // HANJA는 규칙 엔진이라 OpenAI 비용이 없다 → 생성 성공 후 차감해 실패(돌림자 제약 400 등)에는 소모하지 않는다.
    // AI 서비스는 OpenAI 비용이 있으므로 생성 전에 차감해 비용 남용을 막는다.
    const isHanja = parsed.data.serviceType === "HANJA_MEANING_MATCH";
    const quotaExhaustedResponse = NextResponse.json(
      {
        ok: false,
        error:
          "오늘의 무료 후보 조회 횟수를 모두 사용했습니다. 이미 결제한 상세 리포트는 해당 결과 화면에서 계속 확인하거나 다시 다운로드할 수 있습니다.",
      },
      { status: 429 },
    );
    const consumeFreeQuota = async () => {
      if (!enforceFreeQuota || !supabase || !visitorHash) return true;
      const { data: allowed, error: quotaError } = await supabase.rpc("consume_daily_quota", {
        p_visitor_hash: visitorHash,
        p_limit: Number(process.env.FREE_DAILY_LIMIT ?? 20),
      });
      if (quotaError) console.error("Failed to check daily quota", quotaError);
      return allowed !== false;
    };

    if (!isHanja) {
      // 개별 IP 한도(일 20회)는 IP 로테이션으로 우회할 수 있으므로, OpenAI 비용의 최종
      // 방어선으로 서비스 전체 AI 호출량에 일일 상한을 둔다. RPC 부재·오류 시 fail-open.
      const underGlobalCap = await checkRateLimit(request, "naming-ai-global", {
        windowSeconds: 24 * 60 * 60,
        limit: Number(process.env.NAMING_AI_GLOBAL_DAILY_LIMIT ?? 2000),
        identifier: "global",
      });
      if (!underGlobalCap) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "지금은 무료 분석 요청이 많아 잠시 이용이 어렵습니다. 잠시 후 다시 시도해 주세요.",
          },
          { status: 429 },
        );
      }

      if (!(await consumeFreeQuota())) {
        return quotaExhaustedResponse;
      }
      if (enforceFreeQuota && supabase && visitorHash) {
        refundFreeQuota = async () => {
          const { error: refundError } = await supabase.rpc("release_daily_quota", {
            p_visitor_hash: visitorHash,
          });
          if (refundError) console.error("Failed to refund daily quota", refundError);
        };
      }
    }

    const authenticatedUser = parsed.data.saveResult
      ? await getAuthenticatedUser(request)
      : null;

    if (parsed.data.saveResult && !authenticatedUser) {
      return NextResponse.json(
        {
          ok: false,
          error: "분석 결과를 저장하려면 다시 로그인해 주세요.",
        },
        { status: 401 },
      );
    }

    const generation = await generateNamingResult(
      parsed.data.serviceType,
      inputFactors,
    );
    refundFreeQuota = null;

    // 한자 상세 설명(story·practical_analysis)은 유료 상품(2,900원~)에 판매하는 내용이다.
    // 무료 응답에는 규칙 엔진이 만든 이 필드가 그대로 담겨 결제 없이 열람될 수 있으므로,
    // 클라이언트로 내보내기 전과 저장 전에 서버에서 제거한다. 유료 리포트는 결제 후 서버에서
    // 다시 생성하므로(‑ /api/premium-reports/order가 재생성) 상품 품질에는 영향이 없다.
    const clientResult = isHanja
      ? stripPaidHanjaDetail(generation.result)
      : generation.result;

    // HANJA는 생성이 성공한 뒤에만 무료 한도를 차감한다.
    if (isHanja && !(await consumeFreeQuota())) {
      return quotaExhaustedResponse;
    }
    let logId: string | null = null;
    let persistence: "saved" | "skipped" | "failed" = "skipped";

    if (supabase && authenticatedUser && parsed.data.saveResult) {
      const { data, error } = await supabase
        .from("naming_logs")
        .insert({
          user_id: authenticatedUser.id,
          service_type: parsed.data.serviceType,
          input_factors: inputFactors,
          generated_names: clientResult,
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

    if (supabase) {
      const { error: usageError } = await supabase.from("ai_usage_logs").insert({
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
      result: clientResult,
      analysisMeta: generation.analysisMeta,
    });
  } catch (error) {
    console.error(error);
    await refundFreeQuota?.();
    if (error instanceof NamingInputConstraintError) {
      return NextResponse.json(
        {
          ok: false,
          error: error.message,
          fieldErrors: error.fieldErrors,
        },
        { status: 400 },
      );
    }

    if (error instanceof AIServiceUnavailableError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 503 });
    }


    return NextResponse.json(
      {
        ok: false,
        error: "작명 생성 중 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}
