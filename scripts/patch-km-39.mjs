// **배치 39(밀러 Garlic~Garden→Gift)가 이미 있는 상징 일곱을 건드린다.**
//
// 새 상징 열은 `kmm39.json`에 있다.
//
//   km9   garlic(마늘)  ← `Garlic` 셋.  **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   kmm7  atlas(지도책) ← `Geography` 하나(=See Atlas). 〃
//   kmm5  attic(다락방) ← `Garret` 셋
//   km8   goose(거위)   ← `Geese` 일곱
//   km5   ghost(귀신)   ← `Ghost` 여덟
//   km6   jade(옥)      ← `Gems` 하나(=See Jewelry). 「보석」이 이미 `jade` 의 별칭이라
//                         새 상징을 세우지 않고 붙였다 — 밀러 `Jewelry` 는 아직 안 왔다
//   km7   door(문)      ← **별칭 「대문」을 뺀다**(아래)
//
// ## 「대문」을 `door` 에서 `gate` 로 넘긴다
//
// 밀러는 `Door` 와 `Gate` 를 따로 둔다(뜻도 다르다). 그런데 「대문」이 `door` 의 별칭이라
// 새 `gate` 를 세우면 **한 문장에 둘 다 걸린다**(`findTerm` 은 상징마다 따로 돈다).
// CLAUDE.md §25 곁가지의 규칙대로 **더 정확한 쪽에 넘긴다** — 「대문」은 `gate` 의 것이다.
// `door` 는 「문」·「출입문」·「현관문」·「문짝」·「문간」을 그대로 갖는다.
//
// **다른 상징의 판별어에 있는 「대문」은 그대로 둔다** — 한국어 판별어는 별칭 임자와
// 무관하게 산다(`ownTermsOf` 는 한국어면 `[]` 를 돌려준다, §29 곁가지).
//
// ## 기존 판별어를 좁힌 자리 둘
//
//   attic 「다락방에 있음」  에서 「올라갔」을 뺀다 — `Garret` 의 「다락방으로 올라감」이 그 말을 쓴다
//   goose 「거위와 오리가 함께 헤엄침」 에서 「헤엄」을 뺀다 — `Geese` 의 「거위가 헤엄치는 것을 봄」이 쓴다
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-39.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km5: {
    ghost: {
      aliasesAdd: ["귀신이", "귀신을"],
      contextsAdd: {
        "어버이의 귀신을 봄": "어버이 부모 아버지 어머니",
        "죽은 벗의 귀신을 봄": "죽은 벗의 친구의",
        "귀신이 말을 걸어옴": "말을 걸어 말했",
        "여성이 귀신 꿈을 꿈": "여자가 여성이",
        "하늘에 천사나 귀신이 나타남": "천사 천사가",
        "하늘 오른쪽에 여자 귀신 왼쪽에 남자 귀신이 보임": "오른쪽 왼쪽",
        "여자 귀신이 긴 옷을 끌고 하늘을 떠감": "떠가 늘어진 흘러가",
        "살아 있는 살붙이나 벗의 귀신을 봄": "살아 산사람",
      },
      contextsEnAdd: {
        "어버이의 귀신을 봄": "parents exposed danger partnerships strangers",
        "죽은 벗의 귀신을 봄": "dead friend journey unpleasant companion",
        "귀신이 말을 걸어옴": "speak decoyed hands enemies",
        "여성이 귀신 꿈을 꿈": "woman prognostication widowhood deception",
        "하늘에 천사나 귀신이 나타남": "angel appear sky kindred misfortunes",
        "하늘 오른쪽에 여자 귀신 왼쪽에 남자 귀신이 보임": "right male left countenance obscurity",
        "여자 귀신이 긴 옷을 끌고 하늘을 떠감": "clinging robes floating scientific miraculously",
        "살아 있는 살붙이나 벗의 귀신을 봄": "living relative malice supervision",
      },
    },
  },
  km6: {
    jade: {
      contextsAdd: {
        "보석을 봄": "보석 패물",
      },
      contextsEnAdd: {
        "보석을 봄": "gems happy fate both",
      },
    },
  },
  km7: {
    door: {
      aliasesRemove: ["대문"],
    },
  },
  km8: {
    goose: {
      aliasesAdd: ["거위가", "거위를"],
      contextsSet: {
        "거위와 오리가 함께 헤엄침": "오리 물에서 함께",
      },
      contextsAdd: {
        "거위 우는 소리에 시달림": "우는 시달 꽥꽥 울음",
        "거위가 헤엄치는 것을 봄": "헤엄",
        "풀밭의 거위를 봄": "풀밭 잔디 들판",
        "죽은 거위를 봄": "죽은 죽어 주검",
        "정인이 거위를 봄": "정인 사랑하는",
        "거위 털을 뽑음": "털을 뽑았 뽑고",
        "거위를 먹음": "먹었 먹는",
      },
      contextsEnAdd: {
        "거위 우는 소리에 시달림": "annoyed quacking death family",
        "거위가 헤엄치는 것을 봄": "swimming gradually increasing",
        "풀밭의 거위를 봄": "grassy places assured success",
        "죽은 거위를 봄": "dead suffer loss displeasure",
        "정인이 거위를 봄": "lover worthiness affianced",
        "거위 털을 뽑음": "picking come into estate",
        "거위를 먹음": "eat possessions disputed",
      },
      contextsEnSet: {
        "거위와 오리가 함께 헤엄침": "ducks together water",
      },
    },
  },
  km9: {
    garlic: {
      aliasesAdd: ["마늘밭"],
      contextsAdd: {
        "마늘을 먹음": "먹었 먹는",
        "마늘밭을 지나감": "마늘밭 지나갔 지나서",
        "처녀가 마늘밭을 지나감": "처녀 아가씨",
        "마늘을 씹어 먹음": "씹어 씹었",
      },
      contextsEnAdd: {
        "마늘을 먹음": "ate eating",
        "마늘밭을 지나감": "passing patch penury prominence",
        "처녀가 마늘밭을 지나감": "young woman marry sense business",
        "마늘을 씹어 먹음": "sensible view life ideals",
      },
    },
  },
  kmm5: {
    attic: {
      contextsSet: {
        "다락방에 있음": "있었 들어갔 머물",
      },
      contextsAdd: {
        "다락방으로 올라감": "올라갔 올라가 기어올",
        "가난한 이가 다락방 꿈을 꿈": "가난 궁핍 없이사는",
        "여성이 다락방 꿈을 꿈": "여자가 여인이",
      },
      contextsEnAdd: {
        "다락방으로 올라감": "climbing garret theories realities",
        "가난한 이가 다락방 꿈을 꿈": "poor omen easier circumstances",
        "여성이 다락방 꿈을 꿈": "woman vanity selfishness curbed",
      },
    },
  },
  kmm7: {
    atlas: {
      contextsAdd: {
        "지도책을 들여다봄": "들여다 펼쳐 뒤적",
        "지리를 익힘": "지리 익히 공부",
      },
      contextsEnAdd: {
        "지도책을 들여다봄": "poring atlas",
        "지리를 익힘": "studying geography travel renown",
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

    for (const w of patch.aliasesRemove ?? []) {
      const i = (row.aliases ?? []).indexOf(w);
      if (i < 0) stop(`${id}: 지울 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases.splice(i, 1);
      changed++;
    }
    for (const w of patch.aliasesAdd ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다.`);
      row.aliases.push(w);
      changed++;
    }
    // contextsSet 은 **이미 있는** 판별어를 좁히는 것이다 — 없으면 멈춘다.
    for (const [k, v] of Object.entries(patch.contextsSet ?? {})) {
      if (!(k in row.contexts)) stop(`${id}: 좁힐 판별어 「${k}」가 없다.`);
      if (row.contexts[k] === v) stop(`${id}: 판별어 「${k}」가 이미 그 값이다 — 이미 돌린 것 같다.`);
      row.contexts[k] = v;
      changed++;
    }
    for (const [k, v] of Object.entries(patch.contextsEnSet ?? {})) {
      if (!(k in row.contexts_en)) stop(`${id}: 좁힐 영어 판별어 「${k}」가 없다.`);
      row.contexts_en[k] = v;
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
    for (const [k, v] of Object.entries(patch.contextsSet ?? {})) {
      if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 좁혀졌다.`);
    }
    for (const w of patch.aliasesRemove ?? []) {
      if (row.aliases.includes(w)) stop(`확인 실패: ${id} 에서 「${w}」가 안 지워졌다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
