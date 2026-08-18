import { unstable_cache } from "next/cache";

import { getGuideCounts } from "@/lib/guide-data";
import { PRODUCT_SETTINGS_TAG } from "@/lib/product-settings";
import { getPurchaseDisplay } from "@/lib/purchase";

/**
 * 편집 문서의 자리표시자를 채울 값.
 *
 * **한곳에 모아 둔다.** 같은 값을 두 화면이 쓰는데(`{characterTotal}`은 안내 넷이 쓴다) 화면마다
 * 따로 읽으면 어느 하나가 다른 자료를 보게 되는 날이 온다.
 *
 * **못 읽은 값은 넣지 않는다.** 자리표시자가 채워지지 않으면 `DocBody`가 그 블록을 통째로
 * 그리지 않는다 — 화면에 `{characterTotal}`이 나가거나 「대법원 표 자 입니다」처럼 값이 빠진
 * 문장이 나가는 것보다 낫다. 옮기기 전 코드도 `counts ? … : null`로 같은 판단을 했다.
 */
async function readDocValues(): Promise<Record<string, string>> {
  const values: Record<string, string> = {};

  const counts = await getGuideCounts();
  if (counts) {
    const n = (value: number) => value.toLocaleString("en-US");
    values.characterTotal = n(counts.characterTotal);
    values.syllableCount = n(counts.syllableCount);
    values.announcedTotal = n(counts.announcedTotal);
    values.listedTotal = n(counts.listedTotal);
    values.excludedNoStandardCode = n(counts.excludedNoStandardCode);
    values.avoidTotal = n(counts.avoidTotal);
    values.avoidCommonlyUsed = n(counts.avoidCommonlyUsed);
    if (counts.effectiveDate) values.effectiveDate = counts.effectiveDate;
    if (counts.publisher) values.publisher = counts.publisher;
  }

  /**
   * 값은 **살 수 있을 때만** 넣는다. 못 넣으면 그 블록이 통째로 빠진다 — 틀린 값을 적거나
   * 살 수 없는 값을 적는 것보다 낫다.
   *
   * **판정을 `getPurchaseDisplay`로 옮겼다** (2026-08-11). 예전에는 `getProductSetting`을 직접
   * 읽어 **상품이 켜져 있는지만** 봤다. 그런데 이 저장소에는 이미 「지금 이 상품을 살 수
   * 있는가」의 단일 판정이 있고(`lib/purchase.ts`), 그것은 **결제 수단이 준비됐는지까지** 본다.
   *
   * 어긋난 결과가 화면에 그대로 나가고 있었다: 결제 키가 없어 화면의 구매 단추는 전부
   * "준비 중"인데, **안내 문서만 정가를 찍고 있었다**(「후보 전체 일괄 공개 — 990원」). 팔지
   * 않는 값을 확정 상품처럼 적는 자리라 애드센스 심사에서도, 표시광고법에서도 좋을 것이 없다.
   *
   * 이제 살 수 없으면 자리표시자가 남고 → `DocBody`가 그 절을 그리지 않는다 → **23개 언어에서
   * 함께 빠진다.** 번역을 다시 돌릴 필요가 없다.
   */
  const priced = async (name: string, code: string) => {
    const display = await getPurchaseDisplay(code);
    if (display) values[name] = display;
  };

  await Promise.all([
    priced("priceUnlock", "CANDIDATE_UNLOCK_KRW"),
    priced("priceFiveDetail", "FIVE_DETAIL"),
    priced("priceTenDetail", "TEN_DETAIL"),
    priced("priceTenSaju", "TEN_SAJU_PDF"),
    priced("priceStampRound", "STAMP_ROUND_WOOD_KRW"),
    priced("priceStampSquare", "STAMP_SQUARE_WOOD_KRW"),
    priced("priceStampEbony", "STAMP_EBONY_KRW"),
  ]);

  return values;
}

/**
 * **미리 만들어 둔 화면이 옛 금액을 물고 굳지 않게 한다** (2026-08-18).
 *
 * 안내 문서가 정적으로 만들어지면서 이 값들이 HTML에 박히게 됐다. 금액은 운영자가 콘솔에서
 * 바꾸는 값이라, 캐시에 태그를 달아 두지 않으면 **상품을 끈 뒤에도 그 화면만 정가를 계속
 * 내민다.** 팔지 않는 값을 확정 상품처럼 적는 자리다(표시광고법·애드센스 둘 다 걸린다).
 *
 * 운영자가 상품을 저장하면 `api/admin/products`가 이 태그를 무효화해 그 화면들이 다시
 * 만들어진다. 태그가 없는 값도 있어서(한자 수는 `guide-data.ts`의 하루 캐시가 맡는다)
 * `revalidate`로 상한을 함께 걸어 둔다.
 */
export const docValues = unstable_cache(readDocValues, ["doc-values"], {
  tags: [PRODUCT_SETTINGS_TAG],
  revalidate: 3600,
});
