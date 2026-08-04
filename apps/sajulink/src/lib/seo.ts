import type { Metadata } from "next";
import { translatedLocales, type Locale } from "@/lib/i18n";
import { guidePaths } from "@/lib/guide-index";
import { localePath } from "@/lib/locale-path";

/**
 * 사이트 절대 주소. canonical·hreflang·sitemap이 전부 여기서 갈라져 나온다.
 * **naminglink의 같은 파일과 규칙을 맞춘다** — 두 앱이 같은 방식으로 색인돼야 한다.
 *
 * **이 값이 색인 여부까지 정한다.** `*.vercel.app`이면 `robots.ts`가 전면 Disallow를 낸다 —
 * 배포 주소로 색인이 쌓인 뒤 도메인을 바꾸면 URL이 통째로 이동하기 때문이다. 실 도메인을
 * 넣는 순간 색인이 열리므로, 따로 켜야 하는 스위치는 없다.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sajulink.vercel.app"
).replace(/\/+$/, "");

/**
 * 색인해도 되는 공개 경로.
 *
 * 여기에 없는 것: 결과 화면(`/reading/result` — 입력을 프래그먼트로
 * 받아 그리는 1회용 화면이라 주소만으로는 아무 내용이 없다), API, ads.txt.
 * 새 공개 페이지를 만들면 여기에 더해야 sitemap에 들어간다.
 *
 * **쿼리가 붙은 주소는 넣지 말 것.** Next 16의 sitemap 생성기가 `&`를 XML 이스케이프하지 않아
 * 문서 전체가 파싱 불가가 된다(naminglink에서 실제로 겪었다).
 */
const basePaths = [
  "/",
  "/reading",
  "/today",
  "/pricing",
  "/terms",
  "/privacy",
  "/refund-policy",
  // 소개·문의하기. 애드센스 심사가 투명성 항목으로 명시한 두 페이지다.
  "/about",
  "/contact",
  // 공지사항. 계산 기준이 바뀌면 여기에 먼저 올린다.
  "/notice",
] as const;

/**
 * 안내 문서는 목록(`lib/guide-index.ts`)에서 받아 온다. 문서를 더할 때 이 파일을 함께 고쳐야
 * 한다면 언젠가 한쪽만 고쳐지고, 그러면 그 문서는 sitemap에 없는 채로 남는다.
 *
 * **로케일별로 갈리는 것은 화면뿐이다.** 한국어 문서와 영어 문서 모두 주소는 존재하므로
 * sitemap에는 전부 싣는다 — 어느 언어로 들어오든 200이고, 무엇을 보여줄지는 화면이 정한다.
 */
export const indexablePaths = [...basePaths, ...guidePaths] as const;

/**
 * 공유 썸네일. **카카오톡·페이스북·슬랙은 `og:image`가 없으면 그림 없는 카드로 띄운다**
 * (naminglink에서 2026-07-30 카카오톡으로 확인했다). `twitter:card`를 `summary_large_image`로
 * 두고 이미지를 주지 않으면 그쪽도 큰 카드로 뜨지 않는다.
 *
 * **로케일마다 한 장씩 있다.** 홍보 링크가 각 나라 사람에게 그 나라 말로 보여야 하는데,
 * 메타 태그의 title·description은 이미 로케일별로 나가면서 그림에 박힌 글자만 하나면 어긋난다.
 * 새기는 문구는 랜딩 사전의 `landing.title`을 그대로 쓴다 — 썸네일을 보고 들어온 사람이 첫
 * 화면에서 같은 문장을 만나야 한다.
 *
 * 그림은 `scripts/render-og-images.ts`가 만든다(헤드리스 크롬 → JPEG). 사전 문구를 고치면
 * 그 로케일만 다시 구우면 된다: `tsx scripts/render-og-images.ts ko`.
 *
 * `metadataBase`(루트 레이아웃)가 있어 상대 경로가 절대 URL로 펴진다. **카카오톡은 상대
 * 경로를 못 읽으므로** 그 값이 빠지면 미리보기가 다시 사라진다.
 *
 * 이 함수를 openGraph·twitter 양쪽에 넣는 자리가 셋이다(루트 레이아웃·랜딩·`buildPageMetadata`).
 * 페이지가 `openGraph`를 정의하면 Next는 상위 값을 **덮어쓰므로**, 한 곳만 넣으면 나머지
 * 화면에서 썸네일이 빠진다.
 */
export function ogImageFor(locale: Locale) {
  return {
    url: `/images/og/og-cover-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: "Saju-Link — Your Four Pillars chart and today’s fortune",
  };
}

/** 로케일이 붙지 않은 기본 주소. 헤더로 언어를 정하는 자리라 x-default가 된다. */
export function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

/**
 * 언어판 주소. **경로 앞에 로케일을 붙인다** — `https://…/ko/compatibility`.
 *
 * 예전에는 `?lang=ko`였다. 구글의 다국어 URL 권장안에서 쿼리 파라미터는 가장 낮은 선택지라
 * 경로로 옮겼다. 미들웨어(`proxy.ts`)가 다시 `?lang=`으로 되돌려 넘기므로 화면 코드는 그대로다
 * (`lib/locale-path.ts`).
 */
export function localeUrl(path: string, locale: Locale) {
  return `${siteUrl}${localePath(path, locale)}`;
}

/**
 * 한 경로의 hreflang 묶음. **자기 자신을 포함해 전부와 x-default를 싣는다** — 구글은 한 쪽이라도
 * 상대를 되가리키지 않으면 그 쌍을 무시한다.
 *
 * **다만 번역이 있는 로케일만이다.** 사전이 없는 언어는 `getDictionary`가 영어로 떨어뜨리므로,
 * 그 주소를 hreflang으로 알리면 "베트남어판이 여기 있다"고 해 놓고 영어를 내주는 꼴이 된다 —
 * 검색엔진에는 중복 문서 신호이고 이용자에게는 거짓말이다. 사전을 채우면 저절로 늘어난다.
 *
 * 키를 `Record<string, string>`으로 둔 것은 Next의 `Languages<T>`가 아는 언어 코드만 받는데
 * `fil`처럼 그 목록에 없는 코드가 우리 로케일에 있기 때문이다. 값 자체는 전부 유효한 BCP-47이다.
 */
export function hreflangMap(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of translatedLocales) {
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
      siteName: "Saju-Link",
      title,
      description,
      url,
      locale,
      images: [ogImageFor(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageFor(locale).url],
    },
  };
}
