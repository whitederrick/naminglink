// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 289 — Vexed~Vineyard(새 20판 묶음의 2/20). 새 상징
// 여섯(vice·victim·victory·village·vinegar·vineyard). Vexed는 기존
// annoy(성가심)가 이미 영어 별칭 "vexation"·한국어 별칭 "짜증"을 쥐고
// 있어 그리로, Vicar는 기존 clergyman(목사)에, Vine은 기존 grape(포도)에
// 합쳤다(term_ko "포도나무"는 PARTICLES의 "나" 때문에 grape와 함께
// 걸리는 품음 결함이라 새 상징을 세울 수 없었다). annoy는 기본값을
// 그대로 지켰고, grape는 m289가 사전순으로 앞서 바뀐 기본값을 그대로
// 받아들였다(옛 "포도를 먹음"은 행동이 붙은 그림, 새 "포도 덩굴 꿈을
// 꿈"은 행동 없이 그냥 꿈꾸는 가장 막연한 그림).
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
  // ── 배치 289 새 문맥 (21건) ────────────────────────────────────────────
  { id: "annoy", ctx: "제가 꿈에서 짜증이 남", text: "꿈에서 짜증이 났는데 근심이 여기저기 흩어져 있었다" },
  { id: "annoy", ctx: "남이 저에게 짜증이 났다고 여김", text: "남이 나에게 짜증이 났다고 여겼는데 오해가 풀리지 않았다" },
  { id: "clergyman", ctx: "목사 꿈을 꿈", text: "목사 꿈을 꾸며 질투와 시기심에 사로잡혔다" },
  { id: "clergyman", ctx: "여성이 목사와 혼인했지만 화답하는 애정을 얻지 못함", text: "그녀는 목사와 혼인했지만 화답하는 애정을 얻지 못해 노처녀로 지냈다" },
  { id: "vice", ctx: "제가 악덕을 편듦", text: "제가 어떤 악덕을 편들어 평판이 위태로워졌다" },
  { id: "vice", ctx: "남이 악덕에 빠진 것을 봄", text: "남이 악덕에 빠진 것을 보았고 친척과 동료가 걱정됐다" },
  { id: "victim", ctx: "제가 어떤 계략의 피해자가 됨", text: "제가 어떤 계략의 피해자가 되어 적에게 억눌리고 가족 관계도 나빠졌다" },
  { id: "victim", ctx: "남을 피해자로 삼음", text: "남을 피해자로 삼아 부정하게 재물을 모았다" },
  { id: "victory", ctx: "승리를 거둠", text: "전투에서 승리를 거두었다" },
  { id: "village", ctx: "마을에 있음", text: "마을에 있었는데 건강하고 형편이 넉넉했다" },
  { id: "village", ctx: "어릴 적 마을로 돌아감", text: "어릴 시절 마을로 돌아갔다" },
  { id: "village", ctx: "허름한 마을을 보거나 꿈이 흐릿함", text: "허름한 마을을 보았는데 꿈이 흐릿했다" },
  { id: "grape", ctx: "포도 덩굴 꿈을 꿈", text: "포도 덩굴 꿈을 꾸었는데 번영과 기쁨이 느껴졌다" },
  { id: "grape", ctx: "꽃 핀 포도덩굴을 봄", text: "활짝 핀 꽃송이가 달린 포도덩굴을 보았다" },
  { id: "grape", ctx: "포도덩굴이 말라 죽어 있음", text: "포도덩굴이 시들어 실패로 끝나는 꿈을 꾸었다" },
  { id: "grape", ctx: "독이 있는 포도덩굴을 봄", text: "독이 있는 포도덩굴을 보았는데 속임수에 넘어가 건강을 해칠 것 같았다" },
  { id: "vinegar", ctx: "식초를 마심", text: "식초를 마셨는데 마음이 어지러웠다" },
  { id: "vinegar", ctx: "채소에 식초를 씀", text: "채소에 식초를 썼다" },
  { id: "vinegar", ctx: "때를 가리지 않고 식초 꿈을 꿈", text: "때를 가리지 않고 식초 꿈을 꾸었다" },
  { id: "vineyard", ctx: "포도밭 꿈을 꿈", text: "포도밭 꿈을 꾸었는데 투기와 연애가 잘 풀렸다" },
  { id: "vineyard", ctx: "잘 가꾸지 않고 냄새 나는 포도밭을 찾아감", text: "잘 가꾸지 않고 냄새 나는 포도밭을 찾아갔다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "annoy", ctx: "성가신 일을 겪는 꿈을 꿈", text: "성가신 일을 겪는 꿈을 꾸었는데 적이 나를 해치려 방해하고 있었다" },
  { id: "clergyman", ctx: "목사와 혼인함", text: "그녀는 목사와 혼인했는데 마음이 크게 괴로웠다" },
  { id: "grape", ctx: "먹는 포도에 독이 있을까 의심함", text: "먹는 포도에 독이 있을까 의심스러웠다" },
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
