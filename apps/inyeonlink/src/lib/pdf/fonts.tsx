import path from "node:path";

import { Font } from "@react-pdf/renderer";
import {
  makeMixedText,
  SCRIPT_FAMILY,
} from "@naminglink/core/pdf/script-runs";

// 리포트가 나가는 문자 체계를 등록한다. **아랍어·크메르어만 빠져 있다**(아래 사연 참고).
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

Font.register({
  family: SCRIPT_FAMILY.hangul,
  fonts: [
    { src: fontPath("NotoSansKR-400.ttf"), fontWeight: 400 },
    { src: fontPath("NotoSansKR-700.ttf"), fontWeight: 700 },
  ],
});

Font.register({
  family: SCRIPT_FAMILY.cjk,
  fonts: [{ src: fontPath("NotoSansCJKkr-Naming.otf"), fontWeight: 400 }],
});

// 라틴 외에 **키릴(ru·kk·mn)과 라틴 확장(tr·pl·vi·uz)도 이 파일이 덮는다.** Noto Sans의
// 기본 자족에 들어 있어 따로 등록할 것이 없다.
Font.register({
  family: SCRIPT_FAMILY.base,
  fonts: [{ src: fontPath("NotoSans-Regular.ttf"), fontWeight: 400 }],
});

// 아래 넷은 기본 자족에 글리프가 없어 각자 등록해야 한다. 등록하지 않으면 `MixedText`가
// 기본 폰트로 되돌리는데, 거기에도 글리프가 없어 결국 빈 네모나 엉뚱한 라틴 글자가 찍힌다.
Font.register({
  family: SCRIPT_FAMILY.thai,
  fonts: [{ src: fontPath("NotoSansThai-Regular.ttf"), fontWeight: 400 }],
});

Font.register({
  family: SCRIPT_FAMILY.devanagari,
  fonts: [{ src: fontPath("NotoSansDevanagari-Regular.ttf"), fontWeight: 400 }],
});

// **아랍어와 크메르어는 일부러 등록하지 않는다.** 파일은 `assets/fonts/`에 있다.
//
// 등록하면 `@react-pdf/textkit`이 렌더 도중 죽는다(2026-07-31 실측).
//   ar  reorderLine에서 `Cannot read properties of undefined (reading 'id')` — 양방향 재정렬
//   km  `Cannot read properties of null (reading 'xCoordinate')` — 크메르 결합 문자 셰이핑
// 우리 코드가 아니라 라이브러리 쪽 한계다. 등록을 빼면 예전처럼 글리프 없이 렌더되고,
// 등록하면 **PDF가 아예 안 나온다** — 결제까지 끝낸 이용자에게는 후자가 더 나쁘다.
//
// 어느 쪽이든 이 두 로케일에 유료 리포트를 팔 수 없다는 뜻이다. 해외 판매를 켜기 전에
// 해결해야 하고, 그때까지는 이 두 로케일의 구매를 막는 편이 옳다.
// 되살리려면 라이브러리를 올리거나 문자 체계별로 렌더를 갈라야 한다.

// @react-pdf는 기본 하이픈 규칙으로 **단어를 아무 데서나 끊는다.** 하이픈도 없이 "characters"가
// "c / haracters"로 갈리는 식이라, 영어 문단이 길어지면 눈에 띄게 지저분해진다. 단어를 쪼개지
// 않겠다고 알려 준다(naminglink의 PDF 넷은 이미 같은 처리를 하고 있다).
Font.registerHyphenationCallback((word) => [word]);

// **`Font.register`와 이 목록은 한 세트다.** 등록만 하고 여기에 안 적으면 `MixedText`가
// 그 문자 체계를 기본 폰트로 되돌려 등록한 보람이 없다.
const REGISTERED = [
  SCRIPT_FAMILY.hangul,
  SCRIPT_FAMILY.cjk,
  SCRIPT_FAMILY.base,
  SCRIPT_FAMILY.thai,
  SCRIPT_FAMILY.devanagari,
  // arabic·khmer는 위 주석대로 등록하지 않는다. 여기 적으면 없는 폰트를 가리킨다.
] as const;

/**
 * 문자 체계가 섞인 문자열을 구간별 폰트로 렌더한다.
 *
 * 등록하지 않은 문자 체계가 들어와도 기본 폰트로 되돌려 참조 자체는 깨지지 않는다. 다만
 * 기본 폰트에 글리프가 없으면 화면에는 결국 안 나오므로, 새 로케일을 더할 때는 **문자
 * 체계가 위 목록에 있는지 반드시 확인할 것.**
 */
export const MixedText = makeMixedText({ registeredFamilies: REGISTERED });

export { SCRIPT_FAMILY };
