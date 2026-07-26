import Link from "next/link";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";

export default async function LandingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);
  const { landing } = dictionary;
  const query = lang ? `?lang=${locale}` : "";

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-8">
      <header className="flex items-center justify-between gap-4">
        <span className="text-lg font-semibold text-brand-plum">
          {dictionary.brand}
        </span>
        <LocaleSwitcher current={locale} />
      </header>

      <section className="mt-16 sm:mt-24">
        <p className="text-sm text-muted">{dictionary.tagline}</p>
        <h1 className="break-keep-all mt-4 whitespace-pre-line text-4xl font-bold leading-tight sm:text-5xl">
          {landing.title}
        </h1>
        <p className="break-keep-all mt-6 max-w-xl text-lg text-muted">
          {landing.subtitle}
        </p>
        <Link
          href={`/compatibility${query}`}
          className="mt-10 inline-block rounded-full bg-brand-plum px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
        >
          {landing.cta}
        </Link>
      </section>

      <section className="mt-20">
        <h2 className="text-xl font-semibold">{landing.howTitle}</h2>
        <ol className="mt-6 space-y-4">
          {landing.steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span
                aria-hidden
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-strong text-sm font-semibold text-brand-plum"
              >
                {index + 1}
              </span>
              <p className="break-keep-all text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 rounded-2xl border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold text-brand-sage">
          {landing.privacyTitle}
        </h2>
        <p className="break-keep-all mt-3 text-sm leading-relaxed text-muted">
          {landing.privacyBody}
        </p>
      </section>

      <footer className="mt-auto pt-16">
        <p className="break-keep-all text-xs text-muted">{landing.disclaimer}</p>
      </footer>
    </main>
  );
}
