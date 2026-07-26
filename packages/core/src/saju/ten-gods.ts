// 십신(十神) — 일간을 기준으로 다른 글자가 나와 어떤 관계에 있는지 나타내는 열 가지 이름.
//
// 명리에서 관계를 읽는 핵심 도구다. 오행의 생극만 보면 "생한다/극한다" 두 가지뿐이지만,
// 여기에 음양이 같은지 다른지를 더하면 열 가지로 갈린다. 같은 "내가 극하는 오행"이라도
// 음양이 다르면 정재(正財), 같으면 편재(偏財)이고 관계의 결이 전혀 다르다.
//
// 궁합에서는 상대의 일간이 나에게 무슨 십신인지를 본다. 방향이 있으므로 A→B와 B→A가 다를
// 수 있고, 그 비대칭이 관계의 성격을 설명한다.

import type { FiveElement } from "./elements";

export type TenGod =
  | "BIGYEON" // 비견 比肩 — 나와 같은 오행, 같은 음양
  | "GEOPJAE" // 겁재 劫財 — 나와 같은 오행, 다른 음양
  | "SIKSIN" // 식신 食神 — 내가 생하는 오행, 같은 음양
  | "SANGGWAN" // 상관 傷官 — 내가 생하는 오행, 다른 음양
  | "PYEONJAE" // 편재 偏財 — 내가 극하는 오행, 같은 음양
  | "JEONGJAE" // 정재 正財 — 내가 극하는 오행, 다른 음양
  | "PYEONGWAN" // 편관 偏官(七殺) — 나를 극하는 오행, 같은 음양
  | "JEONGGWAN" // 정관 正官 — 나를 극하는 오행, 다른 음양
  | "PYEONIN" // 편인 偏印 — 나를 생하는 오행, 같은 음양
  | "JEONGIN"; // 정인 正印 — 나를 생하는 오행, 다른 음양

/** 천간의 음양. 甲丙戊庚壬이 양(陽), 乙丁己辛癸가 음(陰)이다. */
export const STEM_POLARITY: Record<string, "YANG" | "YIN"> = {
  甲: "YANG",
  乙: "YIN",
  丙: "YANG",
  丁: "YIN",
  戊: "YANG",
  己: "YIN",
  庚: "YANG",
  辛: "YIN",
  壬: "YANG",
  癸: "YIN",
};

const GENERATES: Record<FiveElement, FiveElement> = {
  WOOD: "FIRE",
  FIRE: "EARTH",
  EARTH: "METAL",
  METAL: "WATER",
  WATER: "WOOD",
};

const CONTROLS: Record<FiveElement, FiveElement> = {
  WOOD: "EARTH",
  EARTH: "WATER",
  WATER: "FIRE",
  FIRE: "METAL",
  METAL: "WOOD",
};

/**
 * `self`(일간) 기준으로 `other`(상대 천간)가 무슨 십신인지 판정한다.
 *
 * 방향이 있다는 점이 중요하다. tenGod(甲, 己)와 tenGod(己, 甲)은 서로 다른 답을 낸다 —
 * 궁합에서 한쪽만 끌리는 상황이 이 비대칭으로 설명된다.
 */
export function tenGod(
  self: { stem: string; element: FiveElement },
  other: { stem: string; element: FiveElement },
): TenGod {
  const samePolarity = STEM_POLARITY[self.stem] === STEM_POLARITY[other.stem];

  if (other.element === self.element) {
    return samePolarity ? "BIGYEON" : "GEOPJAE";
  }
  if (GENERATES[self.element] === other.element) {
    return samePolarity ? "SIKSIN" : "SANGGWAN";
  }
  if (CONTROLS[self.element] === other.element) {
    return samePolarity ? "PYEONJAE" : "JEONGJAE";
  }
  if (CONTROLS[other.element] === self.element) {
    return samePolarity ? "PYEONGWAN" : "JEONGGWAN";
  }
  // 남는 경우는 상대가 나를 생하는 관계뿐이다.
  return samePolarity ? "PYEONIN" : "JEONGIN";
}

/**
 * 전통적으로 배우자를 가리키는 십신.
 *   남성 → 정재(正財)   여성 → 정관(正官)
 *
 * 앞서 오행만으로 배우자성을 보던 것보다 정확하다. 같은 재성이라도 음양이 어긋난 정재라야
 * 배우자 자리로 보고, 편재는 배우자가 아니라 활동·재물의 성격으로 읽는다.
 */
export const SPOUSE_GOD: Record<"male" | "female", TenGod> = {
  male: "JEONGJAE",
  female: "JEONGGWAN",
};

/** 배우자 자리에 준하는 십신(정재·정관에 못 미치지만 인연으로 보는 자리). */
export const SPOUSE_ADJACENT: Record<"male" | "female", TenGod> = {
  male: "PYEONJAE",
  female: "PYEONGWAN",
};
