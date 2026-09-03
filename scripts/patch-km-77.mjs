// **배치 77(밀러 Kitchen~Knapsack)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 둘은 `kmm77.json` 에 있다 — kite(연)·knapsack(배낭).
//
//   kitchen(부엌)  ← 밀러 `Kitchen` 둘
//   cat(고양이)    ← 밀러 `Kitten` 다섯 (원문이 「[106] See Cats.」다)
//
// ## 왜 새 상징을 안 세웠나
//
// 「부엌」·「고양이」가 이름 그대로 임자다. **「새끼 고양이」는 「고양이」를 공백 앞에서 품어**
// 새 상징을 세우면 둘 다 걸린다(§25 곁가지). `cat` 의 별칭에도 「새끼고양이」가 이미 있다.
//
// ## 판별어를 고를 때 부딪친 자리 — `cat` 이 이미 열하나다
//
// 기존이 「하얀·깨끗한·흰색」(깨끗한 흰 고양이)과 「여위·비쩍·지저분·더러운」(여위고 지저분한
// 고양이)을 쥐고 있어, 새 「곱고 통통한 흰 새끼」와 「얼룩지고 여윈 새끼」에는 **그 말을 못 준다** —
// 「통통·살진」과 「얼룩진·때가」로 갈랐다. 영어도 「white clean」·「thin dirty filthy skinny」가
// 이미 잡혀 있어 「fat artful」·「soiled colored lean」으로 적었다.
//
// **「새끼」는 가장 넓은 새 의미(「새끼 고양이를 봄」)에만 준다** — 다른 둘에 주면 그 셋이
// 늘 동점이 된다(§30 곁가지). 동점이 나면 파일에서 앞에 둔 좁은 쪽이 이긴다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-77.mjs

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
  kitchen: {
    contextsAdd: {
      "부엌을 봄": "갑작스 들이닥 가라앉",
      "부엌이 정갈하고 반듯함": "정갈 반듯 말끔",
    },
    contextsEnAdd: {
      "부엌을 봄": "forced meet emergencies depress spirits",
      "부엌이 정갈하고 반듯함": "orderly mistress interesting fortunes",
    },
  },
  cat: {
    aliasesAdd: ["새끼 고양이", "고양이 새끼"],
    contextsAdd: {
      "곱고 통통한 흰 새끼 고양이를 봄": "통통 살진 포동",
      "얼룩지고 여윈 새끼 고양이를 봄": "얼룩진 때가 꾀죄죄",
      // **가장 넓은 것이라 파일에서 맨 뒤에 둔다** — 동점이면 앞의 좁은 쪽이 이긴다.
      "새끼 고양이를 봄": "새끼",
      "새끼 고양이를 죽임": "죽였 없앴",
      "뱀이 새끼 고양이를 물어 죽이는 것을 봄": "물어 죽이는",
    },
    contextsEnAdd: {
      "곱고 통통한 흰 새끼 고양이를 봄": "fat artful deception ensnare prevail",
      // 「lean」은 기존 「깨끗한 흰 고양이를 봄」의 「c*lean*」에 물린다 — 뺐다.
      "얼룩지고 여윈 새끼 고양이를 봄": "soiled colored victimized glaring",
      // 「kitten」은 `cat` 의 영어 별칭이라 제 이름이 된다(`audit-km-dead-words` 가 잡았다).
      "새끼 고양이를 봄": "abominable vexations pursue",
      "새끼 고양이를 죽임": "overcome worries",
      "뱀이 새끼 고양이를 물어 죽이는 것을 봄": "seeking injure themselves",
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
