import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SajuForm } from "@/components/SajuForm";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { routeLocale } from "@/lib/route-locale";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 오늘의 운세 — **매일 다시 오는 자리**다.
 *
 * 지금은 입력 화면과 같은 폼을 쓴다. 생년월일을 저장하지 않는 것이 이 서비스의 원칙이라
 * "저장해 둔 내 사주"가 없기 때문이다. 다시 넣게 하는 대신 **결과 링크를 즐겨찾기**하면
 * 그 링크가 매일 오늘 값을 낸다(프래그먼트에 생년월일이 있고 날짜는 서버가 정한다).
 *
 * 이 화면을 따로 둔 이유는 그 링크가 가리킬 자리가 필요해서다. 유입 경로도 다르다 —
 * `/reading`은 처음 오는 사람, `/today`는 어제 왔던 사람이다.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const { form } = getDictionary(locale);
  return buildPageMetadata({
    path: "/today",
    locale,
    requested: locale,
    title: form.title,
    description: form.description,
  });
}

export default async function TodayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen bg-background">
      <PageHeader locale={locale} path="/today" width="max-w-2xl" />
      <div className="mx-auto w-full max-w-2xl px-6 pb-16">
        <section className="mt-10">
          <PageTitle title={dictionary.form.title} locale={locale} path="/today" />
          <p className="break-keep-all mt-3 text-muted">{dictionary.form.description}</p>
        </section>
        <SajuForm dictionary={dictionary} locale={locale} menu="today" />
        <PrivacyNotice locale={locale} className="mt-10" />
      </div>
      <SiteFooter locale={locale} guideFrom="today" />
    </main>
  );
}
