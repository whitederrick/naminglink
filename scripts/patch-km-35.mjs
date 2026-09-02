// **배치 35(밀러 Fireworks~Flies)가 이미 있는 상징 아홉을 건드린다.**
//
// 새 상징 일곱은 `kmm35.json`에 있다. 이 배치는 **거의 전부가 「임자가 이미 있는」 자리**였다 —
// 물고기·낚시·하늘·깃발·그물·벼룩·파리·불꽃놀이·실 잣기가 모두 사전에 있었다.
//
//   km1   flea(벼룩) ← `Fleas` 셋 · fly(파리) ← `Flies` 셋
//   km2   sky(하늘) ← `Firmament` 셋 · spinning-thread(실 잣기) ← `Flax Spinning` 하나
//   km3   fireworks(불꽃놀이) ← `Fireworks` 둘
//   km4   fishing(낚시) ← `Fish` 의 낚시 대목 **둘. 이것은 인용만 덧붙는다**(아래)
//   km5   fish(물고기) ← `Fish` 여섯 · net(그물) ← `Fish-net` 둘(「어망」이 이미 그물의 별칭)
//   km6   fire(불) ← `Flame` 하나(=See Fire)
//   km8   banner(깃발) ← `Flag` 넷
//
// **`Fish` 의 낚시 두 문장은 `fishing` 에 인용만 덧붙는다.** 밀러 `Angling` 로 이미 같은
// 문맥이 들어와 있고(「물고기를 낚는 꿈을 꿈」·「한 마리도 낚지 못함」) `work` 가 같으므로
// 조립기가 인용을 포갠다 — 배치 32의 `Fat`→`corpulence` 와 같은 수다.
//
// **`fireworks` 는 문맥 이름을 일부러 달리 적었다.** 주공해몽 의미가 이미 「불꽃놀이를 봄」인데
// 같은 이름으로 적으면 `work` 가 달라 **의미는 둘이 되고 판별어는 하나**가 된다 — 그러면
// 뒤엣것이 영영 안 뽑힌다. 밀러 쪽을 「불꽃놀이를 구경함」으로 적었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-35.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km1: {
    flea: {
      aliases: ["벼룩이", "벼룩을", "벼룩에"],
      contextsAdd: {
        "벼룩을 봄": "보았 기어",
        "여성이 벼룩에 물림": "물렸 여자가 여성이",
        "정인의 몸에 벼룩이 있는 것을 봄": "정인 애인 연인",
      },
      contextsEnAdd: {
        "벼룩을 봄": "provoked anger retaliation machinations",
        "여성이 벼룩에 물림": "bite slandered pretended",
        "정인의 몸에 벼룩이 있는 것을 봄": "lover inconstancy",
      },
    },
    fly: {
      contextsAdd: {
        "파리를 봄": "보았 날아다",
        "처녀가 파리를 봄": "처녀 아가씨 여자가",
        "파리를 잡아 없앰": "잡아 없앴 쫓아냈",
      },
      contextsEnAdd: {
        "파리를 봄": "sickness contagious maladies surround",
        "처녀가 파리를 봄": "young significant unhappiness",
        "파리를 잡아 없앰": "kills exterminates reinstate ingenuity",
      },
    },
  },
  km2: {
    sky: {
      contextsAdd: {
        "별이 가득한 하늘을 봄": "별이 별들 가득",
        "하늘이 환히 빛나며 하늘 무리로 가득함": "환히 빛나 무리",
        "아는 사람이 하늘에 있는 것을 봄": "아는 사람이 낯익은",
      },
      contextsEnAdd: {
        "별이 가득한 하늘을 봄": "stars crosses superhuman pinnacle",
        "하늘이 환히 빛나며 하늘 무리로 가득함": "illuminated hosts spiritual research",
        "아는 사람이 하늘에 있는 것을 봄": "people know unwise innocent",
      },
    },
    "spinning-thread": {
      contextsAdd: {
        "실을 자아 길쌈함": "길쌈 베를",
        "아마 실을 자음": "아마 삼실",
      },
      contextsEnAdd: {
        "실을 자아 길쌈함": "weaving cloth",
        "아마 실을 자음": "flax industrious thrifty habits",
      },
    },
  },
  km3: {
    fireworks: {
      contextsAdd: {
        "불꽃놀이를 봄": "쏘아올 터뜨",
        "불꽃놀이를 구경함": "구경 바라보",
        "처녀가 불꽃놀이를 봄": "처녀 아가씨 여자가",
      },
      contextsEnAdd: {
        "불꽃놀이를 봄": "set off",
        "불꽃놀이를 구경함": "enjoyment good health",
        "처녀가 불꽃놀이를 봄": "entertainments visiting distant",
      },
    },
  },
  km5: {
    fish: {
      contextsAdd: {
        "맑은 시냇물 속의 물고기를 봄": "맑은 시냇물 시내",
        "죽은 물고기를 봄": "죽은 주검",
        "처녀가 물고기를 봄": "처녀 아가씨",
        "메기를 낚음": "메기",
        "물에 들어가 물고기를 잡음": "들어가 첨벙 발을 담",
        "물고기를 먹음": "먹었 먹는 구워",
      },
      contextsEnAdd: {
        "맑은 시냇물 속의 물고기를 봄": "clear streams favored powerful",
        "죽은 물고기를 봄": "dead calamity",
        "처녀가 물고기를 봄": "young handsome talented",
        "메기를 낚음": "catfish embarrassed presence",
        "물에 들어가 물고기를 잡음": "wade acquired ability enterprise",
        "물고기를 먹음": "eating warm lasting attachments",
      },
    },
    net: {
      contextsAdd: {
        "고기 그물을 봄": "고기 물고기 어망",
        "찢어진 그물을 봄": "찢어진 해진 구멍",
      },
      contextsEnAdd: {
        "고기 그물을 봄": "numerous small pleasures gains",
        "찢어진 그물을 봄": "torn vexatious disappointments",
      },
    },
  },
  km6: {
    fire: {
      contextsAdd: {
        "불길과 싸움": "불길과 맞서 싸우",
      },
      contextsEnAdd: {
        "불길과 싸움": "flames best efforts amassing",
      },
    },
  },
  km8: {
    banner: {
      contextsAdd: {
        "제 나라 깃발을 봄": "제 나라 우리나라 국기",
        "여성이 깃발을 봄": "여자가 여성이",
        "다른 나라 깃발을 봄": "다른 나라 외국 낯선 나라",
        "깃발로 신호를 받음": "신호 신호를",
      },
      contextsEnAdd: {
        "제 나라 깃발을 봄": "national victory peace",
        "여성이 깃발을 봄": "ensnared soldier",
        "다른 나라 깃발을 봄": "foreign ruptures breach",
        "깃발로 신호를 받음": "signaled careful threatened",
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

    for (const w of patch.aliases ?? []) {
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
