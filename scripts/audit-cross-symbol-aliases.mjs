// **상징끼리 이름을 뺏고 있는 자리를 찾는다.**
//
// ## 왜 이 검사기가 필요한가 (2026-09-01)
//
// 배치를 넣을 때마다 새 상징의 이름을 기존 별칭에서 grep 하는 절차(⓪)를 지켰는데도,
// **이미 나 있던 상처**가 세 번 나왔다 — 그것도 셋 다 **찾으려던 것이 아니라 곁에서**
// 걸렸다.
//
//   배치 13   `ox`(소)가 「송아지」를 쥐고 있었다      → `calf` 는 배치 10에서 만든 상징
//   배치 17   `money`(돈)가 「현금」을 쥐고 있었다     → `cash` 는 배치 12에서 만든 상징
//   배치 19   `prisoner`(죄인)가 「포로」를 쥐고 있었다 → `captive` 는 배치 12에서 만든 상징
//
// **⓪ 는 새로 넣는 이름만 본다.** 지난 배치가 남긴 것은 훑지 않는다. 그래서 전수로
// 대조하는 자리가 따로 있어야 한다.
//
// ## 처음 돌려 보고 판정을 좁혔다 (2026-09-01)
//
// 전수로 돌리니 **335건**이 나왔다. 그런데 읽어 보니 **대부분이 결함이 아니다** —
// 한국어가 실제로 여럿을 가리키는 자리들이었다.
//
//   「단지」  → 동이 · 항아리 · 그릇     한국어가 실제로 셋 다 가리킨다
//   「수저」  → 숟가락 · 젓가락           실제로 둘 다다
//   「소복」  → 상복 · 흰옷               실제로 둘 다다
//   「독사」  → `snake`(뱀)가 별칭으로    독사는 뱀이다. 둘 다 뜨는 것이 옳다
//
// **늘 빨간불인 관문은 아무도 안 보게 된다**(CLAUDE.md §3-1에 그런 스크립트가 이미
// 둘 있다). 그래서 **빨간불은 「서로 이름을 맞바꿔 쥔 짝」에만** 낸다 — 그것은 판단이
// 필요 없는 결함이다. A 가 B 의 이름을, B 가 A 의 이름을 별칭으로 쥐면 **둘은 늘 함께
// 걸린다.** 상징이 둘인 뜻이 없어진다.
//
// 나머지는 **참고 목록**으로만 찍는다. 「누가 더 정확한가」는 사람이 정할 일이고,
// 그 판단을 코드가 대신할 수 없다.
//
// ## 무엇을 보나 — **정확히 같은 문자열만**
//
//   빨간불   A 의 term_ko(또는 term_en)를 B 가, B 의 것을 A 가 **서로** 쥔 짝
//   참고     한쪽만 쥔 자리 · 두 상징이 같은 별칭을 쓰는 자리
//
// **부분 문자열은 일부러 안 본다.** 「수녀원장」이 「수녀원」을 품는 것 같은 자리는
// 엔진이 이미 갈라 준다 — `isStandalone` 이 상징 이름 앞뒤에 한글이 붙으면 낱말
// 조각으로 보고 버리기 때문이다(「수녀원장에서」에서 「수녀원」은 뒤에 「장」이 붙어
// 안 걸린다). 부분 문자열까지 신고하면 정상 복합어가 무더기로 오탐이 된다 —
// `verify-dream-km` 이 예전에 그랬다가 `===` 로 좁힌 자리와 같은 판단이다.
//
// ## 이 검사기가 못 잡는 것 (CLAUDE.md §22 — 먼저 적는다)
//
//   · **뜻이 겹치는 것은 못 본다.** 「멸시」와 「모욕」처럼 이름이 다르면 통과한다.
//   · **한쪽이 더 정확한지 판단하지 않는다.** 겹친다는 것만 말하고, 누구에게 넘길지는
//     사람이 정한다.
//   · **판별어(`contexts`)는 안 본다.** 그쪽은 `verify-dream-km` 의 몫이다.
//   · **term_ko 끼리의 충돌은 안 본다.** 조립기가 이미 멈춘다(`LABEL_KO` 없으면 exit 1).
//
// 실행: node scripts/audit-cross-symbol-aliases.mjs
// 종료 코드: 0 겹침 없음 / 1 겹침 있음 / 2 검사할 것이 없음

import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const V2 = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");
const EXTRACT = path.resolve("apps/dreamslink/data-sources/extract");

if (!existsSync(V2)) {
  console.error(`사전 파일이 없다: ${V2}`);
  process.exit(2);
}
if (!existsSync(EXTRACT)) {
  console.error(`추출 디렉터리가 없다: ${EXTRACT}`);
  process.exit(2);
}

const v2 = JSON.parse(readFileSync(V2, "utf8"));
const termKo = new Map();
const termEn = new Map();
for (const s of v2.symbols) {
  termKo.set(s.id, String(s.term_ko ?? "").trim());
  termEn.set(s.id, String(s.term_en ?? "").trim().toLowerCase());
}

/** 별칭의 출처는 km 파일이다 — **세어 적지 않고 디렉터리를 읽는다**(CLAUDE.md §5). */
const kmFiles = readdirSync(EXTRACT)
  .filter((f) => /^kmm?\d+\.json$/.test(f))
  .sort();

if (kmFiles.length === 0) {
  console.error("km 파일이 하나도 없다 — 통과가 아니라 검사 안 됨이다.");
  process.exit(2);
}

/** id → {ko: Set, en: Set} */
const aliases = new Map();
let entryCount = 0;
for (const f of kmFiles) {
  const rows = JSON.parse(readFileSync(path.join(EXTRACT, f), "utf8"));
  for (const e of rows) {
    entryCount += 1;
    const bag = aliases.get(e.id) ?? { ko: new Set(), en: new Set(), file: f };
    for (const a of e.aliases ?? []) bag.ko.add(String(a).trim());
    for (const a of e.aliases_en ?? []) bag.en.add(String(a).trim().toLowerCase());
    aliases.set(e.id, bag);
  }
}

if (entryCount === 0) {
  console.error("항목이 0개다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}

const label = (id) => `${id}(${termKo.get(id) ?? "?"})`;

// ── ① 이름 뺏김 — A 의 이름을 B 가 별칭으로 쥐고 있다 ──────────────────────
const stolenKo = [];
const stolenEn = [];
for (const [id, name] of termKo) {
  if (!name) continue;
  for (const [other, bag] of aliases) {
    if (other === id) continue;
    if (bag.ko.has(name)) stolenKo.push({ owner: id, thief: other, word: name });
  }
}
for (const [id, name] of termEn) {
  if (!name) continue;
  for (const [other, bag] of aliases) {
    if (other === id) continue;
    if (bag.en.has(name)) stolenEn.push({ owner: id, thief: other, word: name });
  }
}

// ── ② 별칭 겹침 — 두 상징이 같은 별칭을 갖는다 ─────────────────────────────
function sharedAliases(pick) {
  const byWord = new Map();
  for (const [id, bag] of aliases) {
    for (const w of pick(bag)) {
      if (!byWord.has(w)) byWord.set(w, []);
      byWord.get(w).push(id);
    }
  }
  return [...byWord.entries()].filter(([, ids]) => ids.length > 1);
}
const sharedKo = sharedAliases((b) => b.ko);
const sharedEn = sharedAliases((b) => b.en);

// ── 보고 ───────────────────────────────────────────────────────────────────
console.log(`상징 ${v2.symbols.length}개 · km 항목 ${entryCount}개 · km 파일 ${kmFiles.length}개\n`);

const section = (title, rows, render) => {
  console.log(`■ ${title}: ${rows.length}건`);
  for (const r of rows) console.log(`  ${render(r)}`);
  if (rows.length) console.log("");
};

/**
 * **서로 맞바꿔 쥔 짝만 빨간불이다.** 한쪽만 쥔 것은 판단이 필요하다 —
 * 「독사」를 `snake` 가 갖는 것은 옳고, 「포로」를 `prisoner` 가 갖는 것은 틀렸다.
 * 그 차이는 뜻이 정하지 문자열이 정하지 않는다.
 */
function mutualPairs(rows) {
  const seen = new Set(rows.map((r) => `${r.owner}|${r.thief}`));
  const pairs = new Map();
  for (const r of rows) {
    if (!seen.has(`${r.thief}|${r.owner}`)) continue;
    const key = [r.owner, r.thief].sort().join("|");
    if (!pairs.has(key)) pairs.set(key, key.split("|"));
  }
  return [...pairs.values()];
}
const mutualKo = mutualPairs(stolenKo);
const mutualEn = mutualPairs(stolenEn);

section("서로 이름을 맞바꿔 쥔 짝(한국어)", mutualKo, ([a, b]) =>
  `${label(a)} ↔ ${label(b)} — 둘이 늘 함께 걸린다`);
section("서로 이름을 맞바꿔 쥔 짝(영어)", mutualEn, ([a, b]) =>
  `${label(a)} ↔ ${label(b)} — 둘이 늘 함께 걸린다`);

console.log("── 아래는 참고 목록이다(빨간불이 아니다). 뜻이 겹치는 것이 옳은 자리가 많다 ──\n");
section("한쪽이 남의 이름을 쥠(한국어)", stolenKo, (r) =>
  `「${r.word}」는 ${label(r.owner)} 의 이름인데 ${label(r.thief)} 가 별칭으로 쥐고 있다`);
section("한쪽이 남의 이름을 쥠(영어)", stolenEn, (r) =>
  `"${r.word}" 는 ${label(r.owner)} 의 이름인데 ${label(r.thief)} 가 별칭으로 쥐고 있다`);
section("별칭 겹침(한국어)", sharedKo, ([w, ids]) =>
  `「${w}」를 ${ids.map(label).join(" · ")} 가 함께 쓴다`);
section("별칭 겹침(영어)", sharedEn, ([w, ids]) =>
  `"${w}" 를 ${ids.map(label).join(" · ")} 가 함께 쓴다`);

console.log(
  `요약: 맞바꿔 쥔 짝 ${mutualKo.length + mutualEn.length}쌍 ·` +
    ` 참고 ${stolenKo.length + stolenEn.length + sharedKo.length + sharedEn.length}건`,
);

if (mutualKo.length + mutualEn.length > 0) {
  console.error("\n서로 이름을 맞바꿔 쥔 짝이 있다 — 둘이 같은 것이면 SYNONYMS 로 합치고, 다른 것이면 서로의 이름을 별칭에서 뺀다.");
  process.exit(1);
}
console.log("\n맞바꿔 쥔 짝 0쌍.");
process.exit(0);
