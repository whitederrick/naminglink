import Link from "next/link";
import { ArrowLeft, BadgeCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale, ServiceConfig } from "@/lib/services";
import { NamingForm } from "@/components/NamingForm";
import { serviceList } from "@/lib/services";

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

  return (
    <div className={`rounded-lg bg-surface-strong p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <BadgeCheck
          aria-hidden="true"
          className="mt-0.5 text-brand-teal"
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
          {isGlobalToKorean ? (
            <div className="mt-3 grid gap-1 text-sm leading-6 text-muted">
              <p>
                생성 결과는 실제 부르고 쓰기 쉬운 한글 이름 중심으로
                제안합니다.
              </p>
              <p>이름의 의미와 발음 등을 확인할 수 있습니다.</p>
            </div>
          ) : (
            <p className="mt-2 text-sm leading-6 text-muted">
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
  const introDescription = isGlobalToKorean
    ? "아래의 다양한 조건을 입력하면 자연스럽고 설명 가능한 한국 이름을 제안합니다."
    : service.description;
  const navigationServices =
    locale === "ko"
      ? serviceList.filter((item) => koreanEntryServiceSlugs.has(item.slug))
      : [];

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="border-b border-line pb-5">
          <div className="flex flex-wrap items-center gap-3">
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
                    href={`/${item.slug}?lang=${locale}`}
                    className={`rounded-lg border px-3 py-2 transition ${
                      item.slug === service.slug
                        ? "border-foreground bg-foreground text-background"
                        : "border-line bg-surface hover:border-foreground"
                    }`}
                  >
                    {item.shortTitle}
                  </Link>
                ))}
              </nav>
            ) : null}
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
              className={`mt-4 text-base leading-7 text-muted ${
                isGlobalToKorean ? "lg:whitespace-nowrap" : "max-w-3xl"
              }`}
            >
              {introDescription}
            </p>
          </div>
          <ServicePromisePanel service={service} locale={locale} />
        </section>

        <NamingForm service={service} />
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
