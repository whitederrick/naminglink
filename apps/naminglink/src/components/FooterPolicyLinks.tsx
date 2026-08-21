"use client";

import Link from "next/link";
import { useState } from "react";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";
// **화면을 옮기는 링크만** 이것으로 바꾼다. 약관류는 모달이라 옮기지 않는다.
import { ReturnLink } from "@/components/ReturnLink";
import { localePath } from "@/lib/locale-path";

/**
 * 법정 문서의 실제 주소. **모달이 여는 내용과 같은 문서를 가리켜야 한다** — 크롤러가
 * 따라간 곳과 이용자가 읽은 곳이 다르면 그것대로 문제다.
 */
const POLICY_PATHS: Record<LegalDocument, string> = {
  terms: "/terms",
  privacy: "/privacy",
  refund: "/refund-policy",
  pricing: "/pricing",
};

type PolicyLabels = Record<LegalDocument, string>;

export function FooterPolicyLinks({
  labels,
  linkClass,
  textDirection,
  locale,
  loginLabel,
  guideHref,
  guideLabel,
  loginHref,
  leadingLinks = [],
}: {
  labels: PolicyLabels;
  linkClass: string;
  textDirection: "ltr" | "rtl";
  locale: import("@/lib/services").Locale;
  loginLabel: string;
  /** 이용 안내 링크. 한국어에서만 넘어온다(한국 제도 설명이라 다른 언어판에는 걸지 않는다). */
  guideHref?: string;
  guideLabel?: string;
  loginHref: string;
  /**
   * 약관 묶음 **앞**에 오는 페이지들 — 소개·문의하기·공지사항.
   *
   * **여기 없으면 사이트 어디에서도 닿지 않았다.** 이 셋은 링크형 푸터(`policyMode="links"`)에만
   * 있었는데, 랜딩·서비스·결과·안내 화면이 전부 팝업형이라 실제로는 약관 페이지와 도장 주문
   * 화면에서만 보였다. 애드센스 심사는 이 페이지들이 **있는지**가 아니라 **닿는지**를 본다.
   *
   * 팝업이 아니라 페이지 이동이다. 약관 넷은 동의 직전에 읽는 것이라 화면을 떠나면 안 되지만,
   * 이 셋은 그 자체가 목적지다.
   */
  leadingLinks?: Array<{ href: string; label: string }>;
}) {
  const [openDocument, setOpenDocument] = useState<LegalDocument | null>(null);
  const documents: LegalDocument[] = ["terms", "privacy", "refund", "pricing"];

  return (
    <>
      {leadingLinks.map((link) => (
        <ReturnLink
          key={link.href}
          href={link.href}
          className={linkClass}
          dir={textDirection}
        >
          {link.label}
        </ReturnLink>
      ))}
      {/**
        * **링크로 두되 모달로 연다** (2026-08-10).
        *
        * 예전에는 `<button>`이었다. 이용자에게는 문제가 없지만 **크롤러가 정책 URL을 따라갈
        * 길이 없었다** — 애드센스 심사가 보는 것이 그 접근성이고, 사이트 구조상으로도 약관·
        * 개인정보 페이지로 가는 내부 링크가 0개였다.
        *
        * 그렇다고 페이지 이동으로 바꿀 수는 없다. **「서비스 흐름 중 페이지 전환 금지, 참고
        * 문서는 제자리에서」**가 이 저장소의 방침이다 — 약관 넷은 동의 직전에 읽는 것이라
        * 화면을 떠나면 하던 일을 잃는다.
        *
        * 그래서 진짜 `href`를 두고 클릭만 가로챈다. 크롤러는 URL을 보고, 이용자는 모달을 본다.
        * **새 탭·가운데 클릭·수식키 조합은 가로채지 않는다** — 그때는 새 창에서 페이지가
        * 열리는 것이 이용자가 기대한 동작이다.
        */}
      {documents.map((document) => (
        <Link
          key={document}
          href={localePath(POLICY_PATHS[document], locale)}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            if (event.button !== 0) return;
            event.preventDefault();
            setOpenDocument(document);
          }}
          className={linkClass}
          dir={textDirection}
        >
          {labels[document]}
        </Link>
      ))}
      {/* 이용 안내. **요금안내와 로그인 사이**에 둔다 — 앞의 넷은 법정 문서 묶음이고,
          요금안내와 이용 안내는 둘 다 "정보"라 나란히 놓이며, 로그인은 성격이 다른 계정
          동작이라 끝에 남는다(사용자 결정).

          **한국어에서만 보인다.** 인명용 한자는 대법원 제도라 한국에 한정된 내용이어서,
          다른 언어판 푸터에 링크만 걸어 두면 눌렀을 때 읽을 수 없는 글이 나온다. */}
      {guideHref && guideLabel ? (
        <ReturnLink href={guideHref} className={linkClass} dir={textDirection}>
          {guideLabel}
        </ReturnLink>
      ) : null}

      {/* 로그인은 팝업이 아니라 페이지 이동이다(약관과 달리 화면을 옮기는 것이 목적).
          요금안내 뒤에 같은 글꼴·크기로 붙여 푸터의 다른 항목과 구분되지 않게 한다.
          이 링크가 사이트 전체에서 유일한 로그인 진입점이다 — 예전에는 문구만 23개 로케일에
          남고 링크가 빠져 있어, 입력 화면의 저장 안내문을 봐야만 로그인을 찾을 수 있었다. */}
      <ReturnLink href={loginHref} className={linkClass} dir={textDirection}>
        {loginLabel}
      </ReturnLink>

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
