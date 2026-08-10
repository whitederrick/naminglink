// 안내 문서에 적힌 **숫자가 코드의 실제 값과 같은가.**
//
// ## 왜 필요한가 (2026-08-07)
//
// 안내 문서는 코드에서 나온 값을 그대로 옮겨 적는다 — 리포트가 몇 장인지, 진태양시 보정이 몇
// 분인지. 코드가 바뀌면 그 숫자는 **조용히 거짓이 된다.** 아무도 안 세면 드러날 방법이 없다.
//
// 형제 앱 둘에서 실제로 그랬다. 드림링크는 별칭을 일곱 개 더하자 문서의 「242개」가 그날
// 거짓이 됐고, 인연링크는 궁합 리포트가 8장으로 나가는 동안 문서가 7장 구성을 설명하고 있었다.
//
// **이 앱은 장수를 상수로 보간해 두어**(`A4 {REPORT_PAGE_COUNT}장`) 그 자리는 애초에 어긋날 수
// 없다. 좋은 방식이라 그대로 두고, 보간할 수 없는 값(계산 상수)만 여기서 센다.
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-guide-numbers.ts

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { REPORT_PAGE_COUNT } from "../src/lib/report-pages";

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
  const next = rest.search(/\n {2}"?[a-zA-Z][\w/-]*"?: \{/);
  return (next < 0 ? rest : rest.slice(0, next)).replace(/\s+/g, " ");
}

const docs: Array<{ slug: string; text: string }> = [];
for (const slug of readdirSync(GUIDE)) {
  const file = path.join(GUIDE, slug, "page.tsx");
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
  docs.push({
    slug,
    text: (() => {
      const raw = readFileSync(file, "utf8")
        // 주석은 검사하지 않는다 — 옛 값을 경위로 적어 두는 자리다.
        .replace(/\/\*[\s\S]*?\*\//g, " ")
        .replace(/^\s*\/\/.*$/gm, " ");
      /**
       * **제목을 먼저 빼낸다.** 제목은 `title="…"`이라 JSX 속성 안에 있고, 태그를 지우면
       * 제목째 사라진다 — 주장이 제목에 담기는 일이 많은데 그것을 통째로 못 보게 된다.
       */
      const titles = [...raw.matchAll(/title="([^"]*)"/g)].map((m) => m[1]).join("  ");
      const body = raw.replace(/<[^>]+>/g, " ");
      return `${titles} ${body}`.replace(/\s+/g, " ");
    })(),
  });
}

// ── 1) 진태양시 보정값 ─────────────────────────────────────────────────────
console.log("진태양시 보정");
{
  let found = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(/(\d+)분\s*입니다/g)) {
      found += 1;
      checked += 1;
      const written = Number(match[1]);
      if (written !== SEOUL_CORRECTION) {
        problems.push(`${doc.slug} — 서울 보정: 문서 ${written}분 · 실제 ${SEOUL_CORRECTION}분`);
      }
    }
  }
  console.log(`  대조한 값 ${found}개 (실제 ${SEOUL_CORRECTION}분)`);
}

// ── 2) 장수를 손으로 적은 자리가 없는가 ────────────────────────────────────
//
// 이 앱은 `A4 {REPORT_PAGE_COUNT}장`으로 보간한다. **누군가 그것을 숫자로 되돌리면** 상수를
// 고쳐도 문서가 안 따라온다 — 형제 앱 둘이 그래서 어긋났다. 손으로 적은 장수를 잡는다.
console.log("\n장수를 손으로 적은 자리");
{
  let hand = 0;
  for (const doc of docs) {
    for (const match of doc.text.matchAll(/A4\s*(\d+)\s*장/g)) {
      hand += 1;
      checked += 1;
      const written = Number(match[1]);
      if (written !== REPORT_PAGE_COUNT) {
        problems.push(`${doc.slug} — 장수: 문서 ${written}장 · 실제 ${REPORT_PAGE_COUNT}장`);
      } else {
        problems.push(
          `${doc.slug} — 장수를 숫자로 적었다(${written}). 지금은 맞지만 상수를 고치면 안 따라온다 — ` +
            "`{REPORT_PAGE_COUNT}`로 보간할 것",
        );
      }
    }
  }
  console.log(`  손으로 적은 자리 ${hand}개 (상수 ${REPORT_PAGE_COUNT}장)`);
}

// ── 3) 엔진이 설명 문서를 가리키는가 ───────────────────────────────────────
//
// **숫자는 셀 수 있지만 서술은 못 센다.** 규칙을 고치러 온 사람이 그 자리에서 「이 문서도 함께
// 보라」를 읽게 하고, 가리키는 문서가 실제로 있는지만 여기서 센다.
console.log("\n엔진이 설명 문서를 가리키는가");
const POINTERS: Array<[string, string]> = [
  ["src/lib/engines/natal-outlook.ts", "yongsin"],
  ["src/lib/engines/today-fortune.ts", "today-fortune"],
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
console.log(`  문서 ${docs.length}편 · 대조한 숫자 ${checked}개 · 리포트 ${REPORT_PAGE_COUNT}장`);

const controlCaught = [..."보정이 99분 입니다".matchAll(/(\d+)분\s*입니다/g)].some(
  (m) => Number(m[1]) !== SEOUL_CORRECTION,
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
