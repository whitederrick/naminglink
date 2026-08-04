import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/services";

/**
 * 안내 문서의 "돌아가기"가 가리킬 곳.
 *
 * **부른 화면으로 돌려보낸다.** 예전에는 로케일만 보고 정했다 — 한국어면 무조건 한자 의미
 * 매칭이었다. 그래서 글로벌 이름 변환 화면에서 안내를 열면 버튼에 "한자 의미 매칭"이 적히고,
 * 누르면 실제로 다른 서비스로 넘어갔다. 안내를 읽으러 잠깐 나온 사람이 입력하던 화면을 잃는다.
 *
 * 그래서 안내로 가는 링크에 `from=<서비스 slug>`를 실어 보내고, 여기서 그것을 되읽는다.
 * **아는 slug만 받는다** — 임의의 값이 오면 무시하고 로케일 기본값으로 떨어진다. 주소를
 * 그대로 링크로 삼지 않으므로 남이 만든 주소로 다른 곳에 보낼 수 없다.
 *
 * **`from`이 없으면 홈으로 보낸다.** 푸터·소개 화면에서도 안내로 들어오는데, 그때는 돌아갈
 * 서비스가 정해져 있지 않다. 아무 서비스나 하나 골라 두면 푸터에서 들어온 사람이 눌러 본 적
 * 없는 입력 화면으로 끌려간다.
 */
type GuideOrigin = {
  /** 돌아갈 경로. 로케일은 `localePath`가 붙인다. */
  path: string;
  /** 함께 실어야 하는 쿼리(한글 발음 표기는 같은 경로의 다른 모드다). */
  query?: string;
  /** 한국어 이용자에게 보일 이름. 그 밖의 언어는 문서가 영어판뿐이라 공통 문구를 쓴다. */
  koLabel: string;
};

const ORIGINS: Record<string, GuideOrigin> = {
  "hanja-meaning": { path: "/hanja-meaning", koLabel: "한자 의미 매칭" },
  "korean-to-global": { path: "/korean-to-global", koLabel: "글로벌 이름 변환" },
  "global-to-korean": { path: "/global-to-korean", koLabel: "한국 이름 변환" },
  "global-name-to-hangul": {
    path: "/global-to-korean",
    query: "mode=transliteration",
    koLabel: "한글 발음 표기",
  },
};

/** 부른 화면이 없을 때. 안내 문서는 홈에서도 푸터를 통해 들어올 수 있다. */
const HOME = { path: "/", koLabel: "홈", enLabel: "Home" };

/**
 * 안내 문서에서 돌아가는 링크. 부른 화면이 있으면 그곳으로, 없으면 홈으로.
 *
 * 그 밖의 언어에서 서비스 이름을 밝히지 않는 것은 문서가 한국어판·영어판 둘로만 갈리기
 * 때문이다(`lib/guide-index.ts`). 링크 문구만 23벌을 만들면 문서가 갈리는 방식과 어긋난다.
 */
export function guideBackLink(locale: Locale, from?: string) {
  const origin = from ? ORIGINS[from] : undefined;
  if (!origin) {
    return {
      href: localePath(HOME.path, locale),
      label: locale === "ko" ? HOME.koLabel : HOME.enLabel,
    };
  }

  return {
    href: localePath(origin.path, locale, origin.query),
    label: locale === "ko" ? origin.koLabel : "Back to the service",
  };
}

/**
 * 안내 허브로 돌아가는 링크. 문서 → 허브 → 서비스로 두 번 눌러 나가는 길에서도 출처가
 * 이어지도록 `from`을 그대로 들고 간다. 여기서 걸러 두면 허브가 다시 검사할 필요가 없다.
 */
export function guideHubHref(locale: Locale, from?: string) {
  return localePath("/guide", locale, guideOriginQuery(from));
}

/** 허브가 문서 카드 링크에 실을 쿼리. 아는 값일 때만 붙인다. */
export function guideOriginQuery(from?: string) {
  return from && from in ORIGINS ? `from=${from}` : undefined;
}
