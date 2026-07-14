import { PricingDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getRequestLocale } from "@/lib/locale";
import { getPublishedPolicyDocument } from "@/lib/site-content-server";

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const content = await getPublishedPolicyDocument("pricing", locale);

  return (
    <PolicyLayout
      title={content.title}
      description={`${content.description} 기준일: ${content.effectiveDate}`}
    >
      <PricingDocumentContent content={content} />
    </PolicyLayout>
  );
}
