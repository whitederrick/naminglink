// **테스트 키로 결제가 완성되지 않는가** — 네 앱을 함께 확인한다.
//
// ## 왜 필요한가 (2026-08-19)
//
// 토스페이먼츠 계약심사는 「결제 가능한 실제 판매 상품」과 「결제창 연동」을 함께 요구한다.
// 그래서 심사 기간에는 **테스트 키를 운영에 넣는다** — 그래야 금액이 뜨고 결제창이 열린다.
//
// 그런데 토스 경로에는 포트원의 `isTestChannelAllowed` 같은 장치가 **없었다.** 테스트 키가
// 운영에 있는 동안에는 누구든 결제창을 통과해 **돈 없이 유료 상품을 받아 갈 수 있다** —
// 서버가 승인 API를 부르면 그것으로 결제가 완성되기 때문이다.
//
// ## 왜 참/거짓이 아니라 시각인가
//
// 포트원 쪽 주석이 그 방식의 약점을 적어 두고 있다 — 「한시로 끄려고 둔 값인데 **지우는 것을
// 잊으면 그대로 남는다**」. 그래서 이 관문은 끝나는 **시각**을 받는다. 사람이 지우지 않아도
// 그 시각이 지나면 저절로 닫힌다. 이 검사기가 확인하는 것이 바로 그 성질이다.
//
// 네 앱은 같은 사업자·같은 계약이라 규칙이 갈리면 한쪽에만 구멍이 생긴다. 같은 표로 함께 본다.
//
// 실행: apps/naminglink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-toss-test-key-guard.ts

import { createRequire } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import { APP_KEYS } from "@naminglink/core/apps";

// 네 `toss.ts`는 `server-only`를 들여온다. 이 검사는 서버 모듈을 서버 밖에서 부르는 것이
// 목적이므로 그 가드만 비운다 — 가드는 코드에 그대로 남아 클라이언트 임포트를 막는다.
const nodeRequire = createRequire(import.meta.url);
nodeRequire.cache[nodeRequire.resolve("server-only")] = {
  exports: {},
} as unknown as NodeModule;

/**
 * **앱 목록을 손으로 적지 않는다.** 빠진 앱은 통과가 아니라 **검사받지 않은 것**인데 화면에는
 * ALL PASS가 찍힌다 — `scripts/app-keys.mjs` 첫머리가 그 병을 여덟 곳에서 겪은 기록을 갖고
 * 있다. 실제로 이 파일이 처음엔 목록을 적고 있었고 `verify-app-coverage`가 잡았다.
 */
const APPS = APP_KEYS;
const ROOT = path.resolve(process.cwd(), "..", "..");

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

const LIVE = "live_sk_abcdefghijklmnop";
const TEST = "test_sk_abcdefghijklmnop";
const NOW = Date.parse("2026-08-19T12:00:00Z");

/** 실제로 있을 수 있는 조합과, 그때 승인을 허용해도 되는가. */
const CASES: Array<{ label: string; env: Record<string, string | undefined>; allowed: boolean }> = [
  { label: "라이브 키 — 관문이 없는 것과 같다", env: { TOSS_SECRET_KEY: LIVE }, allowed: true },
  {
    label: "라이브 키 + 허용 시각이 지나도 영향 없다",
    env: { TOSS_SECRET_KEY: LIVE, TOSS_ALLOW_TEST_KEY_UNTIL: "2026-08-01T00:00:00Z" },
    allowed: true,
  },
  { label: "테스트 키 · 허용 시각 없음 → 막힌다", env: { TOSS_SECRET_KEY: TEST }, allowed: false },
  {
    label: "테스트 키 · 허용 시각이 아직 남았다 → 통과",
    env: { TOSS_SECRET_KEY: TEST, TOSS_ALLOW_TEST_KEY_UNTIL: "2026-08-21T00:00:00Z" },
    allowed: true,
  },
  {
    label: "테스트 키 · 허용 시각이 지났다 → **저절로 닫힌다**",
    env: { TOSS_SECRET_KEY: TEST, TOSS_ALLOW_TEST_KEY_UNTIL: "2026-08-18T00:00:00Z" },
    allowed: false,
  },
  {
    label: "테스트 키 · 시각이 아니라 true 를 적었다 → 막힌다",
    env: { TOSS_SECRET_KEY: TEST, TOSS_ALLOW_TEST_KEY_UNTIL: "true" },
    allowed: false,
  },
  { label: "키가 아예 없다 → 막지 않는다(결제 자체가 안 열린다)", env: {}, allowed: true },
];

async function main() {
  console.log("토스 테스트 키 관문 — 돈 없이 상품이 나가지 않는가\n");

  for (const app of APPS) {
    console.log(`[${app}]`);
    const modulePath = path.join(ROOT, "apps", app, "src", "lib", "toss.ts");
    if (!existsSync(modulePath)) {
      check("toss.ts 가 있다", false, modulePath);
      continue;
    }
    const { tossPaymentAllowed } = (await import(
      `file://${modulePath.split(path.sep).join("/")}`
    )) as { tossPaymentAllowed: (env: Record<string, string | undefined>, now?: number) => boolean };

    for (const testCase of CASES) {
      check(testCase.label, tossPaymentAllowed(testCase.env, NOW) === testCase.allowed);
    }

    /**
     * **판정을 부르지 않으면 관문이 없는 것과 같다.** 함수만 만들어 두고 배선을 잊는 것이
     * 이 저장소가 되풀이한 실패다(「빠지는 건 파일이 아니라 배선」). 승인 라우트가 실제로
     * 이 함수를 부르는지 센다.
     */
    const route = path.join(
      ROOT, "apps", app, "src", "app", "api", "payments", "toss", "confirm", "route.ts",
    );
    const source = existsSync(route) ? readFileSync(route, "utf8") : "";
    check("승인 라우트가 관문을 부른다", source.includes("tossPaymentAllowed()"));
    check(
      "승인 API를 부르기 **전에** 막는다",
      source.indexOf("tossPaymentAllowed()") > 0 &&
        source.indexOf("tossPaymentAllowed()") < source.indexOf("confirmTossPayment({"),
    );
    console.log("");
  }

  console.log(failures === 0 ? "ALL PASS — 테스트 키로는 결제가 완성되지 않는다." : `FAIL ${failures}건`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
