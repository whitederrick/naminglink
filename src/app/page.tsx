import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Globe2,
  Languages,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getRequestLocale } from "@/lib/locale";
import { localeLabels, serviceList } from "@/lib/services";

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

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src="/images/landing-hero.png"
          alt="Korean calligraphy, name seal, passport, and keepsake card on a refined desk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,20,0.82),rgba(18,24,20,0.52),rgba(18,24,20,0.18))]" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-foreground">
              <Sparkles aria-hidden="true" size={20} />
            </span>
            <span>
              <span className="block text-lg font-semibold">naminglink</span>
              <span className="text-sm text-white/75">
                Global Naming Studio
              </span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {(["ko", "en", "ja", "zh"] as const).map((item) => (
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
            <Link
              href="/admin"
              className="rounded-lg border border-white/35 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
            >
              관리자
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-5 pb-16 pt-16 text-white sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pt-24">
          <section>
            <p className="text-sm font-semibold text-white/80">
              이름은 한 사람의 첫 번째 이야기입니다.
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              뜻, 발음, 문화권, 생년의 균형까지 설계하는 프리미엄 네이밍.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">
              한글 이름에 어울리는 한자, 한국 이름의 글로벌 변환, 외국 이름의
              자연스러운 한국 이름화를 하나의 서비스 흐름으로 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/hanja-meaning?lang=${locale}`}
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-surface-strong"
              >
                한자 의미 매칭 시작
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                서비스 선택
              </Link>
            </div>
          </section>

          <section className="grid content-end gap-3 text-sm lg:pl-10">
            {[
              ["인명용 한자 검토", "배제 한자와 이유까지 설명"],
              ["지역별 이름 설계", "북미·유럽·아시아권 뉘앙스 반영"],
              ["상품화 구조", "PDF, 캘리그라피, 도장, 광고 슬롯 포함"],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-lg border border-white/20 bg-white/12 p-4 backdrop-blur"
              >
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-white/75">{body}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold text-brand-teal">
              사용자 서비스
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal">
              랜딩에서 목적별로 분기합니다.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              접속 지역과 언어 헤더를 참고해 기본 언어를 정하고, 메뉴별로
              한국어/영어 중심 경험을 조정합니다.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceList.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}?lang=${locale}`}
                  className="group rounded-lg border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                        <Icon aria-hidden="true" size={22} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-brand-teal">
                          {service.audience}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="shrink-0 transition group-hover:translate-x-1"
                      size={20}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-10">
          {[
            {
              icon: ShieldCheck,
              title: "공식 기준 확인 전제",
              body: "인명용 한자와 등록 가능성은 공식 기준 확인이 필요한 항목으로 별도 안내합니다.",
            },
            {
              icon: Brush,
              title: "부가 상품 내장",
              body: "분석 결과에서 PDF, 캘리그라피, 도장 신청, 광고 잠금 해제가 이어집니다.",
            },
            {
              icon: BadgeCheck,
              title: "관리자 운영 화면",
              body: "주문, 광고 슬롯, 서비스 카피, 언어 설정을 시스템 화면에서 관리하는 구조입니다.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-lg bg-background p-5">
                <Icon aria-hidden="true" className="text-brand-teal" size={22} />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
