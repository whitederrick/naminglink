import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getLandingCopy, getTextDirection } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { serviceList, type Locale } from "@/lib/services";

const logoBlankImageSrc = "/images/logo_blank.png?v=ink-nameplate-blank-20260710";

const nameWordByLocale: Record<Locale, string> = {
  ko: "이름",
  en: "Name",
  ja: "名前",
  zh: "名字",
  de: "Name",
  es: "Nombre",
  fr: "Nom",
  it: "Nome",
  pt: "Nome",
  vi: "Tên",
  th: "ชื่อ",
  id: "Nama",
  ru: "Имя",
  ar: "اسم",
  fil: "Pangalan",
  uz: "Ism",
  mn: "Нэр",
  hi: "नाम",
  tr: "İsim",
  km: "ឈ្មោះ",
  ms: "Nama",
  kk: "Аты",
  pl: "Imię",
};

function LocalizedNamePlateIcon({ locale }: { locale: Locale }) {
  const label = nameWordByLocale[locale] ?? nameWordByLocale.en;
  const labelSizeClass =
    label.length > 7
      ? "text-[7px] sm:text-[8px]"
      : label.length > 5
        ? "text-[9px] sm:text-[10px]"
        : label.length > 4
          ? "text-[10px] sm:text-[11px]"
          : label.length > 3
            ? "text-[13px] sm:text-[14px]"
            : "text-[15px] sm:text-[16px]";

  return (
    <span
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10"
    >
      <Image
        src={logoBlankImageSrc}
        alt=""
        fill
        unoptimized
        className="scale-[1.55] object-cover"
        sizes="72px"
      />
      <span className="absolute left-1/2 top-1/2 flex h-[42%] w-[64%] -translate-x-1/2 -translate-y-[43%] items-center justify-center px-0.5">
        <span
          className={`max-w-full whitespace-nowrap text-center font-bold leading-none tracking-normal text-black ${labelSizeClass}`}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          {label}
        </span>
      </span>
    </span>
  );
}

function InkIconShell({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-[#fbfaf5] shadow-sm ring-1 ring-black/10"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(12,12,10,0.36),rgba(12,12,10,0.18)_42%,rgba(12,12,10,0.05)_64%,rgba(12,12,10,0)_78%)]" />
      <span className="absolute -left-2 top-3 h-10 w-12 rotate-[-16deg] rounded-[44%] bg-black/14 blur-[2px]" />
      <span className="absolute bottom-0 right-0 h-11 w-12 rotate-[15deg] rounded-[44%] bg-black/13 blur-[2px]" />
      {children}
    </span>
  );
}

function FancyKoreanServiceIcon({ icon }: { icon: "hanja" | "passport" | "korean" }) {
  if (icon === "passport") {
    return (
      <InkIconShell>
        <span className="relative flex h-[3.25rem] w-[2.45rem] rotate-[2deg] flex-col items-center justify-center rounded-md border border-white/60 bg-[#23372f] text-white shadow-[0_4px_10px_rgba(0,0,0,0.28)]">
          <span className="absolute inset-x-1 top-1.5 h-px bg-white/30" />
          <Globe2 aria-hidden="true" size={25} strokeWidth={1.9} />
          <span className="mt-1 text-[7px] font-black leading-none tracking-normal">
            NAME
          </span>
          <span className="absolute -right-2 -top-1 flex h-5 w-5 rotate-[12deg] items-center justify-center rounded-[3px] border border-[#9b2f28]/70 bg-[#fffefa] text-[8px] font-black leading-none text-[#9b2f28]">
            名
          </span>
        </span>
      </InkIconShell>
    );
  }

  return (
    <InkIconShell>
      <span className="relative flex h-[3.2rem] w-[3.35rem] rotate-[-2deg] items-center justify-center rounded-md border-[2.5px] border-black bg-[#fffefa] shadow-[0_3px_8px_rgba(0,0,0,0.22)]">
        <span
          className="text-[1.85rem] font-black leading-none text-black"
          style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
        >
          漢
        </span>
        <span className="absolute bottom-1 right-1 rounded-sm border border-[#9b2f28]/75 px-0.5 text-[8px] font-black leading-none text-[#9b2f28]">
          意
        </span>
      </span>
    </InkIconShell>
  );
}

type HomeProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const copy = getLandingCopy(locale);
  const textDirection = getTextDirection(locale);
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

        <header className="relative z-40 mx-auto grid w-full max-w-7xl gap-3 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,600px)] lg:items-center lg:gap-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <BrandMark />
            <span className="flex flex-col gap-1">
              <span className="text-[22px] font-semibold leading-none">
                Naming - Link
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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,600px)] lg:items-start lg:px-10 lg:pt-[clamp(8rem,18vh,10.5rem)]">
          <section className="max-w-3xl text-left lg:grid lg:max-w-none lg:grid-rows-[5.75rem_12rem_6.25rem] lg:content-start">
            <p className="inline-flex w-fit items-center justify-center justify-self-start self-start rounded-lg border border-white/30 bg-white/12 px-5 py-3 text-center text-xl font-semibold text-white shadow-sm backdrop-blur sm:text-2xl">
              {copy.badge}
            </p>
            <h1
              className={`mt-5 min-h-[9.75rem] max-w-[18ch] break-keep text-left font-semibold leading-[1.08] tracking-normal [text-wrap:balance] sm:min-h-[11.25rem] sm:max-w-[20ch] lg:mt-0 lg:min-h-0 lg:max-w-[20ch] xl:min-h-0 ${heroHeadingClass}`}
              dir={textDirection}
            >
              {copy.heroLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="mt-5 max-w-2xl break-keep text-left text-base leading-7 text-white/82 [text-wrap:pretty] sm:min-h-[5.25rem] sm:text-lg lg:mt-0 lg:min-h-0"
              dir={textDirection}
            >
              {descriptionText}
            </p>
          </section>

          <section className="grid w-full max-w-[37.5rem] justify-self-end gap-2 lg:min-h-[18rem]">
            <div className="flex items-center justify-end gap-3">
              <p className="text-xs text-white/60">{copy.servicePickerHint}</p>
            </div>
            {visibleServices.map((service) => {
              const serviceCopy = copy.services[service.slug] ?? service;

              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}?lang=${locale}`}
                  className="group h-[7.25rem] rounded-lg border border-white/20 bg-white/12 p-3 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
                >
                  <div className="relative flex items-start gap-3 pr-7">
                    <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-lg bg-white text-foreground">
                      {isKoreanEntry ? (
                        <FancyKoreanServiceIcon icon={service.icon} />
                      ) : (
                        <LocalizedNamePlateIcon locale={locale} />
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
                      <p className="mt-1 overflow-hidden break-keep text-[13px] leading-5 text-white/74 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
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

        <SiteFooter
          tone="light"
          className="relative z-10 bg-foreground/50 backdrop-blur"
          locale={locale}
        />
      </section>
    </main>
  );
}
