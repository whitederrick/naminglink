// 셀프 광고 명단이 화면에 내보내도 되는 상태인지 본다.
//
// **손으로 맞출 수 없는 자리다.** 명단은 코어에 있고, 문구는 23개 사전에 있고, 로고는 앱의
// `public/`에 있다. 셋이 따로 놀면 화면에서만 드러난다 — 로고가 빠진 칸, 번역이 빠진 이름,
// 그리고 가장 나쁜 것으로 **눌리지도 않는 링크**.
//
// 실행: apps/naminglink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-self-ads.ts

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import {
  pickSelfAds,
  SELF_AD_SERVICES,
  selfAdsExcluding,
  type SelfAdKey,
} from "@naminglink/core/self-ads";


/** 이 앱이 자기 자신으로 세는 키. 복제 앱은 여기와 `SelfAdCard`를 함께 바꾼다. */
const SELF: SelfAdKey = "naminglink";
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

/**
 * **이 앱은 문구가 사전이 아니라 컴포넌트에 있다.**
 *
 * 셀프 광고가 뜨는 세 자리(`NamingForm`·`CandidateUnlockPanel`·`HangulPronunciationResultPage`)가
 * 한국어 흐름이 중심이라 한국어로만 쓴다(사용자 방침). 23개 언어를 쓰는 형제 앱은 각자
 * 사전에서 같은 자리를 채우므로 검사도 보는 곳이 다르다 — **구조는 같고 문구의 출처만 다르다.**
 *
 * 그래서 여기서는 `SelfAdCard.tsx`의 표를 읽어 **보여 줄 서비스마다 소개가 있는지**만 본다.
 * 빠지면 화면에 이름만 뜨고 그 아래가 빈다.
 */
console.log("\n== 소개 문구");
const cardSource = readFileSync(
  join(process.cwd(), "src", "components", "SelfAdCard.tsx"),
  "utf8",
);
for (const service of candidates) {
  // **detail을 비워 둔다.** 이 검사기는 통과에도 detail을 찍으므로, 여기에 실패 사유를 적으면
  // 「✓ placelink 소개 — 표에 없다」가 되어 정반대로 읽힌다. 자리는 `SelfAdCard`의 `PURPOSE`다.
  check(
    `${service.key} 소개 (SelfAdCard의 PURPOSE)`,
    new RegExp(String.raw`\b${service.key}:\s*"[^"]+"`).test(cardSource),
  );
}

/**
 * 대조군 — 소개 문구 검사가 살아 있는가.
 *
 * 있는 키는 찾고 **없는 키는 못 찾아야** 한다. 정규식이 망가져 늘 참을 내면 문구가 통째로
 * 빠져도 「모두 통과」가 찍힌다.
 */
check(
  "대조군 — 있는 소개는 찾고 없는 것은 못 찾는다",
  new RegExp(String.raw`\binyeonlink:\s*"[^"]+"`).test(cardSource) &&
    !new RegExp(String.raw`\bnosuchservice:\s*"[^"]+"`).test(cardSource),
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
