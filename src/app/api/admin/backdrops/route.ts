import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin-auth";
import { listReportBackdrops } from "@/lib/report-backdrops";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";
export const maxDuration = 30;

// 관리자 배경 이미지 관리 API.
// - GET: 전체 목록(비활성 포함)
// - POST(multipart): PNG/JPG 업로드 + 적용 기간(월 범위) 등록
// - PATCH(json): 기간·이름·활성/정렬 수정
const metaSchema = z.object({
  code: z.string().trim().regex(/^[a-z0-9-]{2,40}$/),
  name_ko: z.string().trim().min(1).max(60),
  start_month: z.coerce.number().int().min(1).max(12),
  end_month: z.coerce.number().int().min(1).max(12),
  sort_order: z.coerce.number().int().min(0).max(9999).default(0),
});

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  try {
    const backdrops = await listReportBackdrops();
    return NextResponse.json({ ok: true, backdrops });
  } catch (error) {
    console.error("Failed to list backdrops (admin)", error);
    return NextResponse.json({ ok: false, error: "배경 목록을 불러오지 못했습니다." }, { status: 500 });
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
    if (!(file instanceof File) || file.size === 0 || file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { ok: false, error: "배경 이미지(PNG/JPG, 5MB 이하)가 필요합니다." },
        { status: 400 },
      );
    }
    const parsed = metaSchema.safeParse(Object.fromEntries(form.entries()));
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "입력값이 올바르지 않습니다." },
        { status: 400 },
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    // PNG(89 50 4E 47) 또는 JPEG(FF D8 FF) 매직 넘버 검증.
    const isPng = buffer.readUInt32BE(0) === 0x89504e47;
    const isJpeg = buffer.length > 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    if (!isPng && !isJpeg) {
      return NextResponse.json({ ok: false, error: "PNG/JPG 형식이 아닙니다." }, { status: 400 });
    }
    const extension = isPng ? ".png" : ".jpg";
    const sha = createHash("sha256").update(buffer).digest("hex");
    const storagePath = `${parsed.data.code}/${sha}${extension}`;
    const { error: uploadError } = await supabase.storage
      .from("report-backdrops")
      .upload(storagePath, buffer, {
        contentType: isPng ? "image/png" : "image/jpeg",
        upsert: true,
      });
    if (uploadError) throw uploadError;

    const { data: inserted, error: insertError } = await supabase
      .from("report_backdrops")
      .insert({
        ...parsed.data,
        storage_path: storagePath,
        file_sha256: sha,
        enabled: true,
      })
      .select("id,code")
      .single();
    if (insertError) throw insertError;
    return NextResponse.json({ ok: true, backdrop: inserted });
  } catch (error) {
    console.error("Failed to create backdrop", error);
    const message = error instanceof Error ? error.message : "배경 등록에 실패했습니다.";
    const status = /duplicate key/i.test(message) ? 409 : 500;
    return NextResponse.json(
      { ok: false, error: status === 409 ? "이미 등록된 배경 코드입니다." : message },
      { status },
    );
  }
}

const patchSchema = z.object({
  id: z.string().uuid(),
  enabled: z.boolean().optional(),
  name_ko: z.string().trim().min(1).max(60).optional(),
  start_month: z.number().int().min(1).max(12).optional(),
  end_month: z.number().int().min(1).max(12).optional(),
  sort_order: z.number().int().min(0).max(9999).optional(),
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
    const { error } = await supabase
      .from("report_backdrops")
      .update({ ...changes, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update backdrop", error);
    return NextResponse.json({ ok: false, error: "배경 수정에 실패했습니다." }, { status: 500 });
  }
}
