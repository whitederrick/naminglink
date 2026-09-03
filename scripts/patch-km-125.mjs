// **배치 125(밀러 `Milk`·`Milking`)는 새 상징을 안 세운다** — `kmm125.json` 이 없는 판이다.
//
//   milk(젖)  ← 밀러 `Milk` 열 · `Milking` 하나. 「우유」가 EXACT 로 이 상징의 별칭이다
//
// ## `milk` 도 **판별어 표가 비어 있었다** — 이 세션 **여덟 번째**다 (배치 35)
//
// 배치 100·103·108·110·117·118·120에 이어 여덟째다. 의미가 하나(주공해몽 「남과 함께
// 젖을 먹음」)뿐이라 `contexts` 가 빈 객체였다 — 열둘이 되므로 기존 의미부터 채웠다.
//
// ## 기본값을 **바꿔서** 얼린다 (§30)
//
// 옛 기본값 「남과 함께 젖을 먹음」은 조건이 붙은 자리이고, 밀러의 첫 문장 「젖을 마심」이
// **가장 일반적인 그림**이다.
//
// ## 「마시」를 못 쓴다
//
// 「젖을 마시려다 못 마심」이 「마시려다」를 써야 하는데 「마시」가 그것의 부분 문자열이다 —
// 마시는 쪽은 「마셨」·「들이켰」로 갈랐다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-125.mjs

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
  milk: {
    aliasesAdd: ["젖을", "젖이", "젖소 젖"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "남과 함께 젖을 먹음": "함께 같이 여럿이",
      "젖을 마심": "마셨 들이켰",
      "젖이 많이 있는 것을 봄": "많이 가득 잔뜩",
      "젖을 사고팖": "사고팔 장사 팔았",
      "젖을 남에게 줌": "남에게 내주었",
      "젖을 엎지름": "엎질 쏟았",
      "더러운 젖을 봄": "더러 불결",
      "쉬어 버린 젖을 봄": "쉬어 시큼 상한",
      "젖을 마시려다 못 마심": "마시려다 삼키지",
      "뜨거운 젖을 봄": "뜨거 따뜻",
      "젖으로 목욕함": "목욕 씻었",
      "젖을 짬": "짜는 짰다 젖통",
    },
    contextsEnAdd: {
      "남과 함께 젖을 먹음": "together shared",
      "젖을 마심": "drinking abundant harvest farmer voyage",
      "젖이 많이 있는 것을 봄": "large quantities riches health",
      "젖을 사고팖": "dealing commercially increase",
      "젖을 남에게 줌": "give away benevolent",
      "젖을 엎지름": "spill slight temporary unhappiness",
      "더러운 젖을 봄": "impure tormented petty",
      "쉬어 버린 젖을 봄": "sour disturbed distress",
      "젖을 마시려다 못 마심": "unsuccessfully danger losing esteemed",
      "뜨거운 젖을 봄": "struggle final winning desires",
      "젖으로 목욕함": "bathing pleasures companionships congenial",
      "젖을 짬": "streams udder restless withheld opportunities",
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
