import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin-auth";
import { renderFontPreviewSvg } from "@/lib/font-preview";
import {
  listReportFonts,
  translateFontStory,
} from "@/lib/report-fonts-registry";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";
export const maxDuration = 60;

// 관리자 서체 관리 API.
// - GET: 전체 목록(비활성 포함)
// - POST(multipart): 폰트 파일 업로드 + 메타데이터 등록. 스토리는 등록 시 23로케일로 번역해 저장.
// - PATCH(json): 활성/정렬/메타 수정. story_ko 수정 시 번역 재생성.
const metaSchema = z.object({
  code: z.string().trim().regex(/^[a-z0-9-]{2,40}$/),
  name_ko: z.string().trim().min(1).max(60),
  name_en: z.string().trim().min(1).max(80),
  copyright_holder: z.string().trim().min(1).max(120),
  license_type: z.enum(["OFL", "KOGL-1", "KOGL-3", "FREE-EMBED"]),
  source_url: z.string().trim().url().max(300),
  story_ko: z.string().trim().min(10).max(1000),
  sort_order: z.coerce.number().int().min(0).max(9999).default(0),
});

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  try {
    const fonts = await listReportFonts();
    return NextResponse.json({ ok: true, fonts });
  } catch (error) {
    console.error("Failed to list fonts (admin)", error);
    return NextResponse.json({ ok: false, error: "서체 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "저장소가 설정되지 않았습니다." }, { status: 503 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File) || file.size === 0 || file.size > 20 * 1024 * 1024) {
      return NextResponse.json({ ok: false, error: "폰트 파일(TTF/OTF, 20MB 이하)이 필요합니다." }, { status: 400 });
    }
    const extension = file.name.toLowerCase().endsWith(".otf") ? ".otf" : ".ttf";
    const parsed = metaSchema.safeParse(Object.fromEntries(form.entries()));
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다." },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    // TTF/OTF sfnt 매직 넘버 검증(0x00010000 · 'OTTO' · 'true').
    const magic = buffer.subarray(0, 4).toString("latin1");
    const isSfnt =
      buffer.readUInt32BE(0) === 0x00010000 || magic === "OTTO" || magic === "true";
    if (!isSfnt) {
      return NextResponse.json({ ok: false, error: "TTF/OTF 형식이 아닙니다." }, { status: 400 });
    }

    const sha = createHash("sha256").update(buffer).digest("hex");
    const storagePath = `${parsed.data.code}/${sha}${extension}`;
    const { error: uploadError } = await supabase.storage
      .from("report-fonts")
      .upload(storagePath, buffer, {
        contentType: "application/octet-stream",
        upsert: true,
      });
    if (uploadError) throw uploadError;

    // 미리보기 SVG 자동 생성(best-effort): 실패해도 등록은 진행하고 preview 없이 노출된다.
    let previewPath: string | null = null;
    try {
      const svg = renderFontPreviewSvg(buffer);
      previewPath = `${parsed.data.code}/preview.svg`;
      const { error: previewError } = await supabase.storage
        .from("font-previews")
        .upload(previewPath, Buffer.from(svg, "utf8"), {
          contentType: "image/svg+xml",
          upsert: true,
        });
      if (previewError) throw previewError;
    } catch (previewError) {
      console.error("Failed to generate font preview", previewError);
      previewPath = null;
    }

    const stories = await translateFontStory(parsed.data.story_ko);
    const { data: inserted, error: insertError } = await supabase
      .from("report_fonts")
      .insert({
        ...parsed.data,
        stories,
        storage_path: storagePath,
        file_sha256: sha,
        preview_path: previewPath,
        enabled: true,
      })
      .select("id,code")
      .single();
    if (insertError) throw insertError;
    return NextResponse.json({ ok: true, font: inserted, translatedLocales: Object.keys(stories).length });
  } catch (error) {
    console.error("Failed to create font", error);
    const message = error instanceof Error ? error.message : "서체 등록에 실패했습니다.";
    const status = /duplicate key/i.test(message) ? 409 : 500;
    return NextResponse.json(
      { ok: false, error: status === 409 ? "이미 등록된 서체 코드입니다." : message },
      { status },
    );
  }
}

const patchSchema = z.object({
  id: z.string().uuid(),
  enabled: z.boolean().optional(),
  sort_order: z.number().int().min(0).max(9999).optional(),
  name_ko: z.string().trim().min(1).max(60).optional(),
  name_en: z.string().trim().min(1).max(80).optional(),
  copyright_holder: z.string().trim().min(1).max(120).optional(),
  license_type: z.enum(["OFL", "KOGL-1", "KOGL-3", "FREE-EMBED"]).optional(),
  source_url: z.string().trim().url().max(300).optional(),
  story_ko: z.string().trim().min(10).max(1000).optional(),
});

export async function PATCH(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "저장소가 설정되지 않았습니다." }, { status: 503 });
  }
  const parsed = patchSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "입력값이 올바르지 않습니다." }, { status: 400 });
  }
  try {
    const { id, ...changes } = parsed.data;
    const update: Record<string, unknown> = { ...changes, updated_at: new Date().toISOString() };
    if (typeof changes.story_ko === "string") {
      update.stories = await translateFontStory(changes.story_ko);
    }
    const { error } = await supabase.from("report_fonts").update(update).eq("id", id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update font", error);
    return NextResponse.json({ ok: false, error: "서체 수정에 실패했습니다." }, { status: 500 });
  }
}
