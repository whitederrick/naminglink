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
import { sortResultCandidates } from "@/lib/candidate-order";
import { sealCandidates } from "@/lib/result-seal";
import { consumeUnlockTicket } from "@/lib/unlock-ticket";
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
  /**
   * 결과 화면에서 힌트를 고쳐 **다시 돌리는** 요청인가.
   *
   * 참이면 광고 관문 표가 필요하다(아래). 처음 만드는 요청과 구분해야 하는 이유는 관문의
   * 자리가 다르기 때문이다 — 입력 화면은 광고 창을 생성과 **나란히** 띄우지만(그래서 이용자가
   * 더 기다리지 않는다) 다시 분석은 같은 화면에서 관문을 지나야 새 결과가 나온다.
   */
  reanalysis: z.boolean().default(false),
  /** 광고 관문 표(`/api/candidates/unlock-ticket`). `reanalysis`일 때만 본다. */
  ticket: z.string().min(16).max(256).nullish(),
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

    /**
     * 다시 분석은 광고 관문 표를 쓴다.
     *
     * **예전에는 관문이 `sessionStorage`의 횟수 하나뿐이었다.** 개발자도구로 그 값을 지우면
     * 화면이 다시 "첫 번째"로 돌아가 광고 없이 계속 돌릴 수 있었다. 이제 화면이 광고를 시작할
     * 때 받아 둔 표를 함께 보내고, 서버가 그 표를 쓴다 — 지워도 매번 시간이 든다.
     *
     * **쿼터보다 먼저 본다.** 관문에서 걸릴 요청이 무료 한도를 깎으면 안 된다. 반대로 표를
     * 쓴 뒤 쿼터에서 막히는 경우는 표를 잃지만, 그때는 오늘 더 쓸 수 없는 상태라 손해가 없다.
     *
     * **여기서 막지 못하는 것은 적어 둔다.** `reanalysis`는 화면이 스스로 붙이는 값이라,
     * 이 API를 직접 부르면서 그 값을 빼면 관문을 지나지 않는다. 그 자리는 처음부터 관문이
     * 아니라 **무료 한도**(IP당 100·전역 30,000)가 맡아 왔고 지금도 그렇다. 이 관문이 막는
     * 것은 "화면을 쓰면서 저장값만 지우는" 길이고, 그 길이 제일 눈에 띄고 제일 쉬웠다.
     */
    if (parsed.data.reanalysis) {
      const verdict = await consumeUnlockTicket(request, parsed.data.ticket);
      if (verdict !== "ok") {
        const message =
          verdict === "early"
            ? "광고가 끝나기 전입니다. 잠시 후 다시 시도해 주세요."
            : verdict === "expired"
              ? "광고 시청 확인이 만료되었습니다. 다시 시도해 주세요."
              : "페이지를 새로 고친 뒤 다시 시도해 주세요.";
        return NextResponse.json({ ok: false, error: message }, { status: 403 });
      }
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
        // 기본 100. **IP당**이지 사람당이 아니다 — 식별자가 HMAC(날짜:IP)라 CGNAT을 쓰는
        // 모바일 통신사·회사망 뒤의 여럿이 이 한도를 나눠 쓴다. 20이던 값을 올린 근거는:
        // 결과는 광고를 봐야만 열리고(1광고 1결과), 실측 원가는 생성 1건에 약 1.1원인데
        // 광고 수익은 그 4~30배다. 즉 정상 이용자를 막는 것은 수익을 막는 것이다.
        // 비용의 실제 상한은 아래 전역 한도가 맡는다.
        p_limit: Number(process.env.FREE_DAILY_LIMIT ?? 100),
      });
      if (quotaError) console.error("Failed to check daily quota", quotaError);
      return allowed !== false;
    };

    if (!isHanja) {
      // 개별 IP 한도(일 20회)는 IP 로테이션으로 우회할 수 있으므로, OpenAI 비용의 최종
      // 방어선으로 서비스 전체 AI 호출량에 일일 상한을 둔다. RPC 부재·오류 시 fail-open.
      const underGlobalCap = await checkRateLimit(request, "naming-ai-global", {
        windowSeconds: 24 * 60 * 60,
        // 기본 30,000. **비용 상한이 아니라 "이 이상이면 사람이 아니다"는 감지선**이다.
        // 막아야 할 것은 정상 이용자가 아니라 화면을 거치지 않고 이 API만 두드리는 트래픽이다
        // (화면으로 온 요청은 광고를 보고 오므로 건마다 흑자다).
        // 광고 수익이 0이라 쳐도 30,000건의 AI 원가는 하루 약 3.3만원이다. 2,000이던 값은
        // 월 6.5만원을 지키려고 서비스 전체를 세우는 값이었고, 그 근거는 어디에도 없었다.
        // 창은 UTC 자정 기준 고정 24시간이라 한국시간 오전 9시에 리셋된다(슬라이딩 아님).
        limit: Number(process.env.NAMING_AI_GLOBAL_DAILY_LIMIT ?? 30000),
        identifier: "global",
        // **여기만 fail-closed다.** 이 상한은 비용이 새는 것을 막는 마지막 방어선이라,
        // 확인할 수 없는 채로 통과시키면 상한이 통째로 사라진다(그동안 남는 것은 로그 한 줄뿐이라
        // 아무도 보지 않으면 청구서로 알게 된다). 아래 IP당 한도는 그대로 fail-open이다 —
        // 한 사람이 몇 번 더 쓰는 손해보다 정상 이용자를 막는 손해가 크기 때문이다.
        failClosed: true,
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
    // 순서는 여기서 한 번 정한다. 예전에는 화면이 정렬해서 저장본과 화면의 1순위가 서로
    // 다를 수 있었다(저장 목록 제목이 `candidates[0]`에서 나온다).
    const clientResult = sortResultCandidates(
      isHanja ? stripPaidHanjaDetail(generation.result) : generation.result,
    );

    // 무료 후보 하나만 평문으로 두고 나머지는 봉인한다. 예전에는 후보 전부가 평문으로 나가고
    // 잠금이 화면에만 있어(`index >= revealedCount`), 개발자도구를 열면 광고도 결제도 없이
    // 다 읽혔다. 여는 판정은 이제 /api/candidates/unseal 한 곳에만 있다.
    //
    // **저장에는 봉인하지 않은 것을 쓴다.** 봉인문에는 유효기간이 있어 그대로 저장하면 본인
    // 기록이 나중에 열리지 않는다. 다시 열람할 때 /api/account/results/[id]가 같은 규칙으로
    // 다시 봉인한다.
    const sealedResult = sealCandidates(clientResult);

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
      result: sealedResult,
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
