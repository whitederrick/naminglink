#!/usr/bin/env node
/**
 * **결과 화면마다 진입 관문이 서 있는가.**
 *
 * ## 왜 이 검사가 필요한가 (2026-08-19)
 *
 * 결과를 보는 대가로 광고 하나를 치르는 자리가 `ResultEntryGate`다. 결과 화면 부품은 넷이고
 * (한자·한국이름·한국어→글로벌·한글발음), **하나만 빠져도 그 서비스만 조용히 광고 없이**
 * 결과를 내준다. 화면이 멀쩡하므로 눈으로는 안 보인다 — **빠진 배선은 세어야 보인다.**
 *
 * 같은 병을 이 저장소에서 이미 겪었다(`verify-consent-locale.mjs` — 네 자리 중 하나만 빠져
 * 결제 고시가 영어로 나갔다).
 *
 * ## 무엇을 보는가
 *
 *   ① 결과 화면 부품(`*ResultPage.tsx`)을 전부 찾는다. 한 곳도 못 찾으면 실패다
 *   ② 각 부품이 `<ResultEntryGate` 를 그리는가
 *   ③ 관문이 **결과가 있을 때만** 서는가(`ready &&` 조건 안) — 복원 실패 화면에서 관문이
 *      돌면 발행한 콘텐츠 없는 자리에서 광고를 보게 하는 셈이다(2026-08-10 반려 사유)
 *   ④ 입력 화면(`NamingForm.tsx`)에는 관문이 **없어야** 한다 — 있으면 한 번의 이용에 광고가
 *      둘이 된다. 관문을 결과 화면으로 옮긴 이유가 그것이다
 *
 * 목록을 손으로 적지 않는다. 결과 화면 부품이 하나 늘면 이 검사가 저절로 그것도 센다.
 *
 * 실행: node apps/naminglink/scripts/verify-result-entry-gate.mjs
 */

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPONENTS = path.join(APP, "src", "components");
const TAG = "<ResultEntryGate";

/** 관문 태그가 `ready &&` 조건 안에 있는가. 태그 앞 한 덩어리만 본다. */
function guardedByReady(source) {
  const at = source.indexOf(TAG);
  if (at < 0) return false;
  // 조건식은 태그 바로 위 줄들에 있다. 넉넉히 400자를 거슬러 본다.
  return /\bready\s*&&/.test(source.slice(Math.max(0, at - 400), at));
}

console.log("결과 진입 관문 — 결과 화면마다 서 있는가\n");

const problems = [];
const pages = readdirSync(COMPONENTS)
  .filter((name) => /ResultPage\.tsx$/.test(name))
  .sort();

for (const name of pages) {
  const source = readFileSync(path.join(COMPONENTS, name), "utf8");
  if (!source.includes(TAG)) {
    problems.push(`${name}: 관문이 없다 — 이 서비스만 광고 없이 결과가 나간다`);
    continue;
  }
  if (!guardedByReady(source)) {
    problems.push(`${name}: 관문이 결과 유무(ready)와 무관하게 선다 — 빈 화면에 광고가 붙는다`);
    continue;
  }
  console.log(`  ${name.padEnd(34)} 관문 있음 · 결과가 있을 때만`);
}

/** 입력 화면에는 관문이 없어야 한다. 있으면 한 번의 이용에 광고가 둘이다. */
const form = readFileSync(path.join(COMPONENTS, "NamingForm.tsx"), "utf8");
if (form.includes(TAG)) {
  problems.push("NamingForm.tsx: 입력 화면에 관문이 있다 — 한 번의 이용에 광고가 둘이 된다");
} else {
  console.log("  NamingForm.tsx                     입력 화면에는 관문 없음");
}

/**
 * **대조군.** 판정이 살아 있는가 — 없는 자리를 잡고, 있는 자리는 통과시킨다.
 * 이 세 줄이 없으면 정규식이 죽어도 초록이 나온다.
 */
const controlMissing = !"<main>\n  <section />\n</main>".includes(TAG);
const controlGuarded = guardedByReady("{ready && stored ? (\n  <ResultEntryGate locale={l} />");
const controlUnguarded = !guardedByReady("<div>\n  <ResultEntryGate locale={l} />");
if (!controlMissing || !controlGuarded || !controlUnguarded) {
  console.error(
    `\n✗ 대조군 실패 — 빠짐 ${controlMissing} · 조건 있음 ${controlGuarded} · 조건 없음 ${controlUnguarded}`,
  );
  process.exit(1);
}
console.log("\n  ✓ 대조군: 빠진 자리와 조건 없는 자리를 각각 잡는다");

if (pages.length === 0) {
  console.error("\n결과 화면 부품을 한 곳도 못 찾았다 — 검사 0건은 통과가 아니다. 이름 규칙이 바뀌었는지 볼 것.");
  process.exit(1);
}

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  process.exit(1);
}

console.log(`\nALL PASS — 결과 화면 ${pages.length}곳이 모두 관문을 세운다.`);
process.exit(0);
