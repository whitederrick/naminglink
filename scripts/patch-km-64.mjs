// **배치 64(밀러 Intemperance~Inundation)가 이미 있는 상징 셋을 건드린다.**
//
// 새 상징 넷은 `kmm64.json` 에 있다 — intemperance(무절제)·intercede(두둔)·
// intermarry(겹혼인)·interpreter(통역).
//
//   kmm31  entrails(창자)  ← 밀러 `Intestine` 하나
//   kmm28  drunk(술에 취함) ← 밀러 `Intoxication` 하나 (원문이 「[103] See Drunk.」다)
//   kmm36  flood(홍수)     ← 밀러 `Inundation` 셋. **판별어 표가 비어 있었다**
//
// ## 안 넣은 문장 둘 — **커버리지가 비는 것이 옳다**(§24)
//
// `Intestine` 의 앞 두 문장은 `entrails` 에 **그림이 이미 있다**(밀러 `Entrails`).
//
//   「To dream of seeing intestines…」   ↔ 이미 있는 「사람의 창자를 봄」
//   「To see your own intestines…」      ↔ 이미 있는 「제 창자를 봄」
//
// 셋째 문장(난로 위에 올려놓아 뜨거워지는 그림)만 새 자리라 그것만 넣었다.
//
// ## `flood` 는 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62·63과 같다)
//
// 「홍수가 온 땅을 휩쓸고 나를 떠내려 보냄」이 이 상징의 기본값이므로 **좁게** 적는다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-64.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const PATCHES = {
  kmm31: {
    entrails: {
      // **옛 상처를 함께 메운다** — 「제 창자를 봄」의 판별어가 「자신의 스스로」뿐이라
      // 「자기 창자를 보았다」가 기본값(「사람의 창자를 봄」)으로 새고 있었다(프로브가 잡았다).
      // **「내 창자」·「제 창자」는 엔진이 원리적으로 못 가른다** — 가르는 말이 한 글자다
      // (`scoringWordsOf` 의 `length >= 2`). 두 글자로 쓰는 꼴(「나의」·「자기」)만 살린다.
      contextsAppend: { "제 창자를 봄": " 나의 자기" },
      contextsAdd: { "창자를 뜨거운 것 위에 올려놓고 도움을 못 받음": "난로 뜨거워 올려놓" },
      contextsEnAdd: {
        "창자를 뜨거운 것 위에 올려놓고 도움을 못 받음": "radiator refuse unexpected calamity censured",
      },
    },
  },
  kmm28: {
    drunk: {
      contextsAdd: { "몹시 취해 있음": "몹시 곤드레 인사불성" },
      contextsEnAdd: { "몹시 취해 있음": "intoxication cultivating illicit" },
    },
  },
  kmm36: {
    flood: {
      // 이용자가 쓰는 활용형을 함께 올린다(§29 곁가지 ① — 배치 63에서 아홉 번 밟은 자리).
      aliasesAdd: ["큰물에", "큰물이 져", "물에 잠긴"],
      contextsAdd: {
        // 기존 의미 — 이것이 기본값이므로 좁게 적는다(§30 곁가지).
        // 「떠내려」는 형제의 「떠내려가는」에 물린다 — 기본값 쪽을 좁혔다.
        // 「온」은 한 글자라 엔진이 안 센다(`audit-km-dead-words` 가 잡았다).
        "홍수가 온 땅을 휩쓸고 나를 떠내려 보냄": "땅을 나를 실려",
        "검고 들끓는 물에 마을과 들이 잠긴 것을 봄": "검고 시커먼 잠긴 마을",
        "사람들이 큰물에 휩쓸려 가는 것을 봄": "사람들이 떠내려가는 것을",
        "맑은 물이 너른 땅을 덮은 것을 봄": "맑은 너른 덮은",
      },
      contextsEnAdd: {
        // 「floods」는 term_en 「flood」의 어미형이라 엔진이 안 센다(제 이름이다).
        "홍수가 온 땅을 휩쓸고 나를 떠내려 보냄": "destruction sweeping carried",
        "검고 들끓는 물에 마을과 들이 잠긴 것을 봄": "cities country submerged seething dreadful",
        // 「swept」는 극성 하니스의 「I was swept away by the flood」(1인칭)를 가로챈다 —
        // 그 문장의 임자는 기본값(「홍수가 온 땅을 휩쓸고 나를 떠내려 보냄」)이다. 뺐다.
        "사람들이 큰물에 휩쓸려 가는 것을 봄": "human beings bereavements despair",
        // 「clear」를 넣어야 하니스의 「a huge flood of clear water rose」가 이 뜻으로 온다.
        "맑은 물이 너른 땅을 덮은 것을 봄": "clear large area inundated profit hopeless",
      },
    },
  },
};

let changed = 0;

for (const [file, byId] of Object.entries(PATCHES)) {
  const p = path.join(DIR, `${file}.json`);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    if (!row) stop(`${file}.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);
    for (const w of patch.aliasesAdd ?? []) {
      if (row.aliases.includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
      row.aliases.push(w);
      changed++;
    }
    for (const [k, v] of Object.entries(patch.contextsAppend ?? {})) {
      if (!(k in row.contexts)) stop(`${id}: 붙일 판별어 「${k}」가 없다 — 파일이 바뀌었다.`);
      if (row.contexts[k].includes(v.trim())) stop(`${id}: 「${k}」에 이미 붙어 있다 — 이미 돌린 것 같다.`);
      row.contexts[k] += v;
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
    for (const w of patch.aliasesAdd ?? []) {
      if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 별칭 「${w}」가 안 들어갔다.`);
    }
    for (const [k, v] of Object.entries(patch.contextsAppend ?? {})) {
      if (!row.contexts[k].includes(v.trim())) stop(`확인 실패: ${id} 의 「${k}」에 안 붙었다.`);
    }
    for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
      if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
    }
    for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
      if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
