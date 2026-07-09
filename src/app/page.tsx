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
  const isKoreanEntry = locale === "ko";
  const heroImage = isKoreanEntry
    ? "/images/landing-hero.png"
    : "/images/landing-hero-global.png";
  const visibleServices = serviceList.filter((service) =>
    isKoreanEntry
      ? service.slug === "hanja-meaning" || service.slug === "korean-to-global"
      : service.slug === "global-to-korean",
  );

  return (
    <main className="min-h-screen bg-background" dir={getTextDirection(locale)}>
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <Image
          src={heroImage}
          alt="Korean calligraphy, name seal, passport, and keepsake card on a refined desk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,20,0.88),rgba(18,24,20,0.62),rgba(18,24,20,0.24))]" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
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
          />
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 py-4 text-white sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <section className="max-w-3xl">
            <p className="inline-flex rounded-lg border border-white/30 bg-white/12 px-5 py-3 text-xl font-semibold text-white shadow-sm backdrop-blur sm:text-2xl">
              {copy.badge}
            </p>
            <h1 className="mt-5 break-keep text-4xl font-semibold leading-tight tracking-normal sm:text-5xl xl:text-[3.55rem]">
              {copy.heroLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-2xl break-keep text-base leading-7 text-white/82 sm:text-lg">
              {copy.descriptionLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </section>

          <section className="grid gap-3 lg:pl-6">
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
                  className="group rounded-lg border border-white/20 bg-white/12 p-4 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-foreground">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="break-keep text-xs font-semibold text-white/70">
                        {serviceCopy.audience}
                      </p>
                      <h2 className="mt-1 break-keep text-lg font-semibold">
                        {serviceCopy.title}
                      </h2>
                      <p className="mt-1 break-keep text-sm leading-6 text-white/74">
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
