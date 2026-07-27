import type { FiveElement } from "@naminglink/core/saju";

import { BRANCH_RELATION_SCORE, branchRelation } from "./branches";
import type { Prepared } from "./prepare";
import { dayMasterBond, mutualRelation, spouseStar } from "./relations";
import { clampScore, type Factor, type MatchEngine } from "./types";

const ELEMENTS: FiveElement[] = ["WOOD", "FIRE", "EARTH", "METAL", "WATER"];

// 상생·상극표는 십신 계산(@naminglink/core/saju/ten-gods)이 갖고 있다. 일간 관계를 십신으로
// 옮기면서 여기서 따로 들고 있을 이유가 없어졌다 — 같은 표가 두 곳에 있으면 언젠가 어긋난다.

/**
 * 두 사람의 오행 세력을 합쳤을 때 다섯 기운이 고르게 퍼지는가.
 *
 * 한쪽에 없는 기운을 다른 쪽이 채워 주면 높아지고, 둘 다 같은 기운에 몰려 있으면 낮아진다.
 * 변동계수(표준편차/평균)로 재는데, 오행이 완전히 균등하면 0이고 한 기운에 전부 몰리면 2에
 * 가까워진다. 이를 뒤집어 55~100 구간으로 옮긴다 — 0점을 주지 않는 이유는 지지 관계와 같다.
 *
 * 넘어오는 값은 표면 글자 **개수**가 아니라 지장간·월령을 반영한 **세력**이다
 * (@naminglink/core/saju/elements 참고).
 */
export function elementBalanceScore(counts: Record<FiveElement, number>) {
  const values = ELEMENTS.map((element) => counts[element]);
  const total = values.reduce((sum, value) => sum + value, 0);
  if (total === 0) return 70;

  const mean = total / ELEMENTS.length;
  const variance =
    values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
    ELEMENTS.length;
  const deviation = Math.sqrt(variance) / mean; // 0(완전 균등) ~ 2(한쪽 몰림)
  const evenness = Math.max(0, 1 - deviation / 2);
  return clampScore(55 + evenness * 45);
}

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
  elementBalance: 0.25,
  dayBranchRelation: 0.2,
} as const;

export const sajuEngine: MatchEngine<Prepared> = {
  key: "saju",
  run(a, b) {
    const elementA = a.dayMaster.element;
    const elementB = b.dayMaster.element;

    // 표면 글자 개수가 아니라 지장간·월령을 반영한 세력을 합친다. 같은 木이라도 봄에 난 木과
    // 가을에 난 木은 힘이 다르고, 지지가 품은 기운은 겉으로 드러나지 않는다.
    const combined = Object.fromEntries(
      ELEMENTS.map((element) => [
        element,
        a.elements.strength[element] + b.elements.strength[element],
      ]),
    ) as Record<FiveElement, number>;

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
        key: "elementBalance",
        score: elementBalanceScore(combined),
        weight: SAJU_WEIGHTS.elementBalance,
        note: "",
        noteParams: { scarce: scarcestElement(combined) },
      },
      {
        key: "dayBranchRelation",
        score: BRANCH_RELATION_SCORE[dayBranch],
        weight: SAJU_WEIGHTS.dayBranchRelation,
        note: `dayBranch.${dayBranch}`,
      },
    ];

    // 오행 보완도 문구는 점수 구간에 따라 갈린다.
    const balance = factors[1].score;
    factors[1].note = `balance.${balance >= 80 ? "HIGH" : balance >= 65 ? "MID" : "LOW"}`;

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

function scarcestElement(counts: Record<FiveElement, number>) {
  return ELEMENTS.reduce((lowest, element) =>
    counts[element] < counts[lowest] ? element : lowest,
  );
}
