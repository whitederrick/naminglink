// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 317 — Wire~Wolf(새 20판 묶음의 10/20). 새 상징
// 넷(wire·wisdom·witch·witness), 기존 sorcerer(마법사)·wolf(이리)에
// 문맥을 나눠 붙였다. wire의 term_ko "전선"이 기존 electricity(전기)의
// 별칭과 겹쳐(전선을 보면 둘 다 걸림) electricity의 "전선" 별칭을
// 빼서 wire가 전담하게 했다 — electricity의 기존 문맥(전깃줄로 짐을
// 보냄)이 "전깃줄"만으로도 여전히 걸리는지 지킴 케이스로 확인한다.
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
  // ── 배치 317 새 문맥 (13건) ────────────────────────────────────────────
  { id: "wire", ctx: "전선 꿈을 꿈", text: "전선 꿈을 꾸었는데 잦지만 짧은 여행을 하게 됐다" },
  { id: "wire", ctx: "낡거나 녹슨 전선을 봄", text: "낡거나 녹슨 전선을 보았는데 고약한 성미를 지니게 됐다" },
  { id: "wire", ctx: "철조망을 봄", text: "철조망을 보았는데 눈여겨보던 거래에서 속임을 당했다" },
  { id: "wisdom", ctx: "자신에게 지혜가 있다고 여김", text: "자신에게 지혜가 있다고 여겼는데 시련을 이겨내고 번영했다" },
  { id: "wisdom", ctx: "자신에게 지혜가 모자란다고 여김", text: "자신에게 지혜가 모자란다고 여겼는데 타고난 재능을 허비하고 있었다" },
  { id: "witch", ctx: "마녀들의 꿈을 꿈", text: "마녀들의 꿈을 꾸었는데 모험이 끝내 망신으로 되돌아왔다" },
  { id: "witch", ctx: "마녀들이 자신에게 다가옴", text: "마녀들이 자신에게 다가왔는데 사업이 침체됐다" },
  { id: "witness", ctx: "남에게 불리한 증언을 함", text: "남에게 불리한 증언을 했는데 사소한 일로 크게 짓눌렸다" },
  { id: "witness", ctx: "남이 자신에게 불리한 증언을 함", text: "남이 자신에게 불리한 증언을 했는데 벗의 부탁을 거절할 수밖에 없었다" },
  { id: "witness", ctx: "죄지은 사람을 위해 증언함", text: "죄지은 사람을 위해 증언했는데 부끄러운 일에 연루됐다" },
  { id: "sorcerer", ctx: "젊은이가 마법사 꿈을 꿈", text: "젊은이가 마법사 꿈을 꾸었는데 상실과 파혼을 겪었다" },
  { id: "wolf", ctx: "이리를 죽임", text: "이리를 죽였는데 교활한 적을 물리쳤다" },
  { id: "wolf", ctx: "이리가 울부짖는 소리를 들음", text: "이리가 울부짖는 소리를 들었는데 은밀한 결탁이 있었다" },

  // ── 지킴 케이스 — sorcerer·wolf 기존 답, electricity(전선 별칭 뺀 뒤)가 여전히 걸리는지 ──
  { id: "sorcerer", ctx: "마법사를 봄", text: "마법사를 보았는데 야심이 뜻밖의 실망을 겪었다" },
  { id: "wolf", ctx: "이리가 움직이지 않고 있음", text: "이리가 움직이지 않고 있었다" },
  { id: "electricity", ctx: "전선으로 짐이나 제 몸을 실어 보냄", text: "전깃줄로 짐을 실어 보냈는데 막힌 것을 넘어섰다" },
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
