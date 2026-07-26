// 십이지(地支) 관계표. 띠 궁합과 사주 일지 궁합이 함께 쓴다.

export const EARTHLY_BRANCHES = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
] as const;

export type Branch = (typeof EARTHLY_BRANCHES)[number];

/** 띠 동물 코드. 화면 문구는 사전에서 이 코드로 찾는다. */
export const BRANCH_ANIMALS: Record<Branch, string> = {
  子: "rat",
  丑: "ox",
  寅: "tiger",
  卯: "rabbit",
  辰: "dragon",
  巳: "snake",
  午: "horse",
  未: "goat",
  申: "monkey",
  酉: "rooster",
  戌: "dog",
  亥: "pig",
};

export type BranchRelation =
  | "SAMHAP" // 삼합(三合) — 가장 잘 맞는 조합
  | "YUKHAP" // 육합(六合) — 서로 끌어당기는 짝
  | "SAME" // 같은 지지
  | "CHUNG" // 충(沖) — 정면으로 부딪치는 짝
  | "NEUTRAL";

// 삼합: 申子辰(수국) 巳酉丑(금국) 寅午戌(화국) 亥卯未(목국)
const SAMHAP_GROUPS: Branch[][] = [
  ["申", "子", "辰"],
  ["巳", "酉", "丑"],
  ["寅", "午", "戌"],
  ["亥", "卯", "未"],
];

// 육합: 子丑 寅亥 卯戌 辰酉 巳申 午未
const YUKHAP_PAIRS: Array<[Branch, Branch]> = [
  ["子", "丑"],
  ["寅", "亥"],
  ["卯", "戌"],
  ["辰", "酉"],
  ["巳", "申"],
  ["午", "未"],
];

// 충: 마주 보는 여섯 쌍. 子午 丑未 寅申 卯酉 辰戌 巳亥
const CHUNG_PAIRS: Array<[Branch, Branch]> = [
  ["子", "午"],
  ["丑", "未"],
  ["寅", "申"],
  ["卯", "酉"],
  ["辰", "戌"],
  ["巳", "亥"],
];

function hasPair(pairs: Array<[Branch, Branch]>, a: Branch, b: Branch) {
  return pairs.some(
    ([left, right]) =>
      (left === a && right === b) || (left === b && right === a),
  );
}

export function branchRelation(a: Branch, b: Branch): BranchRelation {
  if (a === b) return "SAME";
  if (SAMHAP_GROUPS.some((group) => group.includes(a) && group.includes(b))) {
    return "SAMHAP";
  }
  if (hasPair(YUKHAP_PAIRS, a, b)) return "YUKHAP";
  if (hasPair(CHUNG_PAIRS, a, b)) return "CHUNG";
  return "NEUTRAL";
}

/**
 * 지지 관계 점수.
 *
 * 충(沖)에도 45점을 주는 것은 의도적이다. 전통 명리에서 충은 "끝"이 아니라 "부딪침"이고,
 * 0점에 가까운 점수를 주면 서비스가 관계를 단정하는 꼴이 된다. 최저 45 · 최고 95로 폭을
 * 두어 차이는 분명히 보이되 단정하지는 않는다.
 */
export const BRANCH_RELATION_SCORE: Record<BranchRelation, number> = {
  SAMHAP: 95,
  YUKHAP: 90,
  SAME: 72,
  NEUTRAL: 68,
  CHUNG: 45,
};

/**
 * 연지(年支) = 띠. 입춘 기준이 아니라 사주 엔진이 계산한 연주에서 가져와야 정확하다.
 * (1월·2월 초 출생자는 달력 해와 사주 해가 다르다)
 */
export function branchOf(pillarHanja: string): Branch {
  const character = Array.from(pillarHanja)[1];
  return character as Branch;
}
