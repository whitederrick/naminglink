import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { FooterContentProvider } from "@/components/FooterContentProvider";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { adsAllowedForLocale, adsenseClient } from "@/lib/ads";
import { getRequestLocale, isRtlLocale } from "@/lib/locale";
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
  src: "../../assets/fonts/NotoSansCJKkr-Naming.otf",
  variable: "--font-naming-hanja",
  display: "swap",
  preload: false,
});

/**
 * 정적 `metadata`가 아니라 함수인 이유: **썸네일이 로케일마다 다르다.** 정적 객체는 요청을
 * 모르므로 어느 나라에서 공유하든 같은 그림이 나간다. 여기서 로케일을 읽어 그 언어판 썸네일을
 * 고른다(자기 openGraph를 정의하지 않는 화면 — 로그인·계정 등 — 이 이 값을 상속받는다).
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

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
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 요청에서 정한 로케일(?lang= 쿼리 → x-vercel-ip-country → accept-language 순)로 문서
  // 언어·방향을 정한다. 스크린 리더가 페이지를 맞는 언어로 읽고, 아랍어에서 문서 전체가
  // 우→좌로 배치된다.
  //
  // **미들웨어는 여기에 관여하지 않는다.** src/proxy.ts는 /admin 경로를 404로 막는 것이
  // 전부이고, 로케일 리다이렉트나 헤더 주입은 하지 않는다(예전 주석이 그렇게 적혀 있었으나
  // 사실과 달랐다). 언어는 getRequestLocale()이 요청 헤더를 직접 읽어 정한다.
  const locale = await getRequestLocale();
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
        {/* 애드센스 로더. 퍼블리셔 ID가 없으면 아예 붙지 않는다(다크 런치) — 그래야 CSP도
            원래대로 조여 둔 채 배포된다. 인연링크와 같은 방식이다.
            next/script 대신 순수 <script>를 쓴다. next/script는 어느 전략을 골라도 태그를
            런타임에 주입하므로 서버가 보낸 HTML에 구글이 안내한 스니펫이 그대로 들어 있지
            않은데, 애드센스 심사는 그 스니펫을 찾는 절차라 형태가 같은 편이 확실하다.
            **Offerwall도 이 코드가 있어야 동작한다** — 구글 문서가 명시한 전제조건이다. */}
        {/* **지원하지 않는 언어의 화면에는 로더도 붙이지 않는다**(2026-08-10). 구글 게시자
            정책이 「지원하지 않는 언어가 주인 페이지에 광고 코드를 두는 것」을 금지한다 —
            광고가 실제로 채워지는지와 무관하다. 판정은 `lib/ads.ts` 한 곳에 있다. */}
        {adsAllowedForLocale(locale) ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </body>
    </html>
  );
}
