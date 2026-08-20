// ko.ts를 원본으로, 나머지 21개 로케일 legal-content 파일의 4개 문서(terms/privacy/refund/pricing)
// sections를 AI 번역으로 재생성한다. 구조(섹션 수·순서)는 ko와 정확히 일치시킨다.
// labels/description/effectiveDate/companyInfo 참조는 건드리지 않고 sections 배열만 교체한다.
// 실행 전: npx tsx --tsconfig tsconfig.json scripts/extract-ko-docs.ts (ko 스냅샷 _ko-docs.json 생성)
// 실행: cd scripts && node translate-legal-content.mjs [locale ...]
// 자기검사(네트워크·API 키 없이): node translate-legal-content.mjs --self-test
// 실행 후 반드시: node normalize-legal-prices.mjs && node normalize-legal-usd.mjs
//   (번역이 금액을 로케일 관습대로 2.900 / 1,99 US$ 등으로 바꿔놓아 표기가 결제 화면과 어긋난다.
//    마지막으로 validate-legal-content.ts로 확인할 것.)
// 안전장치: 파일별로 sections 배열을 브래킷 매칭으로 치환하고, 끝나면 호출부(상위)에서 tsc로 검증.
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "legal-content");

// **불러오는 순간 읽지 않는다.** 예전에는 모듈 맨 위에서 `.env.local`을 읽어, 키가 없는 컴퓨터
// 에서는 아무것도 못 하고 죽었다 — 아래 `--self-test`처럼 네트워크가 필요 없는 일까지 함께
// 막혔다. 2026-08-07 검사기 감사에서 같은 병을 여럿 걷어냈다.
function loadEnv() {
  const file = path.join(DIR, "..", "..", "..", ".env.local");
  if (!existsSync(file)) {
    throw new Error(`${file}이 없습니다. OPENAI_API_KEY가 있어야 번역할 수 있습니다.`);
  }
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split(/\r?\n/).filter((l) => l.includes("=")).map((l) => {
        const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
}

const LANG_NAMES = {
  ja: "Japanese", zh: "Simplified Chinese", de: "German", es: "Spanish", fr: "French",
  it: "Italian", pt: "Portuguese", vi: "Vietnamese", th: "Thai", id: "Indonesian",
  ru: "Russian", ar: "Arabic", fil: "Filipino", uz: "Uzbek", mn: "Mongolian",
  hi: "Hindi", tr: "Turkish", km: "Khmer", ms: "Malay", kk: "Kazakh", pl: "Polish",
};

// ko 원본에서 4개 문서 sections를 추출(구조·문자열)해 전달받는다.
const koDocs = JSON.parse(readFileSync(path.join(DIR, "_ko-docs.json"), "utf8"));

// 사업자 정보는 값이 아니라 `{email}` 같은 자리표시자로 들어온다. 되살릴 TS 식도 추출
// 스크립트가 `_tokens`에 함께 적어 준다 — **여기서 표를 다시 만들지 않는다.**
const TOKEN_EXPR = koDocs._tokens;
if (!TOKEN_EXPR || !Object.keys(TOKEN_EXPR).length) {
  throw new Error(
    "_ko-docs.json에 _tokens가 없다. extract-ko-docs.ts를 먼저 돌릴 것 — " +
      "옛 스냅샷이면 사업자 정보가 값으로 박혀 번역기가 사람 이름을 음역한다.",
  );
}
const TOKEN_NAMES = Object.keys(TOKEN_EXPR);

/** 문자열에 든 자리표시자를 개수까지 센다. 번역 전후가 같아야 한다. */
function tokenSignature(text) {
  return TOKEN_NAMES.map((t) => `${t}:${text.split(t).length - 1}`).join(" ");
}

/**
 * 번역이 자리표시자를 지웠거나 번역해 버렸는지 본다.
 *
 * 이것이 조용히 새면 그 로케일만 사업자 정보가 옛 값으로 굳는다 — 값이 문장 안에 있으면
 * 사람도 검사기도 그것이 자리표시자였다는 것을 알 수 없다.
 */
function assertTokensSurvived(docKey, source, translated) {
  const problems = [];
  source.forEach((sec, i) => {
    const got = translated[i];
    const pairs = [["title", sec.title, got.title]];
    sec.paragraphs.forEach((p, j) => pairs.push([`paragraphs[${j}]`, p, got.paragraphs[j] ?? ""]));
    for (const [where, before, after] of pairs) {
      const want = tokenSignature(before);
      const have = tokenSignature(after);
      if (want !== have) problems.push(`  sections[${i}].${where}: want(${want}) got(${have})\n    → ${after}`);
    }
  });
  if (problems.length) {
    throw new Error(`${docKey}: 자리표시자가 번역에서 사라졌다\n${problems.join("\n")}`);
  }
}

async function translateDoc(langName, docKey, sections) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${env.OPENAI_API_KEY}` },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.15,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You are a legal/UX localizer for a Korean naming web service. Translate the given Korean legal document sections into ${langName}.`,
            "Rules: translate faithfully and formally as legal/policy text; keep all numbers, prices (₩990, US$9.99 etc.), company/brand names (OpenAI L.L.C., Supabase Inc., Vercel Inc., PortOne, Naming-Link), and country names accurate and unchanged in meaning.",
            `CRITICAL: this service is about KOREAN names, the KOREAN language, Hangul and Hanja (Chinese characters). Never substitute the reader's own language, script, or country for Korea/Korean/Hangul — a ${langName} reader must still be told the names are Korean. Translating "한글 이름" as "${langName} name" misdescribes the product being sold.`,
            "Preserve the exact structure: return JSON {\"sections\":[{\"title\":\"...\",\"paragraphs\":[\"...\",...]}]} with the SAME number of sections and the SAME number of paragraphs per section as the input. Do not add, drop, split, or merge items.",
            `CRITICAL: the input contains placeholders in curly braces (${TOKEN_NAMES.join(", ")}). Copy each one through EXACTLY as-is, in the same paragraph, the same number of times. Never translate, transliterate, romanize, reorder the letters of, or expand a placeholder, and never invent a value for it — they are filled in by code after translation. Translate the surrounding label only.`,
          ].join(" "),
        },
        { role: "user", content: JSON.stringify({ document: docKey, sections }) },
      ],
    }),
  });
  if (!res.ok) throw new Error(`translate ${docKey} failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const parsed = JSON.parse(data.choices?.[0]?.message?.content ?? "{}");
  const out = parsed.sections;
  if (!Array.isArray(out) || out.length !== sections.length) {
    throw new Error(`section count mismatch for ${docKey}: got ${out?.length}, want ${sections.length}`);
  }
  assertTokensSurvived(docKey, sections, out);
  return out;
}

// TS 소스에서 `docKey: {` 블록 안의 첫 `sections: [` 배열을 브래킷 매칭으로 찾아 [start,end) 반환.
function findSectionsArray(src, docKey) {
  const docAnchor = src.indexOf(`${docKey}: {`);
  if (docAnchor < 0) throw new Error(`document ${docKey} not found`);
  const secAnchor = src.indexOf("sections: [", docAnchor);
  if (secAnchor < 0) throw new Error(`sections for ${docKey} not found`);
  const open = src.indexOf("[", secAnchor);
  let depth = 0, inStr = null;
  for (let i = open; i < src.length; i += 1) {
    const c = src[i], prev = src[i - 1];
    if (inStr) { if (c === inStr && prev !== "\\") inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "[") depth += 1;
    else if (c === "]") { depth -= 1; if (depth === 0) return [open, i + 1]; }
  }
  throw new Error(`unbalanced sections array for ${docKey}`);
}

/**
 * 문자열 하나를 TS 리터럴로. **자리표시자가 있으면 템플릿 리터럴로 내보낸다.**
 *
 * 예전에는 무엇이든 `"..."` 평문으로 찍었다. 그래서 사업자 정보가 값으로 굳었고, 손으로
 * 되돌려 놔도 이 스크립트를 다시 돌리면 그대로 되돌아갔다 — 고침이 강제되지 않았다.
 */
function literal(text) {
  if (!TOKEN_NAMES.some((t) => text.includes(t))) {
    return `"${text.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  // 백틱과 `${`를 먼저 막고, 그다음에 자리표시자를 식으로 되살린다(순서가 바뀌면 방금 넣은
  // 식의 `${`까지 이스케이프된다).
  let out = text
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
  for (const [token, expr] of Object.entries(TOKEN_EXPR)) out = out.split(token).join(expr);
  return `\`${out}\``;
}

function renderSections(sections, indent) {
  const pad = " ".repeat(indent);
  const body = sections.map((sec) => {
    const paras = sec.paragraphs.map((p) => `${pad}    ${literal(p)},`).join("\n");
    return `${pad}{\n${pad}  title: ${literal(sec.title)},\n${pad}  paragraphs: [\n${paras}\n${pad}  ],\n${pad}},`;
  }).join("\n");
  return `[\n${body}\n${" ".repeat(indent - 2)}]`;
}

/** 자리표시자 식이 쓰는 이름(`companyInfo`·`romanize`)이 임포트에 있는지 보고, 없으면 넣는다. */
function ensureImports(src, rendered) {
  const line = src.split(/\r?\n/).find((l) => l.includes('from "@/lib/company"'));
  if (!line) throw new Error('@/lib/company 임포트를 찾지 못했다');
  const needed = ["companyInfo", "romanize"].filter(
    (name) => new RegExp(`\\b${name}\\b`).test(rendered) && !new RegExp(`\\b${name}\\b`).test(line),
  );
  if (!needed.length) return src;
  return src.replace(line, line.replace("import {", `import { ${needed.join(", ")},`));
}

/**
 * 네트워크 없이 파이프라인의 두 관문을 확인한다: **자리표시자가 살아 돌아오는가**(번역 검증)와
 * **그것이 TS 식으로 되살아나는가**(렌더).
 *
 * 이 둘이 무너지면 사업자 정보가 로케일마다 값으로 굳는다. 예전 렌더러는 무엇이든 `"..."`로
 * 찍어서, 손으로 되돌려 놓은 보간을 다음 실행이 조용히 지웠다.
 *
 * 실행: node translate-legal-content.mjs --self-test
 */
function selfTest() {
  const cases = [];
  const check = (label, got, want) => cases.push({ label, ok: got === want, got, want });

  const officer = TOKEN_NAMES.includes("{privacyOfficer}") ? "{privacyOfficer}" : TOKEN_NAMES[0];
  check(
    "자리표시자가 TS 식으로 되살아난다",
    literal(`Officer: ${officer}`),
    `\`Officer: ${TOKEN_EXPR[officer]}\``,
  );
  check("자리표시자가 없으면 평문 그대로", literal('He said "hi"'), '"He said \\"hi\\""');
  check(
    "본문의 백틱·달러중괄호는 막는다",
    literal(`a \`b\` \${c} ${officer}`),
    `\`a \\\`b\\\` \\\${c} ${TOKEN_EXPR[officer]}\``,
  );

  const source = [{ title: "T", paragraphs: [`Officer: ${officer}`] }];
  const dropped = [{ title: "T", paragraphs: ["Officer: 곽은하"] }];
  let caught = false;
  try {
    assertTokensSurvived("privacy", source, dropped);
  } catch {
    caught = true;
  }
  check("번역이 자리표시자를 지우면 던진다", caught, true);
  // 대조군 — 멀쩡한 번역은 던지지 않아야 한다.
  let passed = true;
  try {
    assertTokensSurvived("privacy", source, [{ title: "T", paragraphs: [`責任者：${officer}`] }]);
  } catch {
    passed = false;
  }
  check("멀쩡한 번역은 통과시킨다", passed, true);

  for (const { label, ok, got, want } of cases) {
    console.log(`  ${ok ? "✓" : "✗"} ${label}`);
    if (!ok) console.log(`      기대 ${JSON.stringify(want)}\n      실제 ${JSON.stringify(got)}`);
  }
  const failed = cases.filter((c) => !c.ok).length;
  console.log(failed ? `\n${failed}건 실패` : `\n자기검사 ${cases.length}건 통과 (자리표시자 ${TOKEN_NAMES.join("·")})`);
  process.exit(failed ? 1 : 0);
}

const argv = process.argv.slice(2);
if (argv.includes("--self-test")) selfTest();

/**
 * **인자 없는 실행이 전 로케일을 덮던 자리다** (2026-08-20, 구현 명세 §7).
 *
 * 예전에는 `argv.length ? argv : Object.keys(LANG_NAMES)` 였다. 즉 `node scripts/
 * translate-legal-content.mjs` 만 치면 **23개 로케일의 약관 네 편이 전부 다시 번역돼 덮였다.**
 * 가장 파괴적인 동작이 기본값 자리에 있었다.
 *
 * 지금은 대상을 반드시 적어야 하고, 전체 실행은 `--all` 로만 한다.
 */
const wantsAll = argv.includes("--all");
const named = argv.filter((value) => !value.startsWith("--"));
if (!wantsAll && named.length === 0) {
  console.error("대상이 없다. 로케일을 적거나 `--all` 을 명시할 것.");
  console.error("  node scripts/translate-legal-content.mjs vi th");
  console.error("  node scripts/translate-legal-content.mjs --all");
  console.error("  검수된 로케일을 덮으려면 --invalidate-review=<locale> 로 명시할 것");
  process.exit(1);
}

/**
 * **재생성 보호 관문.** 판정은 `scripts/regeneration-guard.ts` 한 곳에만 둔다 — 이 파일은
 * 순수 node 라 TypeScript 인벤토리를 직접 못 부르므로 `tsx` 하위 프로세스로 부른다. 관문을
 * `.mjs` 로 한 벌 더 쓰면 두 판정이 갈라지고, 갈라진 판정은 언젠가 한쪽만 고쳐진다.
 *
 * **한 파일도 쓰기 전에** 부른다.
 */
const guardArgs = ["tsx", "scripts/regeneration-guard.ts", "--scope", "legal"];
if (wantsAll) guardArgs.push("--all");
else guardArgs.push("--targets", named.join(","));
for (const flag of argv.filter((value) => value.startsWith("--invalidate-review"))) guardArgs.push(flag);

const guard = spawnSync("npx", guardArgs, { cwd: process.cwd(), encoding: "utf8", shell: true });
process.stdout.write(guard.stdout ?? "");
if (guard.status !== 0) {
  process.stderr.write(guard.stderr ?? "");
  console.error("재생성 관문이 막았다 — 아무것도 쓰지 않았다.");
  process.exit(1);
}
const allowed = (/^ALLOWED=(.*)$/m.exec(guard.stdout ?? "")?.[1] ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
if (allowed.length === 0) {
  console.error("관문이 허락한 대상이 0건이다 — 0건 실행을 성공으로 세지 않는다.");
  process.exit(1);
}

const env = loadEnv();
// `ko` 는 원문이라 번역 대상이 아니다. 관문이 넘긴 목록에서 마지막으로 한 번 더 거른다.
const targets = allowed.filter((locale) => locale !== "ko" && LANG_NAMES[locale]);
if (targets.length === 0) {
  console.error("번역할 로케일이 없다 — `LANG_NAMES` 에 있는 대상이 하나도 남지 않았다.");
  process.exit(1);
}

for (const locale of targets) {
  const langName = LANG_NAMES[locale];
  if (!langName) { console.error(`skip unknown locale ${locale}`); continue; }
  const file = path.join(DIR, `${locale}.ts`);
  let src = readFileSync(file, "utf8");
  for (const docKey of ["terms", "privacy", "refund", "pricing"]) {
    const translated = await translateDoc(langName, docKey, koDocs[docKey]);
    const [start, end] = findSectionsArray(src, docKey);
    // 들여쓰기: `sections: [`가 위치한 줄의 앞 공백 + 2.
    const lineStart = src.lastIndexOf("\n", start) + 1;
    const indent = src.slice(lineStart).match(/^\s*/)[0].length + 2;
    const rendered = renderSections(translated, indent);
    src = ensureImports(src.slice(0, start) + rendered + src.slice(end), rendered);
  }
  writeFileSync(file, src);
  console.log(`translated: ${locale}`);
}
console.log("done.");
