import type { FiveElement } from "@naminglink/core/saju/elements";
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

/** 일간 하나. 사람 전체가 아니라 천간과 그 오행만 있으면 관계는 정해진다. */
export type DayMasterRef = { stem: string; element: FiveElement };

export function mutualRelation(a: Prepared, b: Prepared): MutualRelation {
  return relationOfDayMasters(
    { stem: a.dayMaster.character, element: a.dayMaster.element },
    { stem: b.dayMaster.character, element: b.dayMaster.element },
  );
}

/**
 * 일간 둘만으로 관계를 낸다.
 *
 * `mutualRelation`이 하던 계산을 그대로 꺼내 놓은 것이다. 사주 전체가 아니라 **천간 두 글자만
 * 있으면 정해지는 값**이라, 실존하지 않는 상대(인연의 결에서 천간 열 개를 차례로 대 보는 경우)
 * 에도 같은 규칙을 쓸 수 있다. 규칙이 두 벌이 되면 두 화면의 말이 어긋난다.
 */
export function relationOfDayMasters(
  a: DayMasterRef,
  b: DayMasterRef,
): MutualRelation {
  const aSeesB = tenGod(a, b);
  const bSeesA = tenGod(b, a);
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

/**
 * 두 일간이 맺는 짝의 종류.
 *
 * 예전에는 일간 관계를 오행 셋(상생·같음·상극)으로만 봤다. 그러면 **음양이 사라진다** — 甲(양목)과
 * 乙(음목)이 甲과 甲처럼 똑같은 "같음"이 되고, 상극은 방향도 음양도 없이 한 점수로 뭉개졌다.
 * 배우자성은 이미 십신으로 음양을 따지고 있었으므로 한 엔진 안에 기준이 둘이었다.
 *
 * 십신으로 통일하면 짝은 **여섯 가지뿐이다.** A가 B를 무엇으로 보는지가 정해지면 B가 A를 보는
 * 자리도 따라서 정해지기 때문이다(생하면 상대는 인성, 극하면 상대는 관성).
 *
 *   비견 ↔ 비견     같은 음양   대등하나 서로 밀어 주지는 않는다
 *   겁재 ↔ 겁재     다른 음양   끌리지만 같은 자리를 다툰다
 *   식신 ↔ 편인     같은 음양   효신탈식(梟神奪食) — 내주는 기운을 상대가 거둬 가 흐름이 막힌다
 *   상관 ↔ 정인     다른 음양   상관패인(傷官佩印) — 격한 기운을 상대가 감싸 준다
 *   편재 ↔ 편관     같은 음양   무정(無情) — 자극은 크지만 부담도 크다
 *   정재 ↔ 정관     다른 음양   유정(有情) — 전통이 부부의 자리로 보는 짝
 *
 * 음양이 어긋난 쪽(정)이 유정하고 같은 쪽(편)이 무정하다는 것이 십신의 정·편을 가르는 원리
 * 그대로다. 이 표는 A→B 십신 하나로 정해지고 B→A로 뒤집어도 같은 값이 나오므로(식신↔편인이
 * 같은 칸) **총점의 대칭성이 구조적으로 보장된다.**
 */
export type DayMasterBond =
  | "PEER_EVEN" // 비견
  | "PEER_RIVAL" // 겁재
  | "FLOW_BLOCKED" // 식신-편인
  | "FLOW_GUARDED" // 상관-정인
  | "CLASH_HARSH" // 편재-편관
  | "CLASH_BONDED"; // 정재-정관

const BOND_OF_GOD: Record<TenGod, DayMasterBond> = {
  BIGYEON: "PEER_EVEN",
  GEOPJAE: "PEER_RIVAL",
  SIKSIN: "FLOW_BLOCKED",
  PYEONIN: "FLOW_BLOCKED",
  SANGGWAN: "FLOW_GUARDED",
  JEONGIN: "FLOW_GUARDED",
  PYEONJAE: "CLASH_HARSH",
  PYEONGWAN: "CLASH_HARSH",
  JEONGJAE: "CLASH_BONDED",
  JEONGGWAN: "CLASH_BONDED",
};

/**
 * 짝별 점수.
 *
 * 폭은 예전 오행 규칙(58~88)을 그대로 두고 그 안에서 갈랐다. 규칙을 바꾼 목적이 점수를 올리거나
 * 내리는 것이 아니라 **뭉쳐 있던 것을 나누는 것**이기 때문이다.
 */
const BOND_SCORE: Record<DayMasterBond, number> = {
  CLASH_BONDED: 88,
  FLOW_GUARDED: 82,
  PEER_EVEN: 78,
  PEER_RIVAL: 70,
  CLASH_HARSH: 66,
  FLOW_BLOCKED: 62,
};

export function dayMasterBond(relation: MutualRelation) {
  const bond = BOND_OF_GOD[relation.aSeesB];
  return { bond, score: BOND_SCORE[bond] };
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
