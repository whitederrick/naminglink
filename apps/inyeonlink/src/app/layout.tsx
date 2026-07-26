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
        {/* 푸터는 레이아웃이 아니라 각 페이지에 둔다. 레이아웃은 searchParams를 받지 못해
            ?lang=으로 바꾼 언어를 알 수 없고, 그러면 한국어 화면에 영어 푸터가 붙는다. */}
        {children}
      </body>
    </html>
  );
}
