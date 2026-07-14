import { RefundDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getRequestLocale } from "@/lib/locale";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export default async function RefundPolicyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const content = await getPublishedPolicyDocument("refund", locale);

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} 시행일: ${content.effectiveDate}`}
    >
      <RefundDocumentContent content={content} />
    </PolicyLayout>
  );
}
