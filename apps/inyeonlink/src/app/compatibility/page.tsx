import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { CompatibilityForm } from "@/components/CompatibilityForm";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { GuideLink } from "@/components/GuideLink";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
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
  const { form } = getDictionary(locale);
  return buildPageMetadata({
    path: "/compatibility",
    locale,
    requested: isLocale(lang) ? lang : null,
    title: form.title,
    description: form.description,
  });
}

export default async function CompatibilityPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/compatibility-form-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div aria-hidden className="fixed inset-0 z-0 bg-[#fbf7f6]/25" />

      <div className="relative z-10">
        <PageHeader brand={dictionary.brand} locale={locale} path="/compatibility" />

        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle title={dictionary.form.title} locale={locale} />
            <p className="break-keep-all mt-3 text-muted">
              {dictionary.form.description}
            </p>
          </section>

          <CompatibilityForm dictionary={dictionary} locale={locale} />

          {/* 생년월일을 넣기 직전에 무엇이 저장되지 않는지 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />

          {/* 무엇을 근거로 계산하는지 궁금해지는 자리는 입력 직후다. */}
          <GuideLink locale={locale} className="mt-6" />

        </div>

        {/* **화면에서 가장 마지막 자리.** 푸터 바로 위다. 예전에 입력 화면 맨 아래에 있던
            `form` 자리를 이것이 대신한다 — 둘을 함께 두면 광고 둘이 붙어 나온다. */}
        <div className="mx-auto w-full max-w-5xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
