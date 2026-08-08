import { getGuideCounts } from "@/lib/guide-data";
import { displayPrice, getProductSetting } from "@/lib/product-settings";

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
export async function docValues(): Promise<Record<string, string>> {
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

  /** 값은 상품 설정이 정한다. 못 읽으면 그 문단이 빠진다 — 틀린 값을 적는 것보다 낫다. */
  const priced = async (name: string, code: string) => {
    try {
      values[name] = displayPrice(await getProductSetting(code));
    } catch {
      /* 자리표시자를 남겨 둔다 */
    }
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
