// 궁합 엔진 공통 계약.
//
// 원칙(gunghap_architecture_plan-1.md §6): 점수는 전부 규칙 기반이다. 같은 입력이면 언제나
// 같은 점수가 나와야 한다 — 유료 상품에서 재조회 때 숫자가 달라지면 환불 사유가 된다.
// AI는 점수 산출에 관여하지 않으며, 나중에 붙더라도 해설문 생성에만 쓴다.
//
// 계획서는 factor를 { label, delta, note } 문자열로 두었으나 이 서비스는 23개 언어를 쓰므로
// 표시 문자열을 엔진이 만들면 사전과 엔진이 얽힌다. 대신 엔진은 **키와 파라미터만** 돌려주고
// 문장은 화면에서 사전으로 만든다. 또 최종 점수를 가중 평균으로 내므로 가산치(delta)가 아니라
// 항목 점수(score)와 가중치(weight)를 그대로 노출한다 — 어떤 항목이 얼마나 끌어내렸는지가
// 그대로 보인다.

export type FactorKey =
  | "dayMasterRelation"
  | "spouseStar"
  | "elementSupply"
  | "dayBranchRelation"
  | "branchRelation";

/** 엔진이 점수의 근거로 내놓는 항목. `note`는 사전 키이고 `noteParams`가 그 자리를 채운다. */
export type Factor = {
  key: FactorKey;
  /** 0~100 */
  score: number;
  /** 이 엔진 안에서의 비중(합이 1) */
  weight: number;
  /** 사전 키. i18n의 factorNotes에서 찾는다. */
  note: string;
  noteParams?: Record<string, string>;
};

export type EngineKey = "saju" | "zodiac";

export type EngineResult = {
  key: EngineKey;
  /** 0~100 */
  score: number;
  factors: Factor[];
};

/**
 * 성별. 전통 명리는 배우자성(남=재성, 여=관성)을 성별로 나눠 보므로 궁합 계산에 필요하다.
 * 다만 밝히고 싶지 않은 사용자가 있을 수 있어 `null`을 허용하고, 그때는 배우자성 항목을
 * 빼고 나머지 항목의 비중을 다시 정규화한다 — 값을 임의로 넣어 계산하지 않는다.
 */
export type Gender = "male" | "female" | null;

export type Person = {
  /** 표시용. 비워도 계산에는 영향이 없다. */
  label?: string;
  gender: Gender;
  calendarType: "solar" | "lunar";
  year: number;
  month: number;
  day: number;
  lunarLeapMonth?: boolean;
  /** 모르면 null. 시주를 뺀 채로 계산한다. */
  birthHour: number | null;
  birthMinute: number | null;
  /** 출생지. 시주를 그 지역 진태양시로 계산하는 데 쓴다. */
  birthplace?: { timeZone: string; longitude: number };
};

/**
 * 엔진은 사람이 아니라 **준비된 사주**를 받는다. 만세력 계산이 사람당 한 번만 돌게 하려는
 * 것이고, 엔진이 늘어나도 계산량이 늘지 않는다.
 */
export type MatchEngine<TPrepared = unknown> = {
  key: EngineKey;
  run(a: TPrepared, b: TPrepared): EngineResult;
};

export function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}
