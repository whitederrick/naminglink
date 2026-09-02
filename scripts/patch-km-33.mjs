// **배치 33(밀러 Fatigue~Fever)이 이미 있는 상징 일곱을 건드린다.**
//
// 새 상징 아홉은 `kmm33.json`에 있다.
//
//   km4   feast(잔치)      ← 밀러 `Feast` 둘. 상징이 이미 있었다
//   km5   deer(사슴)       ← 밀러 `Fawn` 둘(=See Deer). 「새끼 사슴」은 사슴의 것이다
//   km7   wall(담)         ← **「울타리」를 뺀다.** 울타리는 fence 의 이름이지 담의 것이 아니다
//   kmm3  afraid(두려움)   ← 밀러 `Fears` 둘
//   kmm5  adulation(아첨)  ← 밀러 `Fawn` 의 「남이 나에게 아첨함」 하나
//   kmm5  ague(학질)       ← 밀러 `Fever` 둘(=See Illness). 「열병」이 이미 학질의 별칭이었다
//   kmm10 carnival(카니발) ← 밀러 `Festival` 하나. 「축제」가 이미 카니발의 별칭이었다
//
// **`Fawn` 은 한 표제어가 두 상징으로 갈렸다** — 밀러의 fawn 은 「새끼 사슴」이면서
// 「알랑거리다」다. 한국어로는 아무 관계가 없는 두 낱말이라 각각의 임자에게 붙였다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-33.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km4: {
    feast: {
      contextsAdd: {
        "잔치에서 어수선하거나 볼썽사나운 일이 벌어짐": "어수선 볼썽 소란",
        "잔치에 늦게 다다름": "늦게 늦었 지각",
      },
      contextsEnAdd: {
        "잔치에서 어수선하거나 볼썽사나운 일이 벌어짐": "disorder misconduct negligence",
        "잔치에 늦게 다다름": "arrive late vexing occupy",
      },
    },
  },
  km5: {
    deer: {
      contextsAdd: {
        "젊은이가 새끼 사슴을 봄": "젊은이 젊은",
        "새끼 사슴을 봄": "새끼 어린",
      },
      contextsEnAdd: {
        "젊은이가 새끼 사슴을 봄": "faithfulness love",
        "새끼 사슴을 봄": "upright true honest",
      },
    },
  },
  km7: {
    wall: {
      aliasesRemove: ["울타리"],
    },
  },
  kmm3: {
    afraid: {
      contextsAdd: {
        "까닭 없이 두려움을 느낌": "까닭없이 그냥 이유도",
        "처녀가 두려움을 느낌": "처녀 아가씨",
      },
      contextsEnAdd: {
        "까닭 없이 두려움을 느낌": "cause engagements expected",
        "처녀가 두려움을 느낌": "forebodes unfortunate",
      },
    },
  },
  kmm5: {
    adulation: {
      contextsAdd: {
        "남이 나에게 아첨함": "나에게 내게 알랑거렸",
      },
      contextsEnAdd: {
        "남이 나에게 아첨함": "fawns cajoles guise",
      },
    },
    ague: {
      aliasesAdd: ["열병에", "고열"],
      contextsAdd: {
        "열병에 걸림": "열병 고열 열이",
        "집안 사람이 열병으로 앓는 것을 봄": "집안 식구가 가족이",
      },
      contextsEnAdd: {
        "열병에 걸림": "stricken malady trifling slipping",
        "집안 사람이 열병으로 앓는 것을 봄": "family temporary",
      },
    },
  },
  kmm10: {
    carnival: {
      contextsAdd: {
        "축제 자리에 있음": "축제 자리에",
      },
      contextsEnAdd: {
        "축제 자리에 있음": "indifference realities dependent",
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
