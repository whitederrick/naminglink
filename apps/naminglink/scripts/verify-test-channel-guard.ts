// TEST 채널 결제가 운영에서 막히는지 본다 — **두 앱을 함께** 확인한다.
//
// 포트원은 한 상점에 LIVE 채널과 TEST 채널이 함께 있을 수 있고, 채널 키는 브라우저에 노출된다.
// 그래서 "LIVE 채널인가"를 서버가 확인하지 않으면 누구든 실제 금액 없이 결제를 성사시켜
// 유료 상품을 받아 갈 수 있다. `PORTONE_ALLOW_TEST_CHANNEL`은 다크 런치 기간에만 그 검사를
// 한시로 끄려고 둔 값인데, 지우는 것을 잊으면 그대로 남는다.
//
// 그래서 운영에서는 **환경이** 막게 했다(`isTestChannelAllowed`). 여기서 확인하는 것은
// 그 판단이 실제로 어떤 환경 조합에서 어떻게 나오는가다. 두 앱은 검증 규칙이 갈리면 한쪽에만
// 구멍이 생기므로 같은 표로 함께 본다(`lib/portone.ts` 첫머리의 "한쪽만 고치지 말 것").
//
// 실행: apps/naminglink 에서
//   node_modules/.bin/tsx scripts/verify-test-channel-guard.ts

import { createRequire } from "node:module";

// 두 `portone.ts`는 `server-only`를 들여온다. 이 검사는 서버 모듈을 서버 밖에서 직접 부르는
// 것이 목적이므로 그 가드만 비운다 — 가드는 코드에 그대로 남아 클라이언트 임포트를 막는다.
const nodeRequire = createRequire(import.meta.url);
nodeRequire.cache[nodeRequire.resolve("server-only")] = {
  exports: {},
} as unknown as NodeModule;

let failures = 0;

function check(label: string, condition: boolean) {
  if (condition) {
    console.log(`  ✓ ${label}`);
    return;
  }
  failures += 1;
  console.error(`  ✗ ${label}`);
}

/** 실제로 일어날 수 있는 환경 조합과, 그때 TEST 채널을 허용해도 되는가. */
const CASES: Array<{
  label: string;
  env: Record<string, string | undefined>;
  allowed: boolean;
}> = [
  {
    label: "운영 배포 + 플래그가 켜진 채 남음 — **막아야 한다**",
    env: { VERCEL_ENV: "production", APP_ENV: "dev", PORTONE_ALLOW_TEST_CHANNEL: "true" },
    allowed: false,
  },
  {
    label: "운영 배포 + 플래그 없음",
    env: { VERCEL_ENV: "production" },
    allowed: false,
  },
  {
    label: "로컬 개발 + 플래그 켬 — 그대로 쓸 수 있어야 한다",
    env: { APP_ENV: "dev", PORTONE_ALLOW_TEST_CHANNEL: "true" },
    allowed: true,
  },
  {
    label: "로컬 개발이지만 플래그를 켜지 않음",
    env: { APP_ENV: "dev" },
    allowed: false,
  },
  {
    label: "Preview 배포 + APP_ENV=dev + 플래그 켬 — 배선 검증용으로 열려 있어야 한다",
    env: { VERCEL_ENV: "preview", APP_ENV: "dev", PORTONE_ALLOW_TEST_CHANNEL: "true" },
    allowed: true,
  },
  {
    label: "Preview 배포인데 APP_ENV를 안 넣음 — 기본값은 운영이므로 막힌다",
    env: { VERCEL_ENV: "preview", PORTONE_ALLOW_TEST_CHANNEL: "true" },
    allowed: false,
  },
  {
    label: "아무것도 없음 — 기본값은 운영",
    env: { PORTONE_ALLOW_TEST_CHANNEL: "true" },
    allowed: false,
  },
];

async function main() {
  const apps = [
    { name: "naminglink", module: await import("../src/lib/portone") },
    { name: "inyeonlink", module: await import("../../inyeonlink/src/lib/portone") },
  ];

  for (const app of apps) {
    console.log(`${app.name}`);
    for (const testCase of CASES) {
      const actual = app.module.isTestChannelAllowed(testCase.env);
      check(`${testCase.label} → ${testCase.allowed ? "허용" : "차단"}`, actual === testCase.allowed);
    }
    console.log("");
  }

  // 두 앱이 같은 답을 내는지. 갈리면 한쪽에만 구멍이 생긴다.
  const [first, second] = apps;
  check(
    "두 앱의 판단이 모든 조합에서 일치한다",
    CASES.every(
      (testCase) =>
        first.module.isTestChannelAllowed(testCase.env) ===
        second.module.isTestChannelAllowed(testCase.env),
    ),
  );

  console.log("");
  if (failures > 0) {
    console.error(`실패 ${failures}건`);
    process.exit(1);
  }
  console.log("모두 통과");
}

void main();
