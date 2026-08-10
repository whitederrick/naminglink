// 요금 안내에서 **살 수 없는 금액이 감춰지는가.**
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

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

async function main() {
  const { withSellablePricesOnly } = await import("../src/lib/pricing-visibility");
  const { getLegalLocaleContent } = await import("../src/lib/legal-content");
  const { supportedLocales } = await import("../src/lib/services");

  console.log("요금 안내 — 살 수 없는 금액이 감춰지는가\n");

  let localesWithPrices = 0;
  let hiddenTotal = 0;
  const leftovers: string[] = [];
  const overCut: string[] = [];

  for (const locale of supportedLocales) {
    const pricing = getLegalLocaleContent(locale).documents.pricing;
    const allText = JSON.stringify(pricing);
    const amounts = [...new Set(allText.match(TOKEN) ?? [])];
    if (amounts.length === 0) continue;
    localesWithPrices += 1;

    // ── ① 아무것도 못 파는 상태 — 금액이 든 문단은 전부 빠져야 한다
    const none = withSellablePricesOnly(pricing, new Set<string>());
    const leftAmounts = JSON.stringify(none).match(TOKEN) ?? [];
    if (leftAmounts.length) leftovers.push(`${locale}: ${[...new Set(leftAmounts)].join(", ")}`);
    hiddenTotal += amounts.length;

    // 금액이 없는 절은 살아 있어야 한다 — 무료 범위·광고 보상형·정식 결제 전 안내가 그것이다.
    if (none.sections.length === 0) overCut.push(`${locale}: 절이 하나도 남지 않았다`);

    // **껍데기 절이 남지 않아야 한다.** 상품 절에서 금액만 빼면 「한자 상세 상품」이라는 제목
    // 아래 보관 기간 한 줄만 남는다 — 팔지 않는 상품의 이름이 제목으로 걸린다.
    const priced = (text: string) => (text.match(TOKEN) ?? []).length > 0;
    for (const section of none.sections) {
      const original = pricing.sections.find((candidate) => candidate.title === section.title);
      if (original?.paragraphs.some(priced)) {
        leftovers.push(`${locale}: 「${section.title}」 절이 값 없이 남았다`);
      }
    }

    // ── ② 전부 파는 상태 — 하나도 빠지면 안 된다
    const all = withSellablePricesOnly(pricing, new Set(amounts));
    if (JSON.stringify(all) !== JSON.stringify(pricing)) {
      overCut.push(`${locale}: 전부 판매 중인데도 문단이 빠졌다`);
    }
  }

  check("금액이 든 로케일 문서를 찾았다", localesWithPrices > 0, `${localesWithPrices}개`);
  if (localesWithPrices === 0) {
    console.error("\n검사 0건은 통과가 아니라 실패다. 문서 구조가 바뀐 것인지 볼 것.");
    process.exit(1);
  }

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

  console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
