import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { isDevEnvironment } from "@naminglink/core/env";
import { sealedLegalHash } from "@/lib/locale-review-seal";
import { hashReviewDocument } from "@/lib/review-hash";
import { requireAdmin } from "@/lib/admin-auth";
import { FOOTER_CONTENT_TAG, POLICY_CONTENT_TAG } from "@/lib/site-content-server";
import { getFallbackPolicyDocument } from "@/lib/legal-content";
import { isLocale } from "@/lib/locale";
import {
  fallbackFooterContent,
  footerContentSchema,
  getContentKey,
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
    : getFallbackPolicyDocument(kind as LegalDocumentKind, locale as Locale);
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

  const rawDraft = result.data?.draft_content ?? result.data?.published_content ?? fallback;
  const rawPublished = result.data?.published_content ?? null;
  const parsedDraft = isFooter ? footerContentSchema.safeParse(rawDraft) : null;
  const parsedPublished = isFooter && rawPublished
    ? footerContentSchema.safeParse(rawPublished)
    : null;

  return NextResponse.json({
    ok: true,
    contentKey,
    draft: isFooter
      ? parsedDraft?.success
        ? parsedDraft.data
        : fallbackFooterContent
      : rawDraft,
    published: isFooter
      ? parsedPublished?.success
        ? parsedPublished.data
        : null
      : rawPublished,
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

  // 약관·푸터 회사 정보는 두 앱이 함께 읽는 **운영 콘텐츠**이고, 개발과 운영이 같은 DB를 본다.
  // 로컬에서 저장하면 운영 사이트의 약관이 그 자리에서 바뀐다. 읽기(GET)는 그대로 두고 쓰기만 막는다.
  if (isDevEnvironment()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "개발 환경에서는 사이트 콘텐츠를 저장할 수 없습니다(운영 DB를 공유합니다). " +
          "약관·회사 정보 수정은 운영 관리자 화면에서 하세요.",
      },
      { status: 403 },
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

  /**
   * **승인되지 않은 게시를 막는다** (2026-08-20, 구현 명세 §8).
   *
   * 약관 화면은 DB 게시본이 있으면 그것을 먼저 쓴다(`site-content-server.ts`). 그래서 검수를
   * 마친 로케일의 약관을 여기서 새로 게시하면, **검수 로그는 그대로인데 화면 내용만 바뀐다** —
   * 「사람이 읽어 봤다」가 아무도 읽지 않은 문장을 가리키게 된다.
   *
   * 광고 적격이 **빌드 시 상수**라 게시 직후에도 다음 배포까지 광고가 계속 나간다. 그 창의
   * 길이를 아무도 통제하지 못하므로 「게시한 뒤 검수를 무효화」가 아니라 **게시 자체를 앞에서
   * 막는다.**
   *
   * **초안 저장은 막지 않는다.** 고칠 자유는 남기고, 화면에 내보내는 것만 검수를 거치게 한다.
   * 무효화 단추는 여기 두지 않는다 — manifest 를 고쳐 배포하는 길 하나로 둔다.
   */
  const sealedHash = action === "publish" ? sealedLegalHash(locale, kind) : null;
  const incomingHash = sealedHash ? hashReviewDocument(content) : "";
  /**
   * **게시만 막고 초안은 저장한다.** 여기서 바로 돌려보내면 운영자가 고친 내용까지 사라져,
   * 관문이 「막는 장치」가 아니라 「일을 지우는 장치」가 된다. 아래 upsert 는 그대로 돌고
   * `published_*` 만 얹지 않는다.
   */
  const publishBlocked = Boolean(sealedHash) && sealedHash !== incomingHash;

  if (action === "publish" && !publishBlocked) {
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

  // 초안은 위에서 저장됐다. 게시만 거부한다(구현 명세 §8·§14).
  if (publishBlocked) {
    return NextResponse.json(
      {
        ok: false,
        error: "검수된 약관이라 승인되지 않은 내용을 게시할 수 없습니다. 초안은 저장했습니다.",
        details: [
          `locale ${locale} · ${kind} · 검수 완료 상태`,
          `현재 hash ${incomingHash} · 승인 hash ${sealedHash}`,
          "게시하려면 다시 검수한 뒤 docs/locale-review/manifest.json 을 갱신하고,",
          "`npx tsx scripts/seal-locale-review.ts` 로 봉인을 다시 만들어 배포하십시오.",
          "이 화면에는 검수를 즉석에서 무효화하는 단추를 두지 않습니다 — 그 길을 열면 게시 직후부터",
          "다음 배포까지 미검수 내용에 광고가 붙은 채로 돌게 됩니다.",
        ].join("\n"),
      },
      { status: 409 },
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

  // 푸터는 루트 레이아웃이 캐시해 두고 쓴다. 게시했는데 무효화하지 않으면 운영자에게는
  // 저장이 된 것으로 보이는데 화면에는 최대 한 시간 옛 값이 남는다.
  // Next 16의 revalidateTag는 캐시 수명 프로필을 함께 받는다. "max"는 그 태그가 붙은 항목을
  // 수명과 무관하게 전부 지운다 — 법정 표시 항목이라 늦게 반영되는 쪽이 더 나쁘다.
  if (action === "publish" && contentKey === getContentKey("footer", "global")) {
    revalidateTag(FOOTER_CONTENT_TAG, "max");
    // 정책 문서도 미리 만들어 둔 화면에 박혀 있다. 함께 무효화한다.
    revalidateTag(POLICY_CONTENT_TAG, "max");
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
