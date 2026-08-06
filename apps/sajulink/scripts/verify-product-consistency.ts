// 상품 정보가 **DB·화면·약관 셋에서 같은 말을 하는지** 본다.
//
// 실행: apps/sajulink 에서
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

import { SAJULINK_PRODUCT_CODES } from "@naminglink/core/apps";

import { REPORT_PAGE_COUNT } from "../src/lib/report-pages";

import { getDictionary, translatedLocales } from "../src/lib/i18n";

// `report-product.ts`는 `server-only`라 스크립트에서 import할 수 없다. 글로 읽어 대조한다.

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
// **`supportedLocales`가 아니라 `translatedLocales`를 돈다.** 지금 사전이 있는 것은 ko·en
// 둘뿐이고, 나머지는 `getDictionary`가 en으로 떨어뜨린다 — 그 상태로 23바퀴를 돌면 같은 영어
// 사전을 21번 다시 재며 "23개 로케일을 검사했다"고 착각하게 된다. ⑦에서 사전을 채우면
// 이 목록이 늘어나 검사 범위도 함께 늘어난다.
for (const locale of translatedLocales) {
  const dictionary = getDictionary(locale);
  // **파는 상품이 하나라 도는 것도 하나다.** 옛 `premiumReport` 절은 2026-08-07에 23로케일에서
  // 지웠다 — 그때까지는 아무도 읽지 않는 문안이 남아 있어 이 자리에 "지금 검사하면 팔지 않는
  // 상품의 고시를 센다"는 예외가 필요했다. 절을 지웠으니 예외도 없앤다.
  for (const [key, copy] of [["report", dictionary.report]] as const) {
    // **목차 줄 수가 아니라 선언된 장수와 대조한다.** 예전에는 `contents.length`를 썼는데,
    // 그 둘이 우연히 같던 동안만 맞았다 — 목차를 한 줄 늘리는 순간 고시가 틀렸다고 잡힌다.
    const pages = REPORT_PAGE_COUNT;
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
// 리포트 하나를 팔면서 약관 어디에도 없던 적이 있다(인연링크, 2026-07-31에 고침). 상품이
// 늘 때 약관을 함께 고치지 않으면 다시 같은 일이 난다.
// ---------------------------------------------------------------------------
const koDocs = readFileSync(
  path.join(process.cwd(), "src/lib/legal-locales/_ko-docs.json"),
  "utf8",
);
// **상품이 하나다**(2026-08-05). 제목 전체는 약관 문장과 표현이 달라 그대로 찾으면 늘
// 실패하므로, 상품을 특정하는 낱말로 본다.
for (const title of ["평생 사주", "올해의 운세"]) {
  check(`약관에 "${title}" 언급`, koDocs.includes(title));
}

// 인연링크에서 물려받은 서비스·상품 이름이 약관에 남아 있으면 안 된다. 복제 앱이라 문구가
// 통째로 넘어왔고, 남으면 **없는 상품의 조건을 고지하는 것**이 된다.
const STALE_NAMES = ["궁합", "인연의 결", "인연링크", "인연 링크", "매칭률"];
for (const stale of STALE_NAMES) {
  check(`약관에 "${stale}" 없음`, !koDocs.includes(stale));
}

// ---------------------------------------------------------------------------
// 2-1) 화면에 나가는 이름에도 남아 있으면 안 된다
//
// **약관만 보면 놓친다.** ⑦ 리테마의 전수 grep이 `inyeon|gunghap|affinity|compatibility`만
// 봐서 한글 "인연"이 걸리지 않았고, 꼬리글이 `Saju-Link ( 인연 링크 )`인 채로 배포됐다
// (2026-08-05). 라틴 표기로 훑는 것만으로는 부족하다.
//
// 여기서 보는 것은 **이용자가 읽는 문자열**뿐이다. 주석의 "인연링크와 같은 값" 같은 서술은
// 출처를 적어 둔 것이라 그대로 두는 편이 낫다.
// ---------------------------------------------------------------------------
const brandSource = readFileSync(
  path.join(process.cwd(), "src/lib/company.ts"),
  "utf8",
);
const serviceSubtitle = /SERVICE_SUBTITLE\s*=\s*"([^"]*)"/.exec(brandSource)?.[1] ?? "";
check(
  `SERVICE_SUBTITLE에 인연링크 잔재 없음`,
  Boolean(serviceSubtitle) && !STALE_NAMES.some((stale) => serviceSubtitle.includes(stale)),
  `현재 값 "${serviceSubtitle}"`,
);

for (const locale of translatedLocales) {
  const dictionary = getDictionary(locale);
  // 사전 전체를 한 문자열로 만들어 훑는다. 키를 하나하나 적으면 사전이 늘 때마다 빠진다.
  //
  // **셀프 광고 절만 뺀다.** 그 자리는 형제 서비스를 **일부러** 소개하는 곳이라 인연링크의
  // 이름과 하는 일("두 사람의 궁합")이 들어 있는 것이 맞다. 여기서 걸러 내지 않으면 검사기가
  // 옳은 문구를 잡고, 그러면 사람이 검사기를 끄거나 문구를 뭉개게 된다 — 둘 다 나쁘다.
  //
  // 뺀 자리가 무법지대가 되지는 않는다. `verify-self-ads`가 그 절을 따로 본다(빈 문구·한글
  // 잔재), 그리고 이름은 사전이 아니라 명단(`SELF_AD_SERVICES.name`)이 갖는다.
  const flattened = JSON.stringify(dictionary, (key, value) =>
    key === "selfAds" ? undefined : value,
  );
  const found = STALE_NAMES.filter((stale) => flattened.includes(stale));
  check(`${locale} 사전에 인연링크 잔재 없음`, found.length === 0, found.join(", "));
}

// 엔진에 없는 것을 팔지 않는다. 대운·세운은 상품 주석에만 있었고 실제로는 담기지 않는다.
for (const absent of ["대운", "세운"]) {
  check(`약관에 "${absent}" 없음(엔진에 없다)`, !koDocs.includes(absent));
}

// 가격 플레이스홀더도 권역마다 있어야 한다. 하나가 빠지면 그 권역 가격이 문서에 안 나간다.
//
// **둘뿐이다**(2026-08-05). 상품이 하나로 합쳐지며 `{priceAffinity…}` 두 개가 쓰이지 않게
// 됐다 — 21로케일 번역에는 아직 남아 있고, ⑦에서 로케일을 다시 쓸 때 함께 사라진다.
for (const token of ["{priceDomestic}", "{priceGlobal}"]) {
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
for (const code of SAJULINK_PRODUCT_CODES) {
  check(`report-product.ts에 ${code}`, productSource.includes(code));
}

// 폴백 상수(SEEDED_PRICE)가 남아 있는지. 값 자체는 DB와 비교할 수 없지만(스크립트에서 DB를
// 읽지 않는다), 자리가 사라지면 조회 실패 시 약관에서 가격이 통째로 빠진다.
check("SEEDED_PRICE 폴백 존재", productSource.includes("SEEDED_PRICE"));

console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
if (failures > 0) process.exitCode = 1;
