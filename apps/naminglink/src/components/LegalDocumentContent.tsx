import { PolicySection } from "@/components/PolicyLayout";
import type { PolicyDocumentContent } from "@/lib/site-content";

export function ManagedLegalDocumentContent({
  content,
}: {
  content: PolicyDocumentContent;
}) {
  return (
    <>
      {content.sections.map((section, sectionIndex) => (
        <PolicySection
          key={`${sectionIndex}-${section.title}`}
          title={section.title}
        >
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={`${paragraphIndex}-${paragraph.slice(0, 40)}`}>
              {paragraph}
            </p>
          ))}
        </PolicySection>
      ))}
    </>
  );
}

export function TermsDocumentContent({
  content,
}: {
  content: PolicyDocumentContent;
}) {
  return <ManagedLegalDocumentContent content={content} />;
}

export function PrivacyDocumentContent({
  content,
}: {
  content: PolicyDocumentContent;
}) {
  return <ManagedLegalDocumentContent content={content} />;
}

export function RefundDocumentContent({
  content,
}: {
  content: PolicyDocumentContent;
}) {
  return <ManagedLegalDocumentContent content={content} />;
}

export function PricingDocumentContent({
  content,
}: {
  content: PolicyDocumentContent;
}) {
  return <ManagedLegalDocumentContent content={content} />;
}
