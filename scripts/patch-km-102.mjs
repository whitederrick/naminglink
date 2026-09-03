// **배치 102(밀러 `Limp`·`Linen`·`Linseed Oil`)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 둘은 `kmm102.json` 에 있다 — linen(린넨) · linseed-oil(아마씨기름).
//
//   crippled(몸이 성치 않은 이)  ← 밀러 `Limp` 둘
//
// ## `Limp` 는 새 상징을 세우지 않았다
//
// ⓪ grep 이 「절뚝」을 이 상징의 별칭 셋(「절뚝이는」·「절뚝거리는」·「절뚝였다」)으로 찍었다.
// 원문 각주도 「[114] See Cripple and Lamed.」다 — 그 둘이 이미 이 상징에 들어와 있다.
// 새로 세웠으면 「절뚝이는 사람을 보았다」가 상징 둘에 걸렸을 것이다(§25 곁가지).
//
// ## 그 상징의 별칭을 한 줄씩 읽고 빠진 활용형을 채웠다 (§29 곁가지 ①)
//
// 「절뚝거렸다」·「절뚝거리며」·「절뚝이며」가 없었다 — 있던 것은 「절뚝이는」·「절뚝거리는」·
// 「절뚝였다」뿐이라 **「절뚝거렸다」가 심어진 뒤로 한 번도 안 걸렸다.**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-102.mjs

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
  crippled: {
    // 「다리를 저는」은 **옛 상처다** — 기존 의미의 화면 문구가 「여자가 다리를 저는 이를
    // 봄」인데 그 말이 별칭에 없어서 그 꼴로는 한 번도 안 걸렸다(⑳ · §29 곁가지 ①).
    aliasesAdd: ["절뚝거렸다", "절뚝거리며", "절뚝이며", "다리를 절었다", "다리를 저는", "다리를 절며"],
    contextsAdd: {
      // 「내가」는 기존 「아내가」의 부분 문자열이라 안 쓴다(배치 43 — 새로 넣는 쪽만 간다)
      "제가 절뚝이며 걸음": "제가 나는 걸을 걸으며",
      "남이 절뚝이는 것을 봄": "남이 남들이 다른 사람이",
    },
    contextsEnAdd: {
      "제가 절뚝이며 걸음": "walk unexpectedly detracting",
      "남이 절뚝이는 것을 봄": "others limping offended conduct",
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
