import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { STAMP_MODEL_CODES, STAMP_MODELS, STAMP_PRODUCT } from "@/lib/goods-products";
import { getPortOnePublicConfig } from "@/lib/portone";
import {
  checkRateLimit,
  readJsonBodyLimited,
  RequestTooLargeError,
} from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";

export const runtime = "nodejs";

// 이름 도장 주문 생성. 실물 제작·배송 상품이라 결제 후에도 fulfillment는 PENDING으로 남아
// 관리자 미처리 목록에서 제작→배송(SHIPPED)→완료(COMPLETED)로 수동 전환한다.
const schema = z.object({
  // 도장에 새길 문구: 한글 또는 한자 1~8자(공백 없음).
  stampName: z
    .string()
    .trim()
    .regex(/^[가-힣㐀-䶿一-鿿]{1,8}$/u, "도장 문구는 한글 또는 한자 1~8자여야 합니다."),
  model: z.enum(STAMP_MODEL_CODES),
  recipient: z.string().trim().min(1).max(40),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{9,20}$/, "연락처 형식이 올바르지 않습니다."),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  address: z.string().trim().min(8).max(300),
  note: z.string().trim().max(500).optional(),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await readJsonBodyLimited(request, 8 * 1024);
  } catch (guardError) {
    const message =
      guardError instanceof RequestTooLargeError
        ? guardError.message
        : "주문 정보가 올바르지 않습니다.";
    return NextResponse.json({ ok: false, error: message }, { status: 413 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message;
    return NextResponse.json(
      { ok: false, error: firstIssue || "주문 정보가 올바르지 않습니다." },
      { status: 400 },
    );
  }
  const allowed = await checkRateLimit(request, "goods_order", {
    windowSeconds: 3600,
    limit: 10,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "주문 요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const portone = getPortOnePublicConfig(STAMP_PRODUCT.channel);
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
      order_type: STAMP_PRODUCT.orderType,
      customer_name: parsed.data.recipient,
      customer_email: parsed.data.email || user?.email || null,
      shipping_address: parsed.data.address,
      payment_status: "UNPAID",
      payment_amount: STAMP_PRODUCT.amount,
      payment_currency: STAMP_PRODUCT.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: {
        provider: "PORTONE_V2",
        productCode: STAMP_PRODUCT.code,
        stampName: parsed.data.stampName,
        stampModel: parsed.data.model,
        phone: parsed.data.phone,
        note: parsed.data.note || null,
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
        orderName: `${STAMP_PRODUCT.orderName} ${STAMP_MODELS[parsed.data.model].name} (${parsed.data.stampName})`,
        totalAmount: STAMP_PRODUCT.amount,
        currency: STAMP_PRODUCT.currency,
        display: STAMP_PRODUCT.display,
      },
    });
  } catch (error) {
    console.error("Failed to create stamp order", error);
    return NextResponse.json({ ok: false, error: "도장 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
