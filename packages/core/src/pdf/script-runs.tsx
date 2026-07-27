import React from "react";
import { Text, type TextProps } from "@react-pdf/renderer";

// 한 문장에 여러 문자 체계가 섞일 때 구간마다 맞는 폰트를 지정한다.
//
// react-pdf는 `Text` 하나에 폰트 하나만 허용하고 **폰트 폴백이 없다.** 그래서 태국어 설명
// 속의 한글 이름이나 한국어 문장 속의 한자처럼 문자가 섞이면 글리프가 통째로 깨진다.
// 문자 단위로 체계를 판별해 이어지는 구간(run)으로 묶고, run마다 폰트를 지정하면 해결된다.
//
// **폰트 등록은 여기서 하지 않는다.** `Font.register`는 `process.cwd()` 기준 경로를 쓰고
// Next.js의 `outputFileTracingIncludes`도 앱 루트 상대경로라, 폰트 파일과 등록은 앱마다
// 따로 있어야 한다. 이 모듈은 "어떤 문자에 어떤 패밀리 이름을 쓸 것인가"만 정한다.
//
// 앱이 등록하지 않은 패밀리로 라우팅되면 글자가 깨지므로, `registeredFamilies`를 받아
// 등록되지 않은 것은 기본 폰트로 되돌린다. 인연링크처럼 일부 문자 체계만 쓰는 앱이 있어서다.

/** 문자 체계별 폰트 패밀리 이름. 앱은 이 이름으로 `Font.register`한다. */
export const SCRIPT_FAMILY = {
  base: "NotoSans",
  hangul: "NotoSansKR",
  cjk: "NotoSansCJKkr",
  thai: "NotoSansThai",
  devanagari: "NotoSansDevanagari",
  arabic: "NotoSansArabic",
  khmer: "NotoSansKhmer",
} as const;

// 커버리지 실측(2026-07-23): NotoSansKR=한글+기본 라틴(키릴·라틴 확장 없음),
// NotoSansCJKkr-Naming=한자 전용 서브셋(한글·라틴 없음), NotoSans=라틴 확장·키릴·그리스.
// 그래서 기본은 NotoSans, 한글은 NotoSansKR, 한자·가나는 CJK 서브셋으로 라우팅한다.
const SCRIPT_PATTERNS: Array<{ pattern: RegExp; font: string }> = [
  { pattern: /[가-힣ㄱ-ㆎᄀ-ᇿﾡ-ￜ]/, font: SCRIPT_FAMILY.hangul },
  { pattern: /[㐀-䶿一-鿿豈-﫿々〆〇ぁ-ゟ゠-ヿ]/, font: SCRIPT_FAMILY.cjk },
  { pattern: /[฀-๿]/, font: SCRIPT_FAMILY.thai },
  { pattern: /[ऀ-ॿ᳐-᳿꣠-ꣿ]/, font: SCRIPT_FAMILY.devanagari },
  { pattern: /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/, font: SCRIPT_FAMILY.arabic },
  { pattern: /[ក-៿᧠-᧿]/, font: SCRIPT_FAMILY.khmer },
];

// run에 붙여도 안전한 중립 문자(공백·기본 문장부호). 라틴·키릴 등 글자는 기본 폰트로 강제한다
// (예: 태국어 문장 속 "Kim" — 태국 폰트에는 라틴 글리프가 없을 수 있다).
const ATTACHABLE = /[\s.,·:;!?()[\]'"“”‘’\-–—/]/;

export type ScriptRunOptions = {
  /** 앱이 실제로 `Font.register`한 패밀리. 생략하면 전부 등록된 것으로 본다. */
  registeredFamilies?: readonly string[];
  /** 어디에도 해당하지 않는 문자에 쓸 폰트. */
  baseFamily?: string;
};

export function splitScriptRuns(text: string, options: ScriptRunOptions = {}) {
  const base = options.baseFamily ?? SCRIPT_FAMILY.base;
  const registered = options.registeredFamilies;
  // 등록되지 않은 패밀리로 보내면 그 글자만 깨진다. 기본 폰트가 그 문자를 덮지 못하더라도
  // 결과는 같으니, 적어도 앱이 아는 폰트로 넘긴다.
  const resolve = (font: string) =>
    !registered || registered.includes(font) ? font : base;

  const runs: Array<{ text: string; font: string }> = [];
  let pendingNeutral = "";
  const append = (chunk: string, font: string) => {
    const last = runs[runs.length - 1];
    if (last && last.font === font) last.text += chunk;
    else runs.push({ text: chunk, font });
  };

  for (const char of text) {
    const matched = SCRIPT_PATTERNS.find(({ pattern }) => pattern.test(char));
    if (!matched && ATTACHABLE.test(char)) {
      // 공백·문장부호는 잠시 보류했다가 다음 문자의 run에 붙인다(run 파편화 방지).
      pendingNeutral += char;
      continue;
    }
    const targetFont = matched ? resolve(matched.font) : base;
    const last = runs[runs.length - 1];
    if (pendingNeutral) {
      // 보류 문자는 같은 폰트가 이어지면 그 run에, 폰트가 바뀌면 기본 폰트 run으로 보낸다.
      if (last && last.font === targetFont) append(pendingNeutral, targetFont);
      else append(pendingNeutral, base);
      pendingNeutral = "";
    }
    append(char, targetFont);
  }
  if (pendingNeutral) {
    append(pendingNeutral, runs.length ? runs[runs.length - 1].font : base);
  }
  return runs;
}

/**
 * 혼합 문자 텍스트를 run별 폰트로 렌더한다.
 *
 * `style`의 `fontFamily`는 run 폰트가 덮어쓴다 — 폰트를 잘못 지정하면 글자가 깨지므로
 * 문자 체계 판별이 항상 이긴다.
 */
export function makeMixedText(options: ScriptRunOptions = {}) {
  return function MixedText({
    text,
    style,
  }: {
    text: string;
    style?: TextProps["style"];
  }) {
    const runs = splitScriptRuns(text, options);
    if (runs.length === 1) {
      // run 폰트가 style의 fontFamily보다 우선하도록 마지막에 둔다.
      return (
        <Text
          style={[
            ...(Array.isArray(style) ? style : style ? [style] : []),
            { fontFamily: runs[0].font },
          ]}
        >
          {text}
        </Text>
      );
    }
    return (
      <Text style={style}>
        {runs.map((run, index) => (
          <Text key={index} style={{ fontFamily: run.font }}>
            {run.text}
          </Text>
        ))}
      </Text>
    );
  };
}
