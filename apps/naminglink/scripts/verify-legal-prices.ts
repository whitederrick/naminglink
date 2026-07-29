// 약관·환불·요금 안내에 적힌 금액이 **DB(product_settings)의 실제 판매가와 맞는지** 본다.
//
// 왜 필요한가: 2026-07-29에 약관이 도장 가격을 옛 단일 상품가(국내 39,000원 / 해외 US$34.99)로
// 적고 있는 것을 뒤늦게 발견했다. 실제 판매는 모델 3종이고 US$34.99는 **어느 모델과도 맞지
// 않는** 값이었다(지금은 판매하지 않는 STAMP_USD의 값). 23개 로케일 × 3문단 = 69곳이 그대로였다.
//
// 기존 `validate-legal-content.ts`는 이것을 못 잡는다 — 기대 가격이 스크립트 안에 상수로
// 박혀 있어서, 문서와 스크립트가 함께 낡으면 통과한다. 그래서 **DB를 진실로 삼는** 검사를
// 따로 둔다. 표시가와 청구액이 어긋나는 것은 전자상거래법이 금하는 것이고 PG 심사에서도 걸린다.
//
// 실행 (apps/naminglink 에서):
//   node_modules/.bin/tsx --tsconfig tsconfig.json scripts/verify-legal-prices.ts
import { readFileSync } from "node:fs";

import { CANDIDATE_UNLOCK_PRODUCTS } from "../src/lib/unlock-products";
import { STAMP_MODEL_CODES, STAMP_MODELS, STAMP_REGIONS } from "../src/lib/goods-products";
import { HANJA_PRODUCT_CODES } from "../src/lib/hanja-products";
import { getLegalLocaleContent, legalDocumentKinds } from "../src/lib/legal-content";
import { supportedLocales } from "../src/lib/services";

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

/**
 * **지금 파는 상품 코드**. DB 행 전체가 아니라 코드가 실제로 제공하는 것만 본다.
 *
 * DB에는 모델별 가격으로 대체된 옛 행(STAMP_KRW·STAMP_USD)이 남아 있는데, 그것까지 유효한
 * 값으로 치면 이번에 잡은 US$34.99가 다시 통과해 버린다. 판매 목록의 기준은 코드다.
 */
const LIVE_CODES = [
  ...HANJA_PRODUCT_CODES,
  ...Object.values(CANDIDATE_UNLOCK_PRODUCTS).map((product) => product.productCode),
  ...STAMP_REGIONS.flatMap((region) =>
    STAMP_MODEL_CODES.map((model) => STAMP_MODELS[model].settingCode[region]),
  ),
  "GLOBAL_NAME_PDF",
  "HANGUL_ART_PDF",
  "NAME_ART_PACK",
  // 인연링크 상품도 같은 상품표를 쓴다. naminglink 약관에는 나오지 않지만, 값이 겹칠 때
  // (990원·US$1.99) 잘못 실패하지 않도록 유효 집합에 넣는다.
  "GUNGHAP_PDF_KRW",
  "GUNGHAP_PDF_USD",
  "AFFINITY_PDF_KRW",
  "AFFINITY_PDF_USD",
];

type Row = { code: string; amount: number; currency: "KRW" | "USD" };

// tsx가 이 스크립트를 CJS로 변환하므로 최상위 await를 쓸 수 없다. main()으로 감싼다.
async function main() {

const response = await fetch(
  `${URL_BASE}/rest/v1/product_settings?select=code,amount,currency`,
  {
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "User-Agent": "naminglink-scripts",
    },
  },
);
if (!response.ok) {
  console.error(`product_settings 조회 실패: ${response.status} ${await response.text()}`);
  process.exit(1);
}
const rows = (await response.json()) as Row[];
const live = rows.filter((row) => LIVE_CODES.includes(row.code));

const missing = LIVE_CODES.filter((code) => !rows.some((row) => row.code === code));
if (missing.length) {
  console.error(`DB에 없는 상품 코드: ${missing.join(", ")}`);
  process.exit(1);
}

/**
 * 문서에 나와도 되는 금액 표기.
 *
 * 같은 값이라도 한국어 원문은 `39,000원`, 나머지 로케일은 `₩39,000`으로 적는다
 * (결제 화면의 displayPrice와 같은 형식으로 고정한다는 기존 규칙).
 */
const allowed = new Set<string>();
for (const row of live) {
  if (row.currency === "USD") {
    allowed.add(`US$${(row.amount / 100).toFixed(2)}`);
  } else {
    const formatted = row.amount.toLocaleString("ko-KR");
    allowed.add(`₩${formatted}`);
    allowed.add(`${formatted}원`);
  }
}

// 문서 안의 금액처럼 보이는 토막을 전부 긁는다.
// **천 단위 구분 쉼표만 삼키게 한다.** `[0-9,]+`로 두면 "₩990, 해외…"의 문장 쉼표까지 붙어
// `₩990,`이라는 있지도 않은 금액이 만들어진다(실제로 17개 로케일이 그렇게 잘못 걸렸다).
const AMOUNT = "[0-9]{1,3}(?:,[0-9]{3})*";
const TOKEN = new RegExp(`₩${AMOUNT}|US\\$[0-9]+\\.[0-9]{2}|${AMOUNT}원`, "g");

let failures = 0;
for (const locale of supportedLocales) {
  const { documents } = getLegalLocaleContent(locale);
  const problems = new Map<string, Set<string>>();

  for (const kind of legalDocumentKinds) {
    const text = JSON.stringify(documents[kind]);
    for (const token of text.match(TOKEN) ?? []) {
      if (allowed.has(token)) continue;
      if (!problems.has(token)) problems.set(token, new Set());
      problems.get(token)!.add(kind);
    }
  }

  if (problems.size === 0) {
    console.log(`OK   ${locale}`);
    continue;
  }
  failures += 1;
  console.log(`FAIL ${locale}`);
  for (const [token, kinds] of problems) {
    console.log(`  ${token} — 상품표에 없는 금액 (${[...kinds].join(", ")})`);
  }
}

console.log("");
console.log(`상품표 기준 유효 금액: ${[...allowed].sort().join(", ")}`);
if (failures) {
  console.error(`\n${failures}개 로케일에서 상품표와 어긋나는 금액을 찾았습니다.`);
  process.exit(1);
}
console.log("\nALL PASS — 문서의 모든 금액이 상품표와 일치합니다.");

}

void main();
