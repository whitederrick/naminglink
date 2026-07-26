// 대시보드 확인용 샘플 데이터 삽입 스크립트.
// - 주문 18건(결제 완료·처리 미완료, 실물 상품만): '주문·결제 현황' 표·페이징 확인용
//   (프리미엄 PDF는 리포트 READY 시 자동 완료되므로 미처리 목록에는 실물 상품만 남는다)
// - 국가별 페이지뷰(JP·DE·SG): '국가별 접속 상위 5' 채우기용
// 실행: node scripts/seed-sample-orders.mjs   (이미 있으면 건너뜀)
// 삭제: node scripts/seed-sample-orders.mjs --cleanup
// 모두 metadata.sample=true 로 표시하므로 실제 데이터와 섞이지 않는다.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

if (process.argv.includes("--cleanup")) {
  const { error: orderError, count: orderCount } = await supabase
    .from("orders")
    .delete({ count: "exact" })
    .eq("metadata->>sample", "true");
  if (orderError) {
    console.error("주문 샘플 삭제 실패:", orderError.message);
    process.exit(1);
  }
  const { error: eventError, count: eventCount } = await supabase
    .from("site_events")
    .delete({ count: "exact" })
    .eq("metadata->>sample", "true");
  if (eventError) {
    console.error("접속 샘플 삭제 실패:", eventError.message);
    process.exit(1);
  }
  console.log(`샘플 삭제 완료: 주문 ${orderCount}건, 접속 이벤트 ${eventCount}건`);
  process.exit(0);
}

const base = new Date("2026-07-22T12:00:00+09:00").getTime();

const { count: existingOrders } = await supabase
  .from("orders")
  .select("id", { count: "exact", head: true })
  .eq("metadata->>sample", "true");
if (existingOrders) {
  console.log(`주문 샘플 ${existingOrders}건이 이미 있어 건너뜁니다.`);
} else {
  const types = ["CALLIGRAPHY_IMAGE", "STAMP_DELIVERY"];
  const statuses = ["PENDING", "PENDING", "PROCESSING", "SHIPPED"];
  const amounts = [19000, 29000];
  const rows = Array.from({ length: 18 }, (_, i) => ({
    order_type: types[i % 2],
    customer_name: `샘플고객${String(i + 1).padStart(2, "0")}`,
    customer_email: `sample${String(i + 1).padStart(2, "0")}@example.com`,
    payment_status: "PAID",
    payment_amount: amounts[i % 2],
    fulfillment_status: statuses[i % 4],
    provider_payment_id: `SAMPLE-${String(i + 1).padStart(3, "0")}`,
    metadata: { sample: true },
    created_at: new Date(base - (20 - i) * 86400000 - (i % 5) * 3600000).toISOString(),
  }));
  const { error } = await supabase.from("orders").insert(rows);
  if (error) {
    console.error("주문 샘플 삽입 실패:", error.message);
    process.exit(1);
  }
  console.log("주문 샘플 18건 삽입 완료.");
}

const { count: existingEvents } = await supabase
  .from("site_events")
  .select("id", { count: "exact", head: true })
  .eq("metadata->>sample", "true");
if (existingEvents) {
  console.log(`접속 샘플 ${existingEvents}건이 이미 있어 건너뜁니다.`);
} else {
  const countries = [
    ["JP", 14],
    ["DE", 9],
    ["SG", 6],
  ];
  const events = countries.flatMap(([code, visits]) =>
    Array.from({ length: visits }, (_, i) => ({
      event_type: "PAGE_VIEW",
      path: "/",
      locale: "en",
      country_code: code,
      visitor_hash: `sample-${code}-${i % 4}`,
      metadata: { sample: true },
      created_at: new Date(base - (i % 10) * 86400000 - i * 3600000).toISOString(),
    })),
  );
  const { error } = await supabase.from("site_events").insert(events);
  if (error) {
    console.error("접속 샘플 삽입 실패:", error.message);
    process.exit(1);
  }
  console.log(`접속 샘플 ${events.length}건 삽입 완료 (JP 14·DE 9·SG 6).`);
}
