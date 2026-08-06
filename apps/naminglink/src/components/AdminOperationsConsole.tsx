"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BarChart3, BookOpenCheck, Bot, Boxes, FilePenLine, FileText, Globe2, HeartHandshake, LayoutDashboard, LogOut, Package, ShieldCheck, SlidersHorizontal, Users } from "lucide-react";
import { APP_KEYS, appLabel, type AppKey } from "@naminglink/core/apps";
import { BrandMark } from "@/components/BrandMark";
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
/**
 * 콘솔이 따로 보여 주는 형제 서비스. **naminglink는 뺀다** — 위쪽 메뉴가 전부 그것이다.
 *
 * 예전에는 `"inyeon"`·`"inyeon-orders"`라는 화면 이름에 서비스가 박혀 있었다. 그래서 사주링크가
 * 생겨도 콘솔에 **메뉴가 하나도 없었고**, 상품을 켜려 해도 그 화면으로 가는 길이 없었다
 * (2026-08-06). 이제 목록이 늘면 메뉴·경로·화면이 함께 따라온다.
 */
const SERVICE_APPS = APP_KEYS.filter((key) => key !== "naminglink");

const navGroups = [
  {
    heading: "운영 현황",
    items: [
      // **통합이 먼저, 개별이 다음.** 서비스가 넷이 되면 "전부 합치면 얼마인가"가 첫 질문이다.
      ["통합 대시보드", `${basePath}/portfolio`, LayoutDashboard],
      ["네이밍링크 대시보드", basePath, LayoutDashboard],
      // **서비스 전체를 보는 자리라 인연링크 그룹에서 꺼냈다.** 예전에는 이 항목이 인연링크
      // 메뉴 안에 있었고 실제로 인연링크만 물었다. 사주링크가 생겨도 이 화면이 따라오지 않아,
      // 그 배포가 환경변수 없이 떠 있는 것을 아무도 못 봤다(2026-08-06).
      ["서비스 오픈 상태", `${basePath}/status`, SlidersHorizontal],
      ["글로벌 이름 전환 PDF", `${basePath}/pdf-test`, FileText],
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
    heading: "계정·권한",
    items: [["운영자 계정", `${basePath}/admins`, ShieldCheck]],
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
      ["서체 관리", `${basePath}/fonts`, FilePenLine],
      ["배경 관리", `${basePath}/backdrops`, FilePenLine],
      ["상품 설정", `${basePath}/products`, Boxes],
      ["정책·푸터", `${basePath}/content`, FilePenLine],
    ],
  },
  // **형제 서비스는 그룹을 따로 둔다.** 위 메뉴들은 전부 naminglink 것만 보여 준다 — 한 표에
  // 섞으면 서비스별 매출을 눈으로 세야 하고, '처리 상태'의 뜻도 서로 다르다(도장은 배송,
  // 리포트는 PDF 발급). 서비스들이 같은 DB를 쓰지만 운영은 따로 한다.
  //
  // **목록을 손으로 적지 않는다.** 예전에는 인연링크 세 줄이 박혀 있었고, 사주링크가 생겨도
  // 콘솔에 메뉴가 하나도 없었다 — 데이터는 이미 갈려 있는데 **가는 길만 없었다**(2026-08-06).
  // 이제 `APP_KEYS`에 앱을 더하면 메뉴가 함께 생긴다.
  ...SERVICE_APPS.map((app) => ({
    heading: appLabel(app),
    items: [
      [`${appLabel(app)} 현황`, `${basePath}/service/${app}`, HeartHandshake],
      [`${appLabel(app)} 주문`, `${basePath}/service/${app}/orders`, Package],
      [`${appLabel(app)} 상품`, `${basePath}/service/${app}/products`, Boxes],
    ] as const,
  })),
] as const;

type View =
  | "dashboard"
  | "users"
  | "admins"
  | "orders"
  | "ai"
  | "analytics"
  | "usage"
  /** 형제 서비스 현황·주문. **어느 서비스인지는 `app` prop이 정한다.** */
  | "service"
  | "service-orders";

/**
 * 서비스마다 다른 것만 모은다. **공통은 여기 적지 않는다.**
 *
 * 읽을 때는 `serviceConsole()`을 쓸 것 — `Record<AppKey, …>`는 키가 빠져도 tsc가 잡아 주지
 * 못한 전례가 있다(2026-08-04, 제목이 빈칸으로 떴다).
 */
type ServiceConsoleConfig = {
  /** 대시보드 「메뉴별 활용」 표의 분석 종류. 서비스마다 메뉴가 다르다. */
  serviceTypes: Record<string, string>;
  /** 「분석 완료」 카드 아래 붙는 말. 그 서비스의 메뉴를 그대로 적는다. */
  analysesNote: string;
  /** 현황 화면 설명. **서비스마다 사실이 다르다**(AI를 쓰는지 등) — 한 문장으로 뭉뚱그리지 않는다. */
  description: string;
  /** 주문 화면 설명. */
  ordersDescription: string;
};

const SERVICE_CONSOLE: Record<AppKey, ServiceConsoleConfig> = {
  naminglink: {
    serviceTypes: {},
    analysesNote: "",
    description: "",
    ordersDescription: "",
  },
  inyeonlink: {
    serviceTypes: { GUNGHAP_MATCH: "사주 궁합", AFFINITY_MATCH: "인연의 결" },
    analysesNote: "궁합 + 인연의 결",
    description:
      "인연링크(사주 궁합·인연의 결)만 따로 본 지표입니다. 위쪽 메뉴들은 전부 네이밍링크 것만 보여 주므로, 서비스의 매출·방문이 섞이지 않습니다.\nAI 항목이 없는 것이 정상입니다 — 인연링크는 규칙 엔진이라 요청당 외부 호출이 없습니다.",
    ordersDescription:
      "사주 궁합 리포트와 인연의 결 리포트 PDF 주문입니다. 결제 완료(PAID) 주문의 발급 상태를 확인하세요 — PDF는 결제 승인 직후 자동으로 발급되므로, 결제는 됐는데 오래 '대기'로 남아 있으면 발급이 실패한 것입니다(운영 알림 메일도 함께 갔을 것입니다).\n배송이 없는 상품이라 배송 정보 칸은 비어 있습니다.",
  },
  dreamslink: {
    serviceTypes: { DREAM_READING: "꿈 해몽" },
    analysesNote: "꿈 해몽",
    description:
      "드림링크만 따로 본 지표입니다. 위쪽 메뉴들은 전부 네이밍링크 것만 보여 주므로, 서비스의 매출·방문이 섞이지 않습니다.\n**이 서비스는 방문이 매출보다 훨씬 큰 것이 정상입니다** — 꿈은 매일 꾸는 것이라 무료 조회가 본체이고 광고가 주 수익입니다. 유료는 꿈 카드와 태몽 리포트 둘뿐입니다.",
    ordersDescription:
      "꿈 카드(이미지)와 태몽 리포트(PDF) 주문입니다. 결제 완료(PAID) 주문의 발급 상태를 확인하세요 — 결제 승인 직후 자동으로 발급되므로, 결제는 됐는데 오래 '대기'로 남아 있으면 발급이 실패한 것입니다(운영 알림 메일도 함께 갔을 것입니다).\n배송이 없는 상품이라 배송 정보 칸은 비어 있습니다.",
  },
  sajulink: {
    serviceTypes: { SAJU_READING: "사주 풀이", SAJU_TODAY: "오늘의 운세" },
    analysesNote: "사주 풀이 + 오늘의 운세",
    description:
      "사주링크만 따로 본 지표입니다. 위쪽 메뉴들은 전부 네이밍링크 것만 보여 주므로, 서비스의 매출·방문이 섞이지 않습니다.\n**AI 원가가 잡힙니다** — 사주링크는 유료 리포트의 요약 한 문단을 모델로 씁니다(무료 화면은 엔진 템플릿이라 호출이 없습니다).",
    ordersDescription:
      "「평생 사주와 올해의 운세 리포트」 PDF 주문입니다. 결제 완료(PAID) 주문의 발급 상태를 확인하세요 — PDF는 결제 승인 직후 자동으로 발급되므로, 결제는 됐는데 오래 '대기'로 남아 있으면 발급이 실패한 것입니다(운영 알림 메일도 함께 갔을 것입니다).\n배송이 없는 상품이라 배송 정보 칸은 비어 있습니다.",
  },
};

function serviceConsole(app: AppKey): ServiceConsoleConfig {
  return (
    SERVICE_CONSOLE[app] ?? {
      serviceTypes: {},
      analysesNote: "",
      description: "",
      ordersDescription: "",
    }
  );
}
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
      "네이밍링크 현황을 한눈에 확인하는 화면입니다.\n매출·방문·AI 사용·광고 지표와 일별 추이를 기간별로 비교하고, 이상 징후가 보이면 해당 상세 화면으로 이동해 원인을 확인하세요.\n인연링크 수치는 여기에 합산되지 않습니다 — 맨 위 줄에 요약만 있고, 자세한 것은 '인연링크 현황' 화면에 있습니다.",
  },
  users: {
    title: "회원 정보 관리",
    description:
      "굿즈 구매·결과 저장에 쓰이는 일반 회원입니다(운영자 계정은 '운영자 계정' 화면에서 따로 관리합니다).\n이상 행동 계정은 '비활성화'로 로그인을 차단하고, '삭제'는 개인정보 삭제 요청(고객센터 접수·본인 확인 완료)을 이행할 때만 사용하세요 — 저장한 작명 결과까지 지워지고 되돌릴 수 없으며, 주문 거래기록은 회원 연결만 끊긴 채 법정 보관 기간까지 남습니다.",
  },
  admins: {
    title: "운영자 계정",
    description:
      "이 콘솔에 접근할 수 있는 계정입니다. 권한은 Supabase 대시보드에서 app_metadata의 role로 부여합니다.\n여기서는 조회와 비활성화만 합니다 — 삭제 버튼은 두지 않습니다. 운영자 계정 삭제는 개인정보 삭제 요청 이행이 아니고, 실수로 지우면 콘솔 접근 권한이 사라지기 때문입니다(서버도 함께 막습니다).",
  },
  orders: {
    title: "굿즈 주문 관리",
    description:
      "네이밍링크 주문의 결제·처리 현황을 관리합니다(인연링크 리포트 주문은 '인연링크 주문' 화면에 따로 있습니다). 결제 상태 필터로 결제 완료(PAID) 주문을 추려 처리 상태를 대기 → 처리 중 → 배송 → 완료 순서로 갱신하세요. 환불·부분환불 주문도 결제 상태 필터로 확인할 수 있습니다.",
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
  // 형제 서비스 두 화면은 여기 적지 않는다 — 제목·설명이 **어느 서비스인지에 따라 달라져서**
  // `serviceCopy()`가 만든다. 여기 적으면 서비스가 늘 때마다 두 줄씩 늘고, 빠뜨리면 제목이
  // 빈칸으로 뜬다.
  service: { title: "", description: "" },
  "service-orders": { title: "", description: "" },
};

/** 형제 서비스를 보는 화면인가. */
function isServiceView(view: View) {
  return view === "service" || view === "service-orders";
}

/** 형제 서비스 화면의 제목·설명. 서비스 이름은 레지스트리에서 온다. */
function serviceCopy(view: View, app: AppKey) {
  const config = serviceConsole(app);
  return view === "service-orders"
    ? { title: `${appLabel(app)} 주문`, description: config.ordersDescription }
    : { title: `${appLabel(app)} 현황`, description: config.description };
}

/**
 * 운영자 콘솔의 겉틀.
 *
 * **세션을 확인하기 전에는 아무것도 그리지 않는다.**
 *
 * 이 화면들은 값 자체는 API가 지키지만(무인증 요청은 401), 틀을 먼저 그리면 **로그아웃 상태의
 * HTML에 메뉴 구성이 그대로 실린다** — 어떤 서비스를 운영하는지, 어떤 관리 화면이 있는지가
 * 로그인 없이 드러난다.
 *
 * 2026-08-04에 `AdminOperationsConsole`에서 이걸 고쳤는데, 그 뒤에 만든 화면들이 같은 실수를
 * 반복했다. 2026-08-06에 세어 보니 **콘솔 화면 16개 중 8개가 새고 있었다**(상품 설정·서체·배경·
 * 한자·정책·PDF 시험·상태 점검·통합 대시보드). 화면마다 게이트를 붙이는 방식이라 새 화면이
 * 생길 때마다 빠졌다.
 *
 * 그래서 **틀이 스스로 막는다.** 앞으로 만드는 화면은 `AdminShell`을 쓰는 것만으로 안전하다.
 * 문구를 "권한이 없습니다"로 두지 않는 것은 주소가 맞는지 틀린지를 알려 주지 않기 위해서다.
 */
export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    // 즉시 실행 async로 감싼다 — 효과 본문에서 곧바로 setState를 부르지 않는 형태여야 한다.
    void (async () => {
      const supabase = getSupabaseBrowserClient();
      const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
      if (!data.session) {
        router.replace(`${basePath}/login`);
        return;
      }
      setConfirmed(true);
    })();
  }, [router]);

  async function logout() {
    await getSupabaseBrowserClient()?.auth.signOut();
    router.replace(`${basePath}/login`);
  }

  if (!confirmed) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-sm text-muted">
        확인 중…
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto grid w-full max-w-[1500px] lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-line bg-surface p-5 lg:min-h-screen lg:border-b-0 lg:border-r">
          {/* "Naming Artist"는 서비스 어디에도 쓰지 않는 이름이라 지운다. 랜딩과 같은 로고를
              쓰되(BrandMark), 이 화면이 운영자 전용이라는 사실이 한눈에 들어오게 배지를 단다. */}
          <Link href={basePath} className="flex items-center gap-2.5">
            <BrandMark size={40} />
            <span className="flex flex-col items-start">
              <span className="text-base font-semibold leading-tight">Naming-Link</span>
              <span className="mt-1 rounded bg-foreground px-1.5 py-0.5 text-[11px] font-semibold leading-none text-background">
                운영자 콘솔
              </span>
            </span>
          </Link>
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

// mode: "members"는 굿즈 구매 회원, "admins"는 콘솔 운영자. 목록의 출처는 같지만 할 수 있는
// 조작이 다르다 — 운영자에게는 삭제를 주지 않는다(서버도 거부한다).
function UsersView({
  users,
  onAction,
  mode = "members",
}: {
  users: UserRow[];
  onAction: (body: Record<string, string>) => void;
  mode?: "members" | "admins";
}) {
  const isAdmins = mode === "admins";
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
        <Metric
          label={isAdmins ? "운영자 계정" : "전체 회원"}
          value={number.format(users.length)}
          note={isAdmins ? "콘솔 접근 권한 보유" : "결과 저장·굿즈 구매"}
        />
        <Metric label="확인된 이메일" value={number.format(users.filter((user) => user.confirmedAt).length)} />
        <Metric label="비활성 계정" value={number.format(users.filter((user) => user.disabled).length)} />
      </div>
      <FilterBar>
        <FilterSearch value={search} onChange={setSearch} placeholder="이메일 검색" />
        {/* 회원 화면은 전부 일반 회원이라 권한 필터가 의미 없다. 운영자 화면에서만 남긴다. */}
        {isAdmins ? (
          <FilterSelect
            label="권한"
            value={role}
            onChange={setRole}
            options={[{ value: "all", label: "전체" }, ...roles.map((value) => ({ value, label: value }))]}
          />
        ) : null}
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
            {isAdmins ? null : (
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
            )}
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
// 인연링크의 서비스 구분. **위 표와 합치지 않는다** — naminglink 대시보드는 위 표를 그대로
// 훑어 고정 행을 만들므로, 합치면 그 화면에 항상 0인 인연링크 행 둘이 붙는다.
// 값은 `apps/inyeonlink/src/lib/analytics-client.ts`가 보내는 것과 같아야 한다.
/**
 * 형제 서비스들의 분석 종류를 한 표로 합친다. 표에 코드(`GUNGHAP_MATCH`)가 그대로 나오지
 * 않게 하는 용도라, 어느 서비스 것인지는 여기서 따지지 않는다.
 */
const siblingServiceTypeLabels: Record<string, string> = Object.fromEntries(
  SERVICE_APPS.flatMap((app) => Object.entries(serviceConsole(app).serviceTypes)),
);

const serviceTypeLabel = (serviceType: string) =>
  serviceTypeLabels[serviceType] ?? siblingServiceTypeLabels[serviceType] ?? serviceType;

const orderTypeLabels: Record<string, string> = {
  PREMIUM_PDF: "프리미엄 PDF",
  CALLIGRAPHY_IMAGE: "캘리그라피",
  STAMP_DELIVERY: "도장 배송",
  CANDIDATE_UNLOCK: "후보 일괄 공개",
  // 인연링크. 라벨이 없으면 표에 `GUNGHAP_PDF` 같은 코드가 그대로 나온다.
  GUNGHAP_PDF: "궁합 리포트 PDF",
  AFFINITY_PDF: "인연의 결 리포트 PDF",
};

// USD 주문의 payment_amount는 센트 단위 정수로 저장되므로 원화와 표기를 구분한다.
const orderAmount = (amount: number, currency?: string | null) =>
  currency === "USD" ? `US$${(amount / 100).toFixed(2)}` : `${number.format(amount)}원`;

/** 배송 정보 칸. 누르기 전에는 값이 없고, 누르면 그때 불러온다. */
function ShippingCell({
  has,
  loading,
  value,
  onReveal,
}: {
  has: boolean;
  loading: boolean;
  value: ShippingDetail | string | undefined;
  onReveal: () => void;
}) {
  if (!has) return <span className="text-muted">해당 없음</span>;
  if (loading) return <span className="text-muted">불러오는 중…</span>;

  if (typeof value === "string") {
    return <span className="text-brand-rose">{value}</span>;
  }

  if (!value) {
    return (
      <button
        type="button"
        onClick={onReveal}
        className="rounded border border-line px-2 py-1 text-xs font-semibold hover:border-brand-teal hover:text-brand-teal"
      >
        배송정보 보기
      </button>
    );
  }

  const lines: Array<[string, string | null]> = [
    ["받는 분", value.recipient],
    ["연락처", value.phone],
    ["주소", value.country ? `[${value.country}] ${value.address ?? ""}`.trim() : value.address],
    ["이메일", value.email],
    ["새길 문구", value.stampName],
    ["모델", value.stampModel],
    ["요청사항", value.note],
  ];

  return (
    <div className="grid min-w-56 gap-0.5 text-xs leading-5">
      {lines
        .filter(([, text]) => Boolean(text))
        .map(([label, text]) => (
          <div key={label} className="flex gap-1.5">
            <span className="shrink-0 text-muted">{label}</span>
            <span className="font-medium [overflow-wrap:anywhere]">{text}</span>
          </div>
        ))}
    </div>
  );
}

type ShippingDetail = {
  recipient: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  address: string | null;
  note: string | null;
  stampName: string | null;
  stampModel: string | null;
};

function OrdersView({
  orders,
  onAction,
  onLoadShipping,
}: {
  orders: OrderRow[];
  onAction: (body: Record<string, string>) => void;
  onLoadShipping: (orderId: string) => Promise<ShippingDetail | string>;
}) {
  // 배송 정보는 목록에 실려 오지 않는다. 눌렀을 때만 주문 하나씩 불러오고, 그 열람은 서버에
  // 기록으로 남는다. 목록 한 번 열었다고 전 주문의 주소·연락처가 브라우저로 내려오면 안 된다.
  const [shipping, setShipping] = useState<Record<string, ShippingDetail | string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function reveal(orderId: string) {
    if (shipping[orderId] || loadingId) return;
    setLoadingId(orderId);
    const result = await onLoadShipping(orderId);
    setShipping((current) => ({ ...current, [orderId]: result }));
    setLoadingId(null);
  }

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
          // 개발·운영이 같은 DB를 보므로, 함께 보기로 했을 때 어느 것이 테스트 주문인지 눈에 띄어야 한다.
          order.is_test ? (
            <span key="date" className="flex items-center gap-1.5">
              {date.format(new Date(String(order.created_at)))}
              <span className="rounded border border-brand-rose/30 bg-brand-rose/10 px-1.5 py-0.5 text-[11px] font-medium text-brand-rose">
                테스트
              </span>
            </span>
          ) : (
            date.format(new Date(String(order.created_at)))
          ),
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
          <ShippingCell
            key="shipping"
            has={Boolean(order.has_shipping_address)}
            loading={loadingId === String(order.id)}
            value={shipping[String(order.id)]}
            onReveal={() => void reveal(String(order.id))}
          />,
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
  is_test?: boolean;
};

type OtherAppSummary = { app: AppKey; summary: Record<string, number> };

/**
 * 서비스 색. **이 앱에 실제로 있는 토큰만 쓴다**(`globals.css`: teal·rose·amber).
 *
 * 예전에는 `brand-plum`을 쓰고 있었는데 그런 토큰이 없어서 **인연링크 배지가 색 없이
 * 나오고 있었다** — 없는 클래스는 조용히 아무 일도 하지 않는다(2026-08-06).
 */
const APP_TONE: Record<AppKey, { badge: string; border: string; text: string }> = {
  naminglink: {
    badge: "bg-brand-teal/12 text-brand-teal",
    border: "hover:border-brand-teal",
    text: "text-brand-teal",
  },
  inyeonlink: {
    badge: "bg-brand-rose/12 text-brand-rose",
    border: "hover:border-brand-rose",
    text: "text-brand-rose",
  },
  sajulink: {
    badge: "bg-brand-amber/12 text-brand-amber",
    border: "hover:border-brand-amber",
    text: "text-brand-amber",
  },
  // 토큰이 셋뿐이라(teal·rose·amber) 넷째는 중립으로 둔다. **없는 토큰을 지어내지 않는다** —
  // `brand-plum`을 쓰던 배지가 여태 색 없이 나오고 있었다(2026-08-06).
  dreamslink: {
    badge: "bg-surface-strong text-muted",
    border: "hover:border-foreground",
    text: "text-muted",
  },
};

/** 모르는 앱은 중립색으로 떨어뜨린다 — 남의 서비스 색을 입히는 것보다 낫다. */
export function appTone(app: AppKey) {
  return (
    APP_TONE[app] ?? {
      badge: "bg-surface-strong text-muted",
      border: "hover:border-line",
      text: "text-muted",
    }
  );
}

/**
 * 반대편 서비스로 건너가는 줄. **두 대시보드가 서로를 가리킨다.**
 *
 * 매출을 합치지 않는 대신 이 줄을 둔다. 서비스별 성과를 보려면 갈라야 하지만, 콘솔이 두
 * 서비스를 모두 관리한다는 사실은 어느 화면에서도 보여야 한다 — 한쪽에만 두면 인연링크 화면에
 * 들어간 사람은 돌아갈 길을 메뉴에서 찾아야 한다.
 *
 * 색은 서비스 배지와 같은 계열로 간다(인연링크 자두, 네이밍링크 틸). 어느 쪽 숫자를 보고
 * 있는지가 색으로도 구분돼야 한다.
 */
/** 서비스별 화면 경로. naminglink는 콘솔 자신이라 뿌리다. */
export function appConsolePath(app: AppKey) {
  return app === "naminglink" ? basePath : `${basePath}/service/${app}`;
}

function OtherAppLink({ other }: { other: OtherAppSummary }) {
  const label = appLabel(other.app);
  const href = appConsolePath(other.app);
  const tone = appTone(other.app);

  return (
    <Link
      href={href}
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-line bg-surface px-4 py-3 text-sm transition ${tone.border}`}
    >
      <span className={`rounded px-1.5 py-0.5 text-[11px] font-semibold ${tone.badge}`}>
        {label}
      </span>
      <span className="text-muted">
        매출 <b className="text-foreground">{number.format(other.summary.revenue ?? 0)}원</b>
      </span>
      <span className="text-muted">
        주문 <b className="text-foreground">{number.format(other.summary.orders ?? 0)}건</b>
      </span>
      <span className="text-muted">
        방문자 <b className="text-foreground">{number.format(other.summary.visitors ?? 0)}</b>
      </span>
      <span className={`ml-auto text-xs ${tone.text}`}>
        {other.app === "naminglink" ? "네이밍링크 대시보드 보기" : `${label} 현황 보기`} →
      </span>
    </Link>
  );
}

function DashboardView({ snapshot, summary, pendingOrders, others }: { snapshot: Snapshot; summary: Record<string, number>; pendingOrders: PendingOrderRow[]; others?: OtherAppSummary[] }) {
  const pagedOrders = usePagedList(pendingOrders, "pending-orders", 16);
  const pendingOrderCount = snapshot.orderStatuses
    .filter((row) => row.payment_status === "PAID" && ["PENDING", "PROCESSING"].includes(row.fulfillment_status))
    .reduce((sum, row) => sum + row.count, 0);
  return (
    <>
      {/* **이 화면의 숫자는 전부 네이밍링크 것이다.** 예전에는 인연링크 주문까지 함께 집계돼
          매출이 조용히 합산됐다. 합치지 않고 한 줄로 알리는 이유는 `OtherAppLink` 주석에 있다. */}
      {(others ?? []).map((row) => (<OtherAppLink key={row.app} other={row} />))}
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

/**
 * 인연링크 현황. naminglink 대시보드와 **같은 데이터원을 쓰지만 칸이 다르다.**
 *
 * 뺀 것: AI 호출·토큰(규칙 엔진이라 항상 0), 회원 수(회원가입이 없다). 항상 0인 칸을 늘어놓으면
 * 어느 0이 "정상"이고 어느 0이 "고장"인지 구분이 안 된다.
 *
 * 남긴 것 중 **광고는 0이 정상이다** — 인연링크는 아직 `ad_events`를 남기지 않는다. 그래서
 * 숫자 대신 그 사실을 적는다.
 */
function ServiceDashboardView({
  app,
  snapshot,
  summary,
  pendingOrders,
  others,
}: {
  app: AppKey;
  snapshot: Snapshot;
  summary: Record<string, number>;
  pendingOrders: PendingOrderRow[];
  others?: OtherAppSummary[];
}) {
  const config = serviceConsole(app);
  // 페이지 상태 키에 서비스를 넣는다. 한 키를 나눠 쓰면 서비스를 오가며 페이지 번호가 섞인다.
  const pagedOrders = usePagedList(pendingOrders, `${app}-pending`, 10);
  const pendingOrderCount = snapshot.orderStatuses
    .filter((row) => row.payment_status === "PAID" && ["PENDING", "PROCESSING"].includes(row.fulfillment_status))
    .reduce((sum, row) => sum + row.count, 0);
  return (
    <>
      {/* 반대 방향으로도 건너간다 — 네이밍링크 대시보드가 이 화면을 가리키는 것과 짝이다. */}
      {(others ?? []).map((row) => (<OtherAppLink key={row.app} other={row} />))}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Metric dense label="결제 매출" value={`${number.format(summary.revenue ?? 0)}원`} note={`결제 완료 ${number.format(summary.paidOrders ?? 0)}건`} />
        <Metric dense label="발급 대기" value={number.format(pendingOrderCount)} note={"결제 후, 미발급\n(목표 건수 : 0)"} />
        <Metric dense label="전체 주문" value={number.format(summary.orders ?? 0)} />
        <Metric dense label="익명 방문자" value={number.format(summary.visitors ?? 0)} note={`페이지 조회 ${number.format(summary.visits ?? 0)}`} />
        <Metric dense label="분석 완료" value={number.format(summary.analyses ?? 0)} note={config.analysesNote} />
        <Metric dense label="광고 노출" value={number.format(summary.adImpressions ?? 0)} note={`${appLabel(app)}는 아직 광고\n집계를 남기지 않습니다`} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <DailyTrendChart title="일별 방문" points={snapshot.daily.map((row) => ({ day: row.day, value: row.visits }))} />
        <DailyTrendChart title="일별 분석 완료" points={snapshot.daily.map((row) => ({ day: row.day, value: row.analyses }))} />
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        <div className="grid gap-5">
          <section>
            <h2 className="mb-3 text-lg font-semibold">메뉴별 활용</h2>
            <Table
              compact
              columnWidths={["40%", "20%", "20%", "20%"]}
              headers={["메뉴", "시작", "완료", "실패"]}
              rows={Object.entries(config.serviceTypes).map(([serviceType, label]) => {
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
            <h2 className="mb-3 text-lg font-semibold">국가별 접속 상위 10</h2>
            <Table
              compact
              columnWidths={["46%", "27%", "27%"]}
              headers={["국가", "조회", "방문자"]}
              rows={snapshot.countries.slice(0, 10).map((row) => [countryLabel(row.country_code), number.format(row.visits), number.format(row.visitors)])}
            />
          </section>
        </div>
        <section className="flex flex-col">
          <h2 className="mb-3 text-lg font-semibold">
            발급 대기 주문{" "}
            <span className="text-xs font-normal text-muted">(결제 완료 후 PDF 발급이 끝나지 않은 주문입니다. 오래 기다린 주문부터 표시됩니다.)</span>
          </h2>
          <Table
            compact
            headers={["주문일", "고객", "상품", "금액", "발급 상태"]}
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

export function AdminOperationsConsole({
  view,
  /** `service`·`service-orders` 화면이 어느 서비스를 보는가. 나머지 화면은 늘 naminglink다. */
  app: serviceApp,
}: {
  view: View;
  app?: AppKey;
}) {
  const router = useRouter();
  const [days, setDays] = useState(30);
  const [customRange, setCustomRange] = useState(false);
  // 로컬 개발과 운영이 같은 Supabase를 본다. 테스트 주문(is_test)은 기본적으로 감추고,
  // 확인이 필요할 때만 켠다. 매출 집계도 같은 스위치를 따라간다.
  const [includeTest, setIncludeTest] = useState(false);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  /**
   * 운영 화면을 그려도 되는가. **확인이 끝나기 전에는 아무것도 그리지 않는다.**
   *
   * 예전에는 주소를 치면 대시보드 틀이 잠깐 보였다가 로그인 화면으로 바뀌었다. 값은 새지
   * 않았다 — 아직 받아오기 전이라 내용이 비어 있었다. 다만 **메뉴 이름은 그대로 나갔다**
   * (로그인 없이 받은 HTML에 "대시보드·회원·운영자·AI 사용량"이 들어 있었다). 운영 화면의
   * 구성을 아무에게나 보여 줄 이유가 없고, 껍데기가 번쩍이는 것 자체가 고장처럼 보인다.
   *
   * **이것은 화면 쪽 정리이지 자물쇠가 아니다.** 자물쇠는 서버에 있다 —
   * `/api/admin/operations`가 토큰을 확인하고 401·403을 돌려준다. 여기서 참이 되는 것도
   * 그 응답을 받은 뒤다.
   */
  const [authorized, setAuthorized] = useState(false);

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
      // 형제 서비스 화면은 같은 API를 `app`만 바꿔 부른다 — 주문 목록과 집계 로직이
      // 하나뿐이라야 한쪽만 고쳐지는 일이 없다.
      const apiView =
        view === "ai" || view === "users" || view === "admins" || view === "orders"
          ? view
          : view === "service-orders"
            ? "orders"
            : "dashboard";
      const app = isServiceView(view) ? (serviceApp ?? "naminglink") : "naminglink";
      // **여기부터는 감싼다.** 망이 끊기거나 프록시가 JSON이 아닌 것을 돌려주면 `fetch`나
      // `json()`이 던지는데, 그대로 두면 이 함수가 도중에 끝나 화면이 "확인 중…"에서 영영
      // 멈춘다(무엇이 잘못됐는지도 안 보인다).
      try {
        const response = await fetch(
          `/api/admin/operations?view=${apiView}&app=${app}&days=${days}${includeTest ? "&includeTest=1" : ""}`,
          {
            headers: { Authorization: `Bearer ${data.session.access_token}` },
            cache: "no-store",
          },
        );
        const result = await response.json();
        if (response.status === 401 || response.status === 403) {
          await supabase?.auth.signOut();
          router.replace(`${basePath}/login`);
          return;
        }
        // 서버가 이 사람을 운영자로 인정했다. **`ok`를 보기 전에 세운다** — 500이 나도 화면은
        // 떠서 무엇이 잘못됐는지 보여야 한다. 여기서 막으면 빈 화면에 아무 설명도 없다.
        setAuthorized(true);
        if (!response.ok) setError(result.error ?? "운영 데이터를 불러오지 못했습니다.");
        else setPayload(result);
      } catch {
        // 운영자인지 아닌지를 확인하지 못한 것이므로 화면은 열지 않는다. 대신 무엇이
        // 일어났는지 적어 준다 — 아래 관문 화면이 이 문구를 그린다.
        setError("운영 데이터를 불러오지 못했습니다. 연결을 확인한 뒤 다시 시도해 주세요.");
      }
      setLoading(false);
    }
    void load();
    // **`serviceApp`이 빠지면 안 된다.** 인연링크 현황에서 사주링크 현황으로 옮기면 `view`는
    // 그대로 `"service"`라, 이 값이 없으면 다시 불러오지 않고 **앞 서비스의 숫자가 그대로
    // 남는다.** 오늘 지표 RPC에서 고친 것과 같은 종류의 착시다.
  }, [days, includeTest, router, view, serviceApp]);

  const copy = isServiceView(view)
    ? serviceCopy(view, serviceApp ?? "naminglink")
    : viewCopy[view];
  const snapshot = payload?.snapshot as Snapshot | undefined;
  const summary = useMemo(() => snapshot?.summary ?? {}, [snapshot]);
  const showRange = !["users", "admins", "orders", "service-orders"].includes(view);
  // 주문 수치가 들어가는 화면에서만 의미가 있다(회원·운영자·AI 사용량은 주문과 무관).
  const showTestToggle = !["users", "admins", "ai"].includes(view);

  // **훅을 전부 부른 뒤에 나간다.** 위 `useState`·`useEffect`·`useMemo`보다 앞에서 반환하면
  // 확인이 끝나 화면이 바뀔 때 훅의 개수가 달라져 React가 터진다.
  //
  // 문구를 "권한이 없습니다"로 두지 않는다. 주소가 맞는지 틀린지를 알려 주는 셈이 된다.
  if (!authorized) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-sm text-muted">
        <div className="grid gap-3">
          <p>{error ?? "확인 중…"}</p>
          {error ? (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mx-auto rounded-lg border border-line px-4 py-2 font-medium text-foreground transition hover:border-foreground"
            >
              다시 시도
            </button>
          ) : null}
        </div>
      </main>
    );
  }

  /** 주문 하나의 배송 정보를 불러온다. 실패하면 칸에 그대로 보여 줄 문구를 돌려준다. */
  async function loadShipping(orderId: string): Promise<ShippingDetail | string> {
    const supabase = getSupabaseBrowserClient();
    const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
    if (!data.session) {
      router.replace(`${basePath}/login`);
      return "로그인이 필요합니다.";
    }
    const response = await fetch(`/api/admin/orders/shipping?orderId=${orderId}`, {
      headers: { Authorization: `Bearer ${data.session.access_token}` },
      cache: "no-store",
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.ok) {
      return result?.error ?? "배송 정보를 불러오지 못했습니다.";
    }
    return result.shipping as ShippingDetail;
  }

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
    if (view === "users" || view === "admins")
      return (
        <UsersView
          users={(payload?.users ?? []) as UserRow[]}
          onAction={(body) => void runAction(body)}
          mode={view === "admins" ? "admins" : "members"}
        />
      );
    if (view === "orders" || view === "service-orders") {
      return (
        <OrdersView
          orders={(payload?.orders ?? []) as OrderRow[]}
          onAction={(body) => void runAction(body)}
          onLoadShipping={loadShipping}
        />
      );
    }
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
    if (view === "service")
      return (
        <ServiceDashboardView
          app={serviceApp ?? "naminglink"}
          snapshot={snapshot}
          summary={summary}
          pendingOrders={(payload?.pendingOrders ?? []) as PendingOrderRow[]}
          others={payload?.others as OtherAppSummary[] | undefined}
        />
      );
    return (
      <DashboardView
        snapshot={snapshot}
        summary={summary}
        pendingOrders={(payload?.pendingOrders ?? []) as PendingOrderRow[]}
        others={payload?.others as OtherAppSummary[] | undefined}
      />
    );
  })();

  return (
    <AdminShell>
      <PageHeader title={copy.title} description={copy.description}>
        {/* "테스트 주문 포함"을 조회 기간 **앞(왼쪽)**에 둔다. 무엇을 세는지(테스트 포함 여부)를
            먼저 정하고 기간을 고르는 순서가 읽는 순서와 맞는다.
            좁은 화면에서는 세로로 쌓는다 — 가로로 두면 조회 기간의 직접 입력 칸까지 한 줄에
            들어가지 못해 줄이 어긋난다. */}
        <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-4">
        {showTestToggle ? (
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={includeTest}
              onChange={(event) => setIncludeTest(event.target.checked)}
              className="h-4 w-4 rounded border-line"
            />
            테스트 주문 포함
          </label>
        ) : null}
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
        </div>
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
