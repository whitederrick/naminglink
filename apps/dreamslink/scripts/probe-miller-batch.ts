// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 252 — 새 상징 somnambulist(몽유병자)·sorcerer(마법사)·soul(영혼),
// 기존 boil(종기)에 네 그림·broth(국물)에 두 그림·king(임금)에 한 그림·farming(농사)에
// 두 그림 붙임. ghost(귀신)에서 bare 별칭 "영혼"을 회수해 soul로 넘김)
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
  { id: "somnambulist", ctx: "자신이 몽유병자가 됨", text: "자신이 몽유병자가 되었다" },
  { id: "sorcerer", ctx: "마법사를 봄", text: "마법사를 보았다" },
  { id: "boil", ctx: "종기를 봄", text: "종기를 보고 병이 날까 걱정했다" },
  { id: "boil", ctx: "종기에 약을 바름", text: "종기에 약을 발랐다" },
  { id: "boil", ctx: "아기의 종기가 뼈까지 보일 만큼 깊음", text: "아기가 뼈가 보일 만큼 깊은 종기가 났다" },
  { id: "boil", ctx: "자신에게 종기가 남", text: "자신에게 종기가 났다" },
  { id: "soul", ctx: "자신의 영혼이 몸을 떠나는 것을 봄", text: "자신의 영혼이 몸을 떠나는 것을 보았다" },
  { id: "soul", ctx: "예술가가 남에게서 제 영혼을 봄", text: "예술가가 남에게서 제 영혼을 보았다" },
  { id: "soul", ctx: "남의 영혼이 자신 안에 있다고 여김", text: "남의 영혼이 자신 안에 있다고 여겼다" },
  {
    id: "soul",
    ctx: "여성 음악가가 무대 위 다른 여성을 보며 그것이 제 영혼이라 여김",
    text: "여성 음악가가 무대 위 다른 여성을 보며 그것이 제 영혼이라 여겼다",
  },
  { id: "soul", ctx: "영혼의 불멸을 논함", text: "영혼의 불멸을 논했다" },
  { id: "broth", ctx: "남이 수프 먹는 것을 봄", text: "남이 수프 먹는 것을 보았다" },
  { id: "broth", ctx: "굴 수프를 마심", text: "달콤한 우유로 만든 굴 수프를 마셨다" },
  { id: "king", ctx: "군주를 봄", text: "군주를 보고 번영과 새 친구를 얻었다" },
  { id: "farming", ctx: "새로 간 땅에 씨를 뿌림", text: "새로 간 땅에 씨를 뿌렸다" },
  { id: "farming", ctx: "남이 씨 뿌리는 것을 봄", text: "남들이 씨 뿌리는 것을 보았다" },
  // 지킴 — 이번에 손댄 기존 상징(boil·broth·king·farming·ghost)의 옛 답이 그대로인가
  { id: "boil", ctx: "만성 단계에 이른 것처럼 보이는 종기가 난 꿈을 꿈", text: "만성적인 종기가 난 꿈을 꾸었다" },
  { id: "boil", ctx: "고름과 피가 나오는 종기를 봄", text: "고름과 피가 나오는 종기를 보았다" },
  { id: "boil", ctx: "이마에 종기가 남", text: "이마에 종기가 났다" },
  { id: "broth", ctx: "고기 국물을 먹음", text: "고기 국물을 먹었다" },
  { id: "king", ctx: "임금을 봄", text: "임금이 되려고 온힘으로 발버둥쳤다" },
  { id: "farming", ctx: "제가 직접 밭을 갊", text: "제가 직접 밭을 갈았다" },
  { id: "farming", ctx: "쟁기 꿈을 꿈", text: "쟁기 꿈을 꾸었다" },
  { id: "ghost", ctx: "귀신과 싸움", text: "귀신과 싸웠다" },
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
