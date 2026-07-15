"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BarChart3, BookOpenCheck, Bot, Boxes, FilePenLine, Globe2, LayoutDashboard, LogOut, Package, Users } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

const basePath = "/naming-artist";
const nav = [
  ["대시보드", basePath, LayoutDashboard],
  ["회원 관리", `${basePath}/users`, Users],
  ["굿즈 주문", `${basePath}/orders`, Package],
  ["AI 사용량", `${basePath}/ai-usage`, Bot],
  ["글로벌 접속", `${basePath}/analytics`, Globe2],
  ["활용·광고", `${basePath}/usage`, BarChart3],
  ["한자·발음 기준", `${basePath}/hanja`, BookOpenCheck],
  ["정책·푸터", `${basePath}/content`, FilePenLine],
  ["기준 데이터", `${basePath}/data`, Boxes],
] as const;

type View = "dashboard" | "users" | "orders" | "ai" | "analytics" | "usage";
type Snapshot = {
  days: number;
  summary: Record<string, number>;
  countries: Array<{ country_code: string; visits: number; visitors: number }>;
  services: Array<{ service_type: string; started: number; completed: number; failed: number }>;
  daily: Array<{ day: string; visits: number; analyses: number }>;
  orderStatuses: Array<{ payment_status: string; fulfillment_status: string; count: number; amount: number }>;
  aiModels: Array<{ model: string; calls: number; tokens: number; avg_latency_ms: number }>;
};

const number = new Intl.NumberFormat("ko-KR");
const date = new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: "short" });
const countryNames = new Intl.DisplayNames(["ko"], { type: "region" });

function Metric({ label, value, note }: { label: string; value: ReactNode; note?: string }) {
  return <article className="rounded-xl border border-line bg-surface p-5 shadow-sm"><p className="text-sm text-muted">{label}</p><p className="mt-2 text-3xl font-semibold">{value}</p>{note ? <p className="mt-2 text-xs text-muted">{note}</p> : null}</article>;
}

function Empty({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-dashed border-line bg-surface p-10 text-center text-sm text-muted">{children}</div>;
}

function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  if (!rows.length) return <Empty>아직 집계할 데이터가 없습니다. 실제 이용이 발생하면 자동으로 표시됩니다.</Empty>;
  return <div className="overflow-x-auto rounded-xl border border-line bg-surface"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-surface-strong"><tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index} className="border-t border-line">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 text-muted first:text-foreground">{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  async function logout() { await getSupabaseBrowserClient()?.auth.signOut(); router.replace(`${basePath}/login`); }
  return <main className="min-h-screen bg-background"><div className="mx-auto grid w-full max-w-[1500px] lg:grid-cols-[240px_1fr]"><aside className="border-b border-line bg-surface p-5 lg:min-h-screen lg:border-b-0 lg:border-r"><Link href={basePath} className="text-lg font-semibold">Naming Artist</Link><p className="mt-1 text-xs text-muted">운영자 콘솔</p><nav className="mt-6 grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-1">{nav.map(([label, href, Icon]) => { const active = pathname === href; return <Link key={href} href={href} className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${active ? "bg-foreground text-background" : "text-muted hover:bg-surface-strong hover:text-foreground"}`}><Icon size={16} />{label}</Link>; })}</nav><button type="button" onClick={logout} className="mt-6 flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-foreground"><LogOut size={16} />로그아웃</button></aside><section className="min-w-0 p-5 sm:p-8">{children}</section></div></main>;
}

export function AdminOperationsConsole({ view }: { view: View }) {
  const router = useRouter();
  const [days, setDays] = useState(30);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true); setError(null);
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase?.auth.getSession() ?? { data: { session: null } };
      if (!data.session) { router.replace(`${basePath}/login`); return; }
      const apiView = view === "ai" ? "ai" : view === "users" ? "users" : view === "orders" ? "orders" : "dashboard";
      const response = await fetch(`/api/admin/operations?view=${apiView}&days=${days}`, { headers: { Authorization: `Bearer ${data.session.access_token}` }, cache: "no-store" });
      const result = await response.json();
      if (response.status === 401 || response.status === 403) { await supabase?.auth.signOut(); router.replace(`${basePath}/login`); return; }
      if (!response.ok) setError(result.error ?? "운영 데이터를 불러오지 못했습니다."); else setPayload(result);
      setLoading(false);
    }
    void load();
  }, [days, router, view]);

  const title = { dashboard: "통합 대시보드", users: "회원 정보 관리", orders: "굿즈 주문 관리", ai: "AI 사용량", analytics: "글로벌 접속 통계", usage: "서비스·광고 활용 통계" }[view];
  const snapshot = payload?.snapshot as Snapshot | undefined;
  const summary = useMemo(() => snapshot?.summary ?? {}, [snapshot]);
  const showRange = !["users", "orders"].includes(view);

  async function runAction(body: Record<string, string>) {
    const supabase = getSupabaseBrowserClient();
    const { data } = await supabase?.auth.getSession() ?? { data: { session: null } };
    if (!data.session) { router.replace(`${basePath}/login`); return; }
    const response = await fetch("/api/admin/operations", { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify(body) });
    const result = await response.json();
    if (!response.ok) { setError(result.error ?? "변경하지 못했습니다."); return; }
    window.location.reload();
  }

  const content = (() => {
    if (view === "users") {
      const users = (payload?.users ?? []) as Array<Record<string, string | boolean | null>>;
      return <><div className="grid gap-4 sm:grid-cols-3"><Metric label="전체 회원" value={number.format(users.length)} note="굿즈 구매 또는 관리자 계정"/><Metric label="확인된 이메일" value={number.format(users.filter((u) => u.confirmedAt).length)}/><Metric label="비활성 계정" value={number.format(users.filter((u) => u.disabled).length)}/></div><Table headers={["이메일", "권한", "가입일", "최근 로그인", "상태", "관리"]} rows={users.map((u) => [u.email ?? "-", u.role, date.format(new Date(String(u.createdAt))), u.lastSignInAt ? date.format(new Date(String(u.lastSignInAt))) : "없음", u.disabled ? "비활성" : "정상", <button key="action" type="button" onClick={() => void runAction({ action: u.disabled ? "ENABLE_USER" : "DISABLE_USER", userId: String(u.id) })} className="rounded border border-line px-2 py-1 text-xs">{u.disabled ? "활성화" : "비활성화"}</button>])} /></>;
    }
    if (view === "orders") {
      const orders = (payload?.orders ?? []) as Array<Record<string, string | number | boolean | null>>;
      const paid = orders.filter((o) => o.payment_status === "PAID");
      return <><div className="grid gap-4 sm:grid-cols-3"><Metric label="전체 주문" value={number.format(orders.length)}/><Metric label="결제 완료" value={number.format(paid.length)}/><Metric label="결제 매출" value={`${number.format(paid.reduce((sum, o) => sum + Number(o.payment_amount), 0))}원`}/></div><Table headers={["주문일", "상품", "구매자", "결제", "금액", "처리", "배송정보"]} rows={orders.map((o) => [date.format(new Date(String(o.created_at))), o.order_type, o.customer_email ?? o.customer_name ?? "-", o.payment_status, `${number.format(Number(o.payment_amount))}원`, <select key="status" value={String(o.fulfillment_status)} onChange={(e) => void runAction({ action: "UPDATE_ORDER", orderId: String(o.id), fulfillmentStatus: e.target.value })} className="rounded border border-line bg-background px-2 py-1"><option value="PENDING">대기</option><option value="PROCESSING">처리 중</option><option value="SHIPPED">배송</option><option value="COMPLETED">완료</option><option value="CANCELLED">취소</option></select>, o.has_shipping_address ? "보유" : "해당 없음"])} /></>;
    }
    if (view === "ai") {
      const usage = (payload?.usage ?? []) as Array<Record<string, string | number>>;
      return <><div className="grid gap-4 sm:grid-cols-3"><Metric label="AI 호출" value={number.format(usage.length)}/><Metric label="사용 토큰" value={number.format(usage.reduce((sum, row) => sum + Number(row.total_tokens), 0))}/><Metric label="오류" value={number.format(usage.filter((row) => row.status === "ERROR").length)}/></div><Table headers={["시간", "서비스", "모델", "입력 토큰", "출력 토큰", "지연시간", "상태"]} rows={usage.map((row) => [date.format(new Date(String(row.created_at))), row.service_type, row.model, number.format(Number(row.prompt_tokens)), number.format(Number(row.completion_tokens)), `${number.format(Number(row.latency_ms))}ms`, row.status])}/></>;
    }
    if (!snapshot) return null;
    if (view === "analytics") return <><div className="grid gap-4 sm:grid-cols-3"><Metric label="페이지 조회" value={number.format(summary.visits ?? 0)}/><Metric label="일 단위 익명 방문자" value={number.format(summary.visitors ?? 0)}/><Metric label="분석 완료" value={number.format(summary.analyses ?? 0)}/></div><Table headers={["국가", "국가 코드", "조회", "익명 방문자"]} rows={snapshot.countries.map((row) => [row.country_code === "ZZ" ? "알 수 없음" : countryNames.of(row.country_code) ?? row.country_code, row.country_code, number.format(row.visits), number.format(row.visitors)])}/></>;
    if (view === "usage") return <><div className="grid gap-4 sm:grid-cols-3"><Metric label="광고 노출" value={number.format(summary.adImpressions ?? 0)}/><Metric label="보상 지급" value={number.format(summary.adRewards ?? 0)}/><Metric label="분석 완료" value={number.format(summary.analyses ?? 0)}/></div><Table headers={["서비스", "시작", "완료", "실패", "완료율"]} rows={snapshot.services.map((row) => [row.service_type, number.format(row.started), number.format(row.completed), number.format(row.failed), row.started ? `${Math.round(row.completed / row.started * 100)}%` : "-"])}/></>;
    return <><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric label="익명 방문자" value={number.format(summary.visitors ?? 0)} note={`${days}일간 일 단위 중복 제거`}/><Metric label="분석 완료" value={number.format(summary.analyses ?? 0)}/><Metric label="AI 토큰" value={number.format(summary.aiTokens ?? 0)}/><Metric label="결제 매출" value={`${number.format(summary.revenue ?? 0)}원`}/><Metric label="회원" value={number.format(summary.members ?? 0)} note="서비스 이용은 비회원 중심"/><Metric label="광고 노출" value={number.format(summary.adImpressions ?? 0)}/><Metric label="광고 보상" value={number.format(summary.adRewards ?? 0)}/><Metric label="주문" value={number.format(summary.orders ?? 0)}/></div><div className="grid gap-5 xl:grid-cols-2"><section><h2 className="mb-3 text-lg font-semibold">국가별 접속</h2><Table headers={["국가", "조회", "방문자"]} rows={snapshot.countries.slice(0, 10).map((row) => [row.country_code === "ZZ" ? "알 수 없음" : countryNames.of(row.country_code) ?? row.country_code, number.format(row.visits), number.format(row.visitors)])}/></section><section><h2 className="mb-3 text-lg font-semibold">서비스 활용</h2><Table headers={["서비스", "시작", "완료", "실패"]} rows={snapshot.services.map((row) => [row.service_type, number.format(row.started), number.format(row.completed), number.format(row.failed)])}/></section></div></>;
  })();

  return <AdminShell><header className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-brand-teal">Naming-Link Operations</p><h1 className="mt-1 text-3xl font-semibold">{title}</h1></div>{showRange ? <label className="text-sm text-muted">조회 기간 <select value={days} onChange={(e) => setDays(Number(e.target.value))} className="ml-2 h-10 rounded-lg border border-line bg-surface px-3 text-foreground"><option value={7}>7일</option><option value={30}>30일</option><option value={90}>90일</option><option value={365}>1년</option></select></label> : null}</header>{loading ? <Empty>운영 데이터를 불러오는 중입니다.</Empty> : error ? <div className="rounded-xl border border-brand-rose/30 bg-brand-rose/10 p-4 text-sm text-brand-rose">{error}</div> : <div className="grid gap-6">{content}</div>}</AdminShell>;
}
