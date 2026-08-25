import { NextRequest, NextResponse } from "next/server";
import { APP_KEYS, isAppKey, type AppKey } from "@naminglink/core/apps";
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

  /**
   * **통합 대시보드: 모든 서비스를 한 번에 내려준다.**
   *
   * 서비스별 화면이 따로 있어도 "전부 합치면 얼마인가 · 어느 쪽이 크는가"는 나란히 놓고 봐야
   * 보인다. 합계를 서버에서 만들지 않고 서비스별 요약을 그대로 보내는 이유는, 화면이 합계와
   * 개별을 함께 보여 주기 때문이다 — 합계만 보내면 어느 서비스가 그 숫자를 만들었는지 잃는다.
   *
   * 원가·마진은 여기 없다. 결제 수수료와 인프라 청구서가 아직 없어 **검증할 방법이 없기**
   * 때문이다. 그럴듯한 마진을 먼저 그리는 것이 가장 위험하다 — 틀려도 티가 안 난다.
   */
  if (view === "portfolio") {
    const services = (
      await Promise.all(
        APP_KEYS.map(async (key) => {
          const { data: snap, error: snapError } = await supabase.rpc(
            "admin_analytics_snapshot",
            { p_days: days, p_include_test: includeTest, p_app: key },
          );
          if (snapError) return null;
          const summary = (snap as { summary?: Record<string, number> } | null)?.summary;
          return summary ? { app: key, summary } : null;
        }),
      )
    ).filter((row): row is { app: AppKey; summary: Record<string, number> } => row !== null);

    // 하나도 못 읽었으면 빈 표 대신 오류다. 빈 표는 "전부 0"으로 읽힌다.
    if (!services.length) {
      return NextResponse.json(
        { ok: false, error: "서비스 지표를 하나도 읽지 못했습니다." },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true, includesTest: includeTest, days, services });
  }

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

  // 신고 채널(관측망). docs/LOCALE_AD_STRATEGY_2026-08-21.md §3.5 ⑤·§4.5 — 미처리 건수·
  // 최장 미처리 일수는 화면에서 이 목록으로부터 계산한다(주문 화면이 orders로 그러듯).
  // **이 건수로 광고를 자동 차단하지 않는다** — 판정은 사람의 일로 남는다.
  // 네 앱이 이 표를 공유한다(2026-08-25 형제 셋 이식) — service 로 어느 앱의 신고인지 가른다.
  // app 파라미터로 거르지 않는다: 신고는 주문처럼 서비스별로 격리해야 할 매출 데이터가
  // 아니라 관측망이라, 한 화면에서 전부 보고 서비스 칸으로 걸러 보는 쪽이 운영에 더 맞다.
  if (view === "reports") {
    const { data, error } = await supabase.from("locale_reports")
      .select("id,service,url,message,locale,status,created_at,updated_at")
      .order("created_at", { ascending: false }).limit(500);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    const reports = data ?? [];
    // 여기서 계산해 내려준다 — 화면(React 컴포넌트)에서 Date.now()를 직접 부르면 렌더 순수성
    // 규칙에 걸린다. 서버 라우트 핸들러는 렌더가 아니라 문제 없다.
    const openReports = reports.filter((report) => report.status === "open");
    const oldestOpenMs = openReports.length
      ? Math.min(...openReports.map((report) => new Date(report.created_at).getTime()))
      : null;
    return NextResponse.json({
      ok: true,
      reports,
      pendingCount: openReports.length,
      oldestPendingDays: oldestOpenMs ? Math.floor((Date.now() - oldestOpenMs) / 86400000) : 0,
    });
  }

  if (view === "ai") {
    const since = new Date(Date.now() - days * 86400000).toISOString();
    // **서비스로 거른다.** 예전에는 거르지 않아 이 화면이 모든 서비스의 AI 원가를 합쳐
    // 보여 줬다. 지금까지는 naminglink만 모델을 써서 티가 나지 않았지만, 사주링크가 유료
    // 리포트를 팔기 시작하면 그 원가가 조용히 여기 섞인다 — 숫자가 그럴듯해서 아무도 눈치채지
    // 못하는 종류다(2026-08-06에 지표 RPC에서 같은 결함을 고쳤다).
    const { data, error } = await supabase.from("ai_usage_logs")
      .select("id,service_type,model,prompt_tokens,completion_tokens,total_tokens,latency_ms,status,error_code,created_at")
      .eq("app", app)
      .gte("created_at", since).order("created_at", { ascending: false }).limit(500);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    // 상세 표는 최근 500건만 보여주지만 원가 집계는 기간 전체를 봐야 한다. 집계에 필요한 열만
    // 따로 넓게 읽어 서버에서 합산하므로 응답 크기는 서비스 수만큼만 늘어난다.
    const { data: costRows } = await supabase.from("ai_usage_logs")
      .select("service_type,model,prompt_tokens,completion_tokens,total_tokens,status")
      .eq("app", app)
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

  // 다른 서비스들의 요약. **대시보드에서 "저쪽은 지금 어떤가"를 한 칸으로 보여 주려는 것이다.**
  // 매출을 합쳐 버리면 서비스별 성과를 못 보고, 아예 감추면 이 콘솔이 형제 서비스도 관리한다는
  // 사실이 대시보드에서 사라진다. 그래서 합치지 않고 따로 붙인다.
  //
  // **예전에는 이것이 이분법이었다**(`inyeonlink면 naminglink, 아니면 inyeonlink`). 서비스가
  // 셋이 되자 사주링크 대시보드에서 "저쪽"이 인연링크로 떴다 — 틀린 값은 아니지만 왜 그 서비스가
  // 나오는지 설명할 수 없는 자리였다. 이제 자기 자신만 빼고 전부 붙인다(2026-08-06).
  //
  // 실패해도 대시보드를 막지 않는다 — 이 칸 하나 때문에 화면 전체가 죽으면 안 된다.
  const others = (
    await Promise.all(
      APP_KEYS.filter((key) => key !== app).map(async (key) => {
        const { data: otherData } = await supabase.rpc("admin_analytics_snapshot", {
          p_days: days,
          p_include_test: includeTest,
          p_app: key,
        });
        const summary = (otherData as { summary?: Record<string, number> } | null)?.summary;
        return summary ? { app: key, summary } : null;
      }),
    )
  ).filter((row): row is { app: AppKey; summary: Record<string, number> } => row !== null);

  return NextResponse.json({
    ok: true,
    includesTest: includeTest,
    app,
    snapshot: data,
    pendingOrders: pendingOrders ?? [],
    others,
  });
}

const actionSchema = z.discriminatedUnion("action", [
  z.object({ action: z.enum(["DISABLE_USER", "ENABLE_USER"]), userId: z.string().uuid() }),
  z.object({ action: z.literal("DELETE_USER"), userId: z.string().uuid() }),
  z.object({ action: z.literal("UPDATE_ORDER"), orderId: z.string().uuid(), fulfillmentStatus: z.enum(["PENDING", "PROCESSING", "SHIPPED", "COMPLETED", "CANCELLED"]) }),
  z.object({ action: z.literal("UPDATE_REPORT_STATUS"), reportId: z.string().uuid(), status: z.enum(["open", "rejected", "duplicate", "resolved"]) }),
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

  if (parsed.data.action === "UPDATE_REPORT_STATUS") {
    const { error } = await supabase.from("locale_reports")
      .update({ status: parsed.data.status, updated_at: new Date().toISOString() })
      .eq("id", parsed.data.reportId);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (!("orderId" in parsed.data)) return NextResponse.json({ ok: false }, { status: 400 });
  const { error } = await supabase.from("orders").update({ fulfillment_status: parsed.data.fulfillmentStatus, updated_at: new Date().toISOString() }).eq("id", parsed.data.orderId);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
