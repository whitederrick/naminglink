import type { Metadata } from "next";
import Image from "next/image";

import { DreamResultView } from "@/components/DreamResultView";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { readingLanguage, symbolTerm } from "@/lib/dream-language";
import { POPULAR_SYMBOLS } from "@/lib/dream-symbols";
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
   * **고르는 자리는 `POPULAR_SYMBOLS` 하나다**(`lib/dream-symbols.ts`). 예전에는 여기서
   * `weight >= 3`을 직접 걸렀는데, 안내 문서가 그 수를 셀 방법이 없어 자리표시자가 빈 채로
   * 남아 있었다 — 그리고 **v2 사전으로 갈아 끼우자 무게 3짜리가 0개가 되어 이 목록이
   * 조용히 빈 배열이 됐다**(CLAUDE.md §25). 판정을 한 곳에 두고 조립기가 채운다.
   *
   * **서버에서 고른다.** 결과 화면은 클라이언트 컴포넌트라, 그쪽에서 사전을 부르면 사전
   * JSON이 통째로 브라우저로 내려간다.
   */
  const language = readingLanguage(locale);
  const popularSymbols = POPULAR_SYMBOLS
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
        <PageHeader
          locale={locale}
          path="/dream/result"
          width="max-w-3xl"
          ad={{ slotKey: "dream_result_header" }}
        />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16">
          {/* `mt-10`은 사주링크 결과 화면과 같은 값이다. 없으면 제목이 머리글 버튼 줄에
              그대로 붙는다 — 이 자리에 언어 선택기도 함께 있어 더 빽빽해 보인다. */}
          <PageTitle
            locale={locale}
            path="/dream/result"
            title={dictionary.dream.resultTitle}
            className="mt-10"
          />

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
