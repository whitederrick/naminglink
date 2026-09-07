// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 258 — 기존 star·thief에 문맥을 보태고, 새 상징
// 둘(standard-bearer·steeple)을 세웠다. Starving·Statues·Steps 세
// 표제어는 각각 famish·image·ascend의 기존 문맥과 같은 그림·다른
// 풀이라 문장 전부를 건너뛰었다(§31 곁가지) — 이번 배치가 새 문맥을
// 하나도 못 얻은 표제어가 셋이나 되는 드문 판이다. star·thief 둘 다
// r 파일에서만 왔는데 새 m258 이 항상 그보다 앞서 정렬돼(모든
// m*<r*) 기본값이 바뀔 뻔했지만 둘 다 옛 값 그대로 얼렸다.
// standard-bearer는 term_ko를 「기수(깃발잡이)」로 지었지만 매칭
// 별칭 "기수가"·"기수를"은 여전히 jockey(騎手)의 "기수"와 동음이의로
// 겹친다 — 진짜 동형이의어라 받아들였다(§31 배치 31의 「눈」 눈雪/眼과
// 같은 판단, 참고 목록에만 남고 하드 실패는 아니다)
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
  // ── 배치 258 새 문맥 (12건. Starving·Statues·Steps는 통째로 건너뜀) ──
  { id: "standard-bearer", ctx: "스스로 기수가 됨", text: "스스로 기수가 되었다" },
  { id: "standard-bearer", ctx: "남들이 기수 노릇을 하는 것을 봄", text: "남들이 기수 노릇을 하는 것을 보았다" },
  { id: "star", ctx: "흐릿하거나 붉은 별을 봄", text: "흐릿하거나 붉은 별을 보았다" },
  { id: "star", ctx: "별이 나타났다 사라지기를 알 수 없이 되풀이함", text: "별이 나타났다 사라지기를 알 수 없이 되풀이했다" },
  { id: "star", ctx: "별이 나에게 떨어짐", text: "별이 나에게 떨어졌다" },
  { id: "star", ctx: "별들이 땅에서 굴러다니는 것을 봄", text: "별들이 땅에서 굴러다니는 것을 보았다" },
  { id: "thief", ctx: "도둑질을 했다고 몰림", text: "도둑질을 했다고 몰렸다" },
  { id: "thief", ctx: "남을 도둑질했다고 몰아세움", text: "남에게 도둑질을 뒤집어씌우며 몰아세웠다" },
  { id: "steeple", ctx: "교회에서 솟은 첨탑을 봄", text: "교회에서 솟은 첨탑을 보았다" },
  { id: "steeple", ctx: "부서진 첨탑을 봄", text: "부서진 첨탑을 보았다" },
  { id: "steeple", ctx: "첨탑을 오름", text: "첨탑을 올랐다" },
  { id: "steeple", ctx: "첨탑에서 떨어짐", text: "첨탑에서 떨어졌다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징(star·thief)의 옛 답이 그대로인지 ──
  { id: "star", ctx: "하늘의 별이 밝게 빛남", text: "하늘의 별이 밝게 빛났다" },
  { id: "star", ctx: "별이 떨어짐", text: "별이 떨어졌다" },
  { id: "star", ctx: "별이 줄지어 늘어섬", text: "별이 줄지어 늘어섰다" },
  { id: "thief", ctx: "도둑들이 자신의 몸을 뒤짐", text: "도둑들이 내 몸을 뒤졌다" },
  { id: "thief", ctx: "자기가 도둑이 됨", text: "자기가 도둑이 되었다" },
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
