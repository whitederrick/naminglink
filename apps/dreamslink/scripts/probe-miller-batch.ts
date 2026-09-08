// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 320 — Worms~Writing(새 20판 묶음의 13/20,
// 밀러 W 항목 전부 완료). 새 상징 둘(wound 상처·wreck 난파), 기존
// earthworm(지렁이)·flower-ornament(화환)·letter(편지)에 문맥을
// 나눠 붙였다. Writing 첫 문장은 §31로 건너뜀(각주 See Letters대로
// letter의 기존 "편지를 씀"과 같은 그림). earthworm·flower-ornament
// 기본값이 둘 다 바뀌어 얼렸다.
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
  // ── 배치 320 새 문맥 (13건) ────────────────────────────────────────────
  { id: "earthworm", ctx: "지렁이 꿈을 꿈", text: "지렁이 꿈을 꾸었는데 못된 사람들의 저열한 계략에 짓눌렸다" },
  { id: "earthworm", ctx: "젊은 여성의 몸 위로 지렁이가 기어다님", text: "젊은 여성의 몸 위로 지렁이가 기어다녔는데 바라는 바가 늘 물질에 쏠렸다" },
  { id: "earthworm", ctx: "지렁이를 죽이거나 떨쳐 냄", text: "지렁이를 죽이거나 떨쳐 냈는데 도덕과 영성을 좇아 살고자 했다" },
  { id: "earthworm", ctx: "지렁이를 낚싯밥으로 씀", text: "지렁이를 낚싯밥으로 썼는데 제 재간으로 적을 이롭게 이용했다" },
  { id: "wound", ctx: "자신이 상처 입음", text: "자신이 상처 입었는데 괴로움을 겪고 사업이 불리하게 돌아섰다" },
  { id: "wound", ctx: "남이 상처 입은 것을 봄", text: "남이 상처 입은 것을 보았는데 벗들에게서 부당한 대우를 받았다" },
  { id: "wound", ctx: "상처를 돌보거나 싸맴", text: "상처를 돌보거나 싸맸는데 운수가 좋아 기뻤다" },
  { id: "flower-ornament", ctx: "싱싱한 꽃으로 만든 화환을 봄", text: "싱싱한 꽃으로 만든 화환을 보았는데 살림을 넉넉하게 할 큰 기회가 찾아왔다" },
  { id: "flower-ornament", ctx: "시든 화환을 봄", text: "시든 화환을 보았는데 병과 사랑의 상심을 지녔다" },
  { id: "flower-ornament", ctx: "신부의 화환을 봄", text: "신부의 화환을 보았는데 불확실하던 혼약이 행복하게 매듭지어졌다" },
  { id: "wreck", ctx: "난파선 꿈을 꿈", text: "난파선 꿈을 꾸었는데 사업이 갑자기 실패할 두려움에 시달렸다" },
  { id: "letter", ctx: "글씨를 봄", text: "글씨를 보았는데 부주의한 행실로 질책받고 소송으로 곤란을 겪었다" },
  { id: "letter", ctx: "낯선 글씨를 읽으려 애씀", text: "낯선 글씨를 읽으려 애썼는데 새로운 투기를 하지 않아 적을 피했다" },

  // ── 지킴 케이스 — earthworm·flower-ornament·letter의 기존 답이 여전히 걸리는지 ──
  { id: "earthworm", ctx: "지렁이를 봄", text: "논밭 근처에서 지렁이를 보았다" },
  { id: "flower-ornament", ctx: "머리에 꽃 장식을 누름", text: "머리에 꽃 장식을 눌렀다" },
  { id: "letter", ctx: "편지를 씀", text: "편지를 썼다" },
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
