"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { LogIn, LogOut, Mail } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type AuthPanelProps = {
  intent?: "login" | "account";
};

const hasSupabaseConfig = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export function AuthPanel({ intent = "login" }: AuthPanelProps) {
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setCurrentEmail(data.session?.user.email ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentEmail(session?.user.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);

    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      setError("Supabase 공개 키가 설정되지 않아 로그인을 사용할 수 없습니다.");
      return;
    }

    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/account`,
      },
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    setMessage("로그인 링크를 이메일로 보냈습니다. 메일함에서 확인해 주세요.");
  }

  async function handleLogout() {
    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    setCurrentEmail(null);
    setMessage("로그아웃되었습니다.");
  }

  if (!hasSupabaseConfig) {
    return (
      <section className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
        <h2 className="text-xl font-semibold">로그인 설정 대기 중</h2>
        <p className="text-sm leading-6 text-muted">
          Supabase URL과 Anon Key가 배포 환경에 설정되면 이메일 링크 로그인을
          사용할 수 있습니다.
        </p>
      </section>
    );
  }

  if (currentEmail) {
    return (
      <section className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-brand-teal">로그인됨</p>
          <h2 className="mt-2 text-2xl font-semibold">{currentEmail}</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            작명 결과와 주문 이력은 이 계정 기준으로 저장됩니다. 결제와 PDF
            발급 기능이 연결되면 이 화면에서 다시 내려받을 수 있게 됩니다.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold transition hover:border-foreground"
        >
          <LogOut aria-hidden="true" size={17} />
          로그아웃
        </button>
        {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
      </section>
    );
  }

  return (
    <section className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-brand-teal">
          {intent === "account" ? "계정 접근" : "이메일 로그인"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold">
          링크 한 번으로 안전하게 로그인
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          비밀번호를 저장하지 않고 이메일 인증 링크로 로그인합니다. 이용 전
          이용약관과 개인정보처리방침을 확인해 주세요.
        </p>
      </div>

      <form onSubmit={handleLogin} className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-2">
          <span className="text-sm font-medium">이메일</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
            className="h-11 rounded-lg border border-line bg-background px-3 text-sm outline-none transition focus:border-foreground"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <Mail aria-hidden="true" size={17} />
          ) : (
            <LogIn aria-hidden="true" size={17} />
          )}
          로그인 링크 받기
        </button>
      </form>

      <p className="text-xs leading-5 text-muted">
        계속 진행하면{" "}
        <Link href="/terms" className="font-semibold text-foreground">
          이용약관
        </Link>
        과{" "}
        <Link href="/privacy" className="font-semibold text-foreground">
          개인정보처리방침
        </Link>
        을 확인한 것으로 봅니다.
      </p>

      {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
      {error ? <p className="text-sm text-brand-rose">{error}</p> : null}
    </section>
  );
}
