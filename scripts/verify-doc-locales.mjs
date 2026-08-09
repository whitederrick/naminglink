// 편집 문서(안내·소개·공지·문의)가 23개 언어로 있는지 센다 — 네 앱.
//
// ## 왜 만들었는가 (2026-08-08)
//
// **대원칙은 23개 언어다.** 그것이 이 서비스의 장점이고, 네 앱이 같은 기준이다. 예외는
// 아랍어·크메르어의 유료 PDF 하나뿐이고 화면 문구에는 예외가 없다.
//
// 그런데 이 층만 오래 ko/en 두 벌이었다. 본문이 `page.tsx`의 JSX에 박혀 있어 번역 파이프라인이
// 지나갈 수 없었고, **그것을 세는 검사기가 없었다.** 더 나쁜 것은
// `verify-guide-docs.mjs`가 그 상태를 **정답으로 강제**하고 있었다는 점이다:
//
//     const wrote = ko > en ? "ko" : "global";
//     if (wrote !== entry.audience) 실패
//
// 즉 누가 문서를 일본어로 번역해 두었으면 검사기가 그것을 결함이라고 빨갛게 냈다. 그래서
// 전수 점검 69개가 전부 통과하는데도 21개 언어가 비어 있었다.
//
// **이 검사기는 초록불의 뜻을 뒤집는다** — 번역이 끝나야 초록이다.
//
// 실행: node scripts/verify-doc-locales.mjs

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { APP_KEYS } from "./app-keys.mjs";

/**
 * 로케일 목록의 원본. **검사기가 자기 목록을 들지 않는다** — 앱이 로케일을 늘리는 날 검사기만
 * 옛 목록을 보며 「전부 있다」를 찍는다.
 */
function localesOf(app) {
  const file = path.join("apps", app, "src", "lib", "locale-codes.ts");
  if (!existsSync(file)) return null;
  const block = readFileSync(file, "utf8").match(/localeCodes\s*=\s*\[([\s\S]*?)\]/);
  if (!block) return null;
  return [...block[1].matchAll(/"([a-z-]+)"/g)].map((m) => m[1]);
}

/** `doc-content/` 를 둔 앱만 검사 대상이다. 아직 옮기지 않은 앱은 「미착수」로 가른다. */
function docDirOf(app) {
  const dir = path.join("apps", app, "src", "lib", "doc-content");
  return existsSync(dir) ? dir : null;
}

let failures = 0;
let notStarted = 0;

console.log("편집 문서 로케일 검사 — 대원칙 23개 언어\n");

for (const app of APP_KEYS) {
  const dir = docDirOf(app);
  if (!dir) {
    console.log(`■ ${app} — 미착수(doc-content 없음). 본문이 아직 page.tsx에 있다`);
    notStarted += 1;
    continue;
  }

  const locales = localesOf(app);
  if (!locales) {
    console.log(`■ ${app} — ✗ locale-codes.ts를 읽지 못했다`);
    failures += 1;
    continue;
  }

  // 등록부가 없는 상태는 **이관하다 만 것**이다 — 자료 파일은 다 있는데 화면이 아무것도 읽지
  // 않는다. 실제로 2026-08-09 인연링크가 그랬다(23개 파일 · 등록부 없음 · page.tsx는 옛 JSX).
  // 예전에는 여기서 검사기가 크래시했고, **크래시는 판정이 아니다** — 미착수와 구분되지 않아
  // 「아직 안 한 앱」으로 읽힐 수 있다. 자리를 정확히 말하고 실패로 센다.
  const indexFile = path.join(dir, "index.ts");
  if (!existsSync(indexFile)) {
    console.log(`■ ${app} — ✗ 이관 중. 로케일 자료는 있는데 **등록부(index.ts)가 없다**`);
    console.log(`  화면은 아직 아무것도 읽지 않는다. page.tsx 배선까지 해야 끝이다\n`);
    failures += 1;
    continue;
  }

  const index = readFileSync(indexFile, "utf8");
  const present = new Set(
    readdirSync(dir)
      .filter((f) => /^[a-z-]+\.ts$/.test(f) && !["index.ts", "types.ts"].includes(f))
      .map((f) => f.replace(/\.ts$/, "")),
  );

  // ① 로케일마다 자기 파일이 있는가
  const missing = locales.filter((l) => !present.has(l));

  // ② 등록부가 아직 `UNTRANSLATED`를 가리키는 자리
  const untranslated = [...index.matchAll(/^\s*([a-z-]+):\s*UNTRANSLATED,/gm)].map((m) => m[1]);

  // ③ 등록부에 로케일이 다 적혀 있는가 (타입이 잡지만, 표를 못 읽는 경우를 대비해 함께 센다)
  const unlisted = locales.filter(
    (l) => !new RegExp(`^\\s*${l}:`, "m").test(index),
  );

  /**
   * ④ **빈 잎이 없는가.**
   *
   * 번역기가 모델 응답에서 열쇠를 빠뜨리면 그 자리에 `""`가 들어간다. 그런데 빈 문자열은
   * 자리표시자도 강조도 한글도 0개라 **번역기의 검사를 전부 통과한다.** 화면은 빈 제목과 빈
   * 문단을 그리므로, **문서가 있는데 아무 말도 하지 않는 상태**가 된다.
   *
   * 2026-08-09에 실제로 그랬다 — 인연링크 유료 상품 안내가 15개 언어에서 부분적으로 비었고
   * (`"slot": ""`까지 비어 목차 자리도 함께 잃었다), 드림링크는 「하지 않기로 한 것들」 한
   * 편이 통째로 비었다. **원문에는 0개**였다. 번역기 쪽도 고쳤지만, 그 고침이 되돌아가도
   * 여기서 잡히도록 함께 센다.
   *
   * 한국어 원문에 있는 빈 자리는 자료가 그렇게 정한 것이므로 **원문의 개수를 기준**으로 본다.
   */
  const emptyLeaves = (file) =>
    (readFileSync(file, "utf8").match(/:\s*""/g) ?? []).length;
  const koEmpty = existsSync(path.join(dir, "ko.ts")) ? emptyLeaves(path.join(dir, "ko.ts")) : 0;
  const blanks = [];
  for (const locale of locales) {
    const file = path.join(dir, `${locale}.ts`);
    if (!existsSync(file)) continue;
    const found = emptyLeaves(file);
    if (found > koEmpty) blanks.push(`${locale}(${found - koEmpty})`);
  }

  // ④ 공지 글이 로케일마다 다 있는가.
  //
  // **타입이 못 잡는 자리다.** 공지 본문은 `Record<공지id, …>`라 키가 빠져도 타입은 만족한다.
  // 그런데 화면은 글이 없는 공지를 그리지 않으므로, 새 공지를 올리고 번역을 안 돌리면 **그
  // 공지가 그 언어에서 조용히 사라진다.** 이용 조건을 알리는 자리에서 가장 나쁜 실패다.
  const noticesFile = path.join("apps", app, "src", "lib", "notices.ts");
  const noticeIds = existsSync(noticesFile)
    ? [...readFileSync(noticesFile, "utf8").matchAll(/^\s*id:\s*"([^"]+)"/gm)].map((m) => m[1])
    : [];
  const missingNotices = [];
  for (const locale of locales) {
    const file = path.join(dir, `${locale}.ts`);
    if (!existsSync(file)) continue;
    const source = readFileSync(file, "utf8");
    const absent = noticeIds.filter((id) => !source.includes(`"${id}"`));
    if (absent.length) missingNotices.push(`${locale}(${absent.join(",")})`);
  }

  console.log(`■ ${app} — 로케일 ${locales.length}개`);
  console.log(`  ${missing.length === 0 ? "✓" : "✗"} 로케일 파일 ${locales.length - missing.length}/${locales.length}` +
    (missing.length ? ` — 없음: ${missing.join(", ")}` : ""));
  console.log(`  ${untranslated.length === 0 ? "✓" : "✗"} 번역 대기 ${untranslated.length}개` +
    (untranslated.length ? ` — ${untranslated.join(", ")}` : ""));
  console.log(`  ${unlisted.length === 0 ? "✓" : "✗"} 등록부 누락 ${unlisted.length}개` +
    (unlisted.length ? ` — ${unlisted.join(", ")}` : ""));
  console.log(`  ${missingNotices.length === 0 ? "✓" : "✗"} 공지 ${noticeIds.length}건이 전 로케일에` +
    (missingNotices.length ? ` — 빠짐: ${missingNotices.join(" ")}` : ""));
  console.log(`  ${blanks.length === 0 ? "✓" : "✗"} 빈 잎 0개(원문 ${koEmpty}개 기준)` +
    (blanks.length ? ` — ${blanks.join(" ")}` : ""));

  if (missing.length || untranslated.length || unlisted.length || missingNotices.length || blanks.length) failures += 1;
  console.log();
}

// 대조군 — 판정이 살아 있는지 본다. 「번역 대기」를 세는 정규식이 죽으면 늘 통과가 된다.
const CONTROL = "  ja: UNTRANSLATED,\n  zh: JA_DOCS,\n";
const controlHits = [...CONTROL.matchAll(/^\s*([a-z-]+):\s*UNTRANSLATED,/gm)].length;
console.log(`대조군: 번역 대기 판정 ${controlHits === 1 ? "✓ 살아 있다" : "✗ 죽었다"}`);
if (controlHits !== 1) failures += 1;

if (notStarted) {
  console.log(`\n미착수 ${notStarted}개 앱 — **통과가 아니라 아직 검사할 것이 없는 상태다.**`);
}

console.log(
  failures === 0 && notStarted === 0
    ? "\nALL PASS — 편집 문서가 전 로케일에 있다."
    : `\n실패 ${failures}건${notStarted ? ` · 미착수 ${notStarted}개 앱` : ""}`,
);

process.exit(failures === 0 && notStarted === 0 ? 0 : 1);
