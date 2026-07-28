// 마이그레이션 파일 하나를 Supabase에 트랜잭션으로 적용한다.
//
// 실행: node scripts/apply-migration.mjs ../../supabase/migrations/<파일>.sql
// 점검: node scripts/apply-migration.mjs --check      (적용 없이 현재 상태만 본다)
//
// 지금까지는 그때그때 임시 스크립트로 적용해 왔는데, 무엇이 적용됐는지 확인할 방법이 없었다.
// 트랜잭션으로 감싸 실패 시 통째로 되돌리고, 적용 뒤 격리 규칙에 필요한 상태를 함께 보여 준다.
//
// **이 스크립트는 운영 DB에 붙는다**(개발·운영이 같은 Supabase 프로젝트를 본다). 마이그레이션은
// 운영에 적용하는 것이 정상이므로 APP_ENV 가드를 두지 않는다 — 대신 무엇을 적용하는지 먼저 찍는다.
import { readFileSync } from "node:fs";
import path from "node:path";
import pg from "pg";

const envPath = new URL("../.env.local", import.meta.url);
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
);

if (!env.SUPABASE_DB_URL) {
  console.error("SUPABASE_DB_URL이 .env.local에 없습니다.");
  process.exit(1);
}

const target = process.argv[2];
if (!target) {
  console.error("사용법: node scripts/apply-migration.mjs <마이그레이션 파일 | --check>");
  process.exit(1);
}
const checkOnly = target === "--check";

const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await client.connect();

async function report() {
  const checks = [
    ["행 수", `select 'orders' as t, count(*)::int as rows from public.orders
                union all
                select 'premium_analysis_sessions', count(*)::int from public.premium_analysis_sessions`],
    ["is_test 컬럼", `select table_name, is_nullable, coalesce(column_default, '(없음)') as default_value
                      from information_schema.columns
                      where table_schema='public' and column_name='is_test' order by table_name`],
    ["통계 함수", `select pg_get_function_identity_arguments(p.oid) as args
                   from pg_proc p join pg_namespace n on n.oid = p.pronamespace
                   where n.nspname='public' and p.proname='admin_analytics_snapshot'`],
    // is_test가 붙은 뒤에만 의미가 있다. 운영 대시보드에 무엇이 실주문으로 잡히는지 눈으로 본다.
    ["주문 내역", `select id, service, order_type, payment_status, payment_amount, is_test,
                          to_char(created_at, 'YYYY-MM-DD HH24:MI') as created
                   from public.orders order by created_at desc limit 20`],
  ];
  for (const [label, sql] of checks) {
    const { rows } = await client.query(sql);
    console.log(`\n== ${label}`);
    console.table(rows);
  }
}

try {
  if (checkOnly) {
    await report();
  } else {
    const file = path.resolve(process.cwd(), target);
    console.log(`적용 대상: ${file}`);
    const sql = readFileSync(file, "utf8");
    await client.query("begin");
    await client.query(sql);
    await client.query("commit");
    console.log("적용 완료 (커밋됨).");
    await report();
  }
} catch (error) {
  await client.query("rollback").catch(() => {});
  console.error(`실패(롤백됨): ${error.message}`);
  process.exitCode = 1;
} finally {
  await client.end();
}
