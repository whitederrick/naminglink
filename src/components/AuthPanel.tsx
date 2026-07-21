"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { LogIn, LogOut, Mail } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { getAuthCopy } from "@/lib/i18n-auth";

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
  const langQuery = locale && locale !== "ko" ? `?lang=${locale}` : "";
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
      setError(copy.supabaseMissingError);
      return;
    }

    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/account${langQuery}`,
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
          <p className="mt-3 text-sm leading-6 text-muted">
            {copy.loggedInDescription}
          </p>
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

      <p className="text-xs leading-5 text-muted">
        {copy.legalBefore}
        <Link href={`/terms${langQuery}`} className="font-semibold text-foreground">
          {copy.legalTerms}
        </Link>
        {copy.legalBetween}
        <Link href={`/privacy${langQuery}`} className="font-semibold text-foreground">
          {copy.legalPrivacy}
        </Link>
        {copy.legalAfter}
      </p>

      {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
      {error ? <p className="text-sm text-brand-rose">{error}</p> : null}
    </section>
  );
}
