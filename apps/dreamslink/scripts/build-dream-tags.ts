// 상징 사전의 주제 꼬리표(한국어 낱말)를 영어로 옮겨 `src/lib/dream-tags.ts`를 만든다.
//
// **왜 태그만 따로인가.** 사전의 풀이(`interpretation_*`)는 한국어·영어 두 벌이 다 채워져
// 있는데 `tags`만 한국어 하나다. 그래서 영어로 읽는 사람의 화면에서 "함께 가리키는 것" 줄이
// 통째로 한국어로 나갔다.
//
// **모델이 짓는 것은 낱말의 번역뿐이다.** 어떤 태그가 붙는지는 사전이 정하고 이 스크립트는
// 그 이름만 옮긴다 — 없는 전통 의미를 만들어 내는 자리가 아니다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/build-dream-tags.ts
//
// 사전에 태그를 더한 뒤 다시 돌리면, 이미 옮긴 것은 그대로 두고 새 것만 부른다.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { DREAM_SYMBOLS } from "../src/lib/dream-symbols";

const OUT = path.join(process.cwd(), "src", "lib", "dream-tags.ts");

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

const tags = [...new Set(DREAM_SYMBOLS.flatMap((symbol) => symbol.tags ?? []))].sort();

/** 이미 옮긴 것은 다시 부르지 않는다. 파일에서 되읽는다. */
function existing(): Record<string, string> {
  if (!existsSync(OUT)) return {};
  const source = readFileSync(OUT, "utf8");
  const at = source.indexOf("= {");
  if (at < 0) return {};
  const body = source.slice(at + 2, source.lastIndexOf("}") + 1);
  try {
    return JSON.parse(body) as Record<string, string>;
  } catch {
    return {};
  }
}

const labels: Record<string, string> = existing();
const missing = tags.filter((tag) => !labels[tag]);

const CHUNK = 40;

async function translate(items: string[]) {
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
            "You translate short Korean thematic tags from a dictionary of traditional Korean dream symbols into English.",
            "Each tag is a single noun or short noun phrase naming what a dream symbol is traditionally taken to point to (wealth, a warning, a conception omen, and so on).",
            "Reply with JSON shaped {\"labels\": {\"<korean tag>\": \"<english label>\"}} — the same keys as given.",
            "Keep every label short: one or two words, lowercase unless it is a proper noun. These are shown in a row separated by dots, not as sentences.",
            "Translate the sense, not the characters. 태몽 is 'conception dream', 구설 is 'gossip', 귀인 is 'a helpful person'.",
          ].join(" "),
        },
        { role: "user", content: JSON.stringify({ tags: items }) },
      ],
    }),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
  const raw = (await response.json()).choices[0].message.content as string;
  const parsed = JSON.parse(raw) as Record<string, unknown>;
  const inner = (parsed.labels && typeof parsed.labels === "object" ? parsed.labels : parsed) as Record<
    string,
    unknown
  >;
  return inner;
}

async function main() {
  console.log(`태그 ${tags.length}개 · 이미 있음 ${tags.length - missing.length}개 · 새로 ${missing.length}개`);
  for (let at = 0; at < missing.length; at += CHUNK) {
    const chunk = missing.slice(at, at + CHUNK);
    const got = await translate(chunk);
    for (const tag of chunk) {
      const value = got[tag];
      if (typeof value === "string" && value.trim()) labels[tag] = value.trim();
      else console.log(`  ! ${tag} — 값이 없어 건너뜁니다`);
    }
    console.log(`  ${Math.min(at + CHUNK, missing.length)}/${missing.length}`);
  }

  const ordered = Object.fromEntries(tags.filter((tag) => labels[tag]).map((tag) => [tag, labels[tag]]));
  const header = [
    "// 상징 사전의 주제 꼬리표를 영어로 옮긴 표.",
    "//",
    "// **`scripts/build-dream-tags.ts`가 만든 파일이다.** 사전의 태그는 한국어 낱말 하나뿐이라",
    "// (`interpretation_*`과 달리 영어 판이 없다) 영어로 읽는 화면에서 이 표가 없으면 «함께",
    "// 가리키는 것» 줄이 통째로 한국어로 나간다.",
    "//",
    "// 표에 없는 태그는 영어 화면에서 **그냥 빠진다**(`lib/dream-language.ts`의 `themeLabels`).",
    "// 사전에 태그를 더했으면 이 스크립트를 다시 돌릴 것 — 새 것만 부른다.",
    "",
    `export const TAG_LABELS_EN: Record<string, string> = ${JSON.stringify(ordered, null, 2)};`,
    "",
  ].join("\n");
  writeFileSync(OUT, header);
  console.log(`\nwritten: ${OUT} (${Object.keys(ordered).length}개)`);
  const skipped = tags.filter((tag) => !labels[tag]);
  if (skipped.length) console.log(`  옮기지 못한 태그 ${skipped.length}개: ${skipped.join(", ")}`);
}

void main();
