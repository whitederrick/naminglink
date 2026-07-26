import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-auth";
import { OFFICIAL_HANJA_RULES } from "@/lib/hanja";
import {
  extractOfficialHanjaPdf,
  extractReferencePdfText,
} from "@/lib/official-hanja-pdf";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const MAX_PDF_BYTES = 30 * 1024 * 1024;

function chunks<T>(items: T[], size = 500) {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

async function requireContext(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return { response: NextResponse.json({ ok: false, error: auth.error }, { status: auth.status }) };
  const supabase = getSupabaseAdminClient();
  if (!supabase) return { response: NextResponse.json({ ok: false, error: "Supabase가 설정되지 않았습니다." }, { status: 503 }) };
  return { auth, supabase };
}

export async function GET(request: NextRequest) {
  const context = await requireContext(request);
  if ("response" in context) return context.response;
  const { supabase } = context;
  const syllable = request.nextUrl.searchParams.get("syllable")?.trim() ?? "";
  const reviewStatus = request.nextUrl.searchParams.get("status")?.trim() ?? "";

  const { data: sources, error: sourceError } = await supabase
    .from("official_hanja_sources")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);
  if (sourceError) return NextResponse.json({ ok: false, error: sourceError.message }, { status: 500 });

  const activeSource = sources?.find((source) => source.status === "production") ?? sources?.[0] ?? null;
  let entryQuery = supabase
    .from("official_hanja_entries")
    .select("id,source_id,hangul_syllable,hanja,designated_reading,meaning_ko,table_section,page_number,is_name_usable,review_status,notes,updated_at")
    .order("hangul_syllable")
    .order("hanja")
    .limit(200);
  if (activeSource) entryQuery = entryQuery.eq("source_id", activeSource.id);
  if (syllable) entryQuery = entryQuery.eq("hangul_syllable", syllable);
  if (reviewStatus) entryQuery = entryQuery.eq("review_status", reviewStatus);
  const { data: entries, error: entryError } = await entryQuery;
  if (entryError) return NextResponse.json({ ok: false, error: entryError.message }, { status: 500 });

  const statuses = ["ocr", "reviewed", "production", "rejected"] as const;
  const statusCounts: Record<string, number> = {};
  if (activeSource) {
    await Promise.all(statuses.map(async (status) => {
      const { count } = await supabase
        .from("official_hanja_entries")
        .select("id", { count: "exact", head: true })
        .eq("source_id", activeSource.id)
        .eq("review_status", status);
      statusCounts[status] = count ?? 0;
    }));
  }

  const { data: pronunciationSources, error: pronunciationError } = await supabase
    .from("official_pronunciation_sources")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);
  if (pronunciationError) return NextResponse.json({ ok: false, error: pronunciationError.message }, { status: 500 });

  return NextResponse.json({
    ok: true,
    sources: sources ?? [],
    activeSource,
    entries: entries ?? [],
    statusCounts,
    pronunciationSources: pronunciationSources ?? [],
  });
}

export async function POST(request: NextRequest) {
  const context = await requireContext(request);
  if ("response" in context) return context.response;
  const { supabase } = context;
  const formData = await request.formData();
  const file = formData.get("file");
  const documentType = String(formData.get("documentType") ?? "HANJA");
  const sourceKey = String(formData.get("sourceKey") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();

  if (!(file instanceof File) || file.type !== "application/pdf") {
    return NextResponse.json({ ok: false, error: "PDF 파일을 선택해 주세요." }, { status: 400 });
  }
  if (!sourceKey || !title) {
    return NextResponse.json({ ok: false, error: "원본 키와 문서명을 입력해 주세요." }, { status: 400 });
  }
  // sourceKey는 스토리지 경로에 들어가므로 경로 이탈 문자를 막고 화이트리스트만 허용한다.
  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(sourceKey)) {
    return NextResponse.json({ ok: false, error: "원본 키는 영문·숫자·하이픈·밑줄만 사용할 수 있습니다." }, { status: 400 });
  }
  if (file.size > MAX_PDF_BYTES) {
    return NextResponse.json({ ok: false, error: "PDF는 30MB 이하만 업로드할 수 있습니다." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  // 파일명은 사용자 입력이므로 경로에 그대로 쓰지 않고 서버에서 안전한 이름을 생성한다.
  const safeDocumentType = /^[a-zA-Z0-9_-]{1,32}$/.test(documentType) ? documentType.toLowerCase() : "hanja";
  const filePath = `${safeDocumentType}/${sourceKey}/${randomUUID()}.pdf`;
  const { error: uploadError } = await supabase.storage
    .from("official-hanja")
    .upload(filePath, buffer, { contentType: "application/pdf", upsert: true });
  if (uploadError) return NextResponse.json({ ok: false, error: uploadError.message }, { status: 500 });

  if (documentType === "ROMANIZATION") {
    const extracted = await extractReferencePdfText(buffer);
    const { data: source, error } = await supabase
      .from("official_pronunciation_sources")
      .upsert({
        source_key: sourceKey,
        title,
        publisher: String(formData.get("publisher") ?? "국립국어원"),
        source_file_name: file.name,
        source_file_path: filePath,
        source_sha256: extracted.sha256,
        page_count: extracted.pageCount,
        extraction_status: extracted.extractionStatus,
        metadata: { extractedChunkCount: extracted.chunks.length },
        updated_at: new Date().toISOString(),
      }, { onConflict: "source_key" })
      .select("id")
      .single();
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

    await supabase.from("official_pronunciation_chunks").delete().eq("source_id", source.id);
    for (const batch of chunks(extracted.chunks.map((chunk) => ({
      source_id: source.id,
      page_number: chunk.page,
      content: chunk.content,
      review_status: "ocr",
      metadata: { extraction: "pdfjs_text_layer" },
    })))) {
      const { error: chunkError } = await supabase.from("official_pronunciation_chunks").insert(batch);
      if (chunkError) return NextResponse.json({ ok: false, error: chunkError.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, documentType, pageCount: extracted.pageCount, chunks: extracted.chunks.length, extractionStatus: extracted.extractionStatus });
  }

  const extracted = await extractOfficialHanjaPdf(buffer);
  const { data: source, error: sourceError } = await supabase
    .from("official_hanja_sources")
    .upsert({
      source_key: sourceKey,
      title,
      publisher: String(formData.get("publisher") ?? "대한민국 법원"),
      rule_reference: String(formData.get("ruleReference") ?? "가족관계의 등록 등에 관한 규칙 제37조"),
      version_label: String(formData.get("versionLabel") ?? ""),
      effective_date: String(formData.get("effectiveDate") ?? "") || null,
      source_file_name: file.name,
      source_file_path: filePath,
      source_sha256: extracted.sha256,
      status: "draft",
      metadata: {
        pageCount: extracted.pageCount,
        extractedEntryCount: extracted.entries.length,
        extractedVariantCount: extracted.variants.length,
        extractionStatus: extracted.entries.length ? "ocr" : "needs_ocr",
        pageStats: extracted.pageStats,
      },
      updated_at: new Date().toISOString(),
    }, { onConflict: "source_key" })
    .select("id")
    .single();
  if (sourceError) return NextResponse.json({ ok: false, error: sourceError.message }, { status: 500 });

  await Promise.all([
    supabase.from("official_hanja_entries").delete().eq("source_id", source.id),
    supabase.from("official_hanja_variants").delete().eq("source_id", source.id),
  ]);

  for (const batch of chunks(extracted.entries.map((entry) => ({
    source_id: source.id,
    hangul_syllable: entry.hangul,
    hanja: entry.hanja,
    designated_reading: entry.reading,
    meaning_ko: null,
    table_section: entry.section,
    page_number: entry.page,
    review_status: entry.reviewStatus,
    metadata: entry.metadata,
  })))) {
    const { error } = await supabase.from("official_hanja_entries").insert(batch);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  for (const batch of chunks(extracted.variants.map((variant) => ({
    source_id: source.id,
    base_hanja: variant.baseHanja,
    variant_hanja: variant.variantHanja,
    variant_type: variant.variantType,
    metadata: { page: variant.page },
  })))) {
    const { error } = await supabase.from("official_hanja_variants").insert(batch);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  const rules = OFFICIAL_HANJA_RULES.map((rule, index) => ({
    source_id: source.id,
    rule_code: rule.code,
    description: rule.description,
    sort_order: index + 1,
    is_active: true,
  }));
  const { error: ruleError } = await supabase.from("official_hanja_rules").upsert(rules, { onConflict: "source_id,rule_code" });
  if (ruleError) return NextResponse.json({ ok: false, error: ruleError.message }, { status: 500 });

  return NextResponse.json({
    ok: true,
    documentType,
    pageCount: extracted.pageCount,
    entries: extracted.entries.length,
    variants: extracted.variants.length,
    extractionStatus: extracted.entries.length ? "ocr" : "needs_ocr",
  });
}

const patchSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("UPDATE_ENTRY"),
    entryId: z.string().uuid(),
    meaningKo: z.string().max(300).nullable(),
    notes: z.string().max(1000).nullable(),
    reviewStatus: z.enum(["ocr", "reviewed", "production", "rejected"]),
    isNameUsable: z.boolean(),
  }),
  z.object({ action: z.literal("PUBLISH_SOURCE"), sourceId: z.string().uuid() }),
]);

export async function PATCH(request: NextRequest) {
  const context = await requireContext(request);
  if ("response" in context) return context.response;
  const { supabase } = context;
  const parsed = patchSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ ok: false, error: "변경 요청 형식이 올바르지 않습니다." }, { status: 400 });

  if (parsed.data.action === "UPDATE_ENTRY") {
    const { error } = await supabase
      .from("official_hanja_entries")
      .update({
        meaning_ko: parsed.data.meaningKo,
        notes: parsed.data.notes,
        review_status: parsed.data.reviewStatus,
        is_name_usable: parsed.data.isNameUsable,
        updated_at: new Date().toISOString(),
      })
      .eq("id", parsed.data.entryId);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  const { count } = await supabase
    .from("official_hanja_entries")
    .select("id", { count: "exact", head: true })
    .eq("source_id", parsed.data.sourceId)
    .eq("review_status", "production")
    .eq("is_name_usable", true);
  if (!count) return NextResponse.json({ ok: false, error: "운영 승인된 한자가 한 개 이상 있어야 원본을 배포할 수 있습니다." }, { status: 400 });

  await supabase.from("official_hanja_sources").update({ status: "archived", updated_at: new Date().toISOString() }).eq("status", "production");
  const { error } = await supabase.from("official_hanja_sources").update({ status: "production", updated_at: new Date().toISOString() }).eq("id", parsed.data.sourceId);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
