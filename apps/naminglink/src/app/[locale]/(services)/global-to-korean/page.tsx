import type { Metadata } from "next";
import { routeLocale } from "@/lib/route-locale";
import { ServiceShell } from "@/components/ServiceShell";
import { buildServiceMetadata } from "@/lib/seo";
import { globalNameToHangulService, services } from "@/lib/services";

/**
 * **한 라우트에 서비스가 둘이라 미리 만들어 두지 못한다.** `?mode=transliteration`이
 * 붙으면 다른 서비스가 뜨고 canonical도 달라진다. 언어는 경로 조각에서 오지만 모드는
 * 쿼리라, 이 화면만 요청 때 정해진다.
 */
type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ mode?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const query = await searchParams;
  // 같은 라우트에 서비스가 둘이다. canonical에도 mode를 남겨야 두 화면이 하나로 합쳐지지 않는다.
  const isTransliteration = query?.mode === "transliteration";
  const service = isTransliteration
    ? globalNameToHangulService
    : services.globalToKorean;

  return buildServiceMetadata({
    slug: service.slug,
    path: isTransliteration
      ? "/global-to-korean?mode=transliteration"
      : "/global-to-korean",
    locale,
    requested: locale,
  });
}

export default async function GlobalToKoreanPage({ params, searchParams }: PageProps) {
  const locale = routeLocale((await params).locale);
  const query = await searchParams;
  const service =
    query?.mode === "transliteration"
      ? globalNameToHangulService
      : services.globalToKorean;

  return <ServiceShell service={service} locale={locale} />;
}
