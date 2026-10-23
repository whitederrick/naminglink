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

/**
 * 허브에서 **접어 두는 사전 묶음**(2026-10-13).
 *
 * 천간 10 · 지지 12 · 일주 60이 한 목록에 섞이면 원리를 설명하는 안내 글이 묻힌다. `group`이 있는
 * 문서는 허브 아래쪽의 묶음(`<details>`)에 담기고, 없는 문서만 위쪽 카드로 놓인다. **소속은 슬러그
 * 접두가 아니라 여기에 적은 값이 정한다** — 접두로 판정하면 이름이 비슷한 새 문서가 말없이
 * 묶음에 들어간다.
 */
export type GuideGroup = "stems" | "branches" | "pillars";

/** 묶음이 허브에 놓이는 순서. */
export const guideGroups: GuideGroup[] = ["stems", "branches", "pillars"];

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각. `doc-content`의 키는 `guide/<slug>`다. */
  slug: string;
  track: GuideTrack;
  /** 있으면 허브의 접힌 사전 묶음에 담긴다. 없으면 위쪽 카드다. */
  group?: GuideGroup;
};

/** 허브에 놓이는 순서. 입문(글자) → 원국 → 오행·용신 → 십신 → 관계표 → 시각 → 오늘 → 개인정보 → 상품. */
export const guideEntries: GuideEntry[] = [
  { slug: "saju-letters", track: "reading" },
  // 실제 엔진 출력으로 그린 가상 사주 셋. 홈 카드(앞 네 편)에 들어가 크롤러가 풀이 결과가 어떤
  // 모양인지 홈에서 한 걸음으로 닿는다(2026-10-23).
  { slug: "examples", track: "reading" },
  { slug: "natal-chart", track: "reading" },
  { slug: "five-elements", track: "reading" },
  { slug: "yongsin", track: "reading" },
  { slug: "ten-gods", track: "reading" },
  { slug: "branches", track: "reading" },
  { slug: "zodiac", track: "reading" },
  { slug: "stem-gap", track: "reading", group: "stems" },
  { slug: "stem-eul", track: "reading", group: "stems" },
  { slug: "stem-byeong", track: "reading", group: "stems" },
  { slug: "stem-jeong", track: "reading", group: "stems" },
  { slug: "stem-mu", track: "reading", group: "stems" },
  { slug: "stem-gi", track: "reading", group: "stems" },
  { slug: "stem-gyeong", track: "reading", group: "stems" },
  { slug: "stem-sin", track: "reading", group: "stems" },
  { slug: "stem-im", track: "reading", group: "stems" },
  { slug: "stem-gye", track: "reading", group: "stems" },
  { slug: "branch-ja", track: "reading", group: "branches" },
  { slug: "branch-chuk", track: "reading", group: "branches" },
  { slug: "branch-in", track: "reading", group: "branches" },
  { slug: "branch-myo", track: "reading", group: "branches" },
  { slug: "branch-jin", track: "reading", group: "branches" },
  { slug: "branch-sa", track: "reading", group: "branches" },
  { slug: "branch-o", track: "reading", group: "branches" },
  { slug: "branch-mi", track: "reading", group: "branches" },
  { slug: "branch-sin", track: "reading", group: "branches" },
  { slug: "branch-yu", track: "reading", group: "branches" },
  { slug: "branch-sul", track: "reading", group: "branches" },
  { slug: "branch-hae", track: "reading", group: "branches" },
  { slug: "pillar-gap-ja", track: "reading", group: "pillars" },
  { slug: "pillar-eul-chuk", track: "reading", group: "pillars" },
  { slug: "pillar-byeong-in", track: "reading", group: "pillars" },
  { slug: "pillar-jeong-myo", track: "reading", group: "pillars" },
  { slug: "pillar-mu-jin", track: "reading", group: "pillars" },
  { slug: "pillar-gi-sa", track: "reading", group: "pillars" },
  { slug: "pillar-gyeong-o", track: "reading", group: "pillars" },
  { slug: "pillar-sin-mi", track: "reading", group: "pillars" },
  { slug: "pillar-im-sin", track: "reading", group: "pillars" },
  { slug: "pillar-gye-yu", track: "reading", group: "pillars" },
  { slug: "pillar-gap-sul", track: "reading", group: "pillars" },
  { slug: "pillar-eul-hae", track: "reading", group: "pillars" },
  { slug: "pillar-byeong-ja", track: "reading", group: "pillars" },
  { slug: "pillar-jeong-chuk", track: "reading", group: "pillars" },
  { slug: "pillar-mu-in", track: "reading", group: "pillars" },
  { slug: "pillar-gi-myo", track: "reading", group: "pillars" },
  { slug: "pillar-gyeong-jin", track: "reading", group: "pillars" },
  { slug: "pillar-sin-sa", track: "reading", group: "pillars" },
  { slug: "pillar-im-o", track: "reading", group: "pillars" },
  { slug: "pillar-gye-mi", track: "reading", group: "pillars" },
  { slug: "pillar-gap-sin", track: "reading", group: "pillars" },
  { slug: "pillar-eul-yu", track: "reading", group: "pillars" },
  { slug: "pillar-byeong-sul", track: "reading", group: "pillars" },
  { slug: "pillar-jeong-hae", track: "reading", group: "pillars" },
  { slug: "pillar-mu-ja", track: "reading", group: "pillars" },
  { slug: "pillar-gi-chuk", track: "reading", group: "pillars" },
  { slug: "pillar-gyeong-in", track: "reading", group: "pillars" },
  { slug: "pillar-sin-myo", track: "reading", group: "pillars" },
  { slug: "pillar-im-jin", track: "reading", group: "pillars" },
  { slug: "pillar-gye-sa", track: "reading", group: "pillars" },
  { slug: "pillar-gap-o", track: "reading", group: "pillars" },
  { slug: "pillar-eul-mi", track: "reading", group: "pillars" },
  { slug: "pillar-byeong-sin", track: "reading", group: "pillars" },
  { slug: "pillar-jeong-yu", track: "reading", group: "pillars" },
  { slug: "pillar-mu-sul", track: "reading", group: "pillars" },
  { slug: "pillar-gi-hae", track: "reading", group: "pillars" },
  { slug: "pillar-gyeong-ja", track: "reading", group: "pillars" },
  { slug: "pillar-sin-chuk", track: "reading", group: "pillars" },
  { slug: "pillar-im-in", track: "reading", group: "pillars" },
  { slug: "pillar-gye-myo", track: "reading", group: "pillars" },
  { slug: "pillar-gap-jin", track: "reading", group: "pillars" },
  { slug: "pillar-eul-sa", track: "reading", group: "pillars" },
  { slug: "pillar-byeong-o", track: "reading", group: "pillars" },
  { slug: "pillar-jeong-mi", track: "reading", group: "pillars" },
  { slug: "pillar-mu-sin", track: "reading", group: "pillars" },
  { slug: "pillar-gi-yu", track: "reading", group: "pillars" },
  { slug: "pillar-gyeong-sul", track: "reading", group: "pillars" },
  { slug: "pillar-sin-hae", track: "reading", group: "pillars" },
  { slug: "pillar-im-ja", track: "reading", group: "pillars" },
  { slug: "pillar-gye-chuk", track: "reading", group: "pillars" },
  { slug: "pillar-gap-in", track: "reading", group: "pillars" },
  { slug: "pillar-eul-myo", track: "reading", group: "pillars" },
  { slug: "pillar-byeong-jin", track: "reading", group: "pillars" },
  { slug: "pillar-jeong-sa", track: "reading", group: "pillars" },
  { slug: "pillar-mu-o", track: "reading", group: "pillars" },
  { slug: "pillar-gi-mi", track: "reading", group: "pillars" },
  { slug: "pillar-gyeong-sin", track: "reading", group: "pillars" },
  { slug: "pillar-sin-yu", track: "reading", group: "pillars" },
  { slug: "pillar-im-sul", track: "reading", group: "pillars" },
  { slug: "pillar-gye-hae", track: "reading", group: "pillars" },
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

/** 허브 위쪽에 카드로 놓이는 문서 — 묶음에 안 든 것. 순서는 `entries`가 정한 그대로다. */
export function cardEntries(entries: GuideEntry[]): GuideEntry[] {
  return entries.filter((entry) => !entry.group);
}

/** 한 묶음에 든 문서. 선언된 순서 그대로다. */
export function groupEntries(group: GuideGroup): GuideEntry[] {
  return guideEntries.filter((entry) => entry.group === group);
}

/** sitemap·robots가 쓰는 색인 경로. 문서를 더하면 저절로 따라온다. */
export const guidePaths = [
  "/guide",
  ...guideEntries.map((entry) => `/guide/${entry.slug}`),
];
