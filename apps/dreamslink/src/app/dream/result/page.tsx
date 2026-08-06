import type { Metadata } from "next";

import { DreamResultView } from "@/components/DreamResultView";
import { PageTitle } from "@/components/PageTitle";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 해몽 결과.
 *
 * **입력이 프래그먼트에만 있어 서버는 무엇을 꿨는지 모른다.** 그래서 이 페이지는 껍데기만
 * 그리고 값은 브라우저가 채운다. 색인에서도 빼야 한다 — 내용이 없는 주소가 색인되면 빈 페이지가
 * 검색 결과에 남는다.
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const t = getDictionary(locale).dream;
  return {
    ...buildPageMetadata({
      path: "/dream/result",
      locale,
      requested: isLocale(lang) ? lang : null,
      title: t.resultTitle,
      description: t.subtitle,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10">
      <PageTitle locale={locale} path="/dream/result" title={dictionary.dream.resultTitle} />
      <DreamResultView dictionary={dictionary} locale={locale} />
    </main>
  );
}
