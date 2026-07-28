import Image from "next/image";

import { AdBanner } from "@/components/AdBanner";
import { AffinityForm } from "@/components/AffinityForm";
import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";

export default async function AffinityPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* 배경은 궁합 입력 화면과 같은 것을 쓴다. 두 화면이 형제로 읽혀야 하고, 인연의 결만을
          위한 그림을 따로 만들 이유가 아직 없다. */}
      <div aria-hidden className="fixed inset-0 z-0">
        <Image
          src="/images/compatibility-form-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div aria-hidden className="fixed inset-0 z-0 bg-[#fbf7f6]/25" />

      <div className="relative z-10">
        <PageHeader brand={dictionary.brand} locale={locale} />

        <div className="mx-auto w-full max-w-2xl px-6 pb-16">
          <section className="mt-10">
            <PageTitle title={dictionary.affinity.formTitle} locale={locale} />
            <p className="break-keep-all mt-3 text-muted">
              {dictionary.affinity.formDescription}
            </p>
          </section>

          <AffinityForm dictionary={dictionary} locale={locale} />

          {/* 생년월일을 넣기 직전에 무엇이 저장되지 않는지 읽히도록 폼 바로 아래에 둔다. */}
          <PrivacyNotice locale={locale} className="mt-10" />

          {/* 광고는 미저장 안내 아래, 즉 화면의 맨 끝에 둔다. 제출 버튼 근처에 두면 오클릭이
              나고 그건 애드센스 계정 정지 사유다. */}
          <AdBanner placement="form" locale={locale} className="mt-10" />
        </div>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
