"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { FooterContent } from "@/lib/site-content";

/**
 * 서버가 읽은 푸터 사업자 정보를 클라이언트 트리에 내려 준다.
 *
 * **왜 필요한가.** `SiteFooter`는 클라이언트 컴포넌트라(운영자 화면 수정을 즉시 반영하려고
 * `/api/site-content`를 부른다) 서버가 보내는 HTML에는 폴백 값이 들어간다. 사업자등록번호·
 * 통신판매업 신고번호는 전자상거래법이 요구하는 표시 항목인데, 그 자리에 "준비 중"이 담긴 HTML이
 * 나가고 검색엔진·크롤러도 그것을 본다. 브라우저에서는 마운트 후 실제 값으로 바뀌지만,
 * **표시 의무를 자바스크립트 실행에 걸어 둘 이유가 없다.**
 *
 * 루트 레이아웃(서버)이 값을 읽어 이 provider에 넣으면 서버 HTML부터 실제 값이 들어간다.
 * `SiteFooter`는 이 값을 초기 상태로 쓰고, 값이 없을 때만 예전처럼 API를 부른다.
 */
const FooterContentContext = createContext<FooterContent | null>(null);

export function FooterContentProvider({
  value,
  children,
}: {
  value: FooterContent | null;
  children: ReactNode;
}) {
  return (
    <FooterContentContext.Provider value={value}>
      {children}
    </FooterContentContext.Provider>
  );
}

export function useServerFooterContent(): FooterContent | null {
  return useContext(FooterContentContext);
}
