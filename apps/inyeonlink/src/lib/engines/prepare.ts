import { calculatePremiumSaju, type FiveElement } from "@naminglink/core/saju";
import {
  calculateElementStrength,
  FIVE_ELEMENTS,
  type ElementStrength,
  type Vitality,
} from "@naminglink/core/saju/elements";

import { BRANCH_ANIMALS, branchOf, type Branch } from "./branches";
import type { Person } from "./types";
import { resolveYongsin, type BodyStrength } from "./yongsin";

// 사주는 사람당 한 번만 계산한다. 예전에는 사주 엔진과 띠 엔진이 각자 계산해서 같은 사람의
// 만세력을 두 번 돌렸다 — 결과는 같지만 그럴 이유가 없다.

export type Prepared = {
  person: Person;
  saju: ReturnType<typeof calculatePremiumSaju>;
  elements: ElementStrength;
  dayMaster: { character: string; element: FiveElement };
  yearBranch: Branch;
  dayBranch: Branch;
  animal: string;
};

export function prepare(person: Person): Prepared {
  const saju = calculatePremiumSaju({
    calendarType: person.calendarType,
    year: person.year,
    month: person.month,
    day: person.day,
    lunarLeapMonth: person.lunarLeapMonth,
    birthHour: person.birthHour,
    birthMinute: person.birthMinute,
    birthplace: person.birthplace,
  });

  const elements = calculateElementStrength({
    year: saju.pillars.year.hanja,
    month: saju.pillars.month.hanja,
    day: saju.pillars.day.hanja,
    hour: saju.pillars.hour?.hanja ?? null,
  });

  const yearBranch = branchOf(saju.pillars.year.hanja);

  return {
    person,
    saju,
    elements,
    dayMaster: {
      character: saju.dayMaster.character,
      element: saju.dayMaster.element,
    },
    yearBranch,
    dayBranch: branchOf(saju.pillars.day.hanja),
    animal: BRANCH_ANIMALS[yearBranch],
  };
}

/** 결과 화면이 그대로 그릴 수 있는 한 사람의 풀이. */
export type PersonReading = {
  label?: string;
  /** 사주 원국 — 연·월·일·시. 시각을 모르면 hour가 null이다. */
  pillars: {
    year: { hangul: string; hanja: string };
    month: { hangul: string; hanja: string };
    day: { hangul: string; hanja: string };
    hour: { hangul: string; hanja: string } | null;
  };
  dayMaster: { character: string; element: FiveElement };
  animal: string;
  /** 월령까지 반영한 오행 세력. 화면에서 비율 막대로 그린다. */
  elements: Record<FiveElement, number>;
  strongestElement: FiveElement;
  scarcestElement: FiveElement;
  /** 태어난 달이 어느 오행의 계절인가 */
  seasonElement: FiveElement;
  /**
   * 일간이 강한가 약한가와, 그래서 무엇이 필요한가(억부용신).
   *
   * 점수에만 쓰고 마는 것이 아니라 화면에 그대로 내보낸다. "몇 점"보다 **"당신은 지금 이 기운이
   * 얇고 상대가 그것을 갖고 있다"**가 읽는 사람에게 훨씬 쓸모 있다.
   */
  bodyStrength: BodyStrength;
  favorableElements: FiveElement[];
  /**
   * 일간 편(인성+비겁)이 전체 세력에서 차지하는 비율 0~1. 신강·신약을 가른 **근거 숫자**다.
   * 화면은 판정만 보여 주고 이 값은 유료 리포트에서 쓴다 — 경계가 45%/35%라는 것을 함께
   * 적으면 판정이 어디쯤에서 갈렸는지 읽는 사람이 직접 볼 수 있다.
   */
  allyRatio: number;
  /**
   * 각 오행의 왕상휴수사(旺相休囚死). 태어난 달이 그 기운을 어떤 자리에 놓는가.
   *
   * 세력 막대는 "얼마나 있나"를 보여 주지만 이 값은 **"지금 계절이 그것을 밀어 주는가"**를
   * 말한다. 같은 양이라도 왕(旺)인 기운과 사(死)인 기운은 힘이 다르다.
   */
  vitality: Record<FiveElement, Vitality>;
  /** 월령을 곱하기 전 세력(천간 + 지장간 지분). `elements`와 나란히 두면 계절이 얼마나 밀어 올렸는지 보인다. */
  rawElements: Record<FiveElement, number>;
  /** 환절기(辰未戌丑) 월이라 土를 함께 왕으로 본 경우 */
  earthSeason: boolean;
  /**
   * 출생 시각을 진태양시로 고친 내역.
   *
   * 안내 문서가 개념을 설명하지만 **"당신의 경우 몇 분이 옮겨졌는지"**는 지금까지 어디에도
   * 나오지 않았다. 사람마다 다른 값이라 리포트에 실을 값으로 알맞다.
   */
  timeCorrection: {
    applied: boolean;
    correctedTime: { hour: number; minute: number } | null;
    /** 보정으로 날짜가 넘어간 경우에만 채워진다(자정 직후 출생). */
    correctedDate: { year: number; month: number; day: number } | null;
  };
  /** 사주를 뽑는 데 쓴 양력 날짜와 그에 대응하는 음력 날짜. 표 없는 날이면 lunar가 null이다. */
  convertedDate: {
    solar: { year: number; month: number; day: number };
    lunar: { year: number; month: number; day: number } | null;
  };
};

export function toReading(prepared: Prepared): PersonReading {
  const { saju, elements } = prepared;
  const ranked = [...FIVE_ELEMENTS].sort(
    (a, b) => elements.strength[b] - elements.strength[a],
  );
  const yongsin = resolveYongsin(prepared.dayMaster.element, elements.strength);

  return {
    label: prepared.person.label,
    pillars: {
      year: saju.pillars.year,
      month: saju.pillars.month,
      day: saju.pillars.day,
      // 시주는 출생 시각을 모르면 아예 없고, 있더라도 라이브러리 타입상 한자가 null일 수
      // 있다. 화면에서 두 경우를 똑같이 "시각 미입력"으로 다루면 되므로 여기서 합친다.
      hour:
        saju.pillars.hour && saju.pillars.hour.hanja
          ? { hangul: saju.pillars.hour.hangul, hanja: saju.pillars.hour.hanja }
          : null,
    },
    dayMaster: prepared.dayMaster,
    animal: prepared.animal,
    elements: elements.strength,
    strongestElement: ranked[0],
    scarcestElement: ranked[ranked.length - 1],
    seasonElement: elements.seasonElement,
    bodyStrength: yongsin.strength,
    favorableElements: yongsin.favorable,
    allyRatio: yongsin.allyRatio,
    vitality: elements.vitality,
    rawElements: elements.raw,
    earthSeason: elements.earthSeason,
    timeCorrection: {
      applied: saju.timeCorrection.applied,
      correctedTime: saju.timeCorrection.correctedTime,
      correctedDate: saju.timeCorrection.correctedDate,
    },
    convertedDate: {
      solar: saju.convertedDate.solar,
      lunar: saju.convertedDate.lunar,
    },
  };
}
