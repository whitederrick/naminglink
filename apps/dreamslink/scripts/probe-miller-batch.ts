// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 232 — Rosette·Rouge·Roundabout·Rowboat·Rubber·Ruby·Rudder)
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
  { id: "rosette", ctx: "로제트를 걸치거나 남이 건 것을 봄", text: "로제트를 걸쳤다" },
  { id: "rouge", ctx: "연지를 사용함", text: "연지를 사용했다" },
  { id: "rouge", ctx: "남이 얼굴에 연지를 바른 것을 봄", text: "남이 얼굴에 연지를 바른 것을 보았다" },
  { id: "rouge", ctx: "손이나 옷에 연지가 묻은 것을 봄", text: "손이나 옷에 연지가 묻은 것을 보았다" },
  { id: "rouge", ctx: "얼굴에서 연지가 지워짐", text: "얼굴에서 연지가 지워졌다" },
  { id: "roundabout", ctx: "회전목마를 봄", text: "회전목마를 보았다" },
  { id: "rowboat", ctx: "남들과 함께 노 젓는 배를 탐", text: "남들과 함께 노 젓는 배를 탔다" },
  { id: "rowboat", ctx: "배가 뒤집힘", text: "노 젓는 배가 뒤집혔다" },
  { id: "rowboat", ctx: "조정 경기에서 짐", text: "조정 경기에서 졌다" },
  { id: "rowboat", ctx: "조정 경기에서 이김", text: "조정 경기에서 이겼다" },
  { id: "india-rubber", ctx: "고무 옷을 입음", text: "고무 옷을 입었다" },
  { id: "india-rubber", ctx: "고무 옷이 해지거나 찢어짐", text: "고무 옷이 찢어졌다" },
  { id: "india-rubber", ctx: "속어로 '고무'라는 말을 씀", text: "속어로 고무를 사용했다" },
  { id: "india-rubber", ctx: "제 팔다리가 고무처럼 늘어남", text: "제 팔다리가 고무처럼 늘어났다" },
  { id: "india-rubber", ctx: "고무 제품 꿈을 꿈", text: "고무 제품 꿈을 꾸었다" },
  { id: "ruby", ctx: "루비 꿈을 꿈", text: "루비 꿈을 꾸었다" },
  { id: "ruby", ctx: "여성이 루비를 잃어버림", text: "여성이 루비를 잃어버렸다" },
  { id: "rudder", ctx: "방향키 꿈을 꿈", text: "방향키 꿈을 꾸었다" },
  { id: "rudder", ctx: "부러진 방향키를 봄", text: "부러진 방향키를 보았다" },
  // 지킴 — 이번 배치가 건드린 기존 상징(rouge·india-rubber)의 옛 답이 그대로인가
  { id: "rouge", ctx: "연지를 얻음", text: "연지를 얻었다" },
  { id: "rouge", ctx: "연지를 봄", text: "연지를 보았다" },
  { id: "india-rubber", ctx: "고무를 봄", text: "고무를 보았다" },
  { id: "india-rubber", ctx: "고무를 잡아 늘임", text: "고무를 잡아 늘였다" },
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
