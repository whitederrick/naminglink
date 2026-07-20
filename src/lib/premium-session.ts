import "server-only";

import type { PaidPayment } from "@portone/server-sdk/payment";

import {
  premiumReportExpiresAt,
  verifyPremiumReportToken,
} from "@/lib/premium-reports";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function getAuthorizedPremiumSession(sessionId: string, accessToken: string) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("리포트 저장소 연결이 설정되지 않았습니다.");
  const { data: session, error } = await supabase
    .from("premium_analysis_sessions")
    .select("*")
    .eq("id", sessionId)
    .maybeSingle();
  if (error || !session) throw new Error("프리미엄 분석 주문을 찾을 수 없습니다.");
  if (!verifyPremiumReportToken(accessToken, String(session.access_token_hash))) {
    throw new Error("프리미엄 분석 접근 정보가 올바르지 않습니다.");
  }
  return { supabase, session };
}

export async function markPremiumSessionPaid(
  sessionId: string,
  orderId: string,
  payment: PaidPayment,
) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("리포트 저장소 연결이 설정되지 않았습니다.");
  const paidAt = new Date(payment.paidAt);
  const expiresAt = premiumReportExpiresAt(paidAt);
  const now = new Date().toISOString();

  const { data: updatedOrders, error: orderError } = await supabase
    .from("orders")
    .update({
      payment_status: "PAID",
      payment_amount: payment.amount.paid,
      provider_payment_id: payment.id,
      metadata: {
        provider: "PORTONE_V2",
        sessionId,
        transactionId: payment.transactionId,
        storeId: payment.storeId,
        paidAt: payment.paidAt,
      },
      updated_at: now,
    })
    .eq("id", orderId)
    .eq("provider_payment_id", payment.id)
    .select("id");
  if (orderError) throw orderError;
  if (!updatedOrders?.length) {
    throw new Error("결제 정보가 이 주문과 일치하지 않습니다.");
  }

  const { error: sessionError } = await supabase
    .from("premium_analysis_sessions")
    .update({
      status: "PAID",
      paid_at: paidAt.toISOString(),
      expires_at: expiresAt.toISOString(),
      failure_code: null,
      updated_at: now,
    })
    .eq("id", sessionId)
    .in("status", ["PENDING_PAYMENT", "PAID", "FAILED"]);
  if (sessionError) throw sessionError;
  return { paidAt: paidAt.toISOString(), expiresAt: expiresAt.toISOString() };
}
