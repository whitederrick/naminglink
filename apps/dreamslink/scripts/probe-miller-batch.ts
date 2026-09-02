// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 46 — Headgear~Hemp Seed, 30건)
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
  { id: "headgear", ctx: "값진 머리쓰개를 봄", text: "값진 머리쓰개를 보았다" },
  { id: "headgear", ctx: "낡고 해진 머리쓰개를 봄", text: "낡고 해진 머리쓰개를 보았다" },
  { id: "funeral-carriage", ctx: "상여와 마주침", text: "상여와 마주쳤다" },
  { id: "funeral-carriage", ctx: "상여를 봄", text: "상여가 놓여 있었다" },
  { id: "funeral-carriage", ctx: "상여가 죽음이나 앓음을 알림", text: "상여가 죽음을 알리는 듯했다" },
  { id: "funeral-carriage", ctx: "상여가 앞길을 가로질러 감", text: "상여가 앞을 가로질러 갔다" },
  { id: "heart", ctx: "심장이 아프고 숨이 막힘", text: "심장이 아프고 숨이 막혔다" },
  { id: "heart", ctx: "제 심장을 봄", text: "자기 심장을 보았다" },
  { id: "heart", ctx: "짐승의 심장을 봄", text: "짐승의 심장을 보았다" },
  { id: "heart", ctx: "닭의 염통을 먹음", text: "닭의 염통을 먹었다" },
  { id: "heat", ctx: "더위에 시달림", text: "더위에 시달렸다" },
  { id: "heather", ctx: "히스꽃을 봄", text: "히스꽃을 보았다" },
  { id: "heaven", ctx: "하늘나라로 올라감", text: "하늘나라로 올라갔다" },
  { id: "heaven", ctx: "젊은이가 사다리로 하늘나라에 오름", text: "사다리를 타고 하늘나라에 올랐다" },
  { id: "heaven", ctx: "하늘나라에서 거룩한 이와 벗들을 만남", text: "하늘나라에서 벗들을 만났다" },
  { id: "heaven", ctx: "하늘나라의 성을 봄", text: "하늘나라의 도성을 보았다" },
  { id: "fence", ctx: "늘 푸른 산울타리를 봄", text: "늘푸른 산울타리를 보았다" },
  { id: "fence", ctx: "잎이 진 산울타리를 봄", text: "잎이 앙상한 산울타리를 보았다" },
  { id: "fence", ctx: "처녀가 정인과 푸른 산울타리를 따라 거닒", text: "정인과 산울타리를 따라 거닐었다" },
  { id: "fence", ctx: "가시 산울타리에 얽힘", text: "가시 산울타리에 얽혔다" },
  { id: "bequest", ctx: "재산이나 값진 것을 물려받게 됨", text: "재산을 물려받게 되었다" },
  { id: "hell", ctx: "지옥에 있음", text: "지옥에 떨어졌다" },
  { id: "hell", ctx: "벗이 지옥에 있는 것을 봄", text: "벗이 지옥에 있었다" },
  { id: "hell", ctx: "지옥에서 울부짖음", text: "지옥에서 울부짖었다" },
  { id: "helmet", ctx: "투구를 봄", text: "투구를 보았다" },
  { id: "hemp", ctx: "삼이 몸에 우거짐", text: "삼이 몸을 휘감았다" },
  { id: "hemp", ctx: "삼을 봄", text: "삼이 놓여 있었다" },
  { id: "hemp", ctx: "처녀가 삼을 기르다 다침", text: "아가씨가 삼을 기르다 다쳤다" },
  { id: "hemp", ctx: "삼씨를 봄", text: "삼씨를 보았다" },
  { id: "hemp", ctx: "장사하는 이가 삼씨를 봄", text: "장사꾼이 삼씨를 보았다" },
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
