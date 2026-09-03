// 배치 127(밀러 `Mining`·`Minister`·`Minuet`·`Minx`·`Mire`) — 이미 있던 상징 셋에 붙인다.
//
//   mine(광산)      ← 밀러 `Mining` 셋. 「광산 일」이 `mine` 을 품으므로 상징을 안 세운다
//   clergyman(목사) ← 밀러 `Minister` 셋. 「목사」가 EXACT 로 이 상징의 이름이다
//   mud(진흙)       ← 밀러 `Mire` 하나. 「진창」이 이 상징의 별칭이고 `aliases_en` 에 `mire` 가 이미 있다
//   fur(모피)       ← 별칭 「밍크」를 **뺀다**. 새 상징 `mink`(밍크) 에 넘긴다(§25 곁가지)
//
// ## 형제 판별어를 겹치지 않게 갈랐다
//
//   clergyman 기존 「장례 설교를 하려고 목사를 부름」이 「설교」를 쥐고 있다 →
//   새 「목사의 설교를 들음」은 「들었 강론 훈계」로 적는다(부분 문자열 겹침 금지)
//
// ## 기본값(첫 의미)이 바뀌는 자리가 둘이다 (§30)
//
//   m127.json < m16.json · m127.json < r*.json 이라 clergyman·mud 의 첫 의미가 바뀐다.
//   clergyman 은 **바꿔서** 얼린다 — 옛 「장례 설교를 하려고 목사를 부름」은 좁은 자리이고
//   밀러의 「목사를 봄」이 가장 일반적인 그림이다(배치 54와 같은 판단).
//   mud 는 옛 「진흙 속에 빠져 있음」이 더 일반적이라 **그대로 얼린다.**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-127.mjs

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
  mine: {
    aliasesAdd: ["광산에서", "광맥"],
    contextsAdd: {
      "광산에서 일하는 것을 봄": "일하 캐고 캐는",
      "광산 가까이 서 있음": "가까이 옆에 곁에",
      "광맥을 찾아다님": "뒤지 헤매 찾아다",
    },
    contextsEnAdd: {
      "광산에서 일하는 것을 봄": "enemy ruin immoralities",
      "광산 가까이 서 있음": "stand near unpleasant journeys",
      "광맥을 찾아다님": "hunting worthless pursuits",
    },
  },
  clergyman: {
    aliasesAdd: ["목사가", "목사를", "목사의"],
    contextsAdd: {
      "목사를 봄": "만났 마주쳤",
      "목사의 설교를 들음": "들었 강론 훈계",
      "제가 목사가 됨": "제가 내가 되었",
    },
    contextsEnAdd: {
      "목사를 봄": "unfortunate changes journeys",
      "목사의 설교를 들음": "exhort designing influence evil",
      "제가 목사가 됨": "usurp another rights",
    },
  },
  mud: {
    aliasesAdd: ["진창을", "진창이"],
    contextsAdd: {
      "진창을 헤치고 감": "헤치 헤치고 지나갔",
    },
    contextsEnAdd: {
      "진창을 헤치고 감": "going wishes plans temporary check",
    },
  },
  fur: {
    // 「밍크」는 짐승의 이름이다 — 새 상징 `mink` 에 넘긴다
    aliasesRemove: ["밍크"],
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
