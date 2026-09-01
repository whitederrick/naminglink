// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 25 — Debt~Diamonds, 46건)
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
  { id: "debt", ctx: "빚 꿈을 꿈", text: "빚에 쪼들려 시달렸다" },
  { id: "debt", ctx: "갚을 것을 다 치를 만큼 넉넉함", text: "빚 갚을 돈이 넉넉했다" },
  { id: "december", ctx: "십이월 꿈을 꿈", text: "십이월 꿈을 꾸었다" },
  { id: "deck", ctx: "갑판 위에서 폭풍우를 만남", text: "갑판 위에서 폭풍우가 몰아쳤다" },
  { id: "deck", ctx: "갑판에서 본 바다가 잔잔함", text: "갑판에서 본 바다가 잔잔하고 고요했다" },
  { id: "decorate", ctx: "잔치를 앞두고 환한 꽃으로 꾸밈", text: "잔치를 앞두고 환한 꽃으로 꾸몄다" },
  { id: "decorate", ctx: "무덤이나 관을 흰 꽃으로 꾸민 것을 봄", text: "무덤을 하얀 꽃으로 꾸민 것을 보았다" },
  { id: "decorate", ctx: "장한 일을 기려 꾸밈", text: "장한 공로를 기려 꾸몄다" },
  { id: "deed", ctx: "땅문서를 보거나 서명함", text: "땅문서에 서명을 했다" },
  { id: "deed", ctx: "어떤 종이에든 서명함", text: "땅문서 말고 아무 종이에나 서명했다" },
  { id: "deer", ctx: "사슴 꿈을 꿈", text: "사슴 꿈을 꾸어 맑고 깊은 사귐을 느꼈다" },
  { id: "deer", ctx: "사슴을 죽임", text: "사슴을 죽였다" },
  { id: "deer", ctx: "사슴 사냥을 함", text: "농부가 사슴 사냥을 하는 꿈을 꾸었다" },
  { id: "delay", ctx: "일이 늦어짐", text: "일이 자꾸 늦어졌다" },
  { id: "delight", ctx: "어떤 일에 흐뭇함을 느낌", text: "어떤 소식에 흐뭇했다" },
  { id: "delight", ctx: "연인의 몸가짐이 흐뭇함", text: "애인의 몸가짐이 흐뭇했다" },
  { id: "delight", ctx: "아름다운 경치를 보며 흐뭇함", text: "아름다운 경치를 보며 흐뭇했다" },
  { id: "demand", ctx: "베풀어 달라는 요구를 받음", text: "베풀어 달라는 요구를 받았다" },
  { id: "demand", ctx: "그 요구가 부당함", text: "그 요구가 터무니없이 부당했다" },
  { id: "demand", ctx: "연인이 모질게 요구함", text: "애인이 모질게 요구했다" },
  { id: "dentist", ctx: "치과의사가 내 이를 손봄", text: "치과의사가 나의 어금니를 손봤다" },
  { id: "dentist", ctx: "젊은 여성의 이를 손보는 것을 봄", text: "치과의사가 여자의 이를 손보는 것을 보았다" },
  { id: "derrick", ctx: "기중기를 봄", text: "기중기를 보았다" },
  { id: "desert", ctx: "어둡고 메마른 사막을 헤맴", text: "어둡고 메마른 사막을 헤맸다" },
  { id: "desert", ctx: "젊은 여성이 사막에 홀로 있음", text: "여자가 사막에 홀로 있었다" },
  { id: "desk", ctx: "책상을 씀", text: "책상 앞에 앉아 썼다" },
  { id: "desk", ctx: "책상 위에 놓인 돈을 봄", text: "책상 위에 놓인 지폐를 보았다" },
  { id: "despair", ctx: "제가 절망에 빠짐", text: "내가 절망에 빠졌다" },
  { id: "despair", ctx: "남이 절망에 빠진 것을 봄", text: "다른 사람이 절망에 빠진 것을 보았다" },
  { id: "detective", ctx: "죄가 없는데 형사가 뒤를 따라다님", text: "지은 잘못이 없는데 형사가 뒤를 따라다녔다" },
  { id: "detective", ctx: "스스로 죄가 있다고 느낌", text: "형사를 보자 마음이 켕겼다" },
  { id: "devotion", ctx: "농사짓는 이가 신앙을 드러냄", text: "농부가 신앙을 드러내는 꿈을 꾸었다" },
  { id: "devotion", ctx: "장사하는 이에게 신앙 꿈이 나타남", text: "장사하는 사람이 신앙 꿈을 꾸었다" },
  { id: "devotion", ctx: "젊은 여성이 정성껏 믿는 꿈을 꿈", text: "여자가 정성껏 믿는 꿈을 꾸었다" },
  { id: "devil", ctx: "농사짓는 이가 악마를 봄", text: "농부가 악마를 보았다" },
  { id: "devil", ctx: "악마가 화려하게 차려입고 제 집으로 꾀어들임", text: "악마가 보석을 두르고 차려입은 채 꾀어들였다" },
  { id: "devil", ctx: "악마에게 쫓김", text: "악마에게 쫓겼다" },
  { id: "dew", ctx: "이슬이 몸에 내림", text: "이슬이 몸에 내렸다" },
  { id: "dew", ctx: "햇빛에 반짝이는 풀 위의 이슬을 봄", text: "햇빛에 반짝이는 풀잎의 이슬을 보았다" },
  { id: "dew", ctx: "홀몸인 이에게 이슬 꿈이 나타남", text: "홀몸인 사람이 이슬 꿈을 꾸었다" },
  { id: "diadem", ctx: "금관을 봄", text: "금관을 보았다" },
  { id: "diamonds", ctx: "다이아몬드를 지님", text: "다이아몬드를 가지고 있었다" },
  { id: "diamonds", ctx: "연인이 다이아몬드를 건넴", text: "애인이 다이아몬드를 건넸다" },
  { id: "diamonds", ctx: "다이아몬드를 잃고 못 찾음", text: "다이아몬드를 잃어버리고 못찾았다" },
  { id: "diamonds", ctx: "셈에 밝은 이에게 다이아몬드 꿈이 나타남", text: "투기하는 사람이 다이아몬드 꿈을 꾸었다" },
  { id: "diamonds", ctx: "죽은 이의 몸에서 훔친 다이아몬드", text: "주검에서 다이아몬드를 훔쳤다" },
];

let notFound = 0;
let wrongCtx = 0;
for (const c of CASES) {
  const r = matchDream(c.text);
  const hit = r.matched.find((m) => m.id === c.id);
  if (!hit) {
    notFound += 1;
    console.log(`✗ 안 걸림  [${c.id}] "${c.text}" → ${r.matched.map((m) => m.id).join(",") || "(0개)"}`);
    continue;
  }
  const got = hit.meaning?.context ?? "(없음)";
  if (got !== c.ctx) {
    wrongCtx += 1;
    console.log(`△ 다른 뜻 [${c.id}] "${c.text}" → 「${got}」 (바란 것: 「${c.ctx}」)`);
  } else {
    console.log(`✓ [${c.id}] "${c.text}" → 「${got}」`);
  }
}
console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
