import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { STAMP_MODELS, type StampModelCode } from "@/lib/goods-products";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 주문 하나의 배송·연락 정보를 내려준다.
//
// **주문 목록(`/api/admin/operations`)은 이 값을 일부러 빼고 `has_shipping_address` 불리언만
// 보낸다.** 목록 한 번 열었다고 전 주문의 주소·연락처가 브라우저로 내려가는 것을 막으려는
// 것이고, 그 판단은 그대로 둔다. 다만 도장(STAMP_DELIVERY)이 붙으면서 발송에 필요한 값을 볼
// 경로가 없어져, 관리자가 화면만 보고는 어디로 보낼지 알 수 없었다.
//
// 그래서 **주문 하나씩 명시적으로 요청할 때만** 내려주고 그 열람을 남긴다. 최소 노출을 지키면서
// 발송 업무가 가능해진다.
//
// 결제되지 않은 주문은 거절한다. 아직 돈이 오가지 않은 주문의 주소를 볼 이유가 없고, 미결제
// 주문의 개인정보는 24시간 뒤 파기 대상이다([[naminglink-privacy-phase2]]).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function text(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  const orderId = request.nextUrl.searchParams.get("orderId") ?? "";
  if (!UUID.test(orderId)) {
    return NextResponse.json({ ok: false, error: "주문 번호가 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "데이터 저장소가 설정되지 않았습니다." }, { status: 503 });
  }

  const { data: order, error } = await supabase
    .from("orders")
    .select(
      "id,order_type,payment_status,customer_name,customer_email,shipping_address,metadata",
    )
    .eq("id", orderId)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ ok: false, error: "주문을 불러오지 못했습니다." }, { status: 500 });
  }
  if (!order) {
    return NextResponse.json({ ok: false, error: "주문을 찾을 수 없습니다." }, { status: 404 });
  }
  if (order.payment_status !== "PAID") {
    return NextResponse.json(
      { ok: false, error: "결제가 완료된 주문만 배송 정보를 볼 수 있습니다." },
      { status: 409 },
    );
  }

  const meta =
    order.metadata && typeof order.metadata === "object" && !Array.isArray(order.metadata)
      ? (order.metadata as Record<string, unknown>)
      : {};

  // 열람을 먼저 남기고 값을 내보낸다. 기록에 실패하면 보여 주지 않는다 — 남지 않는 열람을
  // 허용하면 기록이 있다는 사실 자체를 믿을 수 없게 된다.
  const { error: logError } = await supabase.from("admin_pii_access_logs").insert({
    admin_id: auth.admin.id,
    admin_email: auth.admin.email,
    order_id: order.id,
    scope: "SHIPPING",
  });
  if (logError) {
    return NextResponse.json(
      { ok: false, error: "열람 기록을 남기지 못해 조회를 중단했습니다." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    shipping: {
      recipient: text(order.customer_name),
      email: text(order.customer_email),
      phone: text(meta.phone),
      country: text(meta.country),
      address: text(order.shipping_address),
      note: text(meta.note),
      stampName: text(meta.stampName),
      stampModel:
        STAMP_MODELS[meta.stampModel as StampModelCode]?.name ?? text(meta.stampModel),
    },
  });
}
