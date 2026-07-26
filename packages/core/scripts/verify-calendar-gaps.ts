// 만세력 표의 빈 날과 지원 범위 경계를 `./src/saju/calendar.ts`가 제대로 메우는지 확인한다.
//
// 확인 항목:
//   1. 표에 빠진 날이 정말 1956-12-31 하루뿐인가 (1900~2050 전수)
//   2. 그 하루가 이웃에서 정확히 메워지는가 (앞뒤 일주가 2칸 차이 = 가운데가 유일하게 정해짐)
//   3. 진태양시 보정이 지원 범위 아래로 넘어가도(1900-01-01 자정 직후) 죽지 않는가
//   4. 메운 날의 시주가 일간과 오자시두법에 맞는가
//
// 실행: apps/naminglink/node_modules/.bin/tsx packages/core/scripts/verify-calendar-gaps.ts

import { solarToLunar } from "@fullstackfamily/manseryeok";

import { calculateSajuAtDate } from "../src/saju/calendar";
import { calculatePremiumSaju } from "../src/saju/engine";

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  if (!ok) failures += 1;
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${label}${detail ? `\n          ${detail}` : ""}`);
}

console.log("=== 1. 표에서 빠진 날 전수 조사 (1900~2050) ===");
const missing: string[] = [];
let scanned = 0;
for (let year = 1900; year <= 2050; year += 1) {
  for (let month = 1; month <= 12; month += 1) {
    const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
    for (let day = 1; day <= lastDay; day += 1) {
      scanned += 1;
      try {
        solarToLunar(year, month, day);
      } catch {
        missing.push(
          `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
        );
      }
    }
  }
}
console.log(`  검사 ${scanned}일, 표에 없는 날 ${missing.length}일: ${missing.join(", ") || "없음"}`);
check(
  "빠진 날은 1956-12-31 하루뿐",
  missing.length === 1 && missing[0] === "1956-12-31",
  `실제: ${missing.join(", ")}`,
);

console.log("\n=== 2. 1956-12-31 메우기 ===");
// 앞뒤 이웃의 일주가 정확히 2칸 차이여야 가운데 날이 유일하게 정해진다.
const SEXAGENARY = (() => {
  const stems = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
  const branches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
  return Array.from({ length: 60 }, (_, i) => stems[i % 10] + branches[i % 12]);
})();

const before = calculateSajuAtDate(1956, 12, 30);
const after = calculateSajuAtDate(1957, 1, 1);
const filled = calculateSajuAtDate(1956, 12, 31);

const gapIndex = (pillar: string) => SEXAGENARY.indexOf(pillar);
const distance = (gapIndex(after.day.hangul) - gapIndex(before.day.hangul) + 60) % 60;

console.log(
  `  1956-12-30 일주 ${before.day.hanja} / 1957-01-01 일주 ${after.day.hanja} (간격 ${distance}칸)`,
);
check("앞뒤 이웃의 일주 간격이 2칸", distance === 2);
check("빠진 날을 메웠다고 표시", filled.gapFilled);
check(
  `메운 일주가 앞 이웃의 다음 칸`,
  gapIndex(filled.day.hangul) === (gapIndex(before.day.hangul) + 1) % 60,
  `메운 값 ${filled.day.hanja}`,
);
check(
  "년·월주는 이웃과 동일 (절기 경계 없음)",
  before.year.hanja === after.year.hanja &&
    before.month.hanja === after.month.hanja &&
    filled.year.hanja === before.year.hanja &&
    filled.month.hanja === before.month.hanja,
  `${filled.year.hanja} / ${filled.month.hanja}`,
);

console.log("\n=== 3. 메운 날의 시주 (오자시두법) ===");
// 일간 壬(임)일이면 자시는 庚子부터. 시지는 두 시간 단위.
const HOUR_EXPECT: Array<[number, string]> = [
  [0, "庚子"],
  [3, "壬寅"],
  [12, "丙午"],
  [23, "庚子"],
];
for (const [hour, expected] of HOUR_EXPECT) {
  const result = calculateSajuAtDate(1956, 12, 31, hour, 0);
  check(
    `1956-12-31 ${String(hour).padStart(2, "0")}시 -> 시주 ${expected}`,
    result.hour?.hanja === expected,
    `실제 ${result.hour?.hanja} (일주 ${result.day.hanja})`,
  );
}

console.log("\n=== 4. 실제 서비스 경로에서 1956-12-31 ===");
try {
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: 1956,
    month: 12,
    day: 31,
    birthHour: 10,
    birthMinute: 0,
  });
  check(
    "calculatePremiumSaju가 죽지 않고 사주를 돌려줌",
    Boolean(saju.pillars.day.hanja && saju.pillars.hour?.hanja),
    `일주 ${saju.pillars.day.hanja} 시주 ${saju.pillars.hour?.hanja}, 음력 ${saju.convertedDate.lunar ? "있음" : "null (표에 없음 — 의도된 값)"}`,
  );
  check("메웠다는 표시가 결과에 남음", saju.calendarGapFilled);
} catch (error) {
  check("calculatePremiumSaju가 죽지 않음", false, String(error));
}

console.log("\n=== 5. 지원 범위 아래로 넘어가는 보정 (1900-01-01 자정 직후) ===");
// 1900년 한국은 아직 표준시 이전(LMT ≈ 서울 경도)이라 서울에서는 보정이 0에 가깝다.
// 서울보다 서쪽(제주·인천)이면 진태양시가 1899-12-31로 넘어간다 — 표에 없는 영역이다.
const WEST_OF_SEOUL = [
  ["제주", 126.5312],
  ["인천", 126.7052],
  ["서울", 126.978],
] as const;
for (const [label, longitude] of WEST_OF_SEOUL) {
  try {
    const saju = calculatePremiumSaju({
      calendarType: "solar",
      year: 1900,
      month: 1,
      day: 1,
      birthHour: 0,
      birthMinute: 0,
      longitude,
      birthplaceLabel: label,
    });
    check(
      `1900-01-01 00:00 ${label} 출생이 죽지 않음`,
      Boolean(saju.pillars.day.hanja),
      `일주 ${saju.pillars.day.hanja} 시주 ${saju.pillars.hour?.hanja}` +
        `${saju.timeCorrection.correctedDate ? ` (1899-12-31로 롤백, 메움=${saju.calendarGapFilled})` : " (롤백 없음)"}`,
    );
  } catch (error) {
    check(`1900-01-01 00:00 ${label} 출생이 죽지 않음`, false, String(error));
  }
}

console.log("\n=== 6. 상단 경계 (2050-12-31 늦은 시각) ===");
try {
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: 2050,
    month: 12,
    day: 31,
    birthHour: 23,
    birthMinute: 59,
  });
  check(
    "2050-12-31 23:59가 죽지 않음",
    Boolean(saju.pillars.day.hanja),
    `일주 ${saju.pillars.day.hanja} 시주 ${saju.pillars.hour?.hanja}`,
  );
} catch (error) {
  check("2050-12-31 23:59가 죽지 않음", false, String(error));
}

console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
process.exit(failures === 0 ? 0 : 1);
