// **배치 45(밀러 Harlot~Head)가 이미 있는 상징 다섯을 건드린다.**
//
// 새 상징 여섯은 `kmm45.json`에 있다 — `harlot`(몸 파는 이) · `harp`(하프) ·
// `harvest`(가을걷이) · `hash`(다진 고기 요리) · `hassock`(발받침) · `hay`(건초).
//
//   kmm4  bridle(굴레) ← `Harness` 하나. 「마구」는 부사 「마구」와 겹쳐 **바로 못 쓴다** —
//                        조사째 「마구를」·「마구가」로 올린다(§29 곁가지 ③의 얼굴)
//   km9   hat(모자)    ← `Hat` 넷
//   km8   axe(도끼)    ← `Hatchet` 하나. 「손도끼」가 이미 그 상징의 별칭이다
//   kmm32 falcon(송골매) ← `Hawk` 다섯. 「매」는 한 글자라 새 상징을 못 세운다 —
//                        `falcon` 이 이미 「매가 날」을 별칭으로 갖고 있어 그쪽에 붙인다
//   km6   head(머리)   ← `Head` 여덟
//
// ## §31 — `Harlot` 은 **낱말이 비하**인 갈래다
//
// 꿈의 그림은 「그런 이와 어울림 / 짝을 맺음」이고, 비하는 **부르는 말**에 있다.
// 그래서 화면 이름은 **「몸 파는 이」**로 짓고, 원문 인용(`cite.original`)에는 harlot 을
// 그대로 두었다. 이용자가 실제로 칠 말(「창녀」·「기녀」)은 **별칭에만** 올린다 —
// 배치 31의 `crippled`·`dwarf` 와 같은 처리이고, `Gypsy`(배치 42, 그림 자체가 비하)와는 다르다.
//
// ## 안 넣은 것 둘
//
//   `Hate`      표제어 통째로. 세 문장이 전부 `abhor`(혐오)에 이미 있는 그림이다
//               (「어떤 사람을 혐오함」·「남에게 혐오받음」). 같은 `work` 라 같은 이름이면
//               인용만 포개져 풀이가 뒤섞이고, 다른 이름이면 판별어를 가를 수 없다.
//   `Hatchet`   두 번째 문장(rusty or broken) — `axe` 의 「깨지거나 녹슨 도끼를 봄」과 같은 그림이다.
//   `Hawk`      첫 문장(To dream of a hawk) — `falcon` 의 「송골매를 봄」과 같은 그림이다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-45.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km6: {
    head: {
      aliasesAdd: ["머리가", "머리를"],
      contextsAdd: {
        "잘 생기고 반듯한 남의 머리를 봄": "반듯 잘생긴 훤한",
        "제 머리를 봄": "제머리 내머리 자기",
        "몸에서 떨어져 피 흐르는 머리를 봄": "피가 피를 떨어져나",
        "제 머리가 둘 이상인 것을 봄": "둘이 여럿 두개",
        "머리가 아픔": "아팠 아프 지끈",
        "부어오른 머리를 봄": "부어 부은 부풀",
        "아이의 머리를 봄": "아이의 어린애 아기의",
        "짐승의 머리를 봄": "짐승 동물의",
      },
      contextsEnAdd: {
        "잘 생기고 반듯한 남의 머리를 봄": "well shaped prominent power influence",
        "제 머리를 봄": "own threatened nervous brain",
        "몸에서 떨어져 피 흐르는 머리를 봄": "severed trunk bloody sickening overthrow",
        "제 머리가 둘 이상인 것을 봄": "two more phenomenal stable",
        "머리가 아픔": "aches oppressed worry",
        "부어오른 머리를 봄": "swollen more good bad",
        "아이의 머리를 봄": "child much store signal financial",
        "짐승의 머리를 봄": "beast desires low plane material",
      },
    },
  },
  km8: {
    axe: {
      contextsAdd: {
        "손도끼를 봄": "손도끼 자귀",
      },
      contextsEnAdd: {
        "손도끼를 봄": "hatchet wanton wastefulness expose",
      },
    },
  },
  km9: {
    hat: {
      aliasesAdd: ["모자를", "모자가"],
      contextsAdd: {
        "모자를 잃어버림": "잃어버 잃었",
        "남자가 새 모자를 씀": "남자가 사내",
        "여성이 곱고 새로운 모자를 씀": "여자가 고운 예쁜",
        "바람에 모자가 날아감": "바람에 날아갔 날려",
      },
      contextsEnAdd: {
        "모자를 잃어버림": "losing unsatisfactory keep engagements",
        "남자가 새 모자를 씀": "man wears predicts change advantage",
        "여성이 곱고 새로운 모자를 씀": "fine attainment object admiration",
        "바람에 모자가 날아감": "wind blow off sudden worse",
      },
    },
  },
  kmm4: {
    bridle: {
      aliasesAdd: ["마구를", "마구가", "마구 한 벌"],
      contextsAdd: {
        "번쩍이는 새 마구를 지님": "번쩍 마구 새것",
      },
      contextsEnAdd: {
        "번쩍이는 새 마구를 지님": "possessing bright harness prepare pleasant",
      },
    },
  },
  kmm32: {
    falcon: {
      aliasesAdd: ["매를", "매에게", "매한테"],
      contextsAdd: {
        "매를 쏘아 맞힘": "맞혔 맞추 명중",
        "처녀가 닭에게서 매를 쫓아냄": "처녀 아가씨",
        "닭이 다치기 전에 매를 쫓아냄": "닭이 쫓아냈 다치기",
        "죽은 매를 봄": "죽은 죽어",
        "매를 향해 총을 쏨": "총을 겨누 쏘았",
      },
      contextsEnAdd: {
        "매를 쏘아 맞힘": "shoot surmount obstacles struggles",
        "처녀가 닭에게서 매를 쫓아냄": "young frighten chickens extravagant diligent",
        "닭이 다치기 전에 매를 쫓아냄": "succeed scaring fowls injured lucky",
        "죽은 매를 봄": "dead enemies vanquished",
        "매를 향해 총을 쏨": "shooting contest probably win",
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
