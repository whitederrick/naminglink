import type { Metadata } from "next";
import { getServiceCopy } from "@/lib/i18n";
import { supportedLocales, type Locale } from "@/lib/services";

/**
 * 사이트 절대 주소. canonical·hreflang·sitemap이 전부 여기서 갈라져 나온다.
 *
 * **실 도메인이 붙으면 `NEXT_PUBLIC_SITE_URL` 하나만 바꾸면 된다.** 폴백을 배포 주소로 둔 것은
 * 값을 넣지 않은 미리보기에서도 절대 URL이 만들어지게 하려는 것이지, 이 주소를 최종 도메인으로
 * 삼겠다는 뜻이 아니다. 도메인을 나중에 바꾸면 색인된 URL이 통째로 이동하므로 **가능한 한 색인이
 * 쌓이기 전에** 실 도메인을 넣을 것.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://naminglink.vercel.app"
).replace(/\/+$/, "");

/**
 * 색인해도 되는 공개 경로.
 *
 * 여기에 없는 것: 결과 화면(각 서비스의 result 라우트 — 1회용 조회 ID라 남에게 의미가 없다),
 * 계정·로그인(개인 화면), 운영자 화면(naming-artist 하위), API.
 * 새 공개 페이지를 만들면 여기에 더해야 sitemap에 들어간다.
 */
export const indexablePaths = [
  "/",
  "/hanja-meaning",
  "/korean-to-global",
  "/global-to-korean",
  "/stamp-order",
  "/pricing",
  "/terms",
  "/privacy",
  "/refund-policy",
] as const;

export type IndexablePath = (typeof indexablePaths)[number];

/**
 * **쿼리가 둘 이상인 주소는 sitemap에 넣지 말 것.**
 *
 * `/global-to-korean?mode=transliteration`은 내용이 다른 별개 화면이라 넣으려 했으나,
 * Next 16의 sitemap 생성기가 `<loc>`와 hreflang href의 `&`를 **XML 이스케이프하지 않는다**
 * (`&lang=`이 그대로 나가 문서 전체가 파싱 불가가 된다 — 실제로 575곳이 깨졌다).
 * 한 URL이 깨지면 사이트맵 전체를 못 읽으므로 넣지 않는 편이 낫다.
 *
 * 그 화면의 canonical·hreflang은 페이지 metadata에 그대로 있다(HTML 속성은 React가
 * 이스케이프하므로 안전하다). 제대로 된 해결은 이 화면에 **자기 경로를 주는 것**이고,
 * 그것은 경로 기반 URL 전환(SEO 우선순위 ③)과 함께 하는 편이 맞다.
 */

/** 로케일이 붙지 않은 기본 주소. 헤더로 언어를 정하는 자리라 x-default가 된다. */
export function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

/**
 * `lang=xx`가 붙은 언어판 주소. 경로에 이미 쿼리가 있으면(`?mode=…`) `&`로 잇는다 —
 * `?`를 두 번 쓰면 두 번째부터는 쿼리가 아니라 값의 일부가 된다.
 */
export function localeUrl(path: string, locale: Locale) {
  return `${absoluteUrl(path)}${path.includes("?") ? "&" : "?"}lang=${locale}`;
}

/**
 * 한 경로의 hreflang 묶음. **자기 자신을 포함해 23개 전부와 x-default를 싣는다** —
 * 구글은 한 쪽이라도 상대를 되가리키지 않으면 그 쌍을 무시한다.
 *
 * 키를 `Record<string, string>`으로 둔 것은 Next의 `Languages<T>`가 아는 언어 코드만 받는데
 * `fil`처럼 그 목록에 없는 코드가 우리 로케일에 있기 때문이다. 값 자체는 전부 유효한 BCP-47이다.
 */
export function hreflangMap(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of supportedLocales) {
    map[locale] = localeUrl(path, locale);
  }
  // 어느 언어에도 해당하지 않는 방문자가 갈 곳. 로케일 없는 주소가 헤더를 보고 언어를 고른다.
  map["x-default"] = absoluteUrl(path);
  return map;
}

/**
 * canonical + hreflang.
 *
 * `?lang=`이 있으면 **그 주소 자신**을 canonical로 둔다(언어판이 각자 색인된다).
 * 없으면 로케일 없는 주소가 canonical이다. 여기서 로케일 있는 주소를 로케일 없는 쪽으로
 * 몰면 23개 언어판이 색인에서 사라진다.
 */
export function buildAlternates(
  path: string,
  locale?: Locale | null,
): Metadata["alternates"] {
  return {
    canonical: locale ? localeUrl(path, locale) : absoluteUrl(path),
    languages: hreflangMap(path),
  };
}

/** 검색 결과에 나오면 안 되는 화면(결과·계정·로그인)에 붙인다. */
export const noIndex: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
};

type PageMetaInput = {
  path: string;
  locale: Locale;
  /** `?lang=`으로 **명시된** 로케일. 없으면 canonical이 x-default(로케일 없는 주소)가 된다. */
  requested?: Locale | null;
  title: string;
  description: string;
};

/**
 * 공개 페이지 metadata 한 벌. title·description은 **이미 있는 로케일 사전에서 받아** 넣는다
 * (여기서 새 문구를 지어내지 않는다).
 */
export function buildPageMetadata({
  path,
  locale,
  requested = null,
  title,
  description,
}: PageMetaInput): Metadata {
  const url = requested ? localeUrl(path, requested) : absoluteUrl(path);
  return {
    title,
    description,
    alternates: buildAlternates(path, requested),
    openGraph: {
      type: "website",
      siteName: "Naming-Link",
      title,
      description,
      url,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * 서비스 화면 metadata. 제목·설명을 **랜딩 사전에 이미 있는 서비스 문구**에서 가져온다.
 * 검색 결과에 나올 문구를 여기서 새로 짓지 않는다 — 화면에 보이는 말과 어긋나면 이탈로 이어진다.
 */
export function buildServiceMetadata({
  slug,
  path,
  locale,
  requested = null,
}: {
  slug: string;
  path: string;
  locale: Locale;
  requested?: Locale | null;
}): Metadata {
  const copy = getServiceCopy(locale, slug);
  return buildPageMetadata({
    path,
    locale,
    requested,
    // 사전에 없는 slug면 브랜드명으로 떨어진다(타이틀이 비는 것보다 낫다).
    title: copy?.title ?? "Naming-Link",
    description: copy?.description ?? "",
  });
}
