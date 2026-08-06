// 로케일 사전 구조 검사.
//
// 23개 로케일 사전은 사람이(또는 에이전트가) 언어별로 따로 채운다. TypeScript가 잡아 주는 것은
// **키 집합과 중첩 구조**까지다. 정작 화면을 깨뜨리는 것은 타입이 못 보는 쪽이다:
//   - `{dayMaster}` 같은 자리표시자를 번역해 버려 치환이 안 되는 것
//   - `**강조**` 표기가 빠져 굵게 처리되어야 할 문장이 별표째로 노출되는 것
//   - `\n` 위치가 달라져 줄바꿈 전제로 짠 카드가 한 줄로 붙는 것
//   - `steps`/`quotes`/`contents` 배열 길이가 달라 화면 항목이 비는 것(튜플이 아닌 배열은 타입이 안 잡는다)
// 이 네 가지를 en 사전과 기계적으로 대조한다.
//
// 실행: apps/inyeonlink 에서
//   ../../node_modules/.bin/tsx scripts/verify-i18n.ts
//   (없으면 npx tsx scripts/verify-i18n.ts)

import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

import { getDictionary } from "../src/lib/i18n";

// tsx가 이 스크립트를 CJS로 돌려 `import.meta.dirname`이 undefined가 된다. 실행 위치를
// apps/inyeonlink로 고정하고 cwd 기준으로 잡는다(파일 첫머리의 실행법 참고).
const LOCALES_DIR = join(process.cwd(), "src", "lib", "i18n-locales");

// en과 같아도 되는 값들. 상표·기호라 번역 대상이 아니다.
const SAME_AS_EN_OK = new Set([
  "brand",
  "relation.directionLabel", // "{from} → {to}" — 자리표시자와 화살표뿐이다
]);

let failures = 0;
let warnings = 0;

function fail(locale: string, path: string, message: string) {
  failures += 1;
  console.error(`  ✗ [${locale}] ${path}: ${message}`);
}

function warn(locale: string, path: string, message: string) {
  warnings += 1;
  console.warn(`  ! [${locale}] ${path}: ${message}`);
}

function placeholders(value: string): string[] {
  return (value.match(/\{[a-zA-Z]+\}/g) ?? []).sort();
}

function countOf(value: string, needle: string): number {
  return value.split(needle).length - 1;
}

function compare(
  locale: string,
  path: string,
  base: unknown,
  target: unknown,
): void {
  if (typeof base === "string") {
    if (typeof target !== "string") {
      fail(locale, path, `문자열이어야 하는데 ${typeof target}`);
      return;
    }
    const basePlaceholders = placeholders(base).join(",");
    const targetPlaceholders = placeholders(target).join(",");
    if (basePlaceholders !== targetPlaceholders) {
      fail(
        locale,
        path,
        `자리표시자 불일치 — en[${basePlaceholders || "없음"}] vs [${targetPlaceholders || "없음"}]`,
      );
    }
    if (countOf(base, "**") !== countOf(target, "**")) {
      fail(
        locale,
        path,
        `** 강조 표기 개수 불일치 — en ${countOf(base, "**")}개 vs ${countOf(target, "**")}개`,
      );
    }
    // 줄바꿈은 실패가 아니라 경고다. 어디서 끊을지는 언어마다 다르고, 그 판단을 화면이 아니라
    // 사전이 하도록 설계했다(app/page.tsx의 whitespace-pre-line 주석). en과 다른 것 자체는
    // 정상이고, 여기서는 "의도한 차이인지 한 번 보라"는 신호로만 남긴다.
    if (countOf(base, "\n") !== countOf(target, "\n")) {
      warn(
        locale,
        path,
        `줄바꿈(\\n) 개수가 en과 다름 — en ${countOf(base, "\n")}개 vs ${countOf(target, "\n")}개`,
      );
    }
    if (base === target && base.length > 12 && !SAME_AS_EN_OK.has(path)) {
      warn(locale, path, "en과 완전히 동일 — 번역이 빠졌을 수 있다");
    }
    return;
  }

  if (Array.isArray(base)) {
    if (!Array.isArray(target)) {
      fail(locale, path, `배열이어야 하는데 ${typeof target}`);
      return;
    }
    if (base.length !== target.length) {
      fail(locale, path, `배열 길이 불일치 — en ${base.length} vs ${target.length}`);
      return;
    }
    base.forEach((item, index) => compare(locale, `${path}[${index}]`, item, target[index]));
    return;
  }

  if (base && typeof base === "object") {
    if (!target || typeof target !== "object") {
      fail(locale, path, `객체여야 하는데 ${typeof target}`);
      return;
    }
    const baseKeys = Object.keys(base as Record<string, unknown>).sort();
    const targetKeys = Object.keys(target as Record<string, unknown>).sort();
    const missing = baseKeys.filter((key) => !targetKeys.includes(key));
    const extra = targetKeys.filter((key) => !baseKeys.includes(key));
    if (missing.length) fail(locale, path || "(root)", `키 누락: ${missing.join(", ")}`);
    if (extra.length) fail(locale, path || "(root)", `en에 없는 키: ${extra.join(", ")}`);
    for (const key of baseKeys) {
      if (!targetKeys.includes(key)) continue;
      compare(
        locale,
        path ? `${path}.${key}` : key,
        (base as Record<string, unknown>)[key],
        (target as Record<string, unknown>)[key],
      );
    }
  }
}

async function main() {
  const en = getDictionary("en");

  // **로케일이 없어도 본다.** 원문(en)만 있으면 되는 검사라, 아래 "검사할 것이 없는 상태"에
  // 걸려 건너뛰면 안 된다.
  checkEmphasisAllowlist(en);

  let files: string[] = [];
  try {
    files = readdirSync(LOCALES_DIR)
      .filter((name) => name.endsWith(".ts"))
      .sort();
  } catch {
    // 디렉터리가 없는 것은 결함이 아니다 — **아직 ko·en 말고는 번역이 없다는 뜻**이다.
    //
    // `ko`·`en`은 `i18n.ts` 안에 두고 나머지만 여기에 두는 것이 이 앱의 구조다(인연링크에서
    // 물려받았다). 사주링크는 인연링크 궁합 번역 21개를 지웠으므로 디렉터리째 비었고, ⑦에서
    // ja·vi부터 다시 쓰면 그때 생긴다.
    //
    // **그때까지 이 검사기를 빨갛게 두지 않는다.** 늘 실패하는 검사기는 곧 아무도 안 보게 되고,
    // 진짜 실패가 섞여 들어와도 구분되지 않는다.
    files = [];
  }

  if (files.length === 0) {
    // **"통과"라고 하지 않는다.** 검사한 것이 0건인 상태와 다 통과한 상태는 다르다
    // (`verify-legal-locales`와 같은 규율).
    console.log(
      `검사한 로케일 0개 — ko·en 외의 사전이 아직 없습니다(${LOCALES_DIR}).\n` +
        "통과가 아니라 **검사할 것이 없는 상태**입니다. ⑦에서 ja·vi를 쓰면 여기서 검사됩니다.",
    );
    // 위의 강조 검사는 로케일과 무관하게 돌았으므로 그 결과는 그대로 반영한다.
    process.exit(failures > 0 ? 1 : 0);
  }

  console.log(`en 사전과 대조한다 — 대상 ${files.length}개\n`);

  for (const file of files) {
    const locale = file.replace(/\.ts$/, "");
    const before = failures;
    // 윈도우 절대경로(`C:\...`)는 ESM 로더가 거부한다. file:// URL로 넘긴다.
    const module_ = (await import(pathToFileURL(join(LOCALES_DIR, file)).href)) as Record<
      string,
      unknown
    >;
    const dictionary = module_[locale];
    if (!dictionary) {
      fail(locale, "(export)", `\`export const ${locale}\`를 찾을 수 없다`);
      continue;
    }
    compare(locale, "", en, dictionary);
    if (failures === before) console.log(`  ✓ ${locale}`);
  }

  console.log(
    `\n실패 ${failures}건, 경고 ${warnings}건 (경고는 번역 누락 의심일 뿐 실패가 아니다)`,
  );
  process.exit(failures > 0 ? 1 : 0);
}

/**
 * `**강조**` 표기를 쓰는 문구는 **어디서 그리는지 적힌 것만** 허용한다.
 *
 * 표기 자체는 화면이 처리해야 보인다(`lib/emphasize.tsx`). 처리하지 않으면 별표가 그대로
 * 찍히는데, **그 화면을 열어 보기 전에는 아무도 모른다** — 실제로 결과 화면의 즐겨찾기 안내와
 * 결제 패널의 프리미엄 설명 둘이 그렇게 나가고 있었다(2026-08-05).
 *
 * 그래서 목록을 여기 둔다. 사전에 `**`를 새로 쓰면 이 검사가 먼저 빨개지고, **그리는 자리를
 * 함께 적게 된다.** 문구를 쓰는 사람과 화면을 고치는 사람이 갈리는 자리라 손으로는 못 맞춘다.
 */
function checkEmphasisAllowlist(en: unknown) {
  const RENDERED_WITH_EMPHASIS: Record<string, string> = {
    "today.bookmarkHint": "SajuResultView",
    "report.consentLabel": "ReportPurchasePanel",
  };

  const found: string[] = [];
  const walk = (node: unknown, trail: string[]) => {
    if (typeof node === "string") {
      if (node.includes("**")) found.push(trail.join("."));
    } else if (Array.isArray(node)) {
      node.forEach((item, index) => walk(item, [...trail, String(index)]));
    } else if (node && typeof node === "object") {
      for (const [key, value] of Object.entries(node)) walk(value, [...trail, key]);
    }
  };
  walk(en, []);

  console.log("\n`**강조**`를 쓰는 문구 — 그리는 자리가 적혀 있는가");
  for (const path of found) {
    if (RENDERED_WITH_EMPHASIS[path]) continue;
    fail("en", path, "`**`를 쓰는데 그리는 자리가 목록에 없다 — emphasize()를 거치는지 확인할 것");
  }
  // **반대쪽도 본다.** 문구에서 강조를 뺐는데 목록에 남아 있으면, 다음 사람이 "여기는 처리돼
  // 있다"고 믿고 그 자리에 다시 별표를 쓴다.
  for (const path of Object.keys(RENDERED_WITH_EMPHASIS)) {
    if (found.includes(path)) continue;
    fail("en", path, "목록에 있는데 문구에 `**`가 없다 — 목록에서 지울 것");
  }
  console.log(`  ${found.length}개 확인 (목록 ${Object.keys(RENDERED_WITH_EMPHASIS).length}개)`);
}

void main();
