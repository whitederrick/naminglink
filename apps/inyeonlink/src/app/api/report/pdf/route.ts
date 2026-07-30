import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { affinityInputSchema } from "@/lib/affinity-input";
import { runAffinity, runMatch } from "@/lib/engines";
import { getDictionary, isLocale, type Dictionary, type Locale } from "@/lib/i18n";
import { matchInputSchema, toPerson } from "@/lib/match-input";
import { renderAffinityReport } from "@/lib/pdf/affinity-report";
import { renderCompatibilityReport } from "@/lib/pdf/compatibility-report";
import { notifyOps } from "@/lib/ops-alert";
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

/**
 * 두 상품이 받는 입력이 다르다 — 궁합은 두 사람, 인연의 결은 한 사람이다.
 *
 * `kind`로 갈라 **그 종류의 스키마만** 통과시킨다. 하나로 합쳐 둘 다 optional로 두면
 * 인연의 결 주문에 두 사람 입력을 실어 보내는 요청이 통과해 버린다.
 */
const schema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("gunghap"),
    orderId: z.string().uuid(),
    paymentId: z.string().min(8).max(64),
    locale: z.string().trim().max(10).optional(),
    input: matchInputSchema,
  }),
  z.object({
    kind: z.literal("affinity"),
    orderId: z.string().uuid(),
    paymentId: z.string().min(8).max(64),
    locale: z.string().trim().max(10).optional(),
    input: affinityInputSchema,
  }),
]);

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

  // `kind`가 없으면 궁합으로 본다. 판별 합집합은 판별자가 반드시 있어야 하므로 파싱 전에
  // 채운다 — 배포 직후 열려 있던 옛 화면이 이 값을 보내지 않는다.
  const parsed = schema.safeParse(withDefaultKind(parsedBody));
  if (!parsed.success) return jsonError("INVALID_INPUT", 400);

  const supabase = getSupabaseAdminClient();
  if (!supabase) return jsonError("STORAGE_NOT_READY", 503);

  const { orderId, paymentId } = parsed.data;
  // 주문 종류까지 맞춰서 찾는다. 궁합 주문으로 인연의 결 PDF를 받아 가는 일이 없어야 한다.
  const orderType =
    parsed.data.kind === "affinity" ? "AFFINITY_PDF" : "GUNGHAP_PDF";

  try {
    const { data: order } = await supabase
      .from("orders")
      .select(
        "id,payment_status,payment_amount,payment_currency,provider_payment_id,metadata",
      )
      .eq("id", orderId)
      .eq("order_type", orderType)
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
      // **토스 주문은 여기서 확인하지 않는다.** 토스는 승인 라우트에서 승인과 동시에 PAID가
      // 되므로, 아직 UNPAID라면 승인이 안 끝난 것이다(또는 만료). 포트원 검증을 대신 돌리면
      // 엉뚱한 오류가 나므로 갈라 둔다.
      if (metadata.provider === "TOSS_PAYMENTS") {
        return jsonError("PAYMENT_NOT_CONFIRMED", 409);
      }
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
    const buffer = await render(parsed.data, locale, dictionary);

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
        // 파일 이름에 이용자 이름을 넣지 않는다 — 브라우저 다운로드 기록에 남는다.
        // 상품별로는 가른다. 둘 다 산 사람에게 같은 이름을 주면 한쪽이 덮어써진다.
        "Content-Disposition": `attachment; filename="inyeonlink-${parsed.data.kind}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error(`Failed to issue ${parsed.data.kind} report`, error);
    // **결제는 끝났는데 물건이 안 나간 자리다.** 이용자가 문의하기 전에 우리가 먼저 알아야 한다.
    notifyOps(
      `report-issue-failed:${parsed.data.kind}`,
      `결제된 리포트를 발급하지 못했습니다 (${parsed.data.kind})`,
      { kind: parsed.data.kind, reason: error instanceof Error ? error.message : String(error) },
      "critical",
    );
    return jsonError("ISSUE_FAILED", 500);
  }
}

function withDefaultKind(body: unknown) {
  if (body && typeof body === "object" && !("kind" in body)) {
    return { ...(body as Record<string, unknown>), kind: "gunghap" };
  }
  return body;
}

/**
 * 결제가 확인된 뒤 실제로 문서를 만든다.
 *
 * 계산을 **여기서 다시 돌리는 것**이 중요하다. 화면이 보낸 결과를 그대로 싣지 않으므로,
 * 이용자가 응답을 손봐도 문서에는 서버가 규칙으로 계산한 값만 들어간다.
 */
function render(
  parsed: (typeof schema)["_output"],
  locale: Locale,
  dictionary: Dictionary,
) {
  const generatedAt = new Date().toISOString();

  if (parsed.kind === "affinity") {
    const { me, seeking } = parsed.input;
    return renderAffinityReport({
      outcome: runAffinity(toPerson(me), seeking),
      name: me.label?.trim() || dictionary.affinity.meLegend,
      locale,
      dictionary,
      generatedAt,
    });
  }

  const { a, b } = parsed.input;
  return renderCompatibilityReport({
    outcome: runMatch(toPerson(a), toPerson(b)),
    nameA: a.label?.trim() || dictionary.form.personA,
    nameB: b.label?.trim() || dictionary.form.personB,
    locale,
    dictionary,
    generatedAt,
  });
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { ok: false, error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
