"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

function isAdmin(metadata: Record<string, unknown>) {
  return metadata.role === "admin" || metadata.role === "super_admin" || (Array.isArray(metadata.roles) && metadata.roles.some((role) => role === "admin" || role === "super_admin"));
}

export function AdminLoginPanel() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(null);
    const supabase = getSupabaseBrowserClient();
    if (!supabase) { setError("Supabase 관리자 인증이 설정되지 않았습니다."); return; }
    setLoading(true);
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (signInError || !data.user) { setError("아이디 또는 비밀번호를 확인해 주십시오."); return; }
    if (!isAdmin(data.user.app_metadata ?? {})) { await supabase.auth.signOut(); setError("운영자 권한이 없는 계정입니다."); return; }
    router.replace("/naming-artist"); router.refresh();
  }

  return <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-line bg-surface p-6 shadow-sm"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background"><LockKeyhole size={18}/></span><div><h2 className="text-xl font-semibold">보안 로그인</h2><p className="mt-1 text-sm text-muted">운영자 전용 계정으로 로그인하십시오.</p></div></div><label className="grid gap-2"><span className="text-sm font-medium">아이디(이메일)</span><input required type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 rounded-lg border border-line bg-background px-3 outline-none focus:border-foreground"/></label><label className="grid gap-2"><span className="text-sm font-medium">비밀번호</span><input required type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-11 rounded-lg border border-line bg-background px-3 outline-none focus:border-foreground"/></label><button type="submit" disabled={loading} className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-60">{loading ? "확인 중…" : "운영 콘솔 로그인"}</button>{error ? <p className="text-sm text-brand-rose">{error}</p> : null}</form>;
}
