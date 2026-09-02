// **배치 56(밀러 Hut~Hyssop)이 찾아낸 것은 새 상징의 결함이 아니라 옛 상처 하나다.**
//
// 새 상징 일곱은 전부 `kmm56.json` 에 있고 기존 상징을 하나도 안 건드린다. 이 패치는
// 배치 56의 **지킴 케이스**(프로브에 매 판 넣는 「옛 답이 그대로인가」)가 잡은 자리다.
//
// ## 무엇이 틀려 있었나 — 「미친개에게 물렸다」가 「개에게 물림」으로 갔다
//
// `dog` 의 세 의미가 판별어와 차례를 이렇게 쥐고 있었다(배치 27a 이래).
//
//   [8]  개에게 물림        「물렸 깨물 물린」
//   [21] 미친개를 봄        「미쳐 날뛰 거품을」     ← 「미친개」라는 말 자체가 없다
//   [22] 미친개에게 물림    「광견에게 발작 침을」   ← 〃
//
//   「미친개에게 물렸다」  → 개에게 물림 1점 · 미친개에게 물림 0점  → **넓은 쪽이 이긴다**
//   「미친개를 보았다」    → 셋 다 0점                            → **기본값으로 떨어진다**
//
// 어떤 관문도 못 본다 — 낱말이 **겹치지도 죽지도 않았다**(CLAUDE.md §30 곁가지).
// `verify-dream-km`·`audit-km-dead-words`·`verify-dream-cite` 전부 초록불이었다.
//
// ## 어떻게 고치나 — 낱말을 나눠 갖지 않고 **차례**로 푼다
//
// 좁은 쪽에 「미친개에게」·「미친개를」을 주면 「미친개에게 물렸다」가 1:1 **동점**이 되고,
// 동점은 앞의 것이 이기므로 그대로는 안 풀린다. 형제끼리 「물렸」을 나눠 가지면
// `verify-dream-km` 이 「동점 위험」으로 막는다 — 남는 수는 **차례**뿐이다(§25 곁가지 3).
//
//   ① 판별어에 「미친개에게」·「미친개를」·「미친개가」를 준다
//   ② m27a.json 에서 미친개 둘을 「개에게 물림」 **앞으로** 옮긴다
//
// **첫 의미(기본값)는 안 건드린다** — [0] 「사나운 개가 나타남」이 그대로 맨 앞에 남는다.
// 옮기는 자리는 [8] 앞이다.
//
// **이것은 배치 56이 만든 결함이 아니다**(§「오늘 만든 결함과 원래 그랬던 것을 갈라 적는다」).
// 배치 27a 이래 몇 주 동안 「미친개에게 물렸다」가 남의 뜻으로 가고 있었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-56.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

// ── ① 판별어 ────────────────────────────────────────────────────────────────

const KM = path.join(DIR, "km9.json");
const rows = JSON.parse(readFileSync(KM, "utf8"));
const dog = rows.find((r) => r.id === "dog");
if (!dog) stop("km9.json 에 dog 가 없다 — 파일이 바뀌었다.");

const ADD = {
  "미친개를 봄": " 미친개를 미친개가",
  "미친개에게 물림": " 미친개에게 미친개한테",
};

for (const [ctx, extra] of Object.entries(ADD)) {
  if (!(ctx in dog.contexts)) stop(`dog: 판별어 「${ctx}」가 없다 — 파일이 바뀌었다.`);
  if (dog.contexts[ctx].includes("미친개")) stop(`dog: 「${ctx}」에 이미 「미친개」가 있다 — 이미 돌린 것 같다.`);
  dog.contexts[ctx] += extra;
}
writeFileSync(KM, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("km9.json 고침 — dog 판별어 둘");

// ── ② 차례 ──────────────────────────────────────────────────────────────────

const EX = path.join(DIR, "m27a.json");
const items = JSON.parse(readFileSync(EX, "utf8"));

const at = (ctx) => items.findIndex((it) => it.term_en === "dog" && it.context === ctx);
const iBite = at("개에게 물림");
const iMadSee = at("미친개를 봄");
const iMadBite = at("미친개에게 물림");
if (iBite < 0 || iMadSee < 0 || iMadBite < 0) stop("m27a.json 에서 dog 의 세 의미를 못 찾았다.");
if (iMadSee < iBite && iMadBite < iBite) stop("이미 미친개가 앞에 있다 — 이미 돌린 것 같다.");

const madSee = items[iMadSee];
const madBite = items[iMadBite];
const rest = items.filter((it) => it !== madSee && it !== madBite);
const insertAt = rest.findIndex((it) => it.term_en === "dog" && it.context === "개에게 물림");
rest.splice(insertAt, 0, madSee, madBite);
writeFileSync(EX, JSON.stringify(rest, null, 2) + "\n", "utf8");
console.log("m27a.json 고침 — 미친개 둘을 「개에게 물림」 앞으로");

// ── 되읽어 확인한다 (CLAUDE.md §10 #44) ─────────────────────────────────────

const rows2 = JSON.parse(readFileSync(KM, "utf8"));
const dog2 = rows2.find((r) => r.id === "dog");
for (const ctx of Object.keys(ADD)) {
  if (!dog2.contexts[ctx].includes("미친개")) stop(`확인 실패: dog 「${ctx}」에 안 들어갔다.`);
}
const items2 = JSON.parse(readFileSync(EX, "utf8"));
const j = (ctx) => items2.findIndex((it) => it.term_en === "dog" && it.context === ctx);
if (!(j("미친개를 봄") < j("개에게 물림") && j("미친개에게 물림") < j("개에게 물림"))) {
  stop("확인 실패: 차례가 안 바뀌었다.");
}
if (items2.length !== items.length) stop(`확인 실패: 항목 수가 ${items.length} → ${items2.length} 로 바뀌었다.`);
if (items2[0].context !== items[0].context) stop("확인 실패: 첫 항목이 바뀌었다.");

console.log("되읽어 확인함 — 항목 수 그대로, 첫 항목 그대로.");
