// site_events에서 경로로 골라 지운다.
//
// 실행: node scripts/delete-site-events-by-path.mjs <경로 접두사> [--apply]
// 예:   node scripts/delete-site-events-by-path.mjs /__verify__ --apply
//
// **`site_events`에는 is_test가 없다.** 주문과 달리 개발에서 만든 이벤트도 운영 통계에 그대로
// 섞인다(naminglink 트래커도 예전부터 그랬다). 검증하느라 넣은 행을 되돌릴 방법이 필요해서
// 만들었다 — `delete-ad-events-by-slot.mjs`와 같은 자리의 도구다.
//
// 기본은 **미리보기**다. 지우려면 --apply를 붙인다.
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

const prefix = process.argv[2];
const apply = process.argv.includes("--apply");
if (!prefix || prefix.length < 3) {
  console.error("사용법: node scripts/delete-site-events-by-path.mjs <경로 접두사> [--apply]");
  console.error("접두사는 3자 이상이어야 합니다 — '/'만 넘겨 전부 지우는 사고를 막습니다.");
  process.exit(1);
}

const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await client.connect();

try {
  const { rows } = await client.query(
    `select app, event_type, path, count(*)::int as rows
       from public.site_events
      where path like $1
      group by app, event_type, path
      order by rows desc`,
    [`${prefix}%`],
  );
  if (rows.length === 0) {
    console.log(`대상 없음: path LIKE '${prefix}%'`);
  } else {
    console.table(rows);
    if (!apply) {
      console.log("\n미리보기입니다. 실제로 지우려면 --apply를 붙이세요.");
    } else {
      const { rowCount } = await client.query(
        "delete from public.site_events where path like $1",
        [`${prefix}%`],
      );
      console.log(`\n${rowCount}건 삭제했습니다.`);
    }
  }
} finally {
  await client.end();
}
