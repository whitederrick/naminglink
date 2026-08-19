import { NextRequest, NextResponse } from "next/server";
import { getLegalLocaleContent } from "@/lib/legal-content";
import { isLocale } from "@/lib/locale";
import { sellablePriceTokens, withSellablePricesOnly } from "@/lib/pricing-visibility";
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

  /**
   * **모달도 화면이다** (2026-08-19).
   *
   * `LegalModal`이 이 응답을 그대로 그린다. 거르개를 화면 셋에만 걸었더니 **같은 문서가 모달
   * 에서는 걸러지지 않은 채로** 나갔다 — 팔지 않는 상품의 금액이 그 자리에 그대로 남는다.
   * 문서를 내보내는 자리는 여기 하나뿐이므로 여기서 거른다.
   *
   * 종류를 가리지 않는다. 금액이 없는 문서(개인정보 처리방침)에서는 아무것도 빠지지 않는다.
   */
  const published = await getPublishedPolicyDocument(kind, locale);
  const content = withSellablePricesOnly(published, await sellablePriceTokens());

  return NextResponse.json(
    {
      ok: true,
      content,
      labels: getLegalLocaleContent(locale).labels,
    },
    {
      // 약관은 공개 문서라 엣지 CDN에 캐시한다. 첫 열람 후 다른 사용자·재열람은 즉시 응답되고,
      // 운영자가 DB에서 수정하면 최대 5분(s-maxage) 뒤 반영, 그 사이에는 stale을 즉시 주고 백그라운드 갱신.
      //
      // **상품표를 켜고 끈 것도 같은 지연을 탄다**(2026-08-19). 이 응답은 이제 판매 상태에
      // 따라 달라진다 — 상품을 켠 뒤 모달의 금액이 바로 안 바뀌면 이 캐시를 볼 것.
      headers: {
        "Cache-Control":
          "public, s-maxage=300, stale-while-revalidate=86400",
      },
    },
  );
}
