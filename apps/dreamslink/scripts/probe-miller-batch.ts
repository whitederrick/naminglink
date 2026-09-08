// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 314 — Wife~Willow(새 20판 묶음의 7/20). 새 상징
// 다섯(wig·wild·wild-man·will·willow), 기존 wife(아내, zhougong 둘)
// 에 문맥 셋을 나눠 붙였다. 기본값 플립 수용(wife, 새 답이 더 막연함).
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
  // ── 배치 314 새 문맥 (16건) ────────────────────────────────────────────
  { id: "wife", ctx: "아내 꿈을 꿈", text: "아내 꿈을 꾸었는데 집안에 불화가 있었다" },
  { id: "wife", ctx: "아내가 유달리 상냥함", text: "아내가 유달리 상냥했는데 사업에서 이익을 얻었다" },
  { id: "wife", ctx: "아내가 남편에게 매를 맞는 꿈을 꿈", text: "아내가 남편에게 매를 맞는 꿈을 꾸었는데 집안에 소란이 일어났다" },
  { id: "wig", ctx: "스스로 가발을 씀", text: "스스로 가발을 썼는데 불길한 변화를 겪었다" },
  { id: "wig", ctx: "가발을 잃어버림", text: "가발을 잃어버렸는데 적들의 조롱을 받았다" },
  { id: "wig", ctx: "남들이 가발을 쓴 것을 봄", text: "남들이 가발을 쓴 것을 보았는데 배신에 얽혔다" },
  { id: "wild", ctx: "스스로 미쳐 날뜀", text: "스스로 미쳐 날뛰었는데 심하게 넘어졌다" },
  { id: "wild", ctx: "남들이 미쳐 날뛰는 것을 봄", text: "남들이 미쳐 날뛰는 것을 보았는데 걱정과 흥분을 겪었다" },
  { id: "wild-man", ctx: "야인을 봄", text: "야인을 보았는데 적들이 사업을 방해했다" },
  { id: "wild-man", ctx: "스스로 야인이라고 여김", text: "스스로 야인이라고 여겼는데 계획에서 운이 따르지 않았다" },
  { id: "will", ctx: "스스로 유언장을 작성함", text: "스스로 유언장을 작성했는데 중대한 시련을 겪었다" },
  { id: "will", ctx: "아내나 누군가 유언장이 자신에게 불리하다고 여김", text: "유언장이 자신에게 불리하다고 여겼는데 다툼을 겪었다" },
  { id: "will", ctx: "유언장을 입증하지 못함", text: "유언장을 입증하지 못했는데 명예훼손의 위험에 처했다" },
  { id: "will", ctx: "유언장을 잃어버림", text: "유언장을 잃어버렸는데 사업에 불운했다" },
  { id: "will", ctx: "유언장을 없앰", text: "유언장을 없앴는데 배신에 가담하게 되었다" },
  { id: "willow", ctx: "버드나무 꿈을 꿈", text: "버드나무 꿈을 꾸었는데 슬픈 여정을 떠났다" },

  // ── 지킴 케이스 — wife의 기존 답이 여전히 걸리는지 ──
  { id: "wife", ctx: "아내가 비단옷을 입음", text: "아내가 비단옷을 입었는데 화려했다" },
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
