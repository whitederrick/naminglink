// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 276 — Train~Tray. 새 상징 다섯(train·traitor·
// transfiguration·trap·tray), 기존 long-journey에 문맥 5개 추가.
// Traveling의 첫 문장(여행 자체를 꿈꿈)은 기존 long-journey의
// 「길을 떠남」과 같은 그림이라 §31로 건너뜀 — 장면 자체에 가를 낱말이
// 없었다.
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
  // ── 배치 276 새 문맥 (19건) ────────────────────────────────────────────
  { id: "train", ctx: "기차가 움직이는 것을 봄", text: "기차가 움직이는 것을 보았다" },
  { id: "train", ctx: "궤도 없이도 기차가 매끄럽게 나아감", text: "궤도도 없이 기차가 매끄럽게 나아갔다" },
  { id: "train", ctx: "화물열차를 봄", text: "화물열차를 보았다" },
  { id: "train", ctx: "잠자는 객차 위에 있음", text: "잠자는 객차 위에 있었다" },
  { id: "traitor", ctx: "꿈에 배신자를 봄", text: "꿈에 배신자를 보았다" },
  { id: "traitor", ctx: "누가 자신을 배신자라 부르거나 스스로 그렇다 여김", text: "누가 나를 배신자라 불렀다" },
  { id: "transfiguration", ctx: "거룩한 변모를 꿈꿈", text: "거룩한 변모를 꿈꾸었다" },
  { id: "transfiguration", ctx: "스스로 변모한 모습을 봄", text: "스스로 변모한 모습을 보았다" },
  { id: "trap", ctx: "함정을 놓음", text: "함정을 놓았다" },
  { id: "trap", ctx: "함정에 걸림", text: "함정에 걸렸다" },
  { id: "trap", ctx: "함정으로 짐승을 잡음", text: "함정으로 짐승을 잡았다" },
  { id: "trap", ctx: "빈 함정을 봄", text: "함정을 보았는데 아무것도 없이 비어 있었다" },
  { id: "trap", ctx: "낡거나 부서진 함정을 봄", text: "낡고 부서진 함정을 보았다" },
  { id: "long-journey", ctx: "낯설고 험한 곳으로 여행함", text: "낯선 곳으로 여행을 가다가 험한 길을 만났다" },
  { id: "long-journey", ctx: "메마르고 바위투성이인 비탈을 지남", text: "바위투성이 비탈로 여행을 갔다" },
  { id: "long-journey", ctx: "기름지고 푸른 언덕이나 산을 지남", text: "기름진 언덕으로 여행을 갔다" },
  { id: "long-journey", ctx: "홀로 차를 타고 여행함", text: "홀로 차를 타고 여행을 갔다" },
  { id: "long-journey", ctx: "붐비는 차를 타고 여행함", text: "붐비는 차를 타고 여행을 갔다" },
  { id: "tray", ctx: "쟁반들을 봄", text: "쟁반들을 보았다" },
  { id: "tray", ctx: "쟁반에 값진 것이 가득함", text: "쟁반에 값진 것이 가득했다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "long-journey", ctx: "길을 떠남", text: "길을 떠났다" },
  { id: "long-journey", ctx: "먼 길을 오가며 다님", text: "여행을 하며 먼 곳을 오가며 지냈다" },
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
