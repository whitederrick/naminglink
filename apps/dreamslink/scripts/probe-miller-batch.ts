// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 58 — Absalom~Illness, 19건)
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
  { id: "absalom", ctx: "압살롬 꿈을 꿈", text: "압살롬을 보았다" },
  { id: "humidity", ctx: "눅눅한 기운에 짓눌림", text: "눅눅한 기운에 짓눌려 있었다" },
  { id: "ideal", ctx: "처녀가 제 이상형을 만남", text: "처녀가 제 이상형을 만났다" },
  { id: "ideal", ctx: "총각이 제 이상형을 만남", text: "총각이 제 이상형을 만났다" },
  { id: "idiot", ctx: "어리석은 사람들을 봄", text: "바보를 보았다" },
  { id: "idiot", ctx: "제가 어리석은 사람이 됨", text: "내가 바보가 되어 있었다" },
  { id: "idiot", ctx: "어리숙해 보이는 아이들을 봄", text: "어리숙해 보이는 아이들을 보았다" },
  { id: "idleness", ctx: "제가 빈둥거림", text: "내가 빈둥거리고 있었다" },
  { id: "idleness", ctx: "벗들이 빈둥거리는 것을 봄", text: "친구들이 빈둥거리는 것을 보았다" },
  { id: "idleness", ctx: "처녀가 게으르게 지냄", text: "처녀가 게을러 지내고 있었다" },
  { id: "idol", ctx: "우상을 섬김", text: "우상 앞에 엎드려 절했다" },
  { id: "idol", ctx: "우상을 부숨", text: "우상을 부수었다" },
  { id: "idol", ctx: "남들이 우상을 섬기는 것을 봄", text: "남들이 우상을 섬기는 것을 보았다" },
  { id: "idol", ctx: "우상 섬김을 꾸짖음", text: "우상 섬김을 꾸짖었다" },
  { id: "illness", ctx: "여자가 제 병을 앓는 꿈을 꿈", text: "여자가 병을 앓고 있었다" },

  // 이 배치가 판별어를 더한 상징 — **옛 답이 그대로인가**를 함께 잰다.
  { id: "illness", ctx: "자기가 병듦", text: "내가 병에 걸렸다" },
  { id: "illness", ctx: "병이 위중함", text: "병이 위중해 보였다" },
  { id: "illness", ctx: "병들어 누웠는데 남이 부축해 줌", text: "병이 나서 누웠는데 누가 부축해 주었다" },
  // 새 이름이 스쳐 가는 자리 — 「이상형」⊃「이」(teeth)·「상」 · 「게으름」⊃「게」(crab) ·
  // 「우상」⊃「상」 · 「천치」⊃「천」(cloth)
  { id: "crab", ctx: "연인에게 게 꿈이 나타남", text: "연인이 게를 보았다" },
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
