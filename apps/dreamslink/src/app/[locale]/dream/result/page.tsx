import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { DreamResultView } from "@/components/DreamResultView";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { readingLanguage, symbolTerm } from "@/lib/dream-language";
import { DREAM_SYMBOLS } from "@/lib/dream-symbols";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { SYMBOLS_INDEX_PATH, symbolPagePath } from "@/lib/symbol-pages";
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
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const t = getDictionary(locale).dream;
  return {
    ...buildPageMetadata({
      path: "/dream/result",
      locale,
      requested: locale,
      title: t.resultTitle,
      description: t.subtitle,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const dictionary = getDictionary(locale);
  // 파는 것이 둘이라 값도 둘이다. 화면 언어가 결제권역을 정한다(ko는 국내, 나머지는 해외).
  const region = regionForLocale(locale);
  const [cardOffer, conceptionOffer] = await Promise.all([
    getReportOffer(getReportProduct("card", region)),
    getReportOffer(getReportProduct("conception", region)),
  ]);

  /**
   * 상징을 못 찾았을 때 보여 줄 대표 상징.
   *
   * **무게로 고른다.** 사전이 이미 「대표 상징일수록 크다」는 값을 갖고 있어(`weight`), 여기서
   * 목록을 손으로 적을 이유가 없다 — 손으로 적으면 사전이 바뀌어도 그대로 남는다.
   * 무게 3은 돼지·뱀·용·이빨 빠짐·똥·추락·쫓김·죽음·돈 아홉이다.
   *
   * **서버에서 고른다.** 결과 화면은 클라이언트 컴포넌트라, 그쪽에서 사전을 부르면 상징
   * 215개짜리 JSON이 통째로 브라우저로 내려간다.
   */
  const language = readingLanguage(locale);
  const popularSymbols = DREAM_SYMBOLS.filter((symbol) => (symbol.weight ?? 1) >= 3)
    .slice(0, 9)
    .map((symbol) => ({
      term: symbolTerm(symbol, language),
      href: localePath(symbolPagePath(symbol.id), locale),
    }));

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
        <PageHeader locale={locale} path="/dream/result" width="max-w-3xl" />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16">
          {/* `mt-10`은 사주링크 결과 화면과 같은 값이다. 없으면 제목이 머리글 버튼 줄에
              그대로 붙는다 — 이 자리에 언어 선택기도 함께 있어 더 빽빽해 보인다. */}
          <PageTitle
            locale={locale}
            path="/dream/result"
            title={dictionary.dream.resultTitle}
            className="mt-10"
          />

          {/* 결과 머리글 배너. 제목 바로 아래, 본문이 시작하기 전이다. 이 화면의 배너는 둘이고
              나머지 하나는 본문 중간(`_inline`)에 있다 — **맨 아래에는 두지 않는다.** 결과 맨
              아래는 아무도 안 본다. */}
          <AdBanner variant="header" slotKey="dream_result_header" locale={locale} />

          {/* 가격은 서버가 `product_settings`에서 읽어 내려보낸다. 화면이 값을 만들지 않는다.
              판매 전(`enabled=false`)이면 null이 되어 패널이 스스로 "준비 중"으로 뜬다. */}
          <DreamResultView
            dictionary={dictionary}
            locale={locale}
            cardPrice={cardOffer?.display ?? null}
            conceptionPrice={conceptionOffer?.display ?? null}
            popularSymbols={popularSymbols}
            symbolsHref={localePath(SYMBOLS_INDEX_PATH, locale)}
          />
          {/* 결과를 읽은 직후에 "참고 자료"라는 것과 "저장되지 않았다"는 것을 함께 본다.
              사주링크 결과 화면과 같은 자리·같은 값이다 — 드림링크에는 이것이 빠져 있어
              가장 사적인 글을 적은 사람이 결과 화면에서 미저장 안내를 못 봤다. */}
          <PrivacyNotice locale={locale} className="mt-12" />
        </div>
        <SiteFooter locale={locale} guideFrom="dream" />
      </div>
    </main>
  );
}
