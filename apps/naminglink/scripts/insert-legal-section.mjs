// ko에 새로 넣은 **섹션 하나**를 21개 로케일에 번역해 같은 자리에 끼우고, 뒤따르는 섹션의
// 번호를 하나씩 올린다.
//
// `translate-legal-paragraph.mjs`는 이미 있는 문단 하나를 갈아 끼우고,
// `translate-legal-content.mjs`는 문서를 통째로 다시 만든다. **섹션을 늘리는 경우**는 둘 다
// 맞지 않는다 — 앞은 자리가 없어서 못 넣고, 뒤는 이미 검토를 마친 번역까지 전부 흔든다.
//
// 실행: cd scripts && node insert-legal-section.mjs <document> <sectionIndex> [locale ...]
// 예:   node insert-legal-section.mjs privacy 4
//       (ko의 privacy sections[4]를 원본으로 삼아 21개 로케일 같은 자리에 넣는다)
//
// **전제**: 이 스크립트를 돌리기 전에 ko와 en에는 사람이 직접 넣어 둔다. 고지 문안의 원본과
// 그 짝은 기계에 맡기지 않는다. 나머지 21개는 ko를 옮긴 것이다.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "lib",
  "legal-content",
);
const env = Object.fromEntries(
  readFileSync(path.join(DIR, "..", "..", "..", ".env.local"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const LANG_NAMES = {
  ja: "Japanese", zh: "Simplified Chinese", de: "German", es: "Spanish", fr: "French",
  it: "Italian", pt: "Portuguese", vi: "Vietnamese", th: "Thai", id: "Indonesian",
  ru: "Russian", ar: "Arabic", fil: "Filipino", uz: "Uzbek", mn: "Mongolian",
  hi: "Hindi", tr: "Turkish", km: "Khmer", ms: "Malay", kk: "Kazakh", pl: "Polish",
};

const rawArgs = process.argv.slice(2);
// `--retitle`은 이미 넣은 섹션의 **제목만** 다시 번역한다. 처음 넣을 때 번역기가 제목을
// 한국어 그대로 돌려준 일이 있어(번호를 유지하라는 지시를 제목 전체에 적용했다) 문단을
// 다시 만들지 않고 제목만 고칠 수 있어야 한다.
const retitleOnly = rawArgs.includes("--retitle");
const [docKey, sectionIndexRaw, ...localeArgs] = rawArgs.filter((a) => a !== "--retitle");
const sectionIndex = Number(sectionIndexRaw);
if (!docKey || !Number.isInteger(sectionIndex)) {
  console.error(
    "usage: node insert-legal-section.mjs <document> <sectionIndex> [--retitle] [locale ...]",
  );
  process.exit(1);
}
const locales = localeArgs.length ? localeArgs : Object.keys(LANG_NAMES);

// 번역이 통째로 빠지면 그 언어 이용자에게 한국어 고지가 나간다. `validate-legal-content`가
// 나중에 잡지만, 쓰기 전에 막는 편이 낫다.
const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힯]/;

// 따옴표 안을 건너뛰며 괄호 짝을 맞춘다(문자열에 든 [ ] 때문에 단순 카운트는 틀린다).
function matchBracket(src, open, openChar = "[", closeChar = "]") {
  let depth = 0;
  let inStr = null;
  for (let i = open; i < src.length; i += 1) {
    const c = src[i];
    const prev = src[i - 1];
    if (inStr) {
      if (c === inStr && prev !== "\\") inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = c;
      continue;
    }
    if (c === openChar) depth += 1;
    else if (c === closeChar) {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  throw new Error("unbalanced bracket");
}

/** 문서의 sections 배열에서 각 섹션 객체의 [시작, 끝) 위치. */
function locateSections(src) {
  const docAnchor = src.indexOf(`${docKey}: {`);
  if (docAnchor < 0) throw new Error(`document ${docKey} not found`);
  const sectionsOpen = src.indexOf("[", src.indexOf("sections: [", docAnchor));
  const sectionsEnd = matchBracket(src, sectionsOpen);

  const spans = [];
  let cursor = sectionsOpen + 1;
  while (cursor < sectionsEnd) {
    const brace = src.indexOf("{", cursor);
    if (brace < 0 || brace >= sectionsEnd) break;
    const end = matchBracket(src, brace, "{", "}");
    spans.push([brace, end]);
    cursor = end;
  }
  return { spans, sectionsOpen, sectionsEnd };
}

const escape = (t) => t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const unescape = (t) => t.replace(/\\"/g, '"').replace(/\\\\/g, "\\");

const koSource = readFileSync(path.join(DIR, "ko.ts"), "utf8");
const koSpans = locateSections(koSource).spans;
if (!koSpans[sectionIndex]) throw new Error(`ko sections[${sectionIndex}] 없음`);
const koBlock = koSource.slice(...koSpans[sectionIndex]);

const koTitle = unescape(/title:\s*"([^]*?)"/.exec(koBlock)[1]);
const koParagraphs = [...koBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)]
  .map((m) => unescape(m[1]))
  .filter((t) => t !== koTitle);

console.log(`원본(ko) 「${koTitle}」 문단 ${koParagraphs.length}개\n`);

async function translate(langName) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.15,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "You translate a section of a Korean privacy policy into the requested language.",
            "This is a legal notice: translate faithfully, add nothing, drop nothing, and keep the same number of paragraphs.",
            // 주소와 상표는 번역 대상이 아니다. 번역해 버리면 이용자가 해제 페이지에 갈 수 없다.
            "NEVER translate or alter: URLs and domains (google.com/settings/ads, aboutads.info/choices), product names (Google, Google AdSense).",
            // **제목도 번역 대상이다.** 예전에 "번호를 그대로 두라"는 지시를 제목 전체에
            // 적용해 한국어 제목을 그대로 돌려준 일이 있다. 번호는 부르는 쪽이 다시 붙인다.
            "The title MUST be translated into the target language. Omit any leading number — return the title text only.",
            'Return JSON: {"title": string, "paragraphs": string[]}.',
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            targetLanguage: langName,
            title: koTitle,
            paragraphs: koParagraphs,
          }),
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`${langName}: HTTP ${res.status}`);
  const parsed = JSON.parse((await res.json()).choices[0].message.content);
  if (!parsed.title || !Array.isArray(parsed.paragraphs)) {
    throw new Error(`${langName}: 형식 오류`);
  }
  if (langName !== "Korean" && HANGUL.test(parsed.title)) {
    throw new Error(`${langName}: 제목이 번역되지 않았다 — "${parsed.title}"`);
  }
  if (parsed.paragraphs.some((p) => HANGUL.test(p))) {
    throw new Error(`${langName}: 문단에 한국어가 남았다`);
  }
  if (parsed.paragraphs.length !== koParagraphs.length) {
    // 문단 수가 달라지면 조항 하나가 사라지거나 늘어난 것이다. 검증기가 나중에 잡지만,
    // 여기서 먼저 멈추는 편이 원인을 찾기 쉽다.
    throw new Error(
      `${langName}: 문단 ${parsed.paragraphs.length}개 ≠ ko ${koParagraphs.length}개`,
    );
  }
  return parsed;
}

/** 삽입 위치 뒤의 섹션 제목 번호를 하나씩 올린다. 23개 로케일이 모두 "N. " 꼴을 쓴다. */
function renumberAfter(src, spans, from) {
  let out = src;
  // 뒤에서부터 고쳐야 앞선 치환이 뒤쪽 위치를 밀지 않는다.
  for (let i = spans.length - 1; i >= from; i -= 1) {
    const [start, end] = spans[i];
    const block = out.slice(start, end);
    const replaced = block.replace(/title:\s*"(\d+)\./, (whole, digits) =>
      whole.replace(`"${digits}.`, `"${Number(digits) + 1}.`),
    );
    if (replaced === block) throw new Error(`섹션 ${i}: 번호를 찾지 못했다`);
    out = out.slice(0, start) + replaced + out.slice(end);
  }
  return out;
}

let failures = 0;
for (const locale of locales) {
  const file = path.join(DIR, `${locale}.ts`);
  const src = readFileSync(file, "utf8");
  const { spans } = locateSections(src);

  if (retitleOnly) {
    if (!spans[sectionIndex]) {
      console.log(`FAIL ${locale} — sections[${sectionIndex}] 없음`);
      failures += 1;
      continue;
    }
    const [start, end] = spans[sectionIndex];
    const block = src.slice(start, end);
    const current = /title:\s*"(\d+)\.\s*([^]*?)"/.exec(block);
    if (!current) {
      console.log(`FAIL ${locale} — 제목을 찾지 못했다`);
      failures += 1;
      continue;
    }
    if (!HANGUL.test(current[2])) {
      console.log(`SKIP ${locale} — 이미 번역돼 있다: ${current[2]}`);
      continue;
    }
    let translated;
    try {
      translated = await translate(LANG_NAMES[locale]);
    } catch (error) {
      console.log(`FAIL ${locale} — ${error.message}`);
      failures += 1;
      continue;
    }
    const title = translated.title.replace(/^\s*\d+\.\s*/, "");
    const fixed = block.replace(
      /title:\s*"(\d+)\.\s*[^]*?"/,
      `title: "${current[1]}. ${escape(title)}"`,
    );
    writeFileSync(file, src.slice(0, start) + fixed + src.slice(end));
    console.log(`OK   ${locale} — 「${current[1]}. ${title}」`);
    continue;
  }

  if (spans.length !== koSpans.length - 1) {
    console.log(
      `SKIP ${locale} — 섹션 ${spans.length}개(ko는 삽입 후 ${koSpans.length}개). 이미 넣었거나 구조가 다르다`,
    );
    continue;
  }

  let translated;
  try {
    translated = await translate(LANG_NAMES[locale]);
  } catch (error) {
    console.log(`FAIL ${locale} — ${error.message}`);
    failures += 1;
    continue;
  }

  // 번역기가 번호를 바꿔 놓는 일이 있어 ko의 번호로 덮어쓴다.
  const number = /^(\d+)\./.exec(koTitle)[1];
  const title = translated.title.replace(/^\s*\d+\.\s*/, "");
  const indent = " ".repeat(8);
  const block = [
    `{`,
    `${indent}  title: "${number}. ${escape(title)}",`,
    `${indent}  paragraphs: [`,
    ...translated.paragraphs.map((p) => `${indent}    "${escape(p)}",`),
    `${indent}  ],`,
    `${indent}}`,
  ].join("\n");

  const renumbered = renumberAfter(src, spans, sectionIndex);
  // 재번호로 길이가 달라졌으니 위치를 다시 잡는다.
  const after = locateSections(renumbered).spans[sectionIndex];
  const out =
    renumbered.slice(0, after[0]) + block + ",\n" + indent + renumbered.slice(after[0]);

  writeFileSync(file, out);
  console.log(`OK   ${locale} — 「${number}. ${title}」`);
}

console.log(failures ? `\n${failures}개 로케일 실패` : "\n완료");
if (failures) process.exitCode = 1;
