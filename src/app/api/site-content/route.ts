import { NextRequest, NextResponse } from "next/server";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { isLocale } from "@/lib/locale";
import {
  getPublishedFooterContent,
  getPublishedPolicyDocument,
} from "@/lib/site-content-server";
import { legalDocumentKinds, type LegalDocumentKind } from "@/lib/site-content";

export const dynamic = "force-dynamic";

function isLegalDocumentKind(value: string | null): value is LegalDocumentKind {
  return legalDocumentKinds.includes(value as LegalDocumentKind);
}

export async function GET(request: NextRequest) {
  const kind = request.nextUrl.searchParams.get("kind");

  if (kind === "footer") {
    return NextResponse.json({
      ok: true,
      content: await getPublishedFooterContent(),
    });
  }

  const locale = request.nextUrl.searchParams.get("locale");

  if (!isLegalDocumentKind(kind) || !isLocale(locale)) {
    return NextResponse.json(
      { ok: false, error: "콘텐츠 종류 또는 언어가 올바르지 않습니다." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      content: await getPublishedPolicyDocument(kind, locale),
      labels: getLegalLocaleContent(locale).labels,
    },
    {
      // 약관은 공개 문서라 엣지 CDN에 캐시한다. 첫 열람 후 다른 사용자·재열람은 즉시 응답되고,
      // 운영자가 DB에서 수정하면 최대 5분(s-maxage) 뒤 반영, 그 사이에는 stale을 즉시 주고 백그라운드 갱신.
      headers: {
        "Cache-Control":
          "public, s-maxage=300, stale-while-revalidate=86400",
      },
    },
  );
}
