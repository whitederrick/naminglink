// 인연링크 띠별 12편(B)의 한국어 원문을 엔진 함수로 만든다. 사용: npx tsx gen-zodiac-12.mts <출력 폴더>
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const APP = "C:/myProjects/naminglink/apps/inyeonlink/src/lib";
const OUT = process.argv[2];
const pick = (m: any, n: string) => m[n] ?? m.default?.[n];
const eng = await import(pathToFileURL(`${APP}/engines/branches.ts`).href);
const EARTHLY: string[] = pick(eng, "EARTHLY_BRANCHES");
const ANIMAL: Record<string, string> = pick(eng, "BRANCH_ANIMALS");
const REL = pick(eng, "branchRelation") as (a: string, b: string) => string;
const SCORE = pick(eng, "BRANCH_RELATION_SCORE") as Record<string, number>;
const LEADERS = pick(eng, "SAMHAP_LEADERS") as Set<string>;

const KO: Record<string, string> = { rat: "쥐", ox: "소", tiger: "범", rabbit: "토끼", dragon: "용", snake: "뱀", horse: "말", goat: "양", monkey: "원숭이", rooster: "닭", dog: "개", pig: "돼지" };
const ORD_BER = ["첫 번째", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째", "일곱 번째", "여덟 번째", "아홉 번째", "열 번째", "열한 번째", "열두 번째"];
const ORD_JJAE = ["첫째", "둘째", "셋째", "넷째", "다섯째", "여섯째", "일곱째", "여덟째", "아홉째", "열째", "열한째", "열두째"];
const REL_LABEL: Record<string, string> = { SAME: "같은 지지", YUKHAP: "육합", BANHAP: "반합", NEUTRAL: "무관계", WONJIN: "원진", CHUNG: "충" };
const REL_PH: Record<string, string> = { SAME: "{scoreSame}", YUKHAP: "{scoreYukhap}", BANHAP: "{scoreBanhap}", NEUTRAL: "{scoreNeutral}", WONJIN: "{scoreWonjin}", CHUNG: "{scoreChung}" };
const GROUPS: Record<string, string[]> = { 수국: ["申", "子", "辰"], 금국: ["巳", "酉", "丑"], 화국: ["寅", "午", "戌"], 목국: ["亥", "卯", "未"] };

// i18n.ts ko 의 animalTraits(첫 번째 정의) 읽기
const i18n = readFileSync(`${APP}/i18n.ts`, "utf8");
const tStart = i18n.indexOf("animalTraits: {");
const tBlock = i18n.slice(tStart, i18n.indexOf("},", tStart));
const TRAIT: Record<string, string> = {};
for (const m of tBlock.matchAll(/(\w+):\s*"([^"]+)"/g)) TRAIT[m[1]!] = m[2]!;
if (Object.keys(TRAIT).length !== 12) throw new Error(`animalTraits ${Object.keys(TRAIT).length}개(12개여야 한다)`);

// 자체 검증 — 생성기가 믿는 사실을 엔진으로 다시 확인한다
const must = (cond: boolean, msg: string) => { if (!cond) throw new Error(`단언 실패: ${msg}`); };
for (const [name, g] of Object.entries(GROUPS)) {
  for (const x of g) for (const y of g) {
    if (x === y) continue;
    const want = LEADERS.has(x) || LEADERS.has(y) ? "BANHAP" : "NEUTRAL";
    must(REL(x, y) === want, `${name} ${x}${y} = ${REL(x, y)} (기대 ${want})`);
  }
}
const BAT = new Set(["丑", "寅", "辰", "申", "戌"]);
const wa = (h: string) => (BAT.has(h) ? "과" : "와");
const eun = (h: string) => (BAT.has(h) ? "은" : "는");
const ga = (h: string) => (BAT.has(h) ? "이" : "가");
const idx = (b: string) => EARTHLY.indexOf(b);
const dist = (a: string, b: string) => { const d = Math.abs(idx(a) - idx(b)); return Math.min(d, 12 - d); };

type Block = { p: string } | { ul: string[] } | { table: { caption?: string; head: string[]; rows: string[][] } };
type Section = { title: string; kind?: "note"; blocks: Block[] };
type Doc = { slug: string; key: string; eyebrow: string; title: string; summary: string; backLabel: string; sections: Section[] };

const docs: Doc[] = [];
for (const A of EARTHLY) {
  const a = ANIMAL[A]!, K = KO[a]!, i = idx(A);
  const others = EARTHLY.filter((x) => x !== A);
  const byRel = (r: string) => others.filter((x) => REL(A, x) === r);
  const yuk = byRel("YUKHAP"), ban = byRel("BANHAP"), chung = byRel("CHUNG"), won = byRel("WONJIN"), neu = byRel("NEUTRAL");
  must(yuk.length === 1 && chung.length === 1 && won.length === 1, `${A} 육합·충·원진은 각각 하나여야 한다`);
  must(ban.length >= 1 && ban.length <= 2, `${A} 반합 ${ban.length}개`);
  const C = chung[0]!, P = yuk[0]!, W = won[0]!;
  must(dist(A, C) === 6, `${A}-${C} 충은 원에서 마주 봐야 한다`);
  must(dist(C, W) === 1, `${A} 원진 ${W} 는 충 자리 ${C} 의 바로 옆이어야 한다`);
  must(Math.max(...EARTHLY.map((x) => (x === A ? -1 : SCORE[REL(A, x)]!))) === SCORE.YUKHAP, `${A} 최고 점수는 육합이어야 한다`);
  must(Math.min(...others.map((x) => SCORE[REL(A, x)]!)) === SCORE.CHUNG, `${A} 최저 점수는 충이어야 한다`);

  const sections: Section[] = [];
  sections.push({
    title: `${K}띠는 열두 지지의 ${ORD_BER[i]} 자리입니다`,
    blocks: [
      { p: `${K}띠는 태어난 해의 지지가 **${A}**인 분입니다. ${A}${eun(A)} 열두 지지의 ${ORD_JJAE[i]} 글자이고, 열두 글자를 원으로 놓으면 ${C}(${KO[ANIMAL[C]!]}띠)와 정확히 마주 봅니다.` },
      { p: `궁합 결과 화면에서 ${K}띠인 분에게 붙는 한 줄은 이렇습니다. 「${TRAIT[a]}」 이 문구는 관계 점수와 무관하며, 아래 점수에는 영향을 주지 않습니다.` },
    ],
  });
  sections.push({
    title: "열두 띠와의 관계 한눈에",
    blocks: [
      { p: `${K}띠를 기준으로 상대 띠를 하나씩 맞댄 결과입니다. 이 서비스가 합으로 인정하는 짝만 관계로 적었고, 나머지는 무관계입니다.` },
      {
        table: {
          caption: `${K}띠와 열두 띠의 관계`,
          head: ["상대 띠", "관계", "점수"],
          rows: EARTHLY.map((x) => {
            const r = x === A ? "SAME" : REL(A, x);
            return [`${KO[ANIMAL[x]!]}(${x})`, REL_LABEL[r]!, REL_PH[r]!];
          }),
        },
      },
    ],
  });
  sections.push({
    title: `${KO[ANIMAL[P]!]}띠 — 서로 끌어당기는 짝(육합)`,
    blocks: [{ p: `${A}${wa(A)} ${P}${eun(P)} 두 글자만으로 합이 성립하는 짝입니다. 육합은 궁합에서 가장 자주 나오는 좋은 관계이고, ${K}띠와 ${KO[ANIMAL[P]!]}띠는 {scoreYukhap}점으로 ${K}띠가 받을 수 있는 가장 높은 점수입니다.` }],
  });
  const groupName = Object.entries(GROUPS).find(([, g]) => g.includes(A))![0];
  const group = GROUPS[groupName]!;
  const banNames = ban.map((x) => `${KO[ANIMAL[x]!]}띠`);
  if (LEADERS.has(A)) {
    const rest = group.filter((x) => x !== A);
    must(rest.length === 2 && REL(rest[0]!, rest[1]!) === "NEUTRAL", `${A} 무리의 나머지 둘은 무관계여야 한다`);
    sections.push({
      title: `${banNames.map((n) => n.replace("띠", "")).join("·")}띠 — 가운데 글자를 낀 반합`,
      blocks: [
        { p: `${group.join("")}${eun(group[group.length - 1]!)} 한 무리(${groupName})이고, ${A}${ga(A)} 그 무리의 **가운데 글자**입니다. 인연링크는 가운데 글자를 낀 두 글자만 합으로 인정하므로, ${K}띠는 ${banNames.join("와도 ")}와도 반합({scoreBanhap}점)이 됩니다.`.replace("띠와도 ", "띠와도 ") },
        { p: `반대로 **${KO[ANIMAL[rest[0]!]!]}띠와 ${KO[ANIMAL[rest[1]!]!]}띠끼리는** 가운데 글자 ${A}${ga(A)} 빠져 있어 합으로 세지 않고 무관계로 처리합니다. 같은 무리라도 ${K}띠가 끼어야 반합이 되는 것입니다.` },
      ],
    });
  } else {
    must(ban.length === 1, `${A} 는 왕지가 아니므로 반합 상대가 하나여야 한다`);
    const L = ban[0]!;
    must(LEADERS.has(L) && group.includes(L), `${A} 의 반합 상대 ${L} 는 같은 무리의 왕지여야 한다`);
    const other = group.find((x) => x !== A && x !== L)!;
    must(REL(A, other) === "NEUTRAL", `${A}-${other} 는 무관계여야 한다`);
    sections.push({
      title: `${KO[ANIMAL[L]!]}띠 — 가운데 글자를 낀 반합`,
      blocks: [
        { p: `${group.join("")}${eun(group[group.length - 1]!)} 한 무리(${groupName})이고, ${L}${ga(L)} 그 무리의 **가운데 글자**입니다. 인연링크는 가운데 글자를 낀 두 글자만 합으로 인정하므로, ${K}띠는 ${KO[ANIMAL[L]!]}띠와만 반합({scoreBanhap}점)이 됩니다.` },
        { p: `같은 무리의 ${KO[ANIMAL[other]!]}띠(${other})와는 가운데 글자 ${L}${ga(L)} 빠져 있어 합으로 세지 않고 무관계({scoreNeutral}점)로 처리합니다. 같은 무리라고 모두 합이 되는 것은 아닙니다.` },
      ],
    });
  }
  sections.push({
    title: `${KO[ANIMAL[C]!]}띠 — 정면으로 부딪치는 충`,
    blocks: [{ p: `${A}${wa(A)} ${C}${eun(C)} 원에서 정확히 마주 보는 자리입니다. 이 서비스는 충에도 {scoreChung}점을 남깁니다. 전통 명리에서 충은 관계의 끝이 아니라 부딪침이어서, 바닥에 가까운 점수를 주면 두 사람의 관계를 단정하는 꼴이 되기 때문입니다. 그래도 ${K}띠가 받는 점수 중에서는 가장 낮은 값입니다.` }],
  });
  sections.push({
    title: `${KO[ANIMAL[W]!]}띠 — 은근히 어긋나는 원진`,
    blocks: [{ p: `${A}${wa(A)} ${W}${eun(W)} 충인 ${C}(${KO[ANIMAL[C]!]}띠)의 바로 옆자리에 있는 짝으로, 미워하면서도 떨어지지 못한다고 전통적으로 봅니다. 겉으로는 조용한데 어긋남이 오래간다고 보아, 충({scoreChung}점)보다는 높고 무관계({scoreNeutral}점)보다는 낮은 {scoreWonjin}점을 줍니다.` }],
  });
  const neuNames = neu.map((x) => KO[ANIMAL[x]!]!).join("·");
  sections.push({
    title: `나머지 ${neu.length}개 띠와 같은 ${K}띠끼리`,
    blocks: [
      { p: `${neuNames}띠는 ${K}띠와 합도 충도 원진도 아닌 **무관계**이고 {scoreNeutral}점입니다. 좋지도 나쁘지도 않은 기준점입니다.` },
      { p: `같은 ${K}띠끼리는 {scoreSame}점입니다. 닮았다는 뜻이지 끌어당긴다는 뜻은 아니어서 무관계 바로 위에 둡니다.` },
    ],
  });
  sections.push({
    title: "이 점수가 최종 매칭률에서 차지하는 몫",
    blocks: [
      { p: "두 사람의 지지를 맞대는 자리는 둘입니다." },
      { ul: ["**띠 궁합**은 태어난 해의 지지를 봅니다. 최종 매칭률의 {weightZodiac}를 차지합니다.", "**일지 궁합**은 태어난 날의 지지를 봅니다. 사주 궁합({weightSaju}) 안에서 {weightDayBranch}, 최종 매칭률로는 {weightDayBranchTotal}를 차지합니다."] },
      { p: `예를 들어 ${K}띠인 분이 ${KO[ANIMAL[C]!]}띠인 분을 만나면 띠 궁합에서 충이 나옵니다. 다른 항목이 같다면 최종 매칭률이 무관계일 때보다 {swingZodiacChung}점 낮아집니다. 상대가 ${KO[ANIMAL[P]!]}띠라면 육합이어서 {swingZodiacYukhap}점 높아집니다.` },
      { p: `띠와 일지는 서로 다른 지지일 수 있습니다. ${K}띠인 두 사람이라도 일지가 ${A}${wa(A)} ${C}${BAT.has(C) ? "이라면" : "라면"}, 띠 궁합은 같은 지지({scoreSame}점)이고 일지 궁합은 충({scoreChung}점)으로 서로 다르게 나옵니다.` },
    ],
  });
  const slugOf = (x: string) => `zodiac-${ANIMAL[x]}`;
  sections.push({
    title: "이 풀이가 말하지 않는 것",
    kind: "note",
    blocks: [
      {
        ul: [
          "띠 하나로 두 사람의 관계를 단정하지 않습니다. 최종 매칭률의 {weightSaju}는 사주 궁합이 정합니다.",
          "위 변동 폭은 다른 항목이 모두 같다고 가정한 계산이며, 실제 결과는 두 사람의 사주 전체로 정해집니다.",
          "어떤 관계가 몇 점인지의 전체 표는 [십이지 관계표](/guide/branches)에, 띠를 연지로 보는 이유는 [띠 궁합은 왜 연지를 보나](/guide/zodiac)에 적어 두었습니다.",
        ],
      },
      { p: `다른 띠도 같은 방식으로 풀어 두었습니다. ${others.map((x) => `[${KO[ANIMAL[x]!]}띠](/guide/${slugOf(x)})`).join(" · ")}` },
    ],
  });
  docs.push({
    slug: `zodiac-${a}`,
    key: `guide/zodiac-${a}`,
    eyebrow: "띠별 관계",
    title: `${K}띠는 열두 띠와 어떻게 만나나`,
    summary: `${K}띠(${A})가 열두 띠 각각과 어떤 관계이고 몇 점인지, 그 점수가 최종 매칭률에서 어떤 몫을 차지하는지 인연링크의 계산 규칙 그대로 풀었습니다.`,
    backLabel: "계산 근거",
    sections,
  });
}

{
  const bad: string[] = [];
  const check = (text: string, where: string) => {
    for (const m of text.matchAll(/([子丑寅卯辰巳午未申酉戌亥])(와|과|은|는|이|가)(?![가-힣])/g)) {
      const bat = BAT.has(m[1]!);
      const ok = bat ? ["과", "은", "이"].includes(m[2]!) : ["와", "는", "가"].includes(m[2]!);
      if (!ok) bad.push(`${where}: ${m[0]}`);
    }
  };
  for (const d of docs) for (const s of d.sections) {
    check(s.title, d.slug);
    for (const b of s.blocks) {
      if ("p" in b) check(b.p, d.slug);
      else if ("ul" in b) b.ul.forEach((x) => check(x, d.slug));
    }
  }
  if (bad.length) throw new Error("한자 뒤 조사 오류 " + bad.length + "건: " + bad.slice(0, 6).join(" | "));
}
// 자리표시자 목록(구현 때 doc-values 에 있어야 하는 것)
const ph = new Set<string>();
const scan = (s: string) => { for (const m of s.matchAll(/\{([a-zA-Z]+)\}/g)) ph.add(m[1]!); };
for (const d of docs) for (const s of d.sections) for (const b of s.blocks) {
  if ("p" in b) scan(b.p);
  else if ("ul" in b) b.ul.forEach(scan);
  else b.table.rows.forEach((r) => r.forEach(scan));
}

// 마크다운(읽기용)
const md: string[] = [];
md.push("# [초안] 인연링크 띠별 12편 — 한국어 원문\n");
md.push("> 사용자 확인용 초안입니다. 엔진 함수(`branchRelation`·`BRANCH_RELATION_SCORE`)로 관계를 계산해 만들었고, 중괄호 `{…}` 는");
md.push("> 실제 화면에서 엔진 값이 채워지는 자리표시자입니다. 확인되면 `apps/inyeonlink/src/lib/doc-content/ko.ts` 의 `guide/zodiac-<동물>` 12개 키로 옮깁니다.\n");
md.push(`- 사용하는 자리표시자: ${[...ph].sort().map((x) => `\`{${x}}\``).join(" ")}`);
md.push("- 기존에 있는 것: scoreSame·scoreYukhap·scoreBanhap·scoreNeutral·scoreWonjin·scoreChung·weightZodiac·weightSaju·weightDayBranch");
md.push("- **새로 만들어야 하는 것:** `weightDayBranchTotal`(0.7×0.2=14%) · `swingZodiacYukhap`(6.6) · `swingZodiacChung`(6.9) — 문장에서 「높아집니다/낮아집니다」를 따로 쓰므로 부호 없는 값입니다.\n");
for (const d of docs) {
  md.push(`\n---\n\n## ${d.key}\n`);
  md.push(`- eyebrow: ${d.eyebrow}\n- title: **${d.title}**\n- summary: ${d.summary}\n- backLabel: ${d.backLabel}\n`);
  for (const s of d.sections) {
    md.push(`### ${s.title}${s.kind === "note" ? " *(note)*" : ""}\n`);
    for (const b of s.blocks) {
      if ("p" in b) md.push(`${b.p}\n`);
      else if ("ul" in b) md.push(b.ul.map((x) => `- ${x}`).join("\n") + "\n");
      else {
        md.push(`| ${b.table.head.join(" | ")} |\n| ${b.table.head.map(() => "---").join(" | ")} |`);
        md.push(b.table.rows.map((r) => `| ${r.join(" | ")} |`).join("\n") + "\n");
      }
    }
  }
}
writeFileSync(`${OUT}/B-zodiac-12.ko.md`, md.join("\n"), "utf8");
writeFileSync(`${OUT}/B-zodiac-12.ko.json`, JSON.stringify(docs, null, 2), "utf8");

// 요약(검증 출력)
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
const wc = (d: Doc) => {
  let n = words(d.title) + words(d.summary);
  for (const s of d.sections) { n += words(s.title); for (const b of s.blocks) {
    if ("p" in b) n += words(b.p); else if ("ul" in b) n += b.ul.reduce((x, y) => x + words(y), 0);
    else n += b.table.rows.reduce((x, r) => x + r.reduce((y, c) => y + words(c), 0), 0) + b.table.head.reduce((x, c) => x + words(c), 0);
  } }
  return n;
};
console.log(`문서 ${docs.length}편 · 자리표시자 ${ph.size}종: ${[...ph].sort().join(", ")}`);
for (const d of docs) {
  const rels = d.sections.find((s) => s.title === "열두 띠와의 관계 한눈에")!.blocks.find((b) => "table" in b) as any;
  const cnt: Record<string, number> = {};
  for (const r of rels.table.rows) cnt[r[1]] = (cnt[r[1]] ?? 0) + 1;
  console.log(`${d.slug.padEnd(15)} 절 ${d.sections.length} · 어절 ${wc(d)} · ${Object.entries(cnt).map(([k, v]) => `${k}${v}`).join(" ")}`);
}
