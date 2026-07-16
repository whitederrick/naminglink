import Link from "next/link";
import { ArrowLeft, BadgeCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale, ServiceConfig } from "@/lib/services";
import { NamingForm } from "@/components/NamingForm";
import { AdBanner } from "@/components/AdBanner";
import {
  globalNameToHangulService,
  serviceList,
  services,
} from "@/lib/services";

const homeLabels: Record<Locale, string> = {
  ko: "홈",
  en: "Home",
  ja: "ホーム",
  zh: "首页",
  de: "Startseite",
  es: "Inicio",
  fr: "Accueil",
  it: "Home",
  pt: "Início",
  vi: "Trang chủ",
  th: "หน้าแรก",
  id: "Beranda",
  ru: "Главная",
  ar: "الرئيسية",
  fil: "Home",
  uz: "Bosh sahifa",
  mn: "Нүүр",
  hi: "होम",
  tr: "Ana sayfa",
  km: "ទំព័រដើម",
  ms: "Laman utama",
  kk: "Басты бет",
  pl: "Strona główna",
};

const koreanEntryServiceSlugs = new Set(["hanja-meaning", "korean-to-global"]);

const globalNavigationLabels: Record<
  Locale,
  { transliteration: string; koreanName: string }
> = {
  ko: { transliteration: "한글 발음 표기", koreanName: "한국 이름" },
  en: { transliteration: "Name in Hangul", koreanName: "Korean Name" },
  ja: { transliteration: "ハングル表記", koreanName: "韓国名" },
  zh: { transliteration: "韩文标音", koreanName: "韩国姓名" },
  de: { transliteration: "Name in Hangul", koreanName: "Koreanischer Name" },
  es: { transliteration: "Nombre en hangul", koreanName: "Nombre coreano" },
  fr: { transliteration: "Nom en hangeul", koreanName: "Nom coréen" },
  it: { transliteration: "Nome in hangul", koreanName: "Nome coreano" },
  pt: { transliteration: "Nome em hangul", koreanName: "Nome coreano" },
  vi: { transliteration: "Tên bằng Hangul", koreanName: "Tên Hàn Quốc" },
  th: { transliteration: "ชื่อเป็นฮันกึล", koreanName: "ชื่อเกาหลี" },
  id: { transliteration: "Nama dalam Hangul", koreanName: "Nama Korea" },
  ru: { transliteration: "Имя на хангыле", koreanName: "Корейское имя" },
  ar: { transliteration: "الاسم بالهانغول", koreanName: "اسم كوري" },
  fil: { transliteration: "Pangalan sa Hangul", koreanName: "Pangalang Koreano" },
  uz: { transliteration: "Ism Hangulda", koreanName: "Koreyscha ism" },
  mn: { transliteration: "Нэр хангыляар", koreanName: "Солонгос нэр" },
  hi: { transliteration: "हंगुल में नाम", koreanName: "कोरियाई नाम" },
  tr: { transliteration: "Hangul ile ad", koreanName: "Korece ad" },
  km: { transliteration: "ឈ្មោះជាហាន់ហ្គុល", koreanName: "ឈ្មោះកូរ៉េ" },
  ms: { transliteration: "Nama dalam Hangul", koreanName: "Nama Korea" },
  kk: { transliteration: "Есім хангыльмен", koreanName: "Корей есімі" },
  pl: { transliteration: "Imię w hangulu", koreanName: "Koreańskie imię" },
};

function ServicePromisePanel({
  service,
  locale,
  className = "",
}: {
  service: ServiceConfig;
  locale: Locale;
  className?: string;
}) {
  const isGlobalToKorean = service.serviceType === "GLOBAL_TO_KOREAN";
  const isHangulTransliteration = service.slug === "global-name-to-hangul";

  return (
    <div className={`rounded-lg bg-surface-strong p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <BadgeCheck
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-brand-teal"
          size={20}
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-semibold">서비스 약속</p>
            <p className="inline-flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-muted">
              <Sparkles aria-hidden="true" size={15} />
              기본 언어: {locale.toUpperCase()}
            </p>
          </div>
          {isGlobalToKorean && !isHangulTransliteration ? (
            <p className="mt-3 text-sm leading-6 text-muted">
              부르고 쓰기 쉬운 이름으로 제안하며, 의미와 발음 등을 확인할 수
              있습니다.
            </p>
          ) : (
            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-muted">
              {service.promise}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ServiceShell({
  service,
  locale,
}: {
  service: ServiceConfig;
  locale: Locale;
}) {
  const homeLabel = homeLabels[locale] ?? homeLabels.en;
  const isGlobalToKorean = service.serviceType === "GLOBAL_TO_KOREAN";
  const isHangulTransliteration = service.slug === "global-name-to-hangul";
  const introDescription = isGlobalToKorean && !isHangulTransliteration
    ? "아래의 다양한 조건을 입력하면 자연스럽고 설명 가능한 한국 이름을 제안합니다."
    : service.description;
  const navigationServices =
    locale === "ko"
      ? serviceList.filter((item) => koreanEntryServiceSlugs.has(item.slug))
      : [globalNameToHangulService, services.globalToKorean];
  const globalLabels = globalNavigationLabels[locale];

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="border-b border-line pb-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="order-2 flex shrink-0 flex-wrap items-center gap-3 lg:order-1">
              <Link
                href={`/?lang=${locale}`}
                className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm transition hover:border-foreground hover:bg-foreground"
              >
                <ArrowLeft aria-hidden="true" size={17} />
                {homeLabel}
              </Link>
              {navigationServices.length > 0 ? (
                <nav className="flex flex-wrap gap-2 text-sm">
                  {navigationServices.map((item) => (
                    <Link
                      key={item.slug}
                      href={
                        item.slug === "global-name-to-hangul"
                          ? `/global-to-korean?lang=${locale}&mode=transliteration`
                          : `/${item.slug}?lang=${locale}`
                      }
                      className={`rounded-lg border px-3 py-2 transition ${
                        item.slug === service.slug
                          ? "border-foreground bg-foreground text-background"
                          : "border-line bg-surface hover:border-foreground"
                      }`}
                    >
                      {locale === "ko"
                        ? item.shortTitle
                        : item.slug === "global-name-to-hangul"
                          ? globalLabels.transliteration
                          : globalLabels.koreanName}
                    </Link>
                  ))}
                </nav>
              ) : null}
            </div>
            <div className="order-1 min-w-0 flex-1 lg:order-2">
              <AdBanner
                variant="header"
                slotKey="service_header"
                label="서비스 상단 배너 광고"
              />
            </div>
          </div>
        </header>

        <section className="grid gap-5 rounded-lg border border-line bg-surface p-6 shadow-sm lg:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-brand-teal">
              {service.eyebrow}
            </p>
            <h1
              className={`mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl ${
                isGlobalToKorean ? "lg:whitespace-nowrap" : "max-w-3xl"
              }`}
            >
              {service.title}
            </h1>
            <p
              className={`mt-4 whitespace-pre-line text-base leading-7 text-muted sm:whitespace-normal ${
                isGlobalToKorean
                  ? "lg:whitespace-nowrap"
                  : service.serviceType === "KOREAN_TO_GLOBAL"
                    ? "max-w-3xl sm:whitespace-pre-line"
                    : "max-w-3xl"
              }`}
            >
              {introDescription}
            </p>
          </div>
          <ServicePromisePanel service={service} locale={locale} />
        </section>

        <NamingForm service={service} locale={locale} />
      </section>
      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}
