// km*.json(매칭 키 중간 산출물, 사람이 직접 재검증 완료 — WORKLOG_2026-08-28)를
// **엔진이 실제로 읽는 형식**으로 변환한다.
//
// 옛 사전(dream-symbols.ts 등)은 아직 건드리지 않는다 — 교체는 별도 단계다
// (docs/WORKLOG_2026-08-27-4.md §7 5번). 이 스크립트는 v2 전용 새 파일만 만든다:
//
// 1. `dream-symbols.v2.data.json`의 각 상징 `aliases` 필드를 km의 `aliases`(한국어)로 채운다
// 2. `dream-contexts-ko.v2.ts` — CONTEXT_KO_V2 (한국어 판별 표, dream-contexts-ko.ts와 같은 구조)
// 3. `dream-contexts.v2.ts` — CONTEXT_EN_V2 (영어 판별 표, dream-contexts.ts와 같은 구조)
// 4. `dream-aliases-en.v2.ts` — ALIASES_EN_V2 (영어 별칭 표, dream-aliases-en.ts와 같은 구조)
//
// 실행: node scripts/build-dream-match-tables-v2.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const LIB_DIR = path.resolve("apps/dreamslink/src/lib");
const V2_DATA = path.join(LIB_DIR, "dream-symbols.v2.data.json");
const EXTRACT_DIR = path.resolve("apps/dreamslink/data-sources/extract");

const v2 = JSON.parse(readFileSync(V2_DATA, "utf8"));
const symbolById = new Map(v2.symbols.map((s) => [s.id, s]));

/**
 * 주공해몽(`km1~9`)과 **밀러(`kmm1~7`)를 둘 다 읽는다.**
 *
 * 밀러를 합친 뒤에도 이 목록이 `km1~9`에 머물러 있으면 **밀러 265개 상징의 별칭·판별어가
 * 통째로 빠진 표가 만들어진다** — 그러고도 스크립트는 조용히 성공한다. 같은 자리를
 * `verify-dream-km.mjs`에서 한 번 겪었다(기본 목록이 옛것에 머물러 있던 것, 2026-08-31).
 */
const KM_GROUPS = [
  // **세어 적지 않는다** — 디렉터리에 있는 것을 전부 읽는다(CLAUDE.md §5).
  // 2026-09-01에 `kmm8.json`을 더했는데 목록이 `kmm7`에 머물러 있어 새 상징 18개의
  // 별칭·판별어가 통째로 빠졌다. 이 파일의 주석이 경고하던 바로 그 자리다.
  ...readdirSync(EXTRACT_DIR)
    .filter((f) => /^kmm?\d+\.json$/.test(f))
    .map((f) => f.replace(/\.json$/, ""))
    .sort((a, b) => a.length - b.length || a.localeCompare(b)),
];

let kmAll = [];
for (const g of KM_GROUPS) {
  kmAll.push(...JSON.parse(readFileSync(path.join(EXTRACT_DIR, `${g}.json`), "utf8")));
}

// **검사 0건은 통과가 아니다**(CLAUDE.md §1·§3).
if (kmAll.length === 0) {
  console.error("km 파일이 비어 있다 — 만들 것이 없다.");
  process.exit(2);
}

const seenIds = new Set();
const missingSymbol = [];
const contextKo = {};
const contextEn = {};
const aliasesEn = {};
let ctxKeyCount = 0;

for (const km of kmAll) {
  if (seenIds.has(km.id)) {
    console.error(`같은 id가 두 km 파일에: ${km.id}`);
    process.exit(1);
  }
  seenIds.add(km.id);

  const sym = symbolById.get(km.id);
  if (!sym) {
    missingSymbol.push(km.id);
    continue;
  }

  // ① 한국어 별칭을 상징에 채운다.
  sym.aliases = km.aliases ?? [];

  // ② 영어 별칭 표.
  if ((km.aliases_en ?? []).length > 0) {
    aliasesEn[km.id] = km.aliases_en;
  }

  // ③④ 문맥 판별 표 — km의 키(화면 문구)가 실제 meaning.context와 일치해야 한다.
  //
  // **키를 `상징id::문맥`으로 합성한다.** 옛 표(`dream-contexts-ko.ts`)는 문맥 문구
  // 하나만으로 전역 키를 삼는데, 서로 다른 두 상징이 우연히 같은 문구를 쓰면(실제로
  // 걸림 — 「해와 달이 한자리에서 만남」이 sun·moon 둘 다에 있다. 원문이 「日月」(해+달)
  // 을 함께 말하는 줄이라 두 상징 다 같은 문구로 옮겨진 것) **한쪽이 조용히 사라진다**
  // (JSON 객체 키 유일성, CLAUDE.md §22 각주와 같은 병). 합성 키로 아예 갈래를 없앤다.
  // 엔진에 연결할 때 `contextFor`가 `${symbol.id}::${display}`를 먼저 찾고 없으면
  // 옛 방식(문구만)으로 떨어지게 하면 된다 — 이 결정은 교체 단계에서 실제로 반영한다.
  const meaningCtxSet = new Set(sym.meanings.map((m) => m.context));
  for (const [ctx, disc] of Object.entries(km.contexts ?? {})) {
    if (!meaningCtxSet.has(ctx)) {
      console.error(`${km.id}: km의 문맥 「${ctx}」가 사전 의미에 없다`);
      process.exit(1);
    }
    contextKo[`${km.id}::${ctx}`] = disc;
    ctxKeyCount++;
  }

  /**
   * **한 상징 안에서 상황 문구가 겹치면 멈춘다.**
   *
   * 합성 키(`id::문맥`)를 써도 **같은 상징 안에서 문구가 겹치면 여전히 한 키**다. 두
   * 원문이 같은 상황을 다르게 해석하는 자리(「거울이 깨짐」이 주공해몽·밀러 양쪽에 있다)가
   * 그렇다 — 그러면 두 의미가 **같은 판별어를 받아 늘 동점**이 되고, 뒤의 것은 영영 못
   * 뽑힌다. 게다가 km 파일도 문구를 키로 쓰므로 판별어를 따로 적을 수조차 없다.
   *
   * 조용히 넘어가면 「판별어가 다 있다」는 커버리지 검사까지 통과한다(둘이 같은 키를
   * 보므로). 그래서 **여기서 멈추고 사람이 문구를 가르게 한다** — 대개 원문을 다시 읽으면
   * 실제로 다른 상황이다(밀러는 "깨진 거울을 **봄**", 주공해몽은 "거울이 **깨짐**").
   */
  const ctxSeen = new Map();
  for (const m of sym.meanings) {
    ctxSeen.set(m.context, (ctxSeen.get(m.context) ?? 0) + 1);
  }
  for (const [ctx, n] of ctxSeen) {
    if (n > 1) {
      console.error(
        `${km.id}: 상황 문구 「${ctx}」가 의미 ${n}개에 겹친다 — 판별어를 따로 줄 수 없다.`,
      );
      console.error(
        "  원문을 다시 읽고 문구를 갈라 적을 것(추출 파일의 context를 고친 뒤 사전을 다시 조립).",
      );
      process.exit(1);
    }
  }
  for (const [ctx, disc] of Object.entries(km.contexts_en ?? {})) {
    if (!meaningCtxSet.has(ctx)) {
      console.error(`${km.id}: km(en)의 문맥 「${ctx}」가 사전 의미에 없다`);
      process.exit(1);
    }
    contextEn[`${km.id}::${ctx}`] = disc;
  }
}

if (missingSymbol.length > 0) {
  console.error(`사전에 없는 km id: ${missingSymbol.join(", ")}`);
  process.exit(1);
}

// **판별이 필요한(의미 2개 이상) 상징의 문맥이 전부 표에 있는지 확인** — 옛 사전에서
// 이 커버리지가 빠져 매번 결함이 났다(§7 4번, `verify-dream-context-parity`류).
const missingCoverage = [];
for (const sym of v2.symbols) {
  if (sym.meanings.length <= 1) continue;
  for (const m of sym.meanings) {
    if (contextKo[`${sym.id}::${m.context}`] === undefined) missingCoverage.push(`${sym.id} :: ${m.context}`);
  }
}
if (missingCoverage.length > 0) {
  console.error(`판별이 필요한데 한국어 판별 표에 없는 문맥 ${missingCoverage.length}건:`);
  for (const line of missingCoverage.slice(0, 20)) console.error(`  ${line}`);
  process.exit(1);
}

// ── 파일로 쓴다 ────────────────────────────────────────────────────────────

// 원본이 CRLF다(CLAUDE.md §7).
const crlf = (s) => s.replace(/\n/g, "\r\n");

writeFileSync(V2_DATA, `${JSON.stringify(v2, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");

function writeTable(fileName, exportName, table, headerComment) {
  const body =
    `${headerComment}\n\n` +
    `export const ${exportName}: Record<string, string> = ${JSON.stringify(table, null, 2)};\n`;
  writeFileSync(path.join(LIB_DIR, fileName), crlf(body), "utf8");
}

writeTable(
  "dream-contexts-ko.v2.ts",
  "CONTEXT_KO_V2",
  contextKo,
  [
    "// v2 사전(원문 재구축) 전용 한국어 매칭 키.",
    "//",
    "// `scripts/build-dream-match-tables-v2.mjs`가 `data-sources/extract/km*.json`에서 만든다",
    "// (그 파일들은 사람이 직접 재검증했다 — `docs/WORKLOG_2026-08-28.md`).",
    "// 옛 `dream-contexts-ko.ts`와 같은 구조(화면 문구 → 판별어)이지만 **아직 엔진에",
    "// 연결하지 않았다** — 연결은 옛 사전 교체와 함께 하는 별도 단계다.",
  ].join("\n"),
);

writeTable(
  "dream-contexts.v2.ts",
  "CONTEXT_EN_V2",
  contextEn,
  [
    "// v2 사전(원문 재구축) 전용 영어 매칭 키. `dream-contexts-ko.v2.ts`의 영어판.",
    "// `scripts/build-dream-match-tables-v2.mjs`가 만든다.",
  ].join("\n"),
);

function writeAliasTable(fileName, exportName, table, headerComment) {
  const body =
    `${headerComment}\n\n` +
    `export const ${exportName}: Record<string, readonly string[]> = ${JSON.stringify(table, null, 2)};\n`;
  writeFileSync(path.join(LIB_DIR, fileName), crlf(body), "utf8");
}

writeAliasTable(
  "dream-aliases-en.v2.ts",
  "ALIASES_EN_V2",
  aliasesEn,
  [
    "// v2 사전(원문 재구축) 전용 영어 별칭. `dream-aliases-en.ts`의 v2판.",
    "// `scripts/build-dream-match-tables-v2.mjs`가 만든다.",
  ].join("\n"),
);

console.log(`상징 ${v2.symbols.length}개 중 별칭 채운 것 ${kmAll.filter((k) => (k.aliases ?? []).length > 0).length}개`);
console.log(`한국어 판별 문맥 ${Object.keys(contextKo).length}개 · 영어 판별 문맥 ${Object.keys(contextEn).length}개`);
console.log(`영어 별칭 표 ${Object.keys(aliasesEn).length}개 상징`);
console.log("\n→ dream-symbols.v2.data.json (aliases 반영)");
console.log("→ dream-contexts-ko.v2.ts · dream-contexts.v2.ts · dream-aliases-en.v2.ts");
