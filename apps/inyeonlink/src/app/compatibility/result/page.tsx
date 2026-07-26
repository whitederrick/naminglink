import Image from "next/image";

import { MatchResultView } from "@/components/MatchResultView";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";

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
        <PageHeader brand={dictionary.brand} locale={locale} />

        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <h1 className="mt-10 text-3xl font-bold">{dictionary.result.title}</h1>
          <MatchResultView dictionary={dictionary} locale={locale} />
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
