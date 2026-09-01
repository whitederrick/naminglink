// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 16 — Circle~Club, 50건)
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
  { id: "circle", ctx: "동그라미를 봄", text: "동그라미가 그려져 있었다" },
  { id: "circle", ctx: "젊은 여성이 동그라미를 봄", text: "여자가 동그라미를 보았다" },
  { id: "cistern", ctx: "저수조를 봄", text: "커다란 저수조가 놓여 있었다" },
  { id: "cistern", ctx: "저수조에서 물을 길음", text: "저수조에서 물을 길었다" },
  { id: "cistern", ctx: "저수조가 비어 있음", text: "저수조가 비어 있었다" },
  { id: "city", ctx: "낯선 도시에 있음", text: "낯선 도시에 있었다" },
  { id: "city-council", ctx: "시의회를 봄", text: "시의회를 보았다" },
  { id: "city-hall", ctx: "시청을 봄", text: "커다란 시청을 보았다" },
  { id: "city-hall", ctx: "젊은 여성이 시청을 봄", text: "여자가 시청을 보았다" },
  { id: "clam", ctx: "조개 꿈을 꿈", text: "조개가 문득 나왔다" },
  { id: "clam", ctx: "조개를 먹음", text: "조개를 먹었다" },
  { id: "clam", ctx: "연인과 구운 조개를 먹음", text: "애인과 구운 조개를 먹었다" },
  { id: "clay", ctx: "찰흙을 봄", text: "찰흙 덩이가 놓여 있었다" },
  { id: "clay", ctx: "찰흙 둔덕을 팜", text: "찰흙 둔덕을 파고 있었다" },
  { id: "clay", ctx: "잿더미를 파다 찰흙을 찾음", text: "잿더미를 파다 찰흙이 나왔다" },
  { id: "clay", ctx: "여성이 찰흙 꿈을 꿈", text: "여자가 찰흙 꿈을 꾸었다" },
  { id: "claret", ctx: "적포도주를 마심", text: "적포도주를 마셨다" },
  { id: "claret", ctx: "깨진 적포도주 병을 봄", text: "깨진 적포도주 병을 보았다" },
  { id: "claret-cup-and-punch", ctx: "펀치술을 봄", text: "펀치술을 보았다" },
  { id: "clarionet", ctx: "클라리넷을 봄", text: "클라리넷을 불고 있었다" },
  { id: "clarionet", ctx: "클라리넷이 부서짐", text: "클라리넷이 부서졌다" },
  { id: "clairvoyance", ctx: "투시력으로 제 앞날을 봄", text: "투시력으로 내 앞날을 보았다" },
  { id: "clairvoyance", ctx: "점치는 이를 찾아감", text: "투시하는 이를 찾아갔다" },
  { id: "clergyman", ctx: "장례 설교를 하려고 목사를 부름", text: "장례 설교를 하려고 목사를 불렀다" },
  { id: "clergyman", ctx: "목사와 혼인함", text: "목사와 혼인했다" },
  { id: "climbing", ctx: "언덕이나 산을 올라 꼭대기에 이름", text: "산을 기어올라 정상에 다다랐다" },
  { id: "climbing", ctx: "꼭대기에 이르지 못함", text: "산을 기어올라 갔으나 꼭대기에 이르지 못했다" },
  { id: "climbing", ctx: "사다리 맨 위까지 오름", text: "사다리를 끝까지 기어올랐다" },
  { id: "climbing", ctx: "오르던 사다리가 부러짐", text: "기어오르던 사다리가 부러졌다" },
  { id: "climbing", ctx: "집 벽을 타고 올라 창이 열려 들어감", text: "집 벽을 기어올라 창으로 들어갔다" },
  { id: "clock", ctx: "시계를 봄", text: "시계가 걸려 있었다" },
  { id: "clock", ctx: "시계가 치는 소리를 들음", text: "시계가 울리는 소리를 들었다" },
  { id: "abbey", ctx: "수도원 회랑을 봄", text: "수도원 회랑을 보았다" },
  { id: "abbey", ctx: "젊은 여성이 수도원 회랑을 봄", text: "여자가 수도원 회랑을 보았다" },
  { id: "clothing", ctx: "더럽고 찢어진 옷을 봄", text: "더럽고 헤진 옷을 보았다" },
  { id: "clothing", ctx: "여성의 옷이 더럽거나 찢어짐", text: "여자의 옷이 헤져 있었다" },
  { id: "clothing", ctx: "깨끗한 새 옷을 봄", text: "깨끗한 옷을 보았다" },
  { id: "clothing", ctx: "옷을 잔뜩 가지고 있음", text: "옷을 잔뜩 가지고 있었다" },
  { id: "cloud", ctx: "어둡고 무거운 구름을 봄", text: "무거운 구름이 짙게 깔려 있었다" },
  { id: "cloud", ctx: "구름에서 비가 내림", text: "구름에서 비가 내리고 있었다" },
  { id: "cloud", ctx: "해가 비쳐 드는 맑은 구름을 봄", text: "구름 사이로 빛이 비쳐 들었다" },
  { id: "cloud", ctx: "별이 빛나는 구름을 봄", text: "구름 사이로 별이 반짝였다" },
  { id: "clover", ctx: "향긋한 클로버 밭을 걸음", text: "향긋한 클로버 밭을 걸었다" },
  { id: "clover", ctx: "농사짓는 이나 젊은이가 클로버를 봄", text: "농부가 클로버를 보았다" },
  { id: "clover", ctx: "말라 죽은 클로버 밭을 봄", text: "말라 죽은 클로버 밭을 보았다" },
  { id: "clover", ctx: "클로버 꿈을 꿈", text: "클로버가 문득 눈에 들어왔다" },
  { id: "clover", ctx: "꽃 핀 클로버 사이로 뱀이 기어가는 것을 봄", text: "클로버 사이로 뱀이 기어가고 있었다" },
  { id: "cloven-foot", ctx: "갈라진 발굽을 봄", text: "갈라진 발굽을 보았다" },
  { id: "club", ctx: "몽둥이를 든 사람이 다가옴", text: "몽둥이를 들고 누가 다가왔다" },
  { id: "club", ctx: "남을 몽둥이로 침", text: "남을 몽둥이로 때렸다" },
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
