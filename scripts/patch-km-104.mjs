// **배치 104(밀러 `Lips`·`Liquor`·`Liver`·`Lizard`)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 셋은 `kmm104.json` 에 있다 — lips(입술) · liver(사람의 간) · lizard(도마뱀).
//
//   liquor(술)  ← 밀러 `Liquor` 다섯. ⓪ grep 이 「술」을 EXACT 로 찍었다
//                 (이미 의미가 여덟 있다 — 주공해몽 일곱 + 밀러 `Drinking` 하나)
//
// ## 「To drink some」은 **안 넣었다** (§31 곁가지 — 같은 그림)
//
// 그 문장은 주공해몽의 「술을 마심」과 같은 그림이고, 판별어를 나눌 수가 없다
// (둘 다 「마셨」밖에 걸 것이 없다). 새 쪽에 「마셨」을 주면 「혼자 술을 마셨다」가
// 기존 「술을 마심」을 동점으로 가로챈다 — `m104.json` 이 `r*.json` 보다 앞서 정렬되므로
// **차례로도 못 푼다**(배치 78·85와 같은 자리). 커버리지가 한 문장 비는 것이 옳다.
//
// ## 「간」은 이름으로 못 쓴다 — 「내가 간 길」에 걸린다 (§29 곁가지 ③)
//
// 한 글자 이름이라 뒤가 공백이면 `isStandalone` 을 지난다. **가다의 관형형 「간」**이
// 한국어에서 너무 흔하다 → 이름을 「사람의 간」으로 하고 **조사를 붙인 꼴**
// (「간이」·「간을」·「간에」·「간의」)을 별칭으로 올렸다(배치 41의 「징」과 같은 수).
// 그 꼴은 「간이침대」·「간장」 같은 합성어에는 안 걸린다(뒤가 한글이라 막힌다).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-104.mjs

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
  liquor: {
    aliasesAdd: ["양주", "위스키", "술을", "술이"],
    contextsAdd: {
      "술을 삼": "샀다 사서 구입",
      "술을 팜": "팔았 팔고 판매",
      "통에 든 술을 봄": "통에 나무통 술통",
      "병에 든 술을 봄": "병에 술병 유리병",
      "여성이 술을 다루거나 마심": "여자가 여성이 아낙",
    },
    contextsEnAdd: {
      "술을 삼": "buying usurpation legal claim",
      "술을 팜": "sell criticised niggardly benevolence",
      "통에 든 술을 봄": "barrels tendency home pleasant",
      "병에 든 술을 봄": "bottles tangible",
      "여성이 술을 다루거나 마심": "handling Bohemian shallow contentment",
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
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
