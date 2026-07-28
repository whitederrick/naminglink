import type { Metadata } from "next";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { ServiceShell } from "@/components/ServiceShell";
import { buildServiceMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  return buildServiceMetadata({
    slug: services.hanjaMeaning.slug,
    path: "/hanja-meaning",
    locale: await getRequestLocale(params?.lang),
    requested: isLocale(params?.lang) ? params.lang : null,
  });
}

export default async function HanjaMeaningPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return <ServiceShell service={services.hanjaMeaning} locale={locale} />;
}
