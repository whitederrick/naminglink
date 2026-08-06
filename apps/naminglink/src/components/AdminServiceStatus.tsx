"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AdminShell } from "@/components/AdminOperationsConsole";
import { Empty, PageHeader, Table } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

/**
 * 형제 서비스 오픈 상태 점검.
 *
 * 각 서비스의 잠금은 전부 환경변수로 걸려 있고 그 값은 그쪽 배포 안에만 있다. 이 화면은 각
 * 배포에 물어 **지금 실제로 켜져 있는 것**을 보여 준다 — Vercel 대시보드에서 값을 눈으로
 * 확인하는 것과 다른 점은, 오타나 재배포 누락까지 함께 잡힌다는 것이다(`NEXT_PUBLIC_` 값은
 * 빌드 시점에 박히므로 값을 넣고 재배포하지 않으면 아무 일도 일어나지 않는다).
 *
 * **예전에는 인연링크 하나만 보는 화면이었다.** 사주링크가 생겼는데 이 화면이 따라오지 않아,
 * 그 배포가 Supabase 환경변수 없이 떠 있는 것을 며칠 동안 아무도 못 봤다(2026-08-06).
 * 이제 서비스 목록은 `packages/core`의 `APP_KEYS`가 정한다.
 */

type Check = {
  key: string;
  label: string;
  enabled: boolean;
  variable: string;
  note?: string;
};

type Service = {
  key: string;
  label: string;
  variable: string;
  base: string | null;
  ok: boolean;
  error?: string;
  siteUrl?: string;
  checks?: Check[];
};

/** 여는 순서. 애드센스는 사이트 단위 승인이라 도메인이 먼저다. */
const STEPS = [
  "① 실 도메인을 연결한다 (NEXT_PUBLIC_SITE_URL) — 배포 주소로 심사를 넣으면 도메인을 붙이는 순간 다른 사이트가 되어 재심사입니다.",
  "② 퍼블리셔 ID만 채우고 애드센스 심사를 신청한다 — 슬롯 ID는 비워 둡니다. 심사 기간에 빈 광고 자리가 보이지 않게 하려는 것이고, 심사원이 찾는 것은 페이지에 박힌 퍼블리셔 스니펫입니다.",
  "③ 승인 후 슬롯 ID를 등록한다.",
  "④ 결제 키를 넣고, 상품 화면에서 판매를 켠다 — 키 없이 켜면 죽은 구매 버튼이 됩니다.",
];

export function AdminServiceStatus() {
  const router = useRouter();
  const [services, setServices] = useState<Service[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // **첫 문장이 await여야 한다.** 효과 안에서 동기로 setState를 부르면 렌더가 연쇄로 돈다
  // (react-hooks/set-state-in-effect). 그래서 초기 loading은 useState 기본값으로 두고,
  // 여기서는 조회가 끝난 뒤에만 상태를 건드린다. 다시 확인 버튼만 loading을 직접 켠다.
  const load = useCallback(async () => {
    const supabase = getSupabaseBrowserClient();
    const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
    if (!data.session) {
      router.replace("/naming-artist/login");
      return;
    }
    const response = await fetch("/api/admin/service-status", {
      headers: { Authorization: `Bearer ${data.session.access_token}` },
      cache: "no-store",
    });
    if (response.status === 401 || response.status === 403) {
      router.replace("/naming-artist/login");
      return;
    }
    const body = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string; services?: Service[] }
      | null;
    if (!body?.ok) {
      setServices(null);
      setError(body?.error ?? "상태를 불러오지 못했습니다.");
    } else {
      setError("");
      setServices(body.services ?? []);
    }
    setLoading(false);
  }, [router]);

  useEffect(() => {
    // 즉시 실행 async 함수로 감싼다 — 효과 본문에서 곧바로 setState를 부르지 않는 형태여야
    // 한다(`AdminProductSettings`도 같은 꼴이다).
    void (async () => {
      await load();
    })();
  }, [load]);

  function refresh() {
    setLoading(true);
    void load();
  }

  return (
    <AdminShell>
      <PageHeader
        title="서비스 오픈 상태 점검"
        description={
          "각 서비스 배포에 직접 물어 지금 켜져 있는 것을 확인합니다. 환경변수 값이 아니라 실제 동작 기준이라, 오타나 재배포 누락도 함께 드러납니다.\n꺼져 있는 항목이 있는 것이 곧 문제는 아닙니다 — 아직 오픈 전이라면 대부분 꺼져 있는 것이 정상입니다."
        }
      >
        <button
          type="button"
          onClick={refresh}
          className="h-10 rounded-lg border border-line bg-surface px-4 text-sm font-semibold"
        >
          다시 확인
        </button>
      </PageHeader>

      {error ? (
        <p className="mb-4 whitespace-pre-line rounded-lg bg-brand-rose/5 p-4 text-sm text-red-600">
          {error}
        </p>
      ) : null}

      {loading ? (
        <Empty>각 서비스 배포에 확인하는 중입니다.</Empty>
      ) : (
        (services ?? []).map((service) => {
          const checks = service.checks ?? [];
          const openCount = checks.filter((check) => check.enabled).length;
          return (
            <section key={service.key} className="mb-8">
              <h2 className="text-base font-semibold">{service.label}</h2>

              {/* **못 물어본 것과 물어봤더니 꺼져 있는 것을 가른다.** 빈 표를 보여 주면
                  "전부 꺼짐"으로 읽히는데, 그 둘은 완전히 다른 상태다. */}
              {service.ok ? (
                <>
                  <p className="mb-3 mt-1 text-sm text-muted">
                    대상 <b className="text-foreground">{service.siteUrl ?? service.base}</b> · 켜진 항목{" "}
                    <b className="text-foreground">
                      {openCount}/{checks.length}
                    </b>
                  </p>
                  <Table
                    headers={["항목", "상태", "환경변수"]}
                    rows={checks.map((check) => [
                      <div key="label">
                        <p className="font-medium">{check.label}</p>
                        {check.note ? (
                          <p className="mt-0.5 text-xs text-muted">{check.note}</p>
                        ) : null}
                      </div>,
                      <span
                        key="state"
                        className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${
                          check.enabled
                            ? "bg-brand-teal/12 text-brand-teal"
                            : "bg-surface-strong text-muted"
                        }`}
                      >
                        {check.enabled ? "켜짐" : "잠김"}
                      </span>,
                      <code key="var" className="text-xs text-muted">
                        {check.variable}
                      </code>,
                    ])}
                  />
                </>
              ) : (
                <p className="mt-1 whitespace-pre-line rounded-lg bg-brand-rose/5 p-4 text-sm text-red-600">
                  {service.error ?? "상태를 확인하지 못했습니다."}
                </p>
              )}
            </section>
          );
        })
      )}

      <section className="mt-6 rounded-xl border border-line bg-surface p-5">
        <h2 className="text-sm font-semibold">여는 순서</h2>
        <ol className="mt-2 grid gap-2 text-sm leading-6 text-muted">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </AdminShell>
  );
}
