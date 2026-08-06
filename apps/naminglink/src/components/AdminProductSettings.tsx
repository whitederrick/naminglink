"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { appForProductCode, appLabel, type AppKey } from "@naminglink/core/apps";

import { AdminShell } from "@/components/AdminOperationsConsole";
import { PageHeader, Table } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

// 상품 설정 화면: 가격·통화·서체 적용 수·노출을 조정한다(변경 이력 자동 기록).
// 가격 변경 시 요금안내·약관 문서의 표기 금액도 함께 갱신해야 한다.

/**
 * 배지 색. **이름은 `appLabel()`이 정한다** — 여기는 색만 고른다.
 *
 * 예전에는 이 배지가 이분법이었다(`인연링크가 아니면 전부 네이밍링크`). 그래서 **사주 상품에
 * 네이밍링크 배지가 붙었다**(2026-08-06). 모르는 앱은 중립색으로 떨어뜨린다 — 남의 서비스
 * 색을 입히는 것보다 낫다.
 */
// **이 앱에 실제로 있는 토큰만 쓴다**(`globals.css`: teal·rose·amber). 예전 값은
// `brand-plum`이었는데 그런 토큰이 없어서 **인연링크 배지가 여태 색 없이 나오고 있었다** —
// 없는 클래스는 조용히 아무 일도 하지 않는다.
const BADGE_TONE: Record<AppKey, string> = {
  naminglink: "bg-brand-teal/12 text-brand-teal",
  inyeonlink: "bg-brand-rose/12 text-brand-rose",
  sajulink: "bg-brand-amber/12 text-brand-amber",
  // 토큰이 셋뿐이라 넷째는 중립으로 둔다(없는 토큰을 지어내지 않는다).
  dreamslink: "bg-surface-strong text-muted",
};

function ServiceBadge({ code }: { code: string }) {
  const app = appForProductCode(code);

  return (
    <span
      className={`mr-1.5 inline-block rounded px-1.5 py-0.5 align-middle text-[11px] font-semibold ${
        BADGE_TONE[app] ?? "bg-surface-strong text-muted"
      }`}
    >
      {appLabel(app)}
    </span>
  );
}

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
  // 이 컬럼이 생기기 전 이력은 null이다.
  old_enabled: boolean | null;
  new_enabled: boolean | null;
  changed_by: string | null;
  changed_at: string;
};

const enabledLabel = (enabled: boolean) => (enabled ? "판매" : "중단");

function price(amount: number, currency: string) {
  return currency === "USD" ? `US$${(amount / 100).toFixed(2)}` : `₩${amount.toLocaleString("ko-KR")}`;
}

const COPY: Record<AppKey, { title: string; description: string }> = {
  naminglink: {
    title: "상품 설정",
    description:
      "네이밍링크 상품의 가격(USD는 센트 단위)·서체 적용 수·노출을 조정합니다(형제 서비스 리포트는 각 서비스의 「상품」 화면에 따로 있습니다). 변경은 이력에 기록되며, 가격 변경 시 요금안내·약관 문서의 표기 금액도 갱신해야 합니다.",
  },
  inyeonlink: {
    title: "인연링크 상품",
    description:
      "사주 궁합 리포트와 인연의 결 리포트 PDF입니다. 메뉴 둘 × 권역 둘(국내 원화·해외 달러)로 넷이며, 화면에 뜨는 가격과 실제 청구 금액이 모두 이 값에서 나옵니다.\n서체 수는 이 상품들과 무관해 표시하지 않습니다. 가격을 바꾸면 약관의 표기 금액도 함께 갱신해야 합니다(`verify-legal-prices.ts`가 대조합니다).",
  },
  dreamslink: {
    title: "드림링크 상품",
    description:
      "꿈 카드(이미지)와 태몽 리포트(PDF)입니다. 상품 둘 × 권역 둘(국내 원화·해외 달러)로 넷이며, 화면에 뜨는 가격과 실제 청구 금액이 모두 이 값에서 나옵니다.\n**이 서비스는 무료 해몽이 본체이고 광고가 주 수익입니다** — 꿈은 매일 꾸는 것이라 사주처럼 한 벌짜리 문서를 팔지 않습니다. 서체 수는 이 상품들과 무관해 표시하지 않습니다.",
  },
  sajulink: {
    title: "사주링크 상품",
    description:
      "「평생 사주와 올해의 운세 리포트」 PDF입니다. 상품 하나 × 권역 둘(국내 원화·해외 달러)로 둘이며, 화면에 뜨는 가격과 실제 청구 금액이 모두 이 값에서 나옵니다.\n2026-08-05에 티어 둘(총운·프리미엄)을 하나로 합쳤습니다 — 그 뒤로도 이 설명이 '티어 둘로 넷'이라고 적고 있었습니다(2026-08-06 정정).\n**`AppKey`가 늘면 이 표도 함께 늘려야 합니다.** 빠뜨리면 화면이 제목 없이 뜨는데, 타입만으로는 잡히지 않는 것을 확인했습니다(2026-08-04).",
  },
};

/**
 * 상품 설정 화면.
 *
 * `app`으로 한 서비스만 추려 보여 준다. 한 표에 20건을 늘어놓으면 인연링크 상품 넷을 눈으로
 * 찾아야 하고, 판매 스위치처럼 되돌리기 번거로운 조작이 남의 상품 옆에 붙는다.
 */
export function AdminProductSettings({ app }: { app: AppKey }) {
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
    // 걸러 내는 것은 화면 쪽이다. 20건짜리 응답이라 서버에 인자를 더할 이유가 없고, 이력은
    // 상품 코드로 오므로 같은 기준으로 함께 거른다.
    const rows = (data.products ?? []).filter((row) => appForProductCode(row.code) === app);
    setProducts(rows);
    setHistory((data.history ?? []).filter((row) => appForProductCode(row.code) === app));
    setDrafts(
      Object.fromEntries(
        rows.map((row) => [
          row.code,
          { amount: String(row.amount), font_count: String(row.font_count) },
        ]),
      ),
    );
  }, [app, router]);

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

  // 서체 선택이 있는 상품은 naminglink 쪽뿐이다. 이 값이 배지 노출 여부도 함께 정한다 —
  // 둘 다 "여러 서비스를 한 표에서 보고 있는가"라는 같은 질문이다.
  const showFonts = app === "naminglink";

  return (
    <AdminShell>
      <PageHeader title={COPY[app].title} description={COPY[app].description} />

      {message ? <p className="mb-3 rounded-lg bg-surface-strong p-3 text-sm text-brand-teal">{message}</p> : null}
      {error ? <p className="mb-3 rounded-lg bg-brand-rose/5 p-3 text-sm text-red-600">{error}</p> : null}

      <Table
        headers={
          showFonts
            ? ["상품", "현재 가격", "금액", "서체 수", "저장", "노출", "최근 수정"]
            : ["상품", "현재 가격", "금액", "저장", "노출", "최근 수정"]
        }
        rows={products.map((row) => [
          <div key="name">
            <p className="font-medium">
              {/* 한 서비스만 추려 볼 때는 배지가 모든 행에서 같은 말을 반복한다. */}
              {showFonts ? <ServiceBadge code={row.code} /> : null}
              {row.name_ko}
            </p>
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
          // 인연링크 리포트에는 서체 선택이 없다. 칸을 두면 0을 고칠 수 있는 것처럼 보인다.
          ...(showFonts
            ? [
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
              ]
            : []),
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
          headers={
            showFonts
              ? ["일시", "상품", "금액", "서체 수", "판매", "변경자"]
              : ["일시", "상품", "금액", "판매", "변경자"]
          }
          rows={history.map((row) => [
            new Date(row.changed_at).toLocaleString("ko-KR"),
            row.code,
            `${price(row.old_amount ?? 0, row.old_currency ?? "KRW")} → ${price(row.new_amount ?? 0, row.new_currency ?? "KRW")}`,
            ...(showFonts ? [`${row.old_font_count ?? 0} → ${row.new_font_count ?? 0}`] : []),
            // 컬럼 추가 이전 행은 값이 없다. 바뀌지 않은 경우와 구분해서 표시한다.
            row.old_enabled === null || row.new_enabled === null
              ? "-"
              : row.old_enabled === row.new_enabled
                ? enabledLabel(row.new_enabled)
                : `${enabledLabel(row.old_enabled)} → ${enabledLabel(row.new_enabled)}`,
            row.changed_by ?? "-",
          ])}
        />
      </section>
    </AdminShell>
  );
}
