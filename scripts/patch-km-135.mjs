// 배치 135(밀러 `Muff`·`Mulberries`·`Mule`·`Muscle`·`Museum`) — 기존 둘을 손본다.
//
//   mulberry(오디) ← 밀러 `Mulberries` 하나. **판별어 표가 비어 있었다**(열두 번째, 배치 35)
//   mule(노새)     ← 밀러 `Mule` 넷
//
// ## 기본값 (§30)
//
//   mulberry  오디를 먹음 → 오디를 봄     **바꿔서 얼린다**(밀러 쪽이 일반적이다)
//   mule      노새를 타고 감              **옛것 그대로 얼린다**
//
// 얼린 자리의 판별어는 좁게 적었다 — 「~를 봄」 꼴 기본값에 「보았다」를 주지 않는다(§25 곁가지 3).
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-135.mjs

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
  mulberry: {
    aliasesAdd: ["오디가", "오디를"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "오디를 먹음": "먹었 먹고 따먹",
      "오디를 봄": "열려 달려",
    },
    contextsEnAdd: {
      "오디를 먹음": "eating ate",
      "오디를 봄": "sickness prevent desires relieve suffering",
    },
  },
  mule: {
    aliasesAdd: ["노새가", "노새를", "노새들"],
    contextsAdd: {
      "노새를 타고 탈 없이 다다름": "다다랐 이르렀 무사히",
      "처녀가 흰 노새를 봄": "처녀 하얀 흰색",
      "노새들이 풀려 돌아다님": "풀려 돌아다니 제멋대로",
      "노새에게 걷어차임": "걷어차 차였",
      "죽은 노새를 봄": "죽은 주검",
    },
    contextsEnAdd: {
      "노새를 타고 탈 없이 다다름": "destination interruption recompensed substantial",
      "처녀가 흰 노새를 봄": "young woman white marry wealthy foreigner",
      "노새들이 풀려 돌아다님": "loose beaux admirers offers",
      "노새에게 걷어차임": "kicked disappointment love marriage",
      "죽은 노새를 봄": "dead broken engagements social decline",
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
