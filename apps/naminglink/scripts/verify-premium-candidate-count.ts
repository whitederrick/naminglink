import { buildHanjaMeaningResult } from "../src/lib/hanja";
import { buildPremiumHanjaTestResult } from "../src/lib/premium-hanja-analysis";

async function main() {
  process.env.OPENAI_API_KEY = "";

  const result = buildHanjaMeaningResult({
    familyName: "안",
    givenNameHangul: "덕규",
    birthMonth: "unknown",
    generationNameUsage: "used",
    generationSyllable: "규",
    generationHanja: "奎",
    officialHanjaCandidates: {
      덕: [
        { character: "徳", reading: "덕", meaning: "德의 略字", note: "약자", tags: [] },
        { character: "德", reading: "덕", meaning: "덕 덕베풀", note: "본자", tags: [] },
        { character: "㯖", reading: "덕", meaning: "덕,적", note: "음가 목록", tags: [] },
        { character: "悳", reading: "덕", meaning: "덕 덕베풀", note: "동일 의미", tags: [] },
      ],
      규: [
        { character: "奎", reading: "규", meaning: "별이름", note: "돌림자", tags: [] },
      ],
    },
  });

  const report = await buildPremiumHanjaTestResult(
    {
      familyName: "안",
      givenNameHangul: "덕규",
      birthMonth: "unknown",
      generationNameUsage: "used",
      generationSyllable: "규",
      generationHanja: "奎",
    },
    result,
    {
      candidateLimit: 10,
      includeSaju: false,
    },
  );

  const screenCandidates = result.candidates as Array<{ hanja: string }>;
  const reportCandidates = report.reportData.candidates ?? [];
  const analyses = report.interpretation.candidateAnalyses;

  if (
    screenCandidates.length !== 1 ||
    reportCandidates.length !== screenCandidates.length ||
    analyses.length !== screenCandidates.length ||
    reportCandidates[0]?.hanjaName !== screenCandidates[0]?.hanja ||
    analyses[0]?.hanjaName !== screenCandidates[0]?.hanja
  ) {
    throw new Error(
      `화면·PDF 후보 수 일치 검증 실패: 화면 ${screenCandidates.length}, PDF ${reportCandidates.length}, 분석 ${analyses.length}`,
    );
  }

  console.log(
    `화면·PDF 후보 수 일치 검증 통과: ${screenCandidates.length}개 (${screenCandidates[0]?.hanja})`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
