import { KoreanToGlobalResultPage } from "@/components/KoreanToGlobalResultPage";
import { getRequestLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<{ id?: string; lang?: string }>;
};

export default async function KoreanToGlobalResultRoute({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <KoreanToGlobalResultPage resultId={params?.id ?? ""} locale={locale} />
  );
}
