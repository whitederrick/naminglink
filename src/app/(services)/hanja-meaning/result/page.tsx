import { HanjaMeaningResultPage } from "@/components/HanjaMeaningResultPage";
import { getRequestLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<{ id?: string; lang?: string }>;
};

export default async function HanjaMeaningResultRoute({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <HanjaMeaningResultPage resultId={params?.id ?? ""} locale={locale} />
  );
}
