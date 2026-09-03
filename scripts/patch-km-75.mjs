// **배치 75(밀러 Keyhole~King)가 이미 있는 상징 넷을 건드린다.** 새 상징은 하나뿐이다.
//
//   key(열쇠)                 ← 밀러 `Keyhole` 셋
//   goat(염소)                ← 밀러 `Kid` 하나
//   killing-someone(살인)     ← 밀러 `Killing` 둘
//   king(임금)                ← 밀러 `King` 다섯
//   (새 상징) kidneys(콩팥)   ← `kmm75.json`
//
// ## 왜 새 상징을 안 세웠나
//
// **`Keyhole` 이 가장 뚜렷한 자리다** — 「열쇠 구멍」은 「열쇠」를 **공백 앞에서 품어** 새
// 상징을 세우면 `key` 도 함께 걸린다(§25 곁가지). 배치 74에서 넣은 `key` 에 붙였다.
// 「새끼 염소」도 「염소」를 품고, 「살인」·「임금」은 이름 그대로 임자가 있다.
//
// ## 판별어를 고를 때 부딪친 자리
//
// `king` 은 이미 여섯이고 기존이 **「앞에서」·「자리를」·「불러」**를 쥐고 있다 —
// 새 「처녀가 임금 앞에 나아감」은 「처녀·아가씨」로, 「임금에게 은혜를 입음」은 「은혜·베풀」로
// 갈랐다. `killing-someone` 도 기존이 「제가·내가」를 쥐고 있어 새 둘은 「맨손·지키려」로 적었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-75.mjs

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
  key: {
    aliasesAdd: ["열쇠 구멍", "열쇠구멍"],
    contextsAdd: {
      "열쇠 구멍으로 남을 엿봄": "엿보 훔쳐보 들여다보",
      "남이 열쇠 구멍으로 엿보는 것을 봄": "남이 남들 다른이",
      // 「못 찾」·「안」은 쪼개져 한 글자가 되고, 「찾」은 형제의 「찾아냈」에 물린다.
      "열쇠 구멍을 못 찾음": "구멍을 찾지 보이지",
    },
    contextsEnAdd: {
      // 「disclosing」은 형제의 「losing」을 품는다 — 뺐다.
      // 「confidence」는 배치 74의 「열쇠로 문을 엶」이 이미 쥐고 있다 — 새 쪽에서 뺐다.
      "열쇠 구멍으로 남을 엿봄": "spy keyhole damage disclose",
      "남이 열쇠 구멍으로 엿보는 것을 봄": "catch peeping delving private advance",
      "열쇠 구멍을 못 찾음": "cannot unconsciously injure",
    },
  },
  goat: {
    aliasesAdd: ["새끼 염소", "새끼염소"],
    contextsAdd: { "새끼 염소를 봄": "새끼 어린" },
    // 「over-scrupulous」의 「over」는 불용어다.
    contextsEnAdd: { "새끼 염소를 봄": "scrupulous morals grief loving" },
  },
  "killing-someone": {
    // **넓히는 고침도 좁게 한다**(§29 곁가지 ①) — 맨 「짐승을 죽였다」를 올리면 「개가 뱀을
    // 죽였다」까지 살인이 된다. 밀러 문장 그대로 **「사나운 짐승」이 든 구절**로만 올린다.
    aliasesAdd: ["사나운 짐승을 죽였다", "사나운 짐승을 죽이"],
    contextsAdd: {
      // 「손도 못 쓰는」이 공백에서 쪼개져 「못」이 한 글자가 된다(§29 곁가지 ②).
      "맨손인 사람을 죽임": "맨손 맨몸 무방비",
      "제 몸을 지키려 죽이거나 사나운 짐승을 죽임": "지키려 사나운 짐승",
    },
    contextsEnAdd: {
      // 「defenseless」는 형제의 「defense」를 품는다 — 뺐다.
      "맨손인 사람을 죽임": "prognosticates sorrow failure",
      "제 몸을 지키려 죽이거나 사나운 짐승을 죽임": "defense ferocious beast victory rise",
    },
  },
  king: {
    contextsAdd: {
      // 「온 힘」이 쪼개져 한 글자가 된다(§29 곁가지 ②).
      "임금을 봄": "온힘 야심 발버둥",
      "제가 임금이 되어 관을 씀": "관을 즉위 왕관",
      "임금에게 꾸중을 들음": "꾸중 나무람 야단",
      "처녀가 임금 앞에 나아감": "처녀 아가씨",
      "임금에게 은혜를 입음": "은혜 베풀 총애",
    },
    contextsEnAdd: {
      "임금을 봄": "struggling might ambition master",
      "제가 임금이 되어 관을 씀": "crowned comrades co-workers",
      "임금에게 꾸중을 들음": "censured reproved neglected duty",
      "처녀가 임금 앞에 나아감": "presence marry fear",
      "임금에게 은혜를 입음": "receive favors exalted congenially wedded",
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
