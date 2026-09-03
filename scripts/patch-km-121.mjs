// **배치 121(밀러 `Meadow`~`Medicine`)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 다섯은 `kmm121.json` 에 있다 — meadow(초원) · measles(홍역) ·
// mechanic(기계공) · medal(훈장) · medicine(먹는 약).
//
//   eating(음식을 먹음)  ← 밀러 `Meals` 하나. 원문 각주가 「[123] See Eating.」다
//
// ## `Meat` 은 통째로 안 넣었다 (§31 곁가지 — 같은 그림 + 판별어를 못 가름)
//
// `meat`(고기)에 이미 「날고기를 먹음」·「익힌 고기를 먹음」이 있다. 밀러 `Meat` 의 두
// 문장은 **여성이 날고기/익힌 고기를 보는 것**인데, 날것·익힌 쪽 낱말은 기존이 쥐고 있고
// 남는 것은 성별뿐이라 **두 문장을 서로 가를 수 없다**(배치 55에서 좁힌 규칙).
//
// ## 「약」은 한 글자라 이름으로 안 쓴다 (배치 104의 「간」과 같은 수)
//
// 「약 3년」처럼 **뒤가 공백인 자리**가 있어 `isStandalone` 을 지난다 — 이름을
// 「먹는 약」으로 하고 조사를 붙인 꼴(「약을」·「약이」·「약은」)을 별칭으로 올렸다.
// 그 꼴은 「약속」·「약간」에는 안 걸린다(뒤가 한글이라 막힌다).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-121.mjs

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
  eating: {
    aliasesAdd: ["끼니를", "끼니가"],
    contextsAdd: {
      "끼니를 봄": "끼니",
    },
    contextsEnAdd: {
      "끼니를 봄": "meals trifling momentous engagements",
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
