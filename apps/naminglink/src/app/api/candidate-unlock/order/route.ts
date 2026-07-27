import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getPortOnePublicConfig } from "@/lib/portone";
import { getTossClientKey, tossConfigured } from "@/lib/toss";
import {
  CANDIDATE_UNLOCK_REGIONS,
  getCandidateUnlockProduct,
} from "@/lib/unlock-products";
import { displayPrice, getProductSetting } from "@/lib/product-settings";
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
  /** 승인 뒤 돌아갈 우리 서비스 안의 경로. 열린 리디렉트를 막으려고 "/"로 시작하는 값만 받는다. */
  returnPath: z.string().trim().max(300).regex(/^\/(?!\/)/).optional(),
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
  // 가격·통화는 관리자 조정형 상품 설정에서 읽는다.
  let setting;
  try {
    setting = await getProductSetting(
      parsed.data.region === "global" ? "CANDIDATE_UNLOCK_USD" : "CANDIDATE_UNLOCK_KRW",
    );
  } catch {
    return NextResponse.json({ ok: false, error: "판매 중이 아닌 상품입니다." }, { status: 503 });
  }
  // 국내는 토스페이먼츠, 해외는 포트원(페이팔). 토스 키가 없으면 국내도 포트원으로 떨어진다.
  const useToss = parsed.data.region === "domestic" && tossConfigured;
  const portone = useToss ? null : getPortOnePublicConfig(product.channel);
  const supabase = getSupabaseAdminClient();
  if (!useToss && (!portone || !process.env.PORTONE_API_SECRET)) {
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
      payment_amount: setting.amount,
      payment_currency: setting.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: useToss ? orderId : paymentId,
      metadata: {
        provider: useToss ? "TOSS_PAYMENTS" : "PORTONE_V2",
        productCode: product.productCode,
        // 승인 뒤 돌아갈 자리. 일괄 공개는 보던 결과 화면으로 되돌린다.
        returnPath: parsed.data.returnPath ?? "/",
        serviceType: parsed.data.serviceType ?? null,
        locale: parsed.data.locale ?? null,
        // 동의 시각. 개인을 가리키는 값이 아니라 개인정보 최소화와 충돌하지 않는다.
        withdrawalConsentAt: new Date().toISOString(),
      },
    });
    if (orderError) throw orderError;

    return NextResponse.json({
      ok: true,
      checkout: {
        provider: useToss ? ("TOSS" as const) : ("PORTONE" as const),
        orderId,
        paymentId: useToss ? orderId : paymentId,
        clientKey: useToss ? getTossClientKey() : null,
        storeId: portone?.storeId ?? null,
        channelKey: portone?.channelKey ?? null,
        payMethod: portone?.payMethod ?? null,
        uiType: product.uiType,
        orderName: product.orderName,
        totalAmount: setting.amount,
        currency: setting.currency,
        display: displayPrice(setting),
      },
    });
  } catch (error) {
    console.error("Failed to create candidate unlock order", error);
    return NextResponse.json({ ok: false, error: "일괄 공개 주문을 만들지 못했습니다." }, { status: 500 });
  }
}
