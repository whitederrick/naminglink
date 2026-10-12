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
 * 들어오면 상세 열 편을, 그 밖의 언어로 들어오면 영어 요약 세 편만 봤다 — 문서가 23개 언어로
 * 번역되고 나면 그 거르기는 **일본어 이용자에게서 열 편을 빼앗는 규칙**이 된다.
 *
 * 문서를 가르는 기준은 **언어가 아니라 어느 서비스를 설명하는가**다(naminglink·inyeonlink에서
 * 먼저 그렇게 고쳤다).
 *
 *     reading   사주 풀이를 설명하는 글 — 원국 · 오행 · 용신 · 십신 · 시각
 *     today     오늘의 운세를 설명하는 글
 *     common    둘 모두에 해당 — 저장하지 않는 방식 · 유료 리포트
 *
 * 갈래는 **무엇을 먼저 보여 줄지**를 정할 뿐, 감추지 않는다. 어느 언어로 들어오든 열 편을
 * 다 읽을 수 있어야 한다.
 *
 * ## 영어 요약 세 편은 상세판에 흡수했다
 *
 * `how-it-works`·`what-we-store`·`what-the-reports-contain`은 한국어 상세판의 영어 요약이었다.
 * 상세판이 23개 언어로 나가는 지금은 **같은 내용의 짧은 판**이 따로 있을 이유가 없다. 주소는
 * `next.config.ts`가 301로 넘긴다 — 사이트맵에 실려 색인된 주소라 그냥 지우면 404다.
 */
export type GuideTrack = "reading" | "today" | "common";

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각. `doc-content`의 키는 `guide/<slug>`다. */
  slug: string;
  track: GuideTrack;
};

/** 허브에 놓이는 순서. 원국 → 오행·용신 → 십신 → 관계표 → 시각 → 오늘 → 개인정보 → 상품. */
export const guideEntries: GuideEntry[] = [
  { slug: "natal-chart", track: "reading" },
  { slug: "five-elements", track: "reading" },
  { slug: "yongsin", track: "reading" },
  { slug: "ten-gods", track: "reading" },
  { slug: "branches", track: "reading" },
  { slug: "zodiac", track: "reading" },
  { slug: "stem-gap", track: "reading" },
  { slug: "stem-eul", track: "reading" },
  { slug: "stem-byeong", track: "reading" },
  { slug: "stem-jeong", track: "reading" },
  { slug: "stem-mu", track: "reading" },
  { slug: "stem-gi", track: "reading" },
  { slug: "stem-gyeong", track: "reading" },
  { slug: "stem-sin", track: "reading" },
  { slug: "stem-im", track: "reading" },
  { slug: "stem-gye", track: "reading" },
  { slug: "branch-ja", track: "reading" },
  { slug: "branch-chuk", track: "reading" },
  { slug: "branch-in", track: "reading" },
  { slug: "branch-myo", track: "reading" },
  { slug: "branch-jin", track: "reading" },
  { slug: "branch-sa", track: "reading" },
  { slug: "branch-o", track: "reading" },
  { slug: "branch-mi", track: "reading" },
  { slug: "branch-sin", track: "reading" },
  { slug: "branch-yu", track: "reading" },
  { slug: "branch-sul", track: "reading" },
  { slug: "branch-hae", track: "reading" },
  { slug: "pillar-gap-ja", track: "reading" },
  { slug: "pillar-eul-chuk", track: "reading" },
  { slug: "pillar-byeong-in", track: "reading" },
  { slug: "pillar-jeong-myo", track: "reading" },
  { slug: "pillar-mu-jin", track: "reading" },
  { slug: "pillar-gi-sa", track: "reading" },
  { slug: "pillar-gyeong-o", track: "reading" },
  { slug: "pillar-sin-mi", track: "reading" },
  { slug: "pillar-im-sin", track: "reading" },
  { slug: "pillar-gye-yu", track: "reading" },
  { slug: "pillar-gap-sul", track: "reading" },
  { slug: "pillar-eul-hae", track: "reading" },
  { slug: "pillar-byeong-ja", track: "reading" },
  { slug: "pillar-jeong-chuk", track: "reading" },
  { slug: "pillar-mu-in", track: "reading" },
  { slug: "pillar-gi-myo", track: "reading" },
  { slug: "pillar-gyeong-jin", track: "reading" },
  { slug: "pillar-sin-sa", track: "reading" },
  { slug: "pillar-im-o", track: "reading" },
  { slug: "pillar-gye-mi", track: "reading" },
  { slug: "pillar-gap-sin", track: "reading" },
  { slug: "pillar-eul-yu", track: "reading" },
  { slug: "pillar-byeong-sul", track: "reading" },
  { slug: "pillar-jeong-hae", track: "reading" },
  { slug: "pillar-mu-ja", track: "reading" },
  { slug: "pillar-gi-chuk", track: "reading" },
  { slug: "pillar-gyeong-in", track: "reading" },
  { slug: "pillar-sin-myo", track: "reading" },
  { slug: "pillar-im-jin", track: "reading" },
  { slug: "pillar-gye-sa", track: "reading" },
  { slug: "pillar-gap-o", track: "reading" },
  { slug: "pillar-eul-mi", track: "reading" },
  { slug: "pillar-byeong-sin", track: "reading" },
  { slug: "pillar-jeong-yu", track: "reading" },
  { slug: "pillar-mu-sul", track: "reading" },
  { slug: "pillar-gi-hae", track: "reading" },
  { slug: "pillar-gyeong-ja", track: "reading" },
  { slug: "pillar-sin-chuk", track: "reading" },
  { slug: "pillar-im-in", track: "reading" },
  { slug: "pillar-gye-myo", track: "reading" },
  { slug: "pillar-gap-jin", track: "reading" },
  { slug: "pillar-eul-sa", track: "reading" },
  { slug: "pillar-byeong-o", track: "reading" },
  { slug: "pillar-jeong-mi", track: "reading" },
  { slug: "pillar-mu-sin", track: "reading" },
  { slug: "pillar-gi-yu", track: "reading" },
  { slug: "pillar-gyeong-sul", track: "reading" },
  { slug: "pillar-sin-hae", track: "reading" },
  { slug: "pillar-im-ja", track: "reading" },
  { slug: "pillar-gye-chuk", track: "reading" },
  { slug: "pillar-gap-in", track: "reading" },
  { slug: "pillar-eul-myo", track: "reading" },
  { slug: "pillar-byeong-jin", track: "reading" },
  { slug: "pillar-jeong-sa", track: "reading" },
  { slug: "pillar-mu-o", track: "reading" },
  { slug: "pillar-gi-mi", track: "reading" },
  { slug: "pillar-gyeong-sin", track: "reading" },
  { slug: "pillar-sin-yu", track: "reading" },
  { slug: "pillar-im-sul", track: "reading" },
  { slug: "pillar-gye-hae", track: "reading" },
  { slug: "true-solar-time", track: "reading" },
  { slug: "today-fortune", track: "today" },
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
 * 안내로 들어올 때 어느 화면에서 왔는지(`?from=`)를 받아, **그 서비스를 설명하는 문서를 먼저**
 * 놓는다. 모르는 값이면 갈래를 나누지 않고 선언된 순서대로 낸다.
 */
export function trackForService(slug: string | undefined): GuideTrack | null {
  switch (slug) {
    case "reading":
      return "reading";
    case "today":
      return "today";
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
