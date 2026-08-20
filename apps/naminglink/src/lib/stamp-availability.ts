import "server-only";

import {
  stampOrderableFrom,
  stampSettingCode,
  STAMP_MODEL_CODES,
  type StampRegion,
} from "@/lib/goods-products";
import { getPurchaseDisplay } from "@/lib/purchase";

/**
 * **도장을 지금 주문할 수 있는가.** 서버에서만 부른다.
 *
 * ## 왜 별도 파일인가 (2026-08-20)
 *
 * 처음에 이 함수를 `goods-products.ts` 에 두었다. 그런데 그 파일은 **클라이언트 컴포넌트도
 * 읽는다**(모델 표·권역 판정). `getPurchaseDisplay` 는 `server-only` 라, 동적 import 로
 * 감쌌는데도 번들러가 모듈 그래프를 따라가 이렇게 터졌다.
 *
 *     'server-only' cannot be imported from a Client Component module
 *
 * **`tsc` 는 0건이었다.** 띄워서 열어 보고서야 500이 나왔다. 그래서 서버 전용 조회는 여기,
 * 순수 판정(`stampOrderableFrom` · `stampRegionForLocale`)은 저기로 갈라 둔다.
 *
 * ## 왜 이 판정이 필요한가
 *
 * 「도장을 주문할 수 있는가」는 하나의 사실인데 두 화면이 **다르게** 판단하고 있었다.
 *
 *     HangulStampCard    글자가 있고 길이가 안 넘치면 버튼 활성   → 「주문 가능」
 *     stamp-order 페이지  상품 enabled AND 결제 수단              → 「주문 불가」
 *
 * 그래서 결과 화면의 단추는 살아 있는데 눌러 들어간 목적지가 「지금은 받지 않는다」고 말했다.
 * **닫힌 상품으로 사용자를 한 번 보낸 뒤 거절**하는 흐름이었다.
 */
export async function stampOrderable(region: StampRegion): Promise<boolean> {
  const prices = await Promise.all(
    STAMP_MODEL_CODES.map((code) => getPurchaseDisplay(stampSettingCode(code, region))),
  );
  return stampOrderableFrom(prices);
}
