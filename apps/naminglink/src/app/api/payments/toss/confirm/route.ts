import { NextRequest, NextResponse } from "next/server";

import { markPremiumSessionPaid } from "@/lib/premium-session";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { confirmTossPayment, tossPaymentAllowed } from "@/lib/toss";

// 토스 결제창이 돌아오는 자리. **여기서 승인해야 비로소 결제가 된다.**
//
// 상품마다 결제 후 처리가 다르므로 주문 종류로 가른다 — 포트원 웹훅이 하는 것과 같은 규칙이다.
//   STAMP_DELIVERY    실물이라 결제만 확정하고 제작·발송은 관리자가 한다(fulfillment PENDING)
//   CANDIDATE_UNLOCK  세션이 없는 즉시 전달 상품이라 처리까지 완료로 만든다
//   그 외              분석 세션을 PAID로 만든다(프리미엄 리포트)
//
// 돌아갈 자리는 주문 metadata의 returnPath를 쓴다. 상품마다 결제 후 보여 줄 화면이 달라
// (결과 화면·도장 폼) 주문을 만들 때 정해 둔다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function backTo(request: NextRequest, path: string, params: Record<string, string>) {
  // 열린 리디렉트를 막는다. 우리 서비스 안의 경로만 허용한다.
  const safePath = path.startsWith("/") && !path.startsWith("//") ? path : "/";
  const url = new URL(safePath, request.nextUrl.origin);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  return NextResponse.redirect(url, { status: 303 });
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const paymentKey = query.get("paymentKey") ?? "";
  const orderId = query.get("orderId") ?? "";

  if (!paymentKey || !UUID.test(orderId)) {
    return backTo(request, "/", { payment: "invalid" });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) return backTo(request, "/", { payment: "failed" });

  let returnPath = "/";

  try {
    // service로 건다 — orders 표를 형제 서비스들과 공유한다(sajulink/inyeonlink confirm
    // 라우트와 같은 이유). 없으면 다른 서비스가 우연히 같은 이름의 order_type을 쓰는 순간
    // 그 서비스의 주문도 이 경로로 승인될 수 있다.
    const { data: order } = await supabase
      .from("orders")
      .select("id,order_type,payment_status,payment_amount,metadata")
      .eq("id", orderId)
      .eq("service", "naminglink")
      .maybeSingle();

    if (!order) return backTo(request, "/", { payment: "notfound" });

    const metadata =
      order.metadata && typeof order.metadata === "object" && !Array.isArray(order.metadata)
        ? (order.metadata as Record<string, unknown>)
        : {};
    if (typeof metadata.returnPath === "string") returnPath = metadata.returnPath;

    // 이미 승인된 주문이면 그대로 통과시킨다(새로고침·뒤로가기 대비).
    if (order.payment_status === "PAID") {
      return backTo(request, returnPath, { payment: "paid", orderId });
    }

    /**
     * **테스트 키로는 승인하지 않는다** (2026-08-19). 승인 API를 부르는 순간 결제가 완성되고
     * 상품이 나간다 — 심사 기간에 테스트 키를 운영에 넣어 두면 아무나 돈 없이 받아 갈 수 있는
     * 자리다. 허용 시각(`TOSS_ALLOW_TEST_KEY_UNTIL`)이 지나면 저절로 닫힌다 → `lib/toss.ts`
     *
     * 승인하지 않은 결제는 10분 뒤 만료되므로 돈도 상품도 움직이지 않는다.
     */
    if (!tossPaymentAllowed()) {
      return backTo(request, returnPath, { payment: "failed", code: "TOSS_TEST_KEY_BLOCKED" });
    }

    // **금액은 주문에 저장된 값으로 승인한다.** 돌아온 쿼리의 amount를 그대로 쓰면 위변조를
    // 그대로 승인하는 셈이 된다.
    const payment = await confirmTossPayment({
      paymentKey,
      orderId,
      expectedAmount: Number(order.payment_amount),
    });
    const paidAt = payment.approvedAt ?? new Date().toISOString();

    if (order.order_type === "STAMP_DELIVERY") {
      // 실물 굿즈: 결제만 확정하고 제작·발송은 관리자가 전환한다.
      await supabase
        .from("orders")
        .update({
          payment_status: "PAID",
          metadata: { ...metadata, tossPaymentKey: payment.paymentKey, paidAt },
          updated_at: new Date().toISOString(),
        })
        .eq("id", order.id)
        .eq("payment_status", "UNPAID");
    } else if (order.order_type === "CANDIDATE_UNLOCK") {
      // 분석 세션이 없는 즉시 전달 상품이라 처리까지 완료로 만든다.
      await supabase
        .from("orders")
        .update({
          payment_status: "PAID",
          fulfillment_status: "COMPLETED",
          metadata: { ...metadata, tossPaymentKey: payment.paymentKey, paidAt },
          updated_at: new Date().toISOString(),
        })
        .eq("id", order.id);
    } else {
      const { data: session } = await supabase
        .from("premium_analysis_sessions")
        .select("id")
        .eq("order_id", order.id)
        .maybeSingle();
      if (!session) throw new Error("결제에 해당하는 분석 세션이 없습니다.");
      await markPremiumSessionPaid(String(session.id), String(order.id), {
        provider: "TOSS_PAYMENTS",
        providerPaymentId: orderId,
        amountPaid: Number(payment.totalAmount),
        paidAt,
        reference: payment.paymentKey,
      });
    }

    return backTo(request, returnPath, { payment: "paid", orderId });
  } catch (error) {
    // 승인에 실패하면 결제도 되지 않은 상태다(토스는 승인해야 결제가 된다).
    console.error("Toss confirm route failed", error);
    return backTo(request, returnPath, { payment: "failed" });
  }
}
