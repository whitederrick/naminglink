import { prepare, toReading, type PersonReading } from "./prepare";
import { mutualRelation, type MutualRelation } from "./relations";
import { sajuEngine } from "./saju";
import {
  clampScore,
  type EngineKey,
  type EngineResult,
  type Factor,
  type FactorKey,
  type Person,
} from "./types";
import { zodiacEngine } from "./zodiac";

export * from "./types";
export type { PersonReading } from "./prepare";
export type { MutualRelation, RelationShape } from "./relations";
export { BRANCH_ANIMALS } from "./branches";

/**
 * 엔진 버전. 점수 규칙을 바꾸면 반드시 올린다 — 결과 링크가 언제 계산된 것인지 구분된다.
 *
 * v2: 출생지 진태양시 보정(해외 출생 시주 오류 수정) + 배우자성 항목(성별) 추가.
 * v3: 오행 보완도를 표면 글자 개수에서 지장간·월령을 반영한 세력으로 교체.
 * v4: 점수 외에 읽을거리 추가 — 사주 원국·오행 세력·강점/주의/조언. 점수 규칙은 v3과 같다.
 * v5: 배우자성을 오행에서 십신으로 교체(정재·정관과 편재·편관을 구분) + 관계의 모양 추가.
 *     배우자성 점수가 바뀌므로 v4와 총점이 다를 수 있다.
 * v6: 점수 규칙은 v5와 같다. 다만 사주 엔진이 v2가 되면서(`@naminglink/core`) 출생지를
 *     넘기지 않은 경우에도 진태양시 경로를 타고, 자정 직후 출생은 진태양시 날짜로 일주를
 *     잡는다. 사주 원국이 달라지는 입력이 있으므로 총점도 달라질 수 있다.
 */
export const ENGINE_VERSION = "inyeonlink-match-v6";

/**
 * 엔진별 비중.
 *
 * 사주가 띠보다 훨씬 많은 정보를 쓰므로(4주 전체 vs 연지 하나) 비중을 크게 둔다. 띠를 아예
 * 빼지 않는 이유는 사용자가 가장 직관적으로 이해하는 항목이고, 출생 시각을 몰라도 값이
 * 흔들리지 않는 유일한 축이기 때문이다.
 */
export const ENGINE_WEIGHTS: Record<EngineKey, number> = {
  saju: 0.7,
  zodiac: 0.3,
};

/**
 * 화면에 크게 뽑아 줄 세 가지.
 *
 * 항목별 점수만 나열하면 "그래서 뭐"가 남는다. 가장 높은 항목을 강점으로, 가장 낮은 항목을
 * 주의점으로 뽑고 거기에 맞는 조언을 붙이면 읽는 사람이 무엇을 보면 되는지 알게 된다.
 * 모두 규칙으로 고르므로 같은 입력이면 같은 문장이 나온다.
 */
export type Highlights = {
  strength: { factor: FactorKey; note: string; params?: Record<string, string> };
  caution: { factor: FactorKey; note: string; params?: Record<string, string> };
};

export type MatchOutcome = {
  engineVersion: string;
  /** 0~100 */
  totalScore: number;
  engines: EngineResult[];
  /** 두 사람 모두 출생 시각을 입력했는지. 하나라도 없으면 시주를 뺀 채 계산한다. */
  precision: "COMPLETE" | "PARTIAL_NO_TIME";
  /** 각자의 사주 원국·일간·띠·오행 세력 */
  people: [PersonReading, PersonReading];
  /** 두 일간이 서로에게 무엇인가(십신)와 관계의 모양 */
  relation: MutualRelation;
  highlights: Highlights;
};

/**
 * 최종 매칭률 = 엔진 점수의 가중 평균.
 *
 * 저장하지 않으므로 캐시가 없다. 대신 모든 엔진이 규칙 기반이라 같은 입력이면 언제나 같은
 * 값이 나온다 — 캐시가 하던 "재조회 시 동일 보장"을 결정성으로 대신한다.
 */
export function runMatch(a: Person, b: Person): MatchOutcome {
  const preparedA = prepare(a);
  const preparedB = prepare(b);

  const engines = [
    sajuEngine.run(preparedA, preparedB),
    zodiacEngine.run(preparedA, preparedB),
  ];
  const totalScore = engines.reduce(
    (sum, engine) => sum + engine.score * ENGINE_WEIGHTS[engine.key],
    0,
  );

  return {
    engineVersion: ENGINE_VERSION,
    totalScore: clampScore(totalScore),
    engines,
    precision:
      a.birthHour !== null && b.birthHour !== null
        ? "COMPLETE"
        : "PARTIAL_NO_TIME",
    people: [toReading(preparedA), toReading(preparedB)],
    relation: mutualRelation(preparedA, preparedB),
    highlights: pickHighlights(engines),
  };
}

function pickHighlights(engines: EngineResult[]): Highlights {
  const factors = engines.flatMap((engine) => engine.factors);
  const sorted = [...factors].sort((left, right) => right.score - left.score);
  const best = sorted[0];
  // 항목이 하나뿐일 리는 없지만, 최고와 최저가 같은 항목이 되지 않게 한다.
  const worst = sorted.length > 1 ? sorted[sorted.length - 1] : best;

  return {
    strength: toHighlight(best, "strength"),
    caution: toHighlight(worst, "caution"),
  };
}

function toHighlight(factor: Factor, kind: "strength" | "caution") {
  return {
    factor: factor.key,
    note: `${kind}.${factor.key}`,
    params: factor.noteParams,
  };
}

/** 점수 구간. 화면 문구와 색을 이 값으로 고른다. */
export function scoreBand(score: number) {
  if (score >= 85) return "EXCELLENT" as const;
  if (score >= 72) return "GOOD" as const;
  if (score >= 60) return "FAIR" as const;
  return "CHALLENGING" as const;
}
