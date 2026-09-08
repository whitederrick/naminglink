// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 301 — Wasp~Watch(새 20판 묶음의 14/20). 새 상징
// 셋(wasteland·squandering·watch), 기존 hornet(말벌)에 문맥을 나눠
// 붙였다. Wasp→hornet(이미 aliases_en에 "wasp" 보유, 첫 문장은 기존
// 「말벌을 봄」과 같은 그림이라 §31로 건너뜀). Waste는 두 그림(황무지를
// 헤맴 vs 재물을 낭비함)이 서로 달라 새 상징 둘로 갈랐다. watch는
// 기존 clock(시계)과 한국어 이름이 겹쳐 LABEL_KO로 "시계(손목시계)"·
// "시계(괘종시계)"로 갈랐다.
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
  // ── 배치 301 새 문맥 (11건) ────────────────────────────────────────────
  { id: "hornet", ctx: "말벌에 쏘임", text: "말벌에 쏘였는데 질투와 미움을 느꼈다" },
  { id: "hornet", ctx: "말벌을 죽임", text: "말벌을 죽였는데 적을 억누르고 담대하게 권리를 지켰다" },
  { id: "wasteland", ctx: "황무지를 헤맴", text: "황무지를 헤맸는데 밝던 성공의 전망이 의심으로 바뀌었다" },
  { id: "squandering", ctx: "재물을 낭비함", text: "재물을 낭비했는데 가정의 근심에 얽매였다" },
  { id: "watch", ctx: "시계 꿈을 꿈", text: "시계 꿈을 꾸었는데 잘 짜인 투기로 번창했다" },
  { id: "watch", ctx: "시계를 봐서 시간을 확인함", text: "시계를 봐서 시간을 확인했는데 경쟁으로 애쓴 일이 꺾였다" },
  { id: "watch", ctx: "시계를 깨뜨림", text: "시계를 깨뜨렸는데 고통과 손실이 닥쳤다" },
  { id: "watch", ctx: "시계 유리를 떨어뜨림", text: "시계 유리를 떨어뜨렸는데 부주의를 예고했다" },
  { id: "watch", ctx: "여자가 시계를 잃어버림", text: "여자가 시계를 잃어버렸는데 가정의 다툼으로 불행해졌다" },
  { id: "watch", ctx: "시계를 훔치는 상상을 함", text: "시계를 훔치는 상상을 했는데 사나운 적이 평판을 공격했다" },
  { id: "watch", ctx: "시계를 선물함", text: "시계를 선물했는데 품위 없는 오락을 좇아 관심이 시들해졌다" },

  // ── 지킴 케이스 — hornet·clock이 여전히 옛 답대로 걸리는지 ──
  { id: "hornet", ctx: "말벌을 봄", text: "말벌을 보았는데 오래된 벗과 사이가 끊겼다" },
  { id: "clock", ctx: "시계를 봄", text: "시계를 보았는데 적에게서 오는 위험이 있었다" },
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
