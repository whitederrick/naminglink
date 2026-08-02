import type {
  AffinityOutcome,
  BranchCandidate,
  MatchOutcome,
  PersonReading,
  StemCandidate,
} from "@/lib/engines";

/**
 * 무료 API가 화면으로 내보내는 몫만 남긴다.
 *
 * **왜 필요한가.** 이 서비스가 파는 것은 PDF 하나뿐이고, 그 PDF의 값어치는 오로지 "화면에 없는
 * 것이 여기 있다"에서 나온다. 그런데 `/api/match`·`/api/affinity`가 엔진 결과를 통째로
 * 돌려주고 있어, 파는 내용이 결제 없이 브라우저까지 그대로 갔다. 화면이 그리지 않을 뿐이라
 * 개발자도구 Network 탭 하나면 보였다. 상품이 있는데 값을 청구할 근거가 없는 상태였다.
 *
 * **허용목록으로 만든다.** 빼야 할 것을 지우는 방식(`delete`)이면, 나중에 엔진에 유료 필드가
 * 하나 늘 때 아무도 여기를 고치지 않고 그대로 새어 나간다. 남길 것을 적는 방식이라야 새 필드가
 * 기본으로 막힌다. 목록이 어긋나면 `scripts/verify-public-outcome.ts`가 실패한다.
 *
 * **PDF는 영향받지 않는다.** 발급 라우트가 입력으로 엔진을 다시 돌리므로(`api/report/pdf`),
 * 여기서 무엇을 빼든 문서 내용은 그대로다.
 */

/** 결과 화면이 실제로 그리는 한 사람의 풀이. 유료 리포트 전용 값은 담지 않는다. */
export type PublicPersonReading = Pick<
  PersonReading,
  | "label"
  | "pillars"
  | "dayMaster"
  | "animal"
  | "elements"
  | "strongestElement"
  | "scarcestElement"
  | "seasonElement"
  | "bodyStrength"
  | "favorableElements"
>;

/**
 * 화면 몫에서 빠진 필드 목록.
 *
 * **이 상수의 쓸모는 값이 아니라 컴파일이다.** `PersonReading`에 필드가 하나 늘면 여기 없는
 * 키가 생겨 타입이 맞지 않고, 그 순간 빌드가 깨진다 — 새 필드를 무료로 내보낼지 리포트에만
 * 실을지 **누군가 반드시 정하게 된다.** 이번 결함이 바로 "정하지 않아서" 생겼다.
 * (`PublicPersonReading`이 `Pick`이라 목록을 안 고쳐도 타입만으로는 통과한다.)
 */
const PAID_ONLY_READING_KEYS: Record<
  Exclude<keyof PersonReading, keyof PublicPersonReading>,
  true
> = {
  /** 신강·신약을 가른 근거 숫자 */
  allyRatio: true,
  /** 왕상휴수사 */
  vitality: true,
  /** 월령을 곱하기 전 세력 */
  rawElements: true,
  /** 환절기(辰未戌丑) 월 여부 */
  earthSeason: true,
  /** 진태양시 보정 내역 */
  timeCorrection: true,
  /** 양력·음력 대응 */
  convertedDate: true,
};

/** 검사 스크립트가 "정말 빠졌는지" 대조하는 데 쓴다. */
export const PAID_ONLY_READING_FIELDS = Object.keys(PAID_ONLY_READING_KEYS);

/** 빼는 것은 전부 궁합 리포트 4~6장과 부록을 채우는 값이다. */
export function publicReading(reading: PersonReading): PublicPersonReading {
  return {
    label: reading.label,
    pillars: reading.pillars,
    dayMaster: reading.dayMaster,
    animal: reading.animal,
    elements: reading.elements,
    strongestElement: reading.strongestElement,
    scarcestElement: reading.scarcestElement,
    seasonElement: reading.seasonElement,
    bodyStrength: reading.bodyStrength,
    favorableElements: reading.favorableElements,
  };
}

export type PublicMatchOutcome = Omit<MatchOutcome, "people" | "detail"> & {
  people: [PublicPersonReading, PublicPersonReading];
};

/** 궁합. `detail`(십신 짝·기둥별 지지 관계·상호 보급)을 통째로 뺀다. */
export function publicMatchOutcome(outcome: MatchOutcome): PublicMatchOutcome {
  return {
    engineVersion: outcome.engineVersion,
    totalScore: outcome.totalScore,
    engines: outcome.engines,
    precision: outcome.precision,
    people: [publicReading(outcome.people[0]), publicReading(outcome.people[1])],
    relation: outcome.relation,
    highlights: outcome.highlights,
  };
}

/**
 * 화면이 세우는 후보 수. 상위 셋과 꼴찌 하나다.
 *
 * **순서가 곧 계약이다.** 화면은 `slice(0, 3)`으로 상위를, `slice(-1)`(또는 마지막 자리)로
 * 꼴찌를 집는다. 그래서 잘라 보낼 때도 상위가 앞, 꼴찌가 맨 뒤여야 한다 — 전체를 보내던
 * 때와 같은 자리에서 같은 것이 나온다.
 */
const PUBLIC_BEST_COUNT = 3;

function bestAndHardest<T>(candidates: T[]): T[] {
  if (candidates.length <= PUBLIC_BEST_COUNT + 1) return candidates;
  return [
    ...candidates.slice(0, PUBLIC_BEST_COUNT),
    candidates[candidates.length - 1],
  ];
}

export type PublicAffinityOutcome = Omit<
  AffinityOutcome,
  "me" | "stems" | "zodiac" | "dayBranch"
> & {
  me: PublicPersonReading;
  /** 상위 셋 + 꼴찌 하나. 전체 열 개의 점수표는 유료 리포트의 몫이다. */
  stems: StemCandidate[];
  /** 상위 셋 + 꼴찌 하나. 전체 열두 띠 표는 유료 리포트의 몫이다. */
  zodiac: BranchCandidate[];
  /**
   * 천간 열 개를 점수순으로 늘어놓은 **글자만**.
   *
   * 간이 유형 확인기(`TypeCheckModal`)가 "그 사람은 몇 순위"를 답하는 데 쓴다. 순위 자체는
   * 원래 공개다 — 생년월일을 넣으면 알려 주도록 만든 팝업이라, 열 번 물으면 어차피 전부
   * 나온다. 리포트가 파는 것은 순위가 아니라 **항목 점수(일간 관계·배우자성)**이므로 그것은
   * 여기 담기지 않는다.
   */
  stemOrder: string[];
};

/**
 * 인연의 결. 화면이 그리는 상위 셋·꼴찌 하나만 남기고, 일지 열둘(`dayBranch`)은 통째로 뺀다 —
 * 화면 어디에서도 쓰지 않는데 응답에만 실려 나가고 있었다.
 */
export function publicAffinityOutcome(
  outcome: AffinityOutcome,
): PublicAffinityOutcome {
  return {
    version: outcome.version,
    engineVersion: outcome.engineVersion,
    me: publicReading(outcome.me),
    seeking: outcome.seeking,
    stems: bestAndHardest(outcome.stems),
    stemOrder: outcome.stems.map((candidate) => candidate.stem),
    needElements: outcome.needElements,
    zodiac: bestAndHardest(outcome.zodiac),
    myZodiacYear: outcome.myZodiacYear,
    precision: outcome.precision,
  };
}
