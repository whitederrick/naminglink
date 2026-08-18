import { AccountDashboard } from "@/components/AccountDashboard";
import { AuthPageNav } from "@/components/AuthPageNav";
import { AuthPanel } from "@/components/AuthPanel";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import { getAuthCopy } from "@/lib/i18n-auth";
import { routeLocale } from "@/lib/route-locale";
import { noIndex } from "@/lib/seo";

// 개인 화면이라 색인하지 않는다. follow는 남겨 두어 여기서 나가는 링크는 계속 따라가게 한다.
export const metadata: Metadata = { robots: noIndex };

export default async function AccountPage({
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
            {copy.accountEyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            {copy.accountTitle}
          </h1>
        </div>
        <AuthPanel intent="account" locale={locale} />
        <AccountDashboard locale={locale} />
      </section>
      {/* 로그인 화면과 같은 이유로 팝업이다. 계정 화면에서 약관을 보려고 떠나면 돌아오기 번거롭다. */}
      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}
