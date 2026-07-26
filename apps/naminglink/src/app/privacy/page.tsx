import { PrivacyDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/locale";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
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
