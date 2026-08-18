import type { BackTarget } from "@/components/GuideBackLink";
import { guideEntriesFor } from "@/lib/guide-index";
import { landingCopies } from "@/lib/i18n";
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
/**
 * 돌아갈 곳과, **그 서비스의 이름을 어느 사전 자리에서 읽을지.**
 *
 * 예전에는 `koLabel` 한 벌만 두고 그 밖의 언어에는 "Back to the service"를 썼다. 그때는
 * 안내 문서가 한국어판·영어판 둘뿐이라 앞뒤가 맞는 말이었다 — **그런데 문서가 23개 언어로
 * 나가게 되면서 그 전제가 없어졌다.** 본문은 일본어인데 돌아가기 단추만 영어인 상태가 남았고,
 * 근거로 적어 둔 주석이 그 상태를 정당해 보이게 했다(2026-08-09 발견).
 *
 * 서비스 이름은 `lib/i18n`의 `landingCopies`가 이미 23벌로 갖고 있다. 거기서 읽으면 새로
 * 번역할 것이 없고, **첫 화면의 카드에 적힌 이름과 어긋날 수도 없다.**
 */
type GuideOrigin = {
  /** 돌아갈 경로. 로케일은 `localePath`가 붙인다. */
  path: string;
  /** 함께 실어야 하는 쿼리(한글 발음 표기는 같은 경로의 다른 모드다). */
  query?: string;
  /** 이름을 읽어 올 서비스 슬러그. 첫 화면이 그 서비스를 부르는 이름과 같은 값이다. */
  copyKey: string;
};

const ORIGINS: Record<string, GuideOrigin> = {
  "hanja-meaning": { path: "/hanja-meaning", copyKey: "hanja-meaning" },
  "korean-to-global": { path: "/korean-to-global", copyKey: "korean-to-global" },
  "global-to-korean": { path: "/global-to-korean", copyKey: "global-to-korean" },
  "global-name-to-hangul": {
    path: "/global-to-korean",
    query: "mode=transliteration",
    // 같은 화면의 다른 모드라 **그 화면의 이름**으로 돌아간다. 모드 이름은 사전에 없고,
    // 여기서 한국어로 지어 두면 다시 21개 언어에서 그 자리만 한국어가 된다.
    copyKey: "global-to-korean",
  },
};

/**
 * 안내 문서에서 돌아가는 링크. 부른 화면이 있으면 그곳으로, 없으면 홈으로.
 *
 * `homeLabel`을 **받게** 한 것은 홈 이름만 사전에 없기 때문이다. 부르는 쪽에는 이미 그
 * 로케일의 문서가 있고 문서가 `backLabel`(「처음으로」)을 갖고 있으므로 넘기게 한다 — 여기에
 * 영어 기본값을 두면 그 값이 21개 언어에서 그대로 나가는 날이 온다.
 */
export function guideBackLink(locale: Locale, from: string | undefined, homeLabel: string) {
  const origin = from ? ORIGINS[from] : undefined;
  if (!origin) return { href: localePath("/", locale), label: homeLabel };

  return {
    href: localePath(origin.path, locale, origin.query),
    label: landingCopies[locale].services[origin.copyKey]?.title ?? homeLabel,
  };
}

/**
 * 안내 허브로 돌아가는 링크. 문서 → 허브 → 서비스로 두 번 눌러 나가는 길에서도 출처가
 * 이어지도록 `from`을 그대로 들고 간다. 여기서 걸러 두면 허브가 다시 검사할 필요가 없다.
 */
export function guideHubHref(locale: Locale, from?: string) {
  return localePath("/guide", locale, guideOriginQuery(from));
}

/**
 * **안내 허브로 돌아가는 후보를 한 벌 만들어 둔다** (2026-08-18).
 *
 * 문서 화면은 `?from=`을 서버에서 읽지 않는다 — 읽는 순간 그 화면이 정적 렌더링에서 빠지기
 * 때문이다. 대신 아는 출처마다 목적지를 미리 만들어 넘기고, 어느 것을 쓸지는 브라우저가
 * 정한다(`components/GuideBackLink.tsx`).
 *
 * 이름은 문서가 이미 갖고 있는 `backLabel`(「안내로」)이라 출처마다 다르지 않다. 그래서
 * 여기서는 주소만 갈린다.
 */
export function guideHubOrigins(locale: Locale, label: string): Record<string, BackTarget> {
  const origins: Record<string, BackTarget> = {};
  for (const from of Object.keys(ORIGINS)) {
    origins[from] = { href: guideHubHref(locale, from), label };
  }
  return origins;
}

/**
 * 허브 화면이 쓰는 후보. **여기서는 이름도 갈린다** — 돌아갈 곳이 서비스 화면이라 그 서비스
 * 이름이 단추에 적힌다. 사전을 브라우저로 들고 가지 않도록 **지금 로케일의 넷만** 만든다.
 */
export function guideServiceOrigins(locale: Locale, homeLabel: string): Record<string, BackTarget> {
  const origins: Record<string, BackTarget> = {};
  for (const from of Object.keys(ORIGINS)) {
    origins[from] = guideBackLink(locale, from, homeLabel);
  }
  return origins;
}

/**
 * 허브의 문서 카드 **순서표**. `from`마다 「기본 순서의 i번째 카드가 몇 번째로 가는지」다.
 *
 * 허브가 이 값을 한 번 만들어 넘기면 브라우저가 CSS `order`만 갈아 끼운다
 * (`components/GuideEntryOrder.tsx`). 갈래 판정은 여기 그대로 있고, 클라이언트로 옮기는 것은
 * **숫자뿐**이다 — 규칙이 두 곳에 생기지 않는다.
 */
export function guideEntryOrders(locale: Locale): Record<string, number[]> {
  const base = guideEntriesFor(undefined, locale);
  const orders: Record<string, number[]> = {};
  for (const from of Object.keys(ORIGINS)) {
    const ordered = guideEntriesFor(from, locale);
    orders[from] = base.map((entry) => ordered.findIndex((item) => item.slug === entry.slug));
  }
  return orders;
}

/** 허브가 문서 카드 링크에 실을 쿼리. 아는 값일 때만 붙인다. */
export function guideOriginQuery(from?: string) {
  return from && from in ORIGINS ? `from=${from}` : undefined;
}
