import { getRequestLocale } from "@/lib/locale";
import { ServiceShell } from "@/components/ServiceShell";
import { globalNameToHangulService, services } from "@/lib/services";

type PageProps = {
  searchParams?: Promise<{ lang?: string; mode?: string }>;
};

export default async function GlobalToKoreanPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const service =
    params?.mode === "transliteration"
      ? globalNameToHangulService
      : services.globalToKorean;

  return <ServiceShell service={service} locale={locale} />;
}
