// 배치 142(밀러 `Oak`~`Ocean`) — 기존 하나를 손본다.
//
//   sea(바다) ← 밀러 `Ocean` 넷. **판별어 표가 비어 있었다**(스물두 번째,
//              의미가 하나뿐이던 상징). 「바다」·「대양」이 이미 별칭이었다.
//              기존 의미(주공해몽 「강과 바다가 넘쳐 불어남」)의 판별어도 채운다
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-142.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

function fileOf(id) {
  for (const f of readdirSync(DIR)) {
    if (!/^kmm?\d+\.json$/.test(f)) continue;
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
  sea: {
    aliasesAdd: [],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "강과 바다가 넘쳐 불어남": "넘쳐 불어나",
      "바다가 잔잔함": "잔잔한 뱃사람 항해",
      "먼바다에서 파도가 배를 침": "먼바다 파도가 배를",
      "물가에서 파도가 부서지는 것을 봄": "물가에서 부서지는",
      "바다가 얕아 걸어 들어갈 만함을 봄": "얕아 걸어 들어갈",
    },
    contextsEnAdd: {
      "강과 바다가 넘쳐 불어남": "overflow great fortune",
      "바다가 잔잔함": "calm propitious sailor voyage",
      "먼바다에서 파도가 배를 침": "far out lash ship disaster",
      "물가에서 파도가 부서지는 것을 봄": "shore foaming narrow escape enemies",
      "바다가 얕아 걸어 들어갈 만함을 봄": "shallow wading bottom commingling",
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
