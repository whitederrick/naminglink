// 운영자 콘솔 3개 화면(AI 사용량 · 글로벌 접속 · 활용·광고)이 보는 테이블의 행 수를 센다.
// **읽기 전용이다.** 지우지 않는다.

import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const at = line.indexOf("=");
      return [line.slice(0, at).trim(), line.slice(at + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error(".env.local에 Supabase 값이 없다");

const TABLES = [
  ["ai_usage_logs", "AI 사용량"],
  ["site_events", "글로벌 접속 · 서비스 활용"],
  ["ad_events", "광고 노출·보상"],
];

for (const [table, label] of TABLES) {
  const response = await fetch(`${url}/rest/v1/${table}?select=id`, {
    method: "HEAD",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "count=exact",
      Range: "0-0",
    },
  });
  const range = response.headers.get("content-range");
  const total = range ? range.split("/")[1] : `조회 실패(${response.status})`;
  console.log(`${table.padEnd(16)} ${String(total).padStart(8)} 행   ${label}`);
}
