// **배치 41(밀러 Golf~Gravy)이 이미 있는 상징 다섯을 건드린다.**
//
// 새 상징 열둘은 `kmm41.json`에 있다.
//
//   km5   grain(곡식)  ← `Grain` 둘
//   km5   grave(무덤)  ← `Grave` 열둘. 밀러에서 가장 긴 표제어 가운데 하나다
//   km8   grass(풀)    ← `Grass` 넷
//   kmm2  broth(국물)  ← `Gravy` 하나. 「고기 국물을 보는 꿈」이 이미 그 상징에 있다
//   km7   stone(돌)    ← **별칭 「자갈」을 뺀다**(아래)
//
// ## 「자갈」을 `stone` 에서 `gravel` 로 넘긴다
//
// 밀러 `Gravel` 은 뜻이 따로다(열매 맺지 못하는 꾀 · 잘못 손댄 재산). 그런데 「자갈」이
// `stone` 의 별칭이라 새 `gravel` 을 세우면 **한 문장에 둘 다 걸린다**(`findTerm` 은 상징마다
// 따로 돈다). §25 곁가지의 규칙대로 **더 정확한 쪽에 넘긴다** — 「자갈」은 `gravel` 의 것이다.
// `stone` 은 「돌」·「돌멩이」를 그대로 갖는다(「조약돌」은 판별어에 있고 그것은 안 건드린다 —
// 한국어 판별어는 별칭 임자와 무관하게 산다).
//
// ## 밀러 `Grave` 에서 안 넣은 것
//
// 「Grave is an unfortunate dream. Ill luck ... also sickness is threatened.」는 **표제어
// 전체에 대한 총평**이라 꿈의 그림이 없다 — 문맥으로 적을 것이 없어 넣지 않았다.
// 나머지 열둘은 전부 넣었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-41.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km5: {
    grain: {
      contextsAdd: {
        "곡식 꿈을 꿈": "곡식을 곡식이",
        "처녀가 곡식 꿈을 꿈": "처녀 아가씨",
      },
      contextsEnAdd: {
        "곡식 꿈을 꿈": "most fortunate betokening wealth",
        "처녀가 곡식 꿈을 꿈": "young woman adoring companions",
      },
    },
    grave: {
      aliasesAdd: ["묏자리", "무덤을", "무덤이"],
      contextsAdd: {
        "새로 판 무덤을 봄": "새로 방금",
        "새로 판 무덤을 찾아감": "찾아갔 찾아가 다녀왔",
        "무덤 위를 걸음": "걸었 밟고 위를",
        "빈 무덤을 들여다봄": "들여다 비어있 텅빈",
        "머리만 내놓고 흙에 덮인 사람을 봄": "머리만 덮인 파묻힌",
        "자기 무덤을 봄": "자기 자신의 내가",
        "무덤을 팜": "파고 파는 파헤",
        "무덤을 파는데 해가 비침": "해가 햇빛 햇살",
        "묻으려던 주검이 사라짐": "사라졌 없어졌 온데간데",
        "여성이 밤에 묘지에서 빈 무덤 말고는 누울 곳을 못 찾음": "밤이 여자가 잘곳",
        "무덤 위에만 풀이 있는 메마른 묘지를 봄": "메마른 위에만 황량",
        "제 주검이 무덤에 있는 것을 봄": "주검이 시체가 송장",
      },
      contextsEnAdd: {
        "새로 판 무덤을 봄": "newly made suffer wrongdoings",
        "새로 판 무덤을 찾아감": "visit dangers serious hanging",
        "무덤 위를 걸음": "walking early unfortunate marriage",
        "빈 무덤을 들여다봄": "look empty disappointment friends",
        "머리만 내놓고 흙에 덮인 사람을 봄": "covering except head distressing property",
        "자기 무덤을 봄": "own warily engulf watchful",
        "무덤을 팜": "digging uneasiness undertaking thwart",
        "무덤을 파는데 해가 비침": "shining good seeming embarrassments",
        "묻으려던 주검이 사라짐": "return corpse bury disappeared obscure",
        "여성이 밤에 묘지에서 빈 무덤 말고는 누울 곳을 못 찾음": "night overtakes graveyard sleep sorrow",
        "무덤 위에만 풀이 있는 메마른 묘지를 봄": "barren despondency shoulder burden",
        "제 주검이 무덤에 있는 것을 봄": "hopeless despairing oppression",
      },
    },
  },
  km7: {
    stone: {
      aliasesRemove: ["자갈"],
    },
  },
  km8: {
    grass: {
      contextsAdd: {
        "푸른 풀밭을 봄": "푸른 파란 싱그",
        "푸른 풀밭 너머 험한 산을 봄": "너머 험한 산이",
        "푸른 풀밭을 지나다 시든 자리를 지남": "지나다 지나가다 시든자리",
        "시든 풀을 봄": "시든 마른 누렇",
      },
      contextsEnAdd: {
        "푸른 풀밭을 봄": "promise happy advanced accumulation voyage",
        "푸른 풀밭 너머 험한 산을 봄": "rugged mountain beyond expanse remote",
        "푸른 풀밭을 지나다 시든 자리를 지남": "passing through places sickness embarrassments",
        "시든 풀을 봄": "withered reverse predicted",
      },
    },
  },
  kmm2: {
    broth: {
      contextsAdd: {
        "고기 국물을 먹음": "먹었 마셨 떠먹",
      },
      contextsEnAdd: {
        "고기 국물을 먹음": "eating gravy failing",
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
    for (const w of patch.aliasesRemove ?? []) {
      if (row.aliases.includes(w)) stop(`확인 실패: ${id} 에서 「${w}」가 안 지워졌다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
