import Link from "next/link";
import { ArrowRight, Baby, Globe2, Languages, Sparkles } from "lucide-react";
import { serviceList } from "@/lib/services";

const iconMap = {
  baby: Baby,
  korean: Languages,
  foreign: Globe2,
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
              <Sparkles aria-hidden="true" size={20} />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-normal">
                naminglink
              </span>
              <span className="text-sm text-muted">Global Naming Studio</span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {serviceList.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="rounded-lg border border-line bg-surface px-3 py-2 text-foreground transition hover:border-foreground"
              >
                {service.shortTitle}
              </Link>
            ))}
          </nav>
        </header>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium text-brand-teal">
              AI 작명 워크벤치
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              이름의 언어, 뜻, 뉘앙스를 한 번에 연결합니다.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              신생아 한자 뜻풀이, 외국인용 한국 이름, 한국인용 글로벌 이름을
              같은 데이터 구조와 API로 시작합니다.
            </p>
            <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-lg bg-surface-strong p-4">
                <span className="block font-semibold">MVP</span>
                <span className="mt-1 block text-muted">3개 서비스 폼</span>
              </div>
              <div className="rounded-lg bg-surface-strong p-4">
                <span className="block font-semibold">API</span>
                <span className="mt-1 block text-muted">JSON 응답 고정</span>
              </div>
              <div className="rounded-lg bg-surface-strong p-4">
                <span className="block font-semibold">DB</span>
                <span className="mt-1 block text-muted">Supabase 로그</span>
              </div>
            </div>
          </section>

          <section className="grid gap-4">
            {serviceList.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group rounded-lg border border-line bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                        <Icon aria-hidden="true" size={22} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted">
                          {service.eyebrow}
                        </p>
                        <h2 className="mt-1 text-xl font-semibold">
                          {service.title}
                        </h2>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 shrink-0 transition group-hover:translate-x-1"
                      size={20}
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
