import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LegalDocumentBody } from "@/components/LegalDocumentBody";
import { type LegalDocument } from "@/lib/legal-content";
import { getDictionary, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

export function LegalDocumentView({
  document,
  locale,
  path,
}: {
  document: LegalDocument;
  locale: Locale;
  /** 지금 화면의 경로(로케일 없는 형태). 머리글의 언어 선택기가 이 화면에 머물게 한다. */
  path: string;
}) {
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-background">
      <PageHeader brand={dictionary.brand} locale={locale} path={path} />

      <article className="mx-auto w-full max-w-3xl px-6 py-12">
        <h1 className="break-keep-all text-3xl font-bold">{document.title}</h1>
        <LegalDocumentBody document={document} />

        <Link
          href={localePath("/", locale)}
          className="mt-12 inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold"
        >
          {dictionary.footer.backHome}
        </Link>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
