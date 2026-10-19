#!/usr/bin/env node
/**
 * **결과 화면에 진입 관문이 서 있고, 입력 화면에는 없는가.**
 *
 * naminglink `scripts/verify-result-entry-gate.mjs`와 짝이다. 구조가 다르다 — naminglink는
 * 결과 화면 부품이 넷이라 `*ResultPage.tsx`를 전부 세지만, 드림링크는 결과 화면이 하나
 * (`DreamResultView.tsx`)다.
 *
 * ## 무엇을 보는가
 *
 *   ① 결과 화면(`DreamResultView.tsx`)이 `<ResultEntryGate`를 그리는가 — 빠지면 광고 없이
 *      결과가 나간다. 화면이 멀쩡하므로 눈으로는 안 보인다(빠진 배선은 세어야 보인다)
 *   ② 관문이 **풀이할 상징이 있을 때만**(`outcome.matched.length`) 서는가 — 상징을 못 찾은
 *      화면은 발행한 콘텐츠가 없다. 거기서 관문이 돌면 콘텐츠 없는 자리에서 광고를 보게 한다
 *      (naming-link 2026-08-10 반려 사유의 모양)
 *   ③ 입력 화면(`DreamForm.tsx`)에는 관문이 **없어야** 한다 — 있으면 오퍼월이 도는 방문에서
 *      한 번의 이용에 광고가 둘이 된다. 관문을 결과 화면으로 옮긴 이유가 그것이다
 *   ④ 옛 입력 화면 관문 부품(`AdWatchOverlay`)이 **되살아나지 않았는가**
 *
 * 실행: node apps/dreamslink/scripts/verify-result-entry-gate.mjs
 */

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPONENTS = path.join(APP, "src", "components");
const TAG = "<ResultEntryGate";
const GUARD = /outcome\.matched\.length\s*\?/;

/** 관문 태그 바로 앞에 「상징이 있을 때만」 조건이 있는가. 태그 앞 한 덩어리만 본다. */
function guardedByMatched(source) {
  const at = source.indexOf(TAG);
  if (at < 0) return false;
  return GUARD.test(source.slice(Math.max(0, at - 200), at));
}

console.log("결과 진입 관문 — 결과 화면에 서고 입력 화면에는 없는가\n");

const problems = [];

const resultPath = path.join(COMPONENTS, "DreamResultView.tsx");
const formPath = path.join(COMPONENTS, "DreamForm.tsx");
if (!existsSync(resultPath) || !existsSync(formPath)) {
  console.error("DreamResultView.tsx 또는 DreamForm.tsx를 못 찾았다 — 검사 0건은 통과가 아니다. 파일 이름이 바뀌었는지 볼 것.");
  process.exit(1);
}

const result = readFileSync(resultPath, "utf8");
if (!result.includes(TAG)) {
  problems.push("DreamResultView.tsx: 관문이 없다 — 광고 없이 결과가 나간다");
} else if (!guardedByMatched(result)) {
  problems.push("DreamResultView.tsx: 관문이 상징 유무(outcome.matched.length)와 무관하게 선다 — 빈 결과에 광고가 붙는다");
} else {
  console.log("  DreamResultView.tsx   관문 있음 · 풀이할 상징이 있을 때만");
}

const form = readFileSync(formPath, "utf8");
if (form.includes(TAG)) {
  problems.push("DreamForm.tsx: 입력 화면에 관문이 있다 — 오퍼월이 도는 방문에서 광고가 둘이 된다");
} else {
  console.log("  DreamForm.tsx         입력 화면에는 관문 없음");
}

if (existsSync(path.join(COMPONENTS, "AdWatchOverlay.tsx"))) {
  problems.push("AdWatchOverlay.tsx: 옛 입력 화면 관문 부품이 되살아났다 — 관문은 ResultEntryGate 하나다");
}
if (/AdWatchOverlay|submitAdGateEnabled/.test(form)) {
  problems.push("DreamForm.tsx: 옛 입력 화면 관문(AdWatchOverlay·submitAdGateEnabled)을 부른다");
}

/**
 * **대조군.** 판정이 살아 있는가 — 없는 자리를 잡고, 조건 있는 자리는 통과시키고, 조건 없는
 * 자리는 잡는다. 이 세 줄이 없으면 정규식이 죽어도 초록이 나온다.
 */
const controlMissing = !"<main>\n  <section />\n</main>".includes(TAG);
const controlGuarded = guardedByMatched("{outcome.matched.length ? <ResultEntryGate locale={l} />");
const controlUnguarded = !guardedByMatched("<div>\n  <ResultEntryGate locale={l} />");
if (!controlMissing || !controlGuarded || !controlUnguarded) {
  console.error(
    `\n✗ 대조군 실패 — 빠짐 ${controlMissing} · 조건 있음 ${controlGuarded} · 조건 없음 ${controlUnguarded}`,
  );
  process.exit(1);
}
console.log("\n  ✓ 대조군: 빠진 자리와 조건 없는 자리를 각각 잡는다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  process.exit(1);
}

console.log("\nALL PASS — 결과 화면에 관문이 서고 입력 화면에는 없다.");
process.exit(0);
