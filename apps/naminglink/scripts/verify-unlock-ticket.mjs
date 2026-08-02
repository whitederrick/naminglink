// 후보 열기 관문 표 검사.
//
// 광고를 봤다는 증명이 웹에는 없어(SSV는 앱 전용) 대신 **시간**을 서버가 잰다. 그 판단은
// 전부 Postgres 함수 안에 있으므로(`supabase/migrations/20260803100000_unlock_tickets.sql`)
// 여기서 실제 DB에 대고 확인한다. 조용히 헐거워지는 방식이 여럿이다:
//   - 준비 시각 전에 쓸 수 있는가 (관문이 통째로 없는 것과 같다)
//   - 한 장으로 두 번 열리는가 (광고 한 번에 후보 둘)
//   - 남의 표를 쓸 수 있는가
//   - **표를 여러 장 한꺼번에 끊어 기다림을 한 번으로 접을 수 있는가** (가장 노리기 쉬운 길)
//   - 광고를 닫아 버린 표가 다음 기다림을 늘리는가 (정직한 이용자가 벌을 받는 회귀)
//   - 만료된 표가 열리는가 / 만료된 행이 쌓이는가
//
// 실행: apps/naminglink 에서
//   node scripts/verify-unlock-ticket.mjs
//
// **행을 남기지 않는다.** 검사 전용 방문자 해시(`verify-unlock-ticket:` 접두사)만 쓰고
// 끝에 지운다. 운영 데이터와 섞이지 않는다.
import { createHash, randomBytes, randomUUID } from "node:crypto";
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

const PREFIX = "verify-unlock-ticket:";
let failures = 0;

function check(label, condition, detail = "") {
  if (condition) {
    console.log(`  ✓ ${label}`);
    return;
  }
  failures += 1;
  console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
}

const hash = (ticket) => createHash("sha256").update(ticket, "utf8").digest("hex");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const visitor = () => `${PREFIX}${randomUUID()}`;

const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await client.connect();

async function issue(conn, visitorHash, waitSeconds, ttlSeconds = 120) {
  const ticket = randomBytes(32).toString("base64url");
  const { rows } = await conn.query(
    "select public.issue_unlock_ticket($1, $2, $3, $4) as ready_at",
    [hash(ticket), visitorHash, waitSeconds, ttlSeconds],
  );
  return { ticket, readyAt: new Date(rows[0].ready_at) };
}

async function consume(conn, ticket, visitorHash) {
  const { rows } = await conn.query("select public.consume_unlock_ticket($1, $2) as verdict", [
    hash(ticket),
    visitorHash,
  ]);
  return rows[0].verdict;
}

try {
  console.log("\n== 준비 시각 전에는 쓸 수 없다");
  {
    const who = visitor();
    const { ticket } = await issue(client, who, 3);
    check("끊자마자 쓰면 early", (await consume(client, ticket, who)) === "early");
    await sleep(3200);
    check("준비된 뒤에는 ok", (await consume(client, ticket, who)) === "ok");
    check("같은 표를 또 쓰면 거절", (await consume(client, ticket, who)) === "unknown");
  }

  console.log("\n== 남의 표는 쓸 수 없다");
  {
    const mine = visitor();
    const theirs = visitor();
    const { ticket } = await issue(client, mine, 1);
    await sleep(1200);
    check("다른 방문자가 쓰면 거절", (await consume(client, ticket, theirs)) === "unknown");
    // 위 시도로 표가 사라지지 않았음을 확인한다. 사라졌다면 남이 내 표를 무효화할 수 있다는 뜻이다.
    check("주인은 그대로 쓸 수 있다", (await consume(client, ticket, mine)) === "ok");
  }

  console.log("\n== 기다림은 쌓인다 (표를 몰아 끊어도 접히지 않는다)");
  {
    // **연결을 따로 쓴다.** 한 연결에서는 질의가 줄을 서므로 동시성 자체가 재현되지 않는다.
    // 여기서 보려는 것이 바로 동시 발급이라(advisory lock이 없으면 넷 다 같은 시각에 준비된다)
    // 연결을 넷 열어 진짜로 겹쳐 보낸다.
    const who = visitor();
    const conns = await Promise.all(
      Array.from({ length: 4 }, async () => {
        const extra = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
        await extra.connect();
        return extra;
      }),
    );
    try {
      const issued = await Promise.all(conns.map((conn) => issue(conn, who, 5)));
      const readyTimes = issued.map((entry) => entry.readyAt.getTime()).sort((a, b) => a - b);
      const gaps = readyTimes.slice(1).map((time, index) => (time - readyTimes[index]) / 1000);
      check(
        "네 장의 준비 시각이 5초씩 벌어진다",
        gaps.length === 3 && gaps.every((gap) => gap >= 4.5),
        `간격(초): ${gaps.map((gap) => gap.toFixed(2)).join(", ")}`,
      );
      const span = (readyTimes[3] - readyTimes[0]) / 1000;
      check(
        "넷을 여는 데 최소 15초가 든다(광고 넷과 같다)",
        span >= 14.5,
        `첫 표와 끝 표 차이 ${span.toFixed(2)}초`,
      );
    } finally {
      await Promise.all(conns.map((conn) => conn.end()));
    }
  }

  console.log("\n== 버린 표는 다음 기다림을 늘리지 않는다");
  {
    // 광고를 중간에 닫으면 표가 쓰이지 않고 남는다. 그것까지 줄에 세우면 광고를 닫을 때마다
    // 다음 기다림이 5초씩 길어져 정직한 이용자가 벌을 받는다.
    const who = visitor();
    await issue(client, who, 1);
    await sleep(1400);
    const startedAt = Date.now();
    const { readyAt } = await issue(client, who, 5);
    const waitSeconds = (readyAt.getTime() - startedAt) / 1000;
    check(
      "지나간 표는 세지 않는다",
      waitSeconds < 7,
      `다음 표가 ${waitSeconds.toFixed(2)}초 뒤로 잡혔다(5초 언저리여야 한다)`,
    );
  }

  console.log("\n== 만료");
  {
    const who = visitor();
    const { ticket } = await issue(client, who, 0, 1);
    await sleep(1400);
    check("만료된 표는 열리지 않는다", (await consume(client, ticket, who)) === "expired");

    // 발급이 만료 행을 함께 치운다. 크론 없이 표가 자라지 않게 하는 장치다.
    await issue(client, visitor(), 0, 120);
    const { rows } = await client.query(
      "select count(*)::int as rows from public.unlock_tickets where visitor_hash = $1",
      [who],
    );
    check("만료 행은 다음 발급 때 지워진다", rows[0].rows === 0, `남은 행 ${rows[0].rows}`);
  }

  console.log("\n== 권한");
  {
    const { rows } = await client.query(
      `select has_function_privilege('anon', p.oid, 'execute') as anon,
              has_function_privilege('authenticated', p.oid, 'execute') as auth,
              p.proname
         from pg_proc p join pg_namespace n on n.oid = p.pronamespace
        where n.nspname = 'public'
          and p.proname in ('issue_unlock_ticket', 'consume_unlock_ticket')`,
    );
    check("두 함수가 모두 있다", rows.length === 2, `찾은 함수 ${rows.length}개`);
    check(
      "브라우저 키(anon/authenticated)로는 부를 수 없다",
      rows.every((row) => !row.anon && !row.auth),
    );
    const { rows: rls } = await client.query(
      "select relrowsecurity from pg_class where oid = 'public.unlock_tickets'::regclass",
    );
    check("표에 RLS가 켜져 있다", rls[0]?.relrowsecurity === true);
  }
} finally {
  const { rowCount } = await client.query(
    "delete from public.unlock_tickets where visitor_hash like $1",
    [`${PREFIX}%`],
  );
  console.log(`\n검사용 행 정리: ${rowCount}건 삭제`);
  await client.end();
}

if (failures > 0) {
  console.error(`\n실패 ${failures}건`);
  process.exit(1);
}
console.log("\n전부 통과");
