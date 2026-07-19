import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  renderPremiumHanjaReport,
  type PremiumHanjaReportData,
} from "../src/lib/pdf/premium-hanja-report";
import { calculatePremiumSaju } from "../src/lib/saju/engine";

const outputPath = path.join(
  process.cwd(),
  "tmp/pdfs/premium-hanja-report-sample.pdf",
);

const generatedAt = "2026-07-16T05:00:00.000Z";
const expiresAt = "2026-07-17T05:00:00.000Z";

const sample: PremiumHanjaReportData = {
  reportId: "NL-20260716-SAMPLE",
  generatedAt,
  expiresAt,
  childNameHangul: "안덕규",
  parentWishes: "밝은 지혜와 바른 마음으로 자기 길을 걸어가는 사람",
  excludedMeanings: "병약함이나 지나치게 강압적인 인상",
  saju: calculatePremiumSaju({
    calendarType: "solar",
    year: 2024,
    month: 2,
    day: 10,
    birthHour: 12,
    birthMinute: 30,
    longitude: 126.978,
    birthplaceLabel: "서울",
    timeZone: "Asia/Seoul",
  }),
  primaryCandidate: {
    displayName: "안덕규",
    hanjaName: "安德奎",
    focusLabel: "종합 의미 우선안",
    summary:
      "평안함을 바탕으로 덕을 쌓고, 별처럼 자기 자리에서 빛나는 사람이라는 의미를 담은 조합입니다.",
    characters: [
      {
        hangul: "덕",
        hanja: "德",
        meaning: "큰 덕, 바른 품성과 배려",
        elementLabel: "화",
        officialReadingConfirmed: true,
      },
      {
        hangul: "규",
        hanja: "奎",
        meaning: "별 이름, 빛나는 문장과 재능",
        elementLabel: "토",
        officialReadingConfirmed: true,
      },
    ],
    story:
      "德은 사람 사이에서 신뢰를 쌓는 바른 마음을, 奎는 밤하늘에서 방향을 밝히는 별의 이미지를 전합니다. 두 글자를 함께 쓰면 타인을 존중하는 품성을 바탕으로 자기 재능을 온전히 펼치는 사람이라는 이야기가 만들어집니다.",
    practicalUse:
      "각 글자의 뜻이 독립적으로 분명하고 결합 방향도 자연스러워, 학교와 사회생활 및 공식 문서에서 이름의 의미를 간결하게 설명하기 좋습니다.",
    officialSourceLabel:
      "후보 글자와 지정 음가는 서비스에 등록된 공식 인명용 한자 자료의 production 검수본을 기준으로 확인했습니다.",
  },
};

async function main() {
  await mkdir(path.dirname(outputPath), { recursive: true });
  const buffer = await renderPremiumHanjaReport(sample);
  await writeFile(outputPath, buffer);
  console.log(outputPath);
}

void main();
