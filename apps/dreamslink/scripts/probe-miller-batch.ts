// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 27b — Door~Dropsy, 37건)
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
  { id: "door", ctx: "문으로 들어감", text: "문으로 들어갔다" },
  { id: "door", ctx: "어린 시절 살던 집의 문으로 들어감", text: "어린 시절 살던 집 문으로 들어갔다" },
  { id: "door", ctx: "비 오는 밤에 문으로 들어감", text: "비가 내리는 밤에 문으로 들어섰다" },
  { id: "door", ctx: "남들이 문간을 지나가는 것을 봄", text: "남들이 문간을 지나가는 것을 보았다" },
  { id: "door", ctx: "문을 닫으려는데 문짝이 빠져 남을 다치게 함", text: "문을 닫으려는데 문이 돌쩌귀에서 빠져 사람이 다쳤다" },
  { id: "door", ctx: "남이 문을 잠그려는데 문짝이 빠짐", text: "남이 문을 잠그려는데 문짝이 빠졌다" },
  { id: "doorbell", ctx: "초인종 소리를 듣거나 초인종을 누름", text: "초인종이 울리는 소리를 들었다" },
  { id: "dove", ctx: "비둘기가 짝을 짓고 둥지를 지음", text: "비둘기가 짝을 지어 둥지를 틀고 있었다" },
  { id: "dove", ctx: "비둘기가 외로이 구슬프게 우는 소리를 들음", text: "비둘기가 구슬프게 우는 소리를 들었다" },
  { id: "dove", ctx: "죽은 비둘기를 봄", text: "죽은 비둘기를 보았다" },
  { id: "dove", ctx: "흰 비둘기 떼를 봄", text: "하얀 비둘기 떼가 날아올랐다" },
  { id: "dove", ctx: "흰 비둘기를 봄", text: "하얀 비둘기를 보았다" },
  { id: "dove", ctx: "비둘기가 편지를 물어다 줌", text: "비둘기가 편지를 물어다 주었다" },
  { id: "dove", ctx: "편지를 가져온 비둘기가 지쳐 보임", text: "편지를 가져온 비둘기가 몹시 지쳐 보였다" },
  { id: "dove", ctx: "비둘기가 가져온 편지에 파멸을 알리는 글이 있음", text: "비둘기가 가져온 편지에 파멸을 알리는 글이 적혀 있었다" },
  { id: "dowry", ctx: "지참금을 받지 못함", text: "지참금을 받지 못했다" },
  { id: "dowry", ctx: "지참금을 받음", text: "지참금을 받았다" },
  { id: "dragon", ctx: "용을 봄", text: "용이 나타났다" },
  { id: "drama", ctx: "연극을 봄", text: "연극을 관람했다" },
  { id: "drama", ctx: "연극이 지루함", text: "연극이 지루했다" },
  { id: "drama", ctx: "연극을 씀", text: "연극 대본을 썼다" },
  { id: "dram-drinking", ctx: "독주를 즐겨 마심", text: "독주를 즐겨 마셨다" },
  { id: "dram-drinking", ctx: "독주를 끊음", text: "독주를 끊었다" },
  { id: "draw-knife", ctx: "당겨 깎는 칼을 보거나 씀", text: "당김칼로 나무를 깎았다" },
  { id: "dressing", ctx: "옷을 입는 데 애를 먹음", text: "옷을 입는데 애를 먹었다" },
  { id: "dressing", ctx: "기차 시간에 맞춰 옷을 입지 못함", text: "기차 시간에 맞춰 옷을 입지 못했다" },
  { id: "liquor", ctx: "여성이 흥청거리며 술을 마심", text: "여자가 흥청거리며 술을 마셨다" },
  { id: "water", ctx: "맑은 물을 마시려 해도 마시지 못함", text: "맑은 물을 마시려 했지만 마시지 못했다" },
  { id: "carriage", ctx: "마차를 몲", text: "마차를 몰았다" },
  { id: "carriage", ctx: "남자가 남이 모는 마차에 실려 감", text: "남자인 내가 남이 모는 마차에 실려 갔다" },
  { id: "carriage", ctx: "여자가 남이 모는 마차에 실려 감", text: "여자인 내가 남이 모는 마차에 실려 갔다" },
  { id: "carriage", ctx: "남이 모는 마차에 실려 감", text: "남이 모는 마차에 실려 갔다" },
  { id: "cab", ctx: "삯마차를 몲", text: "삯마차를 몰았다" },
  { id: "wagon", ctx: "짐수레를 몲", text: "짐수레를 몰았다" },
  { id: "dromedary", ctx: "단봉낙타를 봄", text: "단봉낙타를 보았다" },
  { id: "dropsy", ctx: "부종을 앓음", text: "부종을 앓았다" },
  { id: "dropsy", ctx: "남이 부종을 앓는 것을 봄", text: "남이 부종을 앓는 것을 보았다" },
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
