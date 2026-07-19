import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${namingHanja.variable}`}
    >
      <body>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
