import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AdBanner } from "@/components/AdBanner";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { readingLanguage, symbolTerm } from "@/lib/dream-language";
import { DREAM_SYMBOLS, DICT_VERSION } from "@/lib/dream-symbols";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { symbolPagePath, SYMBOLS_INDEX_PATH } from "@/lib/symbol-pages";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 상징 목록 — 사전 전체를 한 화면에서 보는 자리.
 *
 * **없으면 상징 페이지가 고아가 된다.** sitemap과 서로 간의 「함께 보면 좋은 상징」으로만
 * 닿으면, 크롤러는 찾아가더라도 사람은 목록을 볼 방법이 없다. 검색으로 상징 하나에 들어온
 * 사람이 "다른 것도 있나"를 물을 때 갈 곳이 여기다.
 *
 * 갈래로 묶는다. 215개를 한 줄로 늘어놓으면 훑을 수가 없고, 갈래는 사전이 이미 갖고 있다.
 */

const CATEGORY_LABELS: Record<string, { ko: string; en: string }> = {
  animal: { ko: "동물", en: "Animals" },
  nature: { ko: "자연", en: "Nature" },
  object: { ko: "물건", en: "Objects" },
  action: { ko: "행동·상황", en: "Actions" },
  body: { ko: "몸", en: "Body" },
  person: { ko: "사람", en: "People" },
  place: { ko: "장소", en: "Places" },
  color: { ko: "색", en: "Colours" },
  number: { ko: "숫자", en: "Numbers" },
};

type Props = { searchParams: Promise<{ lang?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const ko = readingLanguage(locale) === "ko";
  return buildPageMetadata({
    path: SYMBOLS_INDEX_PATH,
    locale,
    requested: isLocale(lang) ? lang : null,
    title: ko ? "전통 해몽 상징 사전" : "Traditional dream symbols",
    description: ko
      ? `꿈에 나오는 상징 ${DREAM_SYMBOLS.length}가지와 전해 오는 뜻을 갈래별로 모았습니다.`
      : `${DREAM_SYMBOLS.length} symbols that appear in dreams and what they have traditionally meant.`,
  });
}

export default async function Page({ searchParams }: Props) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const language = readingLanguage(locale);
  const ko = language === "ko";
  const dictionary = getDictionary(locale);

  // 갈래별로 묶되 사전에 있는 순서를 흩뜨리지 않는다(무게 순으로 정리돼 있다).
  const groups = new Map<string, typeof DREAM_SYMBOLS>();
  for (const symbol of DREAM_SYMBOLS) {
    const list = groups.get(symbol.category) ?? [];
    groups.set(symbol.category, [...list, symbol]);
  }

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
            path={SYMBOLS_INDEX_PATH}
            title={ko ? "전통 해몽 상징 사전" : "Traditional dream symbols"}
            className="mt-10"
          />
          <p className="break-keep-all mt-3 text-sm leading-6 text-muted">
            {ko
              ? `상징 ${DREAM_SYMBOLS.length}가지와 전해 오는 뜻입니다. 꿈을 통째로 적으면 여러 상징을 한 번에 찾아 드립니다.`
              : `${DREAM_SYMBOLS.length} symbols and what they have traditionally meant. Write the whole dream down and we look up every symbol at once.`}
          </p>

          <div className="mt-10 grid gap-8">
            {[...groups.entries()].map(([category, symbols]) => (
              <section key={category}>
                <h2 className="mb-3 text-lg font-semibold">
                  {CATEGORY_LABELS[category]?.[ko ? "ko" : "en"] ?? category}
                  <span className="ml-2 text-sm font-normal text-muted">
                    {symbols.length}
                  </span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {symbols.map((symbol) => (
                    <Link
                      key={symbol.id}
                      href={localePath(symbolPagePath(symbol.id), locale)}
                      className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold transition hover:border-brand-violet hover:text-brand-violet"
                    >
                      {symbolTerm(symbol, language)}
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            <AdBanner placement="result" locale={locale} />

            <p className="break-keep-all text-xs leading-5 text-muted">
              {dictionary.dream.disclaimer}
              {ko
                ? ` 전통 해몽 상징 사전 ${DICT_VERSION} 기준입니다.`
                : ` Based on the traditional dream-symbol dictionary ${DICT_VERSION}.`}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>
        <SiteFooter locale={locale} guideFrom="dream" />
      </div>
    </main>
  );
}
