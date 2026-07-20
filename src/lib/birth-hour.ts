// "23-01" 같은 두 시간 단위 범위를 대표 시(정수)로 변환한다.
// 23-01(자시대)은 조자시 관행에 따라 0시로, 그 외에는 범위 시작+1시를 대표 시로 본다.
// 화면 제안값(PremiumHanjaCheckoutPanel)과 서버 사주 계산(premium-hanja-analysis)이
// 같은 규칙을 공유하도록 이 한 곳에서만 정의한다.
export function birthHourRangeToHour(value: unknown): number | null {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw || raw === "unknown") return null;
  const [start, end] = raw.split("-").map(Number);
  if (!Number.isInteger(start) || !Number.isInteger(end)) return null;
  if (start === 23 && end === 1) return 0;
  return (start + 1) % 24;
}
