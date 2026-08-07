// 관리자 프리미엄 리포트 시험 경로가 **끝까지 도는가** — 무료 결과를 만들고, 그것으로 유료
// 리포트 데이터를 뽑아 값이 채워졌는지 본다.
//
// ## 돌리기 전에 알아야 할 것 (2026-08-07)
//
// **이 검사는 돈이 든다.** `/api/naming`이 OpenAI를 부르고, 유료 리포트도 한 번 더 부른다.
// 그래서 다른 검사기처럼 무턱대고 돌리면 안 되고, 필요할 때 손으로 돌린다.
//
// **dev 서버는 이 스크립트가 띄우지 않는다.** 서버는 사람이 띄우는 것이 이 레포의 규칙이다
// (같은 앱 dev는 둘 못 띄운다). 서버가 없으면 아래에서 바로 알려 준다.
//
// 예전에는 주소가 `http://localhost:3001`로 **박혀 있었고 사용법도 없었다.** 그래서 전체
// 검사를 훑을 때 연결 실패 스택 트레이스만 나왔고, 무엇이 필요한지 알 수 없었다.
//
// 실행: apps/naminglink 에서 (dev 서버를 먼저 띄운 뒤)
//   node scripts/verify-premium-test.mjs
//   BASE_URL=http://localhost:3001 PRODUCT_CODE=TEN_SAJU_PDF node scripts/verify-premium-test.mjs

const BASE_URL = (process.env.BASE_URL || "http://localhost:3001").replace(/\/$/, "");

const alive = await fetch(BASE_URL, { method: "HEAD" }).catch(() => null);
if (!alive) {
  console.error(`서버가 없다: ${BASE_URL}`);
  console.error("이 검사는 dev 서버가 떠 있어야 하고 **OpenAI 호출로 비용이 든다.**");
  console.error("  apps/naminglink> npm run dev   (그다음 이 스크립트를 다시 돌린다)");
  process.exit(1);
}

const inputFactors = {
  familyName: "이",
  givenNameHangul: "도현",
  gender: "male",
  generationNameUsage: "used",
  generationSyllable: "현",
  generationHanja: "賢",
  birthStatus: "born",
  calendarType: "solar",
  birthYear: "2024",
  birthMonth: "02",
  birthDay: "10",
  birthHour: "11-13",
  parentWishes: "밝은 지혜와 바른 마음",
  excludedMeanings: "병약함",
};
const productCode = process.env.PRODUCT_CODE || "TEN_SAJU_PDF";

async function jsonRequest(path, body) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok || !data.ok) throw new Error(JSON.stringify({ path, status: response.status, data }));
  return { response, data };
}

const free = await jsonRequest("/api/naming", {
  serviceType: "HANJA_MEANING_MATCH",
  inputFactors,
  saveResult: false,
});
const premium = await jsonRequest("/api/premium-reports/test", {
  productCode,
  inputFactors,
  result: free.data.result,
});
const reportData = premium.data.premium.reportData;
const pdfResponse = await fetch("http://localhost:3001/api/premium-reports/test/pdf", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ reportData }),
});
const pdfBytes = new Uint8Array(await pdfResponse.arrayBuffer());
await mkdir("tmp/pdfs", { recursive: true });
await writeFile(`tmp/pdfs/premium-hanja-report-${productCode.toLowerCase()}.pdf`, pdfBytes);

console.log(JSON.stringify({
  freeHanja: free.data.result.candidates[0].hanja,
  premiumHanja: reportData.primaryCandidate.hanjaName,
  fixedGeneration: reportData.primaryCandidate.hanjaName.endsWith("奎"),
  analysisSource: premium.data.premium.analysisSource,
  pillars: reportData.saju
    ? Object.values(reportData.saju.pillars).map((pillar) => pillar?.hanja ?? null)
    : [],
  productCode,
  storyLength: premium.data.premium.interpretation.story.length,
  candidateCount: reportData.candidates.length,
  candidateAnalysisCount: premium.data.premium.interpretation.candidateAnalyses.length,
  rejectedCount: reportData.rejectedCandidates.length,
  pdfStatus: pdfResponse.status,
  pdfType: pdfResponse.headers.get("content-type"),
  pdfBytes: pdfBytes.length,
  pdfMagic: String.fromCharCode(...pdfBytes.slice(0, 4)),
}, null, 2));
import { mkdir, writeFile } from "node:fs/promises";
