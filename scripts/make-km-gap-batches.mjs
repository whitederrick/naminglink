// **판별어가 빠진 의미만 모아 배치로 만든다.**
//
// ## 왜 이런 구멍이 생겼나
//
// 매칭 키를 두 갈래로 나눠 만들었다 — `km1~km9`는 주공해몽 상징을, `kmm1~kmm7`은
// **밀러 전용** 상징을 맡았다. 그런데 **두 원문에 다 있는 상징 34개**는 어느 쪽도 그
// 밀러 의미를 맡지 않았다. km 배치는 밀러가 합쳐지기 전에 만들어졌고, kmm 배치는
// "키가 없는 상징"만 골랐기 때문이다(그 34개는 km에 항목이 이미 **있었다**).
//
// `verify-dream-km.mjs`는 이것을 못 잡는다 — **결과에 있는 것만 훑기 때문**이다
// (CLAUDE.md §24). 커버리지를 따로 세어서야 142개 의미가 드러났다.
//
// ## 이 배치가 앞의 것들과 다른 점
//
// 채울 자리가 **이미 판별어가 있는 상징 안**이다. 그래서 새 판별어는 그 상징의
// **기존 판별어와도 겹치면 안 된다.** 배치 입력에 기존 판별어를 함께 실어 보낸다.
//
// 실행: node scripts/make-km-gap-batches.mjs [배치수]
// 산출: apps/dreamslink/data-sources/km-batches/gap<N>.json

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const DICT = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");
const EXTRACT = path.resolve("apps/dreamslink/data-sources/extract");
const OUT_DIR = path.resolve("apps/dreamslink/data-sources/km-batches");
const WANT = Number(process.argv[2] ?? 3);

const KM_FILES = [
  "km1", "km2", "km3", "km4", "km5", "km6", "km7", "km8", "km9",
  "kmm1", "kmm2", "kmm3", "kmm4", "kmm5", "kmm6", "kmm7",
];

const dict = JSON.parse(readFileSync(DICT, "utf8"));

const byId = new Map();
for (const f of KM_FILES) {
  for (const e of JSON.parse(readFileSync(path.join(EXTRACT, `${f}.json`), "utf8"))) {
    byId.set(e.id, { ...e, _file: f });
  }
}

const gaps = [];
for (const s of dict.symbols) {
  const e = byId.get(s.id);
  if (!e || s.meanings.length < 2) continue;
  const missing = s.meanings.filter(
    (m) => !(m.context in (e.contexts ?? {})) || !(m.context in (e.contexts_en ?? {})),
  );
  if (missing.length === 0) continue;
  gaps.push({
    id: s.id,
    term_ko: s.term_ko,
    term_en: s.term_en,
    label_ko: s.label_ko,
    key_file: e._file,
    aliases: e.aliases ?? [],
    aliases_en: e.aliases_en ?? [],
    // **이미 있는 판별어** — 새로 짓는 것이 이것들과 겹치면 안 된다.
    existing_contexts: e.contexts ?? {},
    existing_contexts_en: e.contexts_en ?? {},
    missing_meanings: missing.map((m) => ({
      context: m.context,
      interpretation_ko: m.interpretation_ko,
      polarity: m.polarity,
      work: m.cites[0].work,
    })),
  });
}

if (gaps.length === 0) {
  console.error("판별어가 빠진 의미가 하나도 없다 — 만들 배치가 없다.");
  process.exit(2);
}

const totalMissing = gaps.reduce((n, g) => n + g.missing_meanings.length, 0);

/**
 * **키 파일 단위로 나눈다 — 한 파일은 한 배치만 건드린다.**
 *
 * 채우는 일은 새 파일을 쓰는 것이 아니라 **이미 있는 `km*.json`을 고치는 것**이다.
 * 두 에이전트가 같은 파일을 동시에 고치면 나중에 쓴 쪽이 앞의 것을 덮어써서 **한쪽
 * 작업이 통째로 사라진다** — 그러고도 검사기는 통과한다(남은 것은 다 옳으므로).
 * 그래서 파일 소유를 겹치지 않게 가른다.
 */
const byFile = new Map();
for (const g of gaps) {
  if (!byFile.has(g.key_file)) byFile.set(g.key_file, []);
  byFile.get(g.key_file).push(g);
}

/** 파일 묶음을 「채울 의미 수」가 고르도록 큰 것부터 가장 적은 배치에 넣는다. */
const fileGroups = [...byFile.entries()]
  .map(([file, list]) => ({ file, list, n: list.reduce((k, g) => k + g.missing_meanings.length, 0) }))
  .sort((a, b) => b.n - a.n);

const bins = Array.from({ length: WANT }, () => ({ list: [], n: 0, files: [] }));
for (const fg of fileGroups) {
  const bin = bins.reduce((a, b) => (a.n <= b.n ? a : b));
  bin.list.push(...fg.list);
  bin.files.push(fg.file);
  bin.n += fg.n;
}

const batches = bins.filter((b) => b.list.length > 0).map((b) => b.list);

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

let n = 0;
for (const b of batches) {
  n++;
  const p = path.join(OUT_DIR, `gap${n}.json`);
  writeFileSync(p, `${JSON.stringify(b, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");
  const miss = b.reduce((k, g) => k + g.missing_meanings.length, 0);
  console.log(`gap${n}.json: 상징 ${b.length}개 · 채울 의미 ${miss}개 · 키 파일 ${[...new Set(b.map((g) => g.key_file))].join(",")}`);
}

console.log(`\n상징 ${gaps.length}개 · 빠진 의미 ${totalMissing}개를 ${n}개 배치로 나눴다.`);
