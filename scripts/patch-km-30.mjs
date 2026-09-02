// **배치 30(밀러 Elixir of Life~Engineer)이 이미 있는 상징 셋에 붙는다 — 그 매칭 키를 고친다.**
//
// 새 상징 열여섯은 `kmm30.json`에 있다. 아래 셋은 이미 사전에 있고, 매칭 키는 그 상징이
// 처음 실린 파일에 있다. **같은 id를 두 파일에 적으면 조립이 멈추므로**(절차 ⑥) 새 파일에
// 적지 않고 원래 파일의 항목을 고친다.
//
//   km5   king(임금)      ← 밀러 `Emperor` 하나. **「황제」는 이미 king 의 별칭이었다**
//   km8   queen(왕비)     ← 밀러 `Empress` 둘.   **「황후」는 이미 queen 의 별칭이었다**
//   kmm5  adversary(적수) ← 밀러 `Enemy` 둘
//
// **`Enemy` 의 다섯 가운데 둘만 넣었다.** 「적을 이겨냄」·「적과 맞섬」은 밀러 `Adversary`
// 로 이미 들어와 있다 — 같은 말을 두 번 적지 않는다(절차의 「겹치는 것은 안 넣는다」).
//
// **`Emperor`·`Empress` 를 새 상징으로 세우지 않은 이유**는 「황제」·「황후」를 이미
// `king`·`queen` 이 별칭으로 쥐고 있기 때문이다. 새로 세우면 한 문장에 둘이 함께 뜬다
// (CLAUDE.md §25 곁가지 — 이름의 임자에게 붙인다).
//
// **`queen` 은 의미가 하나뿐이라 판별어 표가 비어 있었다.** 셋이 되어 전부 채웠다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-30.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km5: {
    king: {
      contextsAdd: {
        "먼 길에서 다른 나라의 황제를 만남": "여행 타국 다른 나라",
      },
      contextsEnAdd: {
        "먼 길에서 다른 나라의 황제를 만남": "abroad travels journey",
      },
    },
  },
  km8: {
    queen: {
      contextsAdd: {
        "왕비가 불러 마시게 함": "마시 권하 술을",
        "황후를 봄": "황후를 황후가",
        "황후와 황제를 함께 봄": "황제 함께 나란히",
      },
      contextsEnAdd: {
        "왕비가 불러 마시게 함": "summoned drink",
        "황후를 봄": "exalted honors pride unpopular",
        "황후와 황제를 함께 봄": "emperor substantial",
      },
    },
  },
  kmm5: {
    adversary: {
      contextsAdd: {
        "적에게 헐뜯김": "헐뜯 험담 흉을",
        "적에게 짐": "졌다 지고 밀렸 당했",
      },
      contextsEnAdd: {
        "적에게 헐뜯김": "defamed threatened failures",
        "적에게 짐": "better ominous adverse",
      },
    },
  },
};

let changed = 0;
const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

for (const [file, byId] of Object.entries(PATCHES)) {
  const p = path.join(DIR, `${file}.json`);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    if (!row) stop(`${file}.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);

    for (const w of patch.aliasesAdd ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다.`);
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
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file}.json 고침`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44 — 조용한 성공이 가장 비싸다).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    for (const k of Object.keys(patch.contextsAdd ?? {})) {
      if (!(k in row.contexts)) stop(`확인 실패: ${id} 에 「${k}」가 안 들어갔다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
