// 인연링크 띠별 12편의 영어 원문. 한국어 생성기와 같은 사실(엔진 계산)을 쓰고, 구조가 같은지 단언한다.
// 사용: npx tsx gen-zodiac-12-en.mts <출력 폴더>   (출력 폴더에 B-zodiac-12.ko.json 이 있어야 한다)
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const APP = "C:/myProjects/naminglink/apps/inyeonlink/src/lib";
const OUT = process.argv[2];
const pick = (m: any, n: string) => m[n] ?? m.default?.[n];
const eng = await import(pathToFileURL(`${APP}/engines/branches.ts`).href);
const EARTHLY: string[] = pick(eng, "EARTHLY_BRANCHES");
const ANIMAL: Record<string, string> = pick(eng, "BRANCH_ANIMALS");
const REL = pick(eng, "branchRelation") as (a: string, b: string) => string;
const LEADERS = pick(eng, "SAMHAP_LEADERS") as Set<string>;

const EN: Record<string, string> = { rat: "Rat", ox: "Ox", tiger: "Tiger", rabbit: "Rabbit", dragon: "Dragon", snake: "Snake", horse: "Horse", goat: "Sheep", monkey: "Monkey", rooster: "Rooster", dog: "Dog", pig: "Pig" };
const ORD = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
const REL_LABEL: Record<string, string> = { SAME: "Same branch", YUKHAP: "Six-Harmony", BANHAP: "Half triad", NEUTRAL: "Neutral", WONJIN: "Discord", CHUNG: "Clash" };
const REL_PH: Record<string, string> = { SAME: "{scoreSame}", YUKHAP: "{scoreYukhap}", BANHAP: "{scoreBanhap}", NEUTRAL: "{scoreNeutral}", WONJIN: "{scoreWonjin}", CHUNG: "{scoreChung}" };
const GROUPS: Record<string, { en: string; chars: string[] }> = {
  수국: { en: "water", chars: ["申", "子", "辰"] },
  금국: { en: "metal", chars: ["巳", "酉", "丑"] },
  화국: { en: "fire", chars: ["寅", "午", "戌"] },
  목국: { en: "wood", chars: ["亥", "卯", "未"] },
};

// 영어 띠 성향(i18n.ts 영어 사전의 animalTraits — 두 번째 정의)
const i18n = readFileSync(`${APP}/i18n.ts`, "utf8");
const first = i18n.indexOf("animalTraits: {");
const second = i18n.indexOf("animalTraits: {", first + 10);
const tBlock = i18n.slice(second, i18n.indexOf("},", second));
const TRAIT: Record<string, string> = {};
for (const m of tBlock.matchAll(/(\w+):\s*"((?:[^"\\]|\\.)*)"/g)) TRAIT[m[1]!] = m[2]!.replace(/\\"/g, '"');
if (Object.keys(TRAIT).length !== 12) throw new Error(`영어 animalTraits ${Object.keys(TRAIT).length}개`);

const art = (n: string) => (/^[AEIOU]/.test(n) ? "an" : "a");
const must = (c: boolean, m: string) => { if (!c) throw new Error(`단언 실패: ${m}`); };
const withThe = (names: string[]) => names.length === 1 ? `the ${names[0]}` : names.length === 2 ? `the ${names[0]} and the ${names[1]}` : `the ${names.slice(0, -1).join(", the ")} and the ${names[names.length - 1]}`;
const plainList = (names: string[]) => names.length === 1 ? names[0]! : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

type Block = { p: string } | { ul: string[] } | { table: { caption?: string; head: string[]; rows: string[][] } };
type Section = { title: string; kind?: "note"; blocks: Block[] };
type Doc = { slug: string; key: string; eyebrow: string; title: string; summary: string; backLabel: string; sections: Section[] };
const idx = (b: string) => EARTHLY.indexOf(b);

const docs: Doc[] = [];
for (const A of EARTHLY) {
  const a = ANIMAL[A]!, N = EN[a]!, i = idx(A);
  const others = EARTHLY.filter((x) => x !== A);
  const byRel = (r: string) => others.filter((x) => REL(A, x) === r);
  const yuk = byRel("YUKHAP"), ban = byRel("BANHAP"), chung = byRel("CHUNG"), won = byRel("WONJIN"), neu = byRel("NEUTRAL");
  const C = chung[0]!, P = yuk[0]!, W = won[0]!;
  const nm = (x: string) => EN[ANIMAL[x]!]!;

  const sections: Section[] = [];
  sections.push({
    title: `The ${N} is the ${ORD[i]} of the twelve branches`,
    blocks: [
      { p: `The ${N} is someone whose birth-year branch is **${A}**. ${A} is the ${ORD[i]} of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite ${C} (the ${nm(C)}).` },
      { p: `The line that the compatibility result shows for ${art(N)} ${N} person is: "${TRAIT[a]}" This line has nothing to do with the relationship scores and does not affect the scores below.` },
    ],
  });
  sections.push({
    title: "The twelve zodiac animals at a glance",
    blocks: [
      { p: `Each of the other animals is set against the ${N} in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral.` },
      {
        table: {
          caption: `The ${N} and the twelve zodiac animals`,
          head: ["Other animal", "Relationship", "Score"],
          rows: EARTHLY.map((x) => {
            const r = x === A ? "SAME" : REL(A, x);
            return [`${nm(x)} (${x})`, REL_LABEL[r]!, REL_PH[r]!];
          }),
        },
      },
    ],
  });
  sections.push({
    title: `${nm(P)} — the pair that attracts (Six-Harmony)`,
    blocks: [{ p: `${A} and ${P} form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the ${N} and the ${nm(P)} score {scoreYukhap}, the highest the ${N} can get.` }],
  });
  const gname = Object.keys(GROUPS).find((k) => GROUPS[k]!.chars.includes(A))!;
  const g = GROUPS[gname]!;
  const banNames = ban.map(nm);
  if (LEADERS.has(A)) {
    const rest = g.chars.filter((x) => x !== A);
    must(rest.length === 2 && REL(rest[0]!, rest[1]!) === "NEUTRAL", `${A} 나머지 둘 무관계`);
    sections.push({
      title: `${plainList(banNames)} — a half triad that includes the royal branch`,
      blocks: [
        { p: `${g.chars.join("")} is one triad group (the ${g.en} group), and ${A} is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the ${N} forms a half triad ({scoreBanhap}) with both ${withThe(banNames)}.` },
        { p: `**${withThe(rest.map(nm)).replace(/^the/, "The")} together**, on the other hand, lack the central character ${A}, so they are not counted as a harmony and are treated as neutral. Even within one triad group, it is the ${N} that makes the half triad.` },
      ],
    });
  } else {
    must(ban.length === 1, `${A} 반합 하나`);
    const L = ban[0]!;
    const other = g.chars.find((x) => x !== A && x !== L)!;
    must(REL(A, other) === "NEUTRAL", `${A}-${other} 무관계`);
    sections.push({
      title: `${nm(L)} — a half triad that includes the royal branch`,
      blocks: [
        { p: `${g.chars.join("")} is one triad group (the ${g.en} group), and ${L} is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the ${N} forms a half triad ({scoreBanhap}) only with the ${nm(L)}.` },
        { p: `With the ${nm(other)} (${other}) of the same group, the central character ${L} is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony.` },
      ],
    });
  }
  sections.push({
    title: `${nm(C)} — the head-on collision (Clash)`,
    blocks: [{ p: `${A} and ${C} sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the ${N} can receive.` }],
  });
  sections.push({
    title: `${nm(W)} — the quiet discord (Discord)`,
    blocks: [{ p: `${A} and ${W} sit right next to ${C} (the ${nm(C)}), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral}).` }],
  });
  sections.push({
    title: `The other ${neu.length} animals, and the ${N} with another ${N}`,
    blocks: [
      { p: `The ${plainList(neu.map(nm))} are neither a harmony, a clash nor a discord with the ${N}: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad.` },
      { p: `Two ${N} people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral.` },
    ],
  });
  sections.push({
    title: "What share of the final match rate this score takes",
    blocks: [
      { p: "There are two places where two people's branches are set side by side." },
      { ul: ["**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.", "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."] },
      { p: `For example, when ${art(N)} ${N} person meets ${art(nm(C))} ${nm(C)} person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With ${art(nm(P))} ${nm(P)} person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher.` },
      { p: `Year and day branches can differ. Two ${N} people whose day branches are ${A} and ${C} get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility.` },
    ],
  });
  sections.push({
    title: "What this guide does not say",
    kind: "note",
    blocks: [
      {
        ul: [
          "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
          "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
          "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac).",
        ],
      },
      { p: `The other animals are laid out in the same way. ${others.map((x) => `[${nm(x)}](/guide/zodiac-${ANIMAL[x]})`).join(" · ")}` },
    ],
  });
  docs.push({
    slug: `zodiac-${a}`,
    key: `guide/zodiac-${a}`,
    eyebrow: "By animal",
    title: `How the ${N} Meets the Twelve Zodiac Animals`,
    summary: `What relationship the ${N} (${A}) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.`,
    backLabel: "Calculation basis",
    sections,
  });
}

// 한국어 원문과 구조가 같은지(절 수·블록 종류·표 크기·목록 길이)
const ko = JSON.parse(readFileSync(`${OUT}/B-zodiac-12.ko.json`, "utf8")) as Doc[];
must(ko.length === docs.length, "문서 수");
for (let d = 0; d < docs.length; d++) {
  must(ko[d]!.key === docs[d]!.key, `키 ${ko[d]!.key} ≠ ${docs[d]!.key}`);
  must(ko[d]!.sections.length === docs[d]!.sections.length, `${docs[d]!.key} 절 수`);
  ko[d]!.sections.forEach((s, si) => {
    const e = docs[d]!.sections[si]!;
    must(s.kind === e.kind, `${docs[d]!.key} 절 ${si} kind`);
    must(s.blocks.length === e.blocks.length, `${docs[d]!.key} 절 ${si} 블록 수 ${s.blocks.length}/${e.blocks.length}`);
    s.blocks.forEach((b, bi) => {
      const f = e.blocks[bi]!;
      must(Object.keys(b)[0] === Object.keys(f)[0], `${docs[d]!.key} 절 ${si} 블록 ${bi} 종류`);
      if ("ul" in b) must(b.ul.length === (f as any).ul.length, `${docs[d]!.key} ul 길이`);
      if ("table" in b) {
        const t = (f as any).table;
        must(b.table.head.length === t.head.length && b.table.rows.length === t.rows.length, `${docs[d]!.key} 표 크기`);
        b.table.rows.forEach((r, ri) => must(r.length === t.rows[ri].length, `${docs[d]!.key} 표 행 ${ri}`));
      }
    });
  });
}
// 자리표시자 집합이 한국어와 같은지
const phOf = (ds: Doc[]) => {
  const s = new Set<string>();
  for (const d of ds) for (const sec of d.sections) for (const b of sec.blocks) {
    const texts = "p" in b ? [b.p] : "ul" in b ? b.ul : b.table.rows.flat();
    for (const t of texts) for (const m of t.matchAll(/\{([a-zA-Z]+)\}/g)) s.add(m[1]!);
  }
  return [...s].sort().join(",");
};
must(phOf(ko) === phOf(docs), `자리표시자 집합 ko[${phOf(ko)}] ≠ en[${phOf(docs)}]`);

writeFileSync(`${OUT}/B-zodiac-12.en.json`, JSON.stringify(docs, null, 2), "utf8");
console.log(`영어 ${docs.length}편 · 구조가 한국어와 동일 · 자리표시자 ${phOf(docs)}`);
