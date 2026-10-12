// 인연링크 띠 쌍 38편(특별한 관계) — 한국어·영어 원문을 같은 사실에서 한 번에 만든다. 사용: npx tsx gen-pairs-38.mts <출력 폴더>
import { writeFileSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";

const APP = "C:/myProjects/naminglink/apps/inyeonlink/src/lib";
const OUT = process.argv[2];
mkdirSync(OUT, { recursive: true });
const pick = (m: any, n: string) => m[n] ?? m.default?.[n];
const eng = await import(pathToFileURL(`${APP}/engines/branches.ts`).href);
const EARTHLY: string[] = pick(eng, "EARTHLY_BRANCHES");
const ANIMAL: Record<string, string> = pick(eng, "BRANCH_ANIMALS");
const REL = pick(eng, "branchRelation") as (a: string, b: string) => string;
const LEADERS = pick(eng, "SAMHAP_LEADERS") as Set<string>;

const KO: Record<string, string> = { rat: "쥐", ox: "소", tiger: "범", rabbit: "토끼", dragon: "용", snake: "뱀", horse: "말", goat: "양", monkey: "원숭이", rooster: "닭", dog: "개", pig: "돼지" };
const EN: Record<string, string> = { rat: "Rat", ox: "Ox", tiger: "Tiger", rabbit: "Rabbit", dragon: "Dragon", snake: "Snake", horse: "Horse", goat: "Sheep", monkey: "Monkey", rooster: "Rooster", dog: "Dog", pig: "Pig" };
const ORD_KO = ["첫 번째", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째", "일곱 번째", "여덟 번째", "아홉 번째", "열 번째", "열한 번째", "열두 번째"];
const ORD_EN = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
const DIST_KO = ["한 칸", "두 칸", "세 칸", "네 칸", "다섯 칸", "여섯 칸"];
const DIST_EN = ["one step", "two steps", "three steps", "four steps", "five steps", "six steps"];
const LABEL_KO: Record<string, string> = { SAME: "같은 지지", YUKHAP: "육합", BANHAP: "반합", WONJIN: "원진", CHUNG: "충" };
const LABEL_EN: Record<string, string> = { SAME: "Same branch", YUKHAP: "Six-Harmony", BANHAP: "Half triad", WONJIN: "Discord", CHUNG: "Clash" };
const SCORE_PH: Record<string, string> = { SAME: "{scoreSame}", YUKHAP: "{scoreYukhap}", BANHAP: "{scoreBanhap}", WONJIN: "{scoreWonjin}", CHUNG: "{scoreChung}" };
const SWZ: Record<string, string> = { SAME: "{swingZodiacSame}", YUKHAP: "{swingZodiacYukhap}", BANHAP: "{swingZodiacBanhap}", WONJIN: "{swingZodiacWonjin}", CHUNG: "{swingZodiacChung}" };
const SWD: Record<string, string> = { SAME: "{swingDayBranchSame}", YUKHAP: "{swingDayBranchYukhap}", BANHAP: "{swingDayBranchBanhap}", WONJIN: "{swingDayBranchWonjin}", CHUNG: "{swingDayBranchChung}" };
const GROUPS: Record<string, { ko: string; en: string; chars: string[] }> = {
  수국: { ko: "수국", en: "water", chars: ["申", "子", "辰"] },
  금국: { ko: "금국", en: "metal", chars: ["巳", "酉", "丑"] },
  화국: { ko: "화국", en: "fire", chars: ["寅", "午", "戌"] },
  목국: { ko: "목국", en: "wood", chars: ["亥", "卯", "未"] },
};
const POSITIVE = new Set(["SAME", "YUKHAP", "BANHAP"]);

// 한자의 한국어 음 받침(丑 축·寅 인·辰 진·申 신·戌 술) — 한자 뒤 조사
const BAT = new Set(["丑", "寅", "辰", "申", "戌"]);
const wa = (h: string) => (BAT.has(h) ? "과" : "와");
const eun = (h: string) => (BAT.has(h) ? "은" : "는");
const ga = (h: string) => (BAT.has(h) ? "이" : "가");

const must = (c: boolean, m: string) => { if (!c) throw new Error(`단언 실패: ${m}`); };
const idx = (b: string) => EARTHLY.indexOf(b);
const dist = (a: string, b: string) => { const d = Math.abs(idx(a) - idx(b)); return Math.min(d, 12 - d); };
const slugOf = (x: string, y: string) => { const [a, b] = idx(x) <= idx(y) ? [x, y] : [y, x]; return `zodiac-pair-${ANIMAL[a]}-${ANIMAL[b]}`; };

// 38쌍: 같은 지지 12 + 육합 6 + 반합 8 + 원진 6 + 충 6
type Pair = { a: string; b: string; rel: string };
const pairs: Pair[] = [];
for (let i = 0; i < 12; i++) for (let j = i; j < 12; j++) {
  const a = EARTHLY[i]!, b = EARTHLY[j]!;
  const rel = a === b ? "SAME" : REL(a, b);
  if (rel !== "NEUTRAL") pairs.push({ a, b, rel });
}
const cnt = (r: string) => pairs.filter((p) => p.rel === r).length;
must(pairs.length === 38, `특별한 관계 쌍 ${pairs.length}개(38개여야 한다)`);
must(cnt("SAME") === 12 && cnt("YUKHAP") === 6 && cnt("BANHAP") === 8 && cnt("WONJIN") === 6 && cnt("CHUNG") === 6, "관계별 쌍 수");

type Block = { p: string } | { ul: string[] } | { table: { caption?: string; head: string[]; rows: string[][] } };
type Section = { title: string; kind?: "note"; blocks: Block[] };
type Doc = { slug: string; key: string; eyebrow: string; title: string; summary: string; backLabel: string; sections: Section[] };

const partnersOf = (x: string) => {
  const others = EARTHLY.filter((y) => y !== x);
  const by = (r: string) => others.filter((y) => REL(x, y) === r);
  return { YUKHAP: by("YUKHAP"), BANHAP: by("BANHAP"), WONJIN: by("WONJIN"), CHUNG: by("CHUNG") };
};

const ko: Doc[] = [];
const en: Doc[] = [];
for (const { a, b, rel } of pairs) {
  const A = a, B = b, ia = idx(A), ib = idx(B);
  const aa = ANIMAL[A]!, ab = ANIMAL[B]!;
  const kA = KO[aa]!, kB = KO[ab]!, eA = EN[aa]!, eB = EN[ab]!;
  const same = rel === "SAME";
  const d = dist(A, B);
  const slug = slugOf(A, B);

  // ── 사실 단언 ──
  if (rel === "CHUNG") must(d === 6, `${A}${B} 충은 마주 봐야 한다`);
  const chungOf = (x: string) => EARTHLY.find((y) => y !== x && REL(x, y) === "CHUNG")!;
  if (rel === "WONJIN") {
    must(dist(B, chungOf(A)) === 1 && dist(A, chungOf(B)) === 1, `${A}${B} 원진은 서로의 충 자리 옆이어야 한다`);
  }
  let group: { ko: string; en: string; chars: string[] } | undefined, leader = "", nonLeader = "", third = "";
  if (rel === "BANHAP") {
    group = Object.values(GROUPS).find((g) => g.chars.includes(A) && g.chars.includes(B))!;
    must(!!group, `${A}${B} 같은 무리`);
    leader = LEADERS.has(A) ? A : B;
    nonLeader = leader === A ? B : A;
    must(LEADERS.has(leader) && !LEADERS.has(nonLeader), `${A}${B} 왕지 하나`);
    third = group.chars.find((x) => x !== A && x !== B)!;
    must(REL(nonLeader, third) === "NEUTRAL", `${nonLeader}-${third} 무관계`);
  }
  if (rel === "YUKHAP") must(partnersOf(A).YUKHAP[0] === B, `${A}${B} 육합 상대`);

  const sw = SWZ[rel]!, sd = SWD[rel]!;
  const pa = partnersOf(A), pb = partnersOf(B);
  const linkKo = (x: string) => `[${KO[ANIMAL[x]!]}띠](/guide/${slugOf(A === x ? A : A, x)})`;
  const pairLink = (self: string, other: string, ko_: boolean) => `[${ko_ ? KO[ANIMAL[other]!] + "띠" : EN[ANIMAL[other]!]}](/guide/${slugOf(self, other)})`;
  const partnerLine = (self: string, p: ReturnType<typeof partnersOf>, ko_: boolean) => {
    const parts: string[] = [];
    for (const r of ["YUKHAP", "BANHAP", "WONJIN", "CHUNG"] as const) {
      const list = p[r];
      if (!list.length) continue;
      parts.push(`${ko_ ? LABEL_KO[r] : LABEL_EN[r]} ${list.map((o) => pairLink(self, o, ko_)).join(ko_ ? " · " : ", ")}`);
    }
    return parts.join(" · ");
  };
  void linkKo;

  // ── 한국어 ──
  const koSections: Section[] = [];
  let intro: string, why: string[];
  if (same) {
    intro = `${kA}띠끼리는 같은 지지(${A}${wa(A)} ${A})입니다. 같은 띠를 가진 두 사람은 닮았다는 뜻이지 끌어당긴다는 뜻은 아닙니다.`;
    why = [`그래서 무관계({scoreNeutral}점) 바로 위인 {scoreSame}점을 줍니다. 합도 충도 원진도 아닌 자리에서 조금 올려 둔 값입니다.`];
  } else if (rel === "YUKHAP") {
    intro = `${kA}띠와 ${kB}띠는 육합입니다. ${A}${wa(A)} ${B}${eun(B)} 두 글자만으로 합이 성립하는 짝입니다.`;
    why = [`육합은 궁합에서 가장 자주 나오는 좋은 관계이고, {scoreYukhap}점으로 두 띠 모두 받을 수 있는 가장 높은 점수입니다.`];
  } else if (rel === "BANHAP") {
    intro = `${kA}띠와 ${kB}띠는 반합입니다. ${group!.chars.join("")}${eun(group!.chars[2]!)} 한 무리(${group!.ko})이고, ${leader}${ga(leader)} 그 무리의 **가운데 글자**입니다.`;
    why = [
      `인연링크는 가운데 글자를 낀 두 글자만 합으로 인정하므로 이 짝은 반합({scoreBanhap}점)입니다.`,
      `같은 무리의 ${third}(${KO[ANIMAL[third]!]}띠)와 ${nonLeader}(${KO[ANIMAL[nonLeader]!]}띠)끼리는 가운데 글자 ${leader}${ga(leader)} 빠져 있어 합으로 세지 않고 무관계로 처리합니다.`,
    ];
  } else if (rel === "CHUNG") {
    intro = `${kA}띠와 ${kB}띠는 충입니다. ${A}${wa(A)} ${B}${eun(B)} 원에서 정확히 마주 보는 자리입니다.`;
    why = [`이 서비스는 충에도 {scoreChung}점을 남깁니다. 전통 명리에서 충은 관계의 끝이 아니라 부딪침이어서, 바닥에 가까운 점수를 주면 두 사람의 관계를 단정하는 꼴이 되기 때문입니다.`];
  } else {
    const ca = chungOf(A), cb = chungOf(B);
    intro = `${kA}띠와 ${kB}띠는 원진입니다. ${A}의 충 자리는 ${ca}(${KO[ANIMAL[ca]!]}띠)인데 ${B}${ga(B)} 그 바로 옆자리에 있고, ${B}의 충 자리 ${cb}(${KO[ANIMAL[cb]!]}띠)의 바로 옆에는 ${A}${ga(A)} 있습니다.`;
    why = [`미워하면서도 떨어지지 못하는 짝이라고 전통적으로 봅니다. 겉으로는 조용한데 어긋남이 오래간다고 보아, 충({scoreChung}점)보다는 높고 무관계({scoreNeutral}점)보다는 낮은 {scoreWonjin}점을 줍니다.`];
  }
  const posKo = same
    ? `${A}${eun(A)} 열두 지지의 ${ORD_KO[ia]} 글자입니다.`
    : `원에서 ${A}${eun(A)} ${ORD_KO[ia]} 자리, ${B}${eun(B)} ${ORD_KO[ib]} 자리이고, 두 글자는 ${DIST_KO[d - 1]} 떨어져 있습니다.`;
  koSections.push({ title: same ? `${kA}띠끼리는 같은 지지입니다` : `${kA}띠와 ${kB}띠는 ${LABEL_KO[rel]}입니다`, blocks: [{ p: intro }, ...why.map((p) => ({ p })), { p: posKo }] });
  koSections.push({
    title: "이 쌍의 숫자",
    blocks: [{
      table: {
        caption: same ? `${kA}띠끼리의 관계` : `${kA}띠와 ${kB}띠의 관계`,
        head: ["항목", "값"],
        rows: [
          ["관계", LABEL_KO[rel]!],
          ["점수", SCORE_PH[rel]!],
          ["띠 궁합이 최종 매칭률에서 차지하는 몫", "{weightZodiac}"],
          ["일지 궁합이 최종 매칭률에서 차지하는 몫", "{weightDayBranchTotal}"],
        ],
      },
    }],
  });
  koSections.push({
    title: "최종 매칭률을 얼마나 움직이나",
    blocks: [
      { p: `다른 항목이 모두 같다면, 이 쌍은 최종 매칭률을 무관계일 때보다 띠 궁합에서 ${sw}점, 일지 궁합에서 ${sd}점 ${POSITIVE.has(rel) ? "높입니다" : "낮춥니다"}.` },
      { p: `띠 궁합은 태어난 해의 지지를, 일지 궁합은 태어난 날의 지지를 맞댑니다. 두 자리가 서로 다른 지지일 수 있어서, 같은 두 사람이라도 띠 궁합과 일지 궁합이 다른 관계로 나올 수 있습니다.` },
    ],
  });
  const lineKo = (self: string, p: ReturnType<typeof partnersOf>) => `**${KO[ANIMAL[self]!]}띠**의 특별한 짝 — ${partnerLine(self, p, true)}`;
  koSections.push({
    title: same ? `${kA}띠가 맺는 다른 특별한 관계` : "두 띠가 각각 맺는 다른 특별한 관계",
    blocks: [{ ul: same ? [lineKo(A, pa)] : [lineKo(A, pa), lineKo(B, pb)] }],
  });
  koSections.push({
    title: "이 풀이가 말하지 않는 것",
    kind: "note",
    blocks: [
      { ul: ["띠 하나로 두 사람의 관계를 단정하지 않습니다. 최종 매칭률의 {weightSaju}는 사주 궁합이 정합니다.", "위 변동 폭은 다른 항목이 모두 같다고 가정한 계산이며, 실제 결과는 두 사람의 사주 전체로 정해집니다."] },
      { p: same ? `각 띠의 전체 풀이는 [${kA}띠](/guide/zodiac-${aa})에, 전체 관계표는 [십이지 관계표](/guide/branches)에 있습니다.` : `각 띠의 전체 풀이는 [${kA}띠](/guide/zodiac-${aa}) · [${kB}띠](/guide/zodiac-${ab})에, 전체 관계표는 [십이지 관계표](/guide/branches)에 있습니다.` },
    ],
  });
  ko.push({
    slug, key: `guide/${slug}`, eyebrow: "띠 쌍 풀이",
    title: same ? `${kA}띠와 ${kA}띠 — 같은 지지` : `${kA}띠와 ${kB}띠 — ${LABEL_KO[rel]}`,
    summary: same
      ? `${kA}띠끼리 만나면 어떤 관계이고 몇 점인지, 그 점수가 최종 매칭률을 얼마나 움직이는지 인연링크의 계산 규칙 그대로 풀었습니다.`
      : `${kA}띠와 ${kB}띠가 만나면 ${LABEL_KO[rel]}이고 몇 점인지, 그 점수가 최종 매칭률을 얼마나 움직이는지 인연링크의 계산 규칙 그대로 풀었습니다.`,
    backLabel: "계산 근거",
    sections: koSections,
  });

  // ── 영어 ──
  const enSections: Section[] = [];
  let introE: string, whyE: string[];
  if (same) {
    introE = `Two ${eA} people share the same branch (${A} and ${A}). It means they resemble each other, not that they attract.`;
    whyE = [`So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised.`];
  } else if (rel === "YUKHAP") {
    introE = `The ${eA} and the ${eB} form a six-harmony. ${A} and ${B} make a harmony with only two characters.`;
    whyE = [`A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get.`];
  } else if (rel === "BANHAP") {
    introE = `The ${eA} and the ${eB} form a half triad. ${group!.chars.join("")} is one triad group (the ${group!.en} group), and ${leader} is the **royal branch** at its centre.`;
    whyE = [
      `Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap}).`,
      `The ${EN[ANIMAL[third]!]} (${third}) and the ${EN[ANIMAL[nonLeader]!]} (${nonLeader}) of the same group lack the central character ${leader}, so they are not counted as a harmony and are treated as neutral.`,
    ];
  } else if (rel === "CHUNG") {
    introE = `The ${eA} and the ${eB} form a clash. ${A} and ${B} sit directly opposite each other on the circle.`;
    whyE = [`This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people.`];
  } else {
    const ca = chungOf(A), cb = chungOf(B);
    introE = `The ${eA} and the ${eB} form a discord. The clash position of ${A} is ${ca} (the ${EN[ANIMAL[ca]!]}), and ${B} sits right next to it; right next to ${cb} (the ${EN[ANIMAL[cb]!]}), the clash position of ${B}, sits ${A}.`;
    whyE = [`It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral}).`];
  }
  const posEn = same
    ? `${A} is the ${ORD_EN[ia]} of the twelve earthly branches.`
    : `On the circle, ${A} is in the ${ORD_EN[ia]} place and ${B} in the ${ORD_EN[ib]}, and the two characters are ${DIST_EN[d - 1]} apart.`;
  enSections.push({ title: same ? `Two ${eA} people share the same branch` : `The ${eA} and the ${eB} form a ${rel === "YUKHAP" ? "six-harmony" : rel === "BANHAP" ? "half triad" : rel === "CHUNG" ? "clash" : "discord"}`, blocks: [{ p: introE }, ...whyE.map((p) => ({ p })), { p: posEn }] });
  enSections.push({
    title: "The numbers of this pair",
    blocks: [{
      table: {
        caption: same ? `Two ${eA} people` : `The ${eA} and the ${eB}`,
        head: ["Item", "Value"],
        rows: [
          ["Relationship", LABEL_EN[rel]!],
          ["Score", SCORE_PH[rel]!],
          ["Share of the final match rate in zodiac compatibility", "{weightZodiac}"],
          ["Share of the final match rate in day branch compatibility", "{weightDayBranchTotal}"],
        ],
      },
    }],
  });
  enSections.push({
    title: "How far it moves the final match rate",
    blocks: [
      { p: `If everything else is equal, this pair ${POSITIVE.has(rel) ? "raises" : "lowers"} the final match rate by ${sw} points in zodiac compatibility and by ${sd} points in day branch compatibility, compared with a neutral pair.` },
      { p: `Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each.` },
    ],
  });
  const lineEn = (self: string, p: ReturnType<typeof partnersOf>) => `**The ${EN[ANIMAL[self]!]}**'s special partners — ${partnerLine(self, p, false)}`;
  enSections.push({
    title: same ? `The other special relationships of the ${eA}` : "The other special relationships of each animal",
    blocks: [{ ul: same ? [lineEn(A, pa)] : [lineEn(A, pa), lineEn(B, pb)] }],
  });
  enSections.push({
    title: "What this guide does not say",
    kind: "note",
    blocks: [
      { ul: ["One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.", "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."] },
      { p: same ? `The full guide to each animal is at [the ${eA}](/guide/zodiac-${aa}), and the full chart is in the [twelve-branch chart](/guide/branches).` : `The full guide to each animal is at [the ${eA}](/guide/zodiac-${aa}) · [the ${eB}](/guide/zodiac-${ab}), and the full chart is in the [twelve-branch chart](/guide/branches).` },
    ],
  });
  en.push({
    slug, key: `guide/${slug}`, eyebrow: "By pair",
    title: same ? `The ${eA} and the ${eA} — Same Branch` : `The ${eA} and the ${eB} — ${LABEL_EN[rel]}`,
    summary: same
      ? `What relationship two ${eA} people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.`
      : `What relationship the ${eA} and the ${eB} have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.`,
    backLabel: "Calculation basis",
    sections: enSections,
  });
}

// 한·영 구조 일치
must(ko.length === en.length && ko.length === 38, "문서 수");
for (let d = 0; d < ko.length; d++) {
  must(ko[d]!.sections.length === en[d]!.sections.length, `${ko[d]!.key} 절 수`);
  ko[d]!.sections.forEach((s, si) => {
    const e = en[d]!.sections[si]!;
    must(s.kind === e.kind && s.blocks.length === e.blocks.length, `${ko[d]!.key} 절 ${si}`);
    s.blocks.forEach((bk, bi) => {
      const f = e.blocks[bi]!;
      must(Object.keys(bk)[0] === Object.keys(f)[0], `${ko[d]!.key} 블록 종류`);
      if ("ul" in bk) must(bk.ul.length === (f as any).ul.length, `${ko[d]!.key} ul 길이`);
      if ("table" in bk) must(bk.table.rows.length === (f as any).table.rows.length && bk.table.head.length === (f as any).table.head.length, `${ko[d]!.key} 표`);
    });
  });
}
const phOf = (ds: Doc[]) => {
  const s = new Set<string>();
  for (const d of ds) for (const sec of d.sections) for (const bl of sec.blocks) {
    const texts = "p" in bl ? [bl.p] : "ul" in bl ? bl.ul : bl.table.rows.flat();
    for (const t of texts) for (const m of t.matchAll(/\{([a-zA-Z]+)\}/g)) s.add(m[1]!);
  }
  return [...s].sort();
};
// 한자 뒤 조사 사후 검사(한국어)
const badJosa: string[] = [];
for (const d of ko) for (const s of d.sections) for (const bl of s.blocks) {
  const texts = "p" in bl ? [bl.p] : "ul" in bl ? bl.ul : [];
  for (const t of texts) for (const m of t.matchAll(/([子丑寅卯辰巳午未申酉戌亥])(와|과|은|는|이|가)(?![가-힣])/g)) {
    const bat = BAT.has(m[1]!);
    const ok = bat ? ["과", "은", "이"].includes(m[2]!) : ["와", "는", "가"].includes(m[2]!);
    if (!ok) badJosa.push(`${d.slug}: ${m[0]}`);
  }
}
must(badJosa.length === 0, `한자 뒤 조사 오류 ${badJosa.length}건: ${badJosa.slice(0, 5).join(" | ")}`);
const phKo = phOf(ko).join(","), phEn = phOf(en).join(",");
must(phKo === phEn, `자리표시자 집합 ko[${phKo}] ≠ en[${phEn}]`);

writeFileSync(`${OUT}/pairs38.ko.json`, JSON.stringify(ko, null, 2), "utf8");
writeFileSync(`${OUT}/pairs38.en.json`, JSON.stringify(en, null, 2), "utf8");
const md: string[] = ["# [초안] 인연링크 띠 쌍 38편 — 한국어 원문\n", `> 자리표시자: ${phOf(ko).map((x) => `\`{${x}}\``).join(" ")}\n`];
for (const d of ko) {
  md.push(`\n---\n\n## ${d.key}\n\n- title: **${d.title}**\n- summary: ${d.summary}\n`);
  for (const s of d.sections) {
    md.push(`### ${s.title}${s.kind === "note" ? " *(note)*" : ""}\n`);
    for (const bl of s.blocks) {
      if ("p" in bl) md.push(`${bl.p}\n`);
      else if ("ul" in bl) md.push(bl.ul.map((x) => `- ${x}`).join("\n") + "\n");
      else { md.push(`| ${bl.table.head.join(" | ")} |\n| ${bl.table.head.map(() => "---").join(" | ")} |`); md.push(bl.table.rows.map((r) => `| ${r.join(" | ")} |`).join("\n") + "\n"); }
    }
  }
}
writeFileSync(`${OUT}/pairs38.ko.md`, md.join("\n"), "utf8");
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
const wc = (d: Doc) => { let n = words(d.title) + words(d.summary); for (const s of d.sections) { n += words(s.title); for (const bl of s.blocks) n += "p" in bl ? words(bl.p) : "ul" in bl ? bl.ul.reduce((x, y) => x + words(y), 0) : bl.table.rows.reduce((x, r) => x + r.reduce((y, c) => y + words(c), 0), 0); } return n; };
console.log(`쌍 문서 ${ko.length}편 · 자리표시자 ${phOf(ko).length}종: ${phOf(ko).join(", ")}`);
console.log(`어절: ${ko.map((d) => d.slug.replace("zodiac-pair-", "") + "=" + wc(d)).join(" ")}`);
