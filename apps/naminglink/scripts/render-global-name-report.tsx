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
    candidates: [
      {
        hangul: "김하늘",
        pronunciation: "Kim Ha-neul",
        meaning: "'하늘' is a native Korean word meaning 'sky', evoking openness and honesty.",
        recommendation_reason:
          "The soft two-syllable given name 하늘 keeps a gentle sound close to 'Emily'.",
        cultural_fit: "하늘 is a beloved unisex native-Korean name among younger generations.",
        usage_note: "Works well in workplaces and everyday introductions.",
      },
      {
        hangul: "김에밀리",
        pronunciation: "Kim Emily",
        meaning: "A direct, friendly adaptation keeping the original given name.",
        recommendation_reason: "Keeps your original name recognizable while adding a Korean surname.",
        cultural_fit: "Immediately recognizable as an international name in Korea.",
        usage_note: "Good for informal settings and nametags.",
      },
      {
        hangul: "김은솔",
        pronunciation: "Kim Eun-sol",
        meaning: "'은' evokes grace; '솔' is the Korean word for pine, symbolizing steadiness.",
        recommendation_reason: "Shares the soft 'e' opening of Emily and feels calm and modern.",
        cultural_fit: "은솔 is a gentle modern name, popular for its natural imagery.",
        usage_note: "Suited to workplaces and formal introductions.",
      },
      {
        hangul: "김미리",
        pronunciation: "Kim Mi-ri",
        meaning: "'미리' echoes the sound of Emily's ending and reads smoothly in Korean.",
        recommendation_reason: "Strong sound echo with 'Emily' with a light, friendly tone.",
        cultural_fit: "Reads as cute and approachable to Korean ears.",
        usage_note: "Great for daily life and friendly workplaces.",
      },
      {
        hangul: "김하린",
        pronunciation: "Kim Ha-rin",
        meaning: "'하' suggests sky or greatness; '린' adds a refined, gentle finish.",
        recommendation_reason: "Modern two-syllable name whose flow mirrors Emily's rhythm.",
        cultural_fit: "하린 is trendy among younger Koreans, polished yet warm.",
        usage_note: "Fits professional and social settings alike.",
      },
    ],
    outputLanguage: "en",
    reportId: "NL-TESTSAMPLE01",
  });
  console.log("생성 데이터 요약:");
  console.log("- candidates:", premium.reportData.candidates.map((c) => c.name.hangul).join(", "));
  console.log("- summary:", premium.reportData.analysisSummary.slice(0, 120));
  console.log("- saju:", premium.reportData.saju ? premium.reportData.saju.dominant : "(없음)");
  const buffer = await renderGlobalNameReportPdf(premium.reportData);
  writeFileSync(outputPath, buffer);
  console.log(`PDF 저장: ${outputPath} (${Math.round(buffer.length / 1024)}KB)`);
}

void main();
