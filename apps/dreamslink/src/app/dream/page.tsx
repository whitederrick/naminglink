import type { Metadata } from "next";

import { DreamForm } from "@/components/DreamForm";
import { PageTitle } from "@/components/PageTitle";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const t = getDictionary(locale).dream;
  return buildPageMetadata({
    path: "/dream",
    locale,
    requested: isLocale(lang) ? lang : null,
    title: t.title,
    description: t.subtitle,
  });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10">
      <PageTitle locale={locale} path="/dream" title={dictionary.dream.title} />
      <p className="break-keep-all mb-6 text-sm leading-6 text-muted">
        {dictionary.dream.subtitle}
      </p>
      <DreamForm dictionary={dictionary} locale={locale} />
    </main>
  );
}
