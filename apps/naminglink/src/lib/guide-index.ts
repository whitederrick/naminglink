import type { DocKey } from "@/lib/doc-content";
import type { Locale } from "@/lib/services";

/**
 * 안내 문서 목록.
 *
 * ## 여기 있는 것은 순서와 갈래뿐이다
 *
 * 제목·요약·꼬리표는 **`lib/doc-content`가 로케일별로** 갖는다. 예전에는 이 파일이 한국어
 * 제목을 들고 있었고, 그래서 본문을 23개 언어로 옮긴 뒤에도 **허브 목록만 한국어**로 남았다.
 * 값을 두 곳에 두면 한쪽만 번역되는 날이 온다.
 *
 * ## `audience`를 `track`으로 바꾼 이유 (2026-08-09)
 *
 * 예전 값은 `audience: "ko" | "global"`이었고, **언어와 대상 서비스를 겸하고** 있었다. 그래서
 * 한국어 이용자는 상세 10편을, 그 밖의 언어는 영어 요약 3편만 봤다 — 문서가 23개 언어로
 * 번역된 뒤에도 **일본어 이용자는 글로벌 문서를 영어로만** 볼 수 있었다.
 *
 * 문서를 가르는 기준은 **언어가 아니라 어느 서비스를 설명하는가**다(사용자 확인).
 *
 *     korean   한국어 대상 서비스 — 한자 의미 매칭 · 글로벌 이름 변환
 *     global   글로벌 대상 서비스 — 한국 이름 만들기 · 한글 발음 표기
 *     common   두 갈래 모두에 해당 — 우리 기준 · 유료 상품
 *
 * ## 갈래가 목록을 거른다 (2026-08-10에 바뀜)
 *
 * 처음에는 「갈래는 순서만 정하고 감추지 않는다 — 어느 언어로 들어오든 다 읽을 수 있어야
 * 한다」고 두었다. **그 전제가 틀렸다.** korean 갈래가 설명하는 서비스는 화면이 한국어뿐이라,
 * 러시아어 이용자가 그 안내를 끝까지 읽어도 **갈 수 있는 서비스가 없다.**
 *
 * 그래서 한국어 화면이 아니면 korean 갈래를 목록에 올리지 않는다. **주소는 살아 있다** —
 * 링크를 타고 들어오면 열린다(다만 한국어로, 주소도 한 벌이다 — `lib/korean-only-routes.ts`).
 */
export type GuideTrack = "korean" | "global" | "common";

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각. `doc-content`의 키는 `guide/<slug>`다. */
  slug: string;
  track: GuideTrack;
};

/**
 * 허브에 놓이는 순서다. 제도 → 목록 → 서비스 근거 → 우리 기준 → 상품.
 *
 * **`as const`인 이유:** 여기서 `KoreanOnlyDocKey`가 파생된다(아래). 갈래를 옮기면 자료형이
 * 따라 움직여, 그 문서를 22개 언어 파일에 남겨 둔 자리가 **tsc에서 바로 걸린다.** 목록을 손으로
 * 한 벌 더 적어 두면 언젠가 두 목록이 어긋난다.
 */
export const guideEntries = [
  { slug: "hanja-basics", track: "korean" },
  { slug: "hanja", track: "korean" },
  { slug: "reading", track: "korean" },
  { slug: "avoid", track: "korean" },
  { slug: "how-hanja-meaning", track: "korean" },
  { slug: "how-korean-to-global", track: "korean" },
  { slug: "how-global-to-korean", track: "global" },
  { slug: "how-hangul-transliteration", track: "global" },
  { slug: "what-we-dont-use", track: "common" },
  { slug: "what-we-sell", track: "common" },
] as const satisfies readonly GuideEntry[];

/** korean 갈래 문서의 `doc-content` 키. 한국어 파일에만 있고 나머지 22개 언어에는 없다. */
export type KoreanOnlyDocKey =
  `guide/${Extract<(typeof guideEntries)[number], { track: "korean" }>["slug"]}`;

/** 그 문서의 `doc-content` 키. */
export function docKeyFor(entry: GuideEntry): DocKey {
  return `guide/${entry.slug}` as DocKey;
}

export function findGuideEntry(slug: string) {
  return guideEntries.find((entry) => entry.slug === slug);
}

/**
 * 서비스 슬러그 → 그 서비스가 속한 갈래.
 *
 * 안내로 들어올 때 어느 화면에서 왔는지(`?from=`)를 받아, **그 서비스를 설명하는 문서를 먼저**
 * 놓는다. 모르는 값이면 갈래를 나누지 않고 순서대로 낸다.
 */
export function trackForService(slug: string | undefined): GuideTrack | null {
  switch (slug) {
    case "hanja-meaning":
    case "korean-to-global":
      return "korean";
    case "global-to-korean":
    case "global-name-to-hangul":
      return "global";
    default:
      return null;
  }
}

/**
 * 허브에 놓을 목록.
 *
 * **거른 다음 재배열한다.** 한국어 화면이 아니면 korean 갈래를 뺀다(그 서비스를 쓸 수 없다).
 * 그다음 온 곳을 알면 그 갈래를 먼저, 공통을 다음, 나머지를 뒤에 둔다.
 */
export function guideEntriesFor(
  fromService?: string,
  locale?: Locale,
): readonly GuideEntry[] {
  const visible =
    locale === undefined || locale === "ko"
      ? guideEntries
      : guideEntries.filter((entry) => entry.track !== "korean");

  const track = trackForService(fromService);
  if (!track) return visible;

  const weight = (entry: GuideEntry) =>
    entry.track === track ? 0 : entry.track === "common" ? 1 : 2;
  return [...visible].sort((a, b) => weight(a) - weight(b));
}
