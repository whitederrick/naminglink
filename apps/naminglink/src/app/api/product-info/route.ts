import { NextRequest, NextResponse } from "next/server";

import { displayPrice, getProductSetting } from "@/lib/product-settings";
import { isPaymentReady } from "@/lib/purchase";

export const runtime = "nodejs";

// 구매 UI가 "지금 살 수 있는가"와 "얼마인가"를 묻는 **단일 창구**.
//
// 규칙은 하나다: **응답에 코드가 있으면 구매 가능, 없으면 준비 중.**
// 예전에는 화면마다 판정이 달랐다 — 어떤 패널은 `NEXT_PUBLIC_*` 키만 보고, 어떤 패널은 상품
// 판매 여부만 보고, 도장 페이지는 둘 다 안 보고 정적 가격을 그렸다. 그래서 상품을 내려도
// 세 자리는 가격이 그대로 보였고, **결제 키를 넣는 순간 판매 중지 상품의 버튼이 활성화됐다**
// (눌러야 주문 라우트가 503을 돌려준다). 판정을 여기 한 곳으로 모아 그 어긋남을 없앤다.
//
// 금액 결정은 여전히 주문 라우트가 한다 — 이 값은 표시용이다.
const ALLOWED = new Set([
  "GLOBAL_NAME_PDF",
  "HANGUL_ART_PDF",
  "NAME_ART_PACK",
  "CANDIDATE_UNLOCK_KRW",
  "CANDIDATE_UNLOCK_USD",
  // 한자 상세 3종(국내 전용). 예전에는 여기 없어서 그 패널이 정적 가격표를 그대로 그렸다.
  "FIVE_DETAIL",
  "TEN_DETAIL",
  "TEN_SAJU_PDF",
  // 도장은 모델마다 값이 다르다(2026-07-27). 옛 단일 가격 코드는 꺼져 있어 조회하면 실패한다.
  "STAMP_ROUND_WOOD_KRW",
  "STAMP_SQUARE_WOOD_KRW",
  "STAMP_EBONY_KRW",
  "STAMP_ROUND_WOOD_USD",
  "STAMP_SQUARE_WOOD_USD",
  "STAMP_EBONY_USD",
]);

export async function GET(request: NextRequest) {
  const codes = (request.nextUrl.searchParams.get("codes") ?? "")
    .split(",")
    .map((code) => code.trim())
    .filter((code) => ALLOWED.has(code))
    .slice(0, 10);
  if (codes.length === 0) {
    return NextResponse.json({ ok: false, error: "조회할 상품 코드가 없습니다." }, { status: 400 });
  }
  const products: Record<
    string,
    { amount: number; currency: string; display: string; fontCount: number }
  > = {};
  for (const code of codes) {
    try {
      const setting = await getProductSetting(code);
      // 판매 중이어도 그 통화의 결제 수단이 없으면 살 수 없다. 둘을 함께 본다.
      if (!isPaymentReady(setting.currency)) continue;
      products[code] = {
        amount: setting.amount,
        currency: setting.currency,
        display: displayPrice(setting),
        fontCount: setting.font_count,
      };
    } catch {
      // 판매 중이 아닌 상품은 응답에서 제외한다(클라이언트는 가격을 감추고 "준비 중"으로 둔다).
    }
  }
  return NextResponse.json({ ok: true, products });
}
