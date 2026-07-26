"use client";

import { useState } from "react";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";

type PolicyLabels = Record<LegalDocument, string>;

export function FooterPolicyLinks({
  labels,
  linkClass,
  textDirection,
  locale,
}: {
  labels: PolicyLabels;
  linkClass: string;
  textDirection: "ltr" | "rtl";
  locale: import("@/lib/services").Locale;
}) {
  const [openDocument, setOpenDocument] = useState<LegalDocument | null>(null);
  const documents: LegalDocument[] = ["terms", "privacy", "refund", "pricing"];

  return (
    <>
      {documents.map((document) => (
        <button
          key={document}
          type="button"
          onClick={() => setOpenDocument(document)}
          className={linkClass}
          dir={textDirection}
        >
          {labels[document]}
        </button>
      ))}

      {openDocument && (
        <LegalModal
          key={`${openDocument}-${locale}`}
          kind={openDocument}
          title={labels[openDocument]}
          locale={locale}
          onClose={() => setOpenDocument(null)}
        />
      )}
    </>
  );
}
