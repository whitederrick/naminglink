// **배치 94(밀러 Lemonade~Lending)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 둘은 `kmm94.json` 에 있다 — lemonade(레모네이드) · lemons(레몬).
//
//   borrowing(빌림)  ← 밀러 `Lending` 넷
//
// ## 왜 「빌려줌」을 새 상징으로 안 세웠나
//
// 「빌려」가 `borrowing` 의 별칭이라 「돈을 빌려주었다」는 **이미 그 상징에 걸린다** —
// 새 상징을 세우면 둘 다 뜬다(§25 곁가지). 한국어 「빌리다」는 주고받는 두 쪽을 다 덮고,
// 그 상징에는 이미 「다른 사람이 자신에게서 빌림」(=내가 빌려준 쪽)이 들어와 있다.
//
// ## 기존 판별어에서 「돈을」·「물건을」을 뺀다
//
// 그 둘이 없으면 새 넷을 가를 수가 없다. 뺀 뒤에도 기존 문장은 「은행」·「무언가」로 걸린다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-94.mjs

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
  borrowing: {
    // **이 상징은 심어진 뒤로 한 번도 안 걸렸다**(§29 곁가지 ①). 이름이 「빌림」이고 별칭이
    // 「빌려」·「대출」·「차용」뿐이라, 「빌렸다」·「빌려주었다」·「빌려갔다」가 **전부** 막힌다 —
    // 「빌려」 뒤의 「주」·「갔」·「서」가 조사가 아니기 때문이다. 프로브의 지킴 케이스 셋이
    // 함께 빨간불을 내서 드러났다(옛 의미 셋도 못 걸리고 있었다).
    aliasesAdd: [
      "빌렸다",
      "빌려서",
      "빌리는",
      "빌린",
      "빌려주었다",
      "빌려줬다",
      "빌려주는",
      "빌려준",
      "빌려주기를",
      "빌려주겠다고",
      "빌려갔다",
      "빌려 달라",
    ],
    // 기존 판별어에서 「돈을」·「물건을」을 뺀다 — 새 넷이 그 낱말을 써야 갈린다(§30 곁가지).
    // 남는 「은행」·「은행가」·「무언가」·「얻어」만으로도 기존 문장은 그대로 걸린다.
    contextsReplace: {
      "은행가가 다른 은행에서 돈을 빌리는 꿈을 꿈": ["은행 은행가 돈을", "은행 은행가"],
      "무언가를 빌리는 꿈을 꿈": ["물건을 무언가 얻어", "무언가 얻어"],
      // 「남이」도 뺀다 — 「남이 나에게 빌려주겠다고 했다」가 이쪽(=남이 나에게서 빌려간 것)으로
      // 새는 자리다. 「다른사람이」는 띄어쓰기가 없어 자연스러운 문장에서 한 번도 안 걸린다.
      "다른 사람이 자신에게서 빌림": ["다른사람이 남이 빌려갔 갚겠", "빌려갔 갚겠"],
    },
    contextsAdd: {
      // 「빌려주…」 꼴을 여럿 쓰면 서로 부분 문자열이 되어 `verify-dream-km` 이 막는다
      // (실제로 위반 2건이 났다). **무엇을 빌려주느냐**로만 가른다.
      "남에게 돈을 빌려줌": "돈을",
      "남에게 물건을 빌려줌": "물건을",
      "빌려주기를 마다함": "마다 거절",
      "남이 제게 빌려주겠다고 함": "주겠다고 준다고",
    },
    contextsEnAdd: {
      "남에게 돈을 빌려줌": "lending difficulties payments debts unpleasant",
      "남에게 물건을 빌려줌": "articles impoverishment generosity",
      "빌려주기를 마다함": "refuse awake interests respect",
      "남이 제게 빌려주겠다고 함": "offer prosperity close friendships",
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
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
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
