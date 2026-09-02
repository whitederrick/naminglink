// **배치 46(밀러 Headgear~Hemp Seed)이 이미 있는 상징 넷을 건드린다.**
//
// 새 상징 일곱은 `kmm46.json`에 있다 — `headgear`(머리쓰개) · `heart`(심장) · `heat`(더위) ·
// `heather`(히스꽃) · `heaven`(하늘나라) · `hell`(지옥) · `helmet`(투구).
//
//   km6   funeral-carriage(상여) ← `Hearse` 셋. **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   kmm33 fence(울타리)          ← `Hedges` 넷. 「산울타리」를 별칭으로 함께 올린다 —
//                                  「산울타리」는 「산」+「울타리」라 `fence` 가 그대로는 안 걸린다
//   kmm7  bequest(유산)          ← `Heir` 하나
//   km5   hemp(삼)               ← `Hemp` 둘 + `Hemp Seed` 둘. 「삼씨」를 별칭으로 올린다
//
// ## 밀러 `Hedges` 의 마지막 문장은 안 넣었다
//
// 「To lovers, this dream is significant of quarrels and jealousies.」는 **앞 문장에 딸린
// 덧말**이라 꿈의 그림이 따로 없다(배치 41 `Grave` 의 총평 문장과 같은 자리).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-46.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km5: {
    hemp: {
      aliasesAdd: ["삼씨", "삼을", "삼이"],
      contextsAdd: {
        "삼을 봄": "보았 놓여",
        "처녀가 삼을 기르다 다침": "처녀 아가씨 다쳤",
        "삼씨를 봄": "삼씨 씨앗",
        "장사하는 이가 삼씨를 봄": "장사 장사꾼 상인",
      },
      contextsEnAdd: {
        "삼을 봄": "successful undertakings especially engagements",
        "처녀가 삼을 기르다 다침": "accident befalls cultivating fatal quarrel",
        "삼씨를 봄": "seed near approach deep continued",
        "장사하는 이가 삼씨를 봄": "business man favorable opportunity money",
      },
    },
  },
  km6: {
    "funeral-carriage": {
      aliasesAdd: ["상여가", "상여를"],
      contextsAdd: {
        "상여와 마주침": "마주쳤 마주치 만났",
        "상여를 봄": "보았 놓여",
        "상여가 죽음이나 앓음을 알림": "죽음 앓음 슬픔",
        "상여가 앞길을 가로질러 감": "가로질 앞을 지나갔",
      },
      contextsEnAdd: {
        "상여와 마주침": "encountered came upon",
        "상여를 봄": "uncongenial relations home carry",
        "상여가 죽음이나 앓음을 알림": "betokens death near sickness sorrow",
        "상여가 앞길을 가로질러 감": "crosses path bitter enemy overcome",
      },
    },
  },
  kmm7: {
    bequest: {
      contextsAdd: {
        "재산이나 값진 것을 물려받게 됨": "재산 값진 상속인",
      },
      contextsEnAdd: {
        "재산이나 값진 것을 물려받게 됨": "fall heir property valuables danger",
      },
    },
  },
  kmm33: {
    fence: {
      aliasesAdd: ["산울타리", "생울타리"],
      contextsAdd: {
        "늘 푸른 산울타리를 봄": "늘푸른 상록 푸른",
        "잎이 진 산울타리를 봄": "잎이 앙상 헐벗",
        "처녀가 정인과 푸른 산울타리를 따라 거닒": "정인과 거닐 나란히",
        "가시 산울타리에 얽힘": "가시 얽혔 걸렸",
      },
      contextsEnAdd: {
        "늘 푸른 산울타리를 봄": "evergreens joy profit",
        "잎이 진 산울타리를 봄": "bare distress unwise dealings",
        "처녀가 정인과 푸른 산울타리를 따라 거닒": "walking beside lover marriage consummated",
        "가시 산울타리에 얽힘": "entangled thorny hampered unruly",
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
