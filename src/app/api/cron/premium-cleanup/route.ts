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
  // 방치된 결제 대기(PENDING_PAYMENT) 세션은 결제 시점에만 expires_at이 채워지므로 만료 조회에 걸리지
  // 않는다. 생성 후 일정 시간이 지난 미결제 세션은 사실상 이탈로 보고 PII를 파기한다(기본 24시간).
  const abandonedCutoff = new Date(
    Date.now() -
      Number(process.env.PREMIUM_ABANDONED_TTL_HOURS ?? 24) * 60 * 60 * 1000,
  ).toISOString();

  // 결제 후 만료된 세션: 정책상 결제 24시간 뒤 전부 자동 삭제되어야 하므로 PAID·GENERATING까지 포함한다
  // (예전에는 READY·EXPIRED·FAILED만 지워 결제 후 미생성/생성 중단 세션의 PII가 무기한 잔존했다).
  const { data: expiredSessions, error: expiredError } = await supabase
    .from("premium_analysis_sessions")
    .select("id,status,order_id")
    .lte("expires_at", now)
    .is("deleted_at", null)
    .in("status", ["READY", "EXPIRED", "FAILED", "PAID", "GENERATING"])
    .limit(BATCH_SIZE);

  if (expiredError) {
    return NextResponse.json(
      { ok: false, error: "만료 세션 조회에 실패했습니다." },
      { status: 500 },
    );
  }

  const { data: abandonedSessions, error: abandonedError } = await supabase
    .from("premium_analysis_sessions")
    .select("id,status,order_id")
    .eq("status", "PENDING_PAYMENT")
    .is("deleted_at", null)
    .lte("created_at", abandonedCutoff)
    .limit(BATCH_SIZE);

  if (abandonedError) {
    return NextResponse.json(
      { ok: false, error: "방치 세션 조회에 실패했습니다." },
      { status: 500 },
    );
  }

  const sessions = [...(expiredSessions ?? []), ...(abandonedSessions ?? [])];

  if (!sessions.length) {
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

  // 세션 파기가 확정된 이탈 주문의 UNPAID 연락처 PII를 함께 제거한다(PAID 주문은 제외).
  // 방치 세션은 PDF 산출물이 없어 재시도 대상이 아니므로, 실제 DELETED 처리된 세션의 주문만 고른다.
  const deletedSessionIdSet = new Set(deletedSessionIds);
  const wipedOrderIds = (abandonedSessions ?? [])
    .filter((session) => deletedSessionIdSet.has(String(session.id)))
    .map((session) => session.order_id)
    .filter((orderId): orderId is string => typeof orderId === "string");
  let cleanedOrders = 0;
  if (wipedOrderIds.length) {
    const { data: updatedOrders } = await supabase
      .from("orders")
      .update({ customer_name: null, customer_email: null })
      .in("id", wipedOrderIds)
      .eq("payment_status", "UNPAID")
      .select("id");
    cleanedOrders = updatedOrders?.length ?? 0;
  }

  // 지난 레이트리밋 카운터를 정리한다(창이 이미 지난 행은 불필요). 테이블이 없어도 무시.
  const rateLimitCutoff = new Date(
    Date.now() - 2 * 24 * 60 * 60 * 1000,
  ).toISOString();
  await supabase
    .from("rate_limit_counters")
    .delete()
    .lt("window_start", rateLimitCutoff);

  return NextResponse.json({
    ok: true,
    processed: sessionIds.length,
    deleted: deletedSessionIds.length,
    deletedArtifacts,
    cleanedOrders,
    retry: retrySessionIds.size,
  });
}
