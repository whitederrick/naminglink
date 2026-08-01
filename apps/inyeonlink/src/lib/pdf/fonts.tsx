import path from "node:path";

import React from "react";
import { Font } from "@react-pdf/renderer";
import {
  makeMixedText,
  SCRIPT_FAMILY,
} from "@naminglink/core/pdf/script-runs";

import type { Locale } from "@/lib/i18n";

// 리포트가 나가는 문자 체계를 **전부** 등록한다.
//
// **한동안 한글·한자·라틴 셋만 등록돼 있었다.** 화면 문구가 ko·en뿐이던 시절의 설정인데,
// 사전이 23로케일로 늘어난 뒤에도 그대로 남아 태국어·힌디어 리포트가 통째로 깨진 채
// 만들어지고 있었다(2026-07-31 실측). 숫자와 표 정렬은 멀쩡해서 텍스트만 봐서는 드러나지
// 않는다 — **PDF는 PNG로 렌더해서 봐야 한다**(`scripts/render-report-scripts.tsx`).
//
// 서체 파일은 이미 이 앱에 있었다(공유 썸네일 작업 때 들어왔다). 빠진 것은 등록뿐이었다.
//
// **폰트는 반드시 TTF/OTF로 둔다.** WOFF를 등록하면 @react-pdf가 임베드에 22초를 쓴다
// (같은 폰트 TTF는 28ms). naminglink에서 PDF 타임아웃의 원인이었다.
//
// 경로가 `process.cwd()` 기준인 것과 폰트를 앱 안에 두는 것은 한 세트다. Next.js가 배포
// 산출물에 넣어 주려면 `next.config.ts`의 `outputFileTracingIncludes`에도 같은 경로가
// 적혀 있어야 한다 — 둘 중 하나만 고치면 운영에서만 폰트를 못 찾는다.
const fontPath = (file: string) =>
  path.join(process.cwd(), "assets/fonts", file);

/**
 * 패밀리 → 서체 파일. **등록과 검증이 같은 표를 본다.**
 *
 * 목록을 따로 적어 두면 어긋난다 — 실제로 `SCRIPT_FAMILY.cjk`가 가나까지 덮는다고 적혀
 * 있었지만 그 서브셋에 가나가 없어 일본어 리포트가 통째로 깨져 있었다(2026-08-01 실측).
 * `scripts/verify-pdf-glyphs.ts`가 이 표를 읽어 23로케일 문구를 전수 대조한다.
 *
 */
export const FONT_FILES: Record<string, Array<{ file: string; weight: number }>> = {
  [SCRIPT_FAMILY.hangul]: [
    { file: "NotoSansKR-400.ttf", weight: 400 },
    { file: "NotoSansKR-700.ttf", weight: 700 },
  ],
  // 한자 전용 서브셋이다. **가나는 없다** — 가나는 아래 kana 패밀리가 맡는다.
  [SCRIPT_FAMILY.cjk]: [{ file: "NotoSansCJKkr-Naming.otf", weight: 400 }],
  [SCRIPT_FAMILY.kana]: [{ file: "NotoSansJP-Kana.ttf", weight: 400 }],
  // 라틴 외에 **키릴(ru·kk·mn)과 라틴 확장(tr·pl·vi·uz)도 이 파일이 덮는다.** Noto Sans의
  // 기본 자족에 들어 있어 따로 등록할 것이 없다.
  [SCRIPT_FAMILY.base]: [{ file: "NotoSans-Regular.ttf", weight: 400 }],
  // 아래 둘은 기본 자족에 글리프가 없어 각자 등록해야 한다. 등록하지 않으면 `MixedText`가
  // 기본 폰트로 되돌리는데, 거기에도 글리프가 없어 결국 빈 네모나 엉뚱한 라틴 글자가 찍힌다.
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

// **아랍어·크메르어는 등록하되, 문서 언어로는 쓰지 않는다.** 둘을 가르는 이유가 있다.
//
// 등록한 채로 그 언어의 **문단**을 렌더하면 `@react-pdf/textkit`이 죽는다(2026-07-31 규명).
//
//   ar  `reorderLine`(양방향 재정렬)에서 터진다. **줄바꿈이 일어나는 아랍어 문단이면
//       무조건이다.** 한 줄에 들어가는 짧은 문자열은 살아남지만, 문단이 두 줄이 되는 순간
//       무엇을 해도 안 된다(RLM을 붙여도, 한자를 빼도 마찬가지).
//   km  `xCoordinate`가 null이 된다(결합 문자 셰이핑).
//
// **우리 코드가 아니다.** `@react-pdf/renderer`는 이미 최신(4.5.1)이라 올릴 버전도 없다.
// 그래서 이 두 로케일의 **문서는 영어로 낸다**(`pdfLocale`). 화면은 그대로 아랍어·크메르어고
// PDF만 영어이며, 결제 화면에서 미리 고지한다.
//
// 그러면 서체는 왜 등록하는가 — **이름은 여전히 그 문자로 들어오기 때문이다.** 문서가 영어로
// 바뀌어도 이용자가 적은 이름은 아랍 문자 그대로다. 등록하지 않았을 때 그 이름은 내장
// Helvetica로 되돌아가 `)JFJ5D'` 같은 엉뚱한 라틴 글자로 찍혔다 — 돈을 받고 파는 문서에
// 사는 사람의 이름이 깨져 나가고 있었다(2026-08-01 실측으로 드러남).
//
// 이름은 24자 상한이고(`match-input.ts`), 24자 아랍어 이름을 영어 문서에 넣어 두 상품 모두
// 정상 렌더되는 것을 확인했다. 죽는 것은 문단이지 이름이 아니다.

// @react-pdf는 기본 하이픈 규칙으로 **단어를 아무 데서나 끊는다.** 하이픈도 없이 "characters"가
// "c / haracters"로 갈리는 식이라, 영어 문단이 길어지면 눈에 띄게 지저분해진다. 단어를 쪼개지
// 않겠다고 알려 준다(naminglink의 PDF 넷은 이미 같은 처리를 하고 있다).
Font.registerHyphenationCallback((word) => [word]);

// **`Font.register`와 이 목록은 한 세트다.** 등록만 하고 여기에 안 적으면 `MixedText`가
// 그 문자 체계를 기본 폰트로 되돌려 등록한 보람이 없다 — 그래서 같은 표에서 뽑는다.
const REGISTERED = Object.keys(FONT_FILES);

const RawMixedText = makeMixedText({ registeredFamilies: REGISTERED });

/**
 * 문자 체계가 섞인 문자열을 구간별 폰트로 렌더한다.
 *
 * 등록하지 않은 문자 체계가 들어와도 기본 폰트로 되돌려 참조 자체는 깨지지 않는다. 다만
 * 기본 폰트에 글리프가 없으면 결국 엉뚱한 글자가 찍히므로, 새 로케일을 더할 때는 **문자
 * 체계가 위 표에 있는지 반드시 확인할 것** — `scripts/verify-pdf-glyphs.ts`가 잡아 준다.
 *
 * **여기서 `**` 표기를 걷어낸다.** 사전 문구의 강조는 화면용 표기라 PDF에서는 뜻이 없다.
 * 리포트 곳곳에서 `plain()`으로 걷어내고 있었지만 **호출하는 자리에서만** 걸렸다 — 143곳을
 * 일일이 감싸는 대신 모두가 지나가는 이 자리에서 한 번 처리한다. 새 문구를 추가할 때
 * 별표를 빠뜨려도 안전하다.
 *
 * (아랍어 조사 중에 별표가 RTL 재정렬을 깨뜨리는 것을 발견해 여기로 올렸다. 다만 별표를
 * 걷어내도 **줄바꿈이 일어나는 아랍어 문단은 여전히 죽는다** — 위 주석 참고.)
 */
export function MixedText(props: React.ComponentProps<typeof RawMixedText>) {
  return <RawMixedText {...props} text={props.text.replace(/\*\*/g, "")} />;
}

export { SCRIPT_FAMILY };

/**
 * PDF를 어느 언어로 낼 것인가.
 *
 * 보통은 화면과 같은 언어다. **아랍어·크메르어만 영어로 낸다** — 위 주석대로 그 언어의
 * 문단은 라이브러리가 렌더하다 죽어서, 화면 언어 그대로 내면 이용자가 결제하고도 파일을
 * 못 받는다. (서체는 등록돼 있으므로 **이름은 제 문자로 찍힌다.**)
 *
 * 화면은 건드리지 않는다. 이 함수는 **PDF를 만들 때만** 부른다.
 *
 * 라이브러리가 고쳐지면 이 목록을 비우는 것으로 되돌린다 — 그래서 판단을 함수 하나에
 * 가둬 두었다. 지금은 `report/pdf` 라우트 한 곳이 부른다.
 */
const PDF_FALLBACK_TO_EN = new Set<string>(["ar", "km"]);

export function pdfLocale(locale: Locale): Locale {
  return PDF_FALLBACK_TO_EN.has(locale) ? "en" : locale;
}

/** 이 화면 언어의 PDF가 다른 언어로 나가는가. 구매 화면의 고지 문구를 켜는 데 쓴다. */
export function pdfLanguageDiffers(locale: Locale): boolean {
  return PDF_FALLBACK_TO_EN.has(locale);
}
