#!/usr/bin/env node
/**
 * **로케일 파일이 그 언어의 문자로 적혀 있는가.**
 *
 * ## 왜 만들었나 (2026-08-11)
 *
 * 요금 안내 한 문단을 21개 언어로 옮기다가, **힌디어 자리에 중국어가 통째로 들어갔다.**
 *
 *     hi: 汉字意义匹配、全球名称转换、韩国名称转换、韩文发音标记这四项服务的基本分析对非会员免费提供…
 *
 * 그런데 이 저장소의 약관 검사기 넷이 **전부 초록불**이었다:
 *
 *   · `validate-legal-content`   구조(절 수·문단 수)만 본다
 *   · `verify-legal-prices`      금액만 본다
 *   · `verify-legal-residue`     **한국어** 잔재만 본다 — 중국어는 잔재가 아니다
 *   · `verify-legal-interpolation` 사업자 정보 참조만 본다
 *
 * 「빈 응답이 모든 검사를 통과했다」와 같은 자리다. 번역기가 **다른 언어로 흘러가는** 실패는
 * 규칙으로 못 잡고 **문자 체계**로 잡아야 한다.
 *
 * ## 무엇을 세는가 — **남의 문자 체계가 본문을 차지한 경우만**
 *
 * 재는 것은 하나다: 그 로케일의 것도 라틴도 아닌 문자 체계가 **문장의 대부분**을 차지하는가.
 * 힌디어 자리의 중국어(한자 100%)가 정확히 그 꼴이다.
 *
 * **일부러 좁혔다.** 처음에는 「그 언어의 문자가 하나도 없는 긴 문장」도 함께 셌는데, 그러면
 * 두 가지 정상 상태가 빨간불이 된다.
 *
 *   · **영어로 남긴 잎** — 번역기가 자리표시자·링크를 못 맞추면 그 잎만 영어로 되돌린다.
 *     결함이 아니라 설계된 폴백이고, 로케일당 1~7개가 남아 있다(`docs/I18N_DOC_CONTENT.md`).
 *   · 주소·예시 문자열 — 결과 주소에 base64 조각이 붙은 예시처럼 어느 문자도 없는 값이 있다.
 *
 * **예시로 든 한자도 결함이 아니다.** naminglink 안내에는 `漢`·`旼峻`이 일부러 들어 있고,
 * 약관에는 「번역어 (原語)」가 정상 표기다. 그래서 **비율**로 본다.
 *
 * 앱 목록은 손으로 적지 않는다(`APP_KEYS`). 빠진 앱은 통과가 아니라 검사 안 된 것이다.
 *
 * 실행: node scripts/verify-locale-script.mjs
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** 로케일 파일이 모여 있는 층. 둘 다 번역기가 만든다. */
const LAYERS = ["legal-content", "doc-content"];

const SCRIPTS = {
  han: /[一-鿿]/g,
  kana: /[぀-ヿ]/g,
  hangul: /[가-힣]/g,
  devanagari: /[ऀ-ॿ]/g,
  cyrillic: /[Ѐ-ӿ]/g,
  arabic: /[؀-ۿ]/g,
  thai: /[฀-๿]/g,
  khmer: /[ក-៿]/g,
  latin: /[A-Za-z]/g,
};

/** 그 로케일 문장에 **있어야 하는** 문자 체계. 라틴 문자권은 `latin`이다. */
const NEEDS = {
  ko: "hangul", ja: "kana", zh: "han", hi: "devanagari",
  ru: "cyrillic", mn: "cyrillic", kk: "cyrillic",
  ar: "arabic", th: "thai", km: "khmer",
  en: "latin", de: "latin", es: "latin", fr: "latin", it: "latin", pt: "latin",
  vi: "latin", id: "latin", fil: "latin", uz: "latin", tr: "latin", ms: "latin", pl: "latin",
};

/**
 * 일본어 문장에는 한자가 함께 쓰인다. 그 밖에도 자기 문자와 **함께 나오는 것이 정상**인
 * 짝이 있으면 여기 적는다. 라틴 문자는 어느 언어에서나 상표·용어로 나오므로 늘 허용한다.
 */
const ALSO_NATIVE = { ja: ["han"], ko: ["han"] };

/** 이 길이보다 짧은 문자열은 보지 않는다. 짧은 값은 상표·금액·코드인 경우가 대부분이다. */
const MIN_LENGTH = 40;
/** 남의 문자 체계가 이 비율을 넘으면 「그 언어로 적히지 않았다」로 본다. */
const FOREIGN_RATIO = 0.3;

const count = (text, name) => (text.match(SCRIPTS[name]) ?? []).length;

/**
 * 소스에서 큰따옴표 문자열만 뽑는다. **줄바꿈을 넘지 않는다** — 넘게 두면 따옴표 사이의
 * 코드가 통째로 한 문자열로 잡혀 「문자가 없다」는 헛것을 만든다(처음에 그렇게 나왔다).
 */
function stringsIn(source) {
  return [...source.matchAll(/"((?:[^"\\\n]|\\.){20,})"/g)]
    .map((match) => match[1])
    .filter((text) => !text.startsWith("http") && !text.includes("://"));
}

function defectsIn(locale, text) {
  const need = NEEDS[locale];
  if (!need || text.length < MIN_LENGTH) return [];

  const allowed = new Set(["latin", need, ...(ALSO_NATIVE[locale] ?? [])]);
  const letters = Object.keys(SCRIPTS).reduce((sum, name) => sum + count(text, name), 0);
  if (letters === 0) return [];

  const problems = [];
  for (const name of Object.keys(SCRIPTS)) {
    if (allowed.has(name)) continue;
    const ratio = count(text, name) / letters;
    if (ratio > FOREIGN_RATIO) {
      problems.push(`${name} 문자가 ${Math.round(ratio * 100)}%다 (이 로케일의 문자가 아니다)`);
    }
  }
  return problems;
}

// ── 대조군 — 검사기가 실제로 두 갈래를 가르는가 ────────────────────────────
//
// 진짜 결함(힌디어 자리의 중국어)과 정상(예시 한자가 섞인 크메르어 문장)을 함께 넣어 본다.
// 하나라도 어긋나면 아래 결과를 믿을 수 없다.
const CONTROL_BAD = [
  "hi",
  "汉字意义匹配、全球名称转换、韩国名称转换、韩文发音标记这四项服务的基本分析对非会员免费提供，并可能适用每日使用量限制。",
];
const CONTROL_GOOD = [
  "km",
  "ការវិភាគមូលដ្ឋានសម្រាប់សេវាកម្មបួនប្រភេទ គឺការតភ្ជាប់ន័យអក្សរចិន (漢字) និងការបម្លែងឈ្មោះ។",
];

const controlBad = defectsIn(CONTROL_BAD[0], CONTROL_BAD[1]).length > 0;
const controlGood = defectsIn(CONTROL_GOOD[0], CONTROL_GOOD[1]).length === 0;

console.log("로케일 파일이 그 언어의 문자로 적혀 있는가\n");
if (!controlBad || !controlGood) {
  console.error("대조군 실패 — 이 검사를 믿을 수 없다.");
  console.error(`  결함 표본을 잡는가: ${controlBad ? "예" : "아니오"}`);
  console.error(`  정상 표본을 통과시키는가: ${controlGood ? "예" : "아니오"}`);
  process.exit(1);
}
console.log("  ✓ 대조군: 언어가 바뀐 문장은 잡고, 예시 한자가 섞인 문장은 통과시킨다\n");

let scanned = 0;
let strings = 0;
const problems = [];

for (const app of APP_KEYS) {
  for (const layer of LAYERS) {
    const dir = path.join(ROOT, "apps", app, "src", "lib", layer);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir).filter((name) => name.endsWith(".ts"))) {
      const locale = path.basename(file, ".ts");
      if (!NEEDS[locale]) continue;
      scanned += 1;
      const source = readFileSync(path.join(dir, file), "utf8");
      for (const text of stringsIn(source)) {
        strings += 1;
        for (const problem of defectsIn(locale, text)) {
          problems.push(`${app}/${layer}/${file} — ${problem}\n      ${text.slice(0, 80)}…`);
        }
      }
    }
  }
}

if (scanned === 0) {
  console.error("로케일 파일을 하나도 찾지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

console.log(`  파일 ${scanned}개 · 문자열 ${strings}개를 훑었다`);

if (problems.length) {
  console.error(`\n언어가 어긋난 문장 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error("\n그 로케일만 다시 번역할 것 — 문단 단위로 고칠 수 있다");
  console.error("  (apps/<앱>/scripts/translate-legal-paragraph.mjs · translate-doc-content.ts).");
  process.exit(1);
}

console.log(`\nALL PASS — ${scanned}개 로케일 파일이 자기 언어의 문자로 적혀 있다.`);
