import { NextRequest, NextResponse } from "next/server";

import { displayPrice, getProductSetting } from "@/lib/product-settings";

export const runtime = "nodejs";

// 구매 UI가 가격·서체 수를 표시하기 위한 공개 조회(관리자 설정의 현재 값).
// 금액 결정은 여전히 주문 라우트(서버)에서만 한다 — 이 값은 표시용이다.
const ALLOWED = new Set([
  "GLOBAL_NAME_PDF",
  "HANGUL_ART_PDF",
  "NAME_ART_PACK",
  "CANDIDATE_UNLOCK_KRW",
  "CANDIDATE_UNLOCK_USD",
  "STAMP_KRW",
  "STAMP_USD",
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
      products[code] = {
        amount: setting.amount,
        currency: setting.currency,
        display: displayPrice(setting),
        fontCount: setting.font_count,
      };
    } catch {
      // 판매 중이 아닌 상품은 응답에서 제외한다(클라이언트는 버튼을 숨긴다).
    }
  }
  return NextResponse.json({ ok: true, products });
}
