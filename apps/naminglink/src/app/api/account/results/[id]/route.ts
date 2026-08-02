import { NextRequest, NextResponse } from "next/server";
import { sealCandidates } from "@/lib/result-seal";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function authorize(request: NextRequest) {
  const user = await getAuthenticatedUser(request);
  if (!user) {
    return {
      user: null,
      supabase: null,
      response: NextResponse.json(
        { ok: false, error: "로그인이 필요합니다." },
        { status: 401 },
      ),
    };
  }
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return {
      user,
      supabase: null,
      response: NextResponse.json(
        { ok: false, error: "데이터 저장소가 설정되지 않았습니다." },
        { status: 503 },
      ),
    };
  }
  return { user, supabase, response: null };
}

// 저장 결과 재열람: 본인 소유 로그의 전체 결과와 입력값을 돌려준다(클라이언트가 결과 화면으로 복원).
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const auth = await authorize(request);
  if (auth.response) return auth.response;
  const { user, supabase } = auth;

  const { data, error } = await supabase!
    .from("naming_logs")
    .select("id,service_type,input_factors,generated_names,created_at")
    .eq("id", id)
    .eq("user_id", user!.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { ok: false, error: "결과를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
  if (!data) {
    return NextResponse.json(
      { ok: false, error: "결과를 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  const inputFactors =
    data.input_factors && typeof data.input_factors === "object"
      ? (data.input_factors as Record<string, unknown>)
      : {};

  return NextResponse.json({
    ok: true,
    serviceType: data.service_type as string,
    serviceSlug:
      typeof inputFactors.serviceSlug === "string"
        ? inputFactors.serviceSlug
        : null,
    // 저장된 기록은 평문이다(봉인문은 만료되므로 그대로 저장할 수 없다). 화면으로 내보낼 때
    // 생성 때와 같은 규칙으로 다시 봉인한다 — 그러지 않으면 기록 열람이 잠금을 우회하는
    // 뒷문이 된다. 저장 이전(평문 그대로)의 오래된 기록도 여기서 함께 봉인된다.
    result: sealCandidates(data.generated_names),
    inputFactors,
    createdAt: data.created_at as string,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const auth = await authorize(request);
  if (auth.response) return auth.response;
  const { user, supabase } = auth;

  const { error } = await supabase!
    .from("naming_logs")
    .delete()
    .eq("id", id)
    .eq("user_id", user!.id);

  if (error) {
    return NextResponse.json(
      { ok: false, error: "결과를 삭제하지 못했습니다." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
