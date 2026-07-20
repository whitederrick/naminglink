// 사주 엔진(@/lib/saju/engine)의 SAJU_ENGINE.supportedYearFrom/To와 같은 값을 유지해야 한다.
// 엔진 모듈은 만세력 데이터를 포함하므로 클라이언트 컴포넌트에서 쓰는 이 파일에서 직접 가져오지 않는다.
const SUPPORTED_YEAR_FROM = 1900;
const SUPPORTED_YEAR_TO = 2050;

// 생성 단계(premium-hanja-analysis)와 동일하게 공백을 제거하고 판별해야
// " lunar " 같은 값이 사전 검증과 생성 단계에서 다르게 해석되지 않는다.
export function isLunarCalendar(value: unknown) {
  return typeof value === "string" && value.trim() === "lunar";
}

function numericPart(value: unknown) {
  if (typeof value === "number") {
    return Number.isInteger(value) ? value : null;
  }
  if (typeof value !== "string" || value === "unknown" || !value.trim()) {
    return null;
  }
  const parsed = Number(value);
  return Number.isInteger(parsed) ? parsed : null;
}

export function hasCompletePremiumBirthDate(
  inputFactors?: Record<string, unknown>,
) {
  if (!inputFactors) return false;

  const year = numericPart(inputFactors.birthYear);
  const month = numericPart(inputFactors.birthMonth);
  const day = numericPart(inputFactors.birthDay);
  if (!year || !month || !day || month < 1 || month > 12 || day < 1) {
    return false;
  }
  if (year < SUPPORTED_YEAR_FROM || year > SUPPORTED_YEAR_TO) {
    return false;
  }

  if (isLunarCalendar(inputFactors.calendarType)) {
    // 음력 한 달은 최대 30일이다. 해당 월의 실제 말일(29/30)과 윤달 여부는
    // 결제 전 확정할 수 없어 사주 엔진의 변환·역검증 단계에서 최종 확인한다.
    // 음력 연말은 양력 다음 해로 넘어가므로 지원 상한 연도는 음력 입력에서 제외한다.
    return day <= 30 && year < SUPPORTED_YEAR_TO;
  }

  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return day <= lastDay;
}
