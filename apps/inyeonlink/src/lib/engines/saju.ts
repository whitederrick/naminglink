import {
  calculatePremiumSaju,
  type FiveElement,
} from "@naminglink/core/saju";

import { BRANCH_RELATION_SCORE, branchOf, branchRelation } from "./branches";
import {
  clampScore,
  type Factor,
  type Gender,
  type MatchEngine,
  type Person,
} from "./types";

const ELEMENTS: FiveElement[] = ["WOOD", "FIRE", "EARTH", "METAL", "WATER"];

// 상생(相生): 木生火 火生土 土生金 金生水 水生木
const GENERATES: Record<FiveElement, FiveElement> = {
  WOOD: "FIRE",
  FIRE: "EARTH",
  EARTH: "METAL",
  METAL: "WATER",
  WATER: "WOOD",
};

// 상극(相剋): 木剋土 土剋水 水剋火 火剋金 金剋木
const CONTROLS: Record<FiveElement, FiveElement> = {
  WOOD: "EARTH",
  EARTH: "WATER",
  WATER: "FIRE",
  FIRE: "METAL",
  METAL: "WOOD",
};

/** 나를 극하는 오행. 관성(官星)을 찾을 때 쓴다. */
const CONTROLLED_BY: Record<FiveElement, FiveElement> = Object.fromEntries(
  ELEMENTS.map((element) => [CONTROLS[element], element]),
) as Record<FiveElement, FiveElement>;

export type ElementRelation = "GENERATE" | "SAME" | "CONTROL";

export function elementRelation(
  a: FiveElement,
  b: FiveElement,
): ElementRelation {
  if (a === b) return "SAME";
  if (GENERATES[a] === b || GENERATES[b] === a) return "GENERATE";
  if (CONTROLS[a] === b || CONTROLS[b] === a) return "CONTROL";
  // 오행 다섯 개에서 같음·상생·상극을 빼면 남는 관계가 없다.
  return "SAME";
}

const ELEMENT_RELATION_SCORE: Record<ElementRelation, number> = {
  GENERATE: 88,
  SAME: 76,
  CONTROL: 58,
};

/**
 * 배우자성(配偶者星)이 되는 오행.
 *
 * 전통 명리에서 배우자를 가리키는 십신은 성별에 따라 다르다.
 *   남성 → 재성(財星): 일간이 극하는 오행
 *   여성 → 관성(官星): 일간을 극하는 오행
 *
 * 성별을 밝히지 않으면 null을 돌려주고, 호출부가 이 항목을 계산에서 뺀다.
 */
export function spouseStarElement(
  dayMaster: FiveElement,
  gender: Gender,
): FiveElement | null {
  if (gender === "male") return CONTROLS[dayMaster];
  if (gender === "female") return CONTROLLED_BY[dayMaster];
  return null;
}

export type SpouseStarMatch = "BOTH" | "ONE" | "NONE";

const SPOUSE_STAR_SCORE: Record<SpouseStarMatch, number> = {
  BOTH: 95,
  ONE: 82,
  NONE: 66,
};

/**
 * 두 사람의 표면 오행을 합쳤을 때 다섯 기운이 고르게 퍼지는가.
 *
 * 한쪽에 없는 기운을 다른 쪽이 채워 주면 높아지고, 둘 다 같은 기운에 몰려 있으면 낮아진다.
 * 변동계수(표준편차/평균)로 재는데, 오행이 완전히 균등하면 0이고 한 기운에 전부 몰리면 2에
 * 가까워진다. 이를 뒤집어 55~100 구간으로 옮긴다 — 0점을 주지 않는 이유는 지지 관계와 같다.
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

export const sajuEngine: MatchEngine = {
  key: "saju",
  run(a: Person, b: Person) {
    const sajuA = toSaju(a);
    const sajuB = toSaju(b);
    const elementA = sajuA.dayMaster.element;
    const elementB = sajuB.dayMaster.element;

    const relation = elementRelation(elementA, elementB);

    const combined = Object.fromEntries(
      ELEMENTS.map((element) => [
        element,
        sajuA.visibleFiveElements.counts[element] +
          sajuB.visibleFiveElements.counts[element],
      ]),
    ) as Record<FiveElement, number>;

    const dayBranch = branchRelation(
      branchOf(sajuA.pillars.day.hanja),
      branchOf(sajuB.pillars.day.hanja),
    );

    const factors: Factor[] = [
      {
        key: "dayMasterRelation",
        score: ELEMENT_RELATION_SCORE[relation],
        weight: SAJU_WEIGHTS.dayMasterRelation,
        note: `dayMaster.${relation}`,
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

    const spouseStarA = spouseStarElement(elementA, a.gender);
    const spouseStarB = spouseStarElement(elementB, b.gender);
    if (spouseStarA !== null && spouseStarB !== null) {
      const matches =
        Number(spouseStarA === elementB) + Number(spouseStarB === elementA);
      const match: SpouseStarMatch =
        matches === 2 ? "BOTH" : matches === 1 ? "ONE" : "NONE";
      factors.splice(1, 0, {
        key: "spouseStar",
        score: SPOUSE_STAR_SCORE[match],
        weight: SAJU_WEIGHTS.spouseStar,
        note: `spouseStar.${match}`,
        noteParams: { starA: spouseStarA, starB: spouseStarB },
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

function toSaju(person: Person) {
  return calculatePremiumSaju({
    calendarType: person.calendarType,
    year: person.year,
    month: person.month,
    day: person.day,
    lunarLeapMonth: person.lunarLeapMonth,
    birthHour: person.birthHour,
    birthMinute: person.birthMinute,
    birthplace: person.birthplace,
  });
}
