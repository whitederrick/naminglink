"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BarChart3, BookOpenCheck, Bot, Boxes, FilePenLine, FileText, Globe2, LayoutDashboard, LogOut, Package, Users } from "lucide-react";
import type { AiUsageSummaryRow } from "@/lib/ai-pricing";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import {
  DailyTrendChart,
  Empty,
  FilterBar,
  FilterSearch,
  FilterSelect,
  Metric,
  PageHeader,
  Pagination,
  Table,
  usePagedList,
} from "@/components/admin-ui";

const basePath = "/naming-artist";

// 메뉴는 목적별 4개 그룹으로 나눈다(그룹당 최대 3개). 데스크톱은 그룹 제목이 보이고,
// 모바일은 공간이 좁아 제목 없이 납작한 그리드로 표시된다.
const navGroups = [
  {
    heading: "운영 현황",
    items: [
      ["대시보드", basePath, LayoutDashboard],
      ["PDF 테스트", `${basePath}/pdf-test`, FileText],
    ],
  },
  {
    heading: "고객·주문",
    items: [
      ["회원 관리", `${basePath}/users`, Users],
      ["굿즈 주문", `${basePath}/orders`, Package],
    ],
  },
  {
    heading: "이용 통계",
    items: [
      ["AI 사용량", `${basePath}/ai-usage`, Bot],
      ["글로벌 접속", `${basePath}/analytics`, Globe2],
      ["활용·광고", `${basePath}/usage`, BarChart3],
    ],
  },
  {
    heading: "데이터·콘텐츠",
    items: [
      ["한자·발음 기준", `${basePath}/hanja`, BookOpenCheck],
      ["기준 데이터", `${basePath}/data`, Boxes],
      ["서체 관리", `${basePath}/fonts`, FilePenLine],
      ["배경 관리", `${basePath}/backdrops`, FilePenLine],
      ["상품 설정", `${basePath}/products`, Boxes],
      ["정책·푸터", `${basePath}/content`, FilePenLine],
    ],
  },
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
// 주문일 표기: 시간 없이 2026.07.02 형태(연도 네 자리, 월·일 두 자리)로 표시한다.
const orderDate = (value: string) => {
  const parsed = new Date(value);
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${parsed.getFullYear()}.${month}.${day}`;
};
const countryNames = new Intl.DisplayNames(["ko"], { type: "region" });

const viewCopy: Record<View, { title: string; description: string }> = {
  dashboard: {
    title: "통합 대시보드",
    description:
      "서비스 전체 현황을 한눈에 확인하는 화면입니다.\n매출·방문·AI 사용·광고 지표와 일별 추이를 기간별로 비교하고, 이상 징후가 보이면 해당 상세 화면으로 이동해 원인을 확인하세요.",
  },
  users: {
    title: "회원 정보 관리",
    description:
      "가입 회원을 조회하고 계정 상태를 관리합니다. 이메일 검색과 권한·상태 필터로 대상을 찾고, 이상 행동 계정은 '비활성화'로 로그인을 차단하세요. '삭제'는 개인정보 삭제 요청(고객센터 이메일 접수·본인 확인 완료)을 이행할 때만 사용합니다 — 저장한 작명 결과까지 함께 지워지고 되돌릴 수 없으며, 주문 거래기록은 회원 연결만 끊긴 채 법정 보관 기간까지 남습니다. 서비스 이용은 비회원 중심이라 회원은 결과 저장·굿즈 구매·관리자 계정 위주입니다.",
  },
  orders: {
    title: "굿즈 주문 관리",
    description:
      "주문의 결제·처리 현황을 관리합니다. 결제 상태 필터로 결제 완료(PAID) 주문을 추려 처리 상태를 대기 → 처리 중 → 배송 → 완료 순서로 갱신하세요. 환불·부분환불 주문도 결제 상태 필터로 확인할 수 있습니다.",
  },
  ai: {
    title: "AI 사용량",
    description:
      "OpenAI 호출량·토큰·응답 시간·오류를 모니터링합니다. 상태 필터로 오류 호출을 점검하고, 특정 서비스의 토큰이 급증하면 남용 여부를 의심하세요. AI 토큰은 곧 비용이므로 기간을 바꿔 추세를 함께 확인하는 것을 권장합니다.",
  },
  analytics: {
    title: "글로벌 접속 통계",
    description:
      "국가별 방문·익명 방문자 현황입니다. 새로 유입이 늘어난 국가가 보이면 해당 언어의 번역 품질과 랜딩 화면을 점검하세요. 방문자 수는 일 단위로 바뀌는 익명 해시 기준이라 실제 인원과 정확히 일치하지는 않습니다.",
  },
  usage: {
    title: "서비스·광고 활용 통계",
    description:
      "서비스별 분석 시작·완료·실패와 광고 노출·보상 현황입니다. 완료율이 유난히 낮은 서비스는 입력 폼 문제나 AI 오류를 의심하고, AI 사용량 화면의 오류 내역과 교차 확인하세요.",
  },
};

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  async function logout() {
    await getSupabaseBrowserClient()?.auth.signOut();
    router.replace(`${basePath}/login`);
  }
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto grid w-full max-w-[1500px] lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-line bg-surface p-5 lg:min-h-screen lg:border-b-0 lg:border-r">
          <Link href={basePath} className="text-lg font-semibold">Naming Artist</Link>
          <p className="mt-1 text-xs text-muted">운영자 콘솔</p>
          <nav className="mt-6 space-y-4">
            {navGroups.map((group) => (
              <div key={group.heading}>
                <p className="hidden px-3 pb-1.5 text-sm font-bold text-brand-teal lg:block">
                  {group.heading}
                </p>
                <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1 lg:pl-4">
                  {group.items.map(([label, href, Icon]) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${active ? "bg-foreground text-background" : "text-muted hover:bg-surface-strong hover:text-foreground"}`}
                      >
                        <Icon size={16} />
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
          <button type="button" onClick={logout} className="mt-6 flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-foreground">
            <LogOut size={16} />로그아웃
          </button>
        </aside>
        <section className="min-w-0 p-5 sm:p-8">{children}</section>
      </div>
    </main>
  );
}

type UserRow = Record<string, string | boolean | null>;
type OrderRow = Record<string, string | number | boolean | null>;
type UsageRow = Record<string, string | number>;
type CostRow = AiUsageSummaryRow;

function UsersView({ users, onAction }: { users: UserRow[]; onAction: (body: Record<string, string>) => void }) {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const roles = useMemo(() => [...new Set(users.map((user) => String(user.role ?? "user")))], [users]);
  const filtered = useMemo(
    () =>
      users.filter((user) => {
        if (search && !String(user.email ?? "").toLowerCase().includes(search.toLowerCase())) return false;
        if (role !== "all" && String(user.role ?? "user") !== role) return false;
        if (status === "disabled" && !user.disabled) return false;
        if (status === "active" && user.disabled) return false;
        return true;
      }),
    [users, search, role, status],
  );
  const paged = usePagedList(filtered, `${search}|${role}|${status}`);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="전체 회원" value={number.format(users.length)} note="결과 저장·굿즈 구매·관리자 계정" />
        <Metric label="확인된 이메일" value={number.format(users.filter((user) => user.confirmedAt).length)} />
        <Metric label="비활성 계정" value={number.format(users.filter((user) => user.disabled).length)} />
      </div>
      <FilterBar>
        <FilterSearch value={search} onChange={setSearch} placeholder="이메일 검색" />
        <FilterSelect
          label="권한"
          value={role}
          onChange={setRole}
          options={[{ value: "all", label: "전체" }, ...roles.map((value) => ({ value, label: value }))]}
        />
        <FilterSelect
          label="상태"
          value={status}
          onChange={setStatus}
          options={[
            { value: "all", label: "전체" },
            { value: "active", label: "정상" },
            { value: "disabled", label: "비활성" },
          ]}
        />
      </FilterBar>
      <Table
        headers={["이메일", "권한", "가입일", "최근 로그인", "상태", "관리"]}
        rows={paged.pageItems.map((user) => [
          user.email ?? "-",
          user.role,
          date.format(new Date(String(user.createdAt))),
          user.lastSignInAt ? date.format(new Date(String(user.lastSignInAt))) : "없음",
          user.disabled ? "비활성" : "정상",
          <div key="action" className="flex gap-1">
            <button
              type="button"
              onClick={() => onAction({ action: user.disabled ? "ENABLE_USER" : "DISABLE_USER", userId: String(user.id) })}
              className="rounded border border-line px-2 py-1 text-xs"
            >
              {user.disabled ? "활성화" : "비활성화"}
            </button>
            <button
              type="button"
              onClick={() => {
                // 되돌릴 수 없으므로 무엇이 지워지고 무엇이 남는지 명시하고 한 번 더 확인받는다.
                const confirmed = window.confirm(
                  `${user.email ?? "이 계정"}을(를) 삭제합니다.\n\n` +
                    "· 저장한 작명 결과는 함께 삭제됩니다.\n" +
                    "· 주문 거래기록은 회원 연결만 끊긴 채 법정 보관 기간까지 남습니다.\n\n" +
                    "되돌릴 수 없습니다. 계속할까요?",
                );
                if (confirmed) onAction({ action: "DELETE_USER", userId: String(user.id) });
              }}
              className="rounded border border-red-300 px-2 py-1 text-xs text-red-600"
            >
              삭제
            </button>
          </div>,
        ])}
      />
      <Pagination page={paged.page} totalPages={paged.totalPages} total={paged.total} onChange={paged.setPage} />
    </>
  );
}

const fulfillmentLabels: Record<string, string> = {
  PENDING: "대기",
  PROCESSING: "처리 중",
  SHIPPED: "배송",
  COMPLETED: "완료",
  CANCELLED: "취소",
};

// ai_usage_logs.model에는 LLM 외에 내부 엔진 라벨도 섞여 있어 표시명으로 구분한다.
const modelLabels: Record<string, string> = {
  "official-hanja-rules-v1": "한자 규칙 엔진 (AI 아님)",
  mock: "개발용 모의 응답",
};
const modelLabel = (model: string) => modelLabels[model] ?? model;
// 정렬: 실제 LLM(gpt 등) → 규칙 엔진 → 모의 응답 순.
const modelRank = (model: string) => (model in modelLabels ? (model === "mock" ? 2 : 1) : 0);

// 서비스 활용 고정 행. 이용이 없는 서비스도 항상 표시하고, 수치만 실제 데이터를 붙인다.
// GLOBAL_NAME_TO_HANGUL은 통계 전용 구분 키(API상으로는 GLOBAL_TO_KOREAN).
const serviceTypeLabels: Record<string, string> = {
  HANJA_MEANING_MATCH: "한글 → 한자 의미 매칭",
  KOREAN_TO_GLOBAL: "한글 이름 → 글로벌 이름 변환",
  GLOBAL_NAME_TO_HANGUL: "글로벌 이름 → 한글 발음 확인",
  GLOBAL_TO_KOREAN: "글로벌 이름 → 한글 이름 전환",
};
const serviceTypeLabel = (serviceType: string) => serviceTypeLabels[serviceType] ?? serviceType;

const orderTypeLabels: Record<string, string> = {
  PREMIUM_PDF: "프리미엄 PDF",
  CALLIGRAPHY_IMAGE: "캘리그라피",
  STAMP_DELIVERY: "도장 배송",
  CANDIDATE_UNLOCK: "후보 일괄 공개",
};

// USD 주문의 payment_amount는 센트 단위 정수로 저장되므로 원화와 표기를 구분한다.
const orderAmount = (amount: number, currency?: string | null) =>
  currency === "USD" ? `US$${(amount / 100).toFixed(2)}` : `${number.format(amount)}원`;

function OrdersView({ orders, onAction }: { orders: OrderRow[]; onAction: (body: Record<string, string>) => void }) {
  const [search, setSearch] = useState("");
  const [payment, setPayment] = useState("all");
  const [fulfillment, setFulfillment] = useState("all");
  const paymentStatuses = useMemo(() => [...new Set(orders.map((order) => String(order.payment_status)))], [orders]);
  const filtered = useMemo(
    () =>
      orders.filter((order) => {
        const buyer = `${order.customer_email ?? ""} ${order.customer_name ?? ""}`.toLowerCase();
        if (search && !buyer.includes(search.toLowerCase())) return false;
        if (payment !== "all" && order.payment_status !== payment) return false;
        if (fulfillment !== "all" && order.fulfillment_status !== fulfillment) return false;
        return true;
      }),
    [orders, search, payment, fulfillment],
  );
  const paged = usePagedList(filtered, `${search}|${payment}|${fulfillment}`);
  const paid = orders.filter((order) => order.payment_status === "PAID");
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="전체 주문" value={number.format(orders.length)} />
        <Metric label="결제 완료" value={number.format(paid.length)} />
        <Metric
          label="결제 매출"
          value={(() => {
            const krw = paid
              .filter((order) => String(order.payment_currency ?? "KRW") !== "USD")
              .reduce((sum, order) => sum + Number(order.payment_amount), 0);
            const usdCents = paid
              .filter((order) => String(order.payment_currency) === "USD")
              .reduce((sum, order) => sum + Number(order.payment_amount), 0);
            return `${number.format(krw)}원${usdCents ? ` + US$${(usdCents / 100).toFixed(2)}` : ""}`;
          })()}
        />
      </div>
      <FilterBar>
        <FilterSearch value={search} onChange={setSearch} placeholder="구매자 이메일·이름 검색" />
        <FilterSelect
          label="결제"
          value={payment}
          onChange={setPayment}
          options={[{ value: "all", label: "전체" }, ...paymentStatuses.map((value) => ({ value, label: value }))]}
        />
        <FilterSelect
          label="처리"
          value={fulfillment}
          onChange={setFulfillment}
          options={[
            { value: "all", label: "전체" },
            ...Object.entries(fulfillmentLabels).map(([value, label]) => ({ value, label })),
          ]}
        />
      </FilterBar>
      <Table
        headers={["주문일", "상품", "내용", "구매자", "결제", "금액", "처리", "배송정보"]}
        rows={paged.pageItems.map((order) => [
          date.format(new Date(String(order.created_at))),
          orderTypeLabels[String(order.order_type)] ?? order.order_type,
          order.item_summary ?? "-",
          order.customer_email ?? order.customer_name ?? "-",
          order.payment_status,
          orderAmount(Number(order.payment_amount), order.payment_currency as string | null),
          <select
            key="status"
            value={String(order.fulfillment_status)}
            onChange={(event) => onAction({ action: "UPDATE_ORDER", orderId: String(order.id), fulfillmentStatus: event.target.value })}
            className="rounded border border-line bg-background px-2 py-1"
          >
            {Object.entries(fulfillmentLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>,
          order.has_shipping_address ? "보유" : "해당 없음",
        ])}
      />
      <Pagination page={paged.page} totalPages={paged.totalPages} total={paged.total} onChange={paged.setPage} />
    </>
  );
}

// 서비스별 원가는 서버에서 기간 전체를 합산해 내려준다(아래 상세 표는 최근 500건만 보여준다).
function AiCostSummary({ summary, krwPerUsd }: { summary: CostRow[]; krwPerUsd: number }) {
  if (!summary.length) return null;
  const totalUsd = summary.reduce((sum, row) => sum + row.costUsd, 0);
  const krw = (usd: number) => `₩${number.format(Math.round(usd * krwPerUsd))}`;
  const perCall = (row: CostRow) => (row.calls ? row.costUsd / row.calls : 0);
  return (
    <section className="mt-6">
      <h3 className="text-sm font-semibold">서비스별 토큰·추정 원가</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        기간 내 전체 호출 기준입니다. 토큰 단가로 환산한 추정치이며 실제 청구액이 아닙니다 —
        단가는 <code>src/lib/ai-pricing.ts</code>에 있고, 주기적으로 청구서와 대조하세요.
        규칙 엔진·모의 응답은 AI 호출이 아니라 0원으로 잡힙니다.
      </p>
      <div className="mt-3">
        <Table
          headers={["서비스", "모델", "호출", "입력 토큰", "출력 토큰", "건당 원가", "합계 원가"]}
          rows={summary.map((row) => [
            serviceTypeLabel(row.serviceType),
            modelLabel(row.model),
            `${number.format(row.calls)}${row.errors ? ` (오류 ${row.errors})` : ""}`,
            number.format(row.promptTokens),
            number.format(row.completionTokens),
            perCall(row) > 0 ? `${krw(perCall(row))} / $${perCall(row).toFixed(6)}` : "—",
            row.costUsd > 0 ? `${krw(row.costUsd)} / $${row.costUsd.toFixed(4)}` : "—",
          ])}
        />
      </div>
      <p className="mt-2 text-sm font-medium">
        기간 합계 ≈ {krw(totalUsd)} (${totalUsd.toFixed(4)})
      </p>
    </section>
  );
}

function AiUsageView({
  usage,
  summary,
  krwPerUsd,
}: {
  usage: UsageRow[];
  summary: CostRow[];
  krwPerUsd: number;
}) {
  const [service, setService] = useState("all");
  const [status, setStatus] = useState("all");
  const [model, setModel] = useState("all");
  const services = useMemo(() => [...new Set(usage.map((row) => String(row.service_type)))], [usage]);
  const models = useMemo(() => [...new Set(usage.map((row) => String(row.model)))], [usage]);
  const filtered = useMemo(
    () =>
      usage.filter((row) => {
        if (service !== "all" && row.service_type !== service) return false;
        if (status !== "all" && row.status !== status) return false;
        if (model !== "all" && row.model !== model) return false;
        return true;
      }),
    [usage, service, status, model],
  );
  const paged = usePagedList(filtered, `${service}|${status}|${model}`);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="AI 호출" value={number.format(usage.length)} />
        <Metric label="사용 토큰" value={number.format(usage.reduce((sum, row) => sum + Number(row.total_tokens), 0))} />
        <Metric label="오류" value={number.format(usage.filter((row) => row.status === "ERROR").length)} note="0이 정상입니다. 늘어나면 즉시 점검하세요." />
      </div>
      <FilterBar>
        <FilterSelect
          label="서비스"
          value={service}
          onChange={setService}
          options={[{ value: "all", label: "전체" }, ...services.map((value) => ({ value, label: serviceTypeLabel(value) }))]}
        />
        <FilterSelect
          label="상태"
          value={status}
          onChange={setStatus}
          options={[
            { value: "all", label: "전체" },
            { value: "SUCCESS", label: "SUCCESS" },
            { value: "ERROR", label: "ERROR" },
          ]}
        />
        <FilterSelect
          label="모델"
          value={model}
          onChange={setModel}
          options={[{ value: "all", label: "전체" }, ...models.map((value) => ({ value, label: modelLabel(value) }))]}
        />
      </FilterBar>
      <Table
        headers={["시간", "서비스", "모델", "입력 토큰", "출력 토큰", "지연시간", "상태"]}
        rows={paged.pageItems.map((row) => [
          date.format(new Date(String(row.created_at))),
          serviceTypeLabel(String(row.service_type)),
          modelLabel(String(row.model)),
          number.format(Number(row.prompt_tokens)),
          number.format(Number(row.completion_tokens)),
          `${number.format(Number(row.latency_ms))}ms`,
          row.status,
        ])}
      />
      <Pagination page={paged.page} totalPages={paged.totalPages} total={paged.total} onChange={paged.setPage} />
      <AiCostSummary summary={summary} krwPerUsd={krwPerUsd} />
    </>
  );
}

function countryLabel(code: string) {
  if (code === "ZZ") return "알 수 없음";
  try {
    return countryNames.of(code) ?? code;
  } catch {
    return code;
  }
}

function AnalyticsView({ snapshot, summary }: { snapshot: Snapshot; summary: Record<string, number> }) {
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      snapshot.countries.filter((row) => {
        if (!search) return true;
        const keyword = search.toLowerCase();
        return row.country_code.toLowerCase().includes(keyword) || countryLabel(row.country_code).toLowerCase().includes(keyword);
      }),
    [snapshot.countries, search],
  );
  const paged = usePagedList(filtered, search);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="페이지 조회" value={number.format(summary.visits ?? 0)} />
        <Metric label="일 단위 익명 방문자" value={number.format(summary.visitors ?? 0)} />
        <Metric label="분석 완료" value={number.format(summary.analyses ?? 0)} />
      </div>
      <FilterBar>
        <FilterSearch value={search} onChange={setSearch} placeholder="국가명·코드 검색" />
      </FilterBar>
      <Table
        headers={["국가", "국가 코드", "조회", "익명 방문자"]}
        rows={paged.pageItems.map((row) => [countryLabel(row.country_code), row.country_code, number.format(row.visits), number.format(row.visitors)])}
      />
      <Pagination page={paged.page} totalPages={paged.totalPages} total={paged.total} onChange={paged.setPage} />
    </>
  );
}

function UsageView({ snapshot, summary }: { snapshot: Snapshot; summary: Record<string, number> }) {
  const paged = usePagedList(snapshot.services, "services");
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="광고 노출" value={number.format(summary.adImpressions ?? 0)} />
        <Metric label="보상 지급" value={number.format(summary.adRewards ?? 0)} />
        <Metric label="분석 완료" value={number.format(summary.analyses ?? 0)} />
      </div>
      <Table
        headers={["서비스", "시작", "완료", "실패", "완료율"]}
        rows={paged.pageItems.map((row) => [
          row.service_type,
          number.format(row.started),
          number.format(row.completed),
          number.format(row.failed),
          row.started ? `${Math.round((row.completed / row.started) * 100)}%` : "-",
        ])}
      />
      <Pagination page={paged.page} totalPages={paged.totalPages} total={paged.total} onChange={paged.setPage} />
    </>
  );
}

type PendingOrderRow = {
  id: string;
  order_type: string;
  customer_name: string | null;
  customer_email: string | null;
  payment_amount: number;
  payment_currency: string | null;
  fulfillment_status: string;
  created_at: string;
};

function DashboardView({ snapshot, summary, pendingOrders }: { snapshot: Snapshot; summary: Record<string, number>; pendingOrders: PendingOrderRow[] }) {
  const pagedOrders = usePagedList(pendingOrders, "pending-orders", 16);
  const pendingOrderCount = snapshot.orderStatuses
    .filter((row) => row.payment_status === "PAID" && ["PENDING", "PROCESSING"].includes(row.fulfillment_status))
    .reduce((sum, row) => sum + row.count, 0);
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        <Metric dense label="결제 매출" value={`${number.format(summary.revenue ?? 0)}원`} note={`결제 완료 ${number.format(summary.paidOrders ?? 0)}건`} />
        <Metric dense label="처리 대기 주문" value={number.format(pendingOrderCount)} note={"결제 후, 미완료\n(목표 건수 : 0)"} />
        <Metric dense label="익명 방문자" value={number.format(summary.visitors ?? 0)} note={`페이지 조회 ${number.format(summary.visits ?? 0)}`} />
        <Metric dense label="분석 완료" value={number.format(summary.analyses ?? 0)} />
        <Metric dense label="AI 호출" value={number.format(summary.aiCalls ?? 0)} note={`토큰 ${number.format(summary.aiTokens ?? 0)}\n(운영 비용)`} />
        <Metric dense label="광고 노출" value={number.format(summary.adImpressions ?? 0)} note={`보상 지급 ${number.format(summary.adRewards ?? 0)}건\n(운영 수익)`} />
        <Metric dense label="회원 수" value={number.format(summary.members ?? 0)} />
        <Metric dense label="전체 주문" value={number.format(summary.orders ?? 0)} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <DailyTrendChart title="일별 방문" points={snapshot.daily.map((row) => ({ day: row.day, value: row.visits }))} />
        <DailyTrendChart title="일별 분석 완료" points={snapshot.daily.map((row) => ({ day: row.day, value: row.analyses }))} />
      </div>
      {/* 두 컬럼을 같은 높이로 늘려, 오른쪽 표의 페이징이 왼쪽 컬럼 하단과 나란히 떨어지게 한다. */}
      <div className="grid gap-5 xl:grid-cols-2">
        <div className="grid gap-5">
          <section>
            <h2 className="mb-3 text-lg font-semibold">AI 모델별 사용</h2>
            <Table
              compact
              columnWidths={["46%", "18%", "18%", "18%"]}
              headers={["모델", "호출", "토큰", "평균 응답"]}
              rows={[...snapshot.aiModels]
                .sort((a, b) => modelRank(a.model) - modelRank(b.model) || b.calls - a.calls)
                .map((row) => [
                  modelLabel(row.model),
                  number.format(row.calls),
                  number.format(row.tokens),
                  `${number.format(Math.round(row.avg_latency_ms))}ms`,
                ])}
            />
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">서비스 활용</h2>
            <Table
              compact
              columnWidths={["46%", "18%", "18%", "18%"]}
              headers={["서비스", "시작", "완료", "실패"]}
              rows={Object.entries(serviceTypeLabels).map(([serviceType, label]) => {
                const row = snapshot.services.find((item) => item.service_type === serviceType);
                return [
                  label,
                  number.format(row?.started ?? 0),
                  number.format(row?.completed ?? 0),
                  number.format(row?.failed ?? 0),
                ];
              })}
            />
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">국가별 접속 상위 5</h2>
            <Table
              compact
              columnWidths={["46%", "27%", "27%"]}
              headers={["국가", "조회", "방문자"]}
              rows={snapshot.countries.slice(0, 5).map((row) => [countryLabel(row.country_code), number.format(row.visits), number.format(row.visitors)])}
            />
          </section>
        </div>
        <section className="flex flex-col">
          <h2 className="mb-3 text-lg font-semibold">
            주문·결제 현황{" "}
            <span className="text-xs font-normal text-muted">(결제 완료 후 제작·배송 처리가 끝나지 않은 주문입니다. 오래 기다린 주문부터 표시됩니다.)</span>
          </h2>
          <Table
            compact
            headers={["주문일", "고객", "주문 유형", "금액", "처리 상태"]}
            rows={pagedOrders.pageItems.map((row) => [
              orderDate(row.created_at),
              <div key="customer" className="max-w-[180px] truncate" title={row.customer_email ?? row.customer_name ?? undefined}>
                {row.customer_email ?? row.customer_name ?? "-"}
              </div>,
              orderTypeLabels[row.order_type] ?? row.order_type,
              orderAmount(row.payment_amount, row.payment_currency),
              fulfillmentLabels[row.fulfillment_status] ?? row.fulfillment_status,
            ])}
          />
          <div className="mt-auto pt-3">
            <Pagination page={pagedOrders.page} totalPages={pagedOrders.totalPages} total={pagedOrders.total} onChange={pagedOrders.setPage} />
          </div>
        </section>
      </div>
    </>
  );
}

export function AdminOperationsConsole({ view }: { view: View }) {
  const router = useRouter();
  const [days, setDays] = useState(30);
  const [customRange, setCustomRange] = useState(false);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      const supabase = getSupabaseBrowserClient();
      const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
      if (!data.session) {
        router.replace(`${basePath}/login`);
        return;
      }
      const apiView = view === "ai" ? "ai" : view === "users" ? "users" : view === "orders" ? "orders" : "dashboard";
      const response = await fetch(`/api/admin/operations?view=${apiView}&days=${days}`, {
        headers: { Authorization: `Bearer ${data.session.access_token}` },
        cache: "no-store",
      });
      const result = await response.json();
      if (response.status === 401 || response.status === 403) {
        await supabase?.auth.signOut();
        router.replace(`${basePath}/login`);
        return;
      }
      if (!response.ok) setError(result.error ?? "운영 데이터를 불러오지 못했습니다.");
      else setPayload(result);
      setLoading(false);
    }
    void load();
  }, [days, router, view]);

  const copy = viewCopy[view];
  const snapshot = payload?.snapshot as Snapshot | undefined;
  const summary = useMemo(() => snapshot?.summary ?? {}, [snapshot]);
  const showRange = !["users", "orders"].includes(view);

  async function runAction(body: Record<string, string>) {
    const supabase = getSupabaseBrowserClient();
    const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
    if (!data.session) {
      router.replace(`${basePath}/login`);
      return;
    }
    const response = await fetch("/api/admin/operations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error ?? "변경하지 못했습니다.");
      return;
    }
    window.location.reload();
  }

  const content = (() => {
    if (view === "users") return <UsersView users={(payload?.users ?? []) as UserRow[]} onAction={(body) => void runAction(body)} />;
    if (view === "orders") return <OrdersView orders={(payload?.orders ?? []) as OrderRow[]} onAction={(body) => void runAction(body)} />;
    if (view === "ai")
      return (
        <AiUsageView
          usage={(payload?.usage ?? []) as UsageRow[]}
          summary={(payload?.usageSummary ?? []) as CostRow[]}
          krwPerUsd={Number(payload?.krwPerUsd ?? 1400)}
        />
      );
    if (!snapshot) return null;
    if (view === "analytics") return <AnalyticsView snapshot={snapshot} summary={summary} />;
    if (view === "usage") return <UsageView snapshot={snapshot} summary={summary} />;
    return <DashboardView snapshot={snapshot} summary={summary} pendingOrders={(payload?.pendingOrders ?? []) as PendingOrderRow[]} />;
  })();

  return (
    <AdminShell>
      <PageHeader title={copy.title} description={copy.description}>
        {showRange ? (
          <label className="flex items-center gap-2 text-sm text-muted">
            조회 기간
            <select
              value={customRange ? "custom" : String(days)}
              onChange={(event) => {
                if (event.target.value === "custom") {
                  setCustomRange(true);
                } else {
                  setCustomRange(false);
                  setDays(Number(event.target.value));
                }
              }}
              className="h-10 rounded-lg border border-line bg-surface px-3 text-foreground"
            >
              <option value="7">7일</option>
              <option value="30">30일</option>
              <option value="90">90일</option>
              <option value="365">1년</option>
              <option value="custom">직접 입력</option>
            </select>
            {customRange ? (
              <>
                <input
                  type="number"
                  min={1}
                  max={365}
                  defaultValue={days}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") event.currentTarget.blur();
                  }}
                  onBlur={(event) => {
                    const value = Math.max(1, Math.min(Math.floor(Number(event.target.value)) || days, 365));
                    event.target.value = String(value);
                    setDays(value);
                  }}
                  className="h-10 w-24 rounded-lg border border-line bg-surface px-3 text-foreground"
                />
                일
              </>
            ) : null}
          </label>
        ) : null}
      </PageHeader>
      {loading ? (
        <Empty>운영 데이터를 불러오는 중입니다.</Empty>
      ) : error ? (
        <div className="rounded-xl border border-brand-rose/30 bg-brand-rose/10 p-4 text-sm text-brand-rose">{error}</div>
      ) : (
        <div className="grid gap-6">{content}</div>
      )}
    </AdminShell>
  );
}
