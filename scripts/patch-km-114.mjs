// **배치 114(밀러 `Manners`~`Manufactory`)가 이미 있는 상징 셋을 건드린다.**
//
// 새 상징 셋은 `kmm114.json` 에 있다 — manners(몸가짐) · man-of-war(군함) ·
// manufactory(공장).
//
//   house(집)             ← 밀러 `Mansion` 셋.      「저택」이 EXACT 로 이 상징의 별칭이다
//   killing-someone(살인) ← 밀러 `Manslaughter` 하나. 각주가 「[119] See Murder.」다
//   headgear(머리쓰개)    ← 밀러 `Mantilla` 하나.    「머릿수건」이 EXACT 다
//
// ## 「저택」은 `house` 와 `building` 이 **둘 다** 쥐고 있다
//
// ⓪ grep 이 EXACT 를 둘 찍었다 — 저택 꿈은 이미 상징 둘이 뜨는 자리다(이번 변경이 만든
// 것이 아니다). 밀러 `Mansion` 은 집의 그림이므로 `house` 에 붙였다.
//
// ## 저택 셋은 차례로 풀었다
//
// 「저택」이 셋 모두의 문장에 들어 있어 동점이 난다 — 넓은 「저택 안에 있음」을 추출
// 파일에서 **맨 뒤**에 두었다(§25 곁가지 3).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-114.mjs

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
  house: {
    aliasesAdd: ["저택을", "저택이", "대저택"],
    // **옛 상처** — 「성 위에 집을 지음」이 「지었·짓고·건축」을 쥐고 있어 「집을 새로
    // 지었다」가 그리로 갔다. 그 의미를 실제로 가르는 것은 **성 위**다(§30 곁가지).
    // 프로브의 지킴 케이스가 찾았다. 이번 배치가 만든 결함이 아니다.
    contextsReplace: {
      "성 위에 집을 지음": ["성벽 성곽 지었 짓고 건축", "성벽 성곽 성채"],
      "집을 지음": ["신축 세우 짓는 목수", "신축 세우 짓는 목수 지었 짓고 건축"],
    },
    contextsAdd: {
      "귀신 붙은 방이 있는 저택에 있음": "귀신 유령",
      "멀리서 저택을 봄": "멀리서 멀찍이",
      "저택 안에 있음": "저택",
    },
    contextsEnAdd: {
      "귀신 붙은 방이 있는 저택에 있음": "haunted chamber sudden midst contentment",
      "멀리서 저택을 봄": "distant points future advancement",
      // 「mansion」은 기존 「우아한 집을 소유함」이 이미 쥐고 있다(배치 43 — 새 쪽만 간다)
      "저택 안에 있음": "wealthy possessions",
    },
  },
  "killing-someone": {
    aliasesAdd: ["과실치사", "사람이 죽는 일"],
    contextsAdd: {
      "여성이 사람을 죽이는 일에 얽힘": "여자가 여성이 얽혔",
    },
    contextsEnAdd: {
      "여성이 사람을 죽이는 일에 얽힘": "manslaughter desperately scared coupled scandalous",
    },
  },
  headgear: {
    aliasesAdd: ["만틸라", "레이스 머릿수건"],
    contextsAdd: {
      "만틸라를 봄": "만틸라 레이스",
    },
    contextsEnAdd: {
      "만틸라를 봄": "mantilla unwise enterprise unfavorable notice",
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
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 「${before}」가 아니다.`);
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
