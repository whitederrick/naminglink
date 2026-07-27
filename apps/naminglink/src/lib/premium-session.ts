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

/**
 * 결제사에 무관한 결제 확정 정보.
 *
 * 국내는 토스페이먼츠, 해외는 포트원이라 결제사가 둘이다. 결제사별 응답 형태를 이 함수 안에서
 * 갈라 두면 결제사가 늘 때마다 세션 처리까지 갈라진다. 호출부가 각자 여기 모양으로 맞춰 넘긴다.
 */
export type PaidRecord = {
  provider: "PORTONE_V2" | "TOSS_PAYMENTS";
  /** 주문의 provider_payment_id와 대조할 값. */
  providerPaymentId: string;
  amountPaid: number;
  paidAt: string;
  /** 결제사 쪽 거래 식별자(포트원 transactionId · 토스 paymentKey). */
  reference?: string | null;
  storeId?: string | null;
};

/** 포트원 응답을 공통 형태로 옮긴다. */
export function fromPortOnePayment(payment: PaidPayment): PaidRecord {
  return {
    provider: "PORTONE_V2",
    providerPaymentId: payment.id,
    amountPaid: payment.amount.paid,
    paidAt: payment.paidAt,
    reference: payment.transactionId,
    storeId: payment.storeId,
  };
}

export async function markPremiumSessionPaid(
  sessionId: string,
  orderId: string,
  payment: PaidRecord,
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
      payment_amount: payment.amountPaid,
      provider_payment_id: payment.providerPaymentId,
      metadata: {
        provider: payment.provider,
        sessionId,
        transactionId: payment.reference ?? null,
        storeId: payment.storeId ?? null,
        paidAt: payment.paidAt,
      },
      updated_at: now,
    })
    .eq("id", orderId)
    .eq("provider_payment_id", payment.providerPaymentId)
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
