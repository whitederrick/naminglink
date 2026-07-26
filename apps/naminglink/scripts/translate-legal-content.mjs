// ko.ts를 원본으로, 나머지 21개 로케일 legal-content 파일의 4개 문서(terms/privacy/refund/pricing)
// sections를 AI 번역으로 재생성한다. 구조(섹션 수·순서)는 ko와 정확히 일치시킨다.
// labels/description/effectiveDate/companyInfo 참조는 건드리지 않고 sections 배열만 교체한다.
// 실행 전: npx tsx --tsconfig tsconfig.json scripts/extract-ko-docs.ts (ko 스냅샷 _ko-docs.json 생성)
// 실행: cd scripts && node translate-legal-content.mjs [locale ...]
// 실행 후 반드시: node normalize-legal-prices.mjs && node normalize-legal-usd.mjs
//   (번역이 금액을 로케일 관습대로 2.900 / 1,99 US$ 등으로 바꿔놓아 표기가 결제 화면과 어긋난다.
//    마지막으로 validate-legal-content.ts로 확인할 것.)
// 안전장치: 파일별로 sections 배열을 브래킷 매칭으로 치환하고, 끝나면 호출부(상위)에서 tsc로 검증.
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

// ko 원본에서 4개 문서 sections를 추출(구조·문자열)해 전달받는다.
const koDocs = JSON.parse(readFileSync(path.join(DIR, "_ko-docs.json"), "utf8"));

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

function renderSections(sections, indent) {
  const pad = " ".repeat(indent);
  const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const body = sections.map((sec) => {
    const paras = sec.paragraphs.map((p) => `${pad}    "${esc(p)}",`).join("\n");
    return `${pad}{\n${pad}  title: "${esc(sec.title)}",\n${pad}  paragraphs: [\n${paras}\n${pad}  ],\n${pad}},`;
  }).join("\n");
  return `[\n${body}\n${" ".repeat(indent - 2)}]`;
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(LANG_NAMES);

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
    src = src.slice(0, start) + renderSections(translated, indent) + src.slice(end);
  }
  writeFileSync(file, src);
  console.log(`translated: ${locale}`);
}
console.log("done.");
