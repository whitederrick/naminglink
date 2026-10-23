/**
 * 안내 「예시로 읽는 사주」(`/guide/examples`)의 글이 말하는 관계가 엔진 출력과 맞는지 대조한다.
 *
 * 글이 「일간의 오행과 가장 강한 오행이 다르다」·「水가 사실상 없다」·「셋이 모두 같다」고 **문장으로**
 * 말한다. 날짜를 바꾸거나 엔진 규칙이 바뀌면 그 문장이 조용히 거짓이 된다 — 값(자리표시자)은
 * 따라가지만 관계(문장)는 따라가지 않는다(CLAUDE.md §26, 안내 문서의 사실 문장).
 *
 * 둘째로, 문서가 쓰는 자리표시자를 **모든 로케일에서 채울 수 있는지** 센다. 못 채우면 `DocBody` 가
 * 그 문단을 통째로 빼므로 예시가 말없이 짧아진다.
 *
 * 셋째로, 예시가 **유료 몫을 새게 하지 않는지** 본다 — 값을 낼 때 쓴 읽기 객체의 키가 무료 허용
 * 목록(`publicReading`)을 넘지 않아야 한다.
 *
 * 실행: cd apps/sajulink && NODE_OPTIONS=--conditions=react-server \
 *   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-example-readings.ts
 */
import { getDocPage } from "@/lib/doc-content";
import {
  EXAMPLE_KEYS,
  elementPercents,
  exampleReading,
  exampleValues,
  type ExampleKey,
} from "@/lib/example-readings";
import { translatedLocales } from "@/lib/i18n";
import { PAID_ONLY_READING_FIELDS, type PublicPersonReading } from "@/lib/public-outcome";

type Readings = Record<ExampleKey, PublicPersonReading>;

/** 글이 말하는 관계. 하나라도 어긋나면 이유를 모아 돌려준다. */
function checkClaims(r: Readings): string[] {
  const bad: string[] = [];
  const need = (ok: boolean, why: string) => {
    if (!ok) bad.push(why);
  };

  const a = r.A;
  need(a.dayMaster.element === "WOOD", "A: 일간 오행이 木 이 아니다");
  need(a.strongestElement === "METAL", "A: 가장 강한 오행이 金 이 아니다");
  need(a.dayMaster.element !== a.strongestElement, "A: 일간 오행과 가장 강한 오행이 같다(글은 다르다고 한다)");
  need(a.seasonElement === a.strongestElement, "A: 계절 기운이 가장 강한 기운과 다르다(글은 같다고 한다)");
  need(a.pillars.day.hanja === "乙亥", `A: 일주가 乙亥 가 아니다(${a.pillars.day.hanja})`);

  const b = r.B;
  const bPct = elementPercents(b);
  need(b.dayMaster.element === "EARTH", "B: 일간 오행이 土 가 아니다");
  need(
    new Set([b.dayMaster.element, b.strongestElement, b.seasonElement]).size === 3,
    "B: 일간·가장 강한 기운·계절 기운이 모두 다르지 않다(글은 모두 다르다고 한다)",
  );
  need(b.scarcestElement === "WATER" && bPct.WATER === 0, `B: 水가 0% 가 아니다(${bPct.WATER}%)`);
  need(b.pillars.day.hanja === "己酉", `B: 일주가 己酉 가 아니다(${b.pillars.day.hanja})`);
  need(b.pillars.year.hanja.endsWith("酉"), "B: 연지가 酉 가 아니다");

  const c = r.C;
  need(
    c.dayMaster.element === c.strongestElement && c.strongestElement === c.seasonElement,
    "C: 일간 오행·가장 강한 기운·계절 기운이 모두 같지 않다(글은 모두 같다고 한다)",
  );
  need(c.pillars.day.hanja === "丁亥", `C: 일주가 丁亥 가 아니다(${c.pillars.day.hanja})`);

  return bad;
}

let failures = 0;
const fail = (message: string) => {
  failures += 1;
  console.log(`  ✗ ${message}`);
};

// ── ① 글이 말하는 관계 ───────────────────────────────────────────────────────
console.log("① 글이 말하는 관계가 엔진 출력과 맞는가");
const real = Object.fromEntries(EXAMPLE_KEYS.map((k) => [k, exampleReading(k)])) as Readings;
const realBad = checkClaims(real);
realBad.forEach(fail);
if (realBad.length === 0) console.log("  ✓ 세 예시의 관계가 글과 같다");

// 대조군: 예시를 서로 바꿔 끼우면 반드시 빨간불이어야 한다. 아니면 이 검사는 아무것도 못 재는 것이다.
const swapped: Readings = { A: real.B, B: real.C, C: real.A };
const swappedBad = checkClaims(swapped);
if (swappedBad.length === 0) fail("대조군: 예시를 바꿔 끼웠는데 통과했다 — 이 검사는 아무것도 재지 못한다");
else console.log(`  ✓ 대조군: 예시를 바꿔 끼우면 ${swappedBad.length}건이 걸린다`);

// ── ② 자리표시자를 모든 로케일에서 채울 수 있는가 ────────────────────────────
console.log("② 문서의 자리표시자를 모든 로케일에서 채울 수 있는가");
let checkedLocales = 0;
for (const locale of translatedLocales) {
  const doc = getDocPage(locale, "guide/examples");
  const text = JSON.stringify(doc);
  const used = new Set([...text.matchAll(/\{(ex[ABC][A-Za-z]+)\}/g)].map((m) => m[1]!));
  const values = exampleValues(locale);
  const missing = [...used].filter((name) => !values[name]);
  checkedLocales += 1;
  if (used.size === 0) fail(`${locale}: 문서에 예시 자리표시자가 하나도 없다(검사 0건)`);
  else if (missing.length > 0) fail(`${locale}: 채우지 못하는 자리표시자 ${missing.join(", ")}`);
}
if (checkedLocales === 0) fail("로케일을 하나도 못 훑었다(검사 0건)");
else console.log(`  ✓ ${checkedLocales}개 로케일 훑음`);

// ── ③ 유료 몫이 새지 않는가 ──────────────────────────────────────────────────
console.log("③ 예시가 유료 몫을 싣지 않는가");
for (const key of EXAMPLE_KEYS) {
  const leaked = PAID_ONLY_READING_FIELDS.filter((field) => field in exampleReading(key));
  if (leaked.length > 0) fail(`${key}: 유료 필드가 들어 있다 — ${leaked.join(", ")}`);
}
if (failures === 0) console.log("  ✓ 무료 허용 목록 밖의 필드가 없다");

console.log(failures === 0 ? "\nALL PASS" : `\n실패 ${failures}건`);
process.exit(failures === 0 ? 0 : 1);
