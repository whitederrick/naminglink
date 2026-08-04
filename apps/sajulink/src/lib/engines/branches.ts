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
  | "SAMHAP" // 삼합(三合) — 세 글자가 다 모여 국(局)을 이룬 것
  | "BANHAP" // 반합(半合) — 왕지를 낀 두 글자
  | "YUKHAP" // 육합(六合) — 서로 끌어당기는 짝
  | "SAME" // 같은 지지
  | "CHUNG" // 충(沖) — 정면으로 부딪치는 짝
  | "WONJIN" // 원진(怨嗔) — 미워하면서도 떨어지지 못하는 짝
  | "NEUTRAL";

// 삼합: 申子辰(수국) 巳酉丑(금국) 寅午戌(화국) 亥卯未(목국)
//
// **두 사람의 지지를 하나씩 맞대는 이 서비스에서는 세 글자가 모일 수 없다.** 그래서 여기서
// 나오는 것은 언제나 반합이고, 반합은 다시 둘로 갈린다 — 국의 중심인 **왕지(旺支)**를 꼈는지
// 아닌지다. 子·酉·午·卯가 왕지이고, 이것이 빠진 두 글자(申辰·巳丑·寅戌·亥未)는 전통적으로
// 합력이 거의 없다고 본다. 예전에는 그룹에 둘 다 들어 있기만 하면 삼합 95점을 줬는데, 그러면
// 申辰처럼 합이라 부르기 어려운 조합이 최고점을 받았다.
const SAMHAP_GROUPS: Branch[][] = [
  ["申", "子", "辰"],
  ["巳", "酉", "丑"],
  ["寅", "午", "戌"],
  ["亥", "卯", "未"],
];

/** 삼합 각 국의 왕지(旺支). 사왕지(四旺支)라고도 한다. */
export const SAMHAP_LEADERS = new Set<Branch>(["子", "酉", "午", "卯"]);

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

// 원진(怨嗔): 子未 丑午 寅酉 卯申 辰亥 巳戌
//
// 궁합에서 충 못지않게 자주 보는 자리인데 표에 없어서 지금까지 전부 NEUTRAL(68점)로 들어갔다.
// 충이 정면으로 부딪쳐 크게 드러나는 것이라면 원진은 **미워하면서도 떨어지지 못하는** 은근한
// 어긋남이라, 겉으로는 조용하지만 오래간다고 본다. 그래서 충(45)보다는 높고 무관계(68)보다는
// 확실히 낮은 자리에 둔다.
//
// 여섯 쌍 어느 것도 충·육합·삼합 그룹과 겹치지 않는다(각 지지의 충·육합·원진 상대가 모두 다른
// 글자다). 판정 순서를 어떻게 두어도 결과가 같지만, 읽는 사람을 위해 합 → 충 → 원진 순으로 둔다.
const WONJIN_PAIRS: Array<[Branch, Branch]> = [
  ["子", "未"],
  ["丑", "午"],
  ["寅", "酉"],
  ["卯", "申"],
  ["辰", "亥"],
  ["巳", "戌"],
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
    // 왕지를 낀 두 글자라야 반합으로 인정한다. 아니면 합으로 치지 않는다.
    return SAMHAP_LEADERS.has(a) || SAMHAP_LEADERS.has(b) ? "BANHAP" : "NEUTRAL";
  }
  if (hasPair(YUKHAP_PAIRS, a, b)) return "YUKHAP";
  if (hasPair(CHUNG_PAIRS, a, b)) return "CHUNG";
  if (hasPair(WONJIN_PAIRS, a, b)) return "WONJIN";
  return "NEUTRAL";
}

/**
 * 지지 관계 점수.
 *
 * 충(沖)에도 45점을 주는 것은 의도적이다. 전통 명리에서 충은 "끝"이 아니라 "부딪침"이고,
 * 0점에 가까운 점수를 주면 서비스가 관계를 단정하는 꼴이 된다. 최저 45 · 최고 95로 폭을
 * 두어 차이는 분명히 보이되 단정하지는 않는다.
 *
 * 반합(88)이 육합(90)보다 낮은 것은 두 글자만으로는 국을 이루지 못하기 때문이다. 세 글자가
 * 다 모인 삼합(95)은 두 사람의 지지를 하나씩 맞대는 지금 구조에서는 나오지 않지만, 각자의
 * 사주 안에서 국을 볼 때 쓰려고 남겨 둔다.
 */
export const BRANCH_RELATION_SCORE: Record<BranchRelation, number> = {
  SAMHAP: 95,
  YUKHAP: 90,
  BANHAP: 88,
  SAME: 72,
  NEUTRAL: 68,
  WONJIN: 52,
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
