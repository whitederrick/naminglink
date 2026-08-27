// 안내 문서 23개 로케일 전부에서 **하드코딩된 숫자**를 찾아 사전 실제 값과 대조한다.
//
// 왜 필요한가 — `apps/dreamslink/scripts/verify-guide-numbers.ts`는 `doc-content/ko.ts`
// **한 파일만** 읽는다(그 파일 153줄, `KO_DOC`). 나머지 22개 로케일은 검사 대상이 아니다.
// 게다가 ko 본문은 `{cultureNoteTotal}` 같은 템플릿으로 바뀌어 있어 검사기의 정규식이
// 걸 것이 없고("문서에서 못 찾음 — 검사 안 함"이 20건), 정작 숫자가 하드코딩된 자리는
// **요약문(summary)**인데 검사기의 정규식이 본문 문구를 노리게 짜여 있어 안 걸린다.
//
// 그 결과 2026-08-27 기준 23개 로케일 전부가 "근거를 댈 수 있는 것은 24개뿐"이라고
// 적고 있었다(실제 82개). 여러 로케일은 상징 수도 215로 낡아 있었다(실제 218).
//
// 실행: node scripts/audit-dream-doc-numbers.mjs

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DOC_DIR = path.resolve("apps/dreamslink/src/lib/doc-content");
const dict = JSON.parse(
  readFileSync(
    path.resolve("apps/dreamslink/src/lib/dream-symbols.data.json"),
    "utf8",
  ),
);

const actual = {
  symbols: dict.symbols.length,
  meanings: dict.symbols.reduce((n, s) => n + s.meanings.length, 0),
  cultureNotes: dict.symbols.filter((s) => s.culture_note).length,
  conception: dict.symbols.filter((s) => (s.tags ?? []).includes("태몽")).length,
};

console.log("사전 실제 값");
console.log(`  상징 ${actual.symbols} · 의미 ${actual.meanings} · 근거(culture_note) ${actual.cultureNotes} · 태몽 ${actual.conception}\n`);

/**
 * 하드코딩된 숫자를 찾는 자리.
 *
 * 숫자만으로는 무엇을 세는지 못 가른다 — 그래서 **그 숫자 앞뒤의 낱말**로 갈래를 정한다.
 * 로케일마다 문장이 다르므로 언어별 단서를 여럿 둔다.
 */
const CHECKS = [
  {
    label: "근거(culture_note)",
    expect: actual.cultureNotes,
    // ko "24개뿐" · en "only 24 can be substantiated" · 그 외 "24"가 substantiate류 낱말 근처
    re: /(?<![\d)])(\d{1,4})(?![\d])(?=[^.。\n]{0,80}(?:뿐|substantiated|fundamentadas|justifiés|patunayan|dibuktikan|giustificati|уазасindsp|негізделген|баталгаажуулж|boleh dibuktikan|uzasadnione|substanciados|обоснованы|desteklenebileceği|tasdiqlanishi|chứng minh|सिद्ध))/gu,
  },
  {
    label: "상징 수",
    expect: actual.symbols,
    re: /(?<![\d)])(\d{3})(?![\d])(?=\s*(?:개(?:를|가)|symbols?|símbolos|simbolo|simbol|symbolen|тэмдэгтийг|символды|символов|ramzni|sembolün|biểu tượng|प्रतीकों))/gu,
  },
];

const files = readdirSync(DOC_DIR)
  .filter((f) => f.endsWith(".ts") && !["index.ts", "types.ts"].includes(f))
  .sort();

let staleCount = 0;
const staleByCheck = {};

for (const file of files) {
  const locale = file.replace(/\.ts$/, "");
  const src = readFileSync(path.join(DOC_DIR, file), "utf8");
  const problems = [];
  for (const check of CHECKS) {
    check.re.lastIndex = 0;
    for (const m of src.matchAll(check.re)) {
      const found = Number(m[1]);
      if (found !== check.expect) {
        problems.push(`${check.label}: 문서 ${found} · 실제 ${check.expect}`);
        staleByCheck[check.label] = (staleByCheck[check.label] ?? 0) + 1;
      }
    }
  }
  if (problems.length) {
    staleCount++;
    console.log(`✗ ${locale}  ${problems.join(" | ")}`);
  }
}

console.log(`\n낡은 숫자가 있는 로케일: ${staleCount} / ${files.length}`);
for (const [label, n] of Object.entries(staleByCheck)) {
  console.log(`  ${label}: ${n}건`);
}
if (staleCount > 0) process.exit(1);
console.log("모든 로케일의 하드코딩 숫자가 사전과 같다.");
