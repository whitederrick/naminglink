// **배치 48(밀러 History~Honeysuckle)이 이미 있는 상징 넷을 건드린다.**
//
// 새 상징 여덟은 `kmm48.json`에 있다 — `history`(역사) · `hives`(두드러기) · `hoe`(호미) ·
// `holiday`(휴일) · `communion`(성찬) · `hominy`(옥수수죽) · `homesick`(향수병) ·
// `honeysuckle`(인동꽃).
//
//   km3   pig(돼지)              ← `Hogs` 여섯
//   kmm2  abode(거처)            ← `Home` 넷(=See Abode). 「옛집」·「고향집」을 별칭으로 올린다
//   km8   killing-someone(살인)  ← `Homicide` 둘(=See Kill)
//   km2   honey(꿀)              ← `Honey` 넷. **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//
// **별칭 경계를 적은 자리에서 확인했다**(배치 47의 교훈 — 그 판에 넷을 되돌렸다):
// 「역사」+책 · 「호미」+로 · 「고향을 그리」+워했다 셋이 죽는 꼴이라 **완전한 꼴로** 올렸다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-48.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km2: {
    honey: {
      aliasesAdd: ["꿀을", "꿀이"],
      contextsAdd: {
        "남과 함께 꿀을 먹음": "남과 함께 나눠",
        "꿀을 봄": "보았 놓여",
        "거른 꿀을 봄": "거른 걸러 맑은",
        "꿀을 먹음": "먹었 핥아",
        "정인에게 꿀 꿈이 나타남": "정인 애인 연인",
      },
      contextsEnAdd: {
        "남과 함께 꿀을 먹음": "together shared with another",
        "꿀을 봄": "see possessed considerable wealth",
        "거른 꿀을 봄": "strained ease undercurrent unlawful",
        "꿀을 먹음": "eating attain love",
        "정인에게 꿀 꿈이 나타남": "lovers swift rush marital joys",
      },
    },
  },
  km3: {
    pig: {
      aliasesAdd: ["돼지가", "돼지를", "새끼돼지"],
      contextsAdd: {
        "살지고 튼튼한 돼지를 봄": "살지고 튼튼 통통",
        "여윈 돼지를 봄": "여윈 비쩍 마른",
        "어미 돼지와 새끼들을 봄": "어미 새끼들 무리",
        "돼지 울부짖는 소리를 들음": "울부짖 꽥꽥 소리를",
        "제 돼지에게 먹이를 줌": "먹이를 먹였 여물",
        "돼지를 사고팖": "사고팔 팔았 장사",
      },
      contextsEnAdd: {
        "살지고 튼튼한 돼지를 봄": "fat strong brisk safe dealings",
        "여윈 돼지를 봄": "lean vexatious servants children",
        "어미 돼지와 새끼들을 봄": "sow litter abundant crops farmer",
        "돼지 울부짖는 소리를 들음": "squealing unpleasant news absent",
        "제 돼지에게 먹이를 줌": "feeding own increase personal belongings",
        "돼지를 사고팖": "dealing accumulate considerable rough",
      },
    },
  },
  km8: {
    "killing-someone": {
      contextsAdd: {
        "제가 사람을 죽임": "제가 내가 저지",
        "벗이 스스로 목숨을 끊음": "스스로 목숨 벗이",
      },
      contextsEnAdd: {
        "제가 사람을 죽임": "commit homicide anguish humiliation indifference",
        "벗이 스스로 목숨을 끊음": "friend commits suicide deciding important",
      },
    },
  },
  kmm2: {
    abode: {
      aliasesAdd: ["옛집", "고향집", "살던 집"],
      contextsAdd: {
        "옛 살던 집을 찾아감": "찾아갔 찾아가 들렀",
        "옛 살던 집이 허물어져 있음": "허물어 무너진 폐허",
        "처녀가 허물어진 옛집을 봄": "처녀 아가씨",
        "집에 가니 모든 것이 밝고 아늑함": "아늑 밝고 포근",
      },
      contextsEnAdd: {
        "옛 살던 집을 찾아감": "visiting old good news rejoice",
        "옛 살던 집이 허물어져 있음": "dilapidated warns sickness death relative",
        "처녀가 허물어진 옛집을 봄": "young woman sorrow lose dear",
        "집에 가니 모든 것이 밝고 아늑함": "cheery comfortable harmony satisfactory",
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
