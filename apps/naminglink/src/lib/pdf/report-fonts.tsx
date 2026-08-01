import path from "node:path";
import React from "react";
import { Font } from "@react-pdf/renderer";
import { makeMixedText, SCRIPT_FAMILY } from "@naminglink/core/pdf/script-runs";

// 리포트 공용 폰트 등록과 다국어 혼합 텍스트 렌더링.
// react-pdf는 Text 하나에 폰트 하나만 허용하고 폰트 폴백이 없어, 한 문장에 여러 문자가
// 섞이면(예: 태국어 설명 속 한글 이름) 글리프가 깨진다. 문자 단위로 문자 체계를 판별해
// 이어지는 구간(run)마다 맞는 폰트를 지정하는 일은 `@naminglink/core/pdf/script-runs`가 한다.
//
// **판별 규칙을 이 파일에 복사해 두지 않는다.** 예전에는 같은 규칙이 여기에도 있었는데,
// 인연링크에서 고친 것이 이쪽에 오지 않아 결함이 한쪽에만 남았다(2026-08-01). 이 파일은
// "어떤 패밀리를 어떤 파일로 등록하는가"만 맡는다.
const fontPath = (file: string) => path.join(process.cwd(), "assets/fonts", file);

/**
 * 패밀리 → 서체 파일. **등록과 검증이 같은 표를 본다.**
 *
 * 목록을 따로 적어 두면 어긋난다 — 실제로 CJK 서브셋이 가나까지 덮는다고 적혀 있었지만
 * 그 서브셋에 가나가 없어 일본어 PDF가 통째로 깨져 있었다(2026-08-01 실측).
 * `scripts/verify-pdf-glyphs.ts`가 이 표를 읽어 23로케일 문구를 전수 대조한다.
 *
 * **폰트는 반드시 TTF/OTF로 둔다.** WOFF를 등록하면 @react-pdf가 임베드에 22초를 쓴다
 * (같은 폰트 TTF는 28ms). PDF 타임아웃의 실제 원인이었다.
 */
export const FONT_FILES: Record<string, Array<{ file: string; weight: number }>> = {
  [SCRIPT_FAMILY.hangul]: [
    { file: "NotoSansKR-400.ttf", weight: 400 },
    { file: "NotoSansKR-700.ttf", weight: 700 },
  ],
  // 한자 전용 서브셋이다. **가나는 없다** — 가나는 아래 kana 패밀리가 맡는다.
  [SCRIPT_FAMILY.cjk]: [{ file: "NotoSansCJKkr-Naming.otf", weight: 400 }],
  // 가나 + CJK·전각 문장부호 + 화살표(→). 라틴 자족에 없는 기호도 이 파일이 덮는다.
  [SCRIPT_FAMILY.kana]: [{ file: "NotoSansJP-Kana.ttf", weight: 400 }],
  // 커버리지 실측(2026-07-23): NotoSansKR=한글+기본 라틴(키릴·라틴 확장 없음),
  // NotoSans=라틴 확장·키릴·그리스. 그래서 기본은 NotoSans다.
  [SCRIPT_FAMILY.base]: [{ file: "NotoSans-Regular.ttf", weight: 400 }],
  [SCRIPT_FAMILY.thai]: [{ file: "NotoSansThai-Regular.ttf", weight: 400 }],
  [SCRIPT_FAMILY.devanagari]: [{ file: "NotoSansDevanagari-Regular.ttf", weight: 400 }],
  [SCRIPT_FAMILY.arabic]: [{ file: "NotoSansArabic-Regular.ttf", weight: 400 }],
  [SCRIPT_FAMILY.khmer]: [{ file: "NotoSansKhmer-Regular.ttf", weight: 400 }],
};

for (const [family, files] of Object.entries(FONT_FILES)) {
  Font.register({
    family,
    fonts: files.map(({ file, weight }) => ({ src: fontPath(file), fontWeight: weight })),
  });
}

// 표지·아트용 손글씨 서체. 문자 체계 라우팅과 무관하게 이름만 크게 쓰는 자리에 쓴다.
Font.register({
  family: "EastSeaDokdo",
  fonts: [{ src: fontPath("EastSeaDokdo-Regular.ttf"), fontWeight: 400 }],
});

const RawMixedText = makeMixedText({ registeredFamilies: Object.keys(FONT_FILES) });

/**
 * 문자 체계가 섞인 문자열을 구간별 폰트로 렌더한다.
 *
 * **여기서 `**` 표기를 걷어낸다.** 문구의 강조는 화면용 표기라 PDF에서는 뜻이 없고, 별표가
 * RTL 재정렬을 깨뜨리는 것도 확인됐다(인연링크에서 같은 처리를 한다).
 */
export function MixedText(props: React.ComponentProps<typeof RawMixedText>) {
  return <RawMixedText {...props} text={props.text.replace(/\*\*/g, "")} />;
}

export { SCRIPT_FAMILY };
