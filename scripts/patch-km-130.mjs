// 배치 130(밀러 `Money`) — 새 상징을 안 세운다. 기존 셋을 손본다.
//
//   money(돈)   ← 밀러 `Money` 여덟
//   gold(황금)  ← 밀러 `Money` 의 「To receive gold」 하나. **그 꿈에 있는 사물이 황금이다**
//   paper-money(지전) ← 별칭 「지폐」를 **뺀다**. 「지폐」는 `money`(돈)의 말이다
//
// ## 「지폐」를 두 상징이 쥐고 있었다 (옛 상처)
//
// `money` 와 `paper-money` 가 둘 다 「지폐」를 별칭으로 갖고 있어 「지폐를 주웠다」에
// **상징이 둘 떴다.** `paper-money`(지전)는 노잣돈·종이돈이 제 말이고, 오늘의 이용자가
// 「지폐」라고 쓸 때 뜻하는 것은 `money` 다 — 더 정확한 쪽에 남긴다(§25 곁가지).
//
// ## 기본값을 **바꿔서** 얼린다 (§30)
//
//   money  남에게 돈과 물건을 돌려줌 → 돈이 많이 있는 것을 봄
//
// 옛것은 좁은 자리이고, 밀러의 「돈이 많이 있는 것을 봄」이 가장 막연한 돈 꿈이 떨어질
// 자리다. 얼린 자리의 판별어는 좁게 적었다(「많이 가득 수북」).
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-130.mjs

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
  money: {
    aliasesAdd: ["돈이", "돈을", "돈뭉치가"],
    contextsAdd: {
      "돈이 많이 있는 것을 봄": "많이 가득 수북",
      "돈을 치러 줌": "치렀 지불 내주었",
      "돈을 잃어버림": "잃어 잃었",
      "돈을 세어 보니 모자람": "세어 모자 부족",
      "돈을 훔침": "훔쳤 훔치 도둑질",
      "돈을 모아 둠": "모아 저축 아껴",
      "돈을 삼킴": "삼켰 삼키 넘겼",
      "처녀가 주운 돈뭉치를 제 것이라 함": "처녀 아가씨 제것이라",
    },
    contextsEnAdd: {
      "돈이 많이 있는 것을 봄": "look quantity prosperity happiness reach",
      "돈을 치러 줌": "pay misfortune",
      "돈을 잃어버림": "lose unhappy hours gloomy",
      "돈을 세어 보니 모자람": "count deficit worried making",
      "돈을 훔침": "steal danger guard actions",
      "돈을 모아 둠": "save augurs comfort",
      "돈을 삼킴": "swallow portends mercenary",
      "처녀가 주운 돈뭉치를 제 것이라 함": "roll claims enterprise interference female",
    },
  },
  gold: {
    contextsAdd: {
      "황금을 받음": "받았 받은",
    },
    contextsEnAdd: {
      "황금을 받음": "unalloyed pleasures prosperity",
    },
  },
  "paper-money": {
    aliasesRemove: ["지폐"],
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
  for (const w of patch.aliasesRemove ?? []) {
    const i = row.aliases.indexOf(w);
    if (i < 0) stop(`${id}: 뺄 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
    row.aliases.splice(i, 1);
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
  for (const w of patch.aliasesRemove ?? []) {
    if (row.aliases.includes(w)) stop(`확인 실패: ${id} 에서 별칭 「${w}」가 안 빠졌다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
