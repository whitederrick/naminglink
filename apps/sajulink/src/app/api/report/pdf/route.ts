import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { ENGINE_VERSION } from "@/lib/engines";
import { prepare, toReading } from "@/lib/engines/prepare";
import {
  todayFortune,
  todayInSeoul,
  todayPillarOf,
} from "@/lib/engines/today-fortune";
import { getDictionary, isLocale, type Dictionary, type Locale } from "@/lib/i18n";
import { pdfLocale } from "@/lib/pdf/fonts";
import { sajuInputSchema, toPerson } from "@/lib/saju-input";
import { renderSajuReport } from "@/lib/pdf/saju-report";
import { interpretSaju } from "@/lib/saju-interpretation";
import { inputFingerprint } from "@/lib/report-order-binding";
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
 * 두 티어가 같은 입력(한 사람)을 받는다. 다른 것은 **문서에 얼마나 담느냐**뿐이다.
 *
 * 그래도 `kind`를 판별자로 남긴다 — 주문 종류와 대조해 **총운을 사고 프리미엄 문서를
 * 받아 가는 일**이 없어야 하기 때문이다(아래 `orderType` 확인).
 */
const schema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("chongun"),
    orderId: z.string().uuid(),
    paymentId: z.string().min(8).max(64),
    locale: z.string().trim().max(10).optional(),
    input: sajuInputSchema,
  }),
  z.object({
    kind: z.literal("premium"),
    orderId: z.string().uuid(),
    paymentId: z.string().min(8).max(64),
    locale: z.string().trim().max(10).optional(),
    input: sajuInputSchema,
  }),
]);

export async function POST(request: NextRequest) {
  // PDF 렌더는 무겁다. 주문·결제 검증을 통과해야 실제로 만들어지지만, 그 앞단에서 한 번 막는다.
  // 같은 주문으로 5회까지 다시 받을 수 있으므로 그보다는 여유를 둔다.
  const allowed = await checkRateLimit(request, "saju_report_pdf", {
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
    parsed.data.kind === "premium" ? "SAJU_PREMIUM_PDF" : "SAJU_CHONGUN_PDF";

  try {
    const { data: order } = await supabase
      .from("orders")
      .select(
        "id,payment_status,payment_amount,payment_currency,provider_payment_id,metadata",
      )
      .eq("id", orderId)
      .eq("order_type", orderType)
      .eq("service", "sajulink")
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

    // 첫 발급이 이 주문의 대상을 정한다. 그다음부터는 같은 대상만 다시 받을 수 있다.
    const fingerprint = inputFingerprint(parsed.data.input);
    const boundFingerprint =
      typeof metadata.inputFingerprint === "string" ? metadata.inputFingerprint : null;
    if (boundFingerprint && boundFingerprint !== fingerprint) {
      return jsonError("INPUT_MISMATCH", 409);
    }

    /**
     * **대상 결속은 렌더 전에, DB가 정하게 한다.**
     *
     * 위에서 읽은 값으로만 판단하면 동시에 들어온 요청 둘이 **둘 다 "아직 결속 안 됨"을 보고
     * 둘 다 통과한다** — 한 번 결제로 서로 다른 사람의 리포트가 나간다. 조건을 쓰기에 붙여
     * 먼저 도착한 하나만 성공하게 하고, 못 쓴 쪽은 다시 읽어 자기 대상인지 확인한다.
     *
     * **렌더 뒤로 미루지 않는 이유**: 미루면 그 사이에 다른 입력이 들어와도 막을 것이 없다.
     * 발급 횟수와 달리 이건 한 번 정해지면 끝인 값이라, 렌더가 실패해도 같은 대상으로 다시
     * 받으면 되므로 미리 적어 두어도 이용자가 잃는 것이 없다.
     */
    if (!boundFingerprint) {
      const { data: bound, error: bindError } = await supabase
        .from("orders")
        .update({
          metadata: { ...metadata, inputFingerprint: fingerprint },
          updated_at: new Date().toISOString(),
        })
        .eq("id", order.id)
        .is("metadata->>inputFingerprint", null)
        .select("id");
      if (bindError) throw bindError;
      if (!bound?.length) {
        const { data: fresh } = await supabase
          .from("orders")
          .select("metadata")
          .eq("id", order.id)
          .maybeSingle();
        const freshMetadata =
          fresh?.metadata && typeof fresh.metadata === "object"
            ? (fresh.metadata as Record<string, unknown>)
            : {};
        if (freshMetadata.inputFingerprint !== fingerprint) {
          return jsonError("INPUT_MISMATCH", 409);
        }
      }
    }

    const requested = isLocale(parsed.data.locale) ? parsed.data.locale : "en";
    // 아랍어·크메르어는 PDF만 영어로 낸다. 화면 언어는 그대로다 — 그 두 문자 체계는 서체를
    // 등록하는 순간 렌더가 죽어서, 화면 언어 그대로 내면 결제하고도 파일을 못 받는다
    // (`lib/pdf/fonts.tsx`에 증상과 사연이 있다).
    const locale = pdfLocale(requested);
    const dictionary = getDictionary(locale);
    const buffer = await render(parsed.data, locale, dictionary);

    // 파일을 다 만든 **뒤에** 완료로 적는다. 렌더에 실패했는데 결제만 완료로 남으면
    // 이용자는 돈을 내고 아무것도 받지 못한 채 재발급도 못 하게 된다.
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_status: "PAID",
        fulfillment_status: "COMPLETED",
        // 발급 횟수는 조건 없이 쓴다. 동시에 들어오면 한쪽 증가가 덮여 5회를 넘길 수 있지만,
        // 대상 결속이 위에서 이미 끝났으므로 그때 나가는 것은 **같은 사람이 자기 파일을 다시
        // 받는 것**뿐이다(레이트리밋 시간당 30이 상한). 돈이 새는 자리가 아니라 서버 비용이라
        // 렌더 뒤에 적는 성질(아래 주석)을 지키는 쪽을 택했다.
        metadata: { ...metadata, issuedCount: issuedCount + 1, inputFingerprint: fingerprint },
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id);
    if (updateError) throw updateError;

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        // 파일 이름에 이용자 이름을 넣지 않는다 — 브라우저 다운로드 기록에 남는다.
        // 상품별로는 가른다. 둘 다 산 사람에게 같은 이름을 주면 한쪽이 덮어써진다.
        "Content-Disposition": `attachment; filename="sajulink-${parsed.data.kind}.pdf"`,
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
    // **위 티어를 기본으로 두지 않는다.** 값이 빠졌다고 비싼 문서를 내주면 안 된다.
    return { ...(body as Record<string, unknown>), kind: "chongun" };
  }
  return body;
}

/**
 * 결제가 확인된 뒤 실제로 문서를 만든다.
 *
 * 계산을 **여기서 다시 돌리는 것**이 중요하다. 화면이 보낸 결과를 그대로 싣지 않으므로,
 * 이용자가 응답을 손봐도 문서에는 서버가 규칙으로 계산한 값만 들어간다.
 */
async function render(
  parsed: (typeof schema)["_output"],
  locale: Locale,
  dictionary: Dictionary,
) {
  // **계산을 여기서 다시 돌린다.** 화면이 보낸 결과를 그대로 싣지 않으므로, 이용자가 응답을
  // 손봐도 문서에는 서버가 규칙으로 계산한 값만 들어간다.
  const reading = toReading(prepare(toPerson(parsed.input.me)));
  const today = todayFortune(reading, todayPillarOf(todayInSeoul(new Date())));

  /**
   * **AI 해설은 이 자리에서만 부른다 — 결제가 확인된 뒤다.**
   *
   * 무료 화면(`/api/saju`·`/api/today`)은 모델을 부르지 않는다. 그쪽이 트래픽을 받는
   * 자리라 조회마다 때리면 API 비용·응답 지연·광고 페이지 속도가 함께 나빠진다.
   *
   * **실패해도 값이 온다.** 모델이 흔들리면 엔진 값으로 쓴 서술이 그 자리를 채운다
   * (`saju-fallback.ts`) — 해설 자리를 비우면 문서가 3장·5장으로 나가 **상품 정보 고시에 적은
   * 5장·7장과 어긋나기** 때문이다. 재시도와 알림도 `interpretSaju` 안에 있다.
   */
  const interpretation = await interpretSaju({
    reading,
    today,
    kind: parsed.kind,
    locale,
  });

  return renderSajuReport({
    kind: parsed.kind,
    reading,
    today,
    interpretation,
    locale,
    dictionary,
    // 꼬리글에 찍는 값. 결과 화면이 보여 주는 계산 기준과 같아야 한다.
    generatedAt: new Date().toISOString(),
    engineVersion: ENGINE_VERSION,
  });
}

function jsonError(code: string, status: number) {
  return NextResponse.json(
    { ok: false, error: code },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
