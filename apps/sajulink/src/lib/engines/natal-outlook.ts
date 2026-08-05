import {
  BRANCH_HIDDEN_STEMS,
  CONTROLS,
  FIVE_ELEMENTS,
  STEM_ELEMENT,
  type FiveElement,
} from "@naminglink/core/saju/elements";
import {
  SPOUSE_ADJACENT,
  SPOUSE_GOD,
  tenGod,
  type TenGod,
} from "@naminglink/core/saju/ten-gods";

import { branchOf, branchRelation, type Branch } from "./branches";
import type { PersonReading } from "./prepare";
import type { Gender } from "./types";

/**
 * 원국 기준 삶의 네 영역 — 재물·애정·직업·건강.
 *
 * ## 왜 새로 만드는가
 *
 * 예전에는 이 네 점수를 `todayFortune`이 냈다. 곧 **오늘 일진의 십신**으로 매긴 값이라
 * 하루가 지나면 달라진다. 그런데 화면과 리포트는 그것을 「삶의 네 영역」이라 부르고 있었고,
 * 읽는 사람은 "내 사주의 재물 성향"으로 받아들인다 — **이름과 내용이 달랐다.**
 *
 * 특히 리포트는 이용자가 **보관하는 문서**다. 하루짜리 값이 평생 볼 문서에 "삶의 영역"이라는
 * 이름으로 들어가 있으면 산 사람이 속은 것이 된다. 그래서 원국에서 뽑는 값을 따로 만든다.
 *
 * 오늘의 운세 쪽 카테고리(`todayFortune.categories`)는 그대로 둔다. 그건 "오늘 이 영역이
 * 어떤가"라는 다른 질문이고, 무료 화면의 리텐션 장치다.
 *
 * ## 규칙의 출처
 *
 * `docs/sajulink_domain_logic.md` §3.3은 **오늘 기준** 카테고리만 정의한다. 원국 기준 규칙은
 * 문서에 없어, 같은 절의 논리를 원국으로 옮겨 적었다 — 재물=재성, 애정=배우자성과 일지,
 * 직업=관성·식상, 건강=오행 균형과 충. **새 이론을 지어낸 것이 아니라 같은 십신 테마를
 * "오늘 천간 하나"가 아니라 "원국 전체의 분포"에 적용한 것이다.**
 *
 * 오늘 쪽과 다른 점 하나: 오늘은 천간 **한 글자**의 십신이지만 원국은 여덟 글자에 지장간까지
 * 있어 **비중(0~1)**으로 다룬다. 그래서 가중치도 "있으면 +15"가 아니라 "비중 × 가중"이다.
 */

/** 규칙을 바꾸면 올린다. 리포트에 찍혀 언제 계산된 값인지 구분된다. */
export const NATAL_OUTLOOK_VERSION = "v1";

export type NatalCategory = "wealth" | "love" | "career" | "health";

export type NatalOutlook = {
  version: string;
  /** 0~100 */
  scores: Record<NatalCategory, number>;
  /** 원국 십신 비중(합 1). 화면·리포트가 근거로 보여 준다. */
  tenGodShare: Record<TenGod, number>;
  /** 점수가 왜 그렇게 나왔는가. **문장이 아니라 항목이다** — 문장은 사전이 만든다. */
  factors: Record<NatalCategory, NatalFactor[]>;
};

export type NatalFactor = {
  key: NatalFactorKey;
  delta: number;
};

export type NatalFactorKey =
  | "WEALTH_STARS"
  | "WEALTH_STRONG_BODY"
  | "WEALTH_WEAK_BODY"
  | "WEALTH_YONGSIN"
  | "LOVE_SPOUSE_STAR"
  | "LOVE_SPOUSE_PALACE"
  | "LOVE_PALACE_CHUNG"
  | "LOVE_GENDER_UNKNOWN"
  | "CAREER_OFFICER"
  | "CAREER_OUTPUT"
  | "CAREER_STRONG_BODY"
  | "HEALTH_BALANCE"
  | "HEALTH_CHUNG"
  | "HEALTH_EXTREME_BODY";

export type NatalOutlookConfig = {
  base: number;
  clamp: [number, number];
  wealth: { starShare: number; strongBody: number; weakBody: number; yongsin: number };
  love: { spouseShare: number; palace: number; palaceChung: number };
  career: { officerShare: number; outputShare: number; strongBody: number };
  health: { balance: number; chungEach: number; extremeBody: number };
};

/**
 * 기본 가중치.
 *
 * 오늘 쪽(`DEFAULT_SCORING_CONFIG`)과 같은 자리에 두어 나중에 DB로 옮길 때 함께 옮긴다.
 * 값의 크기는 §3.3의 오늘 쪽 가중치를 그대로 따르되, 비중(0~1)에 곱하므로 "있으면 +15"가
 * "비중 1일 때 +15"가 되도록 잡았다. 실제로는 한 십신이 비중 1을 차지하는 일이 없어
 * 오늘 쪽보다 완만하게 움직인다 — 원국은 타고난 성향이라 그 편이 맞다.
 */
export const DEFAULT_NATAL_CONFIG: NatalOutlookConfig = {
  base: 50,
  clamp: [5, 98],
  wealth: { starShare: 60, strongBody: 6, weakBody: -6, yongsin: 8 },
  love: { spouseShare: 60, palace: 10, palaceChung: -12 },
  career: { officerShare: 40, outputShare: 30, strongBody: 5 },
  health: { balance: 24, chungEach: -5, extremeBody: -4 },
};

function clamp(value: number, [min, max]: [number, number]) {
  return Math.min(Math.max(Math.round(value), min), max);
}

/** 이 사주의 지지 넷(시각을 모르면 셋). */
function natalBranches(reading: PersonReading): Branch[] {
  return [
    reading.pillars.year,
    reading.pillars.month,
    reading.pillars.day,
    reading.pillars.hour,
  ]
    .filter((pillar): pillar is { hangul: string; hanja: string } => Boolean(pillar))
    .map((pillar) => branchOf(pillar.hanja));
}

/**
 * 원국의 십신 비중.
 *
 * **천간만 세지 않는다.** 겉으로 드러난 천간은 셋뿐(일간은 자신이라 뺀다)이라 그것만 세면
 * 표본이 너무 적어 한 글자에 점수가 출렁인다. 지지 안에 숨은 천간(지장간)을 **지분(30일 기준)
 * 만큼** 함께 세어 여덟 글자 전체를 반영한다. 오행 세력을 재는 `calculateElementStrength`가
 * 쓰는 것과 같은 표다.
 *
 * 일간 자신은 세지 않는다 — 자신에 대한 십신은 비견이고, 그것을 넣으면 모든 사주가 비견
 * 쪽으로 기운다.
 */
export function natalTenGodShare(reading: PersonReading): Record<TenGod, number> {
  const self = { stem: reading.dayMaster.character, element: reading.dayMaster.element };
  const counts = new Map<TenGod, number>();
  let total = 0;

  const add = (stem: string, weight: number) => {
    const element = STEM_ELEMENT[stem];
    if (!element) return;
    const god = tenGod(self, { stem, element });
    counts.set(god, (counts.get(god) ?? 0) + weight);
    total += weight;
  };

  // 드러난 천간 — 연·월·시. 일간은 자신이라 뺀다.
  for (const pillar of [reading.pillars.year, reading.pillars.month, reading.pillars.hour]) {
    if (pillar) add(pillar.hanja[0]!, 30);
  }

  // 지장간 — 지분(일수)만큼. 천간 한 글자를 30일로 놓았으므로 단위가 같다.
  for (const branch of natalBranches(reading)) {
    for (const [stem, days] of BRANCH_HIDDEN_STEMS[branch] ?? []) add(stem, days);
  }

  const share = {} as Record<TenGod, number>;
  const GODS: TenGod[] = [
    "BIGYEON", "GEOPJAE", "SIKSIN", "SANGGWAN", "PYEONJAE",
    "JEONGJAE", "PYEONGWAN", "JEONGGWAN", "PYEONIN", "JEONGIN",
  ];
  for (const god of GODS) share[god] = total ? (counts.get(god) ?? 0) / total : 0;
  return share;
}

/** 원국 안에서 지지끼리 부딪치는(충) 짝의 수. 같은 짝을 두 번 세지 않는다. */
function natalChungCount(branches: Branch[]): number {
  let count = 0;
  for (let i = 0; i < branches.length; i += 1) {
    for (let j = i + 1; j < branches.length; j += 1) {
      if (branchRelation(branches[i]!, branches[j]!) === "CHUNG") count += 1;
    }
  }
  return count;
}

/**
 * 오행이 얼마나 고른가. 0(한쪽으로 몰림) ~ 1(완전히 고름).
 *
 * 다섯 오행이 각 20%일 때가 가장 고르다. 그 지점에서 얼마나 떨어져 있는지를 재고, 한 오행이
 * 전부를 차지한 최악의 경우로 나눠 0~1로 만든다.
 */
function elementBalance(elements: Record<FiveElement, number>): number {
  const total = FIVE_ELEMENTS.reduce((sum, element) => sum + elements[element], 0);
  if (!total) return 0;
  const even = 1 / FIVE_ELEMENTS.length;
  const deviation = FIVE_ELEMENTS.reduce(
    (sum, element) => sum + Math.abs(elements[element] / total - even),
    0,
  );
  // 한 오행이 전부를 차지하면 편차 합이 2(1−0.2 + 0.2×4)가 된다.
  const worst = 2 * (1 - even);
  return Math.max(0, 1 - deviation / worst);
}

/**
 * 네 영역 점수를 낸다. **순수 함수다** — 같은 사주면 언제나 같은 값이다.
 *
 * `gender`가 `null`이면 배우자성 항목을 **빼고** 나머지로 애정 점수를 낸다. 값을 임의로
 * 넣어 계산하지 않는 것은 이 저장소의 다른 엔진과 같은 규칙이다(`types.ts`의 `Gender` 참고).
 */
export function natalOutlook(
  reading: PersonReading,
  gender: Gender,
  config: NatalOutlookConfig = DEFAULT_NATAL_CONFIG,
): NatalOutlook {
  const share = natalTenGodShare(reading);
  const branches = natalBranches(reading);
  const strong = reading.bodyStrength === "STRONG";
  const weak = reading.bodyStrength === "WEAK";

  const factors: Record<NatalCategory, NatalFactor[]> = {
    wealth: [], love: [], career: [], health: [],
  };
  /** 항목을 남기고 그 증감을 돌려준다. 0이면 남기지 않는다 — 근거표에 빈 줄이 생긴다. */
  const push = (category: NatalCategory, key: NatalFactorKey, delta: number) => {
    if (delta === 0) return 0;
    factors[category].push({ key, delta });
    return delta;
  };

  // ── 재물 — 재성(정재·편재)이 얼마나 있는가, 그리고 그것을 감당할 힘이 있는가 ──
  let wealth = config.base;
  const wealthStars = share.JEONGJAE + share.PYEONJAE;
  wealth += push("wealth", "WEALTH_STARS", Math.round(wealthStars * config.wealth.starShare));
  // 재는 일간이 극해서 얻는 것이라, 일간이 얇으면 있어도 감당하지 못한다(재다신약).
  if (strong) wealth += push("wealth", "WEALTH_STRONG_BODY", config.wealth.strongBody);
  if (weak) wealth += push("wealth", "WEALTH_WEAK_BODY", config.wealth.weakBody);
  // 지금 필요한 기운이 재성의 오행이면 그 자리가 더 잘 풀린다.
  // **재성의 오행은 일간이 극하는 오행이다** — 십신을 되짚을 것 없이 표 하나로 나온다.
  if (reading.favorableElements.includes(CONTROLS[reading.dayMaster.element])) {
    wealth += push("wealth", "WEALTH_YONGSIN", config.wealth.yongsin);
  }

  // ── 애정 — 배우자성과 배우자궁(일지) ──
  let love = config.base;
  if (gender) {
    const spouse = share[SPOUSE_GOD[gender]] + share[SPOUSE_ADJACENT[gender]] * 0.5;
    love += push("love", "LOVE_SPOUSE_STAR", Math.round(spouse * config.love.spouseShare));

    // 배우자궁은 일지다. 그 안(지장간)에 배우자성이 들어 있으면 자리가 채워진 것으로 본다.
    const dayBranch = branchOf(reading.pillars.day.hanja);
    const self = { stem: reading.dayMaster.character, element: reading.dayMaster.element };
    const inPalace = (BRANCH_HIDDEN_STEMS[dayBranch] ?? []).some(([stem]) => {
      const element = STEM_ELEMENT[stem];
      if (!element) return false;
      const god = tenGod(self, { stem, element });
      return god === SPOUSE_GOD[gender] || god === SPOUSE_ADJACENT[gender];
    });
    if (inPalace) love += push("love", "LOVE_SPOUSE_PALACE", config.love.palace);

    // 일지가 다른 지지와 부딪치면 배우자 자리가 흔들린다.
    const palaceChung = branches.some(
      (branch) => branch !== dayBranch && branchRelation(dayBranch, branch) === "CHUNG",
    );
    if (palaceChung) love += push("love", "LOVE_PALACE_CHUNG", config.love.palaceChung);
  } else {
    // **성별을 모르면 배우자성을 세지 않는다.** 남녀에 따라 재성/관성으로 갈리는 값이라
    // 임의로 고르면 틀린 근거가 된다. 항목을 빼고 그 사실을 남긴다.
    factors.love.push({ key: "LOVE_GENDER_UNKNOWN", delta: 0 });
  }

  // ── 직업 — 관성(맡는 자리)과 식상(내놓는 자리) ──
  let career = config.base;
  const officer = share.JEONGGWAN + share.PYEONGWAN;
  const output = share.SIKSIN + share.SANGGWAN;
  career += push("career", "CAREER_OFFICER", Math.round(officer * config.career.officerShare));
  career += push("career", "CAREER_OUTPUT", Math.round(output * config.career.outputShare));
  // 관은 나를 극하는 자리라, 일간이 두터워야 눌리지 않고 쓴다.
  if (strong) career += push("career", "CAREER_STRONG_BODY", config.career.strongBody);

  // ── 건강 — 오행이 고른가, 부딪치는 자리가 몇인가 ──
  let health = config.base;
  const balance = elementBalance(reading.elements);
  health += push("health", "HEALTH_BALANCE", Math.round((balance - 0.5) * 2 * config.health.balance));
  const chung = natalChungCount(branches);
  if (chung) health += push("health", "HEALTH_CHUNG", chung * config.health.chungEach);
  // 한쪽으로 치우친 몸은 그 자체로 부담이다. 중화는 감점하지 않는다.
  if (strong || weak) health += push("health", "HEALTH_EXTREME_BODY", config.health.extremeBody);

  return {
    version: NATAL_OUTLOOK_VERSION,
    scores: {
      wealth: clamp(wealth, config.clamp),
      love: clamp(love, config.clamp),
      career: clamp(career, config.clamp),
      health: clamp(health, config.clamp),
    },
    tenGodShare: share,
    factors,
  };
}
