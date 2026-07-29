"use client";

import { FormEvent, useEffect, useState } from "react";
import { LogIn, LogOut, Mail } from "lucide-react";
import { AccountDeletePanel } from "@/components/AccountDeletePanel";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { getAuthCopy } from "@/lib/i18n-auth";
import { isLocaleCode } from "@/lib/locale-codes";
import { localePath } from "@/lib/locale-path";

type AuthPanelProps = {
  intent?: "login" | "account";
  locale?: string;
};

const hasSupabaseConfig = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export function AuthPanel({ intent = "login", locale }: AuthPanelProps) {
  const copy = getAuthCopy(locale);
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [legalOpen, setLegalOpen] = useState<LegalDocument | null>(null);

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
      setError(copy.supabaseMissingError);
      return;
    }

    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}${localePath("/account", locale)}`,
      },
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    setMessage(copy.sentMessage);
  }

  async function handleLogout() {
    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    setCurrentEmail(null);
    setMessage(copy.loggedOutMessage);
  }

  if (!hasSupabaseConfig) {
    return (
      <section className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
        <h2 className="text-xl font-semibold">{copy.configWaitTitle}</h2>
        <p className="text-sm leading-6 text-muted">
          {copy.configWaitDescription}
        </p>
      </section>
    );
  }

  if (currentEmail) {
    return (
      <section className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            {copy.loggedInEyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold">{currentEmail}</h2>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold transition hover:border-foreground"
        >
          <LogOut aria-hidden="true" size={17} />
          {copy.logoutButton}
        </button>
        {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
        {/* 탈퇴는 로그아웃 아래에 눈에 덜 띄게 둔다. 되돌릴 수 없는 동작이라 실수로 누르는
            자리에 있으면 안 되지만, 찾을 수 없으면 방침이 보장한 삭제 요구권이 무의미해진다. */}
        <AccountDeletePanel email={currentEmail} locale={locale} />
      </section>
    );
  }

  return (
    <section className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-brand-teal">
          {intent === "account" ? copy.panelEyebrowAccount : copy.panelEyebrowLogin}
        </p>
        <h2 className="mt-2 text-2xl font-semibold">{copy.panelTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          {copy.panelDescription}
        </p>
      </div>

      <form onSubmit={handleLogin} className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-2">
          <span className="text-sm font-medium">{copy.emailLabel}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.emailPlaceholder}
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
          {copy.submitButton}
        </button>
      </form>

      {/* 약관은 팝업으로 연다. 링크로 두면 로그인 도중에 페이지를 떠나 입력한 메일과 진행 상태를
          잃는다 — 서비스·결과 화면은 이미 팝업(`policyMode="modal"`)인데 여기만 남아 있었다. */}
      <p className="text-xs leading-5 text-muted">
        {copy.legalBefore}
        <button
          type="button"
          onClick={() => setLegalOpen("terms")}
          className="font-semibold text-foreground underline decoration-line underline-offset-4"
        >
          {copy.legalTerms}
        </button>
        {copy.legalBetween}
        <button
          type="button"
          onClick={() => setLegalOpen("privacy")}
          className="font-semibold text-foreground underline decoration-line underline-offset-4"
        >
          {copy.legalPrivacy}
        </button>
        {copy.legalAfter}
      </p>
      {legalOpen ? (
        <LegalModal
          kind={legalOpen}
          // 이 컴포넌트는 locale을 문자열로 받는다(라우트에서 그대로 넘어온다).
          // 아는 코드가 아니면 한국어로 떨어뜨린다 — 사전에 없는 값을 넘기면 빈 약관이 뜬다.
          locale={isLocaleCode(locale) ? locale : "ko"}
          onClose={() => setLegalOpen(null)}
        />
      ) : null}

      {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
      {error ? <p className="text-sm text-brand-rose">{error}</p> : null}
    </section>
  );
}
