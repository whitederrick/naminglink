import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, AudioLines, Globe2, Signature, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getLandingCopy,
  getTextDirection,
  hangulPronunciationCopy,
} from "@/lib/i18n";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { absoluteUrl, buildAlternates, localeUrl, ogImageFor } from "@/lib/seo";
import { serviceList } from "@/lib/services";
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

        {/* 아래 여백은 인연링크 랜딩(`apps/inyeonlink/src/app/page.tsx`)과 **같은 값이어야 한다.**
            두 서비스를 오가면 푸터가 한 뼘씩 들썩이는 것이 그대로 보인다. 예전에는 이쪽만
            `!pb-4`였는데, 그때는 정책 링크가 5개(로그인 포함)라 줄이 더 접혔기 때문이다.
            지금은 양쪽 다 4개(약관·방침·환불·요금)라 그 전제가 없어져 값을 맞춘다. */}
        <SiteFooter
          tone="light"
          className="relative bottom-1 z-10 shrink-0 bg-foreground/50 !pb-0 !pt-2 backdrop-blur"
          locale={locale}
          policyMode="modal"
        />
      </section>
    </main>
  );
}
