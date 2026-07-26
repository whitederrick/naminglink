"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Database, History, Plus, Save } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { FilterBar, FilterSearch, FilterSelect, Pagination, usePagedList } from "@/components/admin-ui";

const categories = [
  { key: "COUNTRY_LANGUAGE", label: "국가·언어", help: "국가 코드, 기본 언어, 지역별 발음 특성과 서비스 노출 순서", sample: { countryCode: "KR", defaultLocale: "ko", languageNames: ["Korean"], pronunciationNotes: "" } },
  { key: "NAME_PRONUNCIATION", label: "이름·발음 규칙", help: "언어별 음역 규칙, 예외 표기, 금칙어와 문화적 주의사항", sample: { sourceLanguage: "", rule: "", exceptions: [], cautions: [] } },
  { key: "HANJA", label: "한자 데이터", help: "공식 인명용 한자 원본, 규칙, 표제자와 변형자 데이터", sample: { sourceKey: "", status: "draft", notes: "" } },
  { key: "AI_SERVICE", label: "AI 서비스·프롬프트", help: "서비스별 모델, 프롬프트 버전, 후보 수와 무료 이용 한도", sample: { serviceType: "", model: "gpt-4o-mini", promptVersion: 1, candidateCount: 3, dailyLimit: 20 } },
  { key: "PRODUCT_PRICING", label: "상품·가격", help: "상품, 통화별 가격, 옵션, 판매 국가와 활성 상태", sample: { productType: "", currency: "KRW", amount: 0, countries: [], options: [] } },
  { key: "PAYMENT_SHIPPING", label: "결제·배송", help: "국가별 결제수단, 배송 가능 지역, 배송비와 주소 삭제 기준", sample: { countryCode: "", paymentMethods: [], shippingFee: 0, addressRetentionDays: 0 } },
  { key: "AD_SLOT", label: "광고 슬롯", help: "광고 사업자, 노출 위치, 보상 조건과 국가별 활성화", sample: { slotKey: "", provider: "", rewardSeconds: 5, countries: [], enabled: true } },
  { key: "TRANSLATION_COPY", label: "번역·화면 문구", help: "언어별 버튼, 안내, 오류 문구와 게시 상태", sample: { locale: "ko", messageKey: "", value: "", published: false } },
  { key: "SYSTEM_SETTING", label: "시스템 설정", help: "기능 공개, 점검 모드, 고객지원과 개인정보 보관 기간", sample: { settingKey: "", value: null, description: "" } },
] as const;

type Category = (typeof categories)[number]["key"];
type RecordRow = {
  id: string;
  category: Category;
  record_key: string;
  label: string;
  data: Record<string, unknown>;
  is_active: boolean;
  sort_order: number;
  updated_at: string;
};

type Revision = {
  id: number;
  action: string;
  snapshot: Record<string, unknown>;
  changed_at: string;
};

const emptyForm = { id: "", recordKey: "", label: "", json: "{}", isActive: true, sortOrder: 0 };

export function AdminMasterDataManager() {
  const [category, setCategory] = useState<Category>("COUNTRY_LANGUAGE");
  const [records, setRecords] = useState<RecordRow[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [recordSearch, setRecordSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const descriptor = useMemo(() => categories.find((item) => item.key === category)!, [category]);
  const filteredRecords = useMemo(
    () =>
      records.filter((record) => {
        const keyword = recordSearch.toLowerCase();
        if (keyword && !record.label.toLowerCase().includes(keyword) && !record.record_key.toLowerCase().includes(keyword)) return false;
        if (activeFilter === "active" && !record.is_active) return false;
        if (activeFilter === "inactive" && record.is_active) return false;
        return true;
      }),
    [records, recordSearch, activeFilter],
  );
  const pagedRecords = usePagedList(filteredRecords, `${category}|${recordSearch}|${activeFilter}|${records.length}`);

  const loadRecords = useCallback(async (accessToken: string, nextCategory: Category) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`/api/admin/master-data?category=${nextCategory}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
    const payload = await response.json();
    setLoading(false);
    if (!response.ok) { setError(payload.error ?? "기준 데이터를 불러오지 못했습니다."); return; }
    setRecords(payload.records ?? []);
  }, []);

  useEffect(() => {
    async function initialize() {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase?.auth.getSession() ?? { data: { session: null } };
      if (!data.session) { window.location.href = "/naming-artist/login"; return; }
      setToken(data.session.access_token);
      await loadRecords(data.session.access_token, category);
    }
    void initialize();
  }, [category, loadRecords]);

  function startNew() {
    setForm({ ...emptyForm, json: JSON.stringify(descriptor.sample, null, 2) });
    setRevisions([]);
    setMessage(null);
  }

  async function editRecord(record: RecordRow) {
    setForm({ id: record.id, recordKey: record.record_key, label: record.label, json: JSON.stringify(record.data, null, 2), isActive: record.is_active, sortOrder: record.sort_order });
    setRevisions([]);
    if (!token) return;
    const response = await fetch(`/api/admin/master-data?recordId=${record.id}`, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
    const payload = await response.json();
    if (response.ok) setRevisions(payload.revisions ?? []);
  }

  async function save() {
    if (!token) return;
    let data: Record<string, unknown>;
    try { data = JSON.parse(form.json); }
    catch { setError("JSON 데이터 형식을 확인하십시오."); return; }
    setSaving(true); setError(null); setMessage(null);
    const response = await fetch("/api/admin/master-data", {
      method: form.id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...(form.id ? { id: form.id } : {}), category, recordKey: form.recordKey, label: form.label, data, isActive: form.isActive, sortOrder: form.sortOrder }),
    });
    const payload = await response.json();
    setSaving(false);
    if (!response.ok) { setError(payload.error ?? "저장하지 못했습니다."); return; }
    setMessage(form.id ? "기준 데이터를 수정했습니다." : "기준 데이터를 추가했습니다.");
    await loadRecords(token, category);
    await editRecord(payload.record);
  }

  async function importDefaults() {
    if (!token) return;
    setSaving(true); setError(null); setMessage(null);
    const response = await fetch("/api/admin/master-data", { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ category }) });
    const payload = await response.json();
    setSaving(false);
    if (!response.ok) { setError(payload.error ?? "기본 데이터를 가져오지 못했습니다."); return; }
    setMessage(`현재 서비스 기준 ${payload.count}개를 가져왔습니다.`);
    await loadRecords(token, category);
  }

  return <div className="grid gap-6">
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-3xl"><p className="text-sm text-brand-teal">Master Data</p><h1 className="mt-1 text-3xl font-semibold">기준 데이터 관리</h1><p className="mt-2 text-sm leading-6 text-muted">서비스 구동에 쓰는 기준 정보(국가·언어, 상품 가격, 광고 슬롯 등)를 종류별로 관리합니다. 항목을 수정하면 변경 이력이 남고, 비활성화하면 서비스에서 제외됩니다. &lsquo;현재 기준 가져오기&rsquo;로 코드에 정의된 기본값을 불러올 수 있습니다.</p></div>
      <div className="flex gap-2"><button type="button" onClick={() => void importDefaults()} disabled={saving} className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold">현재 기준 가져오기</button><button type="button" onClick={startNew} className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background"><Plus size={16}/>새 항목</button></div>
    </header>

    <nav className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((item) => <button key={item.key} type="button" onClick={() => { setCategory(item.key); setForm(emptyForm); setRevisions([]); }} className={`whitespace-nowrap rounded-lg border px-3 py-2 text-sm ${category === item.key ? "border-foreground bg-foreground text-background" : "border-line bg-surface text-muted"}`}>{item.label}</button>)}
    </nav>

    <section className="rounded-xl border border-line bg-surface p-4"><h2 className="font-semibold">{descriptor.label}</h2><p className="mt-1 text-sm text-muted">{descriptor.help}</p>{category === "HANJA" ? <Link href="/naming-artist/hanja" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"><Database size={16}/>한자 원본·가져오기 관리</Link> : null}</section>

    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="min-w-0 grid content-start gap-3"><h2 className="text-lg font-semibold">등록 항목 <span className="text-sm font-normal text-muted">{records.length}</span></h2><FilterBar><FilterSearch value={recordSearch} onChange={setRecordSearch} placeholder="이름·키 검색" /><FilterSelect label="상태" value={activeFilter} onChange={setActiveFilter} options={[{ value: "all", label: "전체" }, { value: "active", label: "활성" }, { value: "inactive", label: "비활성" }]} /></FilterBar>{loading ? <p className="rounded-xl border border-line bg-surface p-6 text-sm text-muted">불러오는 중입니다.</p> : filteredRecords.length === 0 ? <p className="rounded-xl border border-dashed border-line bg-surface p-8 text-center text-sm text-muted">{records.length === 0 ? "등록된 항목이 없습니다. 새 항목을 추가하십시오." : "조건에 맞는 항목이 없습니다. 검색어나 필터를 바꿔 보세요."}</p> : <div className="grid gap-2">{pagedRecords.pageItems.map((record) => <button key={record.id} type="button" onClick={() => void editRecord(record)} className={`rounded-xl border p-4 text-left ${form.id === record.id ? "border-foreground bg-surface-strong" : "border-line bg-surface"}`}><div className="flex items-center justify-between gap-3"><span className="font-semibold">{record.label}</span><span className={`rounded-full px-2 py-1 text-xs ${record.is_active ? "bg-brand-teal/10 text-brand-teal" : "bg-surface-strong text-muted"}`}>{record.is_active ? "활성" : "비활성"}</span></div><p className="mt-1 font-mono text-xs text-muted">{record.record_key}</p><p className="mt-2 text-xs text-muted">정렬 {record.sort_order} · {new Date(record.updated_at).toLocaleString("ko-KR")}</p></button>)}</div>}<Pagination page={pagedRecords.page} totalPages={pagedRecords.totalPages} total={pagedRecords.total} onChange={pagedRecords.setPage} /></section>

      <section className="rounded-xl border border-line bg-surface p-5"><h2 className="text-lg font-semibold">{form.id ? "항목 편집" : "새 항목"}</h2><div className="mt-5 grid gap-4"><label className="grid gap-2"><span className="text-sm font-medium">관리 키</span><input value={form.recordKey} onChange={(e) => setForm((current) => ({ ...current, recordKey: e.target.value }))} placeholder="영문, 숫자, ., _, - 사용" className="h-10 rounded-lg border border-line bg-background px-3 font-mono text-sm"/></label><label className="grid gap-2"><span className="text-sm font-medium">표시 이름</span><input value={form.label} onChange={(e) => setForm((current) => ({ ...current, label: e.target.value }))} className="h-10 rounded-lg border border-line bg-background px-3 text-sm"/></label><div className="grid grid-cols-2 gap-3"><label className="grid gap-2"><span className="text-sm font-medium">정렬 순서</span><input type="number" value={form.sortOrder} onChange={(e) => setForm((current) => ({ ...current, sortOrder: Number(e.target.value) }))} className="h-10 rounded-lg border border-line bg-background px-3 text-sm"/></label><label className="flex items-end gap-2 pb-2 text-sm"><input type="checkbox" checked={form.isActive} onChange={(e) => setForm((current) => ({ ...current, isActive: e.target.checked }))}/>활성 상태</label></div><label className="grid gap-2"><span className="text-sm font-medium">구조화 데이터(JSON)</span><textarea value={form.json} onChange={(e) => setForm((current) => ({ ...current, json: e.target.value }))} spellCheck={false} rows={14} className="rounded-lg border border-line bg-background p-3 font-mono text-xs leading-5"/></label><button type="button" onClick={() => void save()} disabled={saving || !form.recordKey || !form.label} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:opacity-50"><Save size={16}/>{saving ? "저장 중…" : "저장"}</button>{error ? <p className="text-sm text-brand-rose">{error}</p> : null}{message ? <p className="text-sm text-brand-teal">{message}</p> : null}</div>

        {form.id ? <div className="mt-6 border-t border-line pt-5"><h3 className="flex items-center gap-2 font-semibold"><History size={16}/>변경 이력</h3>{revisions.length === 0 ? <p className="mt-3 text-sm text-muted">변경 이력이 없습니다.</p> : <ul className="mt-3 grid gap-2">{revisions.map((revision) => <li key={revision.id} className="flex justify-between rounded-lg bg-surface-strong px-3 py-2 text-xs"><span>{revision.action}</span><time className="text-muted">{new Date(revision.changed_at).toLocaleString("ko-KR")}</time></li>)}</ul>}</div> : null}
      </section>
    </div>
  </div>;
}
