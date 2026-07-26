import { CompatibilityForm } from "@/components/CompatibilityForm";
import { PageHeader } from "@/components/PageHeader";
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
    <main className="min-h-screen bg-background">
      <PageHeader brand={dictionary.brand} locale={locale} />

      <div className="mx-auto w-full max-w-2xl px-6 pb-16">
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
      </div>
    </main>
  );
}
