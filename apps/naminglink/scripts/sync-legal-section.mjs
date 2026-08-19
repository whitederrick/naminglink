// ko의 **섹션 하나를 통째로** 21개 로케일에 다시 옮긴다 — 제목도, 문단 수가 바뀐 것도 함께.
//
// 이미 있던 셋으로는 이 자리를 메울 수 없다:
//
//     translate-legal-paragraph.mjs   문단 하나를 갈아 끼운다      → 문단 수가 늘면 자리가 없다
//     insert-legal-section.mjs        섹션 하나를 새로 끼운다      → 이미 있는 섹션은 못 고친다
//     translate-legal-content.mjs     문서를 통째로 다시 만든다    → 검토를 마친 다른 절까지 흔든다
//
// **문단을 쪼개는 일**이 그 사이에 있다. 2026-08-19 토스페이먼츠 계약심사 준비에서 이름 도장
// 문단을 국내·해외로 갈랐는데, 그러면 그 절의 문단 수가 1에서 3으로 바뀐다. 셋 중 어느 것으로도
// 반영할 수 없어 이 스크립트를 만들었다.
//
// 실행: cd apps/naminglink/scripts && node sync-legal-section.mjs <document> <sectionIndex> [locale ...]
// 예:   node sync-legal-section.mjs refund 4
//
// **전제**: ko와 en은 사람이 먼저 고쳐 둔다. 고지 문안의 원본과 그 짝은 기계에 맡기지 않는다.
// 실행 후: node normalize-legal-prices.mjs && node normalize-legal-usd.mjs
//          npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/validate-legal-content.ts
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "lib",
  "legal-content",
);

// **불러오는 순간 읽지 않는다.** 키가 없는 컴퓨터에서도 `--dry-run`은 돌아야 한다
// (`translate-legal-content.mjs`가 같은 이유로 이 꼴이다).
function loadEnv() {
  const file = path.join(DIR, "..", "..", "..", ".env.local");
  if (!existsSync(file)) {
    throw new Error(`${file}이 없습니다. OPENAI_API_KEY가 있어야 번역할 수 있습니다.`);
  }
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split(/\r?\n/)
      .filter((line) => line.includes("="))
      .map((line) => {
        const at = line.indexOf("=");
        return [line.slice(0, at).trim(), line.slice(at + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
}

const LANG_NAMES = {
  ja: "Japanese", zh: "Simplified Chinese", de: "German", es: "Spanish", fr: "French",
  it: "Italian", pt: "Portuguese", vi: "Vietnamese", th: "Thai", id: "Indonesian",
  ru: "Russian", ar: "Arabic", fil: "Filipino", uz: "Uzbek", mn: "Mongolian",
  hi: "Hindi", tr: "Turkish", km: "Khmer", ms: "Malay", kk: "Kazakh", pl: "Polish",
};

const rawArgs = process.argv.slice(2);
/** 네트워크 없이 무엇을 어떻게 바꿀지만 보여 준다. 21개 파일을 건드리기 전에 눈으로 볼 자리다. */
const dryRun = rawArgs.includes("--dry-run");
const [docKey, sectionIndexRaw, ...localeArgs] = rawArgs.filter((arg) => arg !== "--dry-run");
const sectionIndex = Number(sectionIndexRaw);
if (!docKey || !Number.isInteger(sectionIndex)) {
  console.error(
    "usage: node sync-legal-section.mjs <document> <sectionIndex> [--dry-run] [locale ...]",
  );
  process.exit(1);
}
const locales = localeArgs.length ? localeArgs : Object.keys(LANG_NAMES);

// 번역이 통째로 빠지면 그 언어 이용자에게 한국어 고지가 나간다. 쓰기 전에 막는다.
const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힯]/;

/** 따옴표 안을 건너뛰며 괄호 짝을 맞춘다(문자열에 든 [ ] { } 때문에 단순 카운트는 틀린다). */
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
    spans.push([brace, matchBracket(src, brace, "{", "}")]);
    cursor = spans[spans.length - 1][1];
  }
  return spans;
}

const escape = (text) => text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const unescape = (text) => text.replace(/\\"/g, '"').replace(/\\\\/g, "\\");

const koSource = readFileSync(path.join(DIR, "ko.ts"), "utf8");
const koSpans = locateSections(koSource);
if (!koSpans[sectionIndex]) throw new Error(`ko의 ${docKey} sections[${sectionIndex}]이 없다`);
const koBlock = koSource.slice(...koSpans[sectionIndex]);

/**
 * **자리표시자가 든 절은 다루지 않는다.**
 *
 * 사업자 정보는 `${companyInfo.email}` 같은 템플릿 리터럴로 들어 있고, 그것을 되살리는 표는
 * `translate-legal-content.mjs`가 `_ko-docs.json`에서 받아 온다. 여기서 흉내 내면 값이 문장에
 * 박혀 굳는다 — 그때는 그 스크립트를 쓸 것.
 */
if (koBlock.includes("`")) {
  throw new Error(
    `ko의 ${docKey} sections[${sectionIndex}]에 템플릿 리터럴이 있다. ` +
      "자리표시자가 든 절은 translate-legal-content.mjs로 다룰 것.",
  );
}

const koTitleRaw = unescape(/title:\s*"([^]*?)"/.exec(koBlock)[1]);
const koParagraphs = [...koBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)]
  .map((m) => unescape(m[1]))
  .filter((text) => text !== escape(koTitleRaw) && text !== koTitleRaw);

/** 「4. 유료 서비스」의 번호는 번역 대상이 아니다. 떼어 두었다가 그대로 다시 붙인다. */
const numberPrefix = /^(\d+\.\s*)/.exec(koTitleRaw)?.[1] ?? "";
const koTitle = koTitleRaw.slice(numberPrefix.length);

console.log(`ko ${docKey} sections[${sectionIndex}] 「${koTitleRaw}」 문단 ${koParagraphs.length}개\n`);

/**
 * 한 번에 되지 않는 언어가 있다.
 *
 * hi(힌디어)에서 번역기가 **한국어 원문을 그대로 돌려주는** 일이 반복됐다 — 온도가 낮아 같은
 * 요청을 되풀이해도 같은 답이 온다. 그래서 되풀이할 때 **무엇이 틀렸는지 말해 주고**, 마지막
 * 시도는 큰 모델로 올린다. 세 번 다 실패하면 그 로케일만 실패로 남긴다 — 한국어 고지를
 * 다른 언어 화면에 내보내는 것보다 낫다.
 */
async function translateWithRetry(langName) {
  let last;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await translate(langName, attempt);
    } catch (error) {
      last = error;
    }
  }
  throw last;
}

async function translate(langName, attempt = 0) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      // 마지막 시도만 큰 모델로 올린다 — 되풀이해도 한국어를 돌려주는 언어가 있다(hi에서 겪음).
      model: attempt >= 2 ? (env.OPENAI_MODEL_STRONG ?? "gpt-4o") : (env.OPENAI_MODEL ?? "gpt-4o-mini"),
      temperature: 0.15,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You translate one section of a Korean legal/pricing document into ${langName}.`,
            "This is a legal notice: translate faithfully and formally, add nothing, drop nothing,",
            "and return exactly the same number of paragraphs in the same order.",
            "Keep every amount unchanged in value and never convert one currency into another.",
            // **원화 표기를 여기서 못 박는다.** 한국어 원문은 「금액 + 원」 꼴이라 그대로 두면
            // 번역문에 한국어 글자가 남고, 아래 한글 검사에 걸려 한 로케일도 못 쓴다. 결제
            // 화면(`displayPrice`)이 ₩39,000으로 그리므로 문서도 그 꼴로 맞춘다
            // (`normalize-legal-prices.mjs`가 사후에 보는 것과 같은 형식이다).
            "Korean won amounts appear in the source as digits followed by a Korean currency word:",
            "in the translation ALWAYS write them with a leading ₩ and comma thousands separators (₩2,900, ₩39,000),",
            "never with a local currency word, never with a local thousands separator such as 2.900 or 2 900.",
            "US dollar amounts stay exactly as US$1.99, US$39.90 and so on.",
            "The output must contain no Korean characters at all.",
            `CRITICAL: this service is about KOREAN names, the KOREAN language, Hangul and Hanja. Never substitute the reader's own language, script, or country for Korea/Korean/Hangul — a ${langName} reader must still be told the names are Korean.`,
            "NEVER translate or alter brand names (Naming-Link, Google, PortOne, Toss Payments, PayPal, Vercel Inc., Supabase Inc., OpenAI L.L.C.), URLs, or domains.",
            "The title MUST be translated into the target language. Omit any leading number — return the title text only.",
            'Return JSON: {"title": string, "paragraphs": string[]}.',
            ...(attempt > 0
              ? [
                  `RETRY: a previous attempt returned Korean text instead of ${langName}. Every title and paragraph you return must be written in ${langName} and its own script. Returning the Korean source unchanged is a failure.`,
                ]
              : []),
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
  if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
  const parsed = JSON.parse((await res.json()).choices[0].message.content);
  if (!parsed.title || !Array.isArray(parsed.paragraphs)) throw new Error("형식 오류");
  if (parsed.paragraphs.length !== koParagraphs.length) {
    throw new Error(`문단 ${parsed.paragraphs.length}개 ≠ ko ${koParagraphs.length}개`);
  }
  if (HANGUL.test(parsed.title)) throw new Error(`제목이 번역되지 않았다 — "${parsed.title}"`);
  if (parsed.paragraphs.some((p) => HANGUL.test(p))) throw new Error("문단에 한국어가 남았다");
  return parsed;
}

/** 섹션 객체 하나를 ko와 같은 꼴로 찍는다. 들여쓰기는 갈아 끼울 자리에서 읽어 온다. */
function renderSection(indent, title, paragraphs) {
  const inner = `${indent}  `;
  const item = `${inner}  `;
  return [
    "{",
    `${inner}title: "${escape(title)}",`,
    `${inner}paragraphs: [`,
    ...paragraphs.map((text) => `${item}"${escape(text)}",`),
    `${inner}],`,
    `${indent}}`,
  ].join("\n");
}

const env = dryRun ? {} : loadEnv();

if (dryRun) {
  console.log(`제목: ${numberPrefix}${koTitle}`);
  koParagraphs.forEach((text, i) => console.log(`  [${i}] ${text}`));
  console.log(`\n대상 로케일 ${locales.length}개: ${locales.join(" ")}`);
  process.exit(0);
}

let failures = 0;
for (const locale of locales) {
  const file = path.join(DIR, `${locale}.ts`);
  const src = readFileSync(file, "utf8");
  const spans = locateSections(src);
  if (!spans[sectionIndex]) {
    console.log(`FAIL ${locale} — sections[${sectionIndex}] 없음`);
    failures += 1;
    continue;
  }

  let translated;
  try {
    translated = await translateWithRetry(LANG_NAMES[locale]);
  } catch (error) {
    console.log(`FAIL ${locale} — ${error.message}`);
    failures += 1;
    continue;
  }

  const [start, end] = spans[sectionIndex];
  // 여는 중괄호가 놓인 줄의 들여쓰기. 파일마다 같지만 **읽어서 쓴다** — 적어 두면 어긋난다.
  const lineStart = src.lastIndexOf("\n", start) + 1;
  const indent = src.slice(lineStart, start);
  const title = `${numberPrefix}${translated.title.replace(/^\s*\d+\.\s*/, "")}`;
  const block = renderSection(indent, title, translated.paragraphs);
  writeFileSync(file, src.slice(0, start) + block + src.slice(end));
  console.log(`OK   ${locale} — 「${title}」 문단 ${translated.paragraphs.length}개`);
}

console.log(failures === 0 ? "\nALL OK" : `\n${failures}개 로케일 실패`);
process.exit(failures === 0 ? 0 : 1);
