// **광고 체제(심사/운영)가 실제로 갈리는가.**
//
// ## 왜 필요한가 (2026-08-11)
//
// 애드센스 정책 위반 판정을 받고 나서 「심사 모드」를 넣었다. 심사 모드에서는 **광고 관문**
// (오퍼월 · GAM 보상형 · 셀프 광고 대기)과 그 문구가 통째로 쉬고, 후보 봉인도 하지 않는다.
// 결과 화면 배너와 사이트 연결(ads.txt · 소유권 메타)은 **그대로 살아 있어야 한다** — 코드를
// 다 걷어내면 애드센스가 「코드를 찾을 수 없음」으로 보고 심사가 진행되지 않는다.
//
// 이 조건들은 **환경변수 하나(`NEXT_PUBLIC_AD_MODE`)로 갈리는 값**이라, 화면을 눈으로 봐서는
// 어느 쪽이 무엇 때문에 그런지 알 수 없다. 그리고 승인 뒤 `live`로 되돌릴 때 **되돌아오는지**를
// 확인할 방법도 필요하다 — 「관문을 껐다」만 세는 검사기는 켜지지 않는 회귀를 못 잡는다.
//
// 그래서 **두 모드를 각각 자식 프로세스로 돌려 양쪽 기대값을 함께 센다.** 한쪽만 세면 그것은
// 대조군 없는 검사다.
//
// 모듈은 로드 시점에 환경변수를 읽으므로(`src/lib/ads.ts`) 한 프로세스에서 두 모드를 볼 수
// 없다. 자기 자신을 모드별로 한 번씩 다시 부른다.
//
// 실행: apps/naminglink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-ad-mode.ts

import { spawnSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/** 검사용 값. 실제 계정과 무관하고, **형식이 맞아야** 각 모듈이 켜진다. */
const TEST_ENV = {
  NEXT_PUBLIC_ADSENSE_CLIENT: "ca-pub-1234567890123456",
  NEXT_PUBLIC_GAM_REWARDED_UNIT: "/123456/test-rewarded",
  NEXT_PUBLIC_OFFERWALL_ENABLED: "true",
  RESULT_SEAL_SECRET: "verify-ad-mode-secret-0123456789",
};

type Facts = {
  adsLive: boolean;
  adGatesEnabled: boolean;
  adsConfigured: boolean;
  gamRewardedEnabled: boolean;
  offerwallEnabled: boolean;
  publisherId: string;
  eligible: string[];
  adsAllowedKo: boolean;
  adsAllowedEn: boolean;
  adsAllowedKk: boolean;
  lockedCount: number;
  /** 전역 레이아웃이 로더를 싣는가. **실어서는 안 된다**(자동 광고 자리가 생긴다). */
  layoutLoadsAdScript: boolean;
};

/** 자식으로 돌 때. 지금 프로세스의 모드에서 사실을 모아 JSON 한 줄로 낸다. */
async function collect(): Promise<Facts> {
  const ads = await import("../src/lib/ads");
  const gam = await import("../src/lib/gam-rewarded");
  const offerwall = await import("../src/lib/offerwall");
  const seal = await import("../src/lib/result-seal");
  const { localeCodes } = await import("../src/lib/locale-codes");

  // 후보 넷 중 무료분 하나. 운영 모드라면 셋이 잠겨야 한다.
  const sealed = seal.sealCandidates({
    candidates: [
      { hanja: "民俊", matching_rate: 71 },
      { hanja: "旼峻", matching_rate: 95 },
      { hanja: "旻竣", matching_rate: 83 },
      { hanja: "敏峻", matching_rate: 88 },
    ],
  }) as { candidates: Array<Record<string, unknown>> };

  return {
    adsLive: ads.adsLive,
    adGatesEnabled: ads.adGatesEnabled,
    adsConfigured: ads.adsConfigured,
    gamRewardedEnabled: gam.gamRewardedEnabled,
    offerwallEnabled: offerwall.offerwallEnabled,
    publisherId: ads.adsensePublisherId,
    eligible: ads.adEligibleLocales(localeCodes),
    adsAllowedKo: ads.adsAllowedForLocale("ko"),
    adsAllowedEn: ads.adsAllowedForLocale("en"),
    adsAllowedKk: ads.adsAllowedForLocale("kk"),
    lockedCount: sealed.candidates.filter(
      (candidate) => (candidate as { __locked?: boolean }).__locked === true,
    ).length,
    /**
     * **소스를 읽어서 센다.** 로더를 전역 레이아웃에 되돌리는 것이 이 작업에서 가장 되돌아가기
     * 쉬운 회귀다 — 되돌리면 로그인·요금·빈 결과 화면이 다시 광고 화면이 되는데, 화면만 봐서는
     * 티가 나지 않는다(자동 광고는 no-fill이면 높이 0으로 남는다).
     */
    layoutLoadsAdScript: rootLayoutSources().some((source) =>
      /adsbygoogle\.js/.test(source.replace(/\/\*[\s\S]*?\*\/|^\s*\/\/.*$/gm, " ")),
    ),
  };
}

/**
 * **루트 레이아웃을 손으로 적지 않는다** (2026-08-18).
 *
 * 정적화를 하며 루트 레이아웃이 둘이 됐다 — 로케일 갈래와 한국어 갈래가 각자 `<html>`을
 * 그린다. 예전 이 검사기는 `src/app/layout.tsx` 한 자리를 읽었는데, 그 파일이 없어지면
 * `readFileSync`가 던져 검사기가 죽거나(고치면서 try로 감싸면) **조용히 통과**한다.
 * 「목록에서 빠진 것은 통과가 아니라 검사받지 않은 것」의 같은 자리다.
 *
 * 그래서 `src/app` 아래의 모든 `layout.tsx`를 찾아 **하나라도** 로더를 부르면 잡는다.
 * 레이아웃이 셋이 되어도 이 검사기는 그대로 맞는다.
 */
function rootLayoutSources(): string[] {
  const root = fileURLToPath(new URL("../src/app", import.meta.url));
  const found: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === "layout.tsx") found.push(readFileSync(full, "utf8"));
    }
  };
  walk(root);
  if (found.length === 0) {
    throw new Error("루트 레이아웃을 한 장도 찾지 못했다 — 이 검사기의 결과를 믿지 말 것");
  }
  return found;
}

function runChild(mode: "review" | "live"): Facts {
  const result = spawnSync(
    "npx",
    ["tsx", "--tsconfig", "scripts/tsconfig.sweep.json", "scripts/verify-ad-mode.ts"],
    {
      cwd: process.cwd(),
      shell: true,
      encoding: "utf8",
      env: {
        ...process.env,
        ...TEST_ENV,
        // review 는 **값을 비워** 확인한다. 기본값이 심사 모드라는 것도 함께 세는 셈이다.
        NEXT_PUBLIC_AD_MODE: mode === "live" ? "live" : "",
        AD_MODE_CHILD: "1",
      },
    },
  );
  const line = (result.stdout ?? "").split(/\r?\n/).find((row) => row.startsWith("{"));
  if (!line) {
    console.error(`  ✗ ${mode} 모드를 확인하지 못했다.`);
    console.error(result.stdout ?? "");
    console.error(result.stderr ?? "");
    process.exit(1);
  }
  return JSON.parse(line) as Facts;
}

// tsx가 이 스크립트를 CJS로 바꾸므로 최상위 await를 쓸 수 없다. main()으로 감싼다
// (`verify-legal-prices.ts`와 같은 이유).
void main();

async function main() {
  if (process.env.AD_MODE_CHILD === "1") {
    console.log(JSON.stringify(await collect()));
    return;
  }

    let failures = 0;
    const check = (label: string, ok: boolean, detail = "") => {
      console.log(`  ${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
      if (!ok) failures += 1;
    };

    console.log("광고 체제 검사 — 심사 모드와 운영 모드를 각각 돌린다\n");

    const review = runChild("review");
    const live = runChild("live");

    console.log("== 심사 모드 (NEXT_PUBLIC_AD_MODE 비움)");
    check("기본값이 심사 모드다", review.adsLive === false);
    check("광고 관문이 꺼진다", review.adGatesEnabled === false);
    check("GAM 보상형이 꺼진다 (광고 단위가 있어도)", review.gamRewardedEnabled === false);
    check("오퍼월이 꺼진다 (게시 표시가 있어도)", review.offerwallEnabled === false);
    check("후보를 봉인하지 않는다", review.lockedCount === 0, `잠긴 후보 ${review.lockedCount}개`);

    console.log("\n== 심사 모드에서도 살아 있어야 하는 것");
    // 여기가 이 검사기의 핵심이다. 「광고를 껐다」와 「사이트 연결을 끊었다」는 전혀 다른 일이고,
    // 뒤엣것은 심사를 멈춘다. 코드에서 한 줄만 잘못 바꿔도 조용히 그 상태가 된다.
    check("사이트 연결(퍼블리셔 ID)이 남는다", review.adsConfigured === true);
    check("ads.txt에 쓸 퍼블리셔 ID가 남는다", review.publisherId.startsWith("pub-"));

    console.log("\n== 로더는 광고 자리에서만 (전역 금지)");
    // 전역 로더는 자동 광고 자리를 스스로 만든다. 광고 단위를 두지 않은 화면까지 광고 화면이
    // 되므로, 「로더가 레이아웃에 없다」를 못 박아 둔다.
    check("전역 레이아웃이 로더를 싣지 않는다", review.layoutLoadsAdScript === false);
    check("운영 모드에서도 싣지 않는다", live.layoutLoadsAdScript === false);

    console.log("\n== 광고를 실어도 되는 로케일 (지원 ∩ 사람 검수)");
    check("검수한 로케일(ko)에는 허용된다", review.adsAllowedKo === true);
    check("검수하지 않은 지원 언어(en)에는 허용되지 않는다", review.adsAllowedEn === false);
    check("미지원 언어(kk)에는 허용되지 않는다", review.adsAllowedKk === false);
    check(
      "적격 목록이 검수 기록과 같다 (지금은 ko 하나)",
      review.eligible.join(",") === "ko",
      review.eligible.join(",") || "(비어 있음)",
    );

    console.log("\n== 운영 모드 (NEXT_PUBLIC_AD_MODE=live) — 되돌아오는가");
    check("광고 관문이 켜진다", live.adGatesEnabled === true);
    check("GAM 보상형이 켜진다", live.gamRewardedEnabled === true);
    check("오퍼월이 켜진다", live.offerwallEnabled === true);
    check("후보 셋이 잠긴다 (무료 1개)", live.lockedCount === 3, `잠긴 후보 ${live.lockedCount}개`);

    console.log("\n== 두 모드에서 같아야 하는 것");
    check(
      "적격 로케일 목록이 모드에 따라 달라지지 않는다",
      review.eligible.join(",") === live.eligible.join(","),
      `${review.eligible.length}개`,
    );
    check("미지원 언어 판정은 모드와 무관하다", live.adsAllowedKk === false);
    check("미검수 언어 판정도 모드와 무관하다", live.adsAllowedEn === false);

    console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
    process.exit(failures === 0 ? 0 : 1);
  }
