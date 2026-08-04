import Link from "next/link";

import { guideHubHref } from "@/lib/guide-back";
import type { Locale } from "@/lib/i18n";

/**
 * 안내 문서로 가는 링크.
 *
 * **문구를 사전(`i18n.ts`)에 넣지 않았다.** 안내 문서 자체가 한국어판과 영어판 둘로만 갈리므로
 * (`lib/guide-index.ts`의 audience), 링크 문구만 23벌을 만들면 이탈리아어 링크를 눌러 영어
 * 문서가 나오는 꼴이 된다. 문서가 갈리는 방식과 링크가 갈리는 방식을 같게 둔다.
 */
const LABELS = {
  ko: { short: "계산 근거", long: "무엇을 근거로 계산하는지 보기" },
  global: { short: "How this works", long: "See what the number is based on" },
} as const;

export function guideLinkLabel(locale: Locale, variant: "short" | "long") {
  return (locale === "ko" ? LABELS.ko : LABELS.global)[variant];
}

/**
 * 본문 안에 한 줄로 놓는 형태. 입력 화면과 결과 화면이 쓴다.
 *
 * `align`: 입력 화면에서는 설명 문구 바로 아래에 붙으므로 왼쪽에 맞춘다(`start`). 가운데로 두면
 * 왼쪽 정렬된 설명 밑에 혼자 떠 있는 것처럼 보인다. 결과 화면은 앞뒤가 카드라 가운데가 맞다.
 */
export function GuideLink({
  locale,
  from,
  align = "center",
  className = "",
}: {
  locale: Locale;
  /**
   * 어느 메뉴에서 여는가. 안내 화면의 "돌아가기"가 이 값으로 돌아갈 곳을 정한다
   * (`lib/guide-back.ts`) — 없으면 홈으로 간다.
   */
  from: "compatibility" | "affinity";
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <p className={`text-sm ${align === "start" ? "text-start" : "text-center"} ${className}`}>
      <Link
        href={guideHubHref(locale, from)}
        className="font-semibold text-brand-plum underline underline-offset-4 hover:opacity-80"
      >
        {guideLinkLabel(locale, "long")}
      </Link>
    </p>
  );
}
