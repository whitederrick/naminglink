// **배치 54(밀러 Hounds~Hurt)가 이미 있는 상징 넷을 건드린다.**
//
// 새 상징 셋은 `kmm54.json` 에 있다 — `housekeeper`(가정부) · `hunchback`(등이 굽은 사람) ·
// `hurt`(다침).
//
//   kmm30  embrace(껴안음)  ← `Hugging` 셋. **기존 판별어에서 「남편 아내」를 뺀다**
//   kmm32  famish(굶주림)   ← `Hunger` 하나. **기존 판별어에서 「배가」를 뺀다**
//   km6    hunting(사냥)    ← `Hunting` 하나. **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   km9    dog(개)          ← `Hounds` 둘(=See Dogs)
//
// **기존을 좁히는 이유**(§30 곁가지 — 붙이는 쪽만 채우면 기존이 새 의미를 가로챈다):
//
//   「남편이 아닌 사람을 껴안았다」  기존 「지아비나 지어미를…」이 **「남편」**을 쥐어 동점으로 이긴다
//   「배가 고팠다」                기존 「제가 굶주림」이 **「배가」**를 쥐어 동점으로 이긴다
//
// 둘 다 기존 의미는 그 상징의 **기본값 자리**이거나 다른 낱말(「지아비」·「내가」)로 걸리므로
// 잃는 것이 없다.
//
// **§31 — 낱말이 비하인 자리**: `Hunchback` 의 화면 이름은 「등이 굽은 사람」으로 짓고
// 「꼽추」·「곱사등이」는 **별칭에만** 올렸다(화면에 안 뜨고 세기만 한다). 인용문(`cite.original`)
// 에는 원문 그대로 둔다 — `Dumb`·`Dwarf`·`Harlot` 과 같은 처리다.
//
// **안 넣은 것 셋 — 커버리지가 비는 것이 옳다**(§24 · §31).
//
//   House                   초기 pilot 에서 이미 뽑았다(`miller-pilot.json` 에 셋 있다)
//   Humidity                `air`(공기)에 「습기에 짓눌림을 느낌」(밀러 `Air`)이 이미 있다 —
//                           원문도 "See Air" 로 그쪽을 가리킨다
//   Hunting 둘째 문장        `game`(사냥감)에 「사냥감을 잡음」이 이미 있다 — 같은 그림이다
//   Hounds 셋째 문장         `dog` 에 「사냥개가 뒤를 쫓음」(밀러 `Dogs`)이 이미 있다
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-54.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  kmm30: {
    embrace: {
      contextsAdd: {
        "껴안음": "덥석 와락",
        "여성이 남자를 껴안음": "여자가 여성이 아가씨",
        "지어미가 남편 아닌 이를 껴안음": "아닌 몰래",
      },
      contextsEnAdd: {
        "껴안음": "hugging disappointed",
        "여성이 남자를 껴안음": "advances doubtful",
        "지어미가 남편 아닌 이를 껴안음": "married endanger honor absence",
      },
      contextsNarrow: [["지아비나 지어미를 시들하게 껴안음", "지아비 지어미 남편 아내", "지아비 지어미 시들"]],
    },
  },
  kmm32: {
    famish: {
      aliasesAdd: ["배고픔", "배가 고팠다", "허기"],
      contextsAdd: { "배가 고픔": "고팠 고프 허기" },
      contextsEnAdd: { "배가 고픔": "hungry unfortunate omen" },
      contextsNarrow: [["제가 굶주림", "내가 제가 배가", "내가 제가"]],
    },
  },
  km6: {
    hunting: {
      contextsAdd: {
        "사냥을 함": "쫓았 좇았",
        "숲속에서 사냥을 함": "숲속 숲에서 산속",
      },
      contextsEnAdd: {
        "사냥을 함": "struggle unattainable",
        "숲속에서 사냥을 함": "forest woods",
      },
    },
  },
  km9: {
    dog: {
      contextsAdd: {
        "사냥개가 사냥에 나선 것을 봄": "사냥에 사냥을",
        "여성이 사냥개 꿈을 꿈": "여자가 여성이 아가씨",
      },
      contextsEnAdd: {
        "사냥개가 사냥에 나선 것을 봄": "hunt delights pleasant",
        "여성이 사냥개 꿈을 꿈": "below station",
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
    for (const [k, before, after] of patch.contextsNarrow ?? []) {
      if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 예상과 다르다: ${row.contexts[k]}`);
      row.contexts[k] = after;
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
    for (const [k, , after] of patch.contextsNarrow ?? []) {
      if (row.contexts[k] !== after) stop(`확인 실패: ${id} 의 「${k}」가 안 좁혀졌다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
