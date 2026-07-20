// 결과 객체에서 후보 배열의 길이를 세는 공용 유틸(화면별로 상한만 다르게 적용한다).
export function countCandidates(result: unknown) {
  if (!result || typeof result !== "object" || Array.isArray(result)) return 0;
  const candidates = (result as Record<string, unknown>).candidates;
  return Array.isArray(candidates) ? candidates.length : 0;
}

export function cappedCandidateCount(result: unknown, cap: number) {
  return Math.min(countCandidates(result), cap);
}
