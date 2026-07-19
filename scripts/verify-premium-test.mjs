const inputFactors = {
  familyName: "안",
  givenNameHangul: "남규",
  gender: "male",
  generationNameUsage: "used",
  generationSyllable: "규",
  generationHanja: "奎",
  birthStatus: "born",
  calendarType: "solar",
  birthYear: "2024",
  birthMonth: "02",
  birthDay: "10",
  birthHour: "11-13",
  parentWishes: "밝은 지혜와 바른 마음",
  excludedMeanings: "병약함",
};

async function jsonRequest(path, body) {
  const response = await fetch(`http://localhost:3001${path}`, {
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

console.log(JSON.stringify({
  freeHanja: free.data.result.candidates[0].hanja,
  premiumHanja: reportData.primaryCandidate.hanjaName,
  fixedGeneration: reportData.primaryCandidate.hanjaName.endsWith("奎"),
  analysisSource: premium.data.premium.analysisSource,
  pillars: Object.values(reportData.saju.pillars).map((pillar) => pillar?.hanja ?? null),
  storyLength: premium.data.premium.interpretation.story.length,
  pdfStatus: pdfResponse.status,
  pdfType: pdfResponse.headers.get("content-type"),
  pdfBytes: pdfBytes.length,
  pdfMagic: String.fromCharCode(...pdfBytes.slice(0, 4)),
}, null, 2));
