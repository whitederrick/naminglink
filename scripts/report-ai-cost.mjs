// ai_usage_logs를 서비스·모델별로 집계하고 토큰 단가로 비용을 환산한다.
// 실행: cd scripts && node report-ai-cost.mjs [일수]   (기본 30일)
//
// 단가는 아래 상수에 적어 두고 쓴다. OpenAI가 단가를 바꾸면 여기만 고치면 된다.
// 실제 청구액과 비교해 맞는지 주기적으로 확인할 것 — 이 스크립트는 로그 기반 추정이다.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const USD_PER_1M_INPUT = 0.15; // gpt-4o-mini
const USD_PER_1M_OUTPUT = 0.6;
const KRW_PER_USD = 1400;

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/).filter((l) => l.includes("=")).map((l) => {
      const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")];
    }),
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const days = Number(process.argv[2] ?? 30);
const since = new Date(Date.now() - days * 86400000).toISOString();
const { data, error } = await supabase
  .from("ai_usage_logs")
  .select("service_type,model,prompt_tokens,completion_tokens,latency_ms,status")
  .gte("created_at", since)
  .limit(10000);
if (error) { console.error(error.message); process.exit(1); }

const cost = (prompt, completion) =>
  (prompt / 1e6) * USD_PER_1M_INPUT + (completion / 1e6) * USD_PER_1M_OUTPUT;

const groups = new Map();
for (const row of data) {
  const key = `${row.service_type} / ${row.model}`;
  const g = groups.get(key) ?? { n: 0, prompt: 0, completion: 0, latency: 0, errors: 0 };
  g.n += 1;
  g.prompt += row.prompt_tokens ?? 0;
  g.completion += row.completion_tokens ?? 0;
  g.latency += row.latency_ms ?? 0;
  if (row.status !== "SUCCESS") g.errors += 1;
  groups.set(key, g);
}

console.log(`최근 ${days}일 · ${data.length}건 (단가 $${USD_PER_1M_INPUT}/$${USD_PER_1M_OUTPUT} per 1M, ₩${KRW_PER_USD}/USD)\n`);
let totalUsd = 0;
for (const [key, g] of [...groups.entries()].sort((a, b) => b[1].n - a[1].n)) {
  const perCall = cost(g.prompt / g.n, g.completion / g.n);
  const sum = cost(g.prompt, g.completion);
  totalUsd += sum;
  console.log(key);
  console.log(`  ${g.n}건(실패 ${g.errors}) | 평균 입력 ${Math.round(g.prompt / g.n)} / 출력 ${Math.round(g.completion / g.n)} 토큰 | 평균 ${Math.round(g.latency / g.n)}ms`);
  console.log(`  건당 ≈ $${perCall.toFixed(6)} (₩${(perCall * KRW_PER_USD).toFixed(2)}) | 합계 ≈ $${sum.toFixed(4)} (₩${Math.round(sum * KRW_PER_USD)})`);
}
console.log(`\n총합 ≈ $${totalUsd.toFixed(4)} (₩${Math.round(totalUsd * KRW_PER_USD)})`);
