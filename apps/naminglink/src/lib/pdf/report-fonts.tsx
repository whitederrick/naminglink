import path from "node:path";
import React from "react";
import { Font, Text, type TextProps } from "@react-pdf/renderer";

// 리포트 공용 폰트 등록과 다국어 혼합 텍스트 렌더링.
// react-pdf는 Text 하나에 폰트 하나만 허용하고 폰트 폴백이 없어, 한 문장에 여러 문자가
// 섞이면(예: 태국어 설명 속 한글 이름) 글리프가 깨진다. splitScriptRuns가 문자 단위로
// 문자 체계를 판별해 이어지는 구간(run)마다 맞는 폰트를 지정한다.
// 기본(라틴·키릴·숫자·문장부호)은 NotoSansCJKkr — 한글·한자·라틴·키릴을 모두 덮는다.
Font.register({
  family: "EastSeaDokdo",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/EastSeaDokdo-Regular.ttf"), fontWeight: 400 },
  ],
});
Font.register({
  family: "NotoSansThai",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansThai-Regular.ttf"), fontWeight: 400 },
  ],
});
Font.register({
  family: "NotoSansDevanagari",
  fonts: [
    {
      src: path.join(process.cwd(), "assets/fonts/NotoSansDevanagari-Regular.ttf"),
      fontWeight: 400,
    },
  ],
});
Font.register({
  family: "NotoSansArabic",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansArabic-Regular.ttf"), fontWeight: 400 },
  ],
});
Font.register({
  family: "NotoSansKhmer",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKhmer-Regular.ttf"), fontWeight: 400 },
  ],
});
Font.register({
  family: "NotoSans",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSans-Regular.ttf"), fontWeight: 400 },
  ],
});

// 커버리지 실측(2026-07-23): NotoSansKR=한글+기본 라틴(키릴·라틴 확장 없음),
// NotoSansCJKkr-Naming=한자 전용 서브셋(한글·라틴 없음), NotoSans=라틴 확장·키릴·그리스.
// 그래서 기본은 NotoSans, 한글은 NotoSansKR, 한자·가나는 CJK 서브셋으로 라우팅한다.
const BASE_FONT = "NotoSans";

const SCRIPT_FONTS: Array<{ pattern: RegExp; font: string }> = [
  { pattern: /[가-힣ㄱ-ㆎᄀ-ᇿﾡ-ￜ]/, font: "NotoSansKR" },
  { pattern: /[㐀-䶿一-鿿豈-﫿々〆〇ぁ-ゟ゠-ヿ]/, font: "NotoSansCJKkr" },
  { pattern: /[฀-๿]/, font: "NotoSansThai" },
  { pattern: /[ऀ-ॿ᳐-᳿꣠-ꣿ]/, font: "NotoSansDevanagari" },
  { pattern: /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/, font: "NotoSansArabic" },
  { pattern: /[ក-៿᧠-᧿]/, font: "NotoSansKhmer" },
];

function fontForChar(char: string) {
  for (const { pattern, font } of SCRIPT_FONTS) {
    if (pattern.test(char)) return font;
  }
  return null;
}

// run에 붙여도 안전한 중립 문자(공백·기본 문장부호). 라틴·키릴 등 글자는 기본 폰트로 강제한다
// (예: 태국어 문장 속 "Kim" — 태국 폰트에는 라틴 글리프가 없을 수 있다).
const ATTACHABLE = /[\s.,·:;!?()[\]'"“”‘’\-–—/]/;

export function splitScriptRuns(text: string) {
  const runs: Array<{ text: string; font: string }> = [];
  let pendingNeutral = "";
  const append = (chunk: string, font: string) => {
    const last = runs[runs.length - 1];
    if (last && last.font === font) last.text += chunk;
    else runs.push({ text: chunk, font });
  };
  for (const char of text) {
    const font = fontForChar(char);
    if (font === null && ATTACHABLE.test(char)) {
      // 공백·문장부호는 잠시 보류했다가 다음 문자의 run에 붙인다(run 파편화 방지).
      pendingNeutral += char;
      continue;
    }
    const targetFont = font ?? BASE_FONT;
    const last = runs[runs.length - 1];
    if (pendingNeutral) {
      // 보류 문자는 같은 폰트가 이어지면 그 run에, 폰트가 바뀌면 기본 폰트 run으로 보낸다.
      if (last && last.font === targetFont) append(pendingNeutral, targetFont);
      else append(pendingNeutral, BASE_FONT);
      pendingNeutral = "";
    }
    append(char, targetFont);
  }
  if (pendingNeutral) append(pendingNeutral, runs.length ? runs[runs.length - 1].font : BASE_FONT);
  return runs;
}

// 혼합 문자 텍스트를 run별 폰트로 렌더한다. style의 fontFamily는 run 폰트가 덮어쓴다.
export function MixedText({ text, style }: { text: string; style?: TextProps["style"] }) {
  const runs = splitScriptRuns(text);
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
}
