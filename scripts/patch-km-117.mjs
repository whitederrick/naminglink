// **배치 117(밀러 `Marmalade`·`Marmot`·`Marriage`)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 둘은 `kmm117.json` 에 있다 — marmalade(마멀레이드) · marmot(마멋).
//
//   wedding(혼례)  ← 밀러 `Marriage` 여섯. 「혼인」·「결혼식」이 EXACT 로 이 상징의 별칭이다
//
// ## 새 상징 `marriage` 를 세우지 않았다
//
// 극성 하니스가 「아직 없는 상징」으로 건너뛰는 id 열셋에 `marriage` 가 있다(⑬).
// 그런데 한국어 「혼인」·「결혼식」의 임자는 `wedding` 이므로 새로 세우면 상징이 둘 뜬다 —
// **잠자던 기대는 그대로 두고** `wedding` 에 붙였다(§25 곁가지).
//
// ## `wedding` 도 **판별어 표가 비어 있었다** — 이 세션 다섯 번째다 (배치 35)
//
// 배치 100·103·108·110에 이어 다섯째다. 의미가 하나(주공해몽 「혼인하는 것을 봄」)뿐이라
// `contexts` 가 빈 객체였다 — 일곱이 되므로 기존 의미부터 채웠다.
//
// ## 마지막 문장(신부)은 안 넣었다 (§31 곁가지 — 같은 그림)
//
// 「For a young woman to dream that she is a bride, and unhappy or indifferent…」은
// `bride`(신부)의 「혼례 단장에 불만을 느낌」·「신부가 남편에게 무심한 꿈을 꿈」과
// 같은 그림이고 판별어(불만·못마땅 / 무심·냉담)를 나눌 수 없다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-117.mjs

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
  wedding: {
    // 「혼인」 뒤의 「했」은 조사가 아니라 「혼인했다」가 안 걸린다(㊷ · 배치 109·116)
    aliasesAdd: ["혼례를", "혼례가", "예식", "혼인했다", "혼인하고", "혼인하여"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "혼인하는 것을 봄": "치르는 올리는",
      "여성이 늙고 쇠약한 남자와 혼인함": "늙은 주름 백발",
      "혼례 중에 정인이 검은 옷을 입고 지나감": "정인이 지나가",
      "칙칙한 옷의 하객이 있는 혼례를 봄": "검은 칙칙",
      "밝은 빛깔 옷의 하객이 있는 혼례를 봄": "하객 밝은",
      "혼인을 약속함": "약속 언약",
      "혼례에 들러리로 참석함": "들러리 참석",
      "혼례에 궂은일이 생김": "궂은일 사고 탈이",
    },
    contextsEnAdd: {
      "혼인하는 것을 봄": "held taking place",
      "여성이 늙고 쇠약한 남자와 혼인함": "decrepit wrinkled gray vast encounter",
      "혼례 중에 정인이 검은 옷을 입고 지나감": "passes reproachful desperation coldness",
      "칙칙한 옷의 하객이 있는 혼례를 봄": "somber hues mourning store",
      "밝은 빛깔 옷의 하객이 있는 혼례를 봄": "guests pleasing colors enjoyment",
      "혼인을 약속함": "contracting unpleasant absent",
      "혼례에 들러리로 참석함": "attendant thoughtfulness promising",
      "혼례에 궂은일이 생김": "unfortunate occurrence distress family",
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
