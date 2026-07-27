// 광고를 켰을 때와 껐을 때 실제로 나가는 보안 헤더를 확인한다.
//
// 이 검증이 필요한 이유: 애드센스를 붙이려면 CSP를 열어야 하는데, 열어 둔 채로 광고가 꺼지면
// 얻는 것 없이 보안만 약해진 상태가 된다. 그래서 **퍼블리셔 ID가 없으면 CSP가 광고 이전과
// 한 글자도 다르지 않아야 한다.**
//
// 실행 (두 상태를 각각 확인한다):
//   apps/naminglink/node_modules/.bin/tsx apps/inyeonlink/scripts/verify-ads-csp.ts
//   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456 apps/naminglink/node_modules/.bin/tsx apps/inyeonlink/scripts/verify-ads-csp.ts

import config from "../next.config";

// 개발 모드는 React 개발 빌드 때문에 'unsafe-eval'과 웹소켓이 더 붙는다(광고와 무관).
// 기준선도 같은 조건으로 만들어 두 축이 섞이지 않게 한다.
const isDev = process.env.NODE_ENV !== "production";

const BASELINE_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const client = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "").trim();
const expectAds = /^ca-pub-\d{10,}$/.test(client);

main();

async function main() {
const rules = await config.headers!();
const csp = rules[0].headers.find(
  (header) => header.key === "Content-Security-Policy",
)!.value;

console.log(`NEXT_PUBLIC_ADSENSE_CLIENT = ${client || "(미설정)"}`);
console.log(`광고 ${expectAds ? "켜짐" : "꺼짐"}\n`);
for (const directive of csp.split("; ")) console.log(`  ${directive}`);

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  if (!ok) failures += 1;
  console.log(`\n  ${ok ? "PASS" : "FAIL"}  ${label}${detail ? `\n        ${detail}` : ""}`);
}

if (expectAds) {
  check(
    "script-src에 애드센스 로더 도메인이 있다",
    csp.includes("https://pagead2.googlesyndication.com"),
  );
  check(
    "frame-src가 광고 프레임을 허용한다",
    csp.includes("frame-src 'self'") &&
      csp.includes("https://googleads.g.doubleclick.net"),
  );
  check(
    "img-src가 임의 https 소재를 허용한다 (광고 소재는 도메인을 특정할 수 없다)",
    /img-src [^;]*https:/.test(csp),
  );
  check(
    "EEA 동의 메시지(구글 CMP) 도메인이 있다",
    csp.includes("https://fundingchoicesmessages.google.com"),
  );
  check("frame-ancestors는 여전히 none (남이 우리를 감싸는 것은 계속 금지)", csp.includes("frame-ancestors 'none'"));
} else {
  check(
    "광고가 꺼지면 CSP가 광고 이전과 완전히 동일하다",
    csp === BASELINE_CSP,
    csp === BASELINE_CSP ? "" : `기대:\n        ${BASELINE_CSP}\n        실제:\n        ${csp}`,
  );
  check("구글 도메인이 하나도 없다", !csp.includes("google"));
}

console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
process.exit(failures === 0 ? 0 : 1);
}
