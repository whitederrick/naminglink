import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

/**
 * 안내 문서의 "돌아가기"가 가리킬 곳.
 *
 * **부른 화면으로 돌려보낸다.** 예전에는 무조건 사주 궁합이었다. 인연의 결에서 안내를 열고
 * 돌아가기를 누르면 궁합 입력 화면으로 넘어가, 읽으러 잠깐 나온 사람이 쓰던 화면을 잃었다.
 *
 * 안내로 가는 링크에 `from=<메뉴>`를 실어 보내고 여기서 되읽는다. **아는 값만 받는다** —
 * 임의의 값이 오면 무시하고 기본값(궁합)으로 떨어진다. 주소를 그대로 링크로 삼지 않으므로
 * 남이 만든 주소로 다른 곳에 보낼 수 없다.
 *
 * **`from`이 없으면 홈으로 보낸다.** 푸터·소개 화면에서도 안내로 들어오는데, 그때는 돌아갈
 * 서비스가 정해져 있지 않다. 아무 화면이나 하나 골라 두면 푸터에서 들어온 사람이 눌러 본 적
 * 없는 입력 화면으로 끌려간다.
 */
type GuideOrigin = {
  path: string;
  koLabel: string;
  /** 문서가 한국어판·영어판 둘로만 갈리므로 그 밖의 언어는 전부 영어 문구를 쓴다. */
  enLabel: string;
};

const ORIGINS: Record<string, GuideOrigin> = {
  dream: {
    path: "/dream",
    koLabel: "꿈 해몽",
    enLabel: "Back to the dream reading",
  },
};

const HOME: GuideOrigin = { path: "/", koLabel: "홈", enLabel: "Home" };

export type GuideOriginKey = keyof typeof ORIGINS;

/** 안내 문서에서 돌아가는 링크. 부른 화면이 있으면 그곳으로, 없으면 홈으로. */
export function guideBackLink(locale: Locale, from?: string) {
  const origin = (from ? ORIGINS[from] : undefined) ?? HOME;

  return {
    href: localePath(origin.path, locale),
    label: locale === "ko" ? origin.koLabel : origin.enLabel,
  };
}

/**
 * 안내 허브로 돌아가는 링크. 문서 → 허브 → 서비스로 두 번 눌러 나가는 길에서도 출처가
 * 이어지도록 `from`을 그대로 들고 간다.
 */
// `locale`이 null이면 로케일 없는 주소가 된다 — 푸터가 한국어에서 접두사를 붙이지 않는다.
export function guideHubHref(locale: Locale | null, from?: string) {
  return localePath("/guide", locale, guideOriginQuery(from));
}

/** 허브가 문서 카드 링크에 실을 쿼리. 아는 값일 때만 붙인다. */
export function guideOriginQuery(from?: string) {
  return from && from in ORIGINS ? `from=${from}` : undefined;
}
