import type { Metadata } from "next";
import { KoreanToGlobalResultPage } from "@/components/KoreanToGlobalResultPage";
import { noIndex } from "@/lib/seo";

// 결과 화면은 1회용 조회 ID에 묶인 남의 결과다. 색인되면 안 된다.
export const metadata: Metadata = { robots: noIndex };

type PageProps = {
  searchParams?: Promise<{ id?: string }>;
};

export default async function KoreanToGlobalResultRoute({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  // 한국어 전용 서비스의 결과 화면이다. 언어를 판정할 일이 없다(`lib/route-locales.ts`).
  const locale = "ko" as const;

  return (
    <KoreanToGlobalResultPage resultId={params?.id ?? ""} locale={locale} />
  );
}
