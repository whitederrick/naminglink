// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 292 — Volcano~Vultures(새 20판 묶음의 5/20, 밀러
// V 항목의 끝). 새 상징 둘(volcano·vultures). 나머지 다섯(Vomit·Vote·
// Voucher·Vow·Voyage)은 전부 기존 상징(vomiting·election·document·
// oath·long-journey)에 합쳤다 — 다섯 다 term_ko나 영어 별칭이 이미
// 겹쳐 있었다. vultures는 term_ko를 "대머리수리"로 세웠다 — 그대로
// "독수리"를 쓰면 기존 eagle과 완전히 겹친다. document·oath·election
// 셋은 원래 의미가 하나뿐이라 판별어 표가 비어 있었는데, 의미를
// 더하며 그 빈자리에 discriminator를 채워야 했다(§30 곁가지).
// vomiting·document 둘의 기본값이 사전순으로 바뀔 뻔했는데 vomiting은
// 지키고 document는 받아들였다.
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
  // ── 배치 292 새 문맥 (19건) ────────────────────────────────────────────
  { id: "volcano", ctx: "화산을 봄", text: "화산을 보았는데 격렬한 다툼에 휘말렸다" },
  { id: "volcano", ctx: "젊은 여성이 화산 꿈을 꿈", text: "젊은 여성이 화산 꿈을 꾸었는데 이기심과 욕심으로 모험에 휘말렸다" },
  { id: "vomiting", ctx: "구토하는 꿈을 꿈", text: "구토하는 꿈을 꾸었는데 병에 걸려 폐인이 될 위험에 처했다" },
  { id: "vomiting", ctx: "남이 토하는 것을 봄", text: "남이 토하는 것을 보았는데 거짓 핑계를 알아챘다" },
  { id: "vomiting", ctx: "여성이 닭을 토해내고 닭이 뛰어 달아나는 꿈을 꿈", text: "여성이 닭을 토해내고 닭이 뛰어 달아나는 꿈을 꾸었다" },
  { id: "vomiting", ctx: "피를 토함", text: "피를 토했는데 병이 갑작스레 찾아왔다" },
  { id: "election", ctx: "어떤 안건에 투표함", text: "어떤 안건에 투표했는데 공동체에 소동이 일어났다" },
  { id: "election", ctx: "부정하게 투표함", text: "부정하게 투표했는데 부정직함이 드러났다" },
  { id: "document", ctx: "증서 꿈을 꿈", text: "증서 꿈을 꾸었는데 끈기 있는 애씀이 계략을 물리쳤다" },
  { id: "document", ctx: "증서에 서명함", text: "증서에 서명했는데 주위의 신뢰를 얻었다" },
  { id: "document", ctx: "증서를 잃어버림", text: "증서를 잃어버려 친척들과 다투었다" },
  { id: "oath", ctx: "맹세를 하거나 들음", text: "맹세를 하거나 들었는데 사업에서 불성실하다는 항의를 받았다" },
  { id: "oath", ctx: "교회의 서약을 함", text: "교회의 서약을 했는데 흔들림없는 진실함으로 처신했다" },
  { id: "oath", ctx: "맹세를 깨거나 저버림", text: "맹세를 깨거나 저버렸는데 재앙 같은 결과가 따랐다" },
  { id: "long-journey", ctx: "배를 타고 항해함", text: "배를 타고 항해했는데 유산을 받았다" },
  { id: "long-journey", ctx: "재난을 만난 항해", text: "재난을 만난 항해를 했는데 무능함과 거짓사랑이 뒤따랐다" },
  { id: "vultures", ctx: "대머리수리 꿈을 꿈", text: "대머리수리 꿈을 꾸었는데 속임수를 꾸미는 이가 나를 해치려 했다" },
  { id: "vultures", ctx: "다치거나 죽은 대머리수리를 봄", text: "다치거나 죽은 대머리수리를 보았다" },
  { id: "vultures", ctx: "여성이 대머리수리 꿈을 꿈", text: "여성이 대머리수리 꿈을 꾸었는데 비방과 뒷말에 시달렸다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "vomiting", ctx: "토함", text: "토했다" },
  { id: "document", ctx: "문서에 도장을 찍음", text: "문서에 도장을 찍었다" },
  { id: "oath", ctx: "맹세를 함", text: "맹세를 했다" },
  { id: "election", ctx: "선거하는 자리에 있음", text: "선거하는 자리에 있었다" },
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
