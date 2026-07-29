// product_settings의 컬럼과 코드 목록을 본다. **읽기 전용이다.**

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

const response = await fetch(`${url}/rest/v1/product_settings?select=*&order=code`, {
  headers: { apikey: key, Authorization: `Bearer ${key}` },
});
const rows = await response.json();
if (!Array.isArray(rows)) {
  console.log("조회 실패:", rows);
  process.exit(1);
}

console.log("컬럼:", Object.keys(rows[0] ?? {}).join(", "));
console.log(`행 ${rows.length}개\n`);
for (const row of rows) {
  console.log(
    [
      String(row.code).padEnd(34),
      String(row.enabled).padEnd(6),
      String(row.currency ?? "").padEnd(4),
      String(row.amount ?? "").padStart(8),
      row.name ?? "",
    ].join(" "),
  );
}
