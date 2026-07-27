import { NextRequest, NextResponse } from "next/server";

import { getCompanyInfo } from "@/lib/company-server";
import { isLocale } from "@/lib/i18n";
import { getLegalDocument, type LegalDocumentKey } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/locale";
import { getReportPrices } from "@/lib/report-product";

// 약관·방침 본문을 팝업이 받아 가는 경로.
//
// 문서는 서버에서 조립된다 — 사업자 정보(관리자 화면이 고치는 DB 값)와 가격(product_settings)을
// 넣어야 하기 때문이다. 그래서 번들에 정적으로 담을 수 없고, 팝업을 열 때 받아 온다.
// naminglink의 약관 팝업과 같은 방식이다.
//
// 공개 조회다. 어차피 `/terms`·`/privacy`로 누구나 볼 수 있는 문서이고, 개인정보는 없다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 문서 종류를 늘리면 여기도 늘려야 한다. 빠뜨리면 팝업이 INVALID_KIND를 받아 빈 화면이 된다
// (실제로 환불정책·요금안내를 추가하고 이 목록을 갱신하지 않아 그런 일이 있었다).
const KINDS: LegalDocumentKey[] = ["privacy", "terms", "refund", "pricing"];

export async function GET(request: NextRequest) {
  const kind = request.nextUrl.searchParams.get("kind") ?? "";
  if (!KINDS.includes(kind as LegalDocumentKey)) {
    return NextResponse.json({ ok: false, error: "INVALID_KIND" }, { status: 400 });
  }

  const requested = request.nextUrl.searchParams.get("lang");
  const locale = isLocale(requested)
    ? requested
    : await getRequestLocale(requested ?? undefined);

  const [company, prices] = await Promise.all([
    getCompanyInfo(),
    getReportPrices(),
  ]);

  return NextResponse.json({
    ok: true,
    document: getLegalDocument(locale, kind as LegalDocumentKey, company, prices),
  });
}
