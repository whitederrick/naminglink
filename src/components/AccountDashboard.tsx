"use client";

import { useEffect, useState } from "react";
import { FileText, Package } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { getAccountCopy } from "@/lib/i18n-account";

type SavedResult = {
  id: string;
  serviceType: string;
  title: string;
  createdAt: string;
};

type OrderRow = {
  id: string;
  orderType: string;
  paymentStatus: string;
  fulfillmentStatus: string;
  amount: number;
  createdAt: string;
};

type AccountData = {
  savedResults: SavedResult[];
  orders: OrderRow[];
};

type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error" }
  | ({ status: "ready" } & AccountData);

function formatDate(value: string, locale: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  try {
    return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

export function AccountDashboard({ locale }: { locale?: string }) {
  const copy = getAccountCopy(locale);
  const [state, setState] = useState<LoadState>({ status: "idle" });

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    let active = true;

    const load = async (token: string | null) => {
      if (!token) {
        // 로그아웃 상태에서는 대시보드를 감춘다(로그인 패널이 로그인 안내를 담당).
        if (active) setState({ status: "idle" });
        return;
      }
      if (active) setState({ status: "loading" });
      try {
        const response = await fetch("/api/account/data", {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        });
        const payload = await response.json();
        if (!active) return;
        if (!response.ok || !payload.ok) {
          setState({ status: "error" });
          return;
        }
        setState({
          status: "ready",
          savedResults: payload.savedResults ?? [],
          orders: payload.orders ?? [],
        });
      } catch {
        if (active) setState({ status: "error" });
      }
    };

    supabase.auth.getSession().then(({ data }) => {
      void load(data.session?.access_token ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      void load(session?.access_token ?? null);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  if (state.status === "idle") return null;

  return (
    <section className="grid gap-4">
      <h2 className="text-lg font-semibold">{copy.dashboardTitle}</h2>

      {state.status === "loading" ? (
        <p className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
          {copy.loading}
        </p>
      ) : state.status === "error" ? (
        <p className="rounded-lg border border-brand-rose/30 bg-brand-rose/10 p-6 text-sm text-brand-rose">
          {copy.loadError}
        </p>
      ) : (
        <div className="grid gap-6">
          <div className="grid gap-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-teal">
              <FileText aria-hidden="true" size={16} />
              {copy.resultsTitle}
            </p>
            {state.savedResults.length === 0 ? (
              <p className="rounded-lg border border-line bg-surface-strong px-4 py-3 text-sm text-muted">
                {copy.resultsEmpty}
              </p>
            ) : (
              <ul className="grid gap-2">
                {state.savedResults.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm shadow-sm"
                  >
                    <span className="font-medium">
                      {item.title || copy.untitledResult}
                      <span className="ml-2 text-xs font-normal text-muted">
                        {copy.serviceNames[item.serviceType] ?? item.serviceType}
                      </span>
                    </span>
                    <span className="text-xs text-muted">
                      {formatDate(item.createdAt, locale ?? "ko")}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid gap-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-teal">
              <Package aria-hidden="true" size={16} />
              {copy.ordersTitle}
            </p>
            {state.orders.length === 0 ? (
              <p className="rounded-lg border border-line bg-surface-strong px-4 py-3 text-sm text-muted">
                {copy.ordersEmpty}
              </p>
            ) : (
              <ul className="grid gap-2">
                {state.orders.map((order) => (
                  <li
                    key={order.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm shadow-sm"
                  >
                    <span className="font-medium">
                      {copy.orderTypes[order.orderType] ?? order.orderType}
                      <span className="ml-2 text-xs font-normal text-muted">
                        {copy.paymentStatus[order.paymentStatus] ??
                          order.paymentStatus}
                        {" · "}
                        {copy.fulfillmentStatus[order.fulfillmentStatus] ??
                          order.fulfillmentStatus}
                      </span>
                    </span>
                    <span className="flex items-center gap-3 text-xs text-muted">
                      {order.amount > 0 ? (
                        <span className="font-semibold text-foreground">
                          ₩{order.amount.toLocaleString()}
                        </span>
                      ) : null}
                      {formatDate(order.createdAt, locale ?? "ko")}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
