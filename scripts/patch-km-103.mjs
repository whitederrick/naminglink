// **배치 103(밀러 `Lion`)은 새 상징을 안 세운다** — `kmm103.json` 이 없는 판이다.
//
//   lion(사자)  ← 밀러 `Lion` 열셋. ⓪ grep 이 「사자」를 EXACT 로 찍었다
//
// ## 배치 100의 `lightning` 과 **똑같은 자리다** — 판별어 표가 비어 있었다 (배치 35)
//
// 의미가 하나(주공해몽 「사자가 크게 울부짖음」)뿐이라 `contexts` 가 빈 객체였다.
// 열넷이 되므로 **기존 의미의 판별어부터 채웠다** — 안 채우면 0점으로 남아 안 뽑힌다.
//
// ## 기본값은 **바꿔서** 얼렸다 (§30 · 배치 100과 같다)
//
// 밀러의 첫 문장 「사자를 봄」이 이 상징의 **가장 일반적인 그림**이다. 옛 기본값
// 「사자가 크게 울부짖음」은 조건이 붙은 자리다 → `FALLBACK_FIRST` 에 「사자를 봄」.
//
// ## 「울부짖음」과 「울음소리를 들음」을 갈랐다 (§31 곁가지)
//
// 주공해몽과 밀러가 **같은 그림**(사자가 우는 것)을 말한다. `work` 가 다르므로 이름을
// 갈라 적고, 판별어도 **우는 쪽**(울부짖·포효)과 **듣는 쪽**(울음소리·들었)으로 나눴다.
// 둘 다 길이라 어느 쪽으로 가도 길흉이 뒤집히지 않는다.
//
// ## 「새끼 사자」는 차례로 풀었다
//
// 「처녀가 새끼 사자를 봄」이 「새끼 사자를 봄」의 낱말(새끼)을 함께 가지므로 동점이 난다 —
// **좁은 쪽을 추출 파일에서 앞에** 두었다(§25 곁가지 3).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-103.mjs

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
  lion: {
    aliasesAdd: ["수사자", "새끼 사자", "사자 떼", "사자가", "사자를"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "사자가 크게 울부짖음": "울부짖 포효",
      // 새로 넣는 열셋
      "사자를 봄": "어슬렁 버티고",
      "사자를 굴복시킴": "굴복 제압 이겼",
      "사자에게 눌림": "눌렸 깔렸 덮쳤",
      "우리에 갇힌 사자를 봄": "우리에 갇힌 철창",
      "사람이 사자를 다루는 것을 봄": "다루 부리는 조련",
      "처녀가 새끼 사자를 봄": "처녀 아가씨",
      "새끼 사자를 봄": "새끼",
      "사자 굴 속의 다니엘을 봄": "다니엘",
      "사자의 울음소리를 들음": "울음소리 들었",
      "사자 머리가 이빨을 드러내고 으르렁댐": "이빨 으르렁 송곳니",
      "사자 가죽을 봄": "가죽",
      "사자를 탐": "올라타 타고 탔다",
      "주머니칼로 아이들을 사자에게서 지킴": "주머니칼 지켰 막아",
    },
    contextsEnAdd: {
      "사자가 크게 울부짖음": "roared loudly",
      "사자를 봄": "great force driving",
      "사자를 굴복시킴": "subdue victorious engagement",
      "사자에게 눌림": "open attacks enemies",
      "우리에 갇힌 사자를 봄": "caged depends cope opposition",
      "사람이 사자를 다루는 것을 봄": "controlling business mental favorably",
      "처녀가 새끼 사자를 봄": "fascinating lovers",
      "새끼 사자를 봄": "young enterprises properly attended",
      "사자 굴 속의 다니엘을 봄": "Daniel magnetism intellectual",
      "사자의 울음소리를 들음": "heard advancement preferment",
      "사자 머리가 이빨을 드러내고 으르렁댐": "snarls threatened defeat upward",
      "사자 가죽을 봄": "skin fortune happiness",
      "사자를 탐": "ride courage persistency surmounting",
      "주머니칼로 아이들을 사자에게서 지킴": "defending pen-knife artfulness obligations",
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
