// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 64 — Intemperance~Inundation, 16건)
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
  { id: "intemperance", ctx: "머리 쓰는 일에 지나침", text: "앎을 좇는 데 무절제하게 빠져 있었다" },
  { id: "intemperance", ctx: "사랑이나 정욕에 지나침", text: "사랑에 무절제하게 빠져 있었다" },
  { id: "intemperance", ctx: "처녀가 그런 꿈을 꿈", text: "처녀가 무절제한 꿈을 꾸었다" },
  { id: "intercede", ctx: "남을 두둔하여 나섬", text: "남을 두둔하여 나섰다" },
  { id: "intermarry", ctx: "겹혼인을 함", text: "겹혼인을 했다" },
  { id: "interpreter", ctx: "통역하는 이를 봄", text: "통역하는 이를 보았다" },
  { id: "entrails", ctx: "창자를 뜨거운 것 위에 올려놓고 도움을 못 받음", text: "창자를 난로 위에 올려놓아 뜨거워졌다" },
  { id: "drunk", ctx: "몹시 취해 있음", text: "몹시 술에 취해 인사불성이었다" },
  { id: "flood", ctx: "검고 들끓는 물에 마을과 들이 잠긴 것을 봄", text: "온 마을이 시커먼 홍수에 잠긴 것을 보았다" },
  { id: "flood", ctx: "사람들이 큰물에 휩쓸려 가는 것을 봄", text: "사람들이 큰물에 떠내려가는 것을 보았다" },
  { id: "flood", ctx: "맑은 물이 너른 땅을 덮은 것을 봄", text: "맑은 큰물이 너른 땅을 덮은 것을 보았다" },

  // 이 배치가 판별어 표를 채운 상징 — **옛 답이 그대로인가**를 함께 잰다.
  { id: "flood", ctx: "홍수가 온 땅을 휩쓸고 나를 떠내려 보냄", text: "홍수가 땅을 휩쓸고 나를 실려 보냈다" },
  { id: "entrails", ctx: "사람의 창자를 봄", text: "사람의 창자를 보았다" },
  { id: "entrails", ctx: "제 창자를 봄", text: "자기 창자를 보았다" },
  { id: "drunk", ctx: "독한 술에 취함", text: "독한 술에 취했다" },
  { id: "drunk", ctx: "포도주에 취함", text: "포도주에 취했다" },
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
