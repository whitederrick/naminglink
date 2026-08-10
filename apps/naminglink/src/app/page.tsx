import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, AudioLines, Globe2, Signature, Sparkles } from "lucide-react";
import { romanizeCompanyValue } from "@naminglink/core/company";
import { BrandMark } from "@/components/BrandMark";
import { DocBody } from "@/components/DocBody";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { docKeyFor, guideEntriesFor } from "@/lib/guide-index";
import {
  getLandingCopy,
  getTextDirection,
  hangulPronunciationCopy,
} from "@/lib/i18n";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { absoluteUrl, buildAlternates, localeUrl, ogImageFor, siteUrl } from "@/lib/seo";
import { serviceList } from "@/lib/services";
import { getPublishedFooterContent } from "@/lib/site-content-server";
import { localePath } from "@/lib/locale-path";


function LandingIconShell({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md border border-white/20 bg-black/18 text-white shadow-inner backdrop-blur-sm"
    >
      <span className="absolute inset-x-2 top-2 h-px bg-white/16" />
      <span className="absolute inset-x-2 bottom-2 h-px bg-white/10" />
      {children}
    </span>
  );
}

function LocalizedNamePlateIcon() {
  return (
    <LandingIconShell>
      <span className="relative flex h-[3.45rem] w-[3.45rem] items-center justify-center rounded-md border border-white/42 bg-white/6 text-white">
        <Signature aria-hidden="true" size={31} strokeWidth={1.7} />
        <Sparkles
          aria-hidden="true"
          size={13}
          strokeWidth={1.8}
          className="absolute right-1.5 top-1.5 text-[#e6c8b6]"
        />
      </span>
    </LandingIconShell>
  );
}
function HangulPronunciationIcon() {
  return (
    <LandingIconShell>
      <span className="relative flex h-[3.45rem] w-[3.45rem] flex-col items-center justify-center rounded-md border border-white/42 bg-white/6 text-white">
        <AudioLines
          aria-hidden="true"
          size={33}
          strokeWidth={1.7}
          className="text-white"
        />
        <span className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-[#e6c8b6]" />
      </span>
    </LandingIconShell>
  );
}

function FancyKoreanServiceIcon({
  icon,
}: {
  icon: "hanja" | "passport" | "korean";
}) {
  if (icon === "passport") {
    return (
      <LandingIconShell>
        <span className="relative flex h-[3.45rem] w-[3.45rem] flex-col items-center justify-center rounded-md border border-white/42 bg-white/6 text-white">
          <Globe2 aria-hidden="true" size={24} strokeWidth={1.7} />
          <span className="mt-1 text-[8px] font-semibold tracking-[0.12em] text-white/70">
            NAME
          </span>
          <span className="absolute right-1.5 top-1.5 text-[8px] font-semibold text-[#e6c8b6]">
            名
          </span>
        </span>
      </LandingIconShell>
    );
  }

  return (
    <LandingIconShell>
      <span className="relative flex h-[3.45rem] w-[3.45rem] items-center justify-center rounded-md border border-white/42 bg-white/6">
        <span
          className="text-[1.75rem] font-semibold leading-none text-white"
          style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
        >
          漢
        </span>
        <span className="absolute bottom-1.5 right-1.5 text-[8px] font-semibold text-[#e6c8b6]">
          意
        </span>
      </span>
    </LandingIconShell>
  );
}
type HomeProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const params = await searchParams;
  // ?lang=이 있을 때만 그 언어판을 canonical로 쓴다. 없으면 헤더로 언어가 갈리는
  // x-default 자리라, 로케일 없는 주소가 canonical이다.
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const copy = getLandingCopy(locale);
  const title = `Naming-Link | ${copy.badge}`;
  const description = copy.descriptionLines.join(" ");

  return {
    // 루트의 template("%s | Naming-Link")이 브랜드를 또 붙이므로 여기는 absolute로 둔다.
    title: { absolute: title },
    description,
    alternates: buildAlternates("/", requested),
    openGraph: {
      type: "website",
      siteName: "Naming-Link",
      title,
      description,
      url: requested ? localeUrl("/", requested) : absoluteUrl("/"),
      locale,
      images: [ogImageFor(locale)],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImageFor(locale).url] },
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const copy = getLandingCopy(locale);
  const textDirection = getTextDirection(locale);
  const isKoreanEntry = locale === "ko";
  // break-keep(keep-all)은 한국어 단어 단위 줄바꿈용. 띄어쓰기가 없는 문자권(일본어·중국어·
  // 태국어·크메르어)에서는 줄바꿈 지점이 없어 텍스트가 뷰포트 밖으로 흘러나가므로 일반 줄바꿈을 쓴다.
  const spacelessScript = ["ja", "zh", "th", "km"].includes(locale);
  const wordBreakClass = spacelessScript
    ? "break-normal [overflow-wrap:anywhere]"
    : "break-keep";
  const heroImage = isKoreanEntry
    ? "/images/landing-hero.png"
    : "/images/landing-hero-global.png";
  const heroHeadingClass = isKoreanEntry
    ? "text-[2.125rem] sm:text-[2.75rem] xl:text-[3.25rem]"
    : "text-3xl sm:text-4xl xl:text-5xl";
  const descriptionText = copy.descriptionLines.join(" ");
  const visibleServices = serviceList.filter((service) =>
    isKoreanEntry
      ? service.slug === "hanja-meaning" || service.slug === "korean-to-global"
      : service.slug === "global-to-korean",
  );

  /**
   * **첫 화면 아래에 기존 문서를 꺼내 놓는다** (2026-08-11).
   *
   * 이 화면은 히어로 한 장(204단어)이었고, 안내 문서로 가는 링크가 **푸터에도 없었다.** 문서는
   * 열여덟 편이 23개 언어로 있는데 홈에서 그 존재를 알 길이 없으니, 크롤러에게도 이용자에게도
   * 「내용 없는 사이트」로 보인다 — 2026-08-10 거절 사유와 맞닿아 있다.
   *
   * **새 주소를 만들지 않는다.** 지금 있는 문서를 홈 본문에서 보이게 할 뿐이다(색인 면적을
   * 줄여 놓고 곧바로 문서를 늘리면 「정리했다」는 신호를 스스로 지운다).
   *
   * **문구를 여기서 짓지 않는다.** 제목·요약·숫자판은 전부 `doc-content`와 `docValues`에서
   * 온다 — 이미 23개 언어로 있고, 문서를 고치면 홈도 함께 바뀐다. 홈에만 있는 문장을 새로
   * 적으면 그 문장만 한국어로 남거나 문서와 어긋나는 날이 온다.
   */
  const guideDoc = getDocPage(locale, "guide");
  const aboutDoc = getDocPage(locale, "about");
  const values = await docValues();
  // 숫자판은 안내 허브 자료가 이미 갖고 있다. **자리를 번호로 찾지 않는다** — 절 순서가 바뀌면
  // 조용히 다른 절이 올라온다. 자리표시자를 못 채우면 `DocBody`가 알아서 그 판을 뺀다.
  const statsSection = guideDoc.sections.find((section) =>
    section.blocks.some((block) => "stats" in block),
  );
  // 그 로케일에서 실제로 열리는 문서만 고른다(한국어 화면이 아니면 korean 갈래는 빠진다).
  const guideCards = guideEntriesFor(undefined, locale)
    .slice(0, 4)
    .map((entry) => ({
      slug: entry.slug,
      doc: getDocPage(locale, docKeyFor(entry)),
    }));

  /**
   * 구조화 데이터. **화면에 없는 정보를 여기서 만들지 않는다** — 값은 푸터가 그리는 것과 같은
   * 자료(`site_contents`의 `footer.global`, 없으면 core의 `COMPANY_FACTS`)에서 온다.
   *
   * 비한국어 화면에서는 푸터와 **같은 규칙**으로 로마자 표기를 쓴다. 사람 이름·상호를 언어마다
   * 새로 음역하면 같은 사업자가 언어마다 다른 이름이 된다(2026-08-07에 약관에서 겪었다).
   *
   * `FAQPage`·`Article`·`BreadcrumbList`는 넣지 않는다 — 화면에 작성 주체·갱신일·breadcrumb를
   * 그리는 틀이 아직 없고, 화면에 없는 것을 선언하는 것이 구조화 데이터에서 가장 흔한 위반이다.
   */
  const footer = await getPublishedFooterContent();
  const asShown = (value: string) =>
    locale === "ko" ? value : romanizeCompanyValue(value);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: asShown(footer.companyName),
      alternateName: footer.serviceName,
      url: siteUrl,
      logo: absoluteUrl("/images/logo-current.png"),
      email: footer.email,
      telephone: footer.customerCenter,
      address: {
        "@type": "PostalAddress",
        streetAddress: asShown(footer.address),
        addressCountry: "KR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: footer.serviceName,
      url: siteUrl,
      inLanguage: locale,
      publisher: { "@type": "Organization", name: asShown(footer.companyName) },
    },
  ];

  return (
    <main className="min-h-screen bg-background" dir="ltr">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden lg:h-[100svh] lg:min-h-0">
        <Image
          src={heroImage}
          alt="Korean calligraphy, name seal, passport, and keepsake card on a refined desk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,20,0.88),rgba(18,24,20,0.62),rgba(18,24,20,0.24))]" />

        <header className="relative z-40 mx-auto grid w-full max-w-7xl gap-3 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,600px)] lg:items-center lg:gap-5 lg:px-10">
          {/* 로고는 **그 언어의 첫 화면**으로 보낸다. `/`로 두면 감지 302를 거치게 되고,
              내부 링크가 리다이렉트를 만드는 것은 색인에서 지운 주소를 되살리는 일과 같다. */}
          <Link href={localePath("/", locale)} className="flex items-center gap-3">
            <BrandMark />
            <span className="flex flex-col gap-1">
              <span className="text-[22px] font-semibold leading-none">
                Naming-Link
              </span>
              <span
                className="text-[18px] font-medium leading-none text-white/78"
                style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
              >
                네이밍 - 링크
              </span>
            </span>
          </Link>
          <LanguageSwitcher
            locale={locale}
            currentLanguageLabel={copy.currentLanguage}
            moreLabel={copy.moreLanguages}
            closeLabel={copy.closeLanguages}
            className="lg:justify-end"
          />
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,600px)] lg:items-start lg:px-10 lg:pt-[clamp(6.5rem,14vh,8.5rem)]">
          {/* min-w-0: 카드 제목(truncate=nowrap)이 전체 폭을 min-width:auto로 밀고 그리드 트랙이
              뷰포트 밖까지 부풀리는 것을 차단한다(제목이 긴 언어에서 우측 잘림의 원인이었다). */}
          <section className="min-w-0 max-w-3xl text-left lg:-translate-y-8 lg:grid lg:max-w-none lg:grid-rows-[5.75rem_12rem_6.25rem] lg:content-start">
            <p className="inline-flex w-fit items-center justify-center justify-self-start self-start rounded-lg border border-white/30 bg-white/12 px-5 py-3 text-center text-xl font-semibold text-white shadow-sm backdrop-blur sm:text-2xl">
              {copy.badge}
            </p>
            <h1
              className={`mt-5 min-h-[9.75rem] max-w-[18ch] ${wordBreakClass} text-left font-semibold leading-[1.08] tracking-normal [text-wrap:balance] sm:min-h-[11.25rem] sm:max-w-[20ch] lg:mt-0 lg:min-h-0 lg:max-w-[20ch] xl:min-h-0 ${heroHeadingClass}`}
              dir={textDirection}
            >
              {copy.heroLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className={`mt-5 max-w-2xl ${wordBreakClass} text-left text-base leading-7 text-white/82 [text-wrap:pretty] sm:min-h-[5.25rem] sm:text-lg lg:mt-0 lg:min-h-0`}
              dir={textDirection}
            >
              {descriptionText}
            </p>
          </section>

          <section className="grid w-full min-w-0 max-w-[37.5rem] justify-self-end gap-2 lg:min-h-[18rem]">
            <div className="flex items-center justify-end gap-3">
              <p className="text-xs text-white/60">{copy.servicePickerHint}</p>
            </div>
            {!isKoreanEntry ? (
              <Link
                href={localePath("/global-to-korean", locale, "mode=transliteration")}
                className="group h-[7.25rem] min-w-0 rounded-lg border border-white/20 bg-white/12 p-3 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
              >
                <div className="relative flex items-start gap-3 pr-7">
                  <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-lg border border-white/18 bg-black/20 p-1 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                    <HangulPronunciationIcon />
                  </span>
                  <div className="min-w-0 flex-1 text-left" dir={textDirection}>
                    <p className="truncate break-keep text-xs font-semibold text-white/70">
                      {hangulPronunciationCopy[locale].audience}
                    </p>
                    <h2 className="mt-1 truncate break-keep text-base font-semibold sm:text-lg">
                      {hangulPronunciationCopy[locale].title}
                    </h2>
                    <p className={`mt-1 overflow-hidden ${wordBreakClass} text-[13px] leading-5 text-white/74 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}>
                      {hangulPronunciationCopy[locale].description}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute right-0 top-1 transition group-hover:translate-x-1"
                    size={19}
                  />
                </div>
              </Link>
            ) : null}
            {visibleServices.map((service) => {
              const serviceCopy = copy.services[service.slug] ?? service;

              return (
                <Link
                  key={service.slug}
                  href={localePath(`/${service.slug}`, locale)}
                  className="group h-[7.25rem] min-w-0 rounded-lg border border-white/20 bg-white/12 p-3 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
                >
                  <div className="relative flex items-start gap-3 pr-7">
                    <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-lg border border-white/18 bg-black/20 p-1 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                      {isKoreanEntry ? (
                        <FancyKoreanServiceIcon icon={service.icon} />
                      ) : (
                        <LocalizedNamePlateIcon />
                      )}
                    </span>
                    <div
                      className="min-w-0 flex-1 text-left"
                      dir={textDirection}
                    >
                      <p className="truncate break-keep text-xs font-semibold text-white/70">
                        {serviceCopy.audience}
                      </p>
                      <h2 className="mt-1 truncate break-keep text-base font-semibold sm:text-lg">
                        {serviceCopy.title}
                      </h2>
                      <p className={`mt-1 overflow-hidden ${wordBreakClass} text-[13px] leading-5 text-white/74 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}>
                        {serviceCopy.description}
                      </p>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute right-0 top-1 transition group-hover:translate-x-1"
                      size={19}
                    />
                  </div>
                </Link>
              );
            })}
          </section>
        </div>

      </section>

      {/* **첫 화면은 그대로 두고, 스크롤 아래에 본문을 둔다.** 히어로는 여전히 100svh이고
          구성도 손대지 않았다. 예전에는 푸터가 히어로 **안에** 있어 이 아래가 아예 없었다 —
          그래서 푸터를 문서 끝으로 옮겼다(안내·약관 화면과 같은 자리다). */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-brand-teal">
            {guideDoc.eyebrow}
          </p>
          <h2 className={`mt-2 ${wordBreakClass} text-2xl font-semibold sm:text-3xl`} dir={textDirection}>
            {guideDoc.title}
          </h2>
          <p className={`mt-3 ${wordBreakClass} text-[15px] leading-7 text-muted`} dir={textDirection}>
            {guideDoc.summary}
          </p>
        </div>

        {/* 자료 숫자판. 값은 DB에서 오고, 못 읽으면 `DocBody`가 판을 통째로 뺀다. */}
        {statsSection ? (
          <div className="mt-6" dir={textDirection}>
            <DocBody sections={[statsSection]} locale={locale} values={values} />
          </div>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {guideCards.map((card) => (
            <Link
              key={card.slug}
              href={localePath(`/guide/${card.slug}`, locale)}
              className="group grid gap-1 rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-foreground"
              dir={textDirection}
            >
              <p className="text-xs font-semibold tracking-wide text-brand-teal">
                {card.doc.eyebrow}
              </p>
              {/* **`truncate`를 쓰지 않는다.** 히어로 카드가 한 줄 고정이라 제목이 긴 언어에서
                  잘리는 자리인데, 여기는 폭이 넉넉하므로 줄을 접어 다 보여 준다. */}
              <p className={`flex items-center gap-2 ${wordBreakClass} text-base font-semibold`}>
                {card.doc.title}
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  className="shrink-0 transition group-hover:translate-x-0.5"
                />
              </p>
              <p className={`${wordBreakClass} text-sm leading-6 text-muted`}>
                {card.doc.summary}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href={localePath("/about", locale)}
          className="group mt-3 grid gap-1 rounded-lg border border-brand-teal/25 bg-surface-strong px-5 py-4 transition hover:border-foreground"
          dir={textDirection}
        >
          <p className="text-xs font-semibold tracking-wide text-brand-teal">
            {aboutDoc.eyebrow}
          </p>
          <p className={`flex items-center gap-2 ${wordBreakClass} text-base font-semibold`}>
            {aboutDoc.title}
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="shrink-0 transition group-hover:translate-x-0.5"
            />
          </p>
          <p className={`${wordBreakClass} text-sm leading-6 text-muted`}>
            {aboutDoc.summary}
          </p>
        </Link>
      </section>

      <SiteFooter locale={locale} policyMode="modal" />

      {/* 구조화 데이터는 문서 끝에 둔다. 값은 위에서 푸터와 같은 자료로 만들었다. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
