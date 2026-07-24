// legal-content의 특정 문단 하나만 21개 로케일에 번역 반영한다.
// translate-legal-content.mjs는 4개 문서 sections를 통째로 재생성하므로, 한 문단만 고친 경우에는
// 기존 번역 전체가 새 번역으로 교체되어 (이미 검토한 문구까지) 불필요하게 흔들린다. 이 스크립트는
// 문서·섹션·문단 인덱스를 지정해 그 문단만 바꾼다. 구조는 전 로케일이 동일하다는 전제를 쓴다
// (translate-legal-content.mjs가 섹션·문단 수를 강제하므로 성립).
//
// 실행: cd scripts && node translate-legal-paragraph.mjs <document> <sectionIndex> <paragraphIndex> [locale ...]
// 예:   node translate-legal-paragraph.mjs privacy 2 2
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "legal-content");
const env = Object.fromEntries(
  readFileSync(path.join(DIR, "..", "..", "..", ".env.local"), "utf8")
    .split(/\r?\n/).filter((l) => l.includes("=")).map((l) => {
      const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const LANG_NAMES = {
  ja: "Japanese", zh: "Simplified Chinese", de: "German", es: "Spanish", fr: "French",
  it: "Italian", pt: "Portuguese", vi: "Vietnamese", th: "Thai", id: "Indonesian",
  ru: "Russian", ar: "Arabic", fil: "Filipino", uz: "Uzbek", mn: "Mongolian",
  hi: "Hindi", tr: "Turkish", km: "Khmer", ms: "Malay", kk: "Kazakh", pl: "Polish",
};

const [docKey, sectionIndexRaw, paragraphIndexRaw, ...localeArgs] = process.argv.slice(2);
const sectionIndex = Number(sectionIndexRaw);
const paragraphIndex = Number(paragraphIndexRaw);
if (!docKey || !Number.isInteger(sectionIndex) || !Number.isInteger(paragraphIndex)) {
  console.error("usage: node translate-legal-paragraph.mjs <document> <sectionIndex> <paragraphIndex> [locale ...]");
  process.exit(1);
}

// 따옴표 안을 건너뛰며 대괄호 짝을 맞춘다(문자열에 든 [ ] 때문에 단순 카운트는 틀린다).
function matchBracket(src, open) {
  let depth = 0, inStr = null;
  for (let i = open; i < src.length; i += 1) {
    const c = src[i], prev = src[i - 1];
    if (inStr) { if (c === inStr && prev !== "\\") inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "[") depth += 1;
    else if (c === "]") { depth -= 1; if (depth === 0) return i + 1; }
  }
  throw new Error("unbalanced array");
}

// 문서(docKey)의 sections 배열 → sectionIndex번째 섹션의 paragraphs 배열 → paragraphIndex번째
// 문자열 리터럴의 [내용 시작, 내용 끝) 위치를 돌려준다.
function locateParagraph(src) {
  const docAnchor = src.indexOf(`${docKey}: {`);
  if (docAnchor < 0) throw new Error(`document ${docKey} not found`);
  const sectionsOpen = src.indexOf("[", src.indexOf("sections: [", docAnchor));
  const sectionsEnd = matchBracket(src, sectionsOpen);

  let cursor = sectionsOpen;
  for (let n = 0; n <= sectionIndex; n += 1) {
    const found = src.indexOf("paragraphs: [", cursor);
    if (found < 0 || found > sectionsEnd) throw new Error(`section ${sectionIndex} not found`);
    cursor = src.indexOf("[", found);
    if (n < sectionIndex) cursor = matchBracket(src, cursor);
  }
  const paragraphsOpen = cursor;
  const paragraphsEnd = matchBracket(src, paragraphsOpen);

  let index = -1;
  for (let i = paragraphsOpen + 1; i < paragraphsEnd; i += 1) {
    if (src[i] !== '"') continue;
    let end = i + 1;
    while (end < paragraphsEnd && !(src[end] === '"' && src[end - 1] !== "\\")) end += 1;
    index += 1;
    if (index === paragraphIndex) return [i + 1, end];
    i = end;
  }
  throw new Error(`paragraph ${paragraphIndex} not found`);
}

const escape = (text) => text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const unescape = (text) => text.replace(/\\"/g, '"').replace(/\\\\/g, "\\");

const koSource = readFileSync(path.join(DIR, "ko.ts"), "utf8");
const [koStart, koEnd] = locateParagraph(koSource);
const koParagraph = unescape(koSource.slice(koStart, koEnd));
console.log(`원본(ko): ${koParagraph}\n`);

async function translate(langName) {
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
            `You are a legal/UX localizer for a Korean naming web service. Translate the given Korean privacy-policy sentence(s) into ${langName}.`,
            "Translate faithfully and formally as legal/policy text. Keep every number and retention period exactly as given (90 days, 24 hours).",
            "Keep company/brand names unchanged (OpenAI L.L.C., Supabase Inc., Vercel Inc., PortOne, Naming-Link).",
            'Return JSON {"paragraph":"..."} containing only the translated text as a single paragraph.',
          ].join(" "),
        },
        { role: "user", content: koParagraph },
      ],
    }),
  });
  if (!res.ok) throw new Error(`translate failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const parsed = JSON.parse(data.choices?.[0]?.message?.content ?? "{}");
  const paragraph = parsed.paragraph;
  if (typeof paragraph !== "string" || paragraph.trim().length === 0) {
    throw new Error("empty translation");
  }
  return paragraph.trim();
}

const targets = localeArgs.length ? localeArgs : Object.keys(LANG_NAMES);
let failed = 0;
for (const locale of targets) {
  const langName = LANG_NAMES[locale];
  if (!langName) { console.error(`skip unknown locale ${locale}`); continue; }
  const file = path.join(DIR, `${locale}.ts`);
  try {
    const src = readFileSync(file, "utf8");
    const [start, end] = locateParagraph(src);
    const translated = await translate(langName);
    writeFileSync(file, src.slice(0, start) + escape(translated) + src.slice(end));
    console.log(`  ${locale}: ${translated.slice(0, 60)}...`);
  } catch (error) {
    failed += 1;
    console.error(`  ${locale} 실패: ${error instanceof Error ? error.message : error}`);
  }
}
console.log(failed ? `\n${failed}개 로케일 실패.` : "\n전체 반영 완료.");
process.exit(failed ? 1 : 0);
