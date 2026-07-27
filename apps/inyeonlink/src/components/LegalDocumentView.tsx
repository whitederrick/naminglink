import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LegalDocumentBody } from "@/components/LegalDocumentBody";
import { type LegalDocument } from "@/lib/legal-content";
import { getDictionary, type Locale } from "@/lib/i18n";

export function LegalDocumentView({
  document,
  locale,
}: {
  document: LegalDocument;
  locale: Locale;
}) {
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-background">
      <PageHeader brand={dictionary.brand} locale={locale} />

      <article className="mx-auto w-full max-w-3xl px-6 py-12">
        <h1 className="break-keep-all text-3xl font-bold">{document.title}</h1>
        <LegalDocumentBody document={document} />

        <Link
          href={`/?lang=${locale}`}
          className="mt-12 inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold"
        >
          {dictionary.footer.backHome}
        </Link>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
