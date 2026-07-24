import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { classifyPaymentError } from "@/lib/payment-errors";
import { getVerifiedPremiumPayment } from "@/lib/portone";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { checkRateLimit, readJsonBodyLimited, RequestTooLargeError } from "@/lib/request-guard";

export const runtime = "nodejs";

const schema = z.object({
  orderId: z.string().uuid(),
  paymentId: z.string().min(8).max(64),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await readJsonBodyLimited(request, 4 * 1024);
  } catch (guardError) {
    const message =
      guardError instanceof RequestTooLargeError
        ? guardError.message
        : "결제 확인 요청이 올바르지 않습니다.";
    return NextResponse.json({ ok: false, error: message }, { status: 413 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "결제 확인 요청이 올바르지 않습니다." }, { status: 400 });
  }
  const allowed = await checkRateLimit(request, "candidate_unlock_confirm", {
    windowSeconds: 3600,
    limit: 60,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "주문 저장소가 설정되지 않았습니다." }, { status: 503 });
  }

  try {
    const { data: order } = await supabase
      .from("orders")
      .select("id,order_type,payment_status,payment_amount,payment_currency,provider_payment_id,metadata")
      .eq("id", parsed.data.orderId)
      .eq("order_type", "CANDIDATE_UNLOCK")
      .maybeSingle();
    if (!order || String(order.provider_payment_id) !== parsed.data.paymentId) {
      return NextResponse.json({ ok: false, error: "결제 확인 대상 주문을 찾을 수 없습니다." }, { status: 404 });
    }
    if (order.payment_status === "PAID") {
      return NextResponse.json({ ok: true, alreadyPaid: true });
    }

    const payment = await getVerifiedPremiumPayment(
      parsed.data.paymentId,
      Number(order.payment_amount),
      String(order.payment_currency ?? "KRW"),
    );

    // 일괄 공개는 결제 확인 즉시 전달되는 상품이므로 결제·처리 상태를 한 번에 완료로 만든다.
    const now = new Date().toISOString();
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_status: "PAID",
        fulfillment_status: "COMPLETED",
        metadata: {
          ...(order.metadata && typeof order.metadata === "object" ? order.metadata : {}),
          transactionId: payment.transactionId,
          paidAt: payment.paidAt,
        },
        updated_at: now,
      })
      .eq("id", order.id);
    if (updateError) throw updateError;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to confirm candidate unlock payment", error);
    const { status, message } = classifyPaymentError(error);
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
