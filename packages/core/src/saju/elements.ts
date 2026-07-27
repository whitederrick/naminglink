// 지장간(支藏干)과 월령(月令)을 반영한 오행 세력 계산.
//
// 왜 필요한가: 사주 여덟 글자의 오행을 **개수로만** 세면 두 가지를 놓친다.
//
// 1. 지장간 — 지지 안에는 천간이 숨어 있다. 예를 들어 寅은 겉으로 木이지만 안에 戊(土)와
//    丙(火)을 품는다. 표면만 세면 그 사람이 실제로 쥔 기운과 다른 그림이 나온다.
// 2. 월령 — 같은 木이라도 봄의 木과 가을의 木은 힘이 다르다. 태어난 달이 오행의 강약을
//    정하는데(왕상휴수사), 개수 세기에는 계절이 아예 안 들어간다.
//
// 그래서 개수 대신 **세력(strength)**을 쓴다. 개수는 정수지만 세력은 실수다.

export type FiveElement = "WOOD" | "FIRE" | "EARTH" | "METAL" | "WATER";

export const FIVE_ELEMENTS: FiveElement[] = [
  "WOOD",
  "FIRE",
  "EARTH",
  "METAL",
  "WATER",
];

/** 천간 10개의 오행. */
export const STEM_ELEMENT: Record<string, FiveElement> = {
  甲: "WOOD",
  乙: "WOOD",
  丙: "FIRE",
  丁: "FIRE",
  戊: "EARTH",
  己: "EARTH",
  庚: "METAL",
  辛: "METAL",
  壬: "WATER",
  癸: "WATER",
};

/**
 * 지장간 — 지지가 품은 천간과 그 지분(일수, 합 30일).
 *
 * 여기(餘氣) → 중기(中氣) → 본기(本氣) 순으로 적었다. 본기가 그 지지의 대표 기운이다.
 * 일수를 30으로 나눠 가중치로 쓴다 — 본기가 가장 무겁고 중기가 가장 가볍다.
 */
export const BRANCH_HIDDEN_STEMS: Record<string, Array<[string, number]>> = {
  子: [["壬", 10.3], ["癸", 19.7]],
  丑: [["癸", 9.3], ["辛", 3.1], ["己", 17.6]],
  寅: [["戊", 7.2], ["丙", 7.2], ["甲", 15.6]],
  卯: [["甲", 10.3], ["乙", 19.7]],
  辰: [["乙", 9.3], ["癸", 3.1], ["戊", 17.6]],
  巳: [["戊", 7.2], ["庚", 7.2], ["丙", 15.6]],
  午: [["丙", 10.3], ["己", 9.7], ["丁", 10.0]],
  未: [["丁", 9.3], ["乙", 3.1], ["己", 17.6]],
  申: [["戊", 7.2], ["壬", 7.2], ["庚", 15.6]],
  酉: [["庚", 10.3], ["辛", 19.7]],
  戌: [["辛", 9.3], ["丁", 3.1], ["戊", 17.6]],
  亥: [["戊", 7.2], ["甲", 7.2], ["壬", 15.6]],
};

const HIDDEN_STEM_TOTAL_DAYS = 30;

// 상생·상극. 월령 배수를 정하는 데 쓰고, 억부용신 판정(인연링크)도 같은 표를 가져다 쓴다.
// **소비자가 늘어도 표는 하나로 둔다** — 같은 표가 두 곳에 있으면 언젠가 어긋난다.
export const GENERATES: Record<FiveElement, FiveElement> = {
  WOOD: "FIRE",
  FIRE: "EARTH",
  EARTH: "METAL",
  METAL: "WATER",
  WATER: "WOOD",
};
export const CONTROLS: Record<FiveElement, FiveElement> = {
  WOOD: "EARTH",
  EARTH: "WATER",
  WATER: "FIRE",
  FIRE: "METAL",
  METAL: "WOOD",
};

/** X를 생하는 오행(인성 자리). GENERATES를 뒤집은 것이다. */
export const GENERATED_BY: Record<FiveElement, FiveElement> = {
  FIRE: "WOOD",
  EARTH: "FIRE",
  METAL: "EARTH",
  WATER: "METAL",
  WOOD: "WATER",
};

/** X를 극하는 오행(관성 자리). CONTROLS를 뒤집은 것이다. */
export const CONTROLLED_BY: Record<FiveElement, FiveElement> = {
  EARTH: "WOOD",
  WATER: "EARTH",
  FIRE: "WATER",
  METAL: "FIRE",
  WOOD: "METAL",
};

/** 월지가 속한 계절의 주인 오행. */
const SEASON_ELEMENT: Record<string, FiveElement> = {
  寅: "WOOD", 卯: "WOOD", 辰: "WOOD",
  巳: "FIRE", 午: "FIRE", 未: "FIRE",
  申: "METAL", 酉: "METAL", 戌: "METAL",
  亥: "WATER", 子: "WATER", 丑: "WATER",
};

/** 환절기(土旺用事) — 계절이 바뀌는 달이라 土가 함께 왕성해진다. */
const EARTH_SEASON_BRANCHES = new Set(["辰", "未", "戌", "丑"]);

export type Vitality = "WANG" | "SANG" | "HYU" | "SU" | "SA";

/**
 * 왕상휴수사(旺相休囚死).
 *   旺 계절의 주인   相 주인이 생하는 것   休 주인을 생하는 것
 *   囚 주인을 극하는 것   死 주인이 극하는 것
 */
export const VITALITY_MULTIPLIER: Record<Vitality, number> = {
  WANG: 1.5,
  SANG: 1.2,
  HYU: 0.9,
  SU: 0.7,
  SA: 0.5,
};

export function vitalityOf(
  element: FiveElement,
  seasonElement: FiveElement,
): Vitality {
  if (element === seasonElement) return "WANG";
  if (GENERATES[seasonElement] === element) return "SANG";
  if (GENERATES[element] === seasonElement) return "HYU";
  if (CONTROLS[element] === seasonElement) return "SU";
  return "SA";
}

export type PillarHanja = {
  year: string;
  month: string;
  day: string;
  hour: string | null;
};

export type ElementStrength = {
  /** 월령을 곱하기 전 — 천간 + 지장간 지분의 합 */
  raw: Record<FiveElement, number>;
  /** 월령을 반영한 최종 세력 */
  strength: Record<FiveElement, number>;
  /** 각 오행의 왕상휴수사 */
  vitality: Record<FiveElement, Vitality>;
  seasonElement: FiveElement;
  /** 환절기(辰未戌丑) 월이라 土를 함께 왕으로 본 경우 */
  earthSeason: boolean;
};

function emptyCounts(): Record<FiveElement, number> {
  return { WOOD: 0, FIRE: 0, EARTH: 0, METAL: 0, WATER: 0 };
}

/**
 * 사주 네 기둥에서 오행 세력을 낸다.
 *
 * 천간은 드러난 글자라 지분 1.0을 그대로 준다. 지지는 품은 천간들에게 일수 비례로 나눠 주므로
 * 지지 하나의 총 지분도 1.0이다 — 천간과 지지에 같은 무게를 두는 셈이다.
 *
 * 시주를 모르면 세 기둥만 쓴다. 이때 총량이 줄지만 오행 **비율**을 보는 계산이라 문제가 없다.
 */
export function calculateElementStrength(
  pillars: PillarHanja,
): ElementStrength {
  const raw = emptyCounts();
  const present = [
    pillars.year,
    pillars.month,
    pillars.day,
    pillars.hour,
  ].filter((pillar): pillar is string => Boolean(pillar));

  for (const pillar of present) {
    const [stemChar, branchChar] = Array.from(pillar);

    const stemElement = STEM_ELEMENT[stemChar];
    if (stemElement) raw[stemElement] += 1;

    for (const [hiddenStem, days] of BRANCH_HIDDEN_STEMS[branchChar] ?? []) {
      const element = STEM_ELEMENT[hiddenStem];
      if (element) raw[element] += days / HIDDEN_STEM_TOTAL_DAYS;
    }
  }

  const monthBranch = Array.from(pillars.month)[1];
  const seasonElement = SEASON_ELEMENT[monthBranch] ?? "EARTH";
  const earthSeason = EARTH_SEASON_BRANCHES.has(monthBranch);

  const vitality = {} as Record<FiveElement, Vitality>;
  const strength = emptyCounts();
  for (const element of FIVE_ELEMENTS) {
    // 환절기에는 계절의 주인과 별개로 土도 왕성하다고 본다.
    const resolved =
      earthSeason && element === "EARTH"
        ? "WANG"
        : vitalityOf(element, seasonElement);
    vitality[element] = resolved;
    strength[element] = raw[element] * VITALITY_MULTIPLIER[resolved];
  }

  return { raw, strength, vitality, seasonElement, earthSeason };
}
