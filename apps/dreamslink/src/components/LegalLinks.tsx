"use client";

import { useState } from "react";

import { LegalModal } from "@/components/LegalModal";
import type { LegalDocumentKey } from "@/lib/legal-content";

// 푸터의 약관 링크. 누르면 팝업으로 연다(naminglink와 같은 방식).
//
// **주소는 그대로 남겨 둔다.** `/terms`·`/privacy`·`/refund-policy`·`/pricing`은 여전히 살아
// 있어야 한다 — PG 심사에서 URL로 확인하고, 검색엔진도 그 주소를 읽는다. 팝업은 읽는 흐름을
// 끊지 않으려는 편의일 뿐이라, 새 탭으로 열거나 주소를 복사하는 길을 막지 않는다.
export function LegalLinks({
  locale,
  items,
  linkClassName,
  textDirection,
}: {
  locale: string;
  items: Array<{ kind: LegalDocumentKey; href: string; label: string }>;
  linkClassName: string;
  textDirection: "ltr" | "rtl";
}) {
  const [open, setOpen] = useState<LegalDocumentKey | null>(null);

  return (
    <>
      {items.map((item) => (
        <a
          key={item.kind}
          href={item.href}
          className={linkClassName}
          dir={textDirection}
          onClick={(event) => {
            // 새 탭·다른 창으로 여는 조작은 그대로 둔다.
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
              return;
            }
            event.preventDefault();
            setOpen(item.kind);
          }}
        >
          {item.label}
        </a>
      ))}

      {open ? (
        <LegalModal kind={open} locale={locale} onClose={() => setOpen(null)} />
      ) : null}
    </>
  );
}
