// 배치 128 곁가지 — **이번 배치가 만든 것이 아니라 원래 있던 상처다.**
//
// 지킴 케이스 「깨진 거울을 보았다」가 `mirror` 의 밀러 의미 「깨진 거울을 봄」이 아니라
// 주공해몽 의미 「깨진 거울로 사람을 비춤」으로 갔다. 뒤엣것이 넓은 낱말 **「깨진」**을
// 쥐고 있고, 앞엣것은 「파편 조각들 유리조각」뿐이라 **0점**이었기 때문이다.
// 밀러 `Mirror` 가 들어온 배치 40부터 그랬고 어떤 관문도 못 봤다(낱말이 겹치지도 죽지도
// 않는다). 프로브의 지킴 케이스만 잡는다(§30 곁가지 — 기존 의미가 쥔 넓은 낱말).
//
// 고침: 「깨진」을 그 그림의 임자(「깨진 거울을 봄」)에게 넘기고, 주공해몽 쪽에는
// 그 뜻을 실제로 말하는 말(「비췄」)을 준다.
// (「비추어」는 못 쓴다 — 「거울에 비친 자신을 봄」이 「비추」를 쥐고 있어 겹친다)
//
// **남는 자리 — 「깨진 거울로 사람을 비췄다」는 여전히 「깨진 거울을 봄」으로 간다.**
// 「깨진」 1점 대 「비췄」 1점의 동점이고 동점은 앞의 것이 이긴다(밀러가 앞으로 정렬된다).
// 두 낱말을 다 주면 형제 판별어가 겹쳐 `verify-dream-km` 이 막는다 — 열여덟 의미가 든
// 상징이라 낱말을 더 나눌 자리가 없다. 둘 다 흉한 뜻이라 화면의 길흉은 같다.
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-128b.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const P = path.resolve("apps/dreamslink/data-sources/extract/km9.json");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const REPLACE = {
  "깨진 거울로 사람을 비춤": ["깨진 금간 조각난 갈라진", "금간 조각난 갈라진 비췄"],
  "깨진 거울을 봄": ["파편 조각들 유리조각", "깨진 깨어진 파편 조각들 유리조각"],
};

const rows = JSON.parse(readFileSync(P, "utf8"));
const row = rows.find((r) => r.id === "mirror");
if (!row) stop("km9.json 에 mirror 가 없다 — 파일이 바뀌었다.");

let changed = 0;
for (const [k, [before, after]] of Object.entries(REPLACE)) {
  if (row.contexts[k] !== before) stop(`mirror: 「${k}」가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
  row.contexts[k] = after;
  changed++;
}
writeFileSync(P, JSON.stringify(rows, null, 2) + "\n", "utf8");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const back = JSON.parse(readFileSync(P, "utf8")).find((r) => r.id === "mirror");
for (const [k, [, after]] of Object.entries(REPLACE)) {
  if (back.contexts[k] !== after) stop(`확인 실패: mirror 의 「${k}」가 안 바뀌었다.`);
}
console.log(`km9.json 고침 — mirror, 고친 자리 ${changed}개. 되읽어 확인함.`);
