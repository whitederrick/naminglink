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

/** 적합도 내림차순. 값이 없는 후보는 뒤로 보낸다(예전 화면 정렬과 같은 기준). */
export function sortCandidatesByRate<T>(candidates: T[]): T[] {
  return [...candidates].sort((a, b) => {
    const rateA = a && typeof a === "object" ? candidateRate(a as Record<string, unknown>) : null;
    const rateB = b && typeof b === "object" ? candidateRate(b as Record<string, unknown>) : null;
    return (rateB ?? -1) - (rateA ?? -1);
  });
}
