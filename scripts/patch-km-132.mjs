// 배치 132(밀러 `Mortgage`·`Morose`·`Mortification`·`Moses`·`Mosquito`·`Moss`)
//
//   mosquito(모기) ← 밀러 `Mosquito` 둘. **의미가 하나뿐이라 판별어 표가 비어 있었다**
//                    (이 세션 아홉 번째, 배치 35) — 기존 의미부터 채운다
//
// ## 기본값이 바뀐다 (§30)
//
//   mosquito  모기가 사람을 묾 → 모기를 봄   **바꿔서 얼린다**
//
// 옛것은 주공해몽의 좁은 그림이고, 밀러의 「모기를 봄」이 막연한 모기 꿈이 떨어질 자리다.
// 얼린 자리의 판별어는 좁게 적었다(「날아다 앵앵」).
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-132.mjs

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
  mosquito: {
    aliasesAdd: ["모기가", "모기를"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "모기가 사람을 묾": "물렸 물었 물어",
      "모기를 봄": "날아다 앵앵",
      "모기를 죽임": "죽였 잡았 때려",
    },
    contextsEnAdd: {
      "모기가 사람을 묾": "bitten stung",
      "모기를 봄": "strive vain impregnable sly secret",
      "모기를 죽임": "kill eventually overcome obstacles bliss",
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
