// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 59 — Illumination~Imps, 19건)
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
  { id: "illumination", ctx: "기이한 빛을 봄", text: "기이한 빛이 보였다" },
  { id: "illumination", ctx: "얼굴이 환하게 빛나는 것을 봄", text: "얼굴이 환한 빛으로 빛났다" },
  { id: "illumination", ctx: "하늘이 환한데 달과 별과 해가 괴이함", text: "하늘에 빛이 가득한데 달이 괴이했다" },
  { id: "illumination", ctx: "환한 하늘에 아이들이 있는 것을 봄", text: "빛이 가득한 하늘에 아이들이 있었다" },
  { id: "illumination", ctx: "하늘에 빛나는 사람이나 짐승의 모습을 봄", text: "하늘에 빛이 나는 짐승이 있었다" },
  { id: "illumination", ctx: "빛나던 것이 땅에 떨어지고 사람들이 총을 쏨", text: "빛이 땅에 떨어지자 사람들이 총을 쏘았다" },
  { id: "illumination", ctx: "빛나는 뱀이나 기어 다니는 것을 봄", text: "빛이 나는 뱀이 기어 다녔다" },
  { id: "image", ctx: "형상을 봄", text: "형상을 보았다" },
  { id: "image", ctx: "집 안에 형상을 세움", text: "집에 형상을 세웠다" },
  { id: "image", ctx: "흉하게 생긴 형상을 봄", text: "흉하게 생긴 형상을 보았다" },
  { id: "imitation", ctx: "흉내 낸 것을 봄", text: "흉내 낸 것을 보았다" },
  { id: "imitation", ctx: "누가 제 정인이나 저를 흉내 냄", text: "누가 내 애인을 흉내 내고 있었다" },
  { id: "implement", ctx: "연장을 봄", text: "연장을 보았다" },
  { id: "implement", ctx: "연장이 부러져 있음", text: "연장이 부러져 있었다" },
  { id: "fiend", ctx: "작은 악귀들을 봄", text: "작은 악귀들을 보았다" },
  { id: "fiend", ctx: "제가 작은 악귀가 됨", text: "내가 작은 악귀가 되어 있었다" },

  // 이 배치가 판별어를 더한 상징 — **옛 답이 그대로인가**를 함께 잰다.
  { id: "fiend", ctx: "악귀를 봄", text: "악귀를 보았다" },
  { id: "fiend", ctx: "악귀를 이김", text: "악귀를 물리쳤다" },
  { id: "fiend", ctx: "악귀와 마주침", text: "악귀와 맞닥뜨렸다" },
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
