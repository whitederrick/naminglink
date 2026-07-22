// 글로벌 프리미엄 3장 PDF 실검증 스크립트.
// 실호출로 buildGlobalNamePremiumResult(gpt-4o-mini 1회)를 돌려 리포트 데이터를 만들고
// PDF로 렌더해 저장한다. 레이아웃 확인은 PNG 렌더(pymupdf)로 한다(텍스트 추출 금지).
// 실행: npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/render-global-name-report.tsx <출력.pdf>
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { buildGlobalNamePremiumResult } from "../src/lib/global-name-premium";
import { renderGlobalNameReportPdf } from "../src/lib/pdf/global-name-report";

for (const line of readFileSync(path.join(__dirname, "../.env.local"), "utf8").split(/\r?\n/)) {
  const index = line.indexOf("=");
  if (index < 0) continue;
  const key = line.slice(0, index).trim();
  const value = line.slice(index + 1).trim().replace(/^"|"$/g, "");
  if (key && !(key in process.env)) process.env[key] = value;
}

const outputPath = process.argv[2] ?? "global-name-report-sample.pdf";

async function main() {
  const premium = await buildGlobalNamePremiumResult({
    inputFactors: {
      originalName: "Emily Carter",
      country: "us",
      gender: "female",
      nameMotivation: "korean_education",
      koreanTone: "natural_modern",
      usageContext: "korean_workplace",
      birthYear: "1995",
      birthMonth: "8",
      birthDay: "17",
      birthHour: "unknown",
    },
    candidate: {
      hangul: "김하늘",
      pronunciation: "Kim Ha-neul",
      meaning:
        "'하늘' is a native Korean word meaning 'sky', evoking openness and honesty. '김' is the most common Korean family name.",
      recommendation_reason:
        "The soft two-syllable given name 하늘 keeps a gentle sound close to 'Emily' while feeling natural and modern in Korea.",
      cultural_fit:
        "하늘 is a beloved unisex native-Korean name, common among younger generations and easy for colleagues to call.",
      usage_note: "Works well in workplaces and everyday introductions; no awkward homonyms.",
    },
    outputLanguage: "en",
    reportId: "NL-TESTSAMPLE01",
  });
  console.log("생성 데이터 요약:");
  console.log("- name:", premium.reportData.name);
  console.log("- summary:", premium.reportData.sections.analysisSummary.slice(0, 140));
  console.log(
    "- breakdown:",
    premium.reportData.sections.meaningBreakdown.map((entry) => entry.syllable).join(","),
  );
  console.log("- saju:", premium.reportData.saju ? premium.reportData.saju.dominant : "(없음)");
  const buffer = await renderGlobalNameReportPdf(premium.reportData);
  writeFileSync(outputPath, buffer);
  console.log(`PDF 저장: ${outputPath} (${Math.round(buffer.length / 1024)}KB)`);
}

void main();
