import Image from "next/image";
import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";

// 레이아웃 문법은 naminglink 랜딩과 같다: 화면을 채우는 어두운 히어로 + 그 위 흰 글씨 +
// 반투명 유리 카드. 배경만 사진이 아니라 그라데이션이다(globals.css의 .hero-backdrop).
export default async function LandingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);
  const { landing } = dictionary;
  const query = lang ? `?lang=${locale}` : "";

  return (
    <main className="min-h-screen bg-background">
      <section className="hero-backdrop relative flex min-h-[100svh] flex-col overflow-hidden lg:h-[100svh] lg:min-h-0">
        <Image
          src="/images/landing-hero.png"
          alt=""
          fill
          priority
          aria-hidden
          className="object-cover object-[62%_center] sm:object-center"
          sizes="100vw"
        />
        <div aria-hidden className="hero-texture absolute inset-0" />
        {/* naminglink와 같은 좌→우 어둠 그라데이션. 왼쪽 글씨의 대비를 확보한다. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,12,15,0.9),rgba(18,12,15,0.55),rgba(18,12,15,0.15))]"
        />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <Link href={`/${query}`} className="flex items-center gap-3 text-white">
            <BrandMark />
            <span className="flex flex-col gap-1">
              <span className="text-[22px] font-semibold leading-none">
                InyeonLink
              </span>
              <span
                className="text-[17px] font-medium leading-none text-white/75"
                style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
              >
                인연 - 링크
              </span>
            </span>
          </Link>
          <LocaleSwitcher current={locale} tone="onDark" />
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-start gap-8 overflow-hidden px-5 py-8 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,420px)] lg:gap-10 lg:px-10 lg:pt-[clamp(2rem,6vh,4rem)]">
          <section className="min-w-0 max-w-2xl">
            <p className="inline-flex w-fit items-center rounded-lg border border-white/30 bg-white/12 px-5 py-3 text-lg font-semibold shadow-sm backdrop-blur sm:text-xl">
              {dictionary.tagline}
            </p>
            <h1 className="break-keep-all mt-5 whitespace-pre-line text-[2.125rem] font-semibold leading-[1.1] [text-wrap:balance] sm:text-[2.75rem] xl:text-[3.25rem]">
              {landing.title}
            </h1>
            <p className="break-keep-all mt-4 max-w-xl text-base leading-7 text-white/80 [text-wrap:pretty] sm:text-lg">
              {landing.subtitle}
            </p>
            <Link
              href={`/compatibility${query}`}
              className="mt-7 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#3d1327] shadow-sm transition hover:bg-white/90"
            >
              {landing.cta}
            </Link>
          </section>

          {/* 계산 방식과 미저장 안내를 히어로 안에서 바로 보여 준다. naminglink가 서비스
              카드를 두는 자리다. */}
          <div className="grid w-full gap-4">
            <section className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-sm backdrop-blur">
              <h2 className="text-base font-semibold">{landing.howTitle}</h2>
              <ol className="mt-4 space-y-3">
                {landing.steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-semibold"
                    >
                      {index + 1}
                    </span>
                    <p className="break-keep-all text-sm leading-6 text-white/80">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <PrivacyNotice locale={locale} tone="onDark" />
          </div>
        </div>

        {/* naminglink와 같다 — 푸터를 히어로 섹션 안에 두어 데스크탑에서 한 화면에 담는다. */}
        <SiteFooter
          locale={locale}
          tone="light"
          className="shrink-0 bg-black/25 !pb-4 !pt-2 backdrop-blur"
        />
      </section>
    </main>
  );
}
