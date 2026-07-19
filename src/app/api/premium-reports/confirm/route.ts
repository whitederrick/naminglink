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
    const { session } = await getAuthorizedPremiumSession(parsed.data.sessionId, parsed.data.accessToken);
    if (session.status === "READY" || session.status === "GENERATING" || session.status === "PAID") {
      return NextResponse.json({ ok: true, status: session.status, expiresAt: session.expires_at });
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
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "결제를 확인하지 못했습니다." }, { status: 400 });
  }
}
