// **갈라 놓은 상징의 매칭 키를 km 파일에서도 갈라낸다.** (1회성 정리)
//
// 2026-08-31에 사전 조립기가 동음이의어를 갈랐다(절 = 절하기/사찰, 배 = 과일/선박).
// 그런데 `km*.json`은 **갈리기 전에 만들어진 것**이라, 한 항목 안에 두 상징의 문맥이
// 섞여 있다:
//
//   km5 buddhist-temple  ← 「웃어른께 몸소 절함」(身拜尊長)이 사찰 항목 안에 있다
//   km9 boat             ← 「배를 먹음」(食梨者)이 선박 항목 안에 있다
//
// 그대로 두면 **사찰을 찾는 판별어가 절하는 꿈에 붙고**, 배를 먹는 꿈이 선박으로 간다.
// 문맥을 옮기고, 새 상징에는 별칭을 새로 적는다.
//
// 실행: node scripts/split-km-for-new-symbols.mjs [--apply]

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");
const APPLY = process.argv.includes("--apply");

/**
 * 무엇을 어디로 옮기는가.
 *
 * `aliases`는 **새로 적는다** — 옛 항목의 별칭은 남는 쪽(사찰·선박)의 것이라 옮길 것이
 * 없다. 한 글자 상징(절·배)의 별칭에 한 글자를 넣지 않는다(`verify-dream-km.mjs`가
 * 잡는 규칙이다 — 한 글자는 아무 문장에나 걸린다).
 */
const SPLITS = [
  {
    from: { file: "km5", id: "buddhist-temple" },
    to: { file: "km5", id: "bowing" },
    contexts: ["웃어른께 몸소 절함", "남에게 머리를 조아려 절함"],
    aliases: ["절하", "큰절", "맞절", "절을 올리"],
    aliases_en: ["bow", "bowed", "bowing down", "kowtow"],
  },
  {
    from: { file: "km9", id: "boat" },
    to: { file: "km9", id: "pear" },
    contexts: ["배를 먹음"],
    aliases: ["배를 먹", "서양배", "돌배", "배즙"],
    aliases_en: ["pear", "pears", "eating a pear"],
  },
];

const DICT = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");
const known = new Set(JSON.parse(readFileSync(DICT, "utf8")).symbols.map((s) => s.id));

const loaded = new Map();
for (const f of ["km1", "km2", "km3", "km4", "km5", "km6", "km7", "km8", "km9"]) {
  const p = path.join(DIR, `${f}.json`);
  loaded.set(f, { p, arr: JSON.parse(readFileSync(p, "utf8")) });
}

let moved = 0;

for (const spec of SPLITS) {
  const src = loaded.get(spec.from.file).arr.find((e) => e.id === spec.from.id);
  if (!src) { console.error(`없는 항목: ${spec.from.file}/${spec.from.id}`); process.exit(1); }
  if (!known.has(spec.to.id)) { console.error(`사전에 없는 새 id: ${spec.to.id}`); process.exit(1); }
  if (loaded.get(spec.to.file).arr.some((e) => e.id === spec.to.id)) {
    console.error(`이미 있는 id: ${spec.to.id} — 두 번 돌린 것이다`);
    process.exit(1);
  }

  const entry = {
    id: spec.to.id,
    aliases: spec.aliases,
    aliases_en: spec.aliases_en,
    contexts: {},
    contexts_en: {},
  };

  for (const ctx of spec.contexts) {
    // **옮길 자리가 실제로 있는지 먼저 본다**(CLAUDE.md §10 #44 — 조용한 성공이 제일 비싸다).
    if (!(ctx in src.contexts)) {
      console.error(`${spec.from.id}에 없는 문맥: 「${ctx}」 — 멈춘다`);
      process.exit(1);
    }
    entry.contexts[ctx] = src.contexts[ctx];
    entry.contexts_en[ctx] = src.contexts_en[ctx];
    delete src.contexts[ctx];
    delete src.contexts_en[ctx];
    moved++;
    console.log(`  「${ctx}」 : ${spec.from.id} → ${spec.to.id}`);
  }

  console.log(`${spec.to.id} 새 항목 — 별칭 ${entry.aliases.length}개 · 문맥 ${spec.contexts.length}개`);
  if (APPLY) loaded.get(spec.to.file).arr.push(entry);
}

if (moved === 0) {
  console.error("옮긴 것이 0건이다 — 통과가 아니라 안 된 것이다.");
  process.exit(1);
}

if (!APPLY) {
  console.log(`\n옮길 문맥 ${moved}개. 실제로 쓰려면 --apply`);
  process.exit(0);
}

for (const f of new Set(SPLITS.flatMap((s) => [s.from.file, s.to.file]))) {
  const { p, arr } = loaded.get(f);
  writeFileSync(p, `${JSON.stringify(arr, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");
  console.log(`썼다: ${path.basename(p)} (항목 ${arr.length}개)`);
}

console.log(`\n확인: node scripts/verify-dream-km.mjs`);
