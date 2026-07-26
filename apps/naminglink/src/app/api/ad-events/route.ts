import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getCountryCode, getDailyVisitorHash } from "@/lib/request-context";
import { checkRateLimit, readJsonBodyLimited } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const schema = z.object({
  eventType: z.enum(["IMPRESSION", "CLICK", "REWARD_GRANTED", "ERROR"]),
  slotKey: z.string().min(1).max(100),
  locale: z.string().max(20).optional(),
  serviceType: z.string().max(80).optional(),
});

export async function POST(request: NextRequest) {
  const body = await readJsonBodyLimited(request, 4 * 1024).catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "잘못된 광고 이벤트입니다." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  // 무인증 insert 남용으로 인한 테이블 팽창·광고 지표 조작 방어. 정상 사용은 후보 열람당
  // 이벤트 2~3건 수준이라 시간당 60건이면 넉넉하다.
  if (!(await checkRateLimit(request, "ad-events", { windowSeconds: 3600, limit: 60 }))) {
    return NextResponse.json({ ok: false, error: "요청이 너무 잦습니다." }, { status: 429 });
  }
  const { error } = await supabase.from("ad_events").insert({
    slot_key: parsed.data.slotKey,
    event_type: parsed.data.eventType,
    provider: "placeholder",
    country_code: getCountryCode(request),
    locale: parsed.data.locale ?? null,
    service_type: parsed.data.serviceType ?? null,
    visitor_hash: getDailyVisitorHash(request),
  });
  if (error) {
    console.error("Failed to record ad event", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
