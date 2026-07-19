import "server-only";

import { PaymentClient } from "@portone/server-sdk";
import {
  isUnrecognizedPayment,
  type PaidPayment,
} from "@portone/server-sdk/payment";

let paymentClient: ReturnType<typeof PaymentClient> | null = null;

export function getPortOnePublicConfig() {
  const storeId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
  const channelKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY;
  if (!storeId || !channelKey) return null;
  return { storeId, channelKey };
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
  const config = getPortOnePublicConfig();
  if (!config || payment.storeId !== config.storeId) {
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
  return payment as PaidPayment;
}
