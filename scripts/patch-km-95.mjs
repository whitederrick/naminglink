// **배치 95(밀러 Lentil~Leprosy)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 둘은 `kmm95.json` 에 있다 — lentil(렌즈콩) · leprosy(나병).
//
//   leopard(표범)  ← 밀러 `Leopard` 다섯. **별칭이 하나도 없었다**
//
// ## 「문둥병」은 안 쓴다 (§31)
//
// 옛말은 사람을 낮추는 말이다. 이름은 「나병」으로 하고 별칭에 「한센병」을 올렸다 —
// **병 이름 자체는 빼지 않는다**(꿈의 그림이 그 병이다). 낮추는 낱말만 안 쓴다.
//
// ## 「표범을 죽임」과 기존 「표범을 잡음」은 갈랐다
//
// `work` 가 다르므로(밀러 ↔ 주공해몽) 이름을 갈라야 한다(§31 곁가지). 기존이 「잡았·사로잡·
// 붙잡·포획」을 쥐고 있어 새 쪽은 「죽였」 하나로 갈린다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-95.mjs

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
  leopard: {
    aliasesAdd: ["표범이", "표범을", "표범 가죽"],
    contextsAdd: {
      "표범이 덤벼듦": "덤벼 달려들 덮쳤",
      "표범을 죽임": "죽였",
      "우리에 갇힌 표범을 봄": "우리에 갇힌 철창",
      "표범이 제게서 달아나려 함": "달아나 도망",
      "표범 가죽을 봄": "가죽",
    },
    contextsEnAdd: {
      // 「kill」은 기존 「killed」의 부분 문자열이라 안 쓴다(배치 43 — 새로 넣는 쪽만 간다).
      "표범이 덤벼듦": "attacking seemingly promises misplaced confidence",
      "표범을 죽임": "intimates victory affairs",
      "우리에 갇힌 표범을 봄": "caged surround injure",
      "표범이 제게서 달아나려 함": "native trying escape embarrassed persistent",
      "표범 가죽을 봄": "skin endangered dishonest esteem",
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
