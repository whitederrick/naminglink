// 입문 문서(saju-letters)의 표 값을 각 로케일의 기존 문서에서 글자 그대로 뽑는다.
//   천간 표  ← guide/stem-gap 의 십신 표(열 행의 앞 두 칸: 천간 이름 · 오행·음양) + 그 표의 머리글 둘째 칸
//   지지 표  ← guide/zodiac 의 첫 표(캡션 · 머리글 · 열두 행)
//   되돌아가기 이름 ← guide/stem-gap 의 backLabel
// 사용: npx tsx extract-fill.mts <출력 폴더>
import { writeFileSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";

const DIR = "C:/myProjects/naminglink/apps/sajulink/src/lib/doc-content";
const OUT = process.argv[2];
if (!OUT) throw new Error("출력 폴더가 필요하다");
mkdirSync(OUT, { recursive: true });

const LOCALES = ["ko", "en", "ar", "de", "es", "fil", "fr", "hi", "id", "it", "ja", "kk", "km", "mn", "ms", "pl", "pt", "ru", "th", "tr", "uz", "vi", "zh"];
const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const must = (c: boolean, m: string) => { if (!c) throw new Error(`단언 실패: ${m}`); };

for (const loc of LOCALES) {
  const mod: any = await import(pathToFileURL(`${DIR}/${loc}.ts`).href);
  const docs = (mod[`${loc.toUpperCase()}_DOCS`] ?? mod.default?.[`${loc.toUpperCase()}_DOCS`]) as Record<string, any>;
  must(!!docs, `${loc}: DOCS 없음`);

  const gap = docs["guide/stem-gap"];
  must(!!gap, `${loc}: stem-gap 없음`);
  const stemTable = gap.sections.flatMap((s: any) => s.blocks).find((b: any) => b.table)?.table;
  must(!!stemTable && stemTable.rows.length === 10, `${loc}: stem-gap 표 행 ${stemTable?.rows.length}`);
  const stemRows = stemTable.rows.map((r: string[]) => [r[0], r[1]]);
  // 열 행이 甲…癸 순서이고 각 이름 칸에 그 한자가 들어 있어야 한다(ko·en·ja 모두 「甲」을 병기한다)
  stemRows.forEach(([name]: string[], i: number) => must(name.includes(STEMS[i]!), `${loc}: 행 ${i} 「${name}」에 ${STEMS[i]} 없음`));

  const zod = docs["guide/zodiac"];
  must(!!zod, `${loc}: zodiac 없음`);
  const zt = zod.sections.flatMap((s: any) => s.blocks).find((b: any) => b.table)?.table;
  must(!!zt && zt.rows.length === 12 && zt.head.length === 2, `${loc}: zodiac 표 모양`);
  zt.rows.forEach((r: string[], i: number) => must(r[0] === BRANCHES[i] || r[0]!.includes(BRANCHES[i]!), `${loc}: zodiac 행 ${i} 「${r[0]}」`));

  writeFileSync(
    `${OUT}/${loc}.json`,
    JSON.stringify(
      {
        // 허브 도입의 사전 이름 — 각 사전 문서의 꼬리표(eyebrow)를 글자 그대로 쓴다
        eyebrowStems: gap.eyebrow,
        eyebrowBranches: docs["guide/branch-ja"].eyebrow,
        eyebrowPillars: docs["guide/pillar-gap-ja"].eyebrow,
        backLabel: gap.backLabel,
        stemHead1: stemTable.head[1],
        stemRows,
        zodiacCaption: zt.caption,
        zodiacHead: zt.head,
        zodiacRows: zt.rows,
      },
      null,
      2,
    ),
    "utf8",
  );
}
console.log(`채움 ${LOCALES.length}개 로케일`);
