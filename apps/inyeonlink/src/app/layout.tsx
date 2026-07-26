import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { adsEnabled, adsenseClient } from "@/lib/ads";
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
        {/* 애드센스 로더. 퍼블리셔 ID가 없으면 아예 붙지 않는다(다크 런치) — 그래야 CSP도
            원래대로 조여 둔 채 배포된다.
            next/script 대신 순수 <script>를 쓴다. next/script는 어느 전략을 골라도 실제
            태그를 런타임에 주입하기 때문에(beforeInteractive는 preload 링크 + 주입 코드로
            나온다) 서버가 보낸 HTML에는 구글이 안내한 스니펫이 그대로 들어 있지 않다.
            애드센스 심사는 이 스니펫을 찾는 절차라 형태가 같은 편이 확실하다.
            React 19가 `async` 스크립트를 <head>로 올려 주므로 위치도 구글 안내와 같아진다. */}
        {adsEnabled ? (
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
