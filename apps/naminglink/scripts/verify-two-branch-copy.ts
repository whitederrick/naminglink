/**
 * **화면 문구가 다시 두 갈래로 갈라지지 않는가.**
 *
 * 구현 명세 §9·단계 4.
 *
 * ## 무엇을 막는가
 *
 * 2026-08-20에 컴포넌트 일곱 자리가 이런 꼴이었다.
 *
 *     {locale === "ko" ? "이용 안내" : "How it works"}
 *
 * 갈래가 둘뿐이라 **`ko`가 아닌 22개 언어가 전부 영어를 봤다.** 바닥글은 모든 화면에 있으니
 * 로케일당 한 번이 아니라 모든 페이지에서 그랬다.
 *
 * **이 부류에는 감시자가 없었다.** `verify-rendered-locale.mjs`는 방향이 반대다 — 비한국어
 * 화면의 **한국어 누출**만 본다. 더 나쁜 것은 그 파일 7-9행이 이 모양을 예시로 들며
 * 「헛짚는 쪽」이라고 적어 두었다는 점이다. 오탐을 설명하려던 문장이 이 결함을 **정상으로
 * 굳혔다** → `verifiers-can-freeze-a-wrong-policy`.
 *
 * ## 무엇을 세는가
 *
 *   ① 두 갈래 문구      `locale === "ko" ? "문자열" : "문자열"` 이 0건인가
 *   ② 영어 복사         로케일 표의 비영어 값이 영어와 같으면 **선언돼 있는가**
 *   ③ 선언 정합성       적용되지 않는 선언이 남아 있지 않은가
 *   ④ 0건 금지          검사 대상이 0건이면 실패
 *   ⑤ 대조군            판정기가 살아 있는가
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-two-branch-copy.ts`
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { uiLabels } from "../src/lib/ui-labels";
import { localeCodes, type LocaleCode } from "../src/lib/locale-codes";

const SRC = path.join(process.cwd(), "src");
let failures = 0;
const fail = (message: string) => {
  failures += 1;
  console.log(`  ✗ ${message}`);
};

/**
 * **영어와 같아도 되는 자리.** 이유 없이 여기 적지 말 것 — 이유가 없으면 다음 사람이 판단할
 * 수 없고, 그때 이 목록은 검사를 조용히 비우는 장치가 된다.
 *
 * 로케일을 **명시적으로 적는다.** 「비영어 전부」로 두면 24번째 로케일이 생기는 날 조용히
 * 통과한다.
 */
const SAME_AS_ENGLISH_ALLOWED: readonly {
  artifact: string;
  locales: readonly string[];
  /** **선언 당시의 영어 값.** 영어가 바뀌면 이 선언은 더 이상 그 값을 가리키지 않는다. */
  value: string;
  reason: string;
}[] = [
  {
    artifact: "uiLabels.guideLink",
    locales: localeCodes.filter((code) => code !== "ko" && code !== "en"),
    value: "How it works",
    reason:
      "옮겨 올 원문이 없다 — `doc-content`의 guide eyebrow 는 「이름에 쓰는 한자」로 뜻이 다르다. " +
      "en 검수 packet(단계 5)에 올려 사람이 채운다.",
  },
  {
    artifact: "uiLabels.customerService",
    locales: localeCodes.filter((code) => code !== "ko" && code !== "en"),
    value: "Customer service",
    reason: "옮겨 올 원문이 없다. en 검수 packet 에 올려 사람이 채운다.",
  },
  {
    artifact: "uiLabels.contact",
    locales: ["fr"],
    value: "Contact",
    reason: "프랑스어로도 「Contact」다 — 옮기지 않은 것이 아니라 같은 낱말이다.",
  },
  {
    artifact: "uiLabels.stampText",
    locales: localeCodes.filter((code) => code !== "ko" && code !== "en"),
    value: "Stamp",
    reason: "옮겨 올 원문이 없다. en 검수 packet 에 올려 사람이 채운다.",
  },
];

console.log("\n두 갈래 문구 검사\n");

// ── ① 두 갈래 문구 ─────────────────────────────────────────────────────────
/** `locale === "ko" ? "…" : "…"` — 양쪽이 **문자열 리터럴**일 때만 사용자 문구다. */
const TWO_BRANCH =
  /locale\s*(?:===|!==)\s*["']ko["']\s*\?\s*(["'][^"']{2,}["'])\s*:\s*(["'][^"']{2,}["'])/g;

/**
 * **주석을 먼저 걷어낸다.** 이 검사기의 첫 실행에서 `ui-labels.ts` 의 **머리 주석**이 걸렸다 —
 * 옛 모양을 예시로 적어 둔 자리다. `verify-rendered-locale.mjs` 가 같은 예시를 「헛짚는 쪽」이라
 * 적어 두어 이 결함을 굳혔던 것과 정확히 같은 함정이라, 파일을 예외로 빼지 않고 **주석만**
 * 뺀다. 파일을 빼면 그 파일 안의 진짜 결함도 함께 사라진다.
 */
function stripComments(text: string): string {
  /** 줄 수를 지키려고 지우지 않고 **빈칸으로 바꾼다** — 그래야 결함의 줄 번호가 맞는다. */
  const blank = (chunk: string) => chunk.replace(/[^\r\n]/g, " ");
  return text
    .replace(/\/\*[\s\S]*?\*\//g, blank)
    .replace(/(^|[^:])\/\/.*$/gm, (whole: string, head: string) => head + blank(whole.slice(head.length)));
}

/**
 * **열거값은 사용자 문구가 아니다.** `locale === "ko" ? "domestic" : "global"` 은 배송 구역을
 * 고르는 자리다. 양쪽이 전부 소문자 식별자꼴이면 화면에 나가는 문구로 세지 않는다.
 */
const IDENTIFIERISH = /^[a-z0-9_-]+$/;
const isUserFacing = (a: string, b: string) => {
  const x = a.slice(1, -1);
  const y = b.slice(1, -1);
  return !(IDENTIFIERISH.test(x) && IDENTIFIERISH.test(y));
};

function scan(): { file: string; line: number; text: string }[] {
  const found: { file: string; line: number; text: string }[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.tsx?$/.test(entry)) continue;
      const rel = path.relative(process.cwd(), full).split(path.sep).join("/");
      const text = stripComments(readFileSync(full, "utf8"));
      TWO_BRANCH.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = TWO_BRANCH.exec(text))) {
        if (!isUserFacing(match[1]!, match[2]!)) continue;
        found.push({
          file: rel,
          line: text.slice(0, match.index).split(/\r?\n/).length,
          text: `${match[1]} : ${match[2]}`,
        });
      }
    }
  };
  walk(SRC);
  return found;
}

const hits = scan();
console.log(`① 두 갈래 문구 — src 훑기`);
if (hits.length) {
  for (const hit of hits) fail(`${hit.file}:${hit.line} — ${hit.text}`);
  console.log("     → 로케일 표로 옮길 것. 갈래가 둘이면 `ko` 밖 22개 언어가 전부 영어를 본다.");
} else {
  console.log("  ✓ 0건");
}

// ── ② 영어 복사 ────────────────────────────────────────────────────────────
console.log("\n② 로케일 표의 영어 복사 — 선언되지 않은 것이 있는가");
{
  const fields = Object.keys(uiLabels.en) as (keyof (typeof uiLabels)["en"])[];
  const allowed = new Map(
    SAME_AS_ENGLISH_ALLOWED.map((item) => [item.artifact, new Set(item.locales)]),
  );
  let compared = 0;
  const undeclared: string[] = [];
  const declaredHit = new Set<string>();

  for (const field of fields) {
    const english = uiLabels.en[field];
    for (const locale of localeCodes) {
      if (locale === "en" || locale === "ko") continue;
      compared += 1;
      if (uiLabels[locale as LocaleCode][field] !== english) continue;
      const artifact = `uiLabels.${String(field)}`;
      if (allowed.get(artifact)?.has(locale)) {
        declaredHit.add(`${artifact}:${locale}`);
        continue;
      }
      undeclared.push(`${artifact} · ${locale} · ${JSON.stringify(english)}`);
    }
  }

  if (compared === 0) fail("비교 대상이 0건이다 — 0건은 통과가 아니다.");
  else console.log(`  · 비교 ${compared}건 (로케일 ${localeCodes.length - 2}개 × 항목 ${fields.length}개)`);

  if (undeclared.length) {
    for (const item of undeclared) fail(`선언 없이 영어와 같다: ${item}`);
    console.log("     → 번역을 넣거나, 정당하면 SAME_AS_ENGLISH_ALLOWED 에 **이유와 함께** 적을 것.");
  } else {
    console.log(`  ✓ 선언되지 않은 영어 복사 0건 (선언된 것 ${declaredHit.size}건)`);
  }

  // ── ③ 선언 정합성 ─────────────────────────────────────────────────────
  console.log("\n③ 선언 정합성 — 적용되지 않는 예외가 남아 있는가");
  let stale = 0;
  for (const item of SAME_AS_ENGLISH_ALLOWED) {
    if (!item.reason.trim()) fail(`${item.artifact} — 이유가 비어 있다`);
    // **선언한 값이 지금 영어와 같은가.** 영어가 바뀌었는데 선언이 그대로면, 그 예외는 더 이상
    // 그 문구를 가리키지 않는다 — 예외가 엉뚱한 값을 덮어 준다.
    const field = item.artifact.split(".").pop() as keyof (typeof uiLabels)["en"];
    if (uiLabels.en[field] !== item.value) {
      fail(`${item.artifact} — 선언된 value ${JSON.stringify(item.value)} 가 현재 영어 ${JSON.stringify(uiLabels.en[field])} 와 다르다`);
    }
    for (const locale of item.locales) {
      if (!declaredHit.has(`${item.artifact}:${locale}`)) {
        stale += 1;
        fail(`${item.artifact} · ${locale} — 예외가 선언됐는데 실제로는 영어와 다르다(지울 것)`);
      }
    }
  }
  if (!stale) console.log("  ✓ 죽은 예외 0건");
}

// ── ④ 대조군 ───────────────────────────────────────────────────────────────
console.log("\n④ 대조군 — 판정기가 살아 있는가");
{
  const probe = (text: string) => {
    const re = new RegExp(TWO_BRANCH.source);
    return re.test(text);
  };
  const control: { label: string; ok: boolean }[] = [
    { label: "두 갈래 문구를 넣으면 잡는다", ok: probe('{locale === "ko" ? "가나" : "Ghana"}') },
    { label: "부정형도 잡는다", ok: probe('locale !== "ko" ? "Global" : "국내"') },
    {
      label: "문자열이 아닌 분기는 잡지 않는다",
      ok: !probe('const region = locale === "ko" ? domestic : global;'),
    },
    {
      label: "로케일 태그 계산은 잡지 않는다",
      ok: !probe('new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : locale, {'),
    },
    { label: "표에 로케일이 23개 다 있다", ok: Object.keys(uiLabels).length === localeCodes.length },
    { label: "훑은 파일이 0건이 아니다", ok: readdirSync(SRC).length > 0 },
  ];
  for (const item of control) {
    if (item.ok) console.log(`  ✓ ${item.label}`);
    else fail(`대조군 실패 — ${item.label}`);
  }
}

console.log(failures === 0 ? "\n통과\n" : `\n빨간불 ${failures}건\n`);
process.exit(failures === 0 ? 0 : 1);
