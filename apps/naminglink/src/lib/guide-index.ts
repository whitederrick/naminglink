import type { DocKey } from "@/lib/doc-content";

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
 * 갈래는 **무엇을 먼저 보여 줄지**를 정할 뿐, 감추지 않는다. 어느 언어로 들어오든 열세 편을
 * 다 읽을 수 있어야 한다 — 한국인이 글로벌 서비스가 궁금할 수도 있고 그 반대도 마찬가지다.
 */
export type GuideTrack = "korean" | "global" | "common";

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각. `doc-content`의 키는 `guide/<slug>`다. */
  slug: string;
  track: GuideTrack;
};

/** 허브에 놓이는 순서다. 제도 → 목록 → 서비스 근거 → 우리 기준 → 상품. */
export const guideEntries: GuideEntry[] = [
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
];

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
 * 허브에 놓을 순서. **거르지 않고 재배열만 한다.**
 *
 * 온 곳을 알면 그 갈래를 먼저, 공통을 다음, 나머지를 뒤에 둔다. 모르면 선언된 순서 그대로다.
 */
export function guideEntriesFor(fromService?: string): GuideEntry[] {
  const track = trackForService(fromService);
  if (!track) return guideEntries;

  const weight = (entry: GuideEntry) =>
    entry.track === track ? 0 : entry.track === "common" ? 1 : 2;
  return [...guideEntries].sort((a, b) => weight(a) - weight(b));
}
