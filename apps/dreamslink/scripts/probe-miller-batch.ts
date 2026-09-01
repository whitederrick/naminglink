// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 19 — Confectionary~Coppersmith, 35건)
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
  { id: "confectionary", ctx: "상한 과자를 봄", text: "상한 과자를 보았다" },
  { id: "confetti", ctx: "색종이 조각이 앞을 가림", text: "색종이 조각이 앞을 가렸다" },
  { id: "conjurer", ctx: "요술쟁이를 봄", text: "요술쟁이를 보았다" },
  { id: "conjuring", ctx: "최면에 걸려 남의 힘 아래 있음", text: "최면에 걸려 남의 힘 아래에 있었다" },
  { id: "conjuring", ctx: "남을 최면에 걸어 둠", text: "내가 남을 최면에 걸어 두었다" },
  { id: "conjuring", ctx: "젊은 여성이 이상한 힘에 눌림", text: "여자가 최면으로 이상한 힘에 눌렸다" },
  { id: "conjuring", ctx: "최면술과 요술 공연을 봄", text: "최면 공연을 무대에서 보았다" },
  { id: "conflagration", ctx: "큰불을 봄", text: "큰불을 보았다" },
  { id: "conspiracy", ctx: "음모의 표적이 됨", text: "음모의 표적이 되었다" },
  { id: "conscience", ctx: "양심이 나를 나무람", text: "양심이 나를 나무랐다" },
  { id: "conscience", ctx: "양심이 편안함", text: "양심이 편안했다" },
  { id: "consumption", ctx: "폐병에 걸림", text: "폐병에 걸렸다" },
  { id: "contempt", ctx: "법정 모독을 저지름", text: "법정에서 멸시를 저질렀다" },
  { id: "contempt", ctx: "남에게 멸시받음", text: "남에게 멸시를 받았다" },
  { id: "contempt", ctx: "멸시받을 만함", text: "그 멸시는 마땅한 것이었다" },
  { id: "convent", ctx: "수녀원에 몸을 의탁함", text: "수녀원에 몸을 의탁했다" },
  { id: "convent", ctx: "수녀원에서 신부를 만남", text: "수녀원에서 신부를 만났다" },
  { id: "convent", ctx: "젊은 여성이 수녀원을 봄", text: "여자가 수녀원을 보았다" },
  { id: "convict", ctx: "죄수들을 봄", text: "죄수 여럿을 보았다" },
  { id: "convict", ctx: "내가 죄수가 됨", text: "내가 죄수가 되었다" },
  { id: "convict", ctx: "연인이 죄수복을 입은 것을 봄", text: "애인이 죄수복을 입은 것을 보았다" },
  { id: "convention", ctx: "집회를 봄", text: "집회가 열린 것을 보았다" },
  { id: "convention", ctx: "어수선한 집회를 봄", text: "어수선한 집회를 보았다" },
  { id: "cooking", ctx: "밥을 지음", text: "밥을 지었다" },
  { id: "cooking", ctx: "요리 자리가 어수선함", text: "요리를 하는데 자리가 어수선했다" },
  { id: "kitchen-stove", ctx: "요리 화덕을 봄", text: "요리 화덕을 보았다" },
  { id: "kitchen-stove", ctx: "요리 화덕을 씀", text: "요리 화덕을 썼다" },
  { id: "cooling-board", ctx: "시신 받침대를 봄", text: "시신 받침대가 놓인 것을 보았다" },
  { id: "cooling-board", ctx: "산 사람이 받침대에서 일어남", text: "살아있는 사람이 시신 받침대에서 일어났다" },
  { id: "cooling-board", ctx: "죽은 형제가 받침대에서 일어남", text: "오래전 죽은 형제가 시신 받침대에서 일어났다" },
  { id: "copper", ctx: "구리를 봄", text: "구리 덩이를 보았다" },
  { id: "copper", ctx: "구리로 만든 물건을 얻음", text: "구리로 만든 물건을 얻었다" },
  { id: "copperas", ctx: "녹반을 봄", text: "녹반을 보았다" },
  { id: "copper-plate", ctx: "동판을 봄", text: "동판을 보았다" },
  { id: "coppersmith", ctx: "구리 장인을 봄", text: "구리 장인을 보았다" },
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
