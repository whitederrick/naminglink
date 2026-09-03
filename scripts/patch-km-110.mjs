// **배치 110(밀러 `Lumber`~`Lyre`)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm110.json` 에 있다 — lumber(목재) · luxury(사치) · lynx(스라소니) ·
// lyre(리라).
//
//   liar(거짓말쟁이)  ← 밀러 `Lying` 셋
//   lute(비파)        ← 밀러 `Lute` 둘
//
// ## `Lute` 는 **⓪ grep 을 한국어로만 해서 못 봤다**
//
// 「류트」로 찾으면 0건이지만 **`term_en` 이 `lute` 인 상징이 이미 있었다**(비파, 주공해몽).
// id 는 `term_en` 으로 지으므로 새 이름을 「류트」로 지어도 **같은 상징에 합쳐진다** —
// 조립기의 「기본값이 바뀐 상징」 관문이 「품속에 비파가 있음 → 류트를 탐」으로 찍어서야
// 알았다. 이름을 **「비파」**로 맞추고 「류트」는 별칭으로 올렸다.
// → **⓪ grep 은 한국어 이름과 `term_en` 을 **둘 다** 넣어 돌린다.**
//
// 이 상징도 **판별어 표가 비어 있었다**(배치 35 — 이 세션 네 번째다).
//
// ## `Lying` 은 새 상징을 안 세웠다
//
// 배치 97에서 세운 `liar` 가 「거짓말」·「거짓말을」을 별칭으로 쥐고 있다. 새 상징을
// 세우면 「거짓말을 했다」가 상징 둘에 걸린다(§25 곁가지).
//
// ## `Lynx` 는 **파서가 표제어로 세지 않고 있었다** — 배치 24와 같은 병
//
// 원문에 밑줄 표시가 없이 `… seeking to entrap you.  Lynx.` 로 앞 표제어(`Lying`) 끝에
// 붙어 있다. 책 자신의 색인과 대조해 찾았고, `scripts/parse-miller-1901.mjs` 에
// **목록으로 얼려** 고쳤다(`Swimming` 도 같은 병이라 함께 넣었다).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-110.mjs

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
  lute: {
    aliasesAdd: ["류트", "비파를", "비파가"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "품속에 비파가 있음": "품속 품에",
      "비파를 탐": "탔다 타고 뜯었",
      "비파 소리를 들음": "소리를 들었 가락",
    },
    contextsEnAdd: {
      "품속에 비파가 있음": "bosom carried",
      "비파를 탐": "playing auspicious joyful absent",
      "비파 소리를 들음": "hearing music pleasant occupations",
    },
  },
  liar: {
    aliasesAdd: ["거짓말하는", "거짓말했다", "거짓말하고"],
    contextsAdd: {
      "벌을 피하려고 거짓말을 함": "벌을 피하려",
      "벗을 지키려고 거짓말을 함": "벗을 지키려 감싸려",
      "남이 거짓말하는 것을 들음": "들었 듣고",
    },
    contextsEnAdd: {
      "벌을 피하려고 거짓말을 함": "escape punishment dishonorably innocent",
      "벗을 지키려고 거짓말을 함": "protect undeserved chastisement unjust prominence",
      // 「hear」는 기존 「sweetheart」의 부분 문자열이라 안 쓴다(배치 43)
      "남이 거짓말하는 것을 들음": "entrap seeking",
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
