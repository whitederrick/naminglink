import type { Metadata } from "next";

import { getDocPage, type DocKey } from "@/lib/doc-content";
import { guideHubHref, guideHubOrigins } from "@/lib/guide-back";
import { docKeyFor, findGuideEntry } from "@/lib/guide-index";
import { docValues } from "@/lib/doc-values";
import type { Locale } from "@/lib/i18n";
import { routeLocale } from "@/lib/route-locale";
import { buildPageMetadata } from "@/lib/seo";
import type { BackTarget } from "@/components/GuideBackLink";
import type { DocPage } from "@/lib/doc-content/types";

/**
 * **언어는 주소에서 오고, `?from=`은 서버가 읽지 않는다** (2026-08-19).
 *
 * 열두 편이 이 한 곳을 거치므로 여기서 요청을 읽으면 **열두 편이 한꺼번에** 정적 렌더링에서
 * 빠진다. 실제로 그 상태였다 — `lib/route-locale.ts`에 경위를 적어 두었다.
 */
export type GuidePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * 안내 문서 열두 편이 똑같이 되풀이하던 것을 한곳에 모은다.
 *
 * 제목·요약을 **`doc-content`에서 로케일별로** 가져오는 것이 핵심이다. 예전에는 `guide-index`가
 * 한국어 제목을 들고 있어, 본문을 번역해도 허브 카드와 `<title>`만 한국어로 남았다.
 */
export async function guideMetadata(
  slug: string,
  { params }: GuidePageProps,
): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const requested = locale;
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
 * `values`도 같다 — 열두 문서가 저마다 엔진 상수를 읽으면 어느 하나가 다른 값을 보게 된다.
 */
export async function guideContext(
  slug: string,
  { params }: GuidePageProps,
): Promise<{
  locale: Locale;
  doc: DocPage;
  hubHref: string;
  hubOrigins: Record<string, BackTarget>;
  values: Record<string, string>;
}> {
  const locale = routeLocale((await params).locale);
  const raw = getDocPage(locale, docKeyOf(slug));
  const values = await docValues(locale);

  /**
   * **제목·요약의 자리표시자를 여기서 채워 내보낸다** (2026-08-27).
   *
   * 예전에는 `generateMetadata`만 채우고 화면에 그리는 쪽(`GuideShell`의 `description`)은
   * `doc.summary`를 **날것 그대로** 받았다. 그래서 요약에 `{cultureNoteTotal}`을 쓰면
   * 검색 결과에는 값이 나가는데 **화면에는 중괄호가 그대로 보였다.**
   *
   * 그 탓에 자료를 쓰는 쪽이 요약에서는 자리표시자를 못 쓰고 **숫자를 손으로 박았고**,
   * 그 숫자가 23개 로케일에서 낡았다 — 「근거를 댈 수 있는 것은 24개뿐」(실제 82개) ·
   * 「상징 215개」(실제 218개). 채우는 자리를 하나로 모아 자리표시자를 쓸 수 있게 한다.
   */
  const fill = (text: string) =>
    text.replace(/\{([a-zA-Z]+)\}/g, (whole, name: string) => values[name] ?? whole);
  const doc: DocPage = { ...raw, title: fill(raw.title), summary: fill(raw.summary) };

  return {
    locale,
    doc,
    // 출처가 없을 때의 목적지. 출처별 후보는 아래 `hubOrigins`가 갖고, 고르는 것은 브라우저다.
    hubHref: guideHubHref(locale),
    hubOrigins: guideHubOrigins(locale, doc.backLabel),
    values,
  };
}

/** 모르는 슬러그는 배선 실수다 — 조용히 영어로 떨어지지 않게 여기서 터뜨린다. */
function docKeyOf(slug: string): DocKey {
  const entry = findGuideEntry(slug);
  if (!entry) throw new Error(`안내 목록에 없는 문서: ${slug}`);
  return docKeyFor(entry);
}
