import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { DreamForm } from "@/components/DreamForm";
import { GuideLink } from "@/components/GuideLink";
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

  // 배경·머리글·푸터의 구성은 사주링크 `/reading`과 같은 자리를 같은 값으로 쓴다. 두 서비스를
  // 오가는 사람이 같은 곳에서 같은 것을 찾아야 하고, 무엇보다 **머리글이 없으면 상단 광고가
  // 통째로 빠진다** — 광고가 주 수익인 서비스에서 가장 많이 열리는 화면이 그랬다.
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* 배경은 고정이라 스크롤해도 따라오지 않는다. `fixed`가 아니면 폼이 길어질 때
          아래쪽이 빈 배경색으로 끊긴다. */}
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/dream-form-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* 흰 막을 얇게 덮어 본문 글자의 대비를 확보한다. 값은 사주링크와 같다. */}
      <div aria-hidden className="fixed inset-0 z-0 bg-[#f9f8fc]/25" />
      <div className="relative z-10">
        <PageHeader locale={locale} path="/dream" width="max-w-3xl" />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle locale={locale} path="/dream" title={dictionary.dream.title} />
            <p className="break-keep-all mt-3 text-sm leading-6 text-muted">
              {dictionary.dream.subtitle}
            </p>
            {/* 무엇을 근거로 푸는지는 꿈을 적기 **전에** 궁금해지는 것이라 이 자리다. */}
            <GuideLink locale={locale} from="dream" align="start" className="mt-3" />
          </section>
          <DreamForm dictionary={dictionary} locale={locale} />
          {/* 가장 사적인 글을 적기 직전에 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>
        <SiteFooter locale={locale} guideFrom="dream" />
      </div>
    </main>
  );
}
