// 안내 문서에 적힌 **숫자가 코드의 실제 값과 같은가.**
//
// ## 왜 필요한가 (2026-08-07)
//
// 안내 문서는 코드에서 나온 값을 그대로 옮겨 적는다 — 리포트가 몇 장인지, 진태양시 보정이 몇
// 분인지. 코드가 바뀌면 그 숫자는 **조용히 거짓이 된다.** 아무도 안 세면 드러날 방법이 없다.
//
// 이 앱에서 실제로 그랬다. 궁합 리포트가 라틴 문자 로케일에서 8장으로 나가는 동안 문서는
// 4~7장 구성을 설명하고 있었고, 약관도 7장이라고 고지하고 있었다. 지면을 고쳐 7장으로 맞췄고
// (`report-pages.ts`), 이제 그 값과 문서를 대조한다.
//
// **드림링크의 같은 검사기와 짝이다.** 그쪽은 사전을 세어 적은 숫자가 많고, 이쪽은 장수와
// 계산 상수다. 앱마다 세는 값이 달라 파일을 따로 둔다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-guide-numbers.ts

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { AFFINITY_PAGE_COUNT, COMPATIBILITY_PAGE_COUNT } from "../src/lib/report-pages";

const GUIDE = path.join(process.cwd(), "src", "app", "guide");

/**
 * 서울과 한국 표준시 자오선의 차이. 문서가 「약 32분」이라고 적은 값의 근거다.
 *
 * 상수를 여기 다시 적지 않고 **식으로 둔다** — 경도를 고치면 이 값도 함께 움직여야 문서와
 * 코드가 어긋난 것을 잡을 수 있다.
 */
const SEOUL_LONGITUDE = 126.978;
const KST_MERIDIAN = 135;
const SEOUL_CORRECTION = Math.round(((KST_MERIDIAN - SEOUL_LONGITUDE) / 15) * 60);

const problems: string[] = [];
let checked = 0;

// ── 문서를 모은다 ──────────────────────────────────────────────────────────
const docs: Array<{ slug: string; text: string }> = [];
for (const slug of readdirSync(GUIDE)) {
  const file = path.join(GUIDE, slug, "page.tsx");
  if (!existsSync(file)) continue;
  docs.push({
    slug,
    // 주석은 검사하지 않는다(옛 값을 경위로 적어 두는 자리다). JSX 태그도 걷어낸다 —
    // 「4장 — 두 기운이…」가 `title="…"` 안에 있어 태그째 두면 문맥이 끊긴다.
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

// ── 1) 리포트 구성 설명의 장 번호가 선언된 장수를 넘지 않는가 ───────────────
//
// `reports` 문서는 「4장 — …」·「7장 — …」처럼 장마다 무엇이 담기는지 적는다. 리포트가
// 여덟 장이 되면 여덟째를 설명해야 하고, 일곱 장으로 줄면 여덟째 설명이 거짓이 된다.
console.log("리포트 구성 설명의 장 번호");
{
  const doc = docs.find((d) => d.slug === "reports");
  if (!doc) {
    problems.push("reports 문서를 못 찾았다");
  } else {
    const pages = [...doc.text.matchAll(/(\d+)장\s*—/g)].map((m) => Number(m[1]));
    if (pages.length === 0) {
      problems.push("reports 문서에서 장 번호를 하나도 못 읽었다 — 형태가 바뀌었는지 볼 것");
    } else {
      checked += pages.length;
      const highest = Math.max(...pages);
      console.log(`  장 번호 ${pages.length}개 · 가장 큰 값 ${highest}`);
      if (highest !== COMPATIBILITY_PAGE_COUNT) {
        problems.push(
          `reports — 마지막 장이 ${highest}장인데 궁합 리포트는 ${COMPATIBILITY_PAGE_COUNT}장이다`,
        );
      }
      for (const page of pages) {
        if (page > COMPATIBILITY_PAGE_COUNT) {
          problems.push(`reports — ${page}장을 설명하는데 리포트는 ${COMPATIBILITY_PAGE_COUNT}장뿐이다`);
        }
      }
    }
  }
}

// ── 2) 진태양시 보정값 ─────────────────────────────────────────────────────
console.log("\n진태양시 보정");
{
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(/(\d+)분\s*입니다/g)) {
      found += 1;
      checked += 1;
      const written = Number(match[1]);
      if (written !== SEOUL_CORRECTION) {
        problems.push(
          `${doc.slug} — 서울 보정: 문서 ${written}분 · 실제 ${SEOUL_CORRECTION}분`,
        );
      }
    }
  }
  console.log(`  대조한 값 ${found}개 (실제 ${SEOUL_CORRECTION}분)`);
}

// ── 3) 엔진이 설명 문서를 가리키는가 ───────────────────────────────────────
//
// **숫자는 셀 수 있지만 서술은 못 센다.** 규칙을 고치러 온 사람이 그 자리에서 「이 문서도 함께
// 보라」를 읽게 하고, 가리키는 문서가 실제로 있는지만 여기서 센다.
console.log("\n엔진이 설명 문서를 가리키는가");
const POINTERS: Array<[string, string]> = [
  ["src/lib/engines/yongsin.ts", "yongsin"],
  ["src/lib/engines/zodiac.ts", "zodiac"],
  ["src/lib/engines/affinity.ts", "affinity"],
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

// ── 대조군 ─────────────────────────────────────────────────────────────────
console.log("\n안내 문서 숫자 대조");
console.log(`  문서 ${docs.length}편 · 대조한 숫자 ${checked}개`);
console.log(`  선언된 장수 — 궁합 ${COMPATIBILITY_PAGE_COUNT}장 · 인연의 결 ${AFFINITY_PAGE_COUNT}장`);

const controlCaught = [..."이 리포트는 99장 — 아무것도".matchAll(/(\d+)장\s*—/g)].some(
  (m) => Number(m[1]) !== COMPATIBILITY_PAGE_COUNT,
);
if (!controlCaught || checked === 0) {
  console.log("  ✗ 대조군 실패 — 숫자를 못 읽고 있다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 틀린 수를 잡는다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  console.log("\n코드를 고쳤으면 문서의 숫자도 그날 함께 고칠 것.");
  process.exit(1);
}

console.log("\nALL PASS — 안내 문서의 숫자가 코드와 같다.");
