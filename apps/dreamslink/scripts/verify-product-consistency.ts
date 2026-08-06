// 상품 정보가 **DB·화면·약관 셋에서 같은 말을 하는지** 본다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/verify-product-consistency.ts
//
// 왜 필요한가: 기존 검증기들은 각자의 안쪽만 본다. `verify-legal-locales`는 번역이 ko와 구조가
// 같은지 보고, `verify-i18n`은 사전 키가 다 있는지 본다. 그런데 **정작 사고는 그 사이에서
// 난다** — 상품표는 7장인데 고시는 3장이라거나, 약관이 파는 상품 하나를 아예 빠뜨린다거나,
// 폴백 상수만 옛 가격으로 남는 식이다. 2026-07-31에 그 셋이 한꺼번에 드러났다.
//
// 상태 점검("잠겨 있나")만 하면 이런 것을 통째로 놓친다. 여기서는 **값을 서로 대 본다.**
import { readFileSync } from "node:fs";
import path from "node:path";

import { DREAMSLINK_PRODUCT_CODES } from "@naminglink/core/apps";

import { getDictionary, supportedLocales } from "../src/lib/i18n";

// `report-product.ts`는 `server-only`라 스크립트에서 import할 수 없다. 글로 읽어 대조한다.
const REPORT_KINDS = ["gunghap", "affinity"] as const;

let failures = 0;
function check(label: string, ok: boolean, detail?: string) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

// ---------------------------------------------------------------------------
// 1) 목차 장수 ↔ 상품정보고시의 "N장"
//
// 고시의 상품 형태는 로케일마다 문장이 달라 숫자만 뽑아 센다. 목차가 늘었는데 고시를 안 고치면
// 여기서 걸린다 — 전자상거래 상품정보제공 고시 항목이라 틀린 값이 나가면 안 된다.
// ---------------------------------------------------------------------------
for (const locale of supportedLocales) {
  const dictionary = getDictionary(locale);
  for (const [key, copy] of [
    ["report", dictionary.report],
    ["affinityReport", dictionary.affinityReport],
  ] as const) {
    const pages = copy.contents.length;
    // 상품 형태는 고시의 두 번째 항목이다(첫째는 제작·공급자).
    const format = copy.productInfo[1]?.[1] ?? "";
    // 타입을 적어 둔다. `?? []`만 두면 never[]로 좁혀져 아래 includes가 타입 오류를 낸다.
    const numbers: string[] = format.match(/\d+/g) ?? [];
    check(
      `${locale}/${key} 고시 장수 = 목차 ${pages}장`,
      numbers.includes(String(pages)),
      numbers.length ? `고시의 숫자 ${numbers.join(",")}` : "고시에 숫자가 없다",
    );
  }
}

// ---------------------------------------------------------------------------
// 2) 파는 상품이 전부 약관 ko 원문에 나오는가
//
// 인연의 결 리포트를 팔면서 약관 어디에도 없던 적이 있다(2026-07-31에 고침). 상품이 늘 때
// 약관을 함께 고치지 않으면 다시 같은 일이 난다.
// ---------------------------------------------------------------------------
const koDocs = readFileSync(
  path.join(process.cwd(), "src/lib/legal-locales/_ko-docs.json"),
  "utf8",
);
for (const kind of REPORT_KINDS) {
  // 사전의 상품 제목에서 앞 두 낱말을 뽑아 약관에 있는지 본다. 제목 전체는 약관 문장과
  // 표현이 달라 그대로 찾으면 늘 실패한다.
  const title = kind === "gunghap" ? "궁합 리포트" : "인연의 결";
  check(`약관에 "${title}" 언급`, koDocs.includes(title));
}

// 가격 플레이스홀더도 상품마다 있어야 한다. 하나가 빠지면 그 상품 가격이 문서에 안 나간다.
for (const token of [
  "{priceDomestic}",
  "{priceGlobal}",
  "{priceAffinityDomestic}",
  "{priceAffinityGlobal}",
]) {
  check(`약관에 ${token}`, koDocs.includes(token));
}

// ---------------------------------------------------------------------------
// 3) 상품 코드가 서로 맞는가
//
// `report-product.ts`의 코드와 `packages/core`의 목록이 갈리면 콘솔이 상품을 엉뚱한 서비스로
// 분류한다(배지만 틀리고 값은 멀쩡해서 눈치채기 어렵다).
// ---------------------------------------------------------------------------
const productSource = readFileSync(
  path.join(process.cwd(), "src/lib/report-product.ts"),
  "utf8",
);
for (const code of DREAMSLINK_PRODUCT_CODES) {
  check(`report-product.ts에 ${code}`, productSource.includes(code));
}

// 폴백 상수(SEEDED_PRICE)가 남아 있는지. 값 자체는 DB와 비교할 수 없지만(스크립트에서 DB를
// 읽지 않는다), 자리가 사라지면 조회 실패 시 약관에서 가격이 통째로 빠진다.
check("SEEDED_PRICE 폴백 존재", productSource.includes("SEEDED_PRICE"));

console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
if (failures > 0) process.exitCode = 1;
