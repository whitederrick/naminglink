import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { adsEnabled, adsenseClient } from "@/lib/ads";
import { isRtlLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase가 있어야 하위 페이지가 상대 경로로 적은 canonical·og:image를 절대 URL로 편다.
  // 없으면 Next가 빌드마다 경고를 내고 og:image가 상대 경로로 나가 대부분의 SNS에서 깨진다.
  metadataBase: new URL(siteUrl),
  title: {
    default: "인연링크 InyeonLink | 사주·띠 궁합",
    // 하위 페이지는 자기 제목만 적고 브랜드는 여기서 붙인다.
    template: "%s | Inyeon-Link",
  },
  description:
    "생년월일로 보는 사주 궁합과 띠 궁합. 입력한 정보는 저장하지 않습니다. Saju and zodiac compatibility — nothing you enter is stored.",
  // **여기에 alternates를 두지 않는다.** 루트 레이아웃의 metadata는 자기 metadata가 없는 모든
  // 하위 페이지로 상속되므로, 여기에 canonical을 적으면 결과 화면까지 "이 페이지의 정본은 홈"
  // 이라고 말하게 된다. `/`의 canonical과 hreflang은 app/page.tsx가 스스로 붙인다.
  openGraph: { type: "website", siteName: "Inyeon-Link", url: siteUrl },
  twitter: { card: "summary_large_image" },
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
