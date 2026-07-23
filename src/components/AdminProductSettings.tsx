"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AdminShell } from "@/components/AdminOperationsConsole";
import { PageHeader, Table } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

// 상품 설정 화면: 가격·통화·서체 적용 수·노출을 조정한다(변경 이력 자동 기록).
// 가격 변경 시 요금안내·약관 문서의 표기 금액도 함께 갱신해야 한다.

type ProductRow = {
  code: string;
  name_ko: string;
  amount: number;
  currency: "KRW" | "USD";
  font_count: number;
  enabled: boolean;
  updated_at: string;
  updated_by: string | null;
};

type HistoryRow = {
  id: string;
  code: string;
  old_amount: number | null;
  new_amount: number | null;
  old_currency: string | null;
  new_currency: string | null;
  old_font_count: number | null;
  new_font_count: number | null;
  changed_by: string | null;
  changed_at: string;
};

function price(amount: number, currency: string) {
  return currency === "USD" ? `US$${(amount / 100).toFixed(2)}` : `₩${amount.toLocaleString("ko-KR")}`;
}

export function AdminProductSettings() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductRow[]>([]);
  const [history, setHistory] = useState<HistoryRow[]>([]);
  const [drafts, setDrafts] = useState<Record<string, { amount: string; font_count: string }>>({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async (accessToken: string) => {
    const response = await fetch("/api/admin/products", {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
    if (response.status === 401 || response.status === 403) {
      router.replace("/naming-artist/login");
      return;
    }
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; products?: ProductRow[]; history?: HistoryRow[]; error?: string }
      | null;
    if (!data?.ok) {
      setError(data?.error ?? "상품 설정을 불러오지 못했습니다.");
      return;
    }
    setProducts(data.products ?? []);
    setHistory(data.history ?? []);
    setDrafts(
      Object.fromEntries(
        (data.products ?? []).map((row) => [
          row.code,
          { amount: String(row.amount), font_count: String(row.font_count) },
        ]),
      ),
    );
  }, [router]);

  useEffect(() => {
    void (async () => {
      const supabase = getSupabaseBrowserClient();
      const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
      if (!data.session) {
        router.replace("/naming-artist/login");
        return;
      }
      setToken(data.session.access_token);
      await load(data.session.access_token);
    })();
  }, [load, router]);

  async function save(code: string, extra?: Record<string, unknown>) {
    if (!token) return;
    setError("");
    setMessage("");
    const draft = drafts[code];
    const body: Record<string, unknown> = { code, ...extra };
    if (draft) {
      const amount = Number(draft.amount);
      const fontCount = Number(draft.font_count);
      if (!Number.isInteger(amount) || amount <= 0) {
        setError("금액은 양의 정수여야 합니다 (USD는 센트 단위).");
        return;
      }
      if (!Number.isInteger(fontCount) || fontCount < 0 || fontCount > 10) {
        setError("서체 수는 0~10 사이여야 합니다.");
        return;
      }
      body.amount = amount;
      body.font_count = fontCount;
    }
    const response = await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string; warning?: string | null }
      | null;
    if (!data?.ok) {
      setError(data?.error ?? "저장에 실패했습니다.");
      return;
    }
    setMessage(data.warning ?? "저장되었습니다.");
    await load(token);
  }

  return (
    <AdminShell>
      <PageHeader
        title="상품 설정"
        description="가격(USD는 센트 단위)·서체 적용 수·노출을 조정합니다. 변경은 이력에 기록되며, 가격 변경 시 요금안내·약관 문서의 표기 금액도 갱신해야 합니다."
      />

      {message ? <p className="mb-3 rounded-lg bg-surface-strong p-3 text-sm text-brand-teal">{message}</p> : null}
      {error ? <p className="mb-3 rounded-lg bg-brand-rose/5 p-3 text-sm text-red-600">{error}</p> : null}

      <Table
        headers={["상품", "현재 가격", "금액", "서체 수", "저장", "노출", "최근 수정"]}
        rows={products.map((row) => [
          <div key="name">
            <p className="font-medium">{row.name_ko}</p>
            <p className="text-xs text-muted">{row.code} · {row.currency}</p>
          </div>,
          price(row.amount, row.currency),
          <input
            key="amount"
            value={drafts[row.code]?.amount ?? ""}
            onChange={(event) =>
              setDrafts((current) => ({
                ...current,
                [row.code]: { ...current[row.code], amount: event.target.value },
              }))
            }
            className="h-9 w-24 rounded border border-line bg-background px-2 text-sm"
          />,
          <input
            key="fonts"
            value={drafts[row.code]?.font_count ?? ""}
            onChange={(event) =>
              setDrafts((current) => ({
                ...current,
                [row.code]: { ...current[row.code], font_count: event.target.value },
              }))
            }
            className="h-9 w-14 rounded border border-line bg-background px-2 text-sm"
          />,
          <button
            key="save"
            type="button"
            onClick={() => void save(row.code)}
            className="rounded-lg border border-brand-teal/40 px-3 py-1 text-xs font-semibold text-brand-teal"
          >
            저장
          </button>,
          <button
            key="toggle"
            type="button"
            onClick={() => void save(row.code, { enabled: !row.enabled })}
            className={`rounded-lg border px-3 py-1 text-xs font-semibold ${row.enabled ? "border-brand-teal/40 text-brand-teal" : "border-line text-muted"}`}
          >
            {row.enabled ? "판매 중" : "중지"}
          </button>,
          <div key="updated" className="text-xs text-muted">
            {row.updated_by ?? "-"}
            <br />
            {new Date(row.updated_at).toLocaleString("ko-KR")}
          </div>,
        ])}
      />

      <section className="mt-6">
        <p className="mb-2 text-sm font-semibold">변경 이력 (최근 30건)</p>
        <Table
          headers={["일시", "상품", "금액", "서체 수", "변경자"]}
          rows={history.map((row) => [
            new Date(row.changed_at).toLocaleString("ko-KR"),
            row.code,
            `${price(row.old_amount ?? 0, row.old_currency ?? "KRW")} → ${price(row.new_amount ?? 0, row.new_currency ?? "KRW")}`,
            `${row.old_font_count ?? 0} → ${row.new_font_count ?? 0}`,
            row.changed_by ?? "-",
          ])}
        />
      </section>
    </AdminShell>
  );
}
