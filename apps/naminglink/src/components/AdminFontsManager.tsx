"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AdminShell } from "@/components/AdminOperationsConsole";
import { PageHeader, Table } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

// 프리미엄 PDF 서체 관리 화면.
// 업로드 시 판매 문서 임베딩이 허용된 라이선스인지 관리자가 확인하고 유형·출처를 필수 입력한다.
// 스토리(한국어)는 저장 시 서버가 23개 로케일로 번역해 함께 저장한다.

type FontRow = {
  id: string;
  code: string;
  name_ko: string;
  name_en: string;
  copyright_holder: string;
  license_type: string;
  source_url: string;
  story_ko: string;
  stories: Record<string, string>;
  enabled: boolean;
  sort_order: number;
};

const emptyForm = {
  code: "",
  name_ko: "",
  name_en: "",
  copyright_holder: "",
  license_type: "OFL",
  source_url: "",
  story_ko: "",
  sort_order: "0",
};

export function AdminFontsManager() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [fonts, setFonts] = useState<FontRow[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async (accessToken: string) => {
    const response = await fetch("/api/admin/fonts", {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
    if (response.status === 401 || response.status === 403) {
      router.replace("/naming-artist/login");
      return;
    }
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; fonts?: FontRow[]; error?: string }
      | null;
    if (!data?.ok) {
      setError(data?.error ?? "서체 목록을 불러오지 못했습니다.");
      return;
    }
    setFonts(data.fonts ?? []);
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

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!token || busy) return;
    if (!file) {
      setError("폰트 파일(TTF/OTF)을 선택해 주세요.");
      return;
    }
    setBusy(true);
    setError("");
    setMessage("업로드·번역 중… (약 20초)");
    try {
      const body = new FormData();
      body.append("file", file);
      for (const [key, value] of Object.entries(form)) body.append(key, value);
      const response = await fetch("/api/admin/fonts", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body,
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; translatedLocales?: number }
        | null;
      if (!response.ok || !data?.ok) throw new Error(data?.error ?? "등록에 실패했습니다.");
      setMessage(`등록 완료 (스토리 ${data.translatedLocales ?? 0}개 언어 번역됨)`);
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
    if (!token) return;
    setError("");
    const response = await fetch("/api/admin/fonts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id, ...changes }),
    });
    const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!data?.ok) {
      setError(data?.error ?? "수정에 실패했습니다.");
      return;
    }
    await load(token);
  }

  const inputClass = "h-10 w-full rounded-lg border border-line bg-background px-3 text-sm";

  return (
    <AdminShell>
      <PageHeader
        title="서체 관리"
        description="프리미엄 PDF에 쓰이는 서체를 등록·관리합니다. 판매 문서 임베딩이 허용된 라이선스만 등록하세요. 스토리는 저장 시 23개 언어로 자동 번역됩니다."
      />

      <form onSubmit={submit} className="grid gap-3 rounded-lg border border-line bg-surface p-5 shadow-sm">
        <p className="text-sm font-semibold">새 서체 등록</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="grid gap-1 text-sm">
            <span className="text-xs text-muted">코드 (영소문자·숫자·하이픈)</span>
            <input value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="chusa-love" required className={inputClass} />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-xs text-muted">이름(한국어)</span>
            <input value={form.name_ko} onChange={(e) => setForm({ ...form, name_ko: e.target.value })} placeholder="추사사랑체" required className={inputClass} />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-xs text-muted">이름(영문)</span>
            <input value={form.name_en} onChange={(e) => setForm({ ...form, name_en: e.target.value })} placeholder="Chusa Love" required className={inputClass} />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-xs text-muted">저작권자</span>
            <input value={form.copyright_holder} onChange={(e) => setForm({ ...form, copyright_holder: e.target.value })} placeholder="예산군" required className={inputClass} />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-xs text-muted">라이선스</span>
            <select value={form.license_type} onChange={(e) => setForm({ ...form, license_type: e.target.value })} className={inputClass}>
              <option value="OFL">OFL</option>
              <option value="KOGL-1">공공누리 1유형</option>
              <option value="KOGL-3">공공누리 3유형</option>
              <option value="FREE-EMBED">자체 무료(임베딩 허용 확인)</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-xs text-muted">출처 URL</span>
            <input value={form.source_url} onChange={(e) => setForm({ ...form, source_url: e.target.value })} placeholder="https://..." required className={inputClass} />
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          <span className="text-xs text-muted">스토리 (한국어 — 사실에 근거해 2~3문장)</span>
          <textarea value={form.story_ko} onChange={(e) => setForm({ ...form, story_ko: e.target.value })} rows={3} required className="w-full rounded-lg border border-line bg-background px-3 py-2 text-sm" />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <input type="file" accept=".ttf,.otf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="text-sm" />
          <label className="flex items-center gap-2 text-sm">
            <span className="text-xs text-muted">정렬</span>
            <input value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} className="h-10 w-20 rounded-lg border border-line bg-background px-3 text-sm" />
          </label>
          <button type="submit" disabled={busy} className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-50">
            {busy ? "등록 중…" : "서체 등록"}
          </button>
        </div>
        {message ? <p className="text-sm text-brand-teal">{message}</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>

      <section className="mt-5">
        <Table
          headers={["코드", "이름", "저작권자", "라이선스", "번역", "정렬", "노출", "스토리"]}
          rows={fonts.map((font) => [
            font.code,
            `${font.name_ko} / ${font.name_en}`,
            font.copyright_holder,
            font.license_type,
            `${Object.keys(font.stories ?? {}).length}개 언어`,
            font.sort_order,
            <button
              key="toggle"
              type="button"
              onClick={() => void patch(font.id, { enabled: !font.enabled })}
              className={`rounded-lg border px-3 py-1 text-xs font-semibold ${font.enabled ? "border-brand-teal/40 text-brand-teal" : "border-line text-muted"}`}
            >
              {font.enabled ? "노출 중" : "숨김"}
            </button>,
            <div key="story" className="max-w-[280px] truncate" title={font.story_ko}>
              {font.story_ko}
            </div>,
          ])}
        />
      </section>
    </AdminShell>
  );
}
