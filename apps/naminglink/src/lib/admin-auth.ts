import "server-only";
import { NextRequest } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

export type AdminIdentity = {
  id: string;
  email: string | null;
};

function hasAdminRole(appMetadata: Record<string, unknown>) {
  if (appMetadata.role === "admin" || appMetadata.role === "super_admin") {
    return true;
  }

  return (
    Array.isArray(appMetadata.roles) &&
    appMetadata.roles.some(
      (role) => role === "admin" || role === "super_admin",
    )
  );
}

export async function requireAdmin(
  request: NextRequest,
): Promise<
  | { ok: true; admin: AdminIdentity }
  | { ok: false; status: 401 | 403 | 503; error: string }
> {
  const authorization = request.headers.get("authorization");
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7).trim()
    : null;

  if (!token) {
    return { ok: false, status: 401, error: "운영자 로그인이 필요합니다." };
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return {
      ok: false,
      status: 503,
      error: "Supabase 운영자 인증이 설정되지 않았습니다.",
    };
  }

  const { data, error } = await supabase.auth.getUser(token);
  const user = data.user;

  if (error || !user) {
    return { ok: false, status: 401, error: "운영자 세션이 유효하지 않습니다." };
  }

  if (!hasAdminRole(user.app_metadata ?? {})) {
    return { ok: false, status: 403, error: "운영자 권한이 없습니다." };
  }

  return {
    ok: true,
    admin: { id: user.id, email: user.email ?? null },
  };
}
