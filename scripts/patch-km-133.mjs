// 배치 133(밀러 `Moth`·`Mother`·`Mother-in-law`·`Mourning`) — 기존 둘을 손본다.
//
//   moth(나방)             ← 밀러 `Moth` 하나. **판별어 표가 비어 있었다**(열 번째, 배치 35)
//   mourning-clothes(상복) ← 밀러 `Mourning` 둘. 〃(열한 번째)
//
// ## 기본값 (§30)
//
//   moth              나방이 등불로 날아듦 → 나방을 봄   **바꿔서 얼린다**(밀러 쪽이 일반적이다)
//   mourning-clothes  몸에 상복을 입음                   **옛것 그대로 얼린다**
//
// 얼린 자리의 판별어는 좁게 적었다 — 「~를 봄」 꼴 기본값에 「보았다」를 주지 않는다(§25 곁가지 3).
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-133.mjs

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
  moth: {
    aliasesAdd: ["나방이", "나방을"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "나방이 등불로 날아듦": "등불 불빛 날아들",
      "나방을 봄": "팔랑 훨훨",
    },
    contextsEnAdd: {
      "나방이 등불로 날아듦": "lamp flame flew",
      "나방을 봄": "small worries hurried contracts unsatisfactory",
    },
  },
  "mourning-clothes": {
    aliasesAdd: ["상복을", "상복이"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "몸에 상복을 입음": "입었 걸쳤",
      "남이 상복을 입은 것을 봄": "남이 남들 다른 사람",
      "정인에게 보이는 상복": "정인 애인 사랑하는",
    },
    contextsEnAdd: {
      "몸에 상복을 입음": "wearing worn body",
      "남이 상복을 입은 것을 봄": "others disturbing influences dissatisfaction",
      "정인에게 보이는 상복": "lovers misunderstanding probable separation",
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
