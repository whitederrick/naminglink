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
  contextText,
  cultureNote,
  meaningSource,
  meaningSourceLabel,
  meaningText,
  readingLanguage,
  symbolTerm,
  themeLabels,
} from "@/lib/dream-language";
import { DREAM_SYMBOLS, DICT_VERSION } from "@/lib/dream-symbols";
import { getDictionary } from "@/lib/i18n";
import { routeLocale } from "@/lib/route-locale";
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
  params: Promise<{ locale: string; id: string }>;
};

/**
 * 사전에 있는 상징만큼 페이지가 생긴다. 사전을 넓히면 여기가 저절로 따라온다.
 *
 * **언어판은 곱해진다.** 위 `[locale]`이 23벌을 내놓으므로 실제로 만들어지는 장수는
 * 상징 수 × 23이다. 이 앱에서 가장 큰 정적 산출물이고, 색인이 가장 크게 걸려 있던 자리이기도
 * 하다 — 서치 콘솔이 로케일 붙은 주소를 「발견됨 — 색인 안 됨」으로 잡고 있었다.
 */
export function generateStaticParams() {
  return DREAM_SYMBOLS.map((symbol) => ({ id: symbol.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale: rawLocale } = await params;
  const symbol = findSymbol(id);
  if (!symbol) return {};

  const locale = routeLocale(rawLocale);
  const language = readingLanguage(locale);
  return buildPageMetadata({
    path: symbolPagePath(id),
    locale,
    requested: locale,
    title: symbolTitle(symbol, locale),
    description: symbolSummary(symbol, language),
  });
}

export default async function Page({ params }: Props) {
  const { id, locale: rawLocale } = await params;
  const symbol = findSymbol(id);
  if (!symbol) notFound();

  const locale = routeLocale(rawLocale);
  const language = readingLanguage(locale);
  const dictionary = getDictionary(locale);
  const t = dictionary.dream;
  const ko = language === "ko";
  const related = relatedSymbols(symbol);
  const themes = themeLabels(symbol.tags ?? [], language);
  // 전통과 일반 해석은 절부터 가른다 — "전해 오는 뜻" 제목 아래에 전통 근거 없는 해석을
  // 두면 출처를 속이는 셈이 된다(dream-symbols.ts 머리말 참고).
  const traditionMeanings = symbol.meanings.filter(
    (meaning) => meaningSource(meaning) === "tradition",
  );
  const generalMeanings = symbol.meanings.filter(
    (meaning) => meaningSource(meaning) === "general",
  );

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
          path="/dream"
          width="max-w-3xl"
          ad={{ slotKey: "symbol_detail_header" }}
        />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16">
          <PageTitle
            locale={locale}
            path={symbolPagePath(id)}
            title={symbolTitle(symbol, locale)}
            className="mt-10"
          />


          <div className="mt-10 grid gap-6">
            {/* 전해 오는 뜻. 의미가 여럿이면 상황별로 나눠 보여 준다 — 사전이 그렇게 갈라
                두었고(뱀을 품으면 길, 물리면 흉), 그 구분이 곧 이 상징을 이해하는 열쇠다.
                **일반 해석(`source: "general"`)은 여기 섞지 않는다** — 이 절 제목이
                "전해 오는 뜻"이라 전통이 아닌 것을 여기 넣으면 출처를 속이는 셈이 된다
                (2026-08-26). 아래 별도 절로 갈랐다. */}
            {traditionMeanings.length ? (
              <section>
                <h2 className="mb-3 text-lg font-semibold">
                  {ko ? "전해 오는 뜻" : "What it has traditionally meant"}
                </h2>
                <div className="grid gap-3">
                  {traditionMeanings.map((meaning, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-line bg-surface p-5"
                    >
                      {/* **상황은 한국어 한 벌뿐이다.** 접근자 없이 그리면 영어 화면에 한국어가
                          섞인다(`contextText` 주석 참고). 없으면 그 줄이 통째로 빠진다. */}
                      {contextText(meaning.context, language) ? (
                        <p className="text-xs font-semibold text-brand-violet">
                          {`${meaning.context}일 때`}
                        </p>
                      ) : null}
                      <p
                        className={`break-keep-all text-sm leading-6 ${
                          contextText(meaning.context, language) ? "mt-1" : ""
                        }`}
                      >
                        {meaningText(meaning, language)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* 일반적인 해석. 전통 근거는 없지만 사람이 검토해 실었다 — 절 제목으로 먼저
                구분하고 한 번 더 "전통 해몽"이 아니라고 밝힌다. */}
            {generalMeanings.length ? (
              <section>
                <h2 className="mb-3 text-lg font-semibold">
                  {meaningSourceLabel("general", language)}
                </h2>
                <div className="grid gap-3">
                  {generalMeanings.map((meaning, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-dashed border-line bg-surface p-5"
                    >
                      {contextText(meaning.context, language) ? (
                        <p className="text-xs font-semibold text-muted">
                          {`${meaning.context}일 때`}
                        </p>
                      ) : null}
                      <p
                        className={`break-keep-all text-sm leading-6 ${
                          contextText(meaning.context, language) ? "mt-1" : ""
                        }`}
                      >
                        {meaningText(meaning, language)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

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
            <AdBanner variant="inline" slotKey="symbol_detail_inline" locale={locale} />

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
        <SiteFooter locale={locale} guideFrom="dream" />
      </div>
    </main>
  );
}
