import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";
import { NamingForm } from "@/components/NamingForm";

export function ServiceShell({ service }: { service: ServiceConfig }) {
  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft aria-hidden="true" size={17} />
            naminglink
          </Link>
          <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-muted">
            <Sparkles aria-hidden="true" size={16} />
            {service.eyebrow}
          </span>
        </header>

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand-teal">
            {service.shortTitle}
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-3 text-base leading-7 text-muted">
            {service.description}
          </p>
        </div>

        <NamingForm service={service} />
      </section>
    </main>
  );
}
