/**
 * **도장 화면의 「돌아가기」가 아는 출처만 받는가** — 그리고 모르는 값에 죽지 않는가.
 *
 * ## 왜 있는가 (2026-08-20 재검증)
 *
 * PR #3 재검증에서 뚫렸다. 출처 표를 객체 리터럴로 두고 `ORIGINS[from]` · `from in ORIGINS`
 * 로 물었더니 **프로토타입에서 물려받은 이름까지 「아는 출처」로 통과**했다.
 *
 *     /en/stamp-order?from=toString&rid=abcdef      → HTTP 500
 *     /en/stamp-order?from=constructor&rid=abcdef   → HTTP 500
 *     /en/stamp-order?from=__proto__&rid=abcdef     → HTTP 500
 *
 * 표를 `Map` 으로 바꿔 갈래 자체를 없앴는데, **고침은 강제돼야 한다.** 다음 사람이 표를 다시
 * 객체로 되돌리면 이 검사가 빨간불을 낸다.
 *
 * 판정은 종료 코드가 아니라 **출력 본문**으로 한다. 이 파일은 검사 수가 0건이면 실패한다 —
 * import 가 깨져 아무것도 안 돌았는데 초록불이 나오는 것이 이 저장소가 여러 번 겪은 자리다.
 *
 * 실행: apps/naminglink 에서
 *   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-stamp-back.ts
 */
import { stampBackTarget, stampOriginQuery } from "../src/lib/stamp-back";

const LABELS = { previous: "이전", home: "홈" };
const RID = "abcdef12-3456-7890-abcd-ef1234567890"; // 실제 조회 ID 는 uuid 다
const HOME = "/en";

let checks = 0;
let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  checks += 1;
  if (!ok) failures += 1;
  console.log(`  ${ok ? "✓" : "✗"} ${label}${ok || !detail ? "" : ` — ${detail}`}`);
};

/** 죽지 않아야 한다. **던지면 그것이 곧 500이다.** */
const target = (from: string | undefined, rid: string | undefined) => {
  try {
    return { ok: true as const, value: stampBackTarget("en", from, rid, LABELS) };
  } catch (error) {
    return { ok: false as const, why: error instanceof Error ? error.message : String(error) };
  }
};

console.log("도장 돌아가기 — 아는 출처만 받는가\n");

console.log("① 물려받은 이름을 출처로 쓸 수 없다 (재검증 P1)");
for (const from of ["toString", "constructor", "__proto__", "valueOf", "hasOwnProperty"]) {
  const got = target(from, RID);
  check(`from=${from} 에 죽지 않는다`, got.ok, got.ok ? "" : `던졌다: ${got.why}`);
  if (got.ok) {
    check(`from=${from} 은 홈으로 떨어진다`, got.value.href === HOME, `실제: ${got.value.href}`);
  }
  const query = stampOriginQuery(from, RID);
  check(`from=${from} 은 링크에 실리지 않는다`, query === undefined, `실제: ${String(query)}`);
}

console.log("\n② 아는 출처는 그대로 산다 (거짓 거부가 없다)");
{
  const got = target("transliteration", RID);
  check("transliteration + 정상 rid 는 결과 화면으로", got.ok && got.value.href.includes("/global-to-korean/result"), got.ok ? `실제: ${got.value.href}` : got.why);
  check("돌아갈 곳이 있으면 라벨이 「이전」이다", got.ok && got.value.label === LABELS.previous);
  check("조회 ID 가 주소에 실린다", got.ok && got.value.href.includes(`id=${RID}`), got.ok ? got.value.href : "");
  check("갈래 질의도 함께 실린다", got.ok && got.value.href.includes("mode=transliteration"));
  check("링크에 실을 출처가 만들어진다", stampOriginQuery("transliteration", RID) === `from=transliteration&rid=${RID}`);
}

console.log("\n③ 나머지 거절 갈래");
for (const [label, from, rid] of [
  ["모르는 출처", "somewhere", RID],
  ["외부 주소", "https://evil.example.com", RID],
  ["출처 없음", undefined, RID],
  ["조회 ID 없음", "transliteration", undefined],
  ["조회 ID 가 짧다", "transliteration", "abc"],
  ["조회 ID 에 이상한 글자", "transliteration", "abcdef/../../etc"],
] as const) {
  const got = target(from, rid);
  check(`${label} → 홈`, got.ok && got.value.href === HOME, got.ok ? `실제: ${got.value.href}` : `던졌다: ${got.why}`);
}

console.log("");
if (checks === 0) {
  console.log("검사 0건이다. 통과로 세지 않는다 — import 가 깨졌는지 볼 것.\n");
  process.exit(1);
}
if (failures > 0) {
  console.log(`${failures}건 실패 (검사 ${checks}건)\n`);
  process.exit(1);
}
console.log(`통과 — 검사 ${checks}건\n`);
process.exit(0);
