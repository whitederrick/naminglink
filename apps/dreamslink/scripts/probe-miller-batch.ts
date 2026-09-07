// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 284 — United States Mail Box~Usurper. 새 상징
// 다섯(mailbox·urgent-petition·urinal·usurer·usurper), 기존 mystery
// (수수께끼)·urine(오줌)·jar(항아리)에 문맥을 나눠 붙임. Unknown은 각주
// [234] See Mystery로 mystery에 합침. Urn은 jar가 이미 영어 별칭
// "urn"을 쥐고 있어 합쳤는데, 둘째 문장(깨진 단지)은 기존 「깨진 항아리를
// 봄」과 같은 그림이라 §31로 건너뜀. urine은 m284가 기존 오줌 출처(r3)
// 보다 사전순으로 앞서 기본값이 바뀔 뻔했으나, 두 문장이 서로 다른
// 문헌(주공해몽 길조 vs 밀러 흉조)의 다른 판단이라 있던 주공해몽 답을
// 그대로 얼렸다.
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
  // ── 배치 284 새 문맥 (14건) ────────────────────────────────────────────
  { id: "mailbox", ctx: "우체통을 봄", text: "우체통을 보았다" },
  { id: "mailbox", ctx: "우체통에 편지를 넣음", text: "우체통에 편지를 넣었다" },
  { id: "mystery", ctx: "낯선 이를 만남", text: "낯선 이를 만났다" },
  { id: "mystery", ctx: "스스로 낯선 이가 된 듯 느낌", text: "스스로 낯선 이가 된 듯 느꼈다" },
  { id: "urgent-petition", ctx: "긴급 청원을 지지함", text: "긴급 청원을 지지했다" },
  { id: "urinal", ctx: "소변기 꿈을 꿈", text: "소변기 꿈을 꾸었다" },
  { id: "urine", ctx: "오줌을 봄", text: "오줌을 보았는데 벗들에게 무뚝뚝하게 굴었다" },
  { id: "urine", ctx: "스스로 오줌을 눔", text: "스스로 오줌을 누었는데 사랑에서 힘겨운 시기였다" },
  { id: "jar", ctx: "단지 꿈을 꿈", text: "단지 꿈을 꾸었는데 어떤 면에서는 눈총을 받았다" },
  { id: "usurer", ctx: "스스로 고리대금업자임을 봄", text: "스스로 고리대금업자임을 보았다" },
  { id: "usurer", ctx: "남들이 고리대금업자임을 봄", text: "남들이 고리대금업자임을 보았다" },
  { id: "usurper", ctx: "스스로 찬탈자임을 봄", text: "스스로 찬탈자임을 보았다" },
  { id: "usurper", ctx: "남들이 제 권리를 빼앗으려 함", text: "남들이 제 권리를 빼앗으려 했다" },
  { id: "usurper", ctx: "처녀가 스스로 찬탈자가 되는 꿈을 꿈", text: "처녀가 스스로 찬탈자가 되는 꿈을 꾸었는데 짜릿한 경쟁에서 이겼다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "mystery", ctx: "알 수 없는 일에 어리둥절함", text: "알 수 없는 일에 어리둥절했다" },
  { id: "urine", ctx: "오줌이 몸을 더럽힘", text: "오줌이 몸을 더럽혔다" },
  { id: "jar", ctx: "빈 항아리를 봄", text: "텅빈 항아리를 보았다" },
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
