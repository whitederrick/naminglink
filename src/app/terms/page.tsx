import { TermsDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getRequestLocale } from "@/lib/locale";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const content = await getPublishedPolicyDocument("terms", locale);

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} 시행일: ${content.effectiveDate}`}
    >
      <TermsDocumentContent content={content} />
    </PolicyLayout>
  );
}
