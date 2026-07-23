import "server-only";

import { PaymentClient } from "@portone/server-sdk";
import {
  isUnrecognizedPayment,
  type PaidPayment,
} from "@portone/server-sdk/payment";

let paymentClient: ReturnType<typeof PaymentClient> | null = null;

// 결제 채널 계획(2026-07-23 확정): 포트원 경유 카카오페이(국내 KRW) + 페이팔(해외 USD).
// 카카오페이 키가 없으면 기존 단일 채널 키(NEXT_PUBLIC_PORTONE_CHANNEL_KEY)로 폴백해
// 테스트 채널 하나로 쓰던 기존 환경 구성이 계속 동작한다. payMethod는 채널에 따라
// 확정된다(카카오페이=EASY_PAY, 페이팔=PAYPAL, 폴백 채널=CARD).
export type PortOneChannel = "kakaopay" | "paypal";

export function getPortOnePublicConfig(channel: PortOneChannel = "kakaopay") {
  const storeId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
  if (!storeId) return null;
  if (channel === "paypal") {
    const channelKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL;
    if (!channelKey) return null;
    return { storeId, channelKey, payMethod: "PAYPAL" as const };
  }
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

export async function getVerifiedPremiumPayment(
  paymentId: string,
  expectedAmount: number,
  expectedCurrency = "KRW",
) {
  const payment = await getPaymentClient().getPayment({ paymentId });
  if (isUnrecognizedPayment(payment) || payment.status !== "PAID") {
    throw new Error("포트원에서 결제 완료 상태를 확인하지 못했습니다.");
  }
  // 채널과 무관하게 상점은 하나이므로 storeId만 직접 검증한다(특정 채널 키 미등록과 무관).
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
  // 채널 타입 검증: 실 결제는 반드시 LIVE 채널이어야 한다. 하나의 상점에 TEST 채널이
  // 공존할 수 있고 채널 키는 브라우저에 노출되므로, 이 검증이 없으면 공격자가 TEST 채널로
  // "결제"해 실제 금액 없이 주문을 PAID로 만들 수 있다. 다크런치/테스트 기간에만
  // PORTONE_ALLOW_TEST_CHANNEL=true로 TEST 채널을 한시 허용한다(운영 정식 오픈 시 제거).
  const allowTestChannel = process.env.PORTONE_ALLOW_TEST_CHANNEL === "true";
  if (!allowTestChannel && payment.channel?.type !== "LIVE") {
    throw new Error("실 결제 채널이 아닙니다.");
  }
  return payment as PaidPayment;
}
