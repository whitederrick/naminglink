// 약관의 **사업자 정보가 값으로 굳지 않았는지** 센다.
//
// ## 왜 필요한가 (2026-08-07)
//
// 법적 고지에 나가는 사업자 값의 원본은 `packages/core`의 `COMPANY_FACTS` 한 곳이고, 로케일
// 파일은 그것을 **참조만** 해야 한다. 그런데 번역은 문장을 통째로 다시 쓰는 일이라, 값이 문장
// 안에 있으면 그대로 옮겨 적히고 **그 순간 원본과 끊긴다.** 실제로 이렇게 나가 있었다:
//
//   naminglink 17개 로케일  보호책임자 이름이 언어마다 다르게 음역돼 박혀 있었다
//                           ja 「郭恩河」 · zh 「郭恩哈」 — 같은 사람인데 한자가 다르다
//                           ru 「Гак Ын Ха」 · kk 「Гвак Ын Ха」 — 어느 것도 여권 표기가 아니다
//   naminglink 21개 로케일  대표자 이름·이메일이 값으로 박혀 있었다(2026-08-07 오전에 회수)
//
// 값이 박혀 있어도 **화면은 멀쩡하다.** 대표자가 바뀌는 날에야, 그것도 스물한 언어에서만
// 옛 이름이 계속 고지된다. 사람 눈으로는 번역문과 구별되지 않으므로 세는 수밖에 없다.
//
// ## 무엇을 보는가
//
//   ① **참조 짝 맞추기** — 한 앱의 로케일 파일들은 **같은 자리에 같은 참조**를 써야 한다.
//      하나만 개수가 다르면 그 파일이 값으로 굳은 것이다.
//   ② **로마자 규칙** — 한국어로 적힌 값(인명·상호·주소)은 비한국어 로케일에서 `romanize()`를
//      통과해야 한다. 언어마다 새로 음역하면 같은 사람이 언어마다 다른 이름이 된다.
//   ③ **값 누출** — 사업자 값이나 그 로마자 표기가 로케일 파일에 **글자 그대로** 있으면 안 된다.
//
// 앱마다 방식이 다르다(naminglink는 TS 보간, 형제 셋은 `{자리표시자}`). 둘 다 본다 —
// 한 방식만 보다가 앱 하나가 통째로 검사 밖에 있던 적이 있다.
//
// 실행: 레포 루트에서
//   node scripts/verify-legal-interpolation.mjs

import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CORE_COMPANY = path.join(ROOT, "packages/core/src/company.ts");

/** naminglink는 `legal-content/`, 형제 셋은 `legal-locales/`다. */
const LEGAL_DIRS = ["src/lib/legal-locales", "src/lib/legal-content"];
/** 로케일이 아닌 파일. 검사 대상에서 뺀다. */
const NOT_A_LOCALE = new Set(["index", "types"]);

/** TS 보간: `${companyInfo.email}` · `${romanize(companyInfo.privacyOfficer)}` 둘 다 잡는다. */
const TS_REF = /\$\{\s*(romanize\(\s*)?companyInfo\.(\w+)\s*\)?\s*\}/g;
/** 자리표시자: `{privacyOfficer}`. */
const PLACEHOLDER = /\{([a-zA-Z][a-zA-Z0-9]*)\}/g;

const problems = [];
const notChecked = [];
let checkedFiles = 0;

/**
 * core에서 사업자 값과 로마자 표를 읽는다. **여기 다시 적지 않는다** — 두 벌이 되는 순간
 * 검사기가 옛 값을 보고 "누출 없음"을 찍는다.
 */
function readCompanyLiterals() {
  const source = readFileSync(CORE_COMPANY, "utf8");
  const block = (name) => {
    const at = source.indexOf(name);
    if (at < 0) throw new Error(`${CORE_COMPANY}에서 ${name}을 찾지 못했습니다.`);
    const open = source.indexOf("{", at);
    let depth = 0;
    for (let i = open; i < source.length; i += 1) {
      if (source[i] === "{") depth += 1;
      else if (source[i] === "}") {
        depth -= 1;
        if (depth === 0) return source.slice(open, i + 1);
      }
    }
    throw new Error(`${name} 블록이 닫히지 않았습니다.`);
  };

  const factsBlock = block("export const COMPANY_FACTS");
  const facts = {};
  for (const m of factsBlock.matchAll(/^\s*(\w+):\s*"((?:[^"\\]|\\.)*)"/gm)) {
    facts[m[1]] = m[2];
  }
  if (!Object.keys(facts).length) throw new Error("COMPANY_FACTS를 읽지 못했습니다.");

  const latinBlock = block("export const KOREAN_COMPANY_VALUE_TO_LATIN");
  // 표의 키와 값을 모두 금지 문자열로 삼는다. 키는 따옴표가 없을 수도 있다(`곽은하: "…"`).
  const latin = new Set();
  for (const m of latinBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)) latin.add(m[1]);
  for (const m of latinBlock.matchAll(/^\s*([^\s":,{}]+)\s*:/gm)) latin.add(m[1]);
  if (!latin.size) throw new Error("KOREAN_COMPANY_VALUE_TO_LATIN을 읽지 못했습니다.");

  return { facts, latin };
}

const { facts, latin } = readCompanyLiterals();

/**
 * 로케일 파일에 글자 그대로 있으면 안 되는 값.
 *
 * 짧은 값은 뺀다 — 우연히 문장에 섞일 수 있다. 남는 것은 이메일·전화·등록번호·상호·인명·주소로,
 * 전부 그 항목에만 있는 값이다(대조군이 필요한 이유 → 흔한 값을 기준 삼으면 멀쩡한 번역을 잡는다).
 */
const FORBIDDEN = [
  ...Object.entries(facts).map(([field, value]) => ({ label: field, value })),
  ...[...latin].map((value) => ({ label: "로마자 표기", value })),
].filter(({ value }) => value.trim().length >= 6);

/** 한국어로 적힌 값을 가진 필드 — 비한국어 로케일에서 `romanize()`를 거쳐야 한다. */
const MUST_ROMANIZE = new Set(
  Object.entries(facts)
    .filter(([, value]) => latin.has(value.trim()))
    .map(([field]) => field),
);

function countRefs(text, pattern, keyIndex) {
  const counts = new Map();
  for (const m of text.matchAll(pattern)) {
    const key = m[keyIndex];
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

/** 개수까지 담은 서명. 문자열로 비교해 어느 자리가 다른지 그대로 보여 준다. */
function signature(counts) {
  return [...counts.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, n]) => `${k}×${n}`)
    .join(" ");
}

/** ③ 값 누출. 찾은 것을 설명과 함께 돌려준다. */
function findLeaks(text) {
  return FORBIDDEN.filter(({ value }) => text.includes(value)).map(
    ({ label, value }) => `${label} = ${value}`,
  );
}

/** ② 로마자 규칙(naminglink 꼴). 한국어 값을 맨 보간으로 쓴 자리를 돌려준다. */
function findUnromanized(text) {
  const bare = [];
  for (const m of text.matchAll(TS_REF)) {
    const [, wrapper, field] = m;
    if (MUST_ROMANIZE.has(field) && !wrapper) bare.push(field);
  }
  return bare;
}

function localeFilesOf(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(/\.ts$/, ""))
    .filter((name) => !NOT_A_LOCALE.has(name))
    .sort();
}

for (const app of APP_KEYS) {
  const dir = LEGAL_DIRS.map((rel) => path.join(ROOT, "apps", app, rel)).find(existsSync);
  if (!dir) {
    notChecked.push(app);
    continue;
  }
  const tsShape = path.basename(dir) === "legal-content";
  const locales = localeFilesOf(dir);
  if (locales.length < 2) {
    notChecked.push(`${app}(로케일 ${locales.length}개)`);
    continue;
  }

  // ① 참조 짝 맞추기. 기준은 다수결이 아니라 **ko**다(있으면). ko가 원본이므로 ko가 빠뜨렸다면
  //    그것이야말로 고칠 자리다. ko가 파일로 없는 앱(형제 셋)은 로케일끼리 견준다.
  const signatures = new Map();
  for (const locale of locales) {
    const text = readFileSync(path.join(dir, `${locale}.ts`), "utf8");
    checkedFiles += 1;

    const counts = tsShape
      ? countRefs(text, TS_REF, 2)
      : countRefs(text, PLACEHOLDER, 1);
    signatures.set(locale, signature(counts));

    const leaks = findLeaks(text);
    for (const leak of leaks) {
      problems.push(`${app}/${locale}: 사업자 값이 글자 그대로 있다 — ${leak}`);
    }

    if (tsShape && locale !== "ko") {
      for (const field of new Set(findUnromanized(text))) {
        problems.push(
          `${app}/${locale}: \`companyInfo.${field}\`가 한국어 값인데 romanize()를 안 거친다`,
        );
      }
    }
    if (tsShape && locale === "ko" && /romanize\(/.test(text)) {
      problems.push(`${app}/ko: 한국어 원문은 로마자로 바꾸지 않는다`);
    }
  }

  const reference = signatures.get("ko") ?? [...signatures.values()][0];
  const referenceName = signatures.has("ko") ? "ko" : locales[0];
  if (!reference) {
    problems.push(`${app}: 로케일 파일에 사업자 정보 참조가 하나도 없다 — 값으로 박힌 것이다`);
  }
  for (const [locale, sig] of signatures) {
    if (sig === reference) continue;
    problems.push(
      `${app}/${locale}: 참조가 ${referenceName}와 다르다\n        ${referenceName}: ${reference}\n        ${locale}: ${sig}`,
    );
  }

  // 번역기가 읽는 ko 스냅샷. 여기에 값이 들어 있으면 다음 번역이 그 값을 번역해 버리고,
  // 오늘 고친 것이 조용히 되돌아간다.
  //
  // **없는 것은 결함이 아니다** — 이 파일은 ko 원문에서 만들어 내는 것이라 `.gitignore`에 있다.
  // 새로 받은 저장소에는 없다. 통과로 세지 말고 「검사하지 않았다」로 남긴다.
  const snapshot = path.join(dir, "_ko-docs.json");
  if (!existsSync(snapshot)) {
    notChecked.push(`${app}의 ko 스냅샷(_ko-docs.json 없음 — 추출 스크립트를 돌리면 검사한다)`);
  } else {
    const text = readFileSync(snapshot, "utf8");
    checkedFiles += 1;
    // 자리표시자 표는 naminglink 추출본에만 있다(형제 셋은 ko 원문 자체가 자리표시자로 쓰여 있다).
    if (tsShape && !text.includes('"_tokens"')) {
      problems.push(
        `${app}: _ko-docs.json이 옛 꼴이다(_tokens 없음) — extract-ko-docs.ts를 다시 돌릴 것. ` +
          "그대로 두면 번역기가 사업자 값을 번역·음역한다",
      );
    }
    for (const leak of findLeaks(text)) {
      problems.push(`${app}: _ko-docs.json에 사업자 값이 박혀 있다 — ${leak}`);
    }
  }
}

// ── 대조군 ────────────────────────────────────────────────────────────────
// 통과하는 쪽과 걸리는 쪽을 함께 둔다. 한쪽만 두면 찾기가 망가진 것을 알 수 없다.
const CONTROL = [
  {
    label: "정상 — 로마자를 거친 보간",
    text: "`責任者：${romanize(companyInfo.privacyOfficer)}`",
    leaks: 0,
    bare: 0,
  },
  {
    label: "정상 — 이미 라틴인 값은 그대로",
    text: "`メール：${companyInfo.email}`",
    leaks: 0,
    bare: 0,
  },
  {
    label: "결함 — 한국어 값을 맨 보간으로",
    text: "`責任者：${companyInfo.privacyOfficer}`",
    leaks: 0,
    bare: 1,
  },
  {
    label: "결함 — 이름이 값으로 박힘",
    text: `"責任者：${facts.privacyOfficer}"`,
    leaks: 1,
    bare: 0,
  },
  {
    label: "결함 — 로마자 표기가 값으로 박힘",
    text: '"Officer: Gwak Eunha (CEO)"',
    leaks: 1,
    bare: 0,
  },
];

let controlOk = true;
for (const { label, text, leaks, bare } of CONTROL) {
  const gotLeaks = findLeaks(text).length;
  const gotBare = findUnromanized(text).length;
  const ok = (leaks === 0) === (gotLeaks === 0) && (bare === 0) === (gotBare === 0);
  if (!ok) {
    console.log(`  ✗ 대조군 실패 — ${label}: 누출 ${gotLeaks}(기대 ${leaks}) · 맨보간 ${gotBare}(기대 ${bare})`);
    controlOk = false;
  }
}

console.log(`검사한 파일 ${checkedFiles}개 · 금지 문자열 ${FORBIDDEN.length}개 · 로마자 필수 필드 ${[...MUST_ROMANIZE].join("·")}`);
if (!controlOk || checkedFiles === 0) {
  console.log("  ✗ 대조군이 깨졌거나 훑은 파일이 없다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 정상 두 꼴은 통과, 결함 세 꼴은 모두 잡는다");

if (problems.length) {
  console.log(`\n결함 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n사업자 값은 참조로만 쓰고, 한국어로 적힌 값은 비한국어 로케일에서 romanize()를 거칠 것.");
  process.exit(1);
}

console.log("\nALL PASS — 약관이 사업자 정보를 값이 아니라 참조로 쓴다.");
if (notChecked.length) {
  console.log(`⚠ 검사하지 않은 앱: ${notChecked.join("·")} — 통과가 아니라 약관 파일을 찾지 못한 것이다.`);
}
