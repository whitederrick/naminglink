// 화면 사전 한 벌을 다른 언어로 옮겨 `src/lib/i18n-locales/<locale>.ts`를 만든다.
//
// **왜 스크립트인가.** 인연링크의 21개 사전은 에이전트가 손으로 채웠는데, 그 방식은 키를
// 빠뜨리거나 배열 길이를 바꾸는 일이 잦았다(`verify-i18n`이 그래서 생겼다). 여기서는 en의
// **구조를 그대로 복사하고 잎(문자열)만 갈아 끼운다** — 키 집합·중첩·배열 길이가 어긋날 수
// 있는 자리가 아예 없다. 검사기가 볼 것은 자리표시자·강조 표기뿐이다.
//
// **en과 ko를 함께 넘긴다.** 구조와 어투는 en을 따르되 사주 용어의 뜻은 원문인 ko가 정확하다
// (일간·십신·왕상휴수사 같은 말은 en을 다시 옮기면 두 번 번역한 것이 된다).
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/translate-i18n.ts ja
//   ... scripts/translate-i18n.ts ja --only today,report   (절만 다시 만들 때)
//
// 만든 뒤에는 반드시 `verify-i18n`과 `verify-product-consistency`를 돌린다. 뒤엣것은 인연링크
// 잔재(궁합·인연)가 번역에 섞여 들어오지 않았는지 본다.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

import { getDictionary, type Dictionary, type Locale } from "../src/lib/i18n";
import { localeLanguageName } from "../src/lib/locale-codes";

const DIR = path.join(process.cwd(), "src", "lib", "i18n-locales");

// OpenAI 키는 naminglink 쪽 `.env.local`에만 있다(같은 계정을 쓴다). 사주링크 파일이 있으면
// 그 값으로 덮는다 — `translate-legal.mjs`와 같은 방식이다.
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
  console.error("usage: tsx scripts/translate-i18n.ts <locale> [--only section,section]");
  process.exit(1);
}
const locale = localeArg as Locale;
const onlyArg = rest.find((arg) => arg.startsWith("--only"));
const only = onlyArg
  ? new Set((onlyArg.split("=")[1] ?? rest[rest.indexOf(onlyArg) + 1] ?? "").split(",").filter(Boolean))
  : null;

if (locale === "ko" || locale === "en") {
  // 원문과 그 짝은 `i18n.ts` 안에 있고 사람이 쓴다. 기계가 덮을 자리가 아니다.
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

const sections = [...new Set(leaves.map((leaf) => leaf.path.split(".")[0]!))].filter(
  (section) => !only || only.has(section),
);

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
            `You localize the UI of Saju-Link, a Korean saju (four pillars) reading service for one person: a natal chart, the balance of the five elements, and a daily fortune.`,
            `Translate each entry into ${localeLanguageName(locale)} (locale ${locale}).`,
            "You are given both the English string and the Korean original. Follow English for tone and length; follow Korean for the meaning of saju terms (day master, ten gods, seasonal vitality) — re-translating the English would translate them twice.",
            // 아래 셋은 `verify-i18n`이 기계적으로 대조하는 항목이다. 어기면 그 자리에서 걸린다.
            "CRITICAL: keep every {placeholder} token exactly as-is — same tokens, same spelling. They are substituted at runtime.",
            "CRITICAL: keep **bold** markers on the same phrase, and keep the same number of ** markers. If the English has no ** at all, your translation must have none either — do not add emphasis of your own.",
            "CRITICAL: keep newline characters (\\n) where they appear — the layout depends on them.",
            "This service is about KOREAN saju. It is NOT about compatibility between two people, and it is not a matchmaking service — never introduce words meaning 'compatibility', 'match rate', or 'the two of you'.",
            // 입력이 `{path: {en, ko}}`라 그 모양을 되비추기 쉽다. 값은 문자열이어야 한다고
            // 못 박는다(그래도 객체로 오면 `lookup`이 안쪽에서 꺼낸다).
            "Return a flat JSON object with exactly the same keys. Each VALUE must be a plain string — the translation itself — never an object and never an echo of the input.",
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify(
            Object.fromEntries(items.map((leaf) => [leaf.path, { en: leaf.en, ko: leaf.ko }])),
          ),
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`${section}: HTTP ${response.status}`);
  const raw = (await response.json()).choices[0].message.content as string;
  return JSON.parse(raw) as Record<string, unknown>;
}

/**
 * 응답에서 한 잎의 값을 꺼낸다.
 *
 * **모델이 두 가지 꼴로 돌려준다.** 경로를 키로 그대로 쓴 평면 객체
 * (`{"today.title": "..."}`)일 때도 있고, 점을 중첩으로 풀어 놓을 때도 있다
 * (`{"today": {"title": "..."}}`). 한 쪽만 읽으면 멀쩡한 번역이 통째로 버려지고 en이 남는다
 * (실제로 388개 중 대부분이 그렇게 떨어졌다). 둘 다 받는다.
 */
function lookup(got: Record<string, unknown>, path: string): unknown {
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

  // **값 자리에 객체가 오는 일이 흔하다.** 입력을 `{path: {en, ko}}`로 주면 모델이 그 모양을
  // 그대로 되비춰 `{path: {en: "Wood", ja: "木"}}`로 돌려준다. 문자열만 받으면 388개 중
  // 대부분이 버려지고 en이 남는다(실제로 그랬다). 안쪽에서 번역을 꺼낸다.
  if (node && typeof node === "object" && !Array.isArray(node)) {
    const inner = node as Record<string, unknown>;
    const candidate = inner[locale] ?? inner.translation ?? inner.value ?? inner.text;
    return typeof candidate === "string" ? candidate : undefined;
  }
  return node;
}

/**
 * **en에 없는 강조는 걷어낸다.**
 *
 * 모델이 제 판단으로 `**`를 붙이는 일이 잦다 — "붙이지 말라"고 못 박아도 반복된다(vi에서
 * 두 번 다시 불러도 같았다). 붙일 자리가 en에 애초에 없으면 그 표기는 번역이 아니라 장식이니
 * 기계적으로 지운다. 되묻는 것보다 확실하고, 한 번 더 부르는 값도 아끼게 된다.
 *
 * **en에 강조가 있는데 개수가 다른 경우는 손대지 않는다.** 그건 어느 구절을 강조할지가
 * 어긋난 것이라 지우면 뜻이 바뀐다 — 그 잎은 en으로 되돌리는 편이 낫다.
 */
function normalize(value: string, base: string): string {
  return boldCount(base) === 0 ? value.replace(/\*\*/g, "") : value;
}

/** 자리표시자·강조가 어긋난 잎만 골라 낸다. 통째로 다시 부르지 않고 그것만 고친다. */
function badLeaves(items: Leaf[], got: Record<string, unknown>) {
  return items.filter((leaf) => {
    const raw = lookup(got, leaf.path);
    if (typeof raw !== "string" || !raw.trim()) return true;
    const value = normalize(raw, leaf.en);
    if (placeholders(value) !== placeholders(leaf.en)) return true;
    if (boldCount(value) !== boldCount(leaf.en)) return true;
    return false;
  });
}

const translated: Record<string, string> = {};

/**
 * `--only`로 일부 절만 다시 만들 때, **이미 번역된 나머지를 먼저 실어 둔다.**
 *
 * 이걸 하지 않으면 `rebuild`가 `translated`에 없는 잎을 전부 en으로 되돌린다 — 한 절을
 * 고치려다 나머지 스물세 절을 영어로 날리는 셈이다.
 */
function seedFromExistingFile() {
  const file = path.join(DIR, `${locale}.ts`);
  if (!only || !existsSync(file)) return;
  const source = readFileSync(file, "utf8");
  const start = source.indexOf("= {");
  if (start < 0) return;
  const body = source.slice(start + 2).trimEnd().replace(/;$/, "");
  let previous: unknown;
  try {
    previous = JSON.parse(body);
  } catch {
    console.warn("  (기존 파일을 읽지 못해 --only가 나머지 절을 en으로 되돌립니다)");
    return;
  }
  const seeded: Leaf[] = [];
  collect(previous, previous, [], seeded);
  for (const leaf of seeded) translated[leaf.path] = leaf.en;
  console.log(`  기존 파일에서 ${seeded.length}개를 이어받았습니다.`);
}

// tsx가 이 스크립트를 CJS로 돌려 최상위 await를 쓸 수 없다(verify-i18n과 같은 이유).
async function main() {
  seedFromExistingFile();
for (const section of sections) {
  const items = leaves.filter((leaf) => leaf.path.split(".")[0] === section);
  let got: Record<string, unknown> = {};
  try {
    got = await translateSection(section, items);
  } catch (error) {
    console.error(`FAIL ${section} — ${(error as Error).message}`);
    process.exitCode = 1;
    continue;
  }

  let bad = badLeaves(items, got);
  if (bad.length) {
    // 한 번만 다시 부른다. 그래도 어긋나면 en을 그대로 두고 표시한다 — 자리표시자가 깨진
    // 문자열을 넣느니 영어가 낫다(화면은 뜨고, 검사기가 "en과 동일"로 경고해 준다).
    const retry = await translateSection(section, bad);
    got = { ...got, ...retry };
    bad = badLeaves(items, got);
  }

  // **끝까지 어긋난 잎은 en으로 되돌린다.** 예전에는 이 자리에서 "값이 문자열이면 쓴다"만
  // 보아, 재시도 뒤에도 자리표시자·강조가 깨진 문자열이 그대로 파일에 들어갔다(vi에서 16건).
  // 로그에는 "en 유지"라고 찍으면서 실제로는 유지하지 않았다 — 로그와 동작이 갈린 자리다.
  const stillBad = new Set(bad.map((leaf) => leaf.path));
  for (const leaf of items) {
    const raw = lookup(got, leaf.path);
    const usable = typeof raw === "string" && raw.trim() && !stillBad.has(leaf.path);
    translated[leaf.path] = usable ? normalize(raw as string, leaf.en) : leaf.en;
  }
  console.log(
    `  ${bad.length ? "!" : " "} ${section} — ${items.length}개${bad.length ? `, ${bad.length}개는 en 유지` : ""}`,
  );
  // **어느 잎이 남았는지 찍는다.** 개수만 알면 어디를 손봐야 할지 모른다.
  for (const leaf of bad) {
    const value = lookup(got, leaf.path);
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
  `// 사주링크 화면 사전의 ${localeLanguageName(locale)}(${locale}) 번역이다.`,
  "//",
  "// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로",
  "// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나",
  "// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.",
  "//",
  "// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,",
  "// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.",
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
