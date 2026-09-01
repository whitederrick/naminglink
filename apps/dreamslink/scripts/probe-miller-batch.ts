// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 14 — Challenge~Chestnuts, 48건)
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
  { id: "challenge", ctx: "결투를 신청받음", text: "결투를 신청받았다" },
  { id: "challenge", ctx: "도전을 받아들임", text: "도전을 받아들였다" },
  { id: "bedchamber", ctx: "새로 꾸민 침실을 봄", text: "새로 꾸민 침실을 보았다" },
  { id: "bedchamber", ctx: "아름답고 화려하게 꾸민 방에 있음", text: "화려하게 꾸민 침실에 있었다" },
  { id: "bedchamber", ctx: "젊은 여성이 화려한 방에 있음", text: "여자가 화려한 침실에 있었다" },
  { id: "bedchamber", ctx: "수수하게 꾸민 방을 봄", text: "수수하게 꾸민 침실을 보았다" },
  { id: "chambermaid", ctx: "하녀를 봄", text: "하녀를 보았다" },
  { id: "chambermaid", ctx: "하녀에게 구애함", text: "남자가 하녀에게 구애했다" },
  { id: "chameleon", ctx: "연인이 카멜레온을 매달고 있음", text: "애인이 카멜레온을 사슬로 매달고 있었다" },
  { id: "chameleon", ctx: "카멜레온을 봄", text: "카멜레온을 보았다" },
  { id: "champion", ctx: "챔피언을 봄", text: "챔피언을 보았다" },
  { id: "chandelier", ctx: "샹들리에를 봄", text: "샹들리에가 매달려 있었다" },
  { id: "chandelier", ctx: "부서지거나 손질 안 된 샹들리에를 봄", text: "부서진 샹들리에를 보았다" },
  { id: "chandelier", ctx: "샹들리에 불이 꺼짐", text: "샹들리에 불이 꺼졌다" },
  { id: "chapel", ctx: "예배당을 봄", text: "멀리서 예배당을 보았다" },
  { id: "chapel", ctx: "예배당 안에 있음", text: "예배당 안에 있었다" },
  { id: "chapel", ctx: "젊은이가 예배당에 들어감", text: "젊은이가 예배당에 들어갔다" },
  { id: "charity", ctx: "기부를 함", text: "가난한 이에게 기부를 했다" },
  { id: "charity", ctx: "자선 기관에 기부함", text: "기부를 어느 단체에 했다" },
  { id: "charity", ctx: "젊은이가 기부를 함", text: "청년이 기부를 했다" },
  { id: "charity", ctx: "내가 도움을 받는 처지가 됨", text: "내가 기부를 받는 처지가 되었다" },
  { id: "charcoal", ctx: "불 꺼진 숯을 봄", text: "불이 꺼진 숯을 보았다" },
  { id: "charcoal", ctx: "벌겋게 타는 숯을 봄", text: "숯이 벌겋게 타오르고 있었다" },
  { id: "chariot", ctx: "전차를 타고 감", text: "전차를 타고 갔다" },
  { id: "chariot", ctx: "전차에서 떨어짐", text: "전차에서 떨어졌다" },
  { id: "chastise", ctx: "체벌을 받음", text: "내가 회초리로 벌을 받았다" },
  { id: "chastise", ctx: "남에게 매를 듦", text: "남에게 회초리를 들어 때렸다" },
  { id: "chastise", ctx: "부모가 아이를 벌줌", text: "부모가 아이를 회초리로 벌주었다" },
  { id: "cheated", ctx: "거래에서 속임을 당함", text: "거래에서 속았다" },
  { id: "cheated", ctx: "놀이에서 속임을 당함", text: "놀이에서 속았다" },
  { id: "checks", ctx: "가짜 수표를 남에게 떠넘김", text: "가짜 수표를 떠넘겼다" },
  { id: "checks", ctx: "수표를 받음", text: "수표를 받았다" },
  { id: "checks", ctx: "수표를 내어 줌", text: "수표를 내어 주었다" },
  { id: "checkers", ctx: "체커를 둠", text: "체커를 두었다" },
  { id: "checkers", ctx: "체커에서 이김", text: "체커에서 이겼다" },
  { id: "cheese", ctx: "치즈를 먹음", text: "치즈를 먹었다" },
  { id: "chemise", ctx: "슈미즈를 봄", text: "슈미즈를 보았다" },
  { id: "cherry", ctx: "체리를 봄", text: "체리가 담겨 있었다" },
  { id: "cherry", ctx: "체리를 먹음", text: "체리를 먹었다" },
  { id: "cherry", ctx: "덜 익은 체리를 봄", text: "익지 않은 파란 체리를 보았다" },
  { id: "cherub", ctx: "아기 천사를 봄", text: "아기 천사가 나타났다" },
  { id: "cherub", ctx: "아기 천사가 슬퍼하거나 나무라는 낯빛임", text: "아기 천사가 슬퍼하는 낯빛이었다" },
  { id: "chess", ctx: "체스를 둠", text: "체스를 두었다" },
  { id: "chess", ctx: "체스에서 짐", text: "체스에서 졌다" },
  { id: "chess", ctx: "체스에서 이김", text: "체스에서 이겼다" },
  { id: "chestnut", ctx: "밤을 만짐", text: "알밤을 손에 쥐었다" },
  { id: "chestnut", ctx: "밤을 먹음", text: "군밤을 먹었다" },
  { id: "chestnut", ctx: "밤으로 운을 점침", text: "밤을 주웠다 그것으로 운을 점쳤다" },
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
