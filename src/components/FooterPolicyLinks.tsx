"use client";

import { useState } from "react";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";

type PolicyLabels = Record<LegalDocument, string>;

export function FooterPolicyLinks({
  labels,
  linkClass,
  textDirection,
}: {
  labels: PolicyLabels;
  linkClass: string;
  textDirection: "ltr" | "rtl";
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
          kind={openDocument}
          title={labels[openDocument]}
          onClose={() => setOpenDocument(null)}
        />
      )}
    </>
  );
}