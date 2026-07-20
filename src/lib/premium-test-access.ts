import "server-only";

import { timingSafeEqual } from "node:crypto";

const TEST_SECRET_HEADER = "x-premium-test-secret";

function safeEqual(a: string, b: string) {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return timingSafeEqual(bufferA, bufferB);
}

/**
 * 결제 없이 프리미엄 분석·PDF를 만드는 테스트 엔드포인트의 접근 허용 여부.
 * - 개발 환경: 항상 허용.
 * - 운영 환경: PREMIUM_TEST_MODE=true 이고, PREMIUM_TEST_SECRET이 설정되어 있으며,
 *   요청 헤더의 시크릿이 일치할 때만 허용한다. (플래그만 남겨도 무단 개방되지 않음)
 */
export function isPremiumTestRequestAllowed(request: Request) {
  if (process.env.NODE_ENV !== "production") return true;
  if (process.env.PREMIUM_TEST_MODE !== "true") return false;
  const secret = process.env.PREMIUM_TEST_SECRET;
  if (!secret) return false;
  const provided = request.headers.get(TEST_SECRET_HEADER);
  return Boolean(provided) && safeEqual(provided as string, secret);
}
