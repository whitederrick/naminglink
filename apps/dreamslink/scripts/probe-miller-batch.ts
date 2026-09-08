// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 299 — Wardrobe~Warts(새 20판 묶음의 12/20). 새 상징
// 셋(wardrobe·warrant·warts), 기존 storehouse(창고)에 문맥을 나눠
// 붙였다. Warehouse→storehouse(이미 aliases_en에 "a warehouse" 보유).
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
  // ── 배치 299 새 문맥 (10건) ────────────────────────────────────────────
  { id: "wardrobe", ctx: "옷장 꿈을 꿈", text: "옷장 꿈을 꾸었는데 실제보다 부유해 보이려다 재물이 위태로워졌다" },
  { id: "wardrobe", ctx: "옷장이 초라하다고 여김", text: "옷장이 초라하다고 여겼는데 낯선 이들과 어울리려 했다" },
  { id: "storehouse", ctx: "창고 꿈을 꿈", text: "창고 꿈을 꾸었는데 성공적인 사업을 이루었다" },
  { id: "storehouse", ctx: "빈 창고를 봄", text: "창고가 텅 비어 있는 것을 보았는데 공들인 계획에서 속았다" },
  { id: "warrant", ctx: "영장이 자신에게 송달됨", text: "영장이 자신에게 송달되었는데 중요한 일을 맡아 불안했다" },
  { id: "warrant", ctx: "다른 사람에게 영장이 송달되는 것을 봄", text: "다른 사람에게 영장이 송달되는 것을 보았는데 치명적인 다툼의 위험이 있었다" },
  { id: "warts", ctx: "제 몸에 사마귀가 남을 괴로워함", text: "제 몸에 사마귀가 남을 괴로워했는데 명예에 가해지는 공격을 막아내지 못했다" },
  { id: "warts", ctx: "손에서 사마귀가 사라지는 것을 봄", text: "손에서 사마귀가 사라지는 것을 보았는데 방해를 이겨내고 재물을 얻었다" },
  { id: "warts", ctx: "남에게 사마귀가 있음을 봄", text: "남에게 사마귀가 있음을 보았는데 가까이에 모진 적이 있었다" },
  { id: "warts", ctx: "사마귀를 치료함", text: "사마귀를 치료했는데 위험을 막아내려 애썼다" },

  // ── 지킴 케이스 — storehouse에 문맥을 더한 뒤에도 옛 답이 그대로인지 ──
  { id: "storehouse", ctx: "창고를 새로 지어 세움", text: "창고를 새로 지어 세웠는데 복과 녹이 왔다" },
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
