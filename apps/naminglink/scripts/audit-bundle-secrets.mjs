// 빌드된 클라이언트 번들에 서버 비밀이 섞였는지 **실제 값으로** 검사한다.
//
// 이름(`SUPABASE_SERVICE_ROLE_KEY` 같은 문자열)을 찾는 것으로는 부족하다. 값이 다른 경로로
// 흘러 들어가면 이름은 안 보이고 값만 남는다. 그래서 .env.local의 값을 그대로 들고
// .next/static(브라우저가 받는 것)에서 찾는다.
//
// 실행: apps/<app> 에서  node scripts/audit-bundle-secrets.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const appDir = process.cwd();
const envPath = path.join(appDir, ".env.local");
const staticDir = path.join(appDir, ".next", "static");

let env;
try {
  env = Object.fromEntries(
    readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .filter((l) => l.includes("=") && !l.trimStart().startsWith("#"))
      .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")]; }),
  );
} catch {
  console.error(`.env.local을 읽지 못했다: ${envPath}`);
  process.exit(1);
}

// NEXT_PUBLIC_ 은 브라우저로 나가는 것이 정상이다. 나머지는 전부 서버 전용으로 본다.
const secrets = Object.entries(env).filter(
  ([k, v]) => !k.startsWith("NEXT_PUBLIC_") && typeof v === "string" && v.length >= 12,
);

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(js|mjs|css|map|json|txt|html)$/.test(name)) out.push(p);
  }
  return out;
}

const files = walk(staticDir);
if (files.length === 0) {
  console.error(`.next/static 이 비어 있다 — 먼저 빌드할 것 (${staticDir})`);
  process.exit(1);
}

console.log(`검사 대상: 브라우저 자산 ${files.length}개 · 서버 비밀 ${secrets.length}개\n`);

let leaks = 0;
const blobs = files.map((f) => ({ f, text: readFileSync(f, "utf8") }));

for (const [key, value] of secrets) {
  const hits = blobs.filter((b) => b.text.includes(value));
  if (hits.length > 0) {
    leaks += 1;
    console.error(`  !!! ${key} 의 값이 브라우저 자산에 들어 있다`);
    for (const h of hits.slice(0, 3)) console.error(`      ${path.relative(appDir, h.f)}`);
  }
}

// 이름만으로도 한 번 훑는다(값이 짧아 걸러진 것 대비).
const NAME_PATTERNS = [
  "SERVICE_ROLE", "TOSS_SECRET", "PORTONE_API_SECRET", "OPENAI_API_KEY",
  "RESULT_SEAL_SECRET", "RESEND_API_KEY", "CRON_SECRET", "PREMIUM_TEST_SECRET",
  "ANALYTICS_HASH_SALT", "OPS_STATUS_TOKEN", "WEBHOOK_SECRET", "SUPABASE_DB_URL",
];
for (const name of NAME_PATTERNS) {
  const hits = blobs.filter((b) => b.text.includes(name));
  if (hits.length > 0) {
    leaks += 1;
    console.error(`  !!! 이름 "${name}" 이 브라우저 자산에 나타난다`);
    for (const h of hits.slice(0, 3)) console.error(`      ${path.relative(appDir, h.f)}`);
  }
}

if (leaks === 0) {
  console.log("서버 비밀이 브라우저 자산에 없다.");
  for (const [key] of secrets) console.log(`  확인함: ${key}`);
} else {
  console.error(`\n유출 의심 ${leaks}건`);
  process.exit(1);
}
