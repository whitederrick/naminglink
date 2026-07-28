"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AdminShell } from "@/components/AdminOperationsConsole";
import { PageHeader, Pagination, Table, usePagedList } from "@/components/admin-ui";
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
  /** 이용자가 이 서체를 고른 횟수. 목록 순서가 왜 이런지 눈으로 보이게 하려고 함께 표시한다. */
  pick_count: number;
  preview_path: string | null;
};

// 미리보기는 공개 버킷의 PNG다. CSP img-src에 Supabase 주소가 있어야 보인다(2026-07-28 사고).
const previewUrlOf = (font: FontRow) => {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base || !font.preview_path) return null;
  return `${base}/storage/v1/object/public/font-previews/${font.preview_path}`;
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
  // 스토리는 길어서 표에 두면 다른 열을 다 밀어낸다. 목록에서는 빼고 상세 팝업에서 보여 준다.
  const [detail, setDetail] = useState<FontRow | null>(null);

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
  // 등록 서체가 18종을 넘어가면서 한 화면에 다 나오면 아래 표가 길어진다. 10개씩 끊는다.
  const paged = usePagedList(fonts, `fonts-${fonts.length}`, 10);

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
        <p className="mb-2 text-xs text-muted">
          목록 순서는 이용자 화면과 같습니다 — <strong>선택수가 많은 순</strong>, 같으면{" "}
          <strong>정렬값이 작은 순</strong>. 정렬값은 표에서 바로 고칠 수 있습니다.
        </p>
        <Table
          headers={["미리보기", "코드", "이름", "라이선스", "선택수", "정렬", "노출", "상세"]}
          rows={paged.pageItems.map((font) => [
            <FontPreview key="preview" font={font} />,
            font.code,
            `${font.name_ko} / ${font.name_en}`,
            font.license_type,
            font.pick_count ?? 0,
            // 값을 바꾸고 포커스를 벗어나면 저장한다(엔터도 같다). 실수로 바꾼 값은 새로고침하면 되돌아온다.
            <input
              key="sort"
              type="number"
              min={0}
              max={9999}
              defaultValue={font.sort_order}
              onKeyDown={(event) => {
                if (event.key === "Enter") event.currentTarget.blur();
              }}
              onBlur={(event) => {
                const next = Math.max(0, Math.min(Math.floor(Number(event.target.value)) || 0, 9999));
                event.target.value = String(next);
                if (next !== font.sort_order) void patch(font.id, { sort_order: next });
              }}
              className="h-8 w-16 rounded border border-line bg-background px-2 text-sm"
            />,
            <button
              key="toggle"
              type="button"
              onClick={() => void patch(font.id, { enabled: !font.enabled })}
              className={`rounded-lg border px-3 py-1 text-xs font-semibold ${font.enabled ? "border-brand-teal/40 text-brand-teal" : "border-line text-muted"}`}
            >
              {font.enabled ? "노출 중" : "숨김"}
            </button>,
            <button
              key="detail"
              type="button"
              onClick={() => setDetail(font)}
              className="rounded border border-line px-2 py-1 text-xs"
            >
              보기
            </button>,
          ])}
        />
        <Pagination page={paged.page} totalPages={paged.totalPages} total={paged.total} onChange={paged.setPage} />
      </section>

      {detail ? <FontDetailModal font={detail} onClose={() => setDetail(null)} /> : null}
    </AdminShell>
  );
}

function FontPreview({ font }: { font: FontRow }) {
  const url = previewUrlOf(font);
  if (!url) return <span className="text-xs text-muted">없음</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={`${font.name_ko} 미리보기`}
      className="h-9 w-auto max-w-[160px] object-contain"
      loading="lazy"
    />
  );
}

/** 목록에서 뺀 정보(스토리·저작권자·출처·번역 언어)를 여기서 모두 본다. */
function FontDetailModal({ font, onClose }: { font: FontRow; onClose: () => void }) {
  const url = previewUrlOf(font);
  const locales = Object.keys(font.stories ?? {}).sort();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-line bg-surface p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{font.name_ko}</h2>
            <p className="mt-1 text-sm text-muted">
              {font.name_en} · <code>{font.code}</code>
            </p>
          </div>
          <button type="button" onClick={onClose} className="rounded border border-line px-3 py-1 text-sm">
            닫기
          </button>
        </div>

        {url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={url} alt={`${font.name_ko} 미리보기`} className="mt-4 max-h-32 w-auto object-contain" />
        ) : (
          <p className="mt-4 text-sm text-muted">미리보기 이미지가 없습니다.</p>
        )}

        <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs text-muted">저작권자</dt>
            <dd>{font.copyright_holder}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">라이선스</dt>
            <dd>{font.license_type}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">선택수 · 정렬값</dt>
            <dd>
              {font.pick_count ?? 0}회 · {font.sort_order}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-muted">노출</dt>
            <dd>{font.enabled ? "노출 중" : "숨김"}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs text-muted">출처</dt>
            <dd className="break-all">
              <a href={font.source_url} target="_blank" rel="noreferrer" className="text-brand-teal underline">
                {font.source_url}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-5">
          <p className="text-xs text-muted">스토리 (한국어 원문)</p>
          <p className="mt-1 whitespace-pre-line text-sm leading-6">{font.story_ko}</p>
        </div>

        <div className="mt-4">
          <p className="text-xs text-muted">번역된 언어 {locales.length}개</p>
          <p className="mt-1 break-all text-xs text-muted">{locales.join(", ") || "없음"}</p>
        </div>
      </div>
    </div>
  );
}
