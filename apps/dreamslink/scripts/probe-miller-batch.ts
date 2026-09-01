// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 15 — Chickens~Cipher, 55건)
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
  { id: "chicken", ctx: "병아리 떼를 봄", text: "병아리 떼를 보았다" },
  { id: "chicken", ctx: "덜 자란 닭을 봄", text: "덜 자란 어린 닭을 보았다" },
  { id: "chicken", ctx: "닭들이 홰에 오르는 것을 봄", text: "닭들이 홰에 오르고 있었다" },
  { id: "chicken", ctx: "닭을 잡아먹음", text: "닭을 잡아먹었다" },
  { id: "chiffonier", ctx: "서랍장을 뒤짐", text: "서랍장을 뒤졌다" },
  { id: "chiffonier", ctx: "잘 정돈된 서랍장을 봄", text: "가지런히 정돈된 서랍장을 보았다" },
  { id: "chilblain", ctx: "손발 동상을 앓음", text: "손발 동상에 걸렸다" },
  { id: "childbed", ctx: "아이를 낳음", text: "해산 자리에서 아이를 낳았다" },
  { id: "childbed", ctx: "혼인하지 않은 여성이 해산 자리에 있음", text: "미혼 여성이 해산 자리에 있었다" },
  { id: "child", ctx: "아름다운 아이들을 여럿 봄", text: "예쁜 아이들이 여럿 있었다" },
  { id: "child", ctx: "어머니가 가볍게 앓는 아이를 봄", text: "어머니가 가볍게 앓는 아이를 보았다" },
  { id: "child", ctx: "아이들이 일하거나 공부하는 것을 봄", text: "아이들이 공부하는 것을 보았다" },
  { id: "child", ctx: "제 아이가 몹시 앓거나 죽은 것을 봄", text: "내 아이가 몹시 앓고 있었다" },
  { id: "child", ctx: "이미 죽은 제 아이를 봄", text: "이미 죽은 아이를 꿈에서 보았다" },
  { id: "child", ctx: "풀 죽은 아이들을 봄", text: "시무룩한 아이들을 보았다" },
  { id: "child", ctx: "아이들과 뛰놀며 놂", text: "아이들과 뛰놀았다" },
  { id: "chimes", ctx: "성탄 종소리를 들음", text: "성탄 종소리를 들었다" },
  { id: "chimes", ctx: "여느 종소리를 들음", text: "여느 차임벨 소리를 들었다" },
  { id: "chimney", ctx: "굴뚝을 봄", text: "굴뚝이 우뚝 서 있었다" },
  { id: "chimney", ctx: "무너져 내린 굴뚝을 봄", text: "무너져 내린 굴뚝을 보았다" },
  { id: "chimney", ctx: "담쟁이덩굴에 덮인 굴뚝을 봄", text: "담쟁이덩굴에 덮인 굴뚝을 보았다" },
  { id: "chimney", ctx: "굴뚝에 불이 타는 것을 봄", text: "굴뚝에 불이 타고 있었다" },
  { id: "chimney", ctx: "굴뚝 옆 구석에 숨음", text: "굴뚝 구석에 숨었다" },
  { id: "chimney", ctx: "굴뚝을 타고 내려감", text: "굴뚝을 타고 내려갔다" },
  { id: "chimney", ctx: "굴뚝을 타고 올라감", text: "굴뚝을 타고 올라갔다" },
  { id: "china", ctx: "도자기를 칠하거나 매만짐", text: "도자기를 매만지고 있었다" },
  { id: "china-store", ctx: "도자기 가게가 텅 빈 것을 봄", text: "도자기 가게가 텅 비어 있었다" },
  { id: "chocolate", ctx: "초콜릿을 봄", text: "초콜릿이 놓여 있었다" },
  { id: "chocolate", ctx: "초콜릿 사탕을 봄", text: "초콜릿 사탕을 보았다" },
  { id: "chocolate", ctx: "신맛이 나는 초콜릿을 봄", text: "시큼한 초콜릿을 보았다" },
  { id: "chocolate", ctx: "초콜릿을 마심", text: "초콜릿을 마셨다" },
  { id: "choir", ctx: "성가대를 봄", text: "성가대가 늘어서 있었다" },
  { id: "choir", ctx: "성가대에서 노래함", text: "성가대에서 노래했다" },
  { id: "cholera", ctx: "콜레라가 나라를 휩쓺", text: "콜레라가 온 나라에 번졌다" },
  { id: "cholera", ctx: "콜레라에 걸림", text: "콜레라에 걸렸다" },
  { id: "christ", ctx: "동방박사들이 경배하는 아기 그리스도를 봄", text: "동방박사들이 아기 그리스도를 경배하고 있었다" },
  { id: "christ", ctx: "겟세마네 동산의 그리스도를 봄", text: "겟세마네 동산의 그리스도를 보았다" },
  { id: "christ", ctx: "성전에서 장사치를 내쫓는 그리스도를 봄", text: "성전에서 장사치를 내쫓는 그리스도를 보았다" },
  { id: "christmas-tree", ctx: "크리스마스 트리를 봄", text: "크리스마스 트리가 반짝이고 있었다" },
  { id: "christmas-tree", ctx: "장식을 걷어 낸 트리를 봄", text: "장식을 걷어 낸 크리스마스 트리를 보았다" },
  { id: "chrysanthemum", ctx: "흰 국화를 꺾음", text: "흰 국화를 꺾었다" },
  { id: "chrysanthemum", ctx: "빛깔 있는 국화를 봄", text: "노란 국화를 보았다" },
  { id: "chrysanthemum", ctx: "국화 다발을 봄", text: "국화 다발을 보았다" },
  { id: "chrysanthemum", ctx: "흰 국화가 늘어선 길을 지나감", text: "국화가 늘어선 길을 지나갔다" },
  { id: "church", ctx: "멀리 있는 교회를 봄", text: "멀리서 교회를 보았다" },
  { id: "church", ctx: "어둠에 잠긴 교회에 들어감", text: "어두운 교회에 들어갔다" },
  { id: "churchyard", ctx: "겨울에 교회 묘지를 걸음", text: "겨울에 교회 묘지를 걸었다" },
  { id: "churchyard", ctx: "봄기운이 도는 교회 묘지를 걸음", text: "봄기운이 도는 교회 묘지를 걸었다" },
  { id: "churchyard", ctx: "연인이 교회 묘지에 있음", text: "애인과 교회 묘지에 있었다" },
  { id: "churning", ctx: "버터를 저음", text: "버터를 저었다" },
  { id: "churning", ctx: "농사짓는 이가 버터를 저음", text: "농부가 버터를 저었다" },
  { id: "churning", ctx: "젊은 여성이 버터를 저음", text: "여자가 버터를 저었다" },
  { id: "cider", ctx: "사과술을 봄", text: "사과술이 잔에 놓여 있었다" },
  { id: "cider", ctx: "남들이 사과술을 마시는 것을 봄", text: "사람들이 사과술을 마시고 있었다" },
  { id: "cipher", ctx: "암호를 읽음", text: "암호를 읽었다" },
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
