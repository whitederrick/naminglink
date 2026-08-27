// 안내 문서 **요약문(summary)**에 손으로 박혀 낡아 버린 숫자를 자리표시자로 바꾼다(23개 로케일).
//
// ## 무엇이 문제였나 (2026-08-27 발견)
//
// `verify-guide-numbers.ts`는 `doc-content/ko.ts` **한 파일만** 읽는다(그 파일 153줄
// `KO_DOC`). 나머지 22개 로케일은 애초에 검사 대상이 아니었다. 게다가 ko **본문**은
// 자리표시자로 옮겨져 있어 검사기가 걸 숫자가 없고("문서에서 못 찾음 — 검사 안 함" 20건),
// 정작 숫자가 박힌 곳은 **요약문**인데 검사기 정규식이 본문 문구를 노려서 안 걸린다.
//
// 요약문에 자리표시자를 못 쓴 이유는 **화면에 그리는 쪽이 요약을 날것으로 받아** 중괄호가
// 그대로 보였기 때문이다(`generateMetadata`만 채우고 있었다). 그래서 `lib/guide-page.ts`의
// `guideContext`가 제목·요약을 채워 내보내도록 **먼저 고쳤다** — 그 고침이 없으면 이
// 스크립트의 결과가 화면에 중괄호로 나간다.
//
// ## 실측한 실태
//
// 요약문에 든 숫자를 값별로 전수로 뽑으니 갈래가 깨끗하게 나뉘었다. **21개 로케일이 옛
// 스냅샷에 얼어 있었고**(상징 215 · 의미 256 · 태몽 27), ko/en만 손으로 갱신돼 왔다.
// 근거 수(24)는 23개 로케일 전부가 틀렸다.
//
//     값        로케일        뜻          실제(2026-08-27)
//     24        23개 전부     근거 수      82
//     215/218   21 / ko,en   상징 수      218
//     256/350   21 / ko,en   의미 수      350
//     27/28     21 / ko,en   태몽 상징    28
//
// **값이 무엇을 세는지 한 값이 한 뜻으로만 쓰이는 것을 확인한 뒤** 값 기준으로 바꾼다 —
// 앞 판에서 "숫자 뒤 80자 안에 단서가 있으면"으로 잡았다가 한 문장 안의 상징 수까지
// 근거 수로 바꿔 버렸다(되돌리고 다시 씀).
//
// 실행: node scripts/fix-dream-doc-hardcoded-numbers.mjs
// 확인: node scripts/audit-dream-doc-numbers.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DOC_DIR = path.resolve("apps/dreamslink/src/lib/doc-content");

/**
 * 요약문에 나타나는 값 → 자리표시자.
 *
 * 위 표대로 **한 값이 한 뜻으로만 쓰인다는 것을 전수로 확인**했다. 새 값이 나타나면
 * (사전이 자라 다음 스냅샷이 박히면) 여기 없으므로 조용히 지나간다 — 그래서 고친 뒤
 * `audit-dream-doc-numbers.mjs`로 남은 것이 없는지 반드시 확인한다.
 */
const VALUE_TO_PLACEHOLDER = new Map([
  ["24", "{cultureNoteTotal}"],
  ["215", "{symbolTotal}"],
  ["218", "{symbolTotal}"],
  ["256", "{meaningTotal}"],
  ["350", "{meaningTotal}"],
  ["27", "{conceptionSymbolTotal}"],
  ["28", "{conceptionSymbolTotal}"],
]);

/**
 * 요약문 줄만 고른다. **본문을 건드리면 안 된다** — 본문은 이미 자리표시자로 돼 있고,
 * 거기 남은 숫자(갈래별 수 등)는 다른 뜻이다.
 *
 * ko는 `summary:` 다음 줄에 문자열이 오고, 번역본은 `"summary": "..."` 한 줄이다.
 * 둘 다 받는다.
 */
function summaryLineIndexes(lines) {
  const idx = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*"?summary"?\s*:\s*$/.test(lines[i])) idx.push(i + 1);
    else if (/^\s*"?summary"?\s*:\s*"/.test(lines[i])) idx.push(i);
  }
  return idx;
}

const files = readdirSync(DOC_DIR)
  .filter((f) => f.endsWith(".ts") && !["index.ts", "types.ts"].includes(f))
  .sort();

let changedFiles = 0;
let changedSpots = 0;
const unknown = new Map();

for (const file of files) {
  const full = path.join(DOC_DIR, file);
  const src = readFileSync(full, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  const lines = src.split(/\r?\n/);
  let spots = 0;

  for (const i of summaryLineIndexes(lines)) {
    if (lines[i] === undefined) continue;
    lines[i] = lines[i].replace(/(?<![\d)])(\d{2,4})(?![\d])/g, (whole, value) => {
      const placeholder = VALUE_TO_PLACEHOLDER.get(value);
      if (!placeholder) {
        const at = unknown.get(value) ?? new Set();
        at.add(file.replace(/\.ts$/, ""));
        unknown.set(value, at);
        return whole;
      }
      spots++;
      return placeholder;
    });
  }

  if (spots > 0) {
    writeFileSync(full, lines.join(eol), "utf8");
    changedFiles++;
    changedSpots += spots;
    console.log(`${file.replace(/\.ts$/, "")}: ${spots}곳`);
  }
}

console.log(`\n고친 파일 ${changedFiles}개 · 자리 ${changedSpots}곳`);
if (unknown.size) {
  console.log("\n⚠️ 뜻을 모르는 숫자가 요약문에 남아 있다 — 표에 넣고 다시 돌릴 것:");
  for (const [value, locales] of unknown) {
    console.log(`  ${value} (${[...locales].join(",")})`);
  }
}
console.log("\n확인: node scripts/audit-dream-doc-numbers.mjs");
