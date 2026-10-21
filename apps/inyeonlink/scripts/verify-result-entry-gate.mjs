#!/usr/bin/env node
/**
 * **결과 화면에 진입 관문이 서 있고, 입력 화면에는 없는가.**
 *
 * naminglink `scripts/verify-result-entry-gate.mjs`·dreamslink 의 같은 이름 파일과 짝이다.
 * 인연링크는 결과 화면이 둘이고(궁합 `MatchResultView` · 인연의 결 `AffinityResultView`) 입력 화면도
 * 둘이다(`CompatibilityForm` · `AffinityForm`). 짝을 손으로 적지 않으면 한쪽이 빠진 채 초록이 나온다.
 *
 * ## 무엇을 보는가
 *
 *   ① 결과 화면 둘이 `<ResultEntryGate`를 그리는가 — 빠지면 광고 없이 결과가 나간다. 화면이
 *      멀쩡하므로 눈으로는 안 보인다(빠진 배선은 세어야 보인다)
 *   ② 관문이 **결과를 손에 쥔 뒤의 반환**에만 서는가 — 로딩·오류 화면에 서면 보여 줄 것이 없는
 *      자리에서 광고를 보게 한다. 첫 `return (` 가 오류·로딩 분기보다 뒤에 있는지로 본다
 *   ③ 입력 화면 둘에는 관문이 **없어야** 한다 — 있으면 오퍼월이 도는 방문에서 한 번의 이용에
 *      광고가 둘이 된다. 관문을 결과 화면으로 옮긴 이유가 그것이다
 *   ④ 옛 입력 화면 관문 부품(`AdWatchOverlay`·`submitAdGateEnabled`·`pendingTarget`)이
 *      **되살아나지 않았는가**
 *
 * 실행: node apps/inyeonlink/scripts/verify-result-entry-gate.mjs
 */

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPONENTS = path.join(APP, "src", "components");
const TAG = "<ResultEntryGate";
const RESULT_VIEWS = ["MatchResultView.tsx", "AffinityResultView.tsx"];
const FORMS = ["CompatibilityForm.tsx", "AffinityForm.tsx"];

/**
 * 관문 태그가 **오류·로딩 분기보다 뒤에** 있는가. 두 분기는 `state.status === "error"`·
 * `state.status === "loading"` 로 시작하는 `if` 이고, 관문은 그 둘을 지난 성공 반환에 선다.
 */
function afterErrorBranches(source) {
  const at = source.indexOf(TAG);
  if (at < 0) return false;
  const loading = source.indexOf('state.status === "loading"');
  const error = source.indexOf('state.status === "error"');
  if (loading < 0 || error < 0) return false;
  return at > loading && at > error;
}

console.log("결과 진입 관문 — 결과 화면에 서고 입력 화면에는 없는가\n");

const problems = [];
const read = (name) => {
  const file = path.join(COMPONENTS, name);
  if (!existsSync(file)) {
    console.error(`${name} 를 못 찾았다 — 검사 0건은 통과가 아니다. 파일 이름이 바뀌었는지 볼 것.`);
    process.exit(1);
  }
  return readFileSync(file, "utf8");
};

for (const name of RESULT_VIEWS) {
  const source = read(name);
  if (!source.includes(TAG)) {
    problems.push(`${name}: 관문이 없다 — 광고 없이 결과가 나간다`);
  } else if (!afterErrorBranches(source)) {
    problems.push(`${name}: 관문이 로딩·오류 분기보다 앞에 있다 — 보여 줄 결과가 없는 화면에 광고가 붙는다`);
  } else {
    console.log(`  ${name.padEnd(24)} 관문 있음 · 결과를 손에 쥔 뒤에만`);
  }
}

for (const name of FORMS) {
  const source = read(name);
  if (source.includes(TAG)) {
    problems.push(`${name}: 입력 화면에 관문이 있다 — 오퍼월이 도는 방문에서 광고가 둘이 된다`);
  } else {
    console.log(`  ${name.padEnd(24)} 입력 화면에는 관문 없음`);
  }
  if (/AdWatchOverlay|submitAdGateEnabled|pendingTarget/.test(source)) {
    problems.push(`${name}: 옛 입력 화면 관문(AdWatchOverlay·submitAdGateEnabled·pendingTarget)을 부른다`);
  }
}

if (existsSync(path.join(COMPONENTS, "AdWatchOverlay.tsx"))) {
  problems.push("AdWatchOverlay.tsx: 옛 입력 화면 관문 부품이 되살아났다 — 관문은 ResultEntryGate 하나다");
}

/**
 * **대조군.** 판정이 살아 있는가 — 빠진 자리를 잡고, 분기 뒤의 자리는 통과시키고, 분기 앞의 자리는
 * 잡는다. 이 세 줄이 없으면 정규식이 죽어도 초록이 나온다.
 */
const branches = 'if (state.status === "loading") {}\nif (state.status === "error") {}\n';
const controlMissing = !"<main>\n  <section />\n</main>".includes(TAG);
const controlAfter = afterErrorBranches(`${branches}return <div><ResultEntryGate locale={l} /></div>;`);
const controlBefore = !afterErrorBranches(`return <ResultEntryGate />;\n${branches}`);
if (!controlMissing || !controlAfter || !controlBefore) {
  console.error(
    `\n✗ 대조군 실패 — 빠짐 ${controlMissing} · 분기 뒤 ${controlAfter} · 분기 앞 ${controlBefore}`,
  );
  process.exit(1);
}
console.log("\n  ✓ 대조군: 빠진 자리와 분기 앞의 자리를 각각 잡는다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  process.exit(1);
}

console.log("\nALL PASS — 결과 화면 둘에 관문이 서고 입력 화면 둘에는 없다.");
process.exit(0);
