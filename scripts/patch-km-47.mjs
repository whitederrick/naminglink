// **배치 47(밀러 Hen~Hissing)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 열은 `kmm47.json`에 있다 — `herb`(약초) · `hermit`(은둔자) · `herring`(청어) ·
// `hide`(짐승 가죽) · `hidden`(숨김) · `hieroglyph`(상형문자) · `high-school`(고등학교) ·
// `high-tide`(밀물) · `hips`(엉덩이) · `hissing`(야유).
//
//   km8   chicken(닭)  ← `Hen` 하나(=See Chickens). 「암탉」이 이미 그 상징의 별칭이다
//   km8   slope(언덕)  ← `Hills` 둘(=See Ascend and Descend). **판별어 표가 비어 있었다**
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-47.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km8: {
    chicken: {
      contextsAdd: {
        "암탉을 봄": "암탉 씨암탉",
      },
      contextsEnAdd: {
        "암탉을 봄": "hens pleasant family reunions",
      },
    },
    slope: {
      aliasesAdd: ["언덕을", "언덕이", "언덕길"],
      contextsAdd: {
        "비탈길을 걸어 오름": "비탈길 걸어서",
        "언덕을 올라 꼭대기에 이름": "꼭대기 정상 다다랐",
        "언덕을 오르다 미끄러져 내려옴": "미끄러 굴러 되돌아",
      },
      contextsEnAdd: {
        "비탈길을 걸어 오름": "walked up the slope",
        "언덕을 올라 꼭대기에 이름": "climbing top reached good",
        "언덕을 오르다 미끄러져 내려옴": "fall back envy contrariness fight",
      },
    },
  },
};

let changed = 0;
const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

for (const [file, byId] of Object.entries(PATCHES)) {
  const p = path.join(DIR, `${file}.json`);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    if (!row) stop(`${file}.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);

    for (const w of patch.aliasesAdd ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다.`);
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
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file}.json 고침`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    for (const k of Object.keys(patch.contextsAdd ?? {})) {
      if (!(k in row.contexts)) stop(`확인 실패: ${id} 에 「${k}」가 안 들어갔다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
