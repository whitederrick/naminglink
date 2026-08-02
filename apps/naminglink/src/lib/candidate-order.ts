/**
 * 후보 정렬 기준(서버·클라이언트 공용).
 *
 * **왜 서버로 옮겼나.** 예전에는 `ResultCard`가 화면에서 적합도로 정렬했다. 잠긴 후보를
 * 서버에서 봉인하면서 적합도가 봉인 안으로 들어가므로, 화면에는 정렬에 쓸 값이 남지 않는다.
 * 순서는 서버가 정하고 화면은 그대로 쓴다. 덤으로 잠긴 후보의 적합도가 응답에서 사라진다.
 */

export function numberValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

export function candidateRate(item: Record<string, unknown>) {
  return numberValue(item.matching_rate) ?? numberValue(item.suitability_score);
}

/**
 * 결과의 후보를 적합도 순으로 정렬한 **새 결과 객체**를 돌려준다.
 *
 * 순서는 생성 시점에 한 번 정한다. 저장본과 화면이 다른 순서를 갖고 있으면, 저장 목록의 제목
 * (`summarizeResult`가 `candidates[0]`에서 뽑는다)이 화면의 1순위와 다른 이름이 된다.
 */
export function sortResultCandidates(result: unknown): unknown {
  if (!result || typeof result !== "object" || Array.isArray(result)) return result;
  const record = result as Record<string, unknown>;
  if (!Array.isArray(record.candidates)) return result;
  return { ...record, candidates: sortCandidatesByRate(record.candidates) };
}

/** 적합도 내림차순. 값이 없는 후보는 뒤로 보낸다(예전 화면 정렬과 같은 기준). */
export function sortCandidatesByRate<T>(candidates: T[]): T[] {
  return [...candidates].sort((a, b) => {
    const rateA = a && typeof a === "object" ? candidateRate(a as Record<string, unknown>) : null;
    const rateB = b && typeof b === "object" ? candidateRate(b as Record<string, unknown>) : null;
    return (rateB ?? -1) - (rateA ?? -1);
  });
}
