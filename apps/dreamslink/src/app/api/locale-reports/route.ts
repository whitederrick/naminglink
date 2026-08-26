import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { z } from "zod";
import { checkRateLimit } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 신고 채널(관측망). naminglink의 같은 경로와 짝이고 같은 locale_reports 표에 쓴다.
// docs/LOCALE_AD_STRATEGY_2026-08-21.md §3.5 ⑤ 참고(naminglink 저장소).
//
// **`service`는 서버가 박는다.** 이 라우트는 드림링크 배포에만 있으므로 값이 하나로 정해진다
// (analytics/route.ts와 같은 이유).

export const runtime = "nodejs";

const schema = z.object({
  url: z
    .string()
    .trim()
    .min(1)
    .max(2000)
    .refine(isHttpUrl, "url must be an absolute http(s) URL"),
  message: z.string().trim().min(1).max(4000),
  locale: z.string().max(20).optional(),
});

/** javascript:·data: 등 실행 가능한 스킴을 막는다 — 이 URL은 관리자 콘솔에서 링크로 그려진다. */
function isHttpUrl(value: string) {
  try {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

function getRequestIp(request: NextRequest) {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((part) => part.trim()).filter(Boolean);
    if (parts.length) return parts[parts.length - 1];
  }
  return "local";
}

/** 하루 단위 방문자 식별자. 원래 IP는 남기지 않는다. */
function getDailyVisitorHash(request: NextRequest) {
  const secret = process.env.ANALYTICS_HASH_SALT ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) return null;
  const day = new Date().toISOString().slice(0, 10);
  return createHmac("sha256", secret).update(`${day}:${getRequestIp(request)}`).digest("hex");
}

// 본문은 URL과 자유서술뿐이라 4KB면 넘치고도 남는다(analytics/route.ts와 같은 상한).
const MAX_BODY_BYTES = 4 * 1024;

export async function POST(request: NextRequest) {
  // 스코프에 서비스 접두사를 붙인다 — 네 앱이 rate_limit_counters 표를 공유해서 접두사가
  // 없으면 한 서비스의 트래픽이 다른 서비스의 한도를 깎는다.
  if (!(await checkRateLimit(request, "dreams_locale_report", { windowSeconds: 3600, limit: 5 }))) {
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
    return NextResponse.json({ ok: false, error: "잘못된 신고입니다." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "잘못된 신고입니다." }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { error } = await supabase.from("locale_reports").insert({
    service: "dreamslink",
    url: parsed.data.url,
    message: parsed.data.message,
    locale: parsed.data.locale ?? null,
    visitor_hash: getDailyVisitorHash(request),
  });
  if (error) {
    console.error("Failed to record locale report", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
