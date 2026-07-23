import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { GLOBAL_PREMIUM_PRODUCTS } from "@/lib/global-products";
import { displayPrice, getProductSetting } from "@/lib/product-settings";
import { getReportFontsByCodes } from "@/lib/report-fonts-registry";
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

// 무료 결과에서 사용자가 고른 후보 1개에 대한 글로벌 프리미엄 PDF 주문
// (GLOBAL_NAME_PDF US$9.99 · HANGUL_ART_PDF US$2.99, 둘 다 페이팔 USD).
// 무료 결과는 서버에 저장되지 않으므로(비회원 결과 미저장 원칙) 선택 후보 데이터를
// 클라이언트에서 받아 세션에 보관하고, 유료 산출물은 결제 후 이 데이터만 근거로 만든다.
const nameCandidateSchema = z.object({
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

// 음차 표기는 성명 전체라 공백 포함 최대 4어절까지 허용한다.
const artCandidateSchema = z.object({
  hangul: z
    .string()
    .trim()
    .regex(/^[가-힣]{1,12}(?:\s[가-힣]{1,12}){0,3}$/, "한글 표기 형식이 아닙니다."),
  pronunciation: z.string().trim().max(200).optional(),
  ipa: z.string().trim().max(200).optional(),
  syllables: z.string().trim().max(300).optional(),
  source_pronunciation_basis: z.string().trim().max(2000).optional(),
  recommendation_reason: z.string().trim().max(2000).optional(),
  cultural_fit: z.string().trim().max(2000).optional(),
  usage_note: z.string().trim().max(2000).optional(),
  caution_notes: z.string().trim().max(2000).optional(),
});

const schema = z.object({
  product: z
    .enum(["GLOBAL_NAME_PDF", "HANGUL_ART_PDF", "NAME_ART_PACK"])
    .default("GLOBAL_NAME_PDF"),
  inputFactors: z.record(z.string(), z.unknown()),
  // GLOBAL_NAME_PDF: 전체 후보(1~5) / HANGUL_ART_PDF: 표기 후보(1~3) / NAME_ART_PACK: 선택 후보 1개.
  candidate: z.record(z.string(), z.unknown()).optional(),
  candidates: z.array(z.record(z.string(), z.unknown())).min(1).max(5).optional(),
  // 사용자가 고른 서체 코드. 필요 개수는 product_settings.font_count가 결정한다.
  fontCodes: z.array(z.string().trim().regex(/^[a-z0-9-]{2,40}$/)).max(10).default([]),
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
  const product = GLOBAL_PREMIUM_PRODUCTS[parsed.data.product];
  const candidateList =
    parsed.data.candidates ?? (parsed.data.candidate ? [parsed.data.candidate] : []);
  const candidatePayload =
    product.code === "HANGUL_ART_PDF"
      ? z.array(artCandidateSchema).min(1).max(3).safeParse(candidateList)
      : product.code === "NAME_ART_PACK"
        ? z.array(nameCandidateSchema).length(1).safeParse(candidateList)
        : z.array(nameCandidateSchema).min(1).max(5).safeParse(candidateList);
  if (!candidatePayload.success) {
    return NextResponse.json({ ok: false, error: "주문 정보가 올바르지 않습니다." }, { status: 400 });
  }
  // 가격·통화·서체 수는 관리자 조정형 상품 설정에서 읽는다.
  let setting;
  try {
    setting = await getProductSetting(product.code);
  } catch {
    return NextResponse.json({ ok: false, error: "판매 중이 아닌 상품입니다." }, { status: 503 });
  }
  // 서체 검증: 설정된 개수와 정확히 일치해야 하고, 전부 활성 서체여야 한다.
  // 통과하면 이름·저작권 정보를 스냅샷으로 저장해 이후 서체 메타 변경과 무관하게 표기를 보존한다.
  let fontSnapshots: Array<Record<string, string>> = [];
  if (setting.font_count > 0) {
    if (
      parsed.data.fontCodes.length !== setting.font_count ||
      new Set(parsed.data.fontCodes).size !== setting.font_count
    ) {
      return NextResponse.json(
        { ok: false, error: `서체를 ${setting.font_count}개 선택해 주세요.` },
        { status: 400 },
      );
    }
    try {
      const fontRows = await getReportFontsByCodes(parsed.data.fontCodes);
      fontSnapshots = fontRows.map((row) => ({
        code: row.code,
        name_ko: row.name_ko,
        name_en: row.name_en,
        copyright_holder: row.copyright_holder,
        license_type: row.license_type,
        source_url: row.source_url,
      }));
    } catch {
      return NextResponse.json({ ok: false, error: "선택한 서체를 찾을 수 없습니다." }, { status: 400 });
    }
  }

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
      order_type: product.orderType,
      customer_email: user?.email ?? null,
      payment_status: "UNPAID",
      payment_amount: setting.amount,
      payment_currency: setting.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: { provider: "PORTONE_V2", sessionId, productCode: product.code },
    });
    if (orderError) throw orderError;

    const { error: sessionError } = await supabase.from("premium_analysis_sessions").insert({
      id: sessionId,
      order_id: orderId,
      user_id: user?.id ?? null,
      service_type: product.serviceType,
      status: "PENDING_PAYMENT",
      product_code: product.code,
      price_amount: setting.amount,
      currency: setting.currency,
      access_token_hash: access.tokenHash,
      input_payload: {
        inputFactors: parsed.data.inputFactors,
        candidates: candidatePayload.data,
        fontCodes: parsed.data.fontCodes,
        fonts: fontSnapshots,
        outputLanguage,
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
        payMethod: portone.payMethod,
        uiType: "PAYPAL_SPB",
        productCode: product.code,
        orderName: product.orderName,
        totalAmount: setting.amount,
        currency: setting.currency,
        display: displayPrice(setting),
      },
    });
  } catch (error) {
    console.error("Failed to create global premium order", error);
    return NextResponse.json({ ok: false, error: "프리미엄 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
