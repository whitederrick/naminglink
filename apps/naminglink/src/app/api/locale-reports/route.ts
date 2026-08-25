import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDailyVisitorHash } from "@/lib/request-context";
import { checkRateLimit, readJsonBodyLimited } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const schema = z.object({
  url: z.string().trim().min(1).max(2000),
  message: z.string().trim().min(1).max(4000),
  locale: z.string().max(20).optional(),
});

export async function POST(request: NextRequest) {
  const body = await readJsonBodyLimited(request, 8 * 1024).catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "잘못된 신고입니다." }, { status: 400 });
  }
  // 시간당 5건 — 정상 이용자가 같은 시간에 여러 화면을 신고하는 경우는 드물다.
  if (!(await checkRateLimit(request, "locale-report", { windowSeconds: 3600, limit: 5 }))) {
    return NextResponse.json({ ok: false, error: "요청이 너무 잦습니다." }, { status: 429 });
  }
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { error } = await supabase.from("locale_reports").insert({
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
