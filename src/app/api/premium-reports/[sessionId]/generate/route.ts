import { NextResponse } from "next/server";
import { z } from "zod";

import { buildPremiumHanjaTestResult } from "@/lib/premium-hanja-analysis";
import { getHanjaProduct, type HanjaProductCode } from "@/lib/hanja-products";
import { getAuthorizedPremiumSession } from "@/lib/premium-session";

export const runtime = "nodejs";
export const maxDuration = 60;

const bodySchema = z.object({ accessToken: z.string().min(32).max(256) });
type Context = { params: Promise<{ sessionId: string }> };

export async function POST(request: Request, context: Context) {
  const { sessionId } = await context.params;
  const id = z.string().uuid().safeParse(sessionId);
  const body = bodySchema.safeParse(await request.json().catch(() => null));
  if (!id.success || !body.success) {
    return NextResponse.json({ ok: false, error: "상세 분석 생성 요청이 올바르지 않습니다." }, { status: 400 });
  }
  try {
    const { supabase, session } = await getAuthorizedPremiumSession(id.data, body.data.accessToken);
    if (session.status === "READY") {
      return NextResponse.json({ ok: true, status: "READY", premium: session.interpretation_result, expiresAt: session.expires_at });
    }
    if (session.status === "GENERATING") {
      return NextResponse.json({ ok: true, status: "GENERATING" }, { status: 202 });
    }
    if (session.status !== "PAID") {
      return NextResponse.json({ ok: false, error: "결제 완료 후 상세 분석을 생성할 수 있습니다." }, { status: 409 });
    }

    const now = new Date().toISOString();
    const { data: claimed } = await supabase
      .from("premium_analysis_sessions")
      .update({ status: "GENERATING", failure_code: null, updated_at: now })
      .eq("id", session.id)
      .eq("status", "PAID")
      .select("id")
      .maybeSingle();
    if (!claimed) return NextResponse.json({ ok: true, status: "GENERATING" }, { status: 202 });

    try {
      const payload = session.input_payload as Record<string, unknown>;
      const inputFactors = payload.inputFactors as Record<string, unknown>;
      const product = getHanjaProduct(session.product_code as HanjaProductCode);
      if (!product.includesSaju && !product.includesPdf) {
        const premium = {
          entitlement: {
            productCode: product.code,
            candidateLimit: product.candidateLimit,
            includesSaju: product.includesSaju,
            includesPdf: product.includesPdf,
          },
        };
        const readyAt = new Date().toISOString();
        const { error } = await supabase
          .from("premium_analysis_sessions")
          .update({
            status: "READY",
            interpretation_result: premium,
            calculation_engine: "official-hanja-rules-v1",
            calculation_engine_version: "1",
            ready_at: readyAt,
            updated_at: readyAt,
          })
          .eq("id", session.id);
        if (error) throw error;
        return NextResponse.json({ ok: true, status: "READY", premium, expiresAt: session.expires_at });
      }
      const premium = await buildPremiumHanjaTestResult(inputFactors, payload.freeResult, {
        candidateLimit: product.candidateLimit,
        includeSaju: product.includesSaju,
      });
      const readyAt = new Date().toISOString();
      const { error } = await supabase
        .from("premium_analysis_sessions")
        .update({
          status: "READY",
          calculation_result: premium.reportData.saju,
          interpretation_result: premium,
          calculation_engine: String((premium.reportData.saju as { engine?: { name?: string } }).engine?.name ?? ""),
          calculation_engine_version: String((premium.reportData.saju as { engine?: { version?: string } }).engine?.version ?? ""),
          ready_at: readyAt,
          updated_at: readyAt,
        })
        .eq("id", session.id);
      if (error) throw error;
      return NextResponse.json({ ok: true, status: "READY", premium, expiresAt: session.expires_at });
    } catch (error) {
      await supabase
        .from("premium_analysis_sessions")
        .update({ status: "FAILED", failure_code: "ANALYSIS_GENERATION_FAILED", updated_at: new Date().toISOString() })
        .eq("id", session.id);
      throw error;
    }
  } catch (error) {
    console.error("Premium analysis generation failed", error);
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "상세 분석 생성에 실패했습니다." }, { status: 500 });
  }
}
