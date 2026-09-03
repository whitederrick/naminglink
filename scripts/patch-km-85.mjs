// **배치 85(밀러 Lamp-post~Landau)는 새 상징을 하나만 세운다.**
//
// 새 상징 하나는 `kmm85.json` 에 있다 — lamp-post(가로등).
//
//   spear(창)      ← 밀러 `Lance` 둘
//   ground(땅)     ← 밀러 `Land` 셋
//   carriage(마차) ← 밀러 `Landau` 둘
//
// ## 왜 셋은 새 상징을 안 세웠나
//
// ⓪ 전수 grep 이 셋 다 EXACT 로 찍었다. 그리고 「긴 창」·「무개마차」는 기존 이름을 **부분
// 문자열로 품어서**, 새 상징을 세우면 상징이 둘 뜬다(§25 곁가지).
//
// ## 안 넣은 문장 하나 — **같은 그림이 이미 들어와 있다**(§31 곁가지)
//
//   Lance 「To dream of a lance, denotes formidable enemies…」
//         → 주공해몽 「창을 봄」과 **같은 그림**이다. `work` 가 달라 이름을 갈라야 하는데,
//           갈라 봐야 「창을 봄」과 「창이 나타남」이 되어 판별어를 나눌 수 없다.
//           **커버리지에서 이 문장이 비는 것이 옳다.**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-85.mjs

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
  spear: {
    contextsAdd: {
      "창에 찔려 다침": "찔려 찔렸 다쳤",
      "창을 부러뜨림": "부러뜨 분질",
    },
    contextsEnAdd: {
      // 「lance」는 `aliases_en` 에 있어 제 이름이다 — 점수에서 빠진다.
      "창에 찔려 다침": "wounded error judgment annoyance",
      "창을 부러뜨림": "break impossibilities overcome fulfilled",
    },
  },
  ground: {
    // 「땅」은 한 글자 이름이라 별칭도 두 글자 이상이어야 한다(§29 곁가지 ②, 배치 41).
    aliasesAdd: ["뭍을", "뭍이"],
    contextsAdd: {
      "땅이 기름져 보임": "기름진 기름져 비옥",
      "땅이 메마르고 돌투성이임": "메마 돌투성이 자갈",
      "바다에서 뭍을 봄": "바다에서 뱃전 배에서",
    },
    contextsEnAdd: {
      // 「land」·「earth」는 `aliases_en` 에 있어 제 이름이다.
      "땅이 기름져 보임": "fertile omens appears",
      "땅이 메마르고 돌투성이임": "sterile rocky failure dispondency",
      "바다에서 뭍을 봄": "ocean vast avenues disclose",
    },
  },
  carriage: {
    // 「무개마차」의 「마차」는 앞 글자가 한글이라 그대로는 안 걸린다 — 합성어를 따로 올린다.
    aliasesAdd: ["무개마차"],
    contextsAdd: {
      // 기존 「마차를 타고 감」이 「타고 탔다 올라」를 쥐고 있다 — 새 쪽은 **함께 탄 사람**으로 가른다.
      "벗이나 정인과 함께 마차를 타고 감": "정인과 벗과 함께",
      "마차가 뒤집힘": "뒤집 엎어졌",
    },
    contextsEnAdd: {
      "벗이나 정인과 함께 마차를 타고 감": "landau sweetheart incidents succession",
      "마차가 뒤집힘": "overturned abruptly woe",
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
