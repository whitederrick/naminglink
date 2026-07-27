import path from "node:path";

import { Font } from "@react-pdf/renderer";
import {
  makeMixedText,
  SCRIPT_FAMILY,
} from "@naminglink/core/pdf/script-runs";

// 이 앱이 실제로 가진 폰트만 등록한다. 화면 문구가 ko·en뿐이라 한글·한자·라틴 셋이면 된다.
// 21개 로케일 번역을 채울 때 태국어·아랍어·데바나가리·크메르를 여기에 더한다
// (naminglink에 이미 있는 파일을 복사하면 된다 — assets/fonts/LICENSES.md 참고).
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

Font.register({
  family: SCRIPT_FAMILY.base,
  fonts: [{ src: fontPath("NotoSans-Regular.ttf"), fontWeight: 400 }],
});

const REGISTERED = [
  SCRIPT_FAMILY.hangul,
  SCRIPT_FAMILY.cjk,
  SCRIPT_FAMILY.base,
] as const;

/**
 * 문자 체계가 섞인 문자열을 구간별 폰트로 렌더한다.
 *
 * 등록하지 않은 문자 체계(태국어 등)가 들어와도 기본 폰트로 되돌려 깨진 채로 두지 않는다.
 * 어차피 기본 폰트에도 글리프가 없으면 결과는 같지만, 적어도 등록된 폰트만 참조하게 된다.
 */
export const MixedText = makeMixedText({ registeredFamilies: REGISTERED });

export { SCRIPT_FAMILY };
