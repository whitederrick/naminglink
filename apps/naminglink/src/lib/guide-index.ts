/**
 * 안내 문서 목록. **허브와 각 문서가 같은 값을 보게 하려고 한곳에 모아 둔다.**
 *
 * 처음에는 한 페이지에 전부 넣었는데 모바일에서 6,053px(약 15화면)이 나왔다. 주로 휴대폰에서
 * 보는 글이라 내용별로 갈랐다 — 허브에서 제목을 보고 궁금한 것만 들어가는 편이 낫다.
 *
 * 갈랐다고 얇아지지는 않았다. 각 문서가 2~3화면 분량이라 "대량 생성 콘텐츠"로 보이지 않는다.
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
   * - `ko`   한국어로 접속했을 때만. 인명용 한자처럼 한국 제도를 다루는 글이다.
   * - `global` 다른 언어로 접속했을 때만. 영어로 쓴다.
   *
   * **한국어판은 전부 만든다**(사용자 결정). 글로벌 대상 서비스의 근거도 한국어로 한 벌 두고,
   * 그 위에 영어판을 따로 얹는다 — 글로벌 서비스를 표방하면서 안내가 한국어뿐이면 앞뒤가
   * 맞지 않기 때문이다.
   */
  audience: GuideAudience;
};

export const guideEntries: GuideEntry[] = [
  {
    slug: "hanja",
    title: "인명용 한자 전체 목록",
    summary:
      "출생신고에 쓸 수 있는 한자를 초성별로 정리했습니다. 글자마다 이름에 쓸 때의 지정 독음과 뜻을 함께 볼 수 있습니다.",
    eyebrow: "목록",
    audience: "ko",
  },
  {
    slug: "hanja-basics",
    title: "인명용 한자란 무엇인가",
    summary:
      "아이 이름에 쓸 수 있는 한자는 대법원이 표로 정해 두었습니다. 그 표가 무엇이고 왜 정해져 있는지 정리했습니다.",
    eyebrow: "제도",
    audience: "ko",
  },
  {
    slug: "reading",
    title: "지정 독음과 성씨",
    summary:
      "같은 한자라도 이름에 쓸 때 읽는 법이 정해져 있습니다. 성(姓)이 이 표의 제한을 받지 않는 이유도 함께 다룹니다.",
    eyebrow: "읽기",
    audience: "ko",
  },
  {
    slug: "avoid",
    title: "기피 한자는 법이 아니라 관습입니다",
    summary:
      "뜻이 지나치면 오히려 좋지 않다고 보아 온 글자들이 있습니다. 쓸 수 있는 글자이고, 뺄지 넣을지는 직접 고르실 수 있습니다.",
    eyebrow: "관습",
    audience: "ko",
  },
  {
    slug: "what-we-dont-use",
    title: "이름에 점수를 매기지 않습니다",
    summary:
      "총운·수리 점수를 내지 않는 네 가지 이유와, 획수와 오행을 각각 어떻게 다루는지 밝힙니다.",
    eyebrow: "우리 기준",
    audience: "ko",
  },
  {
    slug: "how-hanja-meaning",
    title: "한자 의미 매칭은 무엇을 근거로 하나",
    summary:
      "정한 한글 이름의 소리를 그대로 두고, 그 소리로 읽도록 지정된 인명용 한자 안에서 뜻이 어울리는 조합을 찾는 순서를 밝힙니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "how-korean-to-global",
    title: "글로벌 이름 변환은 무엇을 근거로 하나",
    summary:
      "다섯 전략으로 후보를 고르고, 언어마다 다른 문자 체계 규칙을 지킵니다. 선정과 서술을 나눈 이유도 함께 밝힙니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "how-global-to-korean",
    title: "한국 이름 만들기는 무엇을 근거로 하나",
    summary:
      "실제로 쓰이는 한국 성씨와 부르기 쉬운 소리를 기준으로 이름을 제안합니다. 한국어판 안내입니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "how-hangul-transliteration",
    title: "한글 발음 표기는 무엇을 근거로 하나",
    summary:
      "이름을 한국어 소리에 맞춰 한글로 적습니다. 뜻을 옮기는 것이 아니라 소리를 옮긴다는 점이 핵심입니다. 한국어판 안내입니다.",
    eyebrow: "서비스 근거",
    audience: "ko",
  },
  {
    slug: "korean-name-basis",
    title: "How we build your Korean name",
    summary:
      "We start from Korean surnames people actually use, then look for given names that are easy to call and write in Korea.",
    eyebrow: "How it works",
    audience: "global",
  },
  {
    slug: "hangul-spelling-basis",
    title: "How we write your name in Hangul",
    summary:
      "We carry the sound of your name into Hangul — not its meaning. Here is what we follow and what we deliberately avoid.",
    eyebrow: "How it works",
    audience: "global",
  },
];

export function findGuideEntry(slug: string) {
  return guideEntries.find((entry) => entry.slug === slug);
}

/** 이 로케일에서 보여줄 안내들. 한국어면 한국어 문서, 그 밖의 언어면 영어 문서. */
export function guideEntriesFor(locale: string) {
  const audience: GuideAudience = locale === "ko" ? "ko" : "global";
  return guideEntries.filter((entry) => entry.audience === audience);
}
