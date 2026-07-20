import { NextResponse } from "next/server";

import { renderPremiumHanjaTestPdf, type PremiumHanjaTestResult } from "@/lib/premium-hanja-analysis";
import { isPremiumTestRequestAllowed } from "@/lib/premium-test-access";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: Request) {
  if (!(await isPremiumTestRequestAllowed(request))) {
    return NextResponse.json({ ok: false, error: "운영자 로그인 후 결제 없이 테스트할 수 있습니다." }, { status: 403 });
  }
  const body = (await request.json().catch(() => null)) as { reportData?: PremiumHanjaTestResult["reportData"] } | null;
  if (!body?.reportData || typeof body.reportData !== "object") {
    return NextResponse.json({ ok: false, error: "PDF로 만들 상세 분석 결과가 없습니다." }, { status: 400 });
  }
  try {
    const pdf = await renderPremiumHanjaTestPdf(body.reportData);
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"naminglink-premium-test.pdf\"",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Premium Hanja test PDF failed", error);
    return NextResponse.json({ ok: false, error: "PDF 생성에 실패했습니다." }, { status: 500 });
  }
}
