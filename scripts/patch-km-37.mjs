// **배치 37(밀러 Forest~Frogs)이 이미 있는 상징 여섯을 건드린다.**
//
// 새 상징 열은 `kmm37.json`에 있다.
//
//   km1   forest(숲) ← `Forest` 넷 · divination(점치기) ← `Fortune-telling` 셋
//   km8   chicken(닭) ← `Fowl` 둘
//   kmm1  abandon(버림) ← `Forsaking` 하나(=See Abandoned). 「저버림」이 이미 버림의 별칭
//   kmm3  afraid(두려움) ← `Frightened` 하나(=See Affrighted)
//   kmm12 cheated(속임수) ← `Fraud` 셋
//
// **`divination` 은 판별어 표가 비어 있었다**(의미가 하나뿐이었다) — 기존 의미까지 함께
// 채운다(배치 35의 교훈).
//
// **`Fort` 와 `Fortress` 를 갈랐다.** 한국어로 둘 다 「요새」가 되는데 밀러는 표제어가 둘이고
// 뜻도 다르다(지키고 빼앗는 곳 / 갇히는 곳) → **성채 / 요새**로 나눴다. 「진지」는 쓰지
// 않았다 — `cooked-rice`(진지)의 이름이다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-37.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km1: {
    forest: {
      aliasesAdd: ["숲속", "숲으로", "숲에서"],
      contextsAdd: {
        "빽빽한 숲속에 있음": "빽빽한 헤매 길을 잃",
        "숲에서 춥고 배고픔": "춥고 배고 굶주",
        "잎이 우거진 큰 나무 숲을 봄": "큰 나무 아름드리 잎이",
        "글하는 이가 우거진 숲을 봄": "글하는 글을 쓰는 작가",
      },
      contextsEnAdd: {
        "빽빽한 숲속에 있음": "dense loss trade quarrels",
        "숲에서 춥고 배고픔": "cold hungry forced journey",
        "잎이 우거진 큰 나무 숲을 봄": "stately foliage prosperity",
        "글하는 이가 우거진 숲을 봄": "literary fame appreciation public",
      },
    },
    divination: {
      aliasesAdd: ["점을 봤다", "점을 보러", "운수를 봄"],
      contextsAdd: {
        "남에게 가서 점을 침": "찾아가 점집 무당",
        "점을 치거나 점을 봄": "저울질 망설 정하지",
        "처녀가 점을 봄": "처녀 아가씨 여자가",
        "처녀가 점쟁이와 정혼함": "정혼 약혼 혼약",
      },
      contextsEnAdd: {
        "남에게 가서 점을 침": "went someone",
        "점을 치거나 점을 봄": "deliberating vexed caution consent",
        "처녀가 점을 봄": "choice two rivals standing",
        "처녀가 점쟁이와 정혼함": "engaged teller reliant poverty",
      },
    },
  },
  km8: {
    chicken: {
      contextsAdd: {
        "닭을 봄": "보았 마당에",
        "여성이 닭을 봄": "여자가 여성이",
      },
      contextsEnAdd: {
        "닭을 봄": "fowls temporary worry",
        "여성이 닭을 봄": "short disagreement",
      },
    },
  },
  kmm1: {
    abandon: {
      contextsAdd: {
        "처녀가 제 집이나 벗을 저버림": "처녀 아가씨 벗을",
      },
      contextsEnAdd: {
        "처녀가 제 집이나 벗을 저버림": "forsaking estimate decrease acquaintance",
      },
    },
  },
  kmm3: {
    afraid: {
      aliasesAdd: ["깜짝 놀랐다", "화들짝"],
      contextsAdd: {
        "무언가에 깜짝 놀람": "깜짝 화들짝",
      },
      contextsEnAdd: {
        "무언가에 깜짝 놀람": "frightened fleeting",
      },
    },
  },
  kmm12: {
    cheated: {
      aliasesAdd: ["속였다", "속아", "사기를"],
      contextsAdd: {
        "남을 속임": "남을 상대를 속여서",
        "남에게 속아 넘어감": "넘어갔 당했 걸려들",
        "남이 나를 속였다고 나무람": "나무 따졌 몰아세",
      },
      contextsEnAdd: {
        "남을 속임": "defrauding employer degrading disrepute",
        "남에게 속아 넘어감": "defrauded useless defame",
        "남이 나를 속였다고 나무람": "accuse offered high honor",
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
