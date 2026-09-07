// 화면 사전 한 벌을 다른 언어로 옮겨 `src/lib/i18n-locales/<locale>.ts`를 만든다.
//
// **사주링크·드림링크의 `translate-i18n.ts`를 인연링크용으로 옮긴 것이다(2026-09-07).**
// 그 두 앱은 인연링크를 복제해 만들어졌고 이 스크립트도 그때 함께 복제됐는데, 정작 원본인
// 인연링크에는 없었다 — 21개 사전이 처음부터 에이전트가 손으로 채운 것이었기 때문이다(아래
// 헤더 주석에 그 흔적이 남아 있다: "언어 선택기 3개 키와 footer 13개 키는 naminglink의 ja
// 문구를 그대로 가져와…").
//
// **`seedFromExistingFile`이 다르다.** 사주·드림 버전은 기존 파일을 `JSON.parse`로 되읽어
// 이어받는데, 그건 그 두 앱의 로케일 파일이 이 스크립트가 `JSON.stringify`로 찍어 낸 것이라
// 키가 전부 따옴표로 감싸여 있기 때문이다. **인연링크의 21개 파일은 손으로 쓴 것이라 키에
// 따옴표가 없다** — `{ brand: "..." }`는 유효한 JS이지만 유효한 JSON이 아니라
// `JSON.parse`가 그 자리에서 던진다. 여기서는 파일 텍스트를 다시 읽는 대신 이미 컴파일된
// `getDictionary(locale)`을 그대로 이어받는다 — 텍스트 문법에 기대지 않으니 더 안전하다.
//
// **왜 스크립트인가.** en의 **구조를 그대로 복사하고 잎(문자열)만 갈아 끼운다** — 키 집합·
// 중첩·배열 길이가 어긋날 수 있는 자리가 아예 없다. 검사기가 볼 것은 자리표시자·강조
// 표기뿐이다.
//
// **en과 ko를 함께 넘긴다.** 구조와 어투는 en을 따르되 사주 용어의 뜻은 원문인 ko가 정확하다
// (일간·십신·정재·정관 같은 말은 en을 다시 옮기면 두 번 번역한 것이 된다).
//
// 실행: apps/inyeonlink 에서
//   /c/myProjects/naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/translate-i18n.ts ja --paths form.intro
//   ... scripts/translate-i18n.ts ja --only form,affinity   (절만 다시 만들 때)
//
// `--paths`는 **원문 몇 줄만 고쳤을 때** 쓴다. `--only`는 절을 통째로 다시 번역하므로, 문장
// 넷을 고치자고 그 절의 예순 줄을 새로 받게 된다 — 검수가 끝난 나머지 문장이 함께 바뀌어
// 무엇이 달라졌는지 diff로 볼 수 없게 된다. 접두사로 걸러 자식 잎까지 잡는다.
//
// 만든 뒤에는 반드시 `verify-i18n`과 `verify-product-consistency`를 돌린다.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

import { getDictionary, type Dictionary, type Locale } from "../src/lib/i18n";
import { isLocaleCode } from "../src/lib/locale-codes";

const DIR = path.join(process.cwd(), "src", "lib", "i18n-locales");

// `locale-codes.ts`는 미들웨어가 엣지로 그대로 올리는 작은 모듈이라(그 파일 머리말 참고)
// 언어 이름표처럼 번역 스크립트에만 쓰는 것을 거기 얹지 않는다 — 드림링크의
// `localeLanguageName`과 같은 표를 여기 스크립트 안에 그대로 둔다.
const OUTPUT_LANGUAGE_NAMES: Record<string, string> = {
  ko: "Korean",
  en: "English",
  ja: "Japanese (日本語)",
  zh: "Simplified Chinese (简体中文)",
  de: "German (Deutsch)",
  es: "Spanish (Español)",
  fr: "French (Français)",
  it: "Italian (Italiano)",
  pt: "Portuguese (Português)",
  vi: "Vietnamese (Tiếng Việt)",
  th: "Thai (ไทย)",
  id: "Indonesian (Bahasa Indonesia)",
  ru: "Russian (Русский)",
  ar: "Arabic (العربية)",
  fil: "Filipino (Tagalog)",
  uz: "Uzbek (O'zbekcha)",
  mn: "Mongolian (Монгол)",
  hi: "Hindi (हिन्दी)",
  tr: "Turkish (Türkçe)",
  km: "Khmer (ភាសាខ្មែរ)",
  ms: "Malay (Bahasa Melayu)",
  kk: "Kazakh (Қазақша)",
  pl: "Polish (Polski)",
};

function localeLanguageName(locale: string) {
  return isLocaleCode(locale) ? OUTPUT_LANGUAGE_NAMES[locale] : OUTPUT_LANGUAGE_NAMES.en;
}

// OpenAI 키는 naminglink 쪽 `.env.local`에만 있다(같은 계정을 쓴다).
function readEnv(file: string): Record<string, string> {
  if (!existsSync(file)) return {};
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split(/\r?\n/)
      .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
}

const env = {
  ...readEnv(path.join(process.cwd(), "..", "naminglink", ".env.local")),
  ...Object.fromEntries(
    Object.entries(readEnv(path.join(process.cwd(), ".env.local"))).filter(([, value]) => value),
  ),
};

const [localeArg, ...rest] = process.argv.slice(2);
if (!localeArg) {
  console.error(
    "usage: tsx scripts/translate-i18n.ts <locale> [--only section,section] [--paths a.b,c.d]",
  );
  process.exit(1);
}
const locale = localeArg as Locale;
function listArg(name: string): string[] | null {
  const found = rest.find((arg) => arg.startsWith(name));
  if (!found) return null;
  const value = found.split("=")[1] ?? rest[rest.indexOf(found) + 1] ?? "";
  return value.split(",").filter(Boolean);
}
const pathArg = listArg("--paths");
const only = (() => {
  const sections = listArg("--only");
  if (sections) return new Set(sections);
  if (pathArg) return new Set(pathArg.map((path) => path.split(".")[0]!));
  return null;
})();
/** `--paths`로 좁혔을 때, 이 잎을 다시 번역할 것인가. 접두사라 자식까지 함께 잡힌다. */
function selectedPath(path: string) {
  if (!pathArg) return true;
  return pathArg.some((prefix) => path === prefix || path.startsWith(`${prefix}.`));
}

if (locale === "ko" || locale === "en") {
  console.error("ko·en은 이 스크립트의 대상이 아니다(원문은 i18n.ts에 있다).");
  process.exit(1);
}

const en = getDictionary("en");
const ko = getDictionary("ko");

type Leaf = { path: string; en: string; ko: string };

/** en을 걸으며 잎을 모은다. ko는 같은 경로에서 꺼낸다 — 구조가 같다는 것은 타입이 보장한다. */
function collect(node: unknown, mirror: unknown, trail: string[], out: Leaf[]) {
  if (typeof node === "string") {
    out.push({ path: trail.join("."), en: node, ko: typeof mirror === "string" ? mirror : node });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) =>
      collect(item, Array.isArray(mirror) ? mirror[index] : undefined, [...trail, String(index)], out),
    );
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      const next = mirror && typeof mirror === "object" ? (mirror as Record<string, unknown>)[key] : undefined;
      collect(value, next, [...trail, key], out);
    }
  }
}

const leaves: Leaf[] = [];
collect(en, ko, [], leaves);

const topLevel = [...new Set(leaves.map((leaf) => leaf.path.split(".")[0]!))].filter(
  (section) => !only || only.has(section),
);

/**
 * **잎이 하나뿐인 절은 한 배치로 묶는다.**
 *
 * 최상위 문자열(`brand`·`tagline`·`currentLanguage` 같은 것)은 절마다 항목이 하나라, 그것만
 * 담아 부르면 모델이 키를 통째로 빠뜨리고 빈 응답을 주는 일이 잦다.
 */
const SHORT_BATCH = "(짧은 문구)";
const shortSections = topLevel.filter(
  (section) => leaves.filter((leaf) => leaf.path.split(".")[0] === section).length === 1,
);
const sections = [
  ...(shortSections.length ? [SHORT_BATCH] : []),
  ...topLevel.filter((section) => !shortSections.includes(section)),
];

function itemsOf(section: string) {
  const all =
    section === SHORT_BATCH
      ? leaves.filter((leaf) => shortSections.includes(leaf.path.split(".")[0]!))
      : leaves.filter((leaf) => leaf.path.split(".")[0] === section);
  return all.filter((leaf) => selectedPath(leaf.path));
}

const placeholders = (value: string) => (value.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join(",");
const boldCount = (value: string) => value.split("**").length - 1;

async function translateSection(section: string, items: Leaf[]) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You localize the UI of Inyeon-Link, a Korean saju (four pillars) service that reads compatibility between two people, plus a single-person "Affinity" reading that tells someone which type of partner suits them without needing the other person's birth date.`,
            `Translate each entry into ${localeLanguageName(locale)} (locale ${locale}).`,
            "You are given both the English string and the Korean original. Follow English for tone and length; follow Korean for the meaning of saju terms (day master, ten gods, spouse position) — re-translating the English would translate them twice.",
            "CRITICAL: the output must contain no Korean (Hangul) characters at all. Every Korean term must be rendered in the target language — describe it if there is no single word for it. Leaving a Korean word untranslated is not preserving a cultural term; the reader cannot read that script.",
            "CRITICAL: keep every {placeholder} token exactly as-is — same tokens, same spelling. They are substituted at runtime.",
            "CRITICAL: keep **bold** markers on the same phrase, and keep the same number of ** markers. If the English has no ** at all, your translation must have none either — do not add emphasis of your own.",
            "CRITICAL: keep newline characters (\\n) where they appear — the layout depends on them.",
            "CRITICAL: keep every digit in Arabic numerals (0-9) exactly as in the English. Never convert numbers to another numeral system.",
            "This service reads KOREAN saju compatibility. It is not about dream interpretation and not a general fortune-telling app — never introduce words meaning 'dream' or 'symbol'.",
            'Reply with JSON shaped {"translations": { "<key>": "<translated string>" }} — the same keys as `source`, and every value a plain translated string. Never copy `source` or `koreanReference` back.',
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            source: Object.fromEntries(items.map((leaf) => [leaf.path, leaf.en])),
            koreanReference: Object.fromEntries(items.map((leaf) => [leaf.path, leaf.ko])),
          }),
        },
      ],
    }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`${section}: HTTP ${response.status} ${detail.slice(0, 300)}`);
  }
  const raw = (await response.json()).choices[0].message.content as string;
  if (process.env.DEBUG_TRANSLATE) {
    console.log(`\n--- ${section} 원본 응답 ---\n${raw.slice(0, 1200)}\n---`);
  }
  const parsed = JSON.parse(raw) as Record<string, unknown>;
  const inner = parsed.translations;
  return (inner && typeof inner === "object" ? inner : parsed) as Record<string, unknown>;
}

const CHUNK = Number(process.env.CHUNK) || 12;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function translateWithBackoff(section: string, items: Leaf[]) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await translateSection(section, items);
    } catch (error) {
      lastError = error;
      const message = (error as Error).message;
      if (!/HTTP (429|5\d\d)/.test(message) && !/fetch|network|ECONN/i.test(message)) throw error;
      const wait = attempt * 5000;
      console.log(`      (${section} ${message} — ${wait / 1000}초 뒤 다시)`);
      await sleep(wait);
    }
  }
  throw lastError;
}

function lookup(got: Record<string, unknown>, leaf: Leaf): unknown {
  const path = leaf.path;
  let node: unknown;
  if (path in got) {
    node = got[path];
  } else {
    node = got;
    for (const key of path.split(".")) {
      if (!node || typeof node !== "object") return undefined;
      node = (node as Record<string, unknown>)[key];
    }
  }
  if (node && typeof node === "object" && !Array.isArray(node)) {
    const inner = node as Record<string, unknown>;
    const candidate = inner[locale] ?? inner.translation ?? inner.value ?? inner.text;
    return typeof candidate === "string" ? candidate : undefined;
  }
  return node;
}

function normalize(value: string, base: string): string {
  return boldCount(base) === 0 ? value.replace(/\*\*/g, "") : value;
}

function badLeaves(items: Leaf[], got: Record<string, unknown>) {
  return items.filter((leaf) => {
    const raw = lookup(got, leaf);
    if (typeof raw !== "string" || !raw.trim()) return true;
    const value = normalize(raw, leaf.en);
    if (placeholders(value) !== placeholders(leaf.en)) return true;
    if (boldCount(value) !== boldCount(leaf.en)) return true;
    if (value === leaf.en && leaf.en.length > 20) return true;
    return false;
  });
}

const translated: Record<string, string> = {};

/**
 * **이미 배포된 번역을 먼저 실어 둔다 — 지금 이 로케일의 실제 사전에서.**
 *
 * `--paths`/`--only`로 일부만 다시 만들 때, 나머지 잎을 en으로 되돌리지 않으려면 이미 옳은
 * 값을 먼저 깔아야 한다. 사주·드림 버전은 파일 텍스트를 `JSON.parse`로 되읽는데, 인연링크의
 * 파일은 키에 따옴표가 없는 손으로 쓴 JS라 `JSON.parse`가 던진다 — 그래서 여기서는 이미
 * import된 `getDictionary(locale)`을 그대로 잎으로 펼쳐 이어받는다. 텍스트 문법에 기대지
 * 않으므로 파일 형식이 무엇이든 안전하다.
 */
function seedFromCurrentDictionary() {
  const current = getDictionary(locale);
  if (current === en) {
    // getDictionary가 en으로 폴백했다는 것은 이 로케일이 아직 dictionaries 맵에 없다는 뜻이다.
    console.log(`  (${locale} 사전이 아직 없어 전부 새로 번역합니다)`);
    return;
  }
  const seeded: Leaf[] = [];
  collect(current, current, [], seeded);
  for (const leaf of seeded) translated[leaf.path] = leaf.en;
  console.log(`  기존 사전에서 ${seeded.length}개를 이어받았습니다.`);
}

async function main() {
  seedFromCurrentDictionary();
  const toTranslate = sections.reduce((sum, section) => sum + itemsOf(section).length, 0);
  console.log(`  새로 번역 ${toTranslate}개 (전체 ${leaves.length}개)`);
  for (const section of sections) {
    const items = itemsOf(section);
    if (items.length === 0) {
      console.log(`    ${section} — 대상 없음`);
      continue;
    }
    let got: Record<string, unknown> = {};
    try {
      for (let at = 0; at < items.length; at += CHUNK) {
        const chunk = items.slice(at, at + CHUNK);
        got = { ...got, ...(await translateWithBackoff(section, chunk)) };
      }
    } catch (error) {
      console.error(`FAIL ${section} — ${(error as Error).message}`);
      process.exitCode = 1;
      continue;
    }

    let bad = badLeaves(items, got);
    if (bad.length) {
      const retry = await translateWithBackoff(section, bad);
      got = { ...got, ...retry };
      bad = badLeaves(items, got);
    }

    const stillBad = new Set(bad.map((leaf) => leaf.path));
    for (const leaf of items) {
      const raw = lookup(got, leaf);
      const usable = typeof raw === "string" && raw.trim() && !stillBad.has(leaf.path);
      translated[leaf.path] = usable ? normalize(raw as string, leaf.en) : leaf.en;
    }
    console.log(
      `  ${bad.length ? "!" : " "} ${section} — ${items.length}개${bad.length ? `, ${bad.length}개는 en 유지` : ""}`,
    );
    for (const leaf of bad) {
      const value = lookup(got, leaf);
      console.log(
        `      · ${leaf.path} — ${
          typeof value !== "string"
            ? `값이 ${value === undefined ? "없음" : typeof value}`
            : placeholders(value) !== placeholders(leaf.en)
              ? `자리표시자 [${placeholders(value) || "없음"}] ≠ en [${placeholders(leaf.en) || "없음"}]`
              : `** ${boldCount(value)}개 ≠ en ${boldCount(leaf.en)}개`
        }`,
      );
    }
  }
  if (process.env.PRINT_ONLY) {
    // **파일을 통째로 다시 쓰지 않는다.** 인연링크의 21개 로케일 파일은 손으로 쓴 JS라
    // (따옴표 없는 키, 여러 줄 문자열) `write()`가 하는 `JSON.stringify` 재구성은 값은
    // 그대로여도 파일 전체의 표기를 바꿔 버린다(실측: `ja.ts` 361줄이 통째로 diff에 걸림).
    // `--paths`로 좁힌 잎만 값을 찍어서, 그 두 줄만 손으로(Edit로) 끼워 넣는다.
    const requested = new Set(pathArg ?? []);
    const picked = Object.fromEntries(
      Object.entries(translated).filter(([key]) => requested.has(key)),
    );
    console.log("\n--- PRINT_ONLY ---");
    console.log(JSON.stringify(picked, null, 2));
    return;
  }
  write();
}

/** en의 구조를 복사하며 잎만 갈아 끼운다. 구조는 손대지 않는다. */
function rebuild(node: unknown, trail: string[]): unknown {
  if (typeof node === "string") {
    const key = trail.join(".");
    return key in translated ? translated[key] : node;
  }
  if (Array.isArray(node)) return node.map((item, index) => rebuild(item, [...trail, String(index)]));
  if (node && typeof node === "object") {
    return Object.fromEntries(
      Object.entries(node).map(([key, value]) => [key, rebuild(value, [...trail, key])]),
    );
  }
  return node;
}

function write() {
  const built = rebuild(en, []) as Dictionary;

  if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true });
  const file = path.join(DIR, `${locale}.ts`);

  const header = [
    `// 인연링크 화면 사전의 ${localeLanguageName(locale)}(${locale}) 번역이다.`,
    "//",
    "// **이 파일은 원래 에이전트가 손으로 채웠다.** 2026-09-07부터는 `scripts/translate-i18n.ts`로",
    "// 일부 잎만 갈아 끼운다 — 키 구성·중첩·배열 길이는 en을 그대로 따르고 손으로 고칠 때도",
    "// 키를 더하거나 빼지 말 것(`verify-i18n`이 en과 대조해 잡는다).",
    "",
    'import type { Dictionary } from "@/lib/i18n";',
    "",
    `export const ${locale}: Dictionary = ${JSON.stringify(built, null, 2)};`,
    "",
  ].join("\n");

  writeFileSync(file, header);
  console.log(`\nwritten: ${file}`);
}

void main();
