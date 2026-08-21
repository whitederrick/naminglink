// 읽기 전용 DB 감사. 아무것도 쓰지 않는다.
// AUDIT_NO_SIDE_EFFECTS: 카탈로그·건수 select 만 던진다 — 쓰기 문장이 하나도 없다
import { readFileSync } from "node:fs";
import pg from "pg";

const env = Object.fromEntries(
  readFileSync("C:/myProjects/naminglink/apps/naminglink/.env.local", "utf8")
    .split(/\r?\n/)
    .filter((l) => l.includes("=") && !l.trimStart().startsWith("#"))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")]; }),
);

const c = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await c.connect();

const q = async (label, sql) => {
  const { rows } = await c.query(sql);
  console.log(`\n===== ${label} (${rows.length})`);
  return rows;
};

// 1. RLS
const rls = await q("public 테이블 · RLS", `
  select c.relname as table, c.relrowsecurity as rls, c.relforcerowsecurity as forced,
         (select count(*) from pg_policies p where p.schemaname='public' and p.tablename=c.relname)::int as policies,
         coalesce((select n_live_tup from pg_stat_user_tables s where s.relname=c.relname),0)::int as rows
    from pg_class c join pg_namespace n on n.oid=c.relnamespace
   where n.nspname='public' and c.relkind='r'
   order by c.relrowsecurity, c.relname`);
for (const r of rls) {
  console.log(`  ${r.rls ? "RLS " : "!!!!"} ${String(r.table).padEnd(34)} policies=${String(r.policies).padStart(2)} rows=${String(r.rows).padStart(6)}`);
}

// 2. anon/authenticated 권한이 남아 있는 테이블
const grants = await q("anon/authenticated 에 부여된 테이블 권한", `
  select table_name, grantee, string_agg(distinct privilege_type, ',' order by privilege_type) as privs
    from information_schema.role_table_grants
   where table_schema='public' and grantee in ('anon','authenticated')
   group by table_name, grantee order by table_name, grantee`);
if (grants.length === 0) console.log("  (없음)");
for (const g of grants) console.log(`  ${String(g.table_name).padEnd(34)} ${String(g.grantee).padEnd(14)} ${g.privs}`);

// 3. SECURITY DEFINER 함수와 실행 권한
const fns = await q("SECURITY DEFINER 함수", `
  select p.proname as fn,
         pg_get_function_identity_arguments(p.oid) as args,
         has_function_privilege('anon', p.oid, 'execute') as anon,
         has_function_privilege('authenticated', p.oid, 'execute') as auth,
         has_function_privilege('service_role', p.oid, 'execute') as svc,
         p.proconfig::text as cfg
    from pg_proc p join pg_namespace n on n.oid=p.pronamespace
   where n.nspname='public' and p.prosecdef
   order by p.proname`);
for (const f of fns) {
  const flag = (f.anon || f.auth) ? "!!! " : "    ";
  const sp = String(f.cfg ?? "").includes("search_path") ? "" : "  [search_path 미고정]";
  console.log(`  ${flag}${String(f.fn).padEnd(30)} anon=${f.anon} auth=${f.auth} svc=${f.svc}${sp}`);
}

// 4. is_test 안전망
const istest = await q("is_test 컬럼", `
  select table_name, is_nullable, coalesce(column_default,'(없음)') as def
    from information_schema.columns
   where table_schema='public' and column_name='is_test' order by table_name`);
for (const t of istest) console.log(`  ${String(t.table_name).padEnd(34)} nullable=${t.is_nullable} default=${t.def}`);

// 5. 거래 데이터 현황
const orders = await q("주문", `
  select service, order_type, payment_status, is_test, count(*)::int as n
    from public.orders group by 1,2,3,4 order by 1,2,3`);
for (const o of orders) console.log(`  ${String(o.service).padEnd(12)} ${String(o.order_type).padEnd(18)} ${String(o.payment_status).padEnd(10)} test=${o.is_test} n=${o.n}`);

// 6. 개인정보가 실릴 수 있는 표의 잔존 행
const pii = await q("PII 보관 표", `
  select 'naming_logs' as t, count(*)::int as n from public.naming_logs
  union all select 'premium_analysis_sessions', count(*)::int from public.premium_analysis_sessions
  union all select 'unlock_tickets', count(*)::int from public.unlock_tickets
  union all select 'rate_limit_counters', count(*)::int from public.rate_limit_counters
  union all select 'ad_events', count(*)::int from public.ad_events
  union all select 'site_events', count(*)::int from public.site_events`);
for (const p of pii) console.log(`  ${String(p.t).padEnd(34)} ${p.n}`);

await c.end();
