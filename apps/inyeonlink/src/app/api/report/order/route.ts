import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";
import { z } from "zod";

import { getPortOnePublicConfig } from "@/lib/portone";
import {
  displayPrice,
  getReportProduct,
  getReportSetting,
  REPORT_REGIONS,
} from "@/lib/report-product";
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
  region: z.enum(REPORT_REGIONS),
  locale: z.string().trim().max(10).optional(),
});

export async function POST(request: Request) {
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

  const product = getReportProduct(input.data.region);

  // 판매 중이 아니면(다크 런치) 여기서 끝난다. 채널 키가 없어도 마찬가지다.
  let setting;
  try {
    setting = await getReportSetting(product);
  } catch {
    return jsonError("NOT_ON_SALE", 503);
  }

  const portone = getPortOnePublicConfig(product.channel);
  if (!portone || !process.env.PORTONE_API_SECRET) {
    return jsonError("PAYMENT_NOT_READY", 503);
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) return jsonError("STORAGE_NOT_READY", 503);

  try {
    const orderId = randomUUID();
    const paymentId = `iy_${orderId.replaceAll("-", "")}`;

    const { error } = await supabase.from("orders").insert({
      id: orderId,
      order_type: "GUNGHAP_PDF",
      service: "inyeonlink",
      payment_status: "UNPAID",
      payment_amount: setting.amount,
      payment_currency: setting.currency,
      fulfillment_status: "PENDING",
      provider_payment_id: paymentId,
      metadata: {
        provider: "PORTONE_V2",
        region: product.region,
        locale: input.data.locale ?? null,
      },
    });
    if (error) throw error;

    return NextResponse.json(
      {
        ok: true,
        checkout: {
          orderId,
          paymentId,
          storeId: portone.storeId,
          channelKey: portone.channelKey,
          payMethod: portone.payMethod,
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
    console.error("Failed to create gunghap report order", error);
    return jsonError("ORDER_FAILED", 500);
  }
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { ok: false, error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
