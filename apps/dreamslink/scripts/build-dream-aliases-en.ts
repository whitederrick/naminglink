// 상징을 **영어로 달리 부르는 말**을 만들어 `src/lib/dream-aliases-en.ts`에 넣는다.
//
// ## 왜 필요한가 (2026-08-07)
//
// 사전의 `aliases`는 **한국어 242개, 영어 0개**였다. 한국어는 「구렁이」·「독사」·「이가 빠짐」
// 처럼 달리 부르는 말이 촘촘한데 영어는 표기 하나뿐이라, 이용자가 자연스럽게 적으면 안 걸렸다:
//
//   term_en = "tooth falling out"  ·  이용자가 적은 글 = "my tooth fell out"  → 안 걸림
//
// 상징이 안 걸리면 그 꿈은 **풀이 자체가 없다.** 상황 판별(`dream-contexts.ts`)보다 앞 단계라
// 더 크게 샌다.
//
// ## 옮기는 것이지 짓는 것이 아니다
//
// **어떤 상징이 사전에 있는지는 사전이 정한다.** 이 스크립트는 그 상징을 영어로 달리 부르는
// 말만 붙인다 — 새 상징을 만들지 않고, 뜻도 건드리지 않는다.
//
// ## 넓게 잡으면 안 된다
//
// 별칭이 너무 일반적이면 **엉뚱한 꿈에 걸린다.** 「clear water」에 `water`를 넣으면 흙탕물 꿈도
// 맑은 물로 걸린다 — 사전에 그 둘이 따로 있기 때문이다. 그래서 **다른 상징의 표기와 겹치는
// 별칭은 버린다**(아래 `collides`).
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/build-dream-aliases-en.ts

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { DREAM_SYMBOLS } from "../src/lib/dream-symbols";

const OUT = path.join(process.cwd(), "src", "lib", "dream-aliases-en.ts");

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

const env = {
  ...readEnv(path.join(process.cwd(), "..", "naminglink", ".env.local")),
  ...Object.fromEntries(
    Object.entries(readEnv(path.join(process.cwd(), ".env.local"))).filter(([, v]) => v),
  ),
};

/** 다른 상징이 이미 쓰는 표기. 여기 걸리는 별칭은 버린다. */
const taken = new Map<string, string>();
for (const symbol of DREAM_SYMBOLS) {
  for (const term of symbol.term_en.split("/")) {
    taken.set(term.trim().toLowerCase(), symbol.id);
  }
}

function collides(alias: string, symbolId: string) {
  const owner = taken.get(alias.toLowerCase());
  return owner !== undefined && owner !== symbolId;
}

function existing(): Record<string, string[]> {
  if (!existsSync(OUT)) return {};
  const source = readFileSync(OUT, "utf8");
  const at = source.indexOf("= {");
  if (at < 0) return {};
  try {
    return JSON.parse(source.slice(at + 2, source.lastIndexOf("}") + 1)) as Record<string, string[]>;
  } catch {
    return {};
  }
}

const table: Record<string, string[]> = existing();
const missing = DREAM_SYMBOLS.filter((symbol) => !table[symbol.id]);

const CHUNK = 25;

async function generate(chunk: readonly (typeof DREAM_SYMBOLS)[number][]) {
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
            "You list the other ways an English speaker would name a thing when describing a dream.",
            "For each symbol you get its English name and its Korean name. Return the phrases someone would actually type.",
            // 부분 문자열로 찾으므로 활용형이 갈리면 빗나간다.
            "Include the natural inflections a writer uses in past tense: for 'tooth falling out' include 'tooth fell out', 'teeth fell out', 'lost a tooth'.",
            // 너무 일반적인 낱말은 다른 상징을 덮는다.
            "CRITICAL: do not return a bare general word that names a DIFFERENT symbol. For 'clear water' do not return 'water' — muddy water is a separate symbol.",
            // 사전에 없는 상징을 만들어 내는 자리가 아니다.
            "CRITICAL: name the same thing. Do not add related concepts, symbolism, or what it means.",
            "Give 2-5 alternatives per symbol, lowercase, no punctuation, no Korean characters.",
            'Reply with JSON shaped {"aliases": {"<symbol id>": ["<alt>", "<alt>"]}} — the same ids as given.',
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            symbols: chunk.map((symbol) => ({
              id: symbol.id,
              term_en: symbol.term_en,
              term_ko: symbol.term_ko,
            })),
          }),
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
  const raw = (await response.json()).choices[0].message.content as string;
  const parsed = JSON.parse(raw) as Record<string, unknown>;
  return (parsed.aliases && typeof parsed.aliases === "object" ? parsed.aliases : parsed) as Record<
    string,
    unknown
  >;
}

async function main() {
  console.log(
    `상징 ${DREAM_SYMBOLS.length}개 · 이미 있음 ${DREAM_SYMBOLS.length - missing.length}개 · 새로 ${missing.length}개`,
  );
  let dropped = 0;
  for (let at = 0; at < missing.length; at += CHUNK) {
    const chunk = missing.slice(at, at + CHUNK);
    const got = await generate(chunk);
    for (const symbol of chunk) {
      const value = got[symbol.id];
      const list = Array.isArray(value) ? value : [];
      const kept = list
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim().toLowerCase())
        // 한글이 섞여 오면 영어 글에서 안 걸려 없느니만 못하다.
        .filter((item) => item.length >= 3 && !/[가-힣]/.test(item))
        .filter((item) => {
          if (!collides(item, symbol.id)) return true;
          dropped += 1;
          console.log(`  ! ${symbol.id} — "${item}"은 다른 상징의 이름이라 버립니다`);
          return false;
        });
      if (kept.length) table[symbol.id] = [...new Set(kept)];
    }
    console.log(`  ${Math.min(at + CHUNK, missing.length)}/${missing.length}`);
  }

  const ordered = Object.fromEntries(
    DREAM_SYMBOLS.filter((symbol) => table[symbol.id]?.length).map((symbol) => [
      symbol.id,
      table[symbol.id],
    ]),
  );

  const header = [
    "// 상징을 **영어로 달리 부르는 말**.",
    "//",
    "// **`scripts/build-dream-aliases-en.ts`가 만든 파일이다.** 사전의 `aliases`는 한국어뿐이라",
    "// (242개 대 0개) 영어 이용자가 자연스럽게 적으면 상징이 안 걸렸다 — 「my tooth fell out」이",
    "// 「tooth falling out」에 안 걸리는 식이다. 상징이 안 걸리면 그 꿈은 풀이 자체가 없다.",
    "//",
    "// **너무 일반적인 말을 넣지 말 것.** 「clear water」에 `water`를 넣으면 흙탕물 꿈도 걸린다.",
    "// 다른 상징의 표기와 겹치는 별칭은 생성 단계에서 버린다.",
    "",
    "export const ALIASES_EN: Record<string, readonly string[]> = ",
  ].join("\n");

  writeFileSync(OUT, `${header}${JSON.stringify(ordered, null, 2)};\n`, "utf8");
  console.log(
    `\n→ ${OUT}\n   별칭을 얻은 상징 ${Object.keys(ordered).length}/${DREAM_SYMBOLS.length}개` +
      (dropped ? ` · 겹쳐서 버린 것 ${dropped}개` : ""),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
