// **돌아가기 출처 표를 물려받은 이름으로 열 수 없는가** — 네 앱 전부.
//
// ## 왜 있는가 (2026-08-20)
//
// PR #3 재검증에서 뚫렸다. `apps/naminglink/src/lib/stamp-back.ts` 가 출처 표를 객체
// 리터럴에 두고 이렇게 물었다.
//
//   const origin = ORIGINS[from];      // 프로토타입에서 물려받은 이름까지 찾는다
//   if (!(from in ORIGINS)) return;    // `in` 도 마찬가지다
//
// 그래서 공개 GET 주소 하나로 서버가 죽었다.
//
//   /en/stamp-order?from=toString&rid=<uuid>   → origin.path 가 undefined → HTTP 500
//
// **밖으로 보내지지는 않지만 「아는 출처만 허용」이라는 검사 자체가 우회된다.** 그리고 같은
// 모양이 네 앱의 `guide-back.ts` 에도 그대로 있었다 — 한 앱에서 고쳐도 셋이 남는다.
//
// 표를 `Map` 으로 바꿔 갈래를 없앴고, 여기서 그것을 **강제한다.** 다음 사람이 표를 객체로
// 되돌리거나 새 `*-back.ts` 를 같은 모양으로 만들면 빨간불이 난다.
//
// ## 무엇을 세는가
//
//   ① 훑은 파일이 0건이 아니다        — 0건은 통과가 아니라 검사 안 된 것이다
//   ② 출처 표가 `Map` 이다             — 객체 리터럴이면 물려받은 이름이 딸려 온다
//   ③ 표를 `[]` 로 읽지 않는다
//   ④ 표를 `in` 으로 묻지 않는다
//
// 실행: 레포 루트에서 `node scripts/verify-back-origin-lookup.mjs`

import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** 주석을 걷어낸다. 주석에 적힌 옛 모양을 결함으로 세면 안 된다. */
function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/^\s*\/\/.*$/gm, " ");
}

let checks = 0;
let failures = 0;
const check = (label, ok, detail = "") => {
  checks += 1;
  if (!ok) failures += 1;
  console.log(`  ${ok ? "✓" : "✗"} ${label}${ok || !detail ? "" : ` — ${detail}`}`);
};

console.log("돌아가기 출처 표 — 물려받은 이름으로 열리지 않는가\n");

const files = [];
for (const app of APP_KEYS) {
  const dir = path.join(ROOT, "apps", app, "src", "lib");
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir).filter((f) => /-back\.ts$/.test(f)).sort()) {
    files.push({ app, name, full: path.join(dir, name) });
  }
}

// ① **0건은 통과가 아니다.** 경로가 바뀌면 이 검사기는 아무것도 안 보면서 초록불을 낸다.
if (files.length === 0) {
  console.log("  ✗ 훑은 파일이 0건이다. apps/*/src/lib/*-back.ts 경로가 바뀌었는지 볼 것.\n");
  process.exit(1);
}
console.log(`훑은 파일 ${files.length}개 (앱 ${APP_KEYS.length}개)\n`);

for (const { app, name, full } of files) {
  const code = stripComments(readFileSync(full, "utf8"));
  console.log(`${app}/${name}`);

  // 출처 표의 이름을 찾는다. `Map` 이든 객체든 선언은 잡아야 ②를 판정할 수 있다.
  const asMap = [...code.matchAll(/const\s+([A-Z][A-Z0-9_]*)\s*=\s*new Map\b/g)].map((m) => m[1]);
  const asObject = [...code.matchAll(/const\s+([A-Z][A-Z0-9_]*)\s*(?::[^=]*)?=\s*\{/g)].map((m) => m[1]);
  const tables = [...new Set([...asMap, ...asObject])];

  check(`${app}/${name} — 출처 표를 찾았다`, tables.length > 0, "대문자 상수 표가 없다");

  for (const table of tables) {
    // ② 객체 리터럴이면 프로토타입이 딸려 온다.
    check(`  ${table} 은 Map 이다`, asMap.includes(table), "객체 리터럴은 물려받은 이름을 함께 연다");
    // ③ `TABLE[...]` 로 읽지 않는다. `TABLE[0]` 같은 숫자 첨자도 표에는 쓸 일이 없다.
    const indexed = new RegExp(`\\b${table}\\s*\\[`).test(code);
    check(`  ${table}[...] 로 읽지 않는다`, !indexed, "대괄호 읽기는 물려받은 이름을 찾는다");
    // ④ `x in TABLE` 로 묻지 않는다.
    const inOp = new RegExp(`\\bin\\s+${table}\\b`).test(code);
    check(`  ${table} 에 in 으로 묻지 않는다`, !inOp, "`in` 은 프로토타입까지 본다");
  }
}

console.log("");
if (failures > 0) {
  console.log(`${failures}건 실패 (검사 ${checks}건)`);
  console.log("표를 `new Map` 으로 두고 `.get()` · `.has()` · `.keys()` 로 물을 것.\n");
  process.exit(1);
}
console.log(`통과 — 검사 ${checks}건 · 파일 ${files.length}개\n`);
process.exit(0);
