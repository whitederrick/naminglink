// AI 호출이 **결제한 경로에만** 있는지 전수로 센다.
// AUDIT_NO_SIDE_EFFECTS: `import OpenAI from "openai"` 는 알아보는 대조군 문자열이다 — 부르지 않는다
//
// **왜 검사기로 두는가**(사용자 지시, 2026-08-04). 무료 화면과 앞으로 만들 SEO 상징 페이지가
// 이 서비스의 획득 엔진이다. 조회가 많은 그 자리에서 뷰마다 모델을 때리면 API 비용·응답
// 지연·광고 페이지 속도가 한꺼번에 나빠진다. 결제한 리포트에서만 부르고 캐시로 1회 생성한다.
//
// 이 규칙은 코드를 읽으면 보이지만 **한 줄 import로 조용히 깨진다.** 그래서 사람이 아니라
// 이 파일이 센다.
//
// 실행: apps/sajulink 에서  node scripts/verify-ai-cost-boundary.mjs

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

/** 모델을 불러도 되는 자리. 결제가 확인된 뒤에 도는 경로뿐이다. */
const ALLOWED = new Set(["src/app/api/report/pdf/route.ts"]);

/**
 * 모델을 부르는 흔적.
 *
 * **호출뿐 아니라 import도 본다.** 무료 화면이 해설 모듈을 들여왔다면 부르려는 참이거나
 * 이미 부르고 있다 — 호출만 찾으면 `const f = interpretSaju;` 같은 우회를 놓친다.
 * SDK 직접 사용도 함께 본다.
 */
const CALL_PATTERNS = [
  /interpretSaju/,
  /from\s+"@\/lib\/saju-interpretation"/,
  /from\s+"openai"/,
  /openai\.chat\.completions/,
];

function sourceFiles(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) sourceFiles(full, found);
    else if (/\.(ts|tsx)$/.test(entry)) found.push(full);
  }
  return found;
}

const problems = [];
let scanned = 0;
let allowedHits = 0;

for (const file of sourceFiles("src")) {
  const key = relative(".", file).split("\\").join("/");
  // 모델을 감싼 모듈 자신은 당연히 SDK를 쓴다. 그 파일을 부르는 쪽을 본다.
  if (key === "src/lib/saju-interpretation.ts") continue;
  // **타입만 들여오는 것은 호출이 아니다.** `import type { SajuInterpretation }`은 결과를
  // 받아 그리는 쪽(PDF 렌더러)이 쓰는 것이고 모델을 부르지 않는다. 그 줄을 지우고 본다.
  //
  // **주석도 지우고 본다.** 이 규칙을 설명하는 주석에 `interpretSaju`라고 적으면 그 파일이
  // 호출로 잡혔다(PDF 렌더러가 실제로 그렇게 걸렸다). 규칙을 문서로 남기라고 해 놓고 남기면
  // 빨개지는 검사기는 오래 못 간다 — 주석은 걷어 내고 코드만 본다.
  //
  // `//`는 문자열 속 URL(`https://…`)에도 있으므로 **앞에 `:`이 없을 때만** 주석으로 본다.
  const source = readFileSync(file, "utf8")
    .replace(/^import type .*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
  scanned += 1;
  const calls = CALL_PATTERNS.some((pattern) => pattern.test(source));
  if (!calls) continue;
  if (ALLOWED.has(key)) {
    allowedHits += 1;
    continue;
  }
  problems.push(`${key}: 결제 경로가 아닌데 모델을 부른다`);
}

// 대조군 — 검사가 살아 있는지 스스로 증명한다.
const controlFailures = [];
if (!CALL_PATTERNS.some((p) => p.test('const x = await interpretSaju({});'))) {
  controlFailures.push("감싼 모듈 호출을 못 알아본다");
}
if (!CALL_PATTERNS.some((p) => p.test('import OpenAI from "openai";'))) {
  controlFailures.push("SDK 직접 import를 못 알아본다");
}
if (CALL_PATTERNS.some((p) => p.test('const reading = toReading(prepare(person));'))) {
  controlFailures.push("모델과 상관없는 코드를 호출로 본다");
}
if (!CALL_PATTERNS.some((p) => p.test('import { interpretSaju } from "@/lib/saju-interpretation";'))) {
  controlFailures.push("import만 있는 경우를 못 알아본다");
}
if (/^import type .*$/gm.test('import type { SajuInterpretation } from "@/lib/saju-interpretation";') === false) {
  controlFailures.push("타입 전용 import를 가려내지 못한다");
}

console.log("AI 호출 경계 검사");
console.log(`  파일 ${scanned}개 · 허용된 자리 ${ALLOWED.size}곳`);

if (controlFailures.length) {
  console.log("\n대조군 실패 — 검사기 자체가 고장 났다:");
  for (const line of controlFailures) console.log(`  ✗ ${line}`);
  process.exit(1);
}
console.log("  ✓ 대조군: 호출은 잡고, 상관없는 코드는 넘긴다");

if (allowedHits === 0) {
  console.log("\n허용된 자리에서도 호출이 안 보인다 — 경로가 바뀌었을 것이다. 통과로 보지 않는다.");
  process.exit(1);
}
console.log("  ✓ 결제 경로에서 실제로 부르고 있다");

if (problems.length) {
  console.log("\n이탈:");
  for (const line of problems) console.log(`  ✗ ${line}`);
  console.log("\n무료·SEO 화면은 엔진 값과 템플릿으로 낸다. 유료 경로를 늘렸다면 ALLOWED에 적을 것.");
  process.exit(1);
}

console.log("\nALL PASS — 모델은 결제한 경로에서만 돈다.");
