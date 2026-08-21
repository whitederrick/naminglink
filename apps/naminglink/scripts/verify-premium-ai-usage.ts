// 프리미엄 리포트 생성이 ai_usage_logs에 사용량을 남기는지 실호출로 검증한다.
// 실행: cd scripts && npx tsx --tsconfig tsconfig.sweep.json verify-premium-ai-usage.ts
// OpenAI를 실제로 호출하므로 토큰 비용이 조금 든다. 검증 후 남긴 행은 지운다.
import { createClient } from "@supabase/supabase-js";

// **`.env.local` 파싱은 한 곳에만 둔다** (2026-08-21). 여기 있던 것을 `load-env-local.ts` 로
// 옮겼다 — 따옴표 벗기기·주석 처리가 두 벌로 갈라지면 한쪽 검사기만 조용히 자격증명을
// 못 읽는다. `verify-legal-source.ts` 가 그 자리에서 늘 「못 돎」이었다.
import { loadEnvLocal } from "./load-env-local";

const env = loadEnvLocal();

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  const { buildGlobalNamePremiumResult } = await import("@/lib/global-name-premium");
  const startedAt = new Date().toISOString();

  const result = await buildGlobalNamePremiumResult({
    inputFactors: {
      originalName: "Emma Wilson",
      country: "United States",
      gender: "female",
      birthYear: 1995,
      birthMonth: 6,
      birthDay: 15,
    },
    candidates: [
      {
        hangul: "김서연",
        pronunciation: "Kim Seo-yeon / 김서연",
        meaning: "상서로운 인연",
        recommendation_reason: "Emma의 부드러운 울림을 살린 이름",
        cultural_fit: "한국에서 흔하고 자연스러운 이름",
        usage_note: "일상과 공식 문서 모두 사용 가능",
      },
    ],
    fonts: [],
    outputLanguage: "en",
    reportId: "NL-VERIFY",
  });
  console.log(`리포트 생성됨 — 후보 ${result.reportData.candidates.length}개`);

  const { data, error } = await supabase
    .from("ai_usage_logs")
    .select("id,service_type,model,prompt_tokens,completion_tokens,total_tokens,latency_ms,status")
    .eq("service_type", "GLOBAL_NAME_PDF")
    .gte("created_at", startedAt)
    .order("created_at", { ascending: false });
  if (error) throw new Error(`조회 실패: ${error.message}`);
  if (!data?.length) throw new Error("ai_usage_logs에 행이 남지 않았습니다.");

  const row = data[0];
  console.log("기록된 사용량:", row);
  const problems: string[] = [];
  if (data.length !== 1) problems.push(`행이 ${data.length}개 — 리포트당 1행이어야 함`);
  if (Number(row.total_tokens) <= 0) problems.push("total_tokens가 0");
  if (Number(row.prompt_tokens) <= 0) problems.push("prompt_tokens가 0");
  if (row.status !== "SUCCESS") problems.push(`status가 ${row.status}`);
  if (!row.model || row.model === "unknown") problems.push("model이 비어 있음");

  await supabase.from("ai_usage_logs").delete().in("id", data.map((item) => item.id));
  console.log("검증 행 삭제 완료.");

  if (problems.length) {
    problems.forEach((p) => console.error(`  FAIL ${p}`));
    throw new Error(`${problems.length}건 실패`);
  }
  console.log("\nPASS — 리포트 1건이 사용량 1행으로 합산 기록됨.");
}

void (async () => {
  try {
    await main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
})();
