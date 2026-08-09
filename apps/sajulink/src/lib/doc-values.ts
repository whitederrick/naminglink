import { BIRTHPLACES } from "@/lib/birthplaces";
import { BRANCH_RELATION_SCORE } from "@/lib/engines/branches";
import { DEFAULT_SCORING_CONFIG } from "@/lib/engines/today-fortune";
import { STRONG_THRESHOLD, WEAK_THRESHOLD } from "@/lib/engines/yongsin";
import type { Locale } from "@/lib/i18n";
import { REPORT_PAGE_COUNT } from "@/lib/report-pages";
import { getReportPrices } from "@/lib/report-product";

/**
 * 편집 문서의 자리표시자를 채울 값.
 *
 * **글에 숫자를 적지 않으려고 있는 파일이다.** 점수·경계값·등급 문턱은 전부 엔진이 정하는데
 * 안내 문서가 「45%」·「+20점」이라고 적어 두면, 규칙을 고치는 날 **화면과 글이 갈린다.**
 * 이 저장소가 오래 지켜 온 규칙이고(`lib/engines/`에서 읽어 그린다), 자료로 옮기면서도 그대로
 * 둔다 — 오늘의 운세 문서 하나에만 스무 개 넘는 수가 들어 있다.
 *
 * **한곳에 모아 둔다.** 같은 값을 여러 문서가 쓴다. 화면마다 따로 읽으면 어느 하나가 다른
 * 자료를 보게 되는 날이 온다.
 *
 * **못 읽은 값은 넣지 않는다.** 자리표시자가 채워지지 않으면 `DocBody`가 그 블록을 통째로
 * 그리지 않는다 — 화면에 `{scoreChung}`이 그대로 나가거나 값이 빠진 문장이 나가는 것보다 낫다.
 *
 * 로케일을 받는 것은 형제 앱과 꼴을 맞추기 위해서다. 이 앱은 아직 로케일마다 달라지는 값이
 * 없지만, 부르는 쪽(`guide-page`)이 같은 모양이어야 옮겨 다니기 쉽다.
 */
export async function docValues(_locale: Locale): Promise<Record<string, string>> {
  const percent = (value: number) => `${Math.round(value * 100)}%`;
  /** 가점·감점은 부호가 뜻의 일부다. 「+20」과 「20」은 다른 말이 된다. */
  const signed = (value: number) => (value > 0 ? `+${value}` : String(value));

  const cfg = DEFAULT_SCORING_CONFIG;
  const gradeMin = (code: string) =>
    String(cfg.grades.find((grade) => grade.code === code)?.min ?? "");

  const values: Record<string, string> = {
    // 신강·신약 경계. 인성+비겁은 다섯 중 둘이므로 고르면 40%가 된다 — 그 40%도 세어서 낸다.
    strongThreshold: percent(STRONG_THRESHOLD),
    weakThreshold: percent(WEAK_THRESHOLD),
    evenAllyRatio: percent(2 / 5),

    // 지지 관계표. 안내가 표로도 적고 문장 속에서도 부른다.
    scoreSamhap: String(BRANCH_RELATION_SCORE.SAMHAP),
    scoreYukhap: String(BRANCH_RELATION_SCORE.YUKHAP),
    scoreBanhap: String(BRANCH_RELATION_SCORE.BANHAP),
    scoreSame: String(BRANCH_RELATION_SCORE.SAME),
    scoreNeutral: String(BRANCH_RELATION_SCORE.NEUTRAL),
    scoreWonjin: String(BRANCH_RELATION_SCORE.WONJIN),
    scoreChung: String(BRANCH_RELATION_SCORE.CHUNG),

    // 오늘의 운세 — 기준점과 폭.
    baseScore: String(cfg.base),
    clampLow: String(cfg.clamp[0]),
    clampHigh: String(cfg.clamp[1]),

    // 용신과 오늘의 관계.
    todayIsYongsin: signed(cfg.yongsinRelation.todayIsYongsin),
    todayGeneratesYongsin: signed(cfg.yongsinRelation.todayGeneratesYongsin),
    todayControlsYongsin: signed(cfg.yongsinRelation.todayControlsYongsin),
    todayIsGisin: signed(cfg.yongsinRelation.todayIsGisin),

    // 일간과 오늘의 관계.
    generatesSelf: signed(cfg.dayMasterRelation.generatesSelf),
    sameElement: signed(cfg.dayMasterRelation.sameElement),
    selfControls: signed(cfg.dayMasterRelation.selfControls),
    selfGenerates: signed(cfg.dayMasterRelation.selfGenerates),
    controlsSelf: signed(cfg.dayMasterRelation.controlsSelf),

    // 지지 관계(오늘의 운세 쪽 값. 위 관계표와 쓰임이 다르다).
    branchSamhap: signed(cfg.branchRelation.samhap),
    branchYukhap: signed(cfg.branchRelation.yukhap),
    branchBanhap: signed(cfg.branchRelation.banhap),
    branchWonjin: signed(cfg.branchRelation.wonjin),
    branchChung: signed(cfg.branchRelation.chung),
    branchMaxAbs: String(cfg.branchRelation.maxAbs),

    // 신강·신약에 따른 가감.
    weakTodayHelps: signed(cfg.strengthAdjust.weakTodayHelps),
    strongTodayDrains: signed(cfg.strengthAdjust.strongTodayDrains),
    strongTodayHelps: signed(cfg.strengthAdjust.strongTodayHelps),
    weakTodayBurdens: signed(cfg.strengthAdjust.weakTodayBurdens),

    // 등급 문턱.
    gradeDaegilMin: gradeMin("DAEGIL"),
    gradeGilMin: gradeMin("GIL"),
    gradePyeongMin: gradeMin("PYEONG"),
    gradeJuuiMin: gradeMin("JUUI"),
    gradeJosimMin: gradeMin("JOSIM"),

    overallShare: percent(cfg.categoryWeights.overallShare),

    cityCount: String(BIRTHPLACES.length),
    pageCount: String(REPORT_PAGE_COUNT),
  };

  /**
   * 값은 상품 설정(DB)이 정한다.
   *
   * `getReportPrices()`는 조회에 실패해도 던지지 않고 씨앗 값을 돌려준다 — 안내는 표시
   * 경로이지 결제 경로가 아니라서, 값을 못 읽었다고 문서 전체가 실패하면 안 된다.
   */
  const prices = await getReportPrices();
  values.priceDomestic = prices.domestic;
  values.priceGlobal = prices.global;

  return values;
}
