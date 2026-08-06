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
    slug: "how-compatibility",
    title: "사주 궁합은 무엇을 보나",
    summary:
      "네 가지 항목과 각각의 비중, 그리고 왜 그 넷인지를 밝힙니다. 출생 시각을 몰라도 계산되는 이유도 함께 다룹니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "branches",
    title: "십이지 관계 — 합·충·원진",
    summary:
      "일지 궁합과 띠 궁합이 함께 쓰는 관계표입니다. 삼합·반합·육합·충·원진이 각각 무엇이고 몇 점인지 전부 공개합니다.",
    eyebrow: "관계표",
    audience: "ko",
  },
  {
    slug: "zodiac",
    title: "띠 궁합은 왜 연지를 보나",
    summary:
      "띠는 태어난 해의 지지입니다. 달력 해가 아니라 사주 연주에서 뽑는 이유와, 띠 궁합의 비중을 30%로 둔 이유를 밝힙니다.",
    eyebrow: "띠",
    audience: "ko",
  },
  {
    slug: "ten-gods",
    title: "십신과 배우자 자리",
    summary:
      "두 사람의 일간이 서로에게 무엇인지를 십신으로 봅니다. 같은 재성이라도 정재와 편재를 가르는 이유를 다룹니다.",
    eyebrow: "십신",
    audience: "ko",
  },
  {
    slug: "yongsin",
    title: "억부용신 — 지금 필요한 기운",
    summary:
      "오행을 '둘을 합쳐 고른가'가 아니라 '상대가 내게 필요한 것을 갖고 있는가'로 봅니다. 신강·신약을 가르는 경계값도 공개합니다.",
    eyebrow: "오행",
    audience: "ko",
  },
  {
    slug: "affinity",
    title: "인연의 결 — 총점을 내지 않는 이유",
    summary:
      "한 사람만 받고 상대 자리를 비운 채 가능한 값을 전부 대입합니다. 그렇게 얻은 유형에 총점을 붙이지 않는 이유를 밝힙니다.",
    eyebrow: "우리 기준",
    audience: "ko",
  },
  {
    slug: "true-solar-time",
    title: "출생 시각을 진태양시로 고칩니다",
    summary:
      "표준시와 실제 태양의 위치는 다릅니다. 태어난 곳의 경도로 시각을 고쳐야 시주가 맞는 이유를 다룹니다.",
    eyebrow: "시각",
    audience: "ko",
  },
  {
    slug: "no-storage",
    title: "입력한 정보를 저장하지 않는 방식",
    summary:
      "생년월일이 어디에도 기록되지 않는다는 말이 기술적으로 무슨 뜻인지, 결과 링크에는 무엇이 담기는지 밝힙니다.",
    eyebrow: "개인정보",
    audience: "ko",
  },
  {
    slug: "reports",
    title: "유료 리포트에는 무엇이 들어가나",
    summary:
      "화면은 그대로 두고 PDF에만 더한 것이 무엇인지 장 단위로 밝힙니다. 값과 목차는 실제 상품 설정에서 읽어 옵니다.",
    eyebrow: "유료 상품",
    audience: "ko",
  },
  {
    slug: "how-it-works",
    title: "How we calculate compatibility",
    summary:
      "Four factors, their weights, and why we use those four. Everything here is a rule — the same two birth dates always produce the same number.",
    eyebrow: "How it works",
    audience: "global",
  },
  {
    slug: "what-we-store",
    title: "What happens to the dates you enter",
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
