// **배치 40(밀러 Gig~Gold Leaves)이 이미 있는 상징 넷을 건드린다.**
//
// 새 상징 열둘은 `kmm40.json`에 있다.
//
//   km1    cart(수레)    ← `Gig` 하나(=See Cart). 이륜마차는 수레의 한 갈래다
//   km9    belt(허리띠)  ← `Girdle` 셋
//   km8    cup(잔)       ← `Goblet` 셋.  **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   kmm25  despair(절망) ← `Gloomy` 하나(=See Despair)
//
// ## 밀러 `Glass` 의 거울 문장 일곱은 **안 넣었다**
//
// 밀러 `Mirror` 가 이미 `mirror`(거울)에 들어와 있고(일곱 의미), `Glass` 는 같은 그림을
// **다른 풀이로** 되풀이한다(「거울에 비친 제 모습」이 Mirror 에서는 「낙담과 병」,
// Glass 에서는 「혼인의 불성실」). 같은 이름으로 적으면 `work` 가 같아 **인용만 포개져
// 풀이가 뒤섞이고**, 다른 이름으로 적으면 판별어를 가를 수 없다(그림이 같다).
// → **거울이 아닌 여섯 문장만** `glass`(유리)로 세웠다. 안 넣은 것을 여기 적어 둔다 —
//   커버리지 대조에서 비어 보여도 그것이 옳은 자리다(CLAUDE.md §24 · §31).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-40.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km1: {
    cart: {
      aliasesAdd: ["이륜마차"],
      contextsAdd: {
        "이륜마차를 몲": "이륜마차 이륜",
      },
      contextsEnAdd: {
        "이륜마차를 몲": "gig forego unwelcome visitors",
      },
    },
  },
  km8: {
    cup: {
      aliasesAdd: ["은잔", "물잔"],
      contextsAdd: {
        "잔이 깨짐": "깨졌 깨진 부서",
        "은잔으로 물을 마심": "은잔 은으로",
        "옛 모양의 잔을 봄": "옛날 고풍 오래된",
        "여성이 남자에게 물이 든 유리잔을 줌": "건넸 여자가 남자에게",
      },
      contextsEnAdd: {
        "잔이 깨짐": "broke shattered",
        "은잔으로 물을 마심": "silver drink water unfavorable",
        "옛 모양의 잔을 봄": "ancient design favors benefits",
        "여성이 남자에게 물이 든 유리잔을 줌": "give man full illicit",
      },
    },
  },
  km9: {
    belt: {
      contextsAdd: {
        "허리띠가 몸을 죔": "죄었 조여 답답",
        "남이 보석 박힌 허리띠를 두른 것을 봄": "보석 우단 박힌",
        "여성이 허리띠를 받음": "여자가 여성이 받았",
      },
      contextsEnAdd: {
        "허리띠가 몸을 죔": "presses influenced designing",
        "남이 보석 박힌 허리띠를 두른 것을 봄": "velvet jeweled strive more",
        "여성이 허리띠를 받음": "receive honors conferred upon",
      },
    },
  },
  kmm25: {
    despair: {
      aliasesAdd: ["음침", "울적"],
      contextsAdd: {
        "음침한 자리에 둘러싸임": "음침 둘러싸 어두컴",
      },
      contextsEnAdd: {
        "음침한 자리에 둘러싸임": "gloomy surrounded rapidly approaching",
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

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
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
