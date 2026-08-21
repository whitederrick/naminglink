import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ReturnLink } from "@/components/ReturnLink";
import { SiteFooter } from "@/components/SiteFooter";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/services";

export function PolicyLayout({
  title,
  description,
  loginLabel = "로그인",
  locale,
  children,
}: {
  title: string;
  description: string;
  loginLabel?: string;
  locale?: Locale;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href={localePath("/", locale)}
            className="inline-flex items-center gap-2 text-sm"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Naming-Link
          </Link>
          {/* 약관 화면에서 로그인으로 갔다가 돌아오면 그 약관으로 돌아와야 한다. */}
          <ReturnLink
            href={localePath("/login", locale)}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm font-semibold transition hover:border-foreground"
          >
            <Sparkles aria-hidden="true" size={15} />
            {loginLabel}
          </ReturnLink>
        </div>
      </header>

      <article className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8">
        <p className="text-sm font-semibold text-brand-teal">
          Naming-Link Policy
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
        <div className="mt-10 grid gap-8">{children}</div>
      </article>

      {/* **로케일을 반드시 넘긴다.** `SiteFooter`의 기본값이 `"ko"`라, 빼놓으면 본문은
          일본어인데 꼬리글만 한국어로 나간다 — 약관 네 장 × 22개 언어에서 그랬다
          (2026-08-05에 라이브 `/ja`에서 발견). 사업자 정보 라벨과 내비 링크가 통째로 한국어였다. */}
      <SiteFooter locale={locale} />
    </main>
  );
}

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="rounded-lg bg-surface-strong px-4 py-2.5 text-lg font-semibold">
        {title}
      </h2>
      <div className="mt-3 grid gap-3 px-1 text-sm leading-7 text-muted">
        {children}
      </div>
    </section>
  );
}
