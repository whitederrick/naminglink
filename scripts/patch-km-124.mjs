// **배치 124(밀러 `Mice`~`Mile-post`)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 셋은 `kmm124.json` 에 있다 — microscope(현미경) · midwife(산파) ·
// mile-post(이정표).
//
//   mouse(쥐)  ← 밀러 `Mice` 다섯. 「생쥐」가 EXACT 로 이 상징의 별칭이다
//
// ## 기본값을 **바꿔서** 얼린다 (§30)
//
// 있던 다섯은 전부 주공해몽의 조건이 붙은 그림(참새와 싸움 · 고양이에게 잡힘 · 흰 쥐가
// 길을 인도함 · 옷을 물어뜯음 · 크게 내달림)이고, 밀러의 첫 문장이 **가장 일반적인
// 그림**이다 — 막연한 「쥐를 보았다」가 떨어질 자리는 「쥐를 봄」이다.
//
// ## 「옷에」와 기존 「옷을」은 부딪치지 않는다
//
// 기존 「쥐가 사람의 옷을 물어뜯음」이 「옷을」을 쥐고 있어 새 쪽은 「옷에」·「옷 속」으로
// 갈랐다 — 부분 문자열 관계가 아니다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-124.mjs

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
  mouse: {
    // 「흰쥐」는 **옛 상처다** — 붙여 쓰면 앞 글자가 한글이라 「쥐」가 막힌다. 그런데 기존
    // 의미 「흰 쥐가 길을 인도함」의 판별어가 바로 「흰쥐」다 — 그 꼴로는 상징이 안 걸렸다.
    // 프로브의 지킴 케이스가 찾았다(§29 곁가지 ①).
    aliasesAdd: ["쥐가", "쥐를", "쥐 떼", "흰쥐", "들쥐가"],
    contextsAdd: {
      "쥐를 봄": "돌아다 기어",
      "쥐를 죽임": "죽였 때려잡",
      "쥐를 놓침": "놓쳤 달아나",
      "처녀가 쥐 꿈을 꿈": "처녀 아가씨",
      "제 옷에 쥐가 있는 것을 봄": "옷에 옷속 품속",
    },
    contextsEnAdd: {
      "쥐를 봄": "domestic insincerity discouraging tone",
      "쥐를 죽임": "kill conquer",
      "쥐를 놓침": "escape doubtful struggles",
      "처녀가 쥐 꿈을 꿈": "secret deception practised",
      "제 옷에 쥐가 있는 것을 봄": "clothing scandal figure",
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
