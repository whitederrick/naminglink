import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  /**
   * PDF 렌더러의 `Image`는 **HTML `img`가 아니다.** `@react-pdf/renderer`의 그리기 요소이고
   * PDF에는 대체 텍스트라는 개념이 없다 — `alt`를 넣어도 아무 데도 쓰이지 않는다.
   *
   * `eslint-config-next`가 `Image`를 next/image로 보고 `img`에 매핑하기 때문에 생기는 오탐이다.
   * 줄마다 `eslint-disable`을 다는 대신 **이 디렉터리에만** 규칙을 끈다 — 화면 쪽 `img`의
   * `alt` 누락은 계속 잡혀야 한다.
   */
  {
    files: ["src/lib/pdf/**/*.tsx"],
    rules: { "jsx-a11y/alt-text": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
