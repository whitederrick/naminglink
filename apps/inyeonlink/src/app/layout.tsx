import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { isRtlLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "인연링크 InyeonLink | 사주·띠 궁합",
  description:
    "생년월일로 보는 사주 궁합과 띠 궁합. 입력한 정보는 저장하지 않습니다. Saju and zodiac compatibility — nothing you enter is stored.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getRequestLocale();
  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={geistSans.variable}
    >
      <body>
        <LocaleHtmlSync />
        {children}
      </body>
    </html>
  );
}
