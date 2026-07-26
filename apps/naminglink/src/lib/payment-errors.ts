import "server-only";

// 결제 확인 경로의 오류를 상태 코드와 "이용자에게 보여줄 문구"로 나눈다.
//
// 지금까지 confirm 라우트들은 catch에서 error.message를 그대로 돌려줬다. 그 메시지에는
// PORTONE_API_SECRET 미설정, 상점 ID 불일치, TEST 채널 차단 같은 내부 방어 내용이 들어 있어,
// 결제를 조작해 보려는 쪽에 어떤 검사에 걸렸는지 알려주는 셈이었다. 자세한 내용은 서버 로그에만
// 남기고 응답에는 분류된 문구만 쓴다.

export type PaymentErrorResponse = { status: number; message: string };

export function classifyPaymentError(error: unknown): PaymentErrorResponse {
  const raw = error instanceof Error ? error.message : "";
  if (raw.includes("저장소 연결") || raw.includes("설정되지 않")) {
    return {
      status: 503,
      message: "결제 확인 기능이 일시적으로 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.",
    };
  }
  if (raw.includes("접근 정보가 올바르지 않")) {
    return { status: 403, message: "결제 확인 정보가 올바르지 않습니다." };
  }
  if (raw.includes("찾을 수 없")) {
    return { status: 404, message: "결제 확인 대상 주문을 찾을 수 없습니다." };
  }
  // 포트원 검증 실패(상태·상점·금액·통화·채널)는 원인을 구분하지 않고 하나로 묶는다.
  if (
    raw.includes("포트원") ||
    raw.includes("결제 상점") ||
    raw.includes("결제 금액") ||
    raw.includes("결제 정보가") ||
    raw.includes("결제 채널")
  ) {
    return {
      status: 402,
      message: "결제를 확인하지 못했습니다. 결제가 정상 완료되었는지 확인한 뒤 다시 시도해 주세요.",
    };
  }
  return { status: 500, message: "결제 확인에 실패했습니다. 잠시 후 다시 시도해 주세요." };
}
