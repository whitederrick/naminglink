import "server-only";

import { PaymentClient } from "@portone/server-sdk";
import { isUnrecognizedPayment, type PaidPayment } from "@portone/server-sdk/payment";

// 결제 검증. naminglink의 `src/lib/portone.ts`와 같은 규칙을 쓴다 — 상점이 하나이므로
// 환경변수도 같고, 검증도 같아야 한다.
//
// **일부러 복사해 두었다.** naminglink의 결제 경로는 곧 첫 실결제를 앞두고 있어, 지금
// packages/core로 끌어올리며 건드리면 검증되지 않은 변경이 그 위에 얹힌다. 양쪽 다 실결제로
// 확인한 뒤에 합치는 것이 맞다. 그때까지 **한쪽만 고치지 말 것** — 검증 규칙이 갈리면
// 한쪽에만 구멍이 생긴다.

let paymentClient: ReturnType<typeof PaymentClient> | null = null;

/** 국내는 카카오페이(KRW), 해외는 페이팔(USD). */
export type PortOneChannel = "kakaopay" | "paypal";

export function getPortOnePublicConfig(channel: PortOneChannel) {
  const storeId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
  if (!storeId) return null;

  if (channel === "paypal") {
    const channelKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL;
    if (!channelKey) return null;
    return { storeId, channelKey, payMethod: "PAYPAL" as const };
  }

  // 카카오페이 키가 없으면 단일 채널 키로 폴백한다. 테스트 채널 하나로 쓰던 구성이 그대로
  // 동작하게 하려는 것이고, payMethod는 채널에 따라 달라진다.
  const kakaopayKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_KAKAOPAY;
  const channelKey = kakaopayKey ?? process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY;
  if (!channelKey) return null;
  return {
    storeId,
    channelKey,
    payMethod: kakaopayKey ? ("EASY_PAY" as const) : ("CARD" as const),
  };
}

function getPaymentClient() {
  const secret = process.env.PORTONE_API_SECRET;
  if (!secret) throw new Error("PORTONE_API_SECRET이 설정되지 않았습니다.");
  paymentClient ??= PaymentClient({ secret });
  return paymentClient;
}

/**
 * 결제를 포트원에 직접 물어 확인한다. 클라이언트가 보내온 "결제됐다"는 말은 믿지 않는다.
 *
 * 확인하는 것: 결제 완료 상태 · 상점 일치 · 결제 ID 일치 · 금액과 통화 일치 · **LIVE 채널**.
 * 마지막이 특히 중요하다 — 하나의 상점에 TEST 채널이 함께 있을 수 있고 채널 키는 브라우저에
 * 노출되므로, 이 검증이 없으면 TEST 채널로 "결제"해 실제 돈 없이 주문을 PAID로 만들 수 있다.
 * 다크 런치·테스트 기간에만 PORTONE_ALLOW_TEST_CHANNEL=true로 한시 허용한다.
 */
export async function getVerifiedPayment(
  paymentId: string,
  expectedAmount: number,
  expectedCurrency: string,
) {
  const payment = await getPaymentClient().getPayment({ paymentId });
  if (isUnrecognizedPayment(payment) || payment.status !== "PAID") {
    throw new Error("포트원에서 결제 완료 상태를 확인하지 못했습니다.");
  }

  const storeId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
  if (!storeId || payment.storeId !== storeId) {
    throw new Error("결제 상점 정보가 일치하지 않습니다.");
  }

  if (
    payment.id !== paymentId ||
    payment.amount.total !== expectedAmount ||
    payment.amount.paid !== expectedAmount ||
    payment.currency !== expectedCurrency
  ) {
    throw new Error("결제 금액 또는 통화 정보가 주문과 일치하지 않습니다.");
  }

  const allowTestChannel = process.env.PORTONE_ALLOW_TEST_CHANNEL === "true";
  if (!allowTestChannel && payment.channel?.type !== "LIVE") {
    throw new Error("실 결제 채널이 아닙니다.");
  }

  return payment as PaidPayment;
}
