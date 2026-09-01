// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 13 — `Cats`~`Chalice`, 67건)
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
  { id: "cat", ctx: "고양이를 봄", text: "고양이가 가만히 있었다" },
  { id: "cat", ctx: "고양이가 덤벼듦", text: "고양이가 나에게 덤벼들었다" },
  { id: "cat", ctx: "고양이를 쫓아냄", text: "고양이를 쫓아냈다" },
  { id: "cat", ctx: "여위고 지저분한 고양이를 만남", text: "여위고 지저분한 고양이를 만났다" },
  { id: "cat", ctx: "고양이 울음소리를 들음", text: "고양이 울음소리를 들었다" },
  { id: "cat", ctx: "고양이가 할큄", text: "고양이가 나를 할퀴었다" },
  { id: "cat", ctx: "고양이를 품에 안고 있음", text: "고양이를 품에 안고 있었다" },
  { id: "cat", ctx: "깨끗한 흰 고양이를 봄", text: "하얀 고양이를 보았다" },
  { id: "cat", ctx: "장사하는 사람이 고양이 꿈을 꿈", text: "가게 하는 사람이 고양이를 보았다" },
  { id: "cat", ctx: "고양이와 뱀이 사이좋게 있는 것을 봄", text: "고양이와 뱀이 사이좋게 있었다" },
  { id: "cat", ctx: "고양이가 쥐를 잡음", text: "고양이가 쥐를 잡았다" },
  { id: "catechism", ctx: "교리문답을 봄", text: "교리문답을 보았다" },
  { id: "caterpillar", ctx: "애벌레를 봄", text: "애벌레를 보았다" },
  { id: "cattle", ctx: "살진 소떼가 푸른 목장에서 한가로이 풀을 뜯음", text: "살진 소떼가 푸른 목장에서 풀을 뜯고 있었다" },
  { id: "cattle", ctx: "여위고 털이 헝클어진 소떼를 봄", text: "여위고 털이 헝클어진 소떼를 보았다" },
  { id: "cattle", ctx: "소떼가 우르르 내달림", text: "소떼가 우르르 내달렸다" },
  { id: "cattle", ctx: "젖 짜는 때의 소떼를 봄", text: "젖을 짜는 소떼를 보았다" },
  { id: "cattle", ctx: "젖이 그득한 소의 젖을 짬", text: "젖이 그득한 소들의 젖을 짰다" },
  { id: "cattle", ctx: "송아지가 젖을 먼저 빨아 먹음", text: "소들의 젖을 송아지가 먼저 빨아 먹었다" },
  { id: "cattle", ctx: "뿔이 길고 검은 사나운 소떼를 봄", text: "뿔이 길고 검은 사나운 소떼를 보았다" },
  { id: "calf", ctx: "어린 송아지들을 봄", text: "어린 송아지 여러 마리를 보았다" },
  { id: "calf", ctx: "여윈 송아지들을 봄", text: "여윈 송아지들을 보았다" },
  { id: "cathedral", ctx: "돔이 높이 솟은 커다란 대성당을 봄", text: "돔이 솟은 거대한 대성당을 보았다" },
  { id: "cathedral", ctx: "대성당 안으로 들어감", text: "대성당 안으로 들어갔다" },
  { id: "cauliflower", ctx: "콜리플라워를 먹음", text: "콜리플라워를 먹었다" },
  { id: "cauliflower", ctx: "콜리플라워가 자라는 것을 봄", text: "콜리플라워가 자라는 것을 보았다" },
  { id: "cauliflower", ctx: "밭에 있는 콜리플라워를 봄", text: "텃밭에 있는 콜리플라워를 보았다" },
  { id: "cavalry", ctx: "기병대를 봄", text: "기병대를 보았다" },
  { id: "cave", ctx: "달빛 속에 입을 벌린 동굴을 봄", text: "달빛 속에 입을 벌린 동굴을 보았다" },
  { id: "cave", ctx: "동굴 안에 있음", text: "동굴 안에 들어가 있었다" },
  { id: "cave", ctx: "연인과 함께 동굴을 걸음", text: "애인과 함께 동굴을 걸었다" },
  { id: "cedar", ctx: "푸르고 잘 자란 삼나무를 봄", text: "푸르고 무성한 삼나무를 보았다" },
  { id: "cedar", ctx: "죽거나 시든 삼나무를 봄", text: "시든 삼나무를 보았다" },
  { id: "celestial-signs", ctx: "하늘의 징조를 봄", text: "하늘의 징조를 보았다" },
  { id: "celery", ctx: "싱싱한 셀러리 줄기를 봄", text: "싱싱한 셀러리 줄기를 보았다" },
  { id: "celery", ctx: "썩어 가는 셀러리를 봄", text: "썩어 가는 셀러리를 보았다" },
  { id: "celery", ctx: "셀러리를 먹음", text: "셀러리를 먹었다" },
  { id: "celery", ctx: "연인과 함께 셀러리를 먹음", text: "애인과 함께 셀러리를 먹었다" },
  { id: "cellar", ctx: "춥고 축축한 저장고에 있음", text: "춥고 축축한 지하 저장고에 있었다" },
  { id: "cellar", ctx: "술과 먹을 것이 쌓인 저장고를 봄", text: "포도주가 쌓인 지하 저장고를 보았다" },
  { id: "cellar", ctx: "젊은 여성이 그 저장고 꿈을 꿈", text: "여자가 지하 저장고 꿈을 꾸었다" },
  { id: "cemetery", ctx: "아름답고 잘 손질된 묘지에 있음", text: "아름답게 손질된 묘지에 있었다" },
  { id: "cemetery", ctx: "가시덤불에 덮여 잊힌 오래된 묘지를 봄", text: "가시덤불에 덮인 오래된 묘지를 보았다" },
  { id: "cemetery", ctx: "젊은이가 묘지 사이를 거닒", text: "젊은이가 묘지 사이를 거닐었다" },
  { id: "cemetery", ctx: "신부가 혼례길에 묘지를 지나감", text: "신부가 혼례길에 묘지를 지나갔다" },
  { id: "cemetery", ctx: "어머니가 묘지에 생화를 가져감", text: "어머니가 묘지에 생화를 가져갔다" },
  { id: "cemetery", ctx: "젊은 과부가 묘지를 찾아감", text: "젊은 과부가 묘지를 찾아갔다" },
  { id: "cemetery", ctx: "노인이 묘지 꿈을 꿈", text: "노인이 묘지 꿈을 꾸었다" },
  { id: "cemetery", ctx: "무덤 사이에서 아이들이 꽃을 꺾고 나비를 쫓음", text: "묘지에서 아이들이 나비를 쫓고 있었다" },
  { id: "chaff", ctx: "쭉정이를 봄", text: "쭉정이가 흩어진 것을 보았다" },
  { id: "chaff", ctx: "쭉정이가 무더기로 쌓인 것을 봄", text: "쭉정이가 무더기로 쌓여 있었다" },
  { id: "chains", ctx: "사슬에 묶임", text: "내가 사슬에 묶여 있었다" },
  { id: "chains", ctx: "사슬을 끊어 냄", text: "사슬을 끊었다" },
  { id: "chains", ctx: "사슬을 봄", text: "사슬이 놓여 있었다" },
  { id: "chains", ctx: "남이 사슬에 묶인 것을 봄", text: "남이 사슬에 묶인 것을 보았다" },
  { id: "chair", ctx: "의자를 봄", text: "의자가 하나 놓여 있었다" },
  { id: "chair", ctx: "벗이 의자에 꼼짝 않고 앉아 있음", text: "친구가 의자에 꼼짝 않고 앉아 있었다" },
  { id: "chair-maker", ctx: "의자장이를 봄", text: "의자 만드는 사람을 보았다" },
  { id: "chairman", ctx: "의장을 봄", text: "의장을 보았다" },
  { id: "chairman", ctx: "의장이 언짢은 낯빛임", text: "의장이 언짢은 낯빛이었다" },
  { id: "chairman", ctx: "내가 의장임", text: "내가 의장이었다" },
  { id: "chalk", ctx: "얼굴에 분칠을 함", text: "얼굴에 분칠을 했다" },
  { id: "chalk", ctx: "칠판에 분필로 글씨를 씀", text: "칠판에 분필로 썼다" },
  { id: "chalk", ctx: "판에 분필로 글씨를 씀", text: "분필로 글씨를 적었다" },
  { id: "chalk", ctx: "분필을 한 움큼 쥠", text: "분필을 한 움큼 쥐고 있었다" },
  { id: "chalice", ctx: "성배를 봄", text: "성배를 보았다" },
  { id: "chalice", ctx: "성배를 깨뜨림", text: "성배를 깨뜨렸다" },
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
