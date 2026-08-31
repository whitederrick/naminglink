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

/**
 * 안내 문서가 놓인 자리를 **찾아낸다. 적어 두지 않는다.**
 *
 * 2026-08-19 정적화에서 라우트가 `src/app/guide`에서 `src/app/[locale]/guide`로 옮겨졌고,
 * 그 순간 이 검사기는 `readdirSync`가 ENOENT로 던지며 **아예 돌지 못했다.** 같은 날 아침
 * naminglink에서 똑같은 자리를 이미 겪었는데, 이 파일은 그 앱의 복제본이라 결함도 함께
 * 복제돼 있었다 — 한 곳을 고칠 때 같은 병을 앓는 곳을 함께 셀 것.
 *
 * 그래서 경로를 적는 대신 `src/app` 아래에서 `guide` 디렉터리를 걸어 찾는다. 라우트 그룹이
 * 또 갈려도 따라온다. **한 곳도 못 찾으면 실패다** — 검사 0건은 통과가 아니다.
 */
function findGuideDirs(root: string): string[] {
  const found: string[] = [];
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop()!;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const full = path.join(dir, entry.name);
      if (entry.name === "guide") found.push(full);
      else stack.push(full);
    }
  }
  return found;
}

const GUIDE_DIRS = findGuideDirs(path.join(process.cwd(), "src", "app"));
if (GUIDE_DIRS.length === 0) {
  console.error("안내 문서 디렉터리를 한 곳도 못 찾았다 — 경로가 또 바뀌었는지 볼 것.");
  process.exit(1);
}

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
  // v2 교체(2026-08-31) 뒤로는 「전승 배경이 적힌 상징」이 아니라 **「원문 인용이 붙은
  // 상징」**을 센다 — 새 사전은 인용 없는 항목이 존재할 수 없어 상징 총수와 같아진다.
  // `doc-values.ts`의 `cultureNoteTotal`과 **같은 기준으로 세야** 이 검사가 뜻을 갖는다.
  if (symbol.meanings.some((meaning) => (meaning.cites?.length ?? 0) > 0)) cultureNotes += 1;
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
  /**
   * **「태몽 상징 27개」를 전체 상징 수로 잡지 않게 한다** (2026-08-10).
   *
   * 예전 정규식은 `상징\s*(\d+)개`였다. 화면의 JSX 산문에서는 앞에 다른 말이 붙지 않아
   * 문제가 없었는데, 본문이 자료로 옮겨지며 「태몽 상징 27개를…」이라는 문장이 생겼다.
   * 27은 태몽 표시가 붙은 수(`conceptionTags`)이지 전체 상징 수가 아니다.
   *
   * 앞에 수식어가 붙지 않은 「상징 N개」만 본다 — 문맥이 좁아야 무엇을 세는지가 갈린다.
   */
  { label: "상징 수", near: /(?<![가-힣]\s?)상징\s*(\d[\d,]*)개/g, value: DREAM_SYMBOLS.length },
  // 「태몽 상징 27개」는 전체가 아니라 태몽 표시가 붙은 수다. 위 정규식이 그것을 전체 상징
  // 수로 잡아 「문서 27 · 실제 215」를 냈다 — 숫자는 맞는데 무엇을 세는지가 달랐다.
  { label: "태몽 상징(수식어형)", near: /태몽\s*상징\s*(\d[\d,]*)개/g, value: conceptionTags },
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
/**
 * **본문이 어디에 있는가.**
 *
 * 2026-08-09에 안내 본문이 `page.tsx`의 JSX에서 `lib/doc-content/ko.ts`로 옮겨졌다(23개 언어).
 * 그 뒤로 이 검사기는 **숫자를 0개 대조하고 있었다** — `page.tsx`에는 배선만 남아 셀 것이
 * 없는데, 없는 것을 세면 아무 문제도 못 찾고 초록에 가까운 얼굴로 돈다. 대조군이 「이 결과를
 * 믿지 말 것」이라고 말해 주지 않았으면 통과로 읽혔을 자리다.
 *
 * **고침은 naminglink에서 났고 이 앱에는 오지 않았다**(2026-08-10에 옮겨 옴). 형제 앱에서
 * 공용 스크립트를 고쳤으면 나머지 앱에도 있는지 그 자리에서 볼 것.
 */
const KO_DOC = path.join(process.cwd(), "src", "lib", "doc-content", "ko.ts");
const koSource = existsSync(KO_DOC) ? readFileSync(KO_DOC, "utf8") : "";

/** 한국어 원문에서 문서 하나의 글만 잘라 낸다. 다음 문서 키가 나오는 자리에서 끊는다. */
function docContentProse(slug: string) {
  const start = koSource.indexOf(`"guide/${slug}"`);
  if (start < 0) return "";
  const rest = koSource.slice(start + 1);
  // **닫는 따옴표까지 넘어야 한다.** `["a-zA-Z][\w/-]*` 는 여는 따옴표만 받아서
  // `"guide/xxx": {` 를 못 알아봤고, 그러면 다음 키를 못 찾아 **파일 끝까지** 잘라 온다 —
  // 한 문서의 글에 뒤따르는 문서가 전부 섞여 같은 숫자가 여러 문서에서 잡혔다.
  const next = rest.search(/\n {2}"?[a-zA-Z][\w/-]*"?: \{/);
  return (next < 0 ? rest : rest.slice(0, next)).replace(/\s+/g, " ");
}

const docs: Array<{ slug: string; text: string }> = [];
for (const [dir, slug] of GUIDE_DIRS.flatMap((dir) =>
  readdirSync(dir).map((slug) => [dir, slug] as const),
)) {
  const file = path.join(dir, slug, "page.tsx");
  if (!existsSync(file)) continue;

  // 본문이 자료로 옮겨진 문서는 그쪽을 본다. 옮기지 않은 문서는 예전대로 화면에서 읽는다.
  const moved = docContentProse(slug);
  if (moved) {
    /**
     * **강조 표기를 걷어 내고 본다.** 자료로 옮기면서 숫자 둘레에 `**`가 붙었다
     * (`**32분**입니다`). 아래 정규식들은 화면의 JSX 산문에 맞춰 쓰인 것이라 그 사이에
     * 별표가 끼면 하나도 못 잡는다 — 실제로 사주링크가 **숫자를 0개 대조**하고 있었다.
     */
    docs.push({ slug, text: moved.replace(/\*\*/g, "") });
    continue;
  }
  // 주석은 검사하지 않는다 — 옛 숫자를 경위로 적어 두는 자리다.
  docs.push({
    slug,
    text: (() => {
      const raw = readFileSync(file, "utf8")
        // 주석은 검사하지 않는다 — 옛 값을 경위로 적어 두는 자리다.
        .replace(/\/\*[\s\S]*?\*\//g, " ")
        .replace(/^\s*\/\/.*$/gm, " ");
      /**
       * **제목을 먼저 빼낸다.** 제목은 `title="…"`이라 JSX 속성 안에 있고, 태그를 지우면
       * 제목째 사라진다 — 「4장 — 두 기운이…」·「뜻이 갈리는 상징은 39개입니다」처럼 **주장이
       * 제목에 담기는 일이 많은데** 그것을 통째로 못 보게 된다.
       */
      const titles = [...raw.matchAll(/title="([^"]*)"/g)].map((m) => m[1]).join("  ");
      const body = raw.replace(/<[^>]+>/g, " ");
      return `${titles} ${body}`.replace(/\s+/g, " ");
    })(),
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

// ---------------------------------------------------------------------------
// 규칙을 설명하는 문서를 엔진이 가리키는가
//
// **숫자는 셀 수 있지만 서술은 못 센다.** 「앞 글자가 한글이면 조각으로 본다」 같은 설명이
// 엔진과 어긋나도 기계는 모른다 — 문장이 규칙을 옮겨 적은 것이지 규칙에서 나온 값이 아니라서다.
//
// 그래서 **엔진 쪽에 가리킴을 박아 둔다.** 규칙을 고치러 온 사람이 그 자리에서 "이 문서도 함께
// 보라"를 읽게 하는 것이다. 다만 주석도 낡으므로, 가리키는 문서가 **실제로 있는지**는 여기서 센다.
//
// 문서 이름을 바꾸거나 지우면 여기서 걸리고, 가리킴을 지워도 걸린다.
// ---------------------------------------------------------------------------
const ENGINE = path.join(process.cwd(), "src", "lib", "engines", "dream-match.ts");
/** 엔진이 반드시 가리켜야 하는 문서. 규칙이 있는 자리와 그것을 설명하는 문서의 짝이다. */
const MUST_POINT_AT = ["how-matching-works", "one-symbol-many-meanings", "conception-dreams"];

console.log("\n엔진이 설명 문서를 가리키는가");
const engineSource = existsSync(ENGINE) ? readFileSync(ENGINE, "utf8") : "";
if (!engineSource) {
  problems.push("dream-match.ts를 읽지 못했다 — 경로가 바뀌었는지 볼 것");
}
for (const slug of MUST_POINT_AT) {
  const pointed = engineSource.includes(`app/guide/${slug}`);
  const exists = docs.some((doc) => doc.slug === slug);
  if (!pointed) problems.push(`엔진이 ${slug}를 가리키지 않는다 — 규칙을 고칠 사람이 문서를 못 본다`);
  else if (!exists) problems.push(`엔진이 없는 문서를 가리킨다: ${slug}`);
  else console.log(`  ✓ ${slug}`);
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
