// 주문 하나가 결과 한 벌에만 묶이는지, **동시에 들어와도** 그러한지 실제 DB에 대고 확인한다.
// AUDIT_SIDE_EFFECTS: 운영 orders 표에 시험 주문을 넣고 지운다(is_test)
//
// 왜 이 검사가 있는가: 예전에는 주문 metadata를 읽어 "아직 결속 안 됨"을 확인한 뒤 나중에
// 썼다. 그 사이가 비어 있어서 동시에 들어온 요청 둘이 **둘 다 통과**했다 — 한 번 결제로
// 서로 다른 결과 두 벌이 열린다. 지금은 조건을 쓰기에 붙여 먼저 도착한 하나만 성공한다.
//
// **PostgREST의 JSON 경로 필터가 실제로 도는지가 핵심이다.** `metadata->>key=is.null`이
// 문법만 맞고 매칭이 안 되면, 첫 결제 해제가 통째로 막히면서도 코드는 멀쩡해 보인다.
//
// 실행: apps/naminglink 에서  node scripts/verify-order-binding.mjs
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

for (const line of readFileSync(new URL("../.env.local", import.meta.url), "utf8").split(/\r?\n/)) {
  const index = line.indexOf("=");
  if (index < 0) continue;
  const key = line.slice(0, index).trim();
  const value = line.slice(index + 1).trim().replace(/^"|"$/g, "");
  if (key && !(key in process.env)) process.env[key] = value;
}

// **이 스크립트는 운영 DB에 붙어 주문 행을 넣었다 지운다** — 개발과 운영이 같은 Supabase
// 프로젝트를 본다. `is_test: true`로 넣고 끝에 지우지만, 중간에 실패하면 행이 남는다.
// 기본값이 "운영"이라 APP_ENV=dev를 명시하지 않으면 아무것도 하지 않는다
// (`seed-sample-orders.mjs`와 같은 판정. .mjs라 `@naminglink/core/env`를 가져올 수 없다).
//
// 가드가 아예 없었다. 규칙 스윕이 두 앱만 훑고 있어 이 위반이 드러나지 않았다(2026-08-06).
const appEnv = process.env.APP_ENV;
if (process.env.VERCEL_ENV === "production" || (appEnv !== "dev" && appEnv !== "development")) {
  console.error(
    "주문 결속 검사는 개발 환경에서만 실행할 수 있습니다. .env.local에 APP_ENV=dev를 넣으세요.",
  );
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

let failures = 0;
const check = (label, ok, note = "") => {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${note ? ` — ${note}` : ""}`);
  if (!ok) failures += 1;
};

/** 조건부 결속 — 라우트가 하는 것과 같은 호출. 성공하면 행이 하나 돌아온다. */
async function bind(orderId, column, value, metadata) {
  const { data, error } = await supabase
    .from("orders")
    .update({ metadata: { ...metadata, [column]: value }, updated_at: new Date().toISOString() })
    .eq("id", orderId)
    .is(`metadata->>${column}`, null)
    .select("id");
  if (error) throw error;
  return Boolean(data?.length);
}

async function run(column) {
  console.log(`\n== ${column}`);
  const { data: created, error: insertError } = await supabase
    .from("orders")
    .insert({
      service: "naminglink",
      order_type: "CANDIDATE_UNLOCK",
      payment_status: "PAID",
      payment_amount: 990,
      payment_currency: "KRW",
      is_test: true,
      metadata: { verifyOrderBinding: true },
    })
    .select("id,metadata")
    .single();
  if (insertError) throw insertError;

  const id = created.id;
  const metadata = created.metadata ?? {};
  try {
    check("결속 전에는 값이 비어 있다", metadata[column] === undefined);

    const first = await bind(id, column, "AAA", metadata);
    check("첫 결속은 성공한다", first, "조건 필터가 실제로 매칭된다");

    const second = await bind(id, column, "BBB", metadata);
    check("두 번째 결속은 실패한다", !second, "먼저 도착한 하나만 성공");

    const { data: after } = await supabase
      .from("orders")
      .select("metadata")
      .eq("id", id)
      .maybeSingle();
    check("값이 첫 결속으로 남아 있다", after?.metadata?.[column] === "AAA", String(after?.metadata?.[column]));

    // 동시성: 서로 다른 값 다섯을 한꺼번에 던진다. 하나만 성공해야 한다.
    const { data: fresh } = await supabase
      .from("orders")
      .insert({
        service: "naminglink",
        order_type: "CANDIDATE_UNLOCK",
        payment_status: "PAID",
        payment_amount: 990,
        payment_currency: "KRW",
        is_test: true,
        metadata: { verifyOrderBinding: true },
      })
      .select("id,metadata")
      .single();
    const results = await Promise.all(
      ["S1", "S2", "S3", "S4", "S5"].map((value) => bind(fresh.id, column, value, fresh.metadata ?? {})),
    );
    const won = results.filter(Boolean).length;
    check("동시에 다섯이 들어와도 하나만 성공한다", won === 1, `성공 ${won}건`);
    await supabase.from("orders").delete().eq("id", fresh.id);
  } finally {
    await supabase.from("orders").delete().eq("id", id);
  }
}

console.log("주문 결속 검사 — 한 결제로 여러 벌을 열 수 없는가");
await run("unsealSid");
await run("inputFingerprint");

console.log(failures === 0 ? "\n전부 통과" : `\n실패 ${failures}건`);
process.exit(failures === 0 ? 0 : 1);
