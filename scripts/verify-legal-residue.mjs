// 번역된 약관에 남은 **한국어 잔재**를 찾는다.
//
// ## 왜 필요한가 (2026-08-07)
//
// 약관·환불정책은 23개 로케일로 번역해 두고, 한국 고유 용어는 **괄호에 원어를 덧붙이는 것이
// 이 레포의 방식**이다 — 「rapport de compatibilité (궁합 리포트 PDF)」처럼. 638곳이 그렇게 되어
// 있고 그건 정상이다.
//
// 문제는 그 방식 때문에 **번역이 덜 된 자리도 똑같이 생겼다는 것**이다. 구조 검사기
// (`verify-legal-locales`)는 자리·플레이스홀더만 보므로 전부 통과했고, 실제로 이런 것들이
// 라이브에 나가 있었다:
//
//   사주  ms   「report PDF (보고서 PDF)」 — 원문에 없는 한국어를 지어냈다
//   사주  es·pt 「(재물·애정·직업·건강)」 — 네 낱말을 통째로 안 옮겼다(fr·it은 옮겼다)
//   사주  hi   「(시柱)」 — 「시주(時柱)」가 반만 남았다(de·es는 「(時柱)」)
//   인연  fr   「(d띠)」 — 로마자 d가 눌어붙었다
//   인연  ru   「мансейлек (мансей력)」 — 만세력을 반만 옮겼다
//   드림  hi   「ने이버पे」 — 네이버페이가 반만 데바나가리가 됐다
//
// ## 어떻게 가르는가
//
// 세 가지를 본다. 하나라도 걸리면 잔재다.
//
//   ① **원문에 없는 한국어** — 번역문의 한국어 조각은 그 앱의 **한국어 원문에 낱말째로**
//      있어야 한다. `보고서`는 원문에 없고, `력`·`이버`·`시`는 다른 낱말 **안에만** 있다.
//   ② **괄호 안의 목록** — 용어 주석은 한 낱말을 단다. `·`나 `,`로 여럿을 묶어 두었다면
//      옮기다 만 것이다.
//   ③ **낱말에 눌어붙은 한글** — 앞뒤가 다른 글자면 낱말이 반쯤 변환된 것이다.
//
// 실행: 레포 루트에서
//   node scripts/verify-legal-residue.mjs

import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g;
const LINE_COMMENT = /^\s*\/\/.*$/gm;
const STRING = /"((?:[^"\\]|\\.)*)"/g;
const HANGUL_RUN = /[가-힣][가-힣\s]*/g;
/** 낱말을 이루는 글자 — 라틴·키릴·데바나가리·태국·아랍·한자·가나·숫자. */
const WORD_CHAR = /[0-9A-Za-zЀ-ӿऀ-ॿ฀-๿؀-ۿ一-鿿぀-ヿ]/;

const problems = [];
/** 파일로 된 약관이 없어 이 검사가 닿지 못한 앱. 통과와 구별해 끝에 다시 알린다. */
const notChecked = [];
let checkedStrings = 0;
let glosses = 0;

function stripComments(text) {
  return text.replace(BLOCK_COMMENT, " ").replace(LINE_COMMENT, " ");
}

/** 앱의 한국어 원문 전체(약관 원본 + 추출본). 여기 없는 한국어는 지어낸 것이다. */
function koreanSourceOf(app) {
  const parts = [];
  for (const rel of ["src/lib/legal-content.ts", "src/lib/legal-locales/_ko-docs.json"]) {
    const full = path.join(ROOT, "apps", app, rel);
    if (existsSync(full)) parts.push(readFileSync(full, "utf8"));
  }
  return parts.join("\n");
}

/**
 * `fragment`가 원문에 **낱말 첫머리로** 있는가.
 *
 * **앞 경계만 본다.** 처음에는 앞뒤를 다 봤는데, 한국어는 조사가 붙는다 — 원문의
 * 「일간의 강약」에서 `일간`은 뒤가 `의`(한글)라 낱말이 아닌 것으로 판정됐고, 멀쩡한 용어
 * 주석 여섯이 잔재로 잡혔다. 대조군이 아니라 **실제 파일이 그것을 드러냈다.**
 *
 * 뒤 경계를 버려도 놓치는 것이 없다. 낱말 **안에** 낀 조각(`만세력`의 `력`, `네이버페이`의
 * `이버`)은 앞 글자가 한글이라 여기서 걸리고, `시주`의 `시`처럼 앞이 트인 것은 ③(눌어붙음)이
 * 잡는다 — 실제로 「(시柱)」가 그렇게 걸렸다.
 */
function appearsAtWordStart(source, fragment) {
  let from = 0;
  for (;;) {
    const at = source.indexOf(fragment, from);
    if (at < 0) return false;
    if (at === 0 || !/[가-힣]/.test(source[at - 1])) return true;
    from = at + 1;
  }
}

/** 문자열 하나를 본다. 잔재를 설명과 함께 돌려준다. */
function inspect(text, koSource) {
  const found = [];
  HANGUL_RUN.lastIndex = 0;
  let match;
  while ((match = HANGUL_RUN.exec(text)) !== null) {
    const fragment = match[0].trim();
    if (!fragment) continue;
    // **앞뒤 공백을 뺀 자리로 경계를 잡는다.** 한글 run이 뒤 공백까지 삼키는 바람에
    // 「(궁합 리포트 PDF)」의 P가 붙어 있는 것으로 보여 정상 글로스를 잔재로 잡았다
    // — 대조군이 그 자리에서 걸렸다.
    const lead = match[0].length - match[0].trimStart().length;
    const start = match.index + lead;
    const end = start + fragment.length;
    const before = text.slice(0, start);
    const after = text.slice(end);

    // ③ 낱말에 눌어붙었는가
    const prevChar = start > 0 ? text[start - 1] : "";
    const nextChar = after[0] ?? "";
    if (WORD_CHAR.test(prevChar) || WORD_CHAR.test(nextChar)) {
      found.push({ fragment, why: "낱말에 눌어붙었다", near: text.slice(Math.max(0, start - 30), end + 20) });
      continue;
    }

    // **전각 괄호도 함께 본다.** 중국어·일본어 번역문은 `（）`를 쓴다 — 반각만 보다가
    // 「（사주）」·「（띠）」를 괄호 밖으로 잘못 읽어 정상 글로스 셋을 잔재로 잡았다.
    const open = Math.max(before.lastIndexOf("("), before.lastIndexOf("（"));
    const closeHalf = after.indexOf(")");
    const closeFull = after.indexOf("）");
    const close =
      closeHalf < 0 ? closeFull : closeFull < 0 ? closeHalf : Math.min(closeHalf, closeFull);
    // 여는 괄호와 이 조각 사이에 닫는 괄호가 있으면 괄호 안이 아니다.
    const inParens = open >= 0 && close >= 0 && !/[)）]/.test(before.slice(open));
    // ② 괄호 안에 목록을 넣었는가 — 여는 괄호부터 닫는 괄호까지 잘라 본다
    if (inParens) {
      const inside = text.slice(open + 1, end + close);
      if (/[·,]/.test(inside.replace(/[^가-힣·,]/g, ""))) {
        found.push({ fragment, why: "괄호 안에 여러 낱말을 묶어 두었다(옮기다 말았다)", near: inside });
        continue;
      }
      glosses += 1;
    } else {
      found.push({ fragment, why: "괄호 밖에 한국어가 그대로 있다", near: text.slice(Math.max(0, start - 30), end + 20) });
      continue;
    }

    // ① 원문에 낱말째로 있는가
    if (!appearsAtWordStart(koSource, fragment)) {
      found.push({ fragment, why: "한국어 원문에 없는 말이다(지어냈거나 반만 옮겼다)", near: text.slice(Math.max(0, start - 30), end + 20) });
    }
  }
  return found;
}

console.log("번역된 약관에 남은 한국어 잔재\n");

for (const app of APP_KEYS) {
  const dir = path.join(ROOT, "apps", app, "src", "lib", "legal-locales");
  if (!existsSync(dir)) {
    // **검사에서 빠진 앱은 통과가 아니라 검사가 안 된 것이다.** 조용히 넘기면 "ALL PASS"가
    // 전부를 봤다는 뜻으로 읽힌다 — 그 착각으로 검사기 여덟 개가 앱 하나씩을 놓친 적이 있다.
    notChecked.push(app);
    console.log(`  ${app.padEnd(11)} ⚠ 파일로 된 약관이 없다 — 이 앱은 검사 대상이 아니다`);
    continue;
  }
  const koSource = koreanSourceOf(app);
  let appProblems = 0;
  for (const name of readdirSync(dir).sort()) {
    if (!name.endsWith(".ts") || ["ko.ts", "types.ts", "index.ts"].includes(name)) continue;
    const locale = name.slice(0, -3);
    const text = stripComments(readFileSync(path.join(dir, name), "utf8"));
    STRING.lastIndex = 0;
    let match;
    while ((match = STRING.exec(text)) !== null) {
      checkedStrings += 1;
      for (const hit of inspect(match[1], koSource)) {
        appProblems += 1;
        problems.push(`${app} ${locale} — ${hit.why}: ${JSON.stringify(hit.fragment)}\n        …${hit.near}…`);
      }
    }
  }
  console.log(`  ${app.padEnd(11)} 잔재 ${appProblems}건`);
}

// ── 대조군 ─────────────────────────────────────────────────────────────────
//
// **잡아야 하는 것 셋과 통과해야 하는 것 둘을 함께** 넣는다. 잡는 쪽만 두면 판정이 넓어졌을 때
// (전부 잔재로 보임) 드러나지 않고, 통과하는 쪽만 두면 그 반대가 안 드러난다.
const KO_SAMPLE = "궁합 리포트 PDF와 사주(四柱), 띠와 만세력 계산, 재물·애정·직업·건강";
const CONTROL = [
  ["Bericht (궁합 리포트 PDF) ist", 0, "정상 글로스"],
  ["十二生肖（띠）的关系", 0, "정상 글로스(전각 괄호)"],
  ["saju (사주) analysis", 0, "정상 글로스"],
  ["Расчет мансейлек (мансей력) использует", 1, "낱말에 눌어붙음"],
  ["natal chart (재물·애정·직업·건강) y sus", 1, "괄호 안 목록"],
  ["report PDF (보고서 PDF) 입니다", 1, "원문에 없는 말"],
];
let controlOk = true;
for (const [sample, expected, label] of CONTROL) {
  const got = inspect(sample, KO_SAMPLE).length;
  if ((expected === 0 && got !== 0) || (expected > 0 && got === 0)) {
    console.log(`  ✗ 대조군 실패 — ${label}: 기대 ${expected ? "잡힘" : "통과"} · 실제 ${got}건`);
    console.log(`     ${sample}`);
    controlOk = false;
  }
}
console.log(`\n  훑은 문자열 ${checkedStrings}개 · 정상 용어 주석 ${glosses}개`);
if (!controlOk || checkedStrings === 0) {
  console.log("  ✗ 대조군이 깨졌다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 정상 글로스는 통과시키고 잔재 세 갈래를 모두 잡는다");

if (problems.length) {
  console.log(`\n잔재 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n한국 고유 용어는 「번역어 (원어)」로 달고, 그 밖의 한국어는 남기지 말 것.");
  process.exit(1);
}

console.log("\nALL PASS — 번역된 약관에 한국어 잔재가 없다.");
if (notChecked.length) {
  console.log(
    `⚠ 다만 ${notChecked.join("·")}는 **이 검사가 닿지 않는다** — 약관 번역이 파일이 아니라 DB에 있다.`,
  );
  console.log("   그 앱은 `apps/naminglink/scripts/validate-legal-content.ts`로 따로 볼 것.");
}
