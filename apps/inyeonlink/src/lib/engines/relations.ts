import {
  SPOUSE_ADJACENT,
  SPOUSE_GOD,
  tenGod,
  type TenGod,
} from "@naminglink/core/saju/ten-gods";

import type { Prepared } from "./prepare";
import type { Gender } from "./types";

// 십신을 궁합 문맥으로 옮기는 층. 계산 자체는 packages/core에 있고, 여기서는 "그래서 두
// 사람이 어떤 모양인가"를 정한다.

/** 십신을 다섯 갈래로 묶은 것. 관계의 모양을 정하는 데 쓴다. */
export type GodCategory =
  | "PEER" // 비겁 — 나와 같은 오행
  | "OUTPUT" // 식상 — 내가 생하는 쪽
  | "WEALTH" // 재성 — 내가 극하는 쪽
  | "OFFICER" // 관성 — 나를 극하는 쪽
  | "RESOURCE"; // 인성 — 나를 생하는 쪽

const CATEGORY: Record<TenGod, GodCategory> = {
  BIGYEON: "PEER",
  GEOPJAE: "PEER",
  SIKSIN: "OUTPUT",
  SANGGWAN: "OUTPUT",
  PYEONJAE: "WEALTH",
  JEONGJAE: "WEALTH",
  PYEONGWAN: "OFFICER",
  JEONGGWAN: "OFFICER",
  PYEONIN: "RESOURCE",
  JEONGIN: "RESOURCE",
};

/**
 * 관계의 모양.
 *
 * 십신은 열 가지지만 **두 사람을 마주 놓으면 세 모양밖에 나오지 않는다.** 한쪽이 상대를
 * 생하면 상대는 반드시 그쪽을 식상으로 보고, 한쪽이 상대를 극하면 상대는 반드시 그쪽을
 * 관성으로 본다. 같은 오행이면 양쪽 다 비겁이다. 그래서 이 셋이 전부다.
 */
export type RelationShape =
  | "ALIKE" // 서로 비겁 — 닮은 사이
  | "NURTURING" // 한쪽이 생하고 한쪽이 피어나는 사이
  | "TENSION"; // 한쪽이 극하고 한쪽이 받는 사이

export type MutualRelation = {
  /** A가 볼 때 B는 무엇인가 */
  aSeesB: TenGod;
  /** B가 볼 때 A는 무엇인가 */
  bSeesA: TenGod;
  shape: RelationShape;
  /**
   * NURTURING이면 기운을 내주는 쪽(0=첫 번째 사람), TENSION이면 몰아붙이는 쪽.
   * ALIKE이면 방향이 없어 null이다.
   */
  leadIndex: 0 | 1 | null;
};

export function mutualRelation(a: Prepared, b: Prepared): MutualRelation {
  const stemA = { stem: a.dayMaster.character, element: a.dayMaster.element };
  const stemB = { stem: b.dayMaster.character, element: b.dayMaster.element };
  const aSeesB = tenGod(stemA, stemB);
  const bSeesA = tenGod(stemB, stemA);
  const categoryA = CATEGORY[aSeesB];

  if (categoryA === "PEER") {
    return { aSeesB, bSeesA, shape: "ALIKE", leadIndex: null };
  }
  if (categoryA === "RESOURCE") {
    // A가 B를 인성으로 본다 = B가 A를 키운다.
    return { aSeesB, bSeesA, shape: "NURTURING", leadIndex: 1 };
  }
  if (categoryA === "OUTPUT") {
    return { aSeesB, bSeesA, shape: "NURTURING", leadIndex: 0 };
  }
  if (categoryA === "OFFICER") {
    // A가 B를 관성으로 본다 = B가 A를 누른다.
    return { aSeesB, bSeesA, shape: "TENSION", leadIndex: 1 };
  }
  return { aSeesB, bSeesA, shape: "TENSION", leadIndex: 0 };
}

export type SpouseLevel = "MUTUAL" | "STRONG" | "PARTIAL" | "SLIGHT" | "NONE";

const SPOUSE_LEVEL_SCORE: Record<SpouseLevel, number> = {
  MUTUAL: 95,
  STRONG: 90,
  PARTIAL: 84,
  SLIGHT: 75,
  NONE: 66,
};

/**
 * 배우자성 판정. 오행만 보던 것을 십신으로 바꾼 것이다.
 *
 * 같은 재성이라도 음양이 어긋난 **정재**라야 배우자 자리로 보고, 편재는 활동·재물의 성격에
 * 가깝다. 그래서 정재·정관은 2점, 편재·편관은 1점으로 나눠 세고 양방향을 합산한다.
 * 성별을 밝히지 않으면 판정할 수 없어 null을 돌려주고, 호출부가 항목을 뺀다.
 */
export function spouseStar(
  relation: MutualRelation,
  genderA: Gender,
  genderB: Gender,
) {
  if (!genderA || !genderB) return null;

  const points =
    scoreDirection(relation.aSeesB, genderA) +
    scoreDirection(relation.bSeesA, genderB);

  const level: SpouseLevel =
    points >= 4
      ? "MUTUAL"
      : points === 3
        ? "STRONG"
        : points === 2
          ? "PARTIAL"
          : points === 1
            ? "SLIGHT"
            : "NONE";

  return { level, score: SPOUSE_LEVEL_SCORE[level] };
}

function scoreDirection(god: TenGod, gender: "male" | "female") {
  if (god === SPOUSE_GOD[gender]) return 2;
  if (god === SPOUSE_ADJACENT[gender]) return 1;
  return 0;
}
