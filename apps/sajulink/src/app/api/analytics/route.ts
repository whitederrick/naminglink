import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { checkRateLimit, getDailyVisitorHash } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

/**
 * 접속·이용 집계 수집. naminglink·인연링크의 같은 경로와 짝이고 같은 `site_events` 표에 쓴다.
 *
 * **`app`은 서버가 박는다.** 클라이언트가 보내는 값을 믿으면 남의 서비스 통계에 행을 넣을 수
 * 있다. 이 라우트는 사주링크 배포에만 있으므로 값이 하나로 정해진다.
 *
 * **생년월일은 물론이고 경로 외의 아무것도 받지 않는다.** 입력을 저장하지 않는 것이 이 서비스의
 * 원칙이라, 스키마에 `metadata`를 아예 두지 않았다(naminglink에는 있다).
 */

export const runtime = "nodejs";

const schema = z.object({
  eventType: z.enum(["PAGE_VIEW", "ANALYSIS_STARTED", "ANALYSIS_COMPLETED", "ANALYSIS_FAILED"]),
  path: z.string().max(300).default("/"),
  locale: z.string().max(20).optional(),
  serviceType: z.enum(["SAJU_READING", "SAJU_TODAY"]).optional(),
});

function getCountryCode(request: NextRequest) {
  const value = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  return value && /^[A-Z]{2}$/.test(value) ? value : null;
}

// getDailyVisitorHash는 request-guard.ts에서 가져온다 — 예전에는 여기·locale-reports·
// request-guard 세 곳에 같은 함수가 복붙돼 있었다(2026-08-26 코드 리뷰에서 발견).
// **naminglink와 같은 소금을 쓰면 안 된다는 것이 아니다** — 같아도 무방하다. 어차피 날짜와
// 함께 해시하므로 되돌릴 수 없고, 두 서비스를 오간 사람을 같은 방문자로 세는 것은 오히려 맞다.

/**
 * 실을 수 있는 본문의 상한. 경로와 로케일과 메뉴 구분뿐이라 4KB면 넘치고도 남는다.
 *
 * **이 라우트만 상한이 없었다.** 인연링크의 다른 다섯 라우트(match·affinity·day-master·
 * report/order·report/pdf)는 전부 자르고 있었고, naminglink의 같은 라우트도 4KB로 자른다.
 * 여기 하나만 `request.json()`을 그대로 불러 **크기를 재기 전에 통째로 읽고 있었다.**
 */
const MAX_BODY_BYTES = 4 * 1024;

export async function POST(request: NextRequest) {
  // 무인증 insert 남용으로 인한 표 팽창·통계 조작 방어. 페이지뷰와 분석 이벤트를 합쳐도 정상
  // 이용은 시간당 수십 건이라 120건이면 넉넉하다(naminglink와 같은 값).
  //
  // **여기는 레이트리밋이 fail-open이어도 괜찮다.** 막지 못해 통과시킨 요청이 하는 일은 통계 행
  // 하나를 더 쓰는 것뿐이다.
  //
  // **본문을 읽기 전에 센다.** 뒤에 두면 잦은 요청을 막기도 전에 본문부터 읽게 된다.
  // **스코프 이름에 서비스가 들어간다.** 세 앱이 한 Supabase를 쓰므로 레이트리밋 표도
  // 하나다 — 이름이 같으면 한 서비스의 트래픽이 다른 서비스의 한도를 깎는다(같은 IP가
  // naminglink를 쓰다 오면 여기서 먼저 막힌다). 다른 라우트는 이미 접두사로 갈려 있었고
  // 집계만 `analytics`로 남아 있었다(2026-08-06, 사주링크).
  if (!(await checkRateLimit(request, "saju_analytics", { windowSeconds: 3600, limit: 120 }))) {
    return NextResponse.json({ ok: false, error: "요청이 너무 잦습니다." }, { status: 429 });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "본문이 너무 큽니다." }, { status: 413 });
  }

  let body: unknown = null;
  try {
    body = JSON.parse(raw);
  } catch {
    // 아래 스키마 검사가 400으로 돌려준다.
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "잘못된 이벤트입니다." }, { status: 400 });
  }
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });

  const { error } = await supabase.from("site_events").insert({
    app: "sajulink",
    event_type: parsed.data.eventType,
    path: parsed.data.path,
    locale: parsed.data.locale ?? null,
    country_code: getCountryCode(request),
    service_type: parsed.data.serviceType ?? null,
    visitor_hash: getDailyVisitorHash(request),
    metadata: {},
  });
  if (error) {
    console.error("Failed to record analytics event", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
