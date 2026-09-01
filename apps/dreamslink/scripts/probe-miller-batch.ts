// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 26 — Dice~Docks, 54건)
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
  { id: "dice", ctx: "주사위를 봄", text: "주사위가 굴러 나왔다" },
  { id: "dice", ctx: "연인이 주사위를 던지는 것을 봄", text: "애인이 주사위를 던지는 것을 보았다" },
  { id: "dictionary", ctx: "사전을 찾아봄", text: "사전을 찾아보았다" },
  { id: "difficulty", ctx: "어려움에 놓임", text: "어려움에 처했다" },
  { id: "difficulty", ctx: "어려움에서 빠져나옴", text: "어려움에서 빠져나왔다" },
  { id: "difficulty", ctx: "여성이 어려움에 놓임", text: "여자가 어려움에 놓였다" },
  { id: "difficulty", ctx: "연인에게 어려움 꿈이 나타남", text: "애인과 함께 어려움에 놓이는 꿈을 꾸었다" },
  { id: "digging", ctx: "땅을 팜", text: "땅을 파는데 오르막처럼 고되었다" },
  { id: "digging", ctx: "구덩이를 파다 반짝이는 것을 찾음", text: "구덩이를 팠다가 반짝이는 것을 찾았다" },
  { id: "digging", ctx: "파 보니 텅 빈 안개뿐임", text: "땅을 팠는데 안개만 휑하니 있었다" },
  { id: "digging", ctx: "판 구덩이에 물이 참", text: "구덩이를 팠는데 물이 차올랐다" },
  { id: "dinner", ctx: "홀로 저녁밥을 먹음", text: "홀로 저녁밥을 먹었다" },
  { id: "dinner", ctx: "젊은 여성이 연인과 저녁밥을 먹음", text: "여자가 애인과 저녁밥을 먹었다" },
  { id: "dinner", ctx: "여럿이 초대받은 저녁 자리에 끼임", text: "여럿이 초대받은 저녁밥 자리에 손님으로 끼었다" },
  { id: "soil", ctx: "꽃이나 나무 둘레의 갓 파헤친 흙을 봄", text: "나무 둘레에 갓 파헤친 흙을 보았다" },
  { id: "soil", ctx: "옷이 더러운 흙으로 더럽혀짐", text: "옷이 흙으로 더럽혀졌다" },
  { id: "soil", ctx: "남이 흙을 끼얹음", text: "남이 나에게 흙을 끼얹었다" },
  { id: "disaster", ctx: "탈것을 타고 가다 재난을 당함", text: "차를 타고 가다 재난을 당했다" },
  { id: "disaster", ctx: "젊은 여성이 재난에 휘말림", text: "여자가 재난에 휘말렸다" },
  { id: "disaster", ctx: "바다에서 재난이 남", text: "바다에서 뱃사람들이 재난을 당했다" },
  { id: "disaster", ctx: "재난에서 구조됨", text: "재난에서 구조되어 살아났다" },
  { id: "disaster", ctx: "제가 타지 않은 철도 사고를 봄", text: "기차가 부딪히는 재난을 멀리서 보았다" },
  { id: "disease", ctx: "제가 병듦", text: "내가 스스로 병들어 있었다" },
  { id: "disease", ctx: "젊은 여성이 고칠 수 없는 병에 듦", text: "여자가 고칠 수 없는 병이 들었다" },
  { id: "disgrace", ctx: "아이나 벗의 부끄러운 행실로 애를 태움", text: "아이의 부끄러운 행실로 애를 태웠다" },
  { id: "disgrace", ctx: "제가 낯을 잃음", text: "내가 스스로 낯을 잃었다" },
  { id: "plate", ctx: "접시를 다룸", text: "접시를 들었다 옮겼다" },
  { id: "plate", ctx: "접시가 깨짐", text: "접시가 깨졌다" },
  { id: "plate", ctx: "선반에 반들반들한 접시가 놓임", text: "선반에 반들반들한 접시가 늘어서 있었다" },
  { id: "plate", ctx: "더러운 접시를 봄", text: "더러운 접시를 보았다" },
  { id: "disinherited", ctx: "상속에서 밀려남", text: "상속에서 밀려났다" },
  { id: "disinherited", ctx: "젊은 남성이 거스름 탓에 물려받을 것을 잃음", text: "젊은이가 거스른 탓에 물려받을 것을 잃었다" },
  { id: "disinherited", ctx: "여성에게 상속에서 밀려나는 꿈이 나타남", text: "여자가 상속에서 제외되는 꿈을 꾸었다" },
  { id: "dispute", ctx: "하찮은 일로 언쟁함", text: "사소한 일로 언쟁을 벌였다" },
  { id: "dispute", ctx: "배운 이들과 언쟁함", text: "배운 학자들과 언쟁을 벌였다" },
  { id: "distaff", ctx: "물레가락을 봄", text: "물레가락을 보았다" },
  { id: "distance", ctx: "사는 곳에서 멀리 떨어져 있음", text: "집에서 멀리 떨어져 있었다" },
  { id: "distance", ctx: "멀리 있는 벗을 봄", text: "멀리 있는 벗을 보았다" },
  { id: "distance", ctx: "멀리서 소를 몰아 밭을 가는 사람들을 봄", text: "멀리서 쟁기로 밭을 가는 사람들을 보았다" },
  { id: "distance", ctx: "남성이 멀리서 낯선 여성이 손짓하는 것을 봄", text: "멀리서 낯선 여자가 손짓하는 것을 보았다" },
  { id: "ditch", ctx: "도랑에 빠짐", text: "도랑에 빠졌다" },
  { id: "ditch", ctx: "도랑을 뛰어넘음", text: "도랑을 뛰어넘었다" },
  { id: "diving", ctx: "맑은 물에 잠수함", text: "맑은 물에 잠수했다" },
  { id: "diving", ctx: "흐린 물에 잠수함", text: "흐린 흙탕물에 잠수했다" },
  { id: "diving", ctx: "남이 잠수하는 것을 봄", text: "다른 사람이 잠수하는 것을 보았다" },
  { id: "diving", ctx: "연인에게 잠수 꿈이 나타남", text: "애인과 함께 잠수했다" },
  { id: "dividend", ctx: "배당금을 받음", text: "배당금을 받았다" },
  { id: "dividend", ctx: "바라던 배당금을 못 받음", text: "바라던 배당금을 놓쳤다" },
  { id: "divining-rod", ctx: "점막대를 봄", text: "점막대를 보았다" },
  { id: "divorce", ctx: "제가 이혼함", text: "내가 스스로 이혼했다" },
  { id: "divorce", ctx: "여성에게 이혼 꿈이 나타남", text: "여자가 이혼하는 꿈을 꾸었다" },
  { id: "docks", ctx: "부두에 있음", text: "부두에 서성이고 있었다" },
  { id: "docks", ctx: "부두를 홀로 헤매는데 어둠이 덮침", text: "부두를 홀로 헤매는데 어둠이 덮쳤다" },
  { id: "docks", ctx: "부두에 해가 비침", text: "부두에 볕이 화창하게 비쳤다" },
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
