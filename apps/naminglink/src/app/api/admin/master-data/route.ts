import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-auth";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { countryOptions, localeLabels, serviceList } from "@/lib/services";

export const runtime = "nodejs";

const categorySchema = z.enum([
  "COUNTRY_LANGUAGE",
  "NAME_PRONUNCIATION",
  "HANJA",
  "AI_SERVICE",
  "PRODUCT_PRICING",
  "PAYMENT_SHIPPING",
  "AD_SLOT",
  "TRANSLATION_COPY",
  "SYSTEM_SETTING",
]);

const recordSchema = z.object({
  category: categorySchema,
  recordKey: z.string().trim().min(1).max(100).regex(/^[A-Za-z0-9._-]+$/),
  label: z.string().trim().min(1).max(200),
  data: z.record(z.string(), z.unknown()),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().min(-100000).max(100000).default(0),
});

function validPayloadSize(data: unknown) {
  return JSON.stringify(data).length <= 100_000;
}

async function saveRevision(input: {
  recordId: string;
  category: string;
  recordKey: string;
  action: "CREATE" | "UPDATE" | "DEACTIVATE" | "ACTIVATE";
  snapshot: unknown;
  adminId: string;
}) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) return;
  const { error } = await supabase.from("master_data_revisions").insert({
    record_id: input.recordId,
    category: input.category,
    record_key: input.recordKey,
    action: input.action,
    snapshot: input.snapshot,
    changed_by: input.adminId,
  });
  if (error) console.error("Failed to save master data revision", error);
}

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });

  const recordId = request.nextUrl.searchParams.get("recordId");
  if (recordId) {
    const { data, error } = await supabase.from("master_data_revisions")
      .select("id,action,snapshot,changed_at,changed_by")
      .eq("record_id", recordId).order("changed_at", { ascending: false }).limit(50);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, revisions: data ?? [] });
  }

  const parsedCategory = categorySchema.safeParse(request.nextUrl.searchParams.get("category"));
  if (!parsedCategory.success) return NextResponse.json({ ok: false, error: "기준 데이터 종류가 필요합니다." }, { status: 400 });
  const { data, error } = await supabase.from("master_data_records")
    .select("id,category,record_key,label,data,is_active,sort_order,updated_at,updated_by")
    .eq("category", parsedCategory.data)
    .order("is_active", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("label", { ascending: true });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, records: data ?? [] });
}

export async function POST(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const parsed = recordSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success || !validPayloadSize(parsed.data?.data)) return NextResponse.json({ ok: false, error: "입력값 또는 데이터 크기를 확인하십시오." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { data, error } = await supabase.from("master_data_records").insert({
    category: parsed.data.category,
    record_key: parsed.data.recordKey,
    label: parsed.data.label,
    data: parsed.data.data,
    is_active: parsed.data.isActive,
    sort_order: parsed.data.sortOrder,
    updated_by: auth.admin.id,
  }).select().single();
  if (error) return NextResponse.json({ ok: false, error: error.code === "23505" ? "같은 종류에 동일한 키가 이미 있습니다." : error.message }, { status: 409 });
  await saveRevision({ recordId: data.id, category: data.category, recordKey: data.record_key, action: "CREATE", snapshot: data, adminId: auth.admin.id });
  return NextResponse.json({ ok: true, record: data }, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const body = await request.json().catch(() => null);
  const parsed = recordSchema.extend({ id: z.string().uuid() }).safeParse(body);
  if (!parsed.success || !validPayloadSize(parsed.data?.data)) return NextResponse.json({ ok: false, error: "입력값을 확인하십시오." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { data: previous } = await supabase.from("master_data_records").select("is_active").eq("id", parsed.data.id).single();
  const { data, error } = await supabase.from("master_data_records").update({
    category: parsed.data.category,
    record_key: parsed.data.recordKey,
    label: parsed.data.label,
    data: parsed.data.data,
    is_active: parsed.data.isActive,
    sort_order: parsed.data.sortOrder,
    updated_by: auth.admin.id,
    updated_at: new Date().toISOString(),
  }).eq("id", parsed.data.id).select().single();
  if (error) return NextResponse.json({ ok: false, error: error.code === "23505" ? "같은 종류에 동일한 키가 이미 있습니다." : error.message }, { status: 409 });
  const action = previous?.is_active !== data.is_active ? (data.is_active ? "ACTIVATE" : "DEACTIVATE") : "UPDATE";
  await saveRevision({ recordId: data.id, category: data.category, recordKey: data.record_key, action, snapshot: data, adminId: auth.admin.id });
  return NextResponse.json({ ok: true, record: data });
}

export async function PUT(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const parsed = z.object({ category: categorySchema }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "종류를 확인하십시오." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });

  const category = parsed.data.category;
  const defaults: Array<{ record_key: string; label: string; data: Record<string, unknown>; sort_order: number }> = [];
  if (category === "COUNTRY_LANGUAGE") {
    countryOptions.forEach((country, index) => defaults.push({ record_key: country.value, label: country.label, data: { ...country }, sort_order: index }));
  } else if (category === "AI_SERVICE") {
    serviceList.forEach((service, index) => defaults.push({ record_key: service.serviceType, label: service.title, data: { serviceType: service.serviceType, serviceSlug: service.slug, model: process.env.OPENAI_MODEL ?? "gpt-4o-mini", promptVersion: 1, candidateCount: 3, dailyLimit: Number(process.env.FREE_DAILY_LIMIT ?? 20) }, sort_order: index }));
  } else if (category === "PRODUCT_PRICING") {
    ["PREMIUM_PDF", "CALLIGRAPHY_IMAGE", "STAMP_DELIVERY"].forEach((key, index) => defaults.push({ record_key: key, label: key, data: { productType: key, currency: "KRW", amount: 0, countries: [], options: [], saleEnabled: false }, sort_order: index }));
  } else if (category === "AD_SLOT") {
    [["analysis_wait", "분석 대기 광고"], ["candidate_unlock", "후보 해제 광고"]].forEach(([key, label], index) => defaults.push({ record_key: key, label, data: { slotKey: key, provider: "placeholder", rewardSeconds: 5, countries: [], enabled: true }, sort_order: index }));
  } else if (category === "TRANSLATION_COPY") {
    Object.entries(localeLabels).forEach(([locale, label], index) => defaults.push({ record_key: `locale.${locale}`, label, data: { locale, label, published: true }, sort_order: index }));
  } else if (category === "SYSTEM_SETTING") {
    defaults.push({ record_key: "free_daily_limit", label: "비회원 일일 무료 분석 한도", data: { value: Number(process.env.FREE_DAILY_LIMIT ?? 20), description: "일 단위 익명 방문자 기준" }, sort_order: 0 });
  }

  if (!defaults.length) return NextResponse.json({ ok: false, error: "이 종류는 검수된 기본 데이터가 없어 직접 등록해야 합니다." }, { status: 400 });
  const rows = defaults.map((item) => ({ ...item, category, is_active: true, updated_by: auth.admin.id, updated_at: new Date().toISOString() }));
  const { data, error } = await supabase.from("master_data_records").upsert(rows, { onConflict: "category,record_key", ignoreDuplicates: true }).select();
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  for (const record of data ?? []) await saveRevision({ recordId: record.id, category: record.category, recordKey: record.record_key, action: "CREATE", snapshot: record, adminId: auth.admin.id });
  return NextResponse.json({ ok: true, count: data?.length ?? 0 });
}
