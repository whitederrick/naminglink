// 편집 문서(안내·소개·공지·문의)가 **순서대로** 완성됐는지 본다 — 네 앱.
//
// ## 왜 단계로 보는가 (2026-08-09)
//
// 이 저장소의 순서는 정해져 있다(사용자 방침):
//
//     ① 한국어로 모든 내용을 쓴다
//     ② 그것을 영어로 다 옮긴다
//     ③ 영어를 본으로 나머지 21개 언어를 만든다
//
// 그런데 검사기들이 **사고가 난 뒤 그 사고만** 보게 자라 왔다. 한글이 남으면 한글 검사,
// 자리표시자가 깨지면 자리표시자 검사. 그래서 **처음 보는 실패는 언제나 통과**했고, 실제로
// 2026-08-09에 이런 일이 났다:
//
//   · 인연링크 유료 상품 안내가 15개 언어에서 **부분적으로 비었다**. 빈 문자열은 자리표시자
//     0개·강조 0개·한글 0개라 모든 검사가 초록이었다
//   · 드림링크 「하지 않기로 한 것들」은 영어판이 **통째로 비었는데** 그대로 21개 언어의
//     본이 될 뻔했다
//
// 더 나쁜 것은 검사가 **비싼 단계 뒤에** 있었다는 점이다. 21개를 다 돌린 다음에 검사하니
// 걸리면 21개를 다시 돌린다. 실제로 그날 인연링크 번역을 두 번 돌렸다.
//
// **그래서 이 검사기는 앞 단계가 빨간불이면 뒤 단계를 보지 않는다.** 「아직 볼 차례가 아니다」로
// 적고 멈춘다 — 뒤 단계의 초록이 앞 단계의 미완을 가리지 않게 하려는 것이다.
//
// 실행: node scripts/verify-doc-stages.mjs

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { APP_KEYS } from "./app-keys.mjs";

/** 로케일 목록의 원본. **검사기가 자기 목록을 들지 않는다.** */
function localesOf(app) {
  const file = path.join("apps", app, "src", "lib", "locale-codes.ts");
  if (!existsSync(file)) return null;
  const block = readFileSync(file, "utf8").match(/localeCodes\s*=\s*\[([\s\S]*?)\]/);
  return block ? [...block[1].matchAll(/"([a-z-]+)"/g)].map((m) => m[1]) : null;
}

const read = (file) => (existsSync(file) ? readFileSync(file, "utf8") : null);

/**
 * 자료 파일에서 **글자 잎만** 뽑는다.
 *
 * 파싱하지 않고 정규식으로 센다 — 이 파일들은 생성물이라 꼴이 일정하고, 검사기가 앱 코드를
 * import 하기 시작하면 **앱이 깨졌을 때 검사기도 함께 죽는다.**
 */
function leavesIn(body) {
  // `"키": "값"` 과 `키: "값"` 둘 다 받는다(ko는 손으로 써서 따옴표가 없다).
  return [...body.matchAll(/(?:"([a-zA-Z][\w/-]*)"|([a-zA-Z][\w]*))\s*:\s*"((?:[^"\\]|\\.)*)"/g)]
    .map((m) => ({ key: m[1] ?? m[2], value: m[3] }));
}

function leavesOf(source, marker) {
  if (!source) return null;
  const at = source.indexOf(marker);
  if (at < 0) return null;
  return leavesIn(source.slice(at));
}

/**
 * 문서 하나하나의 원문 조각. 키 → 그 문서가 차지하는 글.
 *
 * **왜 필요한가.** 한국어에만 있는 문서(korean 갈래)가 생기면서, ko 파일 전체와 en 파일 전체를
 * 견주는 검사가 성립하지 않게 됐다 — en이 짧은 것이 정상인데 검사기는 「빠졌다」고 읽는다.
 * 그래서 **양쪽에 다 있어야 하는 문서만 골라** 견준다.
 */
function blocksOf(source, marker) {
  if (!source) return null;
  const at = source.indexOf(marker);
  if (at < 0) return null;
  const body = source.slice(at);
  const starts = [...body.matchAll(/\n {2}"?([a-z][\w/-]*)"?:\s*\{/g)];
  const blocks = new Map();
  starts.forEach((m, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    blocks.set(m[1], body.slice(m.index, end));
  });
  return blocks;
}

/**
 * 그 앱에서 **한국어에만 두는** 문서의 키.
 *
 * `guide-index.ts`의 `track: "korean"`에서 읽는다 — 목록을 여기 손으로 적으면 갈래를 옮겼을 때
 * 두 목록이 어긋난다. 그런 문서가 없는 앱은 빈 집합이고, 그때 이 검사기는 예전과 똑같이 돈다.
 */
function koreanOnlyKeysOf(indexSource) {
  if (!indexSource) return new Set();
  return new Set(
    [...indexSource.matchAll(/slug:\s*"([a-z0-9-]+)"\s*,\s*track:\s*"korean"/g)].map(
      (m) => `guide/${m[1]}`,
    ),
  );
}

/** 문서 키 목록. 등록부가 아니라 자료 자체에서 읽는다. */
function docKeysOf(source, marker) {
  if (!source) return [];
  const at = source.indexOf(marker);
  if (at < 0) return [];
  const body = source.slice(at);
  return [...body.matchAll(/\n {2}"?([a-z][\w/-]*)"?:\s*\{/g)].map((m) => m[1]);
}

/** 한글이 든 잎. 예시로 일부러 남긴 것도 여기 걸리므로 **원문 대비**로만 판단한다. */
const hangulLeaves = (leaves) => leaves.filter((leaf) => /[가-힣]/.test(leaf.value));

/**
 * 빈 잎. `""` 은 자리표시자도 강조도 한글도 0개라 **다른 모든 검사를 통과한다.**
 *
 * 다만 **비어 있어도 되는 자리가 있다.** `title`·`caption` 은 자료형에서 선택값이라, 제목
 * 없는 절(숫자판만 있는 자리)은 빈 제목으로 적는다 — 그건 자료가 그렇게 정한 것이지 빠진
 * 것이 아니다. 그 자리까지 결함으로 세면 검사기가 **옳은 자료를 빨간불로 만든다.**
 */
const OPTIONAL_KEYS = new Set(["title", "caption"]);
const emptyLeaves = (leaves) =>
  leaves.filter((leaf) => !leaf.value.trim() && !OPTIONAL_KEYS.has(leaf.key));

/** 원문이 비운 자리까지 세면 번역본이 억울하게 걸린다. 원문의 빈 자리를 빼고 본다. */
function unexpectedEmpties(leaves, baseline) {
  const allowed = new Set(baseline.filter((leaf) => !leaf.value.trim()).map((leaf) => leaf.key + "|" + leaf.value));
  return leaves.filter((leaf) => !leaf.value.trim() && !OPTIONAL_KEYS.has(leaf.key));
}

let failed = 0;
let blocked = 0;
let notStarted = 0;

console.log("편집 문서 — 단계별 완성 검사\n");
console.log("  ① 한국어  →  ② 영어  →  ③ 나머지 21개");
console.log("  앞 단계가 빨간불이면 뒤 단계는 **보지 않는다**(초록이 미완을 가리지 않게).\n");

for (const app of APP_KEYS) {
  const dir = path.join("apps", app, "src", "lib", "doc-content");
  if (!existsSync(dir)) {
    console.log(`■ ${app} — 미착수(doc-content 없음). 본문이 아직 page.tsx에 있다\n`);
    notStarted += 1;
    continue;
  }

  const locales = localesOf(app);
  if (!locales) {
    console.log(`■ ${app} — ✗ locale-codes.ts를 읽지 못했다\n`);
    failed += 1;
    continue;
  }

  console.log(`■ ${app}`);

  // ── ① 한국어 ───────────────────────────────────────────────────────────
  const koSource = read(path.join(dir, "ko.ts"));
  const koLeaves = leavesOf(koSource, "KO_DOCS");
  const koKeys = docKeysOf(koSource, "KO_DOCS");
  const indexSource = read(path.join("apps", app, "src", "lib", "guide-index.ts"));
  /**
   * 한국어에만 두는 문서. **번역이 빠진 것이 아니라 두지 않기로 한 것이다** — 그 문서가
   * 설명하는 서비스가 한국어 화면뿐이라 다른 언어로 읽어도 갈 곳이 없다(2026-08-10).
   * 그래서 ②·③은 이 문서들을 **기대하지 않고**, 오히려 **있으면 결함으로 센다.**
   */
  const koreanOnly = koreanOnlyKeysOf(indexSource);
  const sharedKoKeys = koKeys.filter((key) => !koreanOnly.has(key));
  const koBlocks = blocksOf(koSource, "KO_DOCS");
  const sharedKoBody = sharedKoKeys.map((key) => koBlocks?.get(key) ?? "").join("");
  const sharedKoLeaves = leavesIn(sharedKoBody);
  const koProblems = [];

  if (!koLeaves) koProblems.push("ko.ts를 읽지 못했다");
  else {
    const blank = emptyLeaves(koLeaves);
    if (blank.length) koProblems.push(`빈 잎 ${blank.length}개 — ${blank.slice(0, 3).map((l) => l.key).join(", ")}`);

    /**
     * **화면이 부르는 문서가 자료에 다 있는가.**
     *
     * 안내 목록(`guide-index.ts`)이 부르는 슬러그가 자료에 없으면 그 페이지는 열리는 순간
     * 터진다. 반대로 자료에만 있고 목록에 없는 문서는 **아무도 닿을 수 없다** — 번역까지
     * 다 해 놓고 링크가 없는 상태다.
     */
    const slugs = indexSource
      ? [...indexSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1])
      : [];
    const missingDocs = slugs.filter((slug) => !koKeys.includes(`guide/${slug}`));
    if (missingDocs.length) koProblems.push(`목록에 있는데 ko에 없다: ${missingDocs.join(", ")}`);

    const orphan = koKeys
      .filter((key) => key.startsWith("guide/"))
      .filter((key) => !slugs.includes(key.slice("guide/".length)));
    if (orphan.length) koProblems.push(`ko에 있는데 목록에 없다(닿을 수 없다): ${orphan.join(", ")}`);

    /**
     * **아직 `page.tsx`에 남은 산문이 없는가.**
     *
     * 옮기다 만 문서는 자료에도 있고 화면에도 있다. 그러면 자료 쪽만 번역되고 화면은 옛 글을
     * 그린다 — 번역이 다 됐는데 화면은 한국어인 상태가 되고, 아무도 그 이유를 모른다.
     */
    const guideDir = path.join("apps", app, "src", "app", "guide");
    const leftover = existsSync(guideDir)
      ? readdirSync(guideDir)
          .filter((slug) => existsSync(path.join(guideDir, slug, "page.tsx")))
          .filter((slug) => {
            const page = readFileSync(path.join(guideDir, slug, "page.tsx"), "utf8");
            // 주석을 뺀 뒤 한글 덩어리가 남으면 아직 산문이 있는 것이다.
            const code = page.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/^\s*\/\/.*$/gm, " ");
            return (code.match(/[가-힣]/g) ?? []).length > 20;
          })
      : [];
    if (leftover.length) koProblems.push(`page.tsx에 산문이 남았다: ${leftover.join(", ")}`);
  }

  console.log(`  ${koProblems.length ? "✗" : "✓"} ① 한국어 — 문서 ${koKeys.length}편 · 잎 ${koLeaves?.length ?? 0}개`);
  for (const problem of koProblems) console.log(`      ${problem}`);

  if (koProblems.length) {
    console.log("  · ② 영어 — 아직 볼 차례가 아니다");
    console.log("  · ③ 나머지 언어 — 아직 볼 차례가 아니다\n");
    failed += 1;
    blocked += 1;
    continue;
  }

  // ── ② 영어 ─────────────────────────────────────────────────────────────
  const enSource = read(path.join(dir, "en.ts"));
  const enLeaves = leavesOf(enSource, "EN_DOCS");
  const enKeys = docKeysOf(enSource, "EN_DOCS");
  const enProblems = [];

  if (!enLeaves) enProblems.push("en.ts가 없다 — `--fill-en`을 먼저 돌릴 것");
  else {
    const missingDocs = sharedKoKeys.filter((key) => !enKeys.includes(key));
    if (missingDocs.length) enProblems.push(`ko에 있는데 en에 없다: ${missingDocs.join(", ")}`);

    // 한국어에만 두기로 한 문서가 되살아났는가. **빠진 것만 세면 되돌아오는 것을 못 본다** —
    // 번역기를 다시 돌리면 그대로 다시 만들어지던 자리다.
    const revived = enKeys.filter((key) => koreanOnly.has(key));
    if (revived.length) {
      enProblems.push(`한국어에만 둘 문서가 en에 있다: ${revived.join(", ")}`);
    }

    const blank = emptyLeaves(enLeaves);
    if (blank.length) enProblems.push(`빈 잎 ${blank.length}개 — ${blank.slice(0, 3).map((l) => l.key).join(", ")}`);

    if (enLeaves.length < sharedKoLeaves.length) {
      enProblems.push(`잎이 모자란다 — ko ${sharedKoLeaves.length}개 / en ${enLeaves.length}개`);
    }

    /**
     * **분량이 정상 범위인가.**
     *
     * 규칙으로 잡히지 않는 실패를 잡는 자리다. 문서 한 편이 통째로 비었을 때 그것을 알아본
     * 것은 어떤 규칙이 아니라 **분량 비율**이었다 — 다른 문서가 한국어의 1.6~1.75배인데 그
     * 문서만 0.58배였다. 영어는 한국어보다 길어지는 것이 보통이라, **한국어보다 짧으면**
     * 무언가 빠진 것이다.
     */
    // **양쪽에 다 있어야 하는 문서끼리** 견준다. 파일 전체를 견주면 한국어에만 두기로 한
    // 문서 때문에 en이 짧아 보이고, 검사기가 옳은 상태를 빨간불로 만든다.
    const koChars = sharedKoBody.length;
    const enBlocks = blocksOf(enSource, "EN_DOCS");
    const enChars = sharedKoKeys
      .map((key) => enBlocks?.get(key)?.length ?? 0)
      .reduce((a, b) => a + b, 0);
    if (enChars < koChars * 0.9) {
      enProblems.push(
        `분량이 한국어보다 짧다 — ko ${koChars}자 / en ${enChars}자 (${(enChars / koChars).toFixed(2)}배). 빠진 문서를 찾을 것`,
      );
    }
  }

  console.log(`  ${enProblems.length ? "✗" : "✓"} ② 영어 — 문서 ${enKeys.length}편 · 잎 ${enLeaves?.length ?? 0}개`);
  for (const problem of enProblems) console.log(`      ${problem}`);

  if (enProblems.length) {
    console.log("  · ③ 나머지 언어 — 아직 볼 차례가 아니다\n");
    failed += 1;
    blocked += 1;
    continue;
  }

  // ── ③ 나머지 언어 ──────────────────────────────────────────────────────
  const others = locales.filter((locale) => locale !== "ko" && locale !== "en");
  const localeProblems = [];

  for (const locale of others) {
    const source = read(path.join(dir, `${locale}.ts`));
    if (!source) {
      localeProblems.push(`${locale}: 파일이 없다`);
      continue;
    }
    const marker = `${locale.toUpperCase().replace(/-/g, "_")}_DOCS`;
    const leaves = leavesOf(source, marker);
    if (!leaves) {
      localeProblems.push(`${locale}: ${marker}를 읽지 못했다`);
      continue;
    }
    const notes = [];

    const blank = emptyLeaves(leaves);
    if (blank.length) notes.push(`빈 잎 ${blank.length}개`);

    // 한국어에만 두기로 한 문서가 이 언어에 되살아났는가.
    const revived = docKeysOf(source, marker).filter((key) => koreanOnly.has(key));
    if (revived.length) notes.push(`한국어 전용 문서가 있다: ${revived.join(", ")}`);

    if (leaves.length < enLeaves.length) notes.push(`잎 ${leaves.length}/${enLeaves.length}`);

    /**
     * **옮기지 않은 한글.**
     *
     * 원문(en)에 없던 한글 **낱말**이 새로 생겼으면 그 잎은 옮기지 않은 것이다.
     *
     * 잎 전체를 견주면 안 된다 — 예시 한글(`지은`·`소가`)은 **번역된 문장 안에** 들어 있어서
     * 문장이 다르면 잎도 다르다. 그러면 옳은 번역이 전부 결함으로 걸린다(처음에 그렇게 짜서
     * naminglink 21개가 통째로 빨간불이 났다). 번역기와 같이 **낱말 단위**로 본다.
     */
    const allowed = new Set(
      enLeaves.flatMap((leaf) => leaf.value.match(/[가-힣]+/g) ?? []),
    );
    const stray = leaves.flatMap((leaf) =>
      (leaf.value.match(/[가-힣]+/g) ?? []).filter((word) => !allowed.has(word)),
    );
    if (stray.length) notes.push(`한글 잔류 ${stray.length}개 (${[...new Set(stray)].slice(0, 3).join(", ")})`);

    if (notes.length) localeProblems.push(`${locale}: ${notes.join(" · ")}`);
  }

  console.log(`  ${localeProblems.length ? "✗" : "✓"} ③ 나머지 언어 — ${others.length - localeProblems.length}/${others.length}개 완성`);
  for (const problem of localeProblems.slice(0, 8)) console.log(`      ${problem}`);
  if (localeProblems.length > 8) console.log(`      … 그 밖 ${localeProblems.length - 8}개`);

  if (localeProblems.length) failed += 1;
  console.log();
}

/**
 * 대조군 — 판정이 살아 있는지 본다.
 *
 * **검사기가 아무것도 안 세면 늘 초록이다.** 잎을 뽑는 정규식이 자료 꼴 변화에 죽으면 이
 * 검사기 전체가 조용히 통과로 바뀐다. 그 자리를 여기서 한 번 겨눈다.
 */
const CONTROL = [
  "export const XX_DOCS = {",
  '  "a": { "title": "제목", "p": "", "caption": "" }',
  "}",
].join("\n");
const controlLeaves = leavesOf(CONTROL, "XX_DOCS") ?? [];
const controlOk =
  // 잎 셋을 다 뽑는가
  controlLeaves.length === 3 &&
  // 필수 자리(`p`)의 빈 값만 결함으로 세는가 — 선택값(`caption`)은 빼야 한다
  emptyLeaves(controlLeaves).length === 1 &&
  emptyLeaves(controlLeaves)[0].key === "p" &&
  // 한글이 든 잎을 알아보는가
  hangulLeaves(controlLeaves).length === 1;
console.log(`대조군: 빈 잎·한글 판정 ${controlOk ? "✓ 살아 있다" : "✗ 죽었다"}`);
if (!controlOk) failed += 1;

if (notStarted) {
  console.log(`\n미착수 ${notStarted}개 앱 — **통과가 아니라 아직 검사할 것이 없는 상태다.**`);
}
if (blocked) {
  console.log(`${blocked}개 앱은 앞 단계에서 멈췄다 — **뒤 단계를 통과로 세지 않았다.**`);
}

console.log(
  failed === 0 && notStarted === 0
    ? "\nALL PASS — 한국어 → 영어 → 21개 언어가 순서대로 다 찼다."
    : `\n실패 ${failed}건${notStarted ? ` · 미착수 ${notStarted}개 앱` : ""}`,
);

process.exit(failed === 0 && notStarted === 0 ? 0 : 1);
