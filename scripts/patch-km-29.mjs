// **배치 29(밀러 Eagles~Elevator)가 이미 있는 상징 둘에 붙는다 — 그 매칭 키를 고친다.**
//
// 새 상징 열일곱은 `kmm29.json`에 있다. 아래 둘은 이미 사전에 있고, 매칭 키는 그 상징이
// 처음 실린 파일에 있다. **같은 id를 두 파일에 적으면 조립이 멈추므로**(절차 ⑥) 새 파일에
// 적지 않고 원래 파일의 항목을 고친다.
//
//   km7  being-taught-letters(글을 배움) ← 밀러 `Education` 둘
//   km9  elephant(코끼리)               ← 밀러 `Elephant` 넷
//
// **둘 다 의미가 하나뿐이라 판별어 표가 비어 있었다.** 의미가 여럿이 되면 표를 채워야 한다
// (`verify-dream-km` 이 「판별어 빠진 의미」로 잡는다).
//
// **`elephant` 의 「흰 코끼리를 봄」에 「흰」을 판별어로 줄 수 없다** — 1글자는 엔진이 안
// 세고(`scoringWordsOf` 의 `length >= 2`), 「흰 코끼리」는 공백으로 쪼개져 「흰」이 된다.
// 대신 그 의미를 **기본값으로 얼려**(FALLBACK_FIRST) 아무것도 안 걸렸을 때 거기로 떨어지게
// 한다 — 「흰 코끼리를 보았다」는 다른 판별어에도 안 걸리므로 제자리로 간다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-29.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km7: {
    "being-taught-letters": {
      // ⑨단계 프로브가 셋을 잡았다 — 「배우고 싶은」·「학교에서 배우고」·「스승이 글을
      // 가르쳐」가 **상징에 아예 안 걸렸다.** 이름이 「글을 배움」뿐이라 사람이 실제로 쓰는
      // 말이 하나도 없었다.
      aliasesAdd: ["배움", "배우고", "배우는", "공부를", "공부하", "글을 가르쳐"],
      contextsAdd: {
        "누군가 글을 가르쳐 줌": "가르쳐 가르치 스승이 선생님",
        // 「배우고싶」은 붙여 적어 「배우고 싶은」에 안 걸린다 — 사람 말의 띄어쓰기를 따른다.
        "배움을 얻고자 애씀": "간절 애썼 애태우 배우려",
        "배우는 곳에 있음": "학교 서당 강의실 교실",
      },
      contextsEnAdd: {
        "누군가 글을 가르쳐 줌": "someone teaching instructed",
        "배움을 얻고자 애씀": "anxious obtain desire knowledge",
        "배우는 곳에 있음": "places influential friends",
      },
    },
  },
  km9: {
    elephant: {
      aliasesAdd: ["코끼리가", "코끼리를", "코끼리 떼"],
      // 「elephant」 하나로 이미 걸린다. 이것이 남아 있으면 「white」가 이 상징의 **제 이름**이
      // 되어 「흰 코끼리를 봄」의 영어 판별어가 통째로 죽는다(`audit-km-dead-words` 가 잡았다).
      aliasesEnRemove: ["white elephant"],
      contextsAdd: {
        "흰 코끼리를 봄": "하얀 새하얀 백색",
        "코끼리를 타고 있음": "타고 올라타 등에",
        "코끼리 여럿을 봄": "여러 여럿 떼를 무리",
        "외따로 있는 코끼리 한 마리를 봄": "홀로 외따로 덩그러니",
        "코끼리에게 먹이를 줌": "먹이를 주었 먹였",
      },
      contextsEnAdd: {
        "흰 코끼리를 봄": "white",
        "코끼리를 타고 있음": "riding solid honors",
        "코끼리 여럿을 봄": "many tremendous",
        "외따로 있는 코끼리 한 마리를 봄": "lone small",
        "코끼리에게 먹이를 줌": "feeding kindness community",
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

    for (const w of patch.aliasesEnRemove ?? []) {
      const at = (row.aliases_en ?? []).indexOf(w);
      if (at < 0) stop(`${id}: 영어 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases_en.splice(at, 1);
      changed++;
    }
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

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44 — 조용한 성공이 가장 비싸다).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    for (const w of patch.aliasesAdd ?? []) {
      if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 「${w}」가 안 들어갔다.`);
    }
    for (const k of Object.keys(patch.contextsAdd ?? {})) {
      if (!(k in row.contexts)) stop(`확인 실패: ${id} 에 「${k}」가 안 들어갔다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
