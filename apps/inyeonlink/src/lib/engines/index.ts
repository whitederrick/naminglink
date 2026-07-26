import { sajuEngine } from "./saju";
import { clampScore, type EngineKey, type EngineResult, type Person } from "./types";
import { zodiacEngine } from "./zodiac";

export * from "./types";
export { BRANCH_ANIMALS } from "./branches";

/**
 * 엔진 버전. 점수 규칙을 바꾸면 반드시 올린다 — 결과 링크가 언제 계산된 것인지 구분된다.
 *
 * v2: 출생지 진태양시 보정(해외 출생 시주 오류 수정) + 배우자성 항목(성별) 추가.
 * v3: 오행 보완도를 표면 글자 개수에서 지장간·월령을 반영한 세력으로 교체.
 */
export const ENGINE_VERSION = "inyeonlink-match-v3";

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

export type MatchOutcome = {
  engineVersion: string;
  /** 0~100 */
  totalScore: number;
  engines: EngineResult[];
  /** 두 사람 모두 출생 시각을 입력했는지. 하나라도 없으면 시주를 뺀 채 계산한다. */
  precision: "COMPLETE" | "PARTIAL_NO_TIME";
};

/**
 * 최종 매칭률 = 엔진 점수의 가중 평균.
 *
 * 저장하지 않으므로 캐시가 없다. 대신 모든 엔진이 규칙 기반이라 같은 입력이면 언제나 같은
 * 값이 나온다 — 캐시가 하던 "재조회 시 동일 보장"을 결정성으로 대신한다.
 */
export function runMatch(a: Person, b: Person): MatchOutcome {
  const engines = [sajuEngine.run(a, b), zodiacEngine.run(a, b)];
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
  };
}

/** 점수 구간. 화면 문구와 색을 이 값으로 고른다. */
export function scoreBand(score: number) {
  if (score >= 85) return "EXCELLENT" as const;
  if (score >= 72) return "GOOD" as const;
  if (score >= 60) return "FAIR" as const;
  return "CHALLENGING" as const;
}
