// 지장간·월령 반영이 표면 개수 세기와 실제로 다른 결과를 내는지 확인한다.
// 실행: apps/naminglink/node_modules/.bin/tsx packages/core/scripts/verify-elements.ts

import {
  BRANCH_HIDDEN_STEMS,
  calculateElementStrength,
  FIVE_ELEMENTS,
  STEM_ELEMENT,
  vitalityOf,
  type FiveElement,
} from "../src/saju/elements";
import { calculatePremiumSaju } from "../src/saju/engine";

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  if (!ok) failures += 1;
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
}

console.log("=== 1. 지장간 표 무결성 ===");
for (const [branch, stems] of Object.entries(BRANCH_HIDDEN_STEMS)) {
  const total = stems.reduce((sum, [, days]) => sum + days, 0);
  check(
    `${branch} 일수 합 30`,
    Math.abs(total - 30) < 0.05,
    `실제 ${total.toFixed(1)}`,
  );
  const unknown = stems.filter(([stem]) => !STEM_ELEMENT[stem]);
  check(`${branch} 천간 유효`, unknown.length === 0, unknown.map(([s]) => s).join(","));
}

console.log("\n=== 2. 왕상휴수사 ===");
check("봄(木)의 木은 旺", vitalityOf("WOOD", "WOOD") === "WANG");
check("봄(木)의 火는 相", vitalityOf("FIRE", "WOOD") === "SANG");
check("봄(木)의 水는 休", vitalityOf("WATER", "WOOD") === "HYU");
check("봄(木)의 金은 囚", vitalityOf("METAL", "WOOD") === "SU");
check("봄(木)의 土는 死", vitalityOf("EARTH", "WOOD") === "SA");

console.log("\n=== 3. 표면 개수 vs 세력 (같은 사람) ===");
const samples = [
  { label: "1990-05-12 14:30 서울", year: 1990, month: 5, day: 12, hour: 14 },
  { label: "1988-01-20 06:00 서울", year: 1988, month: 1, day: 20, hour: 6 },
  { label: "1975-10-03 22:00 서울", year: 1975, month: 10, day: 3, hour: 22 },
];

for (const sample of samples) {
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: sample.year,
    month: sample.month,
    day: sample.day,
    birthHour: sample.hour,
    birthMinute: 0,
    birthplace: { timeZone: "Asia/Seoul", longitude: 126.978 },
  });
  const pillars = {
    year: saju.pillars.year.hanja,
    month: saju.pillars.month.hanja,
    day: saju.pillars.day.hanja,
    hour: saju.pillars.hour?.hanja ?? null,
  };
  const result = calculateElementStrength(pillars);

  const surfaceLowest = lowestOf(saju.visibleFiveElements.counts);
  const strengthLowest = lowestOf(result.strength);

  console.log(
    `\n  ${sample.label}  (${pillars.year} ${pillars.month} ${pillars.day} ${pillars.hour})`,
  );
  console.log(
    `    계절 주인 ${result.seasonElement}${result.earthSeason ? " (환절기: 土도 旺)" : ""}`,
  );
  console.log(
    `    표면 개수  ${FIVE_ELEMENTS.map((e) => `${e[0]}${saju.visibleFiveElements.counts[e]}`).join(" ")}   -> 최약 ${surfaceLowest}`,
  );
  console.log(
    `    세력       ${FIVE_ELEMENTS.map((e) => `${e[0]}${result.strength[e].toFixed(2)}`).join(" ")}   -> 최약 ${strengthLowest}`,
  );
  if (surfaceLowest !== strengthLowest) {
    console.log(`    => 가장 부족한 오행 판정이 달라짐 (${surfaceLowest} -> ${strengthLowest})`);
  }

  // 지지가 품은 기운이 더해지므로 세력의 0 개수는 표면보다 적거나 같아야 한다.
  const surfaceZeros = FIVE_ELEMENTS.filter(
    (e) => saju.visibleFiveElements.counts[e] === 0,
  ).length;
  const strengthZeros = FIVE_ELEMENTS.filter((e) => result.strength[e] === 0).length;
  check(
    "지장간 반영 후 '없는 오행'이 늘지 않음",
    strengthZeros <= surfaceZeros,
    `표면 ${surfaceZeros}개 -> 세력 ${strengthZeros}개`,
  );
}

console.log("\n=== 4. 같은 날, 계절만 다를 때 木 세력 ===");
for (const [label, month] of [["3월(봄)", 3], ["9월(가을)", 9]] as const) {
  const saju = calculatePremiumSaju({
    calendarType: "solar",
    year: 1990, month, day: 15,
    birthHour: 12, birthMinute: 0,
    birthplace: { timeZone: "Asia/Seoul", longitude: 126.978 },
  });
  const result = calculateElementStrength({
    year: saju.pillars.year.hanja,
    month: saju.pillars.month.hanja,
    day: saju.pillars.day.hanja,
    hour: saju.pillars.hour?.hanja ?? null,
  });
  console.log(
    `  ${label}: 계절 주인 ${result.seasonElement}, 木 ${result.vitality.WOOD} (배수 반영 세력 ${result.strength.WOOD.toFixed(2)})`,
  );
}

console.log(`\n${failures === 0 ? "ALL PASS" : `${failures}건 실패`}`);
process.exit(failures === 0 ? 0 : 1);

function lowestOf(counts: Record<FiveElement, number>) {
  return FIVE_ELEMENTS.reduce((lowest, element) =>
    counts[element] < counts[lowest] ? element : lowest,
  );
}
