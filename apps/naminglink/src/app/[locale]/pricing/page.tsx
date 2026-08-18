import type { Metadata } from "next";
import { PricingDocumentContent } from "@/components/LegalDocumentContent";
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
    kind: "pricing",
    path: "/pricing",
    locale,
    requested: locale,
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const published = await getPublishedPolicyDocument("pricing", locale);
  /**
   * **지금 살 수 없는 상품의 금액은 감춘다** (2026-08-11).
   *
   * 화면의 구매 단추는 살 수 없으면 자리째 빠지는데 이 문서만 정가를 나열하고 있었다. 글은
   * 그대로 두고 그리는 쪽에서 거른다 — 판매를 시작하면 저절로 돌아온다(`lib/pricing-visibility.ts`).
   */
  const content = withSellablePricesOnly(published, await sellablePriceTokens());
  const { labels } = getLegalLocaleContent(locale);

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} ${labels.referenceDate}: ${content.effectiveDate}`}
      loginLabel={labels.login}
      locale={locale}
    >
      <PricingDocumentContent content={content} />
    </PolicyLayout>
  );
}
