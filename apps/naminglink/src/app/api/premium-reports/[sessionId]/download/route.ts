import { NextResponse } from "next/server";
import { z } from "zod";

import {
  premiumReportRemainingSeconds,
  verifyPremiumReportToken,
} from "@/lib/premium-reports";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getHanjaProduct, type HanjaProductCode } from "@/lib/hanja-products";
import { isGlobalPremiumPdfProduct } from "@/lib/global-products";

export const runtime = "nodejs";

const requestSchema = z.object({
  accessToken: z.string().min(32).max(256),
});

type RouteContext = {
  params: Promise<{ sessionId: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  const { sessionId } = await context.params;
  const parsedSessionId = z.string().uuid().safeParse(sessionId);
  const parsedBody = requestSchema.safeParse(await request.json().catch(() => null));

  if (!parsedSessionId.success || !parsedBody.success) {
    return NextResponse.json(
      { ok: false, error: "다운로드 요청 형식이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "리포트 저장소 연결이 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  const { data: session, error: sessionError } = await supabase
    .from("premium_analysis_sessions")
    .select("id,status,access_token_hash,expires_at,deleted_at,product_code,interpretation_result")
    .eq("id", parsedSessionId.data)
    .maybeSingle();

  if (sessionError || !session) {
    return NextResponse.json(
      { ok: false, error: "리포트를 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  if (
    !verifyPremiumReportToken(
      parsedBody.data.accessToken,
      String(session.access_token_hash),
    )
  ) {
    return NextResponse.json(
      { ok: false, error: "리포트 접근 정보가 올바르지 않습니다." },
      { status: 403 },
    );
  }

  const isGlobalReport = isGlobalPremiumPdfProduct(session.product_code);
  if (!isGlobalReport && !getHanjaProduct(session.product_code as HanjaProductCode).includesPdf) {
    return NextResponse.json(
      { ok: false, error: "선택한 상품에는 PDF가 포함되지 않습니다." },
      { status: 403 },
    );
  }

  const remainingSeconds = premiumReportRemainingSeconds(
    String(session.expires_at ?? ""),
  );

  if (
    session.deleted_at ||
    session.status !== "READY" ||
    remainingSeconds <= 0
  ) {
    if (!session.deleted_at && remainingSeconds <= 0) {
      await supabase
        .from("premium_analysis_sessions")
        .update({ status: "EXPIRED", updated_at: new Date().toISOString() })
        .eq("id", session.id);
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "결제 후 24시간의 보관 기간이 종료되어 리포트를 다시 다운로드할 수 없습니다.",
      },
      { status: 410 },
    );
  }

  const { data: artifact, error: artifactError } = await supabase
    .from("premium_analysis_artifacts")
    .select("storage_bucket,storage_path,deleted_at")
    .eq("session_id", session.id)
    .eq("artifact_type", "PDF")
    .is("deleted_at", null)
    .maybeSingle();

  if (artifactError || !artifact || artifact.deleted_at) {
    return NextResponse.json(
      { ok: false, error: "PDF 생성이 완료되지 않았습니다." },
      { status: 409 },
    );
  }

  // 저장 파일명에 분석 대상자 이름을 넣는다(예: naminglink-premium-안준수.pdf).
  // 파일명에 못 쓰는 문자만 제거하고, 이름을 찾지 못하면 기존 고정 파일명을 쓴다.
  const interpretation = session.interpretation_result as
    | { reportData?: { childNameHangul?: string; name?: { hangul?: string } } }
    | null;
  const reportName = String(
    interpretation?.reportData?.childNameHangul ??
      interpretation?.reportData?.name?.hangul ??
      "",
  )
    .replace(/[\\/:*?"<>|.\s]+/g, "")
    .slice(0, 20);
  const downloadFileName = reportName
    ? `naminglink-premium-${reportName}.pdf`
    : "naminglink-premium-report.pdf";

  const signedUrlLifetime = Math.max(1, Math.min(60, remainingSeconds));
  const { data: signedUrl, error: signedUrlError } = await supabase.storage
    .from(String(artifact.storage_bucket))
    .createSignedUrl(String(artifact.storage_path), signedUrlLifetime, {
      download: downloadFileName,
    });

  if (signedUrlError || !signedUrl?.signedUrl) {
    return NextResponse.json(
      { ok: false, error: "PDF 다운로드 주소를 만들지 못했습니다." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    signedUrl: signedUrl.signedUrl,
    signedUrlExpiresInSeconds: signedUrlLifetime,
    reportExpiresAt: session.expires_at,
  });
}
