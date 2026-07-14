import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { isLocale } from "@/lib/locale";
import {
  fallbackFooterContent,
  getContentKey,
  getFallbackPolicyDocument,
  legalDocumentKinds,
  managedContentRequestSchema,
  type LegalDocumentKind,
} from "@/lib/site-content";
import { getManagedContentRow } from "@/lib/site-content-server";
import { getSupabaseAdminClient } from "@/lib/supabase";
import type { Locale } from "@/lib/services";

export const dynamic = "force-dynamic";

function isLegalDocumentKind(value: string | null): value is LegalDocumentKind {
  return legalDocumentKinds.includes(value as LegalDocumentKind);
}

export async function GET(request: NextRequest) {
  const authorization = await requireAdmin(request);
  if (!authorization.ok) {
    return NextResponse.json(
      { ok: false, error: authorization.error },
      { status: authorization.status },
    );
  }

  const kind = request.nextUrl.searchParams.get("kind");
  const locale = request.nextUrl.searchParams.get("locale");
  const isFooter = kind === "footer" && locale === "global";

  if (!isFooter && (!isLegalDocumentKind(kind) || !isLocale(locale))) {
    return NextResponse.json(
      { ok: false, error: "콘텐츠 종류 또는 언어가 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const contentKey = isFooter
    ? getContentKey("footer", "global")
    : getContentKey(kind as LegalDocumentKind, locale as Locale);
  const fallback = isFooter
    ? fallbackFooterContent
    : getFallbackPolicyDocument(kind as LegalDocumentKind);
  const result = await getManagedContentRow(contentKey);

  if (result.error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "관리 콘텐츠 테이블을 읽을 수 없습니다. Supabase 마이그레이션을 확인해 주세요.",
        details: result.error,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    contentKey,
    draft: result.data?.draft_content ?? result.data?.published_content ?? fallback,
    published: result.data?.published_content ?? null,
    draftVersion: result.data?.draft_version ?? 0,
    publishedVersion: result.data?.published_version ?? 0,
    updatedAt: result.data?.updated_at ?? null,
    publishedAt: result.data?.published_at ?? null,
  });
}

export async function PUT(request: NextRequest) {
  const authorization = await requireAdmin(request);
  if (!authorization.ok) {
    return NextResponse.json(
      { ok: false, error: authorization.error },
      { status: authorization.status },
    );
  }

  const parsed = managedContentRequestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "입력한 콘텐츠 형식을 확인해 주세요.",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const { kind, locale, content, action } = parsed.data;
  const contentKey = getContentKey(kind, locale);
  const current = await getManagedContentRow(contentKey);

  if (current.error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "관리 콘텐츠 테이블을 읽을 수 없습니다. Supabase 마이그레이션을 확인해 주세요.",
        details: current.error,
      },
      { status: 503 },
    );
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Supabase가 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  const nextDraftVersion = (current.data?.draft_version ?? 0) + 1;
  const nextPublishedVersion =
    action === "publish"
      ? (current.data?.published_version ?? 0) + 1
      : (current.data?.published_version ?? 0);
  const now = new Date().toISOString();
  const values: Record<string, unknown> = {
    content_key: contentKey,
    content_type: kind,
    locale,
    draft_content: content,
    draft_version: nextDraftVersion,
    updated_by: authorization.admin.id,
    updated_at: now,
  };

  if (action === "publish") {
    values.published_content = content;
    values.published_version = nextPublishedVersion;
    values.published_at = now;
  }

  const { error: saveError } = await supabase
    .from("site_contents")
    .upsert(values, { onConflict: "content_key" });

  if (saveError) {
    return NextResponse.json(
      { ok: false, error: "콘텐츠 저장에 실패했습니다.", details: saveError.message },
      { status: 500 },
    );
  }

  const { error: revisionError } = await supabase
    .from("site_content_revisions")
    .insert({
      content_key: contentKey,
      action,
      version:
        action === "publish" ? nextPublishedVersion : nextDraftVersion,
      content,
      changed_by: authorization.admin.id,
    });

  if (revisionError) {
    console.error("Failed to save site content revision", revisionError);
  }

  return NextResponse.json({
    ok: true,
    contentKey,
    action,
    draftVersion: nextDraftVersion,
    publishedVersion: nextPublishedVersion,
    updatedAt: now,
    revisionRecorded: !revisionError,
  });
}
