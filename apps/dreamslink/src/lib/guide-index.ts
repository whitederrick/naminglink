/**
 * 안내 문서 목록. **허브와 각 문서가 같은 값을 보게 하려고 한곳에 모아 둔다.**
 *
 * naminglink `lib/guide-index.ts`와 같은 구조다. 한 페이지에 다 넣지 않는 이유도 같다 —
 * 주로 휴대폰에서 보는 글이라 한 화면에 15화면 분량을 쌓으면 아무도 끝까지 읽지 않는다.
 * 대신 문서 하나가 2~3화면은 되게 두어 "대량 생성 콘텐츠"로 보이지 않게 한다.
 *
 * **여기 실린 내용은 전부 엔진 코드에 있는 것이다**(`lib/engines/`). 지지 관계표·항목 비중·
 * 점수·경계값은 손으로 옮겨 적지 않고 그 모듈에서 읽어 그린다. 규칙을 고치면 글도 함께 맞는다.
 */
export type GuideAudience = "ko" | "global";

export type GuideEntry = {
  /** `/guide` 아래의 경로 조각 */
  slug: string;
  title: string;
  /** 허브 카드와 문서 머리글에 함께 쓴다. 두 곳의 말이 달라지지 않게 한 곳에서 관리한다. */
  summary: string;
  /** 허브 카드에 붙는 짧은 꼬리표 */
  eyebrow: string;
  /**
   * 누구에게 보일 것인가.
   *
   * - `ko`     한국어로 접속했을 때만. 명리 용어를 그대로 쓰는 글이다.
   * - `global` 다른 언어로 접속했을 때만. 영어로 쓴다.
   *
   * 한국어판을 먼저 다 만들고 그 위에 영어 요약을 얹는다. naminglink와 같은 방침이다 —
   * 글로벌 서비스를 표방하면서 안내가 한국어뿐이면 앞뒤가 맞지 않는다.
   */
  audience: GuideAudience;
};

export const guideEntries: GuideEntry[] = [
  {
    slug: "no-storage",
    title: "적어 주신 꿈을 저장하지 않는 방식",
    summary:
      "꿈 이야기가 어디에도 기록되지 않는다는 말이 기술적으로 무슨 뜻인지, 결과 링크에는 무엇이 담기는지 밝힙니다.",
    eyebrow: "개인정보",
    audience: "ko",
  },
  {
    slug: "what-we-store",
    title: "What happens to the dream you write",
    summary:
      "Nothing you type is written down. Here is what that means technically, and what a result link actually carries.",
    eyebrow: "Privacy",
    audience: "global",
  },
  {
    slug: "what-the-reports-contain",
    title: "What is in the paid reports",
    summary:
      "The screen stays as it is; the PDF adds to it. Here is what each page carries, chapter by chapter. Prices and contents are read from the live product settings.",
    eyebrow: "Paid products",
    audience: "global",
  },
];

export function guideEntriesFor(locale: string): GuideEntry[] {
  const audience: GuideAudience = locale === "ko" ? "ko" : "global";
  return guideEntries.filter((entry) => entry.audience === audience);
}

export function findGuideEntry(slug: string): GuideEntry | undefined {
  return guideEntries.find((entry) => entry.slug === slug);
}

/** sitemap·robots가 쓰는 색인 경로. 문서를 더하면 저절로 따라온다. */
export const guidePaths = [
  "/guide",
  ...guideEntries.map((entry) => `/guide/${entry.slug}`),
];
