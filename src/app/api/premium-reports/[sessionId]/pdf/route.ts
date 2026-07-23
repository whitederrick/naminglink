import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";

import type { GlobalNamePremiumResult } from "@/lib/global-name-premium";
import type { HangulArtPremiumResult } from "@/lib/hangul-art-premium";
import {
  isGlobalNamePdfProduct,
  isGlobalPremiumPdfProduct,
  isHangulArtPdfProduct,
} from "@/lib/global-products";
import { renderGlobalNameReportPdf } from "@/lib/pdf/global-name-report";
import { renderHangulArtPdf } from "@/lib/pdf/hangul-art-report";
import { renderPremiumHanjaTestPdf, type PremiumHanjaTestResult } from "@/lib/premium-hanja-analysis";
import { PREMIUM_HANJA_REPORT, premiumReportRemainingSeconds } from "@/lib/premium-reports";
import { getAuthorizedPremiumSession } from "@/lib/premium-session";
import { getHanjaProduct, type HanjaProductCode } from "@/lib/hanja-products";

export const runtime = "nodejs";
export const maxDuration = 60;

const bodySchema = z.object({ accessToken: z.string().min(32).max(256) });
type Context = { params: Promise<{ sessionId: string }> };

export async function POST(request: Request, context: Context) {
  const { sessionId } = await context.params;
  const id = z.string().uuid().safeParse(sessionId);
  const body = bodySchema.safeParse(await request.json().catch(() => null));
  if (!id.success || !body.success) {
    return NextResponse.json({ ok: false, error: "PDF 생성 요청이 올바르지 않습니다." }, { status: 400 });
  }
  try {
    const { supabase, session } = await getAuthorizedPremiumSession(id.data, body.data.accessToken);
    const isGlobalReport = isGlobalPremiumPdfProduct(session.product_code);
    if (!isGlobalReport && !getHanjaProduct(session.product_code as HanjaProductCode).includesPdf) {
      return NextResponse.json({ ok: false, error: "선택한 상품에는 PDF가 포함되지 않습니다." }, { status: 403 });
    }
    if (session.status !== "READY" || premiumReportRemainingSeconds(String(session.expires_at ?? "")) <= 0) {
      return NextResponse.json({ ok: false, error: "사용 가능한 상세 분석 결과가 없습니다." }, { status: 409 });
    }
    const { data: existing } = await supabase
      .from("premium_analysis_artifacts")
      .select("id")
      .eq("session_id", session.id)
      .eq("artifact_type", "PDF")
      .is("deleted_at", null)
      .maybeSingle();
    if (existing) return NextResponse.json({ ok: true, status: "READY" });

    let buffer: Buffer;
    if (isHangulArtPdfProduct(session.product_code)) {
      const premium = session.interpretation_result as HangulArtPremiumResult;
      if (!premium?.reportData) throw new Error("PDF 원본 분석 데이터가 없습니다.");
      buffer = await renderHangulArtPdf(premium.reportData);
    } else if (isGlobalNamePdfProduct(session.product_code)) {
      const premium = session.interpretation_result as GlobalNamePremiumResult;
      if (!premium?.reportData) throw new Error("PDF 원본 분석 데이터가 없습니다.");
      buffer = await renderGlobalNameReportPdf(premium.reportData);
    } else {
      const premium = session.interpretation_result as PremiumHanjaTestResult;
      if (!premium?.reportData) throw new Error("PDF 원본 분석 데이터가 없습니다.");
      buffer = await renderPremiumHanjaTestPdf(premium.reportData);
    }
    const path = `${session.id}/naminglink-premium-report.pdf`;
    const { error: uploadError } = await supabase.storage
      .from(PREMIUM_HANJA_REPORT.storageBucket)
      .upload(path, buffer, { contentType: "application/pdf", upsert: false });
    if (uploadError && !/already exists/i.test(uploadError.message)) throw uploadError;

    const { error: artifactError } = await supabase.from("premium_analysis_artifacts").upsert({
      session_id: session.id,
      artifact_type: "PDF",
      storage_bucket: PREMIUM_HANJA_REPORT.storageBucket,
      storage_path: path,
      content_sha256: createHash("sha256").update(buffer).digest("hex"),
      byte_size: buffer.length,
      expires_at: session.expires_at,
      deleted_at: null,
      deletion_error: null,
    }, { onConflict: "storage_bucket,storage_path" });
    if (artifactError) throw artifactError;
    return NextResponse.json({ ok: true, status: "READY", byteSize: buffer.length });
  } catch (error) {
    console.error("Premium PDF generation failed", error);
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "PDF 생성에 실패했습니다." }, { status: 500 });
  }
}
