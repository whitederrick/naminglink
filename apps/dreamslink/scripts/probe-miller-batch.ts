// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 319 — Wooden Shoe~Workshop(새 20판 묶음의
// 12/20). 새 상징 셋(firewood 장작·wool 양모·workshop 작업장), 기존
// shoes(신발)·forest(숲)·labor(노역)·prison(감옥)에 문맥을 나눠
// 붙였다. Work 첫 두 문장은 §31로 건너뜀(labor의 기존 답과 같은
// 그림). Work house 는 각주대로 prison에 합쳤다.
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
  // ── 배치 319 새 문맥 (12건) ────────────────────────────────────────────
  { id: "shoes", ctx: "나막신을 신은 꿈을 꿈", text: "나막신을 신은 꿈을 꾸었는데 쓸쓸히 떠돌고 빈털터리가 됐다" },
  { id: "shoes", ctx: "사랑하는 사이인 사람이 나막신 꿈을 꿈", text: "사랑하는 사이인 사람이 나막신 꿈을 꾸었는데 상대의 부정을 겪었다" },
  { id: "forest", ctx: "숲이 온통 푸르름을 봄", text: "숲이 온통 푸르름을 보았는데 그 변화가 길했다" },
  { id: "forest", ctx: "잎이 다 떨어져 앙상한 숲을 봄", text: "잎이 다 떨어져 앙상한 숲을 보았는데 그 변화가 재앙으로 드러났다" },
  { id: "forest", ctx: "숲에 불이 남을 봄", text: "숲에 불이 남을 보았는데 계획이 만족스레 무르익었다" },
  { id: "firewood", ctx: "장작을 사고파는 일을 함", text: "장작을 사고파는 일을 했는데 굳센 분투로 재물을 얻었다" },
  { id: "firewood", ctx: "장작더미를 봄", text: "장작더미를 보았는데 사업이 신통찮고 애정에서 오해가 생겼다" },
  { id: "wool", ctx: "양모 꿈을 꿈", text: "양모 꿈을 꾸었는데 이익을 늘릴 기회가 생겼다" },
  { id: "wool", ctx: "더럽거나 지저분한 양모를 봄", text: "더럽거나 지저분한 양모를 보았는데 신념을 싫어하는 이들 밑에서 일자리를 구하게 됐다" },
  { id: "labor", ctx: "일자리를 구함", text: "일자리를 구했는데 뜻밖의 일로 이득을 봤다" },
  { id: "prison", ctx: "노역소에 있음", text: "노역소에 있었는데 어떤 일로 손해와 해를 입었다" },
  { id: "workshop", ctx: "작업장을 봄", text: "작업장을 보았는데 적을 무너뜨릴 비상한 계책을 쓰게 됐다" },

  // ── 지킴 케이스 — forest·labor·prison의 기존 답이 여전히 걸리는지 ──
  { id: "forest", ctx: "동산의 숲이 우거짐", text: "동산의 숲이 우거졌다" },
  { id: "labor", ctx: "제가 힘써 일함", text: "제가 힘써 일했다" },
  { id: "prison", ctx: "감옥 꿈을 꿈", text: "감옥 꿈을 꿨다" },
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
