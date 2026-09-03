// 배치 140(밀러 `Newspaper Reporter`~`Numbers`) — 기존 넷을 손본다.
//
//   dark(어둠)      ← 밀러 `Night` 둘. 원문 자신이 「[137] See Darkness」라 적었다
//   ache(통증)      ← 밀러 `Numbness` 하나. 「저림」이 이미 별칭이었다
//   figure(숫자)    ← 밀러 `Numbers` 하나. **판별어 표가 비어 있었다**(스무 번째,
//                    의미가 하나뿐이던 상징). 기존 의미(`Figure`)의 판별어도 채운다
//   bleeding(출혈)  ← 밀러 `Nose`의 「코피가 남」 하나. 「코피」가 이미 별칭이었다.
//                    **판별어 표가 비어 있었다**(스물한 번째). 기존 의미의 판별어도 채운다
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-140.mjs

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
  dark: {
    aliasesAdd: [],
    contextsAdd: {
      "밤에 둘러싸임": "둘러싸 억눌림 곤란",
      "밤이 걷히는 것을 봄": "걷히는 밝아지 번창",
    },
    contextsEnAdd: {
      "밤에 둘러싸임": "surrounded oppression hardships business",
      "밤이 걷히는 것을 봄": "vanishing unfavorable grow bright prosperous",
    },
  },
  ache: {
    aliasesAdd: [],
    contextsAdd: {
      "몸에 저림이 스멀스멀 번짐": "저려 저림 스멀",
    },
    contextsEnAdd: {
      "몸에 저림이 스멀스멀 번짐": "numbness creeping illness disquieting",
    },
  },
  figure: {
    aliasesAdd: [],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "숫자를 봄": "어지럽 그르치 손해",
      "숫자 때문에 사업이 어수선함": "어수선 불편 못마땅",
    },
    contextsEnAdd: {
      "숫자를 봄": "distress wrong loser deal",
      "숫자 때문에 사업이 어수선함": "unsettled uneasiness dissatisfaction",
    },
  },
  bleeding: {
    aliasesAdd: [],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "피를 흘리는 꿈을 꿈": "사고 죽음 소문 운이 등",
      "코피가 남": "코피 재앙",
    },
    contextsEnAdd: {
      "피를 흘리는 꿈을 꿈": "horrible accidents malicious reports fortune",
      "코피가 남": "bleeding nose prophetic disaster",
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
