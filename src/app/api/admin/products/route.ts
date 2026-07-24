import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin-auth";
import { displayPrice, invalidateProductSettingsCache } from "@/lib/product-settings";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

// 관리자 상품 설정 API: 가격·통화·서체 수·노출 조정 + 변경 이력 기록.
export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "저장소가 설정되지 않았습니다." }, { status: 503 });
  }
  const [{ data: products, error }, { data: history }] = await Promise.all([
    supabase.from("product_settings").select("*").order("code"),
    supabase
      .from("product_setting_history")
      .select("*")
      .order("changed_at", { ascending: false })
      .limit(30),
  ]);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, products: products ?? [], history: history ?? [] });
}

const patchSchema = z.object({
  code: z.string().trim().regex(/^[A-Z0-9_]{2,40}$/),
  amount: z.number().int().min(1).max(100_000_000).optional(),
  currency: z.enum(["KRW", "USD"]).optional(),
  font_count: z.number().int().min(0).max(10).optional(),
  enabled: z.boolean().optional(),
});

// amount는 통화의 최소 단위로 저장한다(KRW=원, USD=센트). 통화별 상한·하한이 크게 달라서
// 한쪽 기준의 숫자가 다른 통화에 그대로 남으면 자릿수 사고가 난다(₩39,000 → US$390.00).
const AMOUNT_LIMITS = {
  KRW: { min: 100, max: 10_000_000 },
  USD: { min: 50, max: 1_000_000 },
} as const;

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
    const { code, ...changes } = parsed.data;
    const { data: current } = await supabase
      .from("product_settings")
      .select("*")
      .eq("code", code)
      .maybeSingle();
    if (!current) {
      return NextResponse.json({ ok: false, error: "상품을 찾을 수 없습니다." }, { status: 404 });
    }
    const currentCurrency = current.currency === "USD" ? "USD" : "KRW";
    const nextCurrency = changes.currency ?? currentCurrency;
    const nextAmount = changes.amount ?? Number(current.amount);
    // 통화만 바꾸면 이전 통화 기준 금액이 그대로 남아 실제 청구액이 뒤바뀐다. 함께 받도록 강제한다.
    if (nextCurrency !== currentCurrency && changes.amount === undefined) {
      return NextResponse.json(
        {
          ok: false,
          error: "통화를 변경할 때는 새 통화 기준 금액도 함께 입력해야 합니다(KRW=원, USD=센트).",
        },
        { status: 400 },
      );
    }
    const limit = AMOUNT_LIMITS[nextCurrency];
    if (nextAmount < limit.min || nextAmount > limit.max) {
      return NextResponse.json(
        {
          ok: false,
          error: `${nextCurrency} 금액은 ${limit.min.toLocaleString("ko-KR")}~${limit.max.toLocaleString(
            "ko-KR",
          )} 범위여야 합니다(USD는 센트 단위).`,
        },
        { status: 400 },
      );
    }
    const { error: updateError } = await supabase
      .from("product_settings")
      .update({
        ...changes,
        updated_at: new Date().toISOString(),
        updated_by: auth.admin.email ?? auth.admin.id,
      })
      .eq("code", code);
    if (updateError) throw updateError;
    await supabase.from("product_setting_history").insert({
      code,
      old_amount: current.amount,
      new_amount: changes.amount ?? current.amount,
      old_currency: current.currency,
      new_currency: changes.currency ?? current.currency,
      old_font_count: current.font_count,
      new_font_count: changes.font_count ?? current.font_count,
      changed_by: auth.admin.email ?? auth.admin.id,
    });
    invalidateProductSettingsCache();
    return NextResponse.json({
      ok: true,
      // 해석된 금액을 되돌려줘야 관리자가 자릿수 실수를 즉시 알아본다(센트/원 혼동).
      // 가격 변경 시 요금안내·약관 문서의 표기 금액도 갱신해야 한다는 경고를 함께 내려준다.
      warning:
        changes.amount !== undefined || changes.currency !== undefined
          ? `가격이 ${displayPrice({
              amount: Number(current.amount),
              currency: currentCurrency,
            })} → ${displayPrice({
              amount: nextAmount,
              currency: nextCurrency,
            })}로 변경되었습니다. 요금안내·약관 문서의 표기 금액 갱신이 필요합니다.`
          : null,
    });
  } catch (error) {
    console.error("Failed to update product setting", error);
    return NextResponse.json({ ok: false, error: "상품 설정 수정에 실패했습니다." }, { status: 500 });
  }
}
