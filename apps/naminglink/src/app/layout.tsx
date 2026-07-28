import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { FooterContentProvider } from "@/components/FooterContentProvider";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { getRequestLocale, isRtlLocale } from "@/lib/locale";
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

export const metadata: Metadata = {
  title: "Naming-Link | Global Naming Studio",
  description:
    "Global Naming Studio. 한글 이름 한자 의미 매칭, 글로벌 이름 변환, 한국 이름 변환을 제공하는 프리미엄 네이밍 서비스",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 미들웨어가 주입한 로케일(?lang= 쿼리·IP·Accept-Language 반영)로 문서 언어·방향을 정한다.
  // 스크린 리더가 페이지를 맞는 언어로 읽고, 아랍어에서 문서 전체가 우→좌로 배치된다.
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
      </body>
    </html>
  );
}
