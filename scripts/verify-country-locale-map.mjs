// 네 앱의 `countryLocaleMap`(접속 국가 → 로케일)이 같은 값인가.
//
// ## 왜 필요한가 (2026-08-26)
//
// `lib/locale-detect.ts`는 미들웨어(`proxy.ts`)가 무접두 주소를 어느 언어판으로 보낼지
// 정하는 표다. 네 앱이 각각 자기 파일을 갖고 있고(같은 표를 edge 번들에 실어야 해서
// 공유 패키지로 옮기지 못했다 — 그 파일 자신의 주석 참고), 표 자체는 손으로 복붙해 맞춰
// 왔다. 지금까지는 40개 국가가 네 앱 모두 같은 값이었지만, **그것을 강제하는 검사기가
// 없었다** — 한 앱에서만 국가 하나를 고치면(예: 새 시장 진출로 US를 en에서 다른 로케일로
// 바꾸는 것 같은 결정) 나머지 세 앱은 조용히 옛 값에 머문다. 코드 리뷰에서 이 공백이
// 지적됐다.
//
// 이 검사는 **표를 강제로 합치지 않는다** — locale-detect.ts를 고치는 것은 미들웨어
// 경로라 위험도가 다르다. 대신 네 표가 갈리면 빨간불을 낸다.
//
// 실행: npm 루트에서
//   node scripts/verify-country-locale-map.mjs

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** 여는 중괄호 위치에서 시작해 균형이 맞는 닫는 중괄호까지 자른다. */
function balanced(text, open) {
  let depth = 0;
  for (let i = open; i < text.length; i += 1) {
    if (text[i] === "{") depth += 1;
    else if (text[i] === "}") {
      depth -= 1;
      if (depth === 0) return text.slice(open, i + 1);
    }
  }
  return "";
}

/** `KR: "ko",` 꼴의 항목만 뽑는다. 주석·설명 줄은 자연히 걸리지 않는다. */
function parseMap(body) {
  const map = new Map();
  const ENTRY = /(\w+)\s*:\s*"([a-z-]+)"/g;
  let match;
  while ((match = ENTRY.exec(body)) !== null) map.set(match[1], match[2]);
  return map;
}

function extractCountryLocaleMap(source) {
  const at = source.indexOf("countryLocaleMap");
  if (at < 0) return null;
  const open = source.indexOf("{", at);
  const body = balanced(source, open);
  return body ? parseMap(body) : null;
}

function readMap(app) {
  const file = path.join(ROOT, "apps", app, "src", "lib", "locale-detect.ts");
  return extractCountryLocaleMap(readFileSync(file, "utf8"));
}

function diffMaps(a, b) {
  const keys = new Set([...a.keys(), ...b.keys()]);
  const diffs = [];
  for (const key of keys) {
    if (a.get(key) !== b.get(key)) {
      diffs.push(`${key}: ${a.get(key) ?? "(없음)"} → ${b.get(key) ?? "(없음)"}`);
    }
  }
  return diffs;
}

console.log("네 앱의 countryLocaleMap이 같은가\n");

const maps = Object.fromEntries(APP_KEYS.map((app) => [app, readMap(app)]));
const problems = [];
for (const app of APP_KEYS) {
  if (!maps[app]) problems.push(`${app} — countryLocaleMap을 못 찾았다(locale-detect.ts 구조가 바뀌었을 수 있다)`);
}

if (problems.length === 0) {
  const reference = APP_KEYS[0];
  console.log(`  기준 ${reference} — 국가 ${maps[reference].size}개`);
  for (const app of APP_KEYS.slice(1)) {
    const diffs = diffMaps(maps[reference], maps[app]);
    console.log(`  ${app.padEnd(11)} 일치 ${diffs.length === 0 ? "O" : "X"}`);
    for (const line of diffs) problems.push(`${app} — ${line}`);
  }
}

// ── 대조군 — 검사가 실제로 갈림을 잡는지 ────────────────────────────────────
const A = new Map([["KR", "ko"], ["US", "en"]]);
const B_SAME = new Map([["KR", "ko"], ["US", "en"]]);
const B_DIFF = new Map([["KR", "ko"], ["US", "es"]]);
const B_MISSING = new Map([["KR", "ko"]]);
const controlHolds =
  diffMaps(A, B_SAME).length === 0 &&
  diffMaps(A, B_DIFF).length === 1 &&
  diffMaps(A, B_MISSING).length === 1;

if (!controlHolds) {
  console.log("  ✗ 대조군 실패 — diffMaps가 갈림을 못 잡거나 같은 표를 다르다고 본다.");
  process.exit(1);
}
console.log("  ✓ 대조군: 값이 다르면 잡고, 키가 빠져도 잡고, 같으면 통과시킨다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n네 앱의 countryLocaleMap을 맞출 것 — 의도한 차이라면 이 검사기에 예외를 적어 둘 것.");
  process.exit(1);
}

console.log("\nALL PASS — 네 앱의 countryLocaleMap이 같다.");
