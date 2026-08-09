import { BIRTHPLACES } from "@/lib/birthplaces";
import { ENGINE_WEIGHTS } from "@/lib/engines";
import { BRANCH_RELATION_SCORE } from "@/lib/engines/branches";
import { SAJU_WEIGHTS } from "@/lib/engines/saju";
import { STRONG_THRESHOLD, WEAK_THRESHOLD } from "@/lib/engines/yongsin";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getAllReportPrices } from "@/lib/report-product";

/**
 * 편집 문서의 자리표시자를 채울 값.
 *
 * **글에 숫자를 적지 않으려고 있는 파일이다.** 비중·점수·경계값은 전부 엔진 코드가 정하는데
 * 안내 문서가 "45%"라고 적어 두면, 규칙을 고치는 날 **화면과 글이 갈린다.** 이 저장소가 오래
 * 지켜 온 규칙이고(`lib/engines/`에서 읽어 그린다), 자료로 옮기면서도 그대로 둔다.
 *
 * **한곳에 모아 둔다.** 같은 값을 여러 문서가 쓴다 — 띠 비중은 안내 둘이, 지지 점수는 셋이
 * 쓴다. 화면마다 따로 읽으면 어느 하나가 다른 자료를 보게 되는 날이 온다.
 *
 * **못 읽은 값은 넣지 않는다.** 자리표시자가 채워지지 않으면 `DocBody`가 그 블록을 통째로
 * 그리지 않는다 — 화면에 `{weightZodiac}`이 그대로 나가거나 「비중은 를 차지합니다」처럼 값이
 * 빠진 문장이 나가는 것보다 낫다.
 *
 * 로케일을 받는 이유는 **리포트 장수**뿐이다. 목차는 로케일 사전이 갖고 있고 장수는 그 목록의
 * 길이라, 언어마다 세어야 맞는다.
 */
export async function docValues(locale: Locale): Promise<Record<string, string>> {
  const percent = (value: number) => `${Math.round(value * 100)}%`;
  const dictionary = getDictionary(locale);

  const values: Record<string, string> = {
    // 궁합의 두 축과 사주 쪽 네 항목.
    weightSaju: percent(ENGINE_WEIGHTS.saju),
    weightZodiac: percent(ENGINE_WEIGHTS.zodiac),
    weightDayMaster: percent(SAJU_WEIGHTS.dayMasterRelation),
    weightElementSupply: percent(SAJU_WEIGHTS.elementSupply),
    weightSpouseStar: percent(SAJU_WEIGHTS.spouseStar),
    weightDayBranch: percent(SAJU_WEIGHTS.dayBranchRelation),

    // 지지 관계표. 안내가 표로도 적고 문장 속에서도 부른다.
    scoreSamhap: String(BRANCH_RELATION_SCORE.SAMHAP),
    scoreYukhap: String(BRANCH_RELATION_SCORE.YUKHAP),
    scoreBanhap: String(BRANCH_RELATION_SCORE.BANHAP),
    scoreSame: String(BRANCH_RELATION_SCORE.SAME),
    scoreNeutral: String(BRANCH_RELATION_SCORE.NEUTRAL),
    scoreWonjin: String(BRANCH_RELATION_SCORE.WONJIN),
    scoreChung: String(BRANCH_RELATION_SCORE.CHUNG),

    // 신강·신약 경계. 인성+비겁은 다섯 중 둘이므로 고르면 40%가 된다 — 그 40%도 세어서 낸다.
    strongThreshold: percent(STRONG_THRESHOLD),
    weakThreshold: percent(WEAK_THRESHOLD),
    evenAllyRatio: percent(2 / 5),

    cityCount: String(BIRTHPLACES.length),

    // 목차 길이가 곧 장수다. 목차를 고치면 안내의 「A4 몇 장」이 따라온다.
    pagesGunghap: String(dictionary.report.contents.length),
    pagesAffinity: String(dictionary.affinityReport.contents.length),
  };

  /**
   * 값은 상품 설정(DB)이 정한다.
   *
   * `getAllReportPrices()`는 조회에 실패해도 던지지 않고 씨앗 값을 돌려준다 — 안내는 표시
   * 경로이지 결제 경로가 아니라서, 값을 못 읽었다고 문서 전체가 실패하면 안 된다.
   */
  const prices = await getAllReportPrices();
  values.priceGunghapDomestic = prices.gunghap.domestic;
  values.priceGunghapGlobal = prices.gunghap.global;
  values.priceAffinityDomestic = prices.affinity.domestic;
  values.priceAffinityGlobal = prices.affinity.global;

  return values;
}
