import type { Metadata } from "next";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { ServiceShell } from "@/components/ServiceShell";
import { buildServiceMetadata } from "@/lib/seo";
import { globalNameToHangulService, services } from "@/lib/services";

type PageProps = {
  searchParams?: Promise<{ lang?: string; mode?: string }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  // 같은 라우트에 서비스가 둘이다. canonical에도 mode를 남겨야 두 화면이 하나로 합쳐지지 않는다.
  const isTransliteration = params?.mode === "transliteration";
  const service = isTransliteration
    ? globalNameToHangulService
    : services.globalToKorean;

  return buildServiceMetadata({
    slug: service.slug,
    path: isTransliteration
      ? "/global-to-korean?mode=transliteration"
      : "/global-to-korean",
    locale: await getRequestLocale(params?.lang),
    requested: isLocale(params?.lang) ? params.lang : null,
  });
}

export default async function GlobalToKoreanPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const service =
    params?.mode === "transliteration"
      ? globalNameToHangulService
      : services.globalToKorean;

  return <ServiceShell service={service} locale={locale} />;
}
