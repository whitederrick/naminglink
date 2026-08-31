// 새 해몽 사전의 **모든 의미가 진짜 원문 인용을 갖고 있는지** 대조한다.
//
// ## 왜 이 검사기가 사전보다 먼저 있어야 하는가
//
// 옛 사전은 `source: "tradition"`이라는 **문자열 라벨**로 근거를 표시했다. 라벨은
// 적기만 하면 참이 되므로 거짓말이 가능했고, 실제로 347개 의미 중 345개가
// "전통 근거 확인됨"이었는데 166개는 근거가 아예 없었다(CLAUDE.md §21).
//
// 새 구조는 인용문 자체(`cite.original`)를 필수로 두고, **그 문자열이 원문 파일에
// 실제로 있는지 대조한다.** 지어낸 인용은 대조에서 걸린다 — 라벨과 달리 위조할 수 없다.
//
// 관문은 비싼 단계 **앞**에 둔다(CLAUDE.md §11). 항목을 채우기 전에 이 검사기가
// 먼저 돌아야, 채우는 과정에서 지어낸 것이 그 자리에서 걸린다.
//
// 실행: node scripts/verify-dream-cite.mjs [파일...]
//        (인자 없으면 apps/dreamslink/data-sources/extract/result*.json 전부)
//        node scripts/verify-dream-cite.mjs --self-test
//
// 종료 코드: 0 전부 통과 / 1 위반 있음 / 2 검사할 것이 없음(= 통과가 아니다)

import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const ZHOUGONG = path.resolve(
  "apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json",
);
const MILLER = path.resolve(
  "apps/dreamslink/data-sources/miller-1901-parsed.json",
);
const EXTRACT_DIR = path.resolve("apps/dreamslink/data-sources/extract");

// ── 원문을 대조 가능한 형태로 읽는다 ────────────────────────────────────────

const zhougong = JSON.parse(readFileSync(ZHOUGONG, "utf8"));
/** 원문 줄 전체를 집합으로. 인용은 이 안에 **글자 그대로** 있어야 한다. */
const ZHOUGONG_LINES = new Set(zhougong.entries.map((e) => e.text));
/** 갈래 이름 — `cite.locator`가 실재하는 갈래인지도 본다. */
const ZHOUGONG_CATS = new Set(zhougong.entries.map((e) => e.category));

let MILLER_HEADWORDS = new Set();
let millerText = "";
if (existsSync(MILLER)) {
  const miller = JSON.parse(readFileSync(MILLER, "utf8"));
  MILLER_HEADWORDS = new Set(miller.entries.map((e) => e.headword));
  // 밀러는 문단 단위 인용이라 원문 전체를 이어 붙여 부분 문자열로 본다.
  millerText = miller.entries.map((e) => e.text).join("\n");
}

const POLARITIES = new Set(["positive", "negative", "neutral"]);
const CATEGORIES = new Set([
  "animal", "nature", "object", "action",
  "body", "person", "place", "color", "number",
]);

/** 공백·개행만 다른 것은 같은 인용으로 본다(줄바꿈이 낀 밀러 문장 때문). */
const squash = (s) => s.replace(/\s+/g, " ").trim();
const millerFlat = squash(millerText);

/**
 * 항목 하나를 검사한다. **위반 사유를 배열로 돌려준다** — 빈 배열이면 통과.
 *
 * 사유를 모아서 돌려주는 이유는 첫 위반에서 멈추면 한 번에 하나씩만 고치게 되기 때문이다.
 */
function violationsOf(item, index) {
  const at = `[${index}]`;
  const bad = [];

  for (const field of ["term_ko", "term_en", "context", "interpretation_ko"]) {
    if (!item[field] || typeof item[field] !== "string" || !item[field].trim()) {
      bad.push(`${at} ${field} 없음`);
    }
  }
  if (!POLARITIES.has(item.polarity)) bad.push(`${at} polarity 값이 이상함: ${item.polarity}`);
  if (!CATEGORIES.has(item.category)) bad.push(`${at} category 값이 이상함: ${item.category}`);

  const cite = item.cite;
  if (!cite || typeof cite !== "object") {
    bad.push(`${at} cite 없음 — 근거 없는 항목은 사전에 못 들어간다`);
    return bad;
  }
  if (!cite.original || !String(cite.original).trim()) {
    bad.push(`${at} cite.original 없음`);
    return bad;
  }

  const original = String(cite.original);

  if (cite.work === "zhougong") {
    // **원문에 그 줄이 글자 그대로 있어야 한다.** 지어낸 인용은 여기서 걸린다.
    if (!ZHOUGONG_LINES.has(original)) {
      bad.push(`${at} 주공해몽 원문에 없는 인용: 「${original}」`);
    }
    if (cite.locator && !ZHOUGONG_CATS.has(cite.locator)) {
      bad.push(`${at} 없는 갈래: ${cite.locator}`);
    }
  } else if (cite.work === "miller") {
    if (!millerFlat.includes(squash(original))) {
      bad.push(`${at} 밀러 원문에 없는 인용: "${original.slice(0, 40)}…"`);
    }
    if (cite.locator && !MILLER_HEADWORDS.has(cite.locator)) {
      bad.push(`${at} 없는 표제어: ${cite.locator}`);
    }
  } else {
    bad.push(`${at} cite.work 은 zhougong 또는 miller 여야 한다: ${cite.work}`);
  }

  return bad;
}

// ── 대조군 — 이 검사기가 실제로 위조를 잡는지 먼저 본다 ─────────────────────

function selfTest() {
  console.log("대조군 — 검사기가 위조 인용을 잡는가\n");
  const realLine = zhougong.entries[0].text;
  const base = {
    term_ko: "시험", term_en: "test", context: "시험용",
    interpretation_ko: "시험용", polarity: "neutral", category: "object",
  };
  const cases = [
    ["진짜 인용은 통과해야 한다", { ...base, cite: { work: "zhougong", original: realLine } }, false],
    ["지어낸 인용은 걸려야 한다", { ...base, cite: { work: "zhougong", original: "龍飛九天大吉利" } }, true],
    ["한 글자만 바꿔도 걸려야 한다", { ...base, cite: { work: "zhougong", original: realLine.slice(0, -1) + "凶" } }, true],
    ["cite 자체가 없으면 걸려야 한다", { ...base }, true],
    ["없는 갈래를 적으면 걸려야 한다", { ...base, cite: { work: "zhougong", original: realLine, locator: "없는갈래" } }, true],
  ];

  let failed = 0;
  for (const [label, item, shouldFail] of cases) {
    const got = violationsOf(item, 0).length > 0;
    const ok = got === shouldFail;
    if (!ok) failed++;
    console.log(`  ${ok ? "✓" : "✗"} ${label}`);
  }
  console.log(failed === 0 ? "\n대조군 통과 — 이 검사기는 위조를 잡는다." : `\n대조군 실패 ${failed}건 — 검사기 자체가 고장났다.`);
  process.exit(failed === 0 ? 0 : 1);
}

if (process.argv.includes("--self-test")) selfTest();

// ── 본 검사 ────────────────────────────────────────────────────────────────

let files = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (files.length === 0) {
  if (!existsSync(EXTRACT_DIR)) {
    console.error(`검사할 디렉터리가 없다: ${EXTRACT_DIR}`);
    process.exit(2);
  }
  files = readdirSync(EXTRACT_DIR)
    .filter((f) => /^(r\d+|result-tomb)\.json$/.test(f))
    .sort()
    .map((f) => path.join(EXTRACT_DIR, f));
}

// **검사 0건은 통과가 아니라 「검사 안 됨」이다**(CLAUDE.md §1·§3).
if (files.length === 0) {
  console.error("검사할 파일이 하나도 없다 — 통과가 아니라 검사 안 됨이다.");
  process.exit(2);
}

let total = 0;
let violations = 0;
const perFile = [];

for (const file of files) {
  if (!existsSync(file)) {
    console.error(`파일 없음: ${file}`);
    process.exit(2);
  }
  let items;
  try {
    items = JSON.parse(readFileSync(file, "utf8"));
  } catch (e) {
    console.error(`JSON 깨짐: ${path.basename(file)} — ${e.message}`);
    process.exit(1);
  }
  if (!Array.isArray(items)) {
    console.error(`배열이 아님: ${path.basename(file)}`);
    process.exit(1);
  }

  const bad = [];
  items.forEach((item, i) => bad.push(...violationsOf(item, i)));
  total += items.length;
  violations += bad.length;
  perFile.push({ file: path.basename(file), count: items.length, bad });
}

for (const r of perFile) {
  console.log(`${r.file}: 항목 ${r.count}개${r.bad.length ? ` · 위반 ${r.bad.length}건` : " · 통과"}`);
  for (const line of r.bad.slice(0, 20)) console.log(`    ${line}`);
  if (r.bad.length > 20) console.log(`    … 외 ${r.bad.length - 20}건`);
}

console.log(`\n합계: 항목 ${total}개 · 위반 ${violations}건`);

if (total === 0) {
  console.error("항목이 0개다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}
if (violations > 0) {
  console.error("\n근거가 확인되지 않은 항목이 있다. 사전에 넣지 않는다.");
  process.exit(1);
}
console.log("모든 항목의 인용이 원문에서 확인됐다.");
process.exit(0);
