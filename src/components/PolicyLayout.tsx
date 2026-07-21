import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

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
  locale?: string;
  children: React.ReactNode;
}) {
  const langQuery = locale && locale !== "ko" ? `?lang=${locale}` : "";
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href={`/${langQuery}`}
            className="inline-flex items-center gap-2 text-sm"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Naming-Link
          </Link>
          <Link
            href={`/login${langQuery}`}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm font-semibold transition hover:border-foreground"
          >
            <Sparkles aria-hidden="true" size={15} />
            {loginLabel}
          </Link>
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

      <SiteFooter />
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
    <section className="border-t border-line pt-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 grid gap-3 text-sm leading-7 text-muted">
        {children}
      </div>
    </section>
  );
}
