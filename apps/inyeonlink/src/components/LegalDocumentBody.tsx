import { LEGAL_EFFECTIVE_DATE, type LegalDocument } from "@/lib/legal-content";

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

/**
 * 약관 본문만 그린다.
 *
 * 전체 페이지(`/terms`·`/privacy`)와 팝업이 같은 것을 보여 주어야 하므로 본문을 떼어 놓았다.
 * 한쪽만 고치면 같은 문서가 자리에 따라 달라진다.
 */
export function LegalDocumentBody({
  document,
  /** 팝업은 시행일을 헤더에 이미 보여 주므로 본문에서는 뺀다. */
  hideEffectiveDate = false,
}: {
  document: LegalDocument;
  hideEffectiveDate?: boolean;
}) {
  return (
    <>
      {hideEffectiveDate ? null : (
        <p className="mt-2 text-xs text-muted">
          {document.effectiveLabel} {LEGAL_EFFECTIVE_DATE}
        </p>
      )}
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
                    <span
                      aria-hidden
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-plum/60"
                    />
                    <span>{renderEmphasis(bullet)}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );
}
