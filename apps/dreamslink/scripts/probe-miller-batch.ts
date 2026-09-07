// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 256 — 기존 spoon·wind에 문맥을 보태고, 새 상징
// 여섯(spring·spur·spy·spyglass·squinting·squirrel)을 세웠다. Squall은
// wind가 이미 "돌풍" 별칭을 쥐고 있어 새 상징을 세우지 않았다. spoon은
// 파일명 정렬(m256 < r 파일) 때문에 기본값이 바뀔 뻔했지만 옛 값을 그대로
// 얼렸다 — 밀러 Spoons의 첫 문장은 옛 그림과 같아 아예 안 넣었다)
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
  // ── 배치 256 새 문맥 (19건) ──────────────────────────────────────────────
  { id: "spoon", ctx: "숟가락을 잃어버렸다고 생각함", text: "숟가락을 잃어버렸다고 생각했다" },
  { id: "spoon", ctx: "숟가락을 훔침", text: "숟가락을 훔쳤다" },
  { id: "spoon", ctx: "부러지거나 더러운 숟가락을 봄", text: "부러지거나 더러운 숟가락을 보았다" },
  { id: "spring", ctx: "봄이 오고 있음", text: "봄이 오고 있었다" },
  { id: "spring", ctx: "봄이 제철과 다르게 나타남", text: "봄철이 제철과 다르게 이상하게 나타났다" },
  { id: "spur", ctx: "스스로 박차를 참", text: "스스로 박차를 찼다" },
  { id: "spur", ctx: "남이 박차를 찬 것을 봄", text: "남이 박차를 찬 것을 보았다" },
  { id: "spy", ctx: "첩자들에게 시달림", text: "첩자들에게 시달렸다" },
  { id: "spy", ctx: "스스로 첩자가 됨", text: "스스로 첩자가 되었다" },
  { id: "spyglass", ctx: "망원경으로 봄", text: "망원경으로 들여다보았다" },
  { id: "spyglass", ctx: "부서지거나 흠집 난 망원경을 봄", text: "부서지거나 흠집 난 망원경을 보았다" },
  { id: "wind", ctx: "돌풍이 부는 꿈을 꿈", text: "돌풍이 부는 꿈을 꾸었다" },
  { id: "squinting", ctx: "곁눈질하는 사람을 봄", text: "어떤 사람이 곁눈질하는 것을 보았다" },
  { id: "squinting", ctx: "남자가 애인이나 낯선 미인에게서 곁눈질을 받음", text: "남자가 애인이 곁눈질하는 것을 보았다" },
  { id: "squinting", ctx: "여자가 남자에게서 곁눈질을 받음", text: "여자가 평판을 잃을까 곁눈질을 받았다" },
  { id: "squirrel", ctx: "다람쥐들을 봄", text: "다람쥐들을 보았다" },
  { id: "squirrel", ctx: "다람쥐를 죽임", text: "다람쥐를 죽였다" },
  { id: "squirrel", ctx: "다람쥐를 예뻐함", text: "다람쥐를 예뻐했다" },
  { id: "squirrel", ctx: "개가 다람쥐를 쫓는 것을 봄", text: "개가 다람쥐를 쫓는 것을 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징(spoon·wind)의 옛 답이 그대로인지 ──
  { id: "spoon", ctx: "숟가락을 봄", text: "숟가락 꿈을 꾸었다" },
  { id: "wind", ctx: "사나운 바람이 몰아침", text: "사나운 바람이 몰아쳤다" },
  { id: "wind", ctx: "거센 바람에 휘말림", text: "거센 바람에 휘말렸다" },
  { id: "wind", ctx: "바람이 사람의 옷자락을 불어 젖힘", text: "바람이 옷자락을 불어 젖혔다" },
  { id: "wind", ctx: "갑자기 큰바람이 붊", text: "갑자기 큰바람이 불었다" },
  { id: "wind", ctx: "바람이 울부짖듯 소리를 냄", text: "바람이 울부짖듯 소리를 냈다" },
  { id: "wind", ctx: "바람이 불어 집이 흔들림", text: "바람이 불어 집이 흔들렸다" },
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
