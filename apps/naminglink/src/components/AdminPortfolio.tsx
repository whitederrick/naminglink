"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { APP_KEYS, appLabel, type AppKey } from "@naminglink/core/apps";

import { AdminShell, appConsolePath, appTone } from "@/components/AdminOperationsConsole";
import { Empty, PageHeader, Table } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

/**
 * 통합 대시보드 — **서비스를 나란히 놓고 본다.**
 *
 * 서비스별 화면이 따로 있어도 "전부 합치면 얼마인가 · 어느 쪽이 크는가"는 나란히 놓아야
 * 보인다. 반대로 합계만 보여 주면 어느 서비스가 그 숫자를 만들었는지 잃는다. 그래서 **서비스
 * 행 + 합계 행**을 한 표에 둔다.
 *
 * ## 여기 없는 것 — 원가와 마진
 *
 * 설계 문서(`docs/operator_console_multiservice.md` §2·§3)는 P&L을 목표로 두지만, 지금은
 * **검증할 방법이 없다.** 결제 수수료는 실키가 없어 발생한 적이 없고, 인프라 청구서도 서비스별로
 * 갈라 본 적이 없다. 그럴듯한 마진을 먼저 그리는 것이 가장 위험하다 — 매출처럼 눈에 띄게 틀리는
 * 것이 아니라 **틀려도 티가 안 난다.**
 *
 * 그래서 지금은 **실제로 기록된 것만** 보여 준다. 원가·마진은 첫 실거래나 첫 광고 수익 리포트가
 * 나온 뒤에 그 값과 대조하며 얹는다.
 */

type ServiceRow = { app: AppKey; summary: Record<string, number> };

const number = new Intl.NumberFormat("ko-KR");

/** 표에 세울 지표. **여기 있는 것이 곧 화면이다** — 순서도 이 목록이 정한다. */
const METRICS = [
  { key: "revenue", label: "결제 매출", suffix: "원" },
  { key: "paidOrders", label: "결제 완료" },
  { key: "orders", label: "전체 주문" },
  { key: "visitors", label: "익명 방문자" },
  { key: "visits", label: "페이지 조회" },
  { key: "analyses", label: "분석 완료" },
  { key: "aiCalls", label: "AI 호출" },
] as const;

export function AdminPortfolio() {
  const router = useRouter();
  const [days, setDays] = useState(30);
  const [includeTest, setIncludeTest] = useState(false);
  const [services, setServices] = useState<ServiceRow[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const supabase = getSupabaseBrowserClient();
    const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
    if (!data.session) {
      router.replace("/naming-artist/login");
      return;
    }
    const params = new URLSearchParams({ view: "portfolio", days: String(days) });
    if (includeTest) params.set("includeTest", "1");
    const response = await fetch(`/api/admin/operations?${params}`, {
      headers: { Authorization: `Bearer ${data.session.access_token}` },
      cache: "no-store",
    });
    if (response.status === 401 || response.status === 403) {
      router.replace("/naming-artist/login");
      return;
    }
    const body = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string; services?: ServiceRow[] }
      | null;
    if (!body?.ok) {
      setServices(null);
      setError(body?.error ?? "지표를 불러오지 못했습니다.");
    } else {
      setError("");
      setServices(body.services ?? []);
    }
    setLoading(false);
  }, [days, includeTest, router]);

  useEffect(() => {
    // 효과 본문에서 곧바로 setState를 부르지 않는 형태여야 한다(react-hooks/set-state-in-effect).
    void (async () => {
      await load();
    })();
  }, [load]);

  const total = (key: string) =>
    (services ?? []).reduce((sum, row) => sum + (row.summary[key] ?? 0), 0);

  /**
   * 응답에 없는 서비스도 행으로 세운다.
   *
   * **빠진 것과 0인 것은 다르다.** 지표를 못 읽은 서비스를 표에서 빼 버리면 "그런 서비스는 없다"로
   * 읽히는데, 실제로는 조회에 실패한 것이다 — 오늘 사주링크가 콘솔에 아예 없어서 며칠 동안
   * 아무도 그 상태를 못 본 일이 있었다.
   */
  const missing = APP_KEYS.filter((key) => !(services ?? []).some((row) => row.app === key));

  return (
    <AdminShell>
      <PageHeader
        title="통합 대시보드"
        description={
          "서비스를 나란히 놓고 봅니다. 아래 행을 누르면 그 서비스의 현황 화면으로 갑니다.\n원가와 마진은 아직 넣지 않았습니다 — 결제 수수료와 인프라 청구서가 서비스별로 확인되기 전에는 검증할 방법이 없고, 검증 못 한 마진은 틀려도 티가 나지 않습니다."
        }
      >
        <select
          value={days}
          onChange={(event) => {
            setLoading(true);
            setDays(Number(event.target.value));
          }}
          className="h-10 rounded-lg border border-line bg-surface px-3 text-sm"
        >
          <option value={7}>최근 7일</option>
          <option value={30}>최근 30일</option>
          <option value={90}>최근 90일</option>
          <option value={365}>최근 365일</option>
        </select>
        <label className="flex items-center gap-2 text-sm text-muted">
          <input
            type="checkbox"
            checked={includeTest}
            onChange={(event) => {
              setLoading(true);
              setIncludeTest(event.target.checked);
            }}
            className="size-4 accent-brand-teal"
          />
          테스트 주문 포함
        </label>
      </PageHeader>

      {error ? (
        <p className="mb-4 rounded-lg bg-brand-rose/5 p-4 text-sm text-red-600">{error}</p>
      ) : null}

      {loading ? (
        <Empty>서비스 지표를 모으는 중입니다.</Empty>
      ) : !services?.length ? null : (
        <>
          <Table
            headers={["서비스", ...METRICS.map((metric) => metric.label)]}
            rows={[
              ...services.map((row) => [
                <Link
                  key="app"
                  href={appConsolePath(row.app)}
                  className={`inline-block rounded px-1.5 py-0.5 text-xs font-semibold ${appTone(row.app).badge}`}
                >
                  {appLabel(row.app)}
                </Link>,
                ...METRICS.map((metric) => (
                  <span key={metric.key}>
                    {number.format(row.summary[metric.key] ?? 0)}
                    {"suffix" in metric ? metric.suffix : ""}
                  </span>
                )),
              ]),
              // 합계 행. **개별을 지우고 합계만 두지 않는다** — 합계만 남으면 어느 서비스가 그
              // 숫자를 만들었는지 잃는다.
              [
                <b key="total">합계</b>,
                ...METRICS.map((metric) => (
                  <b key={metric.key}>
                    {number.format(total(metric.key))}
                    {"suffix" in metric ? metric.suffix : ""}
                  </b>
                )),
              ],
            ]}
          />

          {missing.length ? (
            <p className="mt-4 rounded-lg bg-brand-amber/5 p-4 text-sm text-muted">
              지표를 읽지 못한 서비스: <b>{missing.map(appLabel).join(", ")}</b>. 표에서 빠진 것은
              값이 0이라는 뜻이 아니라 <b>조회에 실패했다</b>는 뜻입니다.
            </p>
          ) : null}

          <p className="mt-4 text-sm leading-6 text-muted">
            AI 호출이 한 서비스에만 잡히는 것이 정상입니다 — 인연링크는 규칙 엔진이라 모델을 쓰지
            않고, 사주링크는 유료 리포트에서만 씁니다. 매출이 0인 것도 아직 결제 키를 넣지 않아
            판매를 열지 않았기 때문입니다.
          </p>
        </>
      )}
    </AdminShell>
  );
}
