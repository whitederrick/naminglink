// 상품 정보가 **DB·화면·약관 셋에서 같은 말을 하는지** 본다.
//
// 실행: apps/dreamslink 에서
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
import { CONCEPTION_PAGE_COUNT } from "../src/lib/report-pages";

// `report-product.ts`는 `server-only`라 스크립트에서 import할 수 없다. 글로 읽어 대조한다.
//
// **파는 것이 둘인데 성격이 다르다.** 태몽 리포트는 PDF라 "몇 장"이 목차 길이와 맞아야 하고,
// 꿈 카드는 이미지 한 장이라 목차가 장 수를 세지 않는다(카드에 담기는 것을 적는다). 같은
// 규칙으로 재면 꿈 카드가 언제나 실패한다 — 그래서 갈라 본다.
const REPORT_KINDS = ["dreamCard", "conceptionReport"] as const;

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

  // 태몽 리포트 — 목차 길이가 곧 장수이고, 고시에도 그 숫자가 있어야 한다.
  {
    const copy = dictionary.conceptionReport;
    const pages = copy.contents.length;
    // 상품 형태는 고시의 두 번째 항목이다(첫째는 제작·공급자).
    const format = copy.productInfo[1]?.[1] ?? "";
    // 타입을 적어 둔다. `?? []`만 두면 never[]로 좁혀져 아래 includes가 타입 오류를 낸다.
    const numbers: string[] = format.match(/\d+/g) ?? [];
    check(
      `${locale}/conceptionReport 고시 장수 = 목차 ${pages}장`,
      pages === CONCEPTION_PAGE_COUNT && numbers.includes(String(pages)),
      numbers.length ? `고시의 숫자 ${numbers.join(",")}` : "고시에 숫자가 없다",
    );
  }

  // 꿈 카드 — **PDF가 아니라 이미지**라는 것이 고시에서 읽혀야 한다. 형제 앱의 유료 상품이
  // 전부 PDF라 그대로 두면 아무도 의심하지 않고 PDF로 읽는다.
  //
  // 세는 것은 **파일 형식 이름**이지 장수가 아니다. 처음에는 "1"이라는 숫자를 찾았는데
  // 아랍어가 그 자리를 낱말로 옮겼고(「ملف صورة واحد」= 이미지 파일 **하나**), 그것은
  // 오역이 아니라 그 언어에서 자연스러운 표기다. 언어마다 다른 것을 세면 검사기가 번역의
  // 품질이 아니라 어법을 잡게 된다. `PNG`는 어느 언어에서도 그대로 남는다.
  {
    const format = dictionary.dreamCard.productInfo[1]?.[1] ?? "";
    check(
      `${locale}/dreamCard 고시에 이미지 형식(PNG)`,
      /PNG/i.test(format),
      format ? `고시: ${format.slice(0, 40)}…` : "고시가 비었다",
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
  const title = kind === "dreamCard" ? "꿈 카드" : "태몽 리포트";
  check(`약관에 "${title}" 언급`, koDocs.includes(title));
}

// **파는 것이 아닌 상품이 약관에 남아 있지 않은가.** 복제 앱에서 실제로 있었던 일이다 —
// 약관이 궁합 리포트 7장과 인연의 결 4장을 고지하는 채로 라이브에 나가 있었다(2026-08-06).
// 없는 상품을 고지하는 것은 빠뜨린 것만큼이나 틀린 고지다.
for (const stale of ["궁합", "인연의 결", "사주", "생년월일"]) {
  check(`약관에 "${stale}" 없음`, !koDocs.includes(stale));
}

// 가격 플레이스홀더도 상품마다 있어야 한다. 하나가 빠지면 그 상품 가격이 문서에 안 나간다.
for (const token of [
  "{priceCardDomestic}",
  "{priceCardGlobal}",
  "{priceConceptionDomestic}",
  "{priceConceptionGlobal}",
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
