// 상품 판매 스위치(`product_settings.enabled`)를 한 번에 켜고 끈다.
//
// 왜 필요한가: 오픈 전에는 **결제 키가 없는 채로 상품이 켜져 있으면 안 된다.** 눌러도 아무 일
// 없는 구매 버튼이 이용자에게 보이기 때문이다. 관리자 화면에서 하나씩 끄면 열넷을 눌러야 하고,
// 오픈할 때 되돌리는 것도 같은 수고다.
//
// 실행 (apps/naminglink 에서):
//   node scripts/toggle-products.mjs                       현재 상태만 본다
//   node scripts/toggle-products.mjs --off --service naminglink
//   node scripts/toggle-products.mjs --on  --code TEN_SAJU_PDF,FIVE_DETAIL
//   node scripts/toggle-products.mjs --off --all
//
// **이력을 함께 남긴다.** 관리자 화면(`/api/admin/products`)이 바꿀 때마다
// `product_setting_history`에 적으므로, 스크립트만 빠뜨리면 "누가 언제 판매를 닫았나"가
// 기록에서 사라진다. 판매 중단·재개는 매출에 직접 영향을 주는 조작이라 같은 무게로 남긴다.
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
    .map((line) => {
      const at = line.indexOf("=");
      return [
        line.slice(0, at).trim(),
        line.slice(at + 1).trim().replace(/^"|"$/g, ""),
      ];
    }),
);

const URL_BASE = env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL_BASE || !KEY) {
  console.error("NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY가 .env.local에 없습니다.");
  process.exit(1);
}

/**
 * 인연링크 상품 코드. 서비스별로 가르는 기준이 DB에 없어서(상품표에 service 컬럼이 없다)
 * 코드 접두사로 판단한다. 인연링크 상품이 늘면 여기에 더한다.
 */
const INYEONLINK_PREFIXES = ["GUNGHAP_", "AFFINITY_"];
const isInyeonlink = (code) =>
  INYEONLINK_PREFIXES.some((prefix) => code.startsWith(prefix));

const argv = process.argv.slice(2);
const has = (flag) => argv.includes(flag);
const valueOf = (flag) => {
  const at = argv.indexOf(flag);
  return at >= 0 ? argv[at + 1] : undefined;
};

const turnOn = has("--on");
const turnOff = has("--off");
if (turnOn && turnOff) {
  console.error("--on 과 --off 를 함께 쓸 수 없습니다.");
  process.exit(1);
}

// 누가 껐는지 남긴다. 사람 이름이 아니라 무엇이 바꿨는지가 중요하다.
const ACTOR = valueOf("--by") ?? "scripts/toggle-products.mjs";

async function rest(path, init = {}) {
  const response = await fetch(`${URL_BASE}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
      // Supabase는 브라우저 User-Agent로 오는 시크릿 키를 거부한다.
      "User-Agent": "naminglink-scripts",
      ...(init.headers ?? {}),
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${await response.text()}`);
  }
  return response.status === 204 ? null : response.json();
}

const rows = await rest(
  "product_settings?select=code,name_ko,amount,currency,font_count,enabled&order=code",
);

function pickTargets() {
  const codes = valueOf("--code");
  if (codes) {
    const wanted = new Set(codes.split(",").map((code) => code.trim().toUpperCase()));
    return rows.filter((row) => wanted.has(row.code));
  }
  const service = valueOf("--service");
  if (service === "inyeonlink") return rows.filter((row) => isInyeonlink(row.code));
  if (service === "naminglink") return rows.filter((row) => !isInyeonlink(row.code));
  if (has("--all")) return rows;
  return null;
}

function show(list, title) {
  console.log(`\n== ${title}`);
  for (const row of list) {
    console.log(
      `  ${row.enabled ? "ON " : "-- "} ${row.code.padEnd(22)} ` +
        `${String(row.currency).padEnd(4)} ${String(row.amount).padStart(6)}  ` +
        `${isInyeonlink(row.code) ? "인연링크" : "naminglink"}  ${row.name_ko ?? ""}`,
    );
  }
  console.log(`  — ${list.length}건 중 판매중 ${list.filter((r) => r.enabled).length}건`);
}

if (!turnOn && !turnOff) {
  show(rows, "현재 상태 (바꾸지 않았습니다)");
  console.log(
    "\n바꾸려면 --on 또는 --off 와 함께 --service <naminglink|inyeonlink> · --code A,B · --all 중 하나를 주십시오.",
  );
  process.exit(0);
}

const targets = pickTargets();
if (!targets) {
  console.error(
    "대상을 정해 주십시오: --service <naminglink|inyeonlink> 또는 --code A,B 또는 --all",
  );
  process.exit(1);
}
if (targets.length === 0) {
  console.error("해당하는 상품이 없습니다.");
  process.exit(1);
}

const next = turnOn;
// 이미 그 상태인 것은 건드리지 않는다. 이력에 의미 없는 줄이 쌓이지 않게 한다.
const changing = targets.filter((row) => row.enabled !== next);

show(targets, `대상 ${targets.length}건 (바꿀 것 ${changing.length}건)`);
if (changing.length === 0) {
  console.log("\n이미 원하는 상태입니다. 아무것도 하지 않았습니다.");
  process.exit(0);
}

const updatedAt = new Date().toISOString();
for (const row of changing) {
  await rest(`product_settings?code=eq.${encodeURIComponent(row.code)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ enabled: next, updated_at: updatedAt, updated_by: ACTOR }),
  });

  // 관리자 화면과 같은 모양으로 이력을 남긴다. 금액은 그대로이므로 old=new로 적는다.
  await rest("product_setting_history", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      code: row.code,
      old_amount: row.amount,
      new_amount: row.amount,
      old_currency: row.currency,
      new_currency: row.currency,
      old_font_count: row.font_count,
      new_font_count: row.font_count,
      old_enabled: row.enabled,
      new_enabled: next,
      changed_by: ACTOR,
    }),
  });

  console.log(`  ${row.enabled ? "ON" : "--"} → ${next ? "ON" : "--"}  ${row.code}`);
}

const after = await rest(
  "product_settings?select=code,name_ko,amount,currency,font_count,enabled&order=code",
);
show(after, "적용 뒤");

// 캐시 안내. 서버는 상품표를 60초 캐시하므로 화면에 곧바로 반영되지 않을 수 있다.
console.log(
  "\n서버가 상품표를 60초 캐시합니다. 화면 반영이 늦으면 잠시 기다리거나 관리자 화면을 새로고침하십시오.",
);
