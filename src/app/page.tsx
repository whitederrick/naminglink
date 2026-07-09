import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Languages, Sparkles } from "lucide-react";
import { getRequestLocale } from "@/lib/locale";
import { localeLabels, serviceList, type Locale } from "@/lib/services";

const iconMap = {
  hanja: Languages,
  passport: Globe2,
  korean: Sparkles,
};

const navLocales: Locale[] = ["ko", "en", "ja", "zh", "de", "es"];

type HomeProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/landing-hero.png"
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
            <span>
              <span className="block text-lg font-semibold">Naming-Link</span>
              <span className="text-sm font-medium text-white/80">
                Global Naming Studio
              </span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {navLocales.map((item) => (
              <Link
                key={item}
                href={`/?lang=${item}`}
                className={`rounded-lg border px-3 py-2 transition ${
                  locale === item
                    ? "border-white bg-white text-foreground"
                    : "border-white/35 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 px-5 pb-6 pt-4 text-white sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10 lg:pb-8 lg:pt-6">
          <section className="max-w-3xl">
            <p className="inline-flex rounded-lg border border-white/30 bg-white/12 px-4 py-2 text-base font-semibold text-white shadow-sm backdrop-blur">
              Global Naming Studio
            </p>
            <h1 className="mt-5 break-keep text-4xl font-semibold leading-tight tracking-normal sm:text-5xl xl:text-6xl">
              <span className="block">소리, 의미, 문화권,</span>
              <span className="block">생년월일의 균형까지</span>
              <span className="block">설계하는 이름 서비스</span>
            </h1>
            <p className="mt-5 max-w-2xl break-keep text-base leading-7 text-white/82 sm:text-lg">
              <span className="block">
                한글 이름에 맞는 한자 의미부터 글로벌 이름 변환까지,
              </span>
              <span className="block">
                이름이 실제로 쓰일 언어와 지역의 감각을 함께 살핍니다.
              </span>
              <span className="block">
                부모의 바람, 사용 목적, 문화권의 뉘앙스를 한 흐름으로 연결합니다.
              </span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/hanja-meaning?lang=${locale}`}
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-surface-strong"
              >
                한자 의미 매칭 시작
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href={`/global-to-korean?lang=${locale}`}
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                한국 이름 만들기
              </Link>
            </div>
          </section>

          <section className="grid gap-3 lg:pl-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white/80">목적별 시작</p>
              <p className="text-xs text-white/60">첫 화면에서 바로 선택</p>
            </div>
            {serviceList.map((service) => {
              const Icon = iconMap[service.icon];

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
                        {service.audience}
                      </p>
                      <h2 className="mt-1 break-keep text-lg font-semibold">
                        {service.title}
                      </h2>
                      <p className="mt-1 break-keep text-sm leading-6 text-white/74">
                        {service.description}
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
      </section>
    </main>
  );
}
