// **배치 38(밀러 Frost~Garden)이 이미 있는 상징 여섯을 건드린다.**
//
// 새 상징 열은 `kmm38.json`에 있다.
//
//   km5   frost(서리)  ← `Frost` 넷.  **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   km8   garden(동산) ← `Garden` 넷. 〃
//   km1   wind(바람)   ← `Gale` 하나
//   km6   prison(감옥) ← `Gaol` 하나(=See Jail). 「갇힘」쪽은 이미 주공해몽에 여럿 있어
//                        **새로운 것만** 넣는다 — 「감옥에서 빠져나옴」
//   kmm6  bet(내기)    ← `Gambling-house` 둘
//   kmm8  burial(장례) ← `Funeral` 다섯
//
// **`bet`의 별칭 「돈을 걸」이 한 번도 맞은 적이 없다.** 뒤에 오는 「었」이 조사가 아니라
// `isStandalone`이 낱말 조각으로 버린다(CLAUDE.md §29 곁가지 ①) — 「돈을 걸었다」·
// 「돈을 걸고」로 갈고 「노름」을 함께 올린다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-38.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km5: {
    frost: {
      contextsAdd: {
        "서리가 내림": "내렸 내려앉 하얗게",
        "어둡고 음산한 아침에 내린 서리를 봄": "어둡 음산 아침",
        "햇빛 드는 자그마한 들녘에 내린 서리를 봄": "햇빛 들녘 햇살",
        "처녀가 서리 속에 있는 벗을 봄": "처녀 아가씨",
        "서리 속에 있는 벗을 봄": "벗을 친구를 동무",
      },
      contextsEnAdd: {
        "서리가 내림": "fell settled white",
        "어둡고 음산한 아침에 내린 서리를 봄": "dark gloomy morning exile",
        "햇빛 드는 자그마한 들녘에 내린 서리를 봄": "sunlit landscape gilded",
        "처녀가 서리 속에 있는 벗을 봄": "young woman absence waning",
        "서리 속에 있는 벗을 봄": "friend love affair rival",
      },
    },
  },
  km1: {
    wind: {
      contextsAdd: {
        "거센 바람에 휘말림": "휘말 휩쓸 갇혔",
      },
      contextsEnAdd: {
        "거센 바람에 휘말림": "caught gale losses working",
      },
    },
  },
  km6: {
    prison: {
      aliasesAdd: ["빠져나왔다", "탈옥"],
      contextsAdd: {
        "감옥에서 빠져나옴": "빠져나 도망 탈옥",
      },
      contextsEnAdd: {
        "감옥에서 빠져나옴": "escape favorable season",
      },
    },
  },
  km8: {
    garden: {
      contextsAdd: {
        "동산으로 나감": "동산으로 나갔",
        "늘 푸른 나무와 꽃이 가득한 정원을 봄": "푸른 가득",
        "정원에서 채소를 봄": "채소 남새 푸성귀",
        "여성이 정원을 봄": "여자가 여성이",
        "꽃나무 우거진 정원을 정인과 거닒": "정인과 거닐 걸었",
      },
      contextsEnAdd: {
        "동산으로 나감": "went out",
        "늘 푸른 나무와 꽃이 가득한 정원을 봄": "evergreen flowers peace comfort",
        "정원에서 채소를 봄": "vegetables misery calumny",
        "여성이 정원을 봄": "females famous domestic circles",
        "꽃나무 우거진 정원을 정인과 거닒": "walking shrubs unalloyed independent",
      },
    },
  },
  kmm6: {
    bet: {
      aliasesRemove: ["돈을 걸"],
      aliasesAdd: ["노름", "돈을 걸었다", "돈을 걸고"],
      contextsAdd: {
        "노름을 해서 땀": "땄다 따서 이겨서",
        "노름을 해서 잃음": "잃었 잃어 털렸",
      },
      contextsEnAdd: {
        "노름을 해서 땀": "win low associations expense",
        "노름을 해서 잃음": "lose disgraceful undoing",
      },
    },
  },
  kmm8: {
    burial: {
      contextsAdd: {
        "장례를 봄": "장례식을 상여를",
        "낯선 이의 장례를 봄": "낯선 모르는",
        "제 아이의 장례를 봄": "아이의 자식의 아들의",
        "검은 옷을 입고 장례에 참석함": "검은 상복 검정",
        "살붙이의 장례를 봄": "살붙이 일가 친지",
      },
      contextsEnAdd: {
        "장례를 봄": "unhappy marriage sickly offspring",
        "낯선 이의 장례를 봄": "stranger unexpected worries",
        "제 아이의 장례를 봄": "your child grave friendly source",
        "검은 옷을 입고 장례에 참석함": "attend black early widowhood",
        "살붙이의 장례를 봄": "relative nervous troubles",
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
    if (!patch) continue;
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
    if (!patch) continue;
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
