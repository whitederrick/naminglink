// **배치 67(밀러 Jackdaw~Jasper)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 다섯은 `kmm67.json` 에 있다 — jackdaw(갈까마귀)·jailer(간수)·jam(과일 잼)·
// janitor(관리인)·jasper(벽옥).
//
//   km6  prison(감옥)  ← 밀러 `Jail` 둘 (원문이 「[105] See Gaol.」이고 `Gaol` 은 배치 38에서 넣었다)
//                        + 밀러 `Jailer` 의 둘째 문장
//   km9  crow(까마귀)  ← 별칭 「갈까마귀」를 새 `jackdaw` 에게 넘긴다
//
// ## 별칭 임자를 옮기는 이유(§25 곁가지 — 「대문」 door→gate 와 같다)
//
// 「갈까마귀」는 밀러 `Jackdaw` 의 정확한 이름이다. **새 이름이 「까마귀」를 품지만 앞 글자
// 「갈」이 한글이라 `isStandalone` 이 막는다** — 「갈까마귀를 보았다」에 `crow` 는 안 걸린다.
// **「까마귀」·「까마귀들」·「까마귀 떼」는 `crow` 가 그대로 갖는다.**
//
// ## 표제어가 `Jailer` 라도 그 꿈의 사물이 「간수」가 아닐 수 있다
//
// 「무리가 옥문을 부수려 함」은 `Jailer` 표제어에 있지만 **꿈에 있는 것은 옥문이지 간수가
// 아니다.** 처음에 `jailer` 에 붙였다가 **프로브가 「간수로는 안 걸린다」고 잡아** `prison`
// 으로 옮겼다(§41 — 가르는 물음은 「그 꿈에 그 사물이 있는가」다).
//
// ## 안 넣은 문장 하나 — **그림 자체가 비하다**(§31 앞갈래)
//
//   Jail 「To see negroes in jail…」  → 한 인종이 곧 그 꿈의 내용이다. **항목을 만들지 않는다.**
//                                      커버리지가 비는 것이 옳고 여기 적어 둔다.
//
// ## 옛 상처 — 「옥에 갇혔다」가 `jade`(옥)로 걸리고 있었다
//
// `prison` 의 화면 문구 여섯이 「옥에…」인데 별칭에 그 꼴이 없어, 실측하면 이랬다.
//
//   「옥에 갇혀 앉아 있었다」  → jade / 「금은과 주옥을 봄」   ← **운영에서 나가던 답이다**
//   「남을 감옥에 집어넣었다」 → prison / 「남을 옥에 들여보냄」 (이쪽은 옳다)
//
// 「옥」은 한 글자라 별칭으로 못 올린다(구슬 옥과 감옥 옥이 같은 글자다) — **구절째** 올려
// 감옥도 함께 걸리게 했다. **`jade` 쪽은 안 건드린다** — 누가 「옥」의 임자인지는 사람이
// 정할 일이고, 코드가 대신 정하면 그 판단이 묻힌다(§28).
//
// ## 판별어를 고를 때 부딪친 자리
//
// `prison` 은 이미 의미가 열둘이고 「여성이 지하 감옥에 갇혀 있음」이 **「여자가 처녀가 여성이」를
// 쥐고 있다.** 그래서 새 「정인이 감옥에 있는 것을 봄」에는 성별 말을 못 준다 — 「정인이·애인이」로
// 갈랐다. 「남이 감옥에 있는 것을 봄」도 기존 「남을 옥에 들여보냄」이 「남을」을 쥐고 있어
// 「남이·남들이」로 적었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-67.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const PATCHES = {
  km6: {
    prison: {
      // **구절 별칭도 낱말 경계에서 끝나야 한다** — 「옥에 갇」은 뒤의 「혀」가 조사가 아니라
      // 막힌다(프로브가 잡았다, §29 곁가지 ①이 구절에도 그대로 적용된다).
      aliasesAdd: [
        "옥에 갇혀", "옥에 갇혔다", "옥에 갇힌",
        "옥에 들어갔다", "옥에 들어가", "옥에 집어넣었다",
        "옥중", "옥문",
      ],
      contextsAdd: {
        "남이 감옥에 있는 것을 봄": "남이 남들이",
        "정인이 감옥에 있는 것을 봄": "정인이 애인이 사랑하는",
        "무리가 옥문을 부수려 하는 것을 봄": "무리가 떼거리 부수려",
      },
      contextsEnAdd: {
        "남이 감옥에 있는 것을 봄": "others urged grant privileges unworthy",
        "정인이 감옥에 있는 것을 봄": "lover disappointed character deceiver",
        "무리가 옥문을 부수려 하는 것을 봄": "mob attempting forerunner extort bounties",
      },
    },
  },
  km9: {
    crow: {
      aliasesRemove: ["갈까마귀"],
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
    for (const w of patch.aliasesRemove ?? []) {
      const at = row.aliases.indexOf(w);
      if (at < 0) stop(`${id}: 뺄 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases.splice(at, 1);
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
    for (const w of patch.aliasesRemove ?? []) {
      if (row.aliases.includes(w)) stop(`확인 실패: ${id} 에서 「${w}」가 안 빠졌다.`);
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
