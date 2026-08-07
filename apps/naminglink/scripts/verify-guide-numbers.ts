// 안내 문서에 적힌 **숫자가 코드의 실제 값과 같은가.**
//
// ## 왜 필요한가 (2026-08-07)
//
// 안내 문서는 코드에서 나온 값을 그대로 옮겨 적는다. 코드가 바뀌면 그 숫자는 **조용히 거짓이
// 된다** — 아무도 안 세면 드러날 방법이 없다. 형제 앱 셋에서 실제로 그랬다:
//
//   드림링크  별칭을 일곱 개 더하자 문서의 「242개」가 그날 거짓이 됐다
//   드림링크  「뜻이 갈리는 상징 59개」는 길흉 극성의 수였다(실제 39개)
//   인연링크  궁합 리포트가 8장으로 나가는 동안 문서는 7장 구성을 설명하고 있었다
//
// ## 이 앱은 무엇이 다른가
//
// **고시에 장수를 적지 않는다.** 파는 것이 여럿이라(한자 상세 3종·글로벌 리포트·한글 아트·
// 도장) 하나의 장수로 적을 수 없어 「디지털 콘텐츠(웹 화면 또는 PDF 문서)」로 둔다. 그래서
// 형제 앱들이 겪은 고시 위반이 여기에는 **구조적으로 없다.**
//
// 다만 **안내 문서는 장수를 말한다**(「Premium Report — 3장」·「Hangul Name Art — 2장」).
// 고시가 아니라 설명이지만 틀리면 똑같이 거짓이므로 여기서 센다.
//
// 실행: apps/naminglink 에서
//   npx tsx scripts/verify-guide-numbers.ts

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { koreanFamilyNameChoices } from "../src/lib/services";

const GUIDE = path.join(process.cwd(), "src", "app", "guide");
const PDF = path.join(process.cwd(), "src", "lib", "pdf");

const problems: string[] = [];
let checked = 0;

/**
 * 렌더러가 선언한 `<Page>` 수.
 *
 * **`<PageHeader>`·`<PageFooter>`를 세지 않도록 뒤 글자를 본다.** 처음에 `<Page`로 세다가
 * 세 장짜리 문서가 일곱 장으로 나왔다 — 머리글·꼬리글 컴포넌트 이름이 같은 글자로 시작한다.
 */
function declaredPages(file: string): number {
  const full = path.join(PDF, file);
  if (!existsSync(full)) return -1;
  return (readFileSync(full, "utf8").match(/<Page([^A-Za-z]|$)/gm) ?? []).length;
}

// ── 문서를 모은다 ──────────────────────────────────────────────────────────
const docs: Array<{ slug: string; text: string }> = [];
for (const slug of readdirSync(GUIDE)) {
  const file = path.join(GUIDE, slug, "page.tsx");
  if (!existsSync(file)) continue;
  docs.push({
    slug,
    text: (() => {
      const raw = readFileSync(file, "utf8")
        // 주석은 검사하지 않는다 — 옛 값을 경위로 적어 두는 자리다.
        .replace(/\/\*[\s\S]*?\*\//g, " ")
        .replace(/^\s*\/\/.*$/gm, " ");
      // 제목은 `title="…"` 속성 안이라 태그를 지우면 함께 사라진다. 먼저 빼낸다.
      const titles = [...raw.matchAll(/title="([^"]*)"/g)].map((m) => m[1]).join("  ");
      const body = raw.replace(/<[^>]+>/g, " ");
      return `${titles} ${body}`.replace(/\s+/g, " ");
    })(),
  });
}

// ── 1) 안내 문서가 말하는 장수 ↔ 렌더러가 선언한 장수 ──────────────────────
//
// 한글 아트는 표지를 `art-shared`에서 가져온다 — 두 파일을 더해야 실제 장수가 된다.
console.log("문서가 말하는 장수 ↔ 선언된 장수");
const PAGE_CLAIMS: Array<{ label: string; near: RegExp; pages: number }> = [
  {
    label: "Korean Name Premium Report",
    near: /Korean Name Premium Report\s*—\s*(\d+)장/g,
    pages: declaredPages("global-name-report.tsx"),
  },
  {
    label: "Hangul Name Art",
    near: /Hangul Name Art\s*—\s*(\d+)장/g,
    pages: declaredPages("hangul-art-report.tsx") + declaredPages("art-shared.tsx"),
  },
];
for (const claim of PAGE_CLAIMS) {
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(claim.near)) {
      found += 1;
      checked += 1;
      const written = Number(match[1]);
      if (written !== claim.pages) {
        problems.push(
          `${doc.slug} — ${claim.label}: 문서 ${written}장 · 선언된 ${claim.pages}장`,
        );
      }
    }
  }
  if (found === 0) console.log(`  · ${claim.label} — 문서에서 못 찾음(검사 안 함)`);
  else console.log(`  ✓ ${claim.label} — ${claim.pages}장`);
}

// ── 2) 성씨 목록 ───────────────────────────────────────────────────────────
//
// 문서는 「상위 20개 성」이라고 적는다. 코드의 목록은 **상위 20개 + 소리 매칭용 실존 성 여섯**
// 이라 스물여섯이다(`services.ts` 주석). 목록이 자라면 문서의 20이 맞는지 다시 봐야 한다.
console.log("\n성씨 목록");
{
  const EXPECTED_EXTRA = 6;
  const total = koreanFamilyNameChoices.length;
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(/상위\s*(\d+)개 성/g)) {
      found += 1;
      checked += 1;
      const written = Number(match[1]);
      if (written + EXPECTED_EXTRA !== total) {
        problems.push(
          `${doc.slug} — 성씨: 문서 「상위 ${written}개」 · 코드 목록 ${total}개` +
            `(상위 ${total - EXPECTED_EXTRA} + 소리 매칭 ${EXPECTED_EXTRA})`,
        );
      }
    }
  }
  console.log(`  대조한 값 ${found}개 (목록 ${total}개 = 상위 ${total - EXPECTED_EXTRA} + 소리 매칭 ${EXPECTED_EXTRA})`);
}

// ── 3) 후보 상한 ───────────────────────────────────────────────────────────
//
// 상품마다 한자 후보 상한이 다르다(5 / 10). 값 자체는 `verify-premium-candidate-count`가
// 실제로 만들어 세므로, 여기서는 **문서가 그 밖의 수를 적지 않았는지**만 본다.
console.log("\n후보 상한");
{
  const ALLOWED = new Set([5, 10]);
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(/한자 후보 최대\s*(\d+)개/g)) {
      found += 1;
      checked += 1;
      const written = Number(match[1]);
      if (!ALLOWED.has(written)) {
        problems.push(
          `${doc.slug} — 후보 상한: 문서 ${written}개 · 코드가 내는 값은 ${[...ALLOWED].join("·")}뿐이다`,
        );
      }
    }
  }
  console.log(`  대조한 값 ${found}개 (코드의 상한 ${[...ALLOWED].join("·")})`);
}

// ── 4) 엔진이 설명 문서를 가리키는가 ───────────────────────────────────────
//
// **숫자는 셀 수 있지만 서술은 못 센다.** 규칙을 고치러 온 사람이 그 자리에서 「이 문서도 함께
// 보라」를 읽게 하고, 가리키는 문서가 실제로 있는지만 여기서 센다.
console.log("\n엔진이 설명 문서를 가리키는가");
const POINTERS: Array<[string, string]> = [
  ["src/lib/official-hanja-db.ts", "avoid"],
  ["src/lib/premium-hanja-analysis.ts", "how-hanja-meaning"],
];
for (const [file, slug] of POINTERS) {
  const full = path.join(process.cwd(), file);
  if (!existsSync(full)) {
    problems.push(`${file}이 없다 — 경로가 바뀌었는지 볼 것`);
    continue;
  }
  const pointed = readFileSync(full, "utf8").includes(`app/guide/${slug}`);
  const exists = docs.some((d) => d.slug === slug);
  if (!pointed) problems.push(`${file}이 ${slug}를 가리키지 않는다 — 규칙을 고칠 사람이 문서를 못 본다`);
  else if (!exists) problems.push(`${file}이 없는 문서를 가리킨다: ${slug}`);
  else console.log(`  ✓ ${file} → ${slug}`);
}

console.log("\n안내 문서 숫자 대조");
console.log(`  문서 ${docs.length}편 · 대조한 숫자 ${checked}개`);

/**
 * 대조군 — 검사가 살아 있는지 증명한다.
 *
 * `<Page>` 세기가 머리글·꼬리글을 함께 세면 장수가 부풀어 **틀린 문서를 통과시킨다.**
 * 실제로 처음에 그랬다(세 장짜리가 일곱 장으로 나왔다).
 */
const CONTROL = "<PageHeader /> <Page size=\"A4\"> <PageFooter />";
const controlPages = (CONTROL.match(/<Page([^A-Za-z]|$)/gm) ?? []).length;
if (controlPages !== 1 || checked === 0) {
  console.log(`  ✗ 대조군 실패 — 머리글·꼬리글까지 세고 있다(${controlPages}). 이 결과를 믿지 말 것.`);
  process.exit(1);
}
console.log("  ✓ 대조군: 머리글·꼬리글을 장으로 세지 않는다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n코드를 고쳤으면 문서의 숫자도 그날 함께 고칠 것.");
  process.exit(1);
}

console.log("\nALL PASS — 안내 문서의 숫자가 코드와 같다.");
