import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { AffinityForm } from "@/components/AffinityForm";
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
  const { affinity } = getDictionary(locale);
  return buildPageMetadata({
    path: "/affinity",
    locale,
    requested: isLocale(lang) ? lang : null,
    title: affinity.formTitle,
    description: affinity.formDescription,
  });
}

export default async function AffinityPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* 배경은 궁합 입력 화면과 같은 것을 쓴다. 두 화면이 형제로 읽혀야 하고, 인연의 결만을
          위한 그림을 따로 만들 이유가 아직 없다. */}
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
        <PageHeader locale={locale} path="/affinity" width="max-w-2xl" />

        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle
              title={dictionary.affinity.formTitle}
              locale={locale}
              path="/affinity"
            />
            <p className="break-keep-all mt-3 text-muted">
              {dictionary.affinity.formDescription}
            </p>
            {/* 궁합 입력 화면과 같은 자리다 — 두 화면이 형제로 읽혀야 한다. */}
            <GuideLink locale={locale} from="affinity" align="start" className="mt-3" />
          </section>

          <AffinityForm dictionary={dictionary} locale={locale} />

          {/* 생년월일을 넣기 직전에 무엇이 저장되지 않는지 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />
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
