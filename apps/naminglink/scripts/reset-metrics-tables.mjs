// 운영자 콘솔 3개 화면이 보는 지표 데이터를 비운다.
//
//   ai_usage_logs   AI 사용량
//   site_events     글로벌 접속 · 서비스 활용
//   ad_events       광고 노출 · 보상
//
// **되돌릴 수 없다.** 실 도메인 전환(2026-07-29) 전 시험 기록을 걷어내고 여기서부터 다시
// 세기 위한 것이다. 주문(`orders`)·상품 설정·이력은 건드리지 않는다 — 매출과 판매 상태는
// 지표가 아니라 거래 기록이다.

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

const headers = { apikey: key, Authorization: `Bearer ${key}` };

async function count(table) {
  const response = await fetch(`${url}/rest/v1/${table}?select=id`, {
    method: "HEAD",
    headers: { ...headers, Prefer: "count=exact", Range: "0-0" },
  });
  const range = response.headers.get("content-range");
  return range ? Number(range.split("/")[1]) : null;
}

const TABLES = ["ai_usage_logs", "site_events", "ad_events"];

for (const table of TABLES) {
  const before = await count(table);

  // PostgREST는 조건 없는 DELETE를 거부한다. 항상 참인 조건을 준다.
  const response = await fetch(`${url}/rest/v1/${table}?id=not.is.null`, {
    method: "DELETE",
    headers: { ...headers, Prefer: "return=minimal" },
  });
  if (!response.ok) {
    console.log(`${table}: 삭제 실패 ${response.status} ${await response.text()}`);
    continue;
  }

  const after = await count(table);
  console.log(`${table.padEnd(16)} ${String(before).padStart(6)} → ${String(after).padStart(6)} 행`);
}
