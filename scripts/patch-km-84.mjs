// **배치 84(밀러 `Lamp` 열둘)는 새 상징을 하나도 안 세운다.**
//
//   lamp(등불)  ← 밀러 `Lamp` 열둘. 주공해몽 하나와 합쳐 열셋이 된다
//
// ## 판별어 표가 비어 있었다 — **기존 의미까지 채운다**(배치 35·79·81과 같다)
//
// 의미가 하나뿐이던 상징은 판별어가 없어도 됐다. 여럿이 되는 순간 모두 있어야 한다.
// 기존 의미는 얼린 기본값이므로 **좁게** 적는다(§30 곁가지).
//
// ## 별칭에 「램프」를 안 올린 까닭
//
// 「램프」는 `gas-lamp` 의 별칭 「가스 램프」에 들어 있다 — 올리면 「가스 램프를 보았다」에
// **상징이 둘 뜬다**(§25 곁가지). 대신 합성어 「등잔불」을 올렸다(「등잔」 뒤의 「불」이
// 조사가 아니라 그대로는 안 걸린다).
//
// ## 영어에서 피한 것 둘
//
// 「oil」은 `aliases_en` 의 「oil lamp」에 들어 있어 제 이름이 될 수 있고, 「light」는
// 「lighted」의 부분 문자열이다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-84.mjs

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
  lamp: {
    aliasesAdd: ["등잔불"],
    contextsAdd: {
      // 기존 주공해몽 의미 — 이것이 얼린 기본값이므로 **좁게**(§30 곁가지).
      "등불과 촛불이 밝게 빛남": "밝게 환하게",
      "기름이 가득 찬 등불을 봄": "기름이 가득",
      "비어 있는 등불을 봄": "비어 바닥났",
      "등불이 맑은 불꽃으로 탐": "맑은 불꽃",
      "등불빛이 흐릿함": "흐릿 침침 뿌옇",
      "켜 놓은 등불을 떨어뜨림": "떨어뜨",
      "등불이 터짐": "터졌 터지 폭발",
      "깨진 등불을 봄": "깨진 깨졌",
      "등불을 켬": "켰다 붙였",
      "등불을 들고 다님": "들고",
      "들고 가던 등불이 꺼짐": "꺼졌 꺼지",
      "겁에 질려 창밖으로 어지러운 빛을 비춤": "창밖 겁에",
      "등불에 옷이 붙음": "옷에 옷이",
    },
    contextsEnAdd: {
      "등불과 촛불이 밝게 빛남": "brightly burning shining",
      // 「oil」은 `aliases_en` 의 「oil lamp」에 들어 있어 제 이름이 될 수 있다 — 안 쓴다.
      "기름이 가득 찬 등불을 봄": "filled activity gratifying results",
      "비어 있는 등불을 봄": "empty depression despondency",
      // 「light」는 「lighted」의 부분 문자열이라 「등불을 켬」에서 안 쓴다.
      "등불이 맑은 불꽃으로 탐": "lighted clear flame merited bliss",
      "등불빛이 흐릿함": "dull misty radiance jealousy envy",
      "켜 놓은 등불을 떨어뜨림": "drop plans abruptly",
      "등불이 터짐": "explodes unite damaging interests",
      "깨진 등불을 봄": "broken death relatives",
      "등불을 켬": "change affairs profit soon",
      "등불을 들고 다님": "carry independent self-sustaining convictions",
      "들고 가던 등불이 꺼짐": "fails unfortunate conclusions perhaps",
      "겁에 질려 창밖으로 어지러운 빛을 비춤": "affrighted bewildering window ensnare",
      "등불에 옷이 붙음": "ignite apparel humiliation encouragement sympathy",
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
