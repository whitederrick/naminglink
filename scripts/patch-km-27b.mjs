// **배치 27b의 매칭 키를 km 파일들에 넣는다.** (일회성 패치, 2026-09-02)
//
// 새 상징 아홉은 `kmm27.json`에 덧붙이고(매칭 키 파일 이름은 `kmm<숫자>.json`만 읽힌다 —
// `kmm27b.json`으로 지으면 통째로 안 읽힌다, 배치 27a에서 겪음), 이미 있는 상징 여덟은
// 그 상징이 들어 있는 파일에서 **고친다**(같은 id가 두 파일에 있으면 조립이 멈춘다).
//
// ## 판별어를 짤 때 이 배치에서 밟은 것
//
// **① 형제끼리 낱말을 나눠 가질 수 없다.** `verify-dream-km`은 같은 상징의 두 문맥이
// 같은 낱말을 쓰거나 한쪽이 다른 쪽의 부분 문자열이면 「동점 위험」으로 빨간불을 낸다.
// 그래서 「넓은 쪽에 낱말을 하나 더 얹어 이기게 한다」는 수를 쓸 수 없다 — **동점은
// 차례로 푼다**(좁은 쪽을 앞에, `fix-m27b-order.mjs`).
//
// **② 판별어를 빈 문자열로 둘 수 없다.** 검사기가 막는다. 그런데 `contextFor`는
// 표에 없으면 **화면 문구를 그대로** 판별어로 쓰므로(`CONTEXT_KO[key] ?? display`)
// 안 적는 것은 더 나쁘다 — 실제로 물에서 그 문구 속 「물을」이 「물을 보았다」에 걸려
// 기본값이 샜다. 그래서 대표(첫) 의미에는 **좁은 낱말**을 적는다. 대표는 어차피
// 아무것도 안 걸렸을 때 떨어지는 자리라 넓은 말이 필요 없다(CLAUDE.md §25 곁가지 3).
//
// 고쳤는지 되읽어 확인한다 — `String.replace`류는 못 찾아도 조용히 성공한다(§10 #44).
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");
const read = (f) => JSON.parse(readFileSync(path.join(DIR, f), "utf8"));
const write = (f, v) =>
  writeFileSync(path.join(DIR, f), `${JSON.stringify(v, null, 2)}\n`, "utf8");

const EDITS = [
  {
    file: "km7.json",
    id: "door",
    // 「문간을」은 「문」 뒤에 조사가 아닌 「간」이 와서 isStandalone 이 낱말 조각으로 버린다 —
    // 별칭으로 올려야 상징 자체가 걸린다(프로브가 잡았다). 별칭이 된 낱말은 판별어에서
    // 죽으므로 그 문맥의 판별어에서 「문간」을 뺐다(§29 곁가지).
    aliases: ["문간"],
    // 「들어가」류는 **맨 앞의 「문으로 들어감」에만** 준다. 나머지 둘은 제 낱말로 이긴다
    // (「어린 시절 살던 집 문으로 들어갔다」 → 어린·시절·살던 셋이 걸려 3점).
    contexts: {
      "문으로 들어감": "들어가 들어갔 들어섰",
      "어린 시절 살던 집의 문으로 들어감": "어린 시절 어릴 고향 살던",
      "비 오는 밤에 문으로 들어감": "빗속 비를 비가 밤에",
      "남들이 문간을 지나가는 것을 봄": "남들 사람들 지나가",
      "문을 닫으려는데 문짝이 빠져 남을 다치게 함": "닫으려 다치 돌쩌귀 경첩",
      "남이 문을 잠그려는데 문짝이 빠짐": "잠그려 자물쇠 걸어잠",
    },
    // 「close」는 형제 「문이 닫혀 막힘」의 「closed」와, 「lock」은 그 「locked·blocked」와
    // 부분 문자열로 겹친다 — 둘 다 뺐다.
    contexts_en: {
      "문으로 들어감": "entering escape slander enemies",
      "어린 시절 살던 집의 문으로 들어감": "childhood plenty congeniality",
      "비 오는 밤에 문으로 들어감": "rain night escapades assignations",
      "남들이 문간을 지나가는 것을 봄": "others paying farmers reprove",
      "문을 닫으려는데 문짝이 빠져 남을 다치게 함": "hinge injuring unintentionally advice",
      "남이 문을 잠그려는데 문짝이 빠짐": "powerless misfortune aid another",
    },
  },
  {
    file: "km3.json",
    id: "dove",
    aliases: ["산비둘기", "집비둘기", "비둘기들"],
    contexts: {
      // 대표(첫) 의미. **넓은 「울었·우는」을 주지 않는다** — 그러면 「구슬프게 울었다」를
      // 동점으로 가로챈다. 그냥 우는 꿈은 어차피 0점이라 여기로 떨어진다.
      "비둘기가 욺": "구구 울어대 울어댔",
      "비둘기가 짝을 짓고 둥지를 지음": "짝을 짝짓 둥지 새끼",
      "비둘기가 외로이 구슬프게 우는 소리를 들음": "구슬프 구슬픈 외로이 슬피",
      "죽은 비둘기를 봄": "죽은 죽어 주검 시체",
      "흰 비둘기 떼를 봄": "떼를 떼가 무리 여럿",
      "흰 비둘기를 봄": "하얀",
      // **「편지」는 아무도 갖지 않는다.** 처음엔 물어다 주는 쪽에 주었는데, 그쪽이
      // 앞에 있어서 「편지를 가져온 비둘기가 지쳐 보였다」와 「편지에 파멸을…」을
      // **1점 대 1점 동점으로 가로챘다**(프로브가 둘 다 잡았다). 셋 다 편지 이야기이므로
      // 편지는 가르는 말이 아니다 — 물어다·지쳐·파멸만 남긴다.
      "비둘기가 편지를 물어다 줌": "쪽지 물어다 가져다",
      "편지를 가져온 비둘기가 지쳐 보임": "지쳐 지친 기진 힘없",
      "비둘기가 가져온 편지에 파멸을 알리는 글이 있음": "파멸 끝장 불길 흉한",
    },
    contexts_en: {
      "비둘기가 욺": "cooing",
      "비둘기가 짝을 짓고 둥지를 지음": "mating nests obedience mercy",
      "비둘기가 외로이 구슬프게 우는 소리를 들음": "mournful lonely sorrow father",
      "죽은 비둘기를 봄": "dead separation infidelity",
      "흰 비둘기 떼를 봄": "flock peaceful innocent",
      "흰 비둘기를 봄": "white bountiful harvests loyalty",
      "비둘기가 편지를 물어다 줌": "letter brings tidings reconciliation",
      "편지를 가져온 비둘기가 지쳐 보임": "exhausted sadness invalid",
      "비둘기가 가져온 편지에 파멸을 알리는 글이 있음": "doomed desperate financial",
    },
  },
  {
    file: "km4.json",
    id: "dragon",
    // 밀러의 용은 「그냥 본 용」이라 한국어로 가를 말이 마땅치 않다. 「보았」을 주면
    // 「용이 하늘로 날아오르는 것을 보았다」에서 형제 열다섯을 전부 가로챈다(§25 곁가지 3).
    // **나타남**만 준다 — 좁고, 형제 어느 것과도 안 겹친다.
    contexts: { "용을 봄": "나타났 나타나 마주쳤" },
    contexts_en: { "용을 봄": "passions governed sardonic outbursts" },
  },
  {
    file: "km6.json",
    id: "water",
    // 「마시」류는 형제 「물을 마심」의 것이라 못 쓴다(부분 문자열로 겹친다).
    // 「맑은」은 형제 「큰물이 맑게 갬」의 「맑아·맑게」와 서로 부분 문자열이 아니다.
    contexts: { "맑은 물을 마시려 해도 마시지 못함": "맑은 못했 못하 애써" },
    contexts_en: {
      "맑은 물을 마시려 해도 마시지 못함": "fails efforts insinuatingly offered",
    },
  },
  {
    file: "km7.json",
    id: "liquor",
    // 「여자가」를 쓰지 않는다 — 「여자가 친구들과 함께 술을 마셨다」가 형제
    // 「남과 함께 술을 마심」에서 넘어온다. 흥청거림 자체를 가르는 말만 남긴다.
    contexts: { "여성이 흥청거리며 술을 마심": "흥청 왁자 떠들썩 진탕" },
    contexts_en: { "여성이 흥청거리며 술을 마심": "hilarious discredit pleasure" },
  },
  {
    file: "kmm10.json",
    id: "carriage",
    // 「모는」을 빼야 「남이 모는 마차에 실려 갔다」가 「마차를 몲」에 안 걸린다.
    // 남자·여자 갈래는 두루뭉술한 쪽보다 **앞에** 두어 동점을 이긴다(fix-m27b-order).
    contexts: {
      "마차를 몲": "몰았 몰고 몰며 고삐",
      "남자가 남이 모는 마차에 실려 감": "남자 사내",
      "여자가 남이 모는 마차에 실려 감": "여자 여인",
      "남이 모는 마차에 실려 감": "실려 실렸 태워",
    },
    // 「man」은 「woman」의 부분 문자열이라 둘 다 못 쓴다.
    contexts_en: {
      "마차를 몲": "unjust extravagance undignified",
      "남자가 남이 모는 마차에 실려 감": "gentleman speedy consummation",
      "여자가 남이 모는 마차에 실려 감": "lady hearts value",
      "남이 모는 마차에 실려 감": "driven superior knowledge difficulties",
    },
  },
  {
    file: "km1.json",
    id: "cart",
    // 짐수레는 `wagon` 상징으로 갈랐으므로(fix-m27b-order 주석) 수레가 쥐고 있던
    // 영어 별칭 "wagon"을 넘긴다 — 남이 쓰던 이름을 그대로 두면 둘 다 걸린다(§25 곁가지).
    removeAliasesEn: ["wagon"],
  },
  {
    // 단봉낙타는 `dromedary` 상징이 생겼으므로 낙타에서 뗀다 — 더 정확한 쪽에 넘긴다.
    file: "km7.json",
    id: "camel",
    removeAliases: ["단봉낙타"],
    removeAliasesEn: ["dromedary"],
  },
];

/** 새 상징 아홉 — `kmm27.json`에 덧붙인다(27a와 같은 배치 번호). */
const NEW_ENTRIES = [
  {
    id: "doorbell",
    aliases: ["문종", "현관 벨", "벨소리"],
    aliases_en: ["a door bell", "door bell"],
    contexts: {},
    contexts_en: {},
  },
  {
    id: "dowry",
    aliases: ["혼수", "결혼 지참금"],
    aliases_en: ["a dowry", "dowries"],
    contexts: {
      "지참금을 받지 못함": "못했 못받 받지",
      "지참금을 받음": "받았 받게 건네받",
    },
    contexts_en: {
      "지참금을 받지 못함": "fail penury cold",
      "지참금을 받음": "receive expectations fulfilled",
    },
  },
  {
    id: "drama",
    aliases: ["무대극"],
    aliases_en: ["a drama", "a play", "dramas"],
    // 대표 의미에 「보았」을 주지 않는다 — 「연극을 보았는데 지루했다」를 가로챈다.
    contexts: {
      "연극을 봄": "관람 구경했",
      "연극이 지루함": "지루 따분 하품 재미없",
      "연극을 씀": "썼다 쓰고 희곡 대본 극본",
    },
    contexts_en: {
      "연극을 봄": "reunions distant",
      "연극이 지루함": "bored performance uncongenial companion",
      "연극을 씀": "write writing distress debt",
    },
  },
  {
    id: "dram-drinking",
    aliases: ["화주"],
    aliases_en: ["dram drinking", "dram-drinking", "tippling"],
    contexts: {
      "독주를 즐겨 마심": "즐겨 홀짝 자주",
      "독주를 끊음": "끊었 끊고 끊은 그만뒀",
    },
    contexts_en: {
      "독주를 즐겨 마심": "given rivalry contention",
      "독주를 끊음": "quit rise prosperity",
    },
  },
  {
    id: "draw-knife",
    aliases: ["당김칼", "깎는 칼"],
    aliases_en: ["a draw-knife", "draw knife", "drawknife"],
    contexts: {},
    contexts_en: {},
  },
  {
    id: "dressing",
    // 별칭은 「다」까지 붙인 완전한 꼴로(§29 곁가지 ①). 「입는데」의 「데」도 조사가 아니다.
    aliases: ["옷을 입다", "옷을 입었다", "옷을 입는데", "옷을 입지"],
    aliases_en: ["getting dressed", "get dressed"],
    contexts: {
      "옷을 입는 데 애를 먹음": "애를 애먹 쩔쩔 허둥",
      "기차 시간에 맞춰 옷을 입지 못함": "기차 열차 시간에",
    },
    contexts_en: {
      "옷을 입는 데 애를 먹음": "trouble worry detain amusement",
      "기차 시간에 맞춰 옷을 입지 못함": "train annoyances carelessness",
    },
  },
  {
    id: "dromedary",
    aliases: ["단봉 낙타", "외봉낙타"],
    aliases_en: ["a dromedary", "dromedaries"],
    contexts: {},
    contexts_en: {},
  },
  {
    id: "dropsy",
    // 「몸이 부었다」를 별칭으로 올렸으므로 판별어에 「부었」을 쓰지 않는다 —
    // 제 이름이 된 낱말은 점수에서 빠진다(§29 곁가지).
    aliases: ["수종", "몸이 부었다", "붓는 병"],
    aliases_en: ["dropsy", "edema", "the dropsy"],
    contexts: {
      "부종을 앓음": "앓았 앓고 걸렸 시달",
      "남이 부종을 앓는 것을 봄": "남이 남을 딴사람 남들",
    },
    contexts_en: {
      "부종을 앓음": "afflicted recover renewed vigor",
      "남이 부종을 앓는 것을 봄": "others absent shortly tidings",
    },
  },
  {
    id: "wagon",
    aliases: ["짐마차", "짐칸"],
    aliases_en: ["a wagon", "wagons"],
    contexts: {},
    contexts_en: {},
  },
];

// ── 고친다 ──────────────────────────────────────────────────────────────────

const touched = new Map();
const loadOnce = (f) => {
  if (!touched.has(f)) touched.set(f, read(f));
  return touched.get(f);
};

for (const edit of EDITS) {
  const arr = loadOnce(edit.file);
  const entry = arr.find((x) => x.id === edit.id);
  if (!entry) {
    console.error(`${edit.file}: id ${edit.id} 가 없다 — 멈춘다.`);
    process.exit(1);
  }
  for (const a of edit.aliases ?? []) {
    if (!entry.aliases.includes(a)) entry.aliases.push(a);
  }
  for (const a of edit.removeAliases ?? []) {
    const i = entry.aliases.indexOf(a);
    if (i < 0) {
      console.error(`${edit.file}: ${edit.id} 의 별칭에 ${a} 가 없다 — 멈춘다.`);
      process.exit(1);
    }
    entry.aliases.splice(i, 1);
  }
  for (const a of edit.removeAliasesEn ?? []) {
    const i = (entry.aliases_en ?? []).indexOf(a);
    if (i < 0) {
      console.error(`${edit.file}: ${edit.id} 의 영어 별칭에 ${a} 가 없다 — 멈춘다.`);
      process.exit(1);
    }
    entry.aliases_en.splice(i, 1);
  }
  Object.assign((entry.contexts ??= {}), edit.contexts ?? {});
  Object.assign((entry.contexts_en ??= {}), edit.contexts_en ?? {});
}

const target = loadOnce("kmm27.json");
for (const e of NEW_ENTRIES) {
  if (target.some((x) => x.id === e.id)) {
    console.error(`kmm27.json 에 ${e.id} 가 이미 있다 — 멈춘다.`);
    process.exit(1);
  }
  target.push(e);
}

for (const [f, v] of touched) write(f, v);

// ── 되읽어 확인한다 ─────────────────────────────────────────────────────────

let bad = 0;
for (const edit of EDITS) {
  const entry = read(edit.file).find((x) => x.id === edit.id);
  for (const [k, v] of Object.entries(edit.contexts ?? {})) {
    if (entry.contexts[k] !== v) {
      console.error(`확인 실패: ${edit.id} :: ${k}`);
      bad++;
    }
  }
  for (const a of edit.removeAliases ?? []) {
    if (entry.aliases.includes(a)) {
      console.error(`확인 실패: ${edit.id} 에서 별칭 ${a} 가 안 떼어졌다`);
      bad++;
    }
  }
  for (const a of edit.removeAliasesEn ?? []) {
    if ((entry.aliases_en ?? []).includes(a)) {
      console.error(`확인 실패: ${edit.id} 에서 영어 별칭 ${a} 가 안 떼어졌다`);
      bad++;
    }
  }
}
const after = read("kmm27.json");
for (const e of NEW_ENTRIES) {
  if (!after.some((x) => x.id === e.id)) {
    console.error(`확인 실패: kmm27.json 에 ${e.id} 가 없다`);
    bad++;
  }
}

console.log(`고친 파일 ${touched.size}개: ${[...touched.keys()].join(" · ")}`);
console.log(`기존 상징 ${EDITS.length}자리 · 새 상징 ${NEW_ENTRIES.length}개`);
if (bad > 0) {
  console.error(`\n되읽기 확인 실패 ${bad}건`);
  process.exit(1);
}
console.log("되읽기 확인 통과.");
