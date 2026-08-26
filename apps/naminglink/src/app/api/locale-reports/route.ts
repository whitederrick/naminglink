import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDailyVisitorHash } from "@/lib/request-context";
import { checkRateLimit, readJsonBodyLimited } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

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

export async function POST(request: NextRequest) {
  const body = await readJsonBodyLimited(request, 8 * 1024).catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "잘못된 신고입니다." }, { status: 400 });
  }
  // 시간당 5건 — 정상 이용자가 같은 시간에 여러 화면을 신고하는 경우는 드물다.
  // 스코프에 서비스 접두사(naming_)를 붙인다 — 네 앱이 rate_limit_counters 표를 공유해서
  // 접두사가 없으면 한 서비스의 트래픽이 다른 서비스의 한도를 깎는다(형제 앱 컨벤션과 통일).
  if (!(await checkRateLimit(request, "naming_locale_report", { windowSeconds: 3600, limit: 5 }))) {
    return NextResponse.json({ ok: false, error: "요청이 너무 잦습니다." }, { status: 429 });
  }
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { error } = await supabase.from("locale_reports").insert({
    service: "naminglink",
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
