import { HangulPronunciationResultPage } from "@/components/HangulPronunciationResultPage";
import { getRequestLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<{ id?: string; lang?: string }>;
};

export default async function GlobalToKoreanResultPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <HangulPronunciationResultPage
      resultId={params?.id ?? ""}
      locale={locale}
    />
  );
}