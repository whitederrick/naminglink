// **배치 123(밀러 `Mending`~`Metamorphose`)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 다섯은 `kmm123.json` 에 있다 — mending(옷 깁기) · mercury(수은) ·
// meshes(그물코) · message(기별) · metamorphose(탈바꿈).
//
//   jolly(흥겨움)  ← 밀러 `Merry` 하나. 「흥겨움」이 EXACT 다
//
// ## 「~하다」로 쓰이는 이름은 **이번에는 먼저** 활용형을 올렸다
//
// 배치 109·116·117·122에서 다섯 번 밟은 자리다(CLAUDE.md §29 곁가지 ①). `mending`
// (「기웠다」·「깁는」·「기워」·「꿰맸다」)과 `metamorphose`(「탈바꿈하는」·「탈바꿈했다」·
// 「탈바꿈하고」)는 프로브를 돌리기 **전에** 적었다.
//
// ## 「그물코」는 `net`(그물)과 안 부딪친다
//
// 「그물코에 얽혔다」에서 「그물」 뒤의 「코」가 한글이라 `isStandalone` 이 막는다.
//
// ## 「전갈」을 이름으로 쓰지 않았다
//
// 밀러 `Scorpion` 이 아직 안 들어왔는데 그 한국어 이름이 「전갈」이다 — 나중에 부딪칠
// 자리라 이름을 「기별」로 하고 「전갈」·「소식」은 별칭으로만 올렸다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-123.mjs

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
  jolly: {
    aliasesAdd: ["흥겨운 자리", "들뜬"],
    contextsAdd: {
      "흥겨운 자리에 있음": "자리에 함께 있었",
    },
    contextsEnAdd: {
      "흥겨운 자리에 있음": "merry company events engage profitable",
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
