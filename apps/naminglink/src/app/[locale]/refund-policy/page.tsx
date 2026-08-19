import type { Metadata } from "next";
import { RefundDocumentContent } from "@/components/LegalDocumentContent";
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
    kind: "refund",
    path: "/refund-policy",
    locale,
    requested: locale,
  });
}

export default async function RefundPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const published = await getPublishedPolicyDocument("refund", locale);
  /**
   * 팔지 않는 상품의 환불 조건은 싣지 않는다 (2026-08-19). 근거는 `terms/page.tsx`와 같다 —
   * 거르개는 세 문서에 함께 건다.
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
      <RefundDocumentContent content={content} />
    </PolicyLayout>
  );
}
