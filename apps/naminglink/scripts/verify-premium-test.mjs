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

/**
 * **`HEAD`로는 서버가 준비됐는지 알 수 없다** (2026-08-20).
 *
 * 예전에는 `fetch(BASE_URL, { method: "HEAD" })`의 성공만 봤다. 그런데 `.catch(() => null)`이
 * 잡는 것은 **연결 실패뿐**이라, 응답이 오기만 하면 404도 500도 「서버가 있음」으로 통과했다.
 * 그 뒤 OpenAI를 부르는 단계로 들어가므로, **돈을 쓰고 나서** 화면이 없다는 것을 알게 된다.
 *
 * 그래서 실제 화면을 `GET`으로 받아 `ok`를 본다. 그리고 「서버가 없다」와 「서버는 있는데
 * 화면이 안 나온다」를 **다른 문장으로** 알린다 — 둘은 고치는 방법이 다르다.
 *
 * ## 갈래가 셋이다 (2026-08-20, 구현 명세 §12)
 *
 * 「서버에 닿았는가」로만 나누면 **성격이 다른 둘이 한 칸에 들어간다.** 이 저장소는 네 앱을
 * 붙은 포트로 띄운다 — `naminglink 3001 · inyeonlink 3002 · sajulink 3003 · dreamslink 3004`.
 * `BASE_URL`이 하나 옆을 가리키면 **200 과 `text/html`이 정상으로 돌아온다.** 그때 빨간불을
 * 내면 naminglink 에 없는 결함을 신고하는 셈이고, 출력이 「HTTP 200 · text/html」이라 읽는
 * 사람이 원인을 짚지도 못한다.
 *
 *     연결 실패 · 시간 초과          환경이 없다   → 못 돎  「dev 서버가 떠 있어야」
 *     4xx · 5xx · HTML 아님          앱이 깨졌다   → 빨간불  상태·콘텐츠 유형만 적는다
 *     200 HTML 인데 남의 앱          환경이 틀렸다 → 못 돎  「다른 앱을 보고 있다」
 *     Naming-Link 200 HTML           진행
 *
 * **가운데 갈래에는 「dev 서버가 떠 있어야」도 「비용이 든다」도 적지 않는다.**
 * `scripts/audit-verifiers.mjs`의 `CANNOT_RUN`이 그 두 문구로 「못 돎」을 가리기 때문에,
 * 적으면 진짜 앱 실패가 실행 불가로 조용히 분류된다.
 *
 * ## 사유는 **마지막 줄**에 적는다 (2026-08-21)
 *
 * 감사기가 예전에는 그 문구를 **출력 아무 데나**에서 찾았다. 그래서 절 제목에 낱말이 있기만
 * 해도 진짜 실패가 「못 돎」으로 갈렸다. 지금은 **마지막 줄**만 사유로 읽는다.
 *
 * 그 결과 이 파일처럼 사유 뒤에 힌트를 더 찍는 검사기는 **사유가 가려진다.** 사람이 읽을
 * 문장은 그대로 두고, 마지막에 `CANNOT_RUN` 한 줄을 붙여 계약을 명시한다.
 */
const READY_TIMEOUT_MS = 45_000;
const HINT_DEV = "  apps/naminglink> npm run dev   (그다음 이 스크립트를 다시 돌린다)";

const probe = await fetch(BASE_URL, {
  headers: { accept: "text/html" },
  signal: AbortSignal.timeout(READY_TIMEOUT_MS),
}).catch((error) => ({ __failed: true, timedOut: error?.name === "TimeoutError" }));

if (probe.__failed) {
  // ① 환경이 없다. 첫 컴파일이 오래 걸리는 경우도 여기로 온다.
  console.error(`서버가 없다: ${BASE_URL} — ${probe.timedOut ? `${READY_TIMEOUT_MS / 1000}초 안에 응답이 없다` : "연결 실패"}`);
  console.error("이 검사는 dev 서버가 떠 있어야 하고 **OpenAI 호출로 비용이 든다.**");
  console.error(HINT_DEV);
  console.error("CANNOT_RUN — dev 서버가 떠 있어야 돌 수 있다.");
  process.exit(1);
}

const probeType = probe.headers.get("content-type") ?? "(없음)";
if (probe.status !== 200 || !/text\/html/i.test(probeType)) {
  // ② 앱이 깨졌다. **못 돎으로 새는 문구를 쓰지 않는다.**
  console.error(`화면이 나오지 않는다: ${BASE_URL} → HTTP ${probe.status} · content-type ${probeType}`);
  console.error("서버는 응답했다. 앱 쪽 결함이므로 실패로 센다.");
  process.exit(1);
}

const probeHtml = await probe.text();
if (!/og:site_name"\s+content="Naming-Link"|<title>[^<]*Naming-Link/i.test(probeHtml)) {
  // ③ 환경이 틀렸다. 남의 앱이 정상 응답한 것을 우리 결함으로 세지 않는다.
  const seen = /og:site_name"\s+content="([^"]+)"/i.exec(probeHtml)?.[1] ?? "알 수 없음";
  console.error(`다른 앱을 보고 있다: ${BASE_URL} — 화면이 「${seen}」이다(Naming-Link 가 아니다).`);
  console.error("  BASE_URL 을 확인할 것. 이 저장소는 네 앱을 붙은 포트로 띄운다:");
  console.error("  naminglink 3001 · inyeonlink 3002 · sajulink 3003 · dreamslink 3004");
  console.error("CANNOT_RUN — 다른 앱을 보고 있다. 이 앱을 검사한 것이 아니다.");
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
const pdfResponse = await fetch(`${BASE_URL}/api/premium-reports/test/pdf`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ reportData }),
});
const pdfBytes = new Uint8Array(await pdfResponse.arrayBuffer());
await mkdir("tmp/pdfs", { recursive: true });
/**
 * **파일 이름에 `-ko`를 남긴다** (2026-08-19).
 *
 * 이 리포트는 국내 상품이라 본문이 한국어다. 그런데 `audit-pdf-language.py`는 같은 폴더의
 * PDF를 전수로 훑으며 **이름에 `-ko`가 없으면 비한국어 문서로 본다** — 그래서 이 파일이
 * 「한국어가 남은 문서」로 잡혔다(한글 3,607개).
 *
 * 이 검사기는 dev 서버가 떠 있어야 돌기 때문에 오래 「못 돎」으로 조용했고, 서버를 띄운 날
 * 처음 드러났다. **돌지 않는 검사기는 통과가 아니라 검사되지 않은 것이다.**
 */
await writeFile(`tmp/pdfs/premium-hanja-report-${productCode.toLowerCase()}-ko.pdf`, pdfBytes);

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
