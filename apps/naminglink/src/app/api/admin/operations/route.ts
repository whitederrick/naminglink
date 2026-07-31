import { NextRequest, NextResponse } from "next/server";
import { isAppKey, type AppKey } from "@naminglink/core/apps";
import { hasAdminRole, requireAdmin } from "@/lib/admin-auth";
import { KRW_PER_USD, summarizeAiUsage } from "@/lib/ai-pricing";
import { STAMP_MODELS, type StampModelCode } from "@/lib/goods-products";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { z } from "zod";

// 주문 목록에서 관리자가 제작·전달 내용을 바로 보도록 metadata를 요약한다.
// (도장: 새길 문구·모델, 그 외: 상품 코드)
function orderItemSummary(orderType: unknown, metadata: unknown) {
  const meta =
    metadata && typeof metadata === "object" && !Array.isArray(metadata)
      ? (metadata as Record<string, unknown>)
      : {};
  if (orderType === "STAMP_DELIVERY") {
    const modelName = STAMP_MODELS[meta.stampModel as StampModelCode]?.name;
    const parts = [meta.stampName, modelName].filter(
      (value): value is string => typeof value === "string" && value.length > 0,
    );
    return parts.join(" · ") || null;
  }
  return typeof meta.productCode === "string" ? meta.productCode : null;
}

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false, error: "데이터 저장소가 설정되지 않았습니다." }, { status: 503 });

  const view = request.nextUrl.searchParams.get("view") ?? "dashboard";
  const days = Math.max(1, Math.min(Number(request.nextUrl.searchParams.get("days") ?? 30), 365));
  // 로컬 개발이 만든 주문(is_test)은 운영 화면에서 기본적으로 감춘다. 개발·운영이 같은 DB를
  // 보기 때문이다. 확인이 필요할 때만 ?includeTest=1로 함께 본다.
  const includeTest = request.nextUrl.searchParams.get("includeTest") === "1";
  // 어느 서비스의 지표인가. **기본값은 naminglink다** — 기존 화면들은 이 인자를 보내지 않고,
  // 그 화면들은 전부 naminglink 전용이 됐다(인연링크는 별도 메뉴로 나갔다).
  const rawApp = request.nextUrl.searchParams.get("app");
  const app: AppKey = isAppKey(rawApp) ? rawApp : "naminglink";

  // 운영자 계정과 굿즈 구매 회원은 목적도 위험도 다르다(권한 부여 ↔ 개인정보 삭제 이행).
  // 같은 표에 섞어 두면 성격이 다른 조작이 나란히 놓여 실수를 부른다. 출처는 auth.users 하나이고
  // 화면만 가른다. 판정은 admin-auth의 hasAdminRole 한 곳을 쓴다(roles 배열형도 관리자다).
  if (view === "users" || view === "admins") {
    const { data, error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 200 });
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    const wantAdmins = view === "admins";
    const users = data.users.filter(
      (user) => hasAdminRole((user.app_metadata ?? {}) as Record<string, unknown>) === wantAdmins,
    );
    return NextResponse.json({ ok: true, users: users.map((user) => ({
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
    // **서비스로 가른다.** 굿즈 주문 화면은 naminglink 것만, 인연링크 메뉴는 인연링크 것만 본다.
    // 한 표에 섞어 두면 서비스별 매출을 눈으로 세야 하고, 처리 상태의 뜻도 서로 다르다
    // (도장은 배송이고 리포트는 PDF 발급이다).
    const ordersQuery = supabase.from("orders")
      .select("id,user_id,order_type,customer_name,customer_email,payment_status,payment_amount,payment_currency,fulfillment_status,provider_payment_id,created_at,updated_at,shipping_address,metadata,is_test")
      .eq("service", app);
    const { data, error } = await (includeTest ? ordersQuery : ordersQuery.eq("is_test", false))
      .order("created_at", { ascending: false }).limit(300);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, includesTest: includeTest, orders: (data ?? []).map(({ shipping_address, metadata, ...order }) => ({
      ...order,
      has_shipping_address: Boolean(shipping_address),
      item_summary: orderItemSummary(order.order_type, metadata),
    })) });
  }

  if (view === "ai") {
    const since = new Date(Date.now() - days * 86400000).toISOString();
    const { data, error } = await supabase.from("ai_usage_logs")
      .select("id,service_type,model,prompt_tokens,completion_tokens,total_tokens,latency_ms,status,error_code,created_at")
      .gte("created_at", since).order("created_at", { ascending: false }).limit(500);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    // 상세 표는 최근 500건만 보여주지만 원가 집계는 기간 전체를 봐야 한다. 집계에 필요한 열만
    // 따로 넓게 읽어 서버에서 합산하므로 응답 크기는 서비스 수만큼만 늘어난다.
    const { data: costRows } = await supabase.from("ai_usage_logs")
      .select("service_type,model,prompt_tokens,completion_tokens,total_tokens,status")
      .gte("created_at", since).limit(20000);
    return NextResponse.json({
      ok: true,
      usage: data ?? [],
      usageSummary: summarizeAiUsage(costRows ?? []),
      krwPerUsd: KRW_PER_USD,
    });
  }

  // 매출·주문 집계는 SQL 함수 안에 있어서 여기서 거를 수 없다. 같은 스위치를 함수에 넘긴다.
  const { data, error } = await supabase.rpc("admin_analytics_snapshot", {
    p_days: days,
    p_include_test: includeTest,
    p_app: app,
  });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  // 대시보드의 주문·결제 현황: 결제는 됐지만 제작·배송 처리가 끝나지 않은 주문 목록.
  // 오래 기다린 주문부터 처리하도록 주문일 오름차순으로 내려준다.
  const pendingQuery = supabase.from("orders")
    .select("id,order_type,customer_name,customer_email,payment_amount,payment_currency,fulfillment_status,created_at,is_test")
    .eq("service", app)
    .eq("payment_status", "PAID")
    .in("fulfillment_status", ["PENDING", "PROCESSING", "SHIPPED"]);
  const { data: pendingOrders, error: pendingError } = await (includeTest ? pendingQuery : pendingQuery.eq("is_test", false))
    .order("created_at", { ascending: true }).limit(300);
  if (pendingError) return NextResponse.json({ ok: false, error: pendingError.message }, { status: 500 });

  // 반대편 서비스의 요약. **대시보드에서 "저쪽은 지금 어떤가"를 한 칸으로 보여 주려는 것이다.**
  // 매출을 합쳐 버리면 서비스별 성과를 못 보고, 아예 감추면 이 콘솔이 인연링크도 관리한다는
  // 사실이 대시보드에서 사라진다. 그래서 합치지 않고 따로 붙인다.
  //
  // 실패해도 대시보드를 막지 않는다 — 이 칸 하나 때문에 화면 전체가 죽으면 안 된다.
  const otherApp: AppKey = app === "inyeonlink" ? "naminglink" : "inyeonlink";
  const { data: otherData } = await supabase.rpc("admin_analytics_snapshot", {
    p_days: days,
    p_include_test: includeTest,
    p_app: otherApp,
  });
  const otherSummary = (otherData as { summary?: Record<string, number> } | null)?.summary ?? null;

  return NextResponse.json({
    ok: true,
    includesTest: includeTest,
    app,
    snapshot: data,
    pendingOrders: pendingOrders ?? [],
    other: otherSummary ? { app: otherApp, summary: otherSummary } : null,
  });
}

const actionSchema = z.discriminatedUnion("action", [
  z.object({ action: z.enum(["DISABLE_USER", "ENABLE_USER"]), userId: z.string().uuid() }),
  z.object({ action: z.literal("DELETE_USER"), userId: z.string().uuid() }),
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

  // 개인정보처리방침이 정한 삭제 요청 이행 수단(이메일 접수 → 본인 확인 → 관리자 처리).
  // auth 사용자를 지우면 저장한 작명 결과(naming_logs)는 cascade로 함께 삭제되고, 주문의 user_id는
  // set null이 되어 법정 보관 대상인 거래기록만 회원 연결 없이 남는다.
  if (parsed.data.action === "DELETE_USER") {
    if (parsed.data.userId === auth.admin.id) {
      return NextResponse.json({ ok: false, error: "현재 로그인한 관리자 계정은 삭제할 수 없습니다." }, { status: 400 });
    }
    // 삭제는 회원의 개인정보 삭제 요청을 이행하는 수단이다. 운영자 계정에는 그 근거가 없고,
    // 실수로 지우면 콘솔 접근 권한이 사라진다. 화면에서 버튼을 감추는 것과 별개로 서버가 막는다.
    const { data: target } = await supabase.auth.admin.getUserById(parsed.data.userId);
    if (target?.user && hasAdminRole((target.user.app_metadata ?? {}) as Record<string, unknown>)) {
      return NextResponse.json(
        { ok: false, error: "운영자 계정은 삭제할 수 없습니다. 권한을 먼저 해제하세요." },
        { status: 400 },
      );
    }
    const { error } = await supabase.auth.admin.deleteUser(parsed.data.userId);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    // 처리 이력은 식별자만 남긴다 — 이메일을 로그에 남기면 그 자체가 파기하지 못한 개인정보가 된다.
    console.info("Admin deleted user account", {
      userId: parsed.data.userId,
      by: auth.admin.id,
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  }

  if (!("orderId" in parsed.data)) return NextResponse.json({ ok: false }, { status: 400 });
  const { error } = await supabase.from("orders").update({ fulfillment_status: parsed.data.fulfillmentStatus, updated_at: new Date().toISOString() }).eq("id", parsed.data.orderId);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
