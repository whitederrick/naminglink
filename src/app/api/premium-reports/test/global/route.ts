import { NextResponse } from "next/server";
import { z } from "zod";

import { buildGlobalNamePremiumResult } from "@/lib/global-name-premium";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import { renderGlobalNameReportPdf } from "@/lib/pdf/global-name-report";
import { isPremiumTestRequestAllowed } from "@/lib/premium-test-access";

export const runtime = "nodejs";
export const maxDuration = 60;

// 글로벌 프리미엄 3장 PDF의 운영자 테스트: 결제 없이 분석 생성 + PDF를 한 번에 반환한다.
const schema = z.object({
  inputFactors: z.record(z.string(), z.unknown()),
  candidate: z.object({
    hangul: z.string().trim().regex(/^[가-힣]{2,6}$/),
    pronunciation: z.string().trim().max(200).optional(),
    meaning: z.string().trim().max(2000).optional(),
    recommendation_reason: z.string().trim().max(2000).optional(),
    cultural_fit: z.string().trim().max(2000).optional(),
    usage_note: z.string().trim().max(2000).optional(),
  }),
  locale: z.string().trim().max(10).optional(),
});

export async function POST(request: Request) {
  if (!(await isPremiumTestRequestAllowed(request))) {
    return NextResponse.json(
      { ok: false, error: "운영자 로그인 후 결제 없이 테스트할 수 있습니다." },
      { status: 403 },
    );
  }
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "테스트 요청 정보가 올바르지 않습니다." },
      { status: 400 },
    );
  }
  try {
    const outputLanguage = OUTPUT_LANGUAGE_NAMES[parsed.data.locale ?? ""]
      ? String(parsed.data.locale)
      : "en";
    const premium = await buildGlobalNamePremiumResult({
      inputFactors: parsed.data.inputFactors,
      candidate: parsed.data.candidate,
      outputLanguage,
      reportId: "NL-GLOBALTEST",
    });
    const pdf = await renderGlobalNameReportPdf(premium.reportData);
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="naminglink-global-premium-test.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Global premium test PDF failed", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "테스트 PDF 생성에 실패했습니다." },
      { status: 500 },
    );
  }
}
