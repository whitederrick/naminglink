// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 312 — Whisky~Whistle(새 20판 묶음의 5/20). 새
// 상징 셋(whisky·whispering·whistle). whisky는 기존 liquor(술)의
// 별칭 목록에 있던 "위스키"(범용 나열의 하나일 뿐 전용 문맥 없음)를
// 회수해 받았다. Whisky 원문 자체가 앞뒤로 어긋나는 자리(같은 그림에
// 다른 결말)가 있어 판단이 뚜렷한 절만 골라 넣었다.
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
  // ── 배치 312 새 문맥 (9건) ─────────────────────────────────────────────
  { id: "whisky", ctx: "병에 든 위스키를 봄", text: "병에 든 위스키를 보았는데 이익을 조심스레 지켰다" },
  { id: "whisky", ctx: "홀로 위스키를 마심", text: "홀로 위스키를 마셨는데 이기심으로 벗을 저버렸다" },
  { id: "whisky", ctx: "위스키를 쏟아 버림", text: "위스키를 쏟아 버렸는데 인색한 처신으로 벗을 잃었다" },
  { id: "whisky", ctx: "위스키를 마셔 바라던 것을 이루려 애씀", text: "위스키를 마시며 바라던 것을 이루려 애썼는데 여러 번 실망을 겪었다" },
  { id: "whispering", ctx: "속삭임 꿈을 꿈", text: "속삭임 꿈을 꾸었는데 나쁜 소문에 시달렸다" },
  { id: "whispering", ctx: "조언이나 경고로 다가오는 속삭임을 들음", text: "조언이나 경고로 다가오는 속삭임을 들었는데 도움이 필요한 처지였다" },
  { id: "whistle", ctx: "휘파람 소리를 들음", text: "휘파람 소리를 들었는데 슬픈 소식에 충격받았다" },
  { id: "whistle", ctx: "스스로 휘파람을 붊", text: "스스로 휘파람을 불었는데 유쾌한 자리에서 크게 활약했다" },
  { id: "whistle", ctx: "젊은 여성이 스스로 휘파람을 붊", text: "젊은 여성이 스스로 휘파람을 불었는데 경솔한 처신을 했다" },

  // ── 지킴 케이스 — liquor가 "위스키" 회수 뒤에도 여전히 걸리는지 ──
  { id: "liquor", ctx: "술을 마심", text: "혼자 술을 마셨다" },
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
