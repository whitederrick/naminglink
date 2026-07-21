import { AuthPageNav } from "@/components/AuthPageNav";
import { AuthPanel } from "@/components/AuthPanel";
import { SiteFooter } from "@/components/SiteFooter";
import { getAuthCopy } from "@/lib/i18n-auth";
import { getRequestLocale } from "@/lib/locale";

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const copy = getAuthCopy(locale);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-5 py-8 sm:px-8">
        <AuthPageNav locale={locale} />
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            {copy.accountEyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            {copy.accountTitle}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            {copy.accountDescription}
          </p>
        </div>
        <AuthPanel intent="account" locale={locale} />
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
