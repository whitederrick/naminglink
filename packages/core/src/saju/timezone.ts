// 출생지 기준 진태양시(true solar time) 변환.
//
// 왜 필요한가: @fullstackfamily/manseryeok의 시간 보정은 표준 자오선을 135°(한국 표준시)로
// **하드코딩**한다(dist: `standardMeridian = 135`). 그래서 경도만 바꿔 넘기면 해외 출생자에게
// `135 - 현지경도`라는 엉뚱한 보정이 들어간다. 뉴욕(-74°)이면 약 14시간이 어긋난다.
//
// 그래서 라이브러리의 보정을 끄고(applyTimeCorrection: false) 여기서 직접 계산한다.
//
//   출생지 벽시계 시각 --(IANA 표준시간대)--> UTC --(경도 × 4분)--> 출생지 진태양시
//
// 표준시간대 변환에 IANA 데이터베이스(Intl)를 쓰는 이유는 서머타임과 **과거 시간대 규칙**이
// 함께 들어 있기 때문이다. 직접 표를 만들면 다음을 전부 놓친다.
//   - 한국 1954~1961년 UTC+8:30 시행
//   - 한국 1948~1951·1955~1960·1987~1988년 서머타임
//   - 각국의 서머타임 시행 이력
// 이 값들은 명리에서 시주(時柱)를 한 칸 통째로 바꾼다.

export type Birthplace = {
  /** IANA 표준시간대 식별자. 예: "Asia/Seoul", "America/New_York" */
  timeZone: string;
  /** 출생지 경도(동경 +, 서경 -) */
  longitude: number;
};

function zoneOffsetMs(instant: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts: Record<string, number> = {};
  for (const part of formatter.formatToParts(instant)) {
    if (part.type !== "literal") parts[part.type] = Number(part.value);
  }

  const asUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second,
  );
  return asUtc - instant.getTime();
}

/**
 * 출생지의 벽시계 시각을 UTC 순간으로 바꾼다.
 *
 * 오프셋은 그 순간이 정해져야 알 수 있고, 그 순간은 오프셋이 정해져야 알 수 있다. 그래서
 * 한 번 추정해 오프셋을 구하고, 그 오프셋으로 다시 계산해 값이 바뀌면 한 번 더 반영한다
 * (서머타임 전환 시각 근처에서만 갈린다).
 */
export function wallClockToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string,
) {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  const firstOffset = zoneOffsetMs(new Date(guess), timeZone);
  const firstPass = guess - firstOffset;
  const secondOffset = zoneOffsetMs(new Date(firstPass), timeZone);
  return new Date(
    secondOffset === firstOffset ? firstPass : guess - secondOffset,
  );
}

/**
 * UTC 순간을 출생지 진태양시의 달력 값으로 바꾼다.
 *
 * 경도 1°는 태양이 4분 움직인 거리다. 그리니치 기준 UTC에 `경도 × 4분`을 더하면 그 경도에서
 * 태양이 남중하는 시각 기준의 시간이 된다. 균시차(최대 ±16분)는 반영하지 않는다 — 시주는
 * 2시간 단위라 경계에 걸리는 경우가 드물고, 전통 만세력도 대개 균시차를 쓰지 않는다.
 */
export function toTrueSolarTime(utc: Date, longitude: number) {
  const solar = new Date(utc.getTime() + longitude * 4 * 60 * 1000);
  return {
    year: solar.getUTCFullYear(),
    month: solar.getUTCMonth() + 1,
    day: solar.getUTCDate(),
    hour: solar.getUTCHours(),
    minute: solar.getUTCMinutes(),
  };
}

/** 벽시계 시각 → 출생지 진태양시. 시주 계산에 넣을 값이다. */
export function resolveTrueSolarTime(
  date: { year: number; month: number; day: number },
  time: { hour: number; minute: number },
  birthplace: Birthplace,
) {
  const utc = wallClockToUtc(
    date.year,
    date.month,
    date.day,
    time.hour,
    time.minute,
    birthplace.timeZone,
  );
  return toTrueSolarTime(utc, birthplace.longitude);
}

export function isSupportedTimeZone(timeZone: string) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone });
    return true;
  } catch {
    return false;
  }
}
