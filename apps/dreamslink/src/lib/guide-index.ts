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
    slug: "symbol-dictionary",
    title: "상징 사전은 무엇을 근거로 하나",
    summary:
      "풀이가 어디서 나오는지 밝힙니다. 상징 215개를 아홉 갈래로 나눈 기준, 전해 오는 근거를 댈 수 있는 것이 24개뿐인 이유, 그리고 빈자리를 채우지 않는 까닭입니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "how-matching-works",
    title: "꿈 이야기에서 상징을 찾는 방법",
    summary:
      "자유롭게 적은 문장에서 어떻게 상징을 골라내는지, 「특별할」의 별처럼 낱말 안에 우연히 들어간 글자를 어떻게 걸러내는지 설명합니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "one-symbol-many-meanings",
    title: "같은 상징인데 뜻이 다른 이유",
    summary:
      "뱀을 품는 것과 물리는 것은 전통적으로 반대입니다. 상징 215개가 뜻 256가지를 갖는 구조와, 상황을 어떻게 알아보는지 다룹니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "good-and-bad",
    title: "길몽과 흉몽을 가리는 기준",
    summary:
      "상징마다 매겨 둔 네 가지 값과 그 분포, 좋은 쪽이 절반을 넘는 이유, 그리고 섞인 꿈을 섞인 대로 말씀드리는 까닭입니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "conception-dreams",
    title: "태몽을 가리는 방식",
    summary:
      "태몽 상징 27개를 어떻게 판정하는지, 돼지꿈이 모두 태몽이 되지 않는 이유, 그리고 임신과 성별을 판정하지 않는다는 원칙을 밝힙니다.",
    eyebrow: "태몽",
    audience: "ko",
  },
  {
    slug: "how-to-write",
    title: "꿈을 어떻게 적으면 좋은가",
    summary:
      "본 것과 한 것을 적어 주시면 잘 걸립니다. 동사 하나가 뜻을 가르는 이유와, 기분·되풀이 여부를 함께 여쭙는 까닭을 설명합니다.",
    eyebrow: "이용 방법",
    audience: "ko",
  },
  {
    slug: "categories",
    title: "아홉 갈래로 나눈 기준",
    summary:
      "사물·동물·자연부터 빛깔·수까지 아홉 갈래와 각각의 수, 그리고 감정 갈래를 두지 않은 이유입니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "not-found",
    title: "상징을 찾지 못했을 때",
    summary:
      "못 찾으면 못 찾았다고 말씀드립니다. 왜 못 찾는지, 그 화면에서 무엇을 대신 보여드리는지, 사전을 어떻게 늘려 가는지 다룹니다.",
    eyebrow: "이용 방법",
    audience: "ko",
  },
  {
    slug: "no-ai",
    title: "해몽에 인공지능을 쓰지 않는 이유",
    summary:
      "풀이를 만드는 자리에 모델을 부르는 코드가 없습니다. 사전을 모델로 넓혀 보려다 접은 실측 결과와, 그래서 얻은 것과 포기한 것입니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "what-we-do-not-do",
    title: "하지 않기로 한 것들",
    summary:
      "복권 번호·꿈일기·임신 판정·액막이를 하지 않습니다. 각각을 왜 하지 않기로 했는지 밝힙니다.",
    eyebrow: "서비스 원칙",
    audience: "ko",
  },
  {
    slug: "reports",
    title: "꿈을 간직하는 두 가지 방법",
    summary:
      "풀이 자체는 값을 받지 않습니다. 파는 두 가지가 무엇이고 무엇이 담기는지, 그리고 그것이 더 나은 풀이가 아닌 이유를 설명합니다.",
    eyebrow: "유료 상품",
    audience: "ko",
  },
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
