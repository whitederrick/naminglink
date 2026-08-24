/**
 * **오퍼월 판정이 양쪽으로 안 틀리는가.**
 *
 * ## 왜 이 검사가 필요한가 (2026-08-19)
 *
 * 예전 판정은 `window.googlefc`가 정의되는가 하나였다. **그것은 「오퍼월이 뜬다」는 뜻이
 * 아니다** — 구글 메시징 스크립트가 실렸다는 뜻일 뿐이다. 그래서 운영에서 양쪽으로 틀렸다.
 *
 *     스크립트가 빨리 오면   안 띄우는데도 비켜 줬다     → 광고 0개
 *     스크립트가 늦게 오면   띄우는데도 셀프를 먼저 냈다 → 광고 2개
 *
 * 지금은 「화면을 덮는 요소가 있는가」를 **관측**한다. 그런데 그 판정에 함정이 있었다 —
 * **배경 탭에서는 `innerWidth`가 0**이라 「화면의 절반 이상」이 0 이상이 되고, 0×0 요소까지
 * 전부 통과한다. 실측에서 Next의 `<next-route-announcer>`가 그렇게 잡혔다. 그 상태로 나가면
 * 오퍼월이 없는 방문마다 비켜 주고 **광고가 하나도 안 나간다.**
 *
 * ## 무엇을 보는가
 *
 *   ① 잴 수 없는 화면(배경 탭 등)에서는 무엇도 「덮는다」가 아니다
 *   ② 0×0 요소는 어떤 화면에서도 「덮는다」가 아니다
 *   ③ 화면을 실제로 덮는 상자는 「덮는다」다
 *   ④ 절반에 못 미치는 상자는 아니다
 *   ⑤ 비율은 넘지만 절대 크기가 작은 상자(아주 작은 창)도 아니다
 *
 * 실행: apps/naminglink 에서
 *   npx tsx scripts/verify-offerwall-detection.ts
 */

import {
  coversViewport,
  decideSelfGate,
  shouldKeepWatching,
  type GateDecision,
} from "../src/lib/offerwall";

type Case = {
  label: string;
  box: { width: number; height: number };
  view: [number, number];
  expect: boolean;
};

const CASES: Case[] = [
  {
    label: "배경 탭 — 화면이 0×0이면 무엇도 덮지 못한다",
    box: { width: 0, height: 0 },
    view: [0, 0],
    expect: false,
  },
  {
    label: "배경 탭 — 큰 상자라도 화면을 못 재면 판정하지 않는다",
    box: { width: 1200, height: 800 },
    view: [0, 0],
    expect: false,
  },
  {
    label: "0×0 요소(next-route-announcer)는 덮지 않는다",
    box: { width: 0, height: 0 },
    view: [1280, 800],
    expect: false,
  },
  {
    label: "오퍼월 — 화면 전체를 덮는다",
    box: { width: 1280, height: 800 },
    view: [1280, 800],
    expect: true,
  },
  {
    label: "오퍼월 — 절반을 넘으면 덮는 것으로 본다",
    box: { width: 700, height: 500 },
    view: [1280, 800],
    expect: true,
  },
  {
    label: "배너 — 절반에 못 미치면 아니다",
    box: { width: 300, height: 250 },
    view: [1280, 800],
    expect: false,
  },
  {
    label: "아주 작은 창 — 비율은 넘어도 절대 크기가 작으면 아니다",
    box: { width: 150, height: 150 },
    view: [250, 250],
    expect: false,
  },
  {
    label: "휴대폰 세로 — 화면을 덮는 오퍼월",
    box: { width: 412, height: 900 },
    view: [412, 915],
    expect: true,
  },
];

console.log("오퍼월 판정 — 화면을 덮는가\n");

const failures: string[] = [];
for (const c of CASES) {
  const got = coversViewport(c.box, c.view[0], c.view[1]);
  const ok = got === c.expect;
  console.log(
    `  ${ok ? "✓" : "✗"} ${c.label}\n` +
      `      상자 ${c.box.width}×${c.box.height} · 화면 ${c.view[0]}×${c.view[1]} → ${got} (기대 ${c.expect})`,
  );
  if (!ok) failures.push(c.label);
}

/**
 * **대조군.** 판정이 살아 있는가 — 무조건 참이나 무조건 거짓이면 위 표가 통째로 무의미하다.
 */
const anyTrue = CASES.some((c) => coversViewport(c.box, c.view[0], c.view[1]));
const anyFalse = CASES.some((c) => !coversViewport(c.box, c.view[0], c.view[1]));
if (!anyTrue || !anyFalse) {
  console.error(`\n✗ 대조군 실패 — 참 ${anyTrue} · 거짓 ${anyFalse}. 판정이 한쪽으로 굳었다.`);
  process.exit(1);
}
console.log("\n  ✓ 대조군: 참과 거짓이 모두 나온다");

/**
 * **관문 판정 — 우리 카드와 오퍼월이 겹치지 않는가.**
 *
 * 2026-08-24 운영 관측이 이 표의 출처다. `googlefcInactive` 마커를 보고 우리 카드를
 * 그린 **2~3초 뒤에 오퍼월이 떴다.** 예전 판정은 마커를 보는 순간 끝내 버려서
 * (인터벌을 껐다) 그 뒤에 뜬 오퍼월을 받을 방법이 없었다.
 *
 * 그래서 여기서 재는 것은 「덮는가」가 아니라 **「언제 무엇을 하기로 하는가」**다.
 */
type GateCase = {
  label: string;
  probe: Parameters<typeof decideSelfGate>[0];
  expect: GateDecision;
};

const GATE_CASES: GateCase[] = [
  {
    label: "오퍼월이 떴다 — 언제든 비켜 준다",
    probe: { offerwallVisible: true, fcInactive: false, elapsedMs: 300, inactiveSeenAtMs: null },
    expect: "yield",
  },
  {
    label: "오퍼월이 늦게 떴다(자체 관문이 이미 돌던 시각) — 그래도 비켜 준다",
    probe: { offerwallVisible: true, fcInactive: true, elapsedMs: 6000, inactiveSeenAtMs: 1000 },
    expect: "yield",
  },
  {
    /**
     * 마커를 보면 **곧바로** 그린다. 8초를 다 안 기다리는 것이 마커의 값이다.
     * 2026-08-24 에 여기에 3.5초 유예를 넣었다가 걷었다 — 오퍼월이 안 뜨는 방문
     * (빈도 제한 탓에 이쪽이 흔하다)마다 빈 화면이 3~5초 보였다.
     */
    label: "마커를 봤다 — 곧바로 그린다",
    probe: { offerwallVisible: false, fcInactive: true, elapsedMs: 1000, inactiveSeenAtMs: 1000 },
    expect: "self",
  },
  {
    label: "아무 신호도 없다 — 상한 전에는 기다린다",
    probe: { offerwallVisible: false, fcInactive: false, elapsedMs: 5000, inactiveSeenAtMs: null },
    expect: "wait",
  },
  {
    label: "아무 신호도 없이 상한을 넘겼다 — 우리 관문이 돈다",
    probe: { offerwallVisible: false, fcInactive: false, elapsedMs: 8000, inactiveSeenAtMs: null },
    expect: "self",
  },
];

console.log("\n관문 판정 — 우리 카드와 오퍼월이 겹치지 않는가\n");
for (const c of GATE_CASES) {
  const got = decideSelfGate(c.probe);
  const ok = got === c.expect;
  console.log(`  ${ok ? "✓" : "✗"} ${c.label}  → ${got} (기대 ${c.expect})`);
  if (!ok) failures.push(c.label);
}

// 대조군 — 세 갈래가 전부 나오는가. 하나로 굳으면 위 표가 통째로 무의미하다.
{
  const seen = new Set(GATE_CASES.map((c) => decideSelfGate(c.probe)));
  if (seen.size < 3) {
    console.error(`\n✗ 대조군 실패 — 갈래가 ${seen.size}종뿐이다(${[...seen].join(", ")}). 판정이 굳었다.`);
    process.exit(1);
  }
  console.log("\n  ✓ 대조군: yield · self · wait 세 갈래가 모두 나온다");
}

/**
 * **판정 뒤에도 계속 보는가 — 원래 결함의 자리.**
 *
 * 예전 코드는 마커를 본 순간 인터벌을 껐다. 그래서 뒤늦게 오퍼월이 떠도 받을 방법이
 * 없었고, 자체 광고 위로 오퍼월이 얹혀 우리 카운트다운이 그 뒤에 남았다.
 * 「마커를 보면 즉시 그린다」는 되돌려도 되지만, **이것을 되돌리면 그 결함이 되살아난다.**
 */
console.log("\n판정 뒤에도 지켜보는가 — 늦게 뜬 오퍼월을 받을 수 있는가\n");
for (const c of [
  { label: "판정 직후에도 계속 본다", elapsedMs: 1100, expect: true },
  { label: "실측 시점(마커 1초 · 오퍼월 3~4초)에 아직 보고 있다", elapsedMs: 4000, expect: true },
  { label: "상한을 넘으면 그만 본다", elapsedMs: 20000, expect: false },
]) {
  const got = shouldKeepWatching(c.elapsedMs);
  const ok = got === c.expect;
  console.log(`  ${ok ? "✓" : "✗"} ${c.label}  → ${got} (기대 ${c.expect})`);
  if (!ok) failures.push(c.label);
}
if (failures.length) {
  console.log(`\n어긋난 자리 ${failures.length}건:`);
  for (const line of failures) console.log(`    ✗ ${line}`);
  process.exit(1);
}

console.log(`\nALL PASS — ${CASES.length}가지 모두 기대대로 판정한다.`);
process.exit(0);
