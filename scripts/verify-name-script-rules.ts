// KOREAN_TO_GLOBAL 비로마자 대상 언어의 문자 체계 규칙(NAME_SCRIPT_RULES) 실호출 검증 스윕.
// 감사 백로그 "힌디어 외 스크립트 규칙 검증 스윕" 처리용 — 언어당 실호출 1회(gpt-4o-mini).
// 검사 항목: ① name이 해당 문자 체계로만 표기(로마자·한글 금지)
//           ② full_name_local에 한글 성 잔존 없음(normalizeKoreanToGlobalResult 검증)
//           ③ pronunciation "로마자 / 한글읽기" 형식(경고만, 모델 편차 허용)
// 실행: npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-name-script-rules.ts
import { readFileSync } from "node:fs";
import path from "node:path";

// generateNamingResult는 OPENAI_API_KEY를 호출 시점에 읽으므로 정적 import보다 env를 먼저 채울 필요 없음.
import { generateNamingResult } from "@/lib/openai";

for (const line of readFileSync(path.join(__dirname, "../.env.local"), "utf8").split(/\r?\n/)) {
  const index = line.indexOf("=");
  if (index < 0) continue;
  const key = line.slice(0, index).trim();
  const value = line.slice(index + 1).trim().replace(/^"|"$/g, "");
  if (key && !(key in process.env)) process.env[key] = value;
}

const CASES: Record<string, { country: string; pattern: RegExp; label: string }> = {
  ja: { country: "jp", pattern: /[぀-ヿ一-鿿]/, label: "가나·한자" },
  zh: { country: "cn", pattern: /[一-鿿]/, label: "한자" },
  ru: { country: "ru", pattern: /[Ѐ-ӿ]/, label: "키릴" },
  mn: { country: "mn", pattern: /[Ѐ-ӿ]/, label: "키릴" },
  kk: { country: "kz", pattern: /[Ѐ-ӿ]/, label: "키릴" },
  th: { country: "th", pattern: /[฀-๿]/, label: "태국 문자" },
  km: { country: "kh", pattern: /[ក-៿]/, label: "크메르 문자" },
  ar: { country: "sa", pattern: /[؀-ۿ]/, label: "아랍 문자" },
  hi: { country: "in", pattern: /[ऀ-ॿ]/, label: "데바나가리" },
};

type Candidate = {
  name?: unknown;
  full_name_local?: unknown;
  pronunciation?: unknown;
};

async function verifyLanguage(language: string) {
  const { country, pattern, label } = CASES[language];
  const { result } = await generateNamingResult("KOREAN_TO_GLOBAL", {
    familyName: "김",
    givenName: "지후",
    gender: "male",
    identityPriority: "balanced",
    targetCountry: country,
    targetLanguage: language,
    usageContext: "business",
    preferredTone: "no_preference",
  });
  const candidates = (result as { candidates?: Candidate[] }).candidates ?? [];
  const failures: string[] = [];
  const warnings: string[] = [];
  if (candidates.length === 0) failures.push("후보가 없음");
  for (const candidate of candidates) {
    const name = String(candidate.name ?? "").trim();
    const full = String(candidate.full_name_local ?? "");
    const pronunciation = String(candidate.pronunciation ?? "");
    if (!pattern.test(name)) failures.push(`name "${name}"에 ${label} 없음`);
    if (/[A-Za-z]/.test(name)) failures.push(`name "${name}"에 로마자 잔존`);
    if (/[가-힣]/.test(name)) failures.push(`name "${name}"에 한글 잔존`);
    if (/[가-힣]/.test(full)) failures.push(`full_name_local "${full}"에 한글 잔존`);
    if (!/\/\s*[가-힣]/.test(pronunciation)) {
      warnings.push(`pronunciation "${pronunciation}" 형식 이탈`);
    }
  }
  return { language, label, count: candidates.length, failures, warnings };
}

async function main() {
  const reports = await Promise.all(
    Object.keys(CASES).map(async (language) => {
      try {
        return await verifyLanguage(language);
      } catch (error) {
        return {
          language,
          label: CASES[language].label,
          count: 0,
          failures: [`호출 실패: ${error instanceof Error ? error.message : String(error)}`],
          warnings: [],
        };
      }
    }),
  );

  let failed = false;
  for (const report of reports) {
    const status = report.failures.length === 0 ? "PASS" : "FAIL";
    if (report.failures.length > 0) failed = true;
    console.log(`[${status}] ${report.language} (${report.label}) 후보 ${report.count}개`);
    for (const failure of report.failures) console.log(`  - ${failure}`);
    for (const warning of report.warnings) console.log(`  ~ 경고: ${warning}`);
  }
  if (failed) {
    console.error("\n스크립트 규칙 스윕 실패 항목이 있습니다.");
    process.exit(1);
  }
  console.log("\n9개 비로마자 언어 스크립트 규칙 스윕 ALL PASS.");
}

void main();
