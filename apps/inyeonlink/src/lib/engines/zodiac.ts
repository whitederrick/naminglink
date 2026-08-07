import {
  BRANCH_ANIMALS,
  BRANCH_RELATION_SCORE,
  branchRelation,
} from "./branches";
import type { Prepared } from "./prepare";
import { clampScore, type MatchEngine } from "./types";

// 📄 **이 규칙을 고치면 `app/guide/zodiac`도 함께 볼 것.** 그 문서가 이용자에게
// 띠 관계 규칙을 설명한다. 규칙만 고치면 문서가 조용히 거짓이 된다 — 숫자는
// `verify-guide-numbers`가 세지만 서술은 사람이 봐야 한다.

/**
 * 띠 궁합 — 연지(年支)끼리의 관계 하나만 본다.
 *
 * 출생 시각을 몰라도 계산되고 한국 이름이 없어도 되므로, 어느 나라 사용자에게나 동일하게
 * 적용된다. 달력 해가 아니라 사주 연주에서 지지를 뽑는다 — 1~2월 초 출생자는 둘이 다르다.
 */
export const zodiacEngine: MatchEngine<Prepared> = {
  key: "zodiac",
  run(a, b) {
    const relation = branchRelation(a.yearBranch, b.yearBranch);
    const score = clampScore(BRANCH_RELATION_SCORE[relation]);

    return {
      key: "zodiac" as const,
      score,
      factors: [
        {
          key: "branchRelation" as const,
          score,
          weight: 1,
          note: `zodiac.${relation}`,
          noteParams: {
            animalA: BRANCH_ANIMALS[a.yearBranch],
            animalB: BRANCH_ANIMALS[b.yearBranch],
          },
        },
      ],
    };
  },
};
