import type { Metadata } from "next";
import { supportedLocales, type Locale } from "@/lib/i18n";

/**
 * 사이트 절대 주소. canonical·hreflang·sitemap이 전부 여기서 갈라져 나온다.
 * **naminglink의 같은 파일과 규칙을 맞춘다** — 두 앱이 같은 방식으로 색인돼야 한다.
 *
 * **이 값이 색인 여부까지 정한다.** `*.vercel.app`이면 `robots.ts`가 전면 Disallow를 낸다 —
 * 배포 주소로 색인이 쌓인 뒤 도메인을 바꾸면 URL이 통째로 이동하기 때문이다. 실 도메인을
 * 넣는 순간 색인이 열리므로, 따로 켜야 하는 스위치는 없다.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://inyeonlink.vercel.app"
).replace(/\/+$/, "");

/**
 * 색인해도 되는 공개 경로.
 *
 * 여기에 없는 것: 결과 화면(`/compatibility/result`·`/affinity/result` — 입력을 프래그먼트로
 * 받아 그리는 1회용 화면이라 주소만으로는 아무 내용이 없다), API, ads.txt.
 * 새 공개 페이지를 만들면 여기에 더해야 sitemap에 들어간다.
 *
 * **쿼리가 붙은 주소는 넣지 말 것.** Next 16의 sitemap 생성기가 `&`를 XML 이스케이프하지 않아
 * 문서 전체가 파싱 불가가 된다(naminglink에서 실제로 겪었다).
 */
export const indexablePaths = [
  "/",
  "/compatibility",
  "/affinity",
  "/pricing",
  "/terms",
  "/privacy",
  "/refund-policy",
] as const;

/** 로케일이 붙지 않은 기본 주소. 헤더로 언어를 정하는 자리라 x-default가 된다. */
export function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

/** `?lang=xx`가 붙은 언어판 주소. */
export function localeUrl(path: string, locale: Locale) {
  return `${absoluteUrl(path)}?lang=${locale}`;
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

/** 검색 결과에 나오면 안 되는 화면(결과)에 붙인다. */
export const noIndex: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
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
}: {
  path: string;
  locale: Locale;
  /** `?lang=`으로 **명시된** 로케일. 없으면 canonical이 x-default가 된다. */
  requested?: Locale | null;
  title: string;
  description: string;
}): Metadata {
  const url = requested ? localeUrl(path, requested) : absoluteUrl(path);
  return {
    title,
    description,
    alternates: buildAlternates(path, requested),
    openGraph: {
      type: "website",
      siteName: "Inyeon-Link",
      title,
      description,
      url,
      locale,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
