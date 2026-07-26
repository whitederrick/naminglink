import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/LegalDocumentView";
import { getDictionary } from "@/lib/i18n";
import { getLegalDocument } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const document = getLegalDocument(locale, "terms");
  return {
    title: `${document.title} | ${getDictionary(locale).brand}`,
    description: document.intro,
  };
}

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  return (
    <LegalDocumentView
      document={getLegalDocument(locale, "terms")}
      locale={locale}
    />
  );
}
