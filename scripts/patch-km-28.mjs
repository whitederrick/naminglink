// **배치 28(밀러 Drouth~Dynamo)이 이미 있는 상징 여섯에 붙는다 — 그 매칭 키를 고친다.**
//
// 새 상징 열셋은 `kmm28.json`에 있다. 그런데 여섯은 이미 사전에 있는 상징이고, 매칭 키는
// 그 상징이 처음 실린 파일에 있다. **같은 id를 두 파일에 적으면 조립이 멈추므로**(절차 ⑥)
// 새 파일에 적지 않고 원래 파일의 항목을 고친다.
//
//   km1  duck(오리) · manure(거름)
//   km2  drum(북)
//   km5  wild-duck(물오리)
//   km6  prison(감옥)
//   km8  death(죽음)
//
// **같이 고치는 것 둘**
//
// ① `duck`이 `wild-duck`의 이름을 쥐고 있었다 — 별칭에 「물오리」·「청둥오리」가 있었다.
//    이번 배치가 밀러 「wild ducks on a clear stream」을 `wild-duck`에 붙이므로, 그대로 두면
//    「맑은 시내에 물오리가 있었다」가 `duck`으로도 걸려 두 상징이 함께 뜬다(§28).
//    이름의 임자에게 돌려준다.
// ② `duck`의 「오리를 잡음」(주공해몽 捕)이 판별어로 「사냥」을 쥐고 있었다. 밀러의
//    「오리를 사냥함」이 들어오면 같은 낱말을 두 의미가 나눠 갖게 된다(§30 곁가지 — 형제끼리
//    판별어를 나눠 가질 수 없다). 손으로 붙잡는 쪽에서 「사냥」을 빼고 「손으로」를 준다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-28.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

/** 파일 → id → 할 일 */
const PATCHES = {
  km1: {
    duck: {
      aliasesRemove: ["물오리", "청둥오리"],
      aliasesAdd: ["오리 떼", "흰 오리"],
      contextsReplace: {
        "오리를 잡음": "잡았 잡아 붙잡 손으로",
      },
      contextsAdd: {
        "흰 오리가 농가 둘레에 있음": "농가 농장 마당에 헛간",
        "오리를 사냥함": "사냥 총으로 사냥꾼",
        "오리가 총에 맞는 것을 봄": "총에 쏘았 쏘는 맞았",
        "오리가 나는 것을 봄": "날아 날았 하늘 날아가",
      },
      contextsEnReplace: {
        "오리를 잡음": "caught catching grabbed",
      },
      contextsEnAdd: {
        "흰 오리가 농가 둘레에 있음": "white farm thrift harvest",
        "오리를 사냥함": "hunt hunting",
        "오리가 총에 맞는 것을 봄": "shot",
        "오리가 나는 것을 봄": "flying flew",
      },
    },
    manure: {
      contextsAdd: {
        "처녀가 거름더미를 봄": "처녀 아가씨 여자가",
        "거름더미를 봄": "더미 쌓아둔",
      },
      contextsEnAdd: {
        "처녀가 거름더미를 봄": "young woman marry wealth",
        "거름더미를 봄": "dunghill unexpected profits",
      },
    },
  },
  km2: {
    drum: {
      contextsAdd: {
        "북이 낮게 울리는 소리를 들음": "낮게 둔하 먹먹 희미",
        "북을 봄": "보았 눈에 놓여있",
      },
      contextsEnAdd: {
        "북이 낮게 울리는 소리를 들음": "muffled distress aid",
        "북을 봄": "see amiability prosperity",
      },
    },
  },
  km5: {
    "wild-duck": {
      contextsAdd: {
        "물오리가 집 안으로 들어옴": "안으로 들어왔 들어와 방으로",
        "맑은 시내에 물오리가 있음": "시내 개울 냇물 강물 맑은",
      },
      contextsEnAdd: {
        "물오리가 집 안으로 들어옴": "came inside house",
        "맑은 시내에 물오리가 있음": "clear stream journeys sea",
      },
    },
  },
  km6: {
    prison: {
      contextsAdd: {
        "여성이 지하 감옥에 갇혀 있음": "여자가 처녀가 여성이",
        "불이 밝혀진 지하 감옥을 봄": "밝혀진 환하 불빛이 밝은",
        "지하 감옥에 갇혀 있음": "지하 토굴 지하실",
      },
      contextsEnAdd: {
        "여성이 지하 감옥에 갇혀 있음": "woman indiscretion honorable",
        "불이 밝혀진 지하 감옥을 봄": "lighted entanglements",
        "지하 감옥에 갇혀 있음": "struggles disenthrall obstacles",
      },
    },
  },
  km8: {
    death: {
      contextsAdd: {
        "사나운 들짐승이 죽어 가는 것을 봄": "사나운 들짐승 맹수 야수",
        "집짐승이 죽어 가는 것을 봄": "집짐승 가축 기르던",
      },
      contextsEnAdd: {
        // 「animal」과 「animals」는 부분 문자열로 겹쳐 동점 위험이다(verify-dream-km 이 잡았다).
        "사나운 들짐승이 죽어 가는 것을 봄": "wild savage escape",
        "집짐승이 죽어 가는 것을 봄": "domestic agony unlucky",
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
      const at = (row.aliases ?? []).indexOf(w);
      if (at < 0) stop(`${id}: 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases.splice(at, 1);
      changed++;
    }
    for (const w of patch.aliasesAdd ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다.`);
      row.aliases.push(w);
      changed++;
    }
    for (const [k, v] of Object.entries(patch.contextsReplace ?? {})) {
      if (!(k in row.contexts)) stop(`${id}: 판별어 「${k}」가 없다.`);
      row.contexts[k] = v;
      changed++;
    }
    for (const [k, v] of Object.entries(patch.contextsEnReplace ?? {})) {
      if (!(k in row.contexts_en)) stop(`${id}: 영어 판별어 「${k}」가 없다.`);
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

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44 — 조용한 성공이 가장 비싸다).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    for (const w of patch.aliasesRemove ?? []) {
      if (row.aliases.includes(w)) stop(`확인 실패: ${id} 에 「${w}」가 남아 있다.`);
    }
    for (const k of Object.keys(patch.contextsAdd ?? {})) {
      if (!(k in row.contexts)) stop(`확인 실패: ${id} 에 「${k}」가 안 들어갔다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
