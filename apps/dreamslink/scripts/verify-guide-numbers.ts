// 안내 문서에 적힌 **숫자가 사전·엔진의 실제 값과 같은가.**
//
// ## 왜 필요한가 (2026-08-07)
//
// 안내 문서는 「상징 215개」·「의미 256가지」·「별칭 242개」처럼 **사전을 세어 적은 숫자**로
// 가득하다. 그런데 사전은 자란다 — 그날 별칭 일곱 개를 더하자 문서의 242가 곧바로 거짓이
// 됐다(실제 249). 아무도 안 세면 이런 숫자는 조용히 낡는다.
//
// **문서가 스스로 근거를 대는 서비스에서 이건 그냥 오타가 아니다.** 「전해 오는 근거를 댈 수
// 있는 것은 24개뿐입니다」라고 적어 놓고 그 수가 틀리면, 정직하게 밝힌다는 말 자체가 흔들린다.
//
// ## 어떻게 세는가
//
// 숫자를 아무거나 긁어 대조하면 못 쓴다 — 24가 「전승 근거」이기도 하고 「어느 쪽도 아닌 것」
// 이기도 하다. 그래서 **문맥과 함께** 찾는다. 문맥이 걸리는데 숫자가 다르면 낡은 것이고,
// 문맥 자체가 없으면 그 문장을 지운 것이므로 검사할 것도 없다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-guide-numbers.ts

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { ALIASES_EN } from "../src/lib/dream-aliases-en";
import { CONCEPTION_TAG, DREAM_SYMBOLS } from "../src/lib/dream-symbols";

const GUIDE = path.join(process.cwd(), "src", "app", "guide");

// ── 사전에서 실제 값을 센다 ────────────────────────────────────────────────
const category: Record<string, number> = {};
const polarity: Record<string, number> = {};
let meanings = 0;
let koAliases = 0;
let cultureNotes = 0;
let conceptionTags = 0;
let multiMeaning = 0;
for (const symbol of DREAM_SYMBOLS) {
  category[symbol.category] = (category[symbol.category] ?? 0) + 1;
  polarity[symbol.polarity] = (polarity[symbol.polarity] ?? 0) + 1;
  meanings += symbol.meanings.length;
  if (symbol.meanings.length > 1) multiMeaning += 1;
  koAliases += (symbol.aliases ?? []).length;
  if (symbol.culture_note) cultureNotes += 1;
  if ((symbol.tags ?? []).includes(CONCEPTION_TAG)) conceptionTags += 1;
}

/**
 * 문서에 적힌 값과 실제 값의 짝.
 *
 * `near`는 그 숫자가 **무엇을 세는 것인지** 알아보는 문맥이다. 숫자만으로는 못 가른다 —
 * 24가 전승 근거이기도 하고 어느 쪽도 아닌 상징의 수이기도 하다.
 *
 * 정규식의 `(\d[\d,]*)`가 문서에 적힌 수이고, `value`가 지금 사전이 내는 수다.
 */
const FACTS: Array<{ label: string; near: RegExp; value: number }> = [
  { label: "상징 수", near: /상징\s*(\d[\d,]*)개/g, value: DREAM_SYMBOLS.length },
  { label: "의미 수", near: /(\d[\d,]*)가지/g, value: meanings },
  // ⚠️ **길흉이 「갈리는 것」(59)과 헷갈리지 말 것.** 문서가 실제로 그 둘을 바꿔 적고 있었다 —
  // 「뜻이 갈리는 상징은 59개」라고 했는데 그건 ambivalent 극성의 수이고, 의미가 여럿인 상징은
  // 39개다. 숫자가 둘 다 사전에서 나오므로 눈으로는 못 가른다.
  { label: "의미가 여럿인 상징", near: /(\d[\d,]*)개\s*가 상황에 따라 뜻이 갈립니다/g, value: multiMeaning },
  { label: "한국어 별칭", near: /다르게 부르는 말\s*(\d[\d,]*)개/g, value: koAliases },
  // **숫자가 문맥보다 먼저 온다.** 「24개에는 그렇게 풀이해 온 이유가…」
  { label: "전승 근거", near: /(\d[\d,]*)개\s*에는 그렇게 풀이해 온 이유/g, value: cultureNotes },
  { label: "태몽 상징", near: /(\d[\d,]*)개\s*에 태몽 표시/g, value: conceptionTags },
  // 갈래는 「사물 (46)」 꼴이다. 태그를 걷어내면 낱말과 괄호 사이에 공백이 남는다.
  { label: "사물", near: /사물\s*\((\d+)\)/g, value: category.object ?? 0 },
  { label: "동물", near: /동물\s*\((\d+)\)/g, value: category.animal ?? 0 },
  { label: "자연", near: /자연\s*\((\d+)\)/g, value: category.nature ?? 0 },
  { label: "행위", near: /행위\s*\((\d+)\)/g, value: category.action ?? 0 },
  { label: "몸", near: /몸\s*\((\d+)\)/g, value: category.body ?? 0 },
  { label: "사물(목록)", near: /사물\s*(\d+)\s*—/g, value: category.object ?? 0 },
  { label: "동물(목록)", near: /동물\s*(\d+)\s*—/g, value: category.animal ?? 0 },
  { label: "자연(목록)", near: /자연\s*(\d+)\s*—/g, value: category.nature ?? 0 },
  { label: "행위(목록)", near: /행위\s*(\d+)\s*—/g, value: category.action ?? 0 },
  { label: "몸(목록)", near: /몸\s*(\d+)\s*—/g, value: category.body ?? 0 },
  { label: "사람·장소·빛깔·수", near: /사람\s*(\d+)/g, value: category.person ?? 0 },
  { label: "좋은 쪽", near: /좋은 쪽\s*(\d+)개/g, value: polarity.positive ?? 0 },
  { label: "갈리는 것", near: /갈리는 것\s*(\d+)개/g, value: polarity.ambivalent ?? 0 },
  { label: "조심할 쪽", near: /조심할 쪽\s*(\d+)개/g, value: polarity.negative ?? 0 },
  { label: "어느 쪽도 아닌 것", near: /어느 쪽도 아닌 것\s*(\d+)개/g, value: polarity.neutral ?? 0 },
];

/**
 * 한글로 적은 수. **숫자만 세면 「아홉 갈래」·「상징 아홉 개」를 놓친다.**
 *
 * 문서는 작은 수를 한글로 적는 편이 읽기 좋아 그렇게 적혀 있다. 그것도 사전에서 나온 값이므로
 * 함께 세야 한다 — 갈래를 하나 더하면 「아홉」이 그날 거짓이 된다.
 */
const KOREAN_NUMERALS: Record<string, number> = {
  둘: 2, 셋: 3, 넷: 4, 다섯: 5, 여섯: 6, 일곱: 7, 여덟: 8, 아홉: 9, 열: 10,
};

const SPELLED: Array<{ label: string; near: RegExp; value: number }> = [
  { label: "갈래 수(한글)", near: /([가-힣]+)\s*갈래로/g, value: Object.keys(category).length },
  { label: "자주 찾는 상징(한글)", near: /자주 찾는 상징\s*([가-힣]+)\s*개/g, value: 9 },
];

// ── 안내 문서를 모은다 ─────────────────────────────────────────────────────
const docs: Array<{ slug: string; text: string }> = [];
for (const slug of readdirSync(GUIDE)) {
  const file = path.join(GUIDE, slug, "page.tsx");
  if (!existsSync(file)) continue;
  // 주석은 검사하지 않는다 — 옛 숫자를 경위로 적어 두는 자리다.
  docs.push({
    slug,
    text: readFileSync(file, "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .replace(/^\s*\/\/.*$/gm, " ")
      // JSX 태그를 걷어낸다. 「사물</b>(46)」처럼 낱말과 숫자 사이에 끼어들어 문맥을 끊는다.
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  });
}

const problems: string[] = [];
let checked = 0;

for (const fact of FACTS) {
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(fact.near)) {
      found += 1;
      checked += 1;
      const written = Number(match[1].replace(/,/g, ""));
      if (written !== fact.value) {
        problems.push(
          `${doc.slug} — ${fact.label}: 문서 ${written} · 실제 ${fact.value}  ("${match[0].trim()}")`,
        );
      }
    }
  }
  if (found === 0) {
    // 문장을 지웠을 수도 있으니 실패로 보지 않는다. 다만 검사한 셈 치지도 않는다.
    console.log(`  · ${fact.label} — 문서에서 못 찾음(검사 안 함)`);
  }
}

for (const fact of SPELLED) {
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(fact.near)) {
      const written = KOREAN_NUMERALS[match[1]];
      // 「여러 갈래로」처럼 수가 아닌 말은 셀 것이 없다.
      if (written === undefined) continue;
      found += 1;
      checked += 1;
      if (written !== fact.value) {
        problems.push(
          `${doc.slug} — ${fact.label}: 문서 ${match[1]}(${written}) · 실제 ${fact.value}`,
        );
      }
    }
  }
  if (found === 0) console.log(`  · ${fact.label} — 문서에서 못 찾음(검사 안 함)`);
}

console.log("\n안내 문서 숫자 대조");
console.log(`  문서 ${docs.length}편 · 대조한 숫자 ${checked}개 · 항목 ${FACTS.length}종`);

/**
 * 대조군 — 검사가 살아 있는지 증명한다.
 *
 * 실제로 있는 문맥에 틀린 수를 넣어 잡히는지 본다. 이것이 없으면 정규식이 어긋난 채로
 * 「대조한 숫자 0개」를 통과로 찍을 수 있다.
 */
const CONTROL = "이 사전에는 상징 999개가 실려 있습니다";
const controlCaught = [...CONTROL.matchAll(/상징\s*(\d[\d,]*)개/g)].some(
  (m) => Number(m[1]) !== DREAM_SYMBOLS.length,
);
if (!controlCaught || checked === 0) {
  console.log("  ✗ 대조군 실패 — 숫자를 못 읽고 있다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 틀린 수를 잡는다");

if (problems.length) {
  console.log(`\n어긋난 숫자 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n사전을 고쳤으면 문서의 숫자도 그날 함께 고칠 것.");
  process.exit(1);
}

console.log("\nALL PASS — 안내 문서의 숫자가 사전과 같다.");
