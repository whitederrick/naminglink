import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getCountryCode, getDailyVisitorHash } from "@/lib/request-context";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const schema = z.object({
  eventType: z.enum(["IMPRESSION", "CLICK", "REWARD_GRANTED", "ERROR"]),
  slotKey: z.string().min(1).max(100),
  namingLogId: z.string().uuid().nullable().optional(),
  locale: z.string().max(20).optional(),
  serviceType: z.string().max(80).optional(),
});

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "잘못된 광고 이벤트입니다." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { error } = await supabase.from("ad_events").insert({
    naming_log_id: parsed.data.namingLogId ?? null,
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
