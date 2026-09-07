import type { Metadata } from "next";
import Image from "next/image";

import { GuideLink } from "@/components/GuideLink";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SajuForm } from "@/components/SajuForm";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { routeLocale } from "@/lib/route-locale";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const { form } = getDictionary(locale);
  return buildPageMetadata({
    path: "/reading",
    locale,
    requested: locale,
    title: form.title,
    description: form.description,
  });
}

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/reading-form-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div aria-hidden className="fixed inset-0 z-0 bg-[#fbf7f6]/25" />
      <div className="relative z-10">
        <PageHeader locale={locale} path="/reading" width="max-w-2xl" />
        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle title={dictionary.form.title} locale={locale} path="/reading" />
            <p className="break-keep-all mt-3 text-muted">{dictionary.form.description}</p>
            {/*
              애드센스가 "가치가 별로 없는 콘텐츠"로 지목한 자리 — 이 화면이 사실상 입력 폼뿐이라
              사람이 읽는 설명이 서너 낱말짜리 description 하나뿐이었다(2026-09-07). `/today`는
              같은 폼을 재방문자용으로 그대로 재사용하는 화면이라 이 문단을 넣지 않는다 — 넣으면
              두 화면이 다시 완전히 같은 문구가 된다.
            */}
            <p className="break-keep-all mt-3 whitespace-pre-line text-sm leading-6">
              {dictionary.form.intro}
            </p>
            {/* 무엇을 근거로 계산하는지는 생년월일을 넣기 **전에** 궁금해지는 것이라 이 자리다. */}
            <GuideLink locale={locale} from="reading" align="start" className="mt-3" />
          </section>
          <SajuForm dictionary={dictionary} locale={locale} menu="reading" />
          {/* 생년월일을 넣기 직전에 무엇이 저장되지 않는지 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />
        </div>
        <SiteFooter locale={locale} guideFrom="reading" />
      </div>
    </main>
  );
}
