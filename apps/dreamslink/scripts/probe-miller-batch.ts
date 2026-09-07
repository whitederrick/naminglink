// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 291 — Visit~Voice(새 20판 묶음의 4/20). 새 상징
// 셋(visit·vision·voice). Vitriol은 기존 acid(산, 영어 별칭에 이미
// "황산"이 있음)에 합쳤다. vision의 term_ko는 "환상"으로 세웠다 —
// "환영"은 이미 entertainment(welcome)·phantom 둘이 나눠 쥔 동형이의어라
// 세 번째로 얹지 않았다. voice의 "목소리"는 called·bass-voice·dumb
// 셋이 이미 별칭으로 쥐고 있지만 다들 다른 구체적 상황이라 함께 걸려도
// 무방하다고 봤다.
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
  // ── 배치 291 새 문맥 (20건) ────────────────────────────────────────────
  { id: "visit", ctx: "제가 방문함", text: "제가 방문했는데 머잖아 즐거운 일이 있었다" },
  { id: "visit", ctx: "불쾌한 방문을 함", text: "불쾌한 방문을 했는데 악의 있는 이가 즐거움을 망쳤다" },
  { id: "visit", ctx: "벗이 저를 방문함", text: "벗이 저를 방문했는데 반가운 소식이 닿았다" },
  { id: "visit", ctx: "슬프고 여독에 지쳐 보이는 벗이 방문함", text: "슬프고 여독에 지쳐 보이는 벗이 방문했다" },
  { id: "visit", ctx: "검거나 흰 옷을 입고 창백하거나 섬뜩해 보이는 벗이 방문함", text: "검은 옷을 입고 창백하고 섬뜩해 보이는 벗이 방문했다" },
  { id: "vision", ctx: "이상한 환상을 봄", text: "이상한 환상을 보았는데 병으로 즐거운 일을 못 했다" },
  { id: "vision", ctx: "환상 속에 사람들이 나타남", text: "환상 속에 사람들이 나타났는데 봉기와 다툼이 있었다" },
  { id: "vision", ctx: "죽음이 가까운 벗이 환상으로 경고함", text: "죽음이 가까운 벗이 환상으로 경고했는데 흰옷을 입고 나타났다" },
  { id: "vision", ctx: "온갖 환상을 봄", text: "온갖 환상을 보았는데 사업에 변화가 있었다" },
  { id: "acid", ctx: "황산을 봄", text: "황산을 보았는데 죄없는 이를 나무람이 드러났다" },
  { id: "acid", ctx: "남에게 황산을 끼얹음", text: "남에게 황산을 끼얹었는데 앙심을 품었다" },
  { id: "acid", ctx: "젊은 여성이 질투하는 연적에게 황산 세례를 당함", text: "젊은 여성이 질투하는 연적에게 황산 세례를 당했다" },
  { id: "acid", ctx: "사업하는 남성이 황산 세례 꿈을 꿈", text: "사업하는 남성이 황산 세례 꿈을 꿨는데 박해가 있었다" },
  { id: "voice", ctx: "차분하고 듣기 좋은 목소리를 들음", text: "차분하고 듣기 좋은 목소리를 들었다" },
  { id: "voice", ctx: "날카롭고 성난 목소리를 들음", text: "날카롭고 성난 목소리를 들었다" },
  { id: "voice", ctx: "흐느끼는 목소리를 들음", text: "흐느끼는 목소리를 들었는데 벗에게 해를 입혔다" },
  { id: "voice", ctx: "하느님의 목소리를 들음", text: "하느님의 목소리를 들었는데 고결한 뜻으로 나아갔다" },
  { id: "voice", ctx: "어머니가 자녀의 목소리를 들음", text: "어머니가 자녀의 목소리를 들었다" },
  { id: "voice", ctx: "고통스러운 목소리나 부르는 경고를 들음", text: "고통스러운 목소리와 부르는 경고를 들었다" },
  { id: "voice", ctx: "그 목소리를 알아봄", text: "그 목소리를 알아봤는데 불길한 예감이 들었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "acid", ctx: "산을 마심", text: "산을 마셨다" },
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
