// **배치 122(밀러 `Melancholy`~`Mendicant`)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 넷은 `kmm122.json` 에 있다 — melancholy(우울) · memorandum(메모) ·
// memorial(기념비) · menagerie(동물원).
//
//   melon(오이)   ← 밀러 `Melon` 셋. **`term_en` 이 `melon` 이라 id 가 같다** —
//                   한국어 이름이 「오이」여도 새로 세우면 같은 상징에 합쳐진다(배치 110의
//                   `lute` 와 같은 자리). 「참외」는 이미 그 상징의 별칭이다
//   beggar(거지)  ← 밀러 `Mendicant` 하나. 「거지」가 EXACT 다
//
// ## 참외 셋은 차례로 풀었다
//
// 「참외」가 셋 모두의 문장에 들어 있어 동점이 난다 — 넓은 「참외를 봄」을 추출 파일에서
// **맨 뒤**에 두었다(§25 곁가지 3).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-122.mjs

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
  melon: {
    aliasesAdd: ["멜론", "참외를", "참외가"],
    contextsAdd: {
      "참외를 먹음": "먹었 먹는",
      "푸른 덩굴에 열린 참외를 봄": "덩굴 넝쿨",
      "참외를 봄": "참외 멜론",
    },
    contextsEnAdd: {
      "참외를 먹음": "eat hasty action",
      "푸른 덩굴에 열린 참외를 봄": "growing green vines present",
      // 「melons」는 이 상징의 term_en 「melon」의 복수라 제 이름이 되어 죽는다
      "참외를 봄": "unfortunate ventures",
    },
  },
  beggar: {
    aliasesAdd: ["빌어먹는 이", "동냥아치"],
    contextsAdd: {
      "여성이 거지를 봄": "여자가 여성이",
    },
    contextsEnAdd: {
      "여성이 거지를 봄": "mendicants disagreeable interferences betterment",
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
