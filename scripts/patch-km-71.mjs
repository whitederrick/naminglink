// **배치 71(밀러 Jolly~Judge)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 넷은 `kmm71.json` 에 있다 — jolly(흥겨움)·journeyman(삯일꾼)·jubilee(축전)·judge(판사).
//
//   long-journey(먼 길 떠남)  ← 밀러 `Journey` 넷.  「여행」의 임자다
//   joy(기쁨)                 ← 밀러 `Joy` 하나.    **판별어 표가 비어 있었다**
//
// ## 왜 새 상징을 안 세웠나
//
// ⓪ grep 이 「여행」을 `long-journey` 의 별칭으로, 「기쁨」을 `joy` 의 이름으로 찍었다.
// **「판사」는 새로 세웠다** — 「재판」은 `lawsuit`(송사)의 것이지만 「재판관」은 「재판」 뒤가
// 한글이라 막히고, 판사는 사람이지 송사가 아니다.
//
// ## 판별어 표가 비어 있던 `joy` 는 **기존 의미까지 채운다**(배치 35·62~68과 같다)
//
// 「집안에 기쁜 일이 있음」이 이 상징의 기본값이므로 **좁게** 적는다(§30 곁가지).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-71.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

/** id 가 어느 km 파일에 있는지 찾는다 — 파일 이름을 손으로 적지 않는다(§5). */
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
  "long-journey": {
    // 「길을 떠났다」·「떠나는 것을 보았다」가 걸리게 한다(§29 곁가지 ①).
    // 「길을 떠」+「났다」는 막힌다 — 완전한 꼴까지 올린다(§29 곁가지 ①, 프로브가 잡았다).
    aliasesAdd: ["길을 떠났다", "길을 떠나", "길 떠나", "나들이"],
    contextsAdd: {
      // 「떠났」은 형제 문장(「벗들이 슬픈 낯으로 길을 떠났다」)에도 있어 동점으로 가로챈다.
      // 이 의미는 `FALLBACK_FIRST` 로 얼려 **0점일 때 떨어지는 자리**로 삼는다(§30 곁가지).
      "길을 떠남": "길에 올랐 나섰",
      // 「벗들」은 형제 문장에도 있다 — 낯빛으로만 가른다.
      "벗들이 즐겁게 길을 떠나는 것을 봄": "즐겁게 신나게 웃으며",
      "벗들이 슬픈 낯으로 떠나는 것을 봄": "슬픈 서글픈 울먹",
      "먼 길을 뜻밖에 짧은 동안에 감": "짧은 금세 어느새",
    },
    contextsEnAdd: {
      "길을 떠남": "profit disappointment pleasing accidents disagreeable",
      "벗들이 즐겁게 길을 떠나는 것을 봄": "cheerfully delightful change harmonious heretofore",
      "벗들이 슬픈 낯으로 떠나는 것을 봄": "depart looking sad moons power loss",
      // 「long-distance」의 「long」은 term_en 「long journey」의 것이라 엔진이 안 센다.
      "먼 길을 뜻밖에 짧은 동안에 감": "shorter accomplish surprisingly reimbursement",
    },
  },
  joy: {
    contextsAdd: {
      // 기존 주공해몽 의미 — 기본값이므로 좁게.
      "집안에 기쁜 일이 있음": "집안에 경사가",
      "어떤 일로 기쁨을 느낌": "느꼈 벅찼 차올랐",
    },
    contextsEnAdd: {
      "집안에 기쁜 일이 있음": "household auspicious",
      // 「event」는 불용어다(`audit-km-dead-words`).
      "어떤 일로 기쁨을 느낌": "feel harmony among",
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
