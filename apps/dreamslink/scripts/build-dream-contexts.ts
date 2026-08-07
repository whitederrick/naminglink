// 상징 사전의 **상황**(`meaning.context`, 한국어)을 영어로 옮겨 `src/lib/dream-contexts.ts`를 만든다.
//
// ## 왜 필요한가 (2026-08-07)
//
// `context`는 화면 문구가 아니라 **매칭 키다.** 이용자가 적은 글에 이 낱말이 있는지 세어
// 여러 의미 중 하나를 고른다(`chooseMeaning`) — 「뱀을 품다」와 「뱀에 물리다」를 가르는 자리다.
//
// 그런데 이 필드가 **한국어 하나뿐이라 22개 언어에서 판별이 통째로 죽어 있었다.** 영어 글에서는
// 한국어 낱말이 하나도 안 걸려 점수가 전부 0이 되고, 언제나 첫 의미로 떨어졌다:
//
//   "뱀에게 물렸다"    → 구설·건강 주의   ✓
//   "A snake bit me"  → 재물·태몽 가능   ✗  (물린 꿈을 재물로 읽었다)
//
// ## 옮기는 것이지 짓는 것이 아니다
//
// 어떤 상황이 어떤 의미를 가리키는지는 **사전이 정한다.** 이 스크립트는 그 상황을 영어 이용자가
// 칠 만한 말로 옮길 뿐이다 — 없는 전통 의미를 만들어 내는 자리가 아니다(`build-dream-tags.ts`와
// 같은 성격이다).
//
// ## 읽기 좋은 문장이 아니라 매칭 키워드다
//
// **기능어를 넣으면 안 된다.** `the`·`is`·`or`는 거의 모든 꿈에 있어 모든 의미의 점수를 고르게
// 올린다 — 전부 0점이라 첫째로 떨어지는 것보다 **더 나쁘다**(조용히 무작위로 고른다).
// `chooseMeaning`이 거르기는 하지만 애초에 내용어만 적는 편이 낫다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/build-dream-contexts.ts
//
// 사전에 상황을 더한 뒤 다시 돌리면, 이미 옮긴 것은 그대로 두고 새 것만 부른다.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { DREAM_SYMBOLS } from "../src/lib/dream-symbols";

const OUT = path.join(process.cwd(), "src", "lib", "dream-contexts.ts");

function readEnv(file: string): Record<string, string> {
  if (!existsSync(file)) return {};
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split(/\r?\n/)
      .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
      .map((line) => {
        const at = line.indexOf("=");
        return [line.slice(0, at).trim(), line.slice(at + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
}

// OpenAI 키는 naminglink 쪽 `.env.local`에만 있다(같은 계정을 쓴다).
const env = {
  ...readEnv(path.join(process.cwd(), "..", "naminglink", ".env.local")),
  ...Object.fromEntries(
    Object.entries(readEnv(path.join(process.cwd(), ".env.local"))).filter(([, v]) => v),
  ),
};

/**
 * 옮길 상황 목록. **상징과 함께 넘긴다** — 「품」 같은 두 글자짜리는 그것만 보고 옮길 수 없고,
 * 어느 상징의 상황인지 알아야 「hold in one's arms」가 나온다.
 */
const items = [
  ...new Map(
    DREAM_SYMBOLS.flatMap((symbol) =>
      symbol.meanings
        .filter((meaning) => meaning.context)
        .map((meaning) => [
          meaning.context as string,
          {
            context: meaning.context as string,
            symbol_ko: symbol.term_ko,
            symbol_en: symbol.term_en,
            meaning_en: meaning.interpretation_en,
          },
        ]),
    ),
  ).values(),
];

/** 이미 옮긴 것은 다시 부르지 않는다. 파일에서 되읽는다. */
function existing(): Record<string, string> {
  if (!existsSync(OUT)) return {};
  const source = readFileSync(OUT, "utf8");
  const at = source.indexOf("= {");
  if (at < 0) return {};
  try {
    return JSON.parse(source.slice(at + 2, source.lastIndexOf("}") + 1)) as Record<string, string>;
  } catch {
    return {};
  }
}

const table: Record<string, string> = existing();
const missing = items.filter((item) => !table[item.context]);

const CHUNK = 25;

async function translate(chunk: typeof items) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "You are building keyword lists for a dream-symbol matcher, not writing prose.",
            "Each item gives a Korean phrase describing WHEN a dream symbol carries a particular meaning, plus the symbol and that meaning in English.",
            "For each, output the English CONTENT WORDS a person would actually type when describing that situation in their dream.",
            // **처음 돌렸을 때 모델이 `meaning_en`을 그대로 되비췄다**(2026-08-07) —
            // 「뱀에게 물림」에 `snake caution disputes health`를 냈다. 상황이 아니라 뜻이다.
            // 그러면 이용자가 「A snake bit me」라고 적어도 아무것도 안 걸려 고치기 전과 같아진다.
            // 예를 박아 둔다. 아래 `echoesMeaning`이 같은 실수를 기계로도 잡는다.
            "The `meaning_en` field tells you what the symbol MEANS. Never output those words — output what HAPPENS in the dream.",
            'Example: for {context: "뱀에게 물림", symbol_en: "snake", meaning_en: "gossip or health caution"} the answer is "snake bite bitten bit" — NOT "gossip health caution".',
            'Example: for {context: "뱀을 잡거나 품", symbol_en: "snake", meaning_en: "wealth or conception omen"} the answer is "snake catch caught hold held" — NOT "wealth conception".',
            // 기능어가 들어가면 모든 의미가 고르게 점수를 받아 판별이 무작위가 된다.
            "CRITICAL: content words only. Never include articles, prepositions, pronouns or auxiliaries (a, the, of, in, is, was, my, it, and, or). Just the nouns and verbs.",
            // 사전이 정한 상황을 옮기는 것이지 새 상황을 짓는 것이 아니다.
            "CRITICAL: describe only the situation the Korean states. Do not add circumstances it does not mention.",
            // 활용형이 갈리면 부분 문자열 매칭이 빗나간다. 어간에 가깝게 둔다.
            "Prefer base forms a writer would use: 'bite bitten', 'hold held', 'enter entering'. Include both forms when the past tense differs.",
            "Keep each list to 2-6 words, lowercase, space separated. No punctuation, no Korean characters.",
            'Reply with JSON shaped {"contexts": {"<korean context>": "<english keywords>"}} — the same keys as given.',
          ].join(" "),
        },
        { role: "user", content: JSON.stringify({ items: chunk }) },
      ],
    }),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
  const raw = (await response.json()).choices[0].message.content as string;
  const parsed = JSON.parse(raw) as Record<string, unknown>;
  return (parsed.contexts && typeof parsed.contexts === "object" ? parsed.contexts : parsed) as Record<
    string,
    unknown
  >;
}

/** 받은 값이 쓸 만한가. **한글이 섞여 오면 버린다** — 그러면 영어 글에서 안 걸려 없느니만 못하다. */
function usable(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.trim().length >= 2 &&
    !/[가-힣]/.test(value) &&
    value.trim().split(/\s+/).length <= 8
  );
}

const WORDS = (text: string) =>
  new Set(
    text
      .toLowerCase()
      .split(/[^a-z]+/)
      .filter((word) => word.length >= 3),
  );

/**
 * 받은 값이 **상황이 아니라 뜻을 되비친 것**인가.
 *
 * 처음 돌렸을 때 모델이 그랬다 — 「뱀에게 물림」에 `snake caution disputes health`를 냈다.
 * 그대로 넣으면 이용자가 「A snake bit me」라고 적어도 안 걸려 **고치기 전과 똑같아진다.**
 * 프롬프트에 예를 박아 두었지만, 지시만으로는 다시 샐 수 있어 여기서도 센다.
 *
 * 상징 이름은 양쪽에 다 나오는 것이 정상이라(`snake`) 빼고 겨룬다.
 */
function echoesMeaning(value: string, item: (typeof items)[number]) {
  const symbolWords = WORDS(item.symbol_en);
  const got = [...WORDS(value)].filter((word) => !symbolWords.has(word));
  const meaning = WORDS(item.meaning_en);
  const shared = got.filter((word) => meaning.has(word));
  // 상징 이름을 뺀 낱말의 절반 이상이 뜻과 겹치면 되비친 것으로 본다.
  return got.length > 0 && shared.length * 2 >= got.length;
}

async function main() {
  console.log(
    `상황 ${items.length}개 · 이미 있음 ${items.length - missing.length}개 · 새로 ${missing.length}개`,
  );
  let dropped = 0;
  for (let at = 0; at < missing.length; at += CHUNK) {
    const chunk = missing.slice(at, at + CHUNK);
    const got = await translate(chunk);
    for (const item of chunk) {
      const value = got[item.context];
      if (!usable(value)) {
        dropped += 1;
        console.log(`  ! ${item.symbol_ko}/${item.context} — 쓸 수 없는 값, 건너뜁니다`);
      } else if (echoesMeaning(value, item)) {
        dropped += 1;
        console.log(`  ! ${item.symbol_ko}/${item.context} — 상황이 아니라 뜻을 되비쳤다: "${value}"`);
      } else {
        table[item.context] = value.trim().toLowerCase();
      }
    }
    console.log(`  ${Math.min(at + CHUNK, missing.length)}/${missing.length}`);
  }

  const ordered = Object.fromEntries(
    items.filter((item) => table[item.context]).map((item) => [item.context, table[item.context]]),
  );

  const header = [
    "// 상징 사전의 **상황**을 영어 매칭 키워드로 옮긴 표.",
    "//",
    "// **`scripts/build-dream-contexts.ts`가 만든 파일이다.** 손으로 고쳐도 되지만 규칙이 있다 —",
    "// 이것은 읽기용 문장이 아니라 **매칭 키워드**이고, 기능어(the·is·or)를 넣으면 모든 의미가",
    "// 고르게 점수를 받아 판별이 무작위가 된다.",
    "//",
    "// 이 표가 없으면 영어 글에서 상황 판별이 통째로 죽는다 — 「A snake bit me」가 재물 꿈으로",
    "// 읽힌다(2026-08-07까지 실제로 그랬다). 빠진 자리는 `verify-dream-context-parity`가 센다.",
    "",
    "export const CONTEXT_EN: Record<string, string> = ",
  ].join("\n");

  writeFileSync(OUT, `${header}${JSON.stringify(ordered, null, 2)};\n`, "utf8");
  console.log(
    `\n→ ${OUT}\n   옮긴 것 ${Object.keys(ordered).length}/${items.length}개` +
      (dropped ? ` · 버린 것 ${dropped}개` : ""),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
