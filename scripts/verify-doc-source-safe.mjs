#!/usr/bin/env node
/**
 * **번역기에 넣기 전에 원문을 본다.** 걸릴 문장을 1초 만에 찾는다.
 *
 * ## 왜 있는가 (2026-08-10)
 *
 * 하루에 두 번, 새로 쓴 문장 때문에 21개 언어 번역이 헛돌았다. 둘 다 **15분을 기다린 뒤에야**
 * 알았다.
 *
 *   · 설명과 `[소개](/about)` 링크를 한 문단에 넣었더니 카자흐어가 두 번 모두 링크를 잃었다
 *   · 「자동 검사(누락·용어·**자리표시자**)」라고 적었더니 모델이 그 낱말을 진짜 토큰
 *     `{placeholder}` 로 만들어 태국어·몽골어·크메르어가 걸렸다
 *
 * 둘 다 번역기 결함이 아니다. **원문이 번역기가 지키는 규칙과 부딪히게 쓰였다.**
 *
 * ## 무엇을 보는가
 *
 *   ① 번역기가 세는 표기의 **이름을 본문에 쓴 문장**
 *      (자리표시자 · placeholder · 강조 표기 · bold marker · hreflang …)
 *      모델이 설명을 지시로 읽고 그 표기를 만들어 낸다.
 *
 *   ② 강조 표기의 **짝이 안 맞는 문장** (번역 전에 이미 깨진 것)
 *
 * ko·en 만 본다. 나머지 21개는 생성물이라 여기서 볼 것이 없다.
 *
 * 실행: node scripts/verify-doc-source-safe.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/**
 * 번역기가 세는 표기의 이름. 본문에 이 낱말이 있으면 모델이 그 표기를 만들어 낼 수 있다.
 *
 * **낱말 자체를 금지하는 것이 아니다.** 「자리표시자」를 설명해야 하는 글이 있을 수 있다.
 * 그때는 그 문장을 다르게 쓰거나(값이 들어가는 자리 …) 이 목록에서 빼면 된다 — 다만
 * **빼기 전에 15분을 잃을 각오**를 하고 빼라는 뜻으로 여기 둔다.
 */
const MARKUP_TERMS = [
  "자리표시자", "placeholder", "Placeholder",
  "강조 표기", "bold marker",
  "hreflang", "canonical",
];

/**
 * **길이 규칙은 두지 않는다.** 처음에는 「링크가 든 문단이 160자를 넘으면 경고」로 두었는데,
 * 잘 번역돼 있는 기존 문단 수십 개가 걸렸다 — 근거 없이 정한 값이었고 300자짜리도 멀쩡히
 * 옮겨져 있었다. 가짜 빨간불을 내는 검사는 없느니만 못하다.
 *
 * 카자흐어가 링크를 잃은 것은 길이 때문이 아니라 **그 모델이 그 언어에서 빠진 구덩이**였다.
 * 그건 여기서 셀 수 있는 것이 아니고, 이미 번역기가 재시도와 en 폴백으로 다룬다.
 */

function leavesOf(source, marker) {
  const at = source.indexOf(marker);
  if (at < 0) return [];
  return [...source.slice(at).matchAll(/"?([a-zA-Z][\w/-]*)"?\s*:\s*"((?:[^"\\]|\\.)*)"/g)].map(
    (m) => ({ key: m[1], value: m[2] }),
  );
}

const problems = [];
let scanned = 0;

console.log("번역기에 넣기 전 — 원문에 걸릴 문장이 있는가\n");

for (const app of APP_KEYS) {
  const dir = path.join(ROOT, "apps", app, "src", "lib", "doc-content");
  if (!existsSync(dir)) continue;

  for (const [file, marker] of [["ko.ts", "KO_DOCS"], ["en.ts", "EN_DOCS"]]) {
    const full = path.join(dir, file);
    if (!existsSync(full)) continue;
    const leaves = leavesOf(readFileSync(full, "utf8"), marker);
    scanned += leaves.length;

    for (const { key, value } of leaves) {
      const term = MARKUP_TERMS.find((t) => value.includes(t));
      if (term) {
        problems.push(
          `${app}/${file} — 본문이 「${term}」를 이름으로 부른다. 모델이 그 표기를 만들어 낸다.\n` +
            `        ${value.slice(0, 90)}…`,
        );
      }

      const bolds = (value.match(/\*\*/g) ?? []).length;
      if (bolds % 2 !== 0) {
        problems.push(`${app}/${file} [${key}] — 강조 표기의 짝이 안 맞는다(${bolds}개)`);
      }
    }
  }
}

if (scanned === 0) {
  console.error("원문을 하나도 읽지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

// ── 대조군 ─────────────────────────────────────────────────────────────────
const CONTROL_BAD = "자동 검사(누락·용어·자리표시자)를 거칩니다";
const CONTROL_OK = "값이 들어가는 자리가 그대로인지를 봅니다";
if (!MARKUP_TERMS.some((t) => CONTROL_BAD.includes(t)) || MARKUP_TERMS.some((t) => CONTROL_OK.includes(t))) {
  console.error("✗ 대조군 실패 — 실제로 걸렸던 문장을 알아보지 못한다.");
  process.exit(1);
}
console.log(`  ✓ 대조군: 2026-08-10에 실제로 깨진 문장을 알아본다`);
console.log(`  훑은 잎 ${scanned}개\n`);

if (problems.length) {
  console.error(`걸릴 문장 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error("\n**번역을 돌리기 전에 고칠 것.** 21개 언어를 돌린 뒤에 알면 15분을 잃는다.");
  process.exit(1);
}

console.log(`ALL PASS — 원문 ${scanned}개 잎에 번역기가 걸릴 문장이 없다.`);
