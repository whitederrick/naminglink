import { randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getPortOnePaypalConfig } from "@/lib/portone";
import {
  displayPrice,
  getReportProduct,
  getReportSetting,
  REPORT_KINDS,
  REPORT_REGIONS,
} from "@/lib/report-product";
import { insertOrder } from "@/lib/order-writes";
import { checkRateLimit } from "@/lib/request-guard";
import { getTossClientKey, tossConfigured } from "@/lib/toss";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 궁합 리포트 PDF 주문 생성.
//
// **요청 본문에 생년월일이 없다.** 주문에 필요한 것은 상품과 권역뿐이고, 입력값은 결제가
// 끝난 뒤 PDF를 만드는 요청에만 실린다. 그래야 주문 표에 누구의 사주였는지가 남지 않는다.
//
// 금액은 서버가 정한다(product_settings). 클라이언트가 보내는 금액은 받지도 않는다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  /**
   * 무엇을 사는가. 없으면 **싼 쪽(꿈 카드)**으로 본다 — 값이 빠졌다고 비싼 쪽을 팔면 안 된다.
   */
  kind: z.enum(REPORT_KINDS).default("card"),
  region: z.enum(REPORT_REGIONS),
  locale: z.string().trim().max(10).optional(),
  /**
   * 청약철회 제한에 동의했는가.
   *
   * **화면의 체크박스를 믿고 넘어가지 않는다.** 전자상거래법 제17조 제2항 단서는 즉시 제공되는
   * 디지털 콘텐츠라도 철회 불가를 고지하고 동의를 받는 조치를 요구하며, 그 조치가 없으면
   * 소비자는 그대로 철회할 수 있다. 서버가 받아서 주문에 남겨야 나중에 다툼이 생겼을 때
   * 조치를 취했음을 보일 수 있다.
   */
  withdrawalConsent: z.literal(true),
});

export async function POST(request: NextRequest) {
  // 미결제 주문이 무한히 쌓이는 것을 막는다. naminglink의 굿즈 주문과 같은 한도다.
  const allowed = await checkRateLimit(request, "inyeon_report_order", {
    windowSeconds: 3600,
    limit: 10,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "주문 요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const raw = await request.text();
  if (raw.length > 2 * 1024) {
    return jsonError("PAYLOAD_TOO_LARGE", 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(raw);
  } catch {
    return jsonError("INVALID_JSON", 400);
  }

  const input = schema.safeParse(parsedBody);
  if (!input.success) return jsonError("INVALID_INPUT", 400);

  const product = getReportProduct(input.data.kind, input.data.region);

  // 판매 중이 아니면(다크 런치) 여기서 끝난다. 채널 키가 없어도 마찬가지다.
  let setting;
  try {
    setting = await getReportSetting(product);
  } catch {
    return jsonError("NOT_ON_SALE", 503);
  }

  // **국내는 토스페이먼츠, 해외는 포트원(페이팔)이다.** 결제사가 갈리므로 주문에도 어느 쪽으로
  // 만든 주문인지 남긴다 — 확정 경로가 완전히 달라서 나중에 구분할 수 없으면 안 된다.
  const useToss = product.provider === "TOSS";

  const portone = useToss ? null : getPortOnePaypalConfig();
  if (useToss) {
    if (!tossConfigured) return jsonError("PAYMENT_NOT_READY", 503);
  } else if (!portone || !process.env.PORTONE_API_SECRET) {
    return jsonError("PAYMENT_NOT_READY", 503);
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) return jsonError("STORAGE_NOT_READY", 503);

  try {
    const orderId = randomUUID();
    // 토스는 orderId를 그대로 쓴다(6~64자 규칙에 UUID가 들어간다). 포트원은 별도 결제 ID를 쓴다.
    const paymentId = `iy_${orderId.replaceAll("-", "")}`;

    const { error } = await insertOrder(supabase, {
      id: orderId,
      order_type: product.orderType,
      service: "inyeonlink",
      payment_status: "UNPAID",
      payment_amount: setting.amount,
      payment_currency: setting.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: useToss ? orderId : paymentId,
      metadata: {
        provider: useToss ? "TOSS_PAYMENTS" : "PORTONE_V2",
        region: product.region,
        locale: input.data.locale ?? null,
        // 동의 사실과 시각. 개인을 가리키는 값이 아니라 미저장 원칙과 충돌하지 않는다.
        withdrawalConsentAt: new Date().toISOString(),
      },
    });
    if (error) throw error;

    return NextResponse.json(
      {
        ok: true,
        checkout: useToss
          ? {
              provider: "TOSS" as const,
              orderId,
              clientKey: getTossClientKey(),
              orderName: product.orderName,
              totalAmount: setting.amount,
              currency: setting.currency,
              display: displayPrice(setting),
            }
          : {
              provider: "PORTONE" as const,
              orderId,
              paymentId,
              storeId: portone!.storeId,
              channelKey: portone!.channelKey,
              payMethod: portone!.payMethod,
              uiType: product.uiType,
              orderName: product.orderName,
              totalAmount: setting.amount,
              currency: setting.currency,
              display: displayPrice(setting),
            },
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    // 실패 사유는 서버 로그에만 남긴다. 입력값이 없으므로 로그에 개인정보가 섞일 일도 없다.
    console.error(`Failed to create ${product.kind} report order`, error);
    return jsonError("ORDER_FAILED", 500);
  }
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { ok: false, error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
