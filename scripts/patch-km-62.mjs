// **배치 62(밀러 Infants~Ink)가 이미 있는 상징 셋을 건드린다.**
//
// 새 상징 둘은 `kmm62.json` 에 있다 — infirmity(병약함)·influence(영향력).
//
//   km6     newborn-baby(갓난아이)  ← 밀러 `Infants` 둘   **판별어 표가 비어 있었다**
//   kmm53   hospital(병원)          ← 밀러 `Infirmary` 하나
//   km9     ink-stick(먹)           ← 밀러 `Ink` 여섯     **판별어 표가 비어 있었다**
//
// ## 왜 새 상징을 안 세웠나 — 셋 다 ⓪ grep 이 EXACT 로 찍었다
//
//   갓난아기 → `newborn-baby` 가 이미 별칭으로 쥐고 있다
//   먹물     → `ink-stick`(먹)이 이미 별칭으로 쥐고 있다. 「잉크」로 새로 세우면
//              `blotting-paper` 의 「잉크 흡수지」와 **둘 다 걸린다**(뒤가 공백이다)
//   요양원   → 밀러가 「[100] See Hospital.」이라고 적었고 `hospital` 이 이미 있다
//
// ## 판별어 표가 비어 있던 둘은 **기존 의미까지 채운다**(배치 35에서 배운 자리)
//
// 의미가 하나뿐일 때는 판별어가 없어도 되지만 여럿이 되는 순간 **모두** 있어야 한다 —
// 붙이는 쪽만 채우면 기존 주공해몽 의미가 0점으로 남아 어떤 문장으로도 안 뽑힌다.
//
// ## 안 넣은 문장 셋 — **커버리지가 비는 것이 옳다**(§24)
//
//   Infants 첫 문장   「To dream of seeing a newly born infant…」
//                     → `newborn-baby` 의 주공해몽 의미 「갓 태어난 아들딸을 봄」과
//                       **그림이 같다**. 이름을 갈라도 판별어로 못 가르고, 같게 적으면
//                       `work` 가 달라 인용이 안 포개진다(배치 35·45와 같은 자리)
//   Inheritance       전문이 「받은 유산으로 바라던 것을 쉽게 이룬다」인데 `bequest` 에
//                     「물려받게 됨」 그림이 **이미 셋** 있다(Bequest·Estate·Heir)
//   Injury            「제가 다침」이 `hurt` 에 이미 있다(밀러 `Hurt`, 배치 54)
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-62.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const PATCHES = {
  km6: {
    "newborn-baby": {
      // **「갓 태어난」은 옛 상처를 메우는 것이다** — 이 상징의 화면 문구가 「갓 태어난
      // 아들딸을 봄」인데 별칭에 그 꼴이 없어 「갓 태어난 아들을 보았다」가 심어진 뒤로
      // 한 번도 안 걸리고 있었다(프로브가 잡았다). 뒤가 공백이라 낱말 경계를 지난다.
      aliasesAdd: ["갓난아이를", "갓난쟁이", "갓 태어난"],
      // 기존 주공해몽 의미도 함께 채운다 — 이것이 이 상징의 기본값이므로 **좁게** 적는다.
      contextsAdd: {
        // 「갓」·「막」은 한 글자라 엔진이 안 센다(`audit-km-dead-words` 가 잡았다).
        "갓 태어난 아들딸을 봄": "태어난 태어났다",
        "처녀가 갓난아이를 가짐": "처녀 아가씨 가졌 낳았",
        "갓난아이가 헤엄치는 것을 봄": "헤엄 물속에서",
      },
      contextsEnAdd: {
        "갓 태어난 아들딸을 봄": "newly born",
        "처녀가 갓난아이를 가짐": "young woman accused indulgence immoral pastime",
        "갓난아이가 헤엄치는 것을 봄": "swimming fortunate escape entanglement",
      },
    },
  },
  kmm53: {
    hospital: {
      contextsAdd: { "병원에서 나옴": "나왔 퇴원 빠져나왔" },
      contextsEnAdd: { "병원에서 나옴": "leave infirmary wily worry" },
    },
  },
  km9: {
    "ink-stick": {
      aliasesAdd: ["잉크", "먹물이", "먹물을"],
      contextsAdd: {
        // 기존 주공해몽 의미 — 이것이 기본값이므로 좁게 적는다(§30 곁가지).
        "남이 먹을 줌": "남이 주었 건네",
        "옷에 먹물이 쏟아진 것을 봄": "옷에 쏟아 튀었",
        "처녀가 먹물을 봄": "처녀 아가씨",
        "손가락에 먹물이 묻음": "손가락 손끝 묻었",
        "붉은 먹물임": "붉은 빨간",
        "먹물을 만듦": "만들 갈았",
        "먹물 병을 봄": "병들 병이",
      },
      contextsEnAdd: {
        "남이 먹을 줌": "gave handed",
        "옷에 먹물이 쏟아진 것을 봄": "spilled clothing spiteful meannesses envy",
        "처녀가 먹물을 봄": "young woman slandered rival",
        "손가락에 먹물이 묻음": "fingers jealous injure exercise",
        // 「red」는 형제의 「slande*red*」에 물린다(`verify-dream-km` 이 잡았다) — 뺐다.
        "붉은 먹물임": "serious trouble",
        "먹물을 만듦": "make low debasing disreputable",
        "먹물 병을 봄": "bottles enemies unsuccessful interests",
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
      if ((row.aliases ?? []).includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
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
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
