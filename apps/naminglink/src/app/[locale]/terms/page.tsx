import type { Metadata } from "next";
import { TermsDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { routeLocale } from "@/lib/route-locale";
import { sellablePriceTokens, withSellablePricesOnly } from "@/lib/pricing-visibility";
import { buildLegalMetadata } from "@/lib/seo-legal";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  return buildLegalMetadata({
    kind: "terms",
    path: "/terms",
    locale,
    requested: locale,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const published = await getPublishedPolicyDocument("terms", locale);
  /**
   * **약관에도 같은 거르개를 건다** (2026-08-19).
   *
   * 요금 안내에만 걸려 있었다. 그래서 팔지 않는 상품의 금액이 **약관과 환불정책에는 그대로**
   * 남아 있었고, 국내 판매 계획이 없는 이름 도장의 39,000원이 그 자리였다 — 토스페이먼츠에
   * 「실물 배송 상품 없음」이라고 회신한 것과 화면이 어긋난다.
   *
   * 문서 셋이 같은 값을 다르게 보여 주면 어느 쪽이 참인지 이용자가 알 수 없다. 거르개는
   * 세 문서에 함께 건다 — `scripts/verify-pricing-visibility.ts`가 셋을 모두 센다.
   */
  const content = withSellablePricesOnly(published, await sellablePriceTokens());
  const { labels } = getLegalLocaleContent(locale);

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} ${labels.effectiveDate}: ${content.effectiveDate}`}
      loginLabel={labels.login}
      locale={locale}
    >
      <TermsDocumentContent content={content} />
    </PolicyLayout>
  );
}
