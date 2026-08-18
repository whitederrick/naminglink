import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { PageTitle } from "@/components/PageTitle";
import { SiteFooter } from "@/components/SiteFooter";
import { LegalDocumentBody } from "@/components/LegalDocumentBody";
import { type LegalDocument } from "@/lib/legal-content";
import { getDictionary, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

export function LegalDocumentView({
  document,
  locale,
  path,
}: {
  document: LegalDocument;
  locale: Locale;
  /** 지금 화면의 경로(로케일 없는 형태). 머리글의 언어 선택기가 이 화면에 머물게 한다. */
  path: string;
}) {
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-background">
      <PageHeader locale={locale} path={path} width="max-w-3xl" />

      <article className="mx-auto w-full max-w-3xl px-6 py-12">
        {/* 서비스 화면과 같은 제목 줄을 쓴다 — 오른쪽 끝에 언어 선택기가 함께 온다.
            약관은 23로케일 전부 번역돼 있으므로 이 화면에서도 언어를 바꿀 수 있어야 한다. */}
        <PageTitle title={document.title} locale={locale} path={path} />
        <LegalDocumentBody document={document} />

        <Link
          href={localePath("/", locale)}
          className="mt-12 inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold"
        >
          {dictionary.footer.backHome}
        </Link>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
