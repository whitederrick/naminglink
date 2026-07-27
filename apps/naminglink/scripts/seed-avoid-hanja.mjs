// 불용문자 목록을 docs/naminglink_불용문자.json에서 읽어 DB에 넣는다.
//
// **파일이 원본이고 DB는 사본이다.** 목록을 고칠 일이 생기면 JSON을 고치고 이 스크립트를 다시
// 돌린다. DB에서 직접 고치면 다음 실행에서 되돌아가므로 그러지 말 것.
//
// 실행: apps/naminglink 에서
//   node scripts/seed-avoid-hanja.mjs

import { readFileSync } from "node:fs";
import path from "node:path";

const REPO = path.resolve(process.cwd(), "../..");
const ENV_PATH = path.join(process.cwd(), ".env.local");
const JSON_PATH = path.join(REPO, "docs/naminglink_불용문자.json");

function readEnv(name) {
  for (const line of readFileSync(ENV_PATH, "utf8").split(/\r?\n/)) {
    if (line.startsWith(`${name}=`)) {
      return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
  return null;
}

const url = readEnv("NEXT_PUBLIC_SUPABASE_URL");
const key = readEnv("SUPABASE_SERVICE_ROLE_KEY");
if (!url || !key) {
  console.error("Supabase 환경변수를 .env.local에서 찾지 못했습니다.");
  process.exit(1);
}

const source = JSON.parse(readFileSync(JSON_PATH, "utf8"));
const rows = source.flat.map((item) => ({
  hanja: item.hanja,
  reading: item.reading,
  category: item.category,
  reason: item.reason,
  commonly_used: Boolean(item.commonly_used),
  is_active: true,
}));

const categories = new Set(rows.map((row) => row.category));
console.log(`자료: ${rows.length}자 · 부류 ${categories.size}개`);
console.log(`  기본 제외 대상(commonly_used=false): ${rows.filter((r) => !r.commonly_used).length}자`);
console.log(`  고급 옵션에서만 제외(true): ${rows.filter((r) => r.commonly_used).length}자`);

async function request(method, pathname, body, extraHeaders = {}) {
  const response = await fetch(`${url}/rest/v1/${pathname}`, {
    method,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...extraHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error(`${method} ${pathname} → ${response.status} ${await response.text()}`);
  }
  return response;
}

// 파일에서 사라진 글자가 DB에 남지 않도록 통째로 갈아 끼운다.
await request("DELETE", "naming_avoid_hanja?id=not.is.null");
await request("POST", "naming_avoid_hanja", rows, { Prefer: "return=minimal" });

const check = await fetch(
  `${url}/rest/v1/naming_avoid_hanja?select=hanja&commonly_used=eq.false`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } },
);
console.log(`넣기 완료. 기본 제외 대상 ${(await check.json()).length}자가 DB에 있습니다.`);
