// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 288 — Vein~Vessels(새 20판 묶음의 첫 판). 새 상징
// 다섯(vein·velvet·veneer·ventriloquist·vertigo), 기존 balcony(발코니)·
// grasshopper(메뚜기)·boat(배)에 문맥을 나눠 붙임. Veranda는 이미
// 별칭 "베란다"가 있어 balcony에, Vermin은 각주 [235] See Locust로
// grasshopper에(이미 "locusts"를 담론하고 있었음), Vessels는 각주
// [236] See Ships로 boat에 합쳤다. balcony·boat 둘 다 m288이 각자
// 기존 출처보다 사전순으로 앞서 기본값이 바뀌었는데, 둘 다 새로 들어온
// 문장이 조건 없이 더 막연해 그쪽으로 얼렸다(바꾸는 쪽 — 세 번째·네
// 번째 사례).
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
  // ── 배치 288 새 문맥 (19건) ────────────────────────────────────────────
  { id: "vein", ctx: "정상적인 정맥을 봄", text: "정상적인 정맥을 보았다" },
  { id: "vein", ctx: "피가 나는 정맥을 봄", text: "피가 나는 정맥을 보았다" },
  { id: "vein", ctx: "부어오른 정맥을 봄", text: "부어오른 정맥을 보았다" },
  { id: "velvet", ctx: "벨벳 꿈을 꿈", text: "벨벳 꿈을 꾸었다" },
  { id: "velvet", ctx: "스스로 벨벳을 입음", text: "스스로 벨벳을 입었다" },
  { id: "velvet", ctx: "낡은 벨벳을 봄", text: "낡은 벨벳을 보았다" },
  { id: "velvet", ctx: "처녀가 벨벳 옷을 입음", text: "처녀가 벨벳 옷을 입었다" },
  { id: "veneer", ctx: "스스로 베니어를 바름", text: "스스로 베니어를 발랐다" },
  { id: "ventriloquist", ctx: "복화술사 꿈을 꿈", text: "복화술사 꿈을 꾸었다" },
  { id: "ventriloquist", ctx: "스스로 복화술사라고 여김", text: "스스로 복화술사라고 여겼다" },
  { id: "ventriloquist", ctx: "처녀가 복화술사의 목소리에 홀림", text: "처녀가 복화술사의 목소리에 홀렸다" },
  { id: "balcony", ctx: "베란다에서 근심거리를 성공으로 이끎", text: "베란다에 있었는데 근심거리를 성공으로 이끌었다" },
  { id: "balcony", ctx: "처녀가 연인과 베란다에 있음", text: "처녀가 연인과 베란다에 있었는데 이른 혼인을 했다" },
  { id: "balcony", ctx: "낡은 베란다를 봄", text: "낡은 베란다를 보았다" },
  { id: "grasshopper", ctx: "해충이 기어다니는 것을 봄", text: "해충이 기어다니는 것을 보았다" },
  { id: "grasshopper", ctx: "해충을 없애는 데 성공함", text: "해충을 없애는 데 성공했다" },
  { id: "grasshopper", ctx: "해충을 없애지 못함", text: "해충을 없애지 못했다" },
  { id: "vertigo", ctx: "스스로 현기증이 있음", text: "스스로 현기증이 있었다" },
  { id: "boat", ctx: "여러 배를 봄", text: "여러 배를 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "balcony", ctx: "연인들이 발코니에서 슬픈 작별을 함", text: "연인들이 발코니에서 슬픈 작별을 했다" },
  { id: "grasshopper", ctx: "메뚜기를 봄", text: "메뚜기 떼가 새까맣게 몰려온 것을 보았다" },
  { id: "boat", ctx: "맑은 물 위의 배를 봄", text: "맑고 잔잔한 물 위의 배를 보았다" },
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
