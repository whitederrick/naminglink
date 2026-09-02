// **배치 34(밀러 Fiddle~Fireman)가 이미 있는 상징 넷에 붙는다.**
//
// 새 상징 열둘은 `kmm34.json`에 있다.
//
//   km3   fight(싸움)   ← 밀러 `Fight` 일곱.  km3 flute(피리) ← 밀러 `Fife` 셋
//   km5   field(밭)     ← 밀러 `Field` 넷
//   km6   fire(불)      ← 밀러 `Fire` 일곱. 주공해몽 열아홉이 이미 있다
//
// **밀러 `Fight` 의 두 문장은 넣지 않았다** — 흑인을 겨냥한 비하 대목이다
// (「negroes attack you with razors」·「fighting negroes」). 절차 ⑤의 자리이고,
// **인용문에만 두는 것으로도 안 된다** — 그 문장은 인용이 아니라 **꿈의 그림 자체**가
// 비하이기 때문이다. 이 서비스는 그 그림을 23개 언어로 보여 준다. 나머지 일곱 문장으로
// 커버리지는 선다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-34.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km3: {
    fight: {
      contextsAdd: {
        "싸움에 뛰어듦": "뛰어들 휘말 붙었",
        "남이 싸우는 것을 봄": "남이 남들이 구경",
        "여성이 싸움 꿈을 꿈": "여성이",
        "처녀가 정인이 싸우는 것을 봄": "처녀 아가씨 정인이 애인이",
        "싸움에서 짐": "졌다 지고 밀렸",
        "덤빈 자를 물리침": "물리쳤 때려 이겼",
        "두 사람이 총으로 싸우는 것을 봄": "총으로 권총 두사람",
      },
      contextsEnAdd: {
        "싸움에 뛰어듦": "engage opponents suits",
        "남이 싸우는 것을 봄": "squandering time money",
        "여성이 싸움 꿈을 꿈": "slander gossip warning",
        "처녀가 정인이 싸우는 것을 봄": "lover unworthiness",
        "싸움에서 짐": "defeated right property",
        "덤빈 자를 물리침": "whip assailant courage perseverance",
        "두 사람이 총으로 싸우는 것을 봄": "pistols worries perplexities",
      },
    },
    flute: {
      contextsAdd: {
        "피리 소리를 들음": "소리를 들었",
        "제가 피리를 붊": "내가 제가 스스로",
        "여성이 피리 꿈을 꿈": "여자가 여성이",
      },
      contextsEnAdd: {
        "피리 소리를 들음": "hearing unexpected call defend",
        "제가 피리를 붊": "yourself reputation intact",
        "여성이 피리 꿈을 꿈": "woman soldier husband",
      },
    },
  },
  km5: {
    field: {
      contextsAdd: {
        "마른 대만 남은 밭을 봄": "마른 그루터기 시든",
        "푸르거나 곡식이 익은 밭을 봄": "푸른 익은 곡식",
        "갓 갈아엎은 밭을 봄": "엎은 뒤집힌",
        "써레질을 마쳐 씨 뿌릴 채비가 된 밭을 봄": "써레 채비 고른",
      },
      contextsEnAdd: {
        "마른 대만 남은 밭을 봄": "dead stubble dreary prospects",
        "푸르거나 곡식이 익은 밭을 봄": "green ripe abundance",
        "갓 갈아엎은 밭을 봄": "newly early advancement",
        "써레질을 마쳐 씨 뿌릴 채비가 된 밭을 봄": "harrowed planting endeavor",
      },
    },
  },
  km6: {
    fire: {
      contextsAdd: {
        "불을 보되 데지 않음": "데지 않았 멀쩡",
        "제 집이 불타는 것을 봄": "불타는 살던집",
        "장사하는 이가 제 가게가 타는 것을 지켜봄": "점포 상점 지켜보",
        "불을 끄면서 데지 않음": "끄면서 끄는데 진화",
        "불탄 가게의 잔해를 봄": "잔해 잿더미 타고 남은",
        "불을 지핌": "지폈 지피 피웠",
        "큰불이 난 것을 봄": "대화재 크게 번진",
      },
      contextsEnAdd: {
        "불을 보되 데지 않음": "favorable voyagers continued",
        "제 집이 불타는 것을 봄": "loving obedient careful",
        "장사하는 이가 제 가게가 타는 것을 지켜봄": "store looking rush profitable",
        "불을 끄면서 데지 않음": "fighting worked worried conduct",
        "불탄 가게의 잔해를 봄": "ruins give amassing unforeseen",
        "불을 지핌": "kindling surprises distant",
        "큰불이 난 것을 봄": "large conflagration sailors unlimited",
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

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44 — 조용한 성공이 가장 비싸다).
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
