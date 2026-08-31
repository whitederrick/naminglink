// **`km*.json`에서 `-2` 접미사로 갈려 있던 매칭 키를 본 상징에 접는다.** (1회성 정리)
//
// ## 왜 필요한가
//
// 사전 조립기가 상징을 `term_ko`로 묶던 때에는, 같은 상징을 에이전트가 다르게 적으면
// (천/베, 도둑/도적, 쇠사슬/족쇄 …) **두 상징으로 갈렸다.** 뒤에 온 쪽이 `-2`를 받았고
// 매칭 키도 그 id로 따로 만들어졌다.
//
// 2026-08-31에 묶는 기준을 `term_en`으로 바꾸면서 이들이 **올바로 하나가 됐다.** 그러자
// `km*.json`의 `-2` 항목들이 갈 곳을 잃었다(`verify-dream-km.mjs`가 "사전에 없는 id"로
// 잡는다). **지우면 그 별칭·판별어를 통째로 잃으므로** 본 상징에 접는다.
//
// ## 하는 일
//
// `<id>-2` 항목의 `aliases`·`aliases_en`·`contexts`·`contexts_en`을 `<id>` 항목에 합치고
// `-2` 항목을 지운다. 짝이 다른 파일에 있을 수 있으므로 **아홉 파일을 한꺼번에** 읽는다.
//
// **키가 겹치면 멈춘다** — `contexts`는 상황 문구를 객체 키로 쓴다. 양쪽에 같은 키가
// 있는데 값이 다르면 하나가 조용히 사라지므로, 그런 자리는 사람이 봐야 한다.
//
// 실행: node scripts/merge-km-split-pairs.mjs           (무엇이 바뀌는지 보여만 준다)
//        node scripts/merge-km-split-pairs.mjs --apply   (실제로 쓴다)

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");
const FILES = ["km1", "km2", "km3", "km4", "km5", "km6", "km7", "km8", "km9"];
const APPLY = process.argv.includes("--apply");

const DICT = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");
const known = new Set(
  JSON.parse(readFileSync(DICT, "utf8")).symbols.map((s) => s.id),
);

/** 파일별로 읽어 둔다. 짝이 다른 파일에 있으므로 전체를 한 상에 올려야 한다. */
const loaded = new Map();
for (const f of FILES) {
  const p = path.join(DIR, `${f}.json`);
  loaded.set(f, { p, arr: JSON.parse(readFileSync(p, "utf8")) });
}

/** id → {파일, 항목} */
const index = new Map();
for (const [f, { arr }] of loaded) {
  for (const e of arr) {
    if (index.has(e.id)) {
      console.error(`같은 id가 두 파일에 있다: ${e.id} (${index.get(e.id).f}, ${f})`);
      process.exit(1);
    }
    index.set(e.id, { f, e });
  }
}

/**
 * **접을 대상은 「`-2`인데 사전에 그 id가 없는 것」뿐이다.**
 *
 * `iron-2`(쇠붙이)처럼 **사전에 실제로 남아 있는 `-2`는 건드리지 않는다** — 그것은 갈린
 * 잔재가 아니라 일부러 가른 상징이다. 접미사만 보고 지웠으면 쇠붙이의 매칭 키를 다리미에
 * 부어 넣을 뻔했다.
 */
const targets = [...index.keys()].filter((id) => /-2$/.test(id) && !known.has(id));

if (targets.length === 0) {
  console.error("접을 항목이 하나도 없다 — 통과가 아니라 할 일이 없는 것이다.");
  process.exit(2);
}

const plans = [];
const conflicts = [];

for (const id of targets) {
  const base = id.replace(/-2$/, "");
  const dup = index.get(id);
  const target = index.get(base);

  if (!target) {
    conflicts.push(`${id}: 접을 본 상징(${base})이 km 파일에 없다`);
    continue;
  }
  if (!known.has(base)) {
    conflicts.push(`${id}: 본 상징(${base})도 사전에 없다 — 사람이 봐야 한다`);
    continue;
  }

  // contexts 키 충돌은 사람이 봐야 한다(값이 다르면 하나가 사라진다).
  for (const field of ["contexts", "contexts_en"]) {
    for (const k of Object.keys(dup.e[field] ?? {})) {
      const have = target.e[field]?.[k];
      if (have !== undefined && have !== dup.e[field][k]) {
        conflicts.push(`${id}→${base}: ${field}의 「${k}」가 양쪽에 다르게 있다`);
      }
    }
  }

  plans.push({ id, base, dup, target });
}

if (conflicts.length > 0) {
  console.error("사람이 봐야 하는 자리:");
  for (const c of conflicts) console.error(`  ${c}`);
  process.exit(1);
}

const uniq = (a, b) => [...new Set([...(a ?? []), ...(b ?? [])])];

for (const { id, base, dup, target } of plans) {
  console.log(`\n${id} → ${base}  (${dup.f} → ${target.f})`);
  console.log(`  aliases    ${JSON.stringify(target.e.aliases)} + ${JSON.stringify(dup.e.aliases)}`);
  console.log(`  aliases_en ${JSON.stringify(target.e.aliases_en)} + ${JSON.stringify(dup.e.aliases_en)}`);
  const ctxN = Object.keys(dup.e.contexts ?? {}).length;
  const ctxEnN = Object.keys(dup.e.contexts_en ?? {}).length;
  if (ctxN || ctxEnN) console.log(`  contexts   +${ctxN}개 · contexts_en +${ctxEnN}개`);

  if (!APPLY) continue;

  target.e.aliases = uniq(target.e.aliases, dup.e.aliases);
  target.e.aliases_en = uniq(target.e.aliases_en, dup.e.aliases_en);
  target.e.contexts = { ...(target.e.contexts ?? {}), ...(dup.e.contexts ?? {}) };
  target.e.contexts_en = { ...(target.e.contexts_en ?? {}), ...(dup.e.contexts_en ?? {}) };

  const holder = loaded.get(dup.f);
  holder.arr.splice(holder.arr.indexOf(dup.e), 1);
}

if (!APPLY) {
  console.log(`\n접을 것 ${plans.length}개. 실제로 쓰려면 --apply`);
  process.exit(0);
}

// 원본이 CRLF다(§7).
const touched = new Set(plans.flatMap((p) => [p.dup.f, p.target.f]));
for (const f of touched) {
  const { p, arr } = loaded.get(f);
  writeFileSync(p, `${JSON.stringify(arr, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");
  console.log(`\n썼다: ${path.basename(p)} (항목 ${arr.length}개)`);
}

console.log(`\n${plans.length}개를 접었다. 확인: node scripts/verify-dream-km.mjs`);
