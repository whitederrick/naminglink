import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LEGAL_EFFECTIVE_DATE, type LegalDocument } from "@/lib/legal-content";
import { getDictionary, type Locale } from "@/lib/i18n";

/**
 * 문단에 `**강조**` 표기를 쓸 수 있게 한다. 약관에서 "저장하지 않습니다" 같은 핵심 문장을
 * 굵게 두면 훑어 읽는 사람이 요지를 놓치지 않는다. 마크다운 전체를 지원하지는 않는다 —
 * 문서를 사람이 직접 쓰므로 그 이상은 필요 없다.
 */
function renderEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export function LegalDocumentView({
  document,
  locale,
}: {
  document: LegalDocument;
  locale: Locale;
}) {
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-background">
      <PageHeader brand={dictionary.brand} locale={locale} />

      <article className="mx-auto w-full max-w-3xl px-6 py-12">
        <h1 className="break-keep-all text-3xl font-bold">{document.title}</h1>
        <p className="mt-2 text-xs text-muted">
          {document.effectiveLabel} {LEGAL_EFFECTIVE_DATE}
        </p>
        <p className="break-keep-all mt-6 leading-7 text-muted">
          {renderEmphasis(document.intro)}
        </p>

        <div className="mt-10 space-y-9">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="break-keep-all text-lg font-semibold">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="break-keep-all mt-3 leading-7 text-muted"
                >
                  {renderEmphasis(paragraph)}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="break-keep-all flex gap-2.5 leading-7 text-muted"
                    >
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-plum/60" />
                      <span>{renderEmphasis(bullet)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <Link
          href={`/?lang=${locale}`}
          className="mt-12 inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold"
        >
          {dictionary.footer.backHome}
        </Link>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
