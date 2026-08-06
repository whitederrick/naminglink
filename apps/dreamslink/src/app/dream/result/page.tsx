import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { DreamResultView } from "@/components/DreamResultView";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import {
  getReportOffer,
  getReportProduct,
  regionForLocale,
} from "@/lib/report-product";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 해몽 결과.
 *
 * **입력이 프래그먼트에만 있어 서버는 무엇을 꿨는지 모른다.** 그래서 이 페이지는 껍데기만
 * 그리고 값은 브라우저가 채운다. 색인에서도 빼야 한다 — 내용이 없는 주소가 색인되면 빈 페이지가
 * 검색 결과에 남는다.
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const t = getDictionary(locale).dream;
  return {
    ...buildPageMetadata({
      path: "/dream/result",
      locale,
      requested: isLocale(lang) ? lang : null,
      title: t.resultTitle,
      description: t.subtitle,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);
  // 파는 것이 둘이라 값도 둘이다. 화면 언어가 결제권역을 정한다(ko는 국내, 나머지는 해외).
  const region = regionForLocale(locale);
  const [cardOffer, conceptionOffer] = await Promise.all([
    getReportOffer(getReportProduct("card", region)),
    getReportOffer(getReportProduct("conception", region)),
  ]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/dream-result-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div aria-hidden className="fixed inset-0 z-0 bg-[#f9f8fc]/25" />
      <div className="relative z-10">
        <PageHeader locale={locale} path="/dream/result" />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16">
          <PageTitle locale={locale} path="/dream/result" title={dictionary.dream.resultTitle} />
          {/* 가격은 서버가 `product_settings`에서 읽어 내려보낸다. 화면이 값을 만들지 않는다.
              판매 전(`enabled=false`)이면 null이 되어 패널이 스스로 "준비 중"으로 뜬다. */}
          <DreamResultView
            dictionary={dictionary}
            locale={locale}
            cardPrice={cardOffer?.display ?? null}
            conceptionPrice={conceptionOffer?.display ?? null}
          />
        </div>
        <div className="mx-auto w-full max-w-5xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>
        <SiteFooter locale={locale} guideFrom="dream" />
      </div>
    </main>
  );
}
