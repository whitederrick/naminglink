import type { BackTarget } from "@/components/GuideBackLink";
import { guideEntriesFor } from "@/lib/guide-index";
import { getDictionary, type Dictionary, type Locale } from "@/lib/i18n";
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
/**
 * 돌아갈 곳과, **그 화면의 이름을 어느 사전 자리에서 읽을지.**
 *
 * 예전에는 여기에 `koLabel`·`enLabel` 두 벌이 박혀 있었다. 문서가 한국어판·영어판 둘뿐일
 * 때는 맞는 말이었지만, 본문이 23개 언어로 나가는 지금은 **문서만 그 언어이고 돌아가기
 * 단추만 영어**가 된다. 서비스 이름은 이미 로케일 사전이 23벌로 갖고 있으므로 거기서 읽는다 —
 * 새로 번역할 것이 없고, 메뉴에 적힌 이름과 어긋날 수도 없다.
 */
type GuideOrigin = {
  path: string;
  label: (dictionary: Dictionary) => string;
};

/**
 * **표는 `Map` 이다 — 「아는 slug」에 물려받은 이름이 섞이면 안 된다** (2026-08-20).
 *
 * 객체 리터럴에 `ORIGINS[from]` · `from in ORIGINS` 로 물으면 **프로토타입에서 물려받은
 * 이름까지 찾는다.** `from=toString` 이 참이 되고, 그 값은 함수라 `origin.path` 가
 * `undefined` 인 채 `localePath` 로 들어가 죽는다.
 *
 * 같은 결함이 naminglink `lib/stamp-back.ts` 에서 **실제로 HTTP 500 으로 재현됐다**(재검증
 * P1). 여기는 지금 호출부가 `from` 을 넘기지 않아 닿지 않지만, 닿게 하는 것은 한 줄이다.
 * 「지금은 안전」에 기대지 않고 갈래 자체를 없앤다 — `Map` 에는 물려받는 이름이 없다.
 */
const ORIGINS = new Map<string, GuideOrigin>([
  ["compatibility", { path: "/compatibility", label: (d) => d.landing.cta }],
  ["affinity", { path: "/affinity", label: (d) => d.affinity.menu }],
]);

/**
 * 안내 문서에서 돌아가는 링크. 부른 화면이 있으면 그곳으로, 없으면 홈으로.
 *
 * `homeLabel`을 **받게** 한 것은 홈 이름만 사전에 없기 때문이다. 부르는 쪽에는 이미 그 로케일의
 * 문서가 있고 문서가 `backLabel`(「처음으로」)을 갖고 있으므로, 여기서 영어 기본값을 두는 대신
 * 넘기게 한다 — 기본값을 두면 그 값이 23개 언어에서 그대로 나가는 날이 온다.
 */
export function guideBackLink(locale: Locale, from: string | undefined, homeLabel: string) {
  const origin = from ? ORIGINS.get(from) : undefined;
  if (!origin) return { href: localePath("/", locale), label: homeLabel };

  return {
    href: localePath(origin.path, locale),
    label: origin.label(getDictionary(locale)),
  };
}

/**
 * 안내 허브로 돌아가는 링크. 문서 → 허브 → 서비스로 두 번 눌러 나가는 길에서도 출처가
 * 이어지도록 `from`을 그대로 들고 간다.
 */
export function guideHubHref(locale: Locale, from?: string) {
  return localePath("/guide", locale, guideOriginQuery(from));
}

/** 허브가 문서 카드 링크에 실을 쿼리. 아는 값일 때만 붙인다. */
export function guideOriginQuery(from?: string) {
  return from && ORIGINS.has(from) ? `from=${from}` : undefined;
}

/**
 * **안내 허브로 돌아가는 후보를 한 벌 만들어 둔다** (2026-08-19).
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
  for (const from of ORIGINS.keys()) {
    origins[from] = { href: guideHubHref(locale, from), label };
  }
  return origins;
}

/**
 * 허브 화면이 쓰는 후보. **여기서는 이름도 갈린다** — 돌아갈 곳이 서비스 화면이라 그 서비스
 * 이름이 단추에 적힌다. 사전을 브라우저로 들고 가지 않도록 **지금 로케일의 것만** 만든다.
 */
export function guideServiceOrigins(locale: Locale, homeLabel: string): Record<string, BackTarget> {
  const origins: Record<string, BackTarget> = {};
  for (const from of ORIGINS.keys()) {
    origins[from] = guideBackLink(locale, from, homeLabel);
  }
  return origins;
}

/**
 * 허브의 문서 카드 **순서표**. `from`마다 「기본 순서의 i번째 카드가 몇 번째로 가는지」다.
 *
 * 허브가 이 값을 한 번 만들어 넘기면 브라우저가 CSS `order`만 갈아 끼운다
 * (`components/GuideEntryOrder.tsx`). 갈래 판정은 `guide-index.ts`에 그대로 있고, 클라이언트로
 * 옮기는 것은 **숫자뿐**이다 — 규칙이 두 곳에 생기지 않는다.
 */
export function guideEntryOrders(): Record<string, number[]> {
  const base = guideEntriesFor(undefined);
  const orders: Record<string, number[]> = {};
  for (const from of ORIGINS.keys()) {
    const ordered = guideEntriesFor(from);
    orders[from] = base.map((entry) => ordered.findIndex((item) => item.slug === entry.slug));
  }
  return orders;
}
