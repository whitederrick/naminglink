// 두 서비스의 운영 지표가 실제로 갈라져 있는지 확인한다.
//
// 실행: node scripts/verify-app-split.mjs
//
// naming-artist 콘솔에 인연링크 메뉴를 만들면서 생긴 규칙이 지켜지는지 보는 것이다. 화면을
// 열어 "숫자가 그럴듯하다"로는 섞임을 못 잡는다 — 지금은 양쪽 다 실거래가 0건이라 어떤 버그도
// 0으로 보이기 때문이다. 그래서 **집계가 아니라 구조**를 확인한다.
//
//   1. 구분 컬럼이 제자리에 있고 제약이 걸려 있는가
//   2. 구분 값이 두 가지 밖으로 새지 않는가
//   3. RPC가 서비스별로 다른 집합을 보는가 (naminglink + inyeonlink = 전체)
//
// 읽기만 한다. 아무것도 고치지 않는다.
import { readFileSync } from "node:fs";
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

const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await client.connect();

let failures = 0;
function check(label, ok, detail) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

try {
  // 1) 구분 컬럼과 제약
  const { rows: columns } = await client.query(`
    select table_name, column_name, column_default
      from information_schema.columns
     where table_schema = 'public'
       and (
         (table_name = 'orders' and column_name = 'service')
         or (table_name in ('site_events', 'ad_events') and column_name = 'app')
       )
     order by table_name`);
  const found = new Set(columns.map((row) => `${row.table_name}.${row.column_name}`));
  for (const expected of ["orders.service", "site_events.app", "ad_events.app"]) {
    check(`컬럼 ${expected}`, found.has(expected));
  }

  const { rows: constraints } = await client.query(`
    select conname from pg_constraint
     where conname in ('orders_service_check', 'site_events_app_check', 'ad_events_app_check')`);
  const conNames = new Set(constraints.map((row) => row.conname));
  for (const expected of ["orders_service_check", "site_events_app_check", "ad_events_app_check"]) {
    check(`제약 ${expected}`, conNames.has(expected));
  }

  // 2) 실제로 들어 있는 값. 제약이 있으니 통과해야 정상이지만, 제약이 나중에 빠질 수도 있다.
  for (const [table, column] of [["orders", "service"], ["site_events", "app"], ["ad_events", "app"]]) {
    const { rows } = await client.query(
      `select ${column} as value, count(*)::int as rows from public.${table} group by ${column} order by rows desc`,
    );
    const stray = rows.filter((row) => !["naminglink", "inyeonlink"].includes(row.value));
    check(
      `${table}.${column} 값`,
      stray.length === 0,
      rows.map((row) => `${row.value}=${row.rows}`).join(" · ") || "행 없음",
    );
  }

  // 3) RPC가 서비스별로 다른 집합을 보는가. 두 서비스의 주문 수를 더하면 전체와 같아야 한다
  //    — 어느 한쪽 필터가 빠지면 합계가 두 배가 되고, 둘 다 빠지면 값이 같아진다.
  const snapshots = {};
  for (const app of ["naminglink", "inyeonlink"]) {
    const { rows } = await client.query(
      "select public.admin_analytics_snapshot(365, true, $1) as snap",
      [app],
    );
    snapshots[app] = rows[0].snap;
    check(`RPC app 필드(${app})`, rows[0].snap.app === app, rows[0].snap.app);
  }

  const { rows: totals } = await client.query(
    "select count(*)::int as orders from public.orders where created_at >= now() - interval '365 days'",
  );
  const summed = snapshots.naminglink.summary.orders + snapshots.inyeonlink.summary.orders;
  check(
    "주문 합계 = 전체",
    summed === totals[0].orders,
    `naminglink ${snapshots.naminglink.summary.orders} + inyeonlink ${snapshots.inyeonlink.summary.orders} = ${summed} / 전체 ${totals[0].orders}`,
  );

  const { rows: eventTotals } = await client.query(
    `select count(*)::int as visits from public.site_events
      where created_at >= now() - interval '365 days' and event_type = 'PAGE_VIEW'`,
  );
  const summedVisits =
    snapshots.naminglink.summary.visits + snapshots.inyeonlink.summary.visits;
  check(
    "방문 합계 = 전체",
    summedVisits === eventTotals[0].visits,
    `naminglink ${snapshots.naminglink.summary.visits} + inyeonlink ${snapshots.inyeonlink.summary.visits} = ${summedVisits} / 전체 ${eventTotals[0].visits}`,
  );

  // AI는 naminglink만 쓴다. 인연링크 쪽이 0이 아니면 필터가 잘못된 것이다.
  check(
    "인연링크 AI 호출 0건",
    snapshots.inyeonlink.summary.aiCalls === 0,
    `${snapshots.inyeonlink.summary.aiCalls}건`,
  );

  console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
  if (failures > 0) process.exitCode = 1;
} finally {
  await client.end();
}
