import type { Metadata } from "next";

import { findGuideEntry, type GuideEntry } from "@/lib/guide-index";
import { isLocale, type Locale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

export type GuidePageProps = { searchParams?: Promise<{ lang?: string }> };

/**
 * 안내 문서 열 개가 똑같이 되풀이하던 것을 한곳에 모은다.
 *
 * 제목·요약을 `guide-index.ts`에서 가져오는 것이 핵심이다. 각 페이지가 자기 제목을 따로 적으면
 * 허브 카드의 말과 문서 안의 말이 갈린다 — 실제로 그렇게 갈리기 쉬운 자리다.
 */
export async function guideMetadata(
  slug: string,
  { searchParams }: GuidePageProps,
): Promise<Metadata> {
  const params = await searchParams;
  const entry = findGuideEntry(slug)!;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: `/guide/${slug}`,
    locale,
    requested,
    title: entry.title,
    description: entry.summary,
  });
}

/** 문서 본문이 필요로 하는 것 한 벌 — 로케일과 목록에 적힌 제목·요약·꼬리표. */
export async function guideContext(
  slug: string,
  { searchParams }: GuidePageProps,
): Promise<{ locale: Locale; entry: GuideEntry }> {
  const params = await searchParams;
  return {
    locale: await getRequestLocale(params?.lang),
    entry: findGuideEntry(slug)!,
  };
}
