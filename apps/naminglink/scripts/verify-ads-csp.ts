// 광고를 켰을 때와 껐을 때 실제로 나가는 보안 헤더를 확인한다.
//
// 애드센스를 붙이려면 CSP를 열어야 하는데, **열어 둔 채로 광고가 꺼지면 얻는 것 없이 보안만
// 약해진 상태**가 된다. 그래서 광고를 끄면 CSP에 광고와 무관한 출처만 남아야 한다.
//
// ## 문자열 비교를 쓰지 않는 이유
//
// 예전에는 기준선 CSP를 통째로 적어 두고 같은지 비교했다. 그 방식은 **결제 키나 Supabase
// 주소가 환경에 붙는 순간 거짓으로 실패한다** — 키가 없는 상태에서만 통과하는 검사라, 실제로
// 키를 등록하면 광고와 무관한 이유로 빨간불이 뜬다. 그러면 사람이 검사기를 무시하게 된다.
//
// 지금은 **부분집합**으로 센다: CSP의 모든 출처가 「광고와 무관한 이유로 열린 것」 목록 안에
// 있어야 한다. 목록은 설정 파일이 보는 **같은 모듈**에서 끌어오므로 손으로 관리하지 않는다.
// 판정 로직은 네 앱이 함께 쓴다(`@naminglink/core/csp-audit`) — 앱마다 다른 것은 목록뿐이다.
//
// 실행 (두 상태를 각각 확인한다):
//   npx tsx apps/naminglink/scripts/verify-ads-csp.ts
//   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456 npx tsx apps/naminglink/scripts/verify-ads-csp.ts
//
// ## 이 앱만 다른 점
//
// ⚠️ **형제 셋에는 이 검사가 있는데 이 앱에만 없었다**(2026-08-07에 만들었다). 그런데 광고가
// 실제로 나가는 것은 이 앱뿐이다 — 슬롯 아홉 자리가 라이브다. 검사가 가장 필요한 곳에 없었다.
// 없었던 이유도 위와 같다: 이 앱은 브라우저가 Supabase를 직접 부르므로(로그인·콘솔) 형제의
// 기준선 문자열을 그대로 쓸 수 없었다. 부분집합으로 바꾸면서 네 앱이 같은 검사를 쓴다.
//
// 옮기면서 하나 잡았다: **`img-src`에 `blob:`이 쓰는 곳 없이 열려 있었다.**

import {
  CSP_CONTROL_SAMPLE,
  FIXED_CSP_DIRECTIVES,
  cspControlHolds,
  cspDirective,
  foreignCspSources,
} from "@naminglink/core/csp-audit";

import config from "../next.config";

import { adsConfigured, adsLive } from "../src/lib/ads";
import { gamRewardedEnabled } from "../src/lib/gam-rewarded";
import {
  paymentCspSources,
  paymentsConfigured,
  supabaseCspOrigin,
  tossConfiguredForCsp,
  tossCspSources,
} from "../src/lib/payments-csp";

// 개발 모드는 React 개발 빌드 때문에 'unsafe-eval'과 웹소켓이 더 붙는다(광고와 무관).
const isDev = process.env.NODE_ENV !== "production";

/**
 * 광고와 **무관한** 이유로 열려 있어도 되는 출처. 여기 없는 값은 그것이 무엇이든 잡는다.
 */
const allowed = new Set<string>([
  "'self'",
  "'none'",
  "'unsafe-inline'",
  "data:",
  ...(isDev ? ["'unsafe-eval'", "ws:", "wss:"] : []),
]);
if (supabaseCspOrigin) allowed.add(supabaseCspOrigin);
if (paymentsConfigured)
  for (const list of Object.values(paymentCspSources)) for (const source of list) allowed.add(source);
if (tossConfiguredForCsp)
  for (const list of Object.values(tossCspSources)) for (const source of list) allowed.add(source);

const client = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "").trim();
// 보상형(GAM)도 구글이다. 애드센스만 보고 「광고 꺼짐」이라 부르면 gpt.js가 연 자리를 못 본다.
//
// **심사 모드와 사이트 연결은 다른 값이다** (2026-08-11). 심사 모드에서도 결과 화면 배너는
// 나가므로 애드센스 쪽 CSP는 열려 있는 것이 정상이고, 닫혀야 하는 것은 GAM 쪽이다.
const expectAds = adsConfigured || gamRewardedEnabled;

main();

async function main() {
  const rules = await config.headers!();
  const csp = rules[0].headers.find((header) => header.key === "Content-Security-Policy")!.value;

  console.log(`NEXT_PUBLIC_ADSENSE_CLIENT = ${client || "(미설정)"}`);
  console.log(
    `광고 체제 ${adsLive ? "운영(live)" : "심사(review)"} · 사이트 연결 ${adsConfigured ? "있음" : "없음"} · GAM 보상형 ${gamRewardedEnabled ? "켜짐" : "꺼짐"}`,
  );
  console.log(
    `광고와 무관하게 열린 것 — Supabase ${supabaseCspOrigin || "(없음)"} · 해외결제 ${paymentsConfigured ? "켜짐" : "꺼짐"} · 국내결제 ${tossConfiguredForCsp ? "켜짐" : "꺼짐"}\n`,
  );
  for (const directive of csp.split("; ")) console.log(`  ${directive}`);

  // 대조군을 **결과보다 먼저** 본다. 허용 목록이 넓어져 아무것도 안 잡는 상태면 아래 PASS는
  // 의미가 없다(광고 도메인 하나 + 정체 모를 출처 하나를 섞은 표본이 반드시 잡혀야 한다).
  if (!cspControlHolds(allowed)) {
    console.log(`\n  ✗ 대조군 실패 — 다음이 통과해 버린다: ${CSP_CONTROL_SAMPLE}`);
    console.log("     허용 목록이 너무 넓다. 이 결과를 믿지 말 것.");
    process.exit(1);
  }

  let failures = 0;
  function check(label: string, ok: boolean, detail = "") {
    if (!ok) failures += 1;
    console.log(`\n  ${ok ? "PASS" : "FAIL"}  ${label}${detail ? `\n        ${detail}` : ""}`);
  }

  for (const [name, value] of FIXED_CSP_DIRECTIVES) {
    const actual = cspDirective(csp, name);
    check(
      `${name}는 광고와 무관하게 ${value}`,
      actual === value,
      actual === value ? "" : `실제: ${actual ?? "(없음)"}`,
    );
  }

  if (expectAds) {
    if (adsConfigured) {
      check(
        "script-src에 애드센스 로더 도메인이 있다",
        csp.includes("https://pagead2.googlesyndication.com"),
      );
      check(
        "img-src가 임의 https 소재를 허용한다 (광고 소재는 도메인을 특정할 수 없다)",
        /img-src [^;]*https:/.test(csp),
      );
      check(
        "EEA 동의 메시지(구글 CMP) 도메인이 있다",
        csp.includes("https://fundingchoicesmessages.google.com"),
      );
    }
    check(
      "frame-src가 광고 프레임을 허용한다",
      csp.includes("frame-src 'self'") && csp.includes("https://googleads.g.doubleclick.net"),
    );
  } else {
    const foreign = foreignCspSources(csp, allowed);
    check(
      "광고가 꺼지면 광고와 무관한 출처만 남는다",
      foreign.length === 0,
      foreign.length === 0 ? "" : `설명되지 않은 출처:\n        ${foreign.join("\n        ")}`,
    );
    check("구글 도메인이 하나도 없다", !csp.includes("google"));
  }

  console.log(`\n  ✓ 대조군: 광고 도메인·정체 모를 출처를 잡는다`);
  console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
  process.exit(failures === 0 ? 0 : 1);
}
