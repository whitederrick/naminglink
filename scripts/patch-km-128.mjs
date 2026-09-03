// 배치 128(밀러 `Miser`·`Mist`·`Mistletoe`·`Mocking-bird`·`Models`) — `fog` 하나에 붙인다.
//
//   fog(안개) ← 밀러 `Mist` 셋. 「안개」가 이 상징의 이름이고 `aliases_en` 에 `mist` 가 이미 있다
//
// ## 「걷혔」을 옛 의미에서 **빼서** 새 의미에 넘긴다 (§30 곁가지)
//
// 옛 「안개에서 빠져나옴」(밀러 `Fog` 의 To emerge from it)이 「걷혔」을 쥐고 있었다.
// 그런데 「안개가 걷혔다」는 새 의미(`Mist` 의 If the mist clears away)의 그림이다 —
// 옛 쪽에는 「빠져나」·「벗어났」이 남으므로 잃는 것이 없다.
// **붙이는 쪽만 채우면 새 의미가 영영 안 뽑힌다.**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-128.mjs

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
  fog: {
    aliasesAdd: ["안개에", "안개 낀"],
    contextsAdd: {
      "안개에 둘러싸임": "둘러싸 휩싸",
      "안개가 걷힘": "걷혔 걷히 개었",
      "안개 속 다른 사람을 봄": "다른 사람 남들이",
    },
    contextsEnAdd: {
      "안개에 둘러싸임": "enveloped uncertain domestic unhappiness",
      "안개가 걷힘": "clears short duration",
      "안개 속 다른 사람을 봄": "others benefit misfortune",
    },
    // 옛 의미에서 「걷혔」을 뺀다 — 그 그림은 새 의미의 것이다
    contextsReplace: {
      "안개에서 빠져나옴": ["빠져나 벗어났 걷혔", "빠져나 벗어났"],
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
  for (const [k, [before, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
    row.contexts[k] = after;
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
  for (const [k, [, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== after) stop(`확인 실패: ${id} 의 「${k}」가 안 바뀌었다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
