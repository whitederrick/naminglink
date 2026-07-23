import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getVerifiedPremiumPayment } from "@/lib/portone";
import { checkRateLimit, readJsonBodyLimited, RequestTooLargeError } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

// 도장 주문 결제 확인. 실물 상품이므로 결제만 PAID로 확정하고 fulfillment는 PENDING 유지
// (관리자가 제작·발송 처리). 멱등: 이미 PAID면 그대로 성공을 돌려준다.
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
  const allowed = await checkRateLimit(request, "goods_confirm", {
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
      .eq("order_type", "STAMP_DELIVERY")
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

    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_status: "PAID",
        metadata: {
          ...(order.metadata && typeof order.metadata === "object" ? order.metadata : {}),
          transactionId: payment.transactionId,
          paidAt: payment.paidAt,
        },
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id);
    if (updateError) throw updateError;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to confirm stamp payment", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "결제 확인에 실패했습니다." },
      { status: 500 },
    );
  }
}
