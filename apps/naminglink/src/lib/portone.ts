import "server-only";

import { PaymentClient } from "@portone/server-sdk";
import {
  isUnrecognizedPayment,
  type PaidPayment,
} from "@portone/server-sdk/payment";

let paymentClient: ReturnType<typeof PaymentClient> | null = null;

// 결제 일원화(2026-07-29 확정): **포트원은 해외 페이팔 전용이다.**
//
// 국내 결제는 토스페이먼츠 직접 연동(`lib/toss.ts`)으로 옮겼고, 포트원 경유 카카오페이 채널은
// 심사가 취소돼 쓰지 않는다. 그래서 국내 채널 분기와 단일 채널 키(NEXT_PUBLIC_PORTONE_CHANNEL_KEY)
// 폴백을 여기서 지웠다. **국내 주문이 포트원으로 떨어지는 경로를 남겨 두면 안 된다** — 폴백이
// 있으면 토스 키를 넣지 않은 상태에서도 결제창이 열려, 계약하지 않은 채널로 돈이 흐른다.
export function getPortOnePaypalConfig() {
  const storeId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
  const channelKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL;
  if (!storeId || !channelKey) return null;
  return { storeId, channelKey, payMethod: "PAYPAL" as const };
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
