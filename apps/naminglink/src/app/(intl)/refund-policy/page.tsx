import type { Metadata } from "next";
import { RefundDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildLegalMetadata } from "@/lib/seo-legal";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  return buildLegalMetadata({
    kind: "refund",
    path: "/refund-policy",
    locale: await getRequestLocale(lang),
    requested: isLocale(lang) ? lang : null,
  });
}

export default async function RefundPolicyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const content = await getPublishedPolicyDocument("refund", locale);
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
