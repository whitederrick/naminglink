import type { Metadata } from "next";
import { HangulPronunciationResultPage } from "@/components/HangulPronunciationResultPage";
import { KoreanNameResultPage } from "@/components/KoreanNameResultPage";
import { routeLocale } from "@/lib/route-locale";
import { noIndex } from "@/lib/seo";

// 결과 화면은 1회용 조회 ID에 묶인 남의 결과다. 색인되면 안 된다.
export const metadata: Metadata = { robots: noIndex };

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ id?: string; mode?: string }>;
};

export default async function GlobalToKoreanResultPage({
  params,
  searchParams,
}: PageProps) {
  const locale = routeLocale((await params).locale);
  const query = await searchParams;
  const resultId = query?.id ?? "";

  // 같은 /global-to-korean 경로가 두 서비스를 담는다: mode=transliteration은 발음 표기,
  // 그 외에는 한국 이름 만들기. 결과 화면도 mode로 분기한다.
  if (query?.mode === "transliteration") {
    return (
      <HangulPronunciationResultPage resultId={resultId} locale={locale} />
    );
  }

  return <KoreanNameResultPage resultId={resultId} locale={locale} />;
}