import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { CompatibilityForm } from "@/components/CompatibilityForm";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
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

          {/* 광고는 미저장 안내 아래, 즉 화면의 맨 끝에 둔다. 제출 버튼 근처에 두면 오클릭이
              나고 그건 애드센스 계정 정지 사유다. */}
          <AdBanner placement="form" locale={locale} className="mt-10" />
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
