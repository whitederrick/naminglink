import { NextRequest, NextResponse } from "next/server";

import { getSupabaseAdminClient } from "@/lib/supabase";
import { getAuthenticatedUser } from "@/lib/user-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 회원 탈퇴(본인 요청).
 *
 * 개인정보처리방침 §7이 보장한 삭제 요구권을 화면에서 바로 행사하는 경로다. 지금까지는
 * 고객센터 메일로만 접수했는데, 그 주소가 아직 "확인 예정"이라 사실상 창구가 없었다.
 * 운영자 콘솔의 `DELETE_USER`와 같은 일을 하되 **본인이 직접** 부른다는 점만 다르다.
 *
 * **무엇이 지워지고 무엇이 남는가.** DB 제약이 정한다.
 *
 *   naming_logs   auth 사용자에 cascade → 저장한 작명 결과가 함께 삭제된다
 *   orders        user_id가 set null → 거래기록은 회원 연결 없이 남는다
 *
 * 주문을 남기는 것은 전자상거래법의 법정 보관 의무 때문이고, 방침 §3에 그렇게 적어 두었다.
 * 화면에서도 같은 말을 해야 이용자가 "다 지워진다"고 오해하지 않는다.
 *
 * **본인 확인은 호출 전에 이미 끝나 있다.** 화면이 탈퇴를 누르면 등록된 메일로 인증 링크를
 * 보내고, 그 링크로 돌아온 세션에서만 이 라우트를 부른다. 세션 쿠키만 탈취해도 계정이
 * 지워지는 상황을 막기 위해서다.
 */
export async function POST(request: NextRequest) {
  const user = await getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json({ ok: false, error: "로그인이 필요합니다." }, { status: 401 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "저장소가 설정되지 않았습니다." },
      { status: 503 },
    );
  }

  // 운영자 계정은 막는다. 탈퇴는 개인정보 삭제 요구권의 행사인데 운영자 계정에는 그 근거가
  // 없고, 실수로 지우면 콘솔 접근 권한이 사라진다(관리자 콘솔의 같은 판단과 맞춘다).
  // 권한은 토큰이 아니라 서버에서 다시 조회한다 — 토큰의 주장만 믿지 않는다.
  const { data: target } = await supabase.auth.admin.getUserById(user.id);
  const metadata = (target?.user?.app_metadata ?? {}) as Record<string, unknown>;
  const isAdminRole = (value: unknown) => value === "admin" || value === "super_admin";
  const isAdmin =
    isAdminRole(metadata.role) ||
    (Array.isArray(metadata.roles) && metadata.roles.some(isAdminRole));
  if (isAdmin) {
    return NextResponse.json(
      {
        ok: false,
        error: "운영자 계정은 화면에서 탈퇴할 수 없습니다. 고객센터로 문의해 주세요.",
      },
      { status: 400 },
    );
  }

  const { error } = await supabase.auth.admin.deleteUser(user.id);
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  // 이력은 식별자만 남긴다 — 이메일을 로그에 남기면 그 자체가 파기하지 못한 개인정보가 된다.
  console.info("User deleted own account", {
    userId: user.id,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
