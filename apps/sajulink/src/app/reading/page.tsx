import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { GuideLink } from "@/components/GuideLink";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SajuForm } from "@/components/SajuForm";
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
    path: "/reading",
    locale,
    requested: isLocale(lang) ? lang : null,
    title: form.title,
    description: form.description,
  });
}

export default async function ReadingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* **배경 이미지는 인연링크 것을 물려받은 임시다.** 사주용 아트로 교체 대상
          (`docs/image_prompts_saju_dream.md`). 파일 이름을 그대로 둔 것은 교체할 때 이
          한 자리만 바꾸면 되게 하기 위해서다. */}
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
        <PageHeader locale={locale} path="/reading" />
        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle title={dictionary.form.title} locale={locale} path="/reading" />
            <p className="break-keep-all mt-3 text-muted">{dictionary.form.description}</p>
            {/* 무엇을 근거로 계산하는지는 생년월일을 넣기 **전에** 궁금해지는 것이라 이 자리다. */}
            <GuideLink locale={locale} from="reading" align="start" className="mt-3" />
          </section>
          <SajuForm dictionary={dictionary} locale={locale} />
          {/* 생년월일을 넣기 직전에 무엇이 저장되지 않는지 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />
        </div>
        <div className="mx-auto w-full max-w-5xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>
        <SiteFooter locale={locale} guideFrom="reading" />
      </div>
    </main>
  );
}
