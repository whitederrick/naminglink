// 배치 145(밀러 `Opulence`~`Orchard`) — 기존 셋을 손본다.
//
//   luxury(사치)  ← 밀러 `Opulence` 하나
//   wealth(재물)  ← 밀러 `Opulence` 하나. **판별어 표가 비어 있었다**(스물다섯 번째)
//   orchard(과수원) ← 밀러 `Orchard` 아홉. **판별어 표가 비어 있었다**(스물여섯 번째)
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-145.mjs

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
  luxury: {
    aliasesAdd: [],
    contextsAdd: {
      "처녀가 요정 같은 호사 속에 삶을 봄": "처녀가 요정 같은 속아",
    },
    contextsEnAdd: {
      "처녀가 요정 같은 호사 속에 삶을 봄": "fairy opulence deceived shame poverty",
    },
  },
  wealth: {
    aliasesAdd: [],
    contextsAdd: {
      "집안에서 재물을 나눔": "나누 헤어지고 무너",
      "처녀가 참된 재물과 안락을 누림": "처녀가 참된 실속",
    },
    contextsEnAdd: {
      "집안에서 재물을 나눔": "separation ruin",
      "처녀가 참된 재물과 안락을 누림": "solid real comforts wake pleasure",
    },
  },
  orchard: {
    aliasesAdd: [],
    contextsAdd: {
      "과수원 속을 거닒": "거닐었 걸었",
      "정인과 함께 꽃 핀 과수원을 지남": "정인과 꽃 핀 구애",
      "과수원에 무르익은 열매가 가득함": "무르익은 가득 섬김 결실",
      "과수원에서 돼지가 떨어진 열매를 먹는 것을 봄": "돼지가 떨어진 열매를 먹",
      "잘 익은 열매를 거둠": "거두는 거뒀 넉넉함",
      "과수원에 병충해가 듦": "병충해 비참",
      "과수원을 지나다 가시덤불에 걸림": "가시덤불 연적",
      "황폐한 과수원을 봄": "황폐한 무시",
      "겨울에 잎이 진 과수원을 봄": "겨울에 잎이 진 소홀",
      "폭풍이 휩쓴 과수원을 봄": "폭풍이 휩쓴 손님",
    },
    contextsEnAdd: {
      "과수원 속을 거닒": "walking gaining wealth",
      "정인과 함께 꽃 핀 과수원을 지남": "sweetheart blossoming courtship",
      "과수원에 무르익은 열매가 가득함": "ripening recompense fruition happy homes",
      "과수원에서 돼지가 떨어진 열매를 먹는 것을 봄": "hogs fallen fruit lose property",
      "잘 익은 열매를 거둠": "gather ripe plenty classes",
      "과수원에 병충해가 듦": "blight miserable existence",
      "과수원을 지나다 가시덤불에 걸림": "brambles jealous rival row partner",
      "황폐한 과수원을 봄": "barren opportunities ignored",
      "겨울에 잎이 진 과수원을 봄": "verdure winter careless future",
      "폭풍이 휩쓴 과수원을 봄": "storm-swept unwelcome guest duties",
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
