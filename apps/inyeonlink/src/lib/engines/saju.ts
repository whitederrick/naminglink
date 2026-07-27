import { BRANCH_RELATION_SCORE, branchRelation } from "./branches";
import type { Prepared } from "./prepare";
import { dayMasterBond, mutualRelation, spouseStar } from "./relations";
import { clampScore, type Factor, type MatchEngine } from "./types";
import { resolveYongsin, supplyLevel, supplyScore } from "./yongsin";

// 상생·상극표는 @naminglink/core/saju/elements 하나만 둔다. 일간 관계를 십신으로, 오행 항목을
// 용신으로 옮기면서 여기서 따로 들고 있을 이유가 없어졌다 — 같은 표가 두 곳에 있으면 언젠가
// 어긋난다.

/**
 * 사주 궁합 항목별 기본 비중.
 *
 * 배우자성은 성별을 모르면 계산할 수 없다. 그 경우 이 항목을 빼고 **남은 항목의 비중을 다시
 * 정규화**한다 — 빠진 자리를 0점으로 두면 성별을 안 밝힌 사용자가 부당하게 낮은 점수를 받는다.
 *
 * 가중치는 지금 코드 상수다. 계획서는 DB에서 관리하자고 했는데, 이 서비스는 입력을 저장하지
 * 않아 아직 DB를 쓰지 않는다 — 관리 화면을 붙일 때 product_settings로 옮긴다.
 */
export const SAJU_WEIGHTS = {
  dayMasterRelation: 0.32,
  spouseStar: 0.23,
  elementSupply: 0.25,
  dayBranchRelation: 0.2,
} as const;

export const sajuEngine: MatchEngine<Prepared> = {
  key: "saju",
  run(a, b) {
    const elementA = a.dayMaster.element;
    const elementB = b.dayMaster.element;

    // 오행은 "합쳐서 고른가"가 아니라 "상대가 내게 필요한 것을 갖고 있는가"로 본다. 세력은
    // 표면 글자 개수가 아니라 지장간·월령을 반영한 값이다(@naminglink/core/saju/elements).
    //
    // 보완은 본래 비대칭이다 — A에게 필요한 것과 B에게 필요한 것이 다르다. 그래서 양방향을
    // 각각 재고 평균한다. 평균이므로 총점은 대칭으로 남는다.
    const yongsinA = resolveYongsin(a.dayMaster.element, a.elements.strength);
    const yongsinB = resolveYongsin(b.dayMaster.element, b.elements.strength);
    const supplyToA = supplyScore(yongsinA, b.elements.strength);
    const supplyToB = supplyScore(yongsinB, a.elements.strength);
    const supply = (supplyToA + supplyToB) / 2;

    const dayBranch = branchRelation(a.dayBranch, b.dayBranch);
    const relation = mutualRelation(a, b);
    const bond = dayMasterBond(relation);

    const factors: Factor[] = [
      {
        key: "dayMasterRelation",
        score: bond.score,
        weight: SAJU_WEIGHTS.dayMasterRelation,
        note: `dayMaster.${bond.bond}`,
        noteParams: { elementA, elementB },
      },
      {
        key: "elementSupply",
        score: clampScore(supply),
        weight: SAJU_WEIGHTS.elementSupply,
        note: `supply.${supplyLevel(supply)}`,
        noteParams: {
          // 두 사람이 각각 무엇을 필요로 하는지를 문구가 그대로 쓴다.
          needA: yongsinA.favorable[0],
          needB: yongsinB.favorable[0],
        },
      },
      {
        key: "dayBranchRelation",
        score: BRANCH_RELATION_SCORE[dayBranch],
        weight: SAJU_WEIGHTS.dayBranchRelation,
        note: `dayBranch.${dayBranch}`,
      },
    ];

    // 배우자성은 오행이 아니라 십신으로 본다. 같은 재성이라도 음양이 어긋난 정재라야
    // 배우자 자리이고, 편재는 활동·재물의 성격에 가깝다.
    const spouse = spouseStar(relation, a.person.gender, b.person.gender);
    if (spouse) {
      factors.splice(1, 0, {
        key: "spouseStar",
        score: spouse.score,
        weight: SAJU_WEIGHTS.spouseStar,
        note: `spouseStar.${spouse.level}`,
      });
    }

    // 항목이 빠졌을 수 있으므로 남은 비중의 합으로 나눠 정규화한다.
    const weightSum = factors.reduce((sum, factor) => sum + factor.weight, 0);
    const score = factors.reduce(
      (sum, factor) => sum + factor.score * (factor.weight / weightSum),
      0,
    );

    return { key: "saju" as const, score: clampScore(score), factors };
  },
};
