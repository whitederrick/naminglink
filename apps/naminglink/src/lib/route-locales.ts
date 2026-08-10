import { guideEntries } from "@/lib/guide-index";

/**
 * **한국어 이용자만 쓸 수 있는 화면.** 여기 있는 경로는 로케일 주소를 갖지 않는다.
 *
 * ## 왜 이 목록이 생겼나 (2026-08-10)
 *
 * 이 서비스는 두 갈래다.
 *
 *     한국어 전용   한글 이름 → 한자 매핑 · 한글 이름 → 글로벌 이름
 *     글로벌 전용   글로벌 이름 → 한글 발음 · 글로벌 이름 → 한글 이름
 *
 * 한국어 전용 서비스는 화면이 한국어뿐이다(`serviceType`이 `GLOBAL_TO_KOREAN`일 때만 번역한다).
 * 그런데 주소는 23개 로케일로 전부 열려 있었고, canonical과 hreflang이 **「이 글은 각자 색인되는
 * 언어판이 24벌 있다」**고 선언하고 있었다. 한 벌짜리 화면에 대한 거짓 선언이다.
 *
 * 대가는 실제로 치렀다 — 서치 콘솔이 `/{언어}/guide/hanja/{초성}` 등을 「중복 페이지, 구글에서
 * 사용자와 다른 표준을 선택함」으로 잡았고, 552개 중 460개가 색인에서 빠졌으며, 애드센스가
 * 사이트 전체를 **「가치가 별로 없는 콘텐츠」**로 판정했다.
 *
 * ## 왜 「번역하면 된다」가 답이 아닌가
 *
 * 러시아어로 옮겨 놓아도 **그 사람이 쓸 수 있는 서비스가 없다.** 읽고 나서 갈 곳이 없는 문서를
 * 22개 언어로 늘리는 것은 가치를 만드는 일이 아니라 색인만 부풀리는 일이다(사용자 판단).
 *
 * ## 무엇이 달라지나
 *
 * · 로케일 붙은 주소는 로케일 없는 주소로 **301** — `proxy.ts`
 * · canonical 한 벌, hreflang 없음 — `lib/seo.ts`가 이 목록을 보고 **자동으로** 정한다
 * · sitemap에 로케일 변형을 싣지 않는다 — `app/sitemap.ts`
 * · 안내 허브는 한국어 화면에서만 이 문서들을 목록에 올린다 — `lib/guide-index.ts`
 *
 * 이 목록은 **손으로 적지 않는다.** 안내 문서는 `guideEntries`의 `track`에서 오고, 서비스는
 * `trackForService`와 같은 갈래를 쓴다. 갈래를 옮기면 색인·주소·목록이 함께 따라온다.
 */
const KOREAN_ONLY_SERVICE_PATHS = ["/hanja-meaning", "/korean-to-global"];

const KOREAN_ONLY_GUIDE_PATHS = guideEntries
  .filter((entry) => entry.track === "korean")
  .map((entry) => `/guide/${entry.slug}`);

export const KOREAN_ONLY_PATHS: string[] = [
  ...KOREAN_ONLY_SERVICE_PATHS,
  ...KOREAN_ONLY_GUIDE_PATHS,
];

/**
 * **반대쪽 — 한국어를 두지 않는 화면.**
 *
 * 글로벌 전용 서비스의 화면(랜딩·입력·결과)은 한국 이름이 없는 사람을 위한 것이다. 여기에
 * 한국어판이 공개돼 있으면 곤란하다는 것이 사용자 방침이다(2026-08-10) — 운영자가 원문을
 * 확인할 자리는 **관리자 화면**이지 공개 주소가 아니다.
 *
 * 그래서 이 경로들에서는 ko를 **주소로도 강제로도** 열 수 없다:
 *
 *     /ko/global-to-korean       → 301 → /en/global-to-korean
 *     /global-to-korean?lang=ko  → en 으로 그린다
 *     접속 국가가 KR             → en 으로 떨어진다
 *     hreflang · sitemap         → ko 없음
 *
 * **안내 문서는 여기 넣지 않는다.** 글로벌 서비스를 설명하는 글을 한국인이 읽는 것은 막을
 * 이유가 없다 — 막히는 것은 서비스 화면이다.
 *
 * `global-name-to-hangul`은 별도 주소가 아니라 **이 화면의 한 모드**라 목록에 없다.
 * 목록이 `serviceType === "GLOBAL_TO_KOREAN"`과 어긋나면 `verify-route-locales.mjs`가 잡는다 —
 * `services.ts`를 여기서 import 하지 않는 것은 이 파일이 **미들웨어에 실리기 때문**이다.
 */
export const GLOBAL_ONLY_PATHS: string[] = ["/global-to-korean"];

/**
 * 그 경로가 한국어 전용인가.
 *
 * 하위 경로까지 본다 — `/guide/hanja`의 초성 목록(`/guide/hanja/sa`)이 그것이다. 다만 **경계를
 * `/`로 끊는다**: 그러지 않으면 `/guide/hanja-basics`가 `/guide/hanja`의 하위로 잘못 걸린다.
 */
function matches(pathname: string, bases: string[]): boolean {
  /**
   * **쿼리와 해시를 먼저 뗀다** (2026-08-10에 실측으로 드러남).
   *
   * `lib/seo.ts`는 `hreflangMap("/global-to-korean?mode=transliteration")`처럼 **쿼리가 붙은
   * 문자열**을 넘긴다(발음 표기 흐름). 그것을 그대로 견주면 어느 목록과도 안 맞아 **글로벌
   * 전용이 아닌 것으로 판정**되고, 그러면 hreflang에 한국어판이 실린다 — 그 주소는 301이라
   * **없는 언어판을 선언하는 꼴**이 된다. 구글은 그런 쌍을 무시한다.
   *
   * 끝 슬래시도 함께 떼어 `/a`와 `/a/`가 갈리지 않게 한다.
   */
  const bare = pathname.split(/[?#]/)[0] ?? pathname;
  const path = bare !== "/" && bare.endsWith("/") ? bare.slice(0, -1) : bare;
  return bases.some((base) => path === base || path.startsWith(`${base}/`));
}

export function isKoreanOnlyPath(pathname: string): boolean {
  return matches(pathname, KOREAN_ONLY_PATHS);
}

/** 하위 경로까지 본다 — 결과 화면(`/global-to-korean/result`)도 같은 규칙이다. */
export function isGlobalOnlyPath(pathname: string): boolean {
  return matches(pathname, GLOBAL_ONLY_PATHS);
}
