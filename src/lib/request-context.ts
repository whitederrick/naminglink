import "server-only";
import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";

export function getRequestIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
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
