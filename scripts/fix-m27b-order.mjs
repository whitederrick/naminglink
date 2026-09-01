// **m27b.json 의 항목 차례와 한 자리의 상징을 고친다.** (일회성, 2026-09-02)
//
// ## 왜 차례를 손대나
//
// `verify-dream-km` 은 형제 문맥끼리 **판별어를 나눠 갖는 것을 금지**한다(동점 위험).
// 그래서 「하얀」을 흰 비둘기와 흰 비둘기 떼가 함께 쓸 수 없고, 각자 제 낱말만 갖는다.
// 그러면 「하얀 비둘기 떼를 보았다」가 **1점 대 1점 동점**이 되고, `chooseMeaning` 은
// 동점이면 **앞의 것**을 고른다 — 즉 **차례가 판정**이다. 좁은 쪽을 앞에 둔다
// (CLAUDE.md §25 곁가지 3 — 「동점이 어쩔 수 없는 자리는 차례로 푼다」).
//
// 마차의 남자·여자 갈래도 같다. 「남자가 남이 모는 마차에 실려 갔다」에서
// 「남자」와 「실려」가 1점씩이라, 두루뭉술한 「남이 모는 마차에 실려 감」을 **뒤로** 보낸다.
//
// ## 왜 수레가 아니라 짐수레인가
//
// 밀러 Driving 의 「If it is a wagon…」을 `cart`(수레)에 붙이면 형제 「수레를 몲」과
// 판별어 「몰았」을 나눠 갖게 되는데, 그 형제는 `m12.json` 에서 와서 **더 앞에 있다** —
// 동점이면 늘 그쪽이 이겨 이 의미가 영영 안 뽑힌다. 차례로도 못 푸는 자리다.
// 밀러에 `Wagon` 표제어가 따로 있으므로 **`wagon`(짐수레)을 세워** 그리로 보낸다.
// 차례가 오면 그 표제어가 이 상징에 합쳐진다.
import { readFileSync, writeFileSync } from "node:fs";

const P = "apps/dreamslink/data-sources/extract/m27b.json";
const items = JSON.parse(readFileSync(P, "utf8"));

const at = (ctx) => {
  const i = items.findIndex((x) => x.context === ctx);
  if (i < 0) {
    console.error(`「${ctx}」를 못 찾았다 — 멈춘다.`);
    process.exit(1);
  }
  return i;
};

/** ctx 를 target 바로 앞으로 옮긴다. */
const moveBefore = (ctx, target) => {
  const [item] = items.splice(at(ctx), 1);
  items.splice(at(target), 0, item);
};

moveBefore("흰 비둘기 떼를 봄", "흰 비둘기를 봄");
moveBefore("남자가 남이 모는 마차에 실려 감", "남이 모는 마차에 실려 감");
moveBefore("여자가 남이 모는 마차에 실려 감", "남이 모는 마차에 실려 감");

const cart = items[at("짐수레를 몲")];
cart.term_ko = "짐수레";
cart.term_en = "wagon";
cart.cite.translation_ko =
  "짐수레라면, 한동안 가난과 딱한 형편에 머물게 된다";

writeFileSync(P, `${JSON.stringify(items, null, 2)}\n`, "utf8");

// 되읽어 확인한다 — 조용한 성공이 가장 비싸다(CLAUDE.md §10 #44).
const after = JSON.parse(readFileSync(P, "utf8"));
const idx = (c) => after.findIndex((x) => x.context === c);
const checks = [
  ["떼가 흰 앞에", idx("흰 비둘기 떼를 봄") < idx("흰 비둘기를 봄")],
  ["남자가 두루뭉술 앞에", idx("남자가 남이 모는 마차에 실려 감") < idx("남이 모는 마차에 실려 감")],
  ["여자가 두루뭉술 앞에", idx("여자가 남이 모는 마차에 실려 감") < idx("남이 모는 마차에 실려 감")],
  ["짐수레가 wagon", after[idx("짐수레를 몲")].term_en === "wagon"],
  ["항목 수 그대로", after.length === 37],
];
let bad = 0;
for (const [name, ok] of checks) {
  console.log(`${ok ? "OK  " : "실패 "} ${name}`);
  if (!ok) bad++;
}
process.exit(bad > 0 ? 1 : 0);
