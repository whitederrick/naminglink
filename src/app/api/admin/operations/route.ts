import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { z } from "zod";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false, error: "데이터 저장소가 설정되지 않았습니다." }, { status: 503 });

  const view = request.nextUrl.searchParams.get("view") ?? "dashboard";
  const days = Math.max(1, Math.min(Number(request.nextUrl.searchParams.get("days") ?? 30), 365));

  if (view === "users") {
    const { data, error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 200 });
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, users: data.users.map((user) => ({
      id: user.id,
      email: user.email ?? null,
      role: user.app_metadata?.role ?? "member",
      createdAt: user.created_at,
      lastSignInAt: user.last_sign_in_at ?? null,
      confirmedAt: user.email_confirmed_at ?? null,
      disabled: Boolean(user.banned_until && new Date(user.banned_until) > new Date()),
    })) });
  }

  if (view === "orders") {
    const { data, error } = await supabase.from("orders")
      .select("id,user_id,order_type,customer_name,customer_email,payment_status,payment_amount,payment_currency,fulfillment_status,provider_payment_id,created_at,updated_at,shipping_address")
      .order("created_at", { ascending: false }).limit(300);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, orders: (data ?? []).map(({ shipping_address, ...order }) => ({ ...order, has_shipping_address: Boolean(shipping_address) })) });
  }

  if (view === "ai") {
    const since = new Date(Date.now() - days * 86400000).toISOString();
    const { data, error } = await supabase.from("ai_usage_logs")
      .select("id,service_type,model,prompt_tokens,completion_tokens,total_tokens,latency_ms,status,error_code,created_at")
      .gte("created_at", since).order("created_at", { ascending: false }).limit(500);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, usage: data ?? [] });
  }

  const { data, error } = await supabase.rpc("admin_analytics_snapshot", { p_days: days });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  // 대시보드의 주문·결제 현황: 결제는 됐지만 제작·배송 처리가 끝나지 않은 주문 목록.
  // 오래 기다린 주문부터 처리하도록 주문일 오름차순으로 내려준다.
  const { data: pendingOrders, error: pendingError } = await supabase.from("orders")
    .select("id,order_type,customer_name,customer_email,payment_amount,payment_currency,fulfillment_status,created_at")
    .eq("payment_status", "PAID")
    .in("fulfillment_status", ["PENDING", "PROCESSING", "SHIPPED"])
    .order("created_at", { ascending: true }).limit(300);
  if (pendingError) return NextResponse.json({ ok: false, error: pendingError.message }, { status: 500 });
  return NextResponse.json({ ok: true, snapshot: data, pendingOrders: pendingOrders ?? [] });
}

const actionSchema = z.discriminatedUnion("action", [
  z.object({ action: z.enum(["DISABLE_USER", "ENABLE_USER"]), userId: z.string().uuid() }),
  z.object({ action: z.literal("UPDATE_ORDER"), orderId: z.string().uuid(), fulfillmentStatus: z.enum(["PENDING", "PROCESSING", "SHIPPED", "COMPLETED", "CANCELLED"]) }),
]);

export async function PATCH(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const parsed = actionSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "잘못된 관리 요청입니다." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });

  if (parsed.data.action === "DISABLE_USER" || parsed.data.action === "ENABLE_USER") {
    if (parsed.data.userId === auth.admin.id) return NextResponse.json({ ok: false, error: "현재 로그인한 관리자 계정은 비활성화할 수 없습니다." }, { status: 400 });
    const { error } = await supabase.auth.admin.updateUserById(parsed.data.userId, { ban_duration: parsed.data.action === "DISABLE_USER" ? "876000h" : "none" });
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (!("orderId" in parsed.data)) return NextResponse.json({ ok: false }, { status: 400 });
  const { error } = await supabase.from("orders").update({ fulfillment_status: parsed.data.fulfillmentStatus, updated_at: new Date().toISOString() }).eq("id", parsed.data.orderId);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
