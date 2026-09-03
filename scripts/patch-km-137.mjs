// 배치 137(밀러 `Mustard`·`Mute`·`Myrrh`·`Myrtle`·`Mystery`) — 기존 하나를 손본다.
//
//   dumb(말을 못 함) ← 밀러 `Mute` 하나. **판별어 표가 비어 있었다**(열네 번째, 배치 35)
//
// 「To dream that you are a mute」는 안 넣는다 — 같은 그림이 이 상징의 밀러 `Dumb` 의미
// 「말을 못 하게 됨」에 이미 있다.
//
// ## 기본값은 옛것 그대로 얼린다 (§30)
//
// `m137.json` 이 `Dumb` 이 든 파일보다 앞서 정렬된다. 밀러 `Mute` 쪽은
// 「말 못 하는 이와 이야기를 나눔」이라는 좁은 그림이다.
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-137.mjs

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
  dumb: {
    aliasesAdd: ["말 못 하는", "벙어리와"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "말을 못 하게 됨": "말문 목소리 벙어리가",
      "말 못 하는 이와 이야기를 나눔": "이야기 나눴 말을 걸었다",
    },
    contextsEnAdd: {
      "말을 못 하게 됨": "persuade others",
      "말 못 하는 이와 이야기를 나눔": "converse unusual crosses higher tendered",
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
