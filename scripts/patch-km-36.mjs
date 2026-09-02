// **배치 36(밀러 Flight~Foot-log)이 이미 있는 상징 다섯을 건드린다.**
//
// 새 상징 여덟은 `kmm36.json`에 있다.
//
//   km2   fleeing(달아남)   ← 밀러 `Flight` 셋
//   km3   flute(피리)       ← 밀러 `Flute` 둘(배치 34의 `Fife` 에 이어)
//   km3   fog(안개)         ← 밀러 `Fog` 셋
//   km8   horse(말)         ← 밀러 `Foal` 하나. 「망아지」가 이미 말의 별칭이었다
//   km9   bridge(다리)      ← 밀러 `Foot-log` 넷. **「외나무다리」가 이미 다리의 별칭**이고
//                             밀러 자신이 「See Bridge」다 — ⓪ grep 이 EXACT 로 잡았다
//   km9   wheat-flour(밀가루) ← 밀러 `Flour` 셋
//
// **`fog`·`wheat-flour` 는 판별어 표가 비어 있었다**(의미가 하나뿐이었다). 배치 35에서
// 배운 대로 **기존 의미까지 함께 채운다** — 붙이는 쪽만 채우면 기존 의미가 0점으로 남는다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-36.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km2: {
    fleeing: {
      aliasesAdd: ["도망쳤다", "도망치", "달아났다"],
      contextsAdd: {
        "도망침": "도망 쫓겨",
        "처녀가 도망침": "처녀 아가씨 여자가",
        "무언가가 나에게서 달아나는 것을 봄": "나에게서 내게서 물러",
      },
      contextsEnAdd: {
        "도망침": "flight disgrace",
        "처녀가 도망침": "reproach throw aside",
        "무언가가 나에게서 달아나는 것을 봄": "anything victorious contention",
      },
    },
  },
  km3: {
    flute: {
      contextsAdd: {
        "피리 가락을 들음": "가락 곡조",
        "처녀가 피리를 붊": "처녀 아가씨",
      },
      contextsEnAdd: {
        "피리 가락을 들음": "notes meeting distance profitable",
        "처녀가 피리를 붊": "playing engaging manners",
      },
    },
    fog: {
      aliasesAdd: ["안개가", "안개를", "안개 속"],
      contextsAdd: {
        "안개가 앞을 가림": "앞을 가려 뿌옇",
        "짙은 안개 속을 헤치고 감": "짙은 헤치고 지나가",
        "안개에서 빠져나옴": "빠져나 벗어났 걷혔",
        "처녀가 안개 속에 있음": "처녀 아가씨 여자가",
      },
      contextsEnAdd: {
        "안개가 앞을 가림": "obscured view",
        "짙은 안개 속을 헤치고 감": "traveling dense worries",
        "안개에서 빠져나옴": "emerge weary profitable",
        "처녀가 안개 속에 있음": "salacious scandal innocence standing",
      },
    },
  },
  km8: {
    horse: {
      contextsAdd: {
        "망아지를 봄": "망아지 새끼말",
      },
      contextsEnAdd: {
        "망아지를 봄": "foal undertakings rather fortunate",
      },
    },
  },
  km9: {
    bridge: {
      contextsAdd: {
        "맑은 시내에 놓인 외나무다리를 건넘": "외나무 통나무",
        "흐린 물에 놓인 외나무다리를 건넘": "걸쭉 탁하고",
        "외나무다리에서 맑은 물로 떨어짐": "떨어져 맑은물로",
        "외나무다리에서 흐린 물로 떨어짐": "떨어져서 흐린물",
      },
      contextsEnAdd: {
        "맑은 시내에 놓인 외나무다리를 건넘": "foot-log employment",
        "흐린 물에 놓인 외나무다리를 건넘": "thick temporary disturbance",
        "외나무다리에서 맑은 물로 떨어짐": "widowhood agreeable",
        "외나무다리에서 흐린 물로 떨어짐": "prospects",
      },
    },
    "wheat-flour": {
      aliasesAdd: ["밀가루가", "밀가루를"],
      contextsAdd: {
        "밀가루와 겨가 서로 섞임": "겨가 섞였",
        "밀가루를 봄": "보았 담긴",
        "처녀가 제 몸에 밀가루가 묻은 것을 봄": "처녀 아가씨 묻은",
        "밀가루를 사고팖": "사고팔 팔았 장사",
      },
      contextsEnAdd: {
        "밀가루와 겨가 서로 섞임": "bran mixed",
        "밀가루를 봄": "frugal happy life",
        "처녀가 제 몸에 밀가루가 묻은 것을 봄": "herself ruled husband cares",
        "밀가루를 사고팖": "dealing hazardous speculations",
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
