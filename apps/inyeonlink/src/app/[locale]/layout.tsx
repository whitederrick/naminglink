import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "../globals.css";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { adsEnabled, adsenseClient } from "@/lib/ads";
import { isRtlLocale } from "@/lib/i18n";
import { localeParams, routeLocale } from "@/lib/route-locale";
import { ogImageFor, siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// **정적 `metadata`가 아니라 함수다.** 썸네일이 로케일마다 다른 그림이라 요청 언어를 알아야
// 하는데, 정적 export는 요청을 못 본다.
/**
 * **빌드 때 23개 언어판을 모두 만든다** (2026-08-19).
 *
 * 이 값이 로케일 갈래 전체의 정적 렌더링을 연다. `dynamicParams = false`와 짝이다 — 목록에
 * 없는 조각(`/zzz/about`)은 그리지 않고 404로 보낸다. 미들웨어가 그런 주소를 먼저 영어판으로
 * 308하므로 실제로 여기까지 오는 일은 드물지만, 아무 값이나 언어판 주소가 되면 빈 페이지가
 * 무한히 생긴다.
 */
export function generateStaticParams() {
  return localeParams();
}

export const dynamicParams = false;

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

/**
 * 로케일은 **요청이 아니라 주소**에서 온다 — 요청을 읽으면 그 순간 이 갈래 전체가 다시
 * 동적이 된다(`lib/route-locale.ts`).
 */
export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const locale = routeLocale((await params).locale);

  return {
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
    openGraph: {
      type: "website",
      siteName: "Inyeon-Link",
      url: siteUrl,
      images: [ogImageFor(locale)],
    },
    twitter: { card: "summary_large_image", images: [ogImageFor(locale).url] },
    /**
     * **사이트 소유권 확인 태그**. 광고를 요청하지 않는다 — 구글이 「이 사이트가 이 계정의
     * 것인가」를 확인하는 표시일 뿐이라 전 로케일에 싣는다.
     *
     * `adsEnabled`는 **게재 여부가 아니라 연결 여부**다(퍼블리셔 ID가 형식에 맞는가).
     * 이 변수를 비우면 `/ads.txt`가 404가 되고 이 태그도 함께 사라진다 —
     * **게재를 멈추는 스위치가 아니다.** P1에서 `adsConfigured`/`adsLive`로 가른다.
     */
    other: adsEnabled ? { "google-adsense-account": adsenseClient } : undefined,
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = routeLocale((await params).locale);
  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={geistSans.variable}
    >
      <body>
        <LocaleHtmlSync />
        {/* 접속 집계. `site_events`에 app='inyeonlink'로 쌓이고 운영자 콘솔의
            '인연링크 현황' 화면이 이것을 읽는다. */}
        <AnalyticsTracker />
        {/* 푸터는 레이아웃이 아니라 각 페이지에 둔다. 레이아웃은 searchParams를 받지 못해
            ?lang=으로 바꾼 언어를 알 수 없고, 그러면 한국어 화면에 영어 푸터가 붙는다. */}
        {children}
        {/**
          * **애드센스 로더는 여기 없다** (2026-08-11에 뺐다).
          *
          * 전역 로더는 모든 화면에 실렸고, **혼자서 자동 광고 자리(앵커·비네트)를 만든다.**
          * 실측에서 `/en/login`·`/en/pricing`·없는 주소까지 광고 요청이 나갔다 — 발행한
          * 콘텐츠가 없는 화면이 광고 화면이 되는 것이 naming-link의 2026-08-10 반려 사유였다.
          * 콘솔로는 막을 수 없다(광고 게재 준비가 안 된 사이트에는 자동 광고 설정 행 자체가
          * 없다).
          *
          * **지금 이 앱에는 로더를 부르는 자리가 없다.** 슬롯 env를 채워도 광고는 나오지
          * 않는다 — 켜려면 naming-link의 `lib/adsense-loader.ts`처럼 **광고 단위를 실제로
          * 그릴 때만** 부르는 지연 로더를 먼저 들여와야 한다.
          *
          * **사이트 연결은 그대로다.** 소유권은 위 `generateMetadata`의
          * `google-adsense-account` 메타와 `/ads.txt`가 맡는다. 둘 다 구글이 공식 지원한다.
          *
          * 여기에 로더를 되돌리지 말 것. `<ins class="adsbygoogle">`가 가이드·약관·입력
          * 화면에 아직 남아 있어, **되돌리는 순간 그 자리가 전부 되살아난다.**
          */}
      </body>
    </html>
  );
}
