import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { generateNamingResult } from "@/lib/openai";
import { getPortOnePublicConfig } from "@/lib/portone";
import {
  createPremiumReportAccess,
  getHanjaProduct,
  HANJA_PRODUCT_CODES,
} from "@/lib/premium-reports";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";
import { validateHanjaMeaningInput } from "@/lib/naming-validation";
import { hasCompletePremiumBirthDate } from "@/lib/premium-hanja-eligibility";

export const runtime = "nodejs";

const schema = z.object({
  productCode: z.enum(HANJA_PRODUCT_CODES),
  inputFactors: z.record(z.string(), z.unknown()),
  customer: z.object({
    fullName: z.string().trim().max(80).optional(),
    email: z.string().trim().email().max(200).optional(),
    phoneNumber: z.string().trim().max(30).optional(),
  }).optional(),
});

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "주문 정보가 올바르지 않습니다." }, { status: 400 });
  }
  const fieldErrors = validateHanjaMeaningInput(parsed.data.inputFactors);
  if (Object.keys(fieldErrors).length) {
    return NextResponse.json({ ok: false, error: "한자 분석 입력값을 다시 확인해 주세요.", fieldErrors }, { status: 400 });
  }
  const product = getHanjaProduct(parsed.data.productCode);
  if (product.includesSaju && !hasCompletePremiumBirthDate(parsed.data.inputFactors)) {
    return NextResponse.json(
      { ok: false, error: "출생 연·월·일이 확정된 경우에만 사주·오행 상세 분석을 이용할 수 있습니다." },
      { status: 400 },
    );
  }
  const portone = getPortOnePublicConfig();
  const supabase = getSupabaseAdminClient();
  if (!portone || !process.env.PORTONE_API_SECRET) {
    return NextResponse.json({ ok: false, error: "포트원 결제 환경변수가 설정되지 않았습니다." }, { status: 503 });
  }
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "주문 저장소가 설정되지 않았습니다." }, { status: 503 });
  }

  try {
    const generated = await generateNamingResult("HANJA_MEANING_MATCH", parsed.data.inputFactors);
    const orderId = randomUUID();
    const sessionId = randomUUID();
    const paymentId = `nl_${orderId.replaceAll("-", "")}`;
    const access = createPremiumReportAccess();
    const user = await getAuthenticatedUser(request);
    const customer = parsed.data.customer;

    const { error: orderError } = await supabase.from("orders").insert({
      id: orderId,
      user_id: user?.id ?? null,
      order_type: product.orderType,
      customer_name: customer?.fullName ?? null,
      customer_email: customer?.email ?? user?.email ?? null,
      payment_status: "UNPAID",
      payment_amount: product.amount,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: { provider: "PORTONE_V2", sessionId, productCode: product.code },
    });
    if (orderError) throw orderError;

    const { error: sessionError } = await supabase.from("premium_analysis_sessions").insert({
      id: sessionId,
      order_id: orderId,
      user_id: user?.id ?? null,
      status: "PENDING_PAYMENT",
      product_code: product.code,
      price_amount: product.amount,
      currency: "KRW",
      access_token_hash: access.tokenHash,
      input_payload: {
        inputFactors: parsed.data.inputFactors,
        freeResult: generated.result,
        productCode: product.code,
      },
    });
    if (sessionError) {
      await supabase.from("orders").delete().eq("id", orderId).eq("payment_status", "UNPAID");
      throw sessionError;
    }

    return NextResponse.json({
      ok: true,
      checkout: {
        orderId,
        sessionId,
        paymentId,
        accessToken: access.token,
        storeId: portone.storeId,
        channelKey: portone.channelKey,
        productCode: product.code,
        candidateLimit: product.candidateLimit,
        includesSaju: product.includesSaju,
        includesPdf: product.includesPdf,
        orderName: `Naming-Link ${product.name}`,
        totalAmount: product.amount,
        currency: "KRW",
        customer: customer ?? null,
      },
    });
  } catch (error) {
    console.error("Failed to create premium order", error);
    return NextResponse.json({ ok: false, error: "프리미엄 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
