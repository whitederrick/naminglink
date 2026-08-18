import { AuthPageNav } from "@/components/AuthPageNav";
import { AuthPanel } from "@/components/AuthPanel";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import { getAuthCopy } from "@/lib/i18n-auth";
import { routeLocale } from "@/lib/route-locale";
import { noIndex } from "@/lib/seo";

// 로그인 화면은 검색 유입 가치가 없고, 색인되면 서비스 화면 대신 이것이 노출된다.
export const metadata: Metadata = { robots: noIndex };

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  const copy = getAuthCopy(locale);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-5 py-8 sm:px-8">
        <AuthPageNav locale={locale} />
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            {copy.loginEyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            {copy.loginTitle}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            {copy.loginDescription}
          </p>
        </div>
        <AuthPanel locale={locale} />
      </section>
      {/* 로그인 도중에 약관을 보려고 페이지를 떠나면 입력한 메일과 진행 상태를 잃는다. */}
      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}
