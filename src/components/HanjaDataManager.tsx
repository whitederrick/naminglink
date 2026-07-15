"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Database, FileSearch, RefreshCw, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type Source = {
  id: string;
  source_key: string;
  title: string;
  version_label: string | null;
  effective_date: string | null;
  source_file_name: string | null;
  source_sha256: string | null;
  status: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

type PronunciationSource = {
  id: string;
  title: string;
  source_file_name: string | null;
  page_count: number | null;
  extraction_status: string;
  source_sha256: string | null;
};

type Entry = {
  id: string;
  hangul_syllable: string;
  hanja: string;
  designated_reading: string;
  meaning_ko: string | null;
  page_number: number | null;
  is_name_usable: boolean;
  review_status: "ocr" | "reviewed" | "production" | "rejected";
  notes: string | null;
};

type Payload = {
  sources: Source[];
  activeSource: Source | null;
  entries: Entry[];
  statusCounts: Record<string, number>;
  pronunciationSources: PronunciationSource[];
};

async function adminToken() {
  const supabase = getSupabaseBrowserClient();
  const { data } = await supabase?.auth.getSession() ?? { data: { session: null } };
  return data.session?.access_token ?? null;
}

function Metric({ label, value, note }: { label: string; value: number | string; note: string }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-xs leading-5 text-muted">{note}</p>
    </article>
  );
}

function EntryEditor({ entry, onSaved }: { entry: Entry; onSaved: () => void }) {
  const [meaning, setMeaning] = useState(entry.meaning_ko ?? "");
  const [notes, setNotes] = useState(entry.notes ?? "");
  const [status, setStatus] = useState(entry.review_status);
  const [usable, setUsable] = useState(entry.is_name_usable);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save() {
    setSaving(true);
    setError(null);
    const token = await adminToken();
    if (!token) return;
    const response = await fetch("/api/admin/hanja", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        action: "UPDATE_ENTRY",
        entryId: entry.id,
        meaningKo: meaning.trim() || null,
        notes: notes.trim() || null,
        reviewStatus: status,
        isNameUsable: usable,
      }),
    });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "저장하지 못했습니다.");
    else onSaved();
    setSaving(false);
  }

  return (
    <tr className="border-t border-line align-top">
      <td className="px-3 py-3 text-center font-semibold">{entry.hangul_syllable}</td>
      <td className="px-3 py-3 text-center text-2xl font-semibold">{entry.hanja}</td>
      <td className="px-3 py-3 text-sm">{entry.designated_reading}</td>
      <td className="min-w-64 px-3 py-3">
        <input value={meaning} onChange={(event) => setMeaning(event.target.value)} placeholder="예: 홀 규" className="h-9 w-full rounded-lg border border-line bg-background px-3 text-sm" />
        <input value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="추천 해석 및 검수 메모" className="mt-2 h-9 w-full rounded-lg border border-line bg-background px-3 text-sm" />
        {error ? <p className="mt-1 text-xs text-brand-rose">{error}</p> : null}
      </td>
      <td className="px-3 py-3 text-sm">{entry.page_number ? `${entry.page_number}쪽` : "-"}</td>
      <td className="min-w-36 px-3 py-3">
        <select value={status} onChange={(event) => setStatus(event.target.value as Entry["review_status"])} className="h-9 w-full rounded-lg border border-line bg-background px-2 text-sm">
          <option value="ocr">자동 추출</option>
          <option value="reviewed">검수 완료</option>
          <option value="production">운영 승인</option>
          <option value="rejected">제외</option>
        </select>
        <label className="mt-2 flex items-center gap-2 text-xs text-muted">
          <input type="checkbox" checked={usable} onChange={(event) => setUsable(event.target.checked)} /> 이름 사용 가능
        </label>
      </td>
      <td className="px-3 py-3">
        <button type="button" disabled={saving} onClick={() => void save()} className="h-9 rounded-lg bg-foreground px-3 text-xs font-semibold text-background disabled:opacity-50">
          {saving ? "저장 중" : "저장"}
        </button>
      </td>
    </tr>
  );
}

export function HanjaDataManager() {
  const router = useRouter();
  const [payload, setPayload] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [syllable, setSyllable] = useState("");
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const token = await adminToken();
    if (!token) {
      router.replace("/naming-artist/login");
      return;
    }
    const params = new URLSearchParams();
    if (syllable.trim()) params.set("syllable", syllable.trim());
    if (status) params.set("status", status);
    const response = await fetch(`/api/admin/hanja?${params}`, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "한자 데이터를 불러오지 못했습니다.");
    else setPayload(result);
    setLoading(false);
  }, [router, status, syllable]);

  useEffect(() => {
    async function initialize() {
      await load();
    }

    void initialize();
  }, [load]);

  async function upload(event: React.FormEvent<HTMLFormElement>, documentType: "HANJA" | "ROMANIZATION") {
    event.preventDefault();
    setUploading(documentType);
    setError(null);
    const token = await adminToken();
    if (!token) return;
    const formData = new FormData(event.currentTarget);
    formData.set("documentType", documentType);
    const response = await fetch("/api/admin/hanja", { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: formData });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "PDF를 처리하지 못했습니다.");
    else if (result.extractionStatus === "needs_ocr") setError("원본은 저장했지만 텍스트 레이어가 없어 OCR 검수가 필요합니다.");
    await load();
    setUploading(null);
  }

  async function publishSource(sourceId: string) {
    const token = await adminToken();
    if (!token) return;
    const response = await fetch("/api/admin/hanja", { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ action: "PUBLISH_SOURCE", sourceId }) });
    const result = await response.json();
    if (!response.ok) setError(result.error ?? "운영 원본으로 반영하지 못했습니다.");
    else await load();
  }

  const source = payload?.activeSource;
  const counts = payload?.statusCounts ?? {};

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-teal">Service Operations</p>
          <h1 className="mt-1 text-3xl font-semibold">한자·발음 기준 데이터</h1>
          <p className="mt-2 text-sm leading-6 text-muted">공식 원본 보존, 자동 추출, 사람 검수, 운영 승인을 분리해 관리합니다.</p>
        </div>
        <button type="button" onClick={() => void load()} className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm"><RefreshCw size={16} />새로고침</button>
      </header>

      {error ? <div className="rounded-xl border border-brand-rose/30 bg-brand-rose/10 p-4 text-sm text-brand-rose">{error}</div> : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="자동 추출" value={counts.ocr ?? 0} note="아직 운영 추천에 사용하지 않음" />
        <Metric label="검수 완료" value={counts.reviewed ?? 0} note="의미와 지정 발음을 확인한 항목" />
        <Metric label="운영 승인" value={counts.production ?? 0} note="사용자 추천 API가 조회하는 항목" />
        <Metric label="검수 제외" value={counts.rejected ?? 0} note="오인식 또는 사용 제외 항목" />
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <form onSubmit={(event) => void upload(event, "HANJA")} className="rounded-xl border border-line bg-surface p-5 shadow-sm">
          <div className="flex items-center gap-2"><UploadCloud className="text-brand-teal" size={20} /><h2 className="text-lg font-semibold">인명용 한자 PDF 등록</h2></div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">원본 키<input name="sourceKey" defaultValue="scourt-hanja-2024-06-11" required className="h-10 rounded-lg border border-line bg-background px-3" /></label>
            <label className="grid gap-1 text-sm">문서명<input name="title" defaultValue="대법원 인명용 한자표" required className="h-10 rounded-lg border border-line bg-background px-3" /></label>
            <label className="grid gap-1 text-sm">버전<input name="versionLabel" defaultValue="2024. 6. 11. 시행" className="h-10 rounded-lg border border-line bg-background px-3" /></label>
            <label className="grid gap-1 text-sm">시행일<input name="effectiveDate" type="date" defaultValue="2024-06-11" className="h-10 rounded-lg border border-line bg-background px-3" /></label>
          </div>
          <input name="file" type="file" accept="application/pdf" required className="mt-4 block w-full rounded-lg border border-line bg-background p-3 text-sm" />
          <button disabled={uploading !== null} className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-50"><Database size={16} />{uploading === "HANJA" ? "추출 중" : "원본 저장 및 추출"}</button>
        </form>

        <form onSubmit={(event) => void upload(event, "ROMANIZATION")} className="rounded-xl border border-line bg-surface p-5 shadow-sm">
          <div className="flex items-center gap-2"><FileSearch className="text-brand-teal" size={20} /><h2 className="text-lg font-semibold">국어 로마자 표기 참고자료</h2></div>
          <p className="mt-2 text-sm leading-6 text-muted">외국 이름 한글 발음의 보조 참고자료로 저장합니다. 역방향 음역의 확정 규칙으로 사용하지 않습니다.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">원본 키<input name="sourceKey" defaultValue="korean-romanization-reference" required className="h-10 rounded-lg border border-line bg-background px-3" /></label>
            <label className="grid gap-1 text-sm">문서명<input name="title" defaultValue="국어의 로마자 표기 조회" required className="h-10 rounded-lg border border-line bg-background px-3" /></label>
          </div>
          <input name="file" type="file" accept="application/pdf" required className="mt-4 block w-full rounded-lg border border-line bg-background p-3 text-sm" />
          <button disabled={uploading !== null} className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-50"><FileSearch size={16} />{uploading === "ROMANIZATION" ? "분석 중" : "원본 저장 및 분석"}</button>
        </form>
      </section>

      <section className="rounded-xl border border-line bg-surface p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-sm text-muted">현재 선택 원본</p><h2 className="mt-1 text-lg font-semibold">{source?.title ?? "등록된 원본 없음"}</h2></div>
          {source && source.status !== "production" ? <button type="button" onClick={() => void publishSource(source.id)} className="inline-flex h-10 items-center gap-2 rounded-lg bg-brand-teal px-4 text-sm font-semibold text-white"><CheckCircle2 size={16} />운영 원본으로 반영</button> : null}
        </div>
        {source ? <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-4"><div><dt className="text-muted">상태</dt><dd className="mt-1 font-semibold">{source.status}</dd></div><div><dt className="text-muted">버전</dt><dd className="mt-1 font-semibold">{source.version_label ?? "-"}</dd></div><div><dt className="text-muted">파일</dt><dd className="mt-1 font-semibold">{source.source_file_name ?? "-"}</dd></div><div><dt className="text-muted">SHA-256</dt><dd className="mt-1 truncate font-mono text-xs">{source.source_sha256 ?? "-"}</dd></div></dl> : null}
      </section>

      <section className="grid gap-4">
        <div className="flex flex-wrap items-end gap-3">
          <label className="grid gap-1 text-sm">한글 음절<input value={syllable} onChange={(event) => setSyllable(event.target.value.slice(0, 1))} placeholder="예: 규" className="h-10 w-32 rounded-lg border border-line bg-surface px-3" /></label>
          <label className="grid gap-1 text-sm">검수 상태<select value={status} onChange={(event) => setStatus(event.target.value)} className="h-10 rounded-lg border border-line bg-surface px-3"><option value="">전체</option><option value="ocr">자동 추출</option><option value="reviewed">검수 완료</option><option value="production">운영 승인</option><option value="rejected">제외</option></select></label>
          <button type="button" onClick={() => void load()} className="h-10 rounded-lg border border-line bg-surface px-4 text-sm font-semibold">조회</button>
        </div>
        <div className="overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full min-w-[1050px] text-left"><thead className="bg-surface-strong text-sm"><tr><th className="px-3 py-3 text-center">음절</th><th className="px-3 py-3 text-center">한자</th><th className="px-3 py-3">지정 발음</th><th className="px-3 py-3">의미·검수 메모</th><th className="px-3 py-3">원본</th><th className="px-3 py-3">상태</th><th className="px-3 py-3">관리</th></tr></thead><tbody>{payload?.entries.map((entry) => <EntryEditor key={entry.id} entry={entry} onSaved={() => void load()} />)}</tbody></table>
          {!loading && !payload?.entries.length ? <p className="p-8 text-center text-sm text-muted">조건에 해당하는 한자 데이터가 없습니다.</p> : null}
          {loading ? <p className="p-8 text-center text-sm text-muted">한자 데이터를 불러오는 중입니다.</p> : null}
        </div>
      </section>

      <section className="rounded-xl border border-line bg-surface p-5 shadow-sm">
        <h2 className="text-lg font-semibold">발음 참고자료 상태</h2>
        <div className="mt-4 grid gap-3">{payload?.pronunciationSources.map((item) => <div key={item.id} className="grid gap-2 rounded-lg border border-line bg-background p-4 sm:grid-cols-[1fr_auto]"><div><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm text-muted">{item.source_file_name ?? "-"} · {item.page_count ?? 0}쪽</p></div><span className="h-fit rounded-full bg-surface-strong px-3 py-1 text-xs font-semibold">{item.extraction_status === "needs_ocr" ? "OCR 필요" : item.extraction_status}</span></div>)}</div>
      </section>
    </div>
  );
}
