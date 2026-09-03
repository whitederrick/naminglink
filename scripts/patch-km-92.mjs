// **배치 92(밀러 Ledger·Leeches)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 하나는 `kmm92.json` 에 있다 — ledger(장부).
//
//   leech(거머리)  ← 밀러 `Leeches` 셋. **판별어 표가 비어 있었고 별칭도 없었다**
//
// ## 안 넣은 문장 하나 — **같은 그림이 이미 들어와 있다**(§31 곁가지 · 배치 85 `Lance` 와 같다)
//
//   Leeches 「To dream of leeches, foretells that enemies will run over your interests.」
//           → 주공해몽 「거머리를 봄」과 **같은 그림**이다. `work` 가 달라 이름을 갈라야 하는데,
//             갈라 봐야 둘 다 「거머리를 봄」이라 판별어를 나눌 수 없다.
//             **커버리지에서 이 문장이 비는 것이 옳다.**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-92.mjs

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
  leech: {
    aliasesAdd: ["거머리들"],
    contextsAdd: {
      // 판별어 표가 비어 있었다 — 기존 의미까지 채운다. 그것이 얼린 기본값이므로 좁게.
      "거머리를 봄": "꿈틀 달라붙어",
      "병을 고치려고 거머리를 몸에 붙임": "붙였 치료",
      "남의 몸에 거머리를 붙이는 것을 봄": "남의 남에게",
      "거머리에게 물림": "물렸 물어",
    },
    contextsEnAdd: {
      "거머리를 봄": "worm crawling",
      "병을 고치려고 거머리를 몸에 붙임": "medicinal purposes serious escape",
      "남의 몸에 거머리를 붙이는 것을 봄": "others sickness trouble friends",
      "거머리에게 물림": "bite danger unexpected heed warning",
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
  for (const [k, [before, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
    row.contexts[k] = after;
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
  for (const [k, [, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== after) stop(`확인 실패: ${id} 의 「${k}」가 안 바뀌었다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
