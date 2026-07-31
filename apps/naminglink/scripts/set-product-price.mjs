// 상품 가격(`product_settings.amount`)을 바꾼다.
//
// 실행 (apps/naminglink 에서):
//   node scripts/set-product-price.mjs                                 현재 가격만 본다
//   node scripts/set-product-price.mjs --set GUNGHAP_PDF_KRW=1900      미리보기
//   node scripts/set-product-price.mjs --set GUNGHAP_PDF_KRW=1900 --apply
//   node scripts/set-product-price.mjs --set A=1900,B=299 --apply      여러 개
//
// **USD는 센트 단위다.** US$2.99는 299로 넣는다. 사람이 가장 자주 틀리는 자리라, 100으로
// 나누어떨어지는 USD 값이 오면 경고한다(2.99를 2로 적는 사고를 막는다).
//
// **이력을 함께 남긴다.** 관리자 화면(`/api/admin/products`)이 바꿀 때마다
// `product_setting_history`에 적으므로, 스크립트만 빠뜨리면 "누가 언제 값을 올렸나"가
// 기록에서 사라진다. 금액은 매출에 직접 닿는 값이라 같은 무게로 남긴다
// (`toggle-products.mjs`와 같은 규칙).
//
// **가격을 바꾸면 약관 표기도 따라 바뀐다.** 인연링크 약관은 금액을 DB에서 받아 채우므로
// 문서를 손댈 필요가 없지만, 장수·상품 구성 같은 설명은 따로 고쳐야 한다.
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
    .map((line) => {
      const at = line.indexOf("=");
      return [line.slice(0, at).trim(), line.slice(at + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const URL_BASE = env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL_BASE || !KEY) {
  console.error("NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY가 .env.local에 없습니다.");
  process.exit(1);
}

const argv = process.argv.slice(2);
const valueOf = (flag) => {
  const at = argv.indexOf(flag);
  return at >= 0 ? argv[at + 1] : undefined;
};
const apply = argv.includes("--apply");
const ACTOR = valueOf("--by") ?? "scripts/set-product-price.mjs";

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
  const text = await response.text();
  if (!response.ok) throw new Error(`${response.status} ${text}`);
  return text ? JSON.parse(text) : null;
}

const rows = await rest(
  "product_settings?select=code,name_ko,amount,currency,font_count,enabled&order=code",
);
const byCode = new Map(rows.map((row) => [row.code, row]));

const money = (amount, currency) =>
  currency === "USD" ? `US$${(amount / 100).toFixed(2)}` : `₩${amount.toLocaleString("ko-KR")}`;

const raw = valueOf("--set");
if (!raw) {
  console.log("현재 가격\n");
  for (const row of rows) {
    console.log(
      `  ${row.code.padEnd(24)} ${money(row.amount, row.currency).padStart(10)}  ${row.enabled ? "판매" : "중지"}`,
    );
  }
  console.log("\n바꾸려면 --set CODE=금액 [--apply]");
  process.exit(0);
}

const changes = [];
for (const pair of raw.split(",")) {
  const [code, value] = pair.split("=").map((part) => part.trim());
  const row = byCode.get(code);
  if (!row) {
    console.error(`없는 상품 코드입니다: ${code}`);
    process.exit(1);
  }
  const amount = Number(value);
  if (!Number.isInteger(amount) || amount <= 0) {
    console.error(`${code}: 금액은 양의 정수여야 합니다 (USD는 센트 단위) — 받은 값 "${value}"`);
    process.exit(1);
  }
  if (row.currency === "USD" && amount % 100 === 0) {
    console.error(
      `${code}: USD ${amount}는 센트 단위로 US$${(amount / 100).toFixed(2)}입니다. 의도한 값이 맞습니까? 맞다면 이 검사를 지우고 다시 실행하세요.`,
    );
    process.exit(1);
  }
  if (row.amount === amount) {
    console.log(`  ${code} 변경 없음 (이미 ${money(amount, row.currency)})`);
    continue;
  }
  changes.push({ row, amount });
}

if (changes.length === 0) {
  console.log("\n바꿀 것이 없습니다.");
  process.exit(0);
}

console.log(apply ? "적용합니다\n" : "미리보기 (적용하려면 --apply)\n");
for (const { row, amount } of changes) {
  console.log(
    `  ${row.code.padEnd(24)} ${money(row.amount, row.currency)} → ${money(amount, row.currency)}`,
  );
}

if (!apply) process.exit(0);

for (const { row, amount } of changes) {
  await rest(`product_settings?code=eq.${row.code}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ amount, updated_at: new Date().toISOString(), updated_by: ACTOR }),
  });
  await rest("product_setting_history", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      code: row.code,
      old_amount: row.amount,
      new_amount: amount,
      old_currency: row.currency,
      new_currency: row.currency,
      old_font_count: row.font_count,
      new_font_count: row.font_count,
      old_enabled: row.enabled,
      new_enabled: row.enabled,
      changed_by: ACTOR,
    }),
  });
}
console.log(`\n${changes.length}건 적용했습니다.`);
