import { calculatePremiumSaju } from "@naminglink/core/saju";

import {
  BRANCH_ANIMALS,
  BRANCH_RELATION_SCORE,
  branchOf,
  branchRelation,
} from "./branches";
import { clampScore, type MatchEngine, type Person } from "./types";

/**
 * 띠 궁합 — 연지(年支)끼리의 관계 하나만 본다.
 *
 * 출생 시각을 몰라도 계산되고 한국 이름이 없어도 되므로, 어느 나라 사용자에게나 동일하게
 * 적용된다. 달력 해가 아니라 사주 연주에서 지지를 뽑는다 — 1~2월 초 출생자는 둘이 다르다.
 */
export const zodiacEngine: MatchEngine = {
  key: "zodiac",
  run(a: Person, b: Person) {
    const branchA = branchOf(toSaju(a).pillars.year.hanja);
    const branchB = branchOf(toSaju(b).pillars.year.hanja);
    const relation = branchRelation(branchA, branchB);
    const score = BRANCH_RELATION_SCORE[relation];

    return {
      key: "zodiac" as const,
      score: clampScore(score),
      factors: [
        {
          key: "branchRelation" as const,
          score: clampScore(score),
          weight: 1,
          note: `zodiac.${relation}`,
          noteParams: {
            animalA: BRANCH_ANIMALS[branchA],
            animalB: BRANCH_ANIMALS[branchB],
          },
        },
      ],
    };
  },
};

function toSaju(person: Person) {
  return calculatePremiumSaju({
    calendarType: person.calendarType,
    year: person.year,
    month: person.month,
    day: person.day,
    lunarLeapMonth: person.lunarLeapMonth,
    birthHour: person.birthHour,
    birthMinute: person.birthMinute,
  });
}
