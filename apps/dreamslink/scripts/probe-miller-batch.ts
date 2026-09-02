// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 35 — Fireworks~Flies, 38건)
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
  { id: "fireworks", ctx: "불꽃놀이를 구경함", text: "불꽃놀이를 구경했다" },
  { id: "fireworks", ctx: "처녀가 불꽃놀이를 봄", text: "아가씨가 불꽃놀이를 보았다" },
  { id: "sky", ctx: "별이 가득한 하늘을 봄", text: "별이 가득한 하늘을 보았다" },
  { id: "sky", ctx: "하늘이 환히 빛나며 하늘 무리로 가득함", text: "하늘이 환히 빛나고 무리로 가득했다" },
  { id: "sky", ctx: "아는 사람이 하늘에 있는 것을 봄", text: "아는 사람이 하늘에 있었다" },
  { id: "fish", ctx: "맑은 시냇물 속의 물고기를 봄", text: "맑은 시냇물 속의 물고기를 보았다" },
  { id: "fish", ctx: "죽은 물고기를 봄", text: "죽은 물고기를 보았다" },
  { id: "fish", ctx: "처녀가 물고기를 봄", text: "아가씨가 물고기를 보았다" },
  { id: "fish", ctx: "메기를 낚음", text: "메기를 낚았다" },
  { id: "fish", ctx: "물에 들어가 물고기를 잡음", text: "물속에서 물고기를 잡았다" },
  { id: "fish", ctx: "물고기를 먹음", text: "물고기를 구워 먹었다" },
  { id: "fisherman", ctx: "어부를 봄", text: "어부를 보았다" },
  { id: "fishhook", ctx: "낚싯바늘을 봄", text: "낚싯바늘을 보았다" },
  { id: "fish-market", ctx: "어시장에 감", text: "어시장에 갔다" },
  { id: "fish-market", ctx: "상한 생선을 봄", text: "어시장에서 상한 생선을 보았다" },
  { id: "net", ctx: "고기 그물을 봄", text: "고기 그물을 보았다" },
  { id: "net", ctx: "찢어진 그물을 봄", text: "찢어진 그물을 보았다" },
  { id: "fish-pond", ctx: "흐린 연못을 봄", text: "흙탕물 연못을 보았다" },
  { id: "fish-pond", ctx: "맑고 물고기가 많은 연못을 봄", text: "맑고 물고기가 그득한 연못을 보았다" },
  { id: "fish-pond", ctx: "텅 빈 연못을 봄", text: "연못이 비어 있었다" },
  { id: "fish-pond", ctx: "처녀가 맑은 연못에 빠짐", text: "아가씨가 맑은 연못에 빠졌다" },
  { id: "fish-pond", ctx: "처녀가 흐린 연못에 빠짐", text: "아가씨가 흐린 연못에 빠진 것을 보았다" },
  { id: "fits", ctx: "발작을 일으킴", text: "내가 발작을 일으켰다" },
  { id: "fits", ctx: "남이 발작하는 것을 봄", text: "남이 발작하는 것을 보았다" },
  { id: "banner", ctx: "제 나라 깃발을 봄", text: "우리나라 깃발을 보았다" },
  { id: "banner", ctx: "여성이 깃발을 봄", text: "여자가 깃발을 보았다" },
  { id: "banner", ctx: "다른 나라 깃발을 봄", text: "외국 깃발을 보았다" },
  { id: "banner", ctx: "깃발로 신호를 받음", text: "깃발로 신호를 받았다" },
  { id: "fire", ctx: "불길과 싸움", text: "불길과 맞서 싸웠다" },
  { id: "flax", ctx: "아마 풀을 봄", text: "아마 풀을 보았다" },
  { id: "spinning-thread", ctx: "아마 실을 자음", text: "아마 실을 자았다" },
  { id: "flea", ctx: "벼룩을 봄", text: "벼룩이 기어다녔다" },
  { id: "flea", ctx: "여성이 벼룩에 물림", text: "여자가 벼룩에 물렸다" },
  { id: "flea", ctx: "정인의 몸에 벼룩이 있는 것을 봄", text: "애인 몸에 벼룩이 있었다" },
  { id: "fleet", ctx: "함대가 빠르게 나아가는 것을 봄", text: "함대가 빠르게 나아갔다" },
  { id: "fly", ctx: "파리를 봄", text: "파리가 날아다녔다" },
  { id: "fly", ctx: "처녀가 파리를 봄", text: "아가씨가 파리를 보았다" },
  { id: "fly", ctx: "파리를 잡아 없앰", text: "파리를 잡아 없앴다" },
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
