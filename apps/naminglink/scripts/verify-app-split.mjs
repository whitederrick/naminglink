// 서비스별 운영 지표가 실제로 갈라져 있는지 확인한다.
//
// 실행: node scripts/verify-app-split.mjs
//
// naming-artist 콘솔에 서비스별 메뉴를 만들면서 생긴 규칙이 지켜지는지 보는 것이다. 화면을
// 열어 "숫자가 그럴듯하다"로는 섞임을 못 잡는다 — 지금은 실거래가 0건이라 어떤 버그도
// 0으로 보이기 때문이다. 그래서 **집계가 아니라 구조**를 확인한다.
//
//   1. 구분 컬럼이 제자리에 있고 제약이 걸려 있는가
//   2. 구분 값이 아는 서비스 밖으로 새지 않는가
//   3. RPC가 서비스별로 다른 집합을 보는가 (서비스별 합 = 전체)
//
// **앱 목록을 여기 적지 않는다.** 예전에는 `["naminglink", "inyeonlink"]`가 이 파일에 박혀
// 있었고, 사주링크가 생기자 그 방문 17건이 "새는 값"으로 잡히고 합계도 어긋났다 — 데이터는
// 멀쩡한데 검사기만 낡은 것이다(2026-08-06). 목록은 `packages/core/src/apps.ts`가 원본이고
// 여기서는 읽어 쓴다. dreamslink를 더하면 그 한 곳만 고치면 된다.
//
// 읽기만 한다. 아무것도 고치지 않는다.
import { readFileSync } from "node:fs";
import pg from "pg";

import { APP_KEYS as APPS } from "../../../scripts/app-keys.mjs";

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

/** `CHECK (x = ANY (ARRAY['a'::text, 'b'::text]))`에서 허용값을 뽑는다. */
function allowedValuesOf(def) {
  return (def.match(/'([a-z0-9_-]+)'::text/gi) ?? []).map((quoted) =>
    quoted.slice(1, quoted.indexOf("'", 1)),
  );
}

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
    select conname, pg_get_constraintdef(oid) as def from pg_constraint
     where conname in ('orders_service_check', 'site_events_app_check', 'ad_events_app_check')`);
  const conNames = new Set(constraints.map((row) => row.conname));
  for (const expected of ["orders_service_check", "site_events_app_check", "ad_events_app_check"]) {
    check(`제약 ${expected}`, conNames.has(expected));
  }

  /**
   * **제약이 허용하는 값이 `APP_KEYS`와 같은가.**
   *
   * 이 셋은 앱 이름을 SQL에 박아 두고 있다(`CHECK (service = ANY (ARRAY['naminglink', …]))`).
   * `verify-app-coverage`는 마이그레이션을 훑지 않으므로(append-only라 과거 파일을 계속
   * 실패시킬 수 없다) **SQL 쪽 목록은 여기서 센다.**
   *
   * 앱을 `APP_KEYS`에 더하고 마이그레이션을 잊으면 그 앱의 INSERT가 전부 거부되는데, 값 검사는
   * "행이 없다"로 조용히 통과한다 — 넣을 수 없으니 샐 값도 없기 때문이다. 그래서 데이터가
   * 아니라 **제약 자체**를 본다.
   */
  // **대조군 먼저.** 늘 통과하는 검사기는 없는 것과 같다. 아래는 사주링크가 생기기 전의
  // 실제 제약문이다 — 이걸 "하나 빠졌다"로 못 잡으면 이 검사는 장식이다.
  const CONTROL_OLD_DEF =
    "CHECK ((service = ANY (ARRAY['naminglink'::text, 'inyeonlink'::text])))";
  const controlAllowed = allowedValuesOf(CONTROL_OLD_DEF);
  check(
    "대조군 — 옛 제약문에서 빠진 앱을 잡는다",
    controlAllowed.length === 2 &&
      controlAllowed.includes("naminglink") &&
      !controlAllowed.includes("sajulink"),
    controlAllowed.join(" · "),
  );

  for (const row of constraints) {
    const allowed = allowedValuesOf(row.def);
    const missing = APPS.filter((app) => !allowed.includes(app));
    const extra = allowed.filter((value) => !APPS.includes(value));
    check(
      `제약 허용값 ${row.conname}`,
      missing.length === 0 && extra.length === 0,
      missing.length
        ? `마이그레이션이 빠졌다 — 허용되지 않는 앱: ${missing.join(", ")}`
        : extra.length
          ? `APP_KEYS에 없는 값이 허용돼 있다: ${extra.join(", ")}`
          : allowed.join(" · "),
    );
  }

  // 2) 실제로 들어 있는 값. 제약이 있으니 통과해야 정상이지만, 제약이 나중에 빠질 수도 있다.
  for (const [table, column] of [["orders", "service"], ["site_events", "app"], ["ad_events", "app"]]) {
    const { rows } = await client.query(
      `select ${column} as value, count(*)::int as rows from public.${table} group by ${column} order by rows desc`,
    );
    const stray = rows.filter((row) => !APPS.includes(row.value));
    check(
      `${table}.${column} 값`,
      stray.length === 0,
      rows.map((row) => `${row.value}=${row.rows}`).join(" · ") || "행 없음",
    );
  }

  // 3) RPC가 서비스별로 다른 집합을 보는가. 두 서비스의 주문 수를 더하면 전체와 같아야 한다
  //    — 어느 한쪽 필터가 빠지면 합계가 두 배가 되고, 둘 다 빠지면 값이 같아진다.
  const snapshots = {};
  for (const app of APPS) {
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
  const orderParts = APPS.map((app) => `${app} ${snapshots[app].summary.orders}`);
  const summed = APPS.reduce((total, app) => total + snapshots[app].summary.orders, 0);
  check(
    "주문 합계 = 전체",
    summed === totals[0].orders,
    `${orderParts.join(" + ")} = ${summed} / 전체 ${totals[0].orders}`,
  );

  const { rows: eventTotals } = await client.query(
    `select count(*)::int as visits from public.site_events
      where created_at >= now() - interval '365 days' and event_type = 'PAGE_VIEW'`,
  );
  const visitParts = APPS.map((app) => `${app} ${snapshots[app].summary.visits}`);
  const summedVisits = APPS.reduce(
    (total, app) => total + snapshots[app].summary.visits,
    0,
  );
  check(
    "방문 합계 = 전체",
    summedVisits === eventTotals[0].visits,
    `${visitParts.join(" + ")} = ${summedVisits} / 전체 ${eventTotals[0].visits}`,
  );

  // **이 검사만은 일반화하지 않는다.** 인연링크는 규칙 엔진뿐이라 AI를 아예 안 쓴다 — 0이
  // 아니면 필터가 잘못된 것이다. 반면 **사주링크는 유료 경로에서 AI를 쓰므로** 같은 잣대를
  // 들이대면 상품을 켜는 날 이 검사가 거짓으로 실패한다. 서비스마다 사실이 다르면 검사도
  // 달라야 한다 — 목록을 도는 것이 늘 옳은 것은 아니다.
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
