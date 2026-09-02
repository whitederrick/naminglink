// **배치 32(밀러 Fables~Father-in-law)가 이미 있는 상징 넷을 건드린다.**
//
// 새 상징 열여덟은 `kmm32.json`에 있다.
//
//   km2   sparrowhawk(새매)  ← **「송골매」를 뺀다.** 송골매는 falcon 의 이름이지 새매의
//                              것이 아니다(§25 곁가지 — 겹치면 더 정확한 쪽에 넘긴다)
//   km3   marketplace(시장)  ← 밀러 `Fair` 둘. 「장터」가 이미 시장의 별칭이었다
//   km6   face(얼굴)         ← 밀러 `Face` 다섯. 상징이 이미 있었다(판별어 표는 비어 있었다)
//   kmm2  adieu(작별 인사)   ← 밀러 `Farewell` 셋. 「작별」이 이미 이 상징의 별칭이었다
//
// **`Fat` 은 `corpulence` 에 인용만 더한다 — 패치가 필요 없다.** 밀러 자신이 「See
// Corpulent」이고, 그 두 문장은 이미 있는 의미(「제 몸이 뚱뚱해짐」·「남이 뚱뚱한 것을 봄」)와
// **같은 사건**이다. 조립기는 `context` 와 `work` 가 같으면 **인용을 덧붙인다** — 그래서
// `m32.json` 에 같은 문맥 이름으로 적었고, 의미는 늘지 않고 인용만 둘 늘었다.
//
// **`Face` 의 첫 문장(밝은 얼굴 / 일그러진 얼굴)은 안 넣었다** — 밀러 `Countenance` 로
// 이미 들어와 있다(`countenance`(얼굴 생김새)의 두 의미). 겹치는 것은 넣지 않는다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-32.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km2: {
    sparrowhawk: {
      aliasesRemove: ["송골매"],
    },
  },
  km3: {
    marketplace: {
      contextsAdd: {
        "장이 선 곳에 감": "장이",
        "처녀가 장이 선 곳에 감": "처녀 아가씨 여자가",
      },
      contextsEnAdd: {
        "장이 선 곳에 감": "fair profitable congenial companion",
        "처녀가 장이 선 곳에 감": "jovial tempered partner",
      },
    },
  },
  km6: {
    face: {
      aliasesAdd: ["얼굴이", "얼굴을", "낯빛"],
      contextsAdd: {
        "얼굴에 검은 부스럼이 남": "부스럼 검은 종기",
        "젊은이가 밉상인 얼굴을 봄": "밉상 못생 미운",
        "정인의 얼굴이 늙어 보임": "늙어 늙은 주름",
        "낯설고 섬뜩한 얼굴을 봄": "낯설 섬뜩 기괴 낯선",
        "제 얼굴을 봄": "자기 자신의 스스로",
        "거울에 비친 제 얼굴을 봄": "거울 비친",
      },
      contextsEnAdd: {
        "얼굴에 검은 부스럼이 남": "black sore",
        "젊은이가 밉상인 얼굴을 봄": "ugly quarrels",
        "정인의 얼굴이 늙어 보임": "old separation breaking",
        "낯설고 섬뜩한 얼굴을 봄": "strange weird surround",
        "제 얼굴을 봄": "own unhappiness divorce",
        "거울에 비친 제 얼굴을 봄": "mirror displeasure esteem",
      },
    },
  },
  kmm2: {
    adieu: {
      contextsAdd: {
        "작별을 고함": "고했 고하는",
        "처녀가 정인에게 작별을 고함": "처녀 아가씨 정인에게 애인에게",
        "작별하면서 슬프지 않음": "담담 아무렇지 홀가분",
      },
      contextsEnAdd: {
        "작별을 고함": "bidding absent",
        "처녀가 정인에게 작별을 고함": "portends indifference",
        "작별하면서 슬프지 않음": "comfort others soon",
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
