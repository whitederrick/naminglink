import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";

// 굿즈(도장) 주문의 배송 개인정보 파기.
//
// 개인정보처리방침 "3. 보관 및 파기"는 배송 상세정보를 기간 경과 후 파기하되 결제·주문 거래기록은
// 법정 보관 기간까지 남기도록 정하고 있다. 그래서 주문 행을 삭제하지 않고 PII 필드만 비운다.
//
// 프리미엄 세션 정리(premium-cleanup)는 premium_analysis_sessions 조회에서 대상을 고르는데 굿즈
// 주문에는 세션이 없어 한 번도 걸리지 않았다. 이 모듈이 그 공백을 담당한다.

// 결제까지 가지 않고 이탈한 주문. 보관 근거가 아예 없으므로 프리미엄 이탈 세션과 같은 기준으로 짧게 잡는다.
const ABANDONED_TTL_HOURS = Number(process.env.GOODS_ABANDONED_TTL_HOURS ?? 24);
// 배송 완료·취소 후 반품·분쟁 대응 기간(사용자 확정 2026-07-24: 90일).
const SETTLED_TTL_DAYS = Number(process.env.GOODS_SHIPPING_PII_TTL_DAYS ?? 90);

const BATCH_SIZE = 100;

// 거래기록으로 남겨야 하는 metadata 키. 나머지(phone·country·note·stampName)는 파기 대상이다.
// stampName은 도장에 새길 문구인데 대개 이름 그 자체라 개인정보로 취급한다(2026-07-24 결정).
const RETAINED_METADATA_KEYS = new Set([
  "provider",
  "productCode",
  "stampModel",
  "transactionId",
  "paidAt",
]);

type PurgeTargetRow = { id: string; metadata: unknown };

export function purgedMetadata(metadata: unknown): Record<string, unknown> {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return {};
  const kept: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(metadata as Record<string, unknown>)) {
    if (RETAINED_METADATA_KEYS.has(key)) kept[key] = value;
  }
  return kept;
}

// metadata가 행마다 달라 한 문장으로 묶을 수 없어 행 단위로 갱신한다. 도장 주문은 소량이고
// 크론이 시간별로 돌기 때문에 한 회차 최대 BATCH_SIZE건이면 충분하다.
async function purgeRows(supabase: SupabaseClient, rows: PurgeTargetRow[], now: string) {
  let purged = 0;
  for (const row of rows) {
    const { error } = await supabase
      .from("orders")
      .update({
        customer_name: null,
        customer_email: null,
        shipping_address: null,
        metadata: purgedMetadata(row.metadata),
        updated_at: now,
      })
      .eq("id", row.id);
    if (error) {
      console.error("Failed to purge goods order PII", row.id, error);
      continue;
    }
    purged += 1;
  }
  return purged;
}

export async function purgeGoodsOrderPii(supabase: SupabaseClient, now: string) {
  const abandonedCutoff = new Date(
    Date.parse(now) - ABANDONED_TTL_HOURS * 60 * 60 * 1000,
  ).toISOString();
  const settledCutoff = new Date(
    Date.parse(now) - SETTLED_TTL_DAYS * 24 * 60 * 60 * 1000,
  ).toISOString();

  // customer_name은 주문 시 필수 입력이라 항상 채워져 있다. 따라서 null이 아닌 것을 "아직 파기하지
  // 않음" 표시로 쓸 수 있어 별도 컬럼(마이그레이션) 없이 재처리를 피한다.
  const selectPending = () =>
    supabase
      .from("orders")
      .select("id,metadata")
      .eq("order_type", "STAMP_DELIVERY")
      .not("customer_name", "is", null)
      .limit(BATCH_SIZE);

  const [{ data: abandoned, error: abandonedError }, { data: settled, error: settledError }] =
    await Promise.all([
      selectPending().eq("payment_status", "UNPAID").lte("created_at", abandonedCutoff),
      // 배송 완료 시각을 따로 저장하지 않지만 updated_at은 완료 시각 이후에만 움직이므로
      // updated_at 기준은 항상 보수적이다(일찍 지우는 일은 없고, 늦게 지울 수는 있다).
      // 환불·취소(CANCELLED)된 유료 주문도 배송지가 남으므로 같은 기간을 적용한다.
      selectPending()
        .eq("payment_status", "PAID")
        .in("fulfillment_status", ["COMPLETED", "CANCELLED"])
        .lte("updated_at", settledCutoff),
    ]);

  if (abandonedError || settledError) {
    console.error("Failed to query goods orders for PII purge", abandonedError ?? settledError);
    return { abandonedPurged: 0, settledPurged: 0, failed: true };
  }

  const abandonedPurged = await purgeRows(supabase, (abandoned ?? []) as PurgeTargetRow[], now);
  const settledPurged = await purgeRows(supabase, (settled ?? []) as PurgeTargetRow[], now);
  return { abandonedPurged, settledPurged, failed: false };
}
