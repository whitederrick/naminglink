import { NextResponse } from "next/server";
import { z } from "zod";

import { buildGlobalNamePremiumResult } from "@/lib/global-name-premium";
import { buildHangulArtResult } from "@/lib/hangul-art-premium";
import { buildNameArtPackResult } from "@/lib/name-art-pack";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import { registerReportFonts } from "@/lib/pdf/dynamic-fonts";
import { renderGlobalNameReportPdf } from "@/lib/pdf/global-name-report";
import { renderHangulArtPdf } from "@/lib/pdf/hangul-art-report";
import { renderNameArtPackPdf } from "@/lib/pdf/name-art-pack-report";
import { isPremiumTestRequestAllowed } from "@/lib/premium-test-access";
import { getProductSetting } from "@/lib/product-settings";
import {
  getReportFontsByCodes,
  listReportFonts,
  type ReportFontRow,
} from "@/lib/report-fonts-registry";

export const runtime = "nodejs";
export const maxDuration = 60;

// 글로벌 프리미엄 PDF(한글 이름 4장 · 발음 표기 3장)의 운영자 테스트:
// 결제 없이 산출물 생성 + PDF를 한 번에 반환한다.
const hangulCandidate = z
  .record(z.string(), z.unknown())
  .refine(
    (value) => /^[가-힣]{1,12}(?:\s[가-힣]{1,12}){0,3}$/.test(String(value.hangul ?? "").trim()),
    "한글 표기 형식이 아닙니다.",
  );

const schema = z.object({
  product: z
    .enum(["GLOBAL_NAME_PDF", "HANGUL_ART_PDF", "NAME_ART_PACK"])
    .default("GLOBAL_NAME_PDF"),
  inputFactors: z.record(z.string(), z.unknown()),
  candidate: hangulCandidate.optional(),
  candidates: z.array(hangulCandidate).min(1).max(5).optional(),
  // 미지정이면 활성 서체 중 앞에서부터 설정 개수만큼 자동 선택한다(테스트 편의).
  fontCodes: z.array(z.string().trim()).max(10).optional(),
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
    const candidates =
      parsed.data.candidates ?? (parsed.data.candidate ? [parsed.data.candidate] : []);
    if (candidates.length === 0) {
      return NextResponse.json({ ok: false, error: "후보 정보가 없습니다." }, { status: 400 });
    }

    // 서체 준비: 지정 코드 또는 활성 서체에서 설정 개수만큼 자동 선택.
    const setting = await getProductSetting(parsed.data.product);
    let fontRows: ReportFontRow[] = [];
    if (setting.font_count > 0) {
      fontRows = parsed.data.fontCodes?.length
        ? await getReportFontsByCodes(parsed.data.fontCodes.slice(0, setting.font_count))
        : (await listReportFonts({ enabledOnly: true })).slice(0, setting.font_count);
    }
    const fonts = fontRows.map((row) => ({
      code: row.code,
      name_ko: row.name_ko,
      name_en: row.name_en,
      copyright_holder: row.copyright_holder,
      license_type: row.license_type,
      source_url: row.source_url,
    }));
    const families = await registerReportFonts(fontRows);
    const reportId = "NL-GLOBALTEST";

    let pdf: Buffer;
    if (parsed.data.product === "NAME_ART_PACK") {
      const premium = buildNameArtPackResult({
        inputFactors: parsed.data.inputFactors,
        candidate: candidates[0],
        fonts,
        outputLanguage,
        reportId,
      });
      pdf = await renderNameArtPackPdf(premium.reportData, families);
    } else if (parsed.data.product === "HANGUL_ART_PDF") {
      const premium = buildHangulArtResult({
        inputFactors: parsed.data.inputFactors,
        candidates,
        fonts,
        outputLanguage,
        reportId,
      });
      pdf = await renderHangulArtPdf(premium.reportData, families);
    } else {
      const premium = await buildGlobalNamePremiumResult({
        inputFactors: parsed.data.inputFactors,
        candidates,
        fonts,
        outputLanguage,
        reportId,
      });
      pdf = await renderGlobalNameReportPdf(premium.reportData, families);
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
