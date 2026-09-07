// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 260 — 기존 stone·mason·shop 셋에 문맥을 보태고,
// 새 상징 둘(storage-battery·straw)을 세웠다. Stone Mason 첫 문장은
// 기존 mason 「석공이 일하는 것을 봄」(밀러 Mason, 길함)과 같은 그림·
// 다른 풀이라 건너뛰었고, Storm 전체는 기존 hurricane 「태풍이
// 몰려오는 것을 봄」(밀러 Hurricane)과 같은 그림·다른 풀이라 통째로
// 건너뛰었다(원문 각주가 스스로 "See Hurricane and Rain"라고 가리킨다).
// stone은 r 파일에서만 왔는데 새 m260이 항상 앞서 정렬돼 기본값이
// 바뀌었다 — 옛 「강물 속의 모래와 돌」은 강물이라는 조건이 있고 새
// 「돌을 봄」이 조건 없는 가장 넓은 자리라 바꾸는 쪽을 택했다.
//
// ## 왜 이것이 따로 있어야 하나 (2026-09-01)
//
// 배치를 넣는 절차의 ⑨단계다. ⑧까지의 검사기 셋(`verify-dream-km`·`audit-km-dead-words`·
// `verify-dream-cite`)은 **「적어 둔 것이 규칙에 맞는가」만 본다.** 「이용자가 쓸 말로
// 걸리는가」는 아무도 안 본다 — 09-01 앞 세션에서 셋 다 초록불인데 **다섯 상징이 하나도
// 안 걸렸다**(별칭을 어간으로 적어서, CLAUDE.md §25). 배치 11 에서도 이 프로브가
// **9건을 잡았다**(안 걸림 2 · 엉뚱한 뜻 7) — 검사기 셋은 그때도 전부 초록불이었다.
//
// ## 이 프로브가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 뜻이 맞는지는 안 본다. **걸리는가와 어느 의미로 갈리는가**만 본다.
//   · 한국어 문장만 본다. 영어 판별어는 여기서 안 밟힌다.
//   · 문장을 **손으로 적는다** — 새 배치를 넣으면 `CASES`를 그 배치 것으로 갈아야 한다.
//     갈지 않으면 옛 배치를 다시 재면서 「새 배치를 쟀다」고 착각한다.
//   · 지난 배치는 여기 안 남는다. 영구 회귀는 `verify-dream-match.ts`가 맡는다.
//   · **아무것도 안 걸렸을 때 떨어지는 자리(첫 의미)는 여기서 안 잰다** —
//     `probe-water-fallback.ts`와 조립기의 「기본값이 바뀐 상징」 관문이 본다.
//   · **문장을 통과하도록 고르면 안 된다.** 안 걸리면 문장이 아니라 **데이터를 고친다** —
//     이용자는 이 파일을 안 보고 자기 말로 쓴다.
//
// 재구현하지 않는다 — 제품이 쓰는 matchDream 을 그대로 부른다(CLAUDE.md §23).
//
// 실행: apps/dreamslink 에서  npx tsx scripts/probe-miller-batch.ts
// 종료 코드: 0 전부 걸림 / 1 안 걸리거나 엉뚱한 뜻으로 걸린 것이 있음
import { matchDream } from "../src/lib/engines/dream-match";

type Case = { id: string; ctx: string; text: string };

const CASES: Case[] = [
  // ── 배치 260 새 문맥 (18건) ──────────────────────────────────────────────
  { id: "stone", ctx: "돌을 봄", text: "돌을 보았다" },
  { id: "stone", ctx: "바위나 돌 사이를 걸음", text: "바위나 돌 사이를 걸었다" },
  { id: "stone", ctx: "광석이 나는 땅에서 거래함", text: "돌이 많은 광석 땅에서 거래를 했다" },
  { id: "stone", ctx: "작은 돌이나 조약돌을 봄", text: "작은 돌과 조약돌을 보았다" },
  { id: "stone", ctx: "돌을 던짐", text: "돌을 던졌다" },
  { id: "stone", ctx: "싸움을 거는 사람에게 조약돌이나 돌을 던지려 함", text: "싸움을 거는 사람에게 돌을 던지려 했다" },
  { id: "mason", ctx: "스스로 석공이 됨", text: "스스로 석공이 되었다" },
  { id: "storage-battery", ctx: "축전지 꿈을 꿈", text: "축전지 꿈을 꾸었다" },
  { id: "shop", ctx: "상품이 가득한 가게를 봄", text: "상품이 가득한 가게를 보았다" },
  { id: "shop", ctx: "텅 빈 가게를 봄", text: "가게가 텅 비어 있었다" },
  { id: "shop", ctx: "가게가 불타는 것을 봄", text: "가게가 불타는 것을 보았다" },
  { id: "shop", ctx: "백화점 안에 있음", text: "백화점 안에 있었다" },
  { id: "shop", ctx: "가게에서 물건을 팖", text: "가게에서 물건을 팔았다" },
  { id: "shop", ctx: "여성에게 더러운 회색 면장갑을 팖", text: "가게에서 여성에게 더러운 회색 면장갑을 팔았다" },
  { id: "shop", ctx: "여성이 면장갑을 파는 꿈을 꿈", text: "여성이 가게에서 면장갑을 파는 꿈을 꾸었다" },
  { id: "straw", ctx: "짚 꿈을 꿈", text: "짚 꿈을 꾸었다" },
  { id: "straw", ctx: "짚더미가 불타는 것을 봄", text: "짚더미가 불타는 것을 보았다" },
  { id: "straw", ctx: "가축에게 짚을 먹임", text: "가축에게 짚을 먹였다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징(stone·mason·shop)의 옛 답이 그대로인지 ──
  { id: "stone", ctx: "강물 속의 모래와 돌", text: "강물 속의 모래와 돌을 보았다" },
  { id: "stone", ctx: "손으로 작은 돌을 만지작거림", text: "손으로 작은 돌을 만지작거렸다" },
  { id: "mason", ctx: "석공이 일하는 것을 봄", text: "석공이 일하는 것을 보았다" },
];

let notFound = 0;
let wrongCtx = 0;

for (const c of CASES) {
  const result = matchDream(c.text);
  const hit = result.matched.find((m) => m.id === c.id);
  if (!hit) {
    console.log(`✗ 안 걸림   [${c.id}] 「${c.text}」`);
    notFound++;
    continue;
  }
  if (hit.meaning.context !== c.ctx) {
    console.log(
      `✗ 다른 뜻   [${c.id}] 「${c.text}」\n              바란 것: ${c.ctx}\n              나온 것: ${hit.meaning.context}`,
    );
    wrongCtx++;
    continue;
  }
  console.log(`  OK        [${c.id}] ${c.ctx}`);
}

console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
