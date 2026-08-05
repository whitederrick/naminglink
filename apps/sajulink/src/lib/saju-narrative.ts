import "server-only";

import {
  CONTROLS,
  GENERATES,
  STEM_ELEMENT,
  type FiveElement,
} from "@naminglink/core/saju/elements";

import type { TenGod } from "@naminglink/core/saju/ten-gods";

import type { PersonReading } from "@/lib/engines";
import {
  TEN_GODS,
  type NatalCategory,
  type NatalOutlook,
} from "@/lib/engines/natal-outlook";
import {
  DEFAULT_SCORING_CONFIG,
  gisinOf,
  type ScoringConfig,
  type TodayFortune,
} from "@/lib/engines/today-fortune";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import type { SajuInterpretation } from "@/lib/saju-interpretation";

/**
 * 해설(GPT)이 오지 않았을 때, 그 자리를 **엔진이 이미 계산해 둔 값으로** 채운다.
 *
 * ## 왜 이 파일이 있는가
 *
 * 유료 리포트의 장수는 **상품 정보 고시에 적는 값**이다. 그런데 해설은 외부 모델이라 언제든
 * 실패할 수 있고, 예전에는 그때 해설 자리를 통째로 비운 채 내보냈다 — 그러면 장수가 줄어
 * **고시가 실제와 어긋난다.** 고시는 실제와 달라선 안 된다.
 *
 * 그래서 실패하면 여기서 만든 서술이 그 자리에 들어간다. **빈 칸을 늘려 장수를 맞추는 것이
 * 아니다** — 십신·왕상휴수사·용신·강약·세운은 결제 여부와 상관없이 이미 계산되어 있고, 해설은
 * 그 위에 얹는 윤문이었다. 윤문이 없을 때 뼈대를 그대로 문장으로 옮기는 것이다.
 *
 * ## 규칙
 *
 * - **사실을 지어내지 않는다.** 이 파일이 쓰는 값은 전부 `reading`·`today`·`yearPillar`에서
 *   온다. 문장은 사전(`fallbackReport`)에 있고 여기서는 자리만 채운다.
 * - **엔진과 어긋나지 않는다.** 점수대 경계도, 올해 간지의 관계 판정도 엔진이 쓰는 것과 같은
 *   표·같은 순서를 읽는다. 등급이 「길(吉)」인데 낮은 문장이 붙는 일이 없어야 한다.
 * - **티어 분기가 없다.** 상품이 하나로 합쳐져(2026-08-05) 여기서 가릴 것이 없다. 예전에는
 *   `allyRatio`·`vitality`·`year_outlook`이 프리미엄 전용이었다.
 *
 * ## 문안을 "고르는" 자리다
 *
 * 사전에는 십신 스무 문단(`tenGodDepth`)과 근거 열네 줄(`natalFactors`)이 들어 있지만, 한
 * 사람의 문서에 그것을 다 싣지는 않는다. **열 개를 모두 실으면 누구에게나 같은 백과사전이
 * 나가고**, 열 중 자기와 관계있는 것은 두셋뿐인데 나머지 일곱도 읽어야 한다. 여기서 하는 일이
 * 그 고르기다 — 이 사람 원국에서 두터운 둘과 아예 없는 둘, 그리고 점수를 가장 크게 움직인
 * 근거 둘.
 *
 * 고르는 규칙은 **순서까지 정해져 있어야 한다.** 비중이 똑같은 십신이 둘 나왔을 때 어느 쪽을
 * 먼저 싣는지가 정해져 있지 않으면 같은 사람이 재발급받을 때 다른 문서가 나온다.
 */

type BandKey = "HIGH" | "MID" | "LOW";

type YearRelationKey =
  | "YONGSIN"
  | "GENERATES"
  | "GISIN"
  | "CONTROLS"
  | "NEUTRAL";

/**
 * 점수대를 셋으로 가른다. **경계를 여기서 새로 정하지 않고 등급표에서 읽는다** — 등급은
 * 「길(吉)」이라 적어 놓고 문장은 "어긋나는 자리가 있다"고 하면 한 장 안에서 서로 부딪친다.
 */
function bandOf(score: number, config: ScoringConfig): BandKey {
  const gil = config.grades.find((grade) => grade.code === "GIL")?.min ?? 65;
  const pyeong = config.grades.find((grade) => grade.code === "PYEONG")?.min ?? 45;
  if (score >= gil) return "HIGH";
  if (score >= pyeong) return "MID";
  return "LOW";
}

/**
 * 올해 간지가 지금 필요한 기운과 어떤 사이인가.
 *
 * **네 갈래의 순서가 엔진(`todayFortune` ①)과 같아야 한다.** 같은 상황을 두 곳이 다르게
 * 판정하면, 오늘의 운세 근거표와 올해 총운이 한 문서 안에서 서로 다른 말을 한다.
 */
function yearRelationOf(
  yearElement: FiveElement,
  favorable: FiveElement[],
  gisin: FiveElement[],
): YearRelationKey {
  if (favorable.includes(yearElement)) return "YONGSIN";
  if (favorable.includes(GENERATES[yearElement])) return "GENERATES";
  if (gisin.includes(yearElement)) return "GISIN";
  if (favorable.includes(CONTROLS[yearElement])) return "CONTROLS";
  return "NEUTRAL";
}

/** 오늘 점수를 가장 크게 움직인 항목의 이름. 근거표와 같은 사전을 읽는다. */
function topFactorName(today: TodayFortune, dictionary: Dictionary): string | null {
  let top: TodayFortune["factors"][number] | null = null;
  for (const factor of today.factors) {
    if (!top || Math.abs(factor.delta) > Math.abs(top.delta)) top = factor;
  }
  if (!top) return null;
  // 사전은 항목 키를 열거로 닫아 두었다. 엔진에 항목이 늘면 여기가 아니라 사전에서 잡힌다.
  return dictionary.today.factors[top.key as keyof Dictionary["today"]["factors"]] ?? null;
}

/**
 * 십신이 "두텁다"고 볼 비중.
 *
 * 열 개가 고르면 하나가 10%다. 그 **1.5배**를 넘으면 이 사주에서 두드러진 자리로 본다.
 * 실측(생년월일 여덟 벌)에서 이 선을 넘는 십신이 사람마다 둘에서 넷이었다.
 */
const THICK_MIN_SHARE = 0.15;

/**
 * 십신 심화 문단은 **두터운 쪽·없는 쪽 각각 둘까지**만 싣는다.
 *
 * 상한이 있어야 하는 이유가 둘이다. 하나는 위에 적은 대로 백과사전이 되지 않게 하는 것이고,
 * 다른 하나는 **장수**다 — 문단 수가 사람마다 달라지면 지면도 달라진다. 최대 넷으로 못 박아
 * 두면 지면은 "넷일 때"로 재면 되고, 그것이 곧 천장이다.
 */
const DEPTH_PICKS = 2;

/** 영역마다 싣는 근거 문장의 수(주석 성격의 0점 항목은 따로 센다). */
const DOMAIN_REASONS = 2;

/**
 * 이 사람 원국에서 **두터운 십신**과 **아예 없는 십신**을 골라 그 문단을 낸다.
 *
 * 없는 것을 함께 싣는 이유: "재성이 없다"는 빈칸이 아니라 그 자체가 성향이다 — 원국 표만
 * 보아서는 없는 것이 눈에 띄지 않는다(그 표는 있는 것만 줄로 보여 준다).
 *
 * 여기서 고르는 것은 **풀어 쓸 것**뿐이다. 한 줄 뜻은 사전(`tenGods`)에 그대로 있고 원국 표가
 * 그것을 쓴다.
 */
function tenGodParagraphs(
  share: Record<TenGod, number>,
  copy: Dictionary["fallbackReport"],
): string[] {
  const ordered = TEN_GODS.map((god, index) => ({ god, index, value: share[god] }));

  // 비중이 같으면 `TEN_GODS` 순서로 가른다. 정렬이 안정적이라 사실 순서가 유지되지만,
  // **문서가 흔들리지 않는 근거를 정렬 구현에 맡기지 않는다.**
  const thick = [...ordered]
    .filter((entry) => entry.value >= THICK_MIN_SHARE)
    .sort((a, b) => b.value - a.value || a.index - b.index)
    .slice(0, DEPTH_PICKS);

  // 두터운 것과 없는 것이 같을 수는 없다(0은 문턱을 넘지 못한다) — 겹침을 따로 걸러 낼 필요가 없다.
  const absent = ordered.filter((entry) => entry.value === 0).slice(0, DEPTH_PICKS);

  return [
    ...thick.map((entry) => copy.tenGodDepth[entry.god].thick),
    ...absent.map((entry) => copy.tenGodDepth[entry.god].absent),
  ];
}

/**
 * 한 영역의 문단 — 점수 한 줄 + 그 점수를 **가장 크게 움직인 근거** 둘.
 *
 * 근거를 전부 싣지 않는 것은 이 자리가 표가 아니라 문장이기 때문이다. 항목과 가감을 다 보고
 * 싶은 사람을 위한 표는 문서가 따로 싣는다(`outlook.factors`를 그대로 읽는다).
 *
 * **0점 항목은 근거가 아니라 주석이다.** 지금은 하나뿐인데(성별을 밝히지 않아 배우자성을 빼고
 * 계산한 경우) 그것은 점수를 움직이지 않았어도 **왜 안 움직였는지**를 말하므로 언제나 싣는다.
 */
function domainParagraph(
  category: NatalCategory,
  outlook: NatalOutlook,
  copy: Dictionary["fallbackReport"],
): string {
  const factors = outlook.factors[category];
  const reasons = factors
    .filter((factor) => factor.delta !== 0)
    .map((factor, index) => ({ factor, index }))
    .sort((a, b) => Math.abs(b.factor.delta) - Math.abs(a.factor.delta) || a.index - b.index)
    .slice(0, DOMAIN_REASONS)
    .map((entry) => entry.factor);
  const notes = factors.filter((factor) => factor.delta === 0);

  return [
    fillTemplate(copy.domains[category], { score: String(outlook.scores[category]) }),
    ...[...reasons, ...notes].map((factor) => copy.natalFactors[factor.key]),
  ].join(" ");
}

/** 오행 세력의 백분율. 리포트의 막대와 **같은 방식으로** 센다(합을 100으로 본다). */
function elementPercent(reading: PersonReading, element: FiveElement): number {
  const total = Object.values(reading.elements).reduce((sum, value) => sum + value, 0) || 1;
  return Math.round((reading.elements[element] / total) * 100);
}

export function buildNarrative(input: {
  reading: PersonReading;
  today: TodayFortune;
  /**
   * 원국 기준 삶의 네 영역. `natalOutlook(reading, gender)`로 뽑아 넘긴다.
   *
   * **여기서 계산하지 않고 받는다.** 같은 값을 문서(근거표)와 서술이 함께 쓰는데, 두 곳이
   * 따로 계산하면 성별을 한쪽에만 넘기는 실수가 조용히 생긴다 — 그러면 표와 문장이 다른
   * 점수를 말한다.
   */
  outlook: NatalOutlook;
  /** 올해의 연주. `yearPillarOf(dateKST)`로 뽑아 넘긴다. */
  yearPillar: { stem: string; branch: string };
  locale: Locale;
  dictionary: Dictionary;
  config?: ScoringConfig;
}): SajuInterpretation {
  // `locale`은 받되 여기서 쓰지 않는다 — 문장은 전부 `dictionary`에서 오고, 부르는 쪽이 이미
  // 그 로케일의 사전을 골라 넘긴다. 둘을 함께 받는 것은 부르는 자리에서 짝이 어긋나지 않게
  // 하려는 것이다.
  const { reading, today, outlook, yearPillar, dictionary } = input;
  const config = input.config ?? DEFAULT_SCORING_CONFIG;
  const copy = dictionary.fallbackReport;

  const elementName = (element: FiveElement) => dictionary.elements[element] ?? element;
  const dayMaster = dictionary.dayMasters[reading.dayMaster.character];
  const strength = dictionary.bodyStrength[reading.bodyStrength];

  const dayMasterName = dayMaster?.name ?? reading.dayMaster.character;

  // **표지가 이미 찍은 문장을 다시 쓰지 않는다.** 표지에 일간 이름과 `trait`이, 2장에
  // 「일간의 힘」 카드로 `bodyStrength.body`가 그대로 나간다. 그 둘을 여기서 또 부르면 한
  // 문서 안에서 같은 문장이 두 번 보이고, 그것은 해설이 아니라 결함으로 읽힌다.
  const summary = fillTemplate(copy.summary, {
    season: elementName(reading.seasonElement),
    dayMaster: dayMasterName,
    strongest: elementName(reading.strongestElement),
    scarcest: elementName(reading.scarcestElement),
  });

  // 강점은 새로 쓰지 않는다 — 일간별 행동 서술이 이미 사전에 있고, 그것이 바로 "겉으로
  // 드러나는 모습"이다. 없는 일간은 없지만, 비면 성향 한 줄로 대신한다.
  const signs = dictionary.dayMasterSigns[reading.dayMaster.character] ?? [];
  const strengths = signs.length ? signs : [dayMaster?.trait].filter((line): line is string => Boolean(line));

  const cautions = [
    ...copy.cautions[reading.bodyStrength],
    fillTemplate(copy.scarcityCaution, {
      scarcest: elementName(reading.scarcestElement),
    }),
  ];

  const elementBalance = fillTemplate(copy.elementBalance, {
    strongest: elementName(reading.strongestElement),
    strongestPct: String(elementPercent(reading, reading.strongestElement)),
    scarcest: elementName(reading.scarcestElement),
    scarcestPct: String(elementPercent(reading, reading.scarcestElement)),
    season: elementName(reading.seasonElement),
    favorable: reading.favorableElements.map(elementName).join(" · "),
  });

  const grade = dictionary.today.grades[today.grade];
  const topFactor = topFactorName(today, dictionary);
  const todayBand = bandOf(today.score, config);

  const todayBlock = {
    headline: fillTemplate(copy.todayHeadline, { grade: grade.name }),
    message: fillTemplate(copy.todayMessage, {
      score: String(today.score),
      gradeName: grade.name,
      gradeBody: grade.body,
      pillar: `${today.todayPillar.stem}${today.todayPillar.branch}`,
      // 근거 항목이 하나도 없는 날(전부 중립)은 그 문장을 통째로 뺀다. "「」" 같은 빈 인용이
      // 문서에 남으면 안 된다.
      topFactor: topFactor ?? "",
    }),
    advice: copy.todayAdvice[todayBand],
    lucky_note: fillTemplate(copy.luckyNote, {
      element: elementName(today.lucky.element),
      // 색·방위는 엔진이 코드로 내고 이름은 사전이 갖는다.
      colors: today.lucky.colors.map((color) => dictionary.today.luckyColors[color]).join(", "),
      direction: dictionary.today.luckyDirections[today.lucky.direction],
      time: today.lucky.timeRange,
    }),
  };

  // **삶의 네 영역은 원국에서 나온다 — 오늘 점수가 아니다.** 예전에는 `today.categories`를
  // 그대로 실었는데, 그것은 오늘 일진의 십신으로 매긴 하루짜리 값이면서 「삶의 네 영역」이라는
  // 이름으로 **평생 보관하는 문서**에 들어가 있었다. 오늘 쪽 값은 무료 화면에 그대로 남는다.
  const domainOf = (category: NatalCategory) => domainParagraph(category, outlook, copy);

  const interpretation: SajuInterpretation = {
    summary,
    personality: fillTemplate(copy.personality, {
      dayMaster: dayMasterName,
      element: elementName(reading.dayMaster.element),
      strengthName: strength.name,
    }),
    element_balance: elementBalance,
    today: todayBlock,
    strengths,
    cautions,
    domains: {
      wealth: domainOf("wealth"),
      love: domainOf("love"),
      career: domainOf("career"),
      health: domainOf("health"),
    },
    ten_gods: tenGodParagraphs(outlook.tenGodShare, copy),
    // 강약 판정은 2장의 카드가 이름과 뜻을 이미 찍는다. 이 문단이 더하는 것은 **"그래서 무엇이
    // 필요한가"** 하나이고, 그래서 용신을 이름으로만 부르지 않고 문장 안에 넣는다.
    yongsin: fillTemplate(copy.yongsinDepth[reading.bodyStrength], {
      favorable: reading.favorableElements.map(elementName).join(" · "),
    }),
    disclaimer: copy.disclaimer,
  };

  // **올해 총운은 이제 언제나 담긴다.** 예전에는 프리미엄 전용이었는데, 상품이 하나로 합쳐지며
  // 그 이름 자체가 「평생 사주와 **올해의 운세** 리포트」가 됐다(2026-08-05).
  //
  // 간지를 못 읽는 경우에만 빠진다 — 그때는 자리를 비우는 대신 장 구성이 흔들리므로,
  // `saju-report.tsx`가 그 장을 어떻게 다루는지 함께 볼 것.
  const yearElement = STEM_ELEMENT[yearPillar.stem];
  if (yearElement) {
    const gisin = gisinOf(reading.bodyStrength, reading.dayMaster.element);
    const relation = yearRelationOf(yearElement, reading.favorableElements, gisin);
    interpretation.year_outlook = fillTemplate(copy.yearOutlook, {
      pillar: `${yearPillar.stem}${yearPillar.branch}`,
      element: elementName(yearElement),
      relation: copy.yearRelations[relation],
    });
  }

  return interpretation;
}
