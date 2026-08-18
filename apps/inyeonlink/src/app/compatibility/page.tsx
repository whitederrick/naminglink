import type { Metadata } from "next";
import Image from "next/image";

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
        <PageHeader locale={locale} path="/compatibility" width="max-w-2xl" />

        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle
              title={dictionary.form.title}
              locale={locale}
              path="/compatibility"
            />
            <p className="break-keep-all mt-3 text-muted">
              {dictionary.form.description}
            </p>
            {/* **설명 바로 아래다(사용자 결정).** 예전에는 폼 아래 미저장 안내 다음에 있었는데,
                푸터와 가까워 푸터의 안내 링크와 중복처럼 보였다. 무엇을 근거로 계산하는지는
                생년월일을 넣기 **전에** 궁금해지는 것이라 이 자리가 맞다. */}
            <GuideLink locale={locale} from="compatibility" align="start" className="mt-3" />
          </section>

          <CompatibilityForm dictionary={dictionary} locale={locale} />

          {/* 생년월일을 넣기 직전에 무엇이 저장되지 않는지 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
