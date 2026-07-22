import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { Webhook } from "@portone/server-sdk";

import { getVerifiedPremiumPayment } from "@/lib/portone";
import { markPremiumSessionPaid } from "@/lib/premium-session";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";
export const maxDuration = 30;

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

export async function POST(request: Request) {
  const secret = process.env.PORTONE_WEBHOOK_SECRET;
  const supabase = getSupabaseAdminClient();
  if (!secret || !supabase) {
    return NextResponse.json({ ok: false, error: "포트원 웹훅 서버 설정이 없습니다." }, { status: 503 });
  }
  const rawBody = await request.text();
  const eventId = request.headers.get("webhook-id");
  if (!eventId) return NextResponse.json({ ok: false }, { status: 400 });

  let webhook: unknown;
  try {
    webhook = await Webhook.verify(secret, rawBody, Object.fromEntries(request.headers.entries()));
  } catch (error) {
    console.error("PortOne webhook signature verification failed", error);
    return NextResponse.json({ ok: false, error: "웹훅 서명 검증에 실패했습니다." }, { status: 401 });
  }

  const event = record(webhook);
  const type = String(event.type ?? "UNRECOGNIZED");
  const payloadHash = createHash("sha256").update(rawBody).digest("hex");
  const { error: insertError } = await supabase.from("payment_webhook_events").insert({
    provider: "PORTONE_V2",
    provider_event_id: eventId,
    event_type: type,
    signature_verified: true,
    payload_sha256: payloadHash,
    processing_status: "RECEIVED",
  });
  if (insertError?.code === "23505") {
    const { data: previous } = await supabase
      .from("payment_webhook_events")
      .select("processing_status,payload_sha256")
      .eq("provider", "PORTONE_V2")
      .eq("provider_event_id", eventId)
      .maybeSingle();
    if (previous?.payload_sha256 !== payloadHash) {
      return NextResponse.json({ ok: false, error: "중복 웹훅 본문이 일치하지 않습니다." }, { status: 409 });
    }
    if (previous?.processing_status === "PROCESSED" || previous?.processing_status === "IGNORED") {
      return NextResponse.json({ ok: true, duplicate: true });
    }
  } else if (insertError) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  try {
    const data = record(event.data);
    const paymentId = String(data.paymentId ?? "");
    if (type === "Transaction.Paid" && paymentId) {
      const { data: order } = await supabase
        .from("orders")
        .select("id,payment_amount")
        .eq("provider_payment_id", paymentId)
        .maybeSingle();
      if (!order) throw new Error("웹훅 결제에 해당하는 주문이 없습니다.");
      const payment = await getVerifiedPremiumPayment(
        paymentId,
        Number(order.payment_amount),
        "KRW",
      );
      const { data: session } = await supabase
        .from("premium_analysis_sessions")
        .select("id")
        .eq("order_id", order.id)
        .maybeSingle();
      if (!session) throw new Error("웹훅 결제에 해당하는 분석 세션이 없습니다.");
      await markPremiumSessionPaid(String(session.id), String(order.id), payment);
    } else if (type === "Transaction.Cancelled" && paymentId) {
      const now = new Date().toISOString();
      const { data: order } = await supabase
        .from("orders")
        .update({ payment_status: "REFUNDED", fulfillment_status: "CANCELLED", updated_at: now })
        .eq("provider_payment_id", paymentId)
        .select("id")
        .maybeSingle();
      if (order) {
        await supabase
          .from("premium_analysis_sessions")
          .update({ status: "REFUNDED", input_payload: {}, calculation_result: null, interpretation_result: null, updated_at: now })
          .eq("order_id", order.id);
      }
    } else if (type === "Transaction.PartialCancelled" && paymentId) {
      // 부분취소는 일부 금액만 환불된 것이므로 리포트·세션을 파기하지 않는다.
      // 주문에 상태만 기록하고, 전액 환불되면 별도의 Transaction.Cancelled가 도착한다.
      await supabase
        .from("orders")
        .update({ payment_status: "PARTIALLY_REFUNDED", updated_at: new Date().toISOString() })
        .eq("provider_payment_id", paymentId)
        .eq("payment_status", "PAID");
    } else if (type === "Transaction.Failed" && paymentId) {
      await supabase
        .from("orders")
        .update({ payment_status: "FAILED", updated_at: new Date().toISOString() })
        .eq("provider_payment_id", paymentId)
        .eq("payment_status", "UNPAID");
    } else {
      await supabase
        .from("payment_webhook_events")
        .update({ processing_status: "IGNORED", processed_at: new Date().toISOString() })
        .eq("provider", "PORTONE_V2")
        .eq("provider_event_id", eventId);
      return NextResponse.json({ ok: true, ignored: true });
    }

    await supabase
      .from("payment_webhook_events")
      .update({ processing_status: "PROCESSED", error_code: null, processed_at: new Date().toISOString() })
      .eq("provider", "PORTONE_V2")
      .eq("provider_event_id", eventId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PortOne webhook processing failed", error);
    await supabase
      .from("payment_webhook_events")
      .update({ processing_status: "FAILED", error_code: "PROCESSING_FAILED", processed_at: new Date().toISOString() })
      .eq("provider", "PORTONE_V2")
      .eq("provider_event_id", eventId);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
