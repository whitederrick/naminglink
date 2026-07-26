import Link from "next/link";

import { CompatibilityForm } from "@/components/CompatibilityForm";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";

export default async function CompatibilityPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-8">
      <header>
        <Link href={`/?lang=${locale}`} className="text-sm font-semibold text-brand-plum">
          {dictionary.brand}
        </Link>
      </header>

      <section className="mt-10">
        <h1 className="break-keep-all text-3xl font-bold">
          {dictionary.form.title}
        </h1>
        <p className="break-keep-all mt-3 text-muted">
          {dictionary.form.description}
        </p>
      </section>

      <CompatibilityForm dictionary={dictionary} locale={locale} />

      <p className="break-keep-all mt-8 text-xs text-muted">
        {dictionary.landing.privacyBody}
      </p>
    </main>
  );
}
