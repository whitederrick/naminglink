// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 263 — 새 상징 셋(surgeon·surgical-instruments·
// swan)을 세우고, 기존 swallow·bog·verbal-abuse·cleaning 넷에 문맥을
// 보탰다. Swamp 첫 문장은 기존 bog 「늪지를 걸어서 지남」(밀러
// Marsh)과 같은 그림·다른 풀이라 건너뜀 — 원문 각주가 "See Marsh"로
// 가리킨다. swallow·cleaning 은 **바꾼 것**(둘 다 옛 기본값이 조건
// 붙은 자리라 밀러의 조건 없는 문장으로), verbal-abuse 는 **있던
// 답 그대로** 얼렸다(당하는 쪽 vs 저지르는 쪽, 어느 쪽도 안 넓다).
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
  // ── 배치 263 새 문맥 (15건) ──────────────────────────────────────────────
  { id: "surgeon", ctx: "외과의사 꿈을 꿈", text: "외과의사 꿈을 꾸었다" },
  { id: "surgeon", ctx: "여성이 외과의사 꿈을 꿈", text: "여성이 외과의사 꿈을 꾸었다" },
  { id: "surgical-instruments", ctx: "수술 도구를 봄", text: "수술 도구를 보았다" },
  { id: "swallow", ctx: "제비 꿈을 꿈", text: "제비 꿈을 꾸었다" },
  { id: "swallow", ctx: "다치거나 죽은 제비를 봄", text: "다치거나 죽은 제비를 보았다" },
  { id: "bog", ctx: "맑은 물과 푸른 초목이 있는 늪을 지나감", text: "맑은 물과 푸른 초목이 있는 늪을 지나갔다" },
  { id: "swan", ctx: "흰 백조들이 잔잔한 물 위에 떠 있는 것을 봄", text: "흰 백조들이 잔잔한 물 위에 떠 있는 것을 보았다" },
  { id: "swan", ctx: "맑은 물 가까이에서 검은 백조를 봄", text: "맑은 물 가까이에서 검은 백조를 보았다" },
  { id: "swan", ctx: "죽은 백조를 봄", text: "죽은 백조를 보았다" },
  { id: "swan", ctx: "백조들이 날아가는 것을 봄", text: "백조들이 날아가는 것을 보았다" },
  { id: "verbal-abuse", ctx: "스스로 욕설하여 사업에 지장이 생김", text: "스스로 욕설하여 사업에 지장이 생겼다" },
  { id: "verbal-abuse", ctx: "가족 앞에서 욕설을 함", text: "가족 앞에서 욕설을 했다" },
  { id: "cleaning", ctx: "비질하는 꿈을 꿈", text: "비질하는 꿈을 꾸었다" },
  { id: "cleaning", ctx: "바닥을 쓸어야 한다고 여기고도 이런저런 까닭으로 미룸", text: "바닥을 쓸어야 한다고 여기고도 미뤘다" },
  { id: "cleaning", ctx: "하인이 비질을 함", text: "하인이 비질을 했다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────────
  { id: "swallow", ctx: "제비가 날아 품에 들어옴", text: "제비가 날아 품에 들어왔다" },
  { id: "bog", ctx: "늪지 꿈을 꿈", text: "늪지 꿈을 꾸었다" },
  { id: "bog", ctx: "늪지를 걸어서 지남", text: "늪지를 걸어서 지났다" },
  { id: "verbal-abuse", ctx: "남에게 욕을 먹고 모욕을 당함", text: "남에게 욕을 먹고 모욕을 당했다" },
  { id: "cleaning", ctx: "집에 물을 뿌리고 쓺", text: "집에 물을 뿌리고 쓸었다" },
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
