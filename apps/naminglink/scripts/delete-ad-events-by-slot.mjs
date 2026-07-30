// ad_events에서 특정 slot_key 행만 지운다. 점검용으로 넣은 행을 걷어낼 때 쓴다.
// 실행: node scripts/delete-ad-events-by-slot.mjs <slot_key>
//
// 지표 전체를 비우는 것은 `reset-metrics-tables.mjs`다. 이 스크립트는 **한 슬롯만** 지운다 —
// 점검 흔적 두어 줄 때문에 지표를 통째로 날릴 이유가 없다.
import { readFileSync } from "node:fs";

const slotKey = process.argv[2];
if (!slotKey) {
  console.error("slot_key를 인자로 주세요. 예: node scripts/delete-ad-events-by-slot.mjs spoof-test");
  process.exit(1);
}

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
const encoded = encodeURIComponent(slotKey);

const before = await fetch(`${url}/rest/v1/ad_events?slot_key=eq.${encoded}&select=id`, {
  method: "HEAD",
  headers: { ...headers, Prefer: "count=exact", Range: "0-0" },
});
const count = before.headers.get("content-range")?.split("/")[1] ?? "?";

const response = await fetch(`${url}/rest/v1/ad_events?slot_key=eq.${encoded}`, {
  method: "DELETE",
  headers: { ...headers, Prefer: "return=minimal" },
});
if (!response.ok) {
  console.error(`삭제 실패 ${response.status} ${await response.text()}`);
  process.exit(1);
}
console.log(`slot_key="${slotKey}" ${count}행 삭제`);
