import {
  CONTROLS,
  FIVE_ELEMENTS,
  GENERATED_BY,
  GENERATES,
  STEM_ELEMENT,
  type FiveElement,
} from "@naminglink/core/saju/elements";
import { calculatePremiumSaju } from "@naminglink/core/saju";
import { tenGod, type TenGod } from "@naminglink/core/saju/ten-gods";

import { branchOf, branchRelation, type Branch, type BranchRelation } from "./branches";
import type { PersonReading } from "./prepare";

/**
 * 오늘의 운세 — 오늘 일진이 이 사람의 사주에 얼마나 우호적인가.
 *
 * **계산은 여기서 끝난다. GPT는 이 결과를 말로 풀 뿐이다.** 같은 사람·같은 날이면 언제나 같은
 * 값이 나와야 한다(재현성). 그래서 이 파일에는 난수도, 현재 시각을 읽는 코드도 없다 — 날짜는
 * 부르는 쪽이 넘긴다.
 *
 * 규칙의 출처는 `docs/sajulink_domain_logic.md` §3이고, 가중치 기본값은
 * `docs/saju_scoring_defaults.json`이다. 그 JSON을 그대로 옮겨 적되 **엔진이 실제로 계산하는
 * 것에 맞춰 셋을 고쳤다**(아래 주석 참고).
 */

/** 규칙을 바꾸면 올린다. 결과가 언제 계산된 것인지 구분된다(인연링크 엔진 버전과 같은 규칙). */
export const TODAY_FORTUNE_VERSION = "v1";

export type FortuneGrade = "DAEGIL" | "GIL" | "PYEONG" | "JUUI" | "JOSIM";

export type FortuneCategory = "wealth" | "love" | "career" | "health";

export type TodayFortune = {
  version: string;
  /** 기준 날짜(KST, YYYY-MM-DD). 캐시 키에 들어간다. */
  date: string;
  /** 오늘의 일진 — 간지 한자. */
  todayPillar: { stem: string; branch: Branch };
  score: number;
  grade: FortuneGrade;
  categories: Record<FortuneCategory, number>;
  lucky: LuckyElement;
  /**
   * 점수가 왜 그렇게 나왔는가. 화면의 "근거"이자 해설 프롬프트의 입력이다.
   *
   * **사람이 읽을 문장이 아니라 항목이다.** 문장으로 만들면 로케일마다 번역해야 하고, 그러면
   * 근거가 아니라 문구가 된다.
   */
  factors: Factor[];
};

export type Factor = {
  key: string;
  delta: number;
  /** 사람이 읽을 이름을 붙일 때 쓰는 값들. 화면·프롬프트가 로케일에 맞춰 조립한다. */
  detail?: Record<string, string | number>;
};

export type LuckyElement = {
  element: FiveElement;
  colorsKo: string[];
  colorsEn: string[];
  hex: string[];
  directionKo: string;
  directionEn: string;
  timeRange: string;
  branchHoursKo: string;
  numbers: number[];
};

/**
 * ## 설계 문서와 실제 엔진이 어긋난 곳 셋 — 여기서 맞춘다
 *
 * ① **지지 관계 종류.** 설정값은 형(刑)·파(破)·해(害)를 전제하는데 이 저장소의
 *    `branches.ts`는 그것을 계산하지 않는다. 대신 **반합(半合)**과 **원진(怨嗔)**이 있다
 *    (인연링크 엔진 v7·v8에서 들어왔다). 없는 관계에 점수를 매기는 대신 **있는 관계**에
 *    맞춰 값을 둔다 — 반합은 삼합보다 약하므로 절반, 원진은 형·파·해 자리의 값을 쓴다.
 *
 * ② **오행 표기.** JSON은 소문자(`wood`), 이 저장소는 대문자(`WOOD`)다. 이 파일은
 *    저장소 쪽을 쓰고, DB에서 읽어 올 때 변환한다.
 *
 * ③ **기신(忌神)을 엔진이 내놓지 않는다.** `resolveYongsin`은 필요한 오행(용신)만 준다.
 *    기신을 "용신이 아닌 전부"로 두면 안 된다 — 그러면 "용신을 생하는 오행"과 "용신을 극하는
 *    오행"까지 전부 기신이 되어 아래 ①의 네 갈래 중 뒤 둘이 죽는다. 억부의 뜻대로 **반대
 *    방향으로 더 밀어붙이는 오행만** 기신으로 본다(`gisinOf` 참고).
 */
export type ScoringConfig = {
  base: number;
  clamp: [number, number];
  grades: Array<{ min: number; code: FortuneGrade }>;
  yongsinRelation: {
    todayIsYongsin: number;
    todayGeneratesYongsin: number;
    todayIsGisin: number;
    todayControlsYongsin: number;
  };
  dayMasterRelation: {
    generatesSelf: number;
    sameElement: number;
    selfGenerates: number;
    controlsSelf: number;
    selfControls: number;
  };
  branchRelation: {
    samhap: number;
    banhap: number;
    yukhap: number;
    chung: number;
    wonjin: number;
    maxAbs: number;
  };
  strengthAdjust: {
    weakTodayHelps: number;
    strongTodayHelps: number;
    strongTodayDrains: number;
    weakTodayBurdens: number;
  };
  categoryWeights: {
    overallShare: number;
    wealth: Partial<Record<TenGod, number>>;
    love: {
      tenGod: Partial<Record<TenGod, number>>;
      spouseBranchHarmony: number;
      spouseBranchChung: number;
    };
    career: Partial<Record<TenGod, number>>;
    health: { chungPenaltyEach: number; yongsinFavorBonus: number };
  };
  categoryClamp: [number, number];
};

/** `docs/saju_scoring_defaults.json`을 그대로 옮긴 값. DB에서 읽어 오면 이 자리를 덮는다. */
export const DEFAULT_SCORING_CONFIG: ScoringConfig = {
  base: 50,
  clamp: [5, 98],
  grades: [
    { min: 80, code: "DAEGIL" },
    { min: 65, code: "GIL" },
    { min: 45, code: "PYEONG" },
    { min: 30, code: "JUUI" },
    { min: 0, code: "JOSIM" },
  ],
  yongsinRelation: {
    todayIsYongsin: 20,
    todayGeneratesYongsin: 10,
    todayIsGisin: -20,
    todayControlsYongsin: -12,
  },
  dayMasterRelation: {
    generatesSelf: 6,
    sameElement: 4,
    selfGenerates: -2,
    controlsSelf: -8,
    selfControls: 3,
  },
  branchRelation: {
    samhap: 6,
    // 반합은 삼합의 절반으로 둔다. 인연링크가 왕지를 낀 두 글자만 합으로 치기로 한 것과 같은
    // 판단이다 — 세 글자가 모인 국(局)과 같은 힘으로 보면 합이 흔해진다.
    banhap: 3,
    yukhap: 6,
    chung: -7,
    // 설정값의 형·파·해 자리(-3). 이 엔진이 그 셋 대신 계산하는 것이 원진이다.
    wonjin: -3,
    maxAbs: 12,
  },
  strengthAdjust: {
    weakTodayHelps: 5,
    strongTodayHelps: -4,
    strongTodayDrains: 4,
    weakTodayBurdens: -4,
  },
  categoryWeights: {
    overallShare: 0.6,
    wealth: { JEONGJAE: 15, PYEONJAE: 15 },
    love: {
      tenGod: { JEONGJAE: 10, PYEONJAE: 8, JEONGGWAN: 10, PYEONGWAN: 6 },
      spouseBranchHarmony: 15,
      spouseBranchChung: -12,
    },
    career: { JEONGGWAN: 12, PYEONGWAN: 10, SIKSIN: 8, SANGGWAN: 6 },
    health: { chungPenaltyEach: -5, yongsinFavorBonus: 8 },
  },
  categoryClamp: [5, 98],
};

/** `docs/saju_scoring_defaults.json`의 `elementLuckyMap`. */
const LUCKY_MAP: Record<FiveElement, Omit<LuckyElement, "element">> = {
  WOOD: {
    colorsKo: ["청록", "초록"],
    colorsEn: ["green", "teal"],
    hex: ["#2E8B57", "#3CB371"],
    directionKo: "동",
    directionEn: "East",
    timeRange: "03:00-07:00",
    branchHoursKo: "인·묘시",
    numbers: [3, 8],
  },
  FIRE: {
    colorsKo: ["빨강", "주황"],
    colorsEn: ["red", "orange"],
    hex: ["#E23B3B", "#FF7A45"],
    directionKo: "남",
    directionEn: "South",
    timeRange: "09:00-13:00",
    branchHoursKo: "사·오시",
    numbers: [2, 7],
  },
  EARTH: {
    colorsKo: ["노랑", "황토"],
    colorsEn: ["yellow", "ochre"],
    hex: ["#E6B422", "#C8A25A"],
    directionKo: "중앙",
    directionEn: "Center",
    timeRange: "13:00-15:00",
    branchHoursKo: "진·술·축·미시",
    numbers: [5, 10],
  },
  METAL: {
    colorsKo: ["흰색", "금색"],
    colorsEn: ["white", "gold"],
    hex: ["#F5F5F5", "#D4AF37"],
    directionKo: "서",
    directionEn: "West",
    timeRange: "15:00-19:00",
    branchHoursKo: "신·유시",
    numbers: [4, 9],
  },
  WATER: {
    colorsKo: ["검정", "남색"],
    colorsEn: ["black", "navy"],
    hex: ["#1C1C2E", "#2B3A67"],
    directionKo: "북",
    directionEn: "North",
    timeRange: "21:00-01:00",
    branchHoursKo: "해·자시",
    numbers: [1, 6],
  },
};

/**
 * 기신(忌神) — 지금 이 사주를 **반대 방향으로 더 밀어붙이는** 오행.
 *
 * 신강이면 더 보태는 것(비겁·인성)이, 신약이면 더 덜어 내거나 치는 것(재성·관성)이 기신이다.
 * **식상은 어느 쪽에서도 기신으로 두지 않는다** — 신약에게 부담이긴 해도 재성·관성만큼
 * 직접적이지 않고, 신강에게는 오히려 용신이다.
 *
 * "용신이 아닌 전부"로 두지 않는 이유는 이 파일 머리말 ③에 적어 두었다.
 */
export function gisinOf(
  strength: PersonReading["bodyStrength"],
  dayMasterElement: FiveElement,
): FiveElement[] {
  if (strength === "STRONG") {
    // 이미 넘치는데 더 보태는 것들.
    return [dayMasterElement, GENERATED_BY[dayMasterElement]];
  }
  if (strength === "WEAK") {
    // 얇은데 더 빼앗거나 치는 것들 — 내가 극하는 것(재성)과 나를 극하는 것(관성).
    return [CONTROLS[dayMasterElement], controlledBy(dayMasterElement)];
  }
  // 중화는 억부로 가릴 수 없다. 기신을 세우지 않는다(용신 판정도 "얇은 것"에 그친다).
  return [];
}

function controlledBy(element: FiveElement): FiveElement {
  return (
    FIVE_ELEMENTS.find((candidate) => CONTROLS[candidate] === element) ?? element
  );
}

/** 이 사주의 지지 넷(시각을 모르면 셋). */
export function natalBranches(reading: PersonReading): Branch[] {
  const pillars = [
    reading.pillars.year,
    reading.pillars.month,
    reading.pillars.day,
    reading.pillars.hour,
  ];
  return pillars
    .filter((pillar): pillar is { hangul: string; hanja: string } => Boolean(pillar))
    .map((pillar) => branchOf(pillar.hanja));
}

function gradeOf(score: number, config: ScoringConfig): FortuneGrade {
  for (const grade of config.grades) {
    if (score >= grade.min) return grade.code;
  }
  return "JOSIM";
}

function clamp(value: number, [min, max]: [number, number]) {
  return Math.min(Math.max(Math.round(value), min), max);
}

function branchDelta(relation: BranchRelation, config: ScoringConfig): number {
  const table = config.branchRelation;
  if (relation === "SAMHAP") return table.samhap;
  if (relation === "BANHAP") return table.banhap;
  if (relation === "YUKHAP") return table.yukhap;
  if (relation === "CHUNG") return table.chung;
  if (relation === "WONJIN") return table.wonjin;
  // SAME·NEUTRAL은 점수를 움직이지 않는다.
  return 0;
}

/**
 * 오늘의 운세를 낸다. **순수 함수다** — 같은 인자면 언제나 같은 값이다.
 *
 * @param reading   이 사람의 사주 원국(`toReading`의 결과)
 * @param today     오늘의 일진. 부르는 쪽이 KST 날짜로 계산해 넘긴다
 * @param config    가중치. 기본값은 `DEFAULT_SCORING_CONFIG`
 */
export function todayFortune(
  reading: PersonReading,
  today: { date: string; stem: string; branch: Branch },
  config: ScoringConfig = DEFAULT_SCORING_CONFIG,
): TodayFortune {
  const factors: Factor[] = [];
  const todayElement = STEM_ELEMENT[today.stem]!;
  const dayMasterElement = reading.dayMaster.element;
  const favorable = reading.favorableElements;
  const gisin = gisinOf(reading.bodyStrength, dayMasterElement);

  let score = config.base;

  // ① 용신·기신 관계 — 가장 큰 축. 네 갈래는 배타적이고 순서가 곧 우선순위다.
  const yr = config.yongsinRelation;
  if (favorable.includes(todayElement)) {
    score += yr.todayIsYongsin;
    factors.push({ key: "TODAY_IS_YONGSIN", delta: yr.todayIsYongsin, detail: { element: todayElement } });
  } else if (favorable.includes(GENERATES[todayElement])) {
    score += yr.todayGeneratesYongsin;
    factors.push({ key: "TODAY_GENERATES_YONGSIN", delta: yr.todayGeneratesYongsin, detail: { element: todayElement } });
  } else if (gisin.includes(todayElement)) {
    score += yr.todayIsGisin;
    factors.push({ key: "TODAY_IS_GISIN", delta: yr.todayIsGisin, detail: { element: todayElement } });
  } else if (favorable.includes(CONTROLS[todayElement])) {
    score += yr.todayControlsYongsin;
    factors.push({ key: "TODAY_CONTROLS_YONGSIN", delta: yr.todayControlsYongsin, detail: { element: todayElement } });
  }

  // ② 일간과 오늘 오행의 생극.
  const dm = config.dayMasterRelation;
  if (GENERATES[todayElement] === dayMasterElement) {
    score += dm.generatesSelf;
    factors.push({ key: "TODAY_GENERATES_SELF", delta: dm.generatesSelf });
  } else if (todayElement === dayMasterElement) {
    score += dm.sameElement;
    factors.push({ key: "TODAY_SAME_ELEMENT", delta: dm.sameElement });
  } else if (GENERATES[dayMasterElement] === todayElement) {
    score += dm.selfGenerates;
    factors.push({ key: "SELF_GENERATES_TODAY", delta: dm.selfGenerates });
  } else if (CONTROLS[todayElement] === dayMasterElement) {
    score += dm.controlsSelf;
    factors.push({ key: "TODAY_CONTROLS_SELF", delta: dm.controlsSelf });
  } else if (CONTROLS[dayMasterElement] === todayElement) {
    score += dm.selfControls;
    factors.push({ key: "SELF_CONTROLS_TODAY", delta: dm.selfControls });
  }

  // ③ 지지 관계 — 오늘 지지를 원국의 지지 하나하나와 맞대고 합산한 뒤 상한에서 자른다.
  const branches = natalBranches(reading);
  let branchTotal = 0;
  let chungCount = 0;
  for (const branch of branches) {
    const relation = branchRelation(today.branch, branch);
    const delta = branchDelta(relation, config);
    if (delta === 0) continue;
    if (relation === "CHUNG") chungCount += 1;
    branchTotal += delta;
    factors.push({ key: `BRANCH_${relation}`, delta, detail: { natal: branch, today: today.branch } });
  }
  const maxAbs = config.branchRelation.maxAbs;
  score += Math.min(Math.max(branchTotal, -maxAbs), maxAbs);

  // ④ 강약 보정 — 오늘 천간이 일간에게 어떤 십신인가로 가른다.
  const todayTenGod = tenGod(
    { stem: reading.dayMaster.character, element: dayMasterElement },
    { stem: today.stem, element: todayElement },
  );
  const helps = todayTenGod === "BIGYEON" || todayTenGod === "GEOPJAE" ||
    todayTenGod === "JEONGIN" || todayTenGod === "PYEONIN";
  const drains = todayTenGod === "SIKSIN" || todayTenGod === "SANGGWAN" ||
    todayTenGod === "JEONGJAE" || todayTenGod === "PYEONJAE" ||
    todayTenGod === "JEONGGWAN" || todayTenGod === "PYEONGWAN";
  const burdens = todayTenGod === "JEONGJAE" || todayTenGod === "PYEONJAE" ||
    todayTenGod === "JEONGGWAN" || todayTenGod === "PYEONGWAN";
  const sa = config.strengthAdjust;
  if (reading.bodyStrength === "WEAK" && helps) {
    score += sa.weakTodayHelps;
    factors.push({ key: "WEAK_HELPED", delta: sa.weakTodayHelps, detail: { tenGod: todayTenGod } });
  } else if (reading.bodyStrength === "STRONG" && helps) {
    score += sa.strongTodayHelps;
    factors.push({ key: "STRONG_OVERFED", delta: sa.strongTodayHelps, detail: { tenGod: todayTenGod } });
  } else if (reading.bodyStrength === "STRONG" && drains) {
    score += sa.strongTodayDrains;
    factors.push({ key: "STRONG_DRAINED", delta: sa.strongTodayDrains, detail: { tenGod: todayTenGod } });
  } else if (reading.bodyStrength === "WEAK" && burdens) {
    score += sa.weakTodayBurdens;
    factors.push({ key: "WEAK_BURDENED", delta: sa.weakTodayBurdens, detail: { tenGod: todayTenGod } });
  }

  const finalScore = clamp(score, config.clamp);

  return {
    version: TODAY_FORTUNE_VERSION,
    date: today.date,
    todayPillar: { stem: today.stem, branch: today.branch },
    score: finalScore,
    grade: gradeOf(finalScore, config),
    categories: categoryScores(reading, todayTenGod, today.branch, chungCount, finalScore, favorable, todayElement, config),
    lucky: luckyOf(favorable[0] ?? dayMasterElement),
    factors,
  };
}

/**
 * 카테고리 서브점수. 종합의 일부를 깔고 그 위에 십신 테마를 얹는다.
 *
 * **종합점수를 그대로 쪼개지 않는다.** 그러면 넷이 언제나 같은 방향으로 움직여 볼 이유가
 * 없어진다. 종합은 바닥이고, 차이는 오늘 십신과 일지 관계가 만든다.
 */
function categoryScores(
  reading: PersonReading,
  todayTenGod: TenGod,
  todayBranch: Branch,
  chungCount: number,
  overall: number,
  favorable: FiveElement[],
  todayElement: FiveElement,
  config: ScoringConfig,
): Record<FortuneCategory, number> {
  const weights = config.categoryWeights;
  const floor = overall * weights.overallShare;

  // 배우자궁은 일지(日支)다. 오늘 지지와의 관계가 애정 항목을 가른다.
  const spouseBranch = branchOf(reading.pillars.day.hanja);
  const spouseRelation = branchRelation(todayBranch, spouseBranch);
  const spouseHarmony =
    spouseRelation === "SAMHAP" || spouseRelation === "BANHAP" || spouseRelation === "YUKHAP";

  const love =
    floor +
    (weights.love.tenGod[todayTenGod] ?? 0) +
    (spouseHarmony ? weights.love.spouseBranchHarmony : 0) +
    (spouseRelation === "CHUNG" ? weights.love.spouseBranchChung : 0);

  const health =
    floor +
    chungCount * weights.health.chungPenaltyEach +
    (favorable.includes(todayElement) ? weights.health.yongsinFavorBonus : 0);

  return {
    wealth: clamp(floor + (weights.wealth[todayTenGod] ?? 0), config.categoryClamp),
    love: clamp(love, config.categoryClamp),
    career: clamp(floor + (weights.career[todayTenGod] ?? 0), config.categoryClamp),
    health: clamp(health, config.categoryClamp),
  };
}

function luckyOf(element: FiveElement): LuckyElement {
  return { element, ...LUCKY_MAP[element] };
}

/**
 * 오늘의 일진(日辰) — 그날의 일주 간지.
 *
 * 만세력 엔진에 **오늘 날짜를 생일처럼 넣어** 나온 일주를 쓴다. 시각은 넣지 않는다 — 일진은
 * 하루 단위이고, 시각을 넣으면 진태양시 보정이 자정 근처에서 날짜를 옮겨 같은 날에 두 값이
 * 나올 수 있다.
 *
 * **날짜는 부르는 쪽이 KST로 만들어 넘긴다.** 이 함수가 현재 시각을 읽으면 순수 함수가
 * 아니게 되고, 서버 시간대에 따라 결과가 갈린다.
 */
export function todayPillarOf(dateKST: string): { date: string; stem: string; branch: Branch } {
  const [year, month, day] = dateKST.split("-").map(Number);
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: year!,
    month: month!,
    day: day!,
    birthHour: null,
    birthMinute: null,
  });
  const hanja = saju.pillars.day.hanja;
  return { date: dateKST, stem: hanja[0]!, branch: branchOf(hanja) };
}

/**
 * 세운(歲運) — 그 해의 연주 간지.
 *
 * 일진과 **같은 만세력 호출에서 나온다**(`pillars.year`). 새로 계산하는 규칙이 아니라 이미
 * 뽑고 있던 값을 꺼내는 것이므로 계산은 변하지 않는다.
 *
 * **오늘의 일진과 다른 값이다.** 일진은 하루 단위이고 세운은 한 해 단위다. 해가 바뀌는
 * 경계도 양력 1월 1일이 아니라 절기(입춘)이며, 그 경계는 만세력이 정한다 — 1월과 2월 초에
 * 지난해 간지가 나오는 것이 맞다.
 */
export function yearPillarOf(dateKST: string): { stem: string; branch: Branch } {
  const [year, month, day] = dateKST.split("-").map(Number);
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: year!,
    month: month!,
    day: day!,
    birthHour: null,
    birthMinute: null,
  });
  const hanja = saju.pillars.year.hanja;
  return { stem: hanja[0]!, branch: branchOf(hanja) };
}

/** 지금 이 순간의 KST 날짜(YYYY-MM-DD). **경계는 서버가 아니라 서울 자정이다.** */
export function todayInSeoul(now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
