import { getRequestLocale } from "@/lib/locale";
import { ServiceShell } from "@/components/ServiceShell";
import { services } from "@/lib/services";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function KoreanToGlobalPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return <ServiceShell service={services.koreanToGlobal} locale={locale} />;
}
