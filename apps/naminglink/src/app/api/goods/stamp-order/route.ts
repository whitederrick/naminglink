import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import {
  getStampProduct,
  stampSettingCode,
  STAMP_MODEL_CODES,
  STAMP_MODELS,
  STAMP_REGIONS,
} from "@/lib/goods-products";
import { displayPrice, getProductSetting } from "@/lib/product-settings";
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
  // domestic: ₩39,000 카카오페이·국내 배송 / global: US$34.99(배송비 포함) 페이팔·국제 배송.
  region: z.enum(STAMP_REGIONS).default("domestic"),
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
  // 글로벌 주문 필수: 배송 국가.
  country: z.string().trim().max(60).optional(),
  note: z.string().trim().max(500).optional(),
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

  const product = getStampProduct(parsed.data.region);
  // 가격·통화는 관리자 조정형 상품 설정에서 읽는다(단일 원천).
  let setting;
  try {
    // 금액은 고른 모델이 정한다. 원형·사각·흑단이 값이 다르므로 모델을 무시하면 흑단을 고르고
    // 원형 값을 내는 일이 생긴다.
    setting = await getProductSetting(
      stampSettingCode(parsed.data.model, parsed.data.region),
    );
  } catch {
    return NextResponse.json({ ok: false, error: "판매 중이 아닌 상품입니다." }, { status: 503 });
  }
  if (parsed.data.region === "global" && !parsed.data.country) {
    return NextResponse.json(
      { ok: false, error: "Please enter the destination country." },
      { status: 400 },
    );
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
    const paymentId = `nl_${orderId.replaceAll("-", "")}`;
    const user = await getAuthenticatedUser(request);

    const shippingAddress =
      parsed.data.region === "global"
        ? `[${parsed.data.country}] ${parsed.data.address}`
        : parsed.data.address;
    const { error: orderError } = await supabase.from("orders").insert({
      id: orderId,
      user_id: user?.id ?? null,
      order_type: product.orderType,
      customer_name: parsed.data.recipient,
      customer_email: parsed.data.email || user?.email || null,
      shipping_address: shippingAddress,
      payment_status: "UNPAID",
      payment_amount: setting.amount,
      payment_currency: setting.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: {
        provider: "PORTONE_V2",
        productCode: product.code,
        stampName: parsed.data.stampName,
        stampModel: parsed.data.model,
        phone: parsed.data.phone,
        country: parsed.data.country || null,
        note: parsed.data.note || null,
        // 동의 시각. 개인을 가리키는 값이 아니라 개인정보 최소화와 충돌하지 않는다.
        withdrawalConsentAt: new Date().toISOString(),
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
        uiType: parsed.data.region === "global" ? "PAYPAL_SPB" : null,
        orderName: `${product.orderName} ${STAMP_MODELS[parsed.data.model].name} (${parsed.data.stampName})`,
        totalAmount: setting.amount,
        currency: setting.currency,
        display: displayPrice(setting),
      },
    });
  } catch (error) {
    console.error("Failed to create stamp order", error);
    return NextResponse.json({ ok: false, error: "도장 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
