// 요금 안내·이용약관·환불정책에서 **살 수 없는 금액이 감춰지는가.**
//
// ## 왜 필요한가 (2026-08-11)
//
// 화면의 구매 단추는 살 수 없으면 자리째 빠지는데 요금 문서만 정가를 나열하고 있었다. 글을
// 고치는 대신 그리는 쪽에서 거르기로 했고(`lib/pricing-visibility.ts`), 그 거르개는 **틀리면
// 두 방향으로 틀린다**:
//
//   · 너무 많이 거른다  → 판매를 시작해도 요금 안내가 비어 있다(아무도 눈치채지 못한다)
//   · 너무 적게 거른다  → 팔지 않는 값이 확정 상품처럼 계속 걸려 있다(이번 반려 사유)
//
// 그래서 **양쪽을 다 센다.** 실제 23개 로케일 문서를 태우고, 「아무것도 못 판다」와 「전부
// 판다」 두 상태에서 각각 기대값을 확인한다.
//
// ## 문서 셋을 함께 센다 (2026-08-19)
//
// 처음에는 요금 안내 하나만 셌다. 그런데 거르개가 **약관과 환불정책에는 걸려 있지도 않았고**,
// 검사기가 그 문서를 보지 않았으므로 초록불이었다 — 국내 판매를 하지 않기로 한 이름 도장의
// 39,000원이 두 문서에 그대로 남아 있었다. 토스페이먼츠에 「실물 배송 상품 없음」이라고
// 회신한 것과 화면이 어긋나는 자리다.
//
// **검사기가 보지 않는 화면은 검사된 것이 아니다.** 세 문서를 함께 태운다.
//
// ## 국내 도장 대조군
//
// ①②는 「전부 못 판다」와 「전부 판다」 양 끝만 본다. 실제 상태는 그 사이에 있다 — 디지털
// 4종은 팔고 국내 도장은 팔지 않는 상태가 지금의 사업 결정이고, 그 상태에서 **국내 금액은
// 사라지고 해외 금액은 남아야** 한다. 문단이 국내·해외를 한 줄에 담고 있으면 이 검사가 잡는다
// (거르개가 「문단에 하나라도 팔리는 값이 있으면 남긴다」이기 때문이다).
//
// 실행: apps/naminglink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-pricing-visibility.ts

import { createRequire } from "node:module";

// `server-only`는 Next 밖에서 부르면 던진다. 그 가드만 비운다(`verify-candidate-seal.ts`와 같다).
const nodeRequire = createRequire(import.meta.url);
nodeRequire.cache[nodeRequire.resolve("server-only")] = {
  exports: {},
} as unknown as NodeModule;

const AMOUNT = "[0-9]{1,3}(?:,[0-9]{3})*";
const TOKEN = new RegExp(`₩${AMOUNT}|US\\$[0-9]+\\.[0-9]{2}|${AMOUNT}원`, "g");

/** 거르개가 걸린 문서. 페이지 셋(`terms`·`refund-policy`·`pricing`)과 1:1이다. */
const FILTERED_DOCUMENTS = ["terms", "refund", "pricing"] as const;

/** 국내 도장 금액. 판매 계획이 없다는 것이 사업 결정이라 **어느 문서에도 남으면 안 된다.** */
const DOMESTIC_STAMP = ["39,000", "59,000", "79,000"];
/** 해외 도장 금액. 이 값들은 반대로 **살 수 있게 되면 남아야** 한다 — 대조군의 반대쪽이다. */
const GLOBAL_STAMP = ["US$39.90", "US$59.90", "US$79.90"];

const isDomesticStamp = (token: string) =>
  DOMESTIC_STAMP.some((amount) => token === `₩${amount}` || token === `${amount}원`);

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

async function main() {
  const { withSellablePricesOnly } = await import("../src/lib/pricing-visibility");
  const { getLegalLocaleContent } = await import("../src/lib/legal-content");
  const { supportedLocales } = await import("../src/lib/services");

  console.log("요금 안내·약관·환불정책 — 살 수 없는 금액이 감춰지는가\n");

  let documentsWithPrices = 0;
  let hiddenTotal = 0;
  /** 절 제목에 든 금액. 거르개는 문단만 보므로 제목의 값은 영영 남는다 → `pricing-visibility.ts`. */
  const titlePrices: string[] = [];
  /** 원본 조항 번호가 1부터 빠짐없이 이어지는가. 그리는 쪽의 재번호가 이 결함을 가린다. */
  const numbering: string[] = [];
  /** 거르고 난 뒤에도 번호가 이어지는가 — 뺀 절 때문에 조항이 사라진 것처럼 보이면 안 된다. */
  const gaps: string[] = [];
  const leftovers: string[] = [];
  const overCut: string[] = [];
  const stampLeftovers: string[] = [];
  const stampOverCut: string[] = [];

  for (const locale of supportedLocales) {
    const documents = getLegalLocaleContent(locale).documents;

    for (const kind of FILTERED_DOCUMENTS) {
      const doc = documents[kind];
      const where = `${locale}/${kind}`;
      const allText = JSON.stringify(doc);
      const amounts = [...new Set(allText.match(TOKEN) ?? [])];
      if (amounts.length === 0) continue;
      documentsWithPrices += 1;

      // ── ⓪ 금액이 절 제목에 있으면 거르개가 닿지 못한다
      for (const section of doc.sections) {
        const inTitle = section.title.match(TOKEN) ?? [];
        if (inTitle.length) titlePrices.push(`${where}: 「${section.title}」`);
      }

      // ── ⓪-2 원본 조항 번호가 1부터 이어지는가
      const sourceNumbers = doc.sections
        .map((section) => /^(\d+)\./.exec(section.title)?.[1])
        .filter((n): n is string => Boolean(n))
        .map(Number);
      sourceNumbers.forEach((n, i) => {
        if (n !== i + 1) numbering.push(`${where}: ${sourceNumbers.join(",")}`);
      });

      // ── ① 아무것도 못 파는 상태 — 금액이 든 문단은 전부 빠져야 한다
      const none = withSellablePricesOnly(doc, new Set<string>());
      const leftAmounts = JSON.stringify(none).match(TOKEN) ?? [];
      if (leftAmounts.length) leftovers.push(`${where}: ${[...new Set(leftAmounts)].join(", ")}`);
      hiddenTotal += amounts.length;

      // 금액이 없는 절은 살아 있어야 한다 — 무료 범위·광고 보상형·문의가 그것이다.
      if (none.sections.length === 0) overCut.push(`${where}: 절이 하나도 남지 않았다`);

      // **껍데기 절이 남지 않아야 한다.** 상품 절에서 금액만 빼면 「한자 상세 상품」이라는 제목
      // 아래 보관 기간 한 줄만 남는다 — 팔지 않는 상품의 이름이 제목으로 걸린다.
      const priced = (text: string) => (text.match(TOKEN) ?? []).length > 0;
      for (const section of none.sections) {
        const original = doc.sections.find((candidate) => candidate.title === section.title);
        if (original?.paragraphs.some(priced)) {
          leftovers.push(`${where}: 「${section.title}」 절이 값 없이 남았다`);
        }
      }

      // ── ② 전부 파는 상태 — 하나도 빠지면 안 된다
      const all = withSellablePricesOnly(doc, new Set(amounts));
      if (JSON.stringify(all) !== JSON.stringify(doc)) {
        overCut.push(`${where}: 전부 판매 중인데도 문단이 빠졌다`);
      }

      // ── ③ 국내 도장만 못 파는 상태 — 지금의 사업 결정 그대로
      const exceptDomesticStamp = new Set(amounts.filter((token) => !isDomesticStamp(token)));
      const partial = JSON.stringify(withSellablePricesOnly(doc, exceptDomesticStamp));
      const domesticLeft = (partial.match(TOKEN) ?? []).filter(isDomesticStamp);
      if (domesticLeft.length) {
        stampLeftovers.push(`${where}: ${[...new Set(domesticLeft)].join(", ")}`);
      }
      // 절을 뺐는데 번호가 건너뛰면 조항이 사라진 문서로 보인다.
      const kept = withSellablePricesOnly(doc, exceptDomesticStamp).sections
        .map((section) => /^(\d+)\./.exec(section.title)?.[1])
        .filter((n): n is string => Boolean(n))
        .map(Number);
      kept.forEach((n, i) => {
        if (n !== i + 1) gaps.push(`${where}: ${kept.join(",")}`);
      });

      // 반대쪽 — 해외 금액은 이 상태에서 살아 있어야 한다. 한쪽만 보면 「다 지웠다」가 통과한다.
      for (const token of GLOBAL_STAMP) {
        if (allText.includes(token) && !partial.includes(token)) {
          stampOverCut.push(`${where}: ${token}까지 함께 사라졌다`);
        }
      }
    }
  }

  check("금액이 든 문서를 찾았다", documentsWithPrices > 0, `${documentsWithPrices}개`);
  if (documentsWithPrices === 0) {
    console.error("\n검사 0건은 통과가 아니라 실패다. 문서 구조가 바뀐 것인지 볼 것.");
    process.exit(1);
  }

  check(
    "금액이 절 제목에 없다 (거르개는 문단만 본다)",
    titlePrices.length === 0,
    titlePrices[0] ?? `${documentsWithPrices}개 문서의 제목을 봤다`,
  );
  check(
    "원본 조항 번호가 1부터 빠짐없이 이어진다",
    numbering.length === 0,
    numbering[0] ?? "",
  );
  check(
    "절을 뺀 뒤에도 조항 번호가 건너뛰지 않는다",
    gaps.length === 0,
    gaps[0] ?? "",
  );
  check(
    "못 파는 상태에서 금액이 하나도 남지 않는다",
    leftovers.length === 0,
    leftovers[0] ?? `${hiddenTotal}개 금액을 감췄다`,
  );
  check(
    "금액 없는 절(무료 범위·안내)은 그대로 남는다",
    overCut.filter((line) => line.includes("절이 하나도")).length === 0,
    overCut.find((line) => line.includes("절이 하나도")) ?? "",
  );
  check(
    "전부 판매 중이면 아무것도 빠지지 않는다 (대조군)",
    overCut.filter((line) => line.includes("전부 판매")).length === 0,
    overCut.find((line) => line.includes("전부 판매")) ?? "",
  );
  check(
    "국내 도장만 못 파는 상태에서 국내 금액이 남지 않는다",
    stampLeftovers.length === 0,
    stampLeftovers[0] ?? `${DOMESTIC_STAMP.join(" / ")} 없음`,
  );
  check(
    "그 상태에서 해외 도장 금액은 남는다 (대조군)",
    stampOverCut.length === 0,
    stampOverCut[0] ?? GLOBAL_STAMP.join(" / "),
  );

  console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
