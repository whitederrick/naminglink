// **배치 108(밀러 `Loom`·`Lord's Prayer`·`Lottery`·`Louse`)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 둘은 `kmm108.json` 에 있다 — lord-s-prayer(주기도문) · lottery(복권).
//
//   weaving(베짜기)  ← 밀러 `Loom` 넷.   ⓪ grep 이 「베틀」을 EXACT 로 찍었다
//   lice(머릿니)     ← 밀러 `Louse` 하나. 원문 각주가 「[116] See Lice.」다
//
// ## `weaving` 도 **판별어 표가 비어 있었다** — 이 세션 세 번째다 (배치 35)
//
// 배치 100의 `lightning`, 103의 `lion` 에 이어 셋째다. 의미가 하나(주공해몽 「날실을 걸어
// 베를 짬」)뿐이라 `contexts` 가 빈 객체였다 — 다섯이 되므로 기존 의미부터 채웠다.
//
// **「짰다」는 안 줬다** — 「여성이 옛날 베틀로 베를 짬」의 문장에도 그 말이 들어 있어
// 동점이 난다. 기존 의미를 실제로 가르는 것은 **날실을 거는 것**이다(§30 곁가지).
//
// ## 영어 판별어에서 「loom」·「weave」는 못 쓴다
//
// `weaving` 의 `aliases_en` 이 「loom」·「weave」·「woven」·「weaving cloth」라 **제 이름**이
// 되어 점수에서 빠진다(§29 곁가지). 「warp threads」·「stranger」·「idle」 로 갈랐다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-108.mjs

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
  weaving: {
    // 「베를 짜」는 **옛 상처다** — 뒤의 「짰」·「는」이 조사가 아니라 `isStandalone` 이
    // 막아서 「베를 짰다」가 심어진 뒤로 한 번도 안 걸렸다(§29 곁가지 ①). 프로브의
    // 지킴 케이스가 찾았다.
    aliasesAdd: ["베틀을", "베틀이", "베를 짜는", "베를 짰다", "베를 짜서"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "날실을 걸어 베를 짬": "날실 걸어",
      "낯선 이가 베틀을 다루는 것을 봄": "낯선 모르는",
      "어여쁜 여인들이 베틀을 다루는 것을 봄": "어여쁜 예쁜 여인들",
      "여성이 옛날 베틀로 베를 짬": "옛날 오래된",
      "멈춰 있는 베틀을 봄": "멈춰 쉬고",
    },
    contextsEnAdd: {
      "날실을 걸어 베를 짬": "warp threads",
      "낯선 이가 베틀을 다루는 것을 봄": "stranger vexation irritation talkativeness",
      "어여쁜 여인들이 베틀을 다루는 것을 봄": "good-looking attending unqualified congenial",
      "여성이 옛날 베틀로 베를 짬": "oldtime thrifty husband solicitations",
      "멈춰 있는 베틀을 봄": "idle sulky stubborn anxious",
    },
  },
  lice: {
    aliasesAdd: ["이 한 마리"],
    contextsAdd: {
      "머릿니 한 마리를 봄": "마리",
    },
    contextsEnAdd: {
      // 「louse」는 이 상징의 `aliases_en` 이라 제 이름이 되어 죽는다
      "머릿니 한 마리를 봄": "uneasy regarding exasperating",
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
