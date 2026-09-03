// **배치 91(밀러 Learning~Leaves)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 하나는 `kmm91.json` 에 있다 — leaves(나뭇잎).
//
//   being-taught-letters(글을 배움)  ← 밀러 `Learning` 넷(둘은 인용을 포갬)
//   hide(짐승 가죽)                  ← 밀러 `Leather` 다섯(하나는 인용을 포갬)
//
// ## 인용을 포갠 셋 (§31 곁가지 · 배치 32·89·90과 같다)
//
//   Learning 「To dream of learning…」        → 밀러 `Education` 의 「배움을 얻고자 애씀」
//   Learning 「To enter halls, or places…」   → 밀러 `Education` 의 「배우는 곳에 있음」
//   Leather  「To dream of leather…」         → 밀러 `Hide` 의 「짐승 가죽을 봄」
//
// 셋 다 같은 그림이고 같은 `work` 다. 이름을 그대로 쓰면 조립기가 인용을 한 의미에 포갠다.
//
// ## 왜 「나뭇잎」만 새 상징인가
//
// ⓪ 전수 grep — 「배움」·「학문」은 `being-taught-letters` 가, 「가죽」은 `hide` 가 이미 쥐고
// 있었다. 「나뭇잎」·「낙엽」·「잎사귀」는 0건이다(「뽕잎」·「떡잎」은 「나뭇잎」을 안 품는다).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-91.mjs

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
  "being-taught-letters": {
    // 「학식 있는 이들을 보았다」가 하나도 안 걸렸다 — 별칭에 「학식」 꼴이 없었다(프로브가 잡았다).
    // 「학교」는 `academy` 가 이미 쥐고 있어 안 올린다 — 그 문장의 임자는 `academy` 다.
    //
    // **별칭을 한 줄씩 읽다가 죽은 것 둘을 찾았다**(§29 곁가지 ①) — 「공부하」는 뒤에 「고」·「는」이
    // 오고, 「글자를 배」는 뒤에 「웠」이 온다. 둘 다 조사가 아니라 심어진 뒤로 한 번도 안 걸렸다.
    // 지우지는 않고(다른 자리에서 조사가 붙을 수 있다) **완전한 꼴을 함께 올린다.**
    aliasesAdd: [
      "학식",
      "학자",
      "공부하고",
      "공부하는",
      "공부했다",
      "글자를 배웠다",
      "글자를 배우는",
    ],
    contextsAdd: {
      "학식 있는 이들을 봄": "학식 학자",
      "여자가 학식 있는 이들과 어울림": "여자가 어울 사귀",
    },
    contextsEnAdd: {
      "학식 있는 이들을 봄": "learned men companions prominent",
      "여자가 학식 있는 이들과 어울림": "associated ambitious excel endeavors",
    },
  },
  hide: {
    // 「가죽옷」의 「가죽」은 뒤가 「옷」(한글)이라, 「옷」은 앞이 「죽」이라 둘 다 막힌다 —
    // 합성어를 따로 올린다(§25 곁가지).
    aliasesAdd: ["가죽옷", "가죽 장신구"],
    contextsAdd: {
      // 판별어 표가 비어 있었다 — 기존 의미까지 채운다. 그것이 기본값이므로 좁게(§30 곁가지).
      "짐승 가죽을 봄": "짐승 털이",
      "가죽옷을 입음": "입었 입고",
      "가죽 장신구를 봄": "장신구 꾸미개",
      "가죽이 무더기로 쌓여 있음": "쌓여 무더기",
      "가죽을 사고팖": "사고팔 거래 장사",
    },
    contextsEnAdd: {
      "짐승 가죽을 봄": "beast rough tanned",
      "가죽옷을 입음": "dressed lucky speculations",
      "가죽 장신구를 봄": "ornaments faithfulness",
      "가죽이 무더기로 쌓여 있음": "piles fortune",
      "가죽을 사고팖": "deal disposition accumulation",
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
