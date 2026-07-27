import "server-only";

// 토스페이먼츠(국내 결제) 승인. **인연링크의 같은 파일과 내용을 맞춘다** — 같은 사업자·같은
// 계약이라 승인 규칙이 갈리면 한쪽에만 구멍이 생긴다.
//
// **포트원과 흐름이 반대다.** 포트원은 결제창을 통과하면 이미 결제가 끝나 있고 우리는 그것을
// 조회해 확인한다. 토스는 결제창을 통과해도 아직 결제가 아니며, **서버가 승인 API를 호출해야
// 비로소 결제가 된다.** 승인하지 않으면 10분 뒤 만료된다.
//
// 그래서 안전 성질도 다르다. 승인 전에는 돈이 빠져나가지 않으므로 "결제는 됐는데 상품을 못
// 받는" 상태가 생기지 않는다 — 포트원에서 웹훅으로 복구하던 그 문제가 국내 결제에는 없다.
//
// 흐름:
//   결제창 → successUrl?paymentKey&orderId&amount → 서버가 금액 대조 → 승인 API → 결제 완료
//
// 문서: https://docs.tosspayments.com/reference (결제 승인)

const CONFIRM_URL = "https://api.tosspayments.com/v1/payments/confirm";

/** 클라이언트 키와 시크릿 키가 모두 있어야 결제창을 띄울 수 있다. */
export const tossConfigured = Boolean(
  process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY && process.env.TOSS_SECRET_KEY,
);

export function getTossClientKey() {
  return process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ?? null;
}

/**
 * 승인 API의 Basic 인증 헤더.
 *
 * **시크릿 키 뒤의 콜론을 빠뜨리면 인증이 실패한다.** 토스 문서가 특별히 경고하는 부분이라
 * 여기 한 곳에서만 만든다.
 */
function authorizationHeader(secretKey: string) {
  return `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`;
}

export type TossPayment = {
  paymentKey: string;
  orderId: string;
  status: string;
  totalAmount: number;
  method?: string | null;
  approvedAt?: string | null;
};

/**
 * 결제를 승인한다. 승인에 성공해야 결제가 완료된 것이다.
 *
 * `expectedAmount`는 **반드시 서버가 들고 있는 주문 금액**이어야 한다. 리디렉트로 돌아온
 * 쿼리의 amount를 그대로 넘기면 위변조를 그대로 승인하는 셈이 된다 — 토스 문서가 명시적으로
 * 경고하는 지점이다.
 */
export async function confirmTossPayment({
  paymentKey,
  orderId,
  expectedAmount,
}: {
  paymentKey: string;
  orderId: string;
  expectedAmount: number;
}): Promise<TossPayment> {
  const secretKey = process.env.TOSS_SECRET_KEY;
  if (!secretKey) throw new Error("TOSS_SECRET_KEY가 설정되지 않았습니다.");

  const response = await fetch(CONFIRM_URL, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader(secretKey),
      "Content-Type": "application/json",
      // 같은 주문으로 승인이 두 번 날아가도 한 번만 처리되게 한다(새로고침·재시도 대비).
      "Idempotency-Key": orderId,
    },
    body: JSON.stringify({ paymentKey, orderId, amount: expectedAmount }),
  });

  const payload = (await response.json().catch(() => null)) as
    | (TossPayment & { code?: string; message?: string })
    | null;

  if (!response.ok || !payload) {
    // 실패 코드는 로그로만 남긴다. 사용자에게는 화면 문구로 안내한다.
    console.error("Toss confirm failed", response.status, payload?.code, payload?.message);
    throw new Error(payload?.code ?? "TOSS_CONFIRM_FAILED");
  }

  if (payload.status !== "DONE") {
    throw new Error(`TOSS_STATUS_${payload.status}`);
  }
  // 승인 응답의 금액까지 한 번 더 본다. 여기까지 어긋나면 우리 주문 데이터가 잘못된 것이다.
  if (Number(payload.totalAmount) !== expectedAmount) {
    throw new Error("TOSS_AMOUNT_MISMATCH");
  }

  return payload;
}
