// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 293 — Wading~Wages(새 20판 묶음의 6/20, 밀러 W
// 항목의 시작). Wading은 각주 [237] See Bathing으로 기존 bathing(목욕)
// 에, Wager는 기존 bet(내기, 영어 별칭에 이미 "placing a wager")에
// 합쳤다. 새 상징 셋(wadding·wafer·wages) — wages는 "임금"이 king·
// royal-court와 동형이의어라 "급여"로 세웠다.
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
  // ── 배치 293 새 문맥 (16건) ────────────────────────────────────────────
  { id: "bathing", ctx: "맑은 물속을 걸어 다님", text: "맑은 물속을 걸어 다녔는데 덧없지만 짜릿한 기쁨을 누렸다" },
  { id: "bathing", ctx: "흐린 물속을 걸어 다님", text: "흐린 물속을 걸어 다녔는데 병에 걸릴 위험이 있었다" },
  { id: "bathing", ctx: "아이들이 맑은 물속을 걸어 다니는 것을 봄", text: "아이들이 맑은 물속을 걸어 다니는 것을 보았는데 일이 유리하게 풀렸다" },
  { id: "bathing", ctx: "젊은 여성이 물거품 이는 맑은 물속을 걸어 다니는 꿈을 꿈", text: "젊은 여성이 물거품 이는 맑은 물속을 걸어 다니는 꿈을 꾸었는데 소원을 이뤘다" },
  { id: "wadding", ctx: "솜뭉치 꿈을 꿈", text: "솜뭉치 꿈을 꾸었는데 위안을 얻었다" },
  { id: "wafer", ctx: "웨이퍼 꿈을 꿈", text: "웨이퍼 꿈을 꾸었는데 적과 마주쳤다" },
  { id: "wafer", ctx: "웨이퍼를 먹음", text: "웨이퍼를 먹었는데 궁핍한 운이 암시됐다" },
  { id: "wafer", ctx: "젊은 여성이 웨이퍼를 구움", text: "젊은 여성이 웨이퍼를 구웠는데 미혼으로 남을까 두려워했다" },
  { id: "bet", ctx: "내기를 만듦", text: "내기를 만들었는데 부정한 수단에 기댔다" },
  { id: "bet", ctx: "내기에서 짐", text: "내기에서 져서 천한 관계로 해를 입었다" },
  { id: "bet", ctx: "내기에서 이김", text: "내기에서 이겨서 운의 호의를 되찾았다" },
  { id: "bet", ctx: "내기 판돈을 걸지 못함", text: "내기 판돈을 걸지 못해 낙담했다" },
  { id: "wages", ctx: "급여를 받음", text: "급여를 받았는데 뜻밖의 좋은 일이 있었다" },
  { id: "wages", ctx: "급여를 지급함", text: "급여를 지급했는데 불만으로 혼란스러웠다" },
  { id: "wages", ctx: "급여가 줄어듦", text: "급여가 줄어들어 적대적 관심이 걱정됐다" },
  { id: "wages", ctx: "급여가 늘어남", text: "급여가 늘어나서 남다른 이문이 있었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "bathing", ctx: "목욕물이 흐림", text: "목욕물이 흐렸다" },
  { id: "bet", ctx: "노름을 해서 잃음", text: "노름을 해서 잃었다" },
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
