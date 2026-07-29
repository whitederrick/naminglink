"use client";

import Link from "next/link";
import { useState } from "react";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";

type PolicyLabels = Record<LegalDocument, string>;

export function FooterPolicyLinks({
  labels,
  linkClass,
  textDirection,
  locale,
  loginLabel,
  loginHref,
}: {
  labels: PolicyLabels;
  linkClass: string;
  textDirection: "ltr" | "rtl";
  locale: import("@/lib/services").Locale;
  loginLabel: string;
  loginHref: string;
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
      {/* 로그인은 팝업이 아니라 페이지 이동이다(약관과 달리 화면을 옮기는 것이 목적).
          요금안내 뒤에 같은 글꼴·크기로 붙여 푸터의 다른 항목과 구분되지 않게 한다.
          이 링크가 사이트 전체에서 유일한 로그인 진입점이다 — 예전에는 문구만 23개 로케일에
          남고 링크가 빠져 있어, 입력 화면의 저장 안내문을 봐야만 로그인을 찾을 수 있었다. */}
      <Link href={loginHref} className={linkClass} dir={textDirection}>
        {loginLabel}
      </Link>

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
