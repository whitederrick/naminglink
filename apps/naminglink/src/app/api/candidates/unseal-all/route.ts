import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getHanjaProduct, HANJA_PRODUCT_CODES, type HanjaProductCode } from "@/lib/hanja-products";
import { isPremiumTestRequestAllowed } from "@/lib/premium-test-access";
import { getAuthorizedPremiumSession } from "@/lib/premium-session";
import { checkRateLimit, readJsonBodyLimited, RequestTooLargeError } from "@/lib/request-guard";
import { openSeals, SealError } from "@/lib/result-seal";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

/**
 * 결제로 산 후보를 한 번에 연다.
 *
 * **결제 확인은 이미 다른 곳에서 끝났다.** 이 라우트가 하는 일은 "그 결제가 정말 완료되었고,
 * 그 상품이 여기까지 살 수 있는 것인가"를 다시 확인하고 봉인을 푸는 것뿐이다. 화면이 스스로
 * 열지 못하게 하는 것이 목적이라, 화면이 보내는 값(열 개수 등)은 하나도 믿지 않는다.
 *
 * **상품마다 열 수 있는 범위가 다르다.** 한자 상세는 5개짜리와 10개짜리가 따로 팔린다.
 * 5개를 산 사람이 10개를 여는 일이 없도록 상품표의 `candidateLimit`으로 자른다.
 */

const schema = z.object({
  seals: z.array(z.string().min(32).max(64 * 1024)).min(1).max(20),
  order: z
    .object({ orderId: z.string().uuid(), paymentId: z.string().min(8).max(64) })
    .optional(),
  premium: z
    .object({ sessionId: z.string().uuid(), accessToken: z.string().min(16).max(200) })
    .optional(),
  test: z.literal(true).optional(),
  productCode: z.enum(HANJA_PRODUCT_CODES).optional(),
});

/** 일괄 공개 상품(₩990·US$1.99)이 여는 범위. 이 상품을 파는 화면들의 후보 상한과 같다. */
const CANDIDATE_UNLOCK_LIMIT = 5;

type Entitlement = { limit: number } | { error: string; status: number };

async function resolveEntitlement(
  request: NextRequest,
  input: z.infer<typeof schema>,
  sid: string | null,
): Promise<Entitlement> {
  if (input.premium) {
    try {
      const { supabase, session } = await getAuthorizedPremiumSession(
        input.premium.sessionId,
        input.premium.accessToken,
      );
      if (String(session.status) !== "PAID" && String(session.status) !== "READY") {
        return { error: "결제가 확인되지 않았습니다.", status: 402 };
      }

      /**
       * **세션 하나는 결과 한 벌만 연다.** `order` 분기와 같은 이유·같은 구조다(주석은 위쪽
       * 참고) — sessionId/accessToken은 결제 후에도 브라우저(localStorage)에 남아 있어, 묶어
       * 두지 않으면 같은 프리미엄 결제로 다른 무료 결과의 후보를 얼마든지 열 수 있다.
       */
      const boundSid = typeof session.unseal_sid === "string" ? session.unseal_sid : null;
      if (boundSid && boundSid !== sid) {
        return { error: "이 결제로는 다른 결과를 열 수 없습니다.", status: 403 };
      }
      if (!boundSid && sid) {
        const { data: bound, error: bindError } = await supabase
          .from("premium_analysis_sessions")
          .update({ unseal_sid: sid, updated_at: new Date().toISOString() })
          .eq("id", session.id)
          .is("unseal_sid", null)
          .select("id");
        if (bindError) {
          console.error("Failed to bind unseal sid to premium session", bindError);
          return { error: "결제 정보를 확인하지 못했습니다.", status: 503 };
        }
        if (!bound?.length) {
          const { data: fresh } = await supabase
            .from("premium_analysis_sessions")
            .select("unseal_sid")
            .eq("id", session.id)
            .maybeSingle();
          if (fresh?.unseal_sid !== sid) {
            return { error: "이 결제로는 다른 결과를 열 수 없습니다.", status: 403 };
          }
        }
      }

      const product = getHanjaProduct(String(session.product_code) as HanjaProductCode);
      return { limit: product.candidateLimit };
    } catch {
      // 세션을 못 찾거나 토큰이 틀린 것을 구분해 알리지 않는다 — 남의 세션을 더듬는 데 쓰인다.
      return { error: "결제 정보를 확인하지 못했습니다.", status: 403 };
    }
  }

  if (input.order) {
    const supabase = getSupabaseAdminClient();
    if (!supabase) return { error: "주문 저장소가 설정되지 않았습니다.", status: 503 };
    const { data: order } = await supabase
      .from("orders")
      .select("id,payment_status,provider_payment_id,metadata")
      .eq("id", input.order.orderId)
      .eq("order_type", "CANDIDATE_UNLOCK")
      .maybeSingle();
    if (!order || String(order.provider_payment_id) !== input.order.paymentId) {
      return { error: "결제 확인 대상 주문을 찾을 수 없습니다.", status: 404 };
    }
    if (String(order.payment_status) !== "PAID") {
      return { error: "결제가 확인되지 않았습니다.", status: 402 };
    }

    /**
     * **주문 하나는 결과 한 벌만 연다.** 주문 식별값은 결제 후 화면에 남아 있어, 다른 결과를
     * 만들어 같은 주문으로 또 열 수 있으면 990원에 무제한이 된다. 처음 쓴 결과의 식별자를
     * 주문에 적어 두고 그 뒤로는 같은 결과만 허용한다(무엇을 만들었는지가 아니라 **어느 한 벌인지**만
     * 남으므로 결과 미저장 원칙과 충돌하지 않는다).
     */
    const metadata =
      order.metadata && typeof order.metadata === "object"
        ? (order.metadata as Record<string, unknown>)
        : {};
    const boundSid = typeof metadata.unsealSid === "string" ? metadata.unsealSid : null;
    if (boundSid && boundSid !== sid) {
      return { error: "이 결제로는 다른 결과를 열 수 없습니다.", status: 403 };
    }
    if (!boundSid && sid) {
      /**
       * **결속은 DB가 정한다.** 위에서 읽은 값으로만 판단하면 동시에 들어온 요청 둘이 **둘 다
       * "아직 결속 안 됨"을 보고 둘 다 통과한다** — 한 주문으로 서로 다른 결과 두 벌이 열린다.
       * 위 주석이 막겠다고 적은 바로 그것이 읽기와 쓰기 사이의 틈으로 새던 자리다.
       *
       * 조건을 쓰기에 붙여 **먼저 도착한 하나만 성공**하게 한다. 못 쓴 쪽은 다시 읽어 그 사이
       * 결속된 값이 자기 것인지 확인한다(같은 결과를 두 창에서 여는 정상 경우가 여기 걸린다).
       */
      const { data: bound, error: bindError } = await supabase
        .from("orders")
        .update({ metadata: { ...metadata, unsealSid: sid }, updated_at: new Date().toISOString() })
        .eq("id", order.id)
        .is("metadata->>unsealSid", null)
        .select("id");
      if (bindError) {
        console.error("Failed to bind unseal sid to order", bindError);
        return { error: "결제 정보를 확인하지 못했습니다.", status: 503 };
      }
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
        if (freshMetadata.unsealSid !== sid) {
          return { error: "이 결제로는 다른 결과를 열 수 없습니다.", status: 403 };
        }
      }
    }
    return { limit: CANDIDATE_UNLOCK_LIMIT };
  }

  if (input.test) {
    // 결제 없이 여는 경로다. 운영에서는 운영자 로그인이나 시크릿 헤더가 있어야 한다.
    if (!(await isPremiumTestRequestAllowed(request))) {
      return { error: "허용되지 않은 요청입니다.", status: 403 };
    }
    // 범위는 결제 경로와 같은 자리(상품표)에서 읽는다. 화면이 개수를 정하게 두면 테스트가
    // 실제보다 넓게 열려도 아무도 모른다.
    if (!input.productCode) return { error: "상품을 지정해 주세요.", status: 400 };
    return { limit: getHanjaProduct(input.productCode).candidateLimit };
  }

  return { error: "결제 정보가 없습니다.", status: 400 };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    // 후보 본문이 통째로 든 봉인문 최대 20개가 올 수 있다.
    body = await readJsonBodyLimited(request, 1024 * 1024);
  } catch (guardError) {
    const message =
      guardError instanceof RequestTooLargeError
        ? guardError.message
        : "후보 열기 요청이 올바르지 않습니다.";
    return NextResponse.json({ ok: false, error: message }, { status: 413 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "후보 열기 요청이 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const allowed = await checkRateLimit(request, "candidate-unseal-all", {
    windowSeconds: 3600,
    limit: 30,
  });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  try {
    // 먼저 풀어 본다 — 어느 결과 한 벌인지(sid)를 알아야 주문과 대조할 수 있다.
    const { sid, opened } = openSeals(parsed.data.seals);
    const entitlement = await resolveEntitlement(request, parsed.data, sid);
    if ("error" in entitlement) {
      return NextResponse.json(
        { ok: false, error: entitlement.error },
        { status: entitlement.status },
      );
    }

    // 산 범위 밖은 잠긴 채로 둔다. 오류가 아니라 상품의 경계다.
    const entitled = opened
      .filter((entry) => entry.index < entitlement.limit)
      .map((entry) => ({ index: entry.index, candidate: entry.candidate }));
    return NextResponse.json({ ok: true, opened: entitled });
  } catch (error) {
    if (error instanceof SealError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("Failed to unseal candidates", error);
    return NextResponse.json(
      { ok: false, error: "후보를 열지 못했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
