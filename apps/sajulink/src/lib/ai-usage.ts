import "server-only";

import { getSupabaseAdminClient } from "@/lib/supabase";

/**
 * 해설 생성의 AI 사용량 기록.
 *
 * ## 왜 필요한가
 *
 * **결제 경로에서 모델을 부르는데 어디에도 남지 않고 있었다**(2026-08-06 발견). 콘솔의 AI
 * 사용량·원가 화면은 `ai_usage_logs`를 읽는데, 사주링크는 한 줄도 쓰지 않아 이 서비스의 원가가
 * **0으로 보였다.** 파는 물건의 원가를 모르면 값을 정할 근거도, 이상 급증을 알아챌 방법도 없다.
 *
 * naminglink의 같은 이름 파일을 그대로 가져왔다. 다른 것은 `app` 하나다 — 세 서비스가 한 표를
 * 쓰므로 그 값이 없으면 콘솔이 비용을 한 덩어리로 보여 준다
 * (`supabase/migrations/20260806100000_ai_usage_app_column.sql`).
 *
 * ## 한 줄만 남긴다
 *
 * 해설은 실패하면 한 번 더 부르므로 한 문서가 최대 두 번 호출한다. 호출마다 줄을 남기면 표가
 * 재시도 행으로 부풀어 "얼마나 팔렸나"와 "얼마나 불렀나"가 어긋나 보인다. 문서 단위로 합산한다.
 *
 * ## 기록 실패가 발급을 막지 않는다
 *
 * 결제가 끝난 뒤의 자리다. 로그를 못 남겼다고 문서를 못 주면 **돈은 받고 물건은 안 나간다.**
 * best-effort로만 처리하고 콘솔에만 남긴다.
 */

type CompletionLike = {
  model?: string;
  id?: string;
  usage?: {
    prompt_tokens?: number;
    completion_tokens?: number;
    total_tokens?: number;
  } | null;
};

export class AiUsageRecorder {
  private promptTokens = 0;
  private completionTokens = 0;
  private totalTokens = 0;
  private calls = 0;
  private model = "";
  private firstRequestId: string | null = null;
  private readonly startedAt = Date.now();

  constructor(private readonly serviceType: string) {}

  record(completion: CompletionLike | null | undefined) {
    if (!completion) return;
    this.calls += 1;
    if (!this.model && completion.model) this.model = completion.model;
    if (!this.firstRequestId && completion.id) this.firstRequestId = completion.id;
    const usage = completion.usage;
    if (!usage) return;
    this.promptTokens += usage.prompt_tokens ?? 0;
    this.completionTokens += usage.completion_tokens ?? 0;
    this.totalTokens += usage.total_tokens ?? 0;
  }

  async flush(status: "SUCCESS" | "ERROR", errorCode?: string) {
    // 한 번도 안 불렀으면 남길 것이 없다(키가 없는 다크 런치, 캐시 적중).
    if (this.calls === 0) return;
    const supabase = getSupabaseAdminClient();
    if (!supabase) return;
    try {
      const { error } = await supabase.from("ai_usage_logs").insert({
        app: "sajulink",
        service_type: this.serviceType,
        model: this.model || "unknown",
        prompt_tokens: this.promptTokens,
        completion_tokens: this.completionTokens,
        total_tokens: this.totalTokens,
        latency_ms: Date.now() - this.startedAt,
        status,
        provider_request_id: this.firstRequestId,
        error_code: errorCode ?? null,
      });
      if (error) throw error;
    } catch (error) {
      console.error("Failed to persist saju AI usage", error);
    }
  }
}
