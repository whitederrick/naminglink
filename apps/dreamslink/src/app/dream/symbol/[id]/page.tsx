import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AdBanner } from "@/components/AdBanner";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import {
  cultureNote,
  meaningText,
  readingLanguage,
  symbolTerm,
  themeLabels,
} from "@/lib/dream-language";
import { DREAM_SYMBOLS, DICT_VERSION } from "@/lib/dream-symbols";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import {
  findSymbol,
  relatedSymbols,
  symbolPagePath,
  symbolSummary,
  symbolTitle,
  withParticle,
} from "@/lib/symbol-pages";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 상징 하나를 설명하는 페이지. **검색으로 들어오는 자리다.**
 *
 * 사연과 설계 판단은 `lib/symbol-pages.ts` 첫머리에 적었다. 여기서는 그리기만 한다.
 *
 * **문장을 새로 짓지 않는다.** 제목·요약·본문이 전부 사전에서 온다. 페이지를 채우려고
 * 설명을 덧붙이는 순간 그것이 「없는 전통 의미」가 되고, 이 서비스가 가장 경계하는 일이 된다.
 * 사전이 얕은 상징은 페이지도 짧다 — 그것이 정직한 상태다.
 */

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
};

/** 사전에 있는 상징만큼 페이지가 생긴다. 사전을 넓히면 여기가 저절로 따라온다. */
export function generateStaticParams() {
  return DREAM_SYMBOLS.map((symbol) => ({ id: symbol.id }));
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const { lang } = await searchParams;
  const symbol = findSymbol(id);
  if (!symbol) return {};

  const locale = await getRequestLocale(lang);
  const language = readingLanguage(locale);
  return buildPageMetadata({
    path: symbolPagePath(id),
    locale,
    requested: isLocale(lang) ? lang : null,
    title: symbolTitle(symbol, locale),
    description: symbolSummary(symbol, language),
  });
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const { lang } = await searchParams;
  const symbol = findSymbol(id);
  if (!symbol) notFound();

  const locale = await getRequestLocale(lang);
  const language = readingLanguage(locale);
  const dictionary = getDictionary(locale);
  const t = dictionary.dream;
  const ko = language === "ko";
  const related = relatedSymbols(symbol);
  const themes = themeLabels(symbol.tags ?? [], language);

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
        <PageHeader locale={locale} path="/dream" width="max-w-3xl" />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16">
          <PageTitle
            locale={locale}
            path={symbolPagePath(id)}
            title={symbolTitle(symbol, locale)}
            className="mt-10"
          />

          <div className="mt-10 grid gap-6">
            {/* 전해 오는 뜻. 의미가 여럿이면 상황별로 나눠 보여 준다 — 사전이 그렇게 갈라
                두었고(뱀을 품으면 길, 물리면 흉), 그 구분이 곧 이 상징을 이해하는 열쇠다. */}
            <section>
              <h2 className="mb-3 text-lg font-semibold">
                {ko ? "전해 오는 뜻" : "What it has traditionally meant"}
              </h2>
              <div className="grid gap-3">
                {symbol.meanings.map((meaning, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-line bg-surface p-5"
                  >
                    {meaning.context ? (
                      <p className="text-xs font-semibold text-brand-violet">
                        {ko ? `${meaning.context}일 때` : meaning.context}
                      </p>
                    ) : null}
                    <p
                      className={`break-keep-all text-sm leading-6 ${meaning.context ? "mt-1" : ""}`}
                    >
                      {meaningText(meaning, language)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {cultureNote(symbol.culture_note, language) ? (
              <section className="rounded-xl border border-line bg-surface p-5">
                <h2 className="text-sm font-semibold">전해 오는 배경</h2>
                <p className="break-keep-all mt-1 text-sm leading-6 text-muted">
                  {symbol.culture_note}
                </p>
              </section>
            ) : null}

            {themes.length ? (
              <section>
                <h2 className="mb-2 text-lg font-semibold">{t.themesHeading}</h2>
                <p className="text-sm text-muted">{themes.join(" · ")}</p>
              </section>
            ) : null}

            {/* **검색으로 들어온 사람을 서비스 안으로 들인다.** 이 페이지만 보고 나가면 색인은
                늘어도 서비스는 늘지 않는다. 상징 하나로는 알 수 없는 것 — 함께 나온 다른
                상징, 그때의 기분 — 을 해몽 화면이 본다. */}
            <section className="rounded-2xl border border-brand-violet/25 bg-brand-violet/5 p-5">
              <h2 className="break-keep-all font-semibold">
                {ko
                  ? `${withParticle(symbol.term_ko, "이", "가")} 나온 꿈을 적어 보세요`
                  : `Write down the dream ${symbol.term_en} appeared in`}
              </h2>
              <p className="break-keep-all mt-1 text-sm leading-6 text-muted">
                {ko
                  ? "한 상징만으로는 알 수 없는 것이 있습니다. 함께 나온 다른 상징까지 사전에서 찾아 드립니다."
                  : "One symbol only tells you so much. We look up every symbol that appeared alongside it."}
              </p>
              <Link
                href={localePath("/dream", locale)}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-brand-violet px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                {t.submit}
              </Link>
            </section>

            {/* 본문을 다 읽은 뒤 자리. 상징 카드 사이에 끼우지 않는다. */}
            <AdBanner placement="result" locale={locale} />

            {related.length ? (
              <section>
                <h2 className="mb-3 text-lg font-semibold">
                  {ko ? "함께 보면 좋은 상징" : "Related symbols"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {related.map((other) => (
                    <Link
                      key={other.id}
                      href={localePath(symbolPagePath(other.id), locale)}
                      className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold transition hover:border-brand-violet hover:text-brand-violet"
                    >
                      {symbolTerm(other, language)}
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <p className="break-keep-all text-xs leading-5 text-muted">
              {t.disclaimer}
              {ko ? ` 전통 해몽 상징 사전 ${DICT_VERSION} 기준입니다.` : ` Based on the traditional dream-symbol dictionary ${DICT_VERSION}.`}
            </p>
          </div>

          <PrivacyNotice locale={locale} className="mt-12" />
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>
        <SiteFooter locale={locale} guideFrom="dream" />
      </div>
    </main>
  );
}
