import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { getRequestLocale, isRtlLocale } from "@/lib/locale";

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
  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${namingHanja.variable}`}
    >
      <body>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
