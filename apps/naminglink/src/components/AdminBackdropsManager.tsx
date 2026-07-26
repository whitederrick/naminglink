"use client";

import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { PageHeader, Table } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

// 프리미엄 PDF 배경 이미지 관리: 업로드 + 적용 기간(월 범위) 설정.
// 렌더 시 생성 월이 기간에 드는 활성 배경 중 정렬값이 낮은 것이 적용된다.
// 아무것도 매칭되지 않으면 내장 벡터 배경(계절 자동)으로 폴백한다.

type BackdropRow = {
  id: string;
  code: string;
  name_ko: string;
  start_month: number;
  end_month: number;
  storage_path: string;
  enabled: boolean;
  sort_order: number;
};

const emptyForm = {
  code: "",
  name_ko: "",
  start_month: "1",
  end_month: "12",
  sort_order: "0",
};

const MONTHS = Array.from({ length: 12 }, (_, index) => String(index + 1));

export function AdminBackdropsManager() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [rows, setRows] = useState<BackdropRow[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async (accessToken: string) => {
    const response = await fetch("/api/admin/backdrops", {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
    if (response.status === 401 || response.status === 403) {
      router.replace("/naming-artist/login");
      return;
    }
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; backdrops?: BackdropRow[]; error?: string }
      | null;
    if (!data?.ok) {
      setError(data?.error ?? "배경 목록을 불러오지 못했습니다.");
      return;
    }
    setRows(data.backdrops ?? []);
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

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const previewUrl = (row: BackdropRow) =>
    supabaseUrl
      ? `${supabaseUrl}/storage/v1/object/public/report-backdrops/${row.storage_path}`
      : null;

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!token || busy) return;
    if (!file) {
      setError("배경 이미지(PNG/JPG)를 선택해 주세요.");
      return;
    }
    setBusy(true);
    setError("");
    setMessage("업로드 중…");
    try {
      const body = new FormData();
      body.append("file", file);
      for (const [key, value] of Object.entries(form)) body.append(key, value);
      const response = await fetch("/api/admin/backdrops", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body,
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok || !data?.ok) throw new Error(data?.error ?? "등록에 실패했습니다.");
      setMessage("등록 완료");
      setForm(emptyForm);
      setFile(null);
      await load(token);
    } catch (caught) {
      setMessage("");
      setError(caught instanceof Error ? caught.message : "등록에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  }

  async function patch(id: string, changes: Record<string, unknown>) {
    if (!token || busy) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/backdrops", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ id, ...changes }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok || !data?.ok) throw new Error(data?.error ?? "수정에 실패했습니다.");
      await load(token);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "수정에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  }

  const inputClass = "h-10 w-full rounded-lg border border-line bg-background px-3 text-sm";

  return (
    <div className="grid gap-5">
      <PageHeader
        title="배경 관리"
        description="프리미엄 PDF 아트 페이지의 배경 이미지를 등록하고 적용 기간(월 범위)을 설정합니다. 기간이 12→2월처럼 연말을 걸쳐도 됩니다. 매칭되는 배경이 없으면 내장 계절 배경이 적용됩니다."
      />

      <form onSubmit={submit} className="grid gap-3 rounded-xl border border-line bg-surface p-5">
        <h2 className="flex items-center gap-2 font-semibold">
          <ImagePlus size={17} /> 새 배경 등록
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">코드 (소문자·숫자·하이픈)</span>
            <input
              value={form.code}
              onChange={(event) => setForm({ ...form, code: event.target.value })}
              placeholder="예: season-spring-photo"
              required
              className={inputClass}
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">이름</span>
            <input
              value={form.name_ko}
              onChange={(event) => setForm({ ...form, name_ko: event.target.value })}
              placeholder="예: 봄 벚꽃 사진 배경"
              required
              className={inputClass}
            />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">적용 시작 월</span>
            <select
              value={form.start_month}
              onChange={(event) => setForm({ ...form, start_month: event.target.value })}
              className={inputClass}
            >
              {MONTHS.map((month) => (
                <option key={month} value={month}>{month}월</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">적용 종료 월</span>
            <select
              value={form.end_month}
              onChange={(event) => setForm({ ...form, end_month: event.target.value })}
              className={inputClass}
            >
              {MONTHS.map((month) => (
                <option key={month} value={month}>{month}월</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">정렬 (낮을수록 우선)</span>
            <input
              value={form.sort_order}
              onChange={(event) => setForm({ ...form, sort_order: event.target.value })}
              className={inputClass}
            />
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">이미지 파일 (PNG/JPG, 5MB 이하 — 가로 800×540 비율 권장)</span>
          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            className="text-sm"
          />
        </label>
        <button
          type="submit"
          disabled={busy || !token}
          className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-60"
        >
          {busy ? "처리 중…" : "배경 등록"}
        </button>
        {message ? <p className="text-sm font-medium text-brand-teal">{message}</p> : null}
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      </form>

      <section className="rounded-xl border border-line bg-surface p-5">
        <h2 className="font-semibold">등록된 배경 ({rows.length})</h2>
        <div className="mt-3">
          <Table
            headers={["미리보기", "이름", "기간", "정렬", "상태"]}
            rows={rows.map((row) => [
              (() => {
                const url = previewUrl(row);
                return url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key="preview"
                    src={url}
                    alt={row.name_ko}
                    className="h-12 w-20 rounded border border-line object-cover"
                  />
                ) : (
                  "-"
                );
              })(),
              <span key="name">
                {row.name_ko}
                <span className="block text-xs text-muted">{row.code}</span>
              </span>,
              <span key="period" className="whitespace-nowrap">
                <select
                  value={row.start_month}
                  disabled={busy}
                  onChange={(event) => void patch(row.id, { start_month: Number(event.target.value) })}
                  className="rounded border border-line bg-background px-1 py-0.5 text-xs"
                >
                  {MONTHS.map((month) => (
                    <option key={month} value={month}>{month}월</option>
                  ))}
                </select>
                {" ~ "}
                <select
                  value={row.end_month}
                  disabled={busy}
                  onChange={(event) => void patch(row.id, { end_month: Number(event.target.value) })}
                  className="rounded border border-line bg-background px-1 py-0.5 text-xs"
                >
                  {MONTHS.map((month) => (
                    <option key={month} value={month}>{month}월</option>
                  ))}
                </select>
              </span>,
              String(row.sort_order),
              <button
                key="toggle"
                type="button"
                disabled={busy}
                onClick={() => void patch(row.id, { enabled: !row.enabled })}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  row.enabled ? "bg-brand-teal/10 text-brand-teal" : "bg-surface-strong text-muted"
                }`}
              >
                {row.enabled ? "사용 중" : "숨김"}
              </button>,
            ])}
          />
        </div>
      </section>
    </div>
  );
}
