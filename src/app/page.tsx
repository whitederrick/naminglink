import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Languages, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getLandingCopy, getTextDirection } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { serviceList } from "@/lib/services";

const iconMap = {
  hanja: Languages,
  passport: Globe2,
  korean: Sparkles,
};

type HomeProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const copy = getLandingCopy(locale);
  const textDirection = getTextDirection(locale);
  const isRtl = textDirection === "rtl";
  const isKoreanEntry = locale === "ko";
  const heroImage = isKoreanEntry
    ? "/images/landing-hero.png"
    : "/images/landing-hero-global.png";
  const heroHeadingClass = isKoreanEntry
    ? "text-4xl sm:text-5xl xl:text-[3.55rem]"
    : "text-3xl sm:text-4xl xl:text-5xl";
  const descriptionText = copy.descriptionLines.join(" ");
  const visibleServices = serviceList.filter((service) =>
    isKoreanEntry
      ? service.slug === "hanja-meaning" || service.slug === "korean-to-global"
      : service.slug === "global-to-korean",
  );

  return (
    <main className="min-h-screen bg-background" dir="ltr">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <Image
          src={heroImage}
          alt="Korean calligraphy, name seal, passport, and keepsake card on a refined desk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,20,0.88),rgba(18,24,20,0.62),rgba(18,24,20,0.24))]" />

        <header className="relative z-10 mx-auto grid w-full max-w-7xl gap-3 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,1.12fr)] lg:items-center lg:gap-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-foreground">
              <Sparkles aria-hidden="true" size={20} />
            </span>
            <span className="text-lg font-semibold">Naming-Link</span>
          </Link>
          <LanguageSwitcher
            locale={locale}
            currentLanguageLabel={copy.currentLanguage}
            moreLabel={copy.moreLanguages}
            closeLabel={copy.closeLanguages}
            className="lg:justify-start"
          />
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,1.12fr)] lg:items-center lg:px-10">
          <section
            className={`max-w-3xl lg:max-w-none ${isRtl ? "text-right" : ""}`}
            dir={textDirection}
          >
            <p className="inline-flex rounded-lg border border-white/30 bg-white/12 px-5 py-3 text-xl font-semibold text-white shadow-sm backdrop-blur sm:text-2xl">
              {copy.badge}
            </p>
            <h1
              className={`mt-5 min-h-[9.75rem] max-w-[18ch] break-keep font-semibold leading-[1.08] tracking-normal [text-wrap:balance] sm:min-h-[11.25rem] sm:max-w-[20ch] lg:max-w-[18ch] xl:min-h-[12rem] ${heroHeadingClass}`}
            >
              {copy.heroLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-2xl break-keep text-base leading-7 text-white/82 [text-wrap:pretty] sm:min-h-[5.25rem] sm:text-lg">
              {descriptionText}
            </p>
          </section>

          <section className="grid content-center gap-2 lg:min-h-[18rem]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white/80">
                {copy.servicePickerTitle}
              </p>
              <p className="text-xs text-white/60">{copy.servicePickerHint}</p>
            </div>
            {visibleServices.map((service) => {
              const Icon = iconMap[service.icon];
              const serviceCopy = copy.services[service.slug] ?? service;

              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}?lang=${locale}`}
                  className="group min-h-[7.25rem] rounded-lg border border-white/20 bg-white/12 p-3 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-foreground">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <div
                      className={`min-w-0 flex-1 ${isRtl ? "text-right" : ""}`}
                      dir={textDirection}
                    >
                      <p className="break-keep text-xs font-semibold text-white/70">
                        {serviceCopy.audience}
                      </p>
                      <h2 className="mt-1 break-keep text-base font-semibold sm:text-lg">
                        {serviceCopy.title}
                      </h2>
                      <p className="mt-1 break-keep text-sm leading-5 text-white/74">
                        {serviceCopy.description}
                      </p>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 shrink-0 transition group-hover:translate-x-1"
                      size={19}
                    />
                  </div>
                </Link>
              );
            })}
          </section>
        </div>

        <SiteFooter
          tone="light"
          className="relative z-10 bg-foreground/50 backdrop-blur"
        />
      </section>
    </main>
  );
}
