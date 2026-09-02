// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 53 — Horseshoe~Hotel, 23건)
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
  { id: "horseshoe", ctx: "편자를 봄", text: "편자가 반짝이고 있었다" },
  { id: "horseshoe", ctx: "부러진 편자를 봄", text: "부러진 편자를 보았다" },
  { id: "horseshoe", ctx: "울타리에 걸린 편자를 봄", text: "울타리에 걸린 편자를 보았다" },
  { id: "horseshoe", ctx: "길에서 편자를 주움", text: "길에서 편자를 주웠다" },
  { id: "horseradish", ctx: "서양고추냉이를 봄", text: "고추냉이가 밭에 있었다" },
  { id: "horseradish", ctx: "여성이 서양고추냉이 꿈을 꿈", text: "여자가 고추냉이를 보았다" },
  { id: "horseradish", ctx: "서양고추냉이를 먹음", text: "고추냉이를 먹었다" },
  { id: "horse", ctx: "말을 바꾸다 장수에게 속음", text: "말을 바꾸다 속았다" },
  { id: "horse", ctx: "바꾼 말이 먼저 것보다 나음", text: "바꾼 말이 더 나은 말이었다" },
  { id: "horse", ctx: "말 장수를 봄", text: "말 장수를 보았다" },
  { id: "hospital", ctx: "병원에 환자로 있음", text: "병원에 환자로 누워있었다" },
  { id: "hospital", ctx: "병원으로 문병을 감", text: "병원으로 문병을 갔다" },
  { id: "hotel", ctx: "여관에 묵음", text: "여관에 묵고 있었다" },
  { id: "hotel", ctx: "여관에서 여자를 만남", text: "여관에서 여자를 만났다" },
  { id: "hotel", ctx: "좋은 여관을 봄", text: "훌륭한 여관을 보았다" },
  { id: "hotel", ctx: "여관 주인이 됨", text: "내가 여관 주인이 되었다" },
  { id: "hotel", ctx: "여관에서 일함", text: "여관에서 일했다" },
  { id: "hotel", ctx: "여관을 찾아다님", text: "여관을 찾아다녔다" },

  // 배치 50~52가 넣은 것과 옛 답 — **그대로인지** 함께 잰다.
  { id: "horse", ctx: "말과 함께 꼭대기에 오름", text: "말과 함께 꼭대기에 올랐다" },
  { id: "horse", ctx: "말이 다른 말들과 함께 달아남", text: "말이 다른 말들과 함께 달아났다" },
  { id: "horse", ctx: "말에게 편자를 박게 함", text: "말에게 편자를 박게 했다" },
  { id: "horse", ctx: "흰 말을 타고 감", text: "흰말을 타고 갔다" },
  { id: "horse", ctx: "망아지를 봄", text: "망아지를 보았다" },
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
