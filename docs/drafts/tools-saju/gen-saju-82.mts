// 사주링크 사전 82편 — 천간 10 · 지지 12 · 일주 60. 한국어·영어 원문을 같은 사실(엔진 값)에서 한 번에 만든다.
// 사용: npx tsx gen-saju-82.mts <출력 폴더>
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";

const CORE = "C:/myProjects/naminglink/packages/core/src/saju";
const APP = "C:/myProjects/naminglink/apps/sajulink/src/lib";
const OUT = process.argv[2];
mkdirSync(OUT, { recursive: true });
const pick = (m: any, n: string) => m[n] ?? m.default?.[n];
const EL = await import(pathToFileURL(`${CORE}/elements.ts`).href);
const TG = await import(pathToFileURL(`${CORE}/ten-gods.ts`).href);
const STEM_ELEMENT = pick(EL, "STEM_ELEMENT") as Record<string, string>;
const HIDDEN = pick(EL, "BRANCH_HIDDEN_STEMS") as Record<string, Array<[string, number]>>;
const calcStrength = pick(EL, "calculateElementStrength") as (p: any) => any;
const STEM_POL = pick(TG, "STEM_POLARITY") as Record<string, string>;
const tenGod = pick(TG, "tenGod") as (a: any, b: any) => string;
const SPOUSE_GOD = pick(TG, "SPOUSE_GOD") as Record<string, string>;

const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const STEM_KO = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const BRANCH_KO = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const STEM_RO = ["gap", "eul", "byeong", "jeong", "mu", "gi", "gyeong", "sin", "im", "gye"];
const BRANCH_RO = ["ja", "chuk", "in", "myo", "jin", "sa", "o", "mi", "sin", "yu", "sul", "hae"];
const ANIMAL_KO = ["쥐", "소", "범", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
const ANIMAL_EN = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"];
const EL_KO: Record<string, string> = { WOOD: "목(木)", FIRE: "화(火)", EARTH: "토(土)", METAL: "금(金)", WATER: "수(水)" };
const EL_EN: Record<string, string> = { WOOD: "Wood", FIRE: "Fire", EARTH: "Earth", METAL: "Metal", WATER: "Water" };
const POL_KO: Record<string, string> = { YANG: "양(陽)", YIN: "음(陰)" };
const POL_EN: Record<string, string> = { YANG: "Yang", YIN: "Yin" };
const SEASON_KO: Record<string, string> = { WOOD: "봄", FIRE: "여름", METAL: "가을", WATER: "겨울" };
const SEASON_EN: Record<string, string> = { WOOD: "spring", FIRE: "summer", METAL: "autumn", WATER: "winter" };
const ORD_KO = ["첫째", "둘째", "셋째", "넷째", "다섯째", "여섯째", "일곱째", "여덟째", "아홉째", "열째", "열한째", "열두째"];
const ORD_EN = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
const VIT_ORDER = ["WANG", "SANG", "HYU", "SU", "SA"];
const VIT_KO: Record<string, string> = { WANG: "왕(旺)", SANG: "상(相)", HYU: "휴(休)", SU: "수(囚)", SA: "사(死)" };
const VIT_EN: Record<string, string> = { WANG: "Wang (旺)", SANG: "Sang (相)", HYU: "Hyu (休)", SU: "Su (囚)", SA: "Sa (死)" };
const VIT_PH: Record<string, string> = { WANG: "{vitalityWang}", SANG: "{vitalitySang}", HYU: "{vitalityHyu}", SU: "{vitalitySu}", SA: "{vitalitySa}" };
const ROLE = (len: number, i: number) => (len === 2 ? ["Yeo", "Bon"][i]! : ["Yeo", "Jung", "Bon"][i]!);
const ROLE_KO: Record<string, string> = { Yeo: "여기(餘氣)", Jung: "중기(中氣)", Bon: "본기(本氣)" };
const ROLE_EN: Record<string, string> = { Yeo: "residual (餘氣)", Jung: "middle (中氣)", Bon: "principal (本氣)" };
const cap = (s: string) => s[0]!.toUpperCase() + s.slice(1);
const hidKey = (b: string, role: string) => `hid${cap(BRANCH_RO[BRANCHES.indexOf(b)]!)}${role}`;

// 제품 사전(ko·en): 일간 이름·문구, 십신 이름
const i18n = readFileSync(`${APP}/i18n.ts`, "utf8");
const dmBlocks: number[] = [];
for (let p = i18n.indexOf("dayMasters: {"); p >= 0; p = i18n.indexOf("dayMasters: {", p + 10)) dmBlocks.push(p);
const parseDM = (start: number) => {
  const out: Record<string, { name: string; trait: string }> = {};
  const lines = i18n.slice(start).split("\n").slice(1, 14);
  for (const l of lines) {
    const m = /^\s+(.):\s*\{\s*name:\s*"([^"]+)",\s*trait:\s*"((?:[^"\\]|\\.)*)"\s*\}/.exec(l);
    if (m) out[m[1]!] = { name: m[2]!, trait: m[3]!.replace(/\\"/g, '"') };
  }
  return out;
};
const DM_KO = parseDM(dmBlocks.find((p) => /갑목/.test(i18n.slice(p, p + 400)))!);
const DM_EN = parseDM(dmBlocks.find((p) => /Yang Wood/.test(i18n.slice(p, p + 400)))!);
for (const s of STEMS) if (!DM_KO[s] || !DM_EN[s]) throw new Error(`일간 사전 ${s} 없음`);
const TGKEYS = ["BIGYEON", "GEOPJAE", "SIKSIN", "SANGGWAN", "PYEONJAE", "JEONGJAE", "PYEONGWAN", "JEONGGWAN", "PYEONIN", "JEONGIN"];
const tgNames = (re: RegExp) => {
  const out: Record<string, string> = {};
  for (const k of TGKEYS) {
    const m = new RegExp(`${k}:\\s*\\{\\s*name:\\s*"([^"]+)"`).exec(i18n.slice(i18n.search(re)));
    if (!m) throw new Error(`십신 이름 ${k}`);
    out[k] = m[1]!;
  }
  return out;
};
const tenGodsAt = (marker: RegExp) => { const idx = [...i18n.matchAll(/tenGods:\s*\{/g)].map((m) => m.index!); return idx.find((p) => marker.test(i18n.slice(p, p + 400)))!; };
const grab = (at: number) => {
  const out: Record<string, string> = {};
  for (const k of TGKEYS) {
    const m = new RegExp(`${k}:\\s*\\{\\s*name:\\s*"([^"]+)"`).exec(i18n.slice(at, at + 6000));
    if (!m) throw new Error(`십신 이름 ${k}`);
    out[k] = m[1]!;
  }
  return out;
};
void tgNames;
const TG_KO = grab(tenGodsAt(/비견/));
const TG_EN = grab(tenGodsAt(/Companion/));

// 한자의 한국어 음 받침(조사 선택)
const BAT = new Set(["갑", "을", "병", "정", "경", "신", "임", "축", "인", "진", "술"]);
const josa = (ko: string, withBat: string, without: string) => (BAT.has(ko) ? withBat : without);
const hasStemBat = (i: number) => BAT.has(STEM_KO[i]!);
const hasBranchBat = (i: number) => BAT.has(BRANCH_KO[i]!);
void hasStemBat; void hasBranchBat;

const must = (c: boolean, m: string) => { if (!c) throw new Error(`단언 실패: ${m}`); };
const elOf = (s: string) => STEM_ELEMENT[s]!;
const god = (self: string, other: string) => tenGod({ stem: self, element: elOf(self) }, { stem: other, element: elOf(other) });

// ── 엔진 사실 단언 ──
must(STEMS.every((s) => STEM_ELEMENT[s] && STEM_POL[s]), "천간 표");
for (const s of STEMS) {
  const seen = new Set(STEMS.map((o) => god(s, o)));
  must(seen.size === 10, `${s} 의 십신 10가지가 서로 달라야 한다`);
}
for (const b of BRANCHES) {
  const sum = HIDDEN[b]!.reduce((n, [, d]) => n + d, 0);
  must(Math.abs(sum - 30) < 0.01, `${b} 지장간 일수 합 ${sum}`);
  const pct = HIDDEN[b]!.map(([, d]) => Math.round((d / 30) * 1000) / 10);
  must(Math.abs(pct.reduce((a, c) => a + c, 0) - 100) < 0.25, `${b} 지분 합 ${pct.join("+")}`);
}

// 지지별 월령 상태(월지가 b 일 때 다섯 오행의 왕상휴수사) — 엔진으로 직접 계산
const monthState = (b: string) => {
  const r = calcStrength({ year: "甲子", month: `甲${b}`, day: "甲子", hour: null });
  return { season: r.seasonElement as string, earth: r.earthSeason as boolean, vit: r.vitality as Record<string, string> };
};

type Block = { p: string } | { ul: string[] } | { table: { caption?: string; head: string[]; rows: string[][] } };
type Section = { title: string; kind?: "note"; blocks: Block[] };
type Doc = { slug: string; key: string; type: "stem" | "branch" | "pillar"; eyebrow: string; title: string; summary: string; backLabel: string; sections: Section[] };
const ko: Doc[] = [];
const en: Doc[] = [];
const stemSlug = (i: number) => `stem-${STEM_RO[i]}`;
const branchSlug = (i: number) => `branch-${BRANCH_RO[i]}`;
const pillarSlug = (si: number, bi: number) => `pillar-${STEM_RO[si]}-${BRANCH_RO[bi]}`;
const cycle = (si: number, bi: number) => { for (let n = 0; n < 60; n++) if (n % 10 === si && n % 12 === bi) return n; throw new Error("일주 위치"); };
const dayPillars: Array<[number, number]> = [];
for (let n = 0; n < 60; n++) dayPillars.push([n % 10, n % 12]);
must(dayPillars.length === 60 && new Set(dayPillars.map(([a, b]) => `${a}-${b}`)).size === 60, "60일주");

const allStemLinks = (ko_: boolean, except?: number) => STEMS.map((s, i) => (i === except ? null : `[${ko_ ? STEM_KO[i] + "(" + s + ")" : DM_EN[s]!.name}](/guide/${stemSlug(i)})`)).filter(Boolean).join(" · ");
const allBranchLinks = (ko_: boolean, except?: number) => BRANCHES.map((b, i) => (i === except ? null : `[${ko_ ? BRANCH_KO[i] + "(" + b + ")" : b + " (" + ANIMAL_EN[i] + ")"}](/guide/${branchSlug(i)})`)).filter(Boolean).join(" · ");

// ───────────── 천간 10 ─────────────
STEMS.forEach((s, i) => {
  const e = elOf(s), pol = STEM_POL[s]!;
  const dmK = DM_KO[s]!, dmE = DM_EN[s]!;
  const jeongjae = STEMS.find((o) => god(s, o) === "JEONGJAE")!;
  const jeonggwan = STEMS.find((o) => god(s, o) === "JEONGGWAN")!;
  // 이 글자를 품은 지지
  const holders: Array<{ b: string; bi: number; role: string }> = [];
  BRANCHES.forEach((b, bi) => HIDDEN[b]!.forEach(([h], idx) => { if (h === s) holders.push({ b, bi, role: ROLE(HIDDEN[b]!.length, idx) }); }));
  must(holders.length >= 2, `${s} 를 품은 지지`);
  const koSec: Section[] = [];
  koSec.push({
    title: `${STEM_KO[i]}(${s})은 열 천간의 ${ORD_KO[i]} 글자입니다`.replace(`${STEM_KO[i]}(${s})은`, `${STEM_KO[i]}(${s})${josa(STEM_KO[i]!, "은", "는")}`),
    blocks: [
      { p: `${STEM_KO[i]}(${s})${josa(STEM_KO[i]!, "은", "는")} 열 천간의 ${ORD_KO[i]} 글자이고, 오행은 ${EL_KO[e]}, 음양은 ${POL_KO[pol]}입니다. 사주링크는 일간(태어난 날의 천간)이 ${s}인 분을 「${dmK.name}」이라고 부릅니다.` },
      { p: `결과 화면에서 이 일간에 붙는 한 줄은 이렇습니다. 「${dmK.trait}」 이 문구는 아래 표와 점수의 계산에는 영향을 주지 않습니다.` },
    ],
  });
  koSec.push({
    title: "다른 천간을 어떻게 읽나(십신)",
    blocks: [
      { p: `일간이 ${s}일 때 열 천간 각각은 아래처럼 읽힙니다. 방향이 있어서 ${s}${josa(STEM_KO[i]!, "이", "가")} 상대를 읽은 결과이고, 상대가 ${s}${josa(STEM_KO[i]!, "을", "를")} 읽으면 다른 이름이 나옵니다.` },
      { table: { caption: `${STEM_KO[i]}(${s})를 일간으로 둔 십신`, head: ["상대 천간", "오행·음양", "십신"], rows: STEMS.map((o, oi) => [`${STEM_KO[oi]}(${o})`, `${EL_KO[elOf(o)]} ${POL_KO[STEM_POL[o]!]}`, TG_KO[god(s, o)]!]) } },
    ],
  });
  koSec.push({
    title: "배우자 자리로 읽히는 글자",
    blocks: [{ p: `전통 명리는 배우자 자리를 남성에게는 정재(正財), 여성에게는 정관(正官)으로 봅니다. 일간이 ${s}이면 정재는 ${STEM_KO[STEMS.indexOf(jeongjae)]}(${jeongjae}), 정관은 ${STEM_KO[STEMS.indexOf(jeonggwan)]}(${jeonggwan})입니다. 성별을 밝히지 않으시면 이 자리는 읽지 않습니다.` }],
  });
  koSec.push({
    title: `${s}을 품은 지지`.replace(`${s}을`, `${s}${josa(STEM_KO[i]!, "을", "를")}`),
    blocks: [
      { p: `${s}${josa(STEM_KO[i]!, "이", "가")} 지지 안에 숨어 있는 자리입니다(지장간). 지분은 그 지지의 30일 가운데 ${s}${josa(STEM_KO[i]!, "이", "가")} 차지하는 날의 비율입니다.` },
      { table: { caption: `${STEM_KO[i]}(${s})을 품은 지지`.replace(")을", `)${josa(STEM_KO[i]!, "을", "를")}`), head: ["지지", "띠", "자리", "지분"], rows: holders.map((h) => [`${BRANCH_KO[h.bi]}(${h.b})`, `${ANIMAL_KO[h.bi]}띠`, ROLE_KO[h.role]!, `{${hidKey(h.b, h.role)}}`]) } },
    ],
  });
  koSec.push({
    title: "이 풀이가 말하지 않는 것",
    kind: "note",
    blocks: [
      { ul: ["천간 하나로 사람을 단정하지 않습니다. 사주는 여덟 글자가 서로 맺는 관계로 읽습니다.", "십신은 일간을 기준으로 한 판정입니다. 같은 두 글자라도 어느 쪽이 일간이냐에 따라 다른 이름이 됩니다."] },
      { p: `십신 전체는 [십신 안내](/guide/ten-gods), 오행 세력과 월령은 [오행 안내](/guide/five-elements)에 있습니다. 다른 천간: ${allStemLinks(true, i)}` },
    ],
  });
  ko.push({ slug: stemSlug(i), key: `guide/${stemSlug(i)}`, type: "stem", eyebrow: "천간 사전", title: `${STEM_KO[i]}(${s}) — ${EL_KO[e]} ${POL_KO[pol]}의 글자`, summary: `천간 ${STEM_KO[i]}(${s})의 오행·음양, 다른 아홉 글자를 어떻게 읽는지(십신), 어느 지지가 품고 있는지를 사주링크의 계산 규칙 그대로 풀었습니다.`, backLabel: "계산 근거", sections: koSec });

  const enSec: Section[] = [];
  enSec.push({
    title: `${dmE.name} is the ${ORD_EN[i]} of the ten heavenly stems`,
    blocks: [
      { p: `${s} is the ${ORD_EN[i]} of the ten heavenly stems. Its element is ${EL_EN[e]} and its polarity is ${POL_EN[pol]}. Saju-Link calls a person whose day stem is ${s} "${dmE.name}".` },
      { p: `The line that the result screen shows for this day stem is: "${dmE.trait}" This line has nothing to do with the table or the scores below.` },
    ],
  });
  enSec.push({
    title: "How it reads the other stems (the Ten Gods)",
    blocks: [
      { p: `With ${s} as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how ${s} reads the other stem, and when the other stem reads ${s} a different name can come out.` },
      { table: { caption: `Ten Gods with ${dmE.name} as the day stem`, head: ["Other stem", "Element and polarity", "Ten God"], rows: STEMS.map((o) => [`${DM_EN[o]!.name}`, `${EL_EN[elOf(o)]} ${POL_EN[STEM_POL[o]!]}`, TG_EN[god(s, o)]!]) } },
    ],
  });
  enSec.push({
    title: "The stems that read as the spouse position",
    blocks: [{ p: `Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With ${s} as the day stem, Steady Wealth is ${jeongjae} and Authority is ${jeonggwan}. If you do not state your gender, this position is not read.` }],
  });
  enSec.push({
    title: `The branches that hold ${s}`,
    blocks: [
      { p: `This is where ${s} sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that ${s} takes.` },
      { table: { caption: `The branches that hold ${s}`, head: ["Branch", "Animal", "Position", "Share"], rows: holders.map((h) => [`${h.b}`, ANIMAL_EN[h.bi]!, ROLE_EN[h.role]!, `{${hidKey(h.b, h.role)}}`]) } },
    ],
  });
  enSec.push({
    title: "What this guide does not say",
    kind: "note",
    blocks: [
      { ul: ["One stem does not settle a person. A saju is read from how its eight characters relate.", "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."] },
      { p: `The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: ${allStemLinks(false, i)}` },
    ],
  });
  en.push({ slug: stemSlug(i), key: `guide/${stemSlug(i)}`, type: "stem", eyebrow: "Heavenly stems", title: `${dmE.name} — ${EL_EN[e]}, ${POL_EN[pol]}`, summary: `The element and polarity of the heavenly stem ${s}, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.`, backLabel: "Calculation basis", sections: enSec });
});

// ───────────── 지지 12 ─────────────
BRANCHES.forEach((b, i) => {
  const ms = monthState(b);
  const hidden = HIDDEN[b]!;
  const cols = hidden.map(([h], idx) => ({ h, role: ROLE(hidden.length, idx) }));
  must(cols.length >= 2, `${b} 지장간`);
  const koSec: Section[] = [];
  const seasonKo = `${SEASON_KO[ms.season]}${ms.earth ? "(환절기)" : ""}`;
  koSec.push({
    title: `${BRANCH_KO[i]}(${b})${josa(BRANCH_KO[i]!, "은", "는")} 열두 지지의 ${ORD_KO[i]} 글자입니다`,
    blocks: [
      { p: `${BRANCH_KO[i]}(${b})${josa(BRANCH_KO[i]!, "은", "는")} 열두 지지의 ${ORD_KO[i]} 글자이고 ${ANIMAL_KO[i]}띠에 해당합니다. 태어난 달의 지지(월지)가 ${b}이면 계절은 ${SEASON_KO[ms.season]}이고 계절의 주인 오행은 ${EL_KO[ms.season]}입니다.${ms.earth ? " 환절기(辰未戌丑)라서 토(土)도 함께 왕성하게 봅니다." : ""}` },
      { p: `태어난 날의 지지(일지)가 ${b}이면 이 글자가 배우자 자리입니다. 아래에서 이 지지가 품은 천간과 그것이 일간에게 무엇인지 볼 수 있습니다.` },
    ],
  });
  koSec.push({
    title: "이 지지가 품은 천간(지장간)",
    blocks: [
      { p: `지지는 겉글자 하나지만 안에 천간을 품습니다. 지분은 그 지지의 30일을 천간마다 나눈 비율이고, 본기가 그 지지의 대표 기운입니다.` },
      { table: { caption: `${BRANCH_KO[i]}(${b})의 지장간`, head: ["천간", "오행·음양", "자리", "지분"], rows: cols.map(({ h, role }) => [`${STEM_KO[STEMS.indexOf(h)]}(${h})`, `${EL_KO[elOf(h)]} ${POL_KO[STEM_POL[h]!]}`, ROLE_KO[role]!, `{${hidKey(b, role)}}`]) } },
    ],
  });
  koSec.push({
    title: `월지가 ${b}일 때 다섯 오행의 힘`,
    blocks: [
      { p: `태어난 달의 지지가 ${b}이면 오행마다 상태(왕상휴수사)가 정해지고, 그 상태가 세력에 곱해지는 배수가 됩니다.` },
      { table: { caption: `월지 ${b}(${seasonKo})의 오행 상태`, head: ["오행", "상태", "배수"], rows: ["WOOD", "FIRE", "EARTH", "METAL", "WATER"].map((el) => [EL_KO[el]!, VIT_KO[ms.vit[el]!]!, VIT_PH[ms.vit[el]!]!]) } },
    ],
  });
  koSec.push({
    title: "일간별로 읽히는 십신",
    blocks: [
      { p: `일간이 무엇이냐에 따라 같은 ${b}의 지장간이 다른 십신이 됩니다. 일지로 놓이면 이 표가 배우자 자리의 읽기가 됩니다.` },
      { table: { caption: `${BRANCH_KO[i]}(${b})의 지장간이 일간에게 무엇인가`, head: ["일간", ...cols.map(({ h, role }) => `${STEM_KO[STEMS.indexOf(h)]}(${h}) ${ROLE_KO[role]!}`)], rows: STEMS.map((s, si) => [`${STEM_KO[si]}(${s})`, ...cols.map(({ h }) => TG_KO[god(s, h)]!)]) } },
    ],
  });
  koSec.push({
    title: "이 풀이가 말하지 않는 것",
    kind: "note",
    blocks: [
      { ul: ["지지 하나로 사람을 단정하지 않습니다. 같은 지지도 일간과 월지에 따라 다르게 읽힙니다.", "합·충·원진 같은 지지끼리의 관계는 이 문서에서 다루지 않습니다."] },
      { p: `지지끼리의 관계는 [십이지 관계표](/guide/branches), 띠로서의 의미는 [띠는 사주에서 어디에 있나](/guide/zodiac)에 있습니다. 다른 지지: ${allBranchLinks(true, i)}` },
    ],
  });
  ko.push({ slug: branchSlug(i), key: `guide/${branchSlug(i)}`, type: "branch", eyebrow: "지지 사전", title: `${BRANCH_KO[i]}(${b}) — ${ANIMAL_KO[i]}띠의 지지`, summary: `지지 ${BRANCH_KO[i]}(${b})가 품은 천간(지장간), 월지로 놓였을 때 오행의 힘, 일간별로 읽히는 십신을 사주링크의 계산 규칙 그대로 풀었습니다.`, backLabel: "계산 근거", sections: koSec });

  const enSec: Section[] = [];
  const seasonEn = `${SEASON_EN[ms.season]}${ms.earth ? " (transition month)" : ""}`;
  enSec.push({
    title: `${b} is the ${ORD_EN[i]} of the twelve earthly branches`,
    blocks: [
      { p: `${b} is the ${ORD_EN[i]} of the twelve earthly branches and belongs to the ${ANIMAL_EN[i]}. When the branch of the birth month is ${b}, the season is ${SEASON_EN[ms.season]} and the element that owns the season is ${EL_EN[ms.season]}.${ms.earth ? " It is a transition month (辰未戌丑), so Earth is also treated as prosperous." : ""}` },
      { p: `When the branch of the birth day is ${b}, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem.` },
    ],
  });
  enSec.push({
    title: "The stems this branch holds (hidden stems)",
    blocks: [
      { p: `A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy.` },
      { table: { caption: `The hidden stems of ${b}`, head: ["Stem", "Element and polarity", "Position", "Share"], rows: cols.map(({ h, role }) => [DM_EN[h]!.name, `${EL_EN[elOf(h)]} ${POL_EN[STEM_POL[h]!]}`, ROLE_EN[role]!, `{${hidKey(b, role)}}`]) } },
    ],
  });
  enSec.push({
    title: `The strength of the five elements when the month branch is ${b}`,
    blocks: [
      { p: `When the branch of the birth month is ${b}, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength.` },
      { table: { caption: `The element states for month branch ${b} (${seasonEn})`, head: ["Element", "State", "Multiplier"], rows: ["WOOD", "FIRE", "EARTH", "METAL", "WATER"].map((el) => [EL_EN[el]!, VIT_EN[ms.vit[el]!]!, VIT_PH[ms.vit[el]!]!]) } },
    ],
  });
  enSec.push({
    title: "The Ten Gods by day stem",
    blocks: [
      { p: `The same hidden stems of ${b} become different Ten Gods depending on the day stem. When ${b} is the day branch, this table is the reading of the spouse position.` },
      { table: { caption: `What the hidden stems of ${b} are to each day stem`, head: ["Day stem", ...cols.map(({ h, role }) => `${DM_EN[h]!.name} — ${ROLE_EN[role]!}`)], rows: STEMS.map((s) => [DM_EN[s]!.name, ...cols.map(({ h }) => TG_EN[god(s, h)]!)]) } },
    ],
  });
  enSec.push({
    title: "What this guide does not say",
    kind: "note",
    blocks: [
      { ul: ["One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.", "Relationships between branches such as harmony, clash and discord are not covered here."] },
      { p: `The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: ${allBranchLinks(false, i)}` },
    ],
  });
  en.push({ slug: branchSlug(i), key: `guide/${branchSlug(i)}`, type: "branch", eyebrow: "Earthly branches", title: `${b} — the branch of the ${ANIMAL_EN[i]}`, summary: `The stems held by the earthly branch ${b} (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.`, backLabel: "Calculation basis", sections: enSec });
});

// ───────────── 일주 60 ─────────────
dayPillars.forEach(([si, bi]) => {
  const s = STEMS[si]!, b = BRANCHES[bi]!;
  const n = cycle(si, bi) + 1;
  const prev = dayPillars[(n - 2 + 60) % 60]!, next = dayPillars[n % 60]!;
  const hidden = HIDDEN[b]!;
  const rows = hidden.map(([h], idx) => ({ h, role: ROLE(hidden.length, idx) }));
  const pName = `${STEM_KO[si]}${BRANCH_KO[bi]}(${s}${b})`;
  const jeongjae = STEMS.find((o) => god(s, o) === "JEONGJAE")!;
  const jeonggwan = STEMS.find((o) => god(s, o) === "JEONGGWAN")!;
  const holdsJ = rows.find((r) => r.h === jeongjae);
  const holdsG = rows.find((r) => r.h === jeonggwan);
  const principal = rows[rows.length - 1]!;
  const dmK = DM_KO[s]!, dmE = DM_EN[s]!;
  const koSec: Section[] = [];
  koSec.push({
    title: `${pName}${josa(BRANCH_KO[bi]!, "은", "는")} 육십갑자의 ${n}번째 일주입니다`,
    blocks: [
      { p: `태어난 날의 간지가 ${STEM_KO[si]}${BRANCH_KO[bi]}(${s}${b})이면 일간은 ${s}(${STEM_KO[si]}, ${EL_KO[elOf(s)]} ${POL_KO[STEM_POL[s]!]}), 일지는 ${b}(${BRANCH_KO[bi]}, ${ANIMAL_KO[bi]}띠)입니다. 육십갑자에서는 ${n}번째 조합입니다.` },
      { p: `사주링크는 일간이 ${s}인 분을 「${dmK.name}」이라고 부르고, 결과 화면에 붙는 한 줄은 이렇습니다. 「${dmK.trait}」 이 문구는 아래 읽기와 점수의 계산에는 영향을 주지 않습니다.` },
    ],
  });
  koSec.push({
    title: `일지 ${b}가 품은 천간은 일간에게 무엇인가`.replace(`${b}가`, `${b}${josa(BRANCH_KO[bi]!, "이", "가")}`),
    blocks: [
      { p: `일지는 배우자 자리입니다. ${b}${josa(BRANCH_KO[bi]!, "이", "가")} 품은 천간을 일간 ${s} 기준의 십신으로 읽으면 아래와 같습니다. 본기인 ${STEM_KO[STEMS.indexOf(principal.h)]}(${principal.h})${josa(STEM_KO[STEMS.indexOf(principal.h)]!, "이", "가")} 그 지지의 대표 기운입니다.` },
      { table: { caption: `${pName}의 일지 지장간`, head: ["지장간", "자리", "지분", `일간 ${s}에게`], rows: rows.map(({ h, role }) => [`${STEM_KO[STEMS.indexOf(h)]}(${h})`, ROLE_KO[role]!, `{${hidKey(b, role)}}`, TG_KO[god(s, h)]!]) } },
    ],
  });
  const koSpouse = (label: string, stem: string, rowFound: typeof holdsJ, godName: string) =>
    rowFound ? `${label} 기준 배우자 자리(${godName})는 ${stem}입니다. ${b}의 지장간에 ${stem}${josa(STEM_KO[STEMS.indexOf(stem)]!, "이", "가")} 들어 있습니다(${ROLE_KO[rowFound.role]}).` : `${label} 기준 배우자 자리(${godName})는 ${stem}입니다. ${b}의 지장간에는 ${stem}${josa(STEM_KO[STEMS.indexOf(stem)]!, "이", "가")} 들어 있지 않습니다.`;
  koSec.push({
    title: "배우자 자리와 이 일주",
    blocks: [
      { p: `전통 명리는 배우자 자리를 남성에게는 정재(正財), 여성에게는 정관(正官)으로 봅니다. 일간이 ${s}이면 정재는 ${jeongjae}, 정관은 ${jeonggwan}입니다.` },
      { p: koSpouse("남성", jeongjae, holdsJ, "정재") },
      { p: koSpouse("여성", jeonggwan, holdsG, "정관") },
    ],
  });
  const [ps, pb] = prev, [ns, nb] = next;
  koSec.push({
    title: "이웃한 일주와 구성 글자",
    blocks: [
      { p: `육십갑자에서 앞 일주는 [${STEM_KO[ps]}${BRANCH_KO[pb]}(${STEMS[ps]}${BRANCHES[pb]})](/guide/${pillarSlug(ps, pb)}), 다음 일주는 [${STEM_KO[ns]}${BRANCH_KO[nb]}(${STEMS[ns]}${BRANCHES[nb]})](/guide/${pillarSlug(ns, nb)})입니다.` },
      { p: `구성 글자는 [${STEM_KO[si]}(${s})](/guide/${stemSlug(si)})과 [${BRANCH_KO[bi]}(${b})](/guide/${branchSlug(bi)})입니다.`.replace(")과 [", `)${josa(STEM_KO[si]!, "과", "와")} [`) },
    ],
  });
  koSec.push({
    title: "이 풀이가 말하지 않는 것",
    kind: "note",
    blocks: [{ ul: ["일주 하나로 사람이나 관계를 단정하지 않습니다. 사주는 네 기둥 여덟 글자가 서로 맺는 관계로 읽습니다.", "배우자 자리의 읽기는 전통 명리의 규칙을 옮긴 것이며, 성별을 밝히지 않으시면 이 자리는 읽지 않습니다."] }],
  });
  ko.push({ slug: pillarSlug(si, bi), key: `guide/${pillarSlug(si, bi)}`, type: "pillar", eyebrow: "일주 사전", title: `${pName} 일주`, summary: `일간 ${s}, 일지 ${b}인 날의 일주 ${pName}를 사주링크가 어떻게 읽는지 — 일지가 품은 천간이 일간에게 무엇인지를 계산 규칙 그대로 풀었습니다.`.replace(`${pName}를`, `${pName}${josa(BRANCH_KO[bi]!, "을", "를")}`), backLabel: "계산 근거", sections: koSec });

  const enSec: Section[] = [];
  enSec.push({
    title: `${s}${b} is day pillar number ${n} of the sexagenary cycle`,
    blocks: [
      { p: `When the stem-branch of the birth day is ${s}${b}, the day stem is ${s} (${EL_EN[elOf(s)]}, ${POL_EN[STEM_POL[s]!]}) and the day branch is ${b} (the ${ANIMAL_EN[bi]}). In the sexagenary cycle it is the combination number ${n}.` },
      { p: `Saju-Link calls a person whose day stem is ${s} "${dmE.name}", and the line the result screen shows is: "${dmE.trait}" This line has nothing to do with the reading below or the scores.` },
    ],
  });
  enSec.push({
    title: `What the stems held by the day branch ${b} are to the day stem`,
    blocks: [
      { p: `The day branch is the spouse position. Read from the day stem ${s}, the stems that ${b} holds are as follows. The principal stem (${principal.h}) is the branch's representative energy.` },
      { table: { caption: `The hidden stems of the day branch of ${s}${b}`, head: ["Hidden stem", "Position", "Share", `To the day stem ${s}`], rows: rows.map(({ h, role }) => [DM_EN[h]!.name, ROLE_EN[role]!, `{${hidKey(b, role)}}`, TG_EN[god(s, h)]!]) } },
    ],
  });
  const enSpouse = (label: string, stem: string, rowFound: typeof holdsJ, godName: string) =>
    rowFound ? `For ${label}, the spouse position (${godName}) is ${stem}. ${stem} is held inside ${b} (${ROLE_EN[rowFound.role]}).` : `For ${label}, the spouse position (${godName}) is ${stem}. ${stem} is not held inside ${b}.`;
  enSec.push({
    title: "The spouse position and this day pillar",
    blocks: [
      { p: `Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With ${s} as the day stem, Steady Wealth is ${jeongjae} and Authority is ${jeonggwan}.` },
      { p: enSpouse("men", jeongjae, holdsJ, "Steady Wealth") },
      { p: enSpouse("women", jeonggwan, holdsG, "Authority") },
    ],
  });
  enSec.push({
    title: "The neighbouring day pillars and the characters it is made of",
    blocks: [
      { p: `In the sexagenary cycle the previous day pillar is [${STEMS[ps]}${BRANCHES[pb]}](/guide/${pillarSlug(ps, pb)}) and the next is [${STEMS[ns]}${BRANCHES[nb]}](/guide/${pillarSlug(ns, nb)}).` },
      { p: `It is made of [${dmE.name}](/guide/${stemSlug(si)}) and [${b} (${ANIMAL_EN[bi]})](/guide/${branchSlug(bi)}).` },
    ],
  });
  enSec.push({
    title: "What this guide does not say",
    kind: "note",
    blocks: [{ ul: ["One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.", "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."] }],
  });
  en.push({ slug: pillarSlug(si, bi), key: `guide/${pillarSlug(si, bi)}`, type: "pillar", eyebrow: "Day pillars", title: `The ${s}${b} Day Pillar`, summary: `How Saju-Link reads the day pillar ${s}${b} — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.`, backLabel: "Calculation basis", sections: enSec });
});

// ── 구조 일치 · 한자 조사 · 자리표시자 ──
must(ko.length === 82 && en.length === 82, "문서 수");
for (let d = 0; d < ko.length; d++) {
  const k = ko[d]!, e = en[d]!;
  must(k.key === e.key && k.sections.length === e.sections.length, `${k.key} 구조`);
  k.sections.forEach((s, si) => {
    const f = e.sections[si]!;
    must(s.kind === f.kind && s.blocks.length === f.blocks.length, `${k.key} 절 ${si}`);
    s.blocks.forEach((bk, bi) => {
      const g = f.blocks[bi]!;
      must(Object.keys(bk)[0] === Object.keys(g)[0], `${k.key} 블록 종류`);
      if ("ul" in bk) must(bk.ul.length === (g as any).ul.length, `${k.key} ul`);
      if ("table" in bk) {
        const t = (g as any).table;
        must(bk.table.rows.length === t.rows.length && bk.table.head.length === t.head.length, `${k.key} 표 ${si}.${bi}`);
        bk.table.rows.forEach((r, ri) => must(r.length === t.rows[ri].length, `${k.key} 표 행`));
      }
    });
  });
}
const phOf = (ds: Doc[]) => {
  const set = new Set<string>();
  for (const d of ds) for (const s of d.sections) for (const bl of s.blocks) {
    const texts = "p" in bl ? [bl.p] : "ul" in bl ? bl.ul : bl.table.rows.flat();
    for (const t of texts) for (const m of t.matchAll(/\{([a-zA-Z]+)\}/g)) set.add(m[1]!);
  }
  return [...set].sort();
};
must(phOf(ko).join() === phOf(en).join(), "자리표시자 집합");
// 한자 뒤 조사 사후 검사(한국어): 한자 한 글자 뒤의 와/과/은/는/이/가/을/를
const BATH = new Set(["甲", "乙", "丙", "丁", "庚", "辛", "壬", "丑", "寅", "辰", "戌", "申"]);
const badJosa: string[] = [];
for (const d of ko) for (const s of d.sections) for (const bl of s.blocks) {
  const texts = "p" in bl ? [bl.p] : "ul" in bl ? bl.ul : [];
  for (const t of texts) for (const m of t.matchAll(/([甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥])(와|과|은|는|이|가|을|를)(?![가-힣])/g)) {
    const bat = BATH.has(m[1]!);
    const ok = bat ? ["과", "은", "이", "을"].includes(m[2]!) : ["와", "는", "가", "를"].includes(m[2]!);
    if (!ok) badJosa.push(`${d.slug}: ${m[0]}`);
  }
}
if (badJosa.length) console.log(`⚠ 한자 뒤 조사 의심 ${badJosa.length}건: ${badJosa.slice(0, 8).join(" | ")}`);

writeFileSync(`${OUT}/dicts.json`, JSON.stringify({ DM_KO, DM_EN, TG_KO, TG_EN }, null, 2), "utf8");
writeFileSync(`${OUT}/saju82.ko.json`, JSON.stringify(ko, null, 2), "utf8");
writeFileSync(`${OUT}/saju82.en.json`, JSON.stringify(en, null, 2), "utf8");
const hid = (() => { const o: Record<string, string> = {}; for (const b of BRANCHES) HIDDEN[b]!.forEach(([, d], idx) => { o[hidKey(b, ROLE(HIDDEN[b]!.length, idx))] = `${(Math.round((d / 30) * 1000) / 10).toFixed(1)}%`; }); return o; })();
writeFileSync(`${OUT}/hidden-shares.json`, JSON.stringify(hid, null, 2), "utf8");
const md: string[] = ["# [초안] 사주링크 사전 82편(천간 10 · 지지 12 · 일주 60) — 한국어 원문\n"];
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
writeFileSync(`${OUT}/saju82.ko.md`, md.join("\n"), "utf8");
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
const wc = (d: Doc) => { let c = words(d.title) + words(d.summary); for (const s of d.sections) { c += words(s.title); for (const bl of s.blocks) c += "p" in bl ? words(bl.p) : "ul" in bl ? bl.ul.reduce((x, y) => x + words(y), 0) : bl.table.rows.reduce((x, r) => x + r.reduce((y, cc) => y + words(cc), 0), 0); } return c; };
const by = (t: string) => ko.filter((d) => d.type === t).map(wc);
const avg = (a: number[]) => Math.round(a.reduce((x, y) => x + y, 0) / a.length);
console.log(`문서 ${ko.length}편 (천간 ${by("stem").length} · 지지 ${by("branch").length} · 일주 ${by("pillar").length}) · 자리표시자 ${phOf(ko).length}종`);
console.log(`평균 어절: 천간 ${avg(by("stem"))} · 지지 ${avg(by("branch"))} · 일주 ${avg(by("pillar"))}`);
console.log(`지장간 지분 자리표시자 ${Object.keys(hid).length}개: ${Object.entries(hid).slice(0, 6).map(([k, v]) => `${k}=${v}`).join(" ")} …`);
