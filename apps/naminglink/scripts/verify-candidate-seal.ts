// 후보 봉인 검사.
//
// 잠긴 후보는 서버 비밀키로 봉인해 내려보낸다(`src/lib/result-seal.ts`). 이 봉인이 조용히
// 헐거워지는 방식이 여럿이라 여기서 못 박는다:
//   - 봉인문에 후보 내용이 **평문으로 남아 있지 않은가** (직렬화 실수 한 번이면 다 새어 나간다)
//   - 무료분만 열려 있고 나머지는 전부 잠겨 있는가
//   - 만료·변조·다른 키로 만든 봉인문이 **열리지 않는가**
//   - 서로 다른 결과의 봉인문을 섞으면 거절하는가(주문 하나로 여러 결과를 여는 길)
//   - 키가 없으면 잠긴 후보를 **평문으로 떨어뜨리지 않는가** (가장 위험한 회귀)
//   - 정렬이 서버에서 끝나는가(화면에는 잠긴 후보의 적합도가 없다)
//
// 실행: apps/naminglink 에서
//   node_modules/.bin/tsx scripts/verify-candidate-seal.ts

import { createRequire } from "node:module";

import { isLockedCandidate, lockedSeals, withUnsealedCandidates } from "../src/lib/candidate-seal";

/**
 * `server-only`는 Next 밖에서 불러오면 던진다. 이 검사는 서버 모듈을 서버 밖에서 직접 부르는
 * 것이 목적이므로 그 가드만 비운다 — 가드는 실제 코드에 그대로 남아 클라이언트 임포트를 막는다.
 * 그래서 봉인 모듈은 이 줄 **뒤에** 동적으로 불러온다.
 */
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

function expectThrows(label: string, run: () => unknown) {
  try {
    run();
  } catch {
    console.log(`  ✓ ${label}`);
    return;
  }
  failures += 1;
  console.error(`  ✗ ${label} — 열려서는 안 되는데 열렸다`);
}

// 비밀 문자열: 봉인문 어디에도 이 값이 남으면 안 된다.
const SECRET_MARK = "SECRET-CANDIDATE-CONTENT-8f3a";

const sampleResult = () => ({
  analysis_summary: "요약",
  candidates: [
    { hanja: "民俊", matching_rate: 71, story: `${SECRET_MARK}-1` },
    { hanja: "旼峻", matching_rate: 95, story: `${SECRET_MARK}-2` },
    { hanja: "旻竣", matching_rate: 83, story: `${SECRET_MARK}-3` },
    { hanja: "敏峻", suitability_score: 88, story: `${SECRET_MARK}-4` },
  ],
});

// 키는 모듈 로드 시점이 아니라 호출 시점에 읽는다. 그래서 환경변수만 바꾸면 같은 모듈로
// 키 없음·다른 키 상황을 그대로 재현할 수 있다.
function setSealKey(secret: string | undefined) {
  if (secret === undefined) delete process.env.RESULT_SEAL_SECRET;
  else process.env.RESULT_SEAL_SECRET = secret;
}

const KEY_A = "test-seal-secret-aaaaaaaaaaaaaaaaaaaa";
const KEY_B = "test-seal-secret-bbbbbbbbbbbbbbbbbbbb";

async function main() {
  /**
   * **운영 모드를 기준으로 검사한다** (2026-08-11).
   *
   * 심사 모드(`NEXT_PUBLIC_AD_MODE`가 `live`가 아님)에서는 `sealCandidates`가 일부러 봉인하지
   * 않는다 — 관문이 없어 아무도 열 수 없는 잠금을 만들지 않기 위해서다. 그 상태로 이 검사를
   * 돌리면 「봉인이 헐거워졌다」가 아니라 **검사기가 다른 모드를 보고 있는 것**인데, 출력만
   * 보면 구분되지 않는다. 그래서 여기서 모드를 못 박는다.
   *
   * 값은 모듈이 읽히기 **전에** 정해져야 한다(`lib/ads.ts`가 로드 시점에 평가한다).
   */
  process.env.NEXT_PUBLIC_AD_MODE = "live";

  const seal = await import("../src/lib/result-seal");

  setSealKey(KEY_A);

  console.log("봉인 · 무료분과 잠긴 자리");
  const sealed = seal.sealCandidates(sampleResult()) as {
    candidates: Array<Record<string, unknown>>;
  };
  check("후보 수가 유지된다(자리는 남기고 내용만 봉인)", sealed.candidates.length === 4);
  check("무료 후보 1개만 열려 있다", !isLockedCandidate(sealed.candidates[0]));
  check(
    "나머지는 전부 잠겨 있다",
    sealed.candidates.slice(1).every((candidate) => isLockedCandidate(candidate)),
  );
  check("정렬은 서버가 끝낸다(적합도 내림차순)", sealed.candidates[0].matching_rate === 95);

  console.log("\n누출");
  // 정렬 뒤 1순위(적합도 95 = `-2`)가 무료분이다. 그것은 보여야 하고, 나머지 셋은 보이면 안 된다.
  const wire = JSON.stringify(sealed);
  const lockedMarks = [`${SECRET_MARK}-1`, `${SECRET_MARK}-3`, `${SECRET_MARK}-4`];
  check("무료 후보는 그대로 보인다", wire.includes(`${SECRET_MARK}-2`));
  check(
    "잠긴 후보의 내용은 평문으로 남지 않는다",
    lockedMarks.every((mark) => !wire.includes(mark)),
  );
  check(
    "잠긴 자리에 적합도가 남지 않는다",
    sealed.candidates.slice(1).every((candidate) => candidate.matching_rate === undefined),
  );
  check(
    "잠긴 자리에 봉인문 말고 다른 필드가 없다",
    sealed.candidates
      .slice(1)
      .every((candidate) => Object.keys(candidate).sort().join(",") === "__locked,seal"),
  );

  console.log("\n해제");
  const seals = lockedSeals(sealed);
  check("잠긴 봉인문 3개를 찾는다", seals.length === 3);
  const openedOne = seal.openSeal(seals[0].seal);
  check("자리 번호가 보존된다", openedOne.index === 1);
  check(
    "푼 내용이 원본과 같다",
    (openedOne.candidate as { story?: string }).story?.startsWith(SECRET_MARK) === true,
  );
  const merged = withUnsealedCandidates(sealed, [
    { index: openedOne.index, candidate: openedOne.candidate },
  ]) as { candidates: unknown[] };
  check("푼 후보가 제자리에 꽂힌다", !isLockedCandidate(merged.candidates[1]));
  check("나머지는 그대로 잠겨 있다", isLockedCandidate(merged.candidates[2]));

  console.log("\n거절해야 하는 것");
  expectThrows("변조된 봉인문", () => {
    const parts = seals[0].seal.split(".");
    // 암호문 한 글자만 바꾼다. GCM 인증이 잡아야 한다.
    const flipped = parts[4].startsWith("A") ? `B${parts[4].slice(1)}` : `A${parts[4].slice(1)}`;
    return seal.openSeal([parts[0], parts[1], parts[2], parts[3], flipped].join("."));
  });
  expectThrows("자리 번호를 바꾼 머리글", () => {
    const parts = seals[0].seal.split(".");
    const header = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
    const forged = Buffer.from(JSON.stringify({ ...header, i: 0 }), "utf8").toString("base64url");
    return seal.openSeal([parts[0], forged, parts[2], parts[3], parts[4]].join("."));
  });
  expectThrows("만료 시각을 늘린 머리글", () => {
    const parts = seals[0].seal.split(".");
    const header = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
    const forged = Buffer.from(
      JSON.stringify({ ...header, exp: header.exp + 86_400_000 }),
      "utf8",
    ).toString("base64url");
    return seal.openSeal([parts[0], forged, parts[2], parts[3], parts[4]].join("."));
  });
  expectThrows("형식이 다른 값", () => seal.openSeal("v1.aaa.bbb"));
  expectThrows("빈 값", () => seal.openSeal(""));

  console.log("\n다른 결과의 봉인문 섞기");
  const otherSeals = lockedSeals(seal.sealCandidates(sampleResult()));
  check(
    "같은 한 벌은 통과한다",
    seal.openSeals(seals.map((entry) => entry.seal)).opened.length === 3,
  );
  expectThrows("서로 다른 결과를 섞으면 거절", () =>
    seal.openSeals([seals[0].seal, otherSeals[0].seal]),
  );

  console.log("\n키가 다르거나 없을 때");
  setSealKey(KEY_B);
  expectThrows("다른 키로 만든 봉인문은 열리지 않는다", () => seal.openSeal(seals[0].seal));

  setSealKey(undefined);
  check("키가 없으면 봉인 설정이 꺼진 것으로 본다", seal.sealingConfigured() === false);
  const withoutKey = seal.sealCandidates(sampleResult()) as { candidates: unknown[] };
  const withoutKeyWire = JSON.stringify(withoutKey);
  check(
    "키가 없으면 잠긴 후보를 평문으로 떨어뜨리지 않는다",
    withoutKey.candidates.length === 1 && lockedMarks.every((mark) => !withoutKeyWire.includes(mark)),
  );
  expectThrows("키가 없으면 해제도 거절", () => seal.openSeal(seals[0].seal));

  console.log("\n짧은 키");
  setSealKey("too-short");
  check("짧은 키는 설정하다 만 것으로 본다", seal.sealingConfigured() === false);

  console.log("\n후보가 무료분뿐일 때");
  setSealKey(KEY_A);
  const onlyFree = seal.sealCandidates({
    candidates: [{ hanja: "民俊", matching_rate: 71 }],
  }) as { candidates: unknown[] };
  check("잠글 것이 없으면 그대로 둔다", !isLockedCandidate(onlyFree.candidates[0]));

  console.log("");
  if (failures > 0) {
    console.error(`실패 ${failures}건`);
    process.exit(1);
  }
  console.log("모두 통과");
}

void main();
