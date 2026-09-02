// **배치 44(밀러 Hand~Harlequin)는 대부분 이미 있는 상징에 붙는다.**
//
// 새 상징 셋은 `kmm44.json`에 있다 — `handbill`(전단지) · `handwriting`(필체) · `harem`(하렘).
//
//   km5   hand(손)             ← `Hand` 열일곱
//   km9   shackles(족쇄)       ← `Handcuffs` 넷. 「수갑」이 이미 그 상징의 별칭이다
//   km7   handkerchief(손수건) ← `Handkerchiefs` 일곱. **판별어 표가 비어 있었다**
//   km6   face(얼굴)           ← `Handsome` 둘
//   kmm38 gallows(교수대)      ← `Hanging` 하나(=See Execution). 「교수형」이 이미 별칭이다
//   km2   rabbit(토끼)         ← `Hare` 여섯(=See Rabbit)
//   kmm2  acrobat(곡예사)      ← `Harlequin` 셋. 「광대」가 이미 별칭이라 **어릿광대는 새 상징을
//                                세우지 않는다** — 「어릿광대」가 「광대」를 품어 둘 다 걸린다(§25 곁가지)
//
// ## 밀러 `Handkerchiefs` 의 첫 문장은 안 넣었다
//
// 「To dream of handkerchiefs, denotes flirtations and contingent affairs.」는 **표제어 전체에
// 대한 총평**이고, `handkerchief` 에는 이미 주공해몽 「손수건을 봄」이 있다 — 같은 자리다
// (배치 41 `Grave` 의 총평 문장과 같은 판정).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-44.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km2: {
    rabbit: {
      aliasesAdd: ["토끼가", "토끼를", "멧토끼"],
      contextsAdd: {
        "토끼가 달아나는 것을 봄": "달아나 도망 달아났",
        "토끼를 붙잡음": "붙잡 잡았",
        "토끼를 길들여 기름": "길들 기르 키우",
        "죽은 토끼를 봄": "죽은 죽어",
        "개에게 쫓기는 토끼를 봄": "쫓기 개에게",
        "토끼를 쏘아 잡음": "쏘았 쏘아 총으로",
      },
      contextsEnAdd: {
        "토끼가 달아나는 것을 봄": "escaping valuable mysterious way",
        "토끼를 붙잡음": "capture victor contest",
        "토끼를 길들여 기름": "pets orderly unintelligent companion",
        "죽은 토끼를 봄": "dead betokens prosy affair",
        "개에게 쫓기는 토끼를 봄": "chased dogs contentions friendly relations",
        "토끼를 쏘아 잡음": "shoot violent measures rightful possessions",
      },
    },
  },
  km5: {
    hand: {
      aliasesAdd: ["손이", "손을", "손에"],
      contextsAdd: {
        "고운 손을 봄": "고운 아름다운 예쁜",
        "밉고 일그러진 손을 봄": "밉고 일그러 흉하게",
        "손에 피가 묻은 것을 봄": "피가 피를 핏자국",
        "손을 다침": "다쳤 다친 상처",
        "몸에서 떨어져 나온 손을 봄": "떨어져 잘린 잘려",
        "손을 뎀": "데었 데어 화상",
        "손이 커진 것을 봄": "커진 커졌 커다래",
        "손이 작아진 것을 봄": "작아진 작아졌 조그매",
        "손이 더러워진 것을 봄": "더러 지저분 때가",
        "손을 씻음": "씻었 씻는",
        "여성이 제 손을 흐뭇하게 바라봄": "제손 흐뭇 뿌듯",
        "여성이 남의 손을 흐뭇하게 바라봄": "남의손 다른사람의 그이의",
        "여성이 남자에게 손을 잡힘": "잡혔 잡히 붙들",
        "여성이 남에게 손등에 입맞춤을 받음": "입맞춤 입을 손등",
        "손을 데지 않고 불을 다룸": "불을 불길 만졌",
        "손이 묶임": "묶였 묶인 결박",
        "묶인 손을 풀어냄": "풀어냈 풀었 끊고",
      },
      contextsEnAdd: {
        "고운 손을 봄": "beautiful distinction rise calling",
        "밉고 일그러진 손을 봄": "ugly malformed poverty",
        "손에 피가 묻은 것을 봄": "blood estrangement censure family",
        "손을 다침": "injured succeed striving obtain",
        "몸에서 떨어져 나온 손을 봄": "detached solitary views feelings",
        "손을 뎀": "burn overreach bounds struggles",
        "손이 커진 것을 봄": "enlarged quick advancement",
        "손이 작아진 것을 봄": "smaller reverse predicted",
        "손이 더러워진 것을 봄": "soiled envious unjust",
        "손을 씻음": "wash participate joyous festivity",
        "여성이 제 손을 흐뭇하게 바라봄": "admire own proof sincere regard",
        "여성이 남의 손을 흐뭇하게 바라봄": "others subjected whims jealous",
        "여성이 남자에게 손을 잡힘": "hold enticed illicit engagements",
        "여성이 남에게 손등에 입맞춤을 받음": "lets kiss gossips reputation",
        "손을 데지 않고 불을 다룸": "handle fire without rank commanding",
        "손이 묶임": "tied involved difficulties",
        "묶인 손을 풀어냄": "loosening force submit dictations",
      },
    },
  },
  km6: {
    face: {
      contextsAdd: {
        "제 얼굴이 잘생겨 보임": "잘생 훤하 준수",
        "남이 잘생겨 보임": "남들 다른사람 남이",
      },
      contextsEnAdd: {
        "제 얼굴이 잘생겨 보임": "handsome looking ingenious flatterer",
        "남이 잘생겨 보임": "others appearing confidence fast",
      },
    },
  },
  km7: {
    handkerchief: {
      aliasesAdd: ["손수건을", "손수건이"],
      contextsAdd: {
        "손수건을 봄": "보았 놓여",
        "손수건을 잃음": "잃었 잃어",
        "찢어진 손수건을 봄": "찢어 해어",
        "더러워진 손수건을 봄": "더러 지저분",
        "새하얀 손수건이 무더기로 있음": "새하얀 무더기 잔뜩",
        "물들인 손수건을 봄": "물들인 알록 색깔",
        "비단 손수건을 봄": "비단 명주",
        "처녀가 손수건을 흔들어 인사함": "흔들 작별 인사",
      },
      contextsEnAdd: {
        "손수건을 봄": "saw lying",
        "손수건을 잃음": "lose broken engagement fault",
        "찢어진 손수건을 봄": "torn quarrels straits reconciliation",
        "더러워진 손수건을 봄": "soiled corrupted indiscriminate associations",
        "새하얀 손수건이 무더기로 있음": "pure large lots resist insistent",
        "물들인 손수건을 봄": "colored strictly moral ingenuity opprobrium",
        "비단 손수건을 봄": "silk magnetic personality radiating cheerfulness",
        "처녀가 손수건을 흔들어 인사함": "wave adieu recognition questionable trip",
      },
    },
  },
  km9: {
    shackles: {
      contextsAdd: {
        "제 손에 수갑이 채워짐": "수갑이 손목에",
        "남이 수갑을 찬 것을 봄": "남이 남들 다른사람이",
        "수갑을 봄": "수갑을 보았",
        "수갑을 끊어 냄": "끊어냈 끊었 부수고",
      },
      contextsEnAdd: {
        "제 손에 수갑이 채워짐": "handcuffed annoyed vexed",
        "남이 수갑을 찬 것을 봄": "others subdue oppressing rise associates",
        "수갑을 봄": "menaced sickness danger",
        "수갑을 끊어 냄": "escape toils planned",
      },
    },
  },
  kmm2: {
    acrobat: {
      aliasesAdd: ["어릿광대"],
      contextsAdd: {
        "어릿광대에게 속음": "속았 속임 어릿",
        "어릿광대를 봄": "어릿광대를 어릿광대가",
        "어릿광대 옷을 입음": "옷을 차림 분장",
      },
      contextsEnAdd: {
        "어릿광대에게 속음": "harlequin cheating uphill claims",
        "어릿광대를 봄": "trouble beset",
        "어릿광대 옷을 입음": "dressed passionate error purse",
      },
    },
  },
  kmm38: {
    gallows: {
      contextsAdd: {
        "교수형을 보려고 사람들이 몰려듦": "몰려 모여든 구경꾼",
      },
      contextsEnAdd: {
        "교수형을 보려고 사람들이 몰려듦": "concourse gathering club demolish",
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
