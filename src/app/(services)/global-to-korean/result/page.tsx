import { HangulPronunciationResultPage } from "@/components/HangulPronunciationResultPage";
import { KoreanNameResultPage } from "@/components/KoreanNameResultPage";
import { getRequestLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<{ id?: string; lang?: string; mode?: string }>;
};

export default async function GlobalToKoreanResultPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const resultId = params?.id ?? "";

  // 같은 /global-to-korean 경로가 두 서비스를 담는다: mode=transliteration은 발음 표기,
  // 그 외에는 한국 이름 만들기. 결과 화면도 mode로 분기한다.
  if (params?.mode === "transliteration") {
    return (
      <HangulPronunciationResultPage resultId={resultId} locale={locale} />
    );
  }

  return <KoreanNameResultPage resultId={resultId} locale={locale} />;
}