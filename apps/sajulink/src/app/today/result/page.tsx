import type { Metadata } from "next";
import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { TodayResultView } from "@/components/TodayResultView";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { noIndex } from "@/lib/seo";

// 결과 화면은 색인하지 않는다. 입력값이 URL 프래그먼트(#)에만 있어 **주소만으로는 아무 내용이
// 없고**, 크롤러는 프래그먼트를 보내지 않으므로 빈 화면이 색인된다. follow는 남겨 여기서
// 나가는 링크는 계속 따라가게 한다.
export const metadata: Metadata = { robots: noIndex };

/**
 * 오늘의 운세 결과.
 *
 * **사주 풀이 결과(`/reading/result`)와 다른 화면이다.** 예전에는 두 메뉴가 결과 화면 하나를
 * 함께 써서, 오늘의 운세로 들어와도 「사주 풀이 결과」가 뜨고 원국이 먼저 나왔다. 사주는
 * 평생이고 오늘의 운세는 하루치다 — 파는 것도 앞엣것이라 자리를 갈랐다.
 *
 * **이 주소가 즐겨찾기의 대상이다.** 생년월일을 저장하지 않으므로 "저장해 둔 내 사주"가 없고,
 * 대신 이 링크가 날마다 그날 값을 낸다(프래그먼트에 생년월일이 있고 날짜는 서버가 정한다).
 */
export default async function TodayResultPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/reading-result-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div aria-hidden className="fixed inset-0 z-0 bg-[#fbf7f6]/35" />
      <div className="relative z-10">
        <PageHeader locale={locale} path="/today/result" />
        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <PageTitle
            title={dictionary.today.title}
            locale={locale}
            path="/today/result"
            className="mt-10"
          />
          <TodayResultView dictionary={dictionary} locale={locale} />
          {/* 결과를 읽은 직후에 "이건 참고 자료"라는 것과 "저장되지 않았다"는 것을 함께 본다. */}
          <PrivacyNotice locale={locale} className="mt-12" />
        </div>
        <div className="mx-auto w-full max-w-5xl px-6 pb-10">
          <AdBanner placement="bottom" locale={locale} />
        </div>
        <SiteFooter locale={locale} guideFrom="today" />
      </div>
    </main>
  );
}
