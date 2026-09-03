// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 134 — Mountain~Mud, 17건)
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
  { id: "mountain", ctx: "처녀가 웃는 사촌·죽은 오라비와 산을 넘음", text: "사촌과 죽은 오라비와 함께 산을 넘었다" },
  { id: "mountain", ctx: "산을 넘다 지쳐 더 가기를 마다함", text: "산을 넘다 지쳐서 더 가기를 마다했다" },
  { id: "mountain", ctx: "곱고 푸른 길로 산에 오름", text: "푸른 길을 따라 산에 올랐다" },
  { id: "mountain", ctx: "가파른 산을 오르다 꼭대기에 못 미침", text: "가파른 산을 오르다 꼭대기에 이르지 못했다" },
  { id: "mountain", ctx: "산을 오르다 아슬아슬한 곳에서 잠이 깸", text: "산을 오르다 아슬아슬한 곳에서 잠이 깼다" },
  { id: "mouse-trap", ctx: "쥐덫을 봄", text: "쥐덫이 덩그러니 놓여 있었다" },
  { id: "mouse-trap", ctx: "쥐덫에 쥐가 가득 든 것을 봄", text: "쥐덫에 쥐가 가득 들어 있었다" },
  { id: "mouse-trap", ctx: "쥐덫을 놓음", text: "쥐덫을 놓았다" },
  { id: "mud", ctx: "진흙을 밟고 걸어감", text: "진흙을 밟고 걸어갔다" },
  { id: "mud", ctx: "남이 진흙을 밟고 가는 것을 봄", text: "남들이 진흙을 밟고 가는 것을 보았다" },
  { id: "mud", ctx: "농사짓는 이가 진흙 꿈을 꿈", text: "농부가 진흙 꿈을 꾸었다" },
  { id: "mud", ctx: "옷에 묻은 진흙을 긁어냄", text: "옷에 묻은 진흙을 긁어냈다" },
  // 지킴 — 이번 배치가 건드린 상징의 옛 답이 그대로인가(§25 곁가지)
  { id: "mud", ctx: "진흙 속에 빠져 있음", text: "진흙 속에 빠져 허우적거렸다" },
  { id: "mud", ctx: "진창을 헤치고 감", text: "진창을 헤치고 갔다" },
  { id: "mountain", ctx: "산에 오르며 두려워함", text: "산에 오르며 무서웠다" },
  { id: "mountain", ctx: "높은 산을 유람하며 구경함", text: "높은 산을 구경하며 다녔다" },
  { id: "mouse", ctx: "처녀가 쥐 꿈을 꿈", text: "처녀가 쥐 꿈을 꾸었다" },
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
