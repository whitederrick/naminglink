// 도장 주문 배송 PII 파기(goods-pii-cleanup)의 실동작 검증.
// 실행: cd scripts && npx tsx --tsconfig tsconfig.sweep.json verify-goods-pii-cleanup.ts
//
// 공유 Supabase에 테스트 주문을 넣고 파기를 돌린 뒤 결과를 확인하고, 성공·실패와 무관하게
// 삽입한 행을 id로 전부 삭제한다(파기가 metadata 표시를 지우므로 표시 기반 삭제는 쓸 수 없다).
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";

import { purgeGoodsOrderPii } from "@/lib/goods-pii-cleanup";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
) as Record<string, string>;

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const hoursAgo = (hours: number) => new Date(Date.now() - hours * 3600_000).toISOString();
const daysAgo = (days: number) => hoursAgo(days * 24);

type Case = {
  label: string;
  shouldPurge: boolean;
  paymentStatus: string;
  fulfillmentStatus: string;
  createdAt: string;
  updatedAt: string;
};

const CASES: Case[] = [
  {
    label: "미결제 이탈(48시간 경과)",
    shouldPurge: true,
    paymentStatus: "UNPAID",
    fulfillmentStatus: "PENDING",
    createdAt: hoursAgo(48),
    updatedAt: hoursAgo(48),
  },
  {
    label: "미결제 신규(1시간)",
    shouldPurge: false,
    paymentStatus: "UNPAID",
    fulfillmentStatus: "PENDING",
    createdAt: hoursAgo(1),
    updatedAt: hoursAgo(1),
  },
  {
    label: "배송완료 100일 경과",
    shouldPurge: true,
    paymentStatus: "PAID",
    fulfillmentStatus: "COMPLETED",
    createdAt: daysAgo(110),
    updatedAt: daysAgo(100),
  },
  {
    label: "배송완료 10일 경과",
    shouldPurge: false,
    paymentStatus: "PAID",
    fulfillmentStatus: "COMPLETED",
    createdAt: daysAgo(20),
    updatedAt: daysAgo(10),
  },
  {
    label: "결제됐지만 배송 미완료(100일)",
    shouldPurge: false,
    paymentStatus: "PAID",
    fulfillmentStatus: "PENDING",
    createdAt: daysAgo(100),
    updatedAt: daysAgo(100),
  },
  {
    label: "환불·취소 100일 경과",
    shouldPurge: true,
    paymentStatus: "PAID",
    fulfillmentStatus: "CANCELLED",
    createdAt: daysAgo(110),
    updatedAt: daysAgo(100),
  },
];

const ids = CASES.map(() => randomUUID());

async function main() {
  const rows = CASES.map((testCase, index) => ({
    id: ids[index],
    order_type: "STAMP_DELIVERY",
    customer_name: "검증수령인",
    customer_email: "pii-verify@example.com",
    shipping_address: "서울특별시 검증구 검증로 1",
    payment_status: testCase.paymentStatus,
    payment_amount: 39000,
    payment_currency: "KRW",
    fulfillment_status: testCase.fulfillmentStatus,
    provider_payment_id: `nl_verify_${ids[index].replaceAll("-", "")}`,
    created_at: testCase.createdAt,
    updated_at: testCase.updatedAt,
    metadata: {
      provider: "PORTONE_V2",
      productCode: "STAMP_KRW",
      stampModel: "ROUND_WOOD",
      transactionId: "verify-tx",
      paidAt: testCase.createdAt,
      stampName: "홍길동",
      phone: "010-0000-0000",
      country: null,
      note: "검증용 요청사항",
    },
  }));

  const { error: insertError } = await supabase.from("orders").insert(rows);
  if (insertError) throw new Error(`테스트 주문 삽입 실패: ${insertError.message}`);

  const result = await purgeGoodsOrderPii(supabase, new Date().toISOString());
  console.log("파기 결과:", result);

  const { data: after, error: readError } = await supabase
    .from("orders")
    .select("id,customer_name,customer_email,shipping_address,metadata")
    .in("id", ids);
  if (readError) throw new Error(`검증 조회 실패: ${readError.message}`);

  const byId = new Map((after ?? []).map((row) => [String(row.id), row]));
  const failures: string[] = [];

  CASES.forEach((testCase, index) => {
    const row = byId.get(ids[index]);
    if (!row) {
      failures.push(`${testCase.label}: 행을 찾지 못함`);
      return;
    }
    const metadata = (row.metadata ?? {}) as Record<string, unknown>;
    const purged =
      row.customer_name === null &&
      row.customer_email === null &&
      row.shipping_address === null &&
      metadata.phone === undefined &&
      metadata.note === undefined &&
      metadata.stampName === undefined &&
      metadata.country === undefined;
    const intact =
      row.customer_name !== null &&
      row.shipping_address !== null &&
      metadata.phone !== undefined &&
      metadata.stampName !== undefined;

    if (testCase.shouldPurge && !purged) {
      failures.push(`${testCase.label}: 파기되어야 하는데 남음 (${JSON.stringify(row)})`);
      return;
    }
    if (!testCase.shouldPurge && !intact) {
      failures.push(`${testCase.label}: 보존되어야 하는데 지워짐 (${JSON.stringify(row)})`);
      return;
    }
    // 파기된 행은 거래기록이 그대로 남아 있어야 한다.
    if (testCase.shouldPurge) {
      const kept =
        metadata.productCode === "STAMP_KRW" &&
        metadata.stampModel === "ROUND_WOOD" &&
        metadata.transactionId === "verify-tx" &&
        metadata.paidAt !== undefined &&
        metadata.provider === "PORTONE_V2";
      if (!kept) {
        failures.push(`${testCase.label}: 거래기록이 함께 지워짐 (${JSON.stringify(metadata)})`);
        return;
      }
    }
    console.log(`  PASS  ${testCase.label} — ${testCase.shouldPurge ? "파기됨" : "보존됨"}`);
  });

  if (failures.length) {
    failures.forEach((failure) => console.error(`  FAIL  ${failure}`));
    throw new Error(`${failures.length}건 실패`);
  }
  console.log(`\n전체 ${CASES.length}건 통과.`);
}

void (async () => {
  let failed = false;
  try {
    await main();
  } catch (error) {
    failed = true;
    console.error(error instanceof Error ? error.message : error);
  } finally {
    const { error } = await supabase.from("orders").delete().in("id", ids);
    console.log(error ? `테스트 주문 삭제 실패: ${error.message}` : "테스트 주문 삭제 완료.");
  }
  process.exit(failed ? 1 : 0);
})();
