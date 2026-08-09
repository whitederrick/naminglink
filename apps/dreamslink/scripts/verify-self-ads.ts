// 셀프 광고 명단이 화면에 내보내도 되는 상태인지 본다.
//
// **손으로 맞출 수 없는 자리다.** 명단은 코어에 있고, 문구는 23개 사전에 있고, 로고는 앱의
// `public/`에 있다. 셋이 따로 놀면 화면에서만 드러난다 — 로고가 빠진 칸, 번역이 빠진 이름,
// 그리고 가장 나쁜 것으로 **눌리지도 않는 링크**.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-self-ads.ts

import { existsSync } from "node:fs";
import { join } from "node:path";

import {
  pickSelfAds,
  SELF_AD_SERVICES,
  selfAdsExcluding,
  type SelfAdKey,
} from "@naminglink/core/self-ads";

import { getDictionary, supportedLocales } from "../src/lib/i18n";

/** 이 앱이 자기 자신으로 세는 키. 복제 앱은 여기와 `SelfAdCard`를 함께 바꾼다. */
const SELF: SelfAdKey = "dreamslink";
const LOGO_DIR = join(process.cwd(), "public", "images", "self-ads");

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

console.log("셀프 광고 명단 검사\n");

console.log("== 자기 자신은 광고하지 않는다");
const candidates = selfAdsExcluding(SELF);
check(
  `명단에서 \`${SELF}\`가 빠진다`,
  candidates.every((service) => service.key !== SELF),
  `${candidates.length}개 남음`,
);
// 대조군 — 빼기 전에는 실제로 들어 있어야 한다. 아니면 위 검사는 늘 통과한다.
check(
  "대조군 — 전체 명단에는 자기 자신이 있다",
  SELF_AD_SERVICES.some((service) => service.key === SELF),
);
check("보여 줄 후보가 남는다", candidates.length >= 2, `${candidates.length}개`);

console.log("\n== 죽은 주소를 링크로 걸지 않는다");
// `live`는 "도메인을 샀다"가 아니라 "지금 열린다"는 뜻이다. 여기서 확인하는 것은 그 값이
// 코드 한 곳에만 있다는 것이고, 실제로 열리는지는 사람이 한 번 열어 보고 켠다.
for (const service of SELF_AD_SERVICES) {
  check(
    `${service.key} — ${service.domain} ${service.live ? "링크" : "글자"}`,
    typeof service.live === "boolean",
  );
}
check(
  "적어도 하나는 살아 있다(전부 죽으면 카드가 무의미하다)",
  candidates.some((service) => service.live),
);

console.log("\n== 로고 사본이 실제로 있다");
// **화면에 그리는 것만 요구한다.** 자기 자신은 그리지 않으므로(`selfAdsExcluding`) 그 사본은
// 있어도 쓰이지 않는다. 드림링크가 자기 로고가 없다는 이유로 빨간불이었는데 화면에는 아무
// 문제가 없었다 — 검사기가 없는 결함을 만들어 낸 것이다.
for (const service of candidates) {
  if (!service.logo) {
    // 없다고 적어 둔 것은 결함이 아니다 — 자리표시로 그린다. 다만 파일이 생겼는데 여기가
    // 거짓으로 남아 있으면 로고를 두고도 글자를 그리게 되므로 그것도 잡는다.
    check(
      `${service.key} — 로고 없음으로 적혀 있고 파일도 없다`,
      !existsSync(join(LOGO_DIR, `${service.key}.png`)),
      "파일이 생겼으면 `logo: true`로 바꿀 것",
    );
    continue;
  }
  check(
    `${service.key}.png`,
    existsSync(join(LOGO_DIR, `${service.key}.png`)),
    `${LOGO_DIR}`,
  );
}

console.log("\n== 23로케일 문구");
// 사전 타입이 `Record<SelfAdKey, …>`라 키가 빠지면 컴파일에서 걸린다. 여기서 보는 것은
// **빈 문자열**이다 — 타입은 통과하지만 화면에는 아무것도 안 나온다.
let emptyStrings = 0;
for (const locale of supportedLocales) {
  const copy = getDictionary(locale).selfAds;
  const blanks: string[] = [];
  if (!copy.label.trim()) blanks.push("label");
  if (!copy.comingSoon.trim()) blanks.push("comingSoon");
  for (const service of SELF_AD_SERVICES) {
    if (!copy.purposes[service.key]?.trim()) blanks.push(`purposes.${service.key}`);
  }
  if (blanks.length) {
    emptyStrings += blanks.length;
    check(locale, false, blanks.join(", "));
  }
}
check(`빈 문구 없음 (${supportedLocales.length}개 로케일)`, emptyStrings === 0);

// **한국어가 남의 언어에 섞이지 않았는가.** 처음 돌렸을 때 태국어 소개가 "อ่านจาก 사주 และราศี"로
// 나왔다 — 번역기가 사주 용어를 옮기지 못하고 원문 낱말을 그대로 두었다. 로케일 하나를 눈으로
// 봐서는 안 걸리는 종류다.
const hangul = /[가-힣]/;
let leaked = 0;
for (const locale of supportedLocales) {
  if (locale === "ko") continue;
  const copy = getDictionary(locale).selfAds;
  const texts = [copy.label, copy.comingSoon, ...Object.values(copy.purposes)];
  const found = texts.filter((text) => hangul.test(text));
  if (found.length) {
    leaked += found.length;
    check(locale, false, found.join(" / "));
  }
}
check("한국어가 섞여 있지 않다", leaked === 0);
// 대조군 — 검사가 한글을 실제로 알아보는지. `ko`는 위에서 건너뛰므로 여기서 확인한다.
check(
  "대조군 — ko에서는 한글이 잡힌다",
  hangul.test(getDictionary("ko").selfAds.label),
);

console.log("\n== 골고루 돌아가는가");
// 자리는 둘인데 후보는 넷이다. 섞지 않으면 뒤의 둘은 아무에게도 보이지 않는다.
// 난수를 밖에서 받는 함수라 값을 정해 놓고 셀 수 있다.
const seen = new Set<SelfAdKey>();
let seed = 1;
const pseudoRandom = () => {
  // 선형 합동. 검사용이라 품질이 아니라 **재현성**이 목적이다.
  seed = (seed * 1103515245 + 12345) % 2147483648;
  return seed / 2147483648;
};
for (let round = 0; round < 200; round += 1) {
  for (const service of pickSelfAds(selfAdsExcluding(SELF), 2, pseudoRandom)) {
    seen.add(service.key);
  }
}
check(
  "후보가 모두 한 번씩은 나온다",
  seen.size === candidates.length,
  `${seen.size}/${candidates.length}`,
);
// 대조군 — 섞지 않으면 앞의 둘만 나온다는 것을 확인한다. 이게 없으면 위 검사가 무엇을
// 증명하는지 알 수 없다.
const unshuffled = new Set(
  selfAdsExcluding(SELF)
    .slice(0, 2)
    .map((service) => service.key),
);
check(
  "대조군 — 섞지 않으면 앞의 둘뿐이다",
  unshuffled.size < candidates.length,
  `${unshuffled.size}/${candidates.length}`,
);

console.log(failures === 0 ? "\n모두 통과" : `\n실패 ${failures}건`);
process.exit(failures === 0 ? 0 : 1);
