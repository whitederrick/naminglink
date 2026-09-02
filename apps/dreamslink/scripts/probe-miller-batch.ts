// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 41 — Golf~Gravy, 51건)
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
  { id: "golf", ctx: "골프를 치거나 구경함", text: "골프를 쳤다" },
  { id: "golf", ctx: "골프에서 언짢은 일을 봄", text: "골프를 치다 언짢은 일이 있었다" },
  { id: "gong", ctx: "징 소리를 들음", text: "징 소리를 들었다" },
  { id: "gooseberry", ctx: "구스베리를 땀", text: "구스베리를 땄다" },
  { id: "gooseberry", ctx: "덜 익은 구스베리를 먹음", text: "덜익은 구스베리를 먹었다" },
  { id: "gooseberry", ctx: "구스베리를 봄", text: "구스베리를 보았다" },
  { id: "gooseberry", ctx: "처녀가 구스베리를 먹음", text: "아가씨가 구스베리를 먹었다" },
  { id: "gossip", ctx: "남의 소문에 솔깃해함", text: "남의 소문에 솔깃했다" },
  { id: "gossip", ctx: "제가 소문거리가 됨", text: "내가 소문거리가 되었다" },
  { id: "gout", ctx: "통풍을 앓음", text: "통풍을 앓았다" },
  { id: "nightgown", ctx: "제가 잠옷을 입고 있음", text: "내가 잠옷을 입고 있었다" },
  { id: "nightgown", ctx: "남이 잠옷 차림인 것을 봄", text: "남이 잠옷 차림인 것을 보았다" },
  { id: "nightgown", ctx: "정인이 여인의 잠옷 차림을 봄", text: "정인이 여인의 잠옷 차림을 보았다" },
  { id: "grain", ctx: "오곡이 무성하게 자람", text: "오곡이 무성하게 자랐다" },
  { id: "grain", ctx: "곡식 꿈을 꿈", text: "곡식을 보았다" },
  { id: "grain", ctx: "처녀가 곡식 꿈을 꿈", text: "아가씨가 곡식을 보았다" },
  { id: "grammar", ctx: "문법을 익힘", text: "문법을 익히고 있었다" },
  { id: "gramophone", ctx: "축음기 소리를 들음", text: "축음기 소리를 들었다" },
  { id: "gramophone", ctx: "축음기가 망가져 있음", text: "축음기가 망가져 있었다" },
  { id: "grandparents", ctx: "조부모를 만나 이야기를 나눔", text: "조부모를 만나 이야기를 나누었다" },
  { id: "grape", ctx: "포도를 먹음", text: "포도를 먹었다" },
  { id: "grape", ctx: "잎 사이에 주렁주렁 달린 포도를 봄", text: "주렁주렁 달린 포도를 보았다" },
  { id: "grape", ctx: "처녀가 포도 꿈을 꿈", text: "아가씨가 포도를 보았다" },
  { id: "grape", ctx: "말을 타고 가다 포도를 따 먹음", text: "말을 타고 가다 포도를 따 먹었다" },
  { id: "grape", ctx: "먹는 포도에 독이 있을까 의심함", text: "먹던 포도에 독이 있을까 의심했다" },
  { id: "grass", ctx: "문 앞에 풀이 자람", text: "문앞에 풀이 자라 있었다" },
  { id: "grass", ctx: "푸른 풀밭을 봄", text: "푸른 풀밭을 보았다" },
  { id: "grass", ctx: "푸른 풀밭 너머 험한 산을 봄", text: "풀밭 너머 험한 산이 보였다" },
  { id: "grass", ctx: "푸른 풀밭을 지나다 시든 자리를 지남", text: "풀밭을 지나다 시든 자리를 밟았다" },
  { id: "grass", ctx: "시든 풀을 봄", text: "시든 풀을 보았다" },
  { id: "grasshopper", ctx: "푸른 남새 위의 메뚜기를 봄", text: "푸른 채소 위의 메뚜기를 보았다" },
  { id: "grasshopper", ctx: "시든 풀 위의 메뚜기를 봄", text: "시든 풀 위의 메뚜기를 보았다" },
  { id: "grasshopper", ctx: "해와 나 사이에 있는 메뚜기를 봄", text: "해와 나 사이에 메뚜기가 있었다" },
  { id: "grasshopper", ctx: "남에게 메뚜기를 가리켜 보임", text: "남에게 메뚜기를 가리켜 보였다" },
  { id: "grave", ctx: "무덤이 높이 솟아 있음", text: "무덤이 높이 솟아 있었다" },
  { id: "grave", ctx: "새로 판 무덤을 봄", text: "새로 판 무덤을 보았다" },
  { id: "grave", ctx: "새로 판 무덤을 찾아감", text: "새로 판 무덤을 찾아갔다" },
  { id: "grave", ctx: "무덤 위를 걸음", text: "무덤 위를 걸었다" },
  { id: "grave", ctx: "빈 무덤을 들여다봄", text: "빈 무덤을 들여다보았다" },
  { id: "grave", ctx: "머리만 내놓고 흙에 덮인 사람을 봄", text: "무덤에 머리만 내놓고 흙에 덮인 사람이 있었다" },
  { id: "grave", ctx: "자기 무덤을 봄", text: "자기 무덤을 보았다" },
  { id: "grave", ctx: "무덤을 팜", text: "무덤을 파고 있었다" },
  { id: "grave", ctx: "무덤을 파는데 해가 비침", text: "무덤을 파는데 햇빛이 비쳤다" },
  { id: "grave", ctx: "묻으려던 주검이 사라짐", text: "무덤에 묻으려던 주검이 사라졌다" },
  { id: "grave", ctx: "여성이 밤에 묘지에서 빈 무덤 말고는 누울 곳을 못 찾음", text: "여자가 밤이 되어 빈 무덤 말고는 잘곳을 못 찾았다" },
  { id: "grave", ctx: "무덤 위에만 풀이 있는 메마른 묘지를 봄", text: "무덤 위에만 풀이 있는 메마른 묘지를 보았다" },
  { id: "grave", ctx: "제 주검이 무덤에 있는 것을 봄", text: "무덤에 제 주검이 있었다" },
  { id: "gravel", ctx: "자갈을 봄", text: "자갈이 깔려 있었다" },
  { id: "gravel", ctx: "흙이 섞인 자갈을 봄", text: "흙이 섞인 자갈을 보았다" },
  { id: "broth", ctx: "고기 국물을 보는 꿈을 꿈", text: "곰탕을 보았다" },
  { id: "broth", ctx: "고기 국물을 먹음", text: "고기 국물을 먹었다" },
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
