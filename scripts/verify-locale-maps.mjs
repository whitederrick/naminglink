// 로케일로 키를 잡은 표가 **타입으로 강제되고 있는가.**
//
// ## 왜 필요한가 (2026-08-07)
//
// 23개 로케일을 쓰는 표가 앱마다 수십 개다. 그 표를 `Record<string, …>`으로 선언하면 로케일이
// 하나 빠져도 tsc가 아무 말을 안 하고, 읽는 쪽이 조용히 영어로 내려간다. **화면은 멀쩡해
// 보이므로 아무도 모른다** — 그 언어 사용자만 영어를 본다.
//
// 실제로 이 상태였던 자리가 다섯이었다:
//
//   naminglink  i18n-account.ts   계정 화면 문구 23개
//   naminglink  i18n-auth.ts      로그인 화면 문구 23개
//   naminglink  AILoadingSteps    대기 문구 22개(ko는 따로)
//   naminglink  openai.ts         모델에 주는 언어명 표
//   saju·dream  locale-codes.ts   같은 언어명 표
//
// 그날은 빠진 로케일이 없었다. 문제는 **빠져도 알 방법이 없었다**는 것이다. 다섯 곳을
// `Record<LocaleCode, …>`로 바꿔 tsc가 세게 했고, 새로 생기는 것을 이 검사가 막는다.
//
// ## 무엇을 로케일 표로 보는가
//
// 선언 뒤 중괄호를 균형 맞춰 잘라 **깊이 1의 키만** 본다. 그 키의 과반이 로케일 코드이고
// 여덟 개를 넘으면 로케일 표로 본다. 한국 성 표(`김`·`이`…)나 상품 코드 표가 걸리지 않도록
// 창(window)이 아니라 실제 본문을 보는 것이 핵심이다 — 처음에 40줄 창으로 셌더니 이웃한
// 로케일 표가 넘어와 성씨 표 셋을 오탐으로 잡았다.
//
// 실행: npm 루트에서
//   node scripts/verify-locale-maps.mjs

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** 선언부: `const 이름: 타입 = {` (export 여부·줄바꿈 무관). */
const DECL = /(?:export\s+)?(?:const|let)\s+(\w+)\s*:\s*([^=;]+?)=\s*\{/g;

/** 강제되는 키 타입. 앱마다 이름이 조금 다르다(`Locale`·`LocaleCode`). */
const ENFORCED = /Record<\s*(?:Exclude<\s*)?(Locale|LocaleCode)\b/;

const problems = [];
let scannedFiles = 0;
let localeMaps = 0;

/** 각 앱이 스스로 선언한 로케일 목록. 앱끼리 갈리는 것도 함께 잡는다. */
function localesOf(app) {
  const file = path.join(ROOT, "apps", app, "src", "lib", "locale-codes.ts");
  const text = readFileSync(file, "utf8");
  const block = text.slice(text.indexOf("localeCodes = ["));
  return [...block.slice(0, block.indexOf("]")).matchAll(/"([a-z-]{2,5})"/g)].map((m) => m[1]);
}

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

/** 객체 리터럴에서 **깊이 1의 키만** 뽑는다. 중첩된 표의 키가 섞이면 판정이 흐려진다. */
function topLevelKeys(body) {
  const keys = [];
  let depth = 0;
  let atKeyPosition = true;
  for (let i = 0; i < body.length; i += 1) {
    const ch = body[i];
    if (ch === "{" || ch === "[" || ch === "(") {
      depth += 1;
      continue;
    }
    if (ch === "}" || ch === "]" || ch === ")") {
      depth -= 1;
      continue;
    }
    if (depth !== 1) continue;
    if (ch === ",") {
      atKeyPosition = true;
      continue;
    }
    if (!atKeyPosition || /\s/.test(ch)) continue;
    const rest = body.slice(i);
    // `ko: {…}`와 **축약 표기 `{ ko, en, vi }`를 함께** 본다. 축약을 빠뜨렸더니 실제로 그 꼴인
    // 표 둘(`accountCopies`·`authCopies`)이 검사에서 통째로 빠져 있었다.
    const match = /^"?([A-Za-z][\w-]*)"?\s*[:,}]/.exec(rest) ?? /^"?([A-Za-z][\w-]*)"?\s*$/.exec(rest);
    if (match) keys.push(match[1]);
    atKeyPosition = false;
  }
  return keys;
}

/** 이 객체가 로케일 표인가. 그렇다면 키 타입이 강제되는지 함께 돌려준다. */
function judge(varName, typeText, body, locales) {
  const keys = topLevelKeys(body);
  if (keys.length < 8) return null;
  const hits = keys.filter((key) => locales.includes(key)).length;
  if (hits < 8 || hits / keys.length < 0.6) return null;
  return { varName, keys: keys.length, hits, enforced: ENFORCED.test(typeText) };
}

function walk(dir, onFile) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, onFile);
    else if (/\.tsx?$/.test(entry)) onFile(full);
  }
}

console.log("로케일 표가 타입으로 강제되는가\n");

// ── 앱끼리 로케일 목록이 같은가 ────────────────────────────────────────────
const byApp = Object.fromEntries(APP_KEYS.map((app) => [app, localesOf(app)]));
const reference = byApp[APP_KEYS[0]];
for (const app of APP_KEYS.slice(1)) {
  const mine = byApp[app];
  const diff = [
    ...reference.filter((l) => !mine.includes(l)).map((l) => `-${l}`),
    ...mine.filter((l) => !reference.includes(l)).map((l) => `+${l}`),
  ];
  if (diff.length) problems.push(`${app} 로케일 목록이 ${APP_KEYS[0]}와 다르다: ${diff.join(" ")}`);
}
console.log(`  로케일 ${reference.length}개 · 앱 ${APP_KEYS.length}개 목록 일치 ${problems.length === 0 ? "O" : "X"}`);

// ── 표를 훑는다 ────────────────────────────────────────────────────────────
for (const app of APP_KEYS) {
  const locales = byApp[app];
  const found = [];
  walk(path.join(ROOT, "apps", app, "src"), (file) => {
    scannedFiles += 1;
    const text = readFileSync(file, "utf8");
    DECL.lastIndex = 0;
    let match;
    while ((match = DECL.exec(text)) !== null) {
      const body = balanced(text, text.indexOf("{", match.index + match[0].length - 1));
      if (!body) continue;
      const verdict = judge(match[1], match[2], body, locales);
      if (!verdict) continue;
      localeMaps += 1;
      const line = text.slice(0, match.index).split("\n").length;
      if (!verdict.enforced) {
        found.push(`${path.relative(ROOT, file).replace(/\\/g, "/")}:${line}  ${verdict.varName} (로케일 키 ${verdict.hits}/${verdict.keys})`);
      }
    }
  });
  console.log(`  ${app.padEnd(11)} 강제되지 않는 로케일 표 ${found.length}개`);
  for (const line of found) problems.push(`${app} — ${line}`);
}

// ── 대조군 ─────────────────────────────────────────────────────────────────
//
// 검사가 살아 있는지 증명한다. **잡아야 하는 것과 잡으면 안 되는 것을 함께** 넣는다 —
// 잡아야 하는 것만 두면 판정이 헐거워졌을 때(전부 통과) 드러나지 않는다.
const CONTROL_BAD = `const x: Record<string, string> = { ${reference.map((l) => `${l}: "v"`).join(", ")} };`;
const CONTROL_OK = `const y: Record<LocaleCode, string> = { ${reference.map((l) => `${l}: "v"`).join(", ")} };`;
const CONTROL_SURNAME = `const z: Record<string, string> = { 김: "Kim", 이: "Lee", 박: "Park", 최: "Choi", 정: "Jung", 강: "Kang", 조: "Cho", 윤: "Yoon", 장: "Jang", 임: "Lim" };`;
/** 축약 표기 — `accountCopies`가 이 꼴이라 한동안 검사에서 통째로 빠져 있었다. */
const CONTROL_SHORTHAND = `const w: Record<string, string> = { ${reference.join(", ")} };`;

function judgeSnippet(snippet) {
  DECL.lastIndex = 0;
  const match = DECL.exec(snippet);
  if (!match) return null;
  const body = balanced(snippet, snippet.indexOf("{", match.index + match[0].length - 1));
  return judge(match[1], match[2], body, reference);
}

const bad = judgeSnippet(CONTROL_BAD);
const ok = judgeSnippet(CONTROL_OK);
const surname = judgeSnippet(CONTROL_SURNAME);
const shorthand = judgeSnippet(CONTROL_SHORTHAND);
const controlHolds =
  bad && !bad.enforced && ok && ok.enforced && surname === null && shorthand && !shorthand.enforced && localeMaps > 0;

console.log(`\n  훑은 파일 ${scannedFiles}개 · 로케일 표 ${localeMaps}개`);
if (!controlHolds) {
  console.log("  ✗ 대조군 실패 — 강제 안 된 표를 못 잡거나, 성씨 표를 로케일 표로 잘못 본다.");
  console.log(`     (강제안됨 감지 ${Boolean(bad && !bad.enforced)} · 강제됨 통과 ${Boolean(ok && ok.enforced)} · 성씨표 제외 ${surname === null} · 축약 감지 ${Boolean(shorthand)} · 실제 표 ${localeMaps}개)`);
  process.exit(1);
}
console.log("  ✓ 대조군: Record<string>은 잡고, Record<LocaleCode>와 성씨 표는 통과시킨다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n로케일로 키를 잡는 표는 `Record<LocaleCode, …>`로 둘 것.");
  console.log("일부러 비워 두는 표라면 `Partial<Record<LocaleCode, …>>` — 낯선 키는 그래도 막힌다.");
  process.exit(1);
}

console.log("\nALL PASS — 로케일 표가 전부 타입으로 강제된다.");
