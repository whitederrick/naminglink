import { PrivacyDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
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

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} 시행일: ${content.effectiveDate}`}
    >
      <PrivacyDocumentContent content={content} />
    </PolicyLayout>
  );
}
