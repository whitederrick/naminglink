// **배치 42(밀러 Grease~Hail)가 이미 있는 상징 다섯을 건드린다.**
//
// 새 상징 열은 `kmm42.json`에 있다.
//
//   km9    oil(기름)     ← `Grease` 하나.  **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   km9    dog(개)       ← `Greyhound` 셋. 「사냥개」가 이미 `dog` 의 별칭이다
//   kmm11  cave(동굴)    ← `Grotto` 하나.  「석굴」이 이미 `cave` 의 별칭이다
//   kmm2   acrobat(곡예사) ← `Gymnast` 하나. 「체조」를 별칭으로 함께 올린다
//   km6    face(얼굴)    ← `Haggard` 둘
//
// ## 밀러 `Gypsy` 는 **통째로 넣지 않았다**
//
// 표제어 다섯 문장이 전부 **한 겨레를 두고 속임·손해·경솔한 혼인을 점친다**
// (「trading with a gypsy, you will lose money」 · 「a gypsy tell her fortune → speedy and
// unwise marriage」). CLAUDE.md §31 의 가르는 물음 — **「이 문장에서 비하를 빼면 남는 꿈이
// 있는가」** — 에 답이 없다. 그 겨레가 곧 그 꿈의 내용이고, 빼면 남는 것은
// 「점쟁이가 점을 봐 준다」뿐인데 그것은 이미 `divination` 이 갖고 있다.
// → **항목을 만들지 않는다.** 커버리지 대조에서 표제어 하나가 비는 것이 옳은 자리다(§24 · §31).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-42.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km6: {
    face: {
      aliasesAdd: ["낯이", "낯을"],
      contextsAdd: {
        "초췌한 얼굴을 봄": "초췌 수척 핼쑥",
        "제 얼굴이 초췌하고 지쳐 보임": "지쳐 내얼굴 제얼굴",
      },
      contextsEnAdd: {
        "초췌한 얼굴을 봄": "haggard misfortune defeat love",
        "제 얼굴이 초췌하고 지쳐 보임": "own distressed female engagements",
      },
    },
  },
  km9: {
    oil: {
      contextsAdd: {
        "기름을 먹음": "먹었 마셨",
        "기름 속에 있음": "속에 뒤집어 범벅",
      },
      contextsEnAdd: {
        "기름을 먹음": "ate drank",
        "기름 속에 있음": "in travels disagreeable polished strangers",
      },
    },
    dog: {
      contextsAdd: {
        "날쌘 사냥개를 봄": "날쌘 늘씬 날렵",
        "사냥개가 어린 여자아이를 따라감": "여자아이 계집아이 소녀를",
        "제 사냥개를 가짐": "제것 내것 가지고있",
      },
      contextsEnAdd: {
        "날쌘 사냥개를 봄": "greyhound fortunate object",
        "사냥개가 어린 여자아이를 따라감": "following young girl legacy unknown",
        "제 사냥개를 가짐": "owned signifies where expected",
      },
    },
  },
  kmm2: {
    acrobat: {
      aliasesAdd: ["체조", "체조하는"],
      contextsAdd: {
        "체조하는 이를 봄": "체조 몸놀림",
      },
      contextsEnAdd: {
        "체조하는 이를 봄": "gymnast misfortune speculation trade",
      },
    },
  },
  kmm11: {
    cave: {
      contextsAdd: {
        "석굴을 봄": "석굴 바위굴",
      },
      contextsEnAdd: {
        "석굴을 봄": "grotto incomplete inconstant friendships",
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
