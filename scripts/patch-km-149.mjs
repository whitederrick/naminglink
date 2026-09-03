// 배치 149(밀러 `Pail`~`Palisade`) — 기존 셋을 손본다.
//
//   bucket(물통)  ← 밀러 `Pail` 셋(「양동이」·「pail」이 이미 별칭·영어 별칭이었다)
//   agony(고통)   ← 밀러 `Pain` 둘(기존 `Agony`와 각도가 다르다)
//   palace(궁궐)  ← 밀러 `Palace` 넷. **판별어 표가 비어 있었다**(스물여덟 번째,
//                  의미가 하나뿐이던 상징). 기존 의미의 판별어도 채운다
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-149.mjs

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
  bucket: {
    aliasesAdd: [],
    contextsAdd: {
      "젖이 가득한 통을 봄": "젖이 가득한 앞날이",
      "빈 통을 봄": "굶주림 흉작",
      "처녀가 통을 나름": "처녀가 나르는 집안일",
    },
    contextsEnAdd: {
      "젖이 가득한 통을 봄": "full pails milk fair prospects",
      "빈 통을 봄": "empty famine bad crops",
      "처녀가 통을 나름": "young woman carrying household employment",
    },
  },
  agony: {
    aliasesAdd: [],
    contextsAdd: {
      "제가 아파함": "부질없는 후회 하찮은",
      "남이 아파하는 것을 봄": "남이 잘못을 저지르",
    },
    contextsEnAdd: {
      "제가 아파함": "own unhappiness useless regrets trivial",
      "남이 아파하는 것을 봄": "others warns mistakes life",
    },
  },
  palace: {
    aliasesAdd: [],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "제왕의 궁궐에 들어감": "제왕 임금 들어감",
      "궁궐을 거닐며 웅장함에 감탄함": "거닐며 웅장함 앞날이",
      "신사 숙녀들이 춤추고 담소하는 것을 보고 들음": "신사 숙녀들이 춤추고",
      "형편이 넉넉지 않은 처녀가 잔치에 대등하게 낌": "넉넉지 않은 잔치에",
      "형편이 어려운 처녀에게 이 꿈이 속임수처럼 다가옴": "어려운 속임수처럼 헛된",
    },
    contextsEnAdd: {
      "제왕의 궁궐에 들어감": "entering imperial",
      "궁궐을 거닐며 웅장함에 감탄함": "wandering grandeur prospects dignity",
      "신사 숙녀들이 춤추고 담소하는 것을 보고 들음": "fine ladies dancing conversing",
      "형편이 넉넉지 않은 처녀가 잔치에 대등하게 낌": "moderate means participant advancement",
      "형편이 어려운 처녀에게 이 꿈이 속임수처럼 다가옴": "humble deceitful misleading idle",
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
