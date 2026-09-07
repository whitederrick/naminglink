// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 275 — Torrent~Tragedy. 새 상징 다섯(torture·
// tourist·tower·toys·tragedy)을 세우고, 기존 둘(rapids·trading)에
// 문맥을 나눠 붙였다. Torrent는 rapids와 같은 물(급류) — 밀러 원문
// aliases_en에 이미 rapids만 있었는데 한국어 이름이 겹쳐 발견했다.
// Trade도 trading과 같은 개념(aliases_en에 이미 trade가 있었다) —
// 「거래를 함」(성공, 길)은 기존 「남과 물건을 거래함」(주공해몽, 병이
// 생김, 흉)과 글자까지 같은 그림에 정반대 풀이라 건너뛰고 「실패함」만
// 붙임. trading 기본값은 있던 대로 얼렸다.
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
  // ── 배치 275 새 문맥 (16건) ────────────────────────────────────────────
  { id: "rapids", ctx: "쏟아지는 급류를 바라봄", text: "쏟아지는 급류를 바라보았다" },
  { id: "torture", ctx: "고문을 당함", text: "고문을 당했다" },
  { id: "torture", ctx: "남을 고문함", text: "남을 고문했다" },
  { id: "torture", ctx: "남이 당하는 고문을 덜어 주려 애씀", text: "남이 당하는 고문을 덜어 주려 애썼다" },
  { id: "tourist", ctx: "스스로 관광객이 됨", text: "스스로 관광객이 되었다" },
  { id: "tourist", ctx: "관광객들을 봄", text: "관광객들을 보았다" },
  { id: "tower", ctx: "탑을 봄", text: "탑을 보았다" },
  { id: "tower", ctx: "탑에 오름", text: "탑에 올랐다" },
  { id: "tower", ctx: "탑에서 내려오는데 탑이 무너짐", text: "탑에서 내려오는데 탑이 무너졌다" },
  { id: "toys", ctx: "온전하고 새 장난감을 봄", text: "온전하고 새 장난감을 보았다" },
  { id: "toys", ctx: "부서진 장난감을 봄", text: "부서진 장난감을 보았다" },
  { id: "toys", ctx: "아이들이 장난감을 갖고 노는 것을 봄", text: "아이들이 장난감을 갖고 노는 것을 보았다" },
  { id: "toys", ctx: "장난감을 남에게 줘 버림", text: "장난감을 남에게 줘 버렸다" },
  { id: "trading", ctx: "거래에서 실패함", text: "거래에서 실패했다" },
  { id: "tragedy", ctx: "비극 꿈을 꿈", text: "비극 꿈을 꾸었다" },
  { id: "tragedy", ctx: "비극에 휘말림", text: "비극에 휘말렸다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징들의 옛 답이 그대로인지 ────────
  { id: "rapids", ctx: "급류에 휩쓸려 감", text: "급류에 휩쓸려 갔다" },
  { id: "trading", ctx: "남과 물건을 거래함", text: "남과 물건을 거래했다" },
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
