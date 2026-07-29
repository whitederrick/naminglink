// ko 약관 4종을 번역 스크립트가 읽을 JSON 스냅샷으로 뽑는다.
//
// **보간을 플레이스홀더로 바꿔 뽑는다.** 사업자 정보와 가격을 실제 값 대신 `{email}`·
// `{priceDomestic}` 같은 표시로 넣어 호출하면, 돌려받는 문서가 그대로 번역 가능한 순수
// 데이터가 된다. 번역기는 이 표시를 건드리지 않으면 되고, 검증기는 표시 집합이 유지됐는지만
// 보면 된다(naminglink 결제 고지에서 쓴 방법과 같다).
//
// **광고·결제 플래그 두 상태를 모두 뽑는다.** 약관 문구는 `adsEnabled`·`paymentsConfigured`에
// 따라 갈리는데, 지금(둘 다 꺼짐)만 번역해 두면 오픈해서 켜는 순간 그 문단만 한국어·영어로
// 되돌아간다. 두 상태를 다 담아 두면 플래그를 켜도 번역이 따라온다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/extract-ko-legal.ts
import { writeFileSync } from "node:fs";
import path from "node:path";

const PLACEHOLDER_COMPANY = {
  companyName: "{companyName}",
  representative: "{representative}",
  businessNumber: "{businessNumber}",
  mailOrderNumber: "{mailOrderNumber}",
  address: "{address}",
  customerCenter: "{customerCenter}",
  email: "{email}",
  privacyOfficer: "{privacyOfficer}",
  hostingProvider: "{hostingProvider}",
} as const;

const PLACEHOLDER_PRICES = {
  domestic: "{priceDomestic}",
  global: "{priceGlobal}",
} as const;

const KEYS = ["privacy", "terms", "refund", "pricing"] as const;

async function snapshot(flags: { ads: boolean; payments: boolean }) {
  // 플래그는 모듈이 임포트되는 시점에 읽히므로, 환경변수를 먼저 세우고 캐시를 비운 뒤 부른다.
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT = flags.ads ? "ca-pub-0000000000000000" : "";
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT = flags.ads ? "1111111111" : "";
  process.env.NEXT_PUBLIC_PORTONE_STORE_ID = flags.payments ? "store-snapshot" : "";
  process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL = flags.payments ? "channel-snapshot" : "";

  const modules = ["@/lib/ads", "@/lib/payments-csp", "@/lib/legal-content"];
  for (const id of modules) {
    delete require.cache[require.resolve(id)];
  }
  const { getLegalDocument } = require("@/lib/legal-content") as typeof import("@/lib/legal-content");

  const documents: Record<string, unknown> = {};
  for (const key of KEYS) {
    documents[key] = getLegalDocument(
      "ko",
      key,
      PLACEHOLDER_COMPANY as never,
      PLACEHOLDER_PRICES,
    );
  }
  return documents;
}

async function main() {
  // **네 조합을 모두 뽑는다.** 광고와 결제는 서로 독립적으로 켜진다(광고만 먼저 켤 수도 있다).
  // 둘을 묶어 두 상태만 담으면 한쪽만 켠 순간 다른 쪽 문단이 사실과 어긋난다.
  // 같은 내용은 번역 단계에서 해시로 합치므로 조합이 늘어도 번역량은 거의 그대로다.
  const out = {
    a0p0: await snapshot({ ads: false, payments: false }),
    a1p0: await snapshot({ ads: true, payments: false }),
    a0p1: await snapshot({ ads: false, payments: true }),
    a1p1: await snapshot({ ads: true, payments: true }),
  };
  const target = path.join(process.cwd(), "src", "lib", "legal-locales", "_ko-docs.json");
  writeFileSync(target, JSON.stringify(out, null, 2), "utf8");
  console.log(`written: ${target}`);
  const unique = new Set<string>();
  for (const state of ["a0p0", "a1p0", "a0p1", "a1p1"] as const) {
    for (const key of KEYS) {
      unique.add(JSON.stringify(out[state][key]));
    }
  }
  console.log(`  조합 4 × 문서 4 = 16, 내용이 서로 다른 것 ${unique.size}개(번역 대상)`);
}

void main();
