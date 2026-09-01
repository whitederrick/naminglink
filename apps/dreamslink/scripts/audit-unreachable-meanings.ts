// **어떤 문장으로도 뽑힐 수 없는 의미**를 센다. 관문이 아니라 **감사**다 — 빨간불을 내지 않는다.
//
// ## 어떻게 재는가
//
// 의미마다 **그것이 받을 수 있는 가장 센 입력**을 만든다 — 상징 이름 + 그 의미의 판별어 전부.
// 이것으로도 형제에게 지면 **어떤 이용자 문장으로도 못 이긴다**(이용자 문장은 형제의 판별어를
// 더 담으면 담았지 덜 담지 않는다). 판단이 필요 없는 부분집합이다.
//
// ## 왜 「제 문맥 문장」으로 재면 안 되는가 (2026-09-02에 한 번 틀렸다)
//
// 처음에는 화면 문구(`meaning.context`)를 그대로 넣어 봤다 — **347건**이 나왔다. 그런데
// 화면 문구에는 판별어가 안 들어 있을 수 있어(「불이 제 집을 태움」의 판별어는 「불길」·「타올랐」)
// 그 수치는 **후보일 뿐**이었다(CLAUDE.md §23 — 재구현·근사는 후보로만 쓴다). 판별어를 넣는
// 방식으로 바꾸자 **2건**이 되었고, 그 둘이 진짜였다.
//
// ## 이 감사가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 「뜻이 맞는가」는 안 본다. **뽑힐 수 있는가**만 본다.
//   · 한국어만 본다(`CONTEXT_KO_V2`). 영어 쪽은 `verify-dream-context-parity` 가 본다.
//   · 의미가 하나뿐인 상징은 안 본다 — 가를 것이 없다.
//   · **띄어쓰기 변형은 못 본다.** 판별어가 「품안」인데 이용자가 「품 안」이라 쓰면 안 걸리는데,
//     그것은 여기서 초록불로 보인다(판별어를 그대로 넣어 재기 때문이다).
//
// ## 왜 빨간불을 안 내는가
//
// 남는 자리에는 **설계상 그런 것**이 섞인다 — `wife` 의 「아내가 아이를 뱀」은 태몽 지름길이
// 「임신」을 태몽 쪽으로 보내기 때문에 안 뽑힌다. 그것이 옳은지는 사람이 정할 일이고, 코드가
// 대신 정하면 관문이 죽는다(CLAUDE.md §28 — 늘 빨간불인 관문은 아무도 안 본다).
//
// 재구현하지 않는다 — 제품이 쓰는 matchDream 을 그대로 부른다(§23).
//
// 실행: apps/dreamslink 에서  npx tsx scripts/audit-unreachable-meanings.ts
// 종료 코드: 0 (감사다 — 판정은 사람이 한다) / 2 검사할 것이 없음
import { matchDream } from "../src/lib/engines/dream-match";
import { DREAM_SYMBOLS } from "../src/lib/dream-symbols";
import { CONTEXT_KO_V2 } from "../src/lib/dream-contexts-ko.v2";

type Row = { id: string; term: string; want: string; got: string };
const rows: Row[] = [];
let checked = 0;

for (const s of DREAM_SYMBOLS) {
  if (s.meanings.length < 2) continue;
  for (const m of s.meanings) {
    checked += 1;
    const want = m.context ?? "";
    const disc = CONTEXT_KO_V2[`${s.id}::${want}`] ?? "";
    const hit = matchDream(`${s.term_ko} ${disc}`.trim()).matched.find((x) => x.id === s.id);
    const got = hit?.meaning?.context ?? "(안 걸림)";
    if (got !== want) rows.push({ id: s.id, term: s.term_ko, want, got });
  }
}

if (checked === 0) {
  console.error("판별이 필요한 의미가 0개다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}

console.log(`판별이 필요한 의미 ${checked}개 · 제 판별어를 넣어도 안 뽑히는 것 ${rows.length}개\n`);
for (const r of rows) {
  console.log(`  ${r.id}(${r.term}) 「${r.want}」 → 「${r.got}」`);
}
console.log(rows.length === 0 ? "\n전부 뽑힐 수 있다." : "\n위 자리는 사람이 판정한다 — 감사라서 빨간불을 내지 않는다.");
