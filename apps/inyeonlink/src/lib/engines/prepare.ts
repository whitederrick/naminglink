import { calculatePremiumSaju, type FiveElement } from "@naminglink/core/saju";
import {
  calculateElementStrength,
  FIVE_ELEMENTS,
  type ElementStrength,
} from "@naminglink/core/saju/elements";

import { BRANCH_ANIMALS, branchOf, type Branch } from "./branches";
import type { Person } from "./types";

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
};

export function toReading(prepared: Prepared): PersonReading {
  const { saju, elements } = prepared;
  const ranked = [...FIVE_ELEMENTS].sort(
    (a, b) => elements.strength[b] - elements.strength[a],
  );

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
  };
}
