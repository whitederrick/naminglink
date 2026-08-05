import "server-only";

import {
  CONTROLS,
  GENERATES,
  STEM_ELEMENT,
  type FiveElement,
} from "@naminglink/core/saju/elements";

import type { PersonReading } from "@/lib/engines";
import {
  DEFAULT_SCORING_CONFIG,
  gisinOf,
  type FortuneCategory,
  type ScoringConfig,
  type TodayFortune,
} from "@/lib/engines/today-fortune";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import type { ReportKind } from "@/lib/report-product";
import type { SajuInterpretation } from "@/lib/saju-interpretation";

/**
 * 해설(GPT)이 오지 않았을 때, 그 자리를 **엔진이 이미 계산해 둔 값으로** 채운다.
 *
 * ## 왜 이 파일이 있는가
 *
 * 유료 리포트의 장수(총운 5장·프리미엄 7장)는 **상품 정보 고시에 적는 값**이다. 그런데 해설은
 * 외부 모델이라 언제든 실패할 수 있고, 예전에는 그때 해설 자리를 통째로 비운 채 내보냈다 —
 * 그러면 3장·5장으로 나가 **고시가 실제와 어긋난다.** 고시는 실제와 달라선 안 된다.
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
 * - **티어를 넘지 않는다.** `allyRatio`·`vitality`는 프리미엄에만 담기는 값이라
 *   (`prompts.ts`의 같은 판단) 총운 폴백에서는 쓰지 않는다. `year_outlook`도 프리미엄만이다.
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

/** 오늘 점수를 가장 크게 움직인 항목의 이름. 근거표(프리미엄)와 같은 사전을 읽는다. */
function topFactorName(today: TodayFortune, dictionary: Dictionary): string | null {
  let top: TodayFortune["factors"][number] | null = null;
  for (const factor of today.factors) {
    if (!top || Math.abs(factor.delta) > Math.abs(top.delta)) top = factor;
  }
  if (!top) return null;
  // 사전은 항목 키를 열거로 닫아 두었다. 엔진에 항목이 늘면 여기가 아니라 사전에서 잡힌다.
  return dictionary.today.factors[top.key as keyof Dictionary["today"]["factors"]] ?? null;
}

/** 오행 세력의 백분율. 리포트의 막대와 **같은 방식으로** 센다(합을 100으로 본다). */
function elementPercent(reading: PersonReading, element: FiveElement): number {
  const total = Object.values(reading.elements).reduce((sum, value) => sum + value, 0) || 1;
  return Math.round((reading.elements[element] / total) * 100);
}

export function buildFallbackInterpretation(input: {
  reading: PersonReading;
  today: TodayFortune;
  /** 올해의 연주. `yearPillarOf(dateKST)`로 뽑아 넘긴다. */
  yearPillar: { stem: string; branch: string };
  kind: ReportKind;
  locale: Locale;
  dictionary: Dictionary;
  config?: ScoringConfig;
}): SajuInterpretation {
  const { reading, today, yearPillar, kind, locale, dictionary } = input;
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
      // 행운 요소의 색·방위는 엔진이 ko/en 두 벌로 낸다. 로케일 사전이 늘어나기 전까지는
      // 한국어 사전일 때만 한국어 표기를 쓰고, 나머지는 영어 표기를 쓴다.
      colors: (locale === "ko" ? today.lucky.colorsKo : today.lucky.colorsEn).join(", "),
      direction: locale === "ko" ? today.lucky.directionKo : today.lucky.directionEn,
      time: today.lucky.timeRange,
    }),
  };

  // **점수대 문장을 붙이지 않는다.** 네 점수는 종합 점수를 바닥으로 깔고 시작해 같은 구간에
  // 함께 들어가는 일이 흔하고, 그러면 한 장에서 같은 문장이 네 번 나온다. 여기서는 영역마다
  // 다른 것 — 엔진이 그 점수를 어디에서 얻는지 — 만 적는다.
  const domainOf = (category: FortuneCategory) =>
    fillTemplate(copy.domains[category], {
      score: String(today.categories[category]),
    });

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
    disclaimer: copy.disclaimer,
  };

  // 올해 총운은 프리미엄에만 담긴다. 총운 리포트에 넣으면 티어 차이가 무너진다.
  if (kind === "premium") {
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
  }

  return interpretation;
}
