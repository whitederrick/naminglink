import { NextRequest, NextResponse } from "next/server";

import { requireAdmin } from "@/lib/admin-auth";

/**
 * 인연링크 배포에 "지금 무엇이 켜져 있나"를 물어 그대로 전달한다.
 *
 * **왜 콘솔이 대신 부르나.** 토큰이 필요한 요청인데, 브라우저에서 직접 부르면 그 토큰이
 * 클라이언트 번들에 실린다. 서버가 대신 부르면 토큰은 이 배포 안에만 남는다.
 *
 * 응답에는 boolean과 라벨뿐이고 슬롯 ID나 키는 들어 있지 않다(인연링크 쪽 라우트 주석 참고).
 *
 * 필요한 환경변수 둘:
 *   INYEONLINK_BASE_URL   인연링크 배포 주소. **하드코딩하지 않는다** — 실 도메인을 붙이면
 *                         주소가 바뀌는데, 코드에 박아 두면 그날 이 화면만 조용히 옛 배포를
 *                         가리킨다.
 *   OPS_STATUS_TOKEN      두 배포에 같은 값을 넣는다.
 */

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });

  const base = process.env.INYEONLINK_BASE_URL?.trim().replace(/\/+$/, "");
  const token = process.env.OPS_STATUS_TOKEN?.trim();
  if (!base || !token) {
    // **설정이 없다는 사실을 그대로 알린다.** 빈 표를 보여 주면 "전부 꺼져 있음"으로 읽힌다.
    return NextResponse.json(
      {
        ok: false,
        error:
          "점검할 수 없습니다. 이 배포에 INYEONLINK_BASE_URL과 OPS_STATUS_TOKEN을 설정하고, 같은 토큰을 인연링크 배포에도 넣으세요.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(`${base}/api/ops/status`, {
      headers: { "x-ops-token": token },
      cache: "no-store",
      // 인연링크가 응답하지 않는데 콘솔이 함께 멈추면 안 된다.
      signal: AbortSignal.timeout(10_000),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok || !body?.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: body?.error ?? `인연링크가 ${response.status}로 응답했습니다.`,
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, base, ...body });
  } catch (cause) {
    return NextResponse.json(
      {
        ok: false,
        error: `인연링크에 연결하지 못했습니다 (${base}): ${cause instanceof Error ? cause.message : "알 수 없는 오류"}`,
      },
      { status: 502 },
    );
  }
}
