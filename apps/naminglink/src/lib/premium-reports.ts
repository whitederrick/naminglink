import "server-only";

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { HANJA_PRODUCTS } from "@/lib/hanja-products";

export {
  getHanjaProduct,
  HANJA_PRODUCT_CODES,
  HANJA_PRODUCTS,
  type HanjaProductCode,
} from "@/lib/hanja-products";

export const PREMIUM_HANJA_REPORT = {
  ...HANJA_PRODUCTS.TEN_SAJU_PDF,
  currency: "KRW",
  retentionHours: 24,
  storageBucket: "premium-reports",
} as const;

export function createPremiumReportAccess() {
  const token = randomBytes(32).toString("base64url");
  return { token, tokenHash: hashPremiumReportToken(token) };
}

export function hashPremiumReportToken(token: string) {
  return createHash("sha256").update(token, "utf8").digest("hex");
}

export function verifyPremiumReportToken(token: string, expectedHash: string) {
  const actualHash = hashPremiumReportToken(token);
  if (actualHash.length !== expectedHash.length) return false;
  return timingSafeEqual(Buffer.from(actualHash), Buffer.from(expectedHash));
}

export function premiumReportExpiresAt(paidAt: Date) {
  return new Date(
    paidAt.getTime() + PREMIUM_HANJA_REPORT.retentionHours * 60 * 60 * 1000,
  );
}

export function premiumReportRemainingSeconds(expiresAt: string | Date) {
  const expiresAtMs =
    expiresAt instanceof Date ? expiresAt.getTime() : Date.parse(expiresAt);
  if (!Number.isFinite(expiresAtMs)) return 0;
  return Math.max(0, Math.floor((expiresAtMs - Date.now()) / 1000));
}
