import "server-only";

import { getSupabaseAdminClient } from "@/lib/supabase";

// 프리미엄 리포트의 AI 사용량 기록.
//
// /api/naming은 호출 뒤 ai_usage_logs에 한 줄을 남기지만, 프리미엄 리포트 생성은 lib 안에서
// OpenAI를 직접 호출해 어디에도 기록되지 않았다. 프리미엄은 후보 수만큼 호출이 늘어나 건당 가장
// 비싼 요청인데도 관리자 대시보드의 AI 사용량 화면에서 통째로 빠져 있었다.
//
// 리포트 하나가 여러 번 호출하므로(종합 1회 + 후보별 N회) 호출마다 한 줄씩 남기면 표가 프리미엄
// 행으로 덮인다. 리포트 단위로 합산해 한 줄만 남긴다.
//
// 무료 경로의 전역 일일 상한(NAMING_AI_GLOBAL_DAILY_LIMIT)에는 넣지 않는다. 그 상한은 IP 로테이션
// 남용에 대한 비용 방어선이고, 결제까지 마친 요청을 그 한도로 막으면 이미 돈을 낸 구매자가 산출물을
// 못 받는다. 프리미엄 비용은 이 로그로 관측한다.

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

  // 기록 실패가 리포트 생성을 망치면 안 되므로 best-effort로만 처리한다.
  async flush(status: "SUCCESS" | "ERROR", errorCode?: string) {
    if (this.calls === 0) return;
    const supabase = getSupabaseAdminClient();
    if (!supabase) return;
    try {
      const { error } = await supabase.from("ai_usage_logs").insert({
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
      console.error("Failed to persist premium AI usage", error);
    }
  }
}
