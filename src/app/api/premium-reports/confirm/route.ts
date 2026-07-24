import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { classifyPaymentError } from "@/lib/payment-errors";
import { getVerifiedPremiumPayment } from "@/lib/portone";
import { getAuthorizedPremiumSession, markPremiumSessionPaid } from "@/lib/premium-session";
import { checkRateLimit, readJsonBodyLimited, RequestTooLargeError } from "@/lib/request-guard";

export const runtime = "nodejs";

const schema = z.object({
  sessionId: z.string().uuid(),
  paymentId: z.string().min(5).max(100),
  accessToken: z.string().min(32).max(256),
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
  // 이어받기·모바일 복구가 같은 세션으로 여러 번 부르는 정상 경로가 있어 한도를 넉넉히 잡는다.
  const allowed = await checkRateLimit(request, "premium_confirm", {
    windowSeconds: 3600,
    limit: 60,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
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
    // HttpError는 이 라우트가 직접 만든 이용자용 문구라 그대로 쓰고, 그 밖의 오류는 내부 내용이
    // 섞여 있으므로 분류된 문구로 바꿔 내보낸다.
    if (error instanceof HttpError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: error.status });
    }
    const { status, message } = classifyPaymentError(error);
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}

class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "HttpError";
  }
}
