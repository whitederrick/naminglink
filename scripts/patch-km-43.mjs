// **배치 43(밀러 Hair~Hammer)은 거의 다 이미 있는 상징에 붙는다.**
//
// 새 상징은 `ham`(햄) 하나뿐이고 `kmm43.json`에 있다.
//
//   km7   hair(머리카락)            ← `Hair` 열여덟
//   km3   combing-one-s-hair(머리 빗기) ← `Hair` 의 빗질 두 문장
//   kmm6  barber(이발사)            ← `Hair-dresser` 넷
//   km5   hand(손)                  ← `Hairy Hands` 하나. **판별어 표가 비어 있었다**
//   kmm4  bridle(굴레)              ← `Halter` 둘
//   km8   hammer(망치)              ← `Hammer` 하나
//
// ## 밀러 `Hair` 에서 안 넣은 네 문장
//
// 주공해몽이 **같은 그림을 이미 갖고 있고** 풀이만 다르다 — 같은 이름으로 적으면 `work` 가
// 달라 의미가 둘로 남고 **뒤엣것이 영영 안 뽑히며**(§31 곁가지), 다른 이름으로 적으면
// 그림이 같아 판별어를 가를 수 없다(배치 40 `Glass`/`Mirror` 와 같은 판정).
//
//   "To see your hair turning gray"          ↔ 「머리가 하얗게 셈」
//   "To dream of having your hair cut"       ↔ 「머리를 깎고 머리털을 자름」
//   "her hair is falling out, and baldness"  ↔ 「머리가 벗겨지고 머리털이 빠짐」
//   "a lock of your hair turns gray and falls out" ↔ 「머리털이 희어져 빠짐」
//
// **밀러 쪽만 있는 것은 다 넣었다** — 「살갗에 닿도록 바짝 깎음」·「눈처럼 새하얀」·
// 「하룻밤에 온통 희어짐」은 그림이 달라 따로 세웠다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-43.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km3: {
    "combing-one-s-hair": {
      aliasesAdd: ["머리를 빗지", "빗지 못"],
      contextsAdd: {
        "여성이 고운 머리카락을 빗음": "고운 아름다운 여자가",
        "여성이 머리카락을 빗지 못함": "못했 안빗 헝클려",
      },
      contextsEnAdd: {
        "여성이 고운 머리카락을 빗음": "beautiful careless personal advancement",
        "여성이 머리카락을 빗지 못함": "unsuccessful worthy temper disdain",
      },
    },
  },
  km5: {
    hand: {
      contextsAdd: {
        "손이 부러짐": "부러 부러졌 꺾였",
        "손이 짐승처럼 털로 덮임": "털로 털이 짐승처럼",
      },
      contextsEnAdd: {
        "손이 부러짐": "broken snapped",
        "손이 짐승처럼 털로 덮임": "covered beast intrigue innocent alert",
      },
    },
  },
  km7: {
    hair: {
      aliasesAdd: ["머리숱", "머릿결"],
      contextsAdd: {
        "남자가 제 머리숱이 줄어드는 것을 봄": "머리숱 숱이 줄어",
        "온몸이 털로 덮인 제 모습을 봄": "온몸 털로 뒤덮",
        "남자가 검고 곱슬한 머리카락을 지님": "남자가 사내",
        "여성의 머리카락이 검고 곱슬함": "곱슬 고불",
        "금빛 머리카락의 여성을 봄": "금빛 금발 노란",
        "정인의 머리카락이 붉음": "붉은 빨간 정인",
        "밤빛 머리카락을 봄": "밤빛 갈색",
        "잘 손질된 머리카락을 봄": "손질 단정 가지런",
        "머리카락을 살갗에 닿도록 바짝 깎음": "바짝 짧게 밀었",
        "머리카락이 부드럽고 탐스럽게 자라남": "부드럽 탐스럽 무성",
        "여성이 흰 머리카락과 검은 머리카락을 견주어 봄": "견주 비교 뽑아서",
        "헝클어지고 텁수룩한 머리카락을 봄": "헝클 텁수룩 부스스",
        "처녀가 흰머리 여성들을 봄": "처녀 아가씨",
        "눈처럼 새하얀 머리카락을 지님": "눈처럼 새하얀 눈같이",
        "남자가 여인의 머리카락을 쓰다듬음": "쓰다듬 어루만",
        "머리카락에 꽃이 꽂힌 것을 봄": "꽃이 꽃을 꽂힌",
        "여성의 머리카락이 흰 꽃으로 바뀜": "흰꽃 꽃으로 변했",
        "하룻밤에 머리카락이 온통 희어지고 낯은 젊음": "하룻밤 하루만에 하룻새",
      },
      contextsEnAdd: {
        "남자가 제 머리숱이 줄어드는 것을 봄": "thinning poor generosity worry",
        "온몸이 털로 덮인 제 모습을 봄": "covered indulgence vices refined",
        "남자가 검고 곱슬한 머리카락을 지님": "man curling deceive pleasing address",
        "여성의 머리카락이 검고 곱슬함": "curly threatened seduction",
        "금빛 머리카락의 여성을 봄": "golden fearless lover true",
        "정인의 머리카락이 붉음": "sweetheart red denounced unfaithfulness",
        "밤빛 머리카락을 봄": "brown unfortunate choosing career",
        "잘 손질된 머리카락을 봄": "well kept neatly improve",
        "머리카락을 살갗에 닿도록 바짝 깎음": "close scalp generous lavishness",
        "머리카락이 부드럽고 탐스럽게 자라남": "growing soft luxuriant luxury",
        "여성이 흰 머리카락과 검은 머리카락을 견주어 봄": "compare white black hesitate offers",
        "헝클어지고 텁수룩한 머리카락을 봄": "tangled unkempt burden yoke",
        "처녀가 흰머리 여성들을 봄": "young gray rivals affection affianced",
        "눈처럼 새하얀 머리카락을 지님": "snowy whiteness pleasing journey",
        "남자가 여인의 머리카락을 쓰다듬음": "caress confidence worthy condemnation",
        "머리카락에 꽃이 꽂힌 것을 봄": "flowers approaching less distance",
        "여성의 머리카락이 흰 꽃으로 바뀜": "turns augurs various confront patience",
        "하룻밤에 머리카락이 온통 희어지고 낯은 젊음": "perfectly one night sudden calamity",
      },
    },
  },
  km8: {
    hammer: {
      contextsAdd: {
        "망치를 봄": "보았 놓여",
      },
      contextsEnAdd: {
        "망치를 봄": "seeing discouraging obstacles establish",
      },
    },
  },
  kmm4: {
    bridle: {
      aliasesAdd: ["굴레를", "굴레가"],
      contextsAdd: {
        "어린 말에 굴레를 씌움": "어린 망아지 씌웠",
        "다른 것에 굴레가 씌워진 것을 봄": "다른 씌워진 채워진",
      },
      contextsEnAdd: {
        "어린 말에 굴레를 씌움": "put young horse manage prosperous",
        "다른 것에 굴레가 씌워진 것을 봄": "other things haltered withheld toil",
      },
    },
  },
  kmm6: {
    barber: {
      aliasesAdd: ["미용실", "이발소"],
      contextsAdd: {
        "머리 손질하는 곳에 감": "갔다 들렀 찾아갔",
        "여성이 머리 손질하는 곳 꿈을 꿈": "여자가 여성이",
        "여성이 머리카락을 물들임": "물들 염색",
        "여성이 머리를 매만져 꾸밈": "매만 꾸몄 손질받",
      },
      contextsEnAdd: {
        "머리 손질하는 곳에 감": "visit connected sensation indiscretion",
        "여성이 머리 손질하는 곳 꿈을 꿈": "family disturbance merited censures",
        "여성이 머리카락을 물들임": "colored narrowly escape scorn blight",
        "여성이 머리를 매만져 꾸밈": "dressed frivolous bend wishes",
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
