// 배치 129(밀러 `Molasses`·`Moles`·`Monk`·`Monkey`) — 이미 있던 상징 셋을 손본다.
//
//   monk(스님)   ← 밀러 `Monk` 셋. 별칭에 「수도승」·「수도사」를 함께 올린다
//   monkey(원숭이) ← 밀러 `Monkey` 넷
//   apes(유인원) ← **이름을 돌려준다.** 「원숭이」·`monkey`·`monkeys` 를 쥐고 있었다
//
// ## 이름을 서로 맞바꿔 쥐고 있었다 (옛 상처 — 이번 배치가 만든 것이 아니다)
//
//   apes   가 「원숭이」 · `monkey` · `monkeys` 를 쥐고 있었다
//   monkey 가 `ape` 를 쥐고 있었다
//
// 「원숭이를 보았다」가 두 상징에 다 걸려 **화면에 상징이 둘 뜨고 있었다**(§28).
// 각자 제 이름만 갖게 되돌린다 — `apes` 에는 「유인원」·고릴라·침팬지·성성이가 남는다.
//
// ## 기본값을 **바꿔서** 얼린다 (§30)
//
//   monk    법사가 법좌에 오름 → 스님을 봄     옛것은 좁은 자리다
//   monkey  산 원숭이를 봄     → 원숭이를 봄   〃
//
// 얼린 자리의 판별어는 좁게 적었다(「만났 마주쳤」·「나타났 마주쳤」) — 얼림은 그것을
// 배열 첫째로 옮기므로 **동점을 전부 가져간다**(§30 곁가지).
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-129.mjs

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
  monk: {
    aliasesAdd: ["수도승", "수도사", "스님이", "스님을"],
    contextsAdd: {
      "스님을 봄": "만났 마주쳤",
      "처녀가 스님을 봄": "처녀 아가씨",
      "제가 스님이 됨": "제가 내가 되었",
    },
    contextsEnAdd: {
      "스님을 봄": "dissensions family unpleasant journeyings",
      "처녀가 스님을 봄": "young woman gossip deceit",
      "제가 스님이 됨": "personal loss illness",
    },
  },
  monkey: {
    aliasesAdd: ["원숭이가", "원숭이를", "원숭이들"],
    aliasesEnRemove: ["ape"],
    contextsAdd: {
      "원숭이를 봄": "나타났 마주쳤",
      "죽은 원숭이를 봄": "죽은 주검",
      "처녀가 원숭이를 봄": "처녀 아가씨",
      "여성이 원숭이에게 먹이를 줌": "먹이 먹였",
    },
    contextsEnAdd: {
      "원숭이를 봄": "deceitful flatter advance interests",
      "죽은 원숭이를 봄": "dead worst enemies removed",
      "처녀가 원숭이를 봄": "young woman early marriage unfaithfulness",
      "여성이 원숭이에게 먹이를 줌": "feeding betrayed",
    },
  },
  apes: {
    aliasesRemove: ["원숭이"],
    aliasesEnRemove: ["monkey", "monkeys"],
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
  for (const w of patch.aliasesEnRemove ?? []) {
    const i = (row.aliases_en ?? []).indexOf(w);
    if (i < 0) stop(`${id}: 뺄 영어 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
    row.aliases_en.splice(i, 1);
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
  for (const w of patch.aliasesEnRemove ?? []) {
    if ((row.aliases_en ?? []).includes(w)) stop(`확인 실패: ${id} 에서 영어 별칭 「${w}」가 안 빠졌다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
