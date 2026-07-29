import "server-only";

import { getPortOnePaypalConfig } from "@/lib/portone";
import { displayPrice, getProductSetting } from "@/lib/product-settings";
import { tossConfigured } from "@/lib/toss";

/**
 * "지금 이 상품을 살 수 있는가"의 **단일 판정**.
 *
 * 예전에는 화면마다 기준이 달랐다 — 어떤 패널은 `NEXT_PUBLIC_*` 키만 보고, 어떤 패널은 상품
 * 판매 여부만 보고, 도장 페이지는 둘 다 안 보고 정적 가격을 그렸다. 그래서 상품을 내려도
 * 세 자리는 정가가 그대로 보였고, **결제 키를 넣는 순간 판매 중지 상품의 버튼이 활성화됐다**
 * (눌러야 주문 라우트가 503을 돌려준다).
 *
 * 살 수 있으려면 **둘 다** 참이어야 한다: 상품이 판매 중(`product_settings.enabled`)이고,
 * 그 통화의 결제 수단이 준비돼 있을 것.
 */

/**
 * 통화별 결제 준비 여부. **주문 라우트와 같은 조건이어야 한다.**
 * 국내(KRW) = 토스페이먼츠 직접, 해외(USD) = 포트원 경유 페이팔(2026-07-29 일원화).
 */
export function isPaymentReady(currency: string) {
  if (currency === "KRW") return tossConfigured;
  return Boolean(getPortOnePaypalConfig() && process.env.PORTONE_API_SECRET);
}

/**
 * 살 수 있으면 표시 가격, 아니면 **null**.
 *
 * null을 돌려주는 것이 핵심이다. 예전처럼 정적 폴백 가격을 돌려주면 화면은 팔지 않는 상품의
 * 정가를 계속 보여 준다. 부르는 쪽은 null일 때 **가격을 감추고 "준비 중"** 으로 둔다.
 */
export async function getPurchaseDisplay(code: string): Promise<string | null> {
  try {
    const setting = await getProductSetting(code);
    if (!isPaymentReady(setting.currency)) return null;
    return displayPrice(setting);
  } catch {
    return null;
  }
}
