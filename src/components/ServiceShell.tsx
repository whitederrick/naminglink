import Link from "next/link";
import { ArrowLeft, BadgeCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale, ServiceConfig } from "@/lib/services";
import { NamingForm } from "@/components/NamingForm";
import { serviceList } from "@/lib/services";

export function ServiceShell({
  service,
  locale,
}: {
  service: ServiceConfig;
  locale: Locale;
}) {
  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft aria-hidden="true" size={17} />
            Naming-Link
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {serviceList.map((item) => (
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
        </header>

        <section className="grid gap-5 rounded-lg border border-line bg-surface p-6 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-teal">
              {service.eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              {service.description}
            </p>
          </div>
          <div className="rounded-lg bg-surface-strong p-5">
            <div className="flex items-start gap-3">
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 text-brand-teal"
                size={20}
              />
              <div>
                <p className="font-semibold">서비스 약속</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {service.promise}
                </p>
              </div>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-muted">
              <Sparkles aria-hidden="true" size={15} />
              기본 언어: {locale.toUpperCase()}
            </p>
          </div>
        </section>

        <NamingForm service={service} />
      </section>
      <SiteFooter />
    </main>
  );
}
