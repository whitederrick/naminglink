// **배치 31(밀러 English~Eyeglass)이 이미 있는 상징 여섯에 붙는다 — 그 매칭 키를 고친다.**
//
// 새 상징 열일곱은 `kmm31.json`에 있다. 아래 여섯은 이미 사전에 있고, 매칭 키는 그 상징이
// 처음 실린 파일에 있다. **같은 id를 두 파일에 적으면 조립이 멈추므로**(절차 ⑥) 원래 파일의
// 항목을 고친다.
//
//   km2   fleeing(달아남)      ← 밀러 `Escape` 넷.  「탈출」이 이미 이 상징의 별칭이었다
//   km4   letter(편지)         ← 밀러 `Envelope` 하나. **「봉투」가 이미 편지의 별칭이었다**
//   km7   eyebrows(눈썹)       ← 밀러 `Eyebrows` 하나. 상징이 이미 있었다
//   kmm3  adam-and-eve(아담과 이브) ← 밀러 `Eve` 둘
//   kmm6  banishment(추방)     ← 밀러 `Exile` 하나. 「귀양」이 이미 이 상징의 별칭이었다
//   kmm7  bequest(유산)        ← 밀러 `Estate` 둘
//
// **`Envelope`·`Exile`·`Escape` 를 새 상징으로 세우지 않은 이유**는 「봉투」·「귀양」·「탈출」을
// 이미 이 상징들이 별칭으로 쥐고 있기 때문이다(CLAUDE.md §25 곁가지 — 이름의 임자에게 붙인다).
// **`Estate` 는 이름이 문제였다** — 「재산」은 `wealth` 의 별칭이고, 「너른 땅」은 아무도 안
// 치는 말이다. 뜻이 같은 `bequest`(유산)에 붙였다.
//
// **`letter`·`fleeing`·`eyebrows`·`bequest` 는 의미가 하나뿐이라 판별어 표가 비어 있었다.**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-31.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km2: {
    fleeing: {
      aliasesAdd: ["빠져나왔다", "벗어났다", "모면"],
      contextsAdd: {
        "몸이 달아나 벗어남": "몸이 달아나",
        "다치거나 사고를 당할 뻔한 데서 벗어남": "사고 다칠 다치",
        "갇힌 곳에서 빠져나옴": "갇힌 감옥 빠져나",
        "옮는 병에서 벗어남": "병에서 전염 옮는",
        "벗어나려다 실패함": "실패 못했 붙잡혔",
      },
      contextsEnAdd: {
        "몸이 달아나 벗어남": "body freed",
        "다치거나 사고를 당할 뻔한 데서 벗어남": "injury accidents favorable",
        "갇힌 곳에서 빠져나옴": "confinement rise application",
        "옮는 병에서 벗어남": "contagion health prosperity",
        "벗어나려다 실패함": "fail slander defraud",
      },
    },
  },
  km4: {
    letter: {
      contextsAdd: {
        "편지를 봉함": "봉했 넣어 붙였",
        "봉투를 봄": "봉투를 봉투가",
      },
      contextsEnAdd: {
        "편지를 봉함": "sealed sealing",
        "봉투를 봄": "envelopes sorrowful cast",
      },
    },
  },
  km7: {
    eyebrows: {
      aliasesAdd: ["눈썹이", "눈썹을"],
      contextsAdd: {
        "눈썹이 머리털과 가지런히 자람": "머리털 가지런 자랐",
        "눈썹을 봄": "보았 마주",
      },
      contextsEnAdd: {
        "눈썹이 머리털과 가지런히 자람": "hair evenly grown",
        "눈썹을 봄": "sinister obstacles immediate",
      },
    },
  },
  kmm3: {
    "adam-and-eve": {
      contextsAdd: {
        "이브를 봄": "이브를",
        "처녀가 제가 이브가 된 꿈을 꿈": "처녀 아가씨 흉내",
      },
      contextsEnAdd: {
        "이브를 봄": "hesitancy authentic opposition",
        "처녀가 제가 이브가 된 꿈을 꿈": "impersonates careful disguise",
      },
    },
  },
  kmm6: {
    banishment: {
      aliasesAdd: ["귀양을", "귀양 갔다"],
      contextsAdd: {
        "여성이 귀양 감": "여성이 여자가 처녀가",
      },
      contextsEnAdd: {
        "여성이 귀양 감": "exiled journey interfere",
      },
    },
  },
  kmm7: {
    bequest: {
      contextsAdd: {
        "유산(증여)에 관한 꿈을 꿈": "증여 남겨준",
        "너른 땅과 집을 물려받게 됨": "너른 땅과 저택",
        "처녀가 너른 땅을 물려받게 됨": "처녀 아가씨 여성이",
      },
      contextsEnAdd: {
        "유산(증여)에 관한 꿈을 꿈": "received given",
        "너른 땅과 집을 물려받게 됨": "vast ownership distant",
        "처녀가 너른 땅을 물려받게 됨": "young woman frugally poor",
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
