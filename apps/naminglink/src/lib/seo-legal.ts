import type { Metadata } from "next";
import { getFallbackPolicyDocument } from "@/lib/legal-content";
import type { LegalDocumentKind } from "@/lib/legal-content/types";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/services";

/**
 * 약관·개인정보·환불·가격 고지 페이지의 metadata.
 *
 * **화면은 DB(`site_contents`)에서 읽지만 metadata는 정적 사전에서 읽는다.** 제목 한 줄을
 * 얻자고 요청마다 DB를 한 번 더 왕복시킬 이유가 없다. 관리자가 제목을 고치면 화면이 먼저
 * 바뀌고 검색 결과 제목은 사전을 고칠 때 따라온다 — 문서 제목은 거의 바뀌지 않는 값이다.
 *
 * legal-content는 23개 로케일 문서를 통째로 임포트하므로 **서버에서만** 쓸 것.
 * seo.ts에 넣지 않고 파일을 나눈 이유가 그것이다(seo.ts는 클라이언트에서 불릴 수도 있다).
 */
export function buildLegalMetadata({
  kind,
  path,
  locale,
  requested,
}: {
  kind: LegalDocumentKind;
  path: string;
  locale: Locale;
  requested?: Locale | null;
}): Metadata {
  const document = getFallbackPolicyDocument(kind, locale);
  return buildPageMetadata({
    path,
    locale,
    requested,
    title: document.title,
    description: document.description,
  });
}
