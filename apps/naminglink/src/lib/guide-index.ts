/**
 * 안내 문서 목록. **허브와 각 문서가 같은 값을 보게 하려고 한곳에 모아 둔다.**
 *
 * 처음에는 한 페이지에 전부 넣었는데 모바일에서 6,053px(약 15화면)이 나왔다. 주로 휴대폰에서
 * 보는 글이라 내용별로 갈랐다 — 허브에서 제목을 보고 궁금한 것만 들어가는 편이 낫다.
 *
 * 갈랐다고 얇아지지는 않았다. 각 문서가 2~3화면 분량이라 "대량 생성 콘텐츠"로 보이지 않는다.
 * 앞으로 서비스별 근거(넷)도 이 목록에 붙는다.
 */
export type GuideEntry = {
  /** `/guide` 아래의 경로 조각 */
  slug: string;
  title: string;
  /** 허브 카드와 문서 머리글에 함께 쓴다. 두 곳의 말이 달라지지 않게 한 곳에서 관리한다. */
  summary: string;
  /** 허브 카드에 붙는 짧은 꼬리표 */
  eyebrow: string;
};

export const guideEntries: GuideEntry[] = [
  {
    slug: "hanja",
    title: "인명용 한자 전체 목록",
    summary:
      "출생신고에 쓸 수 있는 한자를 초성별로 정리했습니다. 글자마다 이름에 쓸 때의 지정 독음과 뜻을 함께 볼 수 있습니다.",
    eyebrow: "목록",
  },
  {
    slug: "hanja-basics",
    title: "인명용 한자란 무엇인가",
    summary:
      "아이 이름에 쓸 수 있는 한자는 대법원이 표로 정해 두었습니다. 그 표가 무엇이고 왜 정해져 있는지 정리했습니다.",
    eyebrow: "제도",
  },
  {
    slug: "reading",
    title: "지정 독음과 성씨",
    summary:
      "같은 한자라도 이름에 쓸 때 읽는 법이 정해져 있습니다. 성(姓)이 이 표의 제한을 받지 않는 이유도 함께 다룹니다.",
    eyebrow: "읽기",
  },
  {
    slug: "avoid",
    title: "기피 한자는 법이 아니라 관습입니다",
    summary:
      "뜻이 지나치면 오히려 좋지 않다고 보아 온 글자들이 있습니다. 쓸 수 있는 글자이고, 뺄지 넣을지는 직접 고르실 수 있습니다.",
    eyebrow: "관습",
  },
  {
    slug: "what-we-dont-use",
    title: "이름에 점수를 매기지 않습니다",
    summary:
      "총운·수리 점수를 내지 않는 네 가지 이유와, 획수와 오행을 각각 어떻게 다루는지 밝힙니다.",
    eyebrow: "우리 기준",
  },
];

export function findGuideEntry(slug: string) {
  return guideEntries.find((entry) => entry.slug === slug);
}
