import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { MatchResultView } from "@/components/MatchResultView";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { getReportOffer, getReportProduct, regionForLocale } from "@/lib/report-product";
import { noIndex } from "@/lib/seo";

// 결과 화면은 색인하지 않는다. 입력값이 URL 프래그먼트(#)에만 있어 **주소만으로는 아무 내용이
// 없고**, 크롤러는 프래그먼트를 보내지 않으므로 빈 화면이 색인된다. follow는 남겨 여기서
// 나가는 링크는 계속 따라가게 한다.
export const metadata: Metadata = { robots: noIndex };

// 결과 자체는 클라이언트에서 그린다. 입력값이 URL 프래그먼트(#)에만 있고 프래그먼트는
// 서버로 전송되지 않기 때문이다 — 서버 렌더링으로는 애초에 읽을 수 없는 값이다.
export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);
  // 가격은 서버가 `product_settings`에서 읽어 내려보낸다. 화면이 값을 만들지 않는다.
  const offer = await getReportOffer(
    getReportProduct("gunghap", regionForLocale(locale)),
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/compatibility-result-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden
        className="fixed inset-0 z-0 bg-[#fbf7f6]/35"
      />

      <div className="relative z-10">
        <PageHeader locale={locale} path="/compatibility/result" width="max-w-2xl" />

        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <PageTitle
            title={dictionary.result.title}
            locale={locale}
            path="/compatibility/result"
            className="mt-10"
          />

          {/* 결과 머리글 배너. 제목 바로 아래, 본문이 시작하기 전이다. 이 화면의 배너는 둘이고
              나머지 하나는 본문 중간(`_inline`)에 있다 — **맨 아래에는 두지 않는다.** 결과 맨
              아래는 아무도 안 본다. */}
          <AdBanner variant="header" slotKey="compatibility_result_header" locale={locale} />

          <MatchResultView
            dictionary={dictionary}
            locale={locale}
            offerPrice={offer?.display ?? null}
          />

          {/* 결과를 읽은 직후에 "이건 참고 자료"라는 것과 "저장되지 않았다"는 것을 함께 본다. */}
          <PrivacyNotice locale={locale} className="mt-12" />
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
