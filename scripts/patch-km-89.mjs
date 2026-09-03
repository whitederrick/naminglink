// **배치 89(밀러 Laurel~Lawyer)는 새 상징을 하나도 안 세운다.**
//
//   bay-tree(월계수)  ← 밀러 `Laurel` 둘
//   lawsuit(송사)     ← 밀러 `Law and Lawsuits` 넷
//   grass(풀)         ← 밀러 `Lawns` 다섯
//   attorney(변호사)  ← 밀러 `Lawyer` 하나
//
// ## 왜 넷 다 새 상징을 안 세웠나
//
// ⓪ 전수 grep 이 「월계관」·「소송」·「재판」·「잔디」를 EXACT 로 찍었다. 「잔디밭」은
// `grass` 의 별칭 「잔디」를 품어서 새 상징을 세우면 상징이 둘 뜬다(§25 곁가지).
// 밀러 `Lawyer` 는 끝에 `[112] See Attorney.` 로 제 임자를 가리킨다.
//
// ## 밀러 `Laurel` 의 첫 문장은 **인용을 포갰다**(§31 곁가지)
//
// 밀러 `Bay Tree` 로 이미 들어와 있는 「월계수(베이 트리) 꿈을 꿈」과 **같은 그림이고 같은
// `work`** 다 — 이름을 그대로 쓰면 조립기가 인용 둘을 한 의미에 포갠다(배치 32 Fat 과 같다).
//
// ## 판별어 표가 비어 있던 상징 둘 — **기존 의미까지 채운다**
//
// `bay-tree`·`lawsuit` 은 의미가 하나뿐이라 판별어가 없었다. 여럿이 되는 순간 모두 있어야 한다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-89.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

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
  "bay-tree": {
    contextsAdd: {
      // 판별어 표가 비어 있었다 — 기존 의미까지 채운다(배치 35·79·81·84와 같다).
      // 판별어에 상징 이름(월계수)을 그대로 쓰면 `verify-dream-km` 이 막는다 — 별칭 쪽 낱말로.
      "월계수(베이 트리) 꿈을 꿈": "베이 트리",
      "처녀가 정인의 머리에 월계관을 씌움": "월계관 씌웠 씌우",
    },
    contextsEnAdd: {
      // 「laurel」은 `aliases_en` 의 「a laurel tree」·「bay laurel」에 들어 있어 제 이름이 된다.
      "월계수(베이 트리) 꿈을 꿈": "prosperous leisure amusements knowledge",
      "처녀가 정인의 머리에 월계관을 씌움": "wreath head faithful woo",
    },
  },
  lawsuit: {
    // 「법을 배움」은 상징 이름(송사·소송·재판·고소)이 문장에 없어 **하나도 안 걸렸다** —
    // 프로브가 잡았다. 밀러 표제어가 `Law and Lawsuits` 라 「법」 쪽 말도 이 상징의 것이다.
    aliasesAdd: ["법을 배우고", "법을 배우는", "법을 배웠다", "법 공부"],
    contextsAdd: {
      "관가에 들어가 송사함": "관가 관청",
      "송사에 휘말림": "휘말 걸려들",
      "제 쪽 송사가 떳떳하지 못함을 앎": "떳떳 부끄러운 거짓으로",
      "젊은이가 법을 배움": "법을 배우 공부하",
      "여자가 송사에 나섬": "여자가 여인이",
    },
    contextsEnAdd: {
      "관가에 들어가 송사함": "office magistrate government",
      "송사에 휘말림": "engaging poisoning public opinion",
      "제 쪽 송사가 떳떳하지 못함을 앎": "dishonest dispossess owners advancement",
      "젊은이가 법을 배움": "studying rapid chosen profession",
      "여자가 송사에 나섬": "woman calumniated among",
    },
  },
  grass: {
    // 「풀숲」의 「풀」은 뒤가 「숲」(한글)이라 막힌다 — 합성어를 따로 올린다(§25 곁가지).
    aliasesAdd: ["잔디밭", "풀숲"],
    contextsAdd: {
      // 기존 「시든 풀을 봄」이 「시든 마른 누렇」을, 「푸른 풀밭을 봄」이 「푸른」을 쥐고 있다 —
      // 새 쪽은 그 낱말을 안 쓴다(§30 곁가지).
      "잘 가꾼 잔디밭을 거닒": "거닐 가꾼",
      "잔디밭에서 즐거운 모임에 어울림": "모임 어울 잔치",
      "처녀가 푸른 잔디밭에서 벗이나 정인을 기다림": "기다 정인을",
      "풀이 죽고 잔디밭이 질척함": "질척 축축",
      "풀숲에 뱀이 기어가는 것을 봄": "뱀이 기어가",
    },
    contextsEnAdd: {
      // 「lawn」은 `aliases_en` 에 있어 제 이름이다.
      "잘 가꾼 잔디밭을 거닒": "walking well-kept occasions",
      "잔디밭에서 즐거운 모임에 어울림": "merry party secular",
      "처녀가 푸른 잔디밭에서 벗이나 정인을 기다림": "wait ardent wishes gratified",
      "풀이 죽고 잔디밭이 질척함": "dead marshy quarrels separation",
      "풀숲에 뱀이 기어가는 것을 봄": "serpents crawling betrayal insinuations",
    },
  },
  attorney: {
    contextsAdd: {
      "처녀가 변호사와 얽힘": "얽혀 얽히 사귀",
    },
    contextsEnAdd: {
      // 「lawyer」는 `aliases_en` 에 있어 제 이름이다.
      "처녀가 변호사와 얽힘": "connected unwittingly indiscretions mortifying",
    },
  },
};

let changed = 0;

for (const [id, patch] of Object.entries(PATCHES)) {
  const file = fileOf(id);
  const p = path.join(DIR, file);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (row.aliases.includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.aliases.push(w);
    changed++;
  }
  for (const [k, [before, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
    row.contexts[k] = after;
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
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file} 고침 — ${id}`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [id, patch] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, fileOf(id)), "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 별칭 「${w}」가 안 들어갔다.`);
  }
  for (const [k, [, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== after) stop(`확인 실패: ${id} 의 「${k}」가 안 바뀌었다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
