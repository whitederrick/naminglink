import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getCountryCode, getDailyVisitorHash } from "@/lib/request-context";
import { readJsonBodyLimited } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

const schema = z.object({
  eventType: z.enum(["PAGE_VIEW", "ANALYSIS_STARTED", "ANALYSIS_COMPLETED", "ANALYSIS_FAILED"]),
  path: z.string().max(300).default("/"),
  locale: z.string().max(20).optional(),
  serviceType: z.string().max(80).optional(),
  metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export async function POST(request: NextRequest) {
  const body = await readJsonBodyLimited(request, 4 * 1024).catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "잘못된 이벤트입니다." }, { status: 400 });
  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 503 });
  const { error } = await supabase.from("site_events").insert({
    event_type: parsed.data.eventType,
    path: parsed.data.path,
    locale: parsed.data.locale ?? null,
    country_code: getCountryCode(request),
    service_type: parsed.data.serviceType ?? null,
    visitor_hash: getDailyVisitorHash(request),
    metadata: parsed.data.metadata ?? {},
  });
  if (error) {
    console.error("Failed to record analytics event", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
