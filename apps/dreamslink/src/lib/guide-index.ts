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
 * ## `audience`를 `track`으로 바꾼 이유
 *
 * 예전 값은 `audience: "ko" | "global"`이었고, **언어와 대상 서비스를 겸하고** 있었다. 한국어로
 * 들어오면 상세 열두 편을, 그 밖의 언어로 들어오면 영어 요약 세 편만 봤다 — 문서가 23개
 * 언어로 번역되고 나면 그 거르기는 **일본어 이용자에게서 열두 편을 빼앗는 규칙**이 된다.
 *
 * 문서를 가르는 기준은 **언어가 아니라 무엇을 설명하는가**다(형제 앱에서 먼저 그렇게 고쳤다).
 *
 *     dictionary   상징 사전을 설명하는 글 — 사전 · 매칭 · 갈리는 뜻 · 갈래 · 못 찾을 때
 *     reading      꿈 풀이를 어떻게 읽어야 하는가 — 길흉 · 태몽 · 적는 법 · 하지 않는 것
 *     common       둘 모두에 해당 — 저장하지 않는 방식 · 유료 리포트
 *
 * 갈래는 **무엇을 먼저 보여 줄지**를 정할 뿐, 감추지 않는다. 어느 언어로 들어오든 열두 편을
 * 다 읽을 수 있어야 한다.
 *
 * ## 영어 요약 세 편은 상세판에 흡수했다
 *
 * `how-it-works`·`what-we-store`·`what-the-reports-contain`은 한국어 상세판의 영어 요약이었다.
 * 상세판이 23개 언어로 나가는 지금은 **같은 내용의 짧은 판**이 따로 있을 이유가 없다. 주소는
 * `next.config.ts`가 301로 넘긴다 — 사이트맵에 실려 색인된 주소라 그냥 지우면 404다.
 */
export type GuideTrack = "dictionary" | "reading" | "common";

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각. `doc-content`의 키는 `guide/<slug>`다. */
  slug: string;
  track: GuideTrack;
};

/** 허브에 놓이는 순서. 사전 → 매칭 → 읽는 법 → 태몽 → 우리 기준 → 개인정보 → 상품. */
export const guideEntries: GuideEntry[] = [
  { slug: "symbol-dictionary", track: "dictionary" },
  { slug: "how-matching-works", track: "dictionary" },
  { slug: "one-symbol-many-meanings", track: "dictionary" },
  { slug: "categories", track: "dictionary" },
  { slug: "not-found", track: "dictionary" },
  { slug: "how-to-write", track: "reading" },
  { slug: "good-and-bad", track: "reading" },
  { slug: "conception-dreams", track: "reading" },
  { slug: "no-ai", track: "reading" },
  { slug: "what-we-do-not-do", track: "reading" },
  { slug: "no-storage", track: "common" },
  { slug: "reports", track: "common" },
];

/** 그 문서의 `doc-content` 키. */
export function docKeyFor(entry: GuideEntry): DocKey {
  return `guide/${entry.slug}` as DocKey;
}

export function findGuideEntry(slug: string): GuideEntry | undefined {
  return guideEntries.find((entry) => entry.slug === slug);
}

/**
 * 서비스 슬러그 → 그 서비스가 속한 갈래.
 *
 * 이 앱은 서비스가 하나(`dream`)라 갈래를 나눌 일이 아직 드물다. 그래도 자리를 두는 것은
 * 형제 앱과 틀을 맞추기 위해서다 — 사전 화면에서 안내로 들어오는 길이 생기면 여기에 더한다.
 */
export function trackForService(slug: string | undefined): GuideTrack | null {
  switch (slug) {
    case "dream":
      return "reading";
    case "symbols":
      return "dictionary";
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

/** sitemap·robots가 쓰는 색인 경로. 문서를 더하면 저절로 따라온다. */
export const guidePaths = [
  "/guide",
  ...guideEntries.map((entry) => `/guide/${entry.slug}`),
];
