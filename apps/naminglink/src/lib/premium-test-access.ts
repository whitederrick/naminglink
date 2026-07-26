import "server-only";

import { timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

import { requireAdmin } from "@/lib/admin-auth";

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
 * - 운영 환경: 운영자(admin) 로그인 토큰이 있으면 허용한다(권장 경로).
 *   보조적으로, PREMIUM_TEST_MODE=true + PREMIUM_TEST_SECRET 헤더 일치도 허용한다.
 *   (플래그만 남겨도, 로그인/시크릿 없이는 무단 개방되지 않음)
 */
export async function isPremiumTestRequestAllowed(request: Request): Promise<boolean> {
  if (process.env.NODE_ENV !== "production") return true;

  // 운영자 로그인 게이트: admin/super_admin 권한이면 결제 없이 테스트 허용
  const admin = await requireAdmin(request as NextRequest);
  if (admin.ok) return true;

  // 보조 경로: 시크릿 헤더(자동화 테스트 등)
  if (process.env.PREMIUM_TEST_MODE === "true" && process.env.PREMIUM_TEST_SECRET) {
    const provided = request.headers.get(TEST_SECRET_HEADER);
    return Boolean(provided) && safeEqual(provided as string, process.env.PREMIUM_TEST_SECRET);
  }
  return false;
}
