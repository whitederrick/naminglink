import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { FooterContentProvider } from "@/components/FooterContentProvider";
import { adsConfigured, adsenseClient } from "@/lib/ads";
import { ogImageFor, siteUrl } from "@/lib/seo";
import { getPublishedFooterContent } from "@/lib/site-content-server";

/**
 * **한국어 전용 화면의 루트 레이아웃.**
 *
 * ## 왜 레이아웃이 둘인가 (2026-08-18)
 *
 * 이 앱에는 주소 체계가 둘이다 — 로케일이 앞에 붙는 주소(`/ja/about`)와 붙지 않는 한 벌짜리
 * 주소(`/hanja-meaning`)다. 뒤쪽은 **화면이 한국어뿐**이라 언어를 정할 일이 없다
 * (`lib/route-locales.ts`).
 *
 * 그런데 예전에는 루트 레이아웃이 하나였고, 거기서 `getRequestLocale()` → `headers()`를 불렀다.
 * **루트 레이아웃에서 요청 헤더를 읽으면 그 아래 전부가 정적 렌더링에서 빠진다.** 그래서
 * 사람이 보는 페이지가 한 장도 미리 만들어지지 않았다(실측: prerendered 4장 — 전부 파일).
 * `/ja/about` 한 번에 람다 한 번이고, 같은 주소를 두 번째로 받아도 또 한 번이었다.
 *
 * 이 레이아웃은 **요청을 읽지 않는다.** 언어가 `ko` 하나로 정해져 있으니 읽을 것이 없다.
 * 그래서 이 아래 화면들은 빌드 때 만들어져 CDN에서 나간다.
 *
 * **`<html lang>`은 루트 레이아웃만 정할 수 있다.** 그래서 로케일별 주소를 함께 담을 수 없고,
 * 레이아웃을 둘로 가르는 것 말고 다른 방법이 없다. 두 갈래를 오갈 때는 문서가 다시 실린다
 * (Next의 다중 루트 레이아웃이 원래 그렇다) — 대신 양쪽 다 정적이라 그 이동이 예전의 동적
 * 렌더링보다 빠르다.
 *
 * **주소는 하나도 바뀌지 않는다.** `(korean)`은 경로에 나타나지 않는 라우트 그룹이다.
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const namingHanja = localFont({
  src: "../../../assets/fonts/NotoSansCJKkr-Naming.otf",
  variable: "--font-naming-hanja",
  display: "swap",
  preload: false,
});

/**
 * **함수가 아니라 정적 객체다.** 로케일별로 썸네일을 고를 이유가 없다 — 이 갈래는 한국어
 * 한 벌이다. 함수로 두면 요청마다 부르는 자리가 생기고, 그것이 이 파일이 없애려는 것이다.
 *
 * `alternates`를 여기 두지 않는 이유는 로케일 갈래와 같다: 루트 레이아웃의 metadata는 자기
 * metadata가 없는 모든 하위 페이지로 상속되므로, 여기에 canonical을 적으면 결과 화면까지
 * "이 페이지의 정본은 홈"이라고 말하게 된다.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naming-Link | Global Naming Studio",
    template: "%s | Naming-Link",
  },
  description:
    "Global Naming Studio. 한글 이름 한자 의미 매칭, 글로벌 이름 변환, 한국 이름 변환을 제공하는 프리미엄 네이밍 서비스",
  openGraph: {
    type: "website",
    siteName: "Naming-Link",
    url: siteUrl,
    images: [ogImageFor("ko")],
  },
  twitter: { card: "summary_large_image", images: [ogImageFor("ko").url] },
  /**
   * **사이트 소유권 확인 태그.** 광고를 요청하지 않는다 — 구글이 「이 사이트가 이 계정의
   * 것인가」를 확인하는 표시일 뿐이라 전 로케일에 싣는다. 값의 출처는 게재 여부와 무관한
   * `adsConfigured`다(`(intl)/layout.tsx`에 같은 주석의 긴 사연이 있다).
   */
  other: adsConfigured ? { "google-adsense-account": adsenseClient } : undefined,
};

export default async function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * 푸터 사업자 정보. **이 호출은 정적 렌더링을 막지 않는다** — `unstable_cache`로 감싸여
   * 있고 태그(`FOOTER_CONTENT_TAG`)를 달고 있어서, 운영자가 푸터를 게시하면 그 태그가
   * 무효화되며 이 화면들이 다시 만들어진다(`api/admin/site-content`). 요청 헤더를 읽는
   * 것과는 성격이 다르다.
   */
  const footerContent = await getPublishedFooterContent().catch(() => null);

  return (
    <html lang="ko" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} ${namingHanja.variable}`}>
      <body>
        {/**
          * **`LocaleHtmlSync`는 여기 없다.** 그 컴포넌트는 주소 앞의 로케일과 `<html lang>`을
          * 맞추는 보정인데, 이 갈래의 주소에는 로케일이 없다. 두면 매 렌더마다 아무 일도 하지
          * 않는 효과가 하나 도는 것뿐이다.
          */}
        <AnalyticsTracker />
        <FooterContentProvider value={footerContent}>
          {children}
        </FooterContentProvider>
        {/**
          * **애드센스 로더는 여기 없다.** 광고 단위가 실제로 그려지는 자리에서만 부른다
          * (`components/AdBanner.tsx` → `lib/adsense-loader.ts`). 로더를 전역에 두면 혼자서
          * 자동 광고 자리를 만들어, 발행한 콘텐츠가 없는 화면이 광고 화면이 된다 —
          * 2026-08-10 반려 사유와 같은 자리다. 되돌리지 말 것.
          */}
      </body>
    </html>
  );
}
