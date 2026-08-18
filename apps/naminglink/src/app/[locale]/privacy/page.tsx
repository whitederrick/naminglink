import type { Metadata } from "next";
import { PrivacyDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { routeLocale } from "@/lib/route-locale";
import { buildLegalMetadata } from "@/lib/seo-legal";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  return buildLegalMetadata({
    kind: "privacy",
    path: "/privacy",
    locale,
    requested: locale,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const content = await getPublishedPolicyDocument("privacy", locale);
  const { labels } = getLegalLocaleContent(locale);

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} ${labels.effectiveDate}: ${content.effectiveDate}`}
      loginLabel={labels.login}
      locale={locale}
    >
      <PrivacyDocumentContent content={content} />
    </PolicyLayout>
  );
}
