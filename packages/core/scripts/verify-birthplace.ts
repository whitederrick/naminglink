// 출생지 진태양시 보정이 시주(時柱)를 실제로 바꾸는지 확인한다.
// 실행: pnpm --filter @naminglink/core exec tsx scripts/verify-birthplace.ts

import { calculatePremiumSaju } from "../src/saju/engine";
import { wallClockToUtc } from "../src/saju/timezone";

type Case = {
  title: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  birthplace?: { timeZone: string; longitude: number };
  expect: string;
};

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };
const NEW_YORK = { timeZone: "America/New_York", longitude: -74.006 };

function hourPillar(c: Case) {
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: c.year,
    month: c.month,
    day: c.day,
    birthHour: c.hour,
    birthMinute: c.minute,
    birthplace: c.birthplace,
  });
  return {
    pillar: saju.pillars.hour?.hanja ?? "-",
    corrected: saju.timeCorrection.correctedTime,
    method: saju.timeCorrection.method,
  };
}

const cases: Case[] = [
  {
    title: "NY 1990-05-12 13:45 (출생지 미지정 = 한국 기준)",
    year: 1990, month: 5, day: 12, hour: 13, minute: 45,
    expect: "라이브러리 보정(-32분) -> 13:13",
  },
  {
    title: "NY 1990-05-12 13:45 (출생지 뉴욕)",
    year: 1990, month: 5, day: 12, hour: 13, minute: 45,
    birthplace: NEW_YORK,
    expect: "EDT(UTC-4) -> 진태양시 12:49",
  },
  {
    title: "KR 1988-06-15 10:00 (출생지 미지정)",
    year: 1988, month: 6, day: 15, hour: 10, minute: 0,
    expect: "서머타임 무시 -> 09:28",
  },
  {
    title: "KR 1988-06-15 10:00 (출생지 서울, 서머타임 시행 중)",
    year: 1988, month: 6, day: 15, hour: 10, minute: 0,
    birthplace: SEOUL,
    expect: "KDT(UTC+10) 반영 -> 08:28",
  },
  {
    title: "KR 1957-06-15 10:00 (출생지 서울, 당시 UTC+8:30)",
    year: 1957, month: 6, day: 15, hour: 10, minute: 0,
    birthplace: SEOUL,
    expect: "UTC+8:30 반영",
  },
];

let previous: string | null = null;
for (const c of cases) {
  const result = hourPillar(c);
  const changed = previous !== null && previous !== result.pillar;
  console.log(`\n${c.title}`);
  console.log(`  기대: ${c.expect}`);
  console.log(
    `  결과: 시주 ${result.pillar} | 보정시각 ${result.corrected?.hour}:${String(result.corrected?.minute).padStart(2, "0")} | 방식 ${result.method}${changed ? "   <-- 앞 사례와 시주 다름" : ""}`,
  );
  previous = result.pillar;
}

console.log("\n=== 표준시간대 오프셋 확인 (IANA 데이터) ===");
const checks: Array<[string, string, number, number, number, number, number]> = [
  ["Asia/Seoul 1988-06-15 10:00 (서머타임)", "Asia/Seoul", 1988, 6, 15, 10, 0],
  ["Asia/Seoul 1988-12-15 10:00 (평시)", "Asia/Seoul", 1988, 12, 15, 10, 0],
  ["Asia/Seoul 1957-06-15 10:00 (UTC+8:30)", "Asia/Seoul", 1957, 6, 15, 10, 0],
  ["America/New_York 1990-05-12 13:45 (EDT)", "America/New_York", 1990, 5, 12, 13, 45],
  ["America/New_York 1990-01-12 13:45 (EST)", "America/New_York", 1990, 1, 12, 13, 45],
];
for (const [label, zone, y, mo, d, h, mi] of checks) {
  const utc = wallClockToUtc(y, mo, d, h, mi, zone);
  const offsetHours = (Date.UTC(y, mo - 1, d, h, mi) - utc.getTime()) / 3600000;
  console.log(`  ${label} -> UTC${offsetHours >= 0 ? "+" : ""}${offsetHours}`);
}
