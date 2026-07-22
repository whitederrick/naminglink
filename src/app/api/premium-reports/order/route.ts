import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { generateNamingResult, NamingInputConstraintError } from "@/lib/openai";
import { getPortOnePublicConfig } from "@/lib/portone";
import {
  createPremiumReportAccess,
  getHanjaProduct,
  HANJA_PRODUCT_CODES,
} from "@/lib/premium-reports";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";
import { validateHanjaMeaningInput } from "@/lib/naming-validation";
import {
  checkInputFactorsSize,
  checkRateLimit,
  readJsonBodyLimited,
  RequestTooLargeError,
} from "@/lib/request-guard";
import { hasCompletePremiumBirthDate, isLunarCalendar } from "@/lib/premium-hanja-eligibility";
import { validatePremiumBirthDate } from "@/lib/saju/engine";

// 생성 단계에서 시·분 범위 오류로 결제 후 FAILED가 되지 않도록, 조작된 시·분 값을 미리 거른다.
// UI는 0-23/0-59로 클램프하므로 정상 사용자에게는 영향이 없다.
function hasValidPremiumBirthTime(inputFactors: Record<string, unknown>) {
  if (inputFactors.birthTimeKnown === false) return true;
  const hour = inputFactors.premiumBirthHour;
  const minute = inputFactors.premiumBirthMinute;
  const inRange = (value: unknown, max: number) =>
    value === null ||
    value === undefined ||
    value === "" ||
    (Number.isInteger(Number(value)) && Number(value) >= 0 && Number(value) <= max);
  return inRange(hour, 23) && inRange(minute, 59);
}

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
  // 인증 없이 열려 있는 주문 생성 엔드포인트의 남용(무한 UNPAID 주문·세션 생성)을 시간당으로 제한.
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
  const fieldErrors = validateHanjaMeaningInput(parsed.data.inputFactors);
  if (Object.keys(fieldErrors).length) {
    return NextResponse.json({ ok: false, error: "한자 분석 입력값을 다시 확인해 주세요.", fieldErrors }, { status: 400 });
  }
  const product = getHanjaProduct(parsed.data.productCode);
  if (product.includesSaju) {
    if (!hasCompletePremiumBirthDate(parsed.data.inputFactors)) {
      return NextResponse.json(
        { ok: false, error: "출생 연·월·일이 확정된 경우에만 사주·오행 상세 분석을 이용할 수 있습니다." },
        { status: 400 },
      );
    }
    // 결제 후 생성 단계에서 날짜·시간 오류로 FAILED가 되지 않도록 미리 검증한다.
    // calendarType은 생성 단계와 동일하게 trim 기준으로 판별해 " lunar " 같은 값의 불일치를 막는다.
    if (!hasValidPremiumBirthTime(parsed.data.inputFactors)) {
      return NextResponse.json(
        { ok: false, error: "출생 시·분이 올바르지 않습니다. 시(0-23)와 분(0-59)을 확인해 주세요." },
        { status: 400 },
      );
    }
    try {
      validatePremiumBirthDate({
        calendarType: isLunarCalendar(parsed.data.inputFactors.calendarType) ? "lunar" : "solar",
        year: Number(parsed.data.inputFactors.birthYear),
        month: Number(parsed.data.inputFactors.birthMonth),
        day: Number(parsed.data.inputFactors.birthDay),
        lunarLeapMonth: parsed.data.inputFactors.lunarLeapMonth === true,
      });
    } catch (error) {
      return NextResponse.json(
        {
          ok: false,
          error: error instanceof RangeError ? error.message : "출생일을 다시 확인해 주세요.",
        },
        { status: 400 },
      );
    }
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
    const generatedCandidates = (generated.result as { candidates?: unknown[] } | null)?.candidates;
    if (!Array.isArray(generatedCandidates) || generatedCandidates.length === 0) {
      return NextResponse.json(
        { ok: false, error: "제공 가능한 한자 후보가 없어 상세 리포트를 만들 수 없습니다. 입력한 이름과 조건을 확인해 주세요." },
        { status: 400 },
      );
    }
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
    if (error instanceof NamingInputConstraintError) {
      return NextResponse.json(
        { ok: false, error: error.message, fieldErrors: error.fieldErrors },
        { status: 400 },
      );
    }
    return NextResponse.json({ ok: false, error: "프리미엄 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
