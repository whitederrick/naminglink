// v1(라이브러리 자체 보정) 대비 v2(IANA 기반 진태양시)가 한국 출생자의 사주를 어디서
// 바꾸는지 비교한다. 목적은 "차이가 없다"가 아니라 **모든 차이가 설명된다**를 보이는 것이다.
//
// 설명 가능한 차이는 셋뿐이어야 한다.
//
//   A. 표준시/서머타임 — 그 순간 한국의 UTC 오프셋이 +9가 아니었던 구간.
//      서머타임(1948~51·1955~60·1987~88), UTC+8:30(1954~61), 표준시 이전(~1912).
//      v1은 표준 자오선을 135°로 하드코딩해 이 구간을 통째로 놓친다.
//   B. 자정 직후 날짜 롤백 — 서울 기준 보정은 -32분이라 00:00~00:32 출생은 진태양시가
//      전날 23:2x~23:59가 된다. v1은 시각만 24시간 안으로 되돌리고 일주는 입력 날짜로 쓴다.
//   C. 정각 경계 — v1은 보정량을 분 단위로 반올림한다(32.088분 -> 32분). 두 시간 경계
//      바로 앞 1분(01:32 등)에서 반올림이 시각을 경계 너머로 밀어 시주가 한 칸 어긋난다.
//
// 실행: apps/naminglink/node_modules/.bin/tsx packages/core/scripts/verify-korea-time.ts

import { calculateSaju } from "@fullstackfamily/manseryeok";

import { calculatePremiumSaju } from "../src/saju/engine";
import { wallClockToUtc } from "../src/saju/timezone";

const SEOUL_LONGITUDE = 126.978;
const KST_OFFSET_MS = 9 * 3600 * 1000;

/** v1이 쓰던 경로 그대로. 라이브러리 보정(표준 자오선 135° 고정)에 맡긴다. */
function legacyPillars(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
) {
  const saju = calculateSaju(year, month, day, hour, minute, {
    longitude: SEOUL_LONGITUDE,
    applyTimeCorrection: true,
  });
  return { day: saju.dayPillarHanja, hour: saju.hourPillarHanja ?? "-" };
}

function currentPillars(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
) {
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year,
    month,
    day,
    birthHour: hour,
    birthMinute: minute,
  });
  return {
    day: saju.pillars.day.hanja,
    hour: saju.pillars.hour?.hanja ?? "-",
    corrected: saju.timeCorrection.correctedTime,
    correctedDate: saju.timeCorrection.correctedDate,
  };
}

/** 그 순간 한국의 UTC 오프셋(시간). +9가 아니면 v1이 놓치는 구간이다. */
function seoulOffsetHours(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
) {
  const utc = wallClockToUtc(year, month, day, hour, minute, "Asia/Seoul");
  return (Date.UTC(year, month - 1, day, hour, minute) - utc.getTime()) / 3600000;
}

const REASON_OFFSET = "A. 표준시/서머타임 (당시 오프셋이 +9가 아님)";
const REASON_ROLLBACK = "B. 자정 직후 날짜 롤백";
const REASON_BOUNDARY = "C. 정각 경계 (v1의 분 반올림)";
const REASON_UNKNOWN = "!!! 설명되지 않는 차이";

type Diff = {
  stamp: string;
  reason: string;
  detail: string;
  legacy: { day: string; hour: string };
  current: ReturnType<typeof currentPillars>;
};

const diffs: Diff[] = [];
let compared = 0;

// 분 단위까지 훑는다. 경계(정각 직전/직후)와 자정 구간은 반드시 포함해야 C·B가 잡힌다.
const MINUTES = [0, 1, 15, 30, 31, 32, 33, 45, 59];
const HOURS = [0, 1, 3, 6, 10, 12, 15, 18, 21, 23];

for (let year = 1900; year <= 2050; year += 1) {
  for (const month of [1, 3, 5, 6, 8, 9, 10, 12]) {
    for (const day of [1, 15]) {
      for (const hour of HOURS) {
        for (const minute of MINUTES) {
          compared += 1;
          const legacy = legacyPillars(year, month, day, hour, minute);
          const current = currentPillars(year, month, day, hour, minute);
          if (legacy.day === current.day && legacy.hour === current.hour) continue;

          const offset = seoulOffsetHours(year, month, day, hour, minute);
          const reason =
            offset !== 9
              ? REASON_OFFSET
              : current.correctedDate !== null
                ? REASON_ROLLBACK
                : legacy.day === current.day && current.corrected?.minute === 59
                  ? REASON_BOUNDARY
                  : REASON_UNKNOWN;

          diffs.push({
            stamp: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
            reason,
            detail: `UTC${offset >= 0 ? "+" : ""}${offset}`,
            legacy,
            current,
          });
        }
      }
    }
  }
}

const byReason = new Map<string, Diff[]>();
for (const diff of diffs) {
  const list = byReason.get(diff.reason) ?? [];
  list.push(diff);
  byReason.set(diff.reason, list);
}

console.log(`비교 ${compared}건 중 차이 ${diffs.length}건\n`);
for (const reason of [REASON_OFFSET, REASON_ROLLBACK, REASON_BOUNDARY, REASON_UNKNOWN]) {
  const list = byReason.get(reason);
  if (!list) continue;
  console.log(`■ ${reason} — ${list.length}건`);
  for (const diff of list.slice(0, 3)) {
    console.log(
      `    ${diff.stamp} (${diff.detail})  일주 ${diff.legacy.day}→${diff.current.day}  시주 ${diff.legacy.hour}→${diff.current.hour}`,
    );
  }
  if (list.length > 3) console.log(`    … 외 ${list.length - 3}건`);
  console.log("");
}

console.log("=== 대표 사례 ===");
const spotChecks: Array<[string, number, number, number, number, number]> = [
  ["1988-06-15 10:00 서머타임 시행 중", 1988, 6, 15, 10, 0],
  ["1988-12-15 10:00 평시 (변화 없어야 함)", 1988, 12, 15, 10, 0],
  ["1957-06-15 10:00 UTC+8:30 시행 중", 1957, 6, 15, 10, 0],
  ["1990-05-12 00:10 자정 직후", 1990, 5, 12, 0, 10],
  ["1990-05-12 00:40 자정 직후 밖 (변화 없어야 함)", 1990, 5, 12, 0, 40],
  ["2000-06-15 01:32 정각 경계", 2000, 6, 15, 1, 32],
  ["2000-06-15 01:33 경계 밖 (변화 없어야 함)", 2000, 6, 15, 1, 33],
  ["2024-02-10 12:30 최근 (변화 없어야 함)", 2024, 2, 10, 12, 30],
];
for (const [label, y, mo, d, h, mi] of spotChecks) {
  const legacy = legacyPillars(y, mo, d, h, mi);
  const current = currentPillars(y, mo, d, h, mi);
  const same = legacy.day === current.day && legacy.hour === current.hour;
  console.log(
    `  ${same ? "=" : "≠"} ${label}` +
      `\n      v1 일주 ${legacy.day} 시주 ${legacy.hour}` +
      `\n      v2 일주 ${current.day} 시주 ${current.hour}` +
      ` (보정 ${current.corrected?.hour}:${String(current.corrected?.minute).padStart(2, "0")}` +
      `${current.correctedDate ? `, 날짜 ${current.correctedDate.month}/${current.correctedDate.day}로 롤백` : ""})`,
  );
}

const unexplained = byReason.get(REASON_UNKNOWN) ?? [];
console.log(
  `\n${unexplained.length === 0 ? "ALL PASS — 모든 차이가 A·B·C로 설명됨" : `FAIL — 설명되지 않는 차이 ${unexplained.length}건`}`,
);
process.exit(unexplained.length === 0 ? 0 : 1);
