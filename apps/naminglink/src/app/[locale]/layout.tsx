import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { FooterContentProvider } from "@/components/FooterContentProvider";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { adsConfigured, adsenseClient } from "@/lib/ads";
import { isRtlLocale } from "@/lib/locale";
import { localeParams, routeLocale } from "@/lib/route-locale";
import { ogImageFor, siteUrl } from "@/lib/seo";
import { getPublishedFooterContent } from "@/lib/site-content-server";

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
 * 정적 `metadata`가 아니라 함수인 이유: **썸네일이 로케일마다 다르다.** 정적 객체는 요청을
 * 모르므로 어느 나라에서 공유하든 같은 그림이 나간다. 여기서 로케일을 읽어 그 언어판 썸네일을
 * 고른다(자기 openGraph를 정의하지 않는 화면 — 로그인·계정 등 — 이 이 값을 상속받는다).
 */
/**
 * **빌드 때 23개 언어판을 모두 만든다** (2026-08-18).
 *
 * 이 값이 로케일 갈래 전체의 정적 렌더링을 연다. `dynamicParams = false`와 짝이다 —
 * 목록에 없는 조각(`/zzz/about`)은 그리지 않고 404로 보낸다. 미들웨어가 그런 주소를 먼저
 * 영어판으로 308하므로 실제로 여기까지 오는 일은 드물지만, 아무 값이나 언어판 주소가 되면
 * 빈 페이지가 무한히 생긴다.
 */
export function generateStaticParams() {
  return localeParams();
}

export const dynamicParams = false;

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const locale = routeLocale((await params).locale);

  return {
    // metadataBase가 있어야 하위 페이지가 상대 경로로 적은 canonical·og:image를 절대 URL로 편다.
    // 없으면 Next가 빌드마다 경고를 내고 og:image가 상대 경로로 나가 대부분의 SNS에서 깨진다.
    metadataBase: new URL(siteUrl),
    title: {
      default: "Naming-Link | Global Naming Studio",
      // 하위 페이지는 자기 제목만 적고 브랜드는 여기서 붙인다.
      template: "%s | Naming-Link",
    },
    description:
      "Global Naming Studio. 한글 이름 한자 의미 매칭, 글로벌 이름 변환, 한국 이름 변환을 제공하는 프리미엄 네이밍 서비스",
    // **여기에 alternates를 두지 않는다.** 루트 레이아웃의 metadata는 자기 metadata가 없는
    // 모든 하위 페이지로 상속되므로, 여기에 canonical을 적으면 로그인·계정·결과 화면까지
    // "이 페이지의 정본은 홈"이라고 말하게 된다(실제로 그렇게 나갔다). `/`의 canonical과
    // hreflang은 `app/page.tsx`의 generateMetadata가 스스로 붙인다.
    openGraph: {
      type: "website",
      siteName: "Naming-Link",
      url: siteUrl,
      images: [ogImageFor(locale)],
    },
    twitter: { card: "summary_large_image", images: [ogImageFor(locale).url] },
    /**
     * **사이트 소유권 확인 태그** (2026-08-11 추가).
     *
     * 지금까지 이 사이트의 애드센스 연결은 **로더 스니펫에만** 의존하고 있었다. 로더는
     * 지원하지 않는 언어의 화면에는 붙지 않고(정책), 게재를 멈추면 사라지는 값이라 —
     * 연결 확인이 그 위에 얹혀 있으면 **광고를 손대는 순간 연결까지 흔들린다.**
     *
     * 이 태그는 광고를 요청하지 않는다. 구글이 「이 사이트가 이 계정의 것인가」를 확인하는
     * 표시일 뿐이라 **전 로케일에 싣는다**(사용자 결정) — 미지원 언어 화면에 두어도 광고
     * 코드가 아니다. 값의 출처는 게재 여부와 무관한 `adsConfigured`다.
     */
    other: adsConfigured ? { "google-adsense-account": adsenseClient } : undefined,
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  /**
   * **주소에서 언어를 읽는다.** 스크린 리더가 페이지를 맞는 언어로 읽고, 아랍어에서 문서
   * 전체가 우→좌로 배치된다.
   *
   * 예전에는 `getRequestLocale()`이 요청 헤더(`x-locale`)를 읽었다. 미들웨어가 경로의
   * 로케일을 거기 실어 넘겼기 때문인데, **루트 레이아웃에서 헤더를 읽으면 그 아래 전부가
   * 정적 렌더링에서 빠진다.** 이제 값이 경로 조각으로 오므로 그 대가가 없다.
   */
  const locale = routeLocale((await params).locale);
  // 푸터 사업자 정보를 서버에서 읽어 내려 준다. 법정 표시 항목이라 자바스크립트가 돌기 전에도
  // HTML에 들어 있어야 한다(FooterContentProvider 주석 참고). 실패하면 null이고, 그때는
  // SiteFooter가 예전처럼 API로 받아 온다 — 레이아웃이 통째로 실패하지는 않게 한다.
  const footerContent = await getPublishedFooterContent().catch(() => null);
  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${namingHanja.variable}`}
    >
      <body>
        <LocaleHtmlSync />
        <AnalyticsTracker />
        <FooterContentProvider value={footerContent}>
          {children}
        </FooterContentProvider>
        {/**
          * **애드센스 로더는 여기 없다** (2026-08-11에 뺐다).
          *
          * 예전에는 지원 언어의 **모든 화면**에 로더를 실었다. 광고 단위(`<ins>`)는 결과 화면
          * 넷에만 두었으니 「광고는 결과 화면에만」이라고 여겼는데, 실측에서 아니었다 —
          * 로더는 혼자서 **자동 광고 자리(앵커·비네트)를 만든다.** `/en/login`과 `/en/pricing`에
          * 우리가 넣지 않은 `<ins class="adsbygoogle adsbygoogle-noablate">`가 하나씩 붙어
          * 있었다. 발행한 콘텐츠가 없는 화면이 광고 화면이 되는 것이 이번 반려 사유와 같은
          * 자리다.
          *
          * 콘솔로는 막을 수 없다 — 자동 광고는 사이트별 설정인데, 광고 게재 준비가 되지 않은
          * 사이트에는 그 설정 행 자체가 없다(콘솔 확인). 그래서 **스크립트를 부르는 자리**를
          * 광고 단위가 실제로 그려지는 곳으로 좁혔다: `components/AdBanner.tsx` →
          * `lib/adsense-loader.ts`.
          *
          * **사이트 연결은 그대로다.** 소유권은 아래 `generateMetadata`의
          * `google-adsense-account` 메타 태그와 `/ads.txt`가 맡고, 둘 다 구글이 공식 지원하는
          * 연결 방법이다(콘솔에서 소유권 확인 초록·ads.txt 승인됨을 실측했다).
          *
          * 여기에 로더를 되돌리지 말 것. 되돌리는 순간 로그인·요금·빈 결과 화면이 다시
          * 광고 화면이 된다.
          */}
      </body>
    </html>
  );
}
