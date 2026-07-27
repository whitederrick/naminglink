import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { runMatch } from "@/lib/engines";
import { getDictionary, isLocale } from "@/lib/i18n";
import { matchInputSchema, toPerson } from "@/lib/match-input";
import { renderCompatibilityReport } from "@/lib/pdf/compatibility-report";
import { getVerifiedPayment } from "@/lib/portone";
import { checkRateLimit } from "@/lib/request-guard";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 결제를 확인하고 그 자리에서 PDF를 만들어 내려보낸다.
//
// **이 요청에만 생년월일이 실린다.** 주문 표에는 저장하지 않고, 만든 파일도 어디에 두지
// 않는다. 응답이 끝나면 서버에는 아무것도 남지 않는다 — 인연링크의 미저장 원칙을 유료
// 흐름에서도 지키기 위해서다. 대신 결제 후 파일을 잃어버릴 수 있으므로 같은 주문으로
// 몇 번은 다시 받을 수 있게 한다(REISSUE_LIMIT).
//
// 결제 검증은 클라이언트 말이 아니라 포트원에 직접 물어서 한다.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** 한 주문으로 PDF를 받을 수 있는 횟수. 다운로드가 끊기거나 파일을 잃은 경우를 위한 여유다. */
const REISSUE_LIMIT = 5;

const schema = z.object({
  orderId: z.string().uuid(),
  paymentId: z.string().min(8).max(64),
  locale: z.string().trim().max(10).optional(),
  input: matchInputSchema,
});

export async function POST(request: NextRequest) {
  // PDF 렌더는 무겁다. 주문·결제 검증을 통과해야 실제로 만들어지지만, 그 앞단에서 한 번 막는다.
  // 같은 주문으로 5회까지 다시 받을 수 있으므로 그보다는 여유를 둔다.
  const allowed = await checkRateLimit(request, "inyeon_report_pdf", {
    windowSeconds: 3600,
    limit: 30,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const raw = await request.text();
  if (raw.length > 8 * 1024) return jsonError("PAYLOAD_TOO_LARGE", 413);

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(raw);
  } catch {
    return jsonError("INVALID_JSON", 400);
  }

  const parsed = schema.safeParse(parsedBody);
  if (!parsed.success) return jsonError("INVALID_INPUT", 400);

  const supabase = getSupabaseAdminClient();
  if (!supabase) return jsonError("STORAGE_NOT_READY", 503);

  const { orderId, paymentId, input } = parsed.data;

  try {
    const { data: order } = await supabase
      .from("orders")
      .select(
        "id,payment_status,payment_amount,payment_currency,provider_payment_id,metadata",
      )
      .eq("id", orderId)
      .eq("order_type", "GUNGHAP_PDF")
      .eq("service", "inyeonlink")
      .maybeSingle();

    if (!order || String(order.provider_payment_id) !== paymentId) {
      return jsonError("ORDER_NOT_FOUND", 404);
    }

    const metadata =
      order.metadata && typeof order.metadata === "object"
        ? (order.metadata as Record<string, unknown>)
        : {};
    const issuedCount = Number(metadata.issuedCount ?? 0);

    // 이미 결제가 확인된 주문이면 다시 물어보지 않는다. 재발급은 한도 안에서만 허용한다.
    if (order.payment_status !== "PAID") {
      await getVerifiedPayment(
        paymentId,
        Number(order.payment_amount),
        String(order.payment_currency ?? "KRW"),
      );
    } else if (issuedCount >= REISSUE_LIMIT) {
      return jsonError("REISSUE_LIMIT_REACHED", 429);
    }

    const locale = isLocale(parsed.data.locale) ? parsed.data.locale : "en";
    const dictionary = getDictionary(locale);
    const outcome = runMatch(toPerson(input.a), toPerson(input.b));

    const buffer = await renderCompatibilityReport({
      outcome,
      nameA: input.a.label?.trim() || dictionary.form.personA,
      nameB: input.b.label?.trim() || dictionary.form.personB,
      locale,
      dictionary,
      generatedAt: new Date().toISOString(),
    });

    // 파일을 다 만든 **뒤에** 완료로 적는다. 렌더에 실패했는데 결제만 완료로 남으면
    // 이용자는 돈을 내고 아무것도 받지 못한 채 재발급도 못 하게 된다.
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_status: "PAID",
        fulfillment_status: "COMPLETED",
        metadata: { ...metadata, issuedCount: issuedCount + 1 },
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id);
    if (updateError) throw updateError;

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        // 파일 이름에 이름을 넣지 않는다 — 브라우저 다운로드 기록에 남는다.
        "Content-Disposition": `attachment; filename="inyeonlink-report.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to issue gunghap report", error);
    return jsonError("ISSUE_FAILED", 500);
  }
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { ok: false, error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
