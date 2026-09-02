// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 57 — Ice·Icicles·Ice Cream, 20건)
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
  { id: "ice", ctx: "얼음을 봄", text: "커다란 얼음덩이를 보았다" },
  { id: "ice", ctx: "처녀가 얼음 위를 걸음", text: "처녀가 얼음 위를 걸었다" },
  { id: "ice", ctx: "얼음 위를 걸음", text: "얼음 위를 걸었다" },
  { id: "ice", ctx: "맑은 시냇물에 얼음이 떠가는 것을 봄", text: "맑은 시냇물에 얼음이 떠가고 있었다" },
  { id: "ice", ctx: "얼음을 만듦", text: "얼음을 만들었다" },
  { id: "ice", ctx: "얼음을 씹어 먹음", text: "얼음을 씹어 먹었다" },
  { id: "ice", ctx: "얼음물을 마심", text: "얼음물을 마셨다" },
  { id: "ice", ctx: "얼음물에 몸을 담금", text: "얼음물에 몸을 담갔다" },
  { id: "icicle", ctx: "처마에 달린 고드름을 봄", text: "처마에 고드름이 달려 있었다" },
  { id: "icicle", ctx: "울타리에 달린 고드름을 봄", text: "울타리에 고드름이 달려 있었다" },
  { id: "icicle", ctx: "늘푸른나무에 달린 고드름을 봄", text: "사철나무에 고드름이 달려 있었다" },
  { id: "icicle", ctx: "고드름이 나무에서 떨어지는 것을 봄", text: "고드름이 나무에서 떨어졌다" },
  { id: "icicle", ctx: "나무에 달린 고드름을 봄", text: "나무에 고드름이 달려 있었다" },
  { id: "ice-cream", ctx: "아이스크림을 먹음", text: "아이스크림을 맛있게 먹었다" },
  { id: "ice-cream", ctx: "아이들이 아이스크림 먹는 것을 봄", text: "아이들이 아이스크림을 먹고 있었다" },
  { id: "ice-cream", ctx: "아이스크림을 엎지름", text: "아이스크림을 엎질렀다" },
  { id: "ice-cream", ctx: "쉰 아이스크림을 봄", text: "시큼한 아이스크림을 보았다" },
  { id: "ice-cream", ctx: "아이스크림이 녹아 있음", text: "아이스크림이 녹아 있었다" },

  // 이 배치의 새 이름이 스쳐 가는 기존 상징들 — **옛 답이 그대로인지** 함께 잰다.
  // 「아이스크림」⊃「아이」(child)·「크림」(cream) · 「얼음물」⊃「물」(water) ·
  // 「늘푸른나무」⊃「나무」(tree) · 처마/울타리는 roof·fence 의 이름이다
  { id: "cream", ctx: "크림을 마심", text: "크림을 마셨다" },
  { id: "evergreen", ctx: "늘푸른나무를 봄", text: "늘푸른나무를 보았다" },
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
