// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 143 — October~Oilcloth, 24건 — 5판 묶음의 마지막 판)
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
  { id: "newspaper-reporter", ctx: "신문 기자를 마지못해 봄", text: "신문 기자를 마지못해 보았다" },
  { id: "newspaper-reporter", ctx: "제가 신문 기자임을 봄", text: "내가 신문 기자였다" },
  { id: "new-year", ctx: "새해를 봄", text: "새해를 맞이했다" },
  { id: "new-year", ctx: "지친 마음으로 새해를 생각함", text: "지친 마음으로 새해를 생각했다" },
  { id: "niece", ctx: "여성이 제 조카딸을 봄", text: "여자가 제 조카딸을 보았다" },
  { id: "dark", ctx: "밤에 둘러싸임", text: "밤에 둘러싸였다" },
  { id: "dark", ctx: "밤이 걷히는 것을 봄", text: "밤이 걷히는 것을 보았다" },
  { id: "nightmare", ctx: "악몽에 사로잡힘", text: "악몽에 사로잡혔다" },
  { id: "nightmare", ctx: "처녀가 악몽에 사로잡힘", text: "처녀가 악몽에 사로잡혔다" },
  { id: "nightingale", ctx: "나이팅게일의 고운 노래를 들음", text: "나이팅게일의 고운 노래를 들었다" },
  { id: "nightingale", ctx: "나이팅게일이 잠잠한 것을 봄", text: "나이팅게일이 잠잠한 것을 보았다" },
  { id: "ninepins", ctx: "구주희를 함", text: "구주희를 했다" },
  { id: "nobility", ctx: "귀족과 어울림", text: "귀족과 어울렸다" },
  { id: "nobility", ctx: "처녀가 귀족 꿈을 꿈", text: "처녀가 귀족 꿈을 꾸었다" },
  { id: "noise", ctx: "이상한 소음을 들음", text: "이상한 소음을 들었다" },
  { id: "noise", ctx: "소음에 잠을 깸", text: "소음에 잠에서 깨어났다" },
  { id: "noodles", ctx: "국수를 봄", text: "국수를 보았다" },
  { id: "nose", ctx: "제 코를 봄", text: "제 코를 보았다" },
  { id: "nose", ctx: "제 코가 원래보다 작아 보임", text: "코가 원래보다 작아 보였다" },
  { id: "nose", ctx: "코에 털이 남을 봄", text: "코에 털이 자랐다" },
  { id: "bleeding", ctx: "코피가 남", text: "코피가 났다" },
  { id: "notary", ctx: "공증인을 봄", text: "공증인을 보았다" },
  { id: "notary", ctx: "여성이 공증인과 어울림", text: "여자가 공증인과 어울렸다" },
  { id: "november", ctx: "11월 꿈을 꿈", text: "11월 꿈을 꾸었다" },
  { id: "ache", ctx: "몸에 저림이 스멀스멀 번짐", text: "몸에 저림이 스멀스멀 번졌다" },
  { id: "figure", ctx: "숫자 때문에 사업이 어수선함", text: "숫자 때문에 사업이 어수선해졌다" },
  // 지킴 — 이번 배치가 건드린 기존 상징의 옛 답이 그대로인가(§25 곁가지 · §30 곁가지)
  { id: "dark", ctx: "길을 가다 어둠이 덮침", text: "길을 가다가 어둠이 덮쳤다" },
  { id: "dark", ctx: "어둠 속에서 벗이나 아이를 잃음", text: "어둠 속에서 아이를 잃어버렸다" },
  { id: "ache", ctx: "몸에 통증이 있음", text: "온몸에 통증이 있었다" },
  { id: "figure", ctx: "숫자를 봄", text: "숫자를 보았다" },
  { id: "bleeding", ctx: "피를 흘리는 꿈을 꿈", text: "피를 흘리는 꿈을 꾸었다" },
  { id: "nuns", ctx: "신앙심 깊은 남성이 수녀 꿈을 꿈", text: "신앙심 깊은 남성이 수녀 꿈을 꾸었다" },
  { id: "nuns", ctx: "여성이 수녀 꿈을 꿈", text: "여자가 수녀 꿈을 꾸었다" },
  { id: "nuns", ctx: "여성이 제가 수녀임을 봄", text: "제가 수녀임을 문득 깨달았다" },
  { id: "nuns", ctx: "죽은 수녀를 봄", text: "죽은 수녀를 보았다" },
  { id: "nuns", ctx: "수녀가 수도복을 벗어 버림", text: "수녀가 수도복을 벗어 버렸다" },
  { id: "wedding", ctx: "여성이 제 혼례를 봄", text: "여자가 혼인하여 이름을 얻고 화목을 누리는 꿈을 꾸었다" },
  { id: "nurse", ctx: "집에 간호사를 둠", text: "집에 간호사를 두었다" },
  { id: "nurse", ctx: "간호사가 집을 나서는 것을 봄", text: "간호사가 집을 나서는 것을 보았다" },
  { id: "nurse", ctx: "처녀가 제가 간호사임을 봄", text: "처녀가 제가 간호사임을 알았다" },
  { id: "nurse", ctx: "간호사가 환자와 헤어짐", text: "간호사가 환자와 헤어졌다" },
  { id: "nursing", ctx: "여성이 제 아기에게 젖을 물림", text: "여자가 제 아기에게 젖을 물렸다" },
  { id: "nursing", ctx: "처녀가 아기에게 젖을 물림", text: "처녀가 아기에게 젖을 물렸다" },
  { id: "nursing", ctx: "남성이 아내가 아기에게 젖을 물리는 것을 봄", text: "남자가 아내가 아기에게 젖을 물리는 것을 보았다" },
  { id: "nuts", ctx: "견과를 주움", text: "견과를 주웠다" },
  { id: "nuts", ctx: "견과를 먹음", text: "견과를 먹었다" },
  { id: "nuts", ctx: "여성이 견과 꿈을 꿈", text: "여자가 견과 꿈을 꾸었다" },
  { id: "nutmegs", ctx: "육두구 꿈을 꿈", text: "육두구 꿈을 꾸었다" },
  { id: "nymph", ctx: "님프가 맑은 물에서 목욕하는 것을 봄", text: "님프가 맑은 물에서 목욕하는 것을 보았다" },
  { id: "nymph", ctx: "님프가 제 영역을 벗어나 있는 것을 봄", text: "님프가 제 영역을 벗어나 있었다" },
  { id: "nymph", ctx: "처녀가 님프가 목욕하는 것을 봄", text: "처녀가 님프가 목욕하는 것을 보았다" },
  { id: "nymph", ctx: "처녀가 제가 님프인 척함", text: "처녀가 제가 님프인 척했다" },
  { id: "oak", ctx: "참나무 숲을 봄", text: "참나무 숲을 보았다" },
  { id: "oak", ctx: "도토리가 가득한 참나무를 봄", text: "도토리가 가득한 참나무를 보았다" },
  { id: "oak", ctx: "벼락 맞은 참나무를 봄", text: "벼락 맞은 참나무를 보았다" },
  { id: "oak", ctx: "연인들이 참나무 꿈을 꿈", text: "연인들이 참나무 꿈을 꾸었다" },
  { id: "oar", ctx: "노를 저음", text: "노를 저었다" },
  { id: "oar", ctx: "노를 잃어버림", text: "노를 잃어버렸다" },
  { id: "oar", ctx: "노가 부러짐", text: "노가 부러졌다" },
  { id: "oath", ctx: "맹세를 함", text: "맹세를 했다" },
  { id: "oatmeal", ctx: "오트밀을 먹음", text: "오트밀을 먹었다" },
  { id: "oatmeal", ctx: "처녀가 오트밀을 상에 차림", text: "처녀가 오트밀을 상에 차렸다" },
  { id: "oats", ctx: "귀리가 눈에 가득함", text: "귀리가 눈에 가득했다" },
  { id: "oats", ctx: "썩은 귀리를 봄", text: "썩은 귀리를 보았다" },
  { id: "obedience", ctx: "남에게 순종함", text: "남에게 순종했다" },
  { id: "obedience", ctx: "남들이 나에게 순종함", text: "남들이 나에게 순종했다" },
  { id: "obelisk", ctx: "오벨리스크가 위엄 있고 차갑게 솟아 있음을 봄", text: "오벨리스크가 위엄 있고 차갑게 솟아 있었다" },
  { id: "obelisk", ctx: "연인들이 오벨리스크 밑에 섬", text: "연인들이 오벨리스크 밑에 섰다" },
  { id: "obituary", ctx: "부고를 씀", text: "부고를 썼다" },
  { id: "obituary", ctx: "부고를 읽음", text: "부고를 읽었다" },
  { id: "obligation", ctx: "스스로 책무를 짐", text: "스스로 책무를 졌다" },
  { id: "obligation", ctx: "남들이 나에게 책무를 짐", text: "남들이 나에게 책무를 졌다" },
  { id: "observatory", ctx: "천문대에서 하늘을 봄", text: "천문대에서 하늘을 보았다" },
  { id: "observatory", ctx: "처녀가 천문대에서 하늘을 봄", text: "처녀가 천문대에서 하늘을 보았다" },
  { id: "observatory", ctx: "천문대에서 본 하늘이 흐림", text: "천문대에서 본 하늘이 흐렸다" },
  { id: "occultist", ctx: "신비주의자의 가르침을 들음", text: "신비주의자의 가르침을 들었다" },
  { id: "occultist", ctx: "신비주의자의 견해를 받아들임", text: "신비주의자의 견해를 받아들였다" },
  { id: "sea", ctx: "바다가 잔잔함", text: "바다가 잔잔했다" },
  { id: "sea", ctx: "먼바다에서 파도가 배를 침", text: "먼바다에서 파도가 배를 쳤다" },
  { id: "sea", ctx: "물가에서 파도가 부서지는 것을 봄", text: "물가에서 파도가 부서지는 것을 보았다" },
  { id: "sea", ctx: "바다가 얕아 걸어 들어갈 만함을 봄", text: "바다가 얕아 걸어 들어갈 만했다" },
  // 지킴 — 이번 배치가 건드린 기존 상징의 옛 답이 그대로인가
  { id: "sea", ctx: "강과 바다가 넘쳐 불어남", text: "강과 바다가 넘쳐 불어났다" },
  { id: "october", ctx: "10월이라고 상상함", text: "10월이라고 상상했다" },
  { id: "oculist", ctx: "안과의사와 상담함", text: "안과의사와 상담했다" },
  { id: "odd-fellow", ctx: "우애조합을 봄", text: "우애조합을 보았다" },
  { id: "odd-fellow", ctx: "우애조합에 가입함", text: "우애조합에 가입했다" },
  { id: "odor", ctx: "달콤한 냄새를 맡음", text: "달콤한 냄새를 맡았다" },
  { id: "odor", ctx: "역겨운 냄새를 맡음", text: "역겨운 냄새를 맡았다" },
  { id: "humiliation", ctx: "모욕당했다고 느낌", text: "제 행실의 잘못이 드러나 속으로 분노하며 모욕당했다" },
  { id: "humiliation", ctx: "남에게 모욕을 줌", text: "남에게 모욕을 주었다" },
  { id: "humiliation", ctx: "처녀가 모욕을 주거나 받음", text: "처녀가 모욕을 주거나 받았다" },
  { id: "offering", ctx: "제물을 바침", text: "제물을 바쳤다" },
  { id: "official-post", ctx: "관직을 지님", text: "관직을 지녔다" },
  { id: "official-post", ctx: "바라던 관직을 얻지 못함", text: "바라던 관직을 얻지 못했다" },
  { id: "official-post", ctx: "관직에서 쫓겨남", text: "관직에서 쫓겨났다" },
  { id: "child", ctx: "제 자식을 봄", text: "제 자식을 보았다" },
  { id: "brood", ctx: "집짐승의 새끼를 봄", text: "집짐승의 새끼를 보았다" },
  { id: "oil", ctx: "기름을 바르는 의식을 치름", text: "기름을 바르는 의식을 치렀다" },
  { id: "oil", ctx: "기름이 많이 있는 것을 봄", text: "기름이 많이 있는 것을 보았다" },
  { id: "oil", ctx: "남성이 기름 장사를 함", text: "남자가 기름 장사를 했다" },
  { id: "oil", ctx: "여성이 기름을 바름", text: "여자가 기름을 발랐다" },
  { id: "oilcloth", ctx: "방수포를 봄", text: "방수포를 보았다" },
  { id: "oilcloth", ctx: "방수포 장사를 함", text: "방수포 장사를 했다" },
  // 지킴 — 이번 배치가 건드린 기존 상징의 옛 답이 그대로인가
  { id: "humiliation", ctx: "모욕당하는 꿈을 꿈", text: "모욕당하는 꿈을 꾸었다" },
  { id: "official-post", ctx: "새로 벼슬을 받음", text: "새로 벼슬을 받았다" },
  { id: "child", ctx: "아름다운 아이들을 여럿 봄", text: "아름다운 아이들을 여럿 보았다" },
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
