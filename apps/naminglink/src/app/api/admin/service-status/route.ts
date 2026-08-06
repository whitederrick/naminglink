import { NextRequest, NextResponse } from "next/server";

import { APP_KEYS, appLabel, type AppKey } from "@naminglink/core/apps";

import { requireAdmin } from "@/lib/admin-auth";

/**
 * **형제 서비스 배포들**에 "지금 무엇이 켜져 있나"를 물어 그대로 전달한다.
 *
 * **왜 콘솔이 대신 부르나.** 토큰이 필요한 요청인데, 브라우저에서 직접 부르면 그 토큰이
 * 클라이언트 번들에 실린다. 서버가 대신 부르면 토큰은 이 배포 안에만 남는다.
 *
 * 응답에는 boolean과 라벨뿐이고 슬롯 ID나 키는 들어 있지 않다(각 앱의 `api/ops/status` 참고).
 *
 * ## 왜 목록으로 도는가
 *
 * 예전에는 이 자리가 `inyeon-status`였다 — 인연링크 **하나만** 묻는 라우트다. 그 뒤 사주링크가
 * 생겼는데 이 화면은 둘에 멈춰 있었고, 그래서 **사주링크가 운영에 Supabase 환경변수 없이
 * 떠 있는 것을 며칠 동안 아무도 못 봤다**(2026-08-06에 코드 리뷰로 발견). 상태를 보라고 만든
 * 화면이 정작 그 앱을 안 보고 있었다.
 *
 * 같은 일이 검사기에서도 있었다(`verify-route-guards`가 사주링크를 빼고 "ALL PASS"를 찍었다).
 * **앱을 늘리면서 앱 목록을 손으로 늘리는 자리는 반드시 하나가 빠진다.** 그래서 목록을 여기
 * 적지 않고 `packages/core`의 `APP_KEYS`를 돈다 — dreamslink를 더하면 그 한 곳만 고치면 된다.
 *
 * ## 필요한 환경변수
 *
 *   OPS_STATUS_TOKEN        이 배포와 **대상 배포들에 같은 값**. 없으면 아무것도 못 묻는다.
 *   <APPKEY>_BASE_URL       대상 배포 주소(`INYEONLINK_BASE_URL`·`SAJULINK_BASE_URL`).
 *                           **하드코딩하지 않는다** — 실 도메인을 붙이면 주소가 바뀌는데,
 *                           코드에 박아 두면 그날 이 화면만 조용히 옛 배포를 가리킨다.
 */

export const runtime = "nodejs";

/** 콘솔이 도는 대상. **자기 자신은 뺀다** — 이 배포가 곧 naminglink다. */
const REMOTE_APPS = APP_KEYS.filter((key) => key !== "naminglink");

/** `inyeonlink` → `INYEONLINK_BASE_URL`. 기존에 쓰던 이름과 같아 설정을 그대로 물려받는다. */
function baseUrlVariable(key: AppKey) {
  return `${key.toUpperCase()}_BASE_URL`;
}

type ServiceStatus = {
  key: AppKey;
  label: string;
  variable: string;
  base: string | null;
  ok: boolean;
  error?: string;
  siteUrl?: string;
  checks?: unknown[];
};

async function askOne(key: AppKey, token: string): Promise<ServiceStatus> {
  const label = appLabel(key);
  const variable = baseUrlVariable(key);
  const base = process.env[variable]?.trim().replace(/\/+$/, "") || null;

  // **설정이 없다는 사실을 그대로 알린다.** 빈 표를 보여 주면 "전부 꺼져 있음"으로 읽힌다 —
  // 아직 안 물어본 것과 물어봤더니 꺼져 있는 것은 완전히 다른 상태다.
  if (!base) {
    return {
      key,
      label,
      variable,
      base: null,
      ok: false,
      error: `이 배포에 ${variable}이 없습니다. ${label} 배포 주소를 넣어 주세요.`,
    };
  }

  try {
    const response = await fetch(`${base}/api/ops/status`, {
      headers: { "x-ops-token": token },
      cache: "no-store",
      // 한 서비스가 응답하지 않는데 콘솔이 함께 멈추면 안 된다.
      signal: AbortSignal.timeout(10_000),
    });
    const body = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string; siteUrl?: string; checks?: unknown[] }
      | null;
    if (!response.ok || !body?.ok) {
      return {
        key,
        label,
        variable,
        base,
        ok: false,
        error: body?.error ?? `${label}이 ${response.status}로 응답했습니다.`,
      };
    }
    return {
      key,
      label,
      variable,
      base,
      ok: true,
      siteUrl: body.siteUrl,
      checks: body.checks ?? [],
    };
  } catch (cause) {
    return {
      key,
      label,
      variable,
      base,
      ok: false,
      error: `${label}에 연결하지 못했습니다 (${base}): ${
        cause instanceof Error ? cause.message : "알 수 없는 오류"
      }`,
    };
  }
}

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  const token = process.env.OPS_STATUS_TOKEN?.trim();
  if (!token) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "점검할 수 없습니다. 이 배포에 OPS_STATUS_TOKEN을 설정하고, 같은 토큰을 각 서비스 배포에도 넣으세요.",
      },
      { status: 503 },
    );
  }

  // **한 서비스가 실패해도 나머지는 보여 준다.** 하나 때문에 화면이 통째로 비면, 정작 봐야 할
  // 다른 서비스의 상태까지 못 보게 된다.
  const services = await Promise.all(REMOTE_APPS.map((key) => askOne(key, token)));

  return NextResponse.json({ ok: true, services });
}
