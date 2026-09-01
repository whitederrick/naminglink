// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 17 — Coach~Colonel, 51건)
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
  { id: "coach", ctx: "역마차를 타고 감", text: "역마차를 타고 갔다" },
  { id: "coach", ctx: "역마차를 몲", text: "역마차를 몰았다" },
  { id: "coals", ctx: "벌겋게 타는 석탄을 봄", text: "석탄이 벌겋게 타고 있었다" },
  { id: "coals", ctx: "석탄을 손으로 만짐", text: "석탄을 손으로 만졌다" },
  { id: "coals", ctx: "불 꺼진 석탄을 봄", text: "불 꺼진 석탄을 보았다" },
  { id: "coal-hod", ctx: "석탄통을 봄", text: "석탄통이 곁에 놓여 있었다" },
  { id: "coal-hod", ctx: "이웃이 석탄통을 나르는 것을 봄", text: "이웃이 석탄통을 나르고 있었다" },
  { id: "coat", ctx: "남의 외투를 입음", text: "남의 외투를 입고 있었다" },
  { id: "coat", ctx: "외투가 찢어진 것을 봄", text: "외투가 찢어져 있었다" },
  { id: "coat", ctx: "새 외투를 봄", text: "새것 외투를 보았다" },
  { id: "coat", ctx: "외투를 잃어버림", text: "외투를 잃어버렸다" },
  { id: "coat-of-arms", ctx: "가문 문장을 봄", text: "집안 문장을 보았다" },
  { id: "cocoa", ctx: "코코아를 봄", text: "코코아를 보았다" },
  { id: "cocoanut", ctx: "코코넛을 봄", text: "코코넛 열매를 보았다" },
  { id: "cocoanut", ctx: "죽은 코코넛 나무를 봄", text: "죽은 코코넛 나무가 말라 있었다" },
  { id: "cock-crowing", ctx: "아침에 수탉 우는 소리를 들음", text: "아침에 수탉이 울었다" },
  { id: "cock-crowing", ctx: "홀몸인 이가 수탉 울음을 들음", text: "홀몸인 내가 수탉이 울었다는 소리를 들었다" },
  { id: "cock-crowing", ctx: "밤에 수탉 우는 소리를 들음", text: "밤에 수탉이 울었다" },
  { id: "cock-crowing", ctx: "수탉끼리 싸우는 것을 봄", text: "수탉이 울었다 그리고 서로 싸우고 있었다" },
  { id: "cockade", ctx: "모표를 봄", text: "모자 표식을 보았다" },
  { id: "cocktail", ctx: "칵테일을 마심", text: "칵테일을 마셨다" },
  { id: "cocktail", ctx: "여성이 칵테일을 마심", text: "여자가 칵테일을 마셨다" },
  { id: "coca-cola", ctx: "콜라를 마심", text: "콜라를 마셨다" },
  { id: "coffin", ctx: "관 꿈을 꿈", text: "관이 문득 나왔다" },
  { id: "coffin", ctx: "제 관을 봄", text: "자신의 관을 보았다" },
  { id: "coffin", ctx: "관이 스스로 움직임", text: "관이 스르르 움직였다" },
  { id: "coffin", ctx: "관 속의 제 주검을 봄", text: "관 속에 든 내 주검을 보았다" },
  { id: "coffin", ctx: "움직이는 영구차 위 관에 앉아 있음", text: "영구차 위 관에 앉아 있었다" },
  { id: "coffee", ctx: "커피를 마심", text: "커피를 한잔 마셨다" },
  { id: "coffee", ctx: "커피를 거래함", text: "커피를 거래하고 있었다" },
  { id: "coffee", ctx: "커피를 팜", text: "커피를 팔았다" },
  { id: "coffee", ctx: "커피를 삼", text: "커피를 샀다" },
  { id: "coffee", ctx: "젊은 여성이 커피를 다룸", text: "여자가 커피를 다루고 있었다" },
  { id: "coffee", ctx: "커피를 볶음", text: "커피를 볶았다" },
  { id: "coffee", ctx: "곱게 간 커피를 봄", text: "곱게 갈아 놓은 커피를 보았다" },
  { id: "coffee", ctx: "바싹 태운 커피를 봄", text: "바싹 태운 커피를 보았다" },
  { id: "coffee", ctx: "덜 익은 푸른 커피를 봄", text: "푸른 생두 커피를 보았다" },
  { id: "coffee-mill", ctx: "커피 분쇄기를 봄", text: "커피 분쇄기가 놓여 있었다" },
  { id: "coffee-mill", ctx: "분쇄기가 가는 소리를 들음", text: "커피 분쇄기가 갈리는 소리를 들었다" },
  { id: "coffee-house", ctx: "커피집에 감", text: "커피집에 갔다" },
  { id: "coins", ctx: "금돈을 봄", text: "금돈을 보았다" },
  { id: "coins", ctx: "은돈을 봄", text: "은돈을 보았다" },
  { id: "coins", ctx: "연인이 은돈을 줌", text: "애인이 은돈을 주었다" },
  { id: "coins", ctx: "구리돈을 봄", text: "구리돈을 보았다" },
  { id: "coins", ctx: "니켈 동전을 봄", text: "니켈 동전을 보았다" },
  { id: "coins", ctx: "반짝이는 은돈을 지니고 있음", text: "반짝이는 은돈을 지니고 있었다" },
  { id: "coke", ctx: "코크스를 봄", text: "코크스를 보았다" },
  { id: "coke-oven", ctx: "코크스 가마가 타는 것을 봄", text: "코크스 가마가 타고 있었다" },
  { id: "cold", ctx: "추위에 시달림", text: "몹시 추운 곳에서 떨었다" },
  { id: "colonel", ctx: "대령을 보거나 그 명을 받음", text: "대령의 명을 받았다" },
  { id: "colonel", ctx: "내가 대령임", text: "내가 대령이었다" },
];

let notFound = 0;
let wrongCtx = 0;
for (const c of CASES) {
  const r = matchDream(c.text);
  const hit = r.matched.find((m) => m.id === c.id);
  if (!hit) {
    notFound += 1;
    console.log(`✗ 안 걸림  [${c.id}] "${c.text}" → ${r.matched.map((m) => m.id).join(",") || "(0개)"}`);
    continue;
  }
  const got = hit.meaning?.context ?? "(없음)";
  if (got !== c.ctx) {
    wrongCtx += 1;
    console.log(`△ 다른 뜻 [${c.id}] "${c.text}" → 「${got}」 (바란 것: 「${c.ctx}」)`);
  } else {
    console.log(`✓ [${c.id}] "${c.text}" → 「${got}」`);
  }
}
console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
