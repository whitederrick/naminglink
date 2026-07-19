import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const BATCH_SIZE = 100;

function isAuthorized(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization") ?? "";
  const expected = cronSecret ? `Bearer ${cronSecret}` : "";

  if (!expected || authorization.length !== expected.length) return false;

  return timingSafeEqual(Buffer.from(authorization), Buffer.from(expected));
}

export async function GET(request: Request) {
  if (!process.env.CRON_SECRET) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET이 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, error: "허용되지 않은 요청입니다." },
      { status: 401 },
    );
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Supabase 관리자 연결이 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  const now = new Date().toISOString();
  const { data: sessions, error: sessionError } = await supabase
    .from("premium_analysis_sessions")
    .select("id,status")
    .lte("expires_at", now)
    .is("deleted_at", null)
    .in("status", ["READY", "EXPIRED", "FAILED"])
    .limit(BATCH_SIZE);

  if (sessionError) {
    return NextResponse.json(
      { ok: false, error: "만료 세션 조회에 실패했습니다." },
      { status: 500 },
    );
  }

  if (!sessions?.length) {
    return NextResponse.json({ ok: true, processed: 0, deleted: 0, retry: 0 });
  }

  const sessionIds = sessions.map((session) => String(session.id));
  const { data: artifacts, error: artifactError } = await supabase
    .from("premium_analysis_artifacts")
    .select("id,session_id,storage_bucket,storage_path")
    .in("session_id", sessionIds)
    .is("deleted_at", null);

  if (artifactError) {
    return NextResponse.json(
      { ok: false, error: "만료 PDF 조회에 실패했습니다." },
      { status: 500 },
    );
  }

  const artifactsByBucket = new Map<
    string,
    Array<{ id: string; sessionId: string; path: string }>
  >();

  for (const artifact of artifacts ?? []) {
    const bucket = String(artifact.storage_bucket);
    const bucketArtifacts = artifactsByBucket.get(bucket) ?? [];
    bucketArtifacts.push({
      id: String(artifact.id),
      sessionId: String(artifact.session_id),
      path: String(artifact.storage_path),
    });
    artifactsByBucket.set(bucket, bucketArtifacts);
  }

  const retrySessionIds = new Set<string>();
  let deletedArtifacts = 0;

  for (const [bucket, bucketArtifacts] of artifactsByBucket) {
    const { error: removeError } = await supabase.storage
      .from(bucket)
      .remove(bucketArtifacts.map((artifact) => artifact.path));

    if (removeError) {
      bucketArtifacts.forEach((artifact) => retrySessionIds.add(artifact.sessionId));
      await supabase
        .from("premium_analysis_artifacts")
        .update({ deletion_error: "STORAGE_REMOVE_FAILED" })
        .in(
          "id",
          bucketArtifacts.map((artifact) => artifact.id),
        );
      continue;
    }

    deletedArtifacts += bucketArtifacts.length;
    await supabase
      .from("premium_analysis_artifacts")
      .update({ deleted_at: now, deletion_error: null })
      .in(
        "id",
        bucketArtifacts.map((artifact) => artifact.id),
      );
  }

  const deletedSessionIds = sessionIds.filter(
    (sessionId) => !retrySessionIds.has(sessionId),
  );

  if (deletedSessionIds.length) {
    await supabase
      .from("premium_analysis_sessions")
      .update({
        status: "DELETED",
        input_payload: {},
        calculation_result: null,
        interpretation_result: null,
        failure_code: null,
        deleted_at: now,
        updated_at: now,
      })
      .in("id", deletedSessionIds);
  }

  if (retrySessionIds.size) {
    await supabase
      .from("premium_analysis_sessions")
      .update({
        status: "EXPIRED",
        input_payload: {},
        calculation_result: null,
        interpretation_result: null,
        failure_code: "ARTIFACT_DELETE_RETRY",
        updated_at: now,
      })
      .in("id", [...retrySessionIds]);
  }

  return NextResponse.json({
    ok: true,
    processed: sessionIds.length,
    deleted: deletedSessionIds.length,
    deletedArtifacts,
    retry: retrySessionIds.size,
  });
}
