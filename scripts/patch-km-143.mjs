// 배치 143(밀러 `October`~`Oilcloth`) — 기존 다섯을 손본다. **5판 묶음의 마지막 판이다.**
//
//   humiliation(모욕)      ← 밀러 `Offense` 셋(`Affront`와 각도가 다르다)
//   official-post(벼슬)    ← 밀러 `Office` 셋. **판별어 표가 비어 있었다**(스물세 번째)
//   child(아이)            ← 밀러 `Offspring` 의 「제 자식을 봄」
//   brood(새끼)            ← 밀러 `Offspring` 의 「집짐승의 새끼를 봄」
//   oil(기름)               ← 밀러 `Oil` 넷(`Grease`와는 다른 표제어)
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-143.mjs

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
  humiliation: {
    aliasesAdd: [],
    contextsAdd: {
      "모욕당했다고 느낌": "행실 잘못 분노",
      "남에게 모욕을 줌": "여러 싸움 뜻을 이루기까지",
      "처녀가 모욕을 주거나 받음": "성급한 판단 불순종",
    },
    contextsEnAdd: {
      "모욕당했다고 느낌": "errors conduct inward rage",
      "남에게 모욕을 줌": "give offense struggles aims",
      "처녀가 모욕을 주거나 받음": "hasty conclusions disobedience",
    },
  },
  "official-post": {
    aliasesAdd: [],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "새로 벼슬을 받음": "새로 받았",
      "관직을 지님": "지니는 위태한 대담함",
      "바라던 관직을 얻지 못함": "바라던 얻지 못하 실망",
      "관직에서 쫓겨남": "쫓겨나 값진 것을",
    },
    contextsEnAdd: {
      "새로 벼슬을 받음": "newly appointed",
      "관직을 지님": "holds office dangerous boldness",
      "바라던 관직을 얻지 못함": "fails secure desired keen",
      "관직에서 쫓겨남": "turned out loss valuables",
    },
  },
  child: {
    aliasesAdd: [],
    contextsAdd: {
      "제 자식을 봄": "명랑함 이웃 즐거운 목소리",
    },
    contextsEnAdd: {
      "제 자식을 봄": "own offspring cheerfulness merry voices",
    },
  },
  brood: {
    aliasesAdd: [],
    contextsAdd: {
      "집짐승의 새끼를 봄": "집짐승 재물이 늘어",
    },
    contextsEnAdd: {
      "집짐승의 새끼를 봄": "domestic animals increase prosperity",
    },
  },
  oil: {
    aliasesAdd: [],
    contextsAdd: {
      "기름을 바르는 의식을 치름": "바르는 의식 움직이는 힘",
      "기름이 많이 있는 것을 봄": "많이 지나침 즐거운",
      "남성이 기름 장사를 함": "남성이 장사 사랑을 얻는",
      "여성이 기름을 바름": "여성이 무분별한 추근",
    },
    contextsEnAdd: {
      "기름을 바르는 의식을 치름": "anointing moving power",
      "기름이 많이 있는 것을 봄": "quantities excesses pleasurable",
      "남성이 기름 장사를 함": "man deals unsuccessful concessions",
      "여성이 기름을 바름": "woman anointed indiscreet advances",
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
