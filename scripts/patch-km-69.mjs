// **배치 69(밀러 Jealousy~Jockey)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 셋은 `kmm69.json` 에 있다 — jelly(젤리)·jessamine(재스민)·jockey(기수).
//
//   kmm31  envy(시샘)  ← 밀러 `Jealousy` 다섯
//   kmm??  dance(춤)   ← 밀러 `Jig` 둘
//
// ## 표제어 셋을 통째로 건너뛴다 — **커버리지가 비는 것이 옳다**(§24)
//
//   Jew         **그림 자체가 비하다**(§31 뒷갈래, `Gypsy` 와 같은 자리). 여섯 문장이 전부
//               한 겨레를 두고 재물욕·아첨·향락을 점친다. 비하를 빼면 **남는 꿈이 없다.**
//   Jester      「어릿광대를 봄」이 `acrobat` 에 **이미 있다**(밀러 `Harlequin`).
//   Jew's-harp  한국어 이름 「구금」이 **「구금(拘禁)」과 동음이의어**라 상징 이름으로 못 쓴다.
//               그리고 「To play one」의 그림은 `harp` 의 「하프를 손수 켬」에 이미 있다.
//
// ## 문장 둘도 안 넣는다
//
//   Jig 첫 문장   「To dance a jig…」            → `dance` 의 「제가 춤을 춤」과 그림이 같다
//   Jig 둘째 문장 「To see negroes dancing…」    → **그림 자체가 비하다**(§31)
//
// ## 성별만 다른 갈래를 넣을 수 있었던 까닭
//
// 「처녀가 정인을 시샘함」과 「정인을 시샘함」은 **가르는 것이 성별뿐**이다. 그 갈래가
// **하나**이고 짝이 일반 문장이라 「처녀」 대 「정인」으로 1:1 동점이 되고, **좁은 쪽을 파일에서
// 앞에** 두어 풀었다(배치 55에서 좁힌 규칙 · 배치 57·58과 같은 자리).
//
// **기존 「남을 시샘함」이 「남을 내가」를 쥐고 있어** 새 다섯에는 그 말을 못 준다 —
// 아내·남편·정인·처녀·서로로 갈랐다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-69.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

/** id 가 어느 km 파일에 있는지 찾는다 — 파일 이름을 손으로 적지 않는다(§5). */
function fileOf(id) {
  for (const f of readdirSync(DIR)) {
    if (!/^km/.test(f)) continue;
    let rows;
    try {
      rows = JSON.parse(readFileSync(path.join(DIR, f), "utf8"));
    } catch {
      continue;
    }
    if (Array.isArray(rows) && rows.some((r) => r.id === id)) return f;
  }
  stop(`${id} 가 어느 km 파일에도 없다 — 파일이 바뀌었다.`);
}

const PATCHES = {
  envy: {
    contextsAdd: {
      "아내를 시샘함": "아내 처를 안사람",
      "남편을 시샘함": "남편 바깥양반",
      "처녀가 정인을 시샘함": "처녀 아가씨",
      "정인을 시샘함": "정인 애인 사랑하는",
      "여느 일로 서로 시샘함": "서로 남녀가 여느",
    },
    contextsEnAdd: {
      "아내를 시샘함": "wife influence narrow-minded",
      "남편을 시샘함": "husband shocking incidents vex travesty",
      "처녀가 정인을 시샘함": "young favorably impressed charms herself",
      "정인을 시샘함": "sweetheart seek displace rival",
      "여느 일로 서로 시샘함": "men women common every-day discharge",
    },
  },
  dance: {
    contextsAdd: {
      "정인이 춤추는 것을 봄": "정인 애인 사랑하는",
      "발레 하는 여자들이 춤추는 것을 봄": "발레 무희",
    },
    contextsEnAdd: {
      // 「merry」는 기존 「즐거운 아이들이 춤추는 것을 봄」이 이미 쥐고 있다 — 새 쪽에서 뺐다.
      "정인이 춤추는 것을 봄": "sweetheart companion hopeful disposition",
      "발레 하는 여자들이 춤추는 것을 봄": "ballet girls undignified amusements low desires",
    },
  },
};

let changed = 0;

for (const [id, patch] of Object.entries(PATCHES)) {
  const file = fileOf(id);
  const p = path.join(DIR, file);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  const row = rows.find((r) => r.id === id);
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
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file} 고침 — ${id}`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [id, patch] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, fileOf(id)), "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
