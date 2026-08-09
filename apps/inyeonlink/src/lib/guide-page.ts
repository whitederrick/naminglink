import type { Metadata } from "next";

import { getDocPage, type DocKey } from "@/lib/doc-content";
import { guideHubHref } from "@/lib/guide-back";
import { docKeyFor, findGuideEntry } from "@/lib/guide-index";
import { docValues } from "@/lib/doc-values";
import { isLocale, type Locale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";
import type { DocPage } from "@/lib/doc-content/types";

export type GuidePageProps = {
  searchParams?: Promise<{ lang?: string; from?: string }>;
};

/**
 * 안내 문서 아홉 편이 똑같이 되풀이하던 것을 한곳에 모은다.
 *
 * 제목·요약을 **`doc-content`에서 로케일별로** 가져오는 것이 핵심이다. 예전에는 `guide-index`가
 * 한국어 제목을 들고 있어, 본문을 번역해도 허브 카드와 `<title>`만 한국어로 남았다.
 */
export async function guideMetadata(
  slug: string,
  { searchParams }: GuidePageProps,
): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const doc = getDocPage(locale, docKeyOf(slug));

  /**
   * **제목·요약에도 값을 채운다.**
   *
   * 본문은 `DocBody`가 채우지만 `<title>`과 description 은 여기서 그대로 넘어간다. 그래서
   * 요약에 `{symbolTotal}` 을 쓰면 **검색 결과에 중괄호가 그대로 나간다.** 자료를 쓰는 쪽에서는
   * 「본문에서 되는 것이 요약에서도 될 것」이라고 읽는 편이 자연스러우므로 여기서 채운다.
   *
   * 못 채운 자리표시자는 **그 자리만 지운다** — 본문처럼 문단을 통째로 뺄 수는 없다(제목이
   * 없으면 페이지가 이름을 잃는다). 값이 빠진 문장이 검색 결과에 나가는 것보다는 낫다.
   */
  const values = await docValues(locale);
  const fill = (text: string) =>
    text.replace(/\{([a-zA-Z]+)\}/g, (whole, name: string) => values[name] ?? whole);

  return buildPageMetadata({
    path: `/guide/${slug}`,
    locale,
    requested,
    title: fill(doc.title),
    description: fill(doc.summary),
  });
}

/**
 * 문서 본문이 필요로 하는 것 한 벌 — 로케일과 그 로케일의 문서, 허브로 돌아가는 주소, 그리고
 * 자리표시자에 넣을 값.
 *
 * `hubHref`가 여기 있는 이유는 **출처(`from`)를 문서마다 따로 챙기게 두면 빠뜨리기 때문**이다.
 * `values`도 같다 — 아홉 문서가 저마다 엔진 상수를 읽으면 어느 하나가 다른 값을 보게 된다.
 */
export async function guideContext(
  slug: string,
  { searchParams }: GuidePageProps,
): Promise<{
  locale: Locale;
  doc: DocPage;
  hubHref: string;
  values: Record<string, string>;
}> {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const [values] = await Promise.all([docValues(locale)]);

  return {
    locale,
    doc: getDocPage(locale, docKeyOf(slug)),
    hubHref: guideHubHref(locale, params?.from),
    values,
  };
}

/** 모르는 슬러그는 배선 실수다 — 조용히 영어로 떨어지지 않게 여기서 터뜨린다. */
function docKeyOf(slug: string): DocKey {
  const entry = findGuideEntry(slug);
  if (!entry) throw new Error(`안내 목록에 없는 문서: ${slug}`);
  return docKeyFor(entry);
}
