// **배치 120(밀러 `Matting`~`May Bugs`)이 이미 있는 상징 셋을 건드린다.**
//
// 새 상징 둘은 `kmm120.json` 에 있다 — mausoleum(영묘) · may(오월).
//
//   straw-mat(돗자리)  ← 밀러 `Matting` 하나
//   mattress(요)       ← 밀러 `Mattress` 셋
//   beetles(딱정벌레)  ← 밀러 `May Bugs` 하나. 「풍뎅이」가 EXACT 로 이 상징의 별칭이다
//
// ## `Matting` 의 둘째 문장은 안 넣었다 (§31 곁가지 — 같은 그림)
//
// 「If it is old or torn…」은 `straw-mat` 에 이미 있는 「돗자리가 해어져 찢어짐」과 같은
// 그림이고 판별어(해어·찢어·낡아)를 나눌 수 없다.
//
// ## `mattress` 도 **판별어 표가 비어 있었다** — 이 세션 **일곱 번째**다 (배치 35)
//
// 배치 100·103·108·110·117·118에 이어 일곱째다. 의미가 하나(「요를 펴서 깖」)뿐이라
// `contexts` 가 빈 객체였다 — 넷이 되므로 기존 의미부터 채웠다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-120.mjs

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
  "straw-mat": {
    aliasesAdd: ["바닥 자리"],
    contextsAdd: {
      "바닥에 깐 자리를 봄": "바닥에 깔린",
    },
    contextsEnAdd: {
      "바닥에 깐 자리를 봄": "matting prospects cheerful absent",
    },
  },
  mattress: {
    aliasesAdd: ["요를", "요가", "침요"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "요를 펴서 깖": "펴서 깔았",
      "요를 봄": "놓여 개어",
      "새 요 위에서 잠": "새것 새로운 잠들었",
      "요 만드는 공장을 봄": "공장",
    },
    contextsEnAdd: {
      "요를 펴서 깖": "spread laid",
      "요를 봄": "duties responsibilities assumed",
      "새 요 위에서 잠": "sleep contentment present surroundings",
      "요 만드는 공장을 봄": "factory connected thrifty partners amass",
    },
  },
  beetles: {
    aliasesAdd: ["풍뎅이가", "풍뎅이를"],
    contextsAdd: {
      "풍뎅이를 봄": "풍뎅이",
    },
    contextsEnAdd: {
      // 「bugs」는 이 상징의 `aliases_en` 이라 제 이름이 되어 죽는다
      "풍뎅이를 봄": "ill-tempered companion congenial expected",
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
