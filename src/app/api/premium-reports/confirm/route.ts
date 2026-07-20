import { NextResponse } from "next/server";
import { z } from "zod";

import { getVerifiedPremiumPayment } from "@/lib/portone";
import { getAuthorizedPremiumSession, markPremiumSessionPaid } from "@/lib/premium-session";

export const runtime = "nodejs";

const schema = z.object({
  sessionId: z.string().uuid(),
  paymentId: z.string().min(5).max(100),
  accessToken: z.string().min(32).max(256),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "결제 확인 요청이 올바르지 않습니다." }, { status: 400 });
  }
  try {
    const { supabase, session } = await getAuthorizedPremiumSession(parsed.data.sessionId, parsed.data.accessToken);
    if (session.status === "READY" || session.status === "GENERATING" || session.status === "PAID") {
      return NextResponse.json({ ok: true, status: session.status, expiresAt: session.expires_at });
    }
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("id,provider_payment_id")
      .eq("id", String(session.order_id))
      .maybeSingle();
    if (orderError) {
      throw new HttpError(500, "주문 정보를 불러오지 못했습니다.");
    }
    if (!order) {
      throw new HttpError(404, "주문 정보를 찾을 수 없습니다.");
    }
    if (String(order.provider_payment_id) !== parsed.data.paymentId) {
      throw new HttpError(409, "결제 정보가 이 주문과 일치하지 않습니다.");
    }
    const payment = await getVerifiedPremiumPayment(
      parsed.data.paymentId,
      Number(session.price_amount),
      String(session.currency),
    );
    const paid = await markPremiumSessionPaid(String(session.id), String(session.order_id), payment);
    return NextResponse.json({ ok: true, status: "PAID", ...paid });
  } catch (error) {
    console.error("Premium payment verification failed", error);
    const status = error instanceof HttpError ? error.status : statusForError(error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "결제를 확인하지 못했습니다." },
      { status },
    );
  }
}

class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "HttpError";
  }
}

// lib에서 올라오는 오류 메시지로 상태 코드를 구분한다(연결/저장소 문제는 서버 오류, 결제 상태 문제는 결제 오류).
function statusForError(error: unknown) {
  const message = error instanceof Error ? error.message : "";
  if (message.includes("저장소 연결") || message.includes("설정되지 않")) return 503;
  if (message.includes("접근 정보가 올바르지 않")) return 403;
  if (message.includes("찾을 수 없")) return 404;
  if (
    message.includes("포트원") ||
    message.includes("결제 상점") ||
    message.includes("결제 금액") ||
    message.includes("결제 정보가")
  ) {
    return 402;
  }
  return 500;
}
