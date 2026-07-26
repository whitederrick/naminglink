// 십신 판정 검증. 일간 甲(목·양)을 기준으로 열 천간을 모두 대조한다.
// 실행: apps/naminglink/node_modules/.bin/tsx packages/core/scripts/verify-ten-gods.ts

import { STEM_ELEMENT } from "../src/saju/elements";
import {
  SPOUSE_GOD,
  STEM_POLARITY,
  tenGod,
  type TenGod,
} from "../src/saju/ten-gods";

let failures = 0;
function check(label: string, actual: string, expected: string) {
  const ok = actual === expected;
  if (!ok) failures += 1;
  console.log(
    `  ${ok ? "PASS" : "FAIL"}  ${label}  ->  ${actual}${ok ? "" : ` (기대: ${expected})`}`,
  );
}

function of(stem: string) {
  return { stem, element: STEM_ELEMENT[stem] };
}

// 일간 甲(양목) 기준. 명리 교재의 표준 배치와 같아야 한다.
console.log("=== 일간 甲(양목)이 볼 때 ===");
const fromGap: Array<[string, TenGod]> = [
  ["甲", "BIGYEON"], // 같은 오행·같은 음양
  ["乙", "GEOPJAE"], // 같은 오행·다른 음양
  ["丙", "SIKSIN"], // 木生火, 같은 양
  ["丁", "SANGGWAN"], // 木生火, 다른 음양
  ["戊", "PYEONJAE"], // 木剋土, 같은 양
  ["己", "JEONGJAE"], // 木剋土, 다른 음양
  ["庚", "PYEONGWAN"], // 金剋木, 같은 양
  ["辛", "JEONGGWAN"], // 金剋木, 다른 음양
  ["壬", "PYEONIN"], // 水生木, 같은 양
  ["癸", "JEONGIN"], // 水生木, 다른 음양
];
for (const [stem, expected] of fromGap) {
  check(`甲 → ${stem}`, tenGod(of("甲"), of(stem)), expected);
}

console.log("\n=== 방향이 뒤집히면 짝이 되는 자리 ===");
// 甲己 조합: 甲이 보면 정재(배우자·남성), 己가 보면 정관(배우자·여성)
check("甲 → 己", tenGod(of("甲"), of("己")), "JEONGJAE");
check("己 → 甲", tenGod(of("己"), of("甲")), "JEONGGWAN");
check("남성 배우자성", SPOUSE_GOD.male, "JEONGJAE");
check("여성 배우자성", SPOUSE_GOD.female, "JEONGGWAN");

console.log("\n=== 관계는 반드시 짝을 이룬다 ===");
// 한쪽이 생하면 상대는 반드시 식상으로 본다. 열 천간 전부를 서로 대조해 확인한다.
const CATEGORY: Record<TenGod, string> = {
  BIGYEON: "PEER", GEOPJAE: "PEER",
  SIKSIN: "OUTPUT", SANGGWAN: "OUTPUT",
  PYEONJAE: "WEALTH", JEONGJAE: "WEALTH",
  PYEONGWAN: "OFFICER", JEONGGWAN: "JEONGGWAN_OFFICER",
  PYEONIN: "RESOURCE", JEONGIN: "RESOURCE",
};
const opposite: Record<string, string> = {
  PEER: "PEER",
  OUTPUT: "RESOURCE",
  RESOURCE: "OUTPUT",
  WEALTH: "OFFICER",
  OFFICER: "WEALTH",
  JEONGGWAN_OFFICER: "WEALTH",
};
const stems = Object.keys(STEM_ELEMENT);
let pairFailures = 0;
for (const left of stems) {
  for (const right of stems) {
    const forward = CATEGORY[tenGod(of(left), of(right))];
    const backward = CATEGORY[tenGod(of(right), of(left))];
    const normalized = backward === "JEONGGWAN_OFFICER" ? "OFFICER" : backward;
    const expected =
      opposite[forward] === "JEONGGWAN_OFFICER" ? "OFFICER" : opposite[forward];
    if (normalized !== expected) {
      pairFailures += 1;
      console.log(`  FAIL  ${left}↔${right}: ${forward} vs ${backward}`);
    }
  }
}
check("100개 조합 전부 짝이 맞음", String(pairFailures), "0");

console.log("\n=== 음양 배치 ===");
check("甲은 양", STEM_POLARITY["甲"], "YANG");
check("癸는 음", STEM_POLARITY["癸"], "YIN");
const yangCount = stems.filter((s) => STEM_POLARITY[s] === "YANG").length;
check("양간 5개", String(yangCount), "5");

console.log(`\n${failures === 0 ? "ALL PASS" : `${failures}건 실패`}`);
process.exit(failures === 0 ? 0 : 1);
