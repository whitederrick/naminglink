// 사주링크 82편 코드 등록: guide-index.ts · page.tsx 82개 · doc-values.ts. 이미 등록돼 있으면 던진다.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
const APP = "C:/myProjects/naminglink/apps/sajulink/src";
const here = "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/7a99bada-f923-4caa-869f-cf34b3081068/scratchpad/saju";
const docs = JSON.parse(readFileSync(`${here}/out/saju82.ko.json`, "utf8"));
if (docs.length !== 82) throw new Error(`문서 ${docs.length}편`);

// 1) guide-index.ts — zodiac 다음, true-solar-time 앞
{
  const f = `${APP}/lib/guide-index.ts`;
  let t = readFileSync(f, "utf8");
  if (t.includes('slug: "stem-gap"')) throw new Error("guide-index 이미 등록됨");
  const anchor = '  { slug: "zodiac", track: "reading" },\n';
  if (t.split(anchor).length !== 2) throw new Error("guide-index 앵커");
  const lines = docs.map((d) => `  { slug: "${d.slug}", track: "reading" },\n`).join("");
  t = t.replace(anchor, anchor + lines);
  writeFileSync(f, t, "utf8");
}

// 2) page.tsx 82개 — zodiac 틀
{
  const tpl = readFileSync(`${APP}/app/[locale]/guide/zodiac/page.tsx`, "utf8");
  if (!tpl.includes('const SLUG = "zodiac";')) throw new Error("틀의 SLUG 줄");
  for (const d of docs) {
    const dir = `${APP}/app/[locale]/guide/${d.slug}`;
    if (existsSync(`${dir}/page.tsx`)) throw new Error(`${d.slug} 이미 있음`);
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/page.tsx`, tpl.replace('const SLUG = "zodiac";', `const SLUG = "${d.slug}";`), "utf8");
  }
}

// 3) doc-values.ts — 지장간 지분 · 월령 배수
{
  const f = `${APP}/lib/doc-values.ts`;
  let t = readFileSync(f, "utf8");
  if (t.includes("hidJaYeo") || t.includes("BRANCH_HIDDEN_STEMS")) throw new Error("doc-values 이미 등록됨");
  const imp = 'import { BIRTHPLACES } from "@/lib/birthplaces";\n';
  if (!t.includes(imp)) throw new Error("doc-values import 앵커");
  t = t.replace(imp, 'import { BRANCH_HIDDEN_STEMS, VITALITY_MULTIPLIER } from "@naminglink/core/saju/elements";\n' + imp);
  const a = "    overallShare: percent(cfg.categoryWeights.overallShare),\n";
  if (!t.includes(a)) throw new Error("doc-values 값 앵커");
  t = t.replace(a, a + `
    // 월령 상태별 배수(왕상휴수사) — 지지·천간 사전의 표가 쓴다.
    vitalityWang: String(VITALITY_MULTIPLIER.WANG),
    vitalitySang: String(VITALITY_MULTIPLIER.SANG),
    vitalityHyu: String(VITALITY_MULTIPLIER.HYU),
    vitalitySu: String(VITALITY_MULTIPLIER.SU),
    vitalitySa: String(VITALITY_MULTIPLIER.SA),
`);
  const b = "  /**\n   * 값은 상품 설정(DB)이 정한다.";
  if (!t.includes(b)) throw new Error("doc-values 주석 앵커");
  t = t.replace(b, `  /**
   * 지장간 지분 — \`hid<지지><자리>\`. 그 지지의 30일 가운데 천간이 차지하는 날의 비율이다.
   * 자리표시자는 영문자만 허용돼 지지는 로마자(Ja·Chuk·In…), 자리는 Yeo(여기)·Jung(중기)·Bon(본기)로 적는다.
   * 엔진의 \`BRANCH_HIDDEN_STEMS\`에서 읽어 그리므로 규칙이 바뀌면 글이 따라온다.
   */
  const BRANCH_KEY = {
    子: "Ja", 丑: "Chuk", 寅: "In", 卯: "Myo", 辰: "Jin", 巳: "Sa",
    午: "O", 未: "Mi", 申: "Sin", 酉: "Yu", 戌: "Sul", 亥: "Hae",
  } as const;
  const total = Object.values(BRANCH_HIDDEN_STEMS)[0]!.reduce((n, [, days]) => n + days, 0);
  for (const [branch, stems] of Object.entries(BRANCH_HIDDEN_STEMS)) {
    stems.forEach(([, days], index) => {
      const role = stems.length === 2 ? ["Yeo", "Bon"][index] : ["Yeo", "Jung", "Bon"][index];
      values[\`hid\${BRANCH_KEY[branch as keyof typeof BRANCH_KEY]}\${role}\`] =
        \`\${(Math.round((days / total) * 1000) / 10).toFixed(1)}%\`;
    });
  }

` + b);
  writeFileSync(f, t, "utf8");
}
console.log("등록 완료: guide-index +82 · page.tsx 82개 · doc-values");
