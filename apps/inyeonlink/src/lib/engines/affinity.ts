import { STEM_ELEMENT, type FiveElement } from "@naminglink/core/saju/elements";
import type { TenGod } from "@naminglink/core/saju/ten-gods";

import {
  BRANCH_ANIMALS,
  BRANCH_RELATION_SCORE,
  branchRelation,
  EARTHLY_BRANCHES,
  type Branch,
  type BranchRelation,
} from "./branches";
import { prepare, toReading, type PersonReading } from "./prepare";
import {
  dayMasterBond,
  relationOfDayMasters,
  spouseStar,
  type DayMasterBond,
  type SpouseLevel,
} from "./relations";
import { SAJU_WEIGHTS } from "./saju";
import { ENGINE_VERSION } from "./index";
import type { Gender, Person } from "./types";
import { resolveYongsin } from "./yongsin";

/**
 * 인연의 결 — "나에게 맞는 상대는 어떤 사람인가".
 *
 * 궁합은 두 사람을 맞대어 점수를 내지만, 여기서는 **한 사람만 받고 상대 자리를 비워 둔 채**
 * 그 자리에 들어올 수 있는 값을 전부 대입해 본다. 궁합 엔진을 거꾸로 돌리는 셈이다.
 *
 * ## 왜 전수 대입이 가능한가
 *
 * 사주 궁합의 점수는 네 항목으로 되어 있고, 각 항목이 보는 것이 서로 겹치지 않는다.
 *
 *   일간 관계·배우자성 → 두 사람의 **일간**(천간 10개)
 *   오행 보완         → 내 용신과 상대의 **오행 세력**
 *   일지 관계         → 두 사람의 **일지**(지지 12개)
 *   띠 관계           → 두 사람의 **연지**(지지 12개)
 *
 * 항목끼리 값을 주고받지 않으므로 **축마다 따로 최고점을 찾으면 그것이 곧 전체의 최고점**이다.
 * 수백만 개의 생년월일을 돌려 볼 필요가 없다 — 천간 10개, 지지 12개, 오행 5개를 세우면 끝난다.
 * 규칙이 같으므로 여기서 1등으로 나온 유형은 실제 궁합에서도 그 항목의 점수가 가장 높다.
 *
 * ## 이것이 하지 않는 것
 *
 * **총점을 예측하지 않는다.** 실제 사람에게서는 일간과 오행 세력이 따로 놀지 않는다 — 甲木인
 * 사람은 대개 木 기운도 두텁다. 축을 따로 세우는 이 방식은 그 상관을 무시하므로, 축별 1등을
 * 모아 붙인 "완벽한 상대"는 실존하지 않을 수 있다. 그래서 화면에는 **항목 점수만** 내보내고
 * 총점은 내지 않는다. 총점은 상대의 생년월일을 받아 `runMatch`가 낼 일이다.
 *
 * 점수 규칙을 새로 만들지 않았다는 점이 중요하다. 여기 쓰인 값은 전부 궁합 엔진의 것을 그대로
 * 불러 쓴 것이라, 궁합 규칙을 고치면 이 화면도 함께 따라온다.
 */

/** 천간 열 개. 순서를 코드에 박아 둔다 — 동점일 때 정렬 결과가 흔들리지 않게 한다. */
const HEAVENLY_STEMS = [
  "甲",
  "乙",
  "丙",
  "丁",
  "戊",
  "己",
  "庚",
  "辛",
  "壬",
  "癸",
] as const;

export const AFFINITY_VERSION = "inyeonlink-affinity-v1";

/** 상대 일간 하나를 대 본 결과. */
export type StemCandidate = {
  stem: string;
  element: FiveElement;
  /** 내가 볼 때 상대가 무슨 십신인가 */
  iSeeThem: TenGod;
  /** 상대가 볼 때 내가 무슨 십신인가 */
  theySeeMe: TenGod;
  bond: DayMasterBond;
  /** 일간 관계 항목 점수(62~88) */
  bondScore: number;
  /** 배우자성 항목. 찾는 상대의 성별을 밝히지 않으면 null이고 항목이 빠진다. */
  spouse: { level: SpouseLevel; score: number } | null;
  /** 위 항목들을 사주 엔진의 비중대로 합친 값. **정렬에만 쓴다.** */
  rank: number;
};

/** 지지 하나를 대 본 결과. 띠(연지)와 일지가 같은 표를 쓴다. */
export type BranchCandidate = {
  branch: Branch;
  animal: string;
  relation: BranchRelation;
  score: number;
  /**
   * 이 띠에 해당하는 출생 연도. 연지에만 채우고 일지에는 빈 배열이다.
   *
   * "닭띠와 잘 맞습니다"는 사실 쓸 수가 없다 — 남의 띠를 외우고 다니는 사람은 없다. 연도로
   * 바꿔 주면 그제야 써먹을 수 있는 말이 된다.
   */
  years: number[];
};

export type AffinityOutcome = {
  version: string;
  /** 점수 규칙을 빌려 온 궁합 엔진의 버전. 두 화면의 말이 같다는 근거다. */
  engineVersion: string;
  me: PersonReading;
  /** 찾는 상대의 성별. null이면 배우자성 항목을 빼고 본다. */
  seeking: Gender;
  /** 천간 열 개를 점수순으로. 화면이 앞뒤를 잘라 쓴다. */
  stems: StemCandidate[];
  /** 내게 지금 필요한 기운(억부용신). 상대에게서 찾을 오행이다. */
  needElements: FiveElement[];
  /** 띠(연지) 열둘을 점수순으로 */
  zodiac: BranchCandidate[];
  /** 일지 열둘을 점수순으로 */
  dayBranch: BranchCandidate[];
  /** 내 사주 연주의 해. 나이 차를 세는 기준이라 화면이 다시 계산하지 않게 함께 내보낸다. */
  myZodiacYear: number;
  precision: "COMPLETE" | "PARTIAL_NO_TIME";
};

/**
 * 1984년이 갑자년(甲子年)이다. 연지는 12년 주기이므로 이 해 하나만 있으면 어느 해가 어느 띠인지
 * 전부 정해진다 — 표를 따로 들고 있을 이유가 없다.
 */
const GAPJA_YEAR = 1984;

/** 앞뒤로 몇 해까지 보여 줄 것인가. 배우자를 찾는 범위로 ±18년이면 대개 충분하다. */
const YEAR_SPAN = 18;

export function runAffinity(me: Person, seeking: Gender): AffinityOutcome {
  const prepared = prepare(me);
  const mine = {
    stem: prepared.dayMaster.character,
    element: prepared.dayMaster.element,
  };

  const stems = HEAVENLY_STEMS.map<StemCandidate>((stem) => {
    const candidate = { stem, element: STEM_ELEMENT[stem] };
    const relation = relationOfDayMasters(mine, candidate);
    const bond = dayMasterBond(relation);
    // 배우자성은 양쪽 성별이 다 있어야 판정된다. 상대의 성별을 고르지 않았으면 궁합 엔진과
    // 똑같이 항목을 빼고, 남은 항목만으로 순위를 매긴다 — 임의의 값을 넣어 계산하지 않는다.
    const spouse = spouseStar(relation, me.gender, seeking);

    return {
      stem,
      element: candidate.element,
      iSeeThem: relation.aSeesB,
      theySeeMe: relation.bSeesA,
      bond: bond.bond,
      bondScore: bond.score,
      spouse,
      rank: combine(bond.score, spouse?.score ?? null),
    };
  }).sort((left, right) => right.rank - left.rank);

  const yongsin = resolveYongsin(
    prepared.dayMaster.element,
    prepared.elements.strength,
  );
  const myZodiacYear = zodiacYearOf(me.year, prepared.yearBranch);

  return {
    version: AFFINITY_VERSION,
    engineVersion: ENGINE_VERSION,
    me: toReading(prepared),
    seeking,
    stems,
    needElements: yongsin.favorable,
    zodiac: rankBranches(prepared.yearBranch, myZodiacYear),
    // 일지는 태어난 해와 아무 관계가 없다. 연도를 붙이면 거짓말이 되므로 넘기지 않는다.
    dayBranch: rankBranches(prepared.dayBranch, null),
    myZodiacYear,
    precision: me.birthHour !== null ? "COMPLETE" : "PARTIAL_NO_TIME",
  };
}

/**
 * 내 사주 연주의 해.
 *
 * 달력의 해와 다를 수 있다 — 사주는 입춘에서 해가 바뀌므로 **1월과 2월 초에 태어난 사람은 앞
 * 해가 자기 해다.** 라이브러리가 숫자로 된 해를 돌려주지 않으므로, 달력 해와 그 앞 해 중
 * 연지가 맞는 쪽을 고른다. 나이 차를 세는 기준이라 한 해가 어긋나면 전부 어긋난다.
 */
function zodiacYearOf(calendarYear: number, branch: Branch) {
  const index = EARTHLY_BRANCHES.indexOf(branch);
  return ((calendarYear - GAPJA_YEAR - index) % 12 + 12) % 12 === 0
    ? calendarYear
    : calendarYear - 1;
}

/** 이 지지에 해당하는 출생 연도들. `around`가 null이면 연도를 세지 않는다(일지). */
function yearsForBranch(branch: Branch, around: number | null) {
  if (around === null) return [];

  const base = GAPJA_YEAR + EARTHLY_BRANCHES.indexOf(branch);
  const first = base + Math.ceil((around - YEAR_SPAN - base) / 12) * 12;
  const years: number[] = [];
  for (let year = first; year <= around + YEAR_SPAN; year += 12) {
    years.push(year);
  }
  return years;
}

/**
 * 일간 관계와 배우자성을 사주 엔진의 비중대로 합친다.
 *
 * 두 항목만 쓰는 이유는 **천간 하나로 정해지는 것이 그 둘뿐**이기 때문이다. 오행 보완과 일지는
 * 상대의 다른 부분이 정하므로 여기 섞으면 순위가 흐려진다. 배우자성이 빠지면 궁합 엔진과 같이
 * 남은 비중으로 다시 정규화한다.
 */
function combine(bondScore: number, spouseScore: number | null) {
  if (spouseScore === null) return bondScore;

  const weightSum = SAJU_WEIGHTS.dayMasterRelation + SAJU_WEIGHTS.spouseStar;
  return (
    (bondScore * SAJU_WEIGHTS.dayMasterRelation +
      spouseScore * SAJU_WEIGHTS.spouseStar) /
    weightSum
  );
}

/**
 * 내 지지 하나에 열두 지지를 차례로 맞대어 점수순으로 세운다.
 *
 * 정렬은 안정 정렬이라 동점이면 십이지 차례(子丑寅…)가 유지된다. 같은 입력이면 같은 순서가
 * 나와야 하므로 여기에 무작위나 시간이 끼어들 자리를 두지 않는다.
 */
function rankBranches(
  mine: Branch,
  aroundYear: number | null,
): BranchCandidate[] {
  return EARTHLY_BRANCHES.map<BranchCandidate>((branch) => {
    const relation = branchRelation(mine, branch);
    return {
      branch,
      animal: BRANCH_ANIMALS[branch],
      relation,
      score: BRANCH_RELATION_SCORE[relation],
      years: yearsForBranch(branch, aroundYear),
    };
  }).sort((left, right) => right.score - left.score);
}
