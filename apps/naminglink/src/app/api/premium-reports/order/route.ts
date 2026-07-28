import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { generateNamingResult, NamingInputConstraintError } from "@/lib/openai";
import { getTossClientKey, tossConfigured } from "@/lib/toss";
import {
  createPremiumReportAccess,
  getHanjaProduct,
  HANJA_PRODUCT_CODES,
} from "@/lib/premium-reports";
import { getProductSetting } from "@/lib/product-settings";
import { insertOrder, insertPremiumSession } from "@/lib/order-writes";
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
import { validatePremiumBirthDate } from "@naminglink/core/saju";

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
  /**
   * 청약철회 제한 동의. 전자상거래법 제17조 제2항 단서는 고지와 **동의**를 함께 요구하고, 그
   * 조치가 없으면 사업자가 철회 제한을 주장할 수 없다. 화면의 체크박스만 믿지 않고 서버가 받아
   * 주문에 남긴다 — 화면 상태는 되돌릴 수 있어 나중에 입증할 수 없다.
   */
  withdrawalConsent: z.literal(true),
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
  // 가격은 관리자 조정형 상품 설정에서 읽는다(단일 원천).
  let setting;
  try {
    setting = await getProductSetting(product.code);
  } catch {
    return NextResponse.json({ ok: false, error: "판매 중이 아닌 상품입니다." }, { status: 503 });
  }
  // 한자 상세는 국내 전용 상품이라 **토스페이먼츠만** 쓴다. 예전에는 토스 키가 없으면
  // 포트원으로 떨어뜨렸는데, 그 폴백은 계약하지 않은 채널로 결제를 내보내는 길이라 지웠다
  // (2026-07-29 결제 일원화). 키가 없으면 결제를 열지 않는 쪽이 맞다.
  const supabase = getSupabaseAdminClient();
  if (!tossConfigured) {
    return NextResponse.json({ ok: false, error: "결제 환경변수가 설정되지 않았습니다." }, { status: 503 });
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
    const access = createPremiumReportAccess();
    const user = await getAuthenticatedUser(request);
    const customer = parsed.data.customer;

    const { error: orderError } = await insertOrder(supabase, {
      id: orderId,
      user_id: user?.id ?? null,
      order_type: product.orderType,
      customer_name: customer?.fullName ?? null,
      customer_email: customer?.email ?? user?.email ?? null,
      payment_status: "UNPAID",
      payment_amount: setting.amount,
      fulfillment_status: "PENDING",
      provider_payment_id: orderId,
      metadata: {
        provider: "TOSS_PAYMENTS",
        sessionId,
        productCode: product.code,
        // 승인 뒤 돌아갈 자리. 상품마다 결제 후 보여 줄 화면이 달라 주문에 담아 둔다.
        //
        // **세션 식별값을 여기서 붙인다.** 결과 화면은 premiumSession으로 어느 분석을 이어받을지
        // 정하는데, 그 값은 서버가 방금 만든 것이라 클라이언트가 미리 넣을 수 없다. 토스는 승인
        // 라우트를 거쳐 이 경로로 돌아오므로 여기서 넣어 두지 않으면 결과를 찾지 못한다.
        returnPath: `/hanja-meaning/result?premiumSession=${sessionId}`,
        // 동의 시각. 개인을 가리키는 값이 아니라 개인정보 최소화와 충돌하지 않는다.
        withdrawalConsentAt: new Date().toISOString(),
      },
    });
    if (orderError) throw orderError;

    const { error: sessionError } = await insertPremiumSession(supabase, {
      id: sessionId,
      order_id: orderId,
      user_id: user?.id ?? null,
      status: "PENDING_PAYMENT",
      product_code: product.code,
      price_amount: setting.amount,
      currency: setting.currency,
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
        provider: "TOSS" as const,
        orderId,
        sessionId,
        // 토스는 주문 식별값이 곧 결제 식별값이다(포트원처럼 별도 paymentId를 만들지 않는다).
        paymentId: orderId,
        accessToken: access.token,
        clientKey: getTossClientKey(),
        productCode: product.code,
        candidateLimit: product.candidateLimit,
        includesSaju: product.includesSaju,
        includesPdf: product.includesPdf,
        orderName: `Naming-Link ${product.name}`,
        totalAmount: setting.amount,
        currency: setting.currency,
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
