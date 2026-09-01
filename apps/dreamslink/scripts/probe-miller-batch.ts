// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 23 — Crucifixion~Cut, 42건)
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
  { id: "crucifixion", ctx: "십자가형 꿈을 꿈", text: "십자가형 꿈을 꾸었다" },
  { id: "crucifix", ctx: "십자고상을 봄", text: "십자고상이 벽에 걸린 것을 보았다" },
  { id: "crucifix", ctx: "십자고상에 입을 맞춤", text: "십자고상에 입을 맞췄다" },
  { id: "crucifix", ctx: "젊은 여성이 십자고상을 지님", text: "여자가 십자고상을 지니고 있었다" },
  { id: "cruelty", ctx: "남이 내게 모질게 굶", text: "누군가 내게 모질게 굴었다" },
  { id: "cruelty", ctx: "내가 남에게 모질게 굶", text: "내가 남에게 모질게 굴었다" },
  { id: "crust", ctx: "빵껍질을 봄", text: "딱딱한 빵껍질을 보았다" },
  { id: "crutches", ctx: "목발을 짚고 다님", text: "내가 목발을 짚고 다녔다" },
  { id: "crutches", ctx: "남이 목발을 짚은 것을 봄", text: "남이 목발을 짚은 것을 보았다" },
  { id: "weeping", ctx: "우는 꿈을 꿈", text: "헛된 즐거움이 잦아들며 우는 꿈을 꾸었다" },
  { id: "weeping", ctx: "남이 우는 것을 봄", text: "다른 사람이 우는 것을 보았다" },
  { id: "crystal", ctx: "수정을 봄", text: "투명한 수정이 놓인 것을 보았다" },
  { id: "crystal", ctx: "여성이 수정으로 꾸민 식당을 봄", text: "여자가 수정으로 꾸민 식당을 보았다" },
  { id: "cuckoo", ctx: "뻐꾸기를 봄", text: "뻐꾸기가 나뭇가지에 앉아 있었다" },
  { id: "cuckoo", ctx: "뻐꾸기 소리를 들음", text: "뻐꾸기 소리를 들었다" },
  { id: "melon", ctx: "오이 꿈을 꿈", text: "오이가 넉넉하게 있어 건강해 보였다" },
  { id: "melon", ctx: "앓는 이가 오이를 상에 냄", text: "병든 사람이 오이를 상에 차려 냈다" },
  { id: "melon", ctx: "혼인한 이에게 오이 꿈이 나타남", text: "결혼한 부부가 오이 꿈을 꾸었다" },
  { id: "cunning", ctx: "제가 꾀를 부림", text: "내가 스스로 꾀를 부렸다" },
  { id: "cunning", ctx: "꾀 많은 이들과 어울림", text: "꾀 많은 무리와 함께 어울렸다" },
  { id: "cupboard", ctx: "깨끗하고 그릇이 그득한 찬장을 봄", text: "깨끗하고 그릇이 그득한 찬장을 보았다" },
  { id: "cupboard", ctx: "비고 더러운 찬장을 봄", text: "비어 있고 더러운 찬장을 보았다" },
  { id: "curbstone", ctx: "길턱을 밟고 올라섬", text: "길턱을 밟고 올라섰다" },
  { id: "curbstone", ctx: "연인이 함께 길턱을 밟음", text: "애인과 함께 길턱을 밟았다" },
  { id: "curbstone", ctx: "길턱에서 헛디디거나 떨어짐", text: "길턱에서 헛디디어 떨어졌다" },
  { id: "currycomb", ctx: "말빗을 봄", text: "말빗을 보았다" },
  { id: "currying-a-horse", ctx: "말빗질을 함", text: "말빗질을 하고 있었다" },
  { id: "currying-a-horse", ctx: "말빗질을 잘 끝냄", text: "말빗질을 잘 끝냈다" },
  { id: "curtain", ctx: "커튼을 봄", text: "반갑지 않은 손님이 찾아와 커튼을 보았다" },
  { id: "curtain", ctx: "더럽거나 찢어진 커튼을 봄", text: "더럽고 해진 커튼을 보았다" },
  { id: "cushion", ctx: "비단 방석에 기대어 누움", text: "비단 방석에 기대어 누웠다" },
  { id: "cushion", ctx: "방석을 봄", text: "방석이 깔린 것을 보았다" },
  { id: "cushion", ctx: "젊은 여성이 비단 방석을 만듦", text: "여자가 비단 방석을 바느질로 만들었다" },
  { id: "cuspidor", ctx: "타구를 봄", text: "타구가 놓여 있었다" },
  { id: "cuspidor", ctx: "타구에 침을 뱉음", text: "타구에 침을 뱉었다" },
  { id: "custard", ctx: "혼인한 여성이 커스터드를 만들거나 먹음", text: "결혼한 부인이 커스터드를 만들었다" },
  { id: "custard", ctx: "젊은 여성에게 커스터드 꿈이 나타남", text: "처녀가 커스터드 꿈을 꾸었다" },
  { id: "custard", ctx: "커스터드가 느끼하거나 밍밍함", text: "커스터드가 느끼하고 밍밍했다" },
  { id: "custom-house", ctx: "세관을 봄", text: "세관 건물을 보았다" },
  { id: "custom-house", ctx: "세관에 들어감", text: "세관 안으로 들어갔다" },
  { id: "custom-house", ctx: "세관에서 나옴", text: "세관에서 나왔다" },
  { id: "cut", ctx: "베인 상처를 봄", text: "칼에 베인 상처를 보았다" },
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
