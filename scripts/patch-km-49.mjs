// **배치 49(밀러 Hood~Horoscope)가 이미 있는 상징 셋을 건드린다.**
//
// 새 상징 여섯은 `kmm49.json`에 있다 — `hood`(두건) · `hook`(갈고리) · `hoop`(굴렁쇠) ·
// `hops`(홉덩굴) · `hornet`(말벌) · `horoscope`(별점).
//
//   kmm7  bugle(나팔)  ← 밀러 `Horn` 셋. **표제어가 다른데 한국어 이름이 같은 자리**다
//   km4   bee(벌)      ← 별칭 「말벌」·"wasp" 를 새 `hornet` 에게 넘긴다
//   km9   hat(모자)    ← 별칭 「두건」 을 새 `hood` 에게 넘긴다
//
// **별칭 임자를 옮기는 이유**(CLAUDE.md §25 곁가지 — 「대문」 door→gate 와 같다):
// 밀러가 `Bees` 와 `Hornet`, `Hat` 과 `Hood` 를 따로 두고 물건도 실제로 다르다. 넘기지
// 않으면 「말벌에 쏘였다」가 벌로, 「두건을 썼다」가 모자로 걸려 새 상징이 안 뜬다.
// **한국어 판별어에 있는 그 낱말은 안 건드린다** — 판별어는 별칭 임자와 무관하게 산다
// (`ownTermsOf` 는 한국어면 빈 배열을 돌려준다).
//
// **`Horn` 의 첫 문장은 안 넣었다**(밀러 원문 "To dream that you hear the sound of a horn,
// foretells hasty news of a joyful character."). `bugle` 이 이미 「나팔에서 나는 즐거운
// 소리를 들음」(밀러 `Bugle`)을 갖고 있는데 **그림은 같고 풀이가 다르다** — 같은 이름으로
// 적으면 인용만 포개져 풀이가 뒤섞이고(§22), 다른 이름으로 적으면 판별어를 가를 수 없어
// 뒤엣것이 영영 안 뽑힌다(§30 곁가지). 배치 40의 `Glass` 거울 일곱과 같은 자리다.
// **커버리지에서 그 문장이 비는 것이 옳다** — 다음 사람이 「빠뜨렸다」로 읽고 넣지 않도록 적어 둔다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-49.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  kmm7: {
    bugle: {
      contextsAdd: {
        "부러진 나팔을 봄": "부러진 부러졌 깨진 망가진",
        "아이들이 나팔을 갖고 놂": "아이들 어린이 아이가",
        "여성이 나팔을 붊": "여자가 여성이 처녀가 아가씨",
      },
      contextsEnAdd: {
        "부러진 나팔을 봄": "broken death accident",
        "아이들이 나팔을 갖고 놂": "children playing congeniality home",
        "여성이 나팔을 붊": "woman anxious marriage lover",
      },
    },
  },
  km4: {
    bee: {
      aliasesRemove: ["말벌"],
      aliasesEnRemove: ["wasp"],
    },
  },
  km9: {
    hat: {
      aliasesRemove: ["두건"],
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
    for (const w of patch.aliasesRemove ?? []) {
      const at = (row.aliases ?? []).indexOf(w);
      if (at < 0) stop(`${id}: 뺄 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases.splice(at, 1);
      changed++;
    }
    for (const w of patch.aliasesEnRemove ?? []) {
      const at = (row.aliases_en ?? []).indexOf(w);
      if (at < 0) stop(`${id}: 뺄 영어 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases_en.splice(at, 1);
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

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44 — `replace` 는 실패를 조용히 넘긴다).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    for (const k of Object.keys(patch.contextsAdd ?? {})) {
      if (!(k in row.contexts)) stop(`확인 실패: ${id} 에 「${k}」가 안 들어갔다.`);
    }
    for (const w of patch.aliasesRemove ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`확인 실패: ${id} 에서 「${w}」가 안 빠졌다.`);
    }
    for (const w of patch.aliasesEnRemove ?? []) {
      if ((row.aliases_en ?? []).includes(w)) stop(`확인 실패: ${id} 에서 "${w}" 가 안 빠졌다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
