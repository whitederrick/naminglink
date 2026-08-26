import { NextRequest, NextResponse } from "next/server";

import { notifyOps } from "@/lib/ops-alert";
import { checkRateLimit } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { confirmTossPayment, tossPaymentAllowed } from "@/lib/toss";

// 토스 결제창이 돌아오는 자리. **여기서 승인해야 비로소 결제가 된다.**
//
//   결제창 → GET /api/payments/toss/confirm?paymentKey&orderId&amount → 승인 → 결과 화면
//
// 서버 라우트를 successUrl로 삼은 이유: 브라우저가 우리 서버에 닿는 순간 바로 승인하기
// 위해서다. 화면이 떠서 자바스크립트가 돌기를 기다리면 그 사이에 창을 닫거나 네트워크가 끊길
// 여지가 생긴다. 승인은 리디렉트 후 10분 안에 해야 한다.
//
// 궁합 입력값은 URL 프래그먼트(#)에만 있어 결제창을 거치는 동안 서버로 오지 않는다. 그래서
// 결제 전에 브라우저(sessionStorage)에 넣어 두고, 여기서 결과 화면으로 되돌리면 화면이 그것을
// 복원한다. sessionStorage는 이용자 브라우저이지 서버가 아니므로 미저장 원칙과 충돌하지 않는다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * 주문 종류와 돌아갈 화면. **상품이 하나라 둘 다 하나다**(2026-08-05).
 *
 * 예전에는 티어가 둘이라 쿼리의 `kind`로 종류를 정했다. 상품이 합쳐지며 그 값이 사라졌는데
 * **이 파일만 옛 이름을 그대로 찾고 있었다**(`SAJU_CHONGUN_PDF`). 타입이 이 파일 안에서 닫혀
 * 있어 컴파일이 잡지 못했고, 그 상태로 켰다면 **결제는 승인되고 주문은 못 찾는다** — 돈은
 * 받고 물건은 안 나가는 자리다(2026-08-06에 발견해 고쳤다).
 *
 * 주문 종류를 여기 적어 두는 것은 **다른 서비스의 주문 번호로 이 경로를 지나가지 못하게**
 * 하기 위해서다. `service='sajulink'`와 함께 건다 — 한 `orders` 표를 세 서비스가 쓴다.
 */
const ORDER_TYPE = "SAJU_REPORT_PDF";
const RESULT_PATH = "/reading/result";

/** 결과 화면으로 되돌린다. 화면이 이 값으로 다음 동작을 정한다. */
function backToResult(request: NextRequest, params: Record<string, string>) {
  const url = new URL(RESULT_PATH, request.nextUrl.origin);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return NextResponse.redirect(url, { status: 303 });
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const paymentKey = query.get("paymentKey") ?? "";
  const orderId = query.get("orderId") ?? "";
  const locale = query.get("lang") ?? "ko";

  // 다른 결제 라우트와 달리 이 라우트만 레이트리밋이 없었다 — 여기서 매 요청마다
  // confirmTossPayment(실제 토스 API 호출)가 나간다(2026-08-26 코드 리뷰에서 발견,
  // 네 앱 전부 같은 공백이었다). 정상 재요청(새로고침·복귀)까지 막지 않게 넉넉히 잡는다.
  if (!(await checkRateLimit(request, "saju_toss_confirm", { windowSeconds: 3600, limit: 30 }))) {
    return backToResult(request, { lang: locale, payment: "failed" });
  }

  if (!paymentKey || !UUID.test(orderId)) {
    return backToResult(request, { lang: locale, payment: "invalid" });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return backToResult(request, { lang: locale, payment: "failed" });
  }

  try {
    // **KRW 주문만 승인한다.** 국내(토스)·해외(페이팔)가 같은 order_type을 쓰므로
    // (report-product.ts) 통화까지 걸지 않으면 해외 USD 주문을 소액 KRW 토스 결제로
    // 승인시킬 수 있다 — 금액은 숫자로만 비교되고 통화는 보지 않기 때문이다.
    const { data: order } = await supabase
      .from("orders")
      .select(
        "id,order_type,payment_status,payment_amount,payment_currency,metadata",
      )
      .eq("id", orderId)
      .eq("order_type", ORDER_TYPE)
      .eq("service", "sajulink")
      .eq("payment_currency", "KRW")
      .maybeSingle();

    if (!order) {
      return backToResult(request, { lang: locale, payment: "notfound" });
    }

    // 이미 승인된 주문이면 그대로 통과시킨다(새로고침·뒤로가기 대비).
    if (order.payment_status === "PAID") {
      return backToResult(request, {
        lang: locale,
        payment: "paid",
        orderId,
      });
    }

    /**
     * **테스트 키로는 승인하지 않는다** (2026-08-19). 승인 API를 부르는 순간 결제가 완성되고
     * 상품이 나간다 — 심사 기간에 테스트 키를 운영에 넣어 두면 아무나 돈 없이 받아 갈 수 있는
     * 자리다. 허용 시각(`TOSS_ALLOW_TEST_KEY_UNTIL`)이 지나면 저절로 닫힌다 → `lib/toss.ts`
     *
     * 승인하지 않은 결제는 10분 뒤 만료되므로 돈도 상품도 움직이지 않는다.
     */
    if (!tossPaymentAllowed()) {
      return backToResult(request, {
        lang: locale,
        payment: "failed",
        code: "TOSS_TEST_KEY_BLOCKED",
      });
    }

    // **금액은 주문에 저장된 값으로 승인한다.** 쿼리로 돌아온 amount를 그대로 쓰면 위변조를
    // 그대로 승인하는 셈이 된다.
    const payment = await confirmTossPayment({
      paymentKey,
      orderId,
      expectedAmount: Number(order.payment_amount),
    });

    const metadata =
      order.metadata && typeof order.metadata === "object" && !Array.isArray(order.metadata)
        ? (order.metadata as Record<string, unknown>)
        : {};

    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_status: "PAID",
        metadata: {
          ...metadata,
          tossPaymentKey: payment.paymentKey,
          tossMethod: payment.method ?? null,
          paidAt: payment.approvedAt ?? new Date().toISOString(),
        },
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId)
      .eq("payment_status", "UNPAID");
    if (updateError) throw updateError;

    return backToResult(request, {
      lang: locale,
      payment: "paid",
      orderId,
    });
  } catch (error) {
    // 승인에 실패하면 결제도 되지 않은 상태다(토스는 승인해야 결제가 된다). 화면에서 다시
    // 시도하도록 안내한다.
    console.error("Toss confirm route failed", error);
    // **사람이 알아야 한다.** 승인 자체가 실패하면 결제도 안 된 상태라 이용자는 다시 시도하면
    // 되지만, 이것이 반복되면 키·채널 설정이나 토스 쪽 장애라 우리가 손을 대야 끝난다.
    notifyOps(
      "toss-confirm-failed",
      "토스 결제 승인에 실패했습니다",
      { orderId, orderType: ORDER_TYPE, reason: error instanceof Error ? error.message : String(error) },
      "critical",
    );
    return backToResult(request, { lang: locale, payment: "failed" });
  }
}
