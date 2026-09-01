// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 21 — Cotton Gin~Crawfish, 39건)
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
  { id: "cotton-gin", ctx: "조면기를 봄", text: "조면기가 돌아가는 것을 보았다" },
  { id: "cotton-gin", ctx: "부서지거나 낡은 조면기를 봄", text: "부서지고 낡은 조면기를 보았다" },
  { id: "couch", ctx: "긴 소파에 기대어 누움", text: "긴 소파에 기대어 누웠다" },
  { id: "cough", ctx: "기침이 그치지 않아 괴로움", text: "기침이 그치지 않아 계속 괴로웠다" },
  { id: "cough", ctx: "남이 기침하는 소리를 들음", text: "남이 기침하는 소리를 들었다" },
  { id: "counter", ctx: "계산대를 봄", text: "가게 계산대를 보았다" },
  { id: "counter", ctx: "비어 있고 더러운 계산대를 봄", text: "비어 있고 더러운 계산대를 보았다" },
  { id: "counterfeit-money", ctx: "위조지폐 꿈을 꿈", text: "위조지폐를 받았다" },
  { id: "counselor", ctx: "조언자를 봄", text: "조언자를 만났다" },
  { id: "countenance", ctx: "곱고 순한 얼굴을 봄", text: "곱고 순한 얼굴 생김새를 보았다" },
  { id: "countenance", ctx: "밉고 찡그린 얼굴을 봄", text: "밉고 찡그린 얼굴 생김새를 보았다" },
  { id: "counterpane", ctx: "깨끗하고 흰 침대보를 봄", text: "깨끗하고 하얀 침대보를 보았다" },
  { id: "counterpane", ctx: "더러워진 침대보를 봄", text: "더러워진 침대보를 보았다" },
  { id: "counting", ctx: "제 아이들을 세는데 아이들이 밝고 고움", text: "아이들을 세었는데 아이들이 밝고 고왔다" },
  { id: "counting", ctx: "남에게 줄 돈을 세어 냄", text: "남에게 줄 돈을 세어 냈다" },
  { id: "counting", ctx: "돈을 셈", text: "돈을 세었다" },
  { id: "country", ctx: "곡식이 넘치고 맑은 시내가 흐르는 아름다운 시골에 있음", text: "곡식이 넘치는 아름다운 시골에 있었다" },
  { id: "country", ctx: "메마르고 헐벗은 시골을 봄", text: "메마르고 헐벗은 시골을 보았다" },
  { id: "courtship", ctx: "여성이 구애받는 꿈을 꿈", text: "여자가 구애를 받았다" },
  { id: "courtship", ctx: "남성이 구애하는 꿈을 꿈", text: "남자가 구애했다" },
  { id: "cousin", ctx: "사촌 꿈을 꿈", text: "사촌을 보았다" },
  { id: "cousin", ctx: "사촌과 다정하게 편지를 주고받음", text: "사촌과 다정하게 편지를 주고받았다" },
  { id: "cattle", ctx: "젖 짜기를 기다리는 소떼를 봄", text: "소떼가 젖 짜기를 기다리고 있었다" },
  { id: "cowslip", ctx: "앵초를 꺾음", text: "앵초를 꺾었다" },
  { id: "cowslip", ctx: "앵초가 자라는 것을 봄", text: "앵초가 자라는 것을 보았다" },
  { id: "cowslip", ctx: "앵초가 활짝 핀 것을 봄", text: "앵초가 활짝 핀 것을 보았다" },
  { id: "coxcomb", ctx: "허세꾼을 봄", text: "허세꾼을 보았다" },
  { id: "cradle", ctx: "고운 아기가 누운 요람을 봄", text: "아기가 누운 예쁜 요람을 보았다" },
  { id: "cradle", ctx: "제 아기를 요람에서 흔들어 재움", text: "요람에서 아기를 흔들어 재웠다" },
  { id: "cradle", ctx: "젊은 여성이 요람을 흔듦", text: "여자가 요람을 흔들었다" },
  { id: "crab", ctx: "게를 봄", text: "게 한 마리가 옆으로 기어갔다" },
  { id: "crab", ctx: "게들을 봄", text: "게들이 여러 마리 있었다" },
  { id: "crab", ctx: "연인에게 게 꿈이 나타남", text: "애인과 함께 게를 보았다" },
  { id: "crane", ctx: "학 떼가 북쪽으로 날아가는 것을 봄", text: "학 떼가 북쪽으로 날아갔다" },
  { id: "crane", ctx: "학 떼가 남쪽으로 날아가는 것을 봄", text: "학 떼가 남쪽으로 날아갔다" },
  { id: "crane", ctx: "학이 땅으로 내려앉는 것을 봄", text: "학이 땅으로 내려앉았다" },
  { id: "crape", ctx: "문에 상포가 걸린 것을 봄", text: "대문에 상포가 걸린 것을 보았다" },
  { id: "crape", ctx: "상포를 두른 사람을 봄", text: "상포를 두른 사람을 보았다" },
  { id: "crape", ctx: "젊은이에게 상포 꿈이 나타남", text: "젊은 연인이 상포 꿈을 꾸었다" },
  { id: "crawfish", ctx: "가재를 봄", text: "가재를 보았다" },
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
