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
 * 들어오면 상세 아홉 편을, 그 밖의 언어로 들어오면 영어 요약 세 편만 봤다 — 문서가 23개
 * 언어로 번역되고 나면 그 거르기는 **일본어 이용자에게서 아홉 편을 빼앗는 규칙**이 된다.
 *
 * 문서를 가르는 기준은 **언어가 아니라 어느 서비스를 설명하는가**다(naminglink에서 먼저 그렇게
 * 고쳤다).
 *
 *     gunghap    사주 궁합을 설명하는 글 — 항목과 비중 · 관계표 · 십신 · 용신 · 시각
 *     affinity   인연의 결을 설명하는 글
 *     common     둘 모두에 해당 — 저장하지 않는 방식 · 유료 리포트
 *
 * 갈래는 **무엇을 먼저 보여 줄지**를 정할 뿐, 감추지 않는다. 어느 언어로 들어오든 아홉 편을
 * 다 읽을 수 있어야 한다.
 *
 * ## 영어 요약 세 편은 상세판에 흡수했다
 *
 * `how-it-works`·`what-we-store`·`what-the-reports-contain`은 한국어 상세판의 영어 요약이었다.
 * 상세판이 23개 언어로 나가는 지금은 **같은 내용의 짧은 판**이 따로 있을 이유가 없다. 주소는
 * `next.config.ts`가 301로 넘긴다 — 사이트맵에 실려 색인된 주소라 그냥 지우면 404다.
 */
export type GuideTrack = "gunghap" | "affinity" | "common";

/**
 * 허브에서 **접어 두는 사전 묶음**(2026-10-13).
 *
 * 띠별 12 · 띠 쌍 38이 한 목록에 섞이면 원리를 설명하는 안내 글이 묻힌다. `group`이 있는 문서는
 * 허브 아래쪽의 묶음(`<details>`)에 담기고, 없는 문서만 위쪽 카드로 놓인다. **소속은 슬러그 접두가
 * 아니라 여기에 적은 값이 정한다** — 접두로 판정하면 이름이 비슷한 새 문서가 말없이 묶음에 들어간다.
 */
export type GuideGroup = "animals" | "pairs";

/** 묶음이 허브에 놓이는 순서. */
export const guideGroups: GuideGroup[] = ["animals", "pairs"];

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각. `doc-content`의 키는 `guide/<slug>`다. */
  slug: string;
  track: GuideTrack;
  /** 있으면 허브의 접힌 사전 묶음에 담긴다. 없으면 위쪽 카드다. */
  group?: GuideGroup;
};

/** 허브에 놓이는 순서. 서비스 근거 → 관계표 → 세부 규칙 → 우리 기준 → 개인정보 → 상품. */
export const guideEntries: GuideEntry[] = [
  { slug: "how-compatibility", track: "gunghap" },
  { slug: "branches", track: "gunghap" },
  { slug: "zodiac", track: "gunghap" },
  { slug: "zodiac-rat", track: "gunghap", group: "animals" },
  { slug: "zodiac-ox", track: "gunghap", group: "animals" },
  { slug: "zodiac-tiger", track: "gunghap", group: "animals" },
  { slug: "zodiac-rabbit", track: "gunghap", group: "animals" },
  { slug: "zodiac-dragon", track: "gunghap", group: "animals" },
  { slug: "zodiac-snake", track: "gunghap", group: "animals" },
  { slug: "zodiac-horse", track: "gunghap", group: "animals" },
  { slug: "zodiac-goat", track: "gunghap", group: "animals" },
  { slug: "zodiac-monkey", track: "gunghap", group: "animals" },
  { slug: "zodiac-rooster", track: "gunghap", group: "animals" },
  { slug: "zodiac-dog", track: "gunghap", group: "animals" },
  { slug: "zodiac-pig", track: "gunghap", group: "animals" },
  { slug: "zodiac-pair-rat-rat", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rat-ox", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rat-dragon", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rat-horse", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rat-goat", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rat-monkey", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-ox-ox", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-ox-horse", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-ox-goat", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-ox-rooster", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-tiger-tiger", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-tiger-horse", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-tiger-monkey", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-tiger-rooster", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-tiger-pig", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rabbit-rabbit", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rabbit-goat", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rabbit-monkey", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rabbit-rooster", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rabbit-dog", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rabbit-pig", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-dragon-dragon", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-dragon-rooster", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-dragon-dog", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-dragon-pig", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-snake-snake", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-snake-monkey", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-snake-rooster", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-snake-dog", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-snake-pig", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-horse-horse", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-horse-goat", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-horse-dog", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-goat-goat", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-monkey-monkey", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-rooster-rooster", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-dog-dog", track: "gunghap", group: "pairs" },
  { slug: "zodiac-pair-pig-pig", track: "gunghap", group: "pairs" },
  { slug: "ten-gods", track: "gunghap" },
  { slug: "yongsin", track: "gunghap" },
  { slug: "true-solar-time", track: "gunghap" },
  { slug: "affinity", track: "affinity" },
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
    case "compatibility":
      return "gunghap";
    case "affinity":
      return "affinity";
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
