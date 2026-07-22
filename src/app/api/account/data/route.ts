import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 저장 결과 목록에 보여줄 짧은 제목을 서버에서 뽑는다(전체 결과 JSON을 클라이언트로 보내지 않기 위해).
function summarizeResult(serviceType: string, generated: unknown): string {
  if (!generated || typeof generated !== "object") return "";
  const record = generated as Record<string, unknown>;
  const candidates = Array.isArray(record.candidates) ? record.candidates : [];
  const first =
    candidates[0] && typeof candidates[0] === "object"
      ? (candidates[0] as Record<string, unknown>)
      : null;
  if (!first) return "";
  const pick = (...keys: string[]) => {
    for (const key of keys) {
      const value = first[key];
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    return "";
  };
  if (serviceType === "HANJA_MEANING_MATCH") return pick("hanja", "hangul");
  if (serviceType === "KOREAN_TO_GLOBAL")
    return pick("local_script", "name", "hangul");
  return pick("hangul", "name");
}

export async function GET(request: NextRequest) {
  const user = await getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json(
      { ok: false, error: "로그인이 필요합니다." },
      { status: 401 },
    );
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "데이터 저장소가 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  const [savedResult, orderResult] = await Promise.all([
    supabase
      .from("naming_logs")
      .select("id,service_type,generated_names,created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50),
    supabase
      .from("orders")
      .select(
        "id,order_type,payment_status,fulfillment_status,payment_amount,payment_currency,created_at",
      )
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  if (savedResult.error || orderResult.error) {
    return NextResponse.json(
      { ok: false, error: "계정 데이터를 불러오지 못했습니다." },
      { status: 500 },
    );
  }

  const savedResults = (savedResult.data ?? []).map((row) => ({
    id: row.id as string,
    serviceType: row.service_type as string,
    title: summarizeResult(
      String(row.service_type),
      (row as Record<string, unknown>).generated_names,
    ),
    createdAt: row.created_at as string,
  }));

  const orders = (orderResult.data ?? []).map((row) => ({
    id: row.id as string,
    orderType: row.order_type as string,
    paymentStatus: row.payment_status as string,
    fulfillmentStatus: row.fulfillment_status as string,
    amount: (row.payment_amount as number) ?? 0,
    currency: (row.payment_currency as string) ?? "KRW",
    createdAt: row.created_at as string,
  }));

  return NextResponse.json({ ok: true, email: user.email, savedResults, orders });
}
