import "server-only";
import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";

export function getRequestIp(request: NextRequest) {
  // x-real-ip는 Vercel 등 신뢰 프록시가 실제 클라이언트 IP로 덮어쓴다.
  // x-forwarded-for의 첫 값은 클라이언트가 위조할 수 있으므로, 프록시가 마지막에
  // 덧붙이는 값(맨 오른쪽)을 사용해 헤더 회전으로 한도를 우회하는 것을 막는다.
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((part) => part.trim()).filter(Boolean);
    if (parts.length) return parts[parts.length - 1];
  }
  return "local";
}

export function getCountryCode(request: NextRequest) {
  const value = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  return value && /^[A-Z]{2}$/.test(value) ? value : null;
}

export function getDailyVisitorHash(request: NextRequest) {
  const secret =
    process.env.ANALYTICS_HASH_SALT ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) return null;

  const day = new Date().toISOString().slice(0, 10);
  return createHmac("sha256", secret)
    .update(`${day}:${getRequestIp(request)}`)
    .digest("hex");
}
