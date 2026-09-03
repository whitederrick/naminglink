// **배치 113(밀러 `Mallet`·`Malice`·`Malt`·`Man`)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 둘은 `kmm113.json` 에 있다 — malice(악의) · malt(맥아).
//
//   gavel(의사봉)  ← 밀러 `Mallet` 하나. ⓪ grep 이 「나무망치」를 EXACT 로 찍었다
//   man(남자)      ← 밀러 `Man` 넷.      「남자」가 EXACT
//
// ## `Mallet` 을 `gavel` 에 붙인 까닭
//
// 한국어로는 둘 다 「나무망치」다. 그 이름을 `gavel` 이 이미 쥐고 있으므로 새 상징을
// 세우면 「나무망치를 보았다」가 상징 둘에 걸린다(§25 곁가지). `hammer`(망치)에 붙이는
// 길도 있었으나 그쪽은 쇠망치라 원문의 그림과 멀다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-113.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

function fileOf(id) {
  for (const f of readdirSync(DIR)) {
    if (!/^km/.test(f)) continue;
    let rows;
    try {
      rows = JSON.parse(readFileSync(path.join(DIR, f), "utf8"));
    } catch {
      continue;
    }
    if (Array.isArray(rows) && rows.some((r) => r.id === id)) return f;
  }
  stop(`${id} 가 어느 km 파일에도 없다 — 파일이 바뀌었다.`);
}

const PATCHES = {
  gavel: {
    aliasesAdd: ["나무 망치", "나무망치를"],
    contextsAdd: {
      "나무망치를 봄": "나무망치 나무 망치",
    },
    contextsEnAdd: {
      "나무망치를 봄": "mallet unkind treatment disorder",
    },
  },
  man: {
    aliasesAdd: ["남자가", "남자를", "사내가"],
    contextsAdd: {
      "잘생기고 몸이 좋은 남자를 봄": "잘생긴 훤칠 미남",
      "못생기고 험상궂은 남자를 봄": "못생긴 험상궂 흉한 몰골",
      "여성이 잘생긴 남자를 봄": "여자가 여성이 처녀가",
      "여성이 못생긴 남자를 봄": "아내가 여인이",
    },
    contextsEnAdd: {
      "잘생기고 몸이 좋은 남자를 봄": "handsome supple vastly possessions",
      "못생기고 험상궂은 남자를 봄": "misshapen sour-visaged perplexities",
      "여성이 잘생긴 남자를 봄": "distinction offered",
      "여성이 못생긴 남자를 봄": "ugly experience considers",
    },
  },
};

let changed = 0;

for (const [id, patch] of Object.entries(PATCHES)) {
  const file = fileOf(id);
  const p = path.join(DIR, file);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (row.aliases.includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.aliases.push(w);
    changed++;
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (k in row.contexts) stop(`${id}: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.contexts[k] = v;
    changed++;
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (k in row.contexts_en) stop(`${id}: 영어 판별어 「${k}」가 이미 있다.`);
    row.contexts_en[k] = v;
    changed++;
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file} 고침 — ${id}`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [id, patch] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, fileOf(id)), "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 별칭 「${w}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
