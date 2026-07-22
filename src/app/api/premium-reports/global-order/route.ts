import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { GLOBAL_NAME_PDF } from "@/lib/global-products";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import { getPortOnePublicConfig } from "@/lib/portone";
import { createPremiumReportAccess } from "@/lib/premium-reports";
import {
  checkInputFactorsSize,
  checkRateLimit,
  readJsonBodyLimited,
  RequestTooLargeError,
} from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";

export const runtime = "nodejs";

// 무료 결과에서 사용자가 고른 후보 1개에 대한 글로벌 프리미엄 PDF 주문.
// 무료 결과는 서버에 저장되지 않으므로(비회원 결과 미저장 원칙) 선택 후보 데이터를
// 클라이언트에서 받아 세션에 보관하고, 유료 분석은 결제 후 이 데이터만 근거로 생성한다.
const candidateSchema = z.object({
  hangul: z
    .string()
    .trim()
    .regex(/^[가-힣]{2,6}$/, "한글 성명 형식이 아닙니다."),
  pronunciation: z.string().trim().max(200).optional(),
  meaning: z.string().trim().max(2000).optional(),
  recommendation_reason: z.string().trim().max(2000).optional(),
  cultural_fit: z.string().trim().max(2000).optional(),
  usage_note: z.string().trim().max(2000).optional(),
});

const schema = z.object({
  inputFactors: z.record(z.string(), z.unknown()),
  candidate: candidateSchema,
  locale: z.string().trim().max(10).optional(),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await readJsonBodyLimited(request, 16 * 1024);
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
  const allowed = await checkRateLimit(request, "premium_order", {
    windowSeconds: 3600,
    limit: 20,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "주문 요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }
  const sizeError = checkInputFactorsSize(parsed.data.inputFactors);
  if (sizeError) {
    return NextResponse.json({ ok: false, error: sizeError }, { status: 400 });
  }

  const portone = getPortOnePublicConfig(GLOBAL_NAME_PDF.channel);
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
    const sessionId = randomUUID();
    const paymentId = `nl_${orderId.replaceAll("-", "")}`;
    const access = createPremiumReportAccess();
    const user = await getAuthenticatedUser(request);
    const outputLanguage = OUTPUT_LANGUAGE_NAMES[parsed.data.locale ?? ""]
      ? String(parsed.data.locale)
      : "en";

    const { error: orderError } = await supabase.from("orders").insert({
      id: orderId,
      user_id: user?.id ?? null,
      order_type: GLOBAL_NAME_PDF.orderType,
      customer_email: user?.email ?? null,
      payment_status: "UNPAID",
      payment_amount: GLOBAL_NAME_PDF.amount,
      payment_currency: GLOBAL_NAME_PDF.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: { provider: "PORTONE_V2", sessionId, productCode: GLOBAL_NAME_PDF.code },
    });
    if (orderError) throw orderError;

    const { error: sessionError } = await supabase.from("premium_analysis_sessions").insert({
      id: sessionId,
      order_id: orderId,
      user_id: user?.id ?? null,
      service_type: GLOBAL_NAME_PDF.serviceType,
      status: "PENDING_PAYMENT",
      product_code: GLOBAL_NAME_PDF.code,
      price_amount: GLOBAL_NAME_PDF.amount,
      currency: GLOBAL_NAME_PDF.currency,
      access_token_hash: access.tokenHash,
      input_payload: {
        inputFactors: parsed.data.inputFactors,
        candidate: parsed.data.candidate,
        outputLanguage,
        productCode: GLOBAL_NAME_PDF.code,
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
        payMethod: portone.payMethod,
        uiType: "PAYPAL_SPB",
        productCode: GLOBAL_NAME_PDF.code,
        orderName: GLOBAL_NAME_PDF.orderName,
        totalAmount: GLOBAL_NAME_PDF.amount,
        currency: GLOBAL_NAME_PDF.currency,
        display: GLOBAL_NAME_PDF.display,
      },
    });
  } catch (error) {
    console.error("Failed to create global premium order", error);
    return NextResponse.json({ ok: false, error: "프리미엄 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
