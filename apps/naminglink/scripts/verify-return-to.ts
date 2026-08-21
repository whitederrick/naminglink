// 돌아갈 주소 판정(`src/lib/return-to.ts`)이 **남의 사이트로 보내지 않는지** 본다.
//
// 왜 검사기까지 두나 (2026-08-21):
//
// 푸터에서 소개·문의·공지·이용 안내·로그인으로 갈 때 지금 주소를 `returnTo` 로 실어 보낸다.
// 돌아가기 단추는 그 값을 **그대로 링크로 삼는다.** 판정이 느슨해지는 날 그것은 곧
// **열린 리다이렉트**가 된다 — 우리 도메인 주소를 눌렀는데 남의 사이트로 나간다.
//
// 처음 구현은 `window.history.length > 1` 로 판정했다. 그것은 「우리 화면이 있다」가 아니라
// 「이 탭에 아무 이력이나 있다」라, 남의 사이트에서 주소를 직접 치고 들어온 사람을 그대로
// 남의 사이트로 되돌려 보냈다. 재검증에서 막혔고, 그래서 판정을 값으로 옮겼다.
// **값으로 옮겼으면 그 값을 검사해야 한다.**
//
// 실행: apps/naminglink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-return-to.ts
import { safeReturnTo, withReturnTo, RETURN_TO_PARAM } from "../src/lib/return-to";
import { pickOrigin } from "../src/lib/guide-back";

/** 역슬래시. **소스에 직접 적지 않는다** — 셸·히어독을 거치며 사라진 적이 있다. */
const BS = String.fromCharCode(92);

/** 받으면 안 되는 값. 하나라도 통과하면 열린 리다이렉트다. */
const MUST_BLOCK: Array<[string, string]> = [
  ["절대 주소", "https://evil.com"],
  ["프로토콜 없는 절대 주소", "//evil.com"],
  ["역슬래시 한 겹", `/${BS}evil.com`],
  ["역슬래시 두 겹", `/${BS}${BS}evil.com`],
  ["인코딩된 //", "/%2F%2Fevil.com"],
  ["인코딩만 된 //", "%2F%2Fevil.com"],
  ["javascript:", "javascript:alert(1)"],
  ["호스트만", "evil.com"],
  ["빈 값", ""],
  ["공백 섞임", "/a b"],
  ["줄바꿈 섞임", "/a\nb"],
  ["탭 섞임", "/a\tb"],
  ["너무 긴 값", `/${"x".repeat(600)}`],
];

/** 받아야 하는 값. **막는 쪽으로 틀린 것도 결함이다.** */
const MUST_ALLOW: string[] = [
  "/",
  "/evil.com", // 우리 경로 이름이 그럴 뿐이다. 내부 주소이므로 통과해야 한다
  "/ko/about",
  "/hanja-meaning",
  "/ko/guide?from=hanja-meaning",
  "/global-to-korean/result?id=abcdef&mode=transliteration",
  "/a?q=%3F",
  "/a#b",
  // **막는 쪽으로 틀린 것도 결함이다.** 아래 넷은 정상적인 우리 주소인데 거부되고 있었다.
  "/a%20b", // 인코딩된 공백. 경로에 띄어쓰기가 있으면 URL API 가 이렇게 만든다
  "/ko/guide?q=a%20b", // 쿼리 쪽 인코딩된 공백
  "/a%b", // 홀로 있는 %. 풀 수 없을 뿐 남의 사이트가 아니다
  // 예전에는 「깨진 퍼센트」로 **막는 칸**에 있었다. 그런데 이것은 /100% 와 같은 갈래다 —
  // 풀리지 않을 뿐 우리 경로이고, 남의 사이트가 될 길이 없다. 막는 쪽으로 틀린 것이었다.
  "/%zz",
  "/100%", // 끝에 붙은 %
];

let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  if (ok) console.log(`  ✓ ${label}`);
  else {
    failures += 1;
    console.log(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
  }
};

console.log("① 남의 사이트로 보내지 않는가");
for (const [label, value] of MUST_BLOCK) {
  const got = safeReturnTo(value);
  check(`막는다: ${label}`, got === null, `통과해 버렸다 → ${JSON.stringify(got)}`);
}

console.log("\n② 우리 주소는 그대로 통과하는가 (막는 쪽으로 틀려도 결함이다)");
for (const value of MUST_ALLOW) {
  const got = safeReturnTo(value);
  check(`통과: ${value}`, got === value, `막혔거나 값이 바뀌었다 → ${JSON.stringify(got)}`);
}

console.log("\n③ 주소에 붙이는 모양");
check(
  "조각(#) 앞에 붙인다 — 뒤에 붙이면 쿼리가 조각의 일부가 된다",
  withReturnTo("/ko/about#help", "/x") === "/ko/about?" + RETURN_TO_PARAM + "=%2Fx#help",
  withReturnTo("/ko/about#help", "/x"),
);
check(
  "쿼리와 조각이 다 있어도 조각 앞에 붙인다",
  withReturnTo("/ko/guide?from=a#top", "/x") ===
    "/ko/guide?from=a&" + RETURN_TO_PARAM + "=%2Fx#top",
  withReturnTo("/ko/guide?from=a#top", "/x"),
);
check(
  "쿼리가 없으면 ? 로 붙인다",
  withReturnTo("/ko/about", "/x") === `/ko/about?${RETURN_TO_PARAM}=%2Fx`,
  withReturnTo("/ko/about", "/x"),
);
check(
  "쿼리가 있으면 & 로 붙인다",
  withReturnTo("/ko/guide?from=a", "/x") === `/ko/guide?from=a&${RETURN_TO_PARAM}=%2Fx`,
  withReturnTo("/ko/guide?from=a", "/x"),
);
check(
  "실을 것이 없으면 그대로 둔다",
  withReturnTo("/ko/about", null) === "/ko/about",
  withReturnTo("/ko/about", null),
);
check(
  "값은 인코딩해서 붙인다 — 쿼리가 섞여도 한 칸에 들어간다",
  withReturnTo("/ko/about", "/r?id=1&m=2") === `/ko/about?${RETURN_TO_PARAM}=%2Fr%3Fid%3D1%26m%3D2`,
  withReturnTo("/ko/about", "/r?id=1&m=2"),
);

check(
  "목적지와 지금 화면이 같으면 안 붙인다 — 자기 자신을 가리키는 단추가 생긴다",
  withReturnTo("/ko/about", "/ko/about") === "/ko/about",
  withReturnTo("/ko/about", "/ko/about"),
);
check(
  "같은 화면인지는 조각(#)을 떼고 본다",
  withReturnTo("/ko/about", "/ko/about#top") === "/ko/about",
  withReturnTo("/ko/about", "/ko/about#top"),
);
check(
  "다른 화면이면 그대로 붙인다",
  withReturnTo("/ko/about", "/ko/guide") === "/ko/about?" + RETURN_TO_PARAM + "=%2Fko%2Fguide",
  withReturnTo("/ko/about", "/ko/guide"),
);

console.log("");
console.log("④ 출처 표에서 물려받은 이름이 통과하지 않는가");
const ORIGINS = { "hanja-meaning": { href: "/ko/guide?from=hanja-meaning", label: "안내로" } };
for (const key of ["toString", "constructor", "__proto__", "valueOf", "hasOwnProperty"]) {
  const got = pickOrigin(ORIGINS, key);
  check("물려받은 이름은 없는 것으로: " + key, got === null, "표에 없는데 무언가를 돌려줬다");
}
check(
  "표에 있는 이름은 그대로 돌려준다",
  pickOrigin(ORIGINS, "hanja-meaning") === ORIGINS["hanja-meaning"],
);
check("from 이 없으면 null", pickOrigin(ORIGINS, null) === null);

// **검사 0건은 실패로 처리한다.** 목록이 비면 이 검사기는 늘 통과한다.
const total = MUST_BLOCK.length + MUST_ALLOW.length;
if (total === 0) {
  console.log("\n검사한 것이 0건이다. 초록불을 낼 수 없다.");
  process.exit(1);
}

console.log(
  failures === 0
    ? `\n통과 — 막을 것 ${MUST_BLOCK.length}개 · 통과할 것 ${MUST_ALLOW.length}개 · 붙이기 9건 · 출처 표 7건\n`
    : `\n빨간불 ${failures}건 — 돌아갈 주소 판정이 새고 있다\n`,
);
process.exit(failures === 0 ? 0 : 1);
