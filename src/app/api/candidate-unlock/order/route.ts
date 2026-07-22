import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getPortOnePublicConfig } from "@/lib/portone";
import {
  CANDIDATE_UNLOCK_REGIONS,
  getCandidateUnlockProduct,
} from "@/lib/unlock-products";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";
import {
  checkRateLimit,
  readJsonBodyLimited,
  RequestTooLargeError,
} from "@/lib/request-guard";

export const runtime = "nodejs";

const schema = z.object({
  region: z.enum(CANDIDATE_UNLOCK_REGIONS),
  serviceType: z.string().trim().max(40).optional(),
  locale: z.string().trim().max(10).optional(),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await readJsonBodyLimited(request, 4 * 1024);
  } catch (guardError) {
    const message =
      guardError instanceof RequestTooLargeError
        ? guardError.message
        : "주문 정보가 올바르지 않습니다.";
    return NextResponse.json({ ok: false, error: message }, { status: 413 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "주문 정보가 올바르지 않습니다." }, { status: 400 });
  }
  // 프리미엄 주문과 동일하게, 무인증 주문 생성 남용(무한 UNPAID 주문)을 시간당으로 제한.
  const allowed = await checkRateLimit(request, "candidate_unlock_order", {
    windowSeconds: 3600,
    limit: 20,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "주문 요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const product = getCandidateUnlockProduct(parsed.data.region);
  const portone = getPortOnePublicConfig(product.channel);
  const supabase = getSupabaseAdminClient();
  if (!portone || !process.env.PORTONE_API_SECRET) {
    return NextResponse.json(
      { ok: false, error: "결제 기능이 아직 준비되지 않았습니다." },
      { status: 503 },
    );
  }
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "주문 저장소가 설정되지 않았습니다." }, { status: 503 });
  }

  try {
    const orderId = randomUUID();
    const paymentId = `nl_${orderId.replaceAll("-", "")}`;
    const user = await getAuthenticatedUser(request);

    const { error: orderError } = await supabase.from("orders").insert({
      id: orderId,
      user_id: user?.id ?? null,
      order_type: product.orderType,
      customer_email: user?.email ?? null,
      payment_status: "UNPAID",
      payment_amount: product.amount,
      payment_currency: product.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: {
        provider: "PORTONE_V2",
        productCode: product.productCode,
        serviceType: parsed.data.serviceType ?? null,
        locale: parsed.data.locale ?? null,
      },
    });
    if (orderError) throw orderError;

    return NextResponse.json({
      ok: true,
      checkout: {
        orderId,
        paymentId,
        storeId: portone.storeId,
        channelKey: portone.channelKey,
        payMethod: portone.payMethod,
        uiType: product.uiType,
        orderName: product.orderName,
        totalAmount: product.amount,
        currency: product.currency,
        display: product.display,
      },
    });
  } catch (error) {
    console.error("Failed to create candidate unlock order", error);
    return NextResponse.json({ ok: false, error: "일괄 공개 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
