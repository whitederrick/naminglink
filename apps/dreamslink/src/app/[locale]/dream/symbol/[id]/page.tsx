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
  citeLines,
  contextText,
  meaningText,
  meaningWorkHeading,
  readingLanguage,
  symbolTerm,
  themeLabels,
} from "@/lib/dream-language";
import {
  DREAM_SYMBOLS,
  DICT_VERSION,
  meaningWork,
  type DreamMeaning,
  type DreamWork,
} from "@/lib/dream-symbols";
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
 * **미리 그리는 것은 ko·en 두 벌뿐이다. 나머지 21개 언어는 처음 열릴 때 그린다.**
 *
 * ## 왜 줄였나 (2026-09-01)
 *
 * `[locale]`이 23벌을 내놓으므로 여기서 전부를 내놓으면 **상징 수 × 23**이 된다. 사전이
 * 218개였을 때는 5,014장이었는데 v2(678개)로 갈아 끼우자 **15,594장**이 됐다. 그리고
 * 미리 그린 장 하나가 파일 여럿(`.html`·`.rsc`·`.meta`·`.segments`)을 낳는다 —
 * **산출물이 파일 193,463개**가 됐다(2026-09-01에 세어 본 값. 옛 사전 때는 그 3분의 1이다).
 *
 * 그 뒤로 **드림링크 Vercel 배포가 세 번 연속 실패했다.** 형제 셋은 같은 커밋에서 성공했고,
 * 드림링크의 마지막 성공은 옛 사전을 쓰던 08-27이다. 빌드 자체는 이 컴퓨터에서 exit 0으로
 * 끝난다 — 코드 결함이 아니라 **산출물의 크기**다.
 *
 * (먼저 `experimental.cpus`로 일꾼을 묶어 봤다. 이 컴퓨터의 빌드 크래시는 사라졌지만
 * **배포는 그대로 실패했다** — 그래서 그 가설은 틀렸고 되돌렸다.)
 *
 * ## 21개 언어가 사라지지 않는다
 *
 * 여기서 안 그린 조합은 **처음 열릴 때 그려지고 그 뒤로는 캐시된다.** 크롤러도 200을 받는다.
 * 실제로 열리지 않는 긴 꼬리를 빌드 때 미리 그릴 이유가 없다.
 *
 * 그러려면 `[locale]/layout.tsx`의 `dynamicParams`가 열려 있어야 한다 — **잎에서 여는 것으로는
 * 안 된다**(그렇게 해 보고 21개 언어가 전부 404가 되는 것을 재어 본 뒤 고쳤다).
 *
 * ko·en을 고른 이유는 **사람이 읽어 본 언어가 그 둘뿐**이기 때문이다(광고 개방 기준과 같다).
 */
const PRERENDERED_LOCALES = ["ko", "en"] as const;

export function generateStaticParams() {
  return PRERENDERED_LOCALES.flatMap((locale) =>
    DREAM_SYMBOLS.map((symbol) => ({ locale, id: symbol.id })),
  );
}

/**
 * 그 의미의 **원문 인용**. 이 사전이 옛 사전과 다른 자리이고, 이용자가 직접 확인할 수 있는
 * 유일한 근거다.
 *
 * 옛 사전은 「전해 오는 배경」이라는 한국어 한 줄이 218개 중 82개에만 있었고, 나머지는
 * 근거가 없는데도 「전해 오는 뜻」 절에 실려 있었다(CLAUDE.md §21). 지금은 **의미마다
 * 인용이 있고 그것을 그대로 보여 준다** — 요약하거나 다듬지 않는다. 다듬으면 원문 대조가
 * 깨지고, 깨진 것을 눈감으면 옛 사전과 같아진다.
 *
 * 번역문은 한국어 한 벌뿐이라 영어 화면에는 원문만 나간다(`citeLines`).
 */
function MeaningCites({
  meaning,
  language,
}: {
  meaning: DreamMeaning;
  language: "ko" | "en";
}) {
  if (!meaning.cites?.length) return null;
  return (
    <div className="mt-3 border-t border-line pt-3">
      {meaning.cites.map((cite, index) => {
        const { original, translation } = citeLines(cite, language);
        return (
          <div key={index} className={index > 0 ? "mt-2" : undefined}>
            <p className="break-keep-all text-xs leading-5 text-muted">
              <span className="font-medium">{original}</span>
              {cite.locator ? (
                <span className="ml-1 opacity-70">— {cite.locator}</span>
              ) : null}
            </p>
            {translation ? (
              <p className="break-keep-all mt-0.5 text-xs leading-5 text-muted opacity-80">
                {translation}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
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
  /**
   * **의미를 원문별로 가른다**(2026-08-31 교체).
   *
   * 이 사전은 주공해몽(동아시아)과 밀러(1901, 서양)를 합친 것이다. 두 전통은 같은 상징을
   * 정반대로 읽기도 한다 — 거울이 깨지면 주공해몽은 「부부 이별」, 밀러는 「가까운 이의
   * 죽음」이다. **섞어 보여 주면 어느 전통의 말인지 알 수 없다.**
   *
   * 갈래를 **라벨이 아니라 인용에서** 얻는 것이 핵심이다(`meaningWork`). 옛 사전은
   * `source: "tradition"`이라는 라벨로 갈랐는데 그 라벨이 거짓일 수 있었다(§21).
   *
   * 순서는 사전에 나온 순서를 따르되 원문 등장 순으로 절을 세운다 — 상징마다 어느 쪽이
   * 먼저인지 달라지면 읽는 사람이 자리를 잃는다.
   */
  const WORK_ORDER: DreamWork[] = ["zhougong", "miller"];
  const meaningsByWork = WORK_ORDER.map((work) => ({
    work,
    meanings: symbol.meanings.filter((meaning) => meaningWork(meaning) === work),
  })).filter((group) => group.meanings.length > 0);

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
            {/* 전해 오는 뜻 — **원문별로 절을 나눈다**(2026-08-31).
                의미가 여럿이면 상황별로 갈라 보여 준다. 사전이 그렇게 갈라 두었고
                (뱀을 품으면 길, 물리면 흉) 그 구분이 곧 이 상징을 이해하는 열쇠다.
                절을 원문으로 가르는 이유는 `meaningsByWork` 주석에 적었다. */}
            {meaningsByWork.map(({ work, meanings }) => (
              <section key={work}>
                <h2 className="mb-3 text-lg font-semibold">
                  {meaningWorkHeading(work, language)}
                </h2>
                <div className="grid gap-3">
                  {meanings.map((meaning, index) => (
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
                      <MeaningCites meaning={meaning} language={language} />
                    </div>
                  ))}
                </div>
              </section>
            ))}

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
