import { NextResponse } from "next/server";
import { z } from "zod";

import { buildGlobalNamePremiumResult } from "@/lib/global-name-premium";
import { buildHangulArtResult } from "@/lib/hangul-art-premium";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import { renderGlobalNameReportPdf } from "@/lib/pdf/global-name-report";
import { renderHangulArtPdf } from "@/lib/pdf/hangul-art-report";
import { isPremiumTestRequestAllowed } from "@/lib/premium-test-access";

export const runtime = "nodejs";
export const maxDuration = 60;

// 글로벌 프리미엄 PDF(한글 이름 4장 · 발음 표기 3장)의 운영자 테스트:
// 결제 없이 산출물 생성 + PDF를 한 번에 반환한다.
const schema = z.object({
  product: z.enum(["GLOBAL_NAME_PDF", "HANGUL_ART_PDF"]).default("GLOBAL_NAME_PDF"),
  inputFactors: z.record(z.string(), z.unknown()),
  candidate: z
    .record(z.string(), z.unknown())
    .refine(
      (value) => /^[가-힣]{1,12}(?:\s[가-힣]{1,12}){0,3}$/.test(String(value.hangul ?? "").trim()),
      "한글 표기 형식이 아닙니다.",
    ),
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
    let pdf: Buffer;
    if (parsed.data.product === "HANGUL_ART_PDF") {
      const premium = buildHangulArtResult({
        inputFactors: parsed.data.inputFactors,
        candidate: parsed.data.candidate,
        outputLanguage,
        reportId: "NL-GLOBALTEST",
      });
      pdf = await renderHangulArtPdf(premium.reportData);
    } else {
      const premium = await buildGlobalNamePremiumResult({
        inputFactors: parsed.data.inputFactors,
        candidate: parsed.data.candidate,
        outputLanguage,
        reportId: "NL-GLOBALTEST",
      });
      pdf = await renderGlobalNameReportPdf(premium.reportData);
    }
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
