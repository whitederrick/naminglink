import "server-only";

import { CANDIDATE_UNLOCK_PRODUCTS } from "@/lib/unlock-products";
import { HANJA_PRODUCT_CODES } from "@/lib/hanja-products";
import { STAMP_MODEL_CODES, STAMP_REGIONS, stampSettingCode } from "@/lib/goods-products";
import { getPurchaseDisplay } from "@/lib/purchase";
import type { PolicyDocumentContent } from "@/lib/site-content";

/**
 * 요금 안내에서 **지금 살 수 없는 상품의 금액을 감춘다.**
 *
 * ## 왜 필요한가 (2026-08-11)
 *
 * 화면의 구매 단추는 살 수 없으면 자리째 빠지는데(`ResultAddOnServices`·프리미엄 패널),
 * **요금 문서만 정가를 그대로 나열하고 있었다.** 상품 20건이 전부 판매 중지인 지금도
 * 「₩2,900 · ₩4,900 · ₩9,900 · US$9.99 …」가 확정 상품처럼 보인다. 외부 검토가 그 자리를
 * 짚었고, 애드센스가 「가치가 별로 없는 콘텐츠」로 보는 항목과도 맞닿아 있다.
 *
 * ## 왜 글을 고치지 않고 그리는 쪽에서 거르는가
 *
 * 금액은 23개 로케일 약관 파일에 **글자로** 박혀 있다. 문장을 지우면 판매를 시작하는 날
 * 23벌을 다시 번역해 되살려야 하고, 그 사이 구조 검사기(`validate-legal-content`)가 요구하는
 * 절·문단 수도 흔들린다. **글은 그대로 두고 지금 팔 수 있는 것만 보여 준다.**
 *
 * ## 자리를 번호로 찾지 않는다
 *
 * 「세 번째 절이 한자 상품」처럼 순번으로 매기면 절이 하나 늘어난 날 조용히 엉뚱한 절이
 * 사라진다. 대신 **문단에 적힌 금액 자체**를 본다 — 상품표에서 지금 살 수 있는 금액 목록을
 * 만들고, 거기 없는 금액이 든 문단을 뺀다. 로케일과 무관하고 절 순서와도 무관하다.
 *
 * 금액 표기 규칙은 `scripts/verify-legal-prices.ts`와 **같은 것을 쓴다** — 한국어 원문은
 * `2,900원`, 나머지 로케일은 `₩2,900`이다. 두 곳이 갈리면 한쪽이 조용히 틀린다.
 */

/** 요금 문서에 나올 수 있는 상품 코드 전부. 하나라도 빠지면 그 금액이 영영 감춰진다. */
function pricedProductCodes(): string[] {
  return [
    ...HANJA_PRODUCT_CODES,
    ...Object.values(CANDIDATE_UNLOCK_PRODUCTS).map((product) => product.productCode),
    ...STAMP_REGIONS.flatMap((region) =>
      STAMP_MODEL_CODES.map((model) => stampSettingCode(model, region)),
    ),
    "GLOBAL_NAME_PDF",
    "HANGUL_ART_PDF",
    "NAME_ART_PACK",
  ];
}

/**
 * 문서 안의 금액처럼 보이는 토막.
 *
 * **천 단위 구분 쉼표만 삼키게 한다.** `[0-9,]+`로 두면 "₩990, 해외…"의 문장 쉼표까지 붙어
 * 있지도 않은 금액이 만들어진다(`verify-legal-prices.ts`가 겪은 그대로다).
 */
const AMOUNT = "[0-9]{1,3}(?:,[0-9]{3})*";
const TOKEN = new RegExp(`₩${AMOUNT}|US\\$[0-9]+\\.[0-9]{2}|${AMOUNT}원`, "g");

/** 지금 살 수 있는 상품의 금액 표기. 한국어 꼴(`2,900원`)과 나머지 꼴(`₩2,900`)을 함께 넣는다. */
export async function sellablePriceTokens(): Promise<Set<string>> {
  const tokens = new Set<string>();
  await Promise.all(
    pricedProductCodes().map(async (code) => {
      const display = await getPurchaseDisplay(code);
      if (!display) return;
      tokens.add(display);
      // `₩2,900` → `2,900원`. 한국어 원문이 쓰는 꼴이다.
      const krw = /^₩([0-9,]+)$/.exec(display);
      if (krw) tokens.add(`${krw[1]}원`);
    }),
  );
  return tokens;
}

/**
 * 살 수 없는 금액이 든 문단을 빼고, 그래서 빈 절이 되면 절도 뺀다.
 *
 * **금액이 없는 문단은 건드리지 않는다** — 무료 범위·광고 보상형·보관 기간·정식 결제 전 안내가
 * 거기 해당한다. 그 글은 판매 여부와 무관하게 참이다.
 *
 * 순수 함수로 둔다. 조회(`sellablePriceTokens`)와 갈라 두어야 검사기가 표를 만들어 태울 수 있다.
 */
export function withSellablePricesOnly(
  content: PolicyDocumentContent,
  sellable: ReadonlySet<string>,
): PolicyDocumentContent {
  const priced = (text: string) => (text.match(TOKEN) ?? []).length > 0;
  const sellableParagraph = (text: string) => {
    const amounts = text.match(TOKEN) ?? [];
    if (amounts.length === 0) return true;
    // 한 문단에 여러 상품이 있을 수 있다. 하나라도 살 수 있으면 남긴다.
    return amounts.some((amount) => sellable.has(amount));
  };

  const sections = content.sections
    .map((section) => {
      const hadPrices = section.paragraphs.some(priced);
      const paragraphs = section.paragraphs.filter(sellableParagraph);
      return { section: { ...section, paragraphs }, hadPrices };
    })
    /**
     * **값이 빠진 상품 절은 통째로 뺀다.**
     *
     * 처음에는 문단만 걸렀더니 「한자 의미 매칭 상세 상품」이라는 제목 아래 보관 기간 한 줄만
     * 남았다 — 팔지도 않는 상품의 이름이 제목으로 걸려 있고 내용은 부가 설명뿐인 껍데기다.
     * 「미출시 상품이 확정 상품처럼 보인다」는 지적이 겨눈 자리가 정확히 그것이다.
     *
     * 그래서 **원래 금액이 있던 절**은 금액이 하나라도 남을 때만 살린다. 애초에 금액이 없던
     * 절(무료 범위·광고 보상형·정식 결제 전 안내)은 건드리지 않는다.
     */
    .filter(({ section, hadPrices }) =>
      hadPrices ? section.paragraphs.some(priced) : section.paragraphs.length > 0,
    )
    .map(({ section }) => section);

  return { ...content, sections };
}
