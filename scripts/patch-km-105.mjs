// **배치 105(밀러 `Load`·`Loadstone`·`Loaves`·`Lobster`)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 둘은 `kmm105.json` 에 있다 — loadstone(자석) · lobster(바닷가재).
//
//   burden(짐)   ← 밀러 `Load` 둘.   ⓪ grep 이 「짐」을 EXACT 로 찍었다
//   bread(빵)    ← 밀러 `Loaves` 넷. 「빵」이 EXACT 이고 `aliases_en` 에 이미
//                  「a loaf」·「loaves」가 있다
//
// ## 「To dream that you carry a load」는 **안 넣었다** (§31 곁가지 — 같은 그림)
//
// `burden` 의 첫 의미 「무거운 짐을 짊어짐」(밀러 `Burden`)과 **같은 그림인데 길흉이
// 정반대**다(그쪽은 흉, `Load` 는 길). 판별어도 나눌 수 없다 — 둘 다 「짊어졌다」밖에
// 걸 것이 없다. `crab`(배치 58)과 같은 자리이고, 커버리지가 한 문장 비는 것이 옳다.
//
// ## 「바닷가재」는 새 상징을 세워도 안전하다
//
// ⓪ grep 이 「가재」(crawfish)와 「바닷가」(sea 의 별칭)를 품는다고 찍었지만 **둘 다
// `isStandalone` 이 막는다** — 「가재」는 앞이 「닷」, 「바닷가」는 뒤가 「재」로 한글이다
// (배치 29의 판정법대로 손으로 돌려 봤다).
//
// ## 빵 덩이 넷은 **차례로** 풀었다
//
// 「빵 덩이를 봄」의 판별어 「덩이」가 나머지 셋의 문장에도 들어 있어 전부 동점이 난다 —
// 좁은 셋(케이크·부서진·불어남)을 추출 파일에서 **앞에** 두었다(§25 곁가지 3).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-105.mjs

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
  burden: {
    aliasesAdd: ["짐을", "짐이", "이삿짐 보따리"],
    contextsAdd: {
      "짐에 눌려 쓰러짐": "눌려 쓰러 깔렸",
      "남이 짐을 지는 것을 봄": "남이 남들이 다른 사람이",
    },
    contextsEnAdd: {
      "짐에 눌려 쓰러짐": "fall inability comforts subsistence",
      "남이 짐을 지는 것을 봄": "others engaged trials interested",
    },
  },
  bread: {
    aliasesAdd: ["빵 덩이", "빵덩어리"],
    contextsAdd: {
      "빵 덩이가 케이크임": "케이크",
      "부서진 빵 덩이를 봄": "부서진 깨진 조각난",
      "빵 덩이가 크게 불어남": "불어났 불어나 늘어났 많아졌",
      "빵 덩이를 봄": "덩이 덩어리",
    },
    contextsEnAdd: {
      "빵 덩이가 케이크임": "cake rejoice obsequiously",
      "부서진 빵 덩이를 봄": "broken discontent bickerings",
      "빵 덩이가 크게 불어남": "multiply phenomenally prognosticates",
      "빵 덩이를 봄": "frugality",
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
