import { NextRequest, NextResponse } from "next/server";
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

  return NextResponse.json({
    ok: true,
    content: await getPublishedPolicyDocument(kind, locale),
  });
}
