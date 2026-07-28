import type { Metadata } from "next";
import { KoreanToGlobalResultPage } from "@/components/KoreanToGlobalResultPage";
import { getRequestLocale } from "@/lib/locale";
import { noIndex } from "@/lib/seo";

// 결과 화면은 1회용 조회 ID에 묶인 남의 결과다. 색인되면 안 된다.
export const metadata: Metadata = { robots: noIndex };

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
